#!/usr/bin/env bash
set -euo pipefail
bash /home/bruce/code/ks-develop/kse-console-v3/recovery/scripts/_p6_status.sh
if ! curl -sf -o /dev/null http://127.0.0.1:8108/__phase5; then
  bash /home/bruce/code/ks-develop/kse-console-v3/recovery/scripts/phase5_restart_static.sh
fi
cd /home/bruce/code/ks-develop/kse-console-v3/recovery/phase5-node
node phase6_ops_probe.mjs
echo probe_done
