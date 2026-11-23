#!/usr/bin/env python3
"""Unique leftover vs core-js3 internals + lodash 958/1056/1648 check."""
from __future__ import annotations

from pathlib import Path
import json
import re

APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
UNPACKED = APP / "src/unpacked"
NM = APP / "node_modules"
LIVE = json.loads((APP / "LIVE_UNPACKED.json").read_text())
VENDOR = json.loads((APP / "PASS5_VENDOR.json").read_text()) if (APP / "PASS5_VENDOR.json").is_file() else {}
already = set(re.findall(
    r"module-(\d+)\.js",
    (APP / "corejs-aliases.js").read_text()
    + (APP / "corejs-shim-aliases.js").read_text()
    + (APP / "webpack.config.js").read_text()
    + (APP / "recharts-aliases.js").read_text(),
))
live = set(LIVE.get("leftover_live") or [])
remaining_other = set(VENDOR.get("remaining_other") or [])


def read(p: Path) -> str:
    return p.read_text(encoding="utf-8", errors="replace")


def mid(name: str) -> str:
    m = re.search(r"module-(\d+)\.js", name)
    return m.group(1) if m else ""


unpacked = {p.name: read(p) for p in UNPACKED.glob("module-*.js")}
print("unpacked", len(unpacked), "remaining_other", len(remaining_other), "live", len(live))

needles = [
    "Accessors not supported",
    "Reduce of empty array with no initial value",
    "MSIE|Trident",
    r"Chrome\/(\d+)",
    r"Edge\/(\d+)",
    "Iterator is already executing",
    "Incorrect invocation",
    "Invalid size",
    r"called on incompatible receiver",
    "is not iterable",
    "Right-hand side of 'instanceof' is not an object",
    "queueMicrotask",
    "__core-js_shared__",
    "string-to-symbol-registry",
    "symbol-to-string-registry",
    "GetSetRecord",
    "toSetLike",
    r"firefox\/(\d+)",
    r"AppleWebKit\/(\d+)",
    "process.versions",
    "Deno.version",
    "nativeIsBuffer",
    "stubFalse",
    "cloneBuffer",
    "freeGlobal",
    "nodeUtil",
    "process.binding",
    "Buffer.isBuffer",
    "Buffer.from",
]

npm = {}
for folder in ("internals", "modules"):
    for p in (NM / "core-js3" / folder).glob("*.js"):
        npm[f"core-js3/{folder}/{p.name}"] = read(p)
lodash_dir = NM / "lodash"
for p in lodash_dir.glob("*.js"):
    if p.name in {"lodash.js", "lodash.min.js", "core.js", "core.min.js", "array.js"}:
        continue
    npm[f"lodash/{p.name}"] = read(p)

print("\n=== leftover uniqueness vs npm uniqueness ===")
for needle in needles:
    lh = [n for n, t in unpacked.items() if needle in t]
    nh = [n for n, t in npm.items() if needle in t]
    print(f"  nL={len(lh):2} nN={len(nh):2} {needle!r}")
    if len(lh) <= 4:
        print(f"     leftover={lh}")
    if len(nh) <= 4:
        print(f"     npm={nh}")
    if len(lh) == 1 and len(nh) == 1:
        name = lh[0]
        print(f"     >> 1:1 {name} live={name in live} other={name in remaining_other} already={mid(name) in already}")

print("\n=== 958/1056/1648 vs lodash ===")
for name in ("module-958.js", "module-1056.js", "module-1648.js"):
    t = unpacked.get(name, "")
    print(f"{name} bytes={len(t)} live={name in live}")
    print("  head:", t[:180].replace("\n", " | "))
    for needle in ("isBuffer", "nativeIsBuffer", "stubFalse", "cloneBuffer", "process.binding", "Buffer.from", "nodeUtil", "types"):
        print(f"  has {needle!r}: leftover={needle in t} lodash_files={[k for k,v in npm.items() if k.startswith('lodash/') and needle in v][:4]}")

# remaining_other unique 24+ quoted vs internals only
STR = re.compile(r"""['"]([^'"]{20,})['"]""")
leftover_str = {}
from collections import defaultdict
ls = defaultdict(set)
ns = defaultdict(set)
for name, t in unpacked.items():
    for s in STR.findall(t):
        ls[s].add(name)
for rel, t in npm.items():
    if not rel.startswith("core-js3/"):
        continue
    for s in STR.findall(t):
        ns[s].add(rel)
print("\n=== remaining_other unique quoted 20+ vs unique core-js3 ===")
ok = []
for name in sorted(remaining_other, key=lambda n: int(mid(n) or 0)):
    t = unpacked.get(name, "")
    hits = []
    for s in STR.findall(t):
        if ls[s] == {name} and len(ns.get(s) or []) == 1:
            hits.append((s[:80], next(iter(ns[s]))))
    if hits:
        npms = list(dict.fromkeys(h[1] for h in hits))
        if len(npms) == 1:
            ok.append({"module": name, "npm": npms[0], "via": hits[0][0]})
            print(f"  {name} -> {npms[0]} via={hits[0][0]!r}")
print("quoted 1:1 remaining_other", len(ok))
(APP / "PASS7_INTERNALS.json").write_text(json.dumps({"quoted": ok}, indent=2) + "\n")
