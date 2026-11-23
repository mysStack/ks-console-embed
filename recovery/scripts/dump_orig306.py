#!/usr/bin/env python3
import json
from pathlib import Path

d = json.loads(Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/ORIG306_AUDIT.json").read_text())
print("count", d["count"])
print("by", json.dumps(d["by_status"]))
print("UNIQUE_EVIDENCE")
for i in d["items"]:
    if i["status"] == "unique-evidence-unpinned":
        print(i["orig"], "|", i["reason"])
print("EXTRA_PATH")
for i in d["items"]:
    if i["status"] == "extra-path-covered":
        print(i["orig"], "->", i["extra_path_dest"])
