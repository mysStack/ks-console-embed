#!/usr/bin/env python3
"""For each remaining orig file, unique long string that hits exactly 1 leftover."""
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
    "ServiceAccess",
    "ServiceComponents",
    "PhysicalResource",
    "RankTable",
    "CustomToolTip",
    "AceEditor",
    "About.js",
    "LimitRange",
    "EmptyList",
    "Cards/Info",
    "Cards/Pods",
    "DiffYaml",
)
LONG = re.compile(r"""['"]([A-Za-z][A-Za-z0-9_.':/-]{15,})['"]""")


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
    leftover_index = defaultdict(list)
    for name, text in L:
        for lit in set(LONG.findall(text)):
            leftover_index[lit].append(name)
    orig_index = defaultdict(list)
    for key, text in orig:
        for lit in set(LONG.findall(text)):
            orig_index[lit].append(key)
    pins = []
    for lit, origs in orig_index.items():
        if len(origs) != 1:
            continue
        left = leftover_index.get(lit, [])
        if len(left) != 1:
            continue
        pins.append({"lit": lit, "module": left[0], "orig": origs[0]})
    by_mod = defaultdict(list)
    by_orig = defaultdict(list)
    for p in pins:
        by_mod[p["module"]].append(p)
        by_orig[p["orig"]].append(p)
    chosen = {}
    for p in pins:
        if len({x["orig"] for x in by_mod[p["module"]]}) != 1:
            continue
        if len({x["module"] for x in by_orig[p["orig"]]}) != 1:
            continue
        chosen.setdefault(p["module"], p)
    out = {
        "orig_files": len(orig),
        "raw": len(pins),
        "unique": list(chosen.values()),
    }
    (APP / "ORIG_UNIQUE_LONG.json").write_text(json.dumps(out, indent=2) + "\n")
    print(json.dumps({"orig_files": out["orig_files"], "raw": out["raw"], "unique": len(out["unique"])}, indent=2))
    for p in out["unique"]:
        print(f"{p['module']} <- {p['lit']!r} -> {p['orig']}")


if __name__ == "__main__":
    main()
