#!/usr/bin/env python3
"""Slice 49d: all uniquely named parents, relative unique-importer 1:1,
unique named-child among siblings, unique orig t/method 1-hit."""
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
    "TextPreview", "SlackForm", "EditBasicInfo",
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
}
WEAK = {
    "if", "store", "fetchData", "data", "render", "className", "onClick",
    "state", "super", "switch", "toggle", "close",
}

pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY))
known_keys = set(pairs)
known_mods = set(pairs.values())
mod_to_names = defaultdict(list)
for k, v in pairs.items():
    mod_to_names[v].append(k)

t_pat = re.compile(r"""t\(\s*['"]([^'"]+)['"]""")
str_pat = re.compile(r"""['"]([A-Za-z0-9_./:=${}-]{8,})['"]""")
imp_unpacked = re.compile(r"""(?:from|require\()\s*['"]\./(module-\d+\.js)""")
imp_orig = re.compile(r"""(?:from|require\()\s*['"]([^'"]+)['"]""")
method_assign = re.compile(
    r"""(?:this|n|t|e|r)\.([A-Za-z_][A-Za-z0-9_]*)\s*=\s*function"""
)
method_class = re.compile(
    r"""(?:^|\n)\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(?:async\s*)?(?:\([^)]*\)|[A-Za-z_][A-Za-z0-9_]*)\s*=>"""
)


def mid_of(mod):
    return re.search(r"\d+", mod).group()


def is_css(mod):
    path = UNPACKED / mod
    if not path.exists():
        return False
    text = path.read_text(encoding="utf-8", errors="ignore")
    head = text.split("\n", 1)[0]
    return text.lstrip().startswith("export default {") and "import " not in head


def skip_name(key):
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
    names = method_assign.findall(text) + method_class.findall(text)
    return list(dict.fromkeys(n for n in names if n and not n.startswith("_")))


print("=== indexing ===", flush=True)
unpacked = {}
t_index = defaultdict(set)
str_index = defaultdict(set)
method_index = defaultdict(set)
importers = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    unpacked[path.name] = text
    for k in t_pat.findall(text):
        t_index[k].add(path.name)
    for s in str_pat.findall(text):
        str_index[s].add(path.name)
    for n in extract_methods(text):
        method_index[n].add(path.name)
    for m in imp_unpacked.findall(text):
        importers[m].append(path.name)

orig_t = defaultdict(list)
orig_str = defaultdict(list)
orig_method = defaultdict(list)
orig_imp_targets = defaultdict(list)
orig_local_imps = defaultdict(list)
orig_all_imps = defaultdict(list)
orig_files = []
for p in SRC.rglob("*"):
    if not p.is_file() or p.suffix not in {".js", ".jsx"}:
        continue
    if ".test." in p.name:
        continue
    rel = p.relative_to(SRC).as_posix()
    key = norm_key(rel)
    orig_files.append(key)
    text = p.read_text(encoding="utf-8", errors="ignore")
    for k in t_pat.findall(text):
        orig_t[k].append(key)
    for s in str_pat.findall(text):
        orig_str[s].append(key)
    for n in extract_methods(text):
        orig_method[n].append(key)
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
    return [f for f in files if f not in known_mods and mid_of(f) not in SKIP_MODS]


def parent_unique_kids(parent_mod, extra_known=None):
    extra_known = extra_known or set()
    kids = []
    parent_text = unpacked.get(parent_mod, "")
    for m in list(dict.fromkeys(imp_unpacked.findall(parent_text))):
        if m in known_mods or m in extra_known or is_css(m) or mid_of(m) in SKIP_MODS or int(mid_of(m)) < 70 or m in VENDOR:
            continue
        if sorted(set(importers[m])) == [parent_mod]:
            kids.append(m)
    return kids


pins = []
failed_1_1 = []


def consider(key, mod, reason):
    if skip_name(key) or mid_of(mod) in SKIP_MODS or is_css(mod):
        print(f"  SKIP {key} -> {mod} [{reason}]")
        return
    if key in known_keys or mod in known_mods:
        print(f"  ALREADY/ALIAS {key} -> {mod} already_key={pairs.get(key)} already_mod={mod_to_names.get(mod, [])} [{reason}]")
        return
    if key in {"components/Base.js", "utils.js"} or key.startswith("utils/") and key.count("/") == 1:
        print(f"  REJECT_BARREL {key} -> {mod} [{reason}]")
        return
    pins.append((key, mod, reason))
    print(f"  PIN {key} -> {mod} [{reason}]")


print("\n=== ALL named parents relative unique-importer 1:1 ===")
for parent_key, parent_mod in sorted(pairs.items()):
    unique_kids = parent_unique_kids(parent_mod)
    orig_unnamed = [
        c for c in orig_local_imps.get(parent_key, [])
        if c not in known_keys and not str(c).endswith((".scss", ".css"))
    ]
    if len(unique_kids) == 1 and len(orig_unnamed) == 1:
        child = orig_unnamed[0]
        oimps = sorted(set(orig_imp_targets.get(child, [])))
        # unique orig importer may include alias duplicates of same parent
        oimps_unique = list(dict.fromkeys(oimps))
        if oimps_unique == [parent_key] or (parent_key in oimps_unique and len([x for x in oimps_unique if x == parent_key or pairs.get(x) == parent_mod]) == len(oimps_unique)):
            consider(child, unique_kids[0], f"unique_importer_1_1 parent={parent_key}")
        else:
            failed_1_1.append((parent_key, child, unique_kids[0], oimps_unique))
            print(f"  FAIL_OIMPS {parent_key} child={child} kid={unique_kids[0]} oimps={oimps_unique}")
    elif unique_kids and orig_unnamed:
        print(f"  AMBIG {parent_key}->{parent_mod} unique_kids={unique_kids} orig_unnamed={orig_unnamed}")

print("\n=== unique named-child among siblings for ambig apps Item/AuditRecord ===")
parent_key = "pages/apps/components/Lists/VersionList/Item.js"
parent_mod = pairs[parent_key]
unique_kids = parent_unique_kids(parent_mod)
orig_unnamed = [
    c for c in orig_all_imps.get(parent_key, [])
    if c not in known_keys and not str(c).endswith((".scss", ".css")) and c not in {"utils.js", "components/Base.js"}
]
print("  unique_kids", unique_kids)
print("  orig_unnamed", orig_unnamed)
for child in orig_unnamed:
    named_locals = [(c, pairs[c]) for c in orig_all_imps.get(child, []) if c in known_keys]
    print(f"    child {child} named_locals={named_locals} oimps={sorted(set(orig_imp_targets.get(child, [])))}")
    for ck, cm in named_locals:
        orig_only = sorted(set(orig_imp_targets.get(ck, [])))
        sib = [m for m in unique_kids if cm in unpacked.get(m, "")]
        print(f"      named {ck}->{cm} orig_imps={orig_only} sib={sib}")
        if sib == [unique_kids[0]] if unique_kids else False:
            if orig_only == [child] or (child in orig_only and len([x for x in orig_only if x == child]) == 1 and len(orig_only) == 1):
                consider(child, sib[0], f"unique_named_child {ck}->{cm} parent={parent_key}")


print("\n=== unique orig t/method 1-hit for unnamed orig imported by a named parent ===")
for key in sorted(orig_files):
    if key in known_keys or skip_name(key) or not orig_path_for(key):
        continue
    oimps = sorted(set(orig_imp_targets.get(key, [])))
    named_parents = [p for p in oimps if p in known_keys]
    if not named_parents and not key.startswith("pages/apps/"):
        continue
    op = orig_path_for(key)
    text = op.read_text(encoding="utf-8", errors="ignore")
    unique_t = [k for k in dict.fromkeys(t_pat.findall(text)) if orig_t[k] == [key]]
    unique_m = [n for n in extract_methods(text) if n not in WEAK and orig_method[n] == [key]]
    hits = []
    for k in unique_t:
        unn = unnamed_only(t_index.get(k, set()))
        if len(unn) == 1:
            hits.append(("t", k, unn[0]))
    for n in unique_m:
        unn = unnamed_only(method_index.get(n, set()))
        if len(unn) == 1:
            hits.append(("method", n, unn[0]))
    mods = sorted(set(m for _a, _b, m in hits))
    if hits:
        print(f"  {key} named_parents={named_parents[:4]} hits={hits[:6]} mods={mods}")
        if len(mods) == 1:
            consider(key, mods[0], f"unique_1hit {hits[0][0]}:{hits[0][1]!r} parents={named_parents[:2]}")


print("\n=== PINS ===")
seen = set()
for key, mod, reason in pins:
    if (key, mod) in seen:
        continue
    seen.add((key, mod))
    print(f'    "{key}": "{mod}",  # {reason}')
print("pin_count", len(seen))
print("failed_1_1_count", len(failed_1_1))
for item in failed_1_1[:20]:
    print("  FAIL1", item)
