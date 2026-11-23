#!/usr/bin/env python3
from pathlib import Path
import json
import re

src = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src")
unpacked = src / "unpacked"
stub = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp)/'
)
live = 0
stubs = 0
for p in unpacked.glob("module-*.js"):
    text = p.read_text(encoding="utf-8", errors="ignore")
    if stub.match(text) or text.startswith('export { default } from "chunks/'):
        stubs += 1
    else:
        live += 1
promoted = 0
for prefix in (
    "pages",
    "components",
    "stores",
    "actions",
    "utils",
    "configs",
    "core",
    "dmp",
):
    d = src / prefix
    if d.exists():
        promoted += sum(1 for p in d.rglob("*.js") if p.is_file())
print(json.dumps({"unpacked_live": live, "unpacked_stubs": stubs, "promoted_js": promoted}))
