#!/usr/bin/env bash
set -euo pipefail
ROOT=/home/bruce/code/ks-develop/kse-console-v3
SRC=$ROOT/recovery/react-app/phase4-build
FREEZE=$ROOT/recovery/freeze/phase5.5-90597b7c
mkdir -p "$FREEZE/phase4-build"
rsync -a --delete "$SRC/" "$FREEZE/phase4-build/"
(
  cd "$FREEZE"
  find phase4-build -type f | sort | xargs sha256sum > SHA256SUMS.phase4-build
  sha256sum webpack.config.js webpack.phase4.config.js \
    PHASE5.5-REPORT.md PHASE5.5-VERIFY.json \
    corejs-aliases.js corejs-shim-aliases.js recharts-aliases.js \
    > SHA256SUMS.configs
)
MAIN=$(awk '/\/app\.90597b7c\.js$/{print $1}' "$FREEZE/SHA256SUMS.phase4-build")
echo "main_sha256 $MAIN"
echo "phase4_files $(wc -l < "$FREEZE/SHA256SUMS.phase4-build")"
echo "phase4_bytes $(du -sb "$FREEZE/phase4-build" | awk '{print $1}')"
test "$MAIN" = "2a66f2f745ce641d37b32272948e0ed380455d23e19bd959a2a99519ae54fa99"
echo freeze_chunks_ok
