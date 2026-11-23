#!/usr/bin/env python3
"""Factory leftover across dashboard CDP scripts + leftover categories."""
from collections import defaultdict
from pathlib import Path
import json
import re
import urllib.request

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
APP = ROOT / "recovery/react-app"
UNPACKED = APP / "src/unpacked"
SRC = APP / "src"
ORIG = ROOT / "src"
KNOWN_PY = ROOT / "recovery/scripts/add_known_named.py"
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core)/'
)
FACTORY = re.compile(r"""/\*\*\*/ ["']\./src/unpacked/(module-\d+\.js)["']""")
PREFIX = re.compile(
    r"""/\*\*\*/ ["']\./src/(pages|components|stores|actions|utils|configs|core|unpacked|named)/([^\"']+\.js)["']"""
)
T_PAT = re.compile(r"""(?<![A-Za-z0-9_])t\(\s*['"]([^'"]+)['"]""")

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
    "3680", "3689", "3693", "3698", "3701", "793", "747",
}


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0", "Accept": "*/*"})
    with urllib.request.urlopen(req, timeout=60) as resp:
        return resp.read().decode("utf-8", "replace")


def mid(name: str) -> str:
    m = re.search(r"module-(\d+)\.js", name)
    return m.group(1) if m else ""


urls = json.loads((APP / "LIVE_RESOURCES.json").read_text(encoding="utf-8"))["scripts"]
webpack_ids = set()
prefix_ids = defaultdict(set)
for url in urls:
    try:
        data = fetch(url)
    except Exception as exc:  # noqa: BLE001
        print("chunk_err", url, type(exc).__name__)
        continue
    webpack_ids.update(FACTORY.findall(data))
    for m in PREFIX.finditer(data):
        prefix_ids[m.group(1)].add(m.group(2))
    print("fetched", url.split("/")[-1][:60], "factories", len(FACTORY.findall(data)))

leftovers = []
stubs = 0
for name in sorted(webpack_ids, key=lambda n: int(re.search(r"\d+", n).group())):
    path = UNPACKED / name
    text = path.read_text(encoding="utf-8", errors="replace") if path.is_file() else ""
    if STUB_RE.search(text[:400]):
        stubs += 1
        continue
    leftovers.append(name)

# disk leftovers
disk = 0
for p in UNPACKED.glob("module-*.js"):
    t = p.read_text(encoding="utf-8", errors="replace")
    if STUB_RE.search(t[:400]):
        continue
    disk += 1

promoted = 0
for folder in ("pages", "components", "stores", "actions", "utils", "configs", "core"):
    d = SRC / folder
    if d.is_dir():
        for p in d.rglob("*.js"):
            t = p.read_text(encoding="utf-8", errors="replace")
            if t.startswith("export { default } from "):
                continue
            promoted += 1

# classify leftovers
cssish = tiny = skipn = babel = lodash = kse = cron = corejs_err = other = 0
for name in leftovers:
    t = (UNPACKED / name).read_text(encoding="utf-8", errors="replace")
    n = mid(name)
    if n in SKIP_MODS:
        skipn += 1
        continue
    if n == "747" or "cron" in t.lower() and "constraint" in t.lower():
        cron += 1
        continue
    if "Incorrect invocation" in t or "Accessors not supported" in t or "Invalid size" in t:
        corejs_err += 1
        continue
    if "Cannot call a class as a function" in t or "this hasn't been initialised" in t:
        babel += 1
        continue
    if t.lstrip().startswith("export default {") and len(t) < 120:
        cssish += 1
        continue
    if len(t) < 400:
        tiny += 1
        continue
    if "lodash" in t[:400].lower() or "LoDash" in t:
        lodash += 1
        continue
    tkeys = T_PAT.findall(t)
    other += 1

print(json.dumps({
    "factory_unpacked_including_stubs": len(webpack_ids),
    "stub_factories": stubs,
    "factory_leftover": len(leftovers),
    "disk_real_unpacked": disk,
    "promoted_real": promoted,
    "prefixes_in_factories": {k: len(v) for k, v in prefix_ids.items()},
    "named_factories": len(prefix_ids.get("named") or []),
    "categories": {
        "skip_list": skipn,
        "cssish": cssish,
        "tiny": tiny,
        "babel_helper_needles": babel,
        "lodashish": lodash,
        "cron_parser": cron,
        "corejs_2hit_errors": corejs_err,
        "remaining_business_or_vendor": other,
    },
}, indent=2))

(APP / "LIVE_UNPACKED.json").write_text(json.dumps({
    "bundle": urls[0] if urls else "",
    "leftover_live": leftovers,
    "leftover_live_count": len(leftovers),
    "stub_factories": stubs,
    "factory_unpacked_including_stubs": len(webpack_ids),
}, indent=2) + "\n", encoding="utf-8")
