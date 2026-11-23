#!/usr/bin/env python3
from pathlib import Path
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
KNOWN = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")

def canon(rel):
    rel = re.sub(r"/index\.(js|jsx)$", ".js", rel)
    rel = re.sub(r"\.(jsx)$", ".js", rel)
    return rel

known = set()
for m in re.findall(r'"components/Modals/([^"]+)"', KNOWN):
    known.add(canon(m))

missing = []
for p in (ROOT / "src/components/Modals").rglob("*"):
    if p.suffix not in {".js", ".jsx"}:
        continue
    if ".test." in p.name or p.name.endswith(".scss"):
        continue
    rel = p.relative_to(ROOT / "src/components/Modals").as_posix()
    c = canon(rel)
    if c not in known:
        missing.append(c)
print("missing modals", len(missing))
for m in missing:
    print(m)
