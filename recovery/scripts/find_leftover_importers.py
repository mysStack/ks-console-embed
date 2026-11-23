#!/usr/bin/env python3
from collections import defaultdict
from pathlib import Path
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp)/'
)
IMP = re.compile(r"""(?:from|require\()\s*['"]([^'"]+)['"]""")
SPECS = (
    "components/Modals/Bill/components/BillIcon/index",
    "components/Modals/Bill/components/BillIcon",
    "stores/limitrange",
    "pages/clusters/containers/Gateway/Components/Pods/index",
    "pages/clusters/containers/Gateway/Components/Pods/Item",
    "pages/projects/components/Selector/index",
    "pages/projects/components/Selector",
    "components/MoreActions/index",
    "components/MoreActions",
    "components/Modals/FullscreenModal/index",
    "core/containers/Base/Detail/index",
    "pages/apps/components/ToggleView/index",
    "pages/devops/containers/CD/Components/StatusText/index",
)
importers = defaultdict(list)
for p in UNPACKED.glob("module-*.js"):
    text = p.read_text(encoding="utf-8", errors="ignore")
    if STUB_RE.match(text) or text.startswith('export { default } from "chunks/'):
        continue
    specs = IMP.findall(text)
    for spec in SPECS:
        if spec in specs:
            importers[spec].append(p.name)
for spec, names in importers.items():
    print(spec, len(names), names[:8])
