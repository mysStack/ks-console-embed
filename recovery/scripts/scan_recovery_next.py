#!/usr/bin/env python3
from collections import defaultdict
from pathlib import Path
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")

needles = ("module-958.js", "module-1056.js", "module-1648.js", "module-244.js", "module-83.js", "module-47.js", "module-433.js")
importers = {n: [] for n in needles}
empty_renders = []
export_create_browser = []

for path in UNPACKED.glob("*.js"):
    text = path.read_text(encoding="utf-8", errors="replace")
    for needle in needles:
        if needle in text and path.name != needle:
            if len(importers[needle]) < 8:
                importers[needle].append(path.name)
    if re.search(r'key:\s*"render"[\s\S]{0,80}return <div/>;', text):
        empty_renders.append(path.name)
    if "createBrowserHistory" in text and path.name in {"module-83.js", "module-47.js", "module-433.js"}:
        export_create_browser.append(path.name)

print("importers", {k: v for k, v in importers.items()})
print("empty_renders", empty_renders)
print("history files", export_create_browser)
