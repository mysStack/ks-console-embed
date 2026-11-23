#!/usr/bin/env python3
from pathlib import Path
import re

SRC = Path("/home/bruce/code/ks-develop/kse-console-v3/src")
INTERNAL = (
    "components", "utils", "stores", "pages", "core", "configs",
    "hoc", "actions", "scss", "assets",
)
pkgs = set()
for path in SRC.rglob("*"):
    if path.suffix not in {".js", ".jsx"}:
        continue
    text = path.read_text(encoding="utf-8", errors="ignore")
    for match in re.finditer(r"""(?:from|require\()\s*['\"]([^'\"]+)['\"]""", text):
        spec = match.group(1)
        if spec.startswith(".") or spec.startswith("/"):
            continue
        root = spec.split("/")[0]
        if root in INTERNAL:
            continue
        pkgs.add(spec)
print("\n".join(sorted(pkgs)))
