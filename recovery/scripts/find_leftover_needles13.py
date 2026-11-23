#!/usr/bin/env python3
from pathlib import Path
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp)/'
)
NEEDLES = (
    "volumesOpts",
    "namespaceOpts",
    "meta.namespace",
    "refreshInterval",
    "recentTimeRange",
    "GraphRowsSorter",
    "ThemeSelector",
    "ItemContianer",
    "ColumeInput",
    "EditMonitorFormLayout",
    "TAIL_UNIT",
    "TailIUnit",
    "unitOptions",
    "DURATION_DESC",
    "VOLUME_SNAPSHOT",
    "SELECT_VOLUME",
    "SNAPSHOT_CLASS",
    "PREFERRED_DURING",
    "preferredDuringSchedulingIgnoredDuringExecution",
    "withDefaultSecrets",
    "DEVOPS_BASEINFO_DESC",
    "DEVOPS_PROJECT_CREDENTIAL_PL",
    "LogQuery",
    "RANK_TITLE",
    "LIMIT_RANGE",
    "DIFF_YAML",
    "EMPTY_LIST",
    "NO_RESOURCE_FOUND",
)
for p in UNPACKED.glob("module-*.js"):
    text = p.read_text(encoding="utf-8", errors="ignore")
    if STUB_RE.match(text) or text.startswith('export { default } from "chunks/'):
        continue
    hits = [n for n in NEEDLES if n in text]
    if hits:
        print(p.name, hits)
