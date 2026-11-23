#!/usr/bin/env python3
"""Rewrite Wakaru webpack-context maps to lazy static requires."""
from __future__ import annotations

import re
from pathlib import Path

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")

NUMERIC_ENTRY = re.compile(r'"([^"]+)"\s*:\s*(\d+)')
EAGER_ENTRY = re.compile(r'"([^"]+)"\s*:\s*require\(("\./module-\d+\.js")\)')
LAZY_ENTRY = re.compile(r'"([^"]+)"\s*:\s*\(\)\s*=>\s*require\(("\./module-\d+\.js")\)')
RETURN_T = re.compile(
    r"(function\s+\w+\s*\(\s*\w+\s*\)\s*\{\s*const\s+(\w+)\s*=\s*\w+\(\s*\w+\s*\)\s*;\s*return\s+)\2(\s*;\s*\})"
)


def to_lazy(text: str) -> str:
    text = NUMERIC_ENTRY.sub(
        lambda m: f'"{m.group(1)}": () => require("./module-{m.group(2)}.js")',
        text,
    )
    text = EAGER_ENTRY.sub(
        lambda m: f'"{m.group(1)}": () => require({m.group(2)})',
        text,
    )
    text = RETURN_T.sub(r"\1\2()\3", text)
    return text


def main() -> None:
    changed = []
    for name in ("module-2032.js", "module-661.js", "module-3650.js"):
        path = UNPACKED / name
        original = path.read_text(encoding="utf-8")
        updated = to_lazy(original)
        if updated != original:
            path.write_text(updated, encoding="utf-8")
            changed.append(name)
    print({"changed": changed})


if __name__ == "__main__":
    main()
