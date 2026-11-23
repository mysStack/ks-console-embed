#!/usr/bin/env python3
"""Reconstruct remaining_like buckets on current leftover_live."""
from __future__ import annotations

from collections import defaultdict
from pathlib import Path
import json
import re

APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
UNPACKED = APP / "src/unpacked"
LIVE = json.loads((APP / "LIVE_UNPACKED.json").read_text(encoding="utf-8"))
COREJS = (APP / "corejs-aliases.js").read_text(encoding="utf-8")
SHIMS = (APP / "corejs-shim-aliases.js").read_text(encoding="utf-8")
WEBPACK = (APP / "webpack.config.js").read_text(encoding="utf-8")
RECHARTS = (APP / "recharts-aliases.js").read_text(encoding="utf-8")
already = set(re.findall(r"module-(\d+)\.js", COREJS + "\n" + SHIMS + "\n" + WEBPACK + "\n" + RECHARTS))
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

unpacked = {}
for p in UNPACKED.glob("module-*.js"):
    unpacked[p.name] = p.read_text(encoding="utf-8", errors="replace")

def tiny_css(t: str) -> bool:
    stripped = t.lstrip()
    head = t.split("\n", 1)[0]
    if stripped.startswith("export default {") and "import " not in head and len(t) < 80:
        return True
    if len(t) < 120 and "export default {" in t and "t(" not in t:
        return True
    return False

buckets = defaultdict(list)
remaining = []
for name in LIVE["leftover_live"]:
    t = unpacked.get(name, "")
    n = mid(name)
    if n in SKIP_MODS or n in already:
        continue
    if "Incorrect invocation" in t or "Accessors not supported" in t or "Invalid size" in t:
        continue
    if (
        "Cannot call a class as a function" in t
        or "this hasn't been initialised" in t
        or "Super expression must either be null or a function" in t
    ):
        buckets["babel_helper"].append(name)
        remaining.append(name)
        continue
    if tiny_css(t) or len(t) < 400:
        continue
    if "webpackPolyfill" in t:
        buckets["webpack_runtime"].append(name)
        remaining.append(name)
        continue
    if name == "module-240.js":
        buckets["kse_wujie"].append(name)
        remaining.append(name)
        continue
    if name == "module-2434.js":
        buckets["react_is"].append(name)
        remaining.append(name)
        continue
    if name == "module-3515.js":
        buckets["kube_design_icon"].append(name)
        remaining.append(name)
        continue
    if t.lstrip().startswith("export default {") and "createElement" not in t and "t(" not in t:
        buckets["css_object"].append(name)
        remaining.append(name)
        continue
    if "createElement" in t or "React.Component" in t or "observer(" in t or re.search(r"""(?<![A-Za-z0-9_])t\(\s*['"]""", t):
        buckets["business_looking"].append(name)
        remaining.append(name)
        continue
    buckets["other"].append(name)
    remaining.append(name)

print(json.dumps({
    "leftover_live": len(LIVE["leftover_live"]),
    "already": len(already),
    "corejs_alias_entries": COREJS.count("src/unpacked/module-"),
    "shim_alias_entries": SHIMS.count("src/unpacked/module-"),
    "remaining_like": len(remaining),
    "buckets": {k: len(v) for k, v in buckets.items()},
    "focus_still_live": {
        m: m in LIVE["leftover_live"]
        for m in [
            "module-264.js", "module-606.js", "module-129.js", "module-164.js",
            "module-64.js", "module-376.js", "module-367.js", "module-419.js",
            "module-421.js", "module-584.js", "module-666.js", "module-670.js",
            "module-674.js", "module-254.js", "module-2434.js",
            "module-958.js", "module-1056.js", "module-1648.js",
        ]
    },
}, indent=2))
