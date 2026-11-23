#!/usr/bin/env python3
from pathlib import Path
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
pat = re.compile(r'key:\s*"render"[\s\S]{0,120}return <div\s*/>')
hits = []
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="replace")
    if pat.search(text):
        hits.append(path.name)
print({"empty_renders": hits, "count": len(hits)})
