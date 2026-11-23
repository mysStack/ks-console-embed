#!/usr/bin/env python3
import json
import urllib.error
import urllib.request
from pathlib import Path

APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
data = json.loads((APP / "LIVE_RESOURCES.json").read_text())
ok = fail = 0
for url in data["scripts"]:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            print("OK", resp.status, resp.getheader("Content-Length"), url.split("/")[-1][:80])
            ok += 1
    except urllib.error.HTTPError as e:
        print("FAIL", e.code, url.split("/")[-1][:80])
        fail += 1
    except Exception as e:
        print("FAIL", type(e).__name__, url.split("/")[-1][:80])
        fail += 1
print("ok", ok, "fail", fail, "n", len(data["scripts"]))
if fail:
    raise SystemExit(1)
