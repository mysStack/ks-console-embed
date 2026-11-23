#!/usr/bin/env python3
from pathlib import Path
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = [
    ("Fuse class", "function Fuse("),
    ("FuseIndex", "FuseIndex"),
    ("includeScore", "includeScore"),
    ("isCaseSensitive", "isCaseSensitive"),
    ("Bitap", "BitapSearch"),
    ("RATE_RANGES", "RATE_RANGES"),
    ("searchFunctions", "searchFunctions"),
    ("protocolReg", "s3):"),
    ("checkRepoInvalidReason", "checkRepoInvalidReason"),
    ("Cannot configure a schema", "Cannot configure a schema"),
    ("whatwg-fetch", "whatwg-fetch"),
    ("github.com/github/fetch", "github/fetch"),
    ("self.fetch", "self.fetch ||"),
    ("lodash-es", "lodash-es"),
    ("stream-array", "stream-array"),
    ("htmlparser", "htmlparser"),
    ("semver", "validRange"),
    ("js-cookie", "js-cookie"),
    ("uuid v4", "xxxxxxxx-xxxx-4xxx"),
    ("copy-to-clipboard leftover", "copy-to-clipboard"),
    ("react-lifecycles", "polyfill(Component)"),
    ("hoist-non-react-statics", "hoist-non-react-statics"),
    ("warning.js", "throwOnWarnings"),
    ("tiny-invariant", "Invariant failed"),
    ("scheduler", "unstable_now"),
    ("object-assign", "object-assign"),
    ("prop-types leftover", "prop-types/checkPropTypes"),
]

hits = {name: [] for name, _ in NEEDLES}
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for name, needle in NEEDLES:
        if needle in text:
            hits[name].append(path.name)

for name, files in hits.items():
    print(f"{name}: {files[:12]} ({len(files)})")

# async-validator importers
for mid in ["238", "311", "3110", "850"]:
    importers = []
    needle = f"./module-{mid}.js"
    for path in UNPACKED.glob("module-*.js"):
        if needle in path.read_text(encoding="utf-8", errors="ignore") and path.name != f"module-{mid}.js":
            importers.append(path.name)
    print(f"importers of {mid}: {importers[:20]} ({len(importers)})")
