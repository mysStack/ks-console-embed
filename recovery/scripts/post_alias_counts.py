#!/usr/bin/env python3
"""Recount live factory-key unpacked leftovers after alias apply."""
from collections import defaultdict
from pathlib import Path
import json
import re
import urllib.request

APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
UNPACKED = APP / "src/unpacked"
SRC = APP / "src"
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core)/'
)
FACTORY = re.compile(
    r"""/\*\*\*/ ["']\./src/unpacked/(module-\d+\.js)["']"""
)
PREFIX = re.compile(
    r"""/\*\*\*/ ["']\./src/(pages|components|stores|actions|utils|configs|core|unpacked|named)/([^\"']+\.js)["']"""
)
NEEDLES = [
    "src/pages/login",
    "src/core/App",
    "src/utils/babel-helpers/",
    "named/pages/login",
    "src/named/",
    "core-js3/modules/",
    "core-js3/internals/",
    "core-js/library",
    "unpacked/module-46.js",
    "unpacked/module-280.js",
    "unpacked/module-540.js",
]

req = urllib.request.Request(
    "http://127.0.0.1:8099/login",
    headers={"Accept": "text/html,application/xhtml+xml;q=0.9,*/*;q=0.8", "User-Agent": "Mozilla/5.0"},
)
try:
    html = urllib.request.urlopen(req, timeout=30).read().decode("utf-8", "replace")
except urllib.request.HTTPError as exc:
    print("login_http_error", exc.code)
    html = ""
scripts = re.findall(r'src="(/[^"]+\.js)"', html)
print("login_scripts", scripts)
app_url = "http://127.0.0.1:8099" + (scripts[0] if scripts else "/app.163399b1.js")
app_js = urllib.request.urlopen(app_url, timeout=60).read().decode("utf-8", "replace")
print("bundle", app_url, "bytes", len(app_js))

res = json.loads((APP / "LIVE_RESOURCES.json").read_text(encoding="utf-8")).get("scripts") or []
# replace old app hash
res = [app_url if "/app." in u and u.endswith(".js") and "vendors-" not in u else u for u in res]
# also fetch listed chunks but swap host app filename
urls = []
for u in res:
    if u.endswith(scripts[0].lstrip("/")) or "/app." in u and "vendors-" not in u.split("/")[-1]:
        continue
    urls.append(u)

webpack_ids = set(FACTORY.findall(app_js))
prefix_ids = defaultdict(set)
for m in PREFIX.finditer(app_js):
    prefix_ids[m.group(1)].add(m.group(2))
hits = {n: app_js.count(n) for n in NEEDLES}

fetched = 0
for url in urls:
    try:
        data = urllib.request.urlopen(url, timeout=30).read().decode("utf-8", "replace")
    except Exception as exc:  # noqa: BLE001
        print("chunk_err", url, type(exc).__name__)
        continue
    fetched += 1
    webpack_ids.update(FACTORY.findall(data))
    for m in PREFIX.finditer(data):
        prefix_ids[m.group(1)].add(m.group(2))

leftovers = []
stubs = 0
for name in sorted(webpack_ids, key=lambda n: int(re.search(r"\d+", n).group())):
    path = UNPACKED / name
    text = path.read_text(encoding="utf-8", errors="replace") if path.is_file() else ""
    if STUB_RE.search(text[:400]):
        stubs += 1
        continue
    leftovers.append(name)

print(
    json.dumps(
        {
            "bundle": app_url,
            "chunks_fetched": fetched,
            "factory_unpacked": len(webpack_ids),
            "stub_factories": stubs,
            "leftover_live": len(leftovers),
            "prefixes": {k: len(v) for k, v in prefix_ids.items()},
            "hits": hits,
            "aliased_still_factory": [
                n
                for n in (
                    "module-46.js",
                    "module-117.js",
                    "module-168.js",
                    "module-280.js",
                    "module-328.js",
                    "module-353.js",
                    "module-390.js",
                    "module-540.js",
                    "module-552.js",
                )
                if n in webpack_ids
            ],
        },
        indent=2,
    )
)

out = {
    "bundle": app_url,
    "leftover_live": leftovers,
    "leftover_live_count": len(leftovers),
    "unique_files_live_scripts": {k: len(v) for k, v in prefix_ids.items()},
    "hits": hits,
}
(APP / "LIVE_UNPACKED.json").write_text(json.dumps(out, indent=2) + "\n", encoding="utf-8")
print("wrote LIVE_UNPACKED.json")
