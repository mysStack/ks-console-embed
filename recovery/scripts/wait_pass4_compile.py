#!/usr/bin/env python3
"""Wait for 8099 after restart. HTTP 200 is enough; log 'compiled' may never flush."""
from __future__ import annotations

import re
import time
import urllib.request
from pathlib import Path

LOG = Path("/tmp/kse-v3-webpack-8099.log")
URL = "http://127.0.0.1:8099/login"


def log_tail() -> str:
    if not LOG.is_file():
        return ""
    data = LOG.read_bytes()
    return data[-8000:].decode("utf-8", "replace")


def has_error(text: str) -> bool:
    if re.search(r"^ERROR in |webpack compiled with \d+ error", text, re.M):
        if "WARNING in DefinePlugin" in text and "compiled with 2 warnings" in text:
            return False
        if re.search(r"webpack compiled with [1-9]\d* error", text):
            return True
        if re.search(r"^ERROR in ", text, re.M):
            return True
    return False


print("wait login 200", flush=True)
ok = False
bundle = None
for i in range(60):
    tail = log_tail()
    if has_error(tail):
        print("LOG_ERROR", flush=True)
        print(tail[-2000:], flush=True)
        raise SystemExit(2)
    try:
        req = urllib.request.Request(URL, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=15) as resp:
            code = resp.status
            html = resp.read().decode("utf-8", "replace")
    except Exception as exc:  # noqa: BLE001
        print(f"poll {i} fail {type(exc).__name__}", flush=True)
        time.sleep(5)
        continue
    print(f"poll {i} http {code} html {len(html)}", flush=True)
    if code != 200:
        time.sleep(5)
        continue
    scripts = re.findall(r'src="(/[^"]+\.js)"', html)
    app = [s for s in scripts if "/app." in s and "vendors-" not in s]
    print("scripts", scripts[:6], "app", app, flush=True)
    if not app:
        time.sleep(5)
        continue
    try:
        with urllib.request.urlopen(
            urllib.request.Request("http://127.0.0.1:8099" + app[0], headers={"User-Agent": "Mozilla/5.0"}),
            timeout=120,
        ) as resp:
            data = resp.read().decode("utf-8", "replace")
    except Exception as exc:  # noqa: BLE001
        print("bundle_fail", type(exc).__name__, flush=True)
        time.sleep(5)
        continue
    bundle = app[0]
    print("BUNDLE", bundle, "bytes", len(data), flush=True)
    print("named", data.count("src/named/"), flush=True)
    print("pages_login", data.count("src/pages/login"), flush=True)
    print("isPlainObject", data.count("isPlainObject"), flush=True)
    print("es.string.replace", data.count("es.string.replace"), flush=True)
    print("es.symbol.constructor", data.count("es.symbol.constructor"), flush=True)
    print("module-264 factory", data.count("./src/unpacked/module-264.js"), flush=True)
    print("module-64 factory", data.count("./src/unpacked/module-64.js"), flush=True)
    ok = True
    break

tail = log_tail()
print("--- log tail ---", flush=True)
print(tail[-2500:], flush=True)
if not ok:
    raise SystemExit("no bundle")
print("READY", bundle, flush=True)
