#!/usr/bin/env python3
"""Slice 57b: leftover unique-importer candidates after last5 leaves.
Focus: ResourceUsage remaining SimpleArea vs PhysicalResourceItem; UsageCard
2-importer VolumeUsage; unique alias-import kids of uniquely named parents
in src/components and src/pages; unique e.module=/resourceName 1-hit;
unique kids of last 400 named parents.
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
}
WEAK = {"if", "store", "fetchData", "data", "render", "className", "onClick", "state", "super"}

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
imp_unpacked = re.compile(r"""(?:from|require\()\s*['"]\./(module-\d+\.js)""")
imp_orig = re.compile(r"""(?:from|require\()\s*['"]([^'"]+)['"]""")
mod_eq_pat = re.compile(r"""(?:module|e\.module)\s*[:=]\s*['"]([^'"]+)['"]""")
resource_name_pat = re.compile(r"""resourceName\s*[:=]\s*['"]([^'"]+)['"]""")
method_pat = re.compile(
    r"""(?:^|\n)\s*(?:(?:async\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*\([^;{]*\)\s*\{"""
    r"""|([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(?:async\s*)?(?:\([^)]*\)|[A-Za-z_][A-Za-z0-9_]*)\s*=>"""
    r"""|(?:this|n|t|e|r)\.([A-Za-z_][A-Za-z0-9_]*)\s*=\s*function)"""
)
render_pat = re.compile(r"""(?:^|\n)\s*(render[A-Z][A-Za-z0-9_]*)\s*\(""")


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
    return [f for f in files if f not in known_mods and not skip_mod(f)]


def parent_unique_kids(parent_mod, min_id=70):
    kids = []
    parent_text = unpacked_texts.get(parent_mod, "")
    for m in list(dict.fromkeys(imp_unpacked.findall(parent_text))):
        if m in known_mods or is_css(m) or skip_mod(m) or m in VENDOR:
            continue
        if int(mid_of(m)) < min_id:
            continue
        if sorted(set(importers[m])) == [parent_mod]:
            kids.append(m)
    return kids


def dump_mod(mod, sibling_mods=None):
    sibling_mods = sibling_mods or set()
    text = unpacked_texts[mod]
    tkeys = list(dict.fromkeys(t_pat.findall(text)))
    methods = extract_methods(text)
    unique_t = [k for k in tkeys if unnamed_only(t_index[k]) == [mod] or t_index[k] == {mod}]
    unique_meth = [n for n in methods if unnamed_only(method_index[n]) == [n and method_index[n] and unnamed_only(method_index[n])] or unnamed_only(method_index[n]) == [mod]]
    unique_lit = [
        s for s in list(dict.fromkeys(str_pat.findall(text)))
        if len(s) >= 10 and (unnamed_only(str_index[s]) == [mod] or str_index[s] == {mod})
    ]
    unique_mod_eq = [k for k in dict.fromkeys(mod_eq_pat.findall(text)) if unnamed_only(mod_eq_index[k]) == [mod]]
    unique_rn = [k for k in dict.fromkeys(resource_name_pat.findall(text)) if unnamed_only(resource_name_index[k]) == [mod]]
    print(f"  {mod} named={mod_to_names.get(mod, [])} css={is_css(mod)}")
    print("    importers", [(i, mod_to_names.get(i, ["?"])) for i in sorted(set(importers[mod]))][:12])
    print("    methods", methods[:16])
    print("    unique_meth", unique_meth[:8])
    print("    t", tkeys[:12], "unique_t", unique_t[:8])
    print("    unique_lit", unique_lit[:8])
    print("    unique_mod_eq", unique_mod_eq[:6], "unique_rn", unique_rn[:6])
    print("    kids", [(k, mod_to_names.get(k, ["?"])) for k in list(dict.fromkeys(imp_unpacked.findall(text)))[:14]])
    print("    head", text[:240].replace("\n", " | "))


def dump_orig(key):
    text = orig_texts.get(key, "")
    methods = extract_methods(text)
    tkeys = list(dict.fromkeys(t_pat.findall(text)))
    unique_t = [k for k in tkeys if orig_t[k] == [key]]
    unique_meth = [n for n in methods if orig_method[n] == [key]]
    unique_lit = [s for s in dict.fromkeys(str_pat.findall(text)) if orig_str[s] == [key] and len(s) >= 10]
    unique_mod_eq = [k for k in dict.fromkeys(mod_eq_pat.findall(text)) if orig_mod_eq[k] == [key]]
    unique_rn = [k for k in dict.fromkeys(resource_name_pat.findall(text)) if orig_resource_name[k] == [key]]
    print(f"  ORIG {key} exists={bool(orig_path_for(key))} skip={skip_name(key)}")
    print("    orig_importers", sorted(set(orig_imp_targets.get(key, []))))
    print("    methods", methods[:16], "unique_meth", unique_meth[:8])
    print("    t", tkeys[:12], "unique_t", unique_t[:8])
    print("    unique_lit", unique_lit[:8])
    print("    unique_mod_eq", unique_mod_eq[:6], "unique_rn", unique_rn[:6])
    locals_ = [c for c in orig_local_imps.get(key, []) if not str(c).endswith((".scss", ".css"))]
    print("    named_local", [(c, pairs.get(c)) for c in locals_ if c in known_keys])
    print("    unnamed_local", [c for c in locals_ if c not in known_keys])


print("\n=== ResourceUsage 4940 remaining after AppResourceItem/TinyArea ===")
dump_mod("module-4940.js")
dump_orig("pages/fedprojects/containers/Overview/ResourceUsage.js")
ru_kids = [
    m for m in dict.fromkeys(imp_unpacked.findall(unpacked_texts["module-4940.js"]))
    if m not in known_mods and not is_css(m) and not skip_mod(m) and m not in VENDOR
]
ru_unique = [m for m in ru_kids if sorted(set(importers[m])) == ["module-4940.js"]]
print("  unnamed_js", ru_kids, "unique", ru_unique)
for kid in ru_unique + [m for m in ru_kids if m not in ru_unique]:
    dump_mod(kid, set(ru_kids))
dump_orig("pages/fedprojects/containers/Overview/ResourceUsage/SimpleArea.js")
dump_orig("pages/fedprojects/containers/Overview/ResourceUsage/PhysicalResourceItem.js")
print("importers 4946", [(i, mod_to_names.get(i, ["?"])) for i in sorted(set(importers.get("module-4946.js", [])))])
if "module-4946.js" in unpacked_texts:
    dump_mod("module-4946.js")

print("\n=== UsageCard remaining 1832/1831 vs orig VolumeUsage ===")
dump_orig("pages/projects/components/Charts/VolumeUsage.js")
dump_mod("module-1832.js")
dump_mod("module-1831.js")
print("orig_imp VolumeUsage", sorted(set(orig_imp_targets.get("pages/projects/components/Charts/VolumeUsage.js", []))))
print("orig UsageCard locals", orig_local_imps.get("pages/fedprojects/containers/Volumes/Detail/ResourceStatus/UsageCard.js"))
print("orig project UsageCard locals", orig_local_imps.get("pages/projects/containers/Volumes/Detail/ResourceStatus/UsageCard.js"))
print("orig project ResourceStatus locals", orig_local_imps.get("pages/projects/containers/Volumes/Detail/ResourceStatus.js"))

print("\n=== PodsCard remaining 851 vs Cards/Pods ===")
dump_orig("components/Cards/Pods.js")
dump_mod("module-851.js")
print("orig_imp Cards/Pods", sorted(set(orig_imp_targets.get("components/Cards/Pods.js", [])))[:12],
      "count", len(orig_imp_targets.get("components/Cards/Pods.js", [])))

print("\n=== VolumeSetting remaining 1122 vs Edit modal ===")
dump_orig("components/Modals/Edit.js")
dump_mod("module-1122.js")
print("orig_imp Edit", sorted(set(orig_imp_targets.get("components/Modals/Edit.js", [])))[:12],
      "count", len(orig_imp_targets.get("components/Modals/Edit.js", [])))

print("\n=== AuditRecord remaining VersionStatus ===")
dump_orig("pages/apps/components/VersionStatus.js")
print("orig_imp VersionStatus", sorted(set(orig_imp_targets.get("pages/apps/components/VersionStatus.js", []))))

print("\n=== unique alias-import children of uniquely named parents (components/pages) ===")
cands = []
for key in sorted(set(orig_files)):
    if key in known_keys or skip_name(key) or not orig_path_for(key):
        continue
    if not (key.startswith("components/") or key.startswith("pages/")):
        continue
    oimps = sorted(set(orig_imp_targets.get(key, [])))
    if len(oimps) != 1:
        continue
    parent_key = oimps[0]
    if parent_key not in known_keys or skip_name(parent_key):
        continue
    parent_mod = pairs[parent_key]
    unique_kids = parent_unique_kids(parent_mod)
    unnamed_local = [c for c in orig_local_imps.get(parent_key, []) if c not in known_keys and not str(c).endswith((".scss", ".css"))]
    unnamed_all = [c for c in orig_all_imps.get(parent_key, []) if c not in known_keys and not str(c).endswith((".scss", ".css"))]
    cands.append((parent_key, key, parent_mod, unique_kids, unnamed_local, unnamed_all))
print("alias_or_local unique_import unnamed count", len(cands))
for parent_key, key, parent_mod, unique_kids, unnamed_local, unnamed_all in cands:
    if unique_kids or (len(unnamed_local) == 1 and unnamed_local[0] == key):
        print(f"  CAND {key} parent={parent_key}->{parent_mod} unique_kids={unique_kids} unnamed_local={unnamed_local} unnamed_all={unnamed_all}")

print("\n=== unique kids of last 400 named parents with orig unique unnamed child ===")
last400 = [k for k in known_order[-400:] if not skip_name(k)]
hits = 0
for parent_key in last400:
    parent_mod = pairs[parent_key]
    unique_kids = parent_unique_kids(parent_mod)
    unnamed_local = [c for c in orig_local_imps.get(parent_key, []) if c not in known_keys and not str(c).endswith((".scss", ".css")) and not skip_name(c)]
    unnamed_all = [c for c in orig_all_imps.get(parent_key, []) if c not in known_keys and not str(c).endswith((".scss", ".css")) and not skip_name(c)]
    if unique_kids and (unnamed_local or unnamed_all):
        hits += 1
        print(f"  PARENT {parent_key}->{parent_mod} unique_kids={unique_kids} unnamed_local={unnamed_local} unnamed_all={unnamed_all}")
        for kid in unique_kids:
            dump_mod(kid)
        for k in unnamed_local[:4] + [x for x in unnamed_all if x not in unnamed_local][:4]:
            dump_orig(k)
print("parent_hits", hits)

print("\n=== unique e.module= / resourceName 1-hit unnamed vs orig not in KNOWN ===")
zero = 0
two = 0
one = 0
for key in sorted(set(orig_files)):
    if key in known_keys or skip_name(key) or not orig_path_for(key):
        continue
    text = orig_texts[key]
    unique_mod = [k for k in dict.fromkeys(mod_eq_pat.findall(text)) if orig_mod_eq[k] == [key]]
    unique_rn = [k for k in dict.fromkeys(resource_name_pat.findall(text)) if orig_resource_name[k] == [key]]
    if not unique_mod and not unique_rn:
        continue
    hits_list = []
    for kind, needles, index in (
        ("module=", unique_mod, mod_eq_index),
        ("resourceName", unique_rn, resource_name_index),
    ):
        for n in needles:
            files = index.get(n, set())
            unn = unnamed_only(files)
            named = [f for f in files if f in known_mods]
            if len(unn) == 1:
                hits_list.append((kind, n, unn[0], named))
            elif len(unn) == 2:
                two += 1
                print(f"  TWO {key} {kind}:{n!r} unnamed={unn} named={[(f, mod_to_names.get(f, [])) for f in named]}")
            elif not unn and not named:
                zero += 1
    mods = sorted(set(h[2] for h in hits_list))
    if hits_list:
        one += 1
        oimps = sorted(set(orig_imp_targets.get(key, [])))
        named_parents = [p for p in oimps if p in known_keys]
        print(f"  ONE {key} parents={named_parents[:4]} oimps={oimps[:4]} hits={hits_list} mods={mods}")
        if len(mods) == 1:
            dump_mod(mods[0])
            dump_orig(key)
print("module_rn zero", zero, "two", two, "one", one)

print("\n=== unique kids with unique t/method among last400 unique_kids_no_orig_local ===")
shown = 0
for parent_key in last400:
    parent_mod = pairs[parent_key]
    unique_kids = parent_unique_kids(parent_mod)
    unnamed_local = [c for c in orig_local_imps.get(parent_key, []) if c not in known_keys and not str(c).endswith((".scss", ".css"))]
    if unique_kids and not unnamed_local:
        for kid in unique_kids:
            text = unpacked_texts[kid]
            tkeys = list(dict.fromkeys(t_pat.findall(text)))
            unique_t = [k for k in tkeys if t_index[k] == {kid}]
            unique_mod = [k for k in dict.fromkeys(mod_eq_pat.findall(text)) if mod_eq_index[k] == {kid}]
            unique_rn = [k for k in dict.fromkeys(resource_name_pat.findall(text)) if resource_name_index[k] == {kid}]
            if unique_t or unique_mod or unique_rn:
                shown += 1
                print(f"  KID {kid} parent={parent_key}->{parent_mod} unique_t={unique_t[:6]} unique_mod={unique_mod[:4]} unique_rn={unique_rn[:4]}")
                dump_mod(kid)
                if shown >= 20:
                    break
    if shown >= 20:
        break
print("unique_t_no_orig shown", shown)
