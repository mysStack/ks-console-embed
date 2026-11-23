#!/usr/bin/env python3
"""Unique extra-path code snippets in remaining_other vs npm.

Quoted-string fingerprint missed unique tests that are source, not strings.
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
LIVE = json.loads((APP / "LIVE_UNPACKED.json").read_text(encoding="utf-8"))
VENDOR = json.loads((APP / "PASS5_VENDOR.json").read_text(encoding="utf-8"))
COREJS = (APP / "corejs-aliases.js").read_text(encoding="utf-8")
SHIMS = (APP / "corejs-shim-aliases.js").read_text(encoding="utf-8")
WEBPACK = (APP / "webpack.config.js").read_text(encoding="utf-8")
RECHARTS = (APP / "recharts-aliases.js").read_text(encoding="utf-8")

already = set(re.findall(r"module-(\d+)\.js", COREJS + "\n" + SHIMS + "\n" + WEBPACK + "\n" + RECHARTS))
remaining_other = list(VENDOR["remaining_other"])


def read(p: Path) -> str:
    return p.read_text(encoding="utf-8", errors="replace")


def mid(name: str) -> str:
    m = re.search(r"module-(\d+)\.js", name)
    return m.group(1) if m else ""


unpacked = {p.name: read(p) for p in UNPACKED.glob("module-*.js")}
live = set(LIVE.get("leftover_live") or [])

# distinctive snippets: numeric tests, unique API names, unique errors (8+ with digits or unique punctuation)
SNIP_RES = [
    re.compile(r"429496729[0-9]"),
    re.compile(r"Array\(1\)\.includes\(\)"),
    re.compile(r"Date\.prototype\.toJSON"),
    re.compile(r"\.finally\.call\("),
    re.compile(r"UNSUPPORTED_Y"),
    re.compile(r"MISSED_STICKY"),
    re.compile(r"BROKEN_CARET"),
    re.compile(r"dotAll"),
    re.compile(r"WebAssembly"),
    re.compile(r"toISOString"),
    re.compile(r"trimStart"),
    re.compile(r"trimEnd"),
    re.compile(r"replaceAll"),
    re.compile(r"flatMap"),
    re.compile(r"fromEntries"),
    re.compile(r"getOwnPropertyDescriptors"),
    re.compile(r"groupBy"),
    re.compile(r"findLast"),
    re.compile(r"toReversed"),
    re.compile(r"toSorted"),
    re.compile(r"toSpliced"),
    re.compile(r"withResolvers"),
    re.compile(r"isWellFormed"),
    re.compile(r"toWellFormed"),
    re.compile(r"transferToFixedLength"),
    re.compile(r"structuredClone"),
    re.compile(r"Iterator\.from"),
    re.compile(r"AsyncIterator"),
    re.compile(r"Error\.isError"),
    re.compile(r"Array\.fromAsync"),
    re.compile(r"Promise\.try"),
    re.compile(r"Promise\.withResolvers"),
    re.compile(r"Set\.prototype"),
    re.compile(r"Map\.prototype"),
    re.compile(r"WeakMap"),
    re.compile(r"WeakSet"),
    re.compile(r"Object\.hasOwn"),
    re.compile(r"Object\.groupBy"),
    re.compile(r"Array\.prototype\.at"),
    re.compile(r"String\.prototype\.at"),
    re.compile(r"isConcatSpreadable"),
    re.compile(r"speciesConstructor"),
    re.compile(r"@@toStringTag"),
    re.compile(r"Incorrect invocation"),
    re.compile(r"Invalid size"),
    re.compile(r"Accessors not supported"),
    re.compile(r"Iterator is already executing"),
    re.compile(r"Reduce of empty array with no initial value"),
    re.compile(r"RegExp too big"),
    re.compile(r"Maximum call stack size exceeded"),
    re.compile(r"Cannot convert .+ to a number"),
    re.compile(r"is not iterable"),
    re.compile(r"called on incompatible receiver"),
    re.compile(r"Right-hand side of 'instanceof' is not an object"),
    re.compile(r"NewNumber"),
    re.compile(r"NativeURL"),
    re.compile(r"DOMException"),
    re.compile(r"queueMicrotask"),
    re.compile(r"aggregateError"),
    re.compile(r"unhandledrejection"),
    re.compile(r"observable"),
    re.compile(r"metadata"),
    re.compile(r"asyncIterator"),
    re.compile(r"toJSON"),
    re.compile(r"includes"),
    re.compile(r"padStart"),
    re.compile(r"padEnd"),
    re.compile(r"matchAll"),
    re.compile(r"codePointAt"),
    re.compile(r"fromCodePoint"),
    re.compile(r"raw"),
    re.compile(r"isFrozen"),
    re.compile(r"isSealed"),
    re.compile(r"isExtensible"),
    re.compile(r"preventExtensions"),
    re.compile(r"getPrototypeOf"),
    re.compile(r"setPrototypeOf"),
    re.compile(r"isArray"),
    re.compile(r"copyWithin"),
    re.compile(r"values"),
    re.compile(r"entries"),
    re.compile(r"keys"),
    re.compile(r"forEach"),
]

# better: extract leftover unique substrings that appear in npm
# use leftover unique 24-char windows that contain a digit or a prototype test

npm_files = []
for prefix, base, globs in (
    ("core-js3", NM / "core-js3", ("modules/*.js", "internals/*.js")),
    ("lodash", NM / "lodash", ("*.js",)),
):
    for g in globs:
        for p in base.glob(g):
            if not p.is_file():
                continue
            if prefix == "lodash" and p.name in {
                "lodash.js", "lodash.min.js", "core.js", "core.min.js", "array.js",
            }:
                continue
            npm_files.append((prefix + "/" + p.relative_to(base).as_posix(), read(p)))
print("npm files", len(npm_files), flush=True)

# candidate needles: unique leftover tokens that look like tests
NEEDLE_FROM_OTHER = [
    "4294967297",
    "4294967296",
    "Array(1).includes()",
    "new Date(NaN).toJSON() !== null",
    "Date.prototype.toJSON.call",
    "d.finally.call",
    "prototype.finally",
    "UNSUPPORTED_Y",
    "MISSED_STICKY",
    "BROKEN_CARET",
    "dotAll",
    "module25_WebAssembly",
    "WebAssembly.",
    "cause !== 7",
    "cause: 7",
    "Iterator is already executing",
    "get-set-record",
    "aSet",
    "toSetLike",
    "GetSetRecord",
    "number#toJSON",
    "padStart",
    "padEnd",
    "matchAll",
    "fromEntries",
    "hasOwn",
    "groupBy",
    "findLastIndex",
    "findLast",
    "toReversed",
    "toSorted",
    "toSpliced",
    "withResolvers",
    "isWellFormed",
    "toWellFormed",
    "queueMicrotask",
    "aggregateError",
    "structuredClone",
    "Error.isError",
    "Promise.try",
    "Array.fromAsync",
    "Iterator.from",
    "copyWithin",
    "species",
    "isConcatSpreadable",
    "unscopables",
    "toPrimitive",
    "hasInstance",
    "isView",
    "transfer",
    "detached",
    "resizable",
    "maxByteLength",
    "growable",
    "flags",
    "sticky",
    "unicodeSets",
    "hasIndices",
    "ignoreCase",
    "multiline",
    "source",
    "lastIndex",
    "compile",
    "escape",
    "unescape",
    "anchor",
    "big",
    "blink",
    "bold",
    "fixed",
    "fontcolor",
    "fontsize",
    "italics",
    "small",
    "strike",
    "sub",
    "sup",
    "link",
    "repeat",
    "normalize",
    "codePointAt",
    "fromCodePoint",
    "raw",
    "iterator",
    "asyncIterator",
    "observable",
    "metadata",
    "decorate",
    "metadataKey",
    "defineMetadata",
    "hasMetadata",
    "getMetadata",
    "deleteMetadata",
    "getOwnMetadata",
    "hasOwnMetadata",
    "getMetadataKeys",
    "getOwnMetadataKeys",
    "toJSON",
    "toISOString",
    "toUTCString",
    "toGMTString",
    "toDateString",
    "toTimeString",
    "getYear",
    "setYear",
    "toGMTString",
    "parseInt",
    "parseFloat",
    "isFinite",
    "isNaN",
    "isInteger",
    "isSafeInteger",
    "EPSILON",
    "MAX_SAFE_INTEGER",
    "MIN_SAFE_INTEGER",
    "clz32",
    "imul",
    "fround",
    "hypot",
    "acosh",
    "asinh",
    "atanh",
    "cbrt",
    "cosh",
    "expm1",
    "log1p",
    "log10",
    "log2",
    "sign",
    "sinh",
    "tanh",
    "trunc",
    "from",
    "of",
    "isArray",
    "ArrayBuffer",
    "SharedArrayBuffer",
    "DataView",
    "Float32Array",
    "Uint8ClampedArray",
    "BigInt64Array",
    "BigUint64Array",
    "Reflect.apply",
    "Reflect.construct",
    "Reflect.defineProperty",
    "Reflect.deleteProperty",
    "Reflect.get",
    "Reflect.getOwnPropertyDescriptor",
    "Reflect.getPrototypeOf",
    "Reflect.has",
    "Reflect.isExtensible",
    "Reflect.ownKeys",
    "Reflect.preventExtensions",
    "Reflect.set",
    "Reflect.setPrototypeOf",
    "Proxy.revocable",
    "Object.fromEntries",
    "Object.hasOwn",
    "Object.groupBy",
    "Map.groupBy",
    "Set.difference",
    "URL.canParse",
    "URL.parse",
    "btoa",
    "atob",
    "setImmediate",
    "clearImmediate",
    "queueMicrotask",
    "self",
    "globalThis",
    "structuredClone",
    "DOMException",
    "parse",
    "stringify",
    "rawJSON",
    "isRawJSON",
]

# leftover uniqueness of each needle among ALL unpacked
leftover_hits = {}
for needle in NEEDLE_FROM_OTHER:
    hits = [n for n, t in unpacked.items() if needle in t]
    leftover_hits[needle] = hits

print("=== leftover-unique needles among remaining_other ===")
unique_needles = []
for needle, hits in leftover_hits.items():
    if len(hits) != 1:
        continue
    name = hits[0]
    if name not in remaining_other and name not in live:
        continue
    n = mid(name)
    if n in already:
        continue
    unique_needles.append((needle, name, name in remaining_other, name in live))
    print(f"  leftover-unique {needle!r} -> {name} other={name in remaining_other} live={name in live}")

# npm uniqueness
print("\n=== leftover-unique AND npm-unique ===")
confirmed = []
multi_npm = []
no_npm = []
for needle, name, other, is_live in unique_needles:
    npms = [rel for rel, t in npm_files if needle in t]
    if len(npms) == 1:
        confirmed.append({"needle": needle, "module": name, "npm": npms[0], "other": other, "live": is_live})
        print(f"  1:1 {name} {needle!r} -> {npms[0]} other={other}")
    elif len(npms) == 0:
        no_npm.append({"needle": needle, "module": name})
    else:
        multi_npm.append({"needle": needle, "module": name, "npms": npms[:8], "n": len(npms)})
        if len(npms) <= 4:
            print(f"  multi-npm {name} {needle!r} {npms}")

print("\nconfirmed", len(confirmed), "multi", len(multi_npm), "no_npm", len(no_npm))

# also: remaining_other unique export keys vs unique core-js3 module
print("\n=== remaining_other unique proto method wrappers ===")
EXPORT_RE = re.compile(
    r"""module8\(\s*\{[^}]*target:\s*["']([A-Za-z]+)["'][^}]*\}\s*,\s*\{\s*([A-Za-z][A-Za-z0-9]*)\b""",
    re.S,
)
wraps = []
for name in remaining_other + [n for n in live if mid(n) not in already]:
    t = unpacked.get(name, "")
    m = EXPORT_RE.search(t)
    if not m:
        continue
    target, method = m.group(1), m.group(2)
    wraps.append((name, target, method, name in remaining_other, len(t)))
# unique method among these wrappers
by_tm = defaultdict(list)
for rec in wraps:
    by_tm[(rec[1], rec[2])].append(rec[0])
print("wrappers", len(wraps), "unique_pairs", sum(1 for v in by_tm.values() if len(v) == 1))
shown = 0
for (target, method), mods in sorted(by_tm.items(), key=lambda kv: kv[0]):
    if len(mods) != 1:
        continue
    name = mods[0]
    n = mid(name)
    if n in already:
        continue
    kebab = re.sub(r"([a-z])([A-Z])", r"\1-\2", method).lower()
    cands = []
    for stem in (
        f"esnext.{target.lower()}.{kebab}",
        f"es.{target.lower()}.{kebab}",
        f"esnext.{target.lower()}.{method.lower()}",
        f"es.{target.lower()}.{method.lower()}",
        f"web.{target.lower()}.{kebab}",
    ):
        p = NM / "core-js3" / "modules" / f"{stem}.js"
        if p.is_file():
            cands.append(f"core-js3/modules/{stem}.js")
    print(f"  {name} {target}.{method} npm={cands} other={name in remaining_other} bytes={len(unpacked[name])}")
    shown += 1
print("shown unique wrappers", shown)

out = {
    "confirmed_snippet": confirmed,
    "multi_npm": multi_npm[:40],
    "no_npm": no_npm[:40],
    "unique_needles": [{"needle": a, "module": b, "other": c, "live": d} for a, b, c, d in unique_needles],
}
(APP / "PASS5_SNIPPET.json").write_text(json.dumps(out, indent=2) + "\n", encoding="utf-8")
print("wrote PASS5_SNIPPET.json")
