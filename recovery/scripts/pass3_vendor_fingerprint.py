#!/usr/bin/env python3
"""Fingerprint remaining 'other' leftovers vs installed npm, especially core-js3.

Do not invent orig paths. Do not npm-install here. Unique 1:1 leftover vs one npm file.
"""
from __future__ import annotations

from collections import defaultdict
from pathlib import Path
import json
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
APP = ROOT / "recovery/react-app"
UNPACKED = APP / "src/unpacked"
SRC = APP / "src"
NM = APP / "node_modules"
LIVE = json.loads((APP / "LIVE_UNPACKED.json").read_text(encoding="utf-8"))
COREJS = (APP / "corejs-aliases.js").read_text(encoding="utf-8")
WEBPACK = (APP / "webpack.config.js").read_text(encoding="utf-8")
RECHARTS = (APP / "recharts-aliases.js").read_text(encoding="utf-8")
OUT = APP / "PASS3_VENDOR.json"

STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core)/'
)
STR_RE = re.compile(r"""['"]([^'"]{16,})['"]""")
ERR_RE = re.compile(
    r"""throw new (?:TypeError|ReferenceError|RangeError|Error)\((['"])(.*?)\1\)"""
)
IMP_RE = re.compile(r"""(?:\bfrom|\bimport\s*\(|\brequire\s*\()\s*['"]([^'"]+)['"]""")
DEFAULT_REQ = re.compile(
    r"""require\(\s*['"]unpacked/(module-\d+\.js)['"]\s*\)\s*\.default"""
)
DEFAULT_IMP = re.compile(
    r"""import\s+(\w+)\s+from\s+['"]unpacked/(module-\d+\.js)['"]"""
)
SIDE_IMP = re.compile(r"""(?:^|\n)import\s+['"]unpacked/(module-\d+\.js)['"]""")
NAMED_IMP = re.compile(
    r"""import\s+\{([^}]+)\}\s+from\s+['"]unpacked/(module-\d+\.js)['"]"""
)

already = set(re.findall(r"module-(\d+)\.js", COREJS + "\n" + WEBPACK + "\n" + RECHARTS))
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


def read(p: Path) -> str:
    return p.read_text(encoding="utf-8", errors="replace")


def mid(name: str) -> str:
    m = re.search(r"module-(\d+)\.js", name)
    return m.group(1) if m else ""


unpacked = {}
for p in UNPACKED.glob("module-*.js"):
    t = read(p)
    if STUB_RE.search(t[:400]):
        continue
    unpacked[p.name] = t
live = set(LIVE.get("leftover_live") or [])
print("live", len(live), "unpacked", len(unpacked), "already", len(already), flush=True)

# consumption
default_req = defaultdict(list)
default_imp = defaultdict(list)
side_imp = defaultdict(list)
named_imp = defaultdict(list)
value_imp = defaultdict(list)
for folder in ("pages", "components", "stores", "actions", "utils", "configs", "core", "unpacked"):
    d = SRC / folder
    if not d.is_dir():
        continue
    for path in d.rglob("*.js"):
        text = read(path)
        rel = path.relative_to(SRC).as_posix()
        for m in DEFAULT_REQ.findall(text):
            default_req[m].append(rel)
        for _var, m in DEFAULT_IMP.findall(text):
            default_imp[m].append(rel)
        for m in SIDE_IMP.findall(text):
            side_imp[m].append(rel)
        for _names, m in NAMED_IMP.findall(text):
            named_imp[m].append(rel)
        for spec in IMP_RE.findall(text):
            mm = re.search(r"(?:^|/)(module-\d+\.js)$", spec.split("?")[0])
            if mm and spec.startswith("unpacked/"):
                value_imp[mm.group(1)].append(rel)


def consume(name: str) -> dict:
    return {
        "default_require": default_req.get(name, [])[:6],
        "default_import": default_imp.get(name, [])[:6],
        "side_import": side_imp.get(name, [])[:6],
        "named_import": named_imp.get(name, [])[:6],
        "any_import": value_imp.get(name, [])[:6],
        "needs_shim": bool(default_req.get(name) or default_imp.get(name)),
        "side_only": bool(side_imp.get(name)) and not default_req.get(name) and not default_imp.get(name) and not named_imp.get(name),
    }


# unique strings among ALL real unpacked
leftover_str = defaultdict(set)
leftover_err = defaultdict(set)
for name, t in unpacked.items():
    for s in STR_RE.findall(t):
        leftover_str[s].add(name)
    for _q, e in ERR_RE.findall(t):
        leftover_err[e].add(name)

cj3 = NM / "core-js3"
npm_str = defaultdict(set)
npm_err = defaultdict(set)
npm_files = []
for folder in ("internals", "modules"):
    d = cj3 / folder
    if not d.is_dir():
        continue
    for p in d.glob("*.js"):
        rel = p.relative_to(cj3).as_posix()
        npm_files.append(rel)
        t = read(p)
        for s in STR_RE.findall(t):
            npm_str[s].add(rel)
        for _q, e in ERR_RE.findall(t):
            npm_err[e].add(rel)
print("corejs3 files", len(npm_files), flush=True)

GENERIC = {
    "use strict", "object", "function", "undefined", "prototype",
    "toString", "length", "constructor", "exports", "default",
}


def unique_corejs_for(name: str) -> list[dict]:
    t = unpacked.get(name, "")
    hits = []
    for e in ERR_RE.findall(t):
        err = e[1]
        lives = leftover_err.get(err) or set()
        npms = npm_err.get(err) or set()
        if lives == {name} and len(npms) == 1:
            hits.append({"via": "err:" + err[:80], "npm": next(iter(npms))})
    for s in STR_RE.findall(t):
        if s.lower() in GENERIC or s.startswith("module-"):
            continue
        lives = leftover_str.get(s) or set()
        npms = npm_str.get(s) or set()
        if lives == {name} and len(npms) == 1:
            hits.append({"via": "str:" + s[:80], "npm": next(iter(npms))})
    return hits


# remaining_like reconstruction
def tiny_css(t: str) -> bool:
    stripped = t.lstrip()
    head = t.split("\n", 1)[0]
    if stripped.startswith("export default {") and "import " not in head and len(t) < 80:
        return True
    if len(t) < 120 and "export default {" in t and "t(" not in t:
        return True
    return False


remaining_other = []
corejs_unaliased = []
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
        continue
    if tiny_css(t) or len(t) < 400:
        continue
    if "lodash" in t[:400].lower() or "LoDash" in t:
        continue
    if "createElement" in t or "React.Component" in t or "observer(" in t:
        continue
    if re.search(r"""(?<![A-Za-z0-9_])t\(\s*['"]""", t):
        continue
    if "webpackPolyfill" in t:
        continue
    remaining_other.append(name)

print("remaining_non_business", len(remaining_other), flush=True)

# structural unique needles for known internals
STRUCT = [
    ("e.dontCallGetSet ?", "internals/export.js"),
    ('getterFor("Array Iterator")', "modules/es.array.iterator.js"),
    ('type: "Array Iterator"', "modules/es.array.iterator.js"),
    ('type: "String Iterator"', "modules/es.string.iterator.js"),
    ('getterFor("String Iterator")', "modules/es.string.iterator.js"),
    ("propertyIsEnumerable", None),  # too generic unless enum-bug-keys file
]

candidates = []
for name in remaining_other:
    if mid(name) in already:
        continue
    recs = unique_corejs_for(name)
    npms = list(dict.fromkeys(r["npm"] for r in recs))
    cons = consume(name)
    if len(npms) == 1:
        candidates.append({
            "module": name,
            "npm": npms[0],
            "vias": [r["via"] for r in recs][:4],
            "consume": cons,
            "kind": "shim" if cons["needs_shim"] else ("alias" if cons["side_only"] or not cons["needs_shim"] else "review"),
        })

# force-check known unique modules
KNOWN_STRUCT = {
    "module-8.js": "internals/export.js",
    "module-30.js": "modules/es.array.iterator.js",
    "module-38.js": "modules/es.string.iterator.js",
    "module-283.js": "internals/enum-bug-keys.js",
    "module-222.js": "internals/is-constructor.js",
    "module-16.js": "modules/es.function.name.js",
    "module-17.js": "modules/es.regexp.to-string.js",
    "module-42.js": "modules/es.date.to-string.js",
    "module-25.js": "internals/global.js",
}
for name, npm in KNOWN_STRUCT.items():
    if name not in unpacked:
        continue
    if mid(name) in already:
        continue
    if not (cj3 / npm).is_file():
        # try alternate names
        alt = None
        for p in (cj3 / "modules").glob("es.date*.js"):
            if "invalid" in p.name or "to-string" in p.name:
                alt = "modules/" + p.name
        print("missing", npm, "alt", alt, flush=True)
        continue
    if any(c["module"] == name for c in candidates):
        # overwrite npm if structural
        for c in candidates:
            if c["module"] == name:
                c["npm"] = npm
                c["vias"] = ["structural"] + c["vias"]
        continue
    candidates.append({
        "module": name,
        "npm": npm,
        "vias": ["structural"],
        "consume": consume(name),
        "kind": "shim" if consume(name)["needs_shim"] else "alias",
    })

# lodash unique helpers vs lodash/*.js (not 2-hit)
lodash_dir = NM / "lodash"
lod_str = defaultdict(set)
if lodash_dir.is_dir():
    for p in lodash_dir.glob("*.js"):
        rel = "lodash/" + p.name
        t = read(p)
        for e in ERR_RE.findall(t):
            lod_str["ERR:" + e[1]].add(rel)
        for s in STR_RE.findall(t):
            if len(s) >= 20:
                lod_str[s].add(rel)

lodash_unique = []
for name in remaining_other:
    t = unpacked.get(name, "")
    hits = []
    for s in STR_RE.findall(t):
        files = lod_str.get(s) or set()
        lives = leftover_str.get(s) or set()
        if lives == {name} and len(files) == 1:
            hits.append((s[:60], next(iter(files))))
    npms = list(dict.fromkeys(h[1] for h in hits))
    if len(npms) == 1:
        lodash_unique.append({
            "module": name,
            "npm": npms[0],
            "via": hits[0][0],
            "consume": consume(name),
        })

# luxon
luxon_hit = None
if "module-749.js" in unpacked and "export const VERSION = \"3.0.3\"" in unpacked["module-749.js"]:
    luxon_hit = {
        "module": "module-749.js",
        "version": "3.0.3",
        "in_nm": (NM / "luxon").exists(),
        "consume": consume("module-749.js"),
        "named_exports": re.findall(r"^export (?:const|var|class|function) (\w+)", unpacked["module-749.js"], re.M)[:20],
    }

# react-is 2434
react_is_2434 = {
    "module": "module-2434.js",
    "has_server_context": "react.server_context" in unpacked.get("module-2434.js", ""),
    "has_offscreen": "react.offscreen" in unpacked.get("module-2434.js", ""),
    "consume": consume("module-2434.js"),
    "note": "newer than installed react-is@16; do not install second copy",
}

# check date.to-string filename
date_files = [p.name for p in (cj3 / "modules").glob("es.date*.js")]
fn_files = [p.name for p in (cj3 / "modules").glob("es.function*.js")]
re_files = [p.name for p in (cj3 / "modules").glob("es.regexp*.js")]

# dedupe candidates by npm (one leftover per npm file)
by_npm = defaultdict(list)
for c in candidates:
    by_npm[c["npm"]].append(c["module"])
unique_ok = []
two_hit_npm = []
for npm, mods in sorted(by_npm.items()):
    if len(set(mods)) != 1:
        two_hit_npm.append({"npm": npm, "modules": sorted(set(mods))})
        continue
    rec = next(c for c in candidates if c["module"] == mods[0] and c["npm"] == npm)
    unique_ok.append(rec)

report = {
    "remaining_non_business": len(remaining_other),
    "unique_corejs": unique_ok,
    "unique_corejs_count": len(unique_ok),
    "shim_needed": [c for c in unique_ok if c["consume"]["needs_shim"] or c["kind"] == "shim"],
    "alias_safe": [c for c in unique_ok if not c["consume"]["needs_shim"]],
    "two_hit_npm": two_hit_npm,
    "lodash_unique": lodash_unique[:20],
    "luxon": luxon_hit,
    "react_is_2434": react_is_2434,
    "date_files": date_files,
    "fn_files": fn_files,
    "re_files": re_files[:20],
    "known_consume": {k: consume(k) for k in KNOWN_STRUCT},
}
OUT.write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
print(json.dumps({
    "remaining_non_business": len(remaining_other),
    "unique_corejs": len(unique_ok),
    "shim_needed": len(report["shim_needed"]),
    "alias_safe": len(report["alias_safe"]),
    "two_hit_npm": len(two_hit_npm),
    "lodash_unique": len(lodash_unique),
    "shim_ids": [c["module"] for c in report["shim_needed"]],
    "alias_ids": [{"m": c["module"], "npm": c["npm"]} for c in report["alias_safe"][:30]],
    "luxon": luxon_hit,
    "date_files": date_files,
    "fn_files": fn_files,
}, indent=2), flush=True)
print("wrote", OUT, flush=True)
