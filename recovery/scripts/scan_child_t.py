#!/usr/bin/env python3
from pathlib import Path
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
mods = [
    1179, 2682, 2684, 2687, 2691, 2693, 3145, 3149, 1608, 1610,
    2598, 2600, 3214, 3216, 3218, 3614, 3616, 3618, 2671, 2673,
    2675, 2669, 3282, 3286, 3280, 1332,
]
pat = re.compile(r't\("([^"]+)"\)')
for n in mods:
    p = UNPACKED / f"module-{n}.js"
    text = p.read_text(encoding="utf-8", errors="ignore")
    keys = list(dict.fromkeys(pat.findall(text)))
    print(f"=== {n} keys={len(keys)} first={keys[:8]}")
