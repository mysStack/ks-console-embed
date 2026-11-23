#!/usr/bin/env bash
set -euo pipefail
echo "---graph---"
python3 /home/bruce/code/ks-develop/kse-console-v3/recovery/scripts/phase4_entry_graph.py
echo "---syntax---"
python3 /home/bruce/code/ks-develop/kse-console-v3/recovery/scripts/phase4_classify_syntax.py
echo "---done---"
