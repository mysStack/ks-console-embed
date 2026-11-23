#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = [
    "USERNAME_EXISTS",
    "EMAIL_EXISTS",
    "PASSWORD_NOT_SAME_DESC",
    "CHANGE_PASSWORD",
    "USER_SETTINGS",
    "CONTENT_NOT_SAVED_TIPS",
    "iam.kubesphere.io/uninitialized",
    "ASSIGN_WORKSPACE",
    "PROJECT_NAME",
    "QUOTA_PL",
    "RESOURCE_QUOTA",
    "DEFAULT_CONTAINER_QUOTA",
    "springcloud.kubesphere.io/enabled",
    "way-to-add",
    "FullCreate",
    "IMPORT_CLUSTER",
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
