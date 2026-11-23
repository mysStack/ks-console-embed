#!/usr/bin/env bash
set -euo pipefail
ROOT=/home/bruce/code/ks-develop/kse-console-v3
OUT=$ROOT/recovery/scripts
echo "=== webpack pid / 8099 ==="
ps -p 2187792 -o pid,etime,cmd --no-headers || echo "pid 2187792 dead"
ss -ltn | grep 8099 || echo "8099 down"
echo "=== empty-render ==="
python3 "$OUT/scan_empty_render60.py"
echo "=== cjs-esm ==="
python3 "$OUT/scan_cjs_esm60.py"
echo "=== vendor ==="
python3 "$OUT/scan_vendor_fingerprints16.py"
echo "=== empty-css ==="
python3 "$OUT/scan_empty_css60.py"
echo "=== named count ==="
python3 "$OUT/count_named.py"
echo "=== numeric require leftover ==="
python3 "$OUT/scan_numeric_require_leftover.py"
echo "DONE"
