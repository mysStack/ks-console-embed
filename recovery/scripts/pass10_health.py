#!/usr/bin/env python3
import subprocess
from pathlib import Path

out = subprocess.check_output(["ss", "-ltnp"], text=True, errors="replace")
print("=== 8099 ===")
for line in out.splitlines():
    if ":8099" in line:
        print(line)
ps = subprocess.check_output(["ps", "-ef"], text=True, errors="replace")
print("=== webpack procs ===")
n = 0
for line in ps.splitlines():
    if "webpack" in line and "grep" not in line:
        print(line)
        n += 1
        if n >= 8:
            break
