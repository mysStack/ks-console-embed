#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = [
    "INVITE_MEMBER_SEARCH_PLACEHOLDER",
    "INVITE_MEMBER_DESC",
    "CHANGE_ROLE",
    "SELECT_ROLE_TIP",
    "SET_DEFAULT_STORAGE_CLASS_TITLE",
    "STORAGE_CLASS_SET_DEFAULT_DESC",
    "SET_AUTO_EXPANSION",
    "RESTART_WORKLOAD_AUTOMATICALLY_TIP",
    "SET_VOLUME_OPERATIONS",
    "VOLUME_CLONING",
    "CREATE_ROLE",
    "WORKSPACE_ROLE_NAME_TIP",
    "EDIT_PERMISSIONS",
    "DELETE_ROLE_USER_TIP",
    "DELETE_ROLE",
]
hits = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for needle in NEEDLES:
        if needle in text:
            hits[needle].append(path.name)
for needle in NEEDLES:
    files = sorted(hits[needle], key=lambda s: int(s.split("-")[1].split(".")[0]))
    print(f"{len(files):3} {needle}")
    if 0 < len(files) <= 8:
        print("    " + ", ".join(files))
