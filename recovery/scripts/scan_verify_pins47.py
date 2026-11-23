#!/usr/bin/env python3
"""Strict-verify slice 47 family pins using unique methods/API/class fields
and unique importer of uniquely named parent. Reject weak 'store' pins;
require sequential only AFTER a uniquely distinguished sibling.
"""
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
    "1134", "1072", "3866", "3892", "186", "1979",
    "3753", "3772", "3774", "3776", "3778", "3780",
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


def dump_mod(mod, n=12):
    if not mod or mod not in unpacked:
        print("    MODULE_MISSING", mod)
        return
    text = unpacked[mod]
    print("    css", is_css(mod), "skip", mid_of(mod) in SKIP_MODS, "named", mod_to_names.get(mod, []))
    print("    t", list(dict.fromkeys(t_pat.findall(text)))[:n])
    print("    importers", [(i, mod_to_names.get(i, ["?"])) for i in sorted(set(importers[mod]))][:8])
    kids = list(dict.fromkeys(imp_unpacked.findall(text)))[:16]
    print("    kids", [(k, mod_to_names.get(k, ["?"])) for k in kids])
    for needle in (
        "renderVirtualResource", "renderPhysicalResource", "renderProjectTrend",
        "node_device_size_utilisation", "ALLOCATED_RESOURCES", "involvedObject.kind",
        "getProjectGateway", "quotaStore", "fedStore", "MULTI_CLUSTER_PROJECT_TIP",
        "PROTOCOL_VALUE", "module-4979", "module-4984",
    ):
        if needle in text:
            print("    HAS", needle)


def unique_unpacked(needle, index):
    files = index.get(needle, set())
    unnamed = [f for f in files if f not in known_mods and mid_of(f) not in SKIP_MODS]
    named = [(f, mod_to_names.get(f, [])) for f in files if f in known_mods]
    return files, unnamed, named


def parent_unique_kids(parent_mod, extra_known=None):
    extra_known = extra_known or set()
    kids = []
    parent_text = unpacked.get(parent_mod, "")
    for m in list(dict.fromkeys(imp_unpacked.findall(parent_text))):
        if m in known_mods or m in extra_known or is_css(m):
            continue
        mid2 = mid_of(m)
        if mid2 in SKIP_MODS or int(mid2) < 70:
            continue
        if sorted(set(importers[m])) == [parent_mod]:
            kids.append(m)
    return kids


def unnamed_locals(parent_key, extra_known=None):
    extra_known = extra_known or set()
    locals_ = [c for c in orig_local_imps.get(parent_key, []) if not str(c).endswith((".scss", ".css"))]
    return [c for c in locals_ if c not in known_keys and c not in extra_known]


def sibling_unique(needle, sibling_mods, cand):
    hits = [m for m in sibling_mods if needle in unpacked.get(m, "")]
    return hits == [cand], hits


accepted = []


def check_named_child(key, mod, parent_key, child_key, child_mod):
    print(f"\n=== NAMED_CHILD {key} -> {mod} via {child_key}->{child_mod} parent={parent_key} ===")
    op = orig_path_for(key)
    parent_mod = pairs.get(parent_key)
    dump_mod(mod)
    if not op or not parent_mod or mod in known_mods or is_css(mod):
        print("  VERDICT REJECT missing")
        return False
    up = sorted(set(importers[mod]))
    unique_named_parent = up == [parent_mod]
    oimps = sorted(set(k for k, _r in resolved_imp_targets.get(key, [])))
    unique_orig = oimps == [parent_key]
    in_mod = child_mod in unpacked.get(mod, "")
    orig_child_imps = sorted(set(k for k, _r in resolved_imp_targets.get(child_key, [])))
    orig_only = orig_child_imps == [key]
    sibs = parent_unique_kids(parent_mod)
    sib_hits = [m for m in sibs if child_mod in unpacked.get(m, "")]
    ok = unique_named_parent and unique_orig and in_mod and orig_only and sib_hits == [mod]
    print("  unique_named_parent", unique_named_parent, "unique_orig", unique_orig)
    print("  orig_child_imps", orig_child_imps, "orig_only", orig_only)
    print("  sib_hits", sib_hits, "in_mod", in_mod)
    print("  VERDICT", "NEW" if ok else "REJECT")
    return ok


def check_sib_needle(key, mod, parent_key, needle, extra_known=None):
    extra_known = extra_known or set()
    print(f"\n=== SIB {key} -> {mod} needle={needle!r} parent={parent_key} ===")
    op = orig_path_for(key)
    parent_mod = pairs.get(parent_key)
    dump_mod(mod)
    if not op or not parent_mod or mod in known_mods or is_css(mod) or mid_of(mod) in SKIP_MODS:
        print("  VERDICT REJECT missing/skip")
        return False
    up = sorted(set(importers[mod]))
    unique_named_parent = up == [parent_mod]
    oimps = sorted(set(k for k, _r in resolved_imp_targets.get(key, [])))
    unique_orig = oimps == [parent_key]
    in_mod = needle in unpacked.get(mod, "")
    in_orig = needle in op.read_text(encoding="utf-8", errors="ignore")
    sibs = parent_unique_kids(parent_mod, extra_known)
    ok_sib, hits = sibling_unique(needle, sibs, mod)
    files, unnamed, named = unique_unpacked(needle, str_index)
    tfiles, tunnamed, tnamed = unique_unpacked(needle, t_index)
    print("  unique_named_parent", unique_named_parent, "unique_orig", unique_orig, oimps)
    print("  in_mod", in_mod, "in_orig", in_orig, "sib_unique", ok_sib, "sib_hits", hits)
    print("  str_unnamed", unnamed, "t_unnamed", tunnamed, "named", named[:4], tnamed[:4])
    # 2-hit global OK if uniquely aliased by uniquely named parent (sib unique)
    ok = unique_named_parent and unique_orig and in_mod and in_orig and ok_sib
    print("  VERDICT", "NEW" if ok else "REJECT")
    return ok


def check_imp(key, mod, parent_key, extra_known=None):
    extra_known = extra_known or set()
    print(f"\n=== IMP {key} -> {mod} parent={parent_key} extra={sorted(extra_known)} ===")
    op = orig_path_for(key)
    parent_mod = pairs.get(parent_key)
    dump_mod(mod)
    if not op or not parent_mod or mod in known_mods or is_css(mod) or mid_of(mod) in SKIP_MODS:
        print("  VERDICT REJECT missing/skip")
        return False
    up = sorted(set(importers[mod]))
    unique_named_parent = up == [parent_mod]
    oimps = sorted(set(k for k, _r in resolved_imp_targets.get(key, [])))
    unique_orig = oimps == [parent_key]
    unique_kids = parent_unique_kids(parent_mod, extra_known)
    unnamed_local = unnamed_locals(parent_key, extra_known)
    only_unique_kid = unique_kids == [mod]
    ok = unique_named_parent and unique_orig and only_unique_kid and unnamed_local == [key]
    print("  unique_named_parent", unique_named_parent, "unique_orig", unique_orig, oimps)
    print("  unique_kids", unique_kids, "unnamed_local", unnamed_local)
    print("  VERDICT", "NEW" if ok else "REJECT", "only_unique_kid", only_unique_kid)
    return ok


print("\n=== FED APP COMPONENTS via uniquely named child Components ===")
if check_named_child(
    "pages/fedprojects/containers/Applications/Detail/AppComponents.js",
    "module-4978.js",
    "pages/fedprojects/containers/Applications/Detail/routes.js",
    "pages/fedprojects/containers/Applications/Detail/AppComponents/Components.js",
    "module-4979.js",
):
    accepted.append(("pages/fedprojects/containers/Applications/Detail/AppComponents.js", "module-4978.js", "named_child:Components"))

print("\n=== FED APP INGRESSES sequential after AppComponents ===")
if check_imp(
    "pages/fedprojects/containers/Applications/Detail/AppIngresses.js",
    "module-4983.js",
    "pages/fedprojects/containers/Applications/Detail/routes.js",
    extra_known={
        "pages/fedprojects/containers/Applications/Detail/AppComponents.js",
        "module-4978.js",
    },
):
    accepted.append(("pages/fedprojects/containers/Applications/Detail/AppIngresses.js", "module-4983.js", "seq_after_AppComponents"))

print("\n=== NODES Monitoring unique lit among siblings ===")
if check_sib_needle(
    "pages/clusters/containers/Nodes/Detail/Monitoring.js",
    "module-3957.js",
    "pages/clusters/containers/Nodes/Detail/routes.js",
    "node_device_size_utilisation",
):
    accepted.append(("pages/clusters/containers/Nodes/Detail/Monitoring.js", "module-3957.js", "sib:node_device_size_utilisation"))

print("\n=== NODES RunningStatus unique t/class among siblings ===")
if check_sib_needle(
    "pages/clusters/containers/Nodes/Detail/RunningStatus.js",
    "module-3949.js",
    "pages/clusters/containers/Nodes/Detail/routes.js",
    "ALLOCATED_RESOURCES",
):
    accepted.append(("pages/clusters/containers/Nodes/Detail/RunningStatus.js", "module-3949.js", "sib:ALLOCATED_RESOURCES"))

print("\n=== NODES Events unique field among siblings ===")
if check_sib_needle(
    "pages/clusters/containers/Nodes/Detail/Events.js",
    "module-3958.js",
    "pages/clusters/containers/Nodes/Detail/routes.js",
    "involvedObject.kind",
):
    accepted.append(("pages/clusters/containers/Nodes/Detail/Events.js", "module-3958.js", "sib:involvedObject.kind"))

print("\n=== NODES Pods sequential remaining 1:1 ===")
if check_imp(
    "pages/clusters/containers/Nodes/Detail/Pods.js",
    "module-3956.js",
    "pages/clusters/containers/Nodes/Detail/routes.js",
    extra_known={
        "pages/clusters/containers/Nodes/Detail/Monitoring.js", "module-3957.js",
        "pages/clusters/containers/Nodes/Detail/RunningStatus.js", "module-3949.js",
        "pages/clusters/containers/Nodes/Detail/Events.js", "module-3958.js",
    },
):
    accepted.append(("pages/clusters/containers/Nodes/Detail/Pods.js", "module-3956.js", "seq_after_nodes_unique"))

print("\n=== EDGENODES RunningStatus unique among siblings ===")
if check_sib_needle(
    "pages/clusters/containers/EdgeNodes/Detail/RunningStatus.js",
    "module-3961.js",
    "pages/clusters/containers/EdgeNodes/Detail/routes.js",
    "ALLOCATED_RESOURCES",
):
    accepted.append(("pages/clusters/containers/EdgeNodes/Detail/RunningStatus.js", "module-3961.js", "sib:ALLOCATED_RESOURCES"))

print("\n=== EDGENODES Events unique among siblings ===")
if check_sib_needle(
    "pages/clusters/containers/EdgeNodes/Detail/Events.js",
    "module-3968.js",
    "pages/clusters/containers/EdgeNodes/Detail/routes.js",
    "involvedObject.kind",
):
    accepted.append(("pages/clusters/containers/EdgeNodes/Detail/Events.js", "module-3968.js", "sib:involvedObject.kind"))

print("\n=== EDGENODES Pods sequential remaining 1:1 ===")
if check_imp(
    "pages/clusters/containers/EdgeNodes/Detail/Pods.js",
    "module-3967.js",
    "pages/clusters/containers/EdgeNodes/Detail/routes.js",
    extra_known={
        "pages/clusters/containers/EdgeNodes/Detail/RunningStatus.js", "module-3961.js",
        "pages/clusters/containers/EdgeNodes/Detail/Events.js", "module-3968.js",
    },
):
    accepted.append(("pages/clusters/containers/EdgeNodes/Detail/Pods.js", "module-3967.js", "seq_after_edgenodes_unique"))

print("\n=== PROJECTS Overview unique class field among siblings ===")
if check_sib_needle(
    "pages/clusters/containers/Projects/Detail/Overview.js",
    "module-3972.js",
    "pages/clusters/containers/Projects/Detail/routes.js",
    "fedStore",
):
    accepted.append(("pages/clusters/containers/Projects/Detail/Overview.js", "module-3972.js", "sib:fedStore"))

print("\n=== PROJECTS Gateway unique method among siblings ===")
if check_sib_needle(
    "pages/clusters/containers/Projects/Detail/Gateway.js",
    "module-3982.js",
    "pages/clusters/containers/Projects/Detail/routes.js",
    "getProjectGateway",
):
    accepted.append(("pages/clusters/containers/Projects/Detail/Gateway.js", "module-3982.js", "sib:getProjectGateway"))

print("\n=== PROJECTS Quota unique inject among siblings ===")
if check_sib_needle(
    "pages/clusters/containers/Projects/Detail/Quota.js",
    "module-3984.js",
    "pages/clusters/containers/Projects/Detail/routes.js",
    "quotaStore",
):
    accepted.append(("pages/clusters/containers/Projects/Detail/Quota.js", "module-3984.js", "sib:quotaStore"))

print("\n=== PROJECTS Pods sequential remaining 1:1 ===")
if check_imp(
    "pages/clusters/containers/Projects/Detail/Pods.js",
    "module-3981.js",
    "pages/clusters/containers/Projects/Detail/routes.js",
    extra_known={
        "pages/clusters/containers/Projects/Detail/Overview.js", "module-3972.js",
        "pages/clusters/containers/Projects/Detail/Gateway.js", "module-3982.js",
        "pages/clusters/containers/Projects/Detail/Quota.js", "module-3984.js",
    },
):
    accepted.append(("pages/clusters/containers/Projects/Detail/Pods.js", "module-3981.js", "seq_after_projects_unique"))

print("\n=== MONITOR RESOURCE Usage unique method among siblings (2-hit global copy OK if parent-aliased) ===")
if check_sib_needle(
    "pages/clusters/containers/Monitor/Resource/Usage.js",
    "module-3785.js",
    "pages/clusters/containers/Monitor/Resource/routes.js",
    "renderVirtualResource",
):
    accepted.append(("pages/clusters/containers/Monitor/Resource/Usage.js", "module-3785.js", "sib:renderVirtualResource"))

print("\n=== MONITOR RESOURCE Ranking sequential remaining 1:1 ===")
if check_imp(
    "pages/clusters/containers/Monitor/Resource/Ranking.js",
    "module-3792.js",
    "pages/clusters/containers/Monitor/Resource/routes.js",
    extra_known={
        "pages/clusters/containers/Monitor/Resource/Usage.js", "module-3785.js",
    },
):
    accepted.append(("pages/clusters/containers/Monitor/Resource/Ranking.js", "module-3792.js", "seq_after_usage"))

print("\n=== LAST12 unique importer 1:1 ===")
IMP11 = [
    ("pages/projects/containers/Routes/Detail/ResourceStatus/Rule.js", "module-3885.js",
     "pages/projects/containers/Routes/Detail/ResourceStatus.js"),
]
for key, mod, parent in IMP11:
    if check_imp(key, mod, parent):
        accepted.append((key, mod, "imp:"+parent))

print("\n=== extra unique-importer 1:1 of uniquely named parents ===")
EXTRA_IMP = [
    ("pages/projects/containers/Volumes/Detail/ResourceStatus/UsageCard.js", "module-3919.js",
     "pages/projects/containers/Volumes/Detail/ResourceStatus.js"),
    ("pages/projects/components/Modals/RepoApp/AppDetail.js", "module-3095.js",
     "pages/projects/components/Modals/RepoApp.js"),
    ("pages/projects/components/Modals/GrayReleaseDetail/Monitor.js", "module-4706.js",
     "pages/projects/components/Modals/GrayReleaseDetail.js"),
    ("pages/projects/components/Modals/GrayReleaseDetail/Component/Item.js", "module-4705.js",
     "pages/projects/components/Modals/GrayReleaseDetail/Component.js"),
    ("pages/projects/components/Modals/CreateApp/Steps.js", "module-2566.js",
     "pages/projects/components/Modals/CreateApp.js"),
    ("pages/workspaces/containers/Groups/GroupUser/User.js", "module-4380.js",
     "pages/workspaces/containers/Groups/GroupUser.js"),
    ("pages/fedprojects/containers/Applications/Detail/AppComponents/Components/ServiceCard.js", "module-4980.js",
     "pages/fedprojects/containers/Applications/Detail/AppComponents/Components.js"),
    ("pages/clusters/components/Modals/ClusterVisibility/WorkspaceItem.js", "module-3654.js",
     "pages/clusters/components/Modals/ClusterVisibility.js"),
]
for key, mod, parent in EXTRA_IMP:
    if parent not in pairs:
        print(f"\n=== IMP {key} parent {parent} NOT IN PAIRS ===")
        continue
    if check_imp(key, mod, parent):
        accepted.append((key, mod, "imp:"+parent))

print("\n=== 2-hit copy importers (context) ===")
for mid in ("4154", "4227", "1981", "5026", "4746", "4146"):
    mod = f"module-{mid}.js"
    print(f"  {mod} named={mod_to_names.get(mod, [])} importers={[(i, mod_to_names.get(i, ['?'])) for i in sorted(set(importers.get(mod, [])))]}")

print("\n=== ACCEPTED ===")
seen = set()
for key, mod, kind in accepted:
    if (key, mod) in seen:
        continue
    seen.add((key, mod))
    print(f'    "{key}": "{mod}",  # {kind}')
print("accepted_count", len(seen))
