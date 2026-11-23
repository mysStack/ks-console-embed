#!/usr/bin/env python3
"""Slice 49: unnamed JS children of last-11 uniquely named parents.

Plus WHIZARD page parents then copies 4153/4154 and 4218/4219/4227 under
WHIZARD original paths only; remaining unnamed orig pages for edgewize,
node-groups, whizard, apps; remaining unnamed kids of IngressCard 4985
besides skip 1981 / scss 4987.
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
    "3753", "3772", "3774", "3776", "3778", "3780", "1981",
    "1135", "1798", "1800",
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
    "FluxApp", "ChartCard",
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

LAST11_PARENTS = [
    "pages/fedprojects/containers/Applications/Detail/AppIngresses/Ingresses.js",
    "pages/fedprojects/containers/Applications/Detail/AppIngresses/Ingresses/IngressCard.js",
    "pages/clusters/containers/Monitor/Resource/Ranking/Project.js",
    "pages/projects/components/Modals/RepoApp/AppDetail/Banner.js",
    "pages/clusters/containers/Nodes/Detail/RunningStatus/ConditionCard.js",
    "pages/clusters/containers/Nodes/Detail/RunningStatus/TaintCard.js",
    "pages/clusters/containers/EdgeNodes/Detail/RunningStatus/ConditionCard.js",
    "pages/clusters/containers/EdgeNodes/Detail/RunningStatus/TaintCard.js",
    "pages/clusters/containers/Monitor/Resource/Usage/Trend.js",
    "pages/projects/components/Modals/GrayReleaseDetail/Monitor/Circle.js",
    "pages/projects/components/Modals/GrayReleaseDetail/Monitor/Line.js",
]

WHIZARD_PARENTS = [
    "pages/whizard-telemetry/monitor-resource.js",
    "pages/whizard-telemetry/nodes.js",
    "pages/whizard-telemetry/nodes/Detail.js",
    "pages/whizard-telemetry/edgenodes.js",
    "pages/whizard-telemetry/edgenodes/Detail.js",
]

COPY_PAIRS = [
    ("4154", "4153", "pages/whizard-telemetry/monitor-resource.js"),
    ("4227", "4219", "pages/whizard-telemetry/nodes/Detail.js"),
]

PAGE_PREFIXES = (
    "pages/edgewize/",
    "pages/node-groups/",
    "pages/whizard-telemetry/",
    "pages/apps/",
)

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

pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY))
known_keys = set(pairs)
known_mods = set(pairs.values())
mod_to_names = defaultdict(list)
for k, v in pairs.items():
    mod_to_names[v].append(k)

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
imp_unpacked = re.compile(r"""(?:from|require\()\s*['"]\./(module-\d+\.js)""")
imp_orig = re.compile(r"""(?:from|require\()\s*['"]([^'"]+)['"]""")
mod_eq_pat = re.compile(r"""module\s*[:=]\s*['"]([^'"]+)['"]""")
route_pat = re.compile(r"""(?:path|name)\s*[:=]\s*['"]([^'"]{4,})['"]""")
COMMON_METHODS = {
    "constructor", "render", "componentDidMount", "componentWillUnmount",
    "componentDidUpdate", "componentWillMount", "shouldComponentUpdate",
    "getDerivedStateFromProps", "componentDidCatch", "renderHeader",
    "renderContent", "renderToolbar", "renderEmpty", "renderTable",
    "renderList", "renderForm", "renderModal", "handleSubmit",
}


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
    return list(dict.fromkeys(names))


print("=== indexing unpacked ===", flush=True)
unpacked_texts = {}
t_index = defaultdict(set)
api_index = defaultdict(set)
str_index = defaultdict(set)
method_index = defaultdict(set)
mod_eq_index = defaultdict(set)
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
    for m in imp_unpacked.findall(text):
        importers[m].append(path.name)

print("=== indexing orig ===", flush=True)
orig_texts = {}
orig_t = defaultdict(list)
orig_api = defaultdict(list)
orig_str = defaultdict(list)
orig_method = defaultdict(list)
orig_mod_eq = defaultdict(list)
orig_imp_targets = defaultdict(list)
orig_local_imps = defaultdict(list)
orig_all_imps = defaultdict(list)
page_keys = []
for p in SRC.rglob("*"):
    if not p.is_file() or p.suffix not in {".js", ".jsx"}:
        continue
    if ".test." in p.name or p.name.endswith(".spec.js"):
        continue
    rel = p.relative_to(SRC).as_posix()
    key = norm_key(rel)
    text = p.read_text(encoding="utf-8", errors="ignore")
    orig_texts[key] = text
    if key.startswith("pages/"):
        page_keys.append(key)
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


def parent_unique_kids(parent_mod, extra_known=None):
    extra_known = extra_known or set()
    kids = []
    parent_text = unpacked_texts.get(parent_mod, "")
    for m in list(dict.fromkeys(imp_unpacked.findall(parent_text))):
        if m in known_mods or m in extra_known or is_css(m) or skip_mod(m):
            continue
        if int(mid_of(m)) < 70:
            continue
        if sorted(set(importers[m])) == [parent_mod]:
            kids.append(m)
    return kids


def parent_all_unnamed_kids(parent_mod):
    kids = []
    parent_text = unpacked_texts.get(parent_mod, "")
    for m in list(dict.fromkeys(imp_unpacked.findall(parent_text))):
        if m in known_mods or is_css(m) or skip_mod(m):
            continue
        if int(mid_of(m)) < 70:
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
    unique_t = []
    unique_t_sib = []
    for k in tkeys:
        files = t_index[k]
        unn = unnamed_only(files)
        if files == {mod} or unn == [mod]:
            unique_t.append(k)
        sib = [f for f in unn if f in sibling_mods]
        if sib == [mod]:
            unique_t_sib.append(k)
    unique_api = []
    unique_api_sib = []
    for a in apis:
        files = api_index[a]
        unn = unnamed_only(files)
        if files == {mod} or unn == [mod]:
            unique_api.append(a)
        sib = [f for f in unn if f in sibling_mods]
        if sib == [mod]:
            unique_api_sib.append(a)
    unique_lit = []
    unique_lit_sib = []
    for s in list(dict.fromkeys(str_pat.findall(text))):
        files = str_index[s]
        unn = unnamed_only(files)
        if (files == {mod} or unn == [mod]) and len(s) >= 10:
            unique_lit.append(s)
        sib = [f for f in unn if f in sibling_mods]
        if sib == [mod] and len(s) >= 10:
            unique_lit_sib.append(s)
    unique_meth = []
    unique_meth_sib = []
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
    print(f"    KID {mod} importers={[ (i, mod_to_names.get(i, ['?'])) for i in sorted(set(importers[mod])) ]}")
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


def consider(key, mod, reason, extra=""):
    if skip_name(key) or skip_mod(mod):
        print(f"  SKIP {key} -> {mod} [{reason}] {extra}")
        failed.append((key, mod, "skip", f"{reason} {extra}".strip()))
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
    pins.append((key, mod, f"{reason} {extra}".strip()))
    print(f"  PIN {key} -> {mod} [{reason}] {extra}")


def pin_unique_importer_kids(parent_key, extra_known=None):
    extra_known = extra_known or set()
    parent_mod = pairs.get(parent_key)
    print(f"\n######## PARENT {parent_key} -> {parent_mod}")
    if not parent_mod:
        print("  PARENT_NOT_NAMED")
        return
    parent_text = unpacked_texts.get(parent_mod, "")
    all_kids = list(dict.fromkeys(imp_unpacked.findall(parent_text)))
    print("  unpacked_import_order", [(k, mod_to_names.get(k, ["?"])) for k in all_kids])
    unique_kids = parent_unique_kids(parent_mod, extra_known)
    all_unnamed = parent_all_unnamed_kids(parent_mod)
    orig_unnamed = unnamed_locals(parent_key, extra_known)
    orig_unnamed_all = [
        c for c in orig_all_imps.get(parent_key, [])
        if c not in known_keys and not str(c).endswith((".scss", ".css"))
    ]
    print("  unique_kids", unique_kids)
    print("  all_unnamed_kids", all_unnamed)
    print("  orig_unnamed_local", orig_unnamed)
    print("  orig_unnamed_all", orig_unnamed_all)
    dump_orig_fingerprint(parent_key)
    sibs = set(unique_kids)
    for kid in unique_kids:
        fp = dump_mod_fingerprint(kid, sibs)
        if len(unique_kids) == 1 and len(orig_unnamed) == 1 and not skip_name(orig_unnamed[0]):
            oimps = sorted(set(orig_imp_targets.get(orig_unnamed[0], [])))
            if oimps == [parent_key]:
                consider(orig_unnamed[0], kid, "unique_importer_1_1", f"parent={parent_key}")
        for name in fp["unique_meth"][:8]:
            orig_hits = orig_method.get(name, [])
            unnamed_orig = [h for h in orig_hits if h not in known_keys]
            print(f"      unique_method_orig {name!r} orig={sorted(set(orig_hits))[:6]} unnamed={unnamed_orig[:4]}")
            if unnamed_orig == [x for x in unnamed_orig if not skip_name(x)] and len(set(unnamed_orig)) == 1:
                oimps = sorted(set(orig_imp_targets.get(unnamed_orig[0], [])))
                if oimps == [parent_key] or parent_key in oimps and len(oimps) == 1:
                    consider(unnamed_orig[0], kid, "unique_method", f"{name} parent={parent_key}")
        for k in fp["unique_t"][:6]:
            orig_hits = orig_t.get(k, [])
            unnamed_orig = [h for h in orig_hits if h not in known_keys]
            print(f"      unique_t_orig {k!r} orig={sorted(set(orig_hits))[:6]} unnamed={unnamed_orig[:4]}")
            if len(set(unnamed_orig)) == 1 and not skip_name(unnamed_orig[0]):
                oimps = sorted(set(orig_imp_targets.get(unnamed_orig[0], [])))
                if oimps == [parent_key]:
                    consider(unnamed_orig[0], kid, "unique_t", f"{k} parent={parent_key}")
        for s in fp["unique_lit"][:6]:
            orig_hits = orig_str.get(s, [])
            unnamed_orig = [h for h in orig_hits if h not in known_keys]
            print(f"      unique_lit_orig {s!r} orig={sorted(set(orig_hits))[:6]} unnamed={unnamed_orig[:4]}")
            if len(set(unnamed_orig)) == 1 and not skip_name(unnamed_orig[0]):
                oimps = sorted(set(orig_imp_targets.get(unnamed_orig[0], [])))
                if oimps == [parent_key]:
                    consider(unnamed_orig[0], kid, "unique_lit", f"{s} parent={parent_key}")
        for a in fp["unique_api"][:4]:
            orig_hits = orig_api.get(a, [])
            unnamed_orig = [h for h in orig_hits if h not in known_keys]
            print(f"      unique_api_orig {a!r} orig={sorted(set(orig_hits))[:6]} unnamed={unnamed_orig[:4]}")
        for k in fp["unique_mod_eq"][:4]:
            orig_hits = orig_mod_eq.get(k, [])
            unnamed_orig = [h for h in orig_hits if h not in known_keys]
            print(f"      unique_mod_eq_orig {k!r} orig={sorted(set(orig_hits))[:6]} unnamed={unnamed_orig[:4]}")
    if unique_kids and orig_unnamed and not (len(unique_kids) == 1 and len(orig_unnamed) == 1):
        print(f"    AMBIG unique_kids={unique_kids} orig_unnamed={orig_unnamed}")
        ambig.append((parent_key, orig_unnamed, unique_kids))
    if all_unnamed and not unique_kids:
        for kid in all_unnamed:
            imps = sorted(set(importers[kid]))
            print(f"    NONUNIQUE_KID {kid} importers={[ (i, mod_to_names.get(i, ['?'])) for i in imps ]}")
            if len(imps) == 2:
                two_imp_families.append((parent_key, kid, imps))


print("\n=== LAST11 unnamed unique-importer children ===")
for parent_key in LAST11_PARENTS:
    pin_unique_importer_kids(parent_key)


print("\n=== IngressCard 4985 remaining unnamed children (skip 1981 / css 4987) ===")
ingress_parent = "pages/fedprojects/containers/Applications/Detail/AppIngresses/Ingresses/IngressCard.js"
ingress_mod = pairs.get(ingress_parent)
print("  named", ingress_mod)
if ingress_mod:
    pin_unique_importer_kids(ingress_parent)
    parent_text = unpacked_texts.get(ingress_mod, "")
    for m in list(dict.fromkeys(imp_unpacked.findall(parent_text))):
        mid = mid_of(m)
        print(f"  CARD_KID {m} named={mod_to_names.get(m, [])} css={is_css(m)} skip={skip_mod(m)} importers={[ (i, mod_to_names.get(i, ['?'])) for i in sorted(set(importers[m])) ]}")
        if mid in {"1981", "4987"} or is_css(m):
            print("    skipped_as_requested")


print("\n=== WHIZARD named parents + copies 4153/4154 4218/4219/4227 ===")
for parent_key in WHIZARD_PARENTS:
    pin_unique_importer_kids(parent_key)

for mid in ("4152", "4153", "4154", "4218", "4219", "4227", "4228", "4229"):
    mod = f"module-{mid}.js"
    print(f"\n  MOD {mod} named={mod_to_names.get(mod, [])}")
    if mod not in unpacked_texts:
        print("    MISSING")
        continue
    dump_mod_fingerprint(mod, {mod})
    print("    importers_named", [(i, mod_to_names.get(i, ["?"])) for i in sorted(set(importers.get(mod, [])))])

print("\n=== COPY PAIRS under WHIZARD original paths only ===")
for copy_mid, orig_mid, parent_key in COPY_PAIRS:
    copy_mod = f"module-{copy_mid}.js"
    src_mod = f"module-{orig_mid}.js"
    parent_mod = pairs.get(parent_key)
    print(f"\n  COPY {copy_mod} <- {src_mod} parent={parent_key}->{parent_mod}")
    print(f"    copy named={mod_to_names.get(copy_mod, [])} src named={mod_to_names.get(src_mod, [])}")
    print(f"    copy importers={[ (i, mod_to_names.get(i, ['?'])) for i in sorted(set(importers.get(copy_mod, []))) ]}")
    print(f"    src importers={[ (i, mod_to_names.get(i, ['?'])) for i in sorted(set(importers.get(src_mod, []))) ]}")
    if not parent_mod:
        print("    PARENT_NOT_NAMED")
        continue
    parent_text = unpacked_texts.get(parent_mod, "")
    parent_kids = list(dict.fromkeys(imp_unpacked.findall(parent_text)))
    print("    parent_kids", [(k, mod_to_names.get(k, ["?"])) for k in parent_kids])
    unique_kids = parent_unique_kids(parent_mod)
    print("    unique_kids", unique_kids)
    orig_unnamed = unnamed_locals(parent_key)
    print("    orig_unnamed_local", orig_unnamed)
    copy_imported = copy_mod in parent_kids
    src_imported = src_mod in parent_kids
    unique_import_copy = sorted(set(importers.get(copy_mod, []))) == [parent_mod]
    unique_import_src = sorted(set(importers.get(src_mod, []))) == [parent_mod]
    print("    copy_imported", copy_imported, "unique_import_copy", unique_import_copy)
    print("    src_imported", src_imported, "unique_import_src", unique_import_src)
    if copy_mod in unpacked_texts:
        dump_mod_fingerprint(copy_mod, set(unique_kids) | {copy_mod, src_mod})
    if src_mod in unpacked_texts:
        dump_mod_fingerprint(src_mod, set(unique_kids) | {copy_mod, src_mod})
    # name unique importer of uniquely named WHIZARD parent matching original unique import
    for cand_mod, unique_imp in ((src_mod, unique_import_src), (copy_mod, unique_import_copy)):
        if not unique_imp or cand_mod not in parent_kids or cand_mod in known_mods:
            continue
        if len(orig_unnamed) == 1:
            key = orig_unnamed[0]
            oimps = sorted(set(orig_imp_targets.get(key, [])))
            if oimps == [parent_key] and unique_kids == [cand_mod]:
                consider(key, cand_mod, "unique_importer_whizard", f"parent={parent_key}")
        else:
            for key in orig_unnamed:
                if skip_name(key) or "clusters/containers" in key:
                    continue
                if not key.startswith("pages/whizard-telemetry/"):
                    continue
                fp = dump_orig_fingerprint(key)
                needles = fp["unique_meth"] + fp["unique_t"] + fp["unique_lit"] + fp["unique_api"] + fp["unique_mod_eq"]
                hits = []
                for needle in needles:
                    if not needle or needle in COMMON_T or needle == "store":
                        continue
                    sib = [m for m in unique_kids if needle in unpacked_texts.get(m, "")]
                    if sib == [cand_mod]:
                        hits.append(needle)
                print(f"    WHIZARD_MATCH {key} cand={cand_mod} hits={hits[:6]}")
                if hits:
                    consider(key, cand_mod, "unique_whizard_needle", f"{hits[0]!r} parent={parent_key}")
                    break


print("\n=== remaining unnamed orig pages edgewize / node-groups / whizard / apps ===")
page_cands = []
for key in sorted(page_keys):
    if key in known_keys or skip_name(key):
        continue
    if not any(key.startswith(p) for p in PAGE_PREFIXES):
        continue
    op = orig_path_for(key)
    if not op:
        continue
    fp = dump_orig_fingerprint(key)
    oimps = fp["oimps"]
    named_unique_parent = None
    if len(oimps) == 1 and oimps[0] in known_keys:
        named_unique_parent = oimps[0]
    unique_needles = []
    for k in fp["unique_t"]:
        files = t_index.get(k, set())
        unn = unnamed_only(files)
        if len(unn) == 1:
            unique_needles.append(("t", k, unn[0]))
    for name in fp["unique_meth"]:
        files = method_index.get(name, set())
        unn = unnamed_only(files)
        if len(unn) == 1:
            unique_needles.append(("method", name, unn[0]))
    for s in fp["unique_lit"]:
        files = str_index.get(s, set())
        unn = unnamed_only(files)
        if len(unn) == 1:
            unique_needles.append(("lit", s, unn[0]))
    for a in fp["unique_api"]:
        files = api_index.get(a, set())
        unn = unnamed_only(files)
        if len(unn) == 1:
            unique_needles.append(("api", a, unn[0]))
    for k in fp["unique_mod_eq"]:
        files = mod_eq_index.get(k, set())
        unn = unnamed_only(files)
        if len(unn) == 1:
            unique_needles.append(("module=", k, unn[0]))
    print(f"  PAGE {key} unique_parent={named_unique_parent} needles={unique_needles[:6]}")
    page_cands.append((key, named_unique_parent, unique_needles, fp))
    if named_unique_parent:
        parent_mod = pairs[named_unique_parent]
        unique_kids = parent_unique_kids(parent_mod)
        orig_unnamed = unnamed_locals(named_unique_parent)
        if unique_kids == [unique_kids[0]] if unique_kids else False:
            if orig_unnamed == [key] and len(unique_kids) == 1:
                consider(key, unique_kids[0], "unique_importer_page", f"parent={named_unique_parent}")
    needle_mods = sorted(set(m for _k, _n, m in unique_needles))
    if len(needle_mods) == 1:
        mod = needle_mods[0]
        kinds = [k for k, _n, m in unique_needles if m == mod]
        consider(key, mod, "unique_1hit_page", f"{kinds[0]}:{unique_needles[0][1]!r}")

print("page_unnamed_count", len(page_cands))


print("\n=== remaining uniquely-named-parent kids that failed uniqueness ===")
failed_kids = []
for parent_key, parent_mod in sorted(pairs.items()):
    if not parent_key.startswith("pages/"):
        continue
    all_unnamed = parent_all_unnamed_kids(parent_mod)
    unique_kids = parent_unique_kids(parent_mod)
    orig_unnamed = unnamed_locals(parent_key)
    if not all_unnamed and not orig_unnamed:
        continue
    if all_unnamed or orig_unnamed:
        if unique_kids != all_unnamed or len(unique_kids) != 1 or orig_unnamed != [orig_unnamed[0]] if orig_unnamed else True:
            if all_unnamed or orig_unnamed:
                failed_kids.append((parent_key, parent_mod, orig_unnamed, all_unnamed, unique_kids))

print("failed_named_parent_kid_families", len(failed_kids))
for parent_key, parent_mod, orig_unnamed, all_unnamed, unique_kids in failed_kids[:40]:
    print(f"  FAILKID {parent_key}->{parent_mod} orig_unnamed={orig_unnamed} all_unnamed={all_unnamed} unique_kids={unique_kids}")
    for kid in all_unnamed:
        imps = sorted(set(importers[kid]))
        if len(imps) == 2:
            two_imp_families.append((parent_key, kid, imps))
            print(f"    TWO_IMP {kid} {[ (i, mod_to_names.get(i, ['?'])) for i in imps ]}")


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
for item in failed:
    print("  FAIL", item)
print("two_imp_count", len(two_imp_families))
seen_two = set()
for parent_key, kid, imps in two_imp_families:
    if kid in seen_two:
        continue
    seen_two.add(kid)
    print(f"  TWO {kid} parent={parent_key} imps={[ (i, mod_to_names.get(i, ['?'])) for i in imps ]}")
