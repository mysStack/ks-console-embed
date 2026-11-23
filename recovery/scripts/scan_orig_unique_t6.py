#!/usr/bin/env python3
"""Unique leftover vs orig-unpromoted t() keys of length 6+."""
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
T_PAT = re.compile(r"""(?<![A-Za-z0-9_])t\(\s*['"]([^'"]{6,})['"]""")
REGEX = re.compile(r"""(/[^/\n]{8,}/[gimsuy]*)""")


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
    leftover_t = defaultdict(list)
    leftover_re = defaultdict(list)
    orig_t = defaultdict(list)
    orig_re = defaultdict(list)
    for name, text in L:
        for lit in set(T_PAT.findall(text)):
            leftover_t[lit].append(name)
        for lit in set(REGEX.findall(text)):
            leftover_re[lit].append(name)
    for key, text in orig:
        for lit in set(T_PAT.findall(text)):
            orig_t[lit].append(key)
        for lit in set(REGEX.findall(text)):
            orig_re[lit].append(key)

    def unique_map(oi, li):
        pins = []
        for lit, origs in oi.items():
            if len(origs) != 1:
                continue
            left = li.get(lit, [])
            if len(left) != 1:
                continue
            pins.append({"lit": lit, "module": left[0], "orig": origs[0]})
        by_mod = defaultdict(list)
        by_orig = defaultdict(list)
        for pin in pins:
            by_mod[pin["module"]].append(pin)
            by_orig[pin["orig"]].append(pin)
        chosen = {}
        for pin in pins:
            if len({x["orig"] for x in by_mod[pin["module"]]}) != 1:
                continue
            if len({x["module"] for x in by_orig[pin["orig"]]}) != 1:
                continue
            chosen.setdefault(pin["module"], pin)
        return pins, list(chosen.values())

    raw_t, uniq_t = unique_map(orig_t, leftover_t)
    raw_re, uniq_re = unique_map(orig_re, leftover_re)
    out = {"t_raw": len(raw_t), "t_unique": uniq_t, "re_raw": len(raw_re), "re_unique": uniq_re}
    (APP / "ORIG_UNIQUE_T6.json").write_text(json.dumps(out, indent=2) + "\n")
    print(json.dumps({"orig_files": len(orig), "t_raw": len(raw_t), "t_unique": len(uniq_t), "re_raw": len(raw_re), "re_unique": len(uniq_re)}, indent=2))
    for pin in uniq_t:
        print("T", pin["module"], pin["lit"], "->", pin["orig"])
    for pin in uniq_re:
        print("RE", pin["module"], pin["lit"], "->", pin["orig"])


if __name__ == "__main__":
    main()
