#!/usr/bin/env python3
"""Unnamed JS children of uniquely named parents; unique t() and unique importer pins."""
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
str_pat = re.compile(r"""['"]([A-Za-z0-9_./:=!<>\[\]{} -]{8,})['"]""")

PARENTS = [
    3266,
    2776,
    2821,
    3510,
    2828,
    3231,
    3261,
]


def is_css(mod):
    text = (UNPACKED / mod).read_text(encoding="utf-8", errors="ignore")
    return text.lstrip().startswith("export default {") and "import " not in text.split("\n")[0]


importers = defaultdict(list)
t_index = defaultdict(set)
lit_index = defaultdict(set)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for m in imp_unpacked.findall(text):
        importers[m].append(path.name)
    for k in t_pat.findall(text):
        t_index[k].add(path.name)
    for k in str_pat.findall(text):
        lit_index[k].add(path.name)


def orig_path(named):
    stem = named[:-3] if named.endswith(".js") else named
    for ext in (".js", ".jsx", "/index.js", "/index.jsx"):
        p = SRC / f"{stem}{ext}"
        if p.exists():
            return p
    return None


print("==== unnamed children of uniquely named parents ====")
all_kids = []
for mid in PARENTS:
    mod = f"module-{mid}.js"
    name = mod_to_name.get(mod, "?")
    print(f"\n{name} -> {mod}")
    if not (UNPACKED / mod).exists():
        print("  MISSING FILE")
        continue
    text = (UNPACKED / mod).read_text(encoding="utf-8", errors="ignore")
    kids = []
    for m in list(dict.fromkeys(imp_unpacked.findall(text))):
        kid_id = re.search(r"\d+", m).group()
        if kid_id not in known_mods and int(kid_id) >= 800 and not is_css(m):
            kids.append(m)
    print("  unnamed-js", kids)
    op = orig_path(name) if name != "?" else None
    if op:
        rels = [r for r in imp_orig.findall(op.read_text(encoding="utf-8", errors="ignore")) if r.startswith(".")]
        print("  orig_local", rels)
    for kid in kids:
        all_kids.append((name, mod, kid))

print("\n==== child uniqueness ====")
seen = set()
for parent, pmod, kid in all_kids:
    if kid in seen:
        continue
    seen.add(kid)
    ktext = (UNPACKED / kid).read_text(encoding="utf-8", errors="ignore")
    keys = list(dict.fromkeys(t_pat.findall(ktext)))
    unique_keys = []
    for k in keys:
        files = t_index[k]
        unnamed = [f for f in files if re.search(r"\d+", f).group() not in known_mods]
        if files == {kid} or unnamed == [kid]:
            unique_keys.append((k, sorted(files), "all" if files == {kid} else "unnamed"))
    unique_lits = []
    for k in list(dict.fromkeys(str_pat.findall(ktext))):
        files = lit_index[k]
        unnamed = [f for f in files if re.search(r"\d+", f).group() not in known_mods]
        if files == {kid} or unnamed == [kid]:
            unique_lits.append((k[:80], sorted(files)[:4], "all" if files == {kid} else "unnamed"))
    imps = sorted(set(importers[kid]), key=lambda s: int(s.split("-")[1].split(".")[0]))
    named_imps = [(i, mod_to_name.get(i, "?")) for i in imps]
    print(f"\n{kid} parent={parent}")
    print("  importers", named_imps)
    print("  t", keys[:12])
    print("  unique_t", unique_keys[:8])
    print("  unique_lit", unique_lits[:8])
    if len(imps) == 1 and named_imps and named_imps[0][1] != "?":
        print("  UNIQUE_IMPORTER_NAMED_PARENT", named_imps[0][1])

print("\n==== orig unique importers of expected children ====")
needles = [
    "StepModals/pipeline",
    "StepModals/application",
    "StepModals/credential",
    "StepModals/reaction",
    "TextMonitorForm",
    "TableMonitorForm",
    "FormContainer",
    "GraphList",
    "GraphOverviewLayout",
    "GraphRows",
    "GraphMonitorOverview",
    "Bill/components/BillIcon",
    "Bill/components/CustomToolTip",
    "Bill/components/LineChart/MonitorTab",
    "Bill/constats",
    "Modals/ProjectSelect",
    "Modals/WithBack",
    "Modals/ContainerLog",
    "Modals/FullscreenModal",
    "DurationSelect",
]
for frag in needles:
    hits = []
    for p in SRC.rglob("*"):
        if not p.is_file() or p.suffix not in {".js", ".jsx"}:
            continue
        text = p.read_text(encoding="utf-8", errors="ignore")
        for raw in imp_orig.findall(text):
            if frag.split("/")[-1] in raw.split("/")[-1] and frag.split("/")[-1] in raw:
                if frag in raw or frag.split("/")[-1] == raw.rstrip("/").split("/")[-1].split(".")[0]:
                    hits.append((p.relative_to(SRC).as_posix(), raw))
    print(frag, hits[:10], "count", len(hits))
