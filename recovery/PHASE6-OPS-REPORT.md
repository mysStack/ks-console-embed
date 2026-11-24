# Phase 6 — 只读运维能力（2026-11-24）

8099 未改、未启动。原始 `dist/v3dist` 未覆盖。未给 leftover 命名。未做镜像/K3s。未做创建/删除。

功能基线 `0c3b9edf` 和第一轮审查修复 `3e7fdbbf` 都已推到 `feature/v3-parity`。本轮是对 `3e7fdbbf` 复核意见的继续修复，代码在工作区，**尚未提交、尚未推送**。

## 结论

**只读运维浏览通过。** 真实登录后，8108 上可查看 Deployment / StatefulSet / DaemonSet / Pod / Service / Ingress / ConfigMap / Secret 的列表和详情；Pod 事件表有真实数据；容器日志走 Kubernetes `/log` 接口返回 200；容器终端页对 `kapis/terminal.kubesphere.io` 建立 WebSocket，并且收到了双向帧。

当前包：`app.adc7218c.js`，8108，制品 `phase4-build`，API `http://192.168.2.131:30880`，`readonly=true`。Phase 5.5 冻结包仍是 `app.90597b7c.js`。

| 范围 | 结果 |
| --- | --- |
| 真实登录 | **通过**。不是 `recovered` |
| Deployment 列表/详情 | **通过** |
| StatefulSet 列表/详情 | **通过** |
| DaemonSet 列表/详情 | **通过** |
| Pod 列表/详情 | **通过** |
| Pod 事件 | **通过**。表头齐全，有 kubelet 事件 |
| 容器日志 | **通过**。`GET /api/v1/namespaces/<ns>/pods/<name>/log` HTTP 200，页面有日志行 |
| 容器终端 | **通过**。WS `.../exec?container=web-matrix&shell=sh`，`framesSent=2` / `framesReceived=2` |
| 非法 `/terminal` 路径 | **通过**。显示 `Invalid terminal path`，没有新建 WebSocket |
| 真实 PVC 映射 | **通过**。Pod 详情能看到 claim `redis-data-redis-cluster-0` 和存储类 `openebs-hostpath` |
| Service / Ingress | **通过** |
| ConfigMap / Secret | **通过** |
| 项目切换上下文 | **Phase 5.5 回归通过**。本轮未回退 |
| 8108 只读代理 | **默认开启**。允许登录 POST，拦截 API 写方法；终端 exec 仍不是只读 |

## 已推送基线

- `0c3b9edf` 只读运维页面、日志、终端
- `3e7fdbbf` 第一轮审查：PVC 不再静默 fallback、WS 101/超时/路径限制、终端参数校验、双向帧验收

## 本轮修了什么（相对 3e7fdbbf）

1. 容器切换一开始就清空旧 `url`，失败时显示错误，不再保留容器 A 的终端。
2. `/terminal` 按精确长度校验：kubectl/nodename 为 4 段，容器终端为 10 段；允许一个尾部斜杠，拒绝多余段。
3. WebSocket 双向 pump 使用共享关闭信号：一侧结束后主动关掉对端 socket。
4. 8108 默认 `PHASE5_READONLY=1`：GET/HEAD 和登录/登出/csrf 可写，其它 POST/PUT/PATCH/DELETE 返回 403。这不是 KubeSphere RBAC，不能替代后端授权。容器终端仍是 `pods/exec`。
5. 报告与 `3e7fdbbf` 已推送状态对齐。

## 验证命令

```
cd recovery/phase5-node && node --test review_fixes.test.cjs
# 9 pass

cd recovery/scripts && python3 test_phase5_ws_proxy.py
# 7 pass

npx webpack --config webpack.phase4.config.js --mode production
# webpack compiled successfully → app.adc7218c.js

bash recovery/scripts/phase5_restart_static.sh
# 8099_not_listening
# 8108 LISTEN
# readonly=true

cd recovery/phase5-node && node phase5_5_verify.mjs
# pass true

cd recovery/phase5-node && node phase6_ops_verify.mjs
# pass true
```

账号来自 `~/.bashrc` 的 `KS_TEST_*`，报告不写值。证据：`recovery/PHASE6-OPS-VERIFY.json`，截图 `recovery/phase5-evidence/p6v-*.png`。

## 未执行 / 后续验收

- leftover 命名
- 创建 / 修改 / 删除
- Docker 镜像
- K3s 部署
- kubectl / nodename 终端的在线浏览器 exec
- 双容器页面点击切换的在线验收（已有 last-write-wins 和失败清 URL 单测）
- 提交 / 推送本轮复核修复

## 仍存在的风险

- 终端页走独立 `/terminal` 路由和 8108 的 WS 代理，不是原版独立 webpack entry
- 容器终端是交互式 `pods/exec`。8108 只读代理不能关掉这项能力；是否对用户开放应由后端 RBAC 控制
- `disableAuthorization: true` 只影响前端按钮，不是安全边界
- 日志仍用 leftover ContainerLog，不是 kse-console-v3 里那份带防抖的源码
- Selector 仍挂在 layout 槽位外
- 工作台平台版本仍是 shim 的 3.3.2
