#!/usr/bin/env python3
from pathlib import Path

p = Path("/tmp/kse-v3-webpack-8099.log")
if not p.exists():
    print("NO_LOG")
    raise SystemExit(0)
text = p.read_text(errors="replace")
lines = text.splitlines()
print("log_lines", len(lines))
print("last80:")
print("\n".join(lines[-80:]))
print("---markers---")
for i, line in enumerate(lines):
    if any(k in line for k in ("ERROR in", "WARNING in", "Compiled", "Failed to compile", "webpack compiled")):
        print(f"{i}:{line}")
