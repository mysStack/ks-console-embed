#!/usr/bin/env python3
from pathlib import Path
import json
import re

ROOT = Path("/home/bruce/code/ks-develop/kse-console-v3")
PAGES = ROOT / "recovery/react-app/src/pages"
CORE = ROOT / "recovery/react-app/src/core/routes.js"
PATH_RE = re.compile(r"""path:\s*[`'"]([^`'"]+)[`'"]""")
LAZY_RE = re.compile(r"""import\(["']([^"']+)["']\)""")


def main():
    core = CORE.read_text(encoding="utf-8", errors="ignore")
    top = []
    for m in PATH_RE.finditer(core):
        top.append(m.group(1))
    lazy = LAZY_RE.findall(core)
    nested = {}
    for routes in PAGES.rglob("routes.js"):
        rel = str(routes.relative_to(PAGES)).replace("\\", "/")
        text = routes.read_text(encoding="utf-8", errors="ignore")
        nested[rel] = sorted(set(PATH_RE.findall(text)))
    smoke = [
        {"id": "login", "path": "/login", "auth": "public", "layer": "P0"},
        {"id": "root", "path": "/", "auth": "shim-user", "layer": "P0"},
        {"id": "dashboard", "path": "/dashboard", "auth": "shim-user", "layer": "P1"},
        {"id": "support", "path": "/support", "auth": "shim-user", "layer": "P1"},
        {"id": "clusters", "path": "/clusters", "auth": "shim-user", "layer": "P1"},
        {"id": "cluster-overview", "path": "/clusters/default/overview", "auth": "shim-user", "layer": "P1"},
        {"id": "cluster-deployments", "path": "/clusters/default/deployments", "auth": "shim-user", "layer": "P1"},
        {"id": "cluster-projects", "path": "/clusters/default/projects", "auth": "shim-user", "layer": "P1"},
        {"id": "cluster-nodes", "path": "/clusters/default/nodes", "auth": "shim-user", "layer": "P1"},
        {"id": "cluster-volumes", "path": "/clusters/default/volumes", "auth": "shim-user", "layer": "P1"},
        {"id": "access", "path": "/access", "auth": "shim-user", "layer": "P1"},
        {"id": "workspaces", "path": "/access/workspaces", "auth": "shim-user", "layer": "P1"},
        {"id": "settings", "path": "/settings", "auth": "shim-user", "layer": "P1"},
        {"id": "workspace-home", "path": "/workspaces/system-workspace", "auth": "shim-user", "layer": "P1"},
        {"id": "project-deployments", "path": "/system-workspace/clusters/default/projects/default/deployments", "auth": "shim-user", "layer": "P1"},
    ]
    out = {
        "core_paths": top,
        "core_lazy_imports": lazy,
        "nested_route_files": {k: v for k, v in nested.items() if v},
        "nested_path_count": sum(len(v) for v in nested.values()),
        "smoke": smoke,
        "note": (
            "globals-shim injects username=recovered and disableAuthorization=true. "
            "That is recovered-app behavior, not a Phase 5 auth bypass. "
            "P2 still posts /login with KS_TEST_* and records the real API result."
        ),
    }
    dest = ROOT / "recovery/PHASE5-ROUTES.json"
    dest.write_text(json.dumps(out, indent=2) + "\n")
    print(json.dumps({"core_paths": top, "lazy": lazy, "nested_path_count": out["nested_path_count"], "smoke": len(smoke)}))


if __name__ == "__main__":
    main()
