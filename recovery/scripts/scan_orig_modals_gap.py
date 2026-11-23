#!/usr/bin/env python3
"""Original Modal/Form files whose named path is not in KNOWN."""
from pathlib import Path
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
KNOWN_PY = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
known = set(re.findall(r'"([^"]+)": "module-\d+\.js"', KNOWN_PY))
src = ROOT / "src"

def candidates():
    for p in src.rglob("*"):
        if not p.is_file():
            continue
        if p.suffix not in {".js", ".jsx"}:
            continue
        rel = p.relative_to(src).as_posix()
        if any(x in rel for x in ("/Modals/", "/Forms/", "components/HOCs/", "components/Base/")):
            if ".test." in rel:
                continue
            yield rel

missing = []
for rel in sorted(candidates()):
    key_js = rel
    if key_js.endswith("/index.jsx"):
        key_js = key_js[: -len("/index.jsx")] + ".js"
    elif key_js.endswith("/index.js"):
        key_js = key_js[: -len("/index.js")] + ".js"
    elif key_js.endswith(".jsx"):
        key_js = key_js[:-4] + ".js"
    if key_js not in known and rel not in known:
        missing.append((rel, key_js))

print("missing", len(missing))
for rel, key in missing:
    print(key, "<=", rel)
