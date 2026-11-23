#!/usr/bin/env python3
"""Wait until webpack CPU settles and /login returns HTTP 200."""
import subprocess
import time
import urllib.request

LOG = "/tmp/kse-v3-webpack-8099.log"


def webpack_cpu() -> str:
    out = subprocess.check_output(
        ["ps", "-eo", "pid,pcpu,cmd"], text=True, errors="replace"
    )
    lines = [ln for ln in out.splitlines() if "webpack" in ln and "grep" not in ln]
    return "\n".join(lines)


def fetch(url: str) -> tuple[int, int]:
    try:
        req = urllib.request.Request(url, headers={"Accept": "*/*"})
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = resp.read()
            return resp.status, len(data)
    except Exception as exc:  # noqa: BLE001
        print("fetch_err", type(exc).__name__, str(exc)[:80])
        return 0, 0


for i in range(48):
    print(f"=== poll {i} ===", flush=True)
    print(webpack_cpu(), flush=True)
    try:
        text = open(LOG, encoding="utf-8", errors="replace").read()
    except OSError:
        text = ""
    print("log_bytes", len(text), "log_lines", text.count("\n"), flush=True)
    if "compiled successfully" in text or "webpack compiled" in text:
        print("LOG_COMPILED", flush=True)
        print(text[-1500:], flush=True)
        break
    if "Failed to compile" in text or "ERROR in" in text:
        print("LOG_FAIL", flush=True)
        print(text[-2000:], flush=True)
        raise SystemExit(1)
    time.sleep(5)
else:
    print("timeout waiting log compile marker", flush=True)

code, nbytes = fetch("http://127.0.0.1:8099/login")
print("login", code, nbytes, flush=True)
code2, nbytes2 = fetch("http://127.0.0.1:8099/dashboard")
print("dashboard", code2, nbytes2, flush=True)
print(webpack_cpu(), flush=True)
if code != 200 or code2 != 200:
    raise SystemExit(2)
