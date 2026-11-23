#!/usr/bin/env python3
"""Slice 57: unnamed unique kids of newly named parents TinyArea 4942 /
UsageCard 5026 / PodsCard 5030 / AuditRecord 4413 / VolumeSetting 3563,
last ~200 uniquely named parents leftover unique-importer kids, remaining
orig unique-import children still unnamed, unique METHOD/API/module=
1-hit, vendor leftovers.

Skip List 2300/2301/2302 leaves, Modal form remaining modal.js/1475 2
importers, Cluster 4996 remaining StatusReason 805 41-importer, fed
Overview LimitRange 4938 / Help HOW_TO_INVITE_USERS 0-hit,
PhysicalResourceItem 4945, leftover 837 npm react-fast-compare, 959
monitoring store, ConfigTemplate vs unique kid 2943 ADD_CLUSTER,
Upload 2399/2400/2401 vs utils/request, Topology RadioButtons/Edge,
semver 717, LineChart no chartName, react-draggable absent, jwt-decode
server-only. Plus long skip-list: Cascader 1489/2102, Tree 5770,
Gateway Access 1867, Physical/Virtual 1798/1800, Deployments
ResourceStatus 1134/1415 / Monitoring 1072, AppInstances 4423, Detail
Events/Env/Metadata 815/962/821, KubernetesStatus store 988, BaseInfo
ResourceQuota, member.list 4142, ScheduleCluster/ReplicasInput
4997/4998, ManageButton 1215, Cluster fields 3666/3674. Dist-only
Dashboard widgets skip invent. WHIZARD copies stay unnamed.
"""
from pathlib import Path
from collections import defaultdict
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
SRC = ROOT / "src"
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN_PY = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
WEBPACK = (ROOT / "recovery/react-app/webpack.config.js").read_text(encoding="utf-8")
RECHARTS = (ROOT / "recovery/react-app/recharts-aliases.js").read_text(encoding="utf-8")
ENTRY = UNPACKED / "entry.js"

SKIP_MODS = {
    "3225", "3567", "3511", "3513", "3251", "833", "950", "882", "807",
    "1635", "5774", "1636", "1639", "1633", "1634", "1337", "1272", "1389",
    "2853", "1183", "1764", "1111", "1053", "1112",
    "4656", "4657", "1134", "1072", "3866", "3892", "186", "1979",
    "3753", "3772", "3774", "3776", "3778", "3780", "1981",
    "1135", "1798", "1800", "1801", "1869", "1418",
    "1867", "4139", "4144", "4330",
    "1489", "2102", "1837", "1410", "5770", "1861", "4764",
    "1415",
    "989", "891", "717",
    "4142",
    "4423", "815", "962", "821", "988",
    "4938", "4997", "4998", "1215", "1475", "3666", "3674",
    "2399", "2400", "2401", "4945",
    "2300", "2301", "2302", "805", "837", "959", "2943",
}
WHIZARD_COPIES = {
    "4153", "4154", "4219", "4227", "4139", "4144", "4330",
    "4103", "4080", "4107", "4105", "1847",
}
SKIP_MODS |= WHIZARD_COPIES
NEVER_PIN_MODS = {
    "3680", "3689", "3693", "3698", "3701",
}
SKIP_EXACT_KEYS = {
    "pages/clusters/containers/Overview/Dashboard/ClusterNodes.js",
    "pages/clusters/containers/Overview/Dashboard/ResourcesUsage.js",
    "pages/clusters/containers/Overview/Dashboard/ServiceComponents.js",
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
    "TextPreview", "SlackForm", "EditBasicInfo",
    "ImageBuilder", "FluxApp", "ChartCard", "DiffYaml", "PipelineStatus",
    "AppInstances", "Slider.js", "NameWithAction",
    "InstanceList", "VersionStatus", "MonitorTab",
    "AceEditor", "imgBuilder",
    "TrafficCard", "PhysicalResourceItem", "Cascader/Options",
    "Cascader/Item", "LimitRange", "ManageButton",
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
    "pages/apps/containers/Store",
    "pages/console/containers/Workspace",
    "pages/projects/containers/Alerting/Policies",
    "pages/clusters/containers/Members.js",
    "pages/clusters/containers/Network/IPPools",
    "pages/clusters/containers/Storage/PV/detail",
    "pages/projects/containers/Applications/OPAppDetail/ResourceStatus",
    "pages/projects/containers/Applications/OPAppDetail/AppConfig",
    "pages/projects/containers/Applications/CRDAppDetail/Traffic",
    "pages/projects/containers/Applications/CRDAppDetail/Tracing",
    "pages/projects/containers/Jobs/Detail.js",
    "pages/projects/containers/ServiceAccounts/Detail.js",
    "pages/projects/containers/Deployments/Detail/ResourceStatus",
    "pages/whizard-telemetry/",
    "containers/BaseInfo/ResourceQuota",
    "fedprojects/containers/Overview/Help",
    "fedprojects/containers/Overview/LimitRange",
    "components/Base/Modal/modal",
    "clusters/components/Cards/Cluster/fields",
)
VENDOR = {
    "module-553.js", "module-239.js", "module-321.js", "module-14.js",
    "module-186.js", "module-433.js", "module-243.js", "module-240.js",
    "module-244.js", "module-1.js", "module-2.js", "module-3.js",
    "module-36.js", "module-37.js", "module-55.js", "module-56.js",
    "module-51.js", "module-26.js", "module-63.js", "module-52.js",
    "module-61.js", "module-74.js", "module-241.js", "module-199.js",
    "module-317.js", "module-2465.js", "module-793.js", "module-825.js",
    "module-88.js", "module-96.js", "module-801.js", "module-242.js",
    "module-31.js", "module-65.js", "module-49.js",
    "module-854.js", "module-478.js", "module-1463.js", "module-1416.js",
    "module-1095.js", "module-1236.js", "module-946.js", "module-884.js",
    "module-1856.js", "module-937.js", "module-1849.js",
}
COMMON_T = {
    "NAME", "TYPE", "STATUS", "CREATE", "EDIT", "DELETE", "SAVE", "CANCEL",
    "CONFIRM", "OK", "CLOSE", "SEARCH", "REFRESH", "MORE", "ACTION", "ACTIONS",
    "CREATED_AT", "CREATION_TIME", "DESCRIPTION", "PROJECT", "CLUSTER",
    "WORKSPACE", "NAMESPACE", "USERNAME", "PASSWORD", "EMAIL", "ROLE",
    "DOWNLOAD", "COPY", "ENABLE", "DISABLE", "UPDATE_SUCCESSFUL",
    "SUCCESSFUL", "FAILED", "TIME", "REASON", "JOB", "TOTAL", "CLEAR",
    "PROCESS", "DEPARTMENT", "METADATA", "EVENT_PL", "MONITORING",
    "RESOURCE_STATUS", "PODS", "OVERVIEW", "POD_PL", "KEY", "VALUE",
}
COMMON_METHODS = {
    "constructor", "render", "componentDidMount", "componentWillUnmount",
    "componentDidUpdate", "componentWillMount", "shouldComponentUpdate",
    "getDerivedStateFromProps", "componentDidCatch", "renderHeader",
    "renderContent", "renderToolbar", "renderEmpty", "renderTable",
    "renderList", "renderForm", "renderModal", "handleSubmit",
}
WEAK = {
    "if", "store", "fetchData", "data", "render", "className", "onClick",
    "state", "super", "switch", "toggle", "close",
}

LAST5_PARENTS = [
    "pages/fedprojects/containers/Overview/ResourceUsage/TinyArea.js",
    "pages/fedprojects/containers/Volumes/Detail/ResourceStatus/UsageCard.js",
    "pages/fedprojects/containers/Volumes/Detail/VolumeMounts/PodsCard.js",
    "pages/apps/components/Lists/AuditRecord.js",
    "pages/fedprojects/components/VolumeSetting.js",
]

pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY))
known_keys = set(pairs)
known_mods = set(pairs.values())
mod_to_names = defaultdict(list)
for k, v in pairs.items():
    mod_to_names[v].append(k)
known_order = list(dict.fromkeys(k for k, _v in re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY)))

t_pat = re.compile(r"""t\(\s*['"]([^'"]+)['"]""")
api_pat = re.compile(r"""['"]((?:/kapis|/apis|/api)[^'"]{6,})['"]""")
kapis_pat = re.compile(r"""['"](kapis/[^'"]{6,})['"]""")
str_pat = re.compile(r"""['"]([A-Za-z0-9_./:=${}-]{8,})['"]""")
method_pat = re.compile(
    r"""(?:^|\n)\s*(?:(?:async\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*\([^;{]*\)\s*\{"""
    r"""|([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(?:async\s*)?(?:\([^)]*\)|[A-Za-z_][A-Za-z0-9_]*)\s*=>"""
    r"""|(?:this|n|t|e|r)\.([A-Za-z_][A-Za-z0-9_]*)\s*=\s*function)"""
)
field_pat = re.compile(
    r"""(?:this|n|t|e|r)\.([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(?:new |observable|[A-Za-z_\[{'"])"""
)
class_field_pat = re.compile(
    r"""(?:^|\n)\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(?:new |this\.|observable|\[|\{|'|")"""
)
render_pat = re.compile(r"""(?:^|\n)\s*(render[A-Z][A-Za-z0-9_]*)\s*\(""")
imp_unpacked = re.compile(r"""(?:from|require\()\s*['"]\./(module-\d+\.js)""")
imp_orig = re.compile(r"""(?:from|require\()\s*['"]([^'"]+)['"]""")
mod_eq_pat = re.compile(r"""module\s*[:=]\s*['"]([^'"]+)['"]""")
resource_name_pat = re.compile(r"""resourceName\s*[:=]\s*['"]([^'"]+)['"]""")


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
    if key in SKIP_EXACT_KEYS:
        return True
    if any(frag.lower() in key.lower() for frag in SKIP_NAME_FRAGS):
        return True
    if any(s.lower() in key.lower() for s in SKIP_KEY_SUBSTR):
        return True
    return False


def norm_key(rel_posix: str) -> str:
    rel = rel_posix.replace("\\", "/")
    if rel.endswith("/index.jsx"):
        return rel[: -len("/index.jsx")] + ".js"
    if rel.endswith("/index.js"):
        return rel[: -len("/index.js")] + ".js"
    if rel.endswith(".jsx"):
        return rel[:-4] + ".js"
    return rel


def orig_path_for(key):
    stem = key[:-3] if key.endswith(".js") else key
    for ext in (".js", ".jsx", "/index.js", "/index.jsx"):
        p = SRC / f"{stem}{ext}"
        if p.exists() and p.is_file():
            return p
    return None


def resolve_import(importer_rel, raw):
    if not raw.startswith("."):
        return None
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
    return None


def resolve_alias_import(importer_rel, raw):
    local = resolve_import(importer_rel, raw)
    if local:
        return local
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
            return None
    return None


def extract_methods(text):
    names = []
    for a, b, c in method_pat.findall(text):
        name = a or b or c
        if name and name not in COMMON_METHODS and not name.startswith("_"):
            names.append(name)
    for name in class_field_pat.findall(text):
        if name not in COMMON_METHODS and not name.startswith("_"):
            names.append(name)
    for name in field_pat.findall(text):
        if name not in COMMON_METHODS and not name.startswith("_"):
            names.append(name)
    for name in render_pat.findall(text):
        if name not in COMMON_METHODS:
            names.append(name)
    return list(dict.fromkeys(names))


print("=== indexing unpacked ===", flush=True)
unpacked_texts = {}
t_index = defaultdict(set)
api_index = defaultdict(set)
str_index = defaultdict(set)
method_index = defaultdict(set)
mod_eq_index = defaultdict(set)
resource_name_index = defaultdict(set)
importers = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    unpacked_texts[path.name] = text
    for k in t_pat.findall(text):
        t_index[k].add(path.name)
    for a in api_pat.findall(text) + kapis_pat.findall(text):
        api_index[a].add(path.name)
    for s in str_pat.findall(text):
        str_index[s].add(path.name)
    for name in extract_methods(text):
        method_index[name].add(path.name)
    for k in mod_eq_pat.findall(text):
        mod_eq_index[k].add(path.name)
    for k in resource_name_pat.findall(text):
        resource_name_index[k].add(path.name)
    for m in imp_unpacked.findall(text):
        importers[m].append(path.name)

print("=== indexing orig ===", flush=True)
orig_texts = {}
orig_t = defaultdict(list)
orig_api = defaultdict(list)
orig_str = defaultdict(list)
orig_method = defaultdict(list)
orig_mod_eq = defaultdict(list)
orig_resource_name = defaultdict(list)
orig_imp_targets = defaultdict(list)
orig_local_imps = defaultdict(list)
orig_all_imps = defaultdict(list)
orig_files = []
for p in SRC.rglob("*"):
    if not p.is_file() or p.suffix not in {".js", ".jsx"}:
        continue
    if ".test." in p.name or p.name.endswith(".spec.js"):
        continue
    rel = p.relative_to(SRC).as_posix()
    key = norm_key(rel)
    text = p.read_text(encoding="utf-8", errors="ignore")
    orig_texts[key] = text
    orig_files.append(key)
    for k in t_pat.findall(text):
        orig_t[k].append(key)
    for a in api_pat.findall(text) + kapis_pat.findall(text):
        orig_api[a].append(key)
    for s in str_pat.findall(text):
        orig_str[s].append(key)
    for name in extract_methods(text):
        orig_method[name].append(key)
    for k in mod_eq_pat.findall(text):
        orig_mod_eq[k].append(key)
    for k in resource_name_pat.findall(text):
        orig_resource_name[k].append(key)
    for raw in imp_orig.findall(text):
        resolved_local = resolve_import(rel, raw)
        if resolved_local:
            orig_local_imps[key].append(resolved_local)
            orig_imp_targets[resolved_local].append(key)
        resolved_all = resolve_alias_import(rel, raw)
        if resolved_all:
            orig_all_imps[key].append(resolved_all)
            if resolved_all != resolved_local:
                orig_imp_targets[resolved_all].append(key)


def unnamed_only(files):
    return [f for f in files if f not in known_mods and not skip_mod(f)]


def parent_unique_kids(parent_mod, extra_known=None, min_id=800):
    extra_known = extra_known or set()
    kids = []
    parent_text = unpacked_texts.get(parent_mod, "")
    for m in list(dict.fromkeys(imp_unpacked.findall(parent_text))):
        if m in known_mods or m in extra_known or is_css(m) or skip_mod(m) or m in VENDOR:
            continue
        if int(mid_of(m)) < min_id:
            continue
        if sorted(set(importers[m])) == [parent_mod]:
            kids.append(m)
    return kids


def parent_all_unnamed_kids(parent_mod, min_id=800):
    kids = []
    parent_text = unpacked_texts.get(parent_mod, "")
    for m in list(dict.fromkeys(imp_unpacked.findall(parent_text))):
        if m in known_mods or is_css(m) or skip_mod(m) or m in VENDOR:
            continue
        if int(mid_of(m)) < min_id:
            continue
        kids.append(m)
    return kids


def unnamed_locals(parent_key, extra_known=None):
    extra_known = extra_known or set()
    locals_ = [
        c for c in orig_local_imps.get(parent_key, [])
        if not str(c).endswith((".scss", ".css"))
    ]
    return [c for c in locals_ if c not in known_keys and c not in extra_known]


def dump_mod_fingerprint(mod, sibling_mods):
    text = unpacked_texts[mod]
    tkeys = list(dict.fromkeys(t_pat.findall(text)))
    apis = list(dict.fromkeys(api_pat.findall(text) + kapis_pat.findall(text)))
    methods = extract_methods(text)
    kids = list(dict.fromkeys(imp_unpacked.findall(text)))
    named_kids = [(k, mod_to_names.get(k, ["?"])) for k in kids]
    unique_t, unique_t_sib = [], []
    for k in tkeys:
        files = t_index[k]
        unn = unnamed_only(files)
        if files == {mod} or unn == [mod]:
            unique_t.append(k)
        sib = [f for f in unn if f in sibling_mods]
        if sib == [mod]:
            unique_t_sib.append(k)
    unique_api, unique_api_sib = [], []
    for a in apis:
        files = api_index[a]
        unn = unnamed_only(files)
        if files == {mod} or unn == [mod]:
            unique_api.append(a)
        sib = [f for f in unn if f in sibling_mods]
        if sib == [mod]:
            unique_api_sib.append(a)
    unique_lit, unique_lit_sib = [], []
    for s in list(dict.fromkeys(str_pat.findall(text))):
        files = str_index[s]
        unn = unnamed_only(files)
        if (files == {mod} or unn == [mod]) and len(s) >= 10:
            unique_lit.append(s)
        sib = [f for f in unn if f in sibling_mods]
        if sib == [mod] and len(s) >= 10:
            unique_lit_sib.append(s)
    unique_meth, unique_meth_sib = [], []
    for name in methods:
        files = method_index[name]
        unn = unnamed_only(files)
        if files == {mod} or unn == [mod]:
            unique_meth.append(name)
        sib = [f for f in unn if f in sibling_mods]
        if sib == [mod]:
            unique_meth_sib.append(name)
    unique_mod_eq = []
    for k in list(dict.fromkeys(mod_eq_pat.findall(text))):
        files = mod_eq_index[k]
        unn = unnamed_only(files)
        if files == {mod} or unn == [mod]:
            unique_mod_eq.append(k)
    print(f"    KID {mod} importers={[(i, mod_to_names.get(i, ['?'])) for i in sorted(set(importers[mod]))]}")
    print(f"      methods={methods[:12]}")
    print(f"      unique_method={unique_meth[:8]} sib={unique_meth_sib[:8]}")
    print(f"      t={tkeys[:10]} unique_t={unique_t[:6]} sib={unique_t_sib[:6]}")
    print(f"      api={apis[:6]} unique_api={unique_api[:4]} sib={unique_api_sib[:4]}")
    print(f"      unique_lit={unique_lit[:6]} sib={unique_lit_sib[:6]}")
    print(f"      unique_mod_eq={unique_mod_eq[:6]}")
    print(f"      kids={named_kids[:12]}")
    return {
        "mod": mod,
        "methods": methods,
        "unique_meth": unique_meth,
        "unique_meth_sib": unique_meth_sib,
        "unique_t": unique_t,
        "unique_t_sib": unique_t_sib,
        "unique_api": unique_api,
        "unique_api_sib": unique_api_sib,
        "unique_lit": unique_lit,
        "unique_lit_sib": unique_lit_sib,
        "unique_mod_eq": unique_mod_eq,
        "kids": kids,
        "named_kids": named_kids,
        "tkeys": tkeys,
    }


def dump_orig_fingerprint(key):
    text = orig_texts.get(key, "")
    op = orig_path_for(key)
    methods = extract_methods(text)
    tkeys = list(dict.fromkeys(t_pat.findall(text)))
    apis = list(dict.fromkeys(api_pat.findall(text) + kapis_pat.findall(text)))
    oimps = sorted(set(orig_imp_targets.get(key, [])))
    locals_ = [c for c in orig_local_imps.get(key, []) if not str(c).endswith((".scss", ".css"))]
    unique_t = [k for k in tkeys if orig_t[k] == [key] and k not in COMMON_T]
    unique_api = [a for a in apis if orig_api[a] == [key]]
    unique_meth = [n for n in methods if orig_method[n] == [key]]
    unique_lit = [
        s for s in list(dict.fromkeys(str_pat.findall(text)))
        if orig_str[s] == [key] and len(s) >= 10
    ]
    unique_mod_eq = [k for k in list(dict.fromkeys(mod_eq_pat.findall(text))) if orig_mod_eq[k] == [key]]
    named_local = [(c, pairs.get(c)) for c in locals_ if c in known_keys]
    unnamed_local = [c for c in locals_ if c not in known_keys]
    print(f"    ORIG {key} exists={bool(op)}")
    print(f"      orig_importers={oimps}")
    print(f"      methods={methods[:12]} unique_method={unique_meth[:8]}")
    print(f"      t={tkeys[:10]} unique_t={unique_t[:6]}")
    print(f"      api={apis[:6]} unique_api={unique_api[:4]}")
    print(f"      unique_lit={unique_lit[:6]}")
    print(f"      unique_mod_eq={unique_mod_eq[:6]}")
    print(f"      named_local={named_local}")
    print(f"      unnamed_local={unnamed_local}")
    return {
        "key": key,
        "methods": methods,
        "unique_meth": unique_meth,
        "unique_t": unique_t,
        "unique_api": unique_api,
        "unique_lit": unique_lit,
        "unique_mod_eq": unique_mod_eq,
        "tkeys": tkeys,
        "oimps": oimps,
        "named_local": named_local,
        "unnamed_local": unnamed_local,
        "locals": locals_,
    }


pins = []
ambig = []
failed = []
two_imp_families = []
leftover_fail = []


def consider(key, mod, reason, extra=""):
    if skip_name(key) or skip_mod(mod):
        print(f"  SKIP {key} -> {mod} [{reason}] {extra}")
        failed.append((key, mod, "skip", f"{reason} {extra}".strip()))
        return
    if mid_of(mod) in NEVER_PIN_MODS:
        print(f"  SKIP_INVENT_DIST {key} -> {mod} [{reason}] {extra}")
        failed.append((key, mod, "dist_only_widget", f"{reason} {extra}".strip()))
        return
    if key in known_keys:
        print(f"  ALREADY {key} -> {pairs[key]} (cand {mod}) [{reason}]")
        return
    if mod in known_mods:
        print(f"  ALIAS_CAND {key} -> {mod} already={mod_to_names[mod]} [{reason}] {extra}")
        failed.append((key, mod, "alias_second_path", f"{reason} {extra}".strip()))
        return
    if any(k == key for k, _m, _r in pins):
        return
    if any(_m == mod for _k, _m, _r in pins):
        print(f"  COLLIDE {key} -> {mod} already pinned to {[k for k, m, _r in pins if m == mod]}")
        failed.append((key, mod, "collide", f"{reason} {extra}".strip()))
        return
    if key in {"components/Base.js", "utils.js"} or (key.startswith("utils/") and key.count("/") == 1):
        print(f"  REJECT_BARREL {key} -> {mod} [{reason}]")
        return
    pins.append((key, mod, f"{reason} {extra}".strip()))
    print(f"  PIN {key} -> {mod} [{reason}] {extra}")


def distinguish_family(parent_key, unique_kids, orig_unnamed):
    parent_mod = pairs.get(parent_key)
    parent_text = unpacked_texts.get(parent_mod, "")
    expected = [k for k in orig_unnamed if not skip_name(k)]
    remaining_keys = list(expected)
    remaining_mods = list(unique_kids)
    distinguished = {}
    orig_fps = {k: dump_orig_fingerprint(k) for k in expected}
    sibs = set(unique_kids)
    kid_fps = {m: dump_mod_fingerprint(m, sibs) for m in unique_kids}

    def try_needles(get_orig, get_kid):
        nonlocal remaining_keys, remaining_mods
        for key in list(remaining_keys):
            hits = []
            for needle in get_orig(orig_fps[key]):
                if not needle or needle in COMMON_T or needle in WEAK:
                    continue
                sib = []
                for m in remaining_mods:
                    kid_needles = get_kid(kid_fps[m])
                    if needle in kid_needles:
                        sib.append(m)
                if len(sib) == 1:
                    hits.append((sib[0], needle))
            uniq = sorted(set(h[0] for h in hits))
            if len(uniq) == 1:
                kid, needle = hits[0]
                consider(key, kid, "unique_among_siblings", f"{needle} parent={parent_key}")
                distinguished[key] = kid
        remaining_keys[:] = [k for k in remaining_keys if k not in distinguished]
        remaining_mods[:] = [m for m in remaining_mods if m not in distinguished.values()]

    try_needles(lambda fp: fp["unique_meth"], lambda fp: fp["unique_meth"] + fp["unique_meth_sib"])
    try_needles(lambda fp: fp["unique_api"], lambda fp: fp["unique_api"] + fp["unique_api_sib"])
    try_needles(lambda fp: fp["unique_t"], lambda fp: fp["unique_t"] + fp["unique_t_sib"])
    try_needles(lambda fp: fp["unique_lit"], lambda fp: fp["unique_lit"] + fp["unique_lit_sib"])
    try_needles(lambda fp: fp["unique_mod_eq"], lambda fp: fp["unique_mod_eq"])

    for key in list(remaining_keys):
        hits = []
        for name in orig_fps[key]["unique_meth"]:
            files = method_index.get(name, set())
            unn = unnamed_only(files)
            sib = [f for f in unn if f in remaining_mods]
            if len(sib) == 1:
                hits.append((sib[0], name))
            elif len(unn) == 1 and unn[0] in remaining_mods:
                hits.append((unn[0], name))
        uniq_mods = sorted(set(h[0] for h in hits))
        if len(uniq_mods) == 1:
            kid, name = hits[0]
            consider(key, kid, "unique_method", f"{name} parent={parent_key}")
            distinguished[key] = kid
    remaining_keys = [k for k in remaining_keys if k not in distinguished]
    remaining_mods = [m for m in remaining_mods if m not in distinguished.values()]

    if distinguished and remaining_keys and remaining_mods:
        orig_order = [c for c in orig_local_imps.get(parent_key, []) if c in expected]
        unpack_order = [
            m for m in list(dict.fromkeys(imp_unpacked.findall(parent_text)))
            if m in unique_kids
        ]
        print(f"    SEQ orig_order={orig_order}")
        print(f"    SEQ unpack_order={unpack_order}")
        print(f"    SEQ distinguished={[(k, distinguished[k]) for k in distinguished]}")
        if len(orig_order) == len(unpack_order) == len(expected):
            index_ok = False
            for key, kid in distinguished.items():
                if key in orig_order and kid in unpack_order:
                    if orig_order.index(key) == unpack_order.index(kid):
                        index_ok = True
            if index_ok:
                for key, kid in zip(orig_order, unpack_order):
                    if key in remaining_keys and kid in remaining_mods:
                        consider(
                            key, kid, "sequential_after_unique_sibling",
                            f"parent={parent_key} after={list(distinguished)}",
                        )
                        distinguished[key] = kid
            else:
                print("    SEQ index mismatch; not applying")
        elif len(remaining_keys) == 1 and len(remaining_mods) == 1:
            key = remaining_keys[0]
            kid = remaining_mods[0]
            consider(
                key, kid, "sequential_1_1_remaining",
                f"parent={parent_key} after={list(distinguished)}",
            )
            distinguished[key] = kid
        else:
            print("    SEQ not 1:1 remaining", remaining_keys, remaining_mods)

    remaining_keys = [k for k in remaining_keys if k not in distinguished]
    remaining_mods = [m for m in remaining_mods if m not in distinguished.values()]
    if remaining_keys or remaining_mods:
        ambig.append((parent_key, remaining_keys, remaining_mods))
        print(f"    AMBIG remaining_keys={remaining_keys} remaining_mods={remaining_mods}")


def pin_unique_importer_kids(parent_key, dump=True, min_id=800):
    parent_mod = pairs.get(parent_key)
    print(f"\n######## PARENT {parent_key} -> {parent_mod}")
    if not parent_mod:
        print("  PARENT_NOT_NAMED")
        leftover_fail.append((parent_key, None, None, "parent_not_named"))
        return
    parent_text = unpacked_texts.get(parent_mod, "")
    all_kids = list(dict.fromkeys(imp_unpacked.findall(parent_text)))
    print("  unpacked_import_order", [(k, mod_to_names.get(k, ["?"])) for k in all_kids])
    unique_kids = parent_unique_kids(parent_mod, min_id=min_id)
    all_unnamed = parent_all_unnamed_kids(parent_mod, min_id=min_id)
    orig_unnamed = unnamed_locals(parent_key)
    orig_unnamed_all = [
        c for c in orig_all_imps.get(parent_key, [])
        if c not in known_keys and not str(c).endswith((".scss", ".css"))
    ]
    print("  unique_kids", unique_kids)
    print("  all_unnamed_kids", all_unnamed)
    print("  orig_unnamed_local", orig_unnamed)
    print("  orig_unnamed_all", orig_unnamed_all)
    if dump:
        dump_orig_fingerprint(parent_key)
    if len(unique_kids) == 1 and len(orig_unnamed) == 1 and not skip_name(orig_unnamed[0]):
        oimps = sorted(set(orig_imp_targets.get(orig_unnamed[0], [])))
        dump_mod_fingerprint(unique_kids[0], set(unique_kids))
        dump_orig_fingerprint(orig_unnamed[0])
        if oimps == [parent_key]:
            consider(orig_unnamed[0], unique_kids[0], "unique_importer_1_1", f"parent={parent_key}")
        else:
            print(f"    FAIL_OIMPS child={orig_unnamed[0]} oimps={oimps}")
            leftover_fail.append((parent_key, orig_unnamed[0], unique_kids[0], f"oimps={oimps}"))
            failed.append((orig_unnamed[0], unique_kids[0], "oimps", str(oimps)))
            distinguish_family(parent_key, unique_kids, orig_unnamed)
    elif unique_kids and orig_unnamed:
        distinguish_family(parent_key, unique_kids, orig_unnamed)
    elif unique_kids:
        leftover_fail.append((parent_key, orig_unnamed, unique_kids, "unique_kids_no_orig_local"))
        for kid in unique_kids:
            dump_mod_fingerprint(kid, set(unique_kids))
    elif orig_unnamed:
        leftover_fail.append((parent_key, orig_unnamed, unique_kids, "orig_local_no_unique_kid"))
    if all_unnamed and not unique_kids:
        leftover_fail.append((parent_key, orig_unnamed, all_unnamed, "nonunique_kids"))
        for kid in all_unnamed:
            imps = sorted(set(importers[kid]))
            print(f"    NONUNIQUE_KID {kid} importers={[(i, mod_to_names.get(i, ['?'])) for i in imps]}")
            dump_mod_fingerprint(kid, set(all_unnamed))
            if len(imps) == 2:
                two_imp_families.append((parent_key, kid, imps))


print("\n=== LAST5 unnamed unique-importer children (4942/5026/5030/4413/3563) ===")
for parent_key in LAST5_PARENTS:
    pin_unique_importer_kids(parent_key, dump=True, min_id=70)


print("\n=== LAST200 uniquely named parents leftover unique-importer kids ===")
last200 = [k for k in known_order[-200:] if not skip_name(k)]
compact_1_1 = []
for parent_key in last200:
    parent_mod = pairs[parent_key]
    unique_kids = parent_unique_kids(parent_mod)
    orig_unnamed = unnamed_locals(parent_key)
    if not unique_kids and not orig_unnamed:
        continue
    pin_unique_importer_kids(parent_key, dump=False)


print("\n=== leftover orig unique-import children still unnamed ===")
uniq_import_kids = []
for key in sorted(set(orig_files)):
    if key in known_keys or skip_name(key) or not orig_path_for(key):
        continue
    oimps = sorted(set(orig_imp_targets.get(key, [])))
    if len(oimps) != 1:
        continue
    parent_key = oimps[0]
    if parent_key not in known_keys or skip_name(parent_key):
        continue
    uniq_import_kids.append((parent_key, key))
print("unique_import_unnamed_count", len(uniq_import_kids))
seen_parents = set()
for parent_key, child in uniq_import_kids:
    parent_mod = pairs[parent_key]
    unique_kids = parent_unique_kids(parent_mod)
    orig_unnamed = unnamed_locals(parent_key)
    print(f"  UNIQ_IMP {child} parent={parent_key}->{parent_mod} unique_kids={unique_kids} orig_unnamed={orig_unnamed}")
    if parent_key in seen_parents:
        continue
    seen_parents.add(parent_key)
    if unique_kids or orig_unnamed:
        pin_unique_importer_kids(parent_key, dump=False)


print("\n=== remaining orig unique METHOD / API / class-field 1-hit vs UNPACKED ===")
zero_hit = 0
two_hit = 0
method_pins = 0
for key in sorted(set(orig_files)):
    if key in known_keys or skip_name(key) or not orig_path_for(key):
        continue
    text = orig_texts[key]
    unique_m = [n for n in extract_methods(text) if n not in WEAK and orig_method[n] == [key]]
    unique_a = [
        a for a in dict.fromkeys(api_pat.findall(text) + kapis_pat.findall(text))
        if orig_api[a] == [key]
    ]
    unique_mod = [k for k in dict.fromkeys(mod_eq_pat.findall(text)) if orig_mod_eq[k] == [key]]
    unique_rn = [k for k in dict.fromkeys(resource_name_pat.findall(text)) if orig_resource_name[k] == [key]]
    hits = []
    zero = True
    for kind, needles, index in (
        ("method", unique_m, method_index),
        ("api", unique_a, api_index),
        ("module=", unique_mod, mod_eq_index),
        ("resourceName", unique_rn, resource_name_index),
    ):
        for n in needles:
            files = index.get(n, set())
            unn = unnamed_only(files)
            named = [f for f in files if f in known_mods]
            if unn or named:
                zero = False
            if len(unn) == 1:
                hits.append((kind, n, unn[0], len(files)))
            elif len(unn) == 2:
                two_hit += 1
                named_imps = []
                copies = []
                for mod in unn:
                    nimps = [(i, mod_to_names.get(i, ["?"])) for i in sorted(set(importers[mod]))]
                    named_imps.append((mod, nimps))
                    imps = sorted(set(importers[mod]))
                    if len(imps) == 1:
                        copies.append((mod, imps[0], mod_to_names.get(imps[0], ["?"])))
                print(f"  TWO_HIT {key} {kind}:{n!r} unnamed={unn} imps={named_imps}")
                oimps = sorted(set(orig_imp_targets.get(key, [])))
                named_parents = [p for p in oimps if p in known_keys]
                if len(named_parents) == 1:
                    parent_mod = pairs[named_parents[0]]
                    aliased = [m for m in unn if sorted(set(importers[m])) == [parent_mod]]
                    if len(aliased) == 1:
                        consider(
                            key, aliased[0], "unique_aliased_2hit",
                            f"{kind}:{n!r} parent={named_parents[0]}",
                        )
                        continue
                non_whiz = [
                    c for c in copies
                    if c[1] in known_mods and not any("whizard" in n.lower() for n in c[2])
                ]
                if len(non_whiz) == 1 and "whizard" not in key.lower():
                    consider(
                        key, non_whiz[0][0], "unique_aliased_2hit_named_parent",
                        f"{kind}:{n!r} parent={non_whiz[0][2]} unpacked={non_whiz[0][1]}",
                    )
    if zero and (unique_m or unique_a or unique_mod or unique_rn):
        zero_hit += 1
        continue
    mods = sorted(set(m for _a, _b, m, _c in hits))
    if hits:
        oimps = sorted(set(orig_imp_targets.get(key, [])))
        named_parents = [p for p in oimps if p in known_keys]
        print(f"  1HIT {key} named_parents={named_parents[:4]} hits={hits[:6]} mods={mods}")
        if len(mods) == 1:
            consider(key, mods[0], f"unique_1hit {hits[0][0]}:{hits[0][1]!r}", f"parents={named_parents[:2]}")
            method_pins += 1

print("zero_hit_orig_only", zero_hit)
print("two_hit_printed", two_hit)
print("method_api_consider_calls", method_pins)


print("\n=== live vendor fingerprints leftover ===")
aliased = set(re.findall(r"module-(\d+)\.js", WEBPACK + "\n" + RECHARTS))
live = set()
stack = ["entry.js"] if ENTRY.exists() else ["module-759.js"]
seen = set()
while stack:
    cur = stack.pop()
    if cur in seen:
        continue
    seen.add(cur)
    live.add(cur)
    text = unpacked_texts.get(cur, "")
    if not text and cur == "entry.js" and ENTRY.exists():
        text = ENTRY.read_text(encoding="utf-8", errors="ignore")
        unpacked_texts[cur] = text
    for m in imp_unpacked.findall(text):
        stack.append(m)
print("live", len(live), "aliased", len(aliased))
NEEDLES = [
    ("react-draggable", "react-draggable"),
    ("DraggableCore", "DraggableCore"),
    ("jwt-decode", "Invalid token specified"),
    ("LineChart chartName", 'chartName: "LineChart"'),
    ("LineChart chartName eq", 'chartName = "LineChart"'),
    ("semver validRange", "validRange"),
    ("filesize", "filesize"),
    ("js-cookie", "js-cookie"),
    ("uuid v4", "xxxxxxxx-xxxx-4xxx"),
    ("tinycolor2", "tinycolor"),
    ("JSEncrypt", "JSEncrypt"),
    ("EventSource new", "new EventSource"),
    ("sockjs", "sockjs"),
]
for n, needle in NEEDLES:
    files = [f for f, t in unpacked_texts.items() if needle in t]
    live_unnamed = []
    for f in files:
        mid = re.search(r"\d+", f)
        mid = mid.group() if mid else ""
        if f in live and mid not in aliased:
            live_unnamed.append(f)
    if live_unnamed or files:
        print(f"{n}: live_unnamed={live_unnamed[:8]} ({len(live_unnamed)}) files={len(files)}")
        for f in live_unnamed[:4]:
            print(f"    {f} importers={sorted(set(importers[f]))[:6]} head={unpacked_texts[f][:120].replace(chr(10),' | ')}")


print("\n=== DEDUPED NEW PINS ===")
seen = set()
new_count = 0
for key, mod, reason in pins:
    pair = (key, mod)
    if pair in seen:
        continue
    seen.add(pair)
    if mod in known_mods:
        print(f'    ALREADY "{key}": "{mod}",  # {reason}')
        continue
    new_count += 1
    print(f'    "{key}": "{mod}",  # {reason}')
print("new_pin_count", new_count)
print("ambig_count", len(ambig))
for parent_key, keys, mods in ambig:
    print(f"  {parent_key} keys={keys} mods={mods}")
print("failed_count", len(failed))
for item in failed[:60]:
    print("  FAIL", item)
print("leftover_fail_count", len(leftover_fail))
for item in leftover_fail[:80]:
    print("  LEFTOVER", item)
print("two_imp_count", len(two_imp_families))
seen_two = set()
for parent_key, kid, imps in two_imp_families:
    if kid in seen_two:
        continue
    seen_two.add(kid)
    print(f"  TWO {kid} parent={parent_key} imps={[(i, mod_to_names.get(i, ['?'])) for i in imps]}")
