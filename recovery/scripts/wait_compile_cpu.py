#!/usr/bin/env python3
"""Wait until webpack pcpu decays and compile log flushes."""
import subprocess
import time

LOG = "/tmp/kse-v3-webpack-8099.log"


def pcpu() -> float:
    out = subprocess.check_output(["ps", "-eo", "pcpu,cmd"], text=True, errors="replace")
    best = 0.0
    for ln in out.splitlines():
        if "webpack" in ln and "npm exec" not in ln and "sh -c" not in ln:
            try:
                best = max(best, float(ln.split()[0]))
            except ValueError:
                pass
    return best


for i in range(90):
    cpu = pcpu()
    try:
        text = open(LOG, encoding="utf-8", errors="replace").read()
    except OSError:
        text = ""
    print(f"poll {i} cpu={cpu:.1f} log={len(text)}", flush=True)
    if "Failed to compile" in text or "ERROR in" in text:
        print(text[-2500:])
        raise SystemExit(1)
    if len(text) > 800 and cpu < 8:
        print("READY_LOG")
        print(text[-2000:])
        break
    if cpu < 3 and i > 6:
        print("READY_CPU_IDLE")
        print(text[-2000:])
        break
    time.sleep(8)
else:
    print("TIMEOUT")
    raise SystemExit(2)
