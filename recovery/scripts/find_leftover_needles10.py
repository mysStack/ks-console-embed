#!/usr/bin/env python3
from pathlib import Path
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp)/'
)
NEEDLES = (
    "ENVIRONMENT_REFERENCE_PL",
    "ADD_ENVIRONMENT_REFERENCE",
    "env-from-loading",
    "ENVIRONMENT_REFERENCE_DESC",
    "wrapper_item_com",
    "checkItemValid",
    "HelmForm",
    "KustomizeForm",
    "ImagesInput",
    "DEVOPS_BASEINFO_DESC",
    "devopsTitle",
    "ADD_CHANNEL_TIP",
    "max_number_of_keyword",
    "Forms/Base/Title",
    "PATTERN_NAME_INVALID_TIP",
)
for p in UNPACKED.glob("module-*.js"):
    text = p.read_text(encoding="utf-8", errors="ignore")
    if STUB_RE.match(text) or text.startswith('export { default } from "chunks/'):
        continue
    hits = [n for n in NEEDLES if n in text]
    if hits:
        print(p.name, hits)
