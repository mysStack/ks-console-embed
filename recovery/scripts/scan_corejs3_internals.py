#!/usr/bin/env python3
"""Match LIVE leftover unique error/lits to core-js@3.37 internals.

Do not alias core-js@2 / library (recharts). Require 1:1 among ALL unpacked
and 1:1 among core-js3 files. Skip dual v2+v3 error strings unless the leftover
is clearly v3 (imports module-280 / zloirock 3.37.0 graph).
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
COREJS_ALIASES = APP / "corejs-aliases.js"

STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core)/'
)
ERR_RE = re.compile(
    r"""throw new (?:TypeError|ReferenceError|RangeError|Error)\((['"])(.*?)\1\)"""
)
STR_RE = re.compile(r"""['"]([^'"]{12,})['"]""")

already = set()
if COREJS_ALIASES.exists():
    already.update(re.findall(r"module-(\d+)\.js", COREJS_ALIASES.read_text(encoding="utf-8")))

live = set(LIVE["leftover_live"])
print("live", len(live), "already_aliased", len(already))

unpacked = {}
for p in UNPACKED.glob("module-*.js"):
    t = p.read_text(encoding="utf-8", errors="replace")
    if STUB_RE.search(t[:400]):
        continue
    unpacked[p.name] = t
print("real_unpacked", len(unpacked))


def mid(name: str) -> str:
    m = re.search(r"module-(\d+)\.js", name)
    return m.group(1) if m else ""


# v3 graph: leftover that mentions zloirock 3.37.0 or imports module-280
v3_shared = [n for n, t in unpacked.items() if 'version: "3.37.0"' in t and "zloirock" in t]
print("v3_version_mods", v3_shared)
v3_needles = set(v3_shared)
# also anyone importing those
imp_re = re.compile(r"""unpacked/(module-\d+\.js)""")
importers = defaultdict(list)
children = {}
for n, t in unpacked.items():
    kids = imp_re.findall(t)
    children[n] = kids
    for k in kids:
        importers[k].append(n)

# walk from v3 version module through leftover imports? Better: leftover is v3
# if it imports module-280 or is imported only in a tree that includes 280.
v3_tree = set()
stack = list(v3_shared)
while stack:
    cur = stack.pop()
    if cur in v3_tree:
        continue
    v3_tree.add(cur)
    for k in children.get(cur, []):
        stack.append(k)
    for parent in importers.get(cur, []):
        stack.append(parent)
print("v3_tree", len(v3_tree), "live_in_v3_tree", len(v3_tree & live))

cj3 = NM / "core-js3"
cj2 = NM / "core-js"
if not cj3.is_dir():
    raise SystemExit("no core-js3")

cj3_files = {}
for p in list(cj3.rglob("*.js")):
    rel = p.relative_to(cj3).as_posix()
    if rel.startswith("modules/") or rel.startswith("internals/") or rel.startswith("es/"):
        cj3_files[rel] = p.read_text(encoding="utf-8", errors="replace")
print("cj3_files", len(cj3_files))

cj2_files = {}
if cj2.is_dir():
    for p in list(cj2.rglob("*.js")):
        rel = p.relative_to(cj2).as_posix()
        cj2_files[rel] = p.read_text(encoding="utf-8", errors="replace")
print("cj2_files", len(cj2_files))

# unique error -> leftover
err_to_left = defaultdict(set)
for n, t in unpacked.items():
    for m in ERR_RE.finditer(t):
        err_to_left[m.group(2)].add(n)

err_to_cj3 = defaultdict(set)
for rel, t in cj3_files.items():
    for m in ERR_RE.finditer(t):
        err_to_cj3[m.group(2)].add(rel)

err_to_cj2 = defaultdict(set)
for rel, t in cj2_files.items():
    for m in ERR_RE.finditer(t):
        err_to_cj2[m.group(2)].add(rel)

pins = []
skipped = []
print("\n=== unique error 1:1 leftover <-> core-js3 ===")
for msg, lefts in sorted(err_to_left.items(), key=lambda kv: kv[0]):
    if len(lefts) != 1:
        continue
    mod = next(iter(lefts))
    if mod not in live or mid(mod) in already:
        continue
    c3 = err_to_cj3.get(msg, set())
    c2 = err_to_cj2.get(msg, set())
    rec = {
        "module": mod,
        "error": msg,
        "corejs3": sorted(c3),
        "corejs2": sorted(c2)[:6],
        "in_v3_tree": mod in v3_tree,
        "bytes": len(unpacked[mod]),
    }
    if len(c3) != 1:
        rec["reason"] = f"cj3_hits={len(c3)}"
        skipped.append(rec)
        print(f"  SKIP {mod} {msg!r} cj3={sorted(c3)[:4]} cj2={sorted(c2)[:2]}")
        continue
    target = next(iter(c3))
    # skip library / es6 v2 paths even if we are not aliasing them
    if target.startswith("library/") or "/library/" in target:
        rec["reason"] = "library"
        skipped.append(rec)
        continue
    # dual: only allow if leftover is in v3 tree AND we alias to core-js3 not v2
    if c2 and mod not in v3_tree:
        rec["reason"] = "v2_dual_not_in_v3_tree"
        skipped.append(rec)
        print(f"  SKIP dual {mod} {msg!r} -> {target} v2={sorted(c2)[:2]}")
        continue
    spec = "core-js3/" + target
    npm = NM / spec
    if not npm.is_file():
        rec["reason"] = "missing_npm"
        skipped.append(rec)
        continue
    rec["corejs"] = spec
    rec["reason"] = "unique_error"
    pins.append(rec)
    print(f"  PIN {mod} -> {spec} {msg!r} v3_tree={mod in v3_tree} v2_also={bool(c2)}")

# unique long literals (not errors) as backup, only internals
print("\n=== unique long lits leftover 1:1 vs cj3 internals ===")
lit_left = defaultdict(set)
for n, t in unpacked.items():
    if n not in live or mid(n) in already:
        continue
    if len(t) > 8000:
        continue
    for s in STR_RE.findall(t):
        if s.startswith("unpacked/") or s.startswith("module-"):
            continue
        lit_left[s].add(n)

lit_cj3 = defaultdict(set)
for rel, t in cj3_files.items():
    if not rel.startswith("internals/"):
        continue
    for s in STR_RE.findall(t):
        lit_cj3[s].add(rel)

lit_pins = 0
for s, lefts in lit_left.items():
    if len(lefts) != 1:
        continue
    mod = next(iter(lefts))
    if any(p["module"] == mod for p in pins):
        continue
    # literal must be unique among ALL unpacked
    owners = [n for n, t in unpacked.items() if s in t]
    if len(owners) != 1:
        continue
    c3 = lit_cj3.get(s, set())
    if len(c3) != 1:
        continue
    target = next(iter(c3))
    spec = "core-js3/" + target
    if not (NM / spec).is_file():
        continue
    # skip if this lit is also in many cj2 files
    c2hits = [rel for rel, t in cj2_files.items() if s in t]
    if c2hits and mod not in v3_tree:
        continue
    pins.append({
        "module": mod,
        "corejs": spec,
        "via": s[:80],
        "reason": "unique_lit_internal",
        "in_v3_tree": mod in v3_tree,
        "corejs2": c2hits[:4],
        "bytes": len(unpacked[mod]),
    })
    lit_pins += 1
    print(f"  PIN {mod} -> {spec} via={s[:60]!r} v3={mod in v3_tree}")
print("lit_pins_added", lit_pins)

# 1:1 filter by module and by corejs target
by_mod = defaultdict(list)
by_spec = defaultdict(list)
for p in pins:
    by_mod[p["module"]].append(p)
    by_spec[p["corejs"]].append(p)
final = []
for p in pins:
    if len(by_mod[p["module"]]) != 1:
        skipped.append({**p, "reason": "multi_pin_module"})
        continue
    if len(by_spec[p["corejs"]]) != 1:
        skipped.append({**p, "reason": "multi_pin_spec"})
        print(f"  SKIP multi-spec {p['corejs']} {by_spec[p['corejs']]}")
        continue
    final.append(p)

print("\nfinal_pins", len(final), "skipped", len(skipped))
out = {
    "v3_version_mods": v3_shared,
    "v3_tree": len(v3_tree),
    "pins": final,
    "skipped_sample": skipped[:40],
}
(APP / "COREJS3_INTERNAL_PINS.json").write_text(json.dumps(out, indent=2) + "\n", encoding="utf-8")
print(json.dumps({"pins": len(final), "skipped": len(skipped)}, indent=2))
for p in final:
    print(f"  {p['module']} -> {p['corejs']} [{p['reason']}]")
