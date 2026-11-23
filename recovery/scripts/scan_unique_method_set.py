#!/usr/bin/env python3
"""size>=3 unique method-name set leftover vs orig-unpromoted (index.js aliases)."""
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
)
METHOD = re.compile(
    r"""key:\s*["']([A-Za-z][A-Za-z0-9]{6,})["']|^\s+(?:async\s+)?([A-Za-z][A-Za-z0-9]{6,})\s*\(""",
    re.M,
)
COMMON = {
    "constructor",
    "componentDidMount",
    "componentWillUnmount",
    "componentDidUpdate",
    "componentWillMount",
    "handleSubmit",
    "handleChange",
    "handleClick",
    "handleCancel",
    "handleOk",
    "fetchData",
    "getData",
    "renderHeader",
    "renderContent",
    "renderFooter",
    "renderItem",
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


def methods(text: str) -> frozenset[str]:
    found = set()
    for a, b in METHOD.findall(text):
        n = a or b
        if n and n not in COMMON:
            found.add(n)
    return frozenset(found)


def main():
    L = leftover()
    P = promoted()
    orig = []
    for p in ORIG.rglob("*"):
        if p.suffix not in {".js", ".jsx"}:
            continue
        key = re.sub(r"\.jsx$", ".js", rel_posix(p, ORIG))
        if any(a in P for a in aliases(key)):
            continue
        if any(s in key for s in SKIP_FRAGS):
            continue
        orig.append((key, p.read_text(encoding="utf-8", errors="ignore")))
    Lsets = {name: methods(text) for name, text in L}
    Osets = {key: methods(text) for key, text in orig}
    Lby = defaultdict(list)
    Oby = defaultdict(list)
    for name, s in Lsets.items():
        if len(s) >= 3:
            Lby[s].append(name)
    for key, s in Osets.items():
        if len(s) >= 3:
            Oby[s].append(key)
    pins = []
    for s, left in Lby.items():
        if len(left) != 1:
            continue
        origs = Oby.get(s, [])
        if len(origs) != 1:
            continue
        pins.append(
            {
                "module": left[0],
                "orig": origs[0],
                "size": len(s),
                "methods": sorted(s)[:12],
            }
        )
    (APP / "UNIQUE_METHOD_SET.json").write_text(json.dumps({"pins": pins}, indent=2) + "\n")
    print(json.dumps({"leftover": len(L), "orig_unpromoted": len(orig), "pins": len(pins)}, indent=2))
    for p in pins:
        print(f"{p['module']} -> {p['orig']} size={p['size']} {p['methods'][:6]}")


if __name__ == "__main__":
    main()
