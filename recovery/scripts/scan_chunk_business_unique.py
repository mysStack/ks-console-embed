#!/usr/bin/env python3
"""Unique action/route/store pins among leftover files already in src/chunks/{actions,main,console}."""
from collections import defaultdict
from pathlib import Path
import json
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
APP = ROOT / "recovery/react-app"
CHUNKS = APP / "src/chunks"
ORIG = ROOT / "src"
PROMOTED_ROOTS = [
    APP / "src/pages",
    APP / "src/components",
    APP / "src/stores",
    APP / "src/actions",
    APP / "src/utils",
    APP / "src/configs",
    APP / "src/core",
    APP / "src/dmp",
]
BUSINESS_CHUNKS = ("actions", "main", "console")
SKIP_CHUNKS = {"vendor", "common"}  # common is mixed helpers; vendor is not business source

ACTION_KEY = re.compile(
    r"""['"]([a-z][a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+){1,4})['"]\s*:"""
)
MOD_EQ = re.compile(r"""(?:module|resourceName)\s*[:=]\s*['"]([^'"]+)['"]""")
T_PAT = re.compile(r"""(?<![A-Za-z0-9_])t\(\s*['"]([^'"]{8,})['"]""")
API_PAT = re.compile(r"""['"]((?:/kapis|/apis)[^'"]{10,})['"]""")
STUB_RE = re.compile(r'^export \{ default \} from "')

SKIP_FRAGS = (
    "WHIZARD", "Cards/Banner", "Slider.js", "Cascader", "ContainerLog",
    "CREATE_DOMAIN", "PhysicalResource", "VirtualResource",
)


def rel_posix(path: Path, root: Path) -> str:
    return path.relative_to(root).as_posix()


def already_promoted() -> set[str]:
    keys = set()
    for root in PROMOTED_ROOTS:
        if not root.is_dir():
            continue
        prefix = root.name
        for p in root.rglob("*.js"):
            keys.add(f"{prefix}/{rel_posix(p, root)}")
    return keys


def leftover_files():
    files = []
    for chunk in BUSINESS_CHUNKS:
        d = CHUNKS / chunk
        if not d.is_dir():
            continue
        for p in d.glob("module-*.js"):
            text = p.read_text(encoding="utf-8", errors="ignore")
            if STUB_RE.match(text):
                continue
            files.append((chunk, p, text))
    return files


def orig_files(promoted: set[str]):
    out = []
    for p in ORIG.rglob("*"):
        if p.suffix not in {".js", ".jsx"}:
            continue
        key = rel_posix(p, ORIG)
        key_as_js = re.sub(r"\.jsx$", ".js", key)
        if key_as_js in promoted or key in promoted:
            continue
        if any(s in key for s in SKIP_FRAGS):
            continue
        out.append((key_as_js, p.read_text(encoding="utf-8", errors="ignore")))
    return out


def index_lits(items, extract):
    m = defaultdict(list)
    for ident, text in items:
        for lit in set(extract(text)):
            m[lit].append(ident)
    return m


def main():
    promoted = already_promoted()
    leftover = leftover_files()
    orig = orig_files(promoted)
    left_items = [(p.name, text) for _, p, text in leftover]
    orig_items = orig

    extractors = {
        "action_key": lambda t: ACTION_KEY.findall(t),
        "module_eq": lambda t: MOD_EQ.findall(t),
        "t": lambda t: T_PAT.findall(t),
        "api": lambda t: API_PAT.findall(t),
    }
    pins = []
    for kind, extract in extractors.items():
        L = index_lits(left_items, extract)
        O = index_lits(orig_items, extract)
        for lit, left_ids in L.items():
            if len(left_ids) != 1:
                continue
            orig_ids = O.get(lit, [])
            if len(orig_ids) != 1:
                continue
            pins.append(
                {
                    "kind": kind,
                    "lit": lit,
                    "module": left_ids[0],
                    "orig": orig_ids[0],
                }
            )
    # unique both ways
    by_mod = defaultdict(list)
    by_orig = defaultdict(list)
    for p in pins:
        by_mod[p["module"]].append(p)
        by_orig[p["orig"]].append(p)
    unique = []
    for p in pins:
        if len({x["orig"] for x in by_mod[p["module"]]}) != 1:
            continue
        if len({x["module"] for x in by_orig[p["orig"]]}) != 1:
            continue
        unique.append(p)
    # collapse per module
    chosen = {}
    for p in unique:
        chosen.setdefault(p["module"], p)
    out = {
        "leftover_scanned": len(leftover),
        "orig_unpromoted": len(orig),
        "raw_pins": len(pins),
        "unique_module_pins": len(chosen),
        "pins": list(chosen.values()),
    }
    dest = APP / "CHUNK_BUSINESS_PINS.json"
    dest.write_text(json.dumps(out, indent=2, ensure_ascii=False) + "\n")
    print(json.dumps({k: out[k] for k in ("leftover_scanned", "orig_unpromoted", "raw_pins", "unique_module_pins")}, indent=2))
    for p in out["pins"][:40]:
        print(f"{p['module']} <- {p['kind']} {p['lit']!r} -> {p['orig']}")


if __name__ == "__main__":
    main()
