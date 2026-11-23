#!/usr/bin/env python3
"""Keep unique-kid pins only when leftover and orig share a unique t/class/api."""
from collections import defaultdict
from pathlib import Path
import json
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
APP = ROOT / "recovery/react-app"
UNPACKED = APP / "src/unpacked"
ORIG = ROOT / "src"
DATA = json.loads((APP / "UNIQUE_CLASS_KIDS.json").read_text())
T_PAT = re.compile(r"""(?<![A-Za-z0-9_])t\(\s*['"]([^'"]{8,})['"]""")
CLASS_PAT = re.compile(r"""\bclass\s+([A-Z][A-Za-z0-9]{5,})\b""")
API_PAT = re.compile(r"""['"]((?:/kapis|/apis)[^'"]{10,})['"]""")
SKIP_ORIG = (
    "EmptyList",
    "ManageButton",
    "Cards/Pods",
    "stores/monitoring",
    "stores/rank",
    "stores/limitrange",
    "About.js",
    "FullscreenModal",
    "Tooltip",
    "Layout/Nav/Link",
    "core/containers/Base/Detail",
    "TimeSelector/utils",
    "Tree.js",
    "KubeConfig",
    "KubeCtl",
    "KubeTools",
    "WHIZARD",
    "ProjectSelect",
    "Initializing",
)


def orig_text(key: str) -> str:
    base = key[:-3] if key.endswith(".js") else key
    for p in (
        ORIG / key,
        ORIG / key.replace(".js", ".jsx"),
        ORIG / (base + ".jsx"),
        ORIG / (base + "/index.jsx"),
        ORIG / (base + "/index.js"),
    ):
        if p.is_file():
            return p.read_text(encoding="utf-8", errors="ignore")
    return ""


def lits(text: str):
    return set(T_PAT.findall(text)) | set(CLASS_PAT.findall(text)) | set(API_PAT.findall(text))


def main():
    leftover_lits = {}
    leftover_count = defaultdict(int)
    for p in UNPACKED.glob("module-*.js"):
        text = p.read_text(encoding="utf-8", errors="ignore")
        if text.startswith("export { default } from"):
            continue
        leftover_lits[p.name] = lits(text)
        for lit in leftover_lits[p.name]:
            leftover_count[lit] += 1
    kept, dropped = [], []
    for pin in DATA["kid_pins"]:
        orig = pin["orig"]
        if any(s in orig for s in SKIP_ORIG):
            dropped.append({**pin, "reason": "skip-orig"})
            continue
        ot = orig_text(orig)
        if not ot:
            dropped.append({**pin, "reason": "orig-missing"})
            continue
        lt = leftover_lits.get(pin["module"], set())
        shared = sorted(
            x
            for x in (lt & lits(ot))
            if leftover_count[x] == 1
        )
        if not shared:
            dropped.append(
                {
                    **pin,
                    "reason": "no-unique-shared-lit",
                    "left_sample": sorted(lt)[:8],
                    "orig_sample": sorted(lits(ot))[:8],
                }
            )
            continue
        kept.append({**pin, "shared": shared[:8]})
    out = {"kept": kept, "dropped": len(dropped), "kept_count": len(kept)}
    (APP / "UNIQUE_KID_VERIFIED.json").write_text(
        json.dumps({"kept": kept, "dropped": dropped}, indent=2, ensure_ascii=False)
        + "\n"
    )
    print(json.dumps({"kept_count": len(kept), "dropped": len(dropped)}, indent=2))
    for p in kept:
        print(f"{p['module']} <- {p['parent']} -> {p['orig']} shared={p['shared'][:4]}")


if __name__ == "__main__":
    main()
