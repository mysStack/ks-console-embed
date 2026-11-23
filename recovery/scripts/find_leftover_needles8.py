#!/usr/bin/env python3
from pathlib import Path
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp)/'
)
NEEDLES = (
    "tabHeaderItem",
    "TimeOps",
    "getLastTimeStr",
    "activeSeries",
    "payload.stroke",
    "showAll",
    "Charts/utils",
    "Graph/Detail/Monitors/TrafficCard",
    "getLastValue",
    "DEVOPS_BASEINFO_DESC",
    "devopsTitle",
    "volumesOpts",
    "namespaceOpts",
    "ADD_CHANNEL_TIP",
    "max_number_of_keyword",
    "BoxInput",
    "PARMMETER_TYPES",
    "CDAdvanceSetting",
    "getValueByUnit",
    "SimpleArea",
)
for p in UNPACKED.glob("module-*.js"):
    text = p.read_text(encoding="utf-8", errors="ignore")
    if STUB_RE.match(text) or text.startswith('export { default } from "chunks/'):
        continue
    hits = [n for n in NEEDLES if n in text]
    if len(hits) >= 2 or any(
        n in hits
        for n in (
            "tabHeaderItem",
            "TimeOps",
            "Charts/utils",
            "Graph/Detail/Monitors/TrafficCard",
            "DEVOPS_BASEINFO_DESC",
            "volumesOpts",
            "ADD_CHANNEL_TIP",
            "PARMMETER_TYPES",
            "devopsTitle",
        )
    ):
        print(p.name, hits)
