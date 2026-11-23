#!/usr/bin/env python3
"""Slice 57c: inspect leftover unique-kid families that may pin:
RouteRulesEdit vs 3326/3331 of named actions/router;
CreateApp/Routes 2621/2623; settings BaseInfo 5126; workspace BaseInfo 4356;
RevisionControl 3854; AuthorizationList 4004; Statistics 4448.
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

imp_unpacked = re.compile(r"""(?:from|require\()\s*['"]\./(module-\d+\.js)""")
imp_orig = re.compile(r"""(?:from|require\()\s*['"]([^'"]+)['"]""")
t_pat = re.compile(r"""t\(\s*['"]([^'"]+)['"]""")
str_pat = re.compile(r"""['"]([A-Za-z0-9_./:=${}-]{6,})['"]""")
method_pat = re.compile(
    r"""(?:^|\n)\s*(?:(?:async\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*\([^;{]*\)\s*\{"""
    r"""|([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(?:async\s*)?(?:\([^)]*\)|[A-Za-z_][A-Za-z0-9_]*)\s*=>)"""
)


def extract_methods(text):
    names = []
    for a, b in method_pat.findall(text):
        name = a or b
        if name and not name.startswith("_"):
            names.append(name)
    return list(dict.fromkeys(names))


def mid(mod):
    return re.search(r"\d+", mod).group()


def is_css(mod):
    path = UNPACKED / mod
    if not path.exists():
        return False
    text = path.read_text(encoding="utf-8", errors="ignore")
    head = text.split("\n", 1)[0]
    return text.lstrip().startswith("export default {") and "import " not in head


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


unpacked = {}
importers = defaultdict(list)
t_index = defaultdict(set)
method_index = defaultdict(set)
str_index = defaultdict(set)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    unpacked[path.name] = text
    for m in imp_unpacked.findall(text):
        importers[m].append(path.name)
    for k in t_pat.findall(text):
        t_index[k].add(path.name)
    for n in extract_methods(text):
        method_index[n].add(path.name)
    for s in str_pat.findall(text):
        str_index[s].add(path.name)

orig_imp_targets = defaultdict(list)
orig_local = defaultdict(list)
orig_texts = {}
for p in SRC.rglob("*"):
    if not p.is_file() or p.suffix not in {".js", ".jsx"}:
        continue
    if ".test." in p.name:
        continue
    rel = p.relative_to(SRC).as_posix()
    key = norm_key(rel)
    text = p.read_text(encoding="utf-8", errors="ignore")
    orig_texts[key] = text
    for raw in imp_orig.findall(text):
        resolved = resolve_import(rel, raw)
        if resolved:
            orig_local[key].append(resolved)
            orig_imp_targets[resolved].append(key)


def dump_mod(mod):
    text = unpacked.get(mod, "")
    print(f"\n--- {mod} named={mod_to_names.get(mod, [])} css={is_css(mod)} ---")
    print("importers", [(i, mod_to_names.get(i, ["?"])) for i in sorted(set(importers.get(mod, [])))])
    print("methods", extract_methods(text)[:20])
    tkeys = list(dict.fromkeys(t_pat.findall(text)))
    print("t", tkeys[:16])
    unique_t = [k for k in tkeys if t_index[k] == {mod}]
    unique_meth = [n for n in extract_methods(text) if method_index[n] == {mod}]
    unique_lit = [s for s in dict.fromkeys(str_pat.findall(text)) if str_index[s] == {mod} and len(s) >= 8][:10]
    print("unique_t", unique_t[:10])
    print("unique_meth", unique_meth[:10])
    print("unique_lit", unique_lit)
    print("kids", [(k, mod_to_names.get(k, ["?"])) for k in list(dict.fromkeys(imp_unpacked.findall(text)))[:16]])
    print("head", text[:400].replace("\n", " | "))


def dump_orig(key):
    op = orig_path_for(key)
    text = orig_texts.get(key, "")
    print(f"\n=== ORIG {key} exists={bool(op)} named={pairs.get(key)} ===")
    print("orig_importers", sorted(set(orig_imp_targets.get(key, []))))
    print("methods", extract_methods(text)[:20])
    tkeys = list(dict.fromkeys(t_pat.findall(text)))
    print("t", tkeys[:16])
    unique_t = [k for k in tkeys if sum(1 for f in t_index) >= 0 and orig_texts and True]
    # orig uniqueness among orig files
    orig_t_count = defaultdict(int)
    orig_m_count = defaultdict(int)
    # cheap: only print local uniqueness vs this file's needles later
    print("imports_raw", imp_orig.findall(text)[:20])
    print("local", orig_local.get(key, []))
    print("head", text[:500].replace("\n", " | "))
    return text


print("######## actions/router.js")
dump_orig("actions/router.js")
dump_mod("module-3325.js")
dump_mod("module-3326.js")
dump_mod("module-3331.js")
dump_orig("pages/fedprojects/components/RouteRulesEdit.js")
# sibling candidates under fedprojects/components
for key in sorted(orig_texts):
    if "fedprojects/components" in key and "Route" in key:
        print("FED_ROUTE_FILE", key, "named", pairs.get(key), "oimps", sorted(set(orig_imp_targets.get(key, []))))

print("\n######## CreateApp/Routes")
dump_orig("pages/projects/components/Modals/CreateApp/Routes.js")
dump_mod("module-2620.js")
dump_mod("module-2621.js")
dump_mod("module-2623.js")
dump_mod("module-2622.js")
# list directory
routes_dir = SRC / "pages/projects/components/Modals/CreateApp"
print("CreateApp files:")
for p in sorted(routes_dir.rglob("*")):
    if p.is_file() and p.suffix in {".js", ".jsx"}:
        key = norm_key(p.relative_to(SRC).as_posix())
        print(" ", key, "named", pairs.get(key), "oimps", sorted(set(orig_imp_targets.get(key, [])))[:6])

print("\n######## settings BaseInfo 5126")
dump_orig("pages/settings/containers/BaseInfo.js")
dump_mod("module-5126.js")
dump_mod("module-5127.js") if "module-5127.js" in unpacked else None
# kids of 5126 unique?
kids = list(dict.fromkeys(imp_unpacked.findall(unpacked["module-5126.js"])))
print("5126 kids unique?")
for k in kids:
    if k not in known_mods and not is_css(k):
        print(" ", k, "imps", [(i, mod_to_names.get(i, ["?"])) for i in sorted(set(importers[k]))][:8])

print("\n######## workspace BaseInfo 4356")
dump_orig("pages/workspaces/containers/BaseInfo.js")
dump_mod("module-4356.js")
dump_orig("pages/workspaces/components/Modals/EditBasicInfo.js")
dump_orig("components/Modals/EditBasicInfo.js")

print("\n######## RevisionControl 3854")
dump_orig("pages/projects/containers/Deployments/Detail/RevisionControl.js")
dump_mod("module-3854.js")
dump_mod("module-3857.js")
dump_mod("module-3858.js")
dump_orig("components/Base/DiffYaml.js")
dump_orig("components/DiffYaml.js")

print("\n######## AuthorizationList 4004")
dump_orig("pages/access/containers/Roles/Detail/AuthorizationList.js")
dump_mod("module-4004.js")
dump_mod("module-4005.js")

print("\n######## Statistics 4448")
dump_orig("pages/workspaces/containers/Overview/ResourceUsage/Statistics.js")
dump_mod("module-4448.js")
dump_mod("module-4449.js")
dump_orig("components/Cards/Info.js")
dump_orig("pages/clusters/containers/Monitor/Resource/Usage/Statistics.js")

print("\n######## Banner remaining unique kids of named Banner?")
if pairs.get("components/Cards/Banner.js"):
    dump_mod(pairs["components/Cards/Banner.js"])
    dump_orig("components/Cards/Banner/Tip.js")
    dump_orig("components/Cards/Banner/Navs.js")
    dump_orig("components/Cards/Banner/Tabs.js")

print("\n######## FormInput ThemeSelector vs named ThemeSelector")
print("named ThemeSelector", pairs.get("components/Modals/CustomMonitoring/components/ThemeSelector.js"))
print("named FormInput/ThemeSelector", pairs.get("components/Modals/CustomMonitoring/components/FormInput/ThemeSelector.js"))
print("named FormInput GraphType", pairs.get("components/Modals/CustomMonitoring/components/FormInput/GraphType.js"))
dump_orig("components/Modals/CustomMonitoring/components/FormInput.js")
dump_orig("components/Modals/CustomMonitoring/components/FormInput/ThemeSelector.js")
dump_orig("components/Modals/CustomMonitoring/components/ThemeSelector.js")
dump_mod("module-1338.js")
dump_mod("module-2783.js")
