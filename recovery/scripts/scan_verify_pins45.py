#!/usr/bin/env python3
"""Strict-verify slice 45 page-parent / unique-lit / unique-importer pins."""
from pathlib import Path
from collections import defaultdict
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
SRC = ROOT / "src"
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN_PY = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY))
known_keys = set(pairs)
known_mods = set(pairs.values())
mod_to_names = defaultdict(list)
for k, v in pairs.items():
    mod_to_names[v].append(k)

t_pat = re.compile(r"""t\(\s*['"]([^'"]+)['"]""")
str_pat = re.compile(r"""['"]([A-Za-z0-9_./:=${}-]{6,})['"]""")
imp_unpacked = re.compile(r"""(?:from|require\()\s*['"]\./(module-\d+\.js)""")
imp_orig = re.compile(r"""(?:from|require\()\s*['"]([^'"]+)['"]""")

SKIP_MODS = {
    "3225", "3567", "3511", "3513", "3251", "833", "950", "882", "807",
    "1635", "5774", "1636", "1639", "1633", "1634", "1337", "1272", "1389",
    "2853", "1183", "1764", "1111", "1053", "1112", "4656", "4657",
    "1134", "1072", "3866", "3892",
}


def orig_path_for(key):
    stem = key[:-3] if key.endswith(".js") else key
    for ext in (".js", ".jsx", "/index.js", "/index.jsx"):
        p = SRC / f"{stem}{ext}"
        if p.exists() and p.is_file():
            return p
    return None


def is_css(mod):
    text = (UNPACKED / mod).read_text(encoding="utf-8", errors="ignore")
    head = text.split("\n", 1)[0]
    return text.lstrip().startswith("export default {") and "import " not in head


def mid_of(mod):
    return re.search(r"\d+", mod).group()


print("=== indexing ===", flush=True)
unpacked = {}
t_index = defaultdict(set)
str_index = defaultdict(set)
importers = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    unpacked[path.name] = text
    for k in t_pat.findall(text):
        t_index[k].add(path.name)
    for s in str_pat.findall(text):
        str_index[s].add(path.name)
    for m in imp_unpacked.findall(text):
        importers[m].append(path.name)

orig_t = defaultdict(list)
orig_str = defaultdict(list)


def norm_key(rel_posix: str) -> str:
    rel = rel_posix.replace("\\", "/")
    if rel.endswith("/index.jsx"):
        return rel[: -len("/index.jsx")] + ".js"
    if rel.endswith("/index.js"):
        return rel[: -len("/index.js")] + ".js"
    if rel.endswith(".jsx"):
        return rel[:-4] + ".js"
    return rel


def resolve_alias_import(importer_rel, raw):
    if raw.startswith("."):
        base = Path(importer_rel).parent
        joined = (base / raw).as_posix()
        parts = []
        for part in joined.split("/"):
            if part in (".", ""):
                continue
            if part == "..":
                if parts:
                    parts.pop()
                continue
            parts.append(part)
        rel = "/".join(parts)
        for ext in ("", ".js", ".jsx", "/index.js", "/index.jsx"):
            cand = rel + ext
            p = SRC / cand
            if p.exists() and p.is_file():
                return norm_key(p.relative_to(SRC).as_posix())
        return norm_key(rel + ".js") if not rel.endswith(".js") else rel
    aliases = {
        "core/": "core/",
        "components/": "components/",
        "utils/": "utils/",
        "stores/": "stores/",
        "hocs/": "hocs/",
        "actions/": "actions/",
        "configs/": "configs/",
        "pages/": "pages/",
        "apps/": "pages/apps/",
        "projects/": "pages/projects/",
        "clusters/": "pages/clusters/",
        "workspaces/": "pages/workspaces/",
        "access/": "pages/access/",
        "devops/": "pages/devops/",
        "fedprojects/": "pages/fedprojects/",
        "settings/": "pages/settings/",
        "console/": "pages/console/",
    }
    for prefix, mapped in aliases.items():
        if raw == prefix[:-1] or raw.startswith(prefix):
            rest = raw[len(prefix):] if raw.startswith(prefix) else ""
            rel = mapped + rest
            for ext in ("", ".js", ".jsx", "/index.js", "/index.jsx"):
                cand = rel + ext
                p = SRC / cand
                if p.exists() and p.is_file():
                    return norm_key(p.relative_to(SRC).as_posix())
            return norm_key(rel + ".js") if not rel.endswith(".js") else rel
    return None


resolved_imp_targets = defaultdict(list)
orig_local_imps = defaultdict(list)
for p in SRC.rglob("*"):
    if not p.is_file() or p.suffix not in {".js", ".jsx"}:
        continue
    if ".test." in p.name:
        continue
    rel = p.relative_to(SRC).as_posix()
    pkey = norm_key(rel)
    text = p.read_text(encoding="utf-8", errors="ignore")
    for k in t_pat.findall(text):
        orig_t[k].append(pkey)
    for s in str_pat.findall(text):
        orig_str[s].append(pkey)
    for raw in imp_orig.findall(text):
        resolved = resolve_alias_import(rel, raw)
        if resolved:
            resolved_imp_targets[resolved].append((pkey, raw))
            if raw.startswith("."):
                orig_local_imps[pkey].append(resolved)


def dump_mod(mod, n=14):
    if not mod or mod not in unpacked:
        print("    MODULE_MISSING", mod)
        return
    text = unpacked[mod]
    mid = mid_of(mod)
    print("    css", is_css(mod), "skip", mid in SKIP_MODS, "named", mod_to_names.get(mod, []))
    print("    t", list(dict.fromkeys(t_pat.findall(text)))[:n])
    print("    importers", [(i, mod_to_names.get(i, ["?"])) for i in sorted(set(importers[mod]))][:8])
    kids = list(dict.fromkeys(imp_unpacked.findall(text)))[:14]
    print("    kids", [(k, mod_to_names.get(k, ["?"])) for k in kids])
    for needle in (
        "getIndexRoute", "resource-status", "getWatchUrl", "federatedprojects",
        "CLUSTER_NODE", "RUNNING_STATUS", "CONFIGMAP", "SECRET", "DEPLOYMENT",
        "OpenSearch", "width-full", "apps-title", "diffSettings", "REPLICA_COUNT_LOW",
        "cursor-guide", "connections", "PROJECT_NAME", "changeStatus", "RESTART",
        "monitor-cluster", "monitor-resource", "volume-snapshots", "customresources",
        "log-collections", "edgenodes", "SnapshotContent", "VolumeSnapshot",
        "Configuration", "SecretDetail", "ConfigDetail",
    ):
        i = text.find(needle)
        if i >= 0:
            print("   ", needle, repr(text[i:i + 110].replace("\n", " ")))


def unique_unpacked(needle, index):
    files = index.get(needle, set())
    unnamed = [f for f in files if f not in known_mods and mid_of(f) not in SKIP_MODS]
    named = [(f, mod_to_names.get(f, [])) for f in files if f in known_mods]
    return files, unnamed, named


def check_unique_lit(key, mod, needle, kind="str"):
    print(f"\n=== LIT {key} -> {mod} needle={needle!r} ===")
    op = orig_path_for(key)
    print("  orig_exists", bool(op), op)
    dump_mod(mod)
    if not op or not mod or mod not in unpacked or is_css(mod):
        print("  VERDICT REJECT missing/css")
        return False
    if mid_of(mod) in SKIP_MODS:
        print("  VERDICT REJECT skip_mod")
        return False
    index = t_index if kind == "t" else str_index
    orig_index = orig_t if kind == "t" else orig_str
    ofiles = orig_index.get(needle, [])
    files, unnamed, named = unique_unpacked(needle, index)
    print("  orig_hits", sorted(set(ofiles)))
    print("  unpacked", sorted(files)[:8], "unnamed", unnamed, "named", named[:4])
    in_mod = needle in unpacked[mod]
    in_orig = needle in op.read_text(encoding="utf-8", errors="ignore")
    ok_orig = sorted(set(ofiles)) == [key]
    unique_unp = files == {mod} or (unnamed == [mod] and not [f for f in files if f in known_mods])
    already = mod in known_mods
    ok = in_mod and in_orig and ok_orig and unique_unp and not already
    print("  in_mod", in_mod, "in_orig", in_orig, "ok_orig", ok_orig, "unique_unp", unique_unp, "already", already)
    print("  VERDICT", "NEW" if ok else "REJECT")
    return ok


def check_alias(key, mod, needle, kind="str"):
    print(f"\n=== ALIAS {key} -> {mod} needle={needle!r} already={mod_to_names.get(mod, [])} ===")
    op = orig_path_for(key)
    print("  orig_exists", bool(op), op)
    dump_mod(mod)
    if not op or mod not in unpacked or is_css(mod):
        print("  VERDICT REJECT")
        return False
    index = t_index if kind == "t" else str_index
    orig_index = orig_t if kind == "t" else orig_str
    ofiles = orig_index.get(needle, [])
    files, unnamed, named = unique_unpacked(needle, index)
    print("  orig_hits", sorted(set(ofiles)))
    print("  unpacked", sorted(files)[:8], "unnamed", unnamed, "named", named[:4])
    in_mod = needle in unpacked.get(mod, "")
    in_orig = needle in op.read_text(encoding="utf-8", errors="ignore")
    ok_orig = sorted(set(ofiles)) == [key]
    unique_named = files == {mod} and mod in known_mods
    ok = in_mod and in_orig and ok_orig and unique_named and key not in known_keys
    print("  unique_named", unique_named, "in_mod", in_mod, "in_orig", in_orig, "ok_orig", ok_orig)
    print("  VERDICT", "ALIAS" if ok else "REJECT")
    return ok


def check_imp(key, mod, parent_key):
    print(f"\n=== IMP {key} -> {mod} parent={parent_key} ===")
    op = orig_path_for(key)
    print("  orig_exists", bool(op), op)
    parent_mod = pairs.get(parent_key)
    print("  parent_mod", parent_mod, "parent_known", parent_key in known_keys, "parent_names", mod_to_names.get(parent_mod or "", []))
    dump_mod(mod)
    if not op or not mod or mod not in unpacked or is_css(mod):
        print("  VERDICT REJECT missing/css")
        return False
    if mid_of(mod) in SKIP_MODS or mod in known_mods:
        print("  VERDICT REJECT skip/already")
        return False
    up = sorted(set(importers[mod]))
    unique_named_parent = parent_mod is not None and up == [parent_mod] and parent_mod in known_mods
    oimps = resolved_imp_targets.get(key, [])
    unique_orig_keys = sorted(set(k for k, _r in oimps))
    print("  unique_named_parent", unique_named_parent, "up", [(i, mod_to_names.get(i, ["?"])) for i in up])
    print("  orig_importers", oimps)
    parent_unpacked_unique_kids = []
    parent_text = unpacked.get(parent_mod, "") if parent_mod else ""
    for m in list(dict.fromkeys(imp_unpacked.findall(parent_text))):
        if m in known_mods or is_css(m):
            continue
        mid2 = mid_of(m)
        if mid2 in SKIP_MODS or int(mid2) < 70:
            continue
        if sorted(set(importers[m])) == [parent_mod]:
            parent_unpacked_unique_kids.append(m)
    locals_ = [c for c in orig_local_imps.get(parent_key, []) if not c.endswith(".scss") and not c.endswith(".css")]
    unnamed_local = [c for c in locals_ if c not in known_keys]
    print("  parent_unique_kids", parent_unpacked_unique_kids)
    print("  parent_js_locals", locals_, "unnamed_local", unnamed_local)
    only_unique_kid = parent_unpacked_unique_kids == [mod]
    unique_orig = unique_orig_keys == [parent_key]
    orig_only_match = key in unnamed_local and (len(unnamed_local) == 1 or only_unique_kid and unique_orig)
    ok = unique_named_parent and unique_orig and only_unique_kid and key in unnamed_local and len(unnamed_local) == 1
    print(
        "  VERDICT",
        "NEW" if ok else "REJECT",
        "unique_orig", unique_orig,
        "only_unique_kid", only_unique_kid,
        "orig_only_match", orig_only_match,
        "unnamed_local", unnamed_local,
    )
    return ok


def check_parent_alias(orig_key, named_key, child_key, child_mod):
    print(f"\n=== PARENT_ALIAS {orig_key} == {named_key} via unique child {child_key}->{child_mod} ===")
    parent_mod = pairs.get(named_key)
    print("  named_parent_mod", parent_mod, "already", mod_to_names.get(parent_mod or "", []))
    op = orig_path_for(orig_key)
    print("  orig_exists", bool(op), op)
    if not parent_mod or not op or orig_key in known_keys:
        print("  VERDICT REJECT")
        return False
    dump_mod(parent_mod)
    dump_mod(child_mod)
    up = sorted(set(importers[child_mod]))
    unique_kid = up == [parent_mod] and child_mod not in known_mods and not is_css(child_mod)
    oimps = resolved_imp_targets.get(child_key, [])
    unique_orig = sorted(set(k for k, _r in oimps)) == [orig_key]
    locals_ = [c for c in orig_local_imps.get(orig_key, []) if not str(c).endswith((".scss", ".css"))]
    unnamed_local = [c for c in locals_ if c not in known_keys]
    print("  unique_kid", unique_kid, "up", up)
    print("  unique_orig_child_imp", unique_orig, "oimps", oimps)
    print("  unnamed_local", unnamed_local)
    ok = unique_kid and unique_orig and unnamed_local == [child_key]
    print("  VERDICT", "ALIAS" if ok else "REJECT")
    return ok


accepted = []

# unique path / unique lit page parents
LIT = [
    ("pages/projects/containers/Base/Detail.js", "module-806.js", "getWatchUrl", "str"),
    ("pages/devops/containers/CD/detail/routes.js", "module-5120.js",
     "/:workspace/clusters/:cluster/devops/:devops/cd/:cd", "str"),
    ("pages/workspaces/containers/Roles/Detail/routes.js", "module-4401.js",
     "/workspaces/:workspace/roles/:name", "str"),
    ("pages/fedprojects/containers/Applications/Detail/routes.js", "module-4977.js",
     "/:workspace/federatedprojects/:namespace/applications/:name", "str"),
    ("pages/clusters/containers/Roles/Detail/routes.js", "module-4003.js",
     "/clusters/:cluster/roles/:name", "str"),
    ("pages/clusters/containers/EdgeNodes/Detail/routes.js", "module-3960.js",
     "/clusters/:cluster/edgenodes/:node", "str"),
    ("pages/clusters/containers/Projects/Detail/routes.js", "module-3971.js",
     "/clusters/:cluster/projects/:namespace", "str"),
    ("pages/clusters/containers/LogCollections/Detail/routes.js", "module-4008.js",
     "/clusters/:cluster/log-collections/:component/:name", "str"),
    ("pages/clusters/containers/Nodes/Detail/routes.js", "module-3948.js",
     "/clusters/:cluster/nodes/:node", "str"),
    ("pages/clusters/containers/Storage/Volumes/routes.js", "module-3720.js",
     "/clusters/:cluster/volumes", "str"),
    ("pages/clusters/containers/Storage/VolumeSnapshots/routes.js", "module-3713.js",
     "/clusters/:cluster/volume-snapshots", "str"),
    ("pages/clusters/containers/Monitor/Resource/routes.js", "module-3784.js",
     "/clusters/:cluster/monitor-resource", "str"),
    ("pages/clusters/containers/Monitor/Cluster/routes.js", "module-3752.js",
     "/clusters/:cluster/monitor-cluster", "str"),
    ("pages/console/components/Cards/Workspace.js", "module-1979.js", "width-full", "str"),
    ("pages/projects/containers/GrayRelease/Jobs/Item.js", "module-4713.js", "REPLICA_COUNT_LOW", "str"),
    ("pages/projects/containers/Services/Topology/Detail/Connections.js", "module-4609.js", "connections", "str"),
    ("pages/projects/components/Modals/TracingDetail/SpanGraph/TimeRange.js", "module-4784.js", "cursor-guide", "str"),
    ("pages/apps/components/AppList.js", "module-1615.js", "apps-title", "str"),
    ("pages/fedprojects/containers/BaseInfo/ProjectInfo.js", "module-4959.js", "PROJECT_NAME", "str"),
    ("pages/fedprojects/components/VolumeSetting/config.js", "module-3564.js", "diffSettings", "str"),
    ("pages/clusters/actions/cluster.js", "module-3651.js", "_originData.spec.placement.clusters", "str"),
    ("components/Cards/Containers/Item.js", "module-1219.js", "RESTART", "t"),
    ("components/Graph/Detail.js", "module-4759.js", "ks-service-detail", "str"),
    ("components/Graph/App.js", "module-4755.js", "service.length", "str"),
    ("components/Tables/Visible.js", "module-1126.js", "dataset.itemIndex", "str"),
    ("components/Tables/Ranking.js", "module-987.js", "props.store.sort_metric", "str"),
]

print("\n=== UNIQUE LIT ===")
for key, mod, needle, kind in LIT:
    if check_unique_lit(key, mod, needle, kind):
        accepted.append((key, mod, "lit:"+needle))

# unique importer of uniquely named SHORT parent, then alias original container parent
PARENT_ALIAS = [
    ("pages/fedprojects/containers/Deployments/Detail.js",
     "pages/fedprojects/deployments/Detail.js",
     "pages/fedprojects/containers/Deployments/Detail/routes.js", "module-4995.js"),
    ("pages/fedprojects/containers/StatefulSets/Detail.js",
     "pages/fedprojects/statefulsets/Detail.js",
     "pages/fedprojects/containers/StatefulSets/Detail/routes.js", "module-5002.js"),
    ("pages/fedprojects/containers/Services/Detail.js",
     "pages/fedprojects/services/Detail.js",
     "pages/fedprojects/containers/Services/Detail/routes.js", "module-5007.js"),
    ("pages/fedprojects/containers/Routes/Detail.js",
     "pages/fedprojects/ingresses/Detail.js",
     "pages/fedprojects/containers/Routes/Detail/routes.js", "module-5017.js"),
    ("pages/fedprojects/containers/Secrets/Detail.js",
     "pages/fedprojects/secrets/Detail.js",
     "pages/fedprojects/containers/Secrets/Detail/routes.js", "module-5034.js"),
    ("pages/fedprojects/containers/ConfigMaps/Detail.js",
     "pages/fedprojects/configmaps/Detail.js",
     "pages/fedprojects/containers/ConfigMaps/Detail/routes.js", "module-5038.js"),
    ("pages/fedprojects/containers/Applications/Detail.js",
     "pages/fedprojects/applications/Detail.js",
     "pages/fedprojects/containers/Applications/Detail/routes.js", "module-4977.js"),
    ("pages/clusters/containers/Nodes/Detail.js",
     "pages/clusters/nodes/Detail.js",
     "pages/clusters/containers/Nodes/Detail/routes.js", "module-3948.js"),
    ("pages/clusters/containers/EdgeNodes/Detail.js",
     "pages/clusters/edgenodes/Detail.js",
     "pages/clusters/containers/EdgeNodes/Detail/routes.js", "module-3960.js"),
    ("pages/clusters/containers/CustomResources/Detail.js",
     "pages/clusters/customresources/Detail.js",
     "pages/clusters/containers/CustomResources/Detail/routes.js", "module-3999.js"),
    ("pages/clusters/containers/Roles/Detail.js",
     "pages/clusters/roles/Detail.js",
     "pages/clusters/containers/Roles/Detail/routes.js", "module-4003.js"),
    ("pages/clusters/containers/LogCollections/Detail.js",
     "pages/clusters/log-collections/Detail.js",
     "pages/clusters/containers/LogCollections/Detail/routes.js", "module-4008.js"),
    ("pages/clusters/containers/Projects/Detail.js",
     "pages/clusters/projects/Detail.js",
     "pages/clusters/containers/Projects/Detail/routes.js", "module-3971.js"),
    ("pages/clusters/containers/Storage/VolumeSnapshotClasses/Detail.js",
     "pages/clusters/volume-snapshot-classes/Detail.js",
     "pages/clusters/containers/Storage/VolumeSnapshotClasses/Detail/routes.js", "module-3938.js"),
    ("pages/clusters/containers/Storage/VolumeSnapshots/SnapshotContent/Detail.js",
     "pages/clusters/volume-snapshot-content/Detail.js",
     "pages/clusters/containers/Storage/VolumeSnapshots/SnapshotContent/Detail/routes.js", "module-3934.js"),
    ("pages/workspaces/containers/Roles/Detail.js",
     "pages/workspaces/roles/Detail.js" if "pages/workspaces/roles/Detail.js" in pairs else "pages/workspaces/containers/Roles.js",
     "pages/workspaces/containers/Roles/Detail/routes.js", "module-4401.js"),
]

print("\n=== PARENT ALIAS via unique child ===")
for orig_key, named_key, child_key, child_mod in PARENT_ALIAS:
    if named_key not in pairs:
        # try nearby
        print(f"\n  NAMED_MISSING {named_key} for {orig_key}")
        continue
    if check_parent_alias(orig_key, named_key, child_key, child_mod):
        accepted.append((orig_key, pairs[named_key], "alias_parent:"+named_key))
        accepted.append((child_key, child_mod, "imp:"+named_key))

# unique importer children after parent/routes named. Use SHORT named parent for routes children.
IMP = [
    ("pages/fedprojects/containers/ConfigMaps/Detail/ConfigDetail.js", "module-5039.js",
     "pages/fedprojects/configmaps/Detail.js"),  # will re-check vs routes after
    ("pages/fedprojects/containers/Routes/Detail/ResourceStatus.js", "module-5018.js",
     "pages/fedprojects/ingresses/Detail.js"),
    ("pages/fedprojects/containers/StatefulSets/Detail/ResourceStatus.js", "module-5003.js",
     "pages/fedprojects/statefulsets/Detail.js"),
    ("pages/fedprojects/containers/Secrets/Detail/SecretDetail.js", "module-5035.js",
     "pages/fedprojects/secrets/Detail.js"),
    ("pages/fedprojects/containers/Services/Detail/ResourceStatus.js", "module-5008.js",
     "pages/fedprojects/services/Detail.js"),
    ("pages/clusters/containers/CustomResources/Detail/ResourceStatus.js", "module-4000.js",
     "pages/clusters/customresources/Detail.js"),
    ("pages/clusters/containers/Storage/VolumeSnapshots/SnapshotContent.js", "module-3717.js",
     "pages/clusters/volume-snapshots.js"),
    ("pages/clusters/containers/Storage/VolumeSnapshots/SnapshotContent/Detail/ResourceStatus.js", "module-3935.js",
     "pages/clusters/volume-snapshot-content/Detail.js"),
    ("pages/clusters/containers/Storage/VolumeSnapshotClasses/Detail/VolumeSnapshot.js", "module-3939.js",
     "pages/clusters/volume-snapshot-classes/Detail.js"),
    ("pages/clusters/containers/LogCollections/Detail/Configuration.js", "module-4009.js",
     "pages/clusters/log-collections/Detail.js"),
    ("pages/projects/containers/Services/Topology/Detail/Table.js", "module-4610.js",
     "pages/projects/containers/Services/Topology/Detail/Connections.js"),
    ("pages/fedprojects/components/VolumeSetting/VolumeSettingForm.js", "module-3565.js",
     "pages/fedprojects/components/VolumeSetting/config.js"),
]

print("\n=== IMPORTER (may fail until parent routes named; dump anyway) ===")
for key, mod, parent in IMP:
    # if parent not in pairs, skip dump still
    if parent not in pairs:
        print(f"\n=== IMP {key} parent {parent} NOT IN PAIRS ===")
        dump_mod(mod)
        continue
    if check_imp(key, mod, parent):
        accepted.append((key, mod, "imp:"+parent))

# expected rejects
print("\n=== EXPECTED REJECT ===")
REJECT = [
    ("pages/clusters/containers/LogCollections/Detail/index.scss", "module-4008.js",
     "pages/clusters/log-collections/Detail.js"),
    ("components/DiffYaml.js", "module-3854.js",
     "pages/projects/containers/Deployments/Detail/RevisionControl.js"),
    ("pages/devops/components/PipelineStatus.js", "module-5092.js",
     "pages/devops/containers/Pipelines/Detail/TaskStatus.js"),
    ("pages/workspaces/containers/Apps/Detail/AppInstances.js", "module-4423.js",
     "pages/workspaces/containers/Apps/Detail/routes.js"),
    ("components/Modals/LogCollectionCreate/config.js", "module-5134.js",
     "pages/settings/license-info.js"),
    ("pages/clusters/containers/LogCollections/Detail.js", "module-4255.js",
     "pages/whizard-telemetry/log-collections/Detail.js"),
    ("pages/clusters/containers/Monitor/Resource.js", "module-4152.js",
     "pages/whizard-telemetry/monitor-resource.js"),
    ("pages/clusters/containers/Monitor/Cluster.js", "module-4137.js",
     "pages/whizard-telemetry/monitor-cluster.js"),
    ("components/Base/Slider.js", "module-186.js", "vendor"),
]
for key, mod, parent in REJECT:
    print(f"\n--- reject dump {key} ---")
    dump_mod(mod)
    print("  orig_importers", resolved_imp_targets.get(key, [])[:8])

# alias candidates that may be uniquely aliased original paths
ALIAS = [
    ("pages/devops/routes/detail.js", "module-5070.js", "/:workspace/clusters/:cluster/devops"),
    ("pages/devops/containers/CD/CDList.js", "module-5055.js", "/assets/cd/unknown.svg"),
    ("pages/workspaces/routes/overview.js", "module-4441.js", "/workspaces/:workspace/overview"),
    ("pages/devops/containers/Base/List.js", "module-5043.js", "management"),
]
print("\n=== ALIAS CANDIDATES ===")
for key, mod, needle in ALIAS:
    if check_alias(key, mod, needle):
        accepted.append((key, mod, "alias:"+needle))

# children of unique-lit routes: check_imp using the NEW route module as parent is not in pairs yet.
# dump unique kids of new route mods vs orig unnamed locals
print("\n=== kids of candidate route modules ===")
ROUTE_KIDS = [
    ("pages/fedprojects/containers/ConfigMaps/Detail/routes.js", "module-5038.js",
     "pages/fedprojects/containers/ConfigMaps/Detail/ConfigDetail.js", "module-5039.js"),
    ("pages/fedprojects/containers/Routes/Detail/routes.js", "module-5017.js",
     "pages/fedprojects/containers/Routes/Detail/ResourceStatus.js", "module-5018.js"),
    ("pages/fedprojects/containers/StatefulSets/Detail/routes.js", "module-5002.js",
     "pages/fedprojects/containers/StatefulSets/Detail/ResourceStatus.js", "module-5003.js"),
    ("pages/fedprojects/containers/Secrets/Detail/routes.js", "module-5034.js",
     "pages/fedprojects/containers/Secrets/Detail/SecretDetail.js", "module-5035.js"),
    ("pages/fedprojects/containers/Services/Detail/routes.js", "module-5007.js",
     "pages/fedprojects/containers/Services/Detail/ResourceStatus.js", "module-5008.js"),
    ("pages/fedprojects/containers/Applications/Detail/routes.js", "module-4977.js",
     None, None),
    ("pages/clusters/containers/CustomResources/Detail/routes.js", "module-3999.js",
     "pages/clusters/containers/CustomResources/Detail/ResourceStatus.js", "module-4000.js"),
    ("pages/clusters/containers/Storage/VolumeSnapshots/routes.js", "module-3713.js",
     "pages/clusters/containers/Storage/VolumeSnapshots/SnapshotContent.js", "module-3717.js"),
    ("pages/clusters/containers/Storage/VolumeSnapshots/SnapshotContent/Detail/routes.js", "module-3934.js",
     "pages/clusters/containers/Storage/VolumeSnapshots/SnapshotContent/Detail/ResourceStatus.js", "module-3935.js"),
    ("pages/clusters/containers/Storage/VolumeSnapshotClasses/Detail/routes.js", "module-3938.js",
     "pages/clusters/containers/Storage/VolumeSnapshotClasses/Detail/VolumeSnapshot.js", "module-3939.js"),
    ("pages/clusters/containers/LogCollections/Detail/routes.js", "module-4008.js",
     "pages/clusters/containers/LogCollections/Detail/Configuration.js", "module-4009.js"),
    ("pages/fedprojects/components/VolumeSetting/config.js", "module-3564.js",
     "pages/fedprojects/components/VolumeSetting/VolumeSettingForm.js", "module-3565.js"),
    ("pages/projects/containers/Services/Topology/Detail/Connections.js", "module-4609.js",
     "pages/projects/containers/Services/Topology/Detail/Table.js", "module-4610.js"),
]
for parent_key, parent_mod, child_key, child_mod in ROUTE_KIDS:
    print(f"\n--- ROUTE {parent_key} -> {parent_mod} ---")
    dump_mod(parent_mod)
    locals_ = [c for c in orig_local_imps.get(parent_key, []) if not str(c).endswith((".scss", ".css"))]
    unnamed_local = [c for c in locals_ if c not in known_keys]
    unique_kids = []
    for m in list(dict.fromkeys(imp_unpacked.findall(unpacked.get(parent_mod, "")))):
        if m in known_mods or is_css(m) or mid_of(m) in SKIP_MODS or int(mid_of(m)) < 70:
            continue
        if sorted(set(importers[m])) == [parent_mod]:
            unique_kids.append(m)
    print("  unnamed_local", unnamed_local, "unique_kids", unique_kids)
    if child_key and child_mod:
        oimps = resolved_imp_targets.get(child_key, [])
        unique_orig = sorted(set(k for k, _r in oimps)) == [parent_key]
        unique_kid = unique_kids == [child_mod]
        ok = unique_orig and unique_kid and unnamed_local == [child_key] and child_mod not in known_mods
        print("  child", child_key, "unique_orig", unique_orig, "oimps", oimps, "VERDICT", "NEW" if ok else "REJECT")
        if ok:
            accepted.append((child_key, child_mod, "imp_routes:"+parent_key))

print("\n=== ACCEPTED ===")
seen = set()
for key, mod, kind in accepted:
    if (key, mod) in seen:
        continue
    seen.add((key, mod))
    print(f'    "{key}": "{mod}",  # {kind}')
print("accepted_count", len(seen))
