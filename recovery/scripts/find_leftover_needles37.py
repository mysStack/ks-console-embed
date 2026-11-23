#!/usr/bin/env python3
from pathlib import Path
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp)/'
)
NEEDLES = (
    "ctg-uncategorized",
    "openpitrix.category.edit",
    "openpitrix.category.delete",
    "leftShape_1",
    "HOW_TO_SET_PROJECT_GATEWAY",
    "project_members",
    "devopsTitle",
    "PATTERN_NAME_INVALID_TIP",
    "cluster_cpu_usage",
    "cluster_memory_usage_wo_cache",
    "getLastMonitoringData",
    "PolarAngleAxis",
    "default-workspace.svg",
    "member-count",
    "namespace-count",
    "workspace-item",
)
for p in UNPACKED.glob("module-*.js"):
    text = p.read_text(encoding="utf-8", errors="ignore")
    if STUB_RE.match(text) or text.startswith('export { default } from "chunks/'):
        continue
    hits = [n for n in NEEDLES if n in text]
    if hits:
        print(p.name, hits)
