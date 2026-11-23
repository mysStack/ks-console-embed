#!/usr/bin/env python3
"""Unique leftover vs orig-unpromoted: data-test, lodash get paths, CSS class keys."""
from collections import defaultdict
from pathlib import Path
import json
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
APP = ROOT / "recovery/react-app"
SRC = APP / "src"
ORIG = ROOT / "src"
UNPACKED = SRC / "unpacked"
STUB_RE = re.compile(
    r'^export \{ default \} from "(pages|components|stores|actions|utils|configs|core|dmp)/'
)
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
SKIP_FRAGS = (
    "WHIZARD",
    "ProjectSelect",
    "GrafanaTargetInput",
    "RuleList",
    "InstanceList",
    "ContainerLog",
    "EditGroup",
    "ImageBuilder",
    "PromQLInput",
    "MetircQueryInput",
    "ContianerTerminal",
    "Initializing",
    "KubeTools",
    "Cards/Banner",
    "Cascader",
    "EditBasicInfo",
    "KubernetesStatus",
    "AddRuleForm",
)
DATA_TEST = re.compile(r"""["']data-test["']\s*:\s*["']([^"']{6,})["']""")
GET_PATH = re.compile(
    r"""(?:module26\(|\bget\()\s*[A-Za-z_][A-Za-z0-9_]*\s*,\s*['"]([A-Za-z][A-Za-z0-9_.]{12,})['"]"""
)
CSS_KEY = re.compile(r"""module\d+\.([A-Za-z][A-Za-z0-9_]{8,})""")
TEST_ID = re.compile(r"""['"]([a-z]+(?:-[a-z0-9]+){3,})['"]""")


def rel_posix(path: Path, root: Path) -> str:
    return path.relative_to(root).as_posix()


def leftover():
    out = []
    for p in UNPACKED.glob("module-*.js"):
        text = p.read_text(encoding="utf-8", errors="ignore")
        if STUB_RE.match(text) or text.startswith('export { default } from "chunks/'):
            continue
        out.append((p.name, text))
    return out


def promoted():
    keys = set()
    for prefix in PREFIXES:
        root = SRC / prefix
        if not root.is_dir():
            continue
        for p in root.rglob("*.js"):
            keys.add(f"{prefix}/{rel_posix(p, root)}")
    return keys


def orig_unpromoted(promoted_keys):
    out = []
    for p in ORIG.rglob("*"):
        if p.suffix not in {".js", ".jsx"}:
            continue
        key = re.sub(r"\.jsx$", ".js", rel_posix(p, ORIG))
        if key in promoted_keys:
            continue
        if any(s in key for s in SKIP_FRAGS):
            continue
        out.append((key, p.read_text(encoding="utf-8", errors="ignore")))
    return out


def index(items, extract):
    m = defaultdict(list)
    for ident, text in items:
        for lit in set(extract(text)):
            m[lit].append(ident)
    return m


def unique(L, O, kind, extract):
    pins = []
    Li = index(L, extract)
    Oi = index(O, extract)
    for lit, left in Li.items():
        if len(left) != 1:
            continue
        orig = Oi.get(lit, [])
        if len(orig) != 1:
            continue
        pins.append({"kind": kind, "lit": lit, "module": left[0], "orig": orig[0]})
    return pins


def main():
    L = leftover()
    O = orig_unpromoted(promoted())
    pins = []
    pins += unique(L, O, "data-test", lambda t: DATA_TEST.findall(t))
    pins += unique(L, O, "get-path", lambda t: GET_PATH.findall(t))
    pins += unique(L, O, "kebab", lambda t: TEST_ID.findall(t))
    by_mod = defaultdict(list)
    by_orig = defaultdict(list)
    for p in pins:
        by_mod[p["module"]].append(p)
        by_orig[p["orig"]].append(p)
    chosen = {}
    for p in pins:
        if any(s in p["orig"] for s in SKIP_FRAGS):
            continue
        if len({x["orig"] for x in by_mod[p["module"]]}) != 1:
            continue
        if len({x["module"] for x in by_orig[p["orig"]]}) != 1:
            continue
        chosen.setdefault(p["module"], p)
    out = {
        "leftover": len(L),
        "orig_unpromoted": len(O),
        "raw": len(pins),
        "unique": list(chosen.values()),
        "raw_pins": pins,
    }
    (APP / "UNIQUE_DATATEST_PINS.json").write_text(
        json.dumps(out, indent=2, ensure_ascii=False) + "\n"
    )
    print(
        json.dumps(
            {
                "leftover": out["leftover"],
                "orig_unpromoted": out["orig_unpromoted"],
                "raw": out["raw"],
                "unique": len(out["unique"]),
            },
            indent=2,
        )
    )
    for p in out["unique"]:
        print(f"{p['module']} <- {p['kind']} {p['lit']!r} -> {p['orig']}")


if __name__ == "__main__":
    main()
