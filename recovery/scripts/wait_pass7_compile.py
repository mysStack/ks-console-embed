#!/usr/bin/env python3
"""Wait for 8099 after pass7 alias restart."""
from __future__ import annotations

import re
import time
import urllib.request
from pathlib import Path

LOG = Path("/tmp/kse-v3-webpack-8099.log")
URL = "http://127.0.0.1:8099/login"
HEADERS = {
    "User-Agent": "Mozilla/5.0",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
}


def log_tail() -> str:
    if not LOG.is_file():
        return ""
    return LOG.read_bytes()[-16000:].decode("utf-8", "replace")


def has_error(text: str) -> bool:
    if re.search(r"webpack compiled with [1-9]\d* error", text):
        return True
    if re.search(r"^ERROR in ", text, re.M):
        if "WARNING in DefinePlugin" in text and "compiled with 2 warnings" in text:
            return False
        return True
    return False


print("wait login 200", flush=True)
ok = False
bundle = None
for i in range(80):
    tail = log_tail()
    if has_error(tail):
        print("LOG_ERROR", flush=True)
        print(tail[-2500:], flush=True)
        raise SystemExit(2)
    try:
        req = urllib.request.Request(URL, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=20) as resp:
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
    print("scripts", scripts[:8], "app", app, flush=True)
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
    print("engine-v8-version", data.count("engine-v8-version"), flush=True)
    print("engine-is-ie-or-edge", data.count("engine-is-ie-or-edge"), flush=True)
    print("array-reduce", data.count("array-reduce"), flush=True)
    print("engine-is-ios", data.count("engine-is-ios"), flush=True)
    print("schedulers-fix", data.count("schedulers-fix"), flush=True)
    print("engine-user-agent", data.count("engine-user-agent"), flush=True)
    print("module-117 factory", data.count("./src/unpacked/module-117.js"), flush=True)
    print("module-146 factory", data.count("./src/unpacked/module-146.js"), flush=True)
    print("module-505 factory", data.count("./src/unpacked/module-505.js"), flush=True)
    print("module-487 factory", data.count("./src/unpacked/module-487.js"), flush=True)
    print("module-377 factory", data.count("./src/unpacked/module-377.js"), flush=True)
    compiled = bool(re.search(r"compiled successfully|compiled with \d+ warning", tail))
    print("log_compiled_flush", compiled, "log_bytes", LOG.stat().st_size if LOG.is_file() else 0, flush=True)
    print(tail[-1500:], flush=True)
    ok = True
    break

if not ok:
    print("TIMEOUT", flush=True)
    print(log_tail()[-2000:], flush=True)
    raise SystemExit(1)
print("OK", bundle, flush=True)
