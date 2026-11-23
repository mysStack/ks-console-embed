#!/usr/bin/env python3
from pathlib import Path
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
KNOWN = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
known = set()
for m in re.findall(r'"stores/([^"]+)"', KNOWN):
    known.add(m.replace(".js", "").replace("/index", ""))

orig = []
for p in (ROOT / "src/stores").rglob("*"):
    if p.suffix not in {".js", ".jsx"}:
        continue
    if ".test." in p.name:
        continue
    rel = p.relative_to(ROOT / "src/stores").as_posix()
    stem = re.sub(r"/index\.(js|jsx)$", "", rel)
    stem = re.sub(r"\.(js|jsx)$", "", stem)
    orig.append(stem)

missing = [s for s in sorted(set(orig)) if s not in known]
print("missing stores", len(missing), "of", len(set(orig)))
for s in missing:
    print(s)
