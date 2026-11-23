#!/usr/bin/env python3
"""Wait for 8099 after alias restart. HTTP 200 + Accept text/html is enough."""
from __future__ import annotations

import re
import time
import urllib.error
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
    return LOG.read_bytes()[-12000:].decode("utf-8", "replace")


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
for i in range(72):
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
    print("pages_login", data.count("src/pages/login"), flush=True)
    print("es.array.push", data.count("es.array.push"), flush=True)
    print("es.array.includes", data.count("es.array.includes"), flush=True)
    print("es.date.to-json", data.count("es.date.to-json"), flush=True)
    print("es.promise.finally", data.count("es.promise.finally"), flush=True)
    print("es.error.cause", data.count("es.error.cause"), flush=True)
    print("es.symbol.for", data.count("es.symbol.for"), flush=True)
    print("esnext.set.union", data.count("esnext.set.union"), flush=True)
    print("esnext.set.difference", data.count("esnext.set.difference"), flush=True)
    print("module-28 factory", data.count("./src/unpacked/module-28.js"), flush=True)
    print("module-84 factory", data.count("./src/unpacked/module-84.js"), flush=True)
    print("module-191 factory", data.count("./src/unpacked/module-191.js"), flush=True)
    print("module-196 factory", data.count("./src/unpacked/module-196.js"), flush=True)
    print("module-249 factory", data.count("./src/unpacked/module-249.js"), flush=True)
    print("module-586 factory", data.count("./src/unpacked/module-586.js"), flush=True)
    print("module-684 factory", data.count("./src/unpacked/module-684.js"), flush=True)
    print("core-js3", data.count("core-js3"), flush=True)
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
