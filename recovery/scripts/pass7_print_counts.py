#!/usr/bin/env python3
from pathlib import Path
import json

APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
print(json.dumps({k: v for k, v in json.loads((APP / "LIVE_CHUNK_COUNTS.json").read_text()).items() if k != "leftover_live"}, indent=2))
print("log_tail:")
print(Path("/tmp/kse-v3-webpack-8099.log").read_text(encoding="utf-8", errors="replace")[-1500:])
