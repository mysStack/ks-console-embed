#!/usr/bin/env python3
from pathlib import Path

root = Path("/home/bruce/code/ks-develop/kse-console-v3/src")
cands = [
    "pages/workspaces/components/Modals/WorkspaceCreate",
    "pages/workspaces/components/Modals/QuotaEdit",
    "pages/workspaces/components/Modals/WorkspaceDelete",
    "pages/workspaces/components/Modals/FedProjectAddCluster",
]
for c in cands:
    found = []
    for ext in [".js", ".jsx", "/index.js", "/index.jsx"]:
        p = root / f"{c}{ext}"
        if p.exists():
            found.append(str(p.relative_to(root)))
    print(("OK  " if found else "MISS"), c, "->", found)
