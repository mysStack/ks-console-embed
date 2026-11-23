#!/usr/bin/env python3
"""Move leftover CJS/ESM files back to unpacked/. Keep unique orig promotions and lodash Webcrack files.

The bulk ESM re-export stubs broke login: webpack require of an ESM stub is not a
function, and Cascader 1489↔2102 cycles read undefined .default.
"""
from pathlib import Path
import re

APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
CHUNKS = APP / "src/chunks"
UNPACKED = APP / "src/unpacked"
KEEP_VENDOR = {
    "lodash-isBuffer.js",
    "lodash-nodeUtil.js",
    "lodash-cloneBuffer.js",
}
PROMOTED_PREFIX = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp)/'
)
UNPACKED_IMP = re.compile(r'(from |import |require\()(["\'])unpacked/module-(\d+)\.js\2')


def restore_relatives(text: str) -> str:
    def repl(m):
        prefix, q, mid = m.group(1), m.group(2), m.group(3)
        return f"{prefix}{q}./module-{mid}.js{q}"

    return UNPACKED_IMP.sub(repl, text)


def main():
    restored = 0
    kept_stub = 0
    kept_vendor = 0
    for path in CHUNKS.glob("*/module-*.js"):
        text = path.read_text(encoding="utf-8", errors="ignore")
        if PROMOTED_PREFIX.match(text):
            kept_stub += 1
            continue
        dest = UNPACKED / path.name
        dest.write_text(restore_relatives(text), encoding="utf-8")
        path.unlink()
        restored += 1
    for extra in (CHUNKS / "vendor").glob("lodash-*.js"):
        if extra.name in KEEP_VENDOR:
            kept_vendor += 1
    # drop empty chunk dirs except vendor
    for d in list(CHUNKS.iterdir()):
        if d.is_dir() and d.name != "vendor" and not any(d.iterdir()):
            d.rmdir()
    print(
        f"restored {restored} kept_promoted_stubs {kept_stub} kept_vendor {kept_vendor}"
    )


if __name__ == "__main__":
    main()
