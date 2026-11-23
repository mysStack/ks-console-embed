#!/usr/bin/env python3
"""Count ./src prefix hits in the currently served webpack app bundle."""
from collections import defaultdict
from pathlib import Path
import json
import re
import urllib.request

APP = "http://127.0.0.1:8099"
html = urllib.request.urlopen(APP + "/login", timeout=30).read().decode("utf-8", "replace")
scripts = re.findall(r'src="(/app\.[^"]+\.js)"', html)
print("login_scripts", scripts)
if not scripts:
    html = urllib.request.urlopen(APP + "/", timeout=30).read().decode("utf-8", "replace")
    scripts = re.findall(r'src="(/app\.[^"]+\.js)"', html)
    print("root_scripts", scripts)

url = APP + (scripts[0] if scripts else "/app.371198e2.js")
data = urllib.request.urlopen(url, timeout=60).read().decode("utf-8", "replace")

needles = [
    "src/pages/login",
    "src/core/App",
    "src/utils/babel-helpers/",
    "named/pages/login",
    "src/named/",
    "core-js3/modules/",
    "core-js/modules/es.array.for-each",
    "unpacked/module-6.js",
    "unpacked/module-44.js",
    "utils/babel-helpers/asyncToGenerator",
]
hits = {n: data.count(n) for n in needles}

# webpack module identifiers in comments: ./src/...
ids = re.findall(r"\./src/(pages|components|stores|actions|utils|configs|core|unpacked|named)/", data)
by = defaultdict(int)
for p in ids:
    by[p] += 1

# unique files via webpack require paths
uniq = defaultdict(set)
for m in re.finditer(r"\./src/(pages|components|stores|actions|utils|configs|core|unpacked|named)/([^\"']+)", data):
    uniq[m.group(1)].add(m.group(2).split("?")[0])

print(
    json.dumps(
        {
            "bundle": url,
            "bytes": len(data),
            "hits": hits,
            "id_counts": dict(by),
            "unique_files": {k: len(v) for k, v in uniq.items()},
            "named_files_sample": sorted(uniq.get("named", []))[:8],
            "unpacked_sample": sorted(list(uniq.get("unpacked", []))[:8]),
            "utils_babel": sorted(x for x in uniq.get("utils", set()) if "babel-helpers" in x),
        },
        indent=2,
    )
)
