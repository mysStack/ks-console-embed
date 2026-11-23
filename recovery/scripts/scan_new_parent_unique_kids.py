#!/usr/bin/env python3
"""Unique leftover child of a newly promoted parent vs orig unique unpromoted import."""
from collections import defaultdict
from pathlib import Path
import json
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
APP = ROOT / "recovery/react-app"
SRC = APP / "src"
ORIG = ROOT / "src"
UNPACKED = SRC / "unpacked"
APPLY = json.loads((APP / "UNPACKED_BUSINESS_APPLY.json").read_text())
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp)/'
)
IMP_UNP = re.compile(r"""unpacked/module-(\d+)\.js""")
IMP_ORIG = re.compile(r"""from ['"]([^'"]+)['"]""")
PREFIXES = (
    "pages",
    "components",
    "stores",
    "actions",
    "utils",
    "configs",
    "core",
    "dmp",
)


def is_stub(name: str) -> bool:
    p = UNPACKED / f"module-{name}.js" if not name.endswith(".js") else UNPACKED / name
    if not p.is_file():
        return True
    return bool(STUB_RE.match(p.read_text(encoding="utf-8", errors="ignore")[:200]))


def orig_imports(orig_key: str):
    base = orig_key[:-3] if orig_key.endswith(".js") else orig_key
    candidates = [
        ORIG / orig_key,
        ORIG / orig_key.replace(".js", ".jsx"),
        ORIG / (base + ".jsx"),
        ORIG / (base + "/index.jsx"),
        ORIG / (base + "/index.js"),
    ]
    path = next((p for p in candidates if p.is_file()), None)
    if not path:
        return []
    text = path.read_text(encoding="utf-8", errors="ignore")
    out = []
    for spec in IMP_ORIG.findall(text):
        if spec.startswith(".") or spec.startswith("lodash") or spec.startswith("react"):
            continue
        if not spec.startswith(PREFIXES):
            continue
        key = spec if spec.endswith(".js") else spec + ".js"
        if (SRC / key).exists() or (SRC / spec / "index.js").exists():
            continue
        out.append(key)
    return out


def main():
    parent_to_kids = defaultdict(list)
    kid_to_parents = defaultdict(list)
    for pin in APPLY["applied"]:
        dest = SRC / pin["orig"]
        if not dest.is_file():
            continue
        text = dest.read_text(encoding="utf-8", errors="ignore")
        for mid in set(IMP_UNP.findall(text)):
            if is_stub(f"module-{mid}.js"):
                continue
            parent_to_kids[pin["orig"]].append(mid)
            kid_to_parents[mid].append(pin["orig"])
    pins = []
    for orig, kids in parent_to_kids.items():
        unique_kids = [k for k in kids if len(kid_to_parents[k]) == 1]
        oimps = orig_imports(orig)
        if len(unique_kids) == 1 and len(oimps) == 1:
            pins.append(
                {
                    "parent": orig,
                    "module": f"module-{unique_kids[0]}.js",
                    "orig": oimps[0],
                }
            )
    out = {
        "parents": len(APPLY["applied"]),
        "pins": pins,
        "count": len(pins),
        "samples": {
            orig: {
                "leftover_kids": parent_to_kids[orig],
                "orig_unpromoted_imports": orig_imports(orig),
            }
            for orig in list(parent_to_kids)[:8]
        },
    }
    (APP / "NEW_PARENT_KIDS.json").write_text(json.dumps(out, indent=2) + "\n")
    print(json.dumps({"parents": out["parents"], "count": out["count"], "pins": pins}, indent=2))


if __name__ == "__main__":
    main()
