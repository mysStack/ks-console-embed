#!/usr/bin/env python3
"""require(aliased).default(  — leftover 704/706 pattern."""
from pathlib import Path
import re

APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
SRC = APP / "src"
COREJS = (APP / "corejs-aliases.js").read_text()
SHIMS = (APP / "corejs-shim-aliases.js").read_text()
WEBPACK = (APP / "webpack.config.js").read_text()
RECHARTS = (APP / "recharts-aliases.js").read_text()
already = set(re.findall(r"module-(\d+)\.js", COREJS + SHIMS + WEBPACK + RECHARTS))
shimmed = set(re.findall(r"module-(\d+)\.js", SHIMS))
CALL = re.compile(
    r"""require\(\s*['"](?:unpacked/|\./)?(module-\d+\.js)['"]\s*\)\s*\.default\s*\("""
)

print("already", len(already), "shimmed", len(shimmed))
for folder in ("unpacked", "pages", "components", "stores", "actions", "utils", "configs", "core"):
    d = SRC / folder
    if not d.is_dir():
        continue
    for p in d.rglob("*.js"):
        if "named" in p.parts:
            continue
        t = p.read_text(encoding="utf-8", errors="replace")
        for m in CALL.finditer(t):
            n = re.search(r"\d+", m.group(1)).group()
            if n in already:
                rel = p.relative_to(SRC).as_posix()
                print(f"CALL {rel} require({m.group(1)}).default( shimmed={n in shimmed}")
