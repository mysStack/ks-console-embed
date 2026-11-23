#!/usr/bin/env python3
from pathlib import Path
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
SRC = ROOT / "recovery/react-app/src"
ORIG = ROOT / "src"
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
)


def rel_posix(path: Path, root: Path) -> str:
    return path.relative_to(root).as_posix()


def aliases(key: str):
    out = {key}
    if key.endswith("/index.js"):
        out.add(key[: -len("/index.js")] + ".js")
    elif key.endswith(".js"):
        out.add(key[:-3] + "/index.js")
    return out


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
    P = promoted()
    leftover = []
    for p in ORIG.rglob("*"):
        if p.suffix not in {".js", ".jsx"}:
            continue
        key = re.sub(r"\.jsx$", ".js", rel_posix(p, ORIG))
        if any(a in P for a in aliases(key)):
            continue
        if any(s in key for s in SKIP_FRAGS):
            continue
        leftover.append(key)
    leftover.sort()
    print("orig_unpromoted_not_skip", len(leftover))
    for k in leftover[:80]:
        print(k)


if __name__ == "__main__":
    main()
