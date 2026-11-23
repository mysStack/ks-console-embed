#!/usr/bin/env python3
from pathlib import Path

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
hits = []
for path in UNPACKED.glob("*.js"):
    text = path.read_text(errors="replace")
    if "export default exports.default" in text:
        hits.append(path.name)
print(len(hits))
print("\n".join(hits[:40]))
