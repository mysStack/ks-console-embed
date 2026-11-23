#!/usr/bin/env python3
"""Inspect suspicious slice-41 modules and orig path collisions."""
from pathlib import Path
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
SRC = ROOT / "src"
UNPACKED = ROOT / "recovery/react-app/src/unpacked"
KNOWN_PY = (ROOT / "recovery/scripts/add_known_named.py").read_text(encoding="utf-8")
pairs = dict(re.findall(r'"([^"]+)": "(module-\d+\.js)"', KNOWN_PY))


def show_mod(mid, n=700):
    path = UNPACKED / f"module-{mid}.js"
    text = path.read_text(encoding="utf-8", errors="ignore")
    print(f"\n===== module-{mid}.js len={len(text)} =====")
    print(text[:n].replace("\n", " | "))
    print("--- tail ---")
    print(text[-400:].replace("\n", " | "))


def show_orig(rel, n=250):
    for ext in ("", ".js", ".jsx", "/index.js", "/index.jsx"):
        p = SRC / f"{rel}{ext}" if not rel.endswith((".js", ".jsx")) else SRC / rel
        if rel.endswith(".js"):
            stem = rel[:-3]
            for e in (".js", ".jsx", "/index.js", "/index.jsx"):
                q = SRC / f"{stem}{e}"
                if q.exists() and q.is_file():
                    print(f"\nORIG {q.relative_to(SRC).as_posix()} exists size={q.stat().st_size}")
                    t = q.read_text(encoding="utf-8", errors="ignore")
                    print(t[:n].replace("\n", " | "))
                    return
        if p.exists() and p.is_file():
            print(f"\nORIG {p.relative_to(SRC).as_posix()} exists size={p.stat().st_size}")
            print(p.read_text(encoding="utf-8", errors="ignore")[:n].replace("\n", " | "))
            return
    print("MISSING", rel)


for mid in [3895, 811, 1071, 1182, 2047, 1799, 3109, 3007, 3908, 3906, 4655, 3875, 1811, 1814, 1450, 3878, 3093, 2620, 4404, 1025, 3137, 3154, 4416, 4446, 4398, 5011, 2938, 5072, 2919, 2909, 4710, 3767, 3764, 2607, 2608, 2609, 2616, 2612]:
    show_mod(mid, 450)

print("\n\n===== orig collisions =====")
for rel in [
    "stores/logging.js",
    "stores/logging/index.js",
    "stores/workload.js",
    "stores/workload/index.js",
    "components/Forms/Notification/SlackForm.js",
    "components/Forms/Notification/SlackForm/Item.js",
    "components/Modals/CustomMonitoring/components/GraphType.js",
    "components/Modals/CustomMonitoring/components/FormInput/GraphType.js",
    "pages/projects/containers/ServiceAccounts/Detail/ServiceAccountDetail/Secret.js",
    "pages/projects/components/Modals/KubeConfig.js",
    "pages/clusters/components/ResourceTable.js",
    "pages/projects/containers/Deployments/Detail/RevisionControl.js",
    "utils/devOpsRepos.js",
    "components/Modals/Create/Form.js",
    "pages/projects/components/Cards/Ingresses.js",
]:
    stem = rel[:-3] if rel.endswith(".js") else rel
    found = []
    for e in (".js", ".jsx", "/index.js", "/index.jsx"):
        q = SRC / f"{stem}{e}"
        if q.exists() and q.is_file():
            found.append(q.relative_to(SRC).as_posix())
    # also exact
    q = SRC / rel
    if q.exists() and q.is_file() and q.relative_to(SRC).as_posix() not in found:
        found.append(q.relative_to(SRC).as_posix())
    print(rel, "FOUND", found, "KNOWN", pairs.get(rel), pairs.get(stem + "/index.js"))
