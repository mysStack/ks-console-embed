#!/usr/bin/env python3
"""Fetch all dashboard/login live scripts and count unpacked factory leftovers."""
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
FACTORY = re.compile(r"""/\*\*\*/ ["']\./src/unpacked/(module-\d+\.js)["']""")
PREFIX = re.compile(
    r"""/\*\*\*/ ["']\./src/(pages|components|stores|actions|utils|configs|core|unpacked|named)/([^\"']+\.js)["']"""
)


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers={"Accept": "*/*", "User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=120) as resp:
        return resp.read().decode("utf-8", "replace")


res = json.loads((APP / "LIVE_RESOURCES.json").read_text(encoding="utf-8"))
scripts = list(dict.fromkeys(res.get("scripts") or []))
print("scripts", len(scripts), flush=True)

webpack_ids = set()
prefix_ids = defaultdict(set)
hits = {
    "src/named/": 0,
    "src/pages/login": 0,
    "src/core/App": 0,
    "module-761.js": 0,
    "react-is": 0,
}
fetched = 0
errors = []
app_url = ""
for src in scripts:
    url = src if src.startswith("http") else "http://127.0.0.1:8099" + src
    try:
        data = fetch(url)
    except Exception as exc:  # noqa: BLE001
        errors.append({"url": url.split("/")[-1][:80], "error": type(exc).__name__})
        continue
    fetched += 1
    webpack_ids.update(FACTORY.findall(data))
    for m in PREFIX.finditer(data):
        prefix_ids[m.group(1)].add(m.group(2).split("?")[0])
    for k in hits:
        hits[k] += data.count(k)
    if "/app." in url and "vendors-" not in url:
        app_url = url
        print("bundle", url.split("/")[-1], "bytes", len(data), flush=True)
    print("fetched", url.split("/")[-1][:70], "factories", len(FACTORY.findall(data)), flush=True)

leftovers = []
stubs = 0
for name in sorted(webpack_ids, key=lambda n: int(re.search(r"\d+", n).group())):
    path = UNPACKED / name
    text = path.read_text(encoding="utf-8", errors="replace") if path.is_file() else ""
    if STUB_RE.search(text[:400]):
        stubs += 1
        continue
    leftovers.append(name)

disk = 0
promoted = 0
prefixes = ("pages", "components", "stores", "actions", "utils", "configs", "core")
for p in UNPACKED.glob("module-*.js"):
    t = p.read_text(encoding="utf-8", errors="replace")
    if not STUB_RE.search(t[:400]):
        disk += 1
for folder in prefixes:
    d = SRC / folder
    if not d.is_dir():
        continue
    for p in d.rglob("*.js"):
        t = p.read_text(encoding="utf-8", errors="replace")
        if not t.startswith("export { default } from "):
            promoted += 1

report = {
    "bundle": app_url,
    "scripts": scripts,
    "chunks_fetched": fetched,
    "chunk_errors": errors,
    "factory_unpacked_including_stubs": len(webpack_ids),
    "stub_factories": stubs,
    "leftover_live_count": len(leftovers),
    "prefixes": {k: len(v) for k, v in prefix_ids.items()},
    "hits": hits,
    "disk_real_unpacked": disk,
    "promoted_real": promoted,
    "webpackChunk_unpackedUnique": res.get("webpackChunk_unpackedUnique"),
}
print(json.dumps({k: v for k, v in report.items() if k != "scripts"}, indent=2), flush=True)
(APP / "LIVE_UNPACKED.json").write_text(
    json.dumps(
        {
            **report,
            "leftover_live": leftovers,
        },
        indent=2,
    )
    + "\n",
    encoding="utf-8",
)
print("wrote LIVE_UNPACKED.json leftovers", len(leftovers), flush=True)
