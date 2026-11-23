#!/usr/bin/env python3
from pathlib import Path
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp)/'
)
NEEDLES = (
    "secret.kubesphere.io/is-default-class=true",
    "refecthDefaultSecret",
    "defaultSecretStore",
    "is-default-class",
    "TailIUnitInput",
    "styles.unit",
    "DETAIL_NOT_FOUND_DESC",
    "empty-card.svg",
    "NO_DATA_DESC",
    "RANK_NODE",
    "LIMIT_RANGE_HELP",
    "CPU_REQUESTS",
    "DEVOPS_BASEINFO_DESC",
    "DEVOPS_NAME",
    "SNAPSHOT_EMPTY_TIP",
    "SELECT_PERSISTENT_VOLUME_CLAIM",
    "spec.source.name",
    "snapshotClassName",
    "sort-ascending",
    "drag-handle",
    "hideTitle",
    "option.value.join",
    "FORM_GROUP_CARD",
    "SQUARE_BUTTON",
    "ItemContianer",
    "ColumeInput",
    "errorContainer",
    "withDefaultSecrets",
    "NUMBER_INPUT",
    "getStateFromProps",
    "handlerStyle",
    "trackStyle",
    "hasTooltip",
)
for p in UNPACKED.glob("module-*.js"):
    text = p.read_text(encoding="utf-8", errors="ignore")
    if STUB_RE.match(text) or text.startswith('export { default } from "chunks/'):
        continue
    hits = [n for n in NEEDLES if n in text]
    if hits:
        print(p.name, hits)
