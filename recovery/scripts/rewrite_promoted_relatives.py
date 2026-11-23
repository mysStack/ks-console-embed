#!/usr/bin/env python3
from pathlib import Path
import json
import re

APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
SRC = APP / "src"
APPLY = json.loads((APP / "UNPACKED_BUSINESS_APPLY.json").read_text())
REL = re.compile(r"""(['"])\./module-(\d+)\.js\1""")


def main():
    n = 0
    for pin in APPLY["applied"]:
        dest = SRC / pin["orig"]
        if not dest.is_file():
            continue
        text = dest.read_text(encoding="utf-8")
        new = REL.sub(r'"unpacked/module-\2.js"', text)
        if new != text:
            dest.write_text(new, encoding="utf-8")
            n += 1
    print(f"rewrote {n}")


if __name__ == "__main__":
    main()
