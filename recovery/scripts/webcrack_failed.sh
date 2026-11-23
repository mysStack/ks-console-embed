#!/usr/bin/env bash
set -euo pipefail
cd /tmp
if [[ ! -x /tmp/node_modules/webcrack/src/cli-wrapper.js && ! -f /tmp/node_modules/webcrack/src/cli-wrapper.js ]]; then
  npm install --no-save webcrack@2.16.0
fi
IN=/home/bruce/code/ks-develop/kse-console-v3/recovery/webcrack-input
OUT=/home/bruce/code/ks-develop/kse-console-v3/recovery/webcrack-output
mkdir -p "$OUT"
for id in 958 1056 1648; do
  echo "==== ${id} ===="
  dest="$OUT/${id}"
  rm -rf "$dest"
  node /tmp/node_modules/webcrack/src/cli-wrapper.js "$IN/module-${id}.js" -o "$dest" || true
  echo "--- listing ---"
  find "$dest" -type f | head -20
  echo "--- preview ---"
  find "$dest" -type f -name '*.js' | head -3 | while read -r f; do
    echo "## $f"
    head -40 "$f"
  done
done
