#!/usr/bin/env python3
"""Leftover uniquely importing a promoted spec vs orig uniquely importing that child."""
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
IMP = re.compile(r"""(?:from|require\()\s*['"]([^'"]+)['"]""")
ORIG_IMP = re.compile(r"""from\s+['"]([^'"]+)['"]""")
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
    ".test.",
)
T_PAT = re.compile(r"""(?<![A-Za-z0-9_])t\(\s*['"]([^'"]{6,})['"]""")


def rel_posix(path: Path, root: Path) -> str:
    return path.relative_to(root).as_posix()


def aliases(key: str):
    out = {key}
    if key.endswith("/index.js"):
        out.add(key[: -len("/index.js")] + ".js")
        out.add(key[: -len("/index.js")])
    elif key.endswith(".js"):
        out.add(key[:-3] + "/index.js")
        out.add(key[:-3])
    return out


def stub(text: str) -> bool:
    return bool(STUB_RE.match(text) or text.startswith('export { default } from "chunks/'))


def promoted_specs():
    specs = set()
    for prefix in PREFIXES:
        root = SRC / prefix
        if not root.is_dir():
            continue
        for p in root.rglob("*.js"):
            key = f"{prefix}/{rel_posix(p, root)}"
            specs.add(key[:-3] if key.endswith(".js") else key)
            specs.update(x[:-3] if x.endswith(".js") else x for x in aliases(key))
    return specs


def leftover():
    out = []
    for p in UNPACKED.glob("module-*.js"):
        text = p.read_text(encoding="utf-8", errors="ignore")
        if stub(text):
            continue
        out.append((p.name, text, IMP.findall(text)))
    return out


def orig_unpromoted(promoted_keys):
    out = []
    for p in ORIG.rglob("*"):
        if p.suffix not in {".js", ".jsx"}:
            continue
        if ".test." in p.name:
            continue
        key = re.sub(r"\.jsx$", ".js", rel_posix(p, ORIG))
        if any(a in promoted_keys for a in aliases(key)):
            continue
        if any(s in key for s in SKIP_FRAGS):
            continue
        text = p.read_text(encoding="utf-8", errors="ignore")
        imps = []
        for spec in ORIG_IMP.findall(text):
            if spec.startswith("."):
                resolved = (p.parent / spec).resolve()
                try:
                    rel = resolved.relative_to(ORIG.resolve()).as_posix()
                except ValueError:
                    continue
                rel = re.sub(r"\.jsx$", ".js", rel)
                if not rel.endswith(".js"):
                    rel += ".js" if (ORIG / (rel + ".js")).exists() or (ORIG / (rel + ".jsx")).exists() else "/index.js"
                imps.append(rel[:-3] if rel.endswith(".js") else rel)
            elif spec.split("/")[0] in PREFIXES:
                imps.append(spec)
        out.append((key, text, imps))
    return out


def main():
    promoted_keys = set()
    for prefix in PREFIXES:
        root = SRC / prefix
        if not root.is_dir():
            continue
        for p in root.rglob("*.js"):
            key = f"{prefix}/{rel_posix(p, root)}"
            promoted_keys.update(aliases(key))
    specs = promoted_specs()
    L = leftover()
    spec_importers = defaultdict(list)
    for name, text, imps in L:
        for spec in imps:
            if spec in specs or spec + ".js" in promoted_keys:
                spec_importers[spec].append(name)
    orig = orig_unpromoted(promoted_keys)
    orig_child_importers = defaultdict(list)
    for key, text, imps in orig:
        for spec in imps:
            orig_child_importers[spec].append(key)
    pins = []
    for spec, leftovers in spec_importers.items():
        if len(set(leftovers)) != 1:
            continue
        origs = orig_child_importers.get(spec, []) + orig_child_importers.get(spec + ".js", [])
        origs = list(dict.fromkeys(origs))
        if len(origs) != 1:
            continue
        leftover_name = leftovers[0]
        leftover_text = next(t for n, t, _ in L if n == leftover_name)
        orig_text = next(t for k, t, _ in orig if k == origs[0])
        shared_t = set(T_PAT.findall(leftover_text)) & set(T_PAT.findall(orig_text))
        pins.append(
            {
                "module": leftover_name,
                "orig": origs[0],
                "spec": spec,
                "shared_t": sorted(shared_t)[:8],
                "shared_t_n": len(shared_t),
            }
        )
    (APP / "UNIQUE_NAMED_CHILD.json").write_text(json.dumps({"pins": pins}, indent=2) + "\n")
    print(json.dumps({"pins": len(pins)}, indent=2))
    for p in pins:
        print(f"{p['module']} imports {p['spec']} -> {p['orig']} shared_t={p['shared_t_n']} {p['shared_t'][:3]}")


if __name__ == "__main__":
    main()
