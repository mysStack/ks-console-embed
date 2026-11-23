#!/usr/bin/env python3
"""Factory leftover + prefix counts from current 8099 login/dashboard scripts."""
from collections import defaultdict
from pathlib import Path
import json
import re
import urllib.request

APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
UNPACKED = APP / "src/unpacked"
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core)/'
)
FACTORY = re.compile(r"""/\*\*\*/ ["']\./src/unpacked/(module-\d+\.js)["']""")
PREFIX = re.compile(
    r"""/\*\*\*/ ["']\./src/(pages|components|stores|actions|utils|configs|core|unpacked|named)/([^\"']+\.js)["']"""
)


def fetch(url: str) -> str:
    req = urllib.request.Request(
        url,
        headers={
            "Accept": "text/html,application/xhtml+xml,application/javascript;q=0.9,*/*;q=0.8",
            "User-Agent": "Mozilla/5.0",
        },
    )
    with urllib.request.urlopen(req, timeout=60) as resp:
        return resp.read().decode("utf-8", "replace")


def scripts_of(html: str) -> list[str]:
    return re.findall(r'src="(/[^"]+\.js)"', html)


login_html = fetch("http://127.0.0.1:8099/login")
dash_html = fetch("http://127.0.0.1:8099/dashboard")
scripts = list(dict.fromkeys(scripts_of(login_html) + scripts_of(dash_html)))
print("login_overlay", "webpack-dev-server-client-overlay" in login_html)
print("dash_overlay", "webpack-dev-server-client-overlay" in dash_html)
print("scripts", scripts)

webpack_ids = set()
prefix_ids = defaultdict(set)
hits = {
    "src/named/": 0,
    "src/pages/login": 0,
    "src/core/App": 0,
    "src/utils/babel-helpers/": 0,
    "core-js3/internals/": 0,
    "core-js/library": 0,
}
fetched = 0
app_url = ""
for src in scripts:
    url = "http://127.0.0.1:8099" + src
    data = fetch(url)
    fetched += 1
    if "/app." in src and "vendors-" not in src:
        app_url = url
        print("bundle", url, "bytes", len(data))
    webpack_ids.update(FACTORY.findall(data))
    for m in PREFIX.finditer(data):
        prefix_ids[m.group(1)].add(m.group(2))
    for k in hits:
        hits[k] += data.count(k)

leftovers = []
stubs = 0
for name in sorted(webpack_ids, key=lambda n: int(re.search(r"\d+", n).group())):
    path = UNPACKED / name
    text = path.read_text(encoding="utf-8", errors="replace") if path.is_file() else ""
    if STUB_RE.search(text[:400]):
        stubs += 1
        continue
    leftovers.append(name)

report = {
    "bundle": app_url,
    "scripts": scripts,
    "chunks_fetched": fetched,
    "factory_unpacked": len(webpack_ids),
    "stub_factories": stubs,
    "leftover_live": len(leftovers),
    "prefixes": {k: len(v) for k, v in prefix_ids.items()},
    "hits": hits,
}
print(json.dumps(report, indent=2))
(APP / "LIVE_UNPACKED.json").write_text(
    json.dumps(
        {
            "bundle": app_url,
            "leftover_live": leftovers,
            "leftover_live_count": len(leftovers),
            "unique_files_live_scripts": {k: len(v) for k, v in prefix_ids.items()},
            "hits": hits,
        },
        indent=2,
    )
    + "\n",
    encoding="utf-8",
)
print("wrote LIVE_UNPACKED.json")
