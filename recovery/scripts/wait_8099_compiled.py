#!/usr/bin/env python3
import time
import urllib.request
from pathlib import Path

log = Path("/tmp/kse-v3-webpack-8099.log")
for i in range(40):
    text = log.read_text(errors="replace") if log.exists() else ""
    compiled = "compiled" in text.lower()
    err = "ERROR in" in text
    try:
        code = urllib.request.urlopen("http://127.0.0.1:8099/login", timeout=3).getcode()
    except Exception as exc:
        code = type(exc).__name__
    print(f"poll {i} compiled={compiled} err={err} http={code} log={len(text)}", flush=True)
    if compiled and code == 200:
        break
    if err:
        print(text[-1500:])
        break
    time.sleep(5)
print("--- log tail ---")
print((log.read_text(errors="replace") if log.exists() else "")[-1500:])
