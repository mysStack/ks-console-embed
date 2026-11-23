#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict
import json, re
APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
UNPACKED = APP / "src/unpacked"
NM = APP / "node_modules"
LIVE = json.loads((APP / "LIVE_UNPACKED.json").read_text())
STR_RE = re.compile(r"""['"]([^'"]{16,})['"]""")
needle = "string-to-symbol-registry"
print("live has 586", "module-586.js" in LIVE["leftover_live"])
print("file exists", (UNPACKED / "module-586.js").exists())
t = (UNPACKED / "module-586.js").read_text()
print("needle in leftover", needle in t)
print("strs", STR_RE.findall(t))
leftover_str = defaultdict(set)
for p in UNPACKED.glob("module-*.js"):
    txt = p.read_text(encoding="utf-8", errors="replace")
    if needle in txt:
        leftover_str[needle].add(p.name)
print("leftover hits", leftover_str[needle])
npm_str = defaultdict(set)
for folder in ("modules", "internals"):
    for p in (NM / "core-js3" / folder).glob("*.js"):
        txt = p.read_text(encoding="utf-8", errors="replace")
        if needle in txt:
            npm_str[needle].add(f"core-js3/{folder}/{p.name}")
        for s in STR_RE.findall(txt):
            if s == needle:
                npm_str["_re"].add(f"core-js3/{folder}/{p.name}")
print("npm substring", npm_str[needle])
print("npm STR_RE", npm_str["_re"])
# lodash?
for p in (NM / "lodash").glob("*.js"):
    txt = p.read_text(encoding="utf-8", errors="replace")
    if needle in txt:
        print("lodash", p.name)
