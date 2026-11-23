#!/usr/bin/env python3
from pathlib import Path
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp)/'
)
WEAK = {"Gi", "detail-", "fullScreen", "linearGradient", "COLORS_MAP", "-area"}
NEEDLES = (
    "FEDERATED_PROJECT_UNSOPPORT_QUOTA",
    "RESERVED_MODULES",
    "QUOTAS_KEY_MODULE_MAP",
    "-area",
    "stopOpacity",
    "pageClose",
    "fullScreen",
    "handleMoreClick",
    "joinSelector",
    "LabelsCard",
    "unitSlider",
    "total_page",
    "handleSliderChange",
    "window.opener",
    "detail-",
    "isSinglePage",
    "COLORS_MAP",
    "linearGradient",
    "stores/event",
    "components/Cards/Events",
    "components/Cards/Annotations",
    "components/Cards/Labels",
    "Gi",
)
for p in UNPACKED.glob("module-*.js"):
    text = p.read_text(encoding="utf-8", errors="ignore")
    if STUB_RE.match(text) or text.startswith('export { default } from "chunks/'):
        continue
    hits = [n for n in NEEDLES if n in text]
    strong = [h for h in hits if h not in WEAK]
    if strong:
        print(p.name, hits)
