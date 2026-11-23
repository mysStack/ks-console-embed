#!/usr/bin/env python3
import re
from collections import Counter
from pathlib import Path

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
# Babel rewriteWebpack4Runtime turns require(123) into require("./module-123.js").
# Count leftovers that are still numeric.
pat = re.compile(r"""require\(\s*(\d+)\s*\)""")
hits = Counter()
files = []
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    found = pat.findall(text)
    if found:
        hits.update(found)
        files.append((path.name, found[:8], len(found)))

files.sort(key=lambda item: -item[2])
print("files_with_numeric_require", len(files))
print("unique_ids", len(hits))
print("top_ids", hits.most_common(20))
print("top_files", files[:15])
