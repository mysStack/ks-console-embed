#!/usr/bin/env python3
from pathlib import Path
import json
import re
import shutil

APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
UNPACKED = APP / "src/unpacked"
SRC = APP / "src"
REL = re.compile(r"""(['"])\./module-(\d+)\.js\1""")
PINS = [
    {
        "module": "module-3825.js",
        "orig": "core/containers/Base/Detail/BaseInfo/index.js",
        "kind": "data_test",
        "lit": "detail-labels",
    },
    {
        "module": "module-3826.js",
        "orig": "core/containers/Base/Detail/BaseInfo/BtnGroup/index.js",
        "kind": "unique_kid",
        "lit": "detail-more",
    },
    {
        "module": "module-3828.js",
        "orig": "core/containers/Base/Detail/BaseInfo/Label/index.js",
        "kind": "unique_kid",
        "lit": "label.name+value",
    },
    {
        "module": "module-1217.js",
        "orig": "core/containers/Base/Detail/BaseInfo/Attributes/index.js",
        "kind": "unique_kid",
        "lit": "Attributes.Item",
    },
    {
        "module": "module-3830.js",
        "orig": "core/containers/Base/Detail/BaseInfo/Attributes/attributes.js",
        "kind": "unique_kid",
        "lit": "styles.attributes",
    },
    {
        "module": "module-3831.js",
        "orig": "core/containers/Base/Detail/BaseInfo/Attributes/item.js",
        "kind": "unique_kid",
        "lit": "tooltips",
    },
]


def main():
    applied, skipped = [], []
    for pin in PINS:
        src = UNPACKED / pin["module"]
        dest = SRC / pin["orig"]
        if dest.exists():
            skipped.append({**pin, "reason": "dest exists"})
            continue
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src, dest)
        text = dest.read_text(encoding="utf-8")
        dest.write_text(REL.sub(r'"unpacked/module-\2.js"', text), encoding="utf-8")
        spec = pin["orig"][:-3]
        src.write_text(
            f'export {{ default }} from "{spec}";\nexport * from "{spec}";\n',
            encoding="utf-8",
        )
        applied.append(pin)
    out = {"applied": applied, "skipped": skipped, "count": len(applied)}
    (APP / "PASS21_APPLY.json").write_text(json.dumps(out, indent=2) + "\n")
    print(json.dumps({"count": out["count"], "skipped": len(skipped)}, indent=2))
    for p in applied:
        print(p["module"], "->", p["orig"])


if __name__ == "__main__":
    main()
