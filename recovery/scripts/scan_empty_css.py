#!/usr/bin/env python3
from pathlib import Path

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
empty = []
css_side = []
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore").strip()
    if text in {'export default {};', 'export default {}'}:
        empty.append(path.name)
    if "export default {}" in text and len(text) < 80:
        empty.append(path.name)

# unique
seen = []
for name in empty:
    if name not in seen:
        seen.append(name)
print("empty_css_placeholders", len(seen))
print(seen[:40])
