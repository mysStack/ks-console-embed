#!/usr/bin/env python3
"""Enumerate live leftover factory keys from dashboard-loaded scripts."""
from __future__ import annotations

from collections import defaultdict
from pathlib import Path
import json
import re
import urllib.request

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
APP = ROOT / "recovery/react-app"
UNPACKED = APP / "src/unpacked"
COREJS = (APP / "corejs-aliases.js").read_text(encoding="utf-8")
SHIMS = (APP / "corejs-shim-aliases.js").read_text(encoding="utf-8")
WEBPACK = (APP / "webpack.config.js").read_text(encoding="utf-8")
RECHARTS = (APP / "recharts-aliases.js").read_text(encoding="utf-8")
OUT = APP / "LIVE_UNPACKED.json"
COUNTS = APP / "LIVE_CHUNK_COUNTS.json"

STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp)/'
)
FACTORY = re.compile(r"""/\*\*\*/ ["']\./src/unpacked/(module-\d+\.js)["']""")
PREFIX = re.compile(
    r"""/\*\*\*/ ["']\./src/(pages|components|stores|actions|utils|configs|core|dmp|unpacked|named)/([^\"']+\.js)["']"""
)

already = set(re.findall(r"module-(\d+)\.js", COREJS + "\n" + SHIMS + "\n" + WEBPACK + "\n" + RECHARTS))
scripts = json.loads((APP / "LIVE_RESOURCES.json").read_text(encoding="utf-8"))["scripts"]


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers={"Accept": "*/*", "User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=120) as resp:
        return resp.read().decode("utf-8", "replace")


def read(p: Path) -> str:
    return p.read_text(encoding="utf-8", errors="replace")


print("scripts", len(scripts), flush=True)
factory = set()
prefix_counts = defaultdict(int)
named = 0
stub_factories = 0
texts = []
for i, url in enumerate(scripts):
    t = fetch(url)
    texts.append(t)
    mods = FACTORY.findall(t)
    factory.update(mods)
    named += t.count("src/named/")
    for m in PREFIX.finditer(t):
        prefix_counts[m.group(1)] += 1
    print(f"  {i+1}/{len(scripts)} {url.split('/')[-1][:70]} factory+={len(mods)}", flush=True)

unpacked = {}
for p in UNPACKED.glob("module-*.js"):
    t = read(p)
    if STUB_RE.search(t[:400]):
        continue
    unpacked[p.name] = t

leftover = []
for name in sorted(factory, key=lambda n: int(re.search(r"\d+", n).group())):
    t = unpacked.get(name, "")
    if STUB_RE.search(t[:400]):
        stub_factories += 1
        continue
    leftover.append(name)

print("factory", len(factory), "leftover", len(leftover), "stubs", stub_factories, "named_hits", named, flush=True)

# remaining_like buckets vs previous classification
SKIP_MODS = {
    "3225", "3567", "3511", "3513", "3251", "833", "950", "882", "807",
    "1635", "5774", "1636", "1639", "1633", "1634", "1337", "1272", "1389",
    "1183", "1764", "1111", "1053", "1112",
    "4656", "4657", "1134", "1072", "3866", "3892", "186", "1979",
    "3753", "3772", "3774", "3776", "3778", "3780", "1981",
    "1135", "1798", "1800", "1801", "1869", "1418",
    "1867", "4139", "4144", "4330",
    "1489", "2102", "1837", "1410", "5770", "1861", "4764",
    "1415", "989", "891", "717", "4142",
    "4423", "815", "962", "821", "988",
    "4938", "4997", "4998", "1215", "1475", "3666", "3674",
    "2399", "2400", "2401", "4945",
    "2300", "2301", "2302", "805", "837", "959", "2943",
    "1832", "1831", "851", "1122", "3326", "4448",
    "4153", "4154", "4219", "4227", "4103", "4080", "4107", "4105", "1847",
    "3680", "3689", "3693", "3698", "3701", "793", "747", "3839",
}


def mid(name: str) -> str:
    m = re.search(r"module-(\d+)\.js", name)
    return m.group(1) if m else ""


buckets = defaultdict(list)
for name in leftover:
    n = mid(name)
    t = unpacked.get(name, "")
    if n in already:
        buckets["already_aliased_still_factory"].append(name)
        continue
    if "Incorrect invocation" in t:
        buckets["incorrect_invocation"].append(name)
        continue
    if "Cannot call a class as a function" in t or "this hasn't been initialised" in t or "Super expression must either be null or a function" in t:
        buckets["babel_helper"].append(name)
        continue
    if "webpackPolyfill" in t:
        buckets["webpack_runtime"].append(name)
        continue
    if "wujie" in t.lower() or "WUJIE" in t:
        buckets["kse_wujie"].append(name)
        continue
    if "react.server_context" in t:
        buckets["react_is"].append(name)
        continue
    if n == "3515":
        buckets["kube_design_icon"].append(name)
        continue
    stripped = t.lstrip()
    if stripped.startswith("export default {") and "import " not in t.split("\n", 1)[0] and len(t) >= 400:
        buckets["css_object"].append(name)
        continue
    if len(t) < 400 and "t(" not in t and "createElement" not in t:
        buckets["tiny_other"].append(name)
        continue
    if "createElement" in t or "React.Component" in t or "observer(" in t or re.search(r"""(?<![A-Za-z0-9_])t\(\s*['"]""", t):
        buckets["business_looking"].append(name)
        continue
    buckets["other"].append(name)

# remaining_like as previous: skip tiny, skip-list, already
remaining_like = []
for name in leftover:
    n = mid(name)
    t = unpacked.get(name, "")
    if n in SKIP_MODS or n in already:
        continue
    if "Incorrect invocation" in t or "Accessors not supported" in t or "Invalid size" in t:
        continue
    if (
        "Cannot call a class as a function" in t
        or "this hasn't been initialised" in t
        or "Super expression must either be null or a function" in t
    ):
        continue
    stripped = t.lstrip()
    if stripped.startswith("export default {") and "import " not in t.split("\n", 1)[0] and len(t) < 80:
        continue
    if len(t) < 400 and "export default {" in t and "t(" not in t:
        continue
    remaining_like.append(name)

report = {
    "bundle": scripts[0],
    "scripts": scripts,
    "chunks_fetched": len(scripts),
    "factory_unpacked_including_stubs": len(factory),
    "stub_factories": stub_factories,
    "leftover_live_count": len(leftover),
    "leftover_live": leftover,
    "named_hits": named,
    "prefix_factory_counts": dict(prefix_counts),
    "already": len(already),
    "buckets": {k: {"count": len(v), "sample": v[:12]} for k, v in buckets.items()},
    "remaining_like": len(remaining_like),
    "disk_real_unpacked": len(unpacked),
}
OUT.write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
COUNTS.write_text(json.dumps({
    "bundle": scripts[0],
    "named_hits": named,
    "leftover_live": len(leftover),
    "factory": len(factory),
    "prefix_factory_counts": dict(prefix_counts),
    "buckets": {k: len(v) for k, v in buckets.items()},
    "remaining_like": len(remaining_like),
    "already": len(already),
}, indent=2) + "\n", encoding="utf-8")
print(json.dumps({
    "bundle": scripts[0],
    "factory": len(factory),
    "leftover_live": len(leftover),
    "stub_factories": stub_factories,
    "named_hits": named,
    "prefix_factory_counts": dict(prefix_counts),
    "buckets": {k: len(v) for k, v in buckets.items()},
    "remaining_like": len(remaining_like),
    "already": len(already),
    "disk_real_unpacked": len(unpacked),
}, indent=2), flush=True)
print("wrote", OUT, COUNTS, flush=True)
