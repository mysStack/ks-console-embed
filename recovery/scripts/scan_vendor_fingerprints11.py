#!/usr/bin/env python3
from pathlib import Path

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = [
    ("big.js DP", "Big.DP"),
    ("big.js RM", "Big.RM"),
    ("proposeGeometry", "proposeGeometry"),
    ("Terminal fit", "addons/fit"),
    ("whatwg-fetch support", "self.fetch"),
    ("github fetch", "github.com/github/fetch"),
    ("new Headers", "Headers.prototype"),
    ("lodash-es comment", "lodash-es"),
    ("ALERTING_METRICS", "ALERTING_METRICS"),
    ("rule.config", "cpu_usage"),
]

hits = {name: [] for name, _ in NEEDLES}
importers_2016 = []
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for name, needle in NEEDLES:
        if needle in text:
            hits[name].append(path.name)
    if "./module-2016.js" in text and path.name != "module-2016.js":
        importers_2016.append(path.name)

for name, files in hits.items():
    print(f"{name}: {files[:12]} ({len(files)})")
print("importers of 2016:", importers_2016[:30], f"({len(importers_2016)})")
