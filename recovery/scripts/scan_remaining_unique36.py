#!/usr/bin/env python3
"""Remaining unique 1-hit children of last-slice named files, plus leftover modal pins."""
from pathlib import Path
from collections import defaultdict
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
SRC = ROOT / "src"
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN_PY = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
known_mods = set(re.findall(r"module-(\d+)\.js", KNOWN_PY))
pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY))
mod_to_name = {v: k for k, v in pairs.items()}

imp_unpacked = re.compile(r'(?:from|require\()\s*["\']\./(module-\d+\.js)')
imp_orig = re.compile(r"""(?:from|require\()\s*['"]([^'"]+)['"]""")
t_pat = re.compile(r't\(\s*["\']([^"\']+)["\']')

importers = defaultdict(list)
t_index = defaultdict(set)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for m in imp_unpacked.findall(text):
        importers[m].append(path.name)
    for k in t_pat.findall(text):
        t_index[k].add(path.name)


def is_css(mod):
    text = (UNPACKED / mod).read_text(encoding="utf-8", errors="ignore")
    return text.lstrip().startswith("export default {") and "import " not in text.split("\n")[0]


def dump_kid(kid, parent):
    ktext = (UNPACKED / kid).read_text(encoding="utf-8", errors="ignore")
    keys = list(dict.fromkeys(t_pat.findall(ktext)))
    unique_keys = []
    for k in keys:
        files = t_index[k]
        unnamed = [f for f in files if re.search(r"\d+", f).group() not in known_mods]
        if files == {kid} or unnamed == [kid]:
            unique_keys.append((k, sorted(files)[:6], "all" if files == {kid} else "unnamed"))
    imps = sorted(set(importers[kid]), key=lambda s: int(s.split("-")[1].split(".")[0]))
    named_imps = [(i, mod_to_name.get(i, "?")) for i in imps]
    print(f"  {kid}")
    print("    importers", named_imps)
    print("    t", keys[:10])
    print("    unique_t", unique_keys[:6])
    if len(imps) == 1 and named_imps and named_imps[0][1] != "?":
        print("    UNIQUE_IMPORTER_NAMED_PARENT", named_imps[0][1])
    head = ktext[:180].replace("\n", " | ")
    print("    head", head[:160])


PARENTS = list(range(3232, 3251)) + [
    3518, 3521, 3523, 3527, 3529, 3531, 3535, 3537, 3538,
    2829, 2831, 2833, 2835, 2837,
    3478, 1743, 3400, 3401, 3406,
    1766, 1067, 1757, 1760,
]

print("==== unnamed children of last-slice + search parents ====")
for mid in PARENTS:
    mod = f"module-{mid}.js"
    name = mod_to_name.get(mod, "?")
    if not (UNPACKED / mod).exists():
        continue
    text = (UNPACKED / mod).read_text(encoding="utf-8", errors="ignore")
    kids = []
    for m in list(dict.fromkeys(imp_unpacked.findall(text))):
        kid_id = re.search(r"\d+", m).group()
        if kid_id not in known_mods and int(kid_id) >= 800 and not is_css(m):
            kids.append(m)
    if not kids:
        continue
    print(f"\n{name} -> {mod} unnamed-js {kids}")
    op_stem = name[:-3] if name.endswith(".js") else name
    for ext in (".js", ".jsx", "/index.js", "/index.jsx"):
        p = SRC / f"{op_stem}{ext}"
        if p.exists():
            rels = [r for r in imp_orig.findall(p.read_text(encoding="utf-8", errors="ignore")) if r.startswith(".")]
            print("  orig_local", rels)
            break
    for kid in kids:
        dump_kid(kid, name)

print("\n==== leftover modal module importers ====")
for n in [1764, 3810, 3809, 3479, 3480, 3404, 3839, 3851, 3908, 3900, 1219, 2082]:
    name = f"module-{n}.js"
    if not (UNPACKED / name).exists():
        print(name, "MISSING")
        continue
    imps = sorted(set(importers[name]), key=lambda s: int(s.split("-")[1].split(".")[0]))
    named_imps = [(i, mod_to_name.get(i, "?")) for i in imps]
    text = (UNPACKED / name).read_text(encoding="utf-8", errors="ignore")
    keys = list(dict.fromkeys(t_pat.findall(text)))
    unique = [k for k in keys if t_index[k] == {name} or [f for f in t_index[k] if re.search(r"\d+", f).group() not in known_mods] == [name]]
    print(f"\n{name} named={mod_to_name.get(name, '?')}")
    print("  importers", named_imps)
    print("  t", keys[:10])
    print("  unique_t", unique[:8])
    print("  head", text[:220].replace("\n", " | ")[:200])

print("\n==== orig CONTAINER_LOGS_NOT_SUPPORTED / isSinglePage / hiddenBack ====")
for needle in [
    "CONTAINER_LOGS_NOT_SUPPORTED",
    "isSinglePage",
    "hiddenBack",
    "wrapperOnBack",
    "durationDropdown",
]:
    hits = []
    for p in SRC.rglob("*"):
        if not p.is_file() or p.suffix not in {".js", ".jsx"}:
            continue
        if needle in p.read_text(encoding="utf-8", errors="ignore"):
            hits.append(p.relative_to(SRC).as_posix())
    print(needle, hits)

print("\n==== named? LogCollectionCreate / Selector / Cards ContainerLog ====")
for frag in [
    "LogCollectionCreate",
    "projects/components/Selector",
    "Cards/ContainerLog",
    "Cards/Containers/Item",
]:
    hits = [(k, v) for k, v in pairs.items() if frag in k]
    print(frag, hits)
