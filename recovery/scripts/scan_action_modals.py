#!/usr/bin/env python3
"""Match original action Modal imports to unpacked module imports not yet in KNOWN."""
from pathlib import Path
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
KNOWN_PY = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
known_mods = set(re.findall(r"module-(\d+)\.js", KNOWN_PY))
known_names = set(re.findall(r'"([^"]+)": "module-\d+\.js"', KNOWN_PY))
UNPACKED = ROOT / "recovery/react-app/src/unpacked"

action_map = dict(re.findall(r'"(actions/[^"]+)": "(module-\d+\.js)"', KNOWN_PY))
imp_orig = re.compile(r"from ['\"]([^'\"]+)['\"]")
imp_unp = re.compile(r'(?:from|require\()\s*["\']\./(module-\d+\.js)')

for orig_path, mod_file in sorted(action_map.items()):
    src = ROOT / "src" / orig_path
    if not src.exists():
        continue
    orig = src.read_text(encoding="utf-8", errors="ignore")
    orig_imps = [
        m for m in imp_orig.findall(orig)
        if m.startswith("components/Modals/")
        or m.startswith("pages/")
        or "/Modals/" in m
        or m.startswith("components/Forms/")
        or m.startswith("configs/steps/")
    ]
    text = (UNPACKED / mod_file).read_text(encoding="utf-8", errors="ignore")
    unp = []
    for m in imp_unp.findall(text):
        mid = re.search(r"\d+", m).group()
        if mid not in known_mods and int(mid) >= 800:
            unp.append(m)
    unp = list(dict.fromkeys(unp))
    pending_orig = [p for p in orig_imps if p.replace("'", "") not in known_names and not any(p.rstrip("/") in k or k.endswith(p.split("/")[-1] + ".js") for k in known_names)]
    # simpler: show orig modal-like vs unnamed unpacked
    orig_modals = [m for m in orig_imps if "Modal" in m or "Modals" in m or m.startswith("components/Forms/")]
    unnamed_orig = []
    for m in orig_modals:
        key_candidates = [
            m + ".js" if not m.endswith(".js") else m,
            m.replace("/index", "") + ".js",
        ]
        # components/Modals/Foo -> components/Modals/Foo.js
        base = m if m.endswith(".js") else m + ".js"
        if base not in known_names and m not in known_names:
            unnamed_orig.append(m)
    if unnamed_orig or unp:
        print(f"\n=== {orig_path} -> {mod_file} ===")
        print(" orig unnamed:", unnamed_orig)
        print(" unpacked unnamed >=800:", unp)
