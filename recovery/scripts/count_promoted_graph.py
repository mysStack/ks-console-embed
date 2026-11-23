#!/usr/bin/env python3
import json
import os
import re

root = "/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src"
unp = os.path.join(root, "unpacked")
stub_re = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp)/'
)
stubs = 0
real = 0
for name in os.listdir(unp):
    if not name.startswith("module-") or not name.endswith(".js"):
        continue
    path = os.path.join(unp, name)
    with open(path, "r", encoding="utf-8", errors="replace") as handle:
        head = handle.read(400)
    if stub_re.search(head):
        stubs += 1
    else:
        real += 1

by_prefix = {}
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
    d = os.path.join(root, prefix)
    count = 0
    if os.path.isdir(d):
        for dirpath, _, files in os.walk(d):
            count += sum(1 for x in files if x.endswith(".js"))
    by_prefix[prefix] = count
    promoted += count

named = 0
nd = os.path.join(root, "named")
if os.path.isdir(nd):
    for dirpath, _, files in os.walk(nd):
        named += sum(1 for x in files if x.endswith(".js"))

print(
    json.dumps(
        {
            "promoted_src_js": promoted,
            "by_prefix": by_prefix,
            "unpacked_stubs": stubs,
            "unpacked_real_moduleN": real,
            "named_js": named,
        },
        indent=2,
    )
)
