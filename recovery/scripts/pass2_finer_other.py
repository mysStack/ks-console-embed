#!/usr/bin/env python3
"""Finer split of remaining_like 'other' + business_why counts."""
from collections import defaultdict
from pathlib import Path
import json
import re

APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
UNPACKED = APP / "src/unpacked"
SPLIT = json.loads((APP / "PASS2_SPLIT.json").read_text())
LIVE = json.loads((APP / "LIVE_UNPACKED.json").read_text())
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core)/'
)
T_Q = re.compile(r"""(?<![A-Za-z0-9_])t\(\s*['"]""")

unpacked = {}
for p in UNPACKED.glob("module-*.js"):
    t = p.read_text(encoding="utf-8", errors="replace")
    if STUB_RE.search(t[:400]):
        continue
    unpacked[p.name] = t

# remaining_like names: reconstruct from leftover using PASS2_SPLIT remaining_split keys
# full lists not stored; reclassify leftover_live the same way as pass2_split remaining_like
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
COREJS = (APP / "corejs-aliases.js").read_text(encoding="utf-8")
WEBPACK = (APP / "webpack.config.js").read_text(encoding="utf-8")
already = set(re.findall(r"module-(\d+)\.js", COREJS + "\n" + WEBPACK))


def mid(name):
    m = re.search(r"module-(\d+)\.js", name)
    return m.group(1) if m else ""


needles = (
    "globalThis", "dontCallGetSet", "getterFor(", "__core-js_shared__",
    "wellKnownSymbol", "isForced", "IndexedObject", "requireObjectCoercible",
    "toLength", "toIntegerOrInfinity", "lengthOfArrayLike", "anObject",
    "aCallable", "engineV8Version", "Fails", "nativeDefineProperty",
    "DESCRIPTORS", "Array Iterator", "String Iterator", "function-uncurry-this",
    "module25.Number", "module25.TypeError", "module25.Symbol",
    "well-known-symbol", "internal-state", "hasOwnProperty.call",
)
babel_n = (
    "applyDecoratedDescriptor", "Cannot call a class as a function",
    "this hasn't been initialised", "Super expression must either be null",
    "Cannot delete property", "possibleConstructorReturn",
    "assertThisInitialized", "classCallCheck",
)
react_n = (
    "ReactCurrentOwner", "ReactCurrentDispatcher", "Minified React error",
    "$mobx", "createBrowserHistory", "Hash history needs a DOM",
    "withRouter(", "Reaction doesn't",
)

other_fine = defaultdict(list)
for name in LIVE["leftover_live"]:
    t = unpacked.get(name, "")
    n = mid(name)
    if n in SKIP_MODS or n in already:
        continue
    if len(t) < 400:
        continue
    stripped = t.lstrip()
    head = t.split("\n", 1)[0]
    if stripped.startswith("export default {") and "import " not in head and len(t) < 80:
        continue
    if "createElement" in t or "React.Component" in t or "observer(" in t or T_Q.search(t):
        continue
    hits = sum(1 for s in needles if s in t)
    if hits >= 1:
        other_fine["corejs_internals_or_modules"].append(name)
        continue
    if any(s in t for s in babel_n):
        other_fine["babel_runtime_helper"].append(name)
        continue
    if any(s in t for s in react_n):
        other_fine["react_mobx_history"].append(name)
        continue
    if "webpackPolyfill" in t or "__webpack_require__" in t[:200]:
        other_fine["webpack_runtime"].append(name)
        continue
    if t.count("unpacked/module-") >= 5 and "createElement" not in t:
        other_fine["corejs_like_import_graph"].append(name)
        continue
    other_fine["still_unclassified"].append(name)

out = {
    "other_fine_counts": {k: len(v) for k, v in other_fine.items()},
    "other_fine_samples": {k: v[:12] for k, v in other_fine.items()},
    "already_aliased_live_leftover_note": "aliased files remain on disk; factory keys drop after webpack restart",
}
(APP / "PASS2_OTHER_FINE.json").write_text(json.dumps(out, indent=2) + "\n")
print(json.dumps(out["other_fine_counts"], indent=2))
print("still_unclassified sample", other_fine["still_unclassified"][:20])
