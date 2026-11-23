#!/usr/bin/env python3
"""Count prefix/unpacked leftovers from LIVE_WEBPACK_CHUNK.json + disk stubs."""
from __future__ import annotations

from collections import defaultdict
from pathlib import Path
import json
import re

APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
SRC = APP / "src"
UNPACKED = SRC / "unpacked"
DOC = json.loads((APP / "LIVE_WEBPACK_CHUNK.json").read_text(encoding="utf-8"))
ALIASES = (APP / "corejs-aliases.js").read_text(encoding="utf-8")
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core)/'
)

aliased = set(re.findall(r"module-(\d+)\.js", ALIASES))
ids = DOC.get("webpackIds") or []
prefix = defaultdict(int)
unpacked_live = []
named = []
other = []
for k in ids:
    s = k.replace("\\", "/")
    m = re.search(r"./src/(pages|components|stores|actions|utils|configs|core|unpacked|named)/(.+)$", s)
    if not m:
        other.append(k)
        continue
    pre, rest = m.group(1), m.group(2)
    prefix[pre] += 1
    if pre == "named":
        named.append(rest)
    if pre == "unpacked":
        unpacked_live.append(rest.split("?")[0])

leftovers = []
stubs = []
aliased_live = []
missing = []
for name in unpacked_live:
    path = UNPACKED / Path(name).name
    if not path.is_file():
        missing.append(name)
        continue
    text = path.read_text(encoding="utf-8", errors="replace")
    mid = re.search(r"module-(\d+)\.js", name)
    mid = mid.group(1) if mid else ""
    if STUB_RE.search(text[:400]):
        stubs.append(name)
        continue
    if mid in aliased:
        aliased_live.append(name)
        continue
    leftovers.append(name)

disk_leftover = 0
for p in UNPACKED.glob("module-*.js"):
    t = p.read_text(encoding="utf-8", errors="replace")
    if STUB_RE.search(t[:400]):
        continue
    disk_leftover += 1

out = {
    "login_overlay": DOC["routes"]["/login"]["overlay"],
    "dashboard_overlay": DOC["routes"]["/dashboard"]["overlay"],
    "prefix_counts": dict(prefix),
    "named_sample": named[:8],
    "named_count": len(named),
    "unpacked_in_chunk": len(unpacked_live),
    "unpacked_stubs": len(stubs),
    "unpacked_aliased_corejs": len(aliased_live),
    "leftover_live": len(leftovers),
    "missing": missing[:8],
    "disk_nonstub_unpacked": disk_leftover,
    "corejs_alias_count": ALIASES.count("module-"),
}
print(json.dumps(out, indent=2))
(APP / "LIVE_CHUNK_COUNTS.json").write_text(json.dumps(out, indent=2) + "\n", encoding="utf-8")
(APP / "LIVE_UNPACKED.json").write_text(
    json.dumps(
        {
            **json.loads((APP / "LIVE_UNPACKED.json").read_text(encoding="utf-8")),
            "leftover_live": leftovers,
            "leftover_live_count": len(leftovers),
            "chunk_prefix_counts": dict(prefix),
            "named_count": len(named),
            "corejs_alias_count": ALIASES.count("module-"),
        },
        indent=2,
    )
    + "\n",
    encoding="utf-8",
)
print("leftover_live_names", len(leftovers))
