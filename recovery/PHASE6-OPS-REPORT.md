# Phase 6 — 只读运维能力（2026-11-24）

8099 未改、未启动。原始 `dist/v3dist` 未覆盖。未给 leftover 命名。未做镜像/K3s。未做创建/删除。

基线提交 `0c3b9edf` 已推到 `feature/v3-parity`。本轮是对该提交审查意见的修复，代码已改在工作区，**尚未提交、尚未推送**。

## 结论

**只读运维浏览通过。** 真实登录后，8108 上可查看 Deployment / StatefulSet / DaemonSet / Pod / Service / Ingress / ConfigMap / Secret 的列表和详情；Pod 事件表有真实数据；容器日志走 Kubernetes `/log` 接口返回 200；容器终端页对 `kapis/terminal.kubesphere.io` 建立 WebSocket，并且收到了双向帧。

当前包：`app.856bd610.js`，8108，制品 `phase4-build`，API `http://192.168.2.131:30880`。Phase 5.5 冻结包仍是 `app.90597b7c.js`。

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

## 本轮修了什么

`0c3b9edf` 已完成只读运维闭环。随后按审查意见修了：

1. PVC 映射失败不再返回原始对象。`mapFetchedPvcVolumes` 在 mapper 不可用时抛错并打日志；调用时再 `require("utils/object.mapper")`。
2. 8108 WebSocket 代理增加握手超时、空闲超时、101 校验、`finally` 关闭；只转发 `/kapis/terminal.kubesphere.io/`。
3. `/terminal` 校验 `cluster/projects/pods/containers` 以及 kubectl、nodename 必要参数；不匹配时不进入终端初始化。
4. 容器切换用序号只接受最后一次请求；`fetchPod` / `kubeWebsocketUrl` 失败会记录错误。
5. 验收脚本监听 `framesent` / `framereceived` / `socketerror`，并补了非法路径和真实 PVC 详情检查。

## 验证命令

```
cd recovery/phase5-node && node --test review_fixes.test.cjs
# 7 pass

cd recovery/scripts && python3 test_phase5_ws_proxy.py
# 5 pass

npx webpack --config webpack.phase4.config.js --mode production
# webpack compiled successfully → app.856bd610.js

bash recovery/scripts/phase5_restart_static.sh
# 8099_not_listening
# 8108 LISTEN

cd recovery/phase5-node && node phase5_5_verify.mjs
# pass true

cd recovery/phase5-node && node phase6_ops_verify.mjs
# pass true
```

账号来自 `~/.bashrc` 的 `KS_TEST_*`，报告不写值。证据：`recovery/PHASE6-OPS-VERIFY.json`，截图 `recovery/phase5-evidence/p6v-*.png`。

## 未执行

- leftover 命名
- 创建 / 修改 / 删除
- Docker 镜像
- K3s 部署
- kubectl / nodename 终端的在线浏览器验收（有路径解析单测，未对集群发起这两类 exec）
- 双容器页面点击切换的在线验收（有 last-write-wins 单测）
- 提交 / 推送本轮审查修复

## 仍存在的风险

- 终端页走独立 `/terminal` 路由和 8108 的 WS 代理，不是原版独立 webpack entry
- 容器终端是交互式 `pods/exec`，只读浏览验收不能覆盖容器内写操作；实际能力由后端 RBAC 控制
- 日志仍用 leftover ContainerLog，不是 kse-console-v3 里那份带防抖的源码
- Selector 仍挂在 layout 槽位外
- 工作台平台版本仍是 shim 的 3.3.2
