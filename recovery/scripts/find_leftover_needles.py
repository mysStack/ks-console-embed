#!/usr/bin/env python3
from pathlib import Path
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp)/'
)
NEEDLES = (
    "CONFIG_REFERENCE_IMPACT_CHECKING",
    "discoverConfigReferenceImpact",
    "findConfigReferenceImpact",
    "FLUXCD_FORM",
    "EditCDAdvanceSetting",
    "spec.kind', 'fluxcd",
    'spec.kind", "fluxcd',
    "configs/steps/fluxcd",
    "components/Modals/CDAdvanceEdit",
    "components/Modals/ConfigReferenceImpact",
)
for p in UNPACKED.glob("module-*.js"):
    text = p.read_text(encoding="utf-8", errors="ignore")
    if STUB_RE.match(text) or text.startswith('export { default } from "chunks/'):
        continue
    hits = [n for n in NEEDLES if n in text]
    if hits:
        print(p.name, hits)
