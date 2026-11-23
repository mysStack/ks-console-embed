#!/usr/bin/env python3
from pathlib import Path
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp)/'
)
NEEDLES = (
    "isDuplicateEnvFrom",
    "toEnvFromReference",
    "fromEnvFromReference",
    "cleanEnvFrom",
    "KS_DESCRIPTION",
    "REPS_ADDRESS",
    "PART_IN_DISCUSSION",
    "CODE_CONTRIBUTE",
    "describtion",
    "blue-theme-git.svg",
    "containerPort",
    "defaultItemValue",
    "TIME_UNIT_MS_MAP",
    "date2Ms",
    "splitDateString",
    "withDefaultSecrets",
    "TailIUnitInput",
    "ISSUE_FEEDBACK",
)
for p in UNPACKED.glob("module-*.js"):
    text = p.read_text(encoding="utf-8", errors="ignore")
    if STUB_RE.match(text) or text.startswith('export { default } from "chunks/'):
        continue
    hits = [n for n in NEEDLES if n in text]
    if hits:
        print(p.name, hits)
