#!/usr/bin/env python3
"""Load /login and /dashboard in Chrome and print webpackChunk unpacked ids.

Uses Chrome remote debugging + a tiny Node CDP client (no extra npm packages).
"""
from __future__ import annotations

from pathlib import Path
import json
import os
import socket
import subprocess
import time
import urllib.request

OUT = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/LIVE_WEBPACK_CHUNK.json")
NODE_CLIENT = Path("/tmp/kse-cdp-eval.js")
PORT = 9333

NODE_CLIENT.write_text(
    r"""
const http = require("http");
const { WebSocket } = require("ws");
""",
    encoding="utf-8",
)
# ws may not exist. Use a pure-node HTTP/CDP via chrome's /json/runtime/evaluate? No.

# Fallback: chrome --headless dump via page.evaluate using puppeteer-core if present,
# otherwise inject a script URL that posts webpackChunk keys... can't modify app.

# Use Chrome DevTools Protocol over WebSocket with a 30-line Node implementation
# of the RFC6455 client is too heavy.
# Instead: start Chrome with --dump-dom after requesting a custom javascript:
#   javascript:void(...) cannot dump.

print("skip_node_ws")
print("will_use_chrome_virtual_time_and_performance_log")
