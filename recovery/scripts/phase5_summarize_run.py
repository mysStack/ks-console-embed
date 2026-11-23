#!/usr/bin/env python3
import json
from pathlib import Path

p = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/PHASE5-RUN.json")
data = json.loads(p.read_text())
login = data.get("login") or {}
print("LOGIN", json.dumps({
    "attempted": login.get("attempted"),
    "credentialsPresent": login.get("credentialsPresent"),
    "submitStatus": login.get("submitStatus"),
    "loginResponse": login.get("loginResponse"),
    "note": login.get("note"),
    "afterText": (login.get("afterText") or "")[:200],
    "kapisBefore": login.get("kapisBefore"),
    "kapisAfter": login.get("kapisAfter"),
    "dashboardAfterLogin": login.get("dashboardAfterLogin"),
}, ensure_ascii=False, indent=2))
print("COUNTS", json.dumps(data.get("counts")))
print("FAILS")
for r in data["results"]:
    if r.get("result") != "pass":
        print(json.dumps({
            "id": r["id"],
            "path": r["path"],
            "result": r["result"],
            "text": ((r.get("react") or {}).get("text") or "")[:120].replace("\n", " | "),
            "pageErrors": (r.get("pageErrors") or [])[:3],
            "console": (r.get("consoleErrors") or [])[:3],
            "failed": (r.get("requestFailed") or [])[:3],
        }, ensure_ascii=False))
