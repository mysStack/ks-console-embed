#!/usr/bin/env python3
"""Confirm leftover 504/505/506 unique extra-path vs core-js3 engine-* ."""
from pathlib import Path
import re

APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
UNPACKED = APP / "src/unpacked"
NM = APP / "node_modules/core-js3/internals"


def read(p):
    return p.read_text(encoding="utf-8", errors="replace")


needles = {
    "module-504.js": r"firefox\/(\d+)",
    "module-506.js": r"AppleWebKit\/(\d+)",
    "module-505.js": "MSIE|Trident",
    "module-146.js": "Chrome\\/(\\d+)",
}

unpacked = {p.name: read(p) for p in UNPACKED.glob("module-*.js")}
print("unpacked", len(unpacked))
for name, needle in needles.items():
    lh = [n for n, t in unpacked.items() if needle in t]
    nh = [p.name for p in NM.glob("*.js") if needle in read(p)]
    print(f"{name} needle={needle!r} leftover={lh} npm={nh}")

# consume .default of 117
pat = re.compile(r"""require\(\s*['"]unpacked/module-117\.js['"]\s*\)\s*\.default""")
hits = [n for n, t in unpacked.items() if pat.search(t)]
print("117 require().default leftovers", hits)
imp = re.compile(r"""import\s+\w+\s+from\s+['"]unpacked/module-117\.js['"]""")
hits2 = [n for n, t in unpacked.items() if imp.search(t)]
print("117 default-import leftovers", hits2[:20], "n", len(hits2))
