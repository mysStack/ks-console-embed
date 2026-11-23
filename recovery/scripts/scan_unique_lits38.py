#!/usr/bin/env python3
"""Confirm unique unpacked literals for remaining candidate modules."""
from pathlib import Path
from collections import defaultdict
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN_PY = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
known_mods = set(re.findall(r"module-(\d+)\.js", KNOWN_PY))

needles = [
    "updateTime",
    "shouldMenuShow",
    "startSelect",
    "changeComplete",
    "ANIMATION_DURATION",
    "defaultRecentOpts",
    "Last 5 Minutes",
    "handleCustomColseClick",
    "shouldInputModalShow",
    "handeCustomSelect",
    "textMonitorsRow",
    "changeLastTime",
    "hiddenDropdown",
    "hiddenBack",
    "legendsVisibleStates",
    "DASHBOARD_TITILE",
    "EDIT_TEMPLATE",
    "NO_REFRESHING",
    "Y_AXIS",
    "CUSTOM_DISPLAY_STYLE",
    "LOG_COLLECTION_TIPS",
    "collectionMap",
    "textPanels",
    "themeStyle",
    "styles.light",
    "styles.dark",
    "{ sidebar, content }",
    "{sidebar, content}",
    "theme === 'light'",
    "fullScreen",
    "hideFooter",
    "SwatchesPicker",
    "onChangeComplete",
    "ReactSortable",
    "textMonitors",
    "selectedMonitor",
    "changeTitle",
    "this.timer",
]
index = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for needle in needles:
        if needle in text:
            mid = re.search(r"\d+", path.name).group()
            index[needle].append((path.name, "named" if mid in known_mods else "unnamed"))

for needle in needles:
    hits = index[needle]
    print(f"{needle} count={len(hits)} {hits[:8]}")
