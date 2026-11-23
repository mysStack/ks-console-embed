#!/usr/bin/env python3
"""CJS leftovers moved into src/chunks/ cannot use ESM re-export stubs.

require("unpacked/module-N.js") of `export { default } from "chunks/..."`
returns a namespace, so leftover `require(...)(fn)` throws
`__webpack_require__(...) is not a function` (login overlay, module-200).
"""
from pathlib import Path
import re

APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
CHUNKS = APP / "src/chunks"
UNPACKED = APP / "src/unpacked"
STUB_ESM = re.compile(r'^export \{ default \} from "')


def is_cjs(text: str) -> bool:
    if STUB_ESM.match(text):
        return False
    if "\nexport " in text or text.startswith("export "):
        return False
    return "require(" in text


def main():
    n = 0
    for chunk_file in CHUNKS.glob("*/module-*.js"):
        text = chunk_file.read_text(encoding="utf-8", errors="ignore")
        if not is_cjs(text):
            continue
        chunk = chunk_file.parent.name
        name = chunk_file.name
        spec = f"chunks/{chunk}/{name[:-3]}"
        stub = f'module.exports = require("{spec}.js");\n'
        dest = UNPACKED / name
        dest.write_text(stub, encoding="utf-8")
        n += 1
    print(f"cjs_stubs {n}")


if __name__ == "__main__":
    main()
