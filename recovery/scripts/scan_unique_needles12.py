#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = [
    "SET_PARAMETERS",
    "PARAMS_DESC",
    "EDIT_PIPELINE",
    "Are you sure to close this pipeline Editor ?",
    "JENKINS_LINS_ERROR",
    "FAILED_CHECK_SCRIPT_COMPILE",
    "CLOSE_JENKINSFILE_EDITOR_TIP",
    "LOG_COLLECTION_ENABLE_TIPS",
    "LOG_COLLECTION_ES_URL_TIPS",
    "LOG_COLLECTION_ES_INDEX_TIPS",
    "ENTER_SERVICE_ADDRESS",
    "INVALID_SERVICE_ADDRESS",
    "LOG_COLLECTION_OS_URL_TIPS",
    "CREATE_APP_REPO",
    "APP_REVIEW",
    "REVIEW_REJECT",
    "ADJUST_CATEGORY",
    "UPLOAD_HELM_TITLE",
    "DEPLOY_APP",
    "ADD_TAINT",
    "TAINT_MANAGEMENT",
    "NODE_LOGS",
    "ADD_NODE",
    "CREATE_IPPOOL",
    "IPPOOL_WORKSPACE",
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
