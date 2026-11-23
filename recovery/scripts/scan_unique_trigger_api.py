#!/usr/bin/env python3
"""Unique leftover vs orig-unpromoted: trigger(), kapis, data-test, displayName."""
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
    "RuleForm",
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
    "StatusReason",
    "TextPreview",
    "ServiceComponents",
    "PhysicalResource",
    "RankTable",
    "CustomToolTip",
    "AceEditor",
    "LimitRange",
    "EmptyList",
    "Cards/Info",
    "Cards/Pods",
    "DiffYaml",
    "LoginConfirm",
)
PATS = {
    "trigger": re.compile(r"""trigger\(\s*['"]([A-Za-z][A-Za-z0-9_.-]{8,})['"]"""),
    "kapis": re.compile(r"""['"]((?:/kapis|/apis)/[^'"]{12,})['"]"""),
    "data_test": re.compile(
        r"""data-test(?:Name)?\s*=\s*['"]([^'"]{6,})['"]|["']data-test["']\s*:\s*["']([^"']{6,})["']"""
    ),
    "display": re.compile(
        r"""(?:displayName|resourceName)\s*[:=]\s*['"]([A-Za-z][A-Za-z0-9]{6,})['"]"""
    ),
    "action_key": re.compile(
        r"""(?:key|action)\s*:\s*['"]([A-Za-z][A-Za-z0-9_.-]{10,})['"]"""
    ),
}


def rel_posix(path: Path, root: Path) -> str:
    return path.relative_to(root).as_posix()


def aliases(key: str):
    out = {key}
    if key.endswith("/index.js"):
        out.add(key[: -len("/index.js")] + ".js")
    elif key.endswith(".js"):
        out.add(key[:-3] + "/index.js")
    return out


def leftover():
    files = []
    for p in UNPACKED.glob("module-*.js"):
        text = p.read_text(encoding="utf-8", errors="ignore")
        if STUB_RE.match(text) or text.startswith('export { default } from "chunks/'):
            continue
        files.append((p.name, text))
    return files


def promoted():
    keys = set()
    for prefix in PREFIXES:
        root = SRC / prefix
        if not root.is_dir():
            continue
        for p in root.rglob("*.js"):
            key = f"{prefix}/{rel_posix(p, root)}"
            keys.update(aliases(key))
    return keys


def extract(text, kind):
    found = set()
    for m in PATS[kind].findall(text):
        if isinstance(m, tuple):
            found.update(x for x in m if x)
        else:
            found.add(m)
    return found


def main():
    L = leftover()
    P = promoted()
    orig = []
    for p in ORIG.rglob("*"):
        if p.suffix not in {".js", ".jsx"}:
            continue
        if ".test." in p.name:
            continue
        key = re.sub(r"\.jsx$", ".js", rel_posix(p, ORIG))
        if any(a in P for a in aliases(key)):
            continue
        if any(s in key for s in SKIP_FRAGS):
            continue
        orig.append((key, p.read_text(encoding="utf-8", errors="ignore")))
    chosen = {}
    stats = {}
    for kind in PATS:
        leftover_index = defaultdict(list)
        orig_index = defaultdict(list)
        for name, text in L:
            for lit in extract(text, kind):
                leftover_index[lit].append(name)
        for key, text in orig:
            for lit in extract(text, kind):
                orig_index[lit].append(key)
        pins = []
        for lit, origs in orig_index.items():
            if len(origs) != 1:
                continue
            left = leftover_index.get(lit, [])
            if len(left) != 1:
                continue
            pins.append({"kind": kind, "lit": lit, "module": left[0], "orig": origs[0]})
        by_mod = defaultdict(list)
        by_orig = defaultdict(list)
        for pin in pins:
            by_mod[pin["module"]].append(pin)
            by_orig[pin["orig"]].append(pin)
        n = 0
        for pin in pins:
            if len({x["orig"] for x in by_mod[pin["module"]]}) != 1:
                continue
            if len({x["module"] for x in by_orig[pin["orig"]]}) != 1:
                continue
            chosen.setdefault(pin["module"], pin)
            n += 1
        stats[kind] = {"raw": len(pins), "unique_rows": n}
    out = {
        "orig_files": len(orig),
        "leftover": len(L),
        "stats": stats,
        "unique": list(chosen.values()),
    }
    (APP / "UNIQUE_TRIGGER_API.json").write_text(json.dumps(out, indent=2) + "\n")
    print(json.dumps({"orig_files": out["orig_files"], "leftover": out["leftover"], "stats": stats, "unique": len(out["unique"])}, indent=2))
    for pin in out["unique"]:
        print(f"{pin['module']} <- {pin['kind']} {pin['lit']!r} -> {pin['orig']}")


if __name__ == "__main__":
    main()
