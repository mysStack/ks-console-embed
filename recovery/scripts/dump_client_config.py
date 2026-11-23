#!/usr/bin/env python3
import json
from pathlib import Path

try:
    import yaml
except ImportError:
    raise SystemExit("need pyyaml")

src = Path("/home/bruce/code/ks-develop/kse-console-v3/server/config.yaml")
dest = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/client-config.json")
data = yaml.safe_load(src.read_text())
client = data["client"]
dest.write_text(json.dumps(client, indent=2, ensure_ascii=False) + "\n")
print({"keys": list(client.keys()), "bytes": dest.stat().st_size})
