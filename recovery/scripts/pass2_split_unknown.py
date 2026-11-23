#!/usr/bin/env python3
"""Split the remaining leftover bucket and hunt unique core-js3 / vendor 1:1.

Uniqueness is GLOBAL among all non-stub unpacked vs npm files already installed.
Do not invent orig paths. Do not npm-install. Do not swap core-js@2.
"""
from __future__ import annotations

from collections import defaultdict
from pathlib import Path
import json
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
APP = ROOT / "recovery/react-app"
UNPACKED = APP / "src/unpacked"
NM = APP / "node_modules"
PASS2 = json.loads((APP / "PASS2_INDEPENDENT.json").read_text(encoding="utf-8"))
LIVE = json.loads((APP / "LIVE_UNPACKED.json").read_text(encoding="utf-8"))
COREJS_ALIASES = APP / "corejs-aliases.js"
WEBPACK = (APP / "webpack.config.js").read_text(encoding="utf-8")
RECHARTS = (APP / "recharts-aliases.js").read_text(encoding="utf-8")
OUT = APP / "PASS2_SPLIT.json"

STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core)/'
)
STR_RE = re.compile(r"""['"]([^'"]{16,})['"]""")
ERR_RE = re.compile(
    r"""throw new (?:TypeError|ReferenceError|RangeError|Error)\((['"])(.*?)\1\)"""
)
IMP_RE = re.compile(r"""unpacked/(module-\d+\.js)""")

already = set(re.findall(r"module-(\d+)\.js", WEBPACK + "\n" + RECHARTS))
if COREJS_ALIASES.exists():
    already.update(re.findall(r"module-(\d+)\.js", COREJS_ALIASES.read_text(encoding="utf-8")))

live = set(LIVE["leftover_live"])
print("live", len(live), "already", len(already), flush=True)

unpacked = {}
for p in UNPACKED.glob("module-*.js"):
    t = p.read_text(encoding="utf-8", errors="replace")
    if STUB_RE.search(t[:400]):
        continue
    unpacked[p.name] = t
print("real_unpacked", len(unpacked), flush=True)


def mid(name: str) -> str:
    m = re.search(r"module-(\d+)\.js", name)
    return m.group(1) if m else ""


def classify(name: str, t: str) -> str:
    if "webpackPolyfill" in t:
        return "webpack_runtime"
    if "$wujie" in t and "Notify" in t:
        return "kse_wujie_notify_0_orig_path"
    if "iconfont__svg__inject" in t:
        return "kube_design_icon_inject_2hit_with_186"
    if "isValidElementType" in t and "Symbol.for(\"react.element\")" in t:
        return "react_is_family"
    if "__lodash_hash_undefined__" in t or ("lodash" in t[:500].lower() and "Hash" in t):
        return "lodash_internal"
    if "LoDash" in t:
        return "lodash_internal"
    if (
        "applyDecoratedDescriptor" in t
        or "a.initializer" in t and "Object.defineProperty" in t
        or ("enumerable = r.enumerable" in t and "defineProperty" in t)
        or (t.startswith("function n()") and "Object.assign" in t)
        or "Cannot call a class as a function" in t
        or "this hasn't been initialised" in t
        or "Super expression must either be null or a function" in t
        or "Cannot delete property" in t
    ):
        return "babel_helper"
    if tiny_css(t):
        return "css_object"
    if corejs_like(t):
        return "corejs_unaliased"
    if "createElement" in t or "React.Component" in t or "observer(" in t:
        return "business_looking"
    if re.search(r"""(?<![A-Za-z0-9_])t\(\s*['"]""", t):
        return "business_looking"
    if len(t) < 400:
        return "tiny_other"
    return "other"


def tiny_css(t: str) -> bool:
    s = t.lstrip()
    if s.startswith("export default {") and "t(" not in t:
        keys = re.findall(r"^\s{2,4}[A-Za-z_][\w-]*:", t, re.M)
        hashed = re.findall(r"['\"][-_A-Za-z0-9]{10,}['\"]", t)
        if hashed and len(t) < 4000:
            return True
        if "wrapper:" in t or "item:" in t:
            return True
    return False


def corejs_like(t: str) -> bool:
    needles = (
        "globalThis",
        "dontCallGetSet",
        "getterFor(",
        "__core-js_shared__",
        "wellKnownSymbol",
        "isForced",
        "IndexedObject",
        "requireObjectCoercible",
        "toLength",
        "toIntegerOrInfinity",
        "lengthOfArrayLike",
        "anObject",
        "aCallable",
        "engineV8Version",
        "Fails",
        "nativeDefineProperty",
        "DESCRIPTORS",
        "Array Iterator",
        "String Iterator",
        "Invalid Date",
        "function\b(?:\\s|/",
        "{ target, global, stat }",
        "stat ? module25",
        "module25.Number",
        "RegExp.prototype.toString",
        "Function.prototype.toString",
        "es.array.",
        "es.object.",
        "es.string.",
        "es.promise.",
        "es.symbol.",
    )
    hits = sum(1 for n in needles if n in t)
    only_unpacked_imps = True
    imps = re.findall(r"""from ["']([^"']+)["']""", t)
    if imps:
        only_unpacked_imps = all(
            x.startswith("unpacked/module-") or x.startswith("./module-") for x in imps
        )
    if hits >= 1 and only_unpacked_imps and not re.search(r"""(?<![A-Za-z0-9_])t\(\s*['"]""", t) and "createElement" not in t:
        return True
    if hits >= 2:
        return True
    return False


# factory leftover names
leftovers = LIVE["leftover_live"]
# previous remaining ~714 were leftover minus skip/cssish/tiny/babel/lodash/corejs errors
skip_like = set(PASS2["bucket_samples"].get("skip_list") or [])
# use full leftover list from live and reclassify remaining-style
coarse = PASS2["bucket_counts"]
unknown = PASS2.get("truly_unknown_ids") or []
# full leftover classification for ALL factory leftovers
all_buckets = defaultdict(list)
for name in leftovers:
    t = unpacked.get(name, "")
    if not t:
        all_buckets["missing_file"].append(name)
        continue
    # keep original coarse first
    n = mid(name)
    if n in already:
        all_buckets["already_aliased"].append(name)
        continue
    all_buckets[classify(name, t)].append(name)

print("all leftover classify", {k: len(v) for k, v in sorted(all_buckets.items(), key=lambda kv: -len(kv[1]))}, flush=True)

# finer split of PASS2 truly_unknown (600)
unk_full = PASS2["bucket_samples"]["truly_unknown"]
# the sample is only 12; load full list from PASS2 truly_unknown_ids is truncated to 80.
# Recompute unknown as leftovers classified other/business from this script among
# those NOT in skip/cssish/tiny from pass2 buckets.
pass2_unknown_set = set()
# reconstruct: leftover minus buckets we already named in pass2 except truly_unknown
named_in_pass2 = set()
for k, v in PASS2["bucket_samples"].items():
    if k == "truly_unknown":
        continue
    named_in_pass2.update(v)
# that's only samples. Use leftover - pass2 known complete lists from PASS2 file keys.
# Better: recompute remaining as leftovers whose pass2 classify would be remaining,
# then split with classify().

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

remaining_like = []
for name in leftovers:
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
    stripped = t.lstrip()
    head = t.split("\n", 1)[0]
    if stripped.startswith("export default {") and "import " not in head and len(t) < 80:
        continue
    if len(t) < 120 and "export default {" in t and "t(" not in t:
        continue
    if len(t) < 400:
        continue
    if "lodash" in t[:400].lower() or "LoDash" in t:
        continue
    remaining_like.append(name)
print("remaining_like", len(remaining_like), flush=True)

remain_buckets = defaultdict(list)
for name in remaining_like:
    remain_buckets[classify(name, unpacked[name])].append(name)
print("remaining split", {k: len(v) for k, v in sorted(remain_buckets.items(), key=lambda kv: -len(kv[1]))}, flush=True)

print("=== unique core-js3 1:1 among ALL unpacked ===", flush=True)
# index leftover strings
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
        try:
            t = p.read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue
        for s in STR_RE.findall(t):
            npm_str[s].add(rel)
        for _q, e in ERR_RE.findall(t):
            npm_err[e].add(rel)
print("corejs3 files", len(npm_files), flush=True)

candidates = []
# unique errors
for e, files in leftover_err.items():
    if len(files) != 1:
        continue
    name = next(iter(files))
    if mid(name) in already:
        continue
    npm = npm_err.get(e) or set()
    if len(npm) == 1:
        candidates.append({
            "module": name,
            "npm": next(iter(npm)),
            "via": "err:" + e[:80],
            "in_live": name in live,
        })

# unique long strings (skip very generic)
GENERIC = (
    "use strict", "object", "function", "undefined", "prototype",
    "toString", "length", "constructor", "exports", "default",
)
for s, files in leftover_str.items():
    if len(files) != 1:
        continue
    if s.lower() in GENERIC or s.startswith("module-"):
        continue
    if re.fullmatch(r"[-_A-Za-z0-9]{16,}", s) and not re.search(r"[a-z]{4,}", s):
        continue  # css hash
    name = next(iter(files))
    if mid(name) in already:
        continue
    npm = npm_str.get(s) or set()
    if len(npm) == 1:
        candidates.append({
            "module": name,
            "npm": next(iter(npm)),
            "via": "str:" + s[:80],
            "in_live": name in live,
        })

# structural unique: e.dontCallGetSet ?
struct = []
for name, t in unpacked.items():
    if "e.dontCallGetSet ?" in t or "e.dontCallGetSet?" in t:
        struct.append(name)
print("struct dontCallGetSet impl", struct, flush=True)
if struct == ["module-8.js"] and mid("module-8.js") not in already:
    candidates.append({
        "module": "module-8.js",
        "npm": "internals/export.js",
        "via": "structural e.dontCallGetSet ?",
        "in_live": "module-8.js" in live,
    })

# Array Iterator unique constructor string
for needle, expect_npm in (
    ('getterFor("Array Iterator")', "internals/es.array.iterator.js"),
    ("type: \"Array Iterator\"", None),
    ("type: \"String Iterator\"", None),
):
    hits = [n for n, t in unpacked.items() if needle in t]
    print("needle", needle, hits, flush=True)

# dedupe candidates by module, prefer err/structural
by_mod = defaultdict(list)
for c in candidates:
    by_mod[c["module"]].append(c)
unique_alias = []
seen_npm = set()
rejected_corejs = []
for name, recs in sorted(by_mod.items(), key=lambda kv: int(mid(kv[0]) or 0)):
    npms = list(dict.fromkeys(r["npm"] for r in recs))
    if len(npms) != 1:
        continue
    npm = npms[0]
    if npm in seen_npm:
        continue
    if not (cj3 / npm).is_file():
        continue
    kind = classify(name, unpacked.get(name, ""))
    vias = [r["via"] for r in recs]
    strong = any(v.startswith("err:") or v.startswith("structural") for v in vias)
    if kind == "business_looking" or (kind not in {"corejs_unaliased", "babel_helper", "tiny_other", "other"} and not strong):
        rejected_corejs.append({"module": name, "npm": npm, "kind": kind, "via": vias[0]})
        continue
    if kind not in {"corejs_unaliased", "babel_helper", "tiny_other", "other", "webpack_runtime"} and not strong:
        rejected_corejs.append({"module": name, "npm": npm, "kind": kind, "via": vias[0]})
        continue
    live_ok = any(r["in_live"] for r in recs)
    unique_alias.append({
        "module": name,
        "npm": npm,
        "kind": kind,
        "vias": vias[:4],
        "in_live": live_ok,
    })
    seen_npm.add(npm)
    print(f"  UNIQUE {name} -> core-js3/{npm} kind={kind} live={live_ok} via={vias[0][:60]}", flush=True)

print("unique_corejs_alias_candidates", len(unique_alias), "live", sum(1 for x in unique_alias if x["in_live"]), flush=True)

# react-is already found
react_is = {
    "module": "module-761.js",
    "pkg": "react-is",
    "in_live": "module-761.js" in live,
}

# remaining business looking leftover details
biz = remain_buckets.get("business_looking") or []
biz_info = []
for name in biz[:40]:
    t = unpacked[name]
    tkeys = re.findall(r"""(?<![A-Za-z0-9_])t\(\s*['"]([^'"]+)['"]""", t)
    apis = re.findall(r"""['"]((?:/kapis|/apis|/api)[^'"]{6,})['"]""", t)
    classes = re.findall(r"""\bclass\s+([A-Z][A-Za-z0-9]{3,})\b""", t)
    biz_info.append({
        "module": name,
        "bytes": len(t),
        "t_sample": tkeys[:6],
        "api_sample": apis[:4],
        "class_sample": classes[:4],
        "head": t[:180].replace("\n", " "),
    })

report = {
    "remaining_like": len(remaining_like),
    "remaining_split": {k: len(v) for k, v in remain_buckets.items()},
    "remaining_split_samples": {k: v[:15] for k, v in remain_buckets.items()},
    "all_leftover_split": {k: len(v) for k, v in all_buckets.items()},
    "unique_corejs_aliases": unique_alias,
    "unique_corejs_live": [x for x in unique_alias if x["in_live"]],
    "rejected_corejs_sample": rejected_corejs[:20],
    "react_is": react_is,
    "business_looking_count": len(biz),
    "business_looking_sample": biz_info,
    "kse_wujie": remain_buckets.get("kse_wujie_notify_0_orig_path") or all_buckets.get("kse_wujie_notify_0_orig_path"),
}
OUT.write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
print(json.dumps({
    "remaining_like": len(remaining_like),
    "remaining_split": report["remaining_split"],
    "unique_corejs_live_count": len(report["unique_corejs_live"]),
    "business_looking": len(biz),
}, indent=2), flush=True)
print("wrote", OUT, flush=True)
