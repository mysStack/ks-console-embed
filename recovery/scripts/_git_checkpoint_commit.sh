#!/usr/bin/env bash
set -euo pipefail
cd /home/bruce/code/ks-develop/kse-console-v3
git add recovery
git status --short -- recovery | head -40
echo "staged_recovery $(git diff --cached --name-only -- recovery | wc -l)"
echo "staged_other $(git diff --cached --name-only -- . ':!recovery' | wc -l)"
git commit -m "$(cat <<'EOF'
chore: 冻结 Phase 5.5 可运行恢复版并核对项目切换上下文

保存 app.90597b7c 制品与 SHA256；项目切换后路由、侧栏标题和新 namespace 的 API 已对齐。不包含 leftover 继续命名，不推送。
EOF
)"
git status -sb
git log -1 --oneline
echo checkpoint_ok
