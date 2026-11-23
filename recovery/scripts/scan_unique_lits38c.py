#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict
import re

SRC = Path("/home/bruce/code/ks-develop/kse-console-v3/src")
UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
imp_orig = re.compile(r"""(?:from|require\()\s*['"]([^'"]+)['"]""")

needles = [
    't("TIME"):',
    "t('TIME'):",
    't("TIME")}:',
    '{t("TIME")}:',
    "title, description, children",
    "SINGLE_STATE_CHART",
    "CHART_TYPES",
    "CustomToolTip",
    "BillIcon",
]
index = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for needle in needles:
        if needle in text:
            index[needle].append(path.name)
for needle in needles:
    print(needle, index[needle][:8], "count", len(index[needle]))

print("\n==== orig CustomToolTip importers ====")
for p in SRC.rglob("*"):
    if not p.is_file() or p.suffix not in {".js", ".jsx"}:
        continue
    text = p.read_text(encoding="utf-8", errors="ignore")
    for raw in imp_orig.findall(text):
        if "CustomToolTip" in raw or "BillIcon" in raw:
            print(p.relative_to(SRC).as_posix(), raw)

# Clock unique combo
text = (UNPACKED / "module-2846.js").read_text(encoding="utf-8", errors="ignore")
print("\n2846 has TIME colon", '{t("TIME")}:' in text)
print(text[text.find("TIME")-20:text.find("TIME")+80] if "TIME" in text else "no")
