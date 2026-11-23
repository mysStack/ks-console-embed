#!/usr/bin/env python3
"""Enumerate LIVE login/dashboard unpacked module-N.js from the served webpack graph.

Sources: 8099 HTML + app bundle + async chunk filenames + optional source maps.
Does not invent orig paths. Writes recovery/react-app/LIVE_UNPACKED.json.
"""
from __future__ import annotations

from collections import defaultdict
from pathlib import Path
import json
import re
import urllib.request

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
APP = ROOT / "recovery/react-app"
SRC = APP / "src"
UNPACKED = SRC / "unpacked"
OUT = APP / "LIVE_UNPACKED.json"
BASE = "http://127.0.0.1:8099"

STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core)/'
)
UNP_RE = re.compile(r"(?:src/unpacked/|\./src/unpacked/)(module-\d+\.js)")
WEBPACK_ID_RE = re.compile(r"""["']\./src/unpacked/(module-\d+\.js)["']""")
# eval-devtool factory keys: /***/ "./src/unpacked/module-N.js"
WEBPACK_FACTORY_RE = re.compile(
    r"""/\*\*\*/ ["']\./src/unpacked/(module-\d+\.js)["']"""
)
PREFIX_FACTORY_RE = re.compile(
    r"""/\*\*\*/ ["']\./src/(pages|components|stores|actions|utils|configs|core|unpacked|named)/([^\"']+\.js)["']"""
)
CHUNK_RE = re.compile(r"""(["'])(/?[\w.+@-]+\.app\.[a-f0-9]+\.js)\1""")
SCRIPT_RE = re.compile(r'src="(/[^"]+\.js)"')


def fetch(url: str, timeout: int = 60) -> bytes:
    req = urllib.request.Request(url, headers={"Accept": "*/*"})
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read()


def is_stub(text: str) -> bool:
    return bool(STUB_RE.search(text[:400]))


def mid_of(name: str) -> int:
    m = re.search(r"module-(\d+)\.js", name)
    return int(m.group(1)) if m else -1


print("=== fetch html ===", flush=True)
html_login = fetch(BASE + "/login").decode("utf-8", "replace")
html_dash = fetch(BASE + "/dashboard").decode("utf-8", "replace")
scripts = []
for html in (html_login, html_dash):
    scripts.extend(SCRIPT_RE.findall(html))
scripts = list(dict.fromkeys(scripts))
print("html_scripts", scripts)

print("=== fetch app bundle ===", flush=True)
app_scripts = [s for s in scripts if "/app." in s and "vendors-" not in s]
if not app_scripts:
    raise SystemExit("no app bundle in html")
app_url = BASE + app_scripts[0]
app_js = fetch(app_url).decode("utf-8", "replace")
print("bundle", app_url, "bytes", len(app_js))

webpack_ids = set(WEBPACK_FACTORY_RE.findall(app_js))
loose_refs = set(WEBPACK_ID_RE.findall(app_js))
prefix_ids = defaultdict(set)
for m in PREFIX_FACTORY_RE.finditer(app_js):
    prefix_ids[m.group(1)].add(m.group(2).split("?")[0])
resources_path = APP / "LIVE_RESOURCES.json"
urls = []
if resources_path.exists():
    urls = json.loads(resources_path.read_text(encoding="utf-8")).get("scripts") or []
print("cdp_resources", len(urls))

fetched_chunks = []
errors = []
bodies = [app_js]
for url in urls:
    if url.rstrip("/").endswith(app_url.split("/")[-1]) or url.endswith(app_scripts[0]):
        continue
    try:
        data = fetch(url, timeout=30).decode("utf-8", "replace")
    except Exception as exc:  # noqa: BLE001
        errors.append({"url": url, "error": str(exc)[:120]})
        continue
    fetched_chunks.append(url)
    bodies.append(data)
    webpack_ids.update(WEBPACK_FACTORY_RE.findall(data))
    loose_refs.update(WEBPACK_ID_RE.findall(data))
    for m in PREFIX_FACTORY_RE.finditer(data):
        prefix_ids[m.group(1)].add(m.group(2).split("?")[0])

print(
    "chunks_fetched",
    len(fetched_chunks),
    "chunk_errors",
    len(errors),
    "webpack_ids",
    len(webpack_ids),
    "loose_refs",
    len(loose_refs),
)
found = set(webpack_ids)

# source map of main bundle (best-effort)
map_sources = []
try:
    sm = json.loads(fetch(app_url + ".map", timeout=30).decode("utf-8", "replace"))
    map_sources = sm.get("sources") or []
    for s in map_sources:
        m = re.search(r"unpacked/(module-\d+\.js)", s.replace("\\", "/"))
        if m:
            found.add(m.group(1))
    print("sourcemap_sources", len(map_sources))
except Exception as exc:  # noqa: BLE001
    print("sourcemap_skip", type(exc).__name__, str(exc)[:120])

uniq = prefix_ids

leftovers = []
stubs = []
missing = []
aliased_like = []
for name in sorted(found, key=mid_of):
    path = UNPACKED / name
    if not path.is_file():
        missing.append(name)
        continue
    text = path.read_text(encoding="utf-8", errors="replace")
    if is_stub(text):
        stubs.append(name)
        continue
    leftovers.append(name)

needles = {
    "src/pages/login": app_js.count("src/pages/login"),
    "src/core/App": app_js.count("src/core/App"),
    "src/utils/babel-helpers/": app_js.count("src/utils/babel-helpers/"),
    "named/pages/login": app_js.count("named/pages/login"),
    "src/named/": app_js.count("src/named/"),
    "core-js3/modules/": app_js.count("core-js3/modules/"),
}

out = {
    "bundle": app_url,
    "bundle_bytes": len(app_js),
    "html_scripts": scripts,
    "chunks_fetched": len(fetched_chunks),
    "chunk_errors": errors[:12],
    "unique_files_live_scripts": {k: len(v) for k, v in uniq.items()},
    "webpack_unpacked_ids": len(webpack_ids),
    "loose_unpacked_refs": len(loose_refs),
    "union_unpacked_refs": len(found),
    "stub_unpacked": len(stubs),
    "missing_on_disk": missing,
    "leftover_live": leftovers,
    "leftover_live_count": len(leftovers),
    "hits": needles,
    "named_files_sample": sorted(uniq.get("named", []))[:8],
    "utils_babel_main": sorted(x for x in uniq.get("utils", set()) if "babel-helpers" in x),
}
OUT.write_text(json.dumps(out, indent=2) + "\n", encoding="utf-8")
print(json.dumps({k: v for k, v in out.items() if k != "leftover_live"}, indent=2))
print("wrote", OUT)
