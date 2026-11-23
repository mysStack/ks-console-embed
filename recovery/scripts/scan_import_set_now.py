#!/usr/bin/env python3
"""Import-SET 1:1 after dropping babel-helpers. Dest-prefix imports only. No pin."""
from collections import defaultdict
from pathlib import Path
import json
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
APP = ROOT / "recovery/react-app"
SRC = APP / "src"
UNPACKED = SRC / "unpacked"
ORIG = ROOT / "src"
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp)/'
)
IMP = re.compile(r"""(?:from|require\()\s*['"]([^'"]+)['"]""")
PREFIX = (
    "pages/",
    "components/",
    "stores/",
    "actions/",
    "utils/",
    "configs/",
    "core/",
    "dmp/",
)
DEST_PREFIXES = (
    "pages",
    "components",
    "stores",
    "actions",
    "utils",
    "configs",
    "core",
    "dmp",
)


def aliases(key: str):
    out = {key}
    if key.endswith("/index.js"):
        out.add(key[: -len("/index.js")] + ".js")
    elif key.endswith(".js"):
        out.add(key[:-3] + "/index.js")
    return out


def dest_keys():
    keys = set()
    for prefix in DEST_PREFIXES:
        root = SRC / prefix
        if not root.is_dir():
            continue
        for p in root.rglob("*.js"):
            key = f"{prefix}/{p.relative_to(root).as_posix()}"
            keys.update(aliases(key))
    return keys


def norm_imp(spec: str) -> str | None:
    spec = spec.split("?")[0]
    if spec.startswith("./") or spec.startswith("../"):
        return None
    if spec.startswith("unpacked/"):
        return None
    if not spec.startswith(PREFIX):
        return None
    if spec.startswith("utils/babel-helpers/"):
        return None
    if spec.endswith(".scss") or spec.endswith(".css"):
        return None
    if not spec.endswith(".js"):
        spec = spec + ".js"
    return spec


def main():
    dest = dest_keys()
    leftover_sets = {}
    for p in UNPACKED.glob("module-*.js"):
        text = p.read_text(encoding="utf-8", errors="ignore")
        if STUB_RE.match(text) or text.startswith('export { default } from "chunks/'):
            continue
        s = {norm_imp(x) for x in IMP.findall(text)}
        s.discard(None)
        if len(s) >= 2:
            leftover_sets[p.name] = s
    orig_sets = {}
    for p in ORIG.rglob("*"):
        if p.suffix not in {".js", ".jsx"}:
            continue
        key = re.sub(r"\.jsx$", ".js", p.relative_to(ORIG).as_posix())
        if any(a in dest for a in aliases(key)):
            continue
        text = p.read_text(encoding="utf-8", errors="ignore")
        s = {norm_imp(x) for x in IMP.findall(text)}
        s.discard(None)
        if len(s) >= 2:
            orig_sets[key] = s
    leftover_by = defaultdict(list)
    for name, s in leftover_sets.items():
        leftover_by[frozenset(s)].append(name)
    orig_by = defaultdict(list)
    for key, s in orig_sets.items():
        orig_by[frozenset(s)].append(key)
    pins = []
    for s, leftovers in leftover_by.items():
        origs = orig_by.get(s) or []
        if len(leftovers) == 1 and len(origs) == 1:
            pins.append(
                {
                    "module": leftovers[0],
                    "orig": origs[0],
                    "set_size": len(s),
                    "named": sorted(s),
                }
            )
    out = {
        "leftover_sets": len(leftover_sets),
        "orig_sets": len(orig_sets),
        "pins": pins,
        "count": len(pins),
    }
    (APP / "IMPORT_SET_NOW.json").write_text(json.dumps(out, indent=2) + "\n")
    print(json.dumps({"leftover_sets": len(leftover_sets), "orig_sets": len(orig_sets), "pins": len(pins)}))
    for p in pins:
        print(p["module"], "->", p["orig"], "set", p["set_size"], p["named"][:8])


if __name__ == "__main__":
    main()
