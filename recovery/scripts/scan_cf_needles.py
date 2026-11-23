#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict
UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = [
    "STARTUP_COMMAND_DESC",
    "SYNC_HOST_TIMEZONE_DESC",
    "LIFECYCLE_MANAGEMENT_DESC",
    "CONTAINER_RESOURCE_LIMIT_TIP",
    "IMAGE_PULL_POLICY_IFNOTPRESENT_DESC",
    "USE_IMAGE_DEFAULT_PORTS",
    "ENVIRONMENT_VARIABLE_PL",
    "HEALTH_CHECKER_DESC",
    "POSTSTART_ACTION_DESC",
    "CONTAINER_SETTINGS_DESC",
]
hits = defaultdict(list)
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for n in NEEDLES:
        if n in text:
            hits[n].append(path.name)
for n in NEEDLES:
    files = sorted(hits[n], key=lambda s: int(s.split("-")[1].split(".")[0]))
    print(f"{len(files):3} {n} {files[:6]}")
