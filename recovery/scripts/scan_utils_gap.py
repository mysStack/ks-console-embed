#!/usr/bin/env python3
from pathlib import Path
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
KNOWN_PY = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
known = set(re.findall(r'"utils/([^"]+)"', KNOWN_PY))
orig = []
for p in (ROOT / "src/utils").rglob("*"):
    if p.suffix not in {".js", ".jsx"}:
        continue
    if ".test." in p.name:
        continue
    orig.append(p.relative_to(ROOT / "src/utils").as_posix())
missing = [rel for rel in sorted(orig) if rel not in known]
print("=== original utils not in KNOWN ===")
for rel in missing:
    print(rel)
print("count", len(missing), "of", len(orig), "known", len(known))
