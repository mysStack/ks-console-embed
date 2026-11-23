#!/usr/bin/env python3
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
    print("app", app, flush=True)
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
    print("is-buffer-fallback", data.count("is-buffer-fallback"), flush=True)
    print("process-binding-types", data.count("process-binding-types"), flush=True)
    print("copy-arraybuffer", data.count("copy-arraybuffer"), flush=True)
    print("module-958 factory", data.count("./src/unpacked/module-958.js"), flush=True)
    print("module-1056 factory", data.count("./src/unpacked/module-1056.js"), flush=True)
    print("module-1648 factory", data.count("./src/unpacked/module-1648.js"), flush=True)
    print(tail[-800:], flush=True)
    ok = True
    break

if not ok:
    print("TIMEOUT", flush=True)
    print(log_tail()[-2000:], flush=True)
    raise SystemExit(1)
print("OK", bundle, flush=True)
