#!/usr/bin/env python3
from pathlib import Path
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
known_py = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
pairs = re.findall(r'"([^"]+)": "(module-\d+\.js)"', known_py)
named_dir = ROOT / "recovery/react-app/src/named"
files = [p for p in named_dir.rglob("*.js") if p.is_file()]
print("known_pairs", len(pairs))
print("unique_mods", len(set(m for _, m in pairs)))
print("named_files", len(files))
bad = 0
for path in files:
    text = path.read_text(encoding="utf-8", errors="ignore")
    if "unpacked/module-" not in text:
        bad += 1
        if bad <= 8:
            print("not_reexport", path.relative_to(named_dir))
print("named_not_reexport", bad)
