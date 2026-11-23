#!/usr/bin/env python3
from pathlib import Path
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp)/'
)
NEEDLES = (
    "NO_CLUSTER_AVAILABLE",
    "WORKSPACE_NO_CLUSTER_TIP",
    "HOW_TO_APPLY_MORE_CLUSTER_Q",
    "HOW_TO_APPLY_MORE_CLUSTER_A",
    "coreUnitTS",
    "#329dce",
    "#c7deef",
    "name: \"Used\"",
    "name: \"Left\"",
    "width={48}",
    "width: 48",
)
for p in UNPACKED.glob("module-*.js"):
    text = p.read_text(encoding="utf-8", errors="ignore")
    if STUB_RE.match(text) or text.startswith('export { default } from "chunks/'):
        continue
    hits = [n for n in NEEDLES if n in text]
    if hits:
        print(p.name, hits)
