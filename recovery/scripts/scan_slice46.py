#!/usr/bin/env python3
"""Slice 46: unnamed JS children of last-72 named parents + remaining unique
components/forms/modals/hocs/stores/utils. Do not re-scan exhausted page 1-hits.
"""
from pathlib import Path
from collections import defaultdict
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
SRC = ROOT / "src"
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN_PY = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")

SKIP_MODS = {
    "3225", "3567", "3511", "3513", "3251", "833", "950", "882", "807",
    "1635", "5774", "1636", "1639", "1633", "1634", "1337", "1272", "1389",
    "2853", "1183", "1764", "1111", "1053", "1112",
    "4656", "4657", "1134", "1072", "3866", "3892", "186", "1979",
}
SKIP_NAME_FRAGS = (
    "ColumeInput", "CustomToolTip", "PromQLInput", "ProjectSelect",
    "FormGroupCard", "ItemContianer", "FullscreenModal", "ErrorContainer",
    "EditMonitorFormLayout", "MetircQueryInput", "BillIcon", "ContainerLog",
    "Compose", "GrafanaTargetInput", "SquareButton", "KubeTools",
    "withDefaultSecrets", "KubeCtl", "KubeConfig", "kubeConfig",
    "EditGroup", "ReplicasInput", "ScheduleCluster",
    "RuleList", "RuleForm", "ClustersMapper", "ContainerImages",
    "ConfigReferenceImpact", "About.js", "ServiceAccess", "ToggleView",
    "TextPreview", "AuditRecord", "SlackForm", "EditBasicInfo",
    "ImageBuilder", "FluxApp", "ChartCard", "DiffYaml", "PipelineStatus",
    "AppInstances", "Slider.js", "NameWithAction",
)
SKIP_KEY_SUBSTR = (
    "stores/monitoring/", "stores/rank/", "federated.list", "limitrange",
    "NameWithAction", "utils/request", "utils/localStorage",
    "pages/settings/containers/layout",
    "components/Layout/",
    "actions/toolbox",
    "pages/fedprojects/containers/LogCollection",
    "pages/workspaces/containers/Quota",
    "pages/clusters/containers/Gateway",
    "pages/workspaces/containers/Gateway",
    "pages/projects/containers/ImageBuilder",
    "pages/clusters/containers/ImageBuilder",
    "pages/devops/containers/CD/list",
    "pages/devops/containers/Pipelines/Detail/layout",
    "FluxApp",
    "ChartCard",
    "ClusterWorkloadStatus/Cluster",
    "ClusterWorkloadStatus/ScheduleCluster",
    "ClusterWorkloadStatus/ReplicasInput",
    "pages/apps/containers/Store",
    "pages/console/containers/Workspace",
    "pages/projects/containers/Alerting/Policies",
    "pages/clusters/containers/Members.js",
    "pages/clusters/containers/Network/IPPools",
    "pages/clusters/containers/Storage/PV/detail",
    "WorkloadTableForm/Card",
    "pages/whizard-telemetry/",
    "pages/projects/containers/Deployments/Detail/ResourceStatus",
    "pages/projects/containers/Deployments/Detail/Monitoring",
    "pages/projects/containers/StatefulSets/Detail/ResourceStatus",
    "pages/projects/containers/Applications/OPAppDetail/ResourceStatus",
    "pages/projects/containers/Applications/OPAppDetail/AppConfig",
    "pages/projects/containers/Applications/CRDAppDetail/Traffic",
    "pages/projects/containers/Applications/CRDAppDetail/Tracing",
    "pages/projects/containers/Jobs/Detail.js",
    "pages/projects/containers/ServiceAccounts/Detail.js",
)

SLICE45_PARENTS = [
    "pages/projects/containers/Base/Detail.js",
    "pages/projects/containers/Routes/Detail.js",
    "pages/projects/containers/Routes/Detail/routes.js",
    "pages/projects/containers/GrayRelease/Jobs/Item.js",
    "pages/projects/containers/Services/Topology/Detail/Connections.js",
    "pages/projects/containers/Services/Topology/Detail/Table.js",
    "pages/projects/components/Modals/TracingDetail/SpanGraph/TimeRange.js",
    "pages/apps/components/AppList.js",
    "pages/devops/containers/CD/detail/routes.js",
    "pages/devops/routes/detail.js",
    "pages/devops/containers/Base/List.js",
    "pages/workspaces/containers/Roles/Detail.js",
    "pages/workspaces/containers/Roles/Detail/routes.js",
    "pages/workspaces/routes/overview.js",
    "pages/fedprojects/containers/Deployments/Detail.js",
    "pages/fedprojects/containers/Deployments/Detail/routes.js",
    "pages/fedprojects/containers/StatefulSets/Detail.js",
    "pages/fedprojects/containers/StatefulSets/Detail/routes.js",
    "pages/fedprojects/containers/StatefulSets/Detail/ResourceStatus.js",
    "pages/fedprojects/containers/Services/Detail.js",
    "pages/fedprojects/containers/Services/Detail/routes.js",
    "pages/fedprojects/containers/Services/Detail/ResourceStatus.js",
    "pages/fedprojects/containers/Routes/Detail.js",
    "pages/fedprojects/containers/Routes/Detail/routes.js",
    "pages/fedprojects/containers/Routes/Detail/ResourceStatus.js",
    "pages/fedprojects/containers/Secrets/Detail.js",
    "pages/fedprojects/containers/Secrets/Detail/routes.js",
    "pages/fedprojects/containers/Secrets/Detail/SecretDetail.js",
    "pages/fedprojects/containers/ConfigMaps/Detail.js",
    "pages/fedprojects/containers/ConfigMaps/Detail/routes.js",
    "pages/fedprojects/containers/ConfigMaps/Detail/ConfigDetail.js",
    "pages/fedprojects/containers/Applications/Detail.js",
    "pages/fedprojects/containers/Applications/Detail/routes.js",
    "pages/fedprojects/containers/Volumes/Detail.js",
    "pages/fedprojects/containers/BaseInfo/ProjectInfo.js",
    "pages/fedprojects/components/VolumeSetting/config.js",
    "pages/fedprojects/components/VolumeSetting/VolumeSettingForm.js",
    "pages/clusters/containers/Nodes/Detail.js",
    "pages/clusters/containers/Nodes/Detail/routes.js",
    "pages/clusters/containers/EdgeNodes/Detail.js",
    "pages/clusters/containers/EdgeNodes/Detail/routes.js",
    "pages/clusters/containers/CustomResources/Detail.js",
    "pages/clusters/containers/CustomResources/Detail/routes.js",
    "pages/clusters/containers/CustomResources/Detail/ResourceStatus.js",
    "pages/clusters/containers/Roles/Detail.js",
    "pages/clusters/containers/Roles/Detail/routes.js",
    "pages/clusters/containers/LogCollections/Detail.js",
    "pages/clusters/containers/LogCollections/Detail/routes.js",
    "pages/clusters/containers/LogCollections/Detail/Configuration.js",
    "pages/clusters/containers/Projects/Detail.js",
    "pages/clusters/containers/Projects/Detail/routes.js",
    "pages/clusters/containers/Storage/Volumes.js",
    "pages/clusters/containers/Storage/Volumes/routes.js",
    "pages/clusters/containers/Storage/VolumeSnapshots.js",
    "pages/clusters/containers/Storage/VolumeSnapshots/routes.js",
    "pages/clusters/containers/Storage/VolumeSnapshots/SnapshotContent.js",
    "pages/clusters/containers/Storage/VolumeSnapshots/SnapshotContent/Detail.js",
    "pages/clusters/containers/Storage/VolumeSnapshots/SnapshotContent/Detail/routes.js",
    "pages/clusters/containers/Storage/VolumeSnapshots/SnapshotContent/Detail/ResourceStatus.js",
    "pages/clusters/containers/Storage/VolumeSnapshotClasses/Detail.js",
    "pages/clusters/containers/Storage/VolumeSnapshotClasses/Detail/routes.js",
    "pages/clusters/containers/Storage/VolumeSnapshotClasses/Detail/VolumeSnapshot.js",
    "pages/clusters/containers/Monitor/Resource.js",
    "pages/clusters/containers/Monitor/Resource/routes.js",
    "pages/clusters/containers/Monitor/Cluster.js",
    "pages/clusters/containers/Monitor/Cluster/routes.js",
    "pages/clusters/actions/cluster.js",
    "components/Cards/Containers/Item.js",
    "components/Graph/Detail.js",
    "components/Graph/App.js",
    "components/Tables/Visible.js",
    "components/Tables/Ranking.js",
]

COMMON_T = {
    "NAME", "TYPE", "STATUS", "CREATE", "EDIT", "DELETE", "SAVE", "CANCEL",
    "CONFIRM", "OK", "CLOSE", "SEARCH", "REFRESH", "MORE", "ACTION", "ACTIONS",
    "CREATED_AT", "CREATION_TIME", "DESCRIPTION", "PROJECT", "CLUSTER",
    "WORKSPACE", "NAMESPACE", "USERNAME", "PASSWORD", "EMAIL", "ROLE",
    "DOWNLOAD", "COPY", "ENABLE", "DISABLE", "UPDATE_SUCCESSFUL",
    "SUCCESSFUL", "FAILED", "TIME", "REASON", "JOB", "TOTAL", "CLEAR",
    "PROCESS", "DEPARTMENT", "METADATA", "EVENT_PL", "MONITORING",
    "RESOURCE_STATUS", "PODS", "OVERVIEW",
}

pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY))
known_keys = set(pairs)
known_mods = set(re.findall(r"module-(\d+)\.js", KNOWN_PY))
mod_to_names = defaultdict(list)
for k, v in pairs.items():
    mod_to_names[v].append(k)

t_pat = re.compile(r"""t\(\s*['"]([^'"]+)['"]""")
res_pat = re.compile(
    r"""(?:this|e|t|n)\.(?:resourceName|module)\s*=\s*['"]([^'"]+)['"]"""
)
api_pat = re.compile(r"""['"]((?:/kapis|/apis|/api)[^'"]{6,})['"]""")
kapis_pat = re.compile(r"""['"](kapis/[^'"]{6,})['"]""")
str_pat = re.compile(r"""['"]([A-Za-z0-9_./:=-]{8,})['"]""")
path_pat = re.compile(r"""['"`](/[A-Za-z0-9_.:/${}-]{8,})['"`]""")
imp_unpacked = re.compile(r"""(?:from|require\()\s*['"]\./(module-\d+\.js)""")
imp_orig = re.compile(r"""(?:from|require\()\s*['"]([^'"]+)['"]""")


def norm_key(rel_posix: str) -> str:
    rel = rel_posix.replace("\\", "/")
    if rel.endswith("/index.jsx"):
        return rel[: -len("/index.jsx")] + ".js"
    if rel.endswith("/index.js"):
        return rel[: -len("/index.js")] + ".js"
    if rel.endswith(".jsx"):
        return rel[:-4] + ".js"
    return rel


def mid_of(mod_name: str) -> str:
    return re.search(r"\d+", mod_name).group()


def is_css(mod: str) -> bool:
    path = UNPACKED / mod
    if not path.exists():
        return False
    text = path.read_text(encoding="utf-8", errors="ignore")
    head = text.split("\n", 1)[0]
    return text.lstrip().startswith("export default {") and "import " not in head


def skip_mod(name):
    return mid_of(name) in SKIP_MODS


def skip_name(key):
    if any(frag.lower() in key.lower() for frag in SKIP_NAME_FRAGS):
        return True
    if any(s.lower() in key.lower() for s in SKIP_KEY_SUBSTR):
        return True
    return False


def resolve_import(importer_rel, raw):
    if not raw.startswith("."):
        return None
    base = Path(importer_rel).parent
    joined = (base / raw).as_posix()
    parts = []
    for part in joined.split("/"):
        if part == "." or part == "":
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
    for ext in ("/index.js", "/index.jsx"):
        p = SRC / (rel + ext)
        if p.exists():
            return norm_key(p.relative_to(SRC).as_posix())
    return norm_key(rel + ".js") if not rel.endswith(".js") else rel


def resolve_alias_import(importer_rel, raw):
    if raw.startswith("."):
        return resolve_import(importer_rel, raw)
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
        "edgewize/": "pages/edgewize/",
        "node-groups/": "pages/node-groups/",
        "whizard-telemetry/": "pages/whizard-telemetry/",
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


SCAN_ROOTS = [
    SRC / "components",
    SRC / "pages",
    SRC / "stores",
    SRC / "utils",
    SRC / "hocs",
    SRC / "actions",
    SRC / "configs",
]

orig_files = []
for root in SCAN_ROOTS:
    if not root.exists():
        continue
    for p in root.rglob("*"):
        if not p.is_file() or p.suffix not in {".js", ".jsx"}:
            continue
        if ".test." in p.name or p.name.endswith(".spec.js"):
            continue
        rel = p.relative_to(SRC).as_posix()
        orig_files.append((rel, norm_key(rel), p))

missing = [(rel, key, p) for rel, key, p in orig_files if key not in known_keys]

print("=== orig vs KNOWN ===")
print("orig_scanned", len(orig_files), "known_keys", len(known_keys), "missing", len(missing))

print("\n=== indexing unpacked ===", flush=True)
unpacked_texts = {}
t_index = defaultdict(set)
res_index = defaultdict(set)
api_index = defaultdict(set)
str_index = defaultdict(set)
importers = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    unpacked_texts[path.name] = text
    for k in t_pat.findall(text):
        t_index[k].add(path.name)
    for k in res_pat.findall(text):
        res_index[k].add(path.name)
    for a in api_pat.findall(text) + kapis_pat.findall(text):
        api_index[a].add(path.name)
    for s in str_pat.findall(text):
        str_index[s].add(path.name)
    for m in imp_unpacked.findall(text):
        importers[m].append(path.name)

orig_t = defaultdict(list)
orig_api = defaultdict(list)
orig_str = defaultdict(list)
orig_imp_targets = defaultdict(list)
orig_local_imps = {}
orig_all_imps = {}
orig_texts = {}
for rel, key, p in orig_files:
    text = p.read_text(encoding="utf-8", errors="ignore")
    orig_texts[key] = text
    for k in t_pat.findall(text):
        orig_t[k].append(key)
    for a in api_pat.findall(text) + kapis_pat.findall(text):
        orig_api[a].append(key)
    for s in list(dict.fromkeys(str_pat.findall(text) + path_pat.findall(text))):
        orig_str[s].append(key)
    locals_ = []
    alls_ = []
    for raw in imp_orig.findall(text):
        resolved_local = resolve_import(rel, raw)
        if resolved_local:
            locals_.append(resolved_local)
            orig_imp_targets[resolved_local].append(key)
        resolved_all = resolve_alias_import(rel, raw)
        if resolved_all:
            alls_.append(resolved_all)
            if resolved_all != resolved_local:
                orig_imp_targets[resolved_all].append(key)
    orig_local_imps[key] = locals_
    orig_all_imps[key] = alls_


def unnamed_only(files):
    return [f for f in files if mid_of(f) not in known_mods]


pins = []
alias_pins = []
ambig = []
unique_imp_cands = []


def consider(key, files, reason, extra="", allow_alias=False):
    files = sorted(set(files), key=lambda s: int(mid_of(s)))
    un = [f for f in files if not skip_mod(f)]
    un_unnamed = unnamed_only(un)
    if skip_name(key):
        print(f"  SKIP_NAME {key} [{reason}] {extra}")
        return
    if key in known_keys:
        return
    if any(x[0] == key for x in pins + alias_pins):
        return
    if len(un_unnamed) == 1:
        mod = un_unnamed[0]
        pins.append((key, mod, f"{reason} {extra}".strip()))
        print(f"  PIN {key} -> {mod} [{reason}] {extra}")
    elif len(un) == 1 and not un_unnamed and allow_alias:
        mod = un[0]
        existing = mod_to_names.get(mod, [])
        if key not in existing:
            alias_pins.append((key, mod, f"alias_of {existing} [{reason}] {extra}".strip()))
            print(f"  ALIAS {key} -> {mod} already={existing} [{reason}] {extra}")
    elif 2 <= len(un_unnamed) <= 6:
        print(f"  MULTI {len(un_unnamed)} {key} -> {un_unnamed} [{reason}] {extra}")
    elif len(un_unnamed) == 0 and len(un) == 0:
        print(f"  MISS {key} [{reason}] {extra}")


def unique_needles_for(key):
    text = orig_texts.get(key, "")
    needles = []
    for k in dict.fromkeys(t_pat.findall(text)):
        if k in COMMON_T:
            continue
        if orig_t[k] == [key]:
            needles.append(("unique_t", k, t_index.get(k, set())))
    for k in dict.fromkeys(res_pat.findall(text)):
        needles.append(("resource/module", k, res_index.get(k, set())))
    for a in dict.fromkeys(api_pat.findall(text) + kapis_pat.findall(text)):
        if orig_api[a] == [key]:
            needles.append(("unique_api", a, api_index.get(a, set())))
    for s in dict.fromkeys(list(str_pat.findall(text)) + list(path_pat.findall(text))):
        if s in COMMON_T or len(s) < 10:
            continue
        if orig_str[s] == [key]:
            needles.append(("unique_str", s, str_index.get(s, set())))
    return needles


def dump_kids(parent_key, parent_mod=None):
    parent_mod = parent_mod or pairs.get(parent_key)
    if not parent_mod:
        print(f"  MISSING_PARENT_NAME {parent_key}")
        return
    parent_text = unpacked_texts.get(parent_mod, "")
    kids = []
    for m in list(dict.fromkeys(imp_unpacked.findall(parent_text))):
        if mid_of(m) in known_mods or skip_mod(m) or is_css(m):
            continue
        if int(mid_of(m)) < 70:
            continue
        kids.append(m)
    orig_unnamed = [
        c for c in orig_local_imps.get(parent_key, [])
        if c not in known_keys and not str(c).endswith((".scss", ".css"))
    ]
    orig_unnamed_all = [
        c for c in orig_all_imps.get(parent_key, [])
        if c not in known_keys and not str(c).endswith((".scss", ".css"))
    ]
    print(f"\n  PARENT {parent_key} -> {parent_mod}")
    print(f"    orig_unnamed_local={orig_unnamed}")
    print(f"    orig_unnamed_all={orig_unnamed_all}")
    print(f"    unpacked_unnamed_kids={kids}")
    unique_kids = []
    for kid in kids:
        ktext = unpacked_texts[kid]
        tkeys = list(dict.fromkeys(t_pat.findall(ktext)))
        unique_t = []
        for k in tkeys:
            files = t_index[k]
            unn = unnamed_only([f for f in files if not skip_mod(f)])
            if files == {kid} or unn == [kid]:
                unique_t.append(k)
        unique_lits = []
        for s in list(dict.fromkeys(str_pat.findall(ktext))):
            files = str_index[s]
            unn = unnamed_only([f for f in files if not skip_mod(f)])
            if (files == {kid} or unn == [kid]) and len(s) >= 10:
                unique_lits.append(s)
        up = sorted(set(importers[kid]))
        named_up = [(i, mod_to_names.get(i, ["?"])) for i in up]
        unique_imp = up == [parent_mod]
        if unique_imp:
            unique_kids.append(kid)
        print(f"    KID {kid} unique_importer={unique_imp} importers={named_up[:6]}")
        print(f"      t={tkeys[:10]} unique_t={unique_t[:8]} unique_lit={unique_lits[:6]}")
        if unique_imp:
            unique_imp_cands.append((kid, parent_key, parent_mod, orig_unnamed, unique_t, unique_lits))
        if unique_imp and len(orig_unnamed) == 1 and not skip_name(orig_unnamed[0]):
            oimps = sorted(set(orig_imp_targets.get(orig_unnamed[0], [])))
            if oimps == [parent_key]:
                consider(orig_unnamed[0], [kid], "unique_importer", f"parent={parent_key}")
        if unique_t:
            for k in unique_t:
                orig_hits = orig_t.get(k, [])
                orig_unnamed_hits = [h for h in orig_hits if h not in known_keys]
                print(f"      unique_t_orig {k!r} orig={orig_hits[:6]} unnamed_orig={orig_unnamed_hits[:4]}")
                if len(set(orig_hits)) == 1:
                    consider(orig_hits[0], [kid], "unique_t", repr(k))
                elif len(set(orig_unnamed_hits)) == 1 and orig_unnamed_hits[0] in orig_unnamed + orig_unnamed_all:
                    consider(orig_unnamed_hits[0], [kid], "unique_t_child", repr(k))
        elif unique_lits:
            for s in unique_lits[:8]:
                orig_hits = orig_str.get(s, [])
                orig_unnamed_hits = [h for h in orig_hits if h not in known_keys]
                print(f"      unique_lit_orig {s!r} orig={orig_hits[:6]} unnamed_orig={orig_unnamed_hits[:4]}")
                if len(set(orig_hits)) == 1:
                    consider(orig_hits[0], [kid], "unique_str", repr(s)[:80])
                elif len(set(orig_unnamed_hits)) == 1 and orig_unnamed_hits[0] in orig_unnamed + orig_unnamed_all:
                    consider(orig_unnamed_hits[0], [kid], "unique_str_child", repr(s)[:80])
    if len(unique_kids) == 1 and len(orig_unnamed) == 1:
        consider(orig_unnamed[0], unique_kids, "unique_importer_1_1", f"parent={parent_key}")
    elif unique_kids and orig_unnamed:
        ambig.append((parent_key, unique_kids, orig_unnamed))
        print(f"    AMBIG unique_kids={unique_kids} orig_unnamed={orig_unnamed}")


print("\n=== unnamed JS children of last-72 named parents ===")
missing_parents = []
for parent_key in SLICE45_PARENTS:
    if parent_key not in pairs:
        missing_parents.append(parent_key)
        print(f"  PARENT_NOT_NAMED {parent_key}")
        continue
    dump_kids(parent_key)
print("missing_parents", missing_parents)


print("\n=== remaining COMPONENTS/FORMS/MODALS/HOCS unique 1-hit (src/components + src/hocs) ===")
comp_missing = [
    (rel, key, p)
    for rel, key, p in missing
    if (
        key.startswith("components/")
        or key.startswith("hocs/")
    )
    and not skip_name(key)
]
print("comp_missing", len(comp_missing))
comp_1hit = []
comp_2hit = []
comp_0hit = []
for rel, key, p in comp_missing:
    needles = unique_needles_for(key)
    best = None
    for kind, needle, files in needles:
        un = [f for f in files if not skip_mod(f)]
        unn = unnamed_only(un)
        if len(unn) == 1:
            best = ("1-hit", kind, needle, unn)
            break
        if len(unn) == 2 and best is None:
            best = ("2-hit", kind, needle, unn)
        if len(unn) == 0 and len(un) == 0 and best is None:
            best = ("0-hit", kind, needle, [])
    if best is None:
        comp_0hit.append((key, None, None, []))
        continue
    cls, kind, needle, files = best
    if cls == "1-hit":
        comp_1hit.append((key, kind, needle, files))
        consider(key, files, kind, repr(needle)[:80], allow_alias=False)
    elif cls == "2-hit":
        comp_2hit.append((key, kind, needle, files))
    else:
        comp_0hit.append((key, kind, needle, files))
print("comp_1hit", len(comp_1hit), "comp_2hit", len(comp_2hit), "comp_0hit", len(comp_0hit))
print("comp_1hit list:")
for key, kind, needle, files in comp_1hit[:80]:
    print(f"  {key} [{kind}] {needle!r} -> {files}")
print("comp_2hit sample:")
for key, kind, needle, files in comp_2hit[:25]:
    print(f"  {key} [{kind}] {needle!r} -> {files}")


print("\n=== remaining STORES unique 1-hit ===")
store_missing = [
    (rel, key, p)
    for rel, key, p in missing
    if key.startswith("stores/") and not skip_name(key)
]
print("store_missing", len(store_missing))
store_1hit = []
for rel, key, p in store_missing:
    needles = unique_needles_for(key)
    for kind, needle, files in needles:
        un = [f for f in files if not skip_mod(f)]
        unn = unnamed_only(un)
        if len(unn) == 1:
            store_1hit.append((key, kind, needle, unn))
            consider(key, files, kind, repr(needle)[:80], allow_alias=False)
            break
print("store_1hit", len(store_1hit))
for key, kind, needle, files in store_1hit:
    print(f"  {key} [{kind}] {needle!r} -> {files}")


print("\n=== remaining UTILS unique 1-hit ===")
utils_missing = [
    (rel, key, p)
    for rel, key, p in missing
    if key.startswith("utils/") and not skip_name(key)
]
print("utils_missing", len(utils_missing))
utils_1hit = []
utils_0hit = []
for rel, key, p in utils_missing:
    needles = unique_needles_for(key)
    pinned_here = False
    for kind, needle, files in needles:
        un = [f for f in files if not skip_mod(f)]
        unn = unnamed_only(un)
        if len(unn) == 1:
            utils_1hit.append((key, kind, needle, unn))
            consider(key, files, kind, repr(needle)[:80], allow_alias=False)
            pinned_here = True
            break
    if not pinned_here:
        utils_0hit.append(key)
print("utils_1hit", len(utils_1hit), "utils_0hit", len(utils_0hit))
for key, kind, needle, files in utils_1hit:
    print(f"  {key} [{kind}] {needle!r} -> {files}")
print("utils_0hit", utils_0hit[:40])


print("\n=== UNIQUE IMPORTER remaining unnamed of uniquely named parents (non-page-1hit extra) ===")
# remaining unique-importer of uniquely named parent among components/stores/utils
for rel, key, p in missing:
    if skip_name(key):
        continue
    if any(x[0] == key for x in pins):
        continue
    if key.startswith("pages/") and key not in {
        c for _pk, _uk, origs in ambig for c in origs
    }:
        # do not re-scan exhausted page 1-hit list; only unique-importer of last-72
        continue
    imps = orig_imp_targets.get(key, [])
    named_imps = [i for i in imps if i in known_keys]
    if len(set(imps)) != 1 or len(named_imps) != 1:
        continue
    parent_key = named_imps[0]
    parent_mod = pairs.get(parent_key)
    if not parent_mod:
        continue
    parent_text = unpacked_texts.get(parent_mod, "")
    unique_kids = []
    for m in list(dict.fromkeys(imp_unpacked.findall(parent_text))):
        if mid_of(m) in known_mods or skip_mod(m) or is_css(m):
            continue
        if int(mid_of(m)) < 70:
            continue
        if sorted(set(importers[m])) == [parent_mod]:
            unique_kids.append(m)
    unnamed_local = [
        c for c in orig_local_imps.get(parent_key, [])
        if c not in known_keys and not str(c).endswith((".scss", ".css"))
    ]
    if len(unique_kids) == 1 and unnamed_local == [key]:
        consider(key, unique_kids, "unique_importer", f"parent={parent_key}")
    elif unique_kids and key in unnamed_local:
        print(
            f"  AMBIG {key} parent={parent_key} unique_kids={unique_kids} "
            f"orig_unnamed_local={unnamed_local}"
        )


print("\n=== DEDUPED NEW PINS (unnamed modules only) ===")
seen = set()
new_count = 0
for key, mod, reason in pins:
    pair = (key, mod)
    if pair in seen:
        continue
    seen.add(pair)
    if mid_of(mod) in known_mods:
        print(f'    ALREADY "{key}": "{mod}",  # {reason}')
        continue
    new_count += 1
    print(f'    "{key}": "{mod}",  # {reason}')
print("new_pin_count", new_count)

print("\n=== DEDUPED ALIAS PINS (not applied unless uniquely aliased) ===")
seen_a = set()
for key, mod, reason in alias_pins:
    pair = (key, mod)
    if pair in seen_a:
        continue
    seen_a.add(pair)
    print(f'    "{key}": "{mod}",  # {reason}')
print("alias_pin_count", len(seen_a))

print("\n=== remaining unique-importer candidates of uniquely named parents ===")
print("ambig_parent_count", len(ambig))
for parent_key, unique_kids, orig_unnamed in ambig:
    print(f"  {parent_key} unique_kids={unique_kids} orig_unnamed={orig_unnamed}")
print("unique_imp_cand_count", len(unique_imp_cands))
for kid, parent_key, parent_mod, orig_unnamed, unique_t, unique_lits in unique_imp_cands:
    already = any(m == kid for _k, m, _r in pins)
    print(
        f"  {'PINNED' if already else 'OPEN'} {kid} parent={parent_key} "
        f"orig_unnamed={orig_unnamed} unique_t={unique_t[:4]} unique_lit={unique_lits[:3]}"
    )
