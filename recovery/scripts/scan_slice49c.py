#!/usr/bin/env python3
"""Slice 49c: unique alias-importer 1:1 kids of uniquely named apps parents,
plus AuditRecord/4413, AppCreate/3133, remaining unique methods."""
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
VENDOR = {
    "module-553.js", "module-239.js", "module-321.js", "module-14.js",
    "module-186.js", "module-433.js", "module-243.js", "module-240.js",
    "module-244.js", "module-1.js", "module-2.js", "module-3.js",
    "module-36.js", "module-37.js", "module-55.js", "module-56.js",
    "module-51.js", "module-26.js", "module-63.js", "module-52.js",
    "module-61.js", "module-74.js", "module-241.js", "module-199.js",
    "module-317.js", "module-2465.js", "module-793.js", "module-825.js",
    "module-88.js", "module-96.js", "module-801.js", "module-242.js",
    "module-31.js",
}

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
    return any(frag.lower() in key.lower() for frag in SKIP_NAME_FRAGS)


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
        return None
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
        resolved = resolve_alias_import(rel, raw)
        if resolved:
            orig_all_imps[key].append(resolved)
            orig_imp_targets[resolved].append(key)


def unnamed_only(files):
    return [f for f in files if f not in known_mods and mid_of(f) not in SKIP_MODS]


def parent_unique_kids(parent_mod):
    kids = []
    parent_text = unpacked.get(parent_mod, "")
    for m in list(dict.fromkeys(imp_unpacked.findall(parent_text))):
        if m in known_mods or is_css(m) or mid_of(m) in SKIP_MODS or int(mid_of(m)) < 70 or m in VENDOR:
            continue
        if sorted(set(importers[m])) == [parent_mod]:
            kids.append(m)
    return kids


def dump_mod(mod):
    text = unpacked.get(mod, "")
    print(f"  {mod} named={mod_to_names.get(mod, [])} css={is_css(mod)}")
    print("    importers", [(i, mod_to_names.get(i, ["?"])) for i in sorted(set(importers.get(mod, [])))][:8])
    print("    methods", extract_methods(text)[:16])
    print("    t", list(dict.fromkeys(t_pat.findall(text)))[:12])
    kids = list(dict.fromkeys(imp_unpacked.findall(text)))
    print("    kids", [(k, mod_to_names.get(k, ["?"]), "css" if is_css(k) else "") for k in kids[:16]])


pins = []


def consider(key, mod, reason):
    if skip_name(key) or mid_of(mod) in SKIP_MODS or is_css(mod) or mod in known_mods or key in known_keys:
        print(f"  SKIP/ALREADY {key} -> {mod} [{reason}] skip_name={skip_name(key)}")
        return
    pins.append((key, mod, reason))
    print(f"  PIN {key} -> {mod} [{reason}]")


print("\n=== AuditRecord / 4413 ===")
dump_mod("module-4413.js")
key = "pages/apps/components/Lists/AuditRecord.js"
print("  orig exists", bool(orig_path_for(key)))
print("  orig_importers", sorted(set(orig_imp_targets.get(key, []))))
print("  orig_methods", orig_method.get("renderItem", []), extract_methods(orig_path_for(key).read_text(encoding="utf-8", errors="ignore") if orig_path_for(key) else ""))
print("  named_child audit store in 4413", "module-1868.js" in unpacked.get("module-4413.js", ""))
print("  unique_t in 4413")
for k in list(dict.fromkeys(t_pat.findall(unpacked.get("module-4413.js", "")))):
    unn = unnamed_only(t_index[k])
    if unn == ["module-4413.js"] or t_index[k] == {"module-4413.js"}:
        print("   ", k, "orig", orig_t.get(k, []))

print("\n=== AppCreate 3133 / AppReview 3158 ===")
for mid in ("3132", "3133", "3153", "3158", "3134"):
    dump_mod(f"module-{mid}.js")
    text = unpacked.get(f"module-{mid}.js", "")
    for k in list(dict.fromkeys(t_pat.findall(text)))[:12]:
        unn = unnamed_only(t_index[k])
        if len(unn) <= 1:
            print(f"    t {k!r} unnamed={unn} orig={orig_t.get(k, [])[:4]}")
    for n in extract_methods(text)[:12]:
        unn = unnamed_only(method_index[n])
        if len(unn) <= 1:
            print(f"    m {n!r} unnamed={unn} orig={orig_method.get(n, [])[:4]}")


print("\n=== unique alias-importer 1:1 of uniquely named pages/apps parents ===")
for parent_key, parent_mod in sorted(pairs.items()):
    if not parent_key.startswith("pages/apps/"):
        continue
    unique_kids = parent_unique_kids(parent_mod)
    orig_unnamed = [
        c for c in orig_all_imps.get(parent_key, [])
        if c not in known_keys and not str(c).endswith((".scss", ".css"))
    ]
    if not unique_kids and not orig_unnamed:
        continue
    print(f"  {parent_key}->{parent_mod}")
    print(f"    unique_kids={unique_kids}")
    print(f"    orig_unnamed={orig_unnamed}")
    if len(unique_kids) == 1 and len(orig_unnamed) == 1:
        child = orig_unnamed[0]
        oimps = sorted(set(orig_imp_targets.get(child, [])))
        print(f"    1_1 oimps={oimps}")
        if oimps == [parent_key]:
            consider(child, unique_kids[0], f"unique_importer_alias_1_1 parent={parent_key}")
    elif len(unique_kids) == 1 and orig_unnamed:
        kid = unique_kids[0]
        dump_mod(kid)
        # unique named child among remaining unnamed orig
        named_kids = [k for k in list(dict.fromkeys(imp_unpacked.findall(unpacked[kid]))) if k in known_mods]
        for child in orig_unnamed:
            if skip_name(child):
                continue
            child_named_locals = [
                pairs[c] for c in orig_all_imps.get(child, [])
                if c in known_keys
            ]
            hits = []
            for cm in child_named_locals:
                sib = [m for m in unique_kids if cm in unpacked.get(m, "")]
                orig_only = sorted(set(orig_imp_targets.get(
                    [ck for ck, mv in pairs.items() if mv == cm][0] if False else "",
                    []
                )))
                # simpler: unique named module imported by this orig child and uniquely by this kid among unique_kids
                orig_imps_of_named = None
                for ck, mv in pairs.items():
                    if mv == cm:
                        o = sorted(set(orig_imp_targets.get(ck, [])))
                        if o == [child] or child in o:
                            orig_imps_of_named = (ck, o)
                            break
                if sib == [kid]:
                    hits.append((cm, orig_imps_of_named))
            print(f"    named_child_hits {child} {hits[:6]}")
            if len(hits) == 1:
                ck_info = hits[0][1]
                if ck_info and ck_info[1] == [child]:
                    consider(child, kid, f"unique_named_child {hits[0][0]} parent={parent_key}")


print("\n=== unique method/t 1-hit remaining unnamed orig pages/apps ===")
WEAK = {"if", "store", "fetchData", "data", "render", "className", "onClick", "state", "super", "switch"}
for key in sorted(orig_files):
    if key in known_keys or skip_name(key):
        continue
    if not key.startswith("pages/apps/"):
        continue
    op = orig_path_for(key)
    if not op:
        continue
    text = op.read_text(encoding="utf-8", errors="ignore")
    methods = [n for n in extract_methods(text) if n not in WEAK]
    tkeys = list(dict.fromkeys(t_pat.findall(text)))
    unique_t = [k for k in tkeys if orig_t[k] == [key]]
    unique_m = [n for n in methods if orig_method[n] == [key]]
    hits = []
    for k in unique_t:
        unn = unnamed_only(t_index.get(k, set()))
        named = [f for f in t_index.get(k, set()) if f in known_mods]
        if unn or named:
            print(f"  t {key} {k!r} unnamed={unn} named={[mod_to_names[f] for f in named][:2]}")
        if len(unn) == 1:
            hits.append(("t", k, unn[0]))
    for n in unique_m:
        unn = unnamed_only(method_index.get(n, set()))
        named = [f for f in method_index.get(n, set()) if f in known_mods]
        if unn or named:
            print(f"  m {key} {n!r} unnamed={unn[:6]} named={[mod_to_names[f] for f in named][:2]}")
        if len(unn) == 1:
            hits.append(("method", n, unn[0]))
    mods = sorted(set(m for _a, _b, m in hits))
    if len(mods) == 1:
        consider(key, mods[0], f"unique_1hit {hits[0][0]}:{hits[0][1]!r}")
    elif hits:
        print(f"  MULTI {key} {hits[:8]}")


print("\n=== 4409 VersionList remaining unnamed kids ===")
dump_mod("module-4409.js")
for m in list(dict.fromkeys(imp_unpacked.findall(unpacked.get("module-4409.js", "")))):
    if m in known_mods or is_css(m) or mid_of(m) in SKIP_MODS or int(mid_of(m)) < 70 or m in VENDOR:
        continue
    print(f"  VL_KID {m} unique={sorted(set(importers[m])) == ['module-4409.js']} imps={[ (i, mod_to_names.get(i, ['?'])) for i in sorted(set(importers[m])) ]}")


print("\n=== PINS ===")
seen = set()
for key, mod, reason in pins:
    if (key, mod) in seen:
        continue
    seen.add((key, mod))
    print(f'    "{key}": "{mod}",  # {reason}')
print("pin_count", len(seen))
