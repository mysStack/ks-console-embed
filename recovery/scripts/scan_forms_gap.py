#!/usr/bin/env python3
from pathlib import Path
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
KNOWN_PY = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
known = set(re.findall(r'"components/Forms/([^"]+)"', KNOWN_PY))
orig = []
for p in (ROOT / "src/components/Forms").rglob("*.{js,jsx}"):
    pass
for p in (ROOT / "src/components/Forms").rglob("*"):
    if p.suffix not in {".js", ".jsx"}:
        continue
    if p.name.endswith(".test.js") or p.name.endswith(".test.jsx"):
        continue
    if p.name.endswith(".scss"):
        continue
    rel = p.relative_to(ROOT / "src/components/Forms").as_posix()
    orig.append(rel)
print("=== original Forms not in KNOWN ===")
missing = [rel for rel in sorted(orig) if rel not in known]
for rel in missing:
    print(rel)
print("count", len(missing), "of", len(orig), "known", len(known))
