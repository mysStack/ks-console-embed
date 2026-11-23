#!/usr/bin/env python3
from pathlib import Path
p = Path("/tmp/kse-v3-webpack-8099.log")
if not p.exists():
    print("NO_LOG")
else:
    text = p.read_text(errors="replace")
    print("bytes", len(text), "lines", text.count("\n"))
    print(text[-2500:])
