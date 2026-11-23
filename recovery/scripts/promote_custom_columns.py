#!/usr/bin/env python3
from pathlib import Path
import json
import re
import shutil

APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
UNPACKED = APP / "src/unpacked"
SRC = APP / "src"
NAME = "module-1046.js"
ORIG = "components/Tables/Base/CustomColumns/index.js"
REL = re.compile(r"""(['"])\./module-(\d+)\.js\1""")


def main():
    src = UNPACKED / NAME
    dest = SRC / ORIG
    if dest.exists():
        print("dest exists", dest)
        return
    dest.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(src, dest)
    text = dest.read_text(encoding="utf-8")
    dest.write_text(REL.sub(r'"unpacked/module-\2.js"', text), encoding="utf-8")
    spec = ORIG[:-3]
    src.write_text(
        f'export {{ default }} from "{spec}";\nexport * from "{spec}";\n',
        encoding="utf-8",
    )
    out = {
        "applied": [{"module": NAME, "orig": ORIG, "kind": "long", "lit": "currentTarget.dataset.value"}],
        "skipped": [{"module": "module-2094.js", "orig": "components/Forms/AlertingPolicy/AlertingRules/AddRuleForm/index.js", "reason": "false pin; leftover is workload template form not AddRuleForm wrapper"}],
    }
    (APP / "PASS14_APPLY.json").write_text(json.dumps(out, indent=2) + "\n")
    print("promoted", NAME, "->", ORIG)


if __name__ == "__main__":
    main()
