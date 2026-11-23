#!/usr/bin/env python3
"""Strict-verify slice 49 pins and dump remaining unique-kid / 2-importer gaps."""
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
VENDOR = {
    "module-553.js", "module-239.js", "module-321.js", "module-14.js",
    "module-186.js", "module-433.js", "module-243.js", "module-240.js",
    "module-244.js", "module-1.js", "module-2.js", "module-3.js",
    "module-36.js", "module-37.js", "module-55.js", "module-56.js",
    "module-51.js", "module-26.js", "module-63.js", "module-52.js",
    "module-61.js", "module-74.js", "module-241.js", "module-199.js",
    "module-317.js", "module-2465.js", "module-793.js", "module-825.js",
    "module-88.js", "module-96.js", "module-801.js", "module-242.js",
    "module-854.js", "module-478.js", "module-1463.js", "module-1416.js",
    "module-1095.js", "module-1236.js", "module-946.js", "module-884.js",
    "module-1856.js", "module-937.js", "module-1849.js",
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
method_decl = re.compile(
    r"""(?:^|\n)\s*(?:async\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*\([^;{]*\)\s*\{"""
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
    return norm_key(rel + ".js") if not rel.endswith(".js") else rel


def extract_methods(text):
    names = []
    for pat in (method_assign, method_class, method_decl):
        names.extend(pat.findall(text))
    out = []
    for n in names:
        if n and not n.startswith("_") and n not in {
            "constructor", "render", "if", "super", "componentDidMount",
            "componentWillUnmount", "componentDidUpdate", "componentWillMount",
        }:
            out.append(n)
    return list(dict.fromkeys(out))


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
        resolved = resolve_import(rel, raw)
        if resolved:
            orig_local_imps[key].append(resolved)
            orig_imp_targets[resolved].append(key)


def dump_mod(mod):
    text = unpacked.get(mod, "")
    print(f"  {mod} named={mod_to_names.get(mod, [])} css={is_css(mod)}")
    print("    importers", [(i, mod_to_names.get(i, ["?"])) for i in sorted(set(importers.get(mod, [])))][:8])
    print("    methods", extract_methods(text)[:16])
    print("    t", list(dict.fromkeys(t_pat.findall(text)))[:12])
    kids = list(dict.fromkeys(imp_unpacked.findall(text)))
    print("    kids", [(k, mod_to_names.get(k, ["?"]), "css" if is_css(k) else "") for k in kids[:14]])


def unique_unpacked(needle, index):
    files = index.get(needle, set())
    unnamed = [f for f in files if f not in known_mods and mid_of(f) not in SKIP_MODS]
    named = [(f, mod_to_names.get(f, [])) for f in files if f in known_mods]
    return files, unnamed, named


accepted = []
rejected = []


def check_imp(key, mod, parent_key):
    print(f"\n=== IMP {key} -> {mod} parent={parent_key} ===")
    op = orig_path_for(key)
    parent_mod = pairs.get(parent_key)
    dump_mod(mod)
    if not op or not parent_mod or mod in known_mods or is_css(mod) or mid_of(mod) in SKIP_MODS:
        print("  VERDICT REJECT missing/skip", "op", bool(op), "parent", parent_mod)
        rejected.append((key, mod, "missing/skip"))
        return False
    up = sorted(set(importers[mod]))
    unique_named_parent = up == [parent_mod]
    oimps = sorted(set(orig_imp_targets.get(key, [])))
    unique_orig = oimps == [parent_key]
    parent_text = unpacked.get(parent_mod, "")
    unique_kids = []
    for m in list(dict.fromkeys(imp_unpacked.findall(parent_text))):
        if m in known_mods or is_css(m) or mid_of(m) in SKIP_MODS or int(mid_of(m)) < 70 or m in VENDOR:
            continue
        if sorted(set(importers[m])) == [parent_mod]:
            unique_kids.append(m)
    locals_ = [c for c in orig_local_imps.get(parent_key, []) if not str(c).endswith((".scss", ".css")) and c not in known_keys]
    ok = unique_named_parent and unique_orig and unique_kids == [mod] and locals_ == [key]
    print("  unique_named_parent", unique_named_parent, up)
    print("  unique_orig", unique_orig, oimps)
    print("  unique_kids", unique_kids, "orig_unnamed", locals_)
    print("  VERDICT", "NEW" if ok else "REJECT")
    if not ok:
        rejected.append((key, mod, "imp"))
    return ok


def check_method(key, mod, needle):
    print(f"\n=== METHOD {key} -> {mod} needle={needle!r} ===")
    op = orig_path_for(key)
    dump_mod(mod)
    if needle in {"if", "store", "fetchData", "data", "render"}:
        print("  VERDICT REJECT weak")
        rejected.append((key, mod, "weak"))
        return False
    if not op or mod in known_mods or is_css(mod) or mid_of(mod) in SKIP_MODS:
        print("  VERDICT REJECT missing/skip")
        rejected.append((key, mod, "missing/skip"))
        return False
    files, unnamed, named = unique_unpacked(needle, method_index)
    orig_hits = orig_method.get(needle, [])
    in_mod = needle in extract_methods(unpacked.get(mod, ""))
    in_orig = needle in extract_methods(op.read_text(encoding="utf-8", errors="ignore"))
    ok = in_mod and in_orig and unnamed == [mod] and orig_hits == [key] and not named
    print("  in_mod", in_mod, "in_orig", in_orig)
    print("  method_unnamed", unnamed, "named", named[:4], "orig_hits", orig_hits)
    # allow unique among unnamed even if no extra named hits
    ok2 = in_mod and in_orig and unnamed == [mod] and orig_hits == [key]
    print("  VERDICT", "NEW" if ok2 else "REJECT", "strict_no_named", ok)
    if not ok2:
        rejected.append((key, mod, "method:"+needle))
    return ok2


print("\n=== ImageSlider unique importer ===")
if check_imp(
    "pages/apps/components/AppInfo/ImageSlider.js",
    "module-3188.js",
    "pages/apps/components/AppInfo.js",
):
    accepted.append((
        "pages/apps/components/AppInfo/ImageSlider.js",
        "module-3188.js",
        "imp:AppInfo unique ./ImageSlider",
    ))

print("\n=== ImageSlider unique methods among unpacked ===")
for needle in ["handleClickImage", "closeOverlay", "stopAnimation", "handleOverlayNext", "handleOverlayPrev"]:
    files, unnamed, named = unique_unpacked(needle, method_index)
    print(f"  {needle} unnamed={unnamed} named={named[:4]} orig={orig_method.get(needle, [])}")

print("\n=== VersionList addVersion ===")
if check_method(
    "pages/apps/components/Lists/VersionList.js",
    "module-4409.js",
    "addVersion",
):
    accepted.append((
        "pages/apps/components/Lists/VersionList.js",
        "module-4409.js",
        "unique_method:addVersion",
    ))
for needle in ["appDetail", "handleExpandExtra", "UPLOAD_NEW_VERSION", "UPLOAD_NEW_VERSION_DESC"]:
    if needle.isupper() or needle[0].isupper() and needle == needle.upper():
        files, unnamed, named = unique_unpacked(needle, t_index)
        print(f"  t {needle} unnamed={unnamed} named={named[:3]} orig={orig_t.get(needle, [])}")
    else:
        files, unnamed, named = unique_unpacked(needle, method_index)
        print(f"  m {needle} unnamed={unnamed} named={named[:3]} orig={orig_method.get(needle, [])}")


print("\n=== unique kids of named apps/whizard/edge/ng parents vs orig locals ===")
CAND_PARENTS = [
    "pages/apps/components/Lists/VersionList/Item.js",
    "pages/apps/components/Modals/AppCreate.js",
    "pages/apps/components/Modals/AppReview.js",
    "pages/apps/components/Cards/ReadmeEdit.js",
    "pages/apps/components/AppInfo.js",
    "pages/whizard-telemetry/monitor-resource.js",
    "pages/whizard-telemetry/nodes/Detail.js",
    "pages/whizard-telemetry/edgenodes/Detail.js",
]
for parent_key in CAND_PARENTS:
    parent_mod = pairs.get(parent_key)
    print(f"\n  PARENT {parent_key} -> {parent_mod}")
    if not parent_mod:
        print("    NOT_NAMED")
        continue
    dump_mod(parent_mod)
    locals_ = [c for c in orig_local_imps.get(parent_key, []) if not str(c).endswith((".scss", ".css"))]
    print("    orig_locals", [(c, pairs.get(c)) for c in locals_])
    parent_text = unpacked.get(parent_mod, "")
    for m in list(dict.fromkeys(imp_unpacked.findall(parent_text))):
        if m in known_mods or is_css(m) or mid_of(m) in SKIP_MODS or int(mid_of(m)) < 70 or m in VENDOR:
            continue
        up = sorted(set(importers[m]))
        print(f"    UNNAMED_KID {m} unique_imp={up == [parent_mod]} imps={[ (i, mod_to_names.get(i, ['?'])) for i in up ]}")
        dump_mod(m)
        methods = extract_methods(unpacked[m])
        tkeys = list(dict.fromkeys(t_pat.findall(unpacked[m])))
        for n in methods[:8]:
            files, unnamed, named = unique_unpacked(n, method_index)
            if unnamed == [m] or files == {m}:
                print(f"      unique_method {n} orig={orig_method.get(n, [])}")
        for k in tkeys[:10]:
            files, unnamed, named = unique_unpacked(k, t_index)
            if unnamed == [m] or files == {m}:
                print(f"      unique_t {k} orig={orig_t.get(k, [])}")


print("\n=== src pages top-level ===")
pages = SRC / "pages"
if pages.exists():
    print("  dirs", sorted(p.name for p in pages.iterdir() if p.is_dir()))
else:
    print("  MISSING", pages)

print("\n=== unnamed orig under pages/apps with unique importer of named parent ===")
for key in sorted(orig_files):
    if not key.startswith("pages/apps/") or key in known_keys:
        continue
    oimps = sorted(set(orig_imp_targets.get(key, [])))
    if len(oimps) == 1 and oimps[0] in known_keys:
        print(f"  {key} unique_orig_parent={oimps[0]}->{pairs[oimps[0]]}")


print("\n=== 2-importer unnamed business modules of named pages parents ===")
two = []
for parent_key, parent_mod in sorted(pairs.items()):
    if not parent_key.startswith("pages/"):
        continue
    parent_text = unpacked.get(parent_mod, "")
    for m in list(dict.fromkeys(imp_unpacked.findall(parent_text))):
        if m in known_mods or is_css(m) or mid_of(m) in SKIP_MODS or int(mid_of(m)) < 800 or m in VENDOR:
            continue
        up = sorted(set(importers[m]))
        if len(up) == 2:
            two.append((parent_key, m, up))
seen = set()
for parent_key, m, up in two:
    if m in seen:
        continue
    seen.add(m)
    print(f"  TWO {m} via {parent_key} imps={[ (i, mod_to_names.get(i, ['?'])) for i in up ]}")
print("two_imp_business_count", len(seen))


print("\n=== ACCEPTED ===")
seenp = set()
for key, mod, kind in accepted:
    if (key, mod) in seenp:
        continue
    seenp.add((key, mod))
    print(f'    "{key}": "{mod}",  # {kind}')
print("accepted_count", len(seenp))
print("rejected_count", len(rejected))
for item in rejected:
    print("  REJECT", item)
