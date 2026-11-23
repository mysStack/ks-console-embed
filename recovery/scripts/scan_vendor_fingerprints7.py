#!/usr/bin/env python3
from pathlib import Path

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
NEEDLES = [
    ("toolbox.logquery", "toolbox.logquery"),
    ("toolbox.kubeconfig", "toolbox.kubeconfig"),
    ("CONTROL_TOOL", "CONTROL_TOOL"),
    ("KUBECTL_DESC", "KUBECTL_DESC"),
    ("getWindowOpts", "getWindowOpts"),
    ("thirdPartyTools", "thirdPartyTools"),
    ("Prism.tokenize", "tokenize"),
    ("prism Token", "Prism.Token"),
    ("nanoid url", "-0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_"),
    ("fast-copy keys", "fast-copy"),
    ("copy circular", "circular references"),
]

hits = {name: [] for name, _ in NEEDLES}
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="ignore")
    for name, needle in NEEDLES:
        if needle in text:
            hits[name].append(path.name)

for name, files in hits.items():
    print(f"{name}: {files[:12]} ({len(files)})")
