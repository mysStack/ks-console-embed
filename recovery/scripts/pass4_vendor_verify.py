#!/usr/bin/env python3
"""Verify candidate leftover <-> npm file matches by reading both sides.

Reject false positives (lodash/array, lodash.min). Confirm lodash internals
and core-js uniquely extra-pathed files. Count leftover copies of each needle.
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
COREJS = (APP / "corejs-aliases.js").read_text(encoding="utf-8")
SHIMS = (APP / "corejs-shim-aliases.js").read_text(encoding="utf-8")
WEBPACK = (APP / "webpack.config.js").read_text(encoding="utf-8")
RECHARTS = (APP / "recharts-aliases.js").read_text(encoding="utf-8")
OUT = APP / "PASS4_VENDOR_VERIFY.json"

STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core)/'
)
already = set(re.findall(r"module-(\d+)\.js", COREJS + "\n" + SHIMS + "\n" + WEBPACK + "\n" + RECHARTS))
live = set(LIVE.get("leftover_live") or [])


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

CASES = [
    {
        "module": "module-264.js",
        "npm": "lodash/isPlainObject.js",
        "needles": [
            '!= "[object Object]"',
            "n instanceof n",
            "toString.call(Object)",
        ],
        "npm_needles": [
            '[object Object]',
            "isObjectLike",
            "getPrototype",
        ],
    },
    {
        "module": "module-606.js",
        "npm": "lodash/_baseIsNative.js",
        "needles": [
            r"/^\[object .+?Constructor\]$/",
            "hasOwnProperty|(function)",
            "isMasked",
        ],
        "npm_needles": [
            r"/^\[object .+?Constructor\]$/",
            "hasOwnProperty|(function)",
            "isMasked",
        ],
    },
    {
        "module": "module-129.js",
        "npm": "lodash/_getNative.js",
        "needles": [
            "module606(n)",
            "module611(e, t)",
        ],
        "npm_needles": [
            "baseIsNative",
            "getValue",
        ],
        "struct_only": True,
    },
    {
        "module": "module-164.js",
        "npm": "lodash/_getTag.js",
        "needles": [
            '[object DataView]',
            '[object Promise]',
            '[object WeakMap]',
            "new ArrayBuffer(1)",
        ],
        "npm_needles": [
            '[object DataView]',
            '[object Promise]',
            '[object WeakMap]',
            "new ArrayBuffer(1)",
        ],
    },
    {
        "module": "module-611.js",
        "npm": "lodash/_getValue.js",
        "needles": [],
        "npm_needles": [],
        "struct_only": True,
    },
    {
        "module": "module-64.js",
        "npm": "core-js3/modules/es.string.replace.js",
        "needles": [
            '"a".replace(/./, "$0") === "$0"',
            'module226("replace"',
            '"$<"',
        ],
        "npm_needles": [
            '"a".replace(/./, "$0") === "$0"',
            'SUBSTITUTION_SYMBOLS = /\\$([$&\'`]|\\d{1,2}|<[^>]*>)/g',
            "replace",
        ],
    },
    {
        "module": "module-376.js",
        "npm": "core-js3/internals/html.js",
        "needles": [
            '("document", "documentElement")',
        ],
        "npm_needles": [
            "'document', 'documentElement'",
            '"document", "documentElement"',
        ],
    },
    {
        "module": "module-367.js",
        "npm": "core-js3/internals/make-built-in.js",
        "needles": [
            'v(String(t), 0, 7) === "Symbol("',
            "Function.prototype.toString = C(",
            'r.source = g(b, typeof t === "string" ? t : "")',
        ],
        "npm_needles": [
            "makeBuiltIn",
            "Function.prototype.toString",
            "Symbol(",
        ],
    },
    {
        "module": "module-421.js",
        "npm": "core-js3/internals/collection.js",
        "needles": [
            "getConstructor: function",
            "AS_ENTRIES",
            "getterFor(t)",
        ],
        "npm_needles": [
            "getConstructor",
            "AS_ENTRIES",
        ],
    },
    {
        "module": "module-584.js",
        "npm": "core-js3/internals/symbol-constructor.js",
        "needles": [
            'getterFor("Symbol")',
            "QObject.prototype.findChild",
            "op-symbols",
        ],
        "npm_needles": [
            "Symbol",
            "findChild",
            "op-symbols",
        ],
    },
    {
        "module": "module-674.js",
        "npm": "core-js3/modules/esnext.set.intersection.js",
        "needles": [
            'forced: !require("unpacked/module-133.js").default("intersection")',
            "].intersection(new Set([",
        ],
        "npm_needles": [
            "intersection",
        ],
    },
]


def count_needle(needle: str, among_live: bool) -> list[str]:
    hits = []
    for name, t in unpacked.items():
        if among_live and name not in live:
            continue
        if needle in t:
            hits.append(name)
    return sorted(hits, key=lambda n: int(mid(n) or 0))


results = []
for case in CASES:
    name = case["module"]
    npm_rel = case["npm"]
    leftover = unpacked.get(name, "")
    npm_path = NM.joinpath(*npm_rel.split("/"))
    npm_text = read(npm_path) if npm_path.is_file() else ""
    leftover_needles = {n: n in leftover for n in case["needles"]}
    npm_needles = {n: n in npm_text for n in case["npm_needles"]}
    leftover_copy_hits = {}
    for n in case["needles"]:
        leftover_copy_hits[n] = {
            "all": count_needle(n, False),
            "live": count_needle(n, True),
        }
    results.append({
        "module": name,
        "npm": npm_rel,
        "live": name in live,
        "already": mid(name) in already,
        "leftover_bytes": len(leftover),
        "npm_exists": npm_path.is_file(),
        "npm_bytes": npm_path.stat().st_size if npm_path.is_file() else 0,
        "leftover_needles": leftover_needles,
        "npm_needles": npm_needles,
        "copy_hits": leftover_copy_hits,
        "leftover_head": leftover[:240].replace("\n", " | "),
        "npm_head": npm_text[:240].replace("\n", " | "),
    })

# extra lodash internals scan: unique long strings in leftover vs lodash/*.js
lodash_files = {}
ld = NM / "lodash"
for p in ld.glob("*.js"):
    if p.name in {"lodash.js", "lodash.min.js", "core.js", "core.min.js"}:
        continue
    lodash_files[p.name] = read(p)

# map distinctive lodash internals present in LIVE leftovers
DISTINCT = [
    ("__core-js_shared__", "_coreJsData.js"),
    ("core-js_shared", "_coreJsData.js"),
    ("cloneableTags", "_initCloneByTag.js"),
    ("COMPARE_PARTIAL_FLAG", "_baseIsEqualDeep.js"),
    ("HASH_UNDEFINED", "_Hash.js"),
    ("hashClear", "_hashClear.js"),
    ("LazyWrapper", "_LazyWrapper.js"),
    ("wrapperLodash", "wrapperLodash.js"),
    ("lodash.templateSettings", "templateSettings.js"),
    ("placeholder", "_getPlaceholder.js"),
]
distinct_hits = []
for needle, fname in DISTINCT:
    all_hits = count_needle(needle, False)
    live_hits = [h for h in all_hits if h in live and mid(h) not in already]
    distinct_hits.append({
        "needle": needle,
        "npm": fname,
        "npm_exists": (ld / fname).is_file(),
        "all": all_hits,
        "live_unaliased": live_hits,
    })

# 958/1056/1648 importer live?
buf = {}
for name in ("module-958.js", "module-1056.js", "module-1648.js"):
    imps = []
    for other, t in unpacked.items():
        if name in t and other != name:
            imps.append({
                "importer": other,
                "live": other in live,
                "already": mid(other) in already,
            })
    buf[name] = {"live": name in live, "importers": imps}

# 376 vs 893 documentElement quoting
doc_hits = []
for name, t in unpacked.items():
    if "documentElement" in t:
        quoted = '"documentElement"' in t or "'documentElement'" in t
        doc_hits.append({
            "module": name,
            "live": name in live,
            "already": mid(name) in already,
            "quoted": quoted,
            "aliased_webpack": "module-893.js" in WEBPACK and name == "module-893.js",
        })

# inspect html.js / make-built-in / collection / symbol-constructor existence
npm_exist = {
    rel: (NM.joinpath(*rel.split("/"))).is_file()
    for rel in [
        "core-js3/internals/html.js",
        "core-js3/internals/make-built-in.js",
        "core-js3/internals/collection.js",
        "core-js3/internals/symbol-constructor.js",
        "core-js3/modules/es.symbol.js",
        "core-js3/modules/es.string.replace.js",
        "core-js3/modules/esnext.set.intersection.js",
        "lodash/_getTag.js",
        "lodash/_getNative.js",
        "lodash/_getValue.js",
        "lodash/_baseIsNative.js",
        "lodash/isPlainObject.js",
        "lodash/_isMasked.js",
        "lodash/_coreJsData.js",
        "lodash/_toSource.js",
    ]
}

# 421/584 uniqueness of distinctive snippets among leftover
extra_needles = [
    'getterFor("Symbol")',
    "QObject.prototype.findChild",
    "op-symbols",
    "AS_ENTRIES",
    'type: "Symbol"',
    "makeBuiltIn",
    'v(String(t), 0, 7) === "Symbol("',
    "Function.prototype.toString = C(",
]
extra = {}
for n in extra_needles:
    extra[n] = {"all": count_needle(n, False), "live": count_needle(n, True)}

# consume 64/376/264/606/164/129/367/421/584
from collections import defaultdict as dd
DEFAULT_REQ = re.compile(r"""require\(\s*['"]unpacked/(module-\d+\.js)['"]\s*\)\s*\.default""")
DEFAULT_IMP = re.compile(r"""import\s+(\w+)\s+from\s+['"]unpacked/(module-\d+\.js)['"]""")
SIDE_IMP = re.compile(r"""(?:^|\n)import\s+['"]unpacked/(module-\d+\.js)['"]""")
NAMED_IMP = re.compile(r"""import\s+\{([^}]+)\}\s+from\s+['"]unpacked/(module-\d+\.js)['"]""")
SRC = APP / "src"
default_req = dd(list)
default_imp = dd(list)
side_imp = dd(list)
named_imp = dd(list)
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

focus_mods = [
    "module-64.js", "module-376.js", "module-264.js", "module-606.js",
    "module-164.js", "module-129.js", "module-367.js", "module-421.js",
    "module-584.js", "module-674.js", "module-611.js",
]
consume = {}
for m in focus_mods:
    consume[m] = {
        "default_require": default_req.get(m, [])[:10],
        "default_import": default_imp.get(m, [])[:10],
        "side_import": side_imp.get(m, [])[:10],
        "named_import": named_imp.get(m, [])[:10],
        "needs_shim": bool(default_req.get(m) or default_imp.get(m)),
    }

report = {
    "cases": results,
    "distinct_lodash": distinct_hits,
    "buffer_importers": buf,
    "documentElement": doc_hits,
    "npm_exist": npm_exist,
    "extra_needles": extra,
    "consume": consume,
}
OUT.write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")

summary = []
for r in results:
    ok_left = all(r["leftover_needles"].values()) if r["leftover_needles"] else None
    copies = {k: v["live"] for k, v in r["copy_hits"].items()}
    summary.append({
        "m": r["module"],
        "npm": r["npm"],
        "live": r["live"],
        "npm_exists": r["npm_exists"],
        "left_needles": r["leftover_needles"],
        "npm_needles": r["npm_needles"],
        "live_copies": copies,
    })
print(json.dumps({
    "summary": summary,
    "npm_exist": npm_exist,
    "buffer_live": {k: v["live"] for k, v in buf.items()},
    "buffer_importer_live": {
        k: [i["importer"] for i in v["importers"] if i["live"] and not i["already"]]
        for k, v in buf.items()
    },
    "docElement_quoted_live": [d for d in doc_hits if d["quoted"] and d["live"] and not d["already"]],
    "extra_live": {k: v["live"] for k, v in extra.items() if v["live"]},
    "consume_shim": {k: v["needs_shim"] for k, v in consume.items()},
}, indent=2), flush=True)
print("wrote", OUT, flush=True)
