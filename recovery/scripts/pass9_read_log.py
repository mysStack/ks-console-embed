#!/usr/bin/env python3
from pathlib import Path
import re

p = Path("/tmp/kse-v3-webpack-8099.log")
t = p.read_text(encoding="utf-8", errors="replace") if p.is_file() else ""
print("bytes", p.stat().st_size if p.is_file() else 0)
for m in re.finditer(r".*(compiled with.*|ERROR in .*|WARNING in DefinePlugin.*)", t):
    print(m.group(0)[-200:])
print("compiled_2_warnings", "compiled with 2 warnings" in t)
print("compiled_error", bool(re.search(r"compiled with [1-9]\d* error", t)))
print("---tail---")
print(t[-1500:])
