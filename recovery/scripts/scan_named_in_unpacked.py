#!/usr/bin/env python3
"""Named files must never enter the unpacked import graph."""
from pathlib import Path
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src")
UNPACKED = ROOT / "unpacked"
pat = re.compile(r"""['"][^'"]*named/[^'"]+['"]""")
hits = []
for path in UNPACKED.glob("*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    found = pat.findall(text)
    if found:
        hits.append((path.name, found[:8]))
print("unpacked_files_importing_named", len(hits))
for item in hits[:20]:
    print(" ", item)
