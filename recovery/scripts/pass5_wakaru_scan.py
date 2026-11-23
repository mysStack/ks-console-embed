#!/usr/bin/env python3
"""Scan LIVE leftover + promoted graph for remaining Wakaru issues.

- empty render() returning empty fragment with unused unique child import (Banner 1078)
- leftover numeric require()
- leftover require.context
- empty CSS placeholders still imported live
Do not invent orig paths.
"""
from __future__ import annotations

from collections import defaultdict
from pathlib import Path
import json
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
APP = ROOT / "recovery/react-app"
SRC = APP / "src"
UNPACKED = SRC / "unpacked"
LIVE = json.loads((APP / "LIVE_UNPACKED.json").read_text(encoding="utf-8"))
COREJS = (APP / "corejs-aliases.js").read_text(encoding="utf-8")
SHIMS = (APP / "corejs-shim-aliases.js").read_text(encoding="utf-8")
WEBPACK = (APP / "webpack.config.js").read_text(encoding="utf-8")
RECHARTS = (APP / "recharts-aliases.js").read_text(encoding="utf-8")
OUT = APP / "PASS5_WAKARU.json"

already = set(re.findall(r"module-(\d+)\.js", COREJS + "\n" + SHIMS + "\n" + WEBPACK + "\n" + RECHARTS))
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core)/'
)
SIDE = re.compile(r"""(?:^|\n)import\s+['"](?:unpacked/|\./)?(module-\d+\.js)['"]""")
DEFAULT_IMP = re.compile(
    r"""import\s+(\w+)\s+from\s+['"](?:unpacked/|\./)?(module-\d+\.js)['"]"""
)
NUM_REQ = re.compile(r"""require\(\s*(\d+)\s*\)""")
REQ_CTX = re.compile(r"""require\.context\s*\(""")
EMPTY_RENDER = re.compile(
    r"""(?:key:\s*["']render["']\s*,\s*value:\s*function(?:\s+\w+)?\s*\([^)]*\)\s*\{"""
    r"""|(?:^|\n)\s*(?:async\s+)?render\s*\([^)]*\)\s*\{)"""
    r"""\s*return\s+(?:null|undefined|<\s*div\s*/\s*>|<\s*>\s*<\s*/\s*>|<\s*>\s*</>\s*)\s*;?\s*\}""",
    re.S,
)
HAS_DEFAULT = re.compile(r"""export\s+default\b""")
CLASSISH = re.compile(r"""key:\s*["']render["']|export\s+default\s+class\b|React\.Component|PureComponent""")
JSX_USE = re.compile(r"""<\s*([A-Z][A-Za-z0-9]*)\b""")


def read(p: Path) -> str:
    return p.read_text(encoding="utf-8", errors="replace")


def mid(name: str) -> str:
    m = re.search(r"module-(\d+)\.js", name)
    return m.group(1) if m else ""


live = set(LIVE.get("leftover_live") or [])
texts = {}
for p in UNPACKED.glob("module-*.js"):
    texts[p.name] = read(p)
for folder in ("pages", "components", "stores", "actions", "utils", "configs", "core"):
    d = SRC / folder
    if not d.is_dir():
        continue
    for path in d.rglob("*.js"):
        texts[path.relative_to(SRC).as_posix()] = read(path)

numeric = []
ctx = []
empty_css = []
empty_render = []
banner_pattern = []

for name, text in texts.items():
    if name.startswith("named/"):
        continue
    is_live_unpacked = name in live or name.startswith("unpacked/") or name.startswith("module-")
    if NUM_REQ.search(text):
        ids = NUM_REQ.findall(text)
        numeric.append({"file": name, "ids": ids[:12], "n": len(ids), "live": name in live})
    if REQ_CTX.search(text):
        ctx.append({"file": name, "live": name in live})
    stripped = text.strip()
    if stripped in {"export default {};", "export default {}"} or (
        "export default {}" in stripped and len(stripped) < 80 and "import " not in stripped
    ):
        empty_css.append({"file": name, "live": name in live, "bytes": len(text)})
    if EMPTY_RENDER.search(text):
        sides = SIDE.findall(text)
        defaults = DEFAULT_IMP.findall(text)
        jsx = JSX_USE.findall(text)
        unused_default = []
        for var, mod in defaults:
            if var not in text.split("import", 1)[-1][0:0] and not re.search(rf"\b{re.escape(var)}\b", text.split("from", 1)[-1] if False else text):
                # count uses after imports
                rest = text
                uses = len(re.findall(rf"\b{re.escape(var)}\b", rest))
                # import line itself counts as 1
                if uses <= 1:
                    unused_default.append({"var": var, "mod": mod})
        unused_side = []
        for mod in sides:
            tgt = texts.get(mod) or texts.get("unpacked/" + mod) or ""
            if HAS_DEFAULT.search(tgt) and CLASSISH.search(tgt):
                unused_side.append(mod)
        rec = {
            "file": name,
            "live": name in live or (not name.startswith("module-") and "/" in name),
            "aliased": mid(name) in already,
            "side_component": unused_side,
            "unused_default": unused_default[:8],
            "jsx_tags": jsx[:12],
            "bytes": len(text),
        }
        empty_render.append(rec)
        if unused_side or unused_default:
            banner_pattern.append(rec)

print(json.dumps({
    "numeric_files": len(numeric),
    "numeric_live": [x for x in numeric if x["live"]][:20],
    "require_context": ctx,
    "empty_css": len(empty_css),
    "empty_css_live": [x["file"] for x in empty_css if x["live"]][:40],
    "empty_render": len(empty_render),
    "banner_pattern": banner_pattern[:30],
    "empty_render_sample": empty_render[:20],
}, indent=2), flush=True)
OUT.write_text(json.dumps({
    "numeric": numeric,
    "require_context": ctx,
    "empty_css": empty_css,
    "empty_render": empty_render,
    "banner_pattern": banner_pattern,
}, indent=2) + "\n", encoding="utf-8")
print("wrote", OUT, flush=True)
