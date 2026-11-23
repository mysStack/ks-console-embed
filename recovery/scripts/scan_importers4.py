#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
targets = [4690, 4692, 4694, 4698, 1060, 1370, 1675, 1369, 1701, 1704, 1143, 1712, 2685]
hits = defaultdict(list)
pat = re.compile(r't\("([^"]+)"\)')
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for n in targets:
        if f"./module-{n}.js" in text:
            hits[n].append(path.name)
print("=== importers ===")
for n in targets:
    files = sorted(set(hits[n]), key=lambda s: int(s.split("-")[1].split(".")[0]))
    print(f"{n}: {len(files)} {files[:8]}")

print("\n=== t() ===")
for n in targets:
    p = UNPACKED / f"module-{n}.js"
    text = p.read_text(encoding="utf-8", errors="ignore")
    keys = list(dict.fromkeys(pat.findall(text)))
    css = text.startswith("export default {") and ":" in text[:80]
    print(f"{n}: css={css} keys={keys[:8]}")
