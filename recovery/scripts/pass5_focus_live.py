#!/usr/bin/env python3
import json
from pathlib import Path
APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
live = set(json.loads((APP / "LIVE_UNPACKED.json").read_text())["leftover_live"])
mods = [
    "module-28.js", "module-84.js", "module-191.js", "module-196.js",
    "module-249.js", "module-586.js",
    "module-671.js", "module-676.js", "module-678.js",
    "module-680.js", "module-682.js", "module-684.js",
    "module-672.js", "module-675.js", "module-677.js",
    "module-679.js", "module-681.js", "module-683.js", "module-685.js",
    "module-460.js", "module-462.js", "module-463.js", "module-464.js",
    "module-465.js", "module-466.js",
]
for m in mods:
    print(m, "LIVE" if m in live else "dropped")
print("leftover", len(live))
