#!/usr/bin/env python3
"""Headless Chrome overlay check for /login and /dashboard. No credentials."""
from __future__ import annotations

from pathlib import Path
import json
import subprocess
import tempfile

BASE = "http://127.0.0.1:8099"
ROUTES = ("/login", "/dashboard")
OUT_DIR = Path("/tmp/kse-overlay-check")
OUT_DIR.mkdir(parents=True, exist_ok=True)
CHROME = "google-chrome"


def run(route: str) -> dict:
    name = route.strip("/").replace("/", "_") or "root"
    html_path = OUT_DIR / f"{name}.html"
    png_path = OUT_DIR / f"{name}.png"
    url = BASE + route
    cmd = [
        CHROME,
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--disable-dev-shm-usage",
        "--hide-scrollbars",
        "--window-size=1280,800",
        "--virtual-time-budget=20000",
        f"--screenshot={png_path}",
        f"--dump-dom",
        url,
    ]
    proc = subprocess.run(cmd, capture_output=True, text=True, timeout=90)
    html = proc.stdout or ""
    html_path.write_text(html, encoding="utf-8")
    overlay = "webpack-dev-server-client-overlay" in html
    iframe = 'id="webpack-dev-server-client-overlay"' in html
    return {
        "route": route,
        "returncode": proc.returncode,
        "html_bytes": len(html),
        "overlay_string": overlay,
        "overlay_iframe": iframe,
        "has_welcome": "Welcome" in html or "Log In" in html or "Username" in html,
        "has_dashboard": "Hello recovered" in html or "Last login" in html or "workspace" in html.lower(),
        "stderr_tail": (proc.stderr or "")[-400:],
        "png": str(png_path),
        "html": str(html_path),
    }


results = [run(r) for r in ROUTES]
print(json.dumps(results, indent=2))
(Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/OVERLAY_CHECK.json")).write_text(
    json.dumps(results, indent=2) + "\n", encoding="utf-8"
)
