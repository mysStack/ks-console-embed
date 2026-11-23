#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = [
    "EDIT_PROJECT_QUOTAS",
    "CREATE_PROJECT_DESC",
    "PROJECT_ASSIGN_DESC",
    "EDIT_DEFAULT_CONTAINER_QUOTAS",
    "PROJECT_NAME_EXIST_DESC",
    "SELECT_WORKSPACE_DESC",
    "USERNAME_EMPTY_DESC",
    "CONFIRM_PASSWORD_TIP",
    "USER_SETTINGS",
    "project-create.svg",
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
