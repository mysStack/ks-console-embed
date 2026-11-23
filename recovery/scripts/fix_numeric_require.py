#!/usr/bin/env python3
from pathlib import Path

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
IDS = ("958", "1056", "1648")
FILES = [
    "module-2016.js",
    "module-1469.js",
    "module-992.js",
    "module-1652.js",
    "module-1263.js",
]

for name in FILES:
    path = ROOT / name
    text = path.read_text(encoding="utf-8")
    orig = text
    for module_id in IDS:
        text = text.replace(f"require({module_id})", f'require("./module-{module_id}.js")')
    if text != orig:
        path.write_text(text, encoding="utf-8")
        print("rewrote", name)
    else:
        print("unchanged", name)
