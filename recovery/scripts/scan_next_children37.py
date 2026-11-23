#!/usr/bin/env python3
"""Unnamed children of this-slice candidate parents; LineChart 3532 identity."""
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


def dump_kid(kid):
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
    print("    t", keys[:12])
    print("    unique_t", unique_keys[:8])
    if len(imps) == 1 and named_imps and named_imps[0][1] != "?":
        print("    UNIQUE_IMPORTER_NAMED_PARENT", named_imps[0][1])
    print("    head", ktext[:200].replace("\n", " | ")[:180])


PARENTS = [2822, 2777, 2779, 2803, 2841, 2839, 3267, 3268, 3269, 3270, 3524, 3532, 3531]

print("==== unnamed children of candidate parents ====")
for mid in PARENTS:
    mod = f"module-{mid}.js"
    if not (UNPACKED / mod).exists():
        print(mod, "MISSING")
        continue
    text = (UNPACKED / mod).read_text(encoding="utf-8", errors="ignore")
    kids = []
    for m in list(dict.fromkeys(imp_unpacked.findall(text))):
        kid_id = re.search(r"\d+", m).group()
        if kid_id not in known_mods and int(kid_id) >= 800 and not is_css(m):
            kids.append(m)
    print(f"\nmodule-{mid} named={mod_to_name.get(mod, '?')} unnamed-js {kids}")
    for kid in kids:
        dump_kid(kid)

print("\n==== orig t uniqueness CLUSTER_SCAP / ADD_CLUSTER / MonitorTab ====")
src_t = defaultdict(list)
for p in SRC.rglob("*"):
    if not p.is_file() or p.suffix not in {".js", ".jsx"}:
        continue
    if ".test." in p.name:
        continue
    rel = p.relative_to(SRC).as_posix()
    for k in t_pat.findall(p.read_text(encoding="utf-8", errors="ignore")):
        src_t[k].append(rel)

for k in [
    "CLUSTER_SCAP",
    "ADD_CLUSTER_FOR_WORKSPACE",
    "CLUSTER_UPGRADE_REQUIRED",
    "TABLE_SETTINGS",
    "PER_PAGE_LINES",
]:
    print(k, src_t.get(k, []))

print("\n==== orig unique importers SideCard item / MonitorTab / GraphMonitorOverview ====")
for frag in ["SideCard/item", "./item", "MonitorTab", "GraphMonitorOverview", "GraphContainer", "ErrorContainer"]:
    hits = []
    for p in SRC.rglob("*"):
        if not p.is_file() or p.suffix not in {".js", ".jsx"}:
            continue
        text = p.read_text(encoding="utf-8", errors="ignore")
        for raw in imp_orig.findall(text):
            if frag.split("/")[-1] in raw.split("/")[-1] and frag.split("/")[-1] in raw:
                hits.append((p.relative_to(SRC).as_posix(), raw))
    print(frag, hits[:8], "count", len(hits))
