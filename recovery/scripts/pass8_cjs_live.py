#!/usr/bin/env python3
"""Exhaustive LIVE leftover require(aliased).default / import X; X.default hunt."""
from __future__ import annotations

from collections import defaultdict
from pathlib import Path
import json
import re

APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
SRC = APP / "src"
LIVE = json.loads((APP / "LIVE_UNPACKED.json").read_text())
COREJS = (APP / "corejs-aliases.js").read_text()
SHIMS = (APP / "corejs-shim-aliases.js").read_text()
WEBPACK = (APP / "webpack.config.js").read_text()
RECHARTS = (APP / "recharts-aliases.js").read_text()

already_ids = set(re.findall(r"module-(\d+)\.js", COREJS + SHIMS + WEBPACK + RECHARTS))
shim_ids = set(re.findall(r"module-(\d+)\.js", SHIMS))
webpack_shim_ids = set(
    re.findall(
        r'src/unpacked/module-(\d+)\.js"\)\]: path\.resolve\(\s*__dirname,\s*"src/shims/',
        WEBPACK,
    )
)
direct_corejs = dict(
    re.findall(
        r'src/unpacked/(module-\d+\.js)"\)\]: require\.resolve\("([^"]+)"\)',
        COREJS,
    )
)
live = set(LIVE.get("leftover_live") or [])

REQ_DEF = re.compile(
    r"""require\(\s*['"](?:unpacked/|\./)?(module-\d+\.js)['"]\s*\)\s*\.default"""
)
REQ_DEF_CALL = re.compile(
    r"""require\(\s*['"](?:unpacked/|\./)?(module-\d+\.js)['"]\s*\)\s*\.default\s*\("""
)
IMP_DEF = re.compile(
    r"""import\s+(\w+)\s+from\s+['"](?:unpacked/|\./)?(module-\d+\.js)['"]"""
)


def mid(name: str) -> str:
    m = re.search(r"module-(\d+)\.js", name)
    return m.group(1) if m else ""


def walk_src():
    for folder in ("unpacked", "pages", "components", "stores", "actions", "utils", "configs", "core"):
        d = SRC / folder
        if not d.is_dir():
            continue
        for p in d.rglob("*.js"):
            if "named" in p.parts:
                continue
            yield p


hits = defaultdict(list)
call_hits = defaultdict(list)
import_default_hits = defaultdict(list)

for path in walk_src():
    text = path.read_text(encoding="utf-8", errors="replace")
    rel = path.relative_to(SRC).as_posix()
    is_live_leftover = path.name in live
    is_promoted = rel.split("/")[0] in {
        "pages",
        "components",
        "stores",
        "actions",
        "utils",
        "configs",
        "core",
    }
    if not is_live_leftover and not is_promoted:
        continue
    for mod in REQ_DEF.findall(text):
        n = mid(mod)
        if n not in already_ids:
            continue
        props = []
        for mm in re.finditer(
            rf"""require\(\s*['"](?:unpacked/|\./)?{re.escape(mod)}['"]\s*\)\s*\.default(?:\.(\w+)|\s*\()?""",
            text,
        ):
            if mm.group(1):
                props.append(mm.group(1))
        call = bool(REQ_DEF_CALL.search(text) and mod in REQ_DEF_CALL.findall(text))
        hits[mod].append(
            {
                "file": rel,
                "live_leftover": is_live_leftover,
                "promoted": is_promoted,
                "props": props[:8],
                "call": call,
            }
        )
    for mod in REQ_DEF_CALL.findall(text):
        n = mid(mod)
        if n not in already_ids:
            continue
        call_hits[mod].append(rel)
    imported = {var: mod for var, mod in IMP_DEF.findall(text)}
    for var, mod in imported.items():
        n = mid(mod)
        if n not in already_ids:
            continue
        used = re.findall(rf"""\b{re.escape(var)}\.default(?:\.(\w+)|\s*\()?""", text)
        if used:
            import_default_hits[mod].append({"file": rel, "var": var, "used": used[:8]})

print("=== LIVE leftover + promoted require(aliased).default ===")
need_wrap = []
for mod, recs in sorted(hits.items(), key=lambda kv: int(mid(kv[0]) or 0)):
    n = mid(mod)
    live_recs = [r for r in recs if r["live_leftover"] or r["promoted"]]
    if not live_recs:
        continue
    already_wrap = n in shim_ids or n in webpack_shim_ids
    target = direct_corejs.get(mod, "")
    live_reader = any(r["live_leftover"] for r in live_recs)
    calls = any(r["call"] for r in live_recs)
    print(
        f"{mod} wrap={already_wrap} live_reader={live_reader} call={calls} "
        f"target={target} readers={len(live_recs)}"
    )
    for r in live_recs[:5]:
        print("   ", r["file"], "leftover" if r["live_leftover"] else "promoted", r["props"], "call" if r["call"] else "")
    if live_reader and not already_wrap:
        need_wrap.append({"module": mod, "target": target, "call": calls, "readers": live_recs[:8]})

print("\n=== require(aliased).default( CALLS ===")
for mod, files in sorted(call_hits.items(), key=lambda kv: int(mid(kv[0]) or 0)):
    n = mid(mod)
    print(f"  {mod} wrap={n in shim_ids or n in webpack_shim_ids} files={files[:6]}")

print("\n=== import X from aliased; X.default ===")
for mod, recs in sorted(import_default_hits.items(), key=lambda kv: int(mid(kv[0]) or 0)):
    n = mid(mod)
    print(f"  {mod} wrap={n in shim_ids or n in webpack_shim_ids} {recs[:4]}")

print("\nneed_wrap_live_unshimmed", len(need_wrap))
OUT = APP / "PASS8_CJS.json"
OUT.write_text(
    json.dumps(
        {
            "hits": {k: v for k, v in hits.items()},
            "need_wrap": need_wrap,
            "calls": {k: v for k, v in call_hits.items()},
            "import_default": {k: v for k, v in import_default_hits.items()},
            "already": len(already_ids),
            "shim_ids": sorted(shim_ids, key=int),
            "webpack_shim_ids": sorted(webpack_shim_ids, key=int),
        },
        indent=2,
    )
    + "\n"
)
print("wrote", OUT)
