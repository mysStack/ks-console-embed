#!/usr/bin/env python3
from pathlib import Path
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp)/'
)
NEEDLES = (
    "'10m',\n  '20m'",
    '"10m",\n  "20m"',
    '["10m", "20m", "30m"',
    "['10m', '20m', '30m'",
    "getLastTimeStr",
    "DefaultRange",
    "MonitorTab",
    "Charts/Custom/Legend",
)
for p in UNPACKED.glob("module-*.js"):
    text = p.read_text(encoding="utf-8", errors="ignore")
    if STUB_RE.match(text) or text.startswith('export { default } from "chunks/'):
        continue
    hits = []
    if "10m" in text and "20m" in text and "12h" in text and "getTimeOptions" in text:
        hits.append("TimeOps-like")
    for n in NEEDLES:
        if n in text:
            hits.append(n.replace("\n", " "))
    if hits:
        print(p.name, hits)
