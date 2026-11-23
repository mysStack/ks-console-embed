#!/usr/bin/env python3
from pathlib import Path
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp)/'
)
NEEDLES = (
    "setLocalStorageItem",
    "getLocalStorageItem",
    "silenceUnsupportedListReject",
    "unsupportedListResult",
    "isWujieEmbedded",
    "getEnabledRoutes",
    "ICON_TYPES",
    "FormsBox",
    "pathToRegexp",
    "renderRoutes",
    "getPodStatusLocaleKey",
    "PODS.PHASES.UNKNOWN",
    "UnKnown",
    "imageBuildStrategies",
    "storageclasscapabilities",
    "federated.list",
    "s2i/listReject",
    "BillIcon",
    "TailItemInput",
    "GraphRowsSortor",
    "ItemContianer",
    "ColumeInput",
    "errorContainer",
    "FormGroupCard",
    "SquareButton",
    "ThemeSelector",
    "EditMonitorFormLayout",
)
for p in UNPACKED.glob("module-*.js"):
    text = p.read_text(encoding="utf-8", errors="ignore")
    if STUB_RE.match(text) or text.startswith('export { default } from "chunks/'):
        continue
    hits = [n for n in NEEDLES if n in text]
    if hits:
        print(p.name, hits)
