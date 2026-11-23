#!/usr/bin/env python3
from pathlib import Path

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
needles = [
    'chartName: "LineChart"',
    "chartName: 'LineChart'",
    'chartName:"LineChart"',
    "chartName:'LineChart'",
    'chartName = "LineChart"',
    "ScatterChart",
    "module1084(",
    "module-1084.js",
]
for path in sorted(UNPACKED.glob("module-*.js")):
    text = path.read_text(encoding="utf-8", errors="ignore")
    hits = [n for n in needles if n in text]
    if hits and ("1084" in text or "LineChart" in text or "ScatterChart" in text):
        if path.name in {"module-1084.js", "module-912.js"}:
            continue
        print(path.name, hits)
