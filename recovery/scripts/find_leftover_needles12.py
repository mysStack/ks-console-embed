#!/usr/bin/env python3
from pathlib import Path
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp)/'
)
NEEDLES = (
    "DETAIL_NOT_FOUND_DESC",
    "empty-card.svg",
    "totalWeight",
    "SLACK_CHANNEL",
    "CHANNEL_EXISTS",
    "EMPTY_CHANNEL_DESC",
    "ADDED_CHANNELS",
    "MAX_CHANNEL_COUNT",
    "durantion",
    "ADD_CHANNEL_TIP",
    "GraphRowsSorter",
    "ThemeSelector",
    "valueFormatter",
    "Not Found",
)
for p in UNPACKED.glob("module-*.js"):
    text = p.read_text(encoding="utf-8", errors="ignore")
    if STUB_RE.match(text) or text.startswith('export { default } from "chunks/'):
        continue
    hits = [n for n in NEEDLES if n in text]
    if hits:
        print(p.name, hits)
