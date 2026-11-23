#!/usr/bin/env python3
from pathlib import Path
import re

APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
a = (APP / "corejs-aliases.js").read_text()
s = (APP / "corejs-shim-aliases.js").read_text()
print("aliases", len(re.findall(r"module-\d+\.js", a)))
print("shims", len(re.findall(r"module-\d+\.js", s)))
print("117 in aliases", "module-117.js" in a)
print("117 in shims", "module-117.js" in s)
print("146 in aliases", "module-146.js" in a)
print("505 in aliases", "module-505.js" in a)
print("487 in aliases", "module-487.js" in a)
print("423 in aliases", "module-423.js" in a)
