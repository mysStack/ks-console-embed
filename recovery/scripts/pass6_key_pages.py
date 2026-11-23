#!/usr/bin/env python3
"""Key page route list from promoted src/pages. Browser overlay is separate."""
from pathlib import Path
import json

OUT = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/PASS6_ROUTES.json")
routes = [
    {"url": "/clusters/default/volumes", "why": "historically gitVersion.replace"},
    {"url": "/clusters/default/nodes", "why": "original items.filter"},
    {"url": "/clusters/default/members", "why": "historically items.length"},
    {"url": "/clusters/default/roles", "why": "historically items.length"},
    {"url": "/clusters/default/networkpolicies", "why": "historically store.map"},
    {"url": "/clusters/default/log-collections/logs", "why": "historically store.length"},
    {"url": "/clusters/default/gateways/cluster", "why": "cluster gateway routed"},
    {"url": "/clusters/default/projects", "why": "remaining cluster list"},
    {"url": "/clusters/default/volume-snapshots", "why": "same getKsVersion.replace family"},
    {"url": "/clusters/default/overview", "why": "cluster overview"},
    {"url": "/clusters/default/base-info", "why": "cluster settings-like"},
    {"url": "/access/roles", "why": "platform roles items.length"},
    {"url": "/workspaces/system-workspace/members", "why": "workspace members"},
    {"url": "/workspaces/system-workspace/roles", "why": "workspace roles"},
    {"url": "/workspaces/system-workspace/gateways/workspace", "why": "workspace gateway routed"},
    {"url": "/workspaces/system-workspace/federatedprojects", "why": "federated list routed"},
    {"url": "/system-workspace/federatedprojects/default/overview", "why": "federated overview if routed"},
    {"url": "/system-workspace/clusters/default/projects/kubesphere-system/members", "why": "project members if routed"},
    {"url": "/system-workspace/clusters/default/projects/kubesphere-system/roles", "why": "project roles if routed"},
    {"url": "/system-workspace/clusters/default/projects/kubesphere-system/networkpolicies", "why": "project networkpolicies"},
    {"url": "/workspaces/system-workspace/projects", "why": "workspace projects remaining"},
    {"url": "/settings/third-login", "why": "settings remaining"},
]
OUT.write_text(json.dumps(routes, indent=2) + "\n")
print("n", len(routes))
for r in routes:
    print(r["url"])
