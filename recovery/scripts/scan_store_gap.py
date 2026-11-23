#!/usr/bin/env python3
from pathlib import Path
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
KNOWN_PY = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
known_names = set(re.findall(r'"stores/([^"]+)"', KNOWN_PY))

orig = []
for p in (ROOT / "src/stores").rglob("*.js"):
    if p.name.endswith(".test.js"):
        continue
    rel = p.relative_to(ROOT / "src/stores").as_posix()
    orig.append(rel)

print("=== original stores not in KNOWN ===")
for rel in sorted(orig):
    if rel not in known_names:
        print(rel)
print("count", sum(1 for rel in orig if rel not in known_names), "of", len(orig))
print("known", len(known_names))
