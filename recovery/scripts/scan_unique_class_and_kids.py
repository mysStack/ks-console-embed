#!/usr/bin/env python3
"""Unique class/displayName among leftover vs orig-unpromoted; unique leftover kids of all promoted parents."""
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
IMP_UNP = re.compile(r"""(?:from|require\()\s*['"](?:\.\./)*unpacked/module-(\d+)\.js['"]""")
IMP_REL = re.compile(r"""(?:from|require\()\s*['"]\./module-(\d+)\.js['"]""")
IMP_ORIG = re.compile(r"""from ['"]([^'"]+)['"]""")
CLASS_PAT = re.compile(r"""\bclass\s+([A-Z][A-Za-z0-9]{5,})\b""")
DISPLAY = re.compile(
    r"""(?:displayName|chartName)\s*[:=]\s*['"]([A-Za-z][A-Za-z0-9]{4,})['"]"""
)
STORE_PAT = re.compile(r"""\bclass\s+([A-Z][A-Za-z0-9]*Store)\b""")
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
PROMOTED_ROOTS = [SRC / p for p in PREFIXES]
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


def rel_posix(path: Path, root: Path) -> str:
    return path.relative_to(root).as_posix()


def is_stub_text(text: str) -> bool:
    return bool(STUB_RE.match(text[:240])) or text.startswith(
        'export { default } from "chunks/'
    )


def leftover_files():
    files = []
    for p in UNPACKED.glob("module-*.js"):
        text = p.read_text(encoding="utf-8", errors="ignore")
        if is_stub_text(text):
            continue
        files.append((p.name, text))
    return files


def already_promoted() -> set[str]:
    keys = set()
    for root in PROMOTED_ROOTS:
        if not root.is_dir():
            continue
        prefix = root.name
        for p in root.rglob("*.js"):
            keys.add(f"{prefix}/{rel_posix(p, root)}")
    return keys


def orig_unpromoted(promoted: set[str]):
    out = []
    for p in ORIG.rglob("*"):
        if p.suffix not in {".js", ".jsx"}:
            continue
        key = re.sub(r"\.jsx$", ".js", rel_posix(p, ORIG))
        if key in promoted:
            continue
        if any(s in key for s in SKIP_FRAGS):
            continue
        out.append((key, p.read_text(encoding="utf-8", errors="ignore")))
    return out


def index_lits(items, extract):
    m = defaultdict(list)
    for ident, text in items:
        for lit in set(extract(text)):
            m[lit].append(ident)
    return m


def unique_pins(leftover, orig, kind, extract):
    L = index_lits(leftover, extract)
    O = index_lits(orig, extract)
    pins = []
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
    return pins


def orig_unpromoted_imports(orig_key: str, promoted: set[str]):
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
        if not spec.startswith(PREFIXES):
            continue
        key = spec if spec.endswith(".js") else spec + ".js"
        aliases = [key]
        if key.endswith("/index.js"):
            aliases.append(key[: -len("/index.js")] + ".js")
        elif key.endswith(".js"):
            aliases.append(key[:-3] + "/index.js")
        if any(a in promoted for a in aliases):
            continue
        if any(s in key for s in SKIP_FRAGS):
            continue
        out.append(key)
    return out


def all_parent_kids(promoted: set[str]):
    parent_to_kids = defaultdict(list)
    kid_to_parents = defaultdict(list)
    leftover_ids = {
        name[len("module-") : -len(".js")]
        for name, _ in leftover_files()
    }
    for root in PROMOTED_ROOTS:
        if not root.is_dir():
            continue
        prefix = root.name
        for p in root.rglob("*.js"):
            orig = f"{prefix}/{rel_posix(p, root)}"
            text = p.read_text(encoding="utf-8", errors="ignore")
            kids = set(IMP_UNP.findall(text)) | set(IMP_REL.findall(text))
            for mid in kids:
                if mid not in leftover_ids:
                    continue
                parent_to_kids[orig].append(mid)
                kid_to_parents[mid].append(orig)
    pins = []
    samples = []
    for orig, kids in parent_to_kids.items():
        unique_kids = [k for k in kids if len(set(kid_to_parents[k])) == 1]
        oimps = orig_unpromoted_imports(orig, promoted)
        if len(unique_kids) == 1 and len(oimps) == 1:
            pins.append(
                {
                    "kind": "unique_kid",
                    "parent": orig,
                    "module": f"module-{unique_kids[0]}.js",
                    "orig": oimps[0],
                }
            )
        elif unique_kids and oimps and len(samples) < 12:
            samples.append(
                {
                    "parent": orig,
                    "unique_kids": unique_kids[:8],
                    "orig_unpromoted_imports": oimps[:8],
                }
            )
    return pins, samples, len(parent_to_kids)


def main():
    leftover = leftover_files()
    promoted = already_promoted()
    orig = orig_unpromoted(promoted)
    pins = []
    pins += unique_pins(leftover, orig, "class", lambda t: CLASS_PAT.findall(t))
    pins += unique_pins(leftover, orig, "displayName", lambda t: DISPLAY.findall(t))
    pins += unique_pins(leftover, orig, "store", lambda t: STORE_PAT.findall(t))
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
        if any(s in p["orig"] for s in SKIP_FRAGS):
            continue
        chosen.setdefault(p["module"], p)
    kid_pins, samples, parent_count = all_parent_kids(promoted)
    out = {
        "leftover_scanned": len(leftover),
        "orig_unpromoted": len(orig),
        "class_raw": len(pins),
        "class_unique": list(chosen.values()),
        "kid_parents": parent_count,
        "kid_pins": kid_pins,
        "kid_samples": samples,
    }
    (APP / "UNIQUE_CLASS_KIDS.json").write_text(
        json.dumps(out, indent=2, ensure_ascii=False) + "\n"
    )
    print(
        json.dumps(
            {
                "leftover_scanned": out["leftover_scanned"],
                "orig_unpromoted": out["orig_unpromoted"],
                "class_raw": out["class_raw"],
                "class_unique": len(out["class_unique"]),
                "kid_parents": parent_count,
                "kid_pins": len(kid_pins),
            },
            indent=2,
        )
    )
    for p in out["class_unique"]:
        print(f"CLASS {p['module']} <- {p['kind']} {p['lit']!r} -> {p['orig']}")
    for p in kid_pins:
        print(f"KID {p['module']} <- {p['parent']} -> {p['orig']}")


if __name__ == "__main__":
    main()
