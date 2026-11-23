#!/usr/bin/env python3
"""Fingerprint remaining LIVE 'other' leftovers vs already-installed npm.

Unique 1:1 leftover <-> one npm file. Reject min/barrel/2-hit/false positives.
Do not invent orig paths. Do not npm-install here.
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
SHIMS = (APP / "corejs-shim-aliases.js").read_text(encoding="utf-8")
WEBPACK = (APP / "webpack.config.js").read_text(encoding="utf-8")
RECHARTS = (APP / "recharts-aliases.js").read_text(encoding="utf-8")
OUT = APP / "PASS5_VENDOR.json"

STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core)/'
)
STR_RE = re.compile(r"""['"]([^'"]{16,})['"]""")
ERR_RE = re.compile(
    r"""throw new (?:TypeError|ReferenceError|RangeError|Error|SyntaxError)\((['"])(.*?)\1\)"""
)
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
VERSION_RE = re.compile(r"""(?:export const VERSION|version)\s*=\s*['"](\d+\.\d+\.\d+)['"]""")

already = set(re.findall(r"module-(\d+)\.js", COREJS + "\n" + SHIMS + "\n" + WEBPACK + "\n" + RECHARTS))
LEAVE = {"2434", "254", "812"}
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
GENERIC = {
    "use strict", "object", "function", "undefined", "prototype",
    "toString", "length", "constructor", "exports", "default",
    "[object Object]", "[object Array]", "[object Function]",
    "[object Number]", "[object String]", "[object Boolean]",
    "[object Arguments]", "[object Date]", "[object Error]",
    "[object Map]", "[object Set]", "[object WeakMap]",
    "[object RegExp]", "[object DataView]", "[object ArrayBuffer]",
    "[object Promise]", "[object WeakSet]",
}
REJECT_NPM_NAMES = {
    "lodash.min.js", "lodash.js", "core.js", "core.min.js",
    "array.js", "collection.js", "object.js", "lang.js", "util.js",
    "seq.js", "function.js", "date.js", "number.js", "string.js",
    "math.js", "index.js",
}


def read(p: Path) -> str:
    return p.read_text(encoding="utf-8", errors="replace")


def mid(name: str) -> str:
    m = re.search(r"module-(\d+)\.js", name)
    return m.group(1) if m else ""


def tiny_css(t: str) -> bool:
    stripped = t.lstrip()
    head = t.split("\n", 1)[0]
    if stripped.startswith("export default {") and "import " not in head and len(t) < 80:
        return True
    if len(t) < 120 and "export default {" in t and "t(" not in t:
        return True
    return False


unpacked = {}
for p in UNPACKED.glob("module-*.js"):
    t = read(p)
    if STUB_RE.search(t[:400]):
        continue
    unpacked[p.name] = t
live = set(LIVE.get("leftover_live") or [])
print("live", len(live), "unpacked_real", len(unpacked), "already", len(already), flush=True)

default_req = defaultdict(list)
default_imp = defaultdict(list)
side_imp = defaultdict(list)
named_imp = defaultdict(list)
any_imp = defaultdict(list)
IMP_RE = re.compile(r"""(?:\bfrom|\bimport\s*\(|\brequire\s*\()\s*['"]([^'"]+)['"]""")
for folder in ("pages", "components", "stores", "actions", "utils", "configs", "core", "unpacked"):
    d = SRC / folder
    if not d.is_dir():
        continue
    for path in d.rglob("*.js"):
        if "named" in path.parts:
            continue
        text = read(path)
        rel = path.relative_to(SRC).as_posix()
        for m in DEFAULT_REQ.findall(text):
            default_req[m].append(rel)
        for _v, m in DEFAULT_IMP.findall(text):
            default_imp[m].append(rel)
        for m in SIDE_IMP.findall(text):
            side_imp[m].append(rel)
        for _n, m in NAMED_IMP.findall(text):
            named_imp[m].append(rel)
        for spec in IMP_RE.findall(text):
            mm = re.search(r"(?:^|/)(module-\d+\.js)$", spec.split("?")[0])
            if mm and "named/" not in spec:
                any_imp[mm.group(1)].append(rel)


def consume(name: str) -> dict:
    return {
        "default_require": default_req.get(name, [])[:8],
        "default_import": default_imp.get(name, [])[:8],
        "side_import": side_imp.get(name, [])[:8],
        "named_import": named_imp.get(name, [])[:8],
        "any_import": any_imp.get(name, [])[:8],
        "needs_shim": bool(default_req.get(name) or default_imp.get(name)),
        "side_only": bool(side_imp.get(name))
        and not default_req.get(name)
        and not default_imp.get(name)
        and not named_imp.get(name),
    }


# remaining other reconstruction (pass4 comparable)
remaining_other = []
for name in LIVE["leftover_live"]:
    t = unpacked.get(name, "")
    n = mid(name)
    if n in SKIP_MODS or n in already or n in LEAVE:
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
    if "webpackPolyfill" in t:
        continue
    if name in {"module-240.js", "module-2434.js", "module-3515.js"}:
        continue
    if t.lstrip().startswith("export default {") and "createElement" not in t and "t(" not in t:
        continue
    if "createElement" in t or "React.Component" in t or "observer(" in t or re.search(r"""(?<![A-Za-z0-9_])t\(\s*['"]""", t):
        continue
    remaining_other.append(name)
print("remaining_other", len(remaining_other), flush=True)

leftover_str = defaultdict(set)
leftover_err = defaultdict(set)
for name, t in unpacked.items():
    for s in STR_RE.findall(t):
        leftover_str[s].add(name)
    for _q, e in ERR_RE.findall(t):
        leftover_err[e].add(name)


def index_npm(base: Path, prefix: str, globs: tuple[str, ...]) -> tuple[dict, dict, list]:
    npm_str: dict[str, set] = defaultdict(set)
    npm_err: dict[str, set] = defaultdict(set)
    files: list[str] = []
    if not base.is_dir():
        return npm_str, npm_err, files
    seen: set[Path] = set()
    for g in globs:
        for p in base.glob(g):
            if p in seen or not p.is_file():
                continue
            rel_parts = p.relative_to(base).parts
            if "node_modules" in rel_parts:
                continue
            if p.name in REJECT_NPM_NAMES and prefix == "lodash":
                continue
            seen.add(p)
            rel = prefix + "/" + p.relative_to(base).as_posix()
            files.append(rel)
            t = read(p)
            for s in STR_RE.findall(t):
                npm_str[s].add(rel)
            for _q, e in ERR_RE.findall(t):
                npm_err[e].add(rel)
    return npm_str, npm_err, files


PACKAGES = [
    ("lodash", NM / "lodash", ("*.js",)),
    ("core-js3", NM / "core-js3", ("internals/*.js", "modules/*.js")),
    ("core-js", NM / "core-js", ("library/**/*.js", "modules/*.js", "es6/*.js")),
    ("react-router", NM / "react-router", ("esm/**/*.js", "modules/**/*.js")),
    ("history", NM / "history", ("esm/**/*.js", "es/**/*.js")),
    ("qs", NM / "qs", ("lib/*.js",)),
    ("path-to-regexp", NM / "path-to-regexp", ("index.js",)),
    ("prop-types", NM / "prop-types", ("*.js", "lib/*.js")),
    ("classnames", NM / "classnames", ("index.js", "bind.js", "dedupe.js")),
    ("tiny-invariant", NM / "tiny-invariant", ("dist/**/*.js", "src/*.js")),
    ("hoist-non-react-statics", NM / "hoist-non-react-statics", ("dist/*.js", "*.js")),
    ("warning", NM / "warning", ("warning.js", "*.js")),
    ("invariant", NM / "invariant", ("browser.js", "invariant.js", "*.js")),
    ("object-assign", NM / "object-assign", ("index.js",)),
    ("scheduler", NM / "scheduler", ("cjs/*.js", "index.js")),
    ("react-is", NM / "react-is", ("cjs/*.js", "index.js")),
    ("moment-mini", NM / "moment-mini", ("moment.min.js", "src/*.js", "*.js")),
    ("js-yaml", NM / "js-yaml", ("lib/**/*.js", "index.js")),
    ("path-browserify", NM / "path-browserify", ("index.js",)),
    ("querystring", NM / "querystring", ("index.js", "*.js")),
    ("querystring-es3", NM / "querystring-es3", ("index.js", "*.js")),
    ("axios", NM / "axios", ("lib/**/*.js", "dist/*.js")),
    ("react-lifecycles-compat", NM / "react-lifecycles-compat", ("react-lifecycles-compat.es.js", "*.js")),
    ("value-equal", NM / "value-equal", ("esm/*.js", "cjs/*.js")),
    ("resolve-pathname", NM / "resolve-pathname", ("esm/*.js", "cjs/*.js")),
    ("mini-create-react-context", NM / "mini-create-react-context", ("dist/*.js",)),
    ("mobx", NM / "mobx", ("lib/*.js",)),
    ("semver", NM / "semver", ("functions/*.js", "internal/*.js", "classes/*.js", "*.js")),
    ("regenerator-runtime", NM / "regenerator-runtime", ("runtime.js", "path.js")),
]

pkg_index = {}
for key, base, globs in PACKAGES:
    s, e, files = index_npm(base, key, globs)
    pkg_index[key] = {"str": s, "err": e, "files": files, "exists": base.is_dir()}
    print(f"indexed {key} files={len(files)} exists={base.is_dir()}", flush=True)


def unique_hits_for(name: str, pkg: str) -> list[dict]:
    t = unpacked.get(name, "")
    npm_str = pkg_index[pkg]["str"]
    npm_err = pkg_index[pkg]["err"]
    hits = []
    for _q, err in ERR_RE.findall(t):
        lives = leftover_err.get(err) or set()
        npms = npm_err.get(err) or set()
        if lives == {name} and len(npms) == 1:
            hits.append({"via": "err:" + err[:100], "npm": next(iter(npms))})
    for s in STR_RE.findall(t):
        if s.lower() in GENERIC or s.startswith("module-") or s.startswith("unpacked/"):
            continue
        lives = leftover_str.get(s) or set()
        npms = npm_str.get(s) or set()
        if lives == {name} and len(npms) == 1:
            hits.append({"via": "str:" + s[:100], "npm": next(iter(npms))})
    return hits


candidates = []
rejected = []
# scan remaining_other AND also leftover_live unaliased for unique vendor
scan_set = set(remaining_other)
for name in live:
    n = mid(name)
    if n in already or n in LEAVE or n in SKIP_MODS:
        continue
    scan_set.add(name)

for name in sorted(scan_set, key=lambda n: int(mid(n) or 0)):
    t = unpacked.get(name, "")
    if not t:
        continue
    pkg_hits = {}
    for pkg in pkg_index:
        hits = unique_hits_for(name, pkg)
        if hits:
            npms = list(dict.fromkeys(h["npm"] for h in hits))
            pkg_hits[pkg] = {"npms": npms, "vias": [h["via"] for h in hits][:8]}
    if not pkg_hits:
        continue
    all_npms = []
    for rec in pkg_hits.values():
        all_npms.extend(rec["npms"])
    uniq_npms = list(dict.fromkeys(all_npms))
    if len(uniq_npms) != 1:
        rejected.append({
            "module": name,
            "reason": "multi_npm",
            "pkg_hits": {k: v["npms"] for k, v in pkg_hits.items()},
        })
        continue
    npm = uniq_npms[0]
    pkg = npm.split("/")[0]
    base = npm.split("/")[-1]
    if base in REJECT_NPM_NAMES:
        rejected.append({"module": name, "reason": "reject_npm_name", "npm": npm})
        continue
    cons = consume(name)
    leftover_bytes = len(t)
    npm_path = NM.joinpath(*npm.split("/"))
    npm_bytes = npm_path.stat().st_size if npm_path.is_file() else 0
    # size sanity: leftover recovered vs source, allow ~0.15x..6x
    ratio_ok = True
    if npm_bytes > 0:
        ratio = leftover_bytes / npm_bytes
        if ratio < 0.12 or ratio > 8:
            ratio_ok = False
    candidates.append({
        "module": name,
        "npm": npm,
        "pkg": pkg,
        "vias": pkg_hits[pkg]["vias"] if pkg in pkg_hits else [],
        "consume": cons,
        "leftover_bytes": leftover_bytes,
        "npm_bytes": npm_bytes,
        "ratio_ok": ratio_ok,
        "in_remaining_other": name in remaining_other,
        "kind": "shim" if cons["needs_shim"] else "alias",
        "version": (VERSION_RE.findall(t)[:1] or [None])[0],
    })

# structural core-js leftovers that unique-str may miss
STRUCT = [
    ("module-132.js", "core-js3/internals/get-set-record.js", ["Invalid size"]),
    ("module-70.js", "core-js3/internals/object-define-property.js", ["Accessors not supported"]),
    ("module-254.js", None, ["Incorrect invocation"]),
    ("esnext.set", None, None),
]
# extra structural: leftover uniquely containing well-known core-js / lodash needles
NEEDLES = [
    ('forced: !require("unpacked/module-133.js").default("union")', "core-js3/modules/esnext.set.union.js"),
    ('forced: !require("unpacked/module-133.js").default("difference")', "core-js3/modules/esnext.set.difference.js"),
    ('forced: !require("unpacked/module-133.js").default("symmetricDifference")', "core-js3/modules/esnext.set.symmetric-difference.js"),
    ('forced: !require("unpacked/module-133.js").default("isSubsetOf")', "core-js3/modules/esnext.set.is-subset-of.js"),
    ('forced: !require("unpacked/module-133.js").default("isSupersetOf")', "core-js3/modules/esnext.set.is-superset-of.js"),
    ('forced: !require("unpacked/module-133.js").default("isDisjointFrom")', "core-js3/modules/esnext.set.is-disjoint-from.js"),
    ('target: "Set"', None),
    ('getterFor("Map Iterator")', "core-js3/modules/es.map.iterator.js"),
    ('getterFor("Set Iterator")', "core-js3/modules/es.set.iterator.js"),
    ("__core-js_shared__", None),
    ("hoistNonReactStatics", "hoist-non-react-statics"),
    ("Invariant Violation", None),
    ("Minified exception occurred", None),
    ("A cross-origin error was thrown", None),
    ("Scheduled nested updates", None),
]
needle_hits = []
for needle, npm in NEEDLES:
    hits = []
    for name in live:
        if mid(name) in already:
            continue
        t = unpacked.get(name, "")
        if needle in t:
            hits.append(name)
    if hits:
        needle_hits.append({"needle": needle[:80], "npm": npm, "modules": hits[:12], "count": len(hits)})

# unique-ok: one leftover per npm file, ratio_ok, npm exists
by_npm = defaultdict(list)
for c in candidates:
    by_npm[c["npm"]].append(c["module"])
unique_ok = []
two_hit = []
for npm, mods in sorted(by_npm.items()):
    uniq = sorted(set(mods))
    if len(uniq) != 1:
        two_hit.append({"npm": npm, "modules": uniq})
        continue
    rec = next(c for c in candidates if c["module"] == uniq[0] and c["npm"] == npm)
    p = NM.joinpath(*npm.split("/"))
    if not p.is_file():
        rec["missing_file"] = True
        rejected.append({"module": rec["module"], "reason": "missing_npm_file", "npm": npm})
        continue
    if not rec["ratio_ok"]:
        rejected.append({"module": rec["module"], "reason": "size_ratio", "npm": npm, "leftover_bytes": rec["leftover_bytes"], "npm_bytes": rec["npm_bytes"]})
        continue
    unique_ok.append(rec)

# leftover versions that would require npm-install
need_install = []
for name in live:
    t = unpacked.get(name, "")
    vers = VERSION_RE.findall(t)
    if vers and mid(name) not in already:
        need_install.append({"module": name, "version": vers[0], "in_nm": False, "head": t[:120].replace("\n", " | ")})

report = {
    "remaining_other": remaining_other,
    "remaining_other_count": len(remaining_other),
    "unique_ok": unique_ok,
    "unique_ok_count": len(unique_ok),
    "two_hit": two_hit,
    "rejected": rejected[:60],
    "needle_hits": needle_hits,
    "need_install_sample": need_install[:20],
    "pkg_file_counts": {k: len(v["files"]) for k, v in pkg_index.items()},
    "pkg_exists": {k: v["exists"] for k, v in pkg_index.items()},
}
OUT.write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
print(json.dumps({
    "remaining_other": len(remaining_other),
    "unique_ok_count": len(unique_ok),
    "unique_ok": [{"m": c["module"], "npm": c["npm"], "kind": c["kind"], "other": c["in_remaining_other"], "vias": c["vias"][:2]} for c in unique_ok],
    "two_hit": two_hit[:20],
    "rejected_n": len(rejected),
    "needle_hits": [{"n": x["needle"], "c": x["count"], "m": x["modules"][:6], "npm": x["npm"]} for x in needle_hits],
    "pkg_exists": {k: v["exists"] for k, v in pkg_index.items() if v["exists"]},
}, indent=2), flush=True)
print("wrote", OUT, flush=True)
