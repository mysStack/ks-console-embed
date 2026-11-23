# Phase 6.0 — 项目切换数据上下文（2026-11-24）

8099 未改、未启动。未给 leftover 命名。未做镜像/K3s。未推送。

## 结论

**项目切换语义通过。** 从一个业务项目切到另一个后：

- URL 里的 namespace 变了
- 侧栏 Selector 标题跟着变
- 槽位里的项目 detail 跟着变
- 切换后的 kapis 请求打到新 namespace，不再打旧 namespace
- `#root` 仍非空

5.5 冻结包仍是 `app.90597b7c.js`。本轮为了让槽位跟随路由，又打了 `app.c4c2a814.js` 并在 8108 上验收。API `http://192.168.2.131:30880`。

## 验证命令

```
bash recovery/scripts/phase5_restart_static.sh
# 8099_not_listening；8108 仍是冻结主包或后续 context 包

cd recovery/phase5-node && node phase6_context_verify.mjs
# pass true
# api.afterToA 0 / afterToB 5
```

证据：`recovery/PHASE6-CONTEXT-VERIFY.json`，截图 `recovery/phase5-evidence/p6-context-*.png`。账号来自 `~/.bashrc` 的 `KS_TEST_*`，报告不写值。

## 未执行

- leftover 命名
- 日志/事件/终端
- 写操作
- Docker / K3s
- 提交远程
