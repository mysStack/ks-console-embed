#!/usr/bin/env python3
"""Slice 58b: all uniquely named parents leftover unique-importer kids,
orig unique-import children still unnamed, unique e.module=/resourceName
1-hit, extra vendor fingerprints. Do not invent aliases."""
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
    "1183", "1764", "1111", "1053", "1112",
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
    "1832", "1831", "851", "1122", "3326", "4448",
}
WHIZARD_COPIES = {
    "4153", "4154", "4219", "4227", "4139", "4144", "4330",
    "4103", "4080", "4107", "4105", "1847",
}
SKIP_MODS |= WHIZARD_COPIES
NEVER_PIN_MODS = {"3680", "3689", "3693", "3698", "3701"}
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
    "Cards/Banner/Tip", "Cards/Banner/Navs", "Cards/Banner/Tabs",
    "Cards/Info",
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
    "module-3472.js", "module-3474.js", "module-3475.js", "module-5775.js",
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
WEAK = {"if", "store", "fetchData", "data", "render", "className", "onClick",
        "state", "super", "switch", "toggle", "close"}

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
imp_unpacked = re.compile(r"""(?:from|require\()\s*['"]\./(module-\d+\.js)""")
imp_orig = re.compile(r"""(?:from|require\()\s*['"]([^'"]+)['"]""")
mod_eq_pat = re.compile(r"""module\s*[:=]\s*['"]([^'"]+)['"]""")
resource_name_pat = re.compile(r"""resourceName\s*[:=]\s*['"]([^'"]+)['"]""")
method_pat = re.compile(
    r"""(?:^|\n)\s*(?:(?:async\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*\([^;{]*\)\s*\{"""
    r"""|([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(?:async\s*)?(?:\([^)]*\)|[A-Za-z_][A-Za-z0-9_]*)\s*=>"""
    r"""|(?:this|n|t|e|r)\.([A-Za-z_][A-Za-z0-9_]*)\s*=\s*function)"""
)
render_pat = re.compile(r"""(?:^|\n)\s*(render[A-Za-z0-9_]*)\s*\(""")


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
        "core/": "core/", "components/": "components/", "utils/": "utils/",
        "stores/": "stores/", "hocs/": "hocs/", "actions/": "actions/",
        "configs/": "configs/", "pages/": "pages/",
        "apps/": "pages/apps/", "projects/": "pages/projects/",
        "clusters/": "pages/clusters/", "workspaces/": "pages/workspaces/",
        "access/": "pages/access/", "devops/": "pages/devops/",
        "fedprojects/": "pages/fedprojects/", "settings/": "pages/settings/",
        "console/": "pages/console/", "edgewize/": "pages/edgewize/",
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
        if name and not name.startswith("_"):
            names.append(name)
    names.extend(render_pat.findall(text))
    return list(dict.fromkeys(names))


print("=== indexing ===", flush=True)
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
    return [f for f in files if f not in known_mods and not skip_mod(f) and f not in VENDOR]


def is_css_or_skip(m):
    return m in known_mods or is_css(m) or skip_mod(m) or m in VENDOR or int(mid_of(m)) < 70


print("\n=== 3331/2853 unnamed JS children ===")
for parent_key, parent_mod in [
    ("pages/fedprojects/components/RouteRulesEdit.js", "module-3331.js"),
    ("components/Modals/CustomMonitoring/store.js", "module-2853.js"),
]:
    kids = list(dict.fromkeys(imp_unpacked.findall(unpacked_texts[parent_mod])))
    print(f"PARENT {parent_key} {parent_mod}")
    for m in kids:
        css = is_css(m)
        named = mod_to_names.get(m, [])
        imps = sorted(set(importers[m]))
        print(f"  kid {m} css={css} named={named} nimp={len(imps)} unique={imps==[parent_mod]}")
        if not css and m not in known_mods and m not in VENDOR:
            print(f"    importers={[(i, mod_to_names.get(i, ['?'])) for i in imps][:8]}")
            print(f"    t={list(dict.fromkeys(t_pat.findall(unpacked_texts[m])))[:8]}")
            print(f"    methods={extract_methods(unpacked_texts[m])[:10]}")
    print("  orig_local", orig_local_imps.get(parent_key))
    print("  orig_all", orig_all_imps.get(parent_key))
    print("  orig unique-import unnamed", [
        c for c in orig_all_imps.get(parent_key, [])
        if c not in known_keys and not str(c).endswith((".scss", ".css"))
    ])


print("\n=== ALL uniquely named parents: unique unnamed JS kids ===")
cands = []
fails = []
for parent_key, parent_mod in pairs.items():
    if skip_name(parent_key):
        continue
    parent_text = unpacked_texts.get(parent_mod, "")
    unique_kids = []
    for m in list(dict.fromkeys(imp_unpacked.findall(parent_text))):
        if is_css_or_skip(m):
            continue
        if sorted(set(importers[m])) == [parent_mod]:
            unique_kids.append(m)
    orig_unnamed_local = [
        c for c in orig_local_imps.get(parent_key, [])
        if c not in known_keys and not str(c).endswith((".scss", ".css")) and not skip_name(c)
    ]
    orig_unnamed_all = [
        c for c in orig_all_imps.get(parent_key, [])
        if c not in known_keys and not str(c).endswith((".scss", ".css")) and not skip_name(c)
    ]
    orig_unique_children = []
    for c in orig_unnamed_all:
        oimps = sorted(set(orig_imp_targets.get(c, [])))
        if oimps == [parent_key]:
            orig_unique_children.append(c)
    if not unique_kids and not orig_unique_children:
        continue
    if unique_kids or orig_unique_children:
        print(f"P {parent_key}->{parent_mod} unique_kids={unique_kids} orig_uniq_child={orig_unique_children} orig_unnamed_local={orig_unnamed_local} orig_unnamed_all={orig_unnamed_all}")
        if len(unique_kids) == 1 and len(orig_unique_children) == 1:
            kid = unique_kids[0]
            child = orig_unique_children[0]
            otext = orig_texts.get(child, "")
            utext = unpacked_texts[kid]
            o_t = [k for k in dict.fromkeys(t_pat.findall(otext)) if orig_t[k] == [child] and k not in COMMON_T]
            u_t = [k for k in dict.fromkeys(t_pat.findall(utext)) if unnamed_only(t_index[k]) == [kid]]
            o_m = [n for n in extract_methods(otext) if orig_method[n] == [child] and n not in WEAK]
            u_m = [n for n in extract_methods(utext) if unnamed_only(method_index[n]) == [kid]]
            shared_t = sorted(set(o_t) & set(t_pat.findall(utext)))
            shared_m = sorted(set(o_m) & set(extract_methods(utext)))
            print(f"  1_1_CAND {child} -> {kid} shared_unique_t={shared_t[:6]} shared_unique_m={shared_m[:6]} o_t={o_t[:4]} u_t={u_t[:4]} o_m={o_m[:4]} u_m={u_m[:4]}")
            if shared_t or shared_m or (not o_t and not o_m):
                cands.append((child, kid, parent_key, shared_t, shared_m))
            else:
                fails.append((child, kid, parent_key, "1_1_no_shared_unique_needle", o_t, o_m, u_t, u_m))
        elif unique_kids and orig_unique_children:
            fails.append((orig_unique_children, unique_kids, parent_key, "family_not_1_1", orig_unnamed_all, None, None, None))
        elif unique_kids:
            fails.append((orig_unique_children, unique_kids, parent_key, "unique_kids_no_orig_unique_child", orig_unnamed_all, None, None, None))
        else:
            fails.append((orig_unique_children, unique_kids, parent_key, "orig_unique_child_no_unique_kid", orig_unnamed_all, None, None, None))


print("\n=== unique remaining orig unique-import children of uniquely named parents ===")
n_skip = 0
n_no_parent_named = 0
n_parent_skip = 0
shown = 0
for key in sorted(set(orig_files)):
    if key in known_keys:
        continue
    if skip_name(key):
        n_skip += 1
        continue
    if not orig_path_for(key):
        continue
    oimps = sorted(set(orig_imp_targets.get(key, [])))
    if len(oimps) != 1:
        continue
    parent_key = oimps[0]
    if parent_key not in known_keys:
        n_no_parent_named += 1
        continue
    if skip_name(parent_key):
        n_parent_skip += 1
        continue
    parent_mod = pairs[parent_key]
    unique_kids = [
        m for m in list(dict.fromkeys(imp_unpacked.findall(unpacked_texts.get(parent_mod, ""))))
        if not is_css_or_skip(m) and sorted(set(importers[m])) == [parent_mod]
    ]
    print(f"UNIQ_IMP {key} parent={parent_key}->{parent_mod} unique_kids={unique_kids} oimps={oimps}")
    shown += 1
print("shown", shown, "skip_name", n_skip, "parent_unnamed", n_no_parent_named, "parent_skip", n_parent_skip)


print("\n=== unique remaining e.module= / resourceName 1-hit ===")
zero = 0
two = 0
one = 0
pins = []
for key in sorted(set(orig_files)):
    if key in known_keys or skip_name(key) or not orig_path_for(key):
        continue
    text = orig_texts[key]
    unique_mod = [k for k in dict.fromkeys(mod_eq_pat.findall(text)) if orig_mod_eq[k] == [key]]
    unique_rn = [k for k in dict.fromkeys(resource_name_pat.findall(text)) if orig_resource_name[k] == [key]]
    if not unique_mod and not unique_rn:
        continue
    hits = []
    saw = False
    for kind, needles, index in (
        ("module=", unique_mod, mod_eq_index),
        ("resourceName", unique_rn, resource_name_index),
    ):
        for n in needles:
            files = index.get(n, set())
            unn = unnamed_only(files)
            named = [f for f in files if f in known_mods]
            if unn or named:
                saw = True
            if len(unn) == 1:
                hits.append((kind, n, unn[0], sorted(set(importers[unn[0]]))))
            elif len(unn) == 2:
                two += 1
                print(f"  TWO {key} {kind}:{n!r} unnamed={unn} named={named[:2]} orig_imp={sorted(set(orig_imp_targets.get(key, [])))}")
            elif not unn and not named:
                print(f"  ZERO {key} {kind}:{n!r}")
    if hits:
        mods = sorted(set(h[2] for h in hits))
        print(f"  ONE {key} hits={hits} mods={mods} orig_imp={sorted(set(orig_imp_targets.get(key, [])))[:4]}")
        one += 1
        if len(mods) == 1:
            pins.append((key, mods[0], hits[0]))
    elif not saw:
        zero += 1
print("module_rn_one", one, "two", two, "zero", zero, "pin_cands", pins)


print("\n=== extra vendor fingerprints live ===")
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
    ("semver validRange", "validRange"),
    ("filesize", "filesize"),
    ("js-cookie", "js-cookie"),
    ("uuid v4", "xxxxxxxx-xxxx-4xxx"),
    ("tinycolor2", "tinycolor"),
    ("JSEncrypt", "JSEncrypt"),
    ("EventSource", "new EventSource"),
    ("sockjs", "sockjs"),
    ("async-validator Schema", "new Schema"),
    ("copy-to-clipboard", "copy-to-clipboard"),
    ("react-virtualized AutoSizer", "AutoSizer"),
    ("fast-deep-equal", "fast-deep-equal"),
    ("object-assign", "object-assign"),
    ("hoist-non-react-statics", "hoist-non-react-statics"),
    ("tiny-invariant", "tiny-invariant"),
    ("warning invariant", "invariant("),
]
for n, needle in NEEDLES:
    files = [f for f, t in unpacked_texts.items() if needle in t]
    live_unnamed = []
    for f in files:
        mid = re.search(r"\d+", f)
        mid = mid.group() if mid else ""
        if f in live and mid not in aliased and f not in known_mods:
            live_unnamed.append(f)
    if live_unnamed:
        print(f"{n}: live_unnamed={live_unnamed[:8]} ({len(live_unnamed)}) files={len(files)}")
        for f in live_unnamed[:3]:
            print(f"    {f} importers={sorted(set(importers[f]))[:6]}")


print("\n=== 1_1 CANDS ===")
for item in cands:
    print("  CAND", item)
print("cand_count", len(cands))
print("\n=== leftover unique-importer fails (compact) ===")
print("fail_count", len(fails))
for item in fails:
    print("  FAIL", item[2], item[3], "kids", item[1], "orig_uniq", item[0])
