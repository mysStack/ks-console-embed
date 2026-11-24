# Phase 6 — 只读运维能力（2026-11-24）

8099 未改、未启动。原始 `dist/v3dist` 未覆盖。未给 leftover 命名。未做镜像/K3s。未推送。未做创建/删除。

## 结论

**只读运维浏览通过。** 真实登录后，8108 上可查看 Deployment / StatefulSet / DaemonSet / Pod / Service / Ingress / ConfigMap / Secret 的列表和详情；Pod 事件表有真实数据；容器日志走 Kubernetes `/log` 接口返回 200；容器终端页出现 shell 提示符，并对 `kapis/terminal.kubesphere.io` 建立了 WebSocket。

当前包：`app.54b14619.js`，8108，制品 `phase4-build`，API `http://192.168.2.131:30880`。Phase 5.5 冻结包仍是 `app.90597b7c.js`。

| 范围 | 结果 |
| --- | --- |
| 真实登录 | **通过**。不是 `recovered` |
| Deployment 列表/详情 | **通过** |
| StatefulSet 列表/详情 | **通过** |
| DaemonSet 列表/详情 | **通过** |
| Pod 列表/详情 | **通过** |
| Pod 事件 | **通过**。表头齐全，有 kubelet 事件 |
| 容器日志 | **通过**。`GET /api/v1/namespaces/<ns>/pods/<name>/log` HTTP 200，页面有日志行 |
| 容器终端 | **通过**。`/terminal/cluster/...` 出现 `/ #`，WS `.../exec?container=web-matrix&shell=sh` |
| Service / Ingress | **通过** |
| ConfigMap / Secret | **通过** |
| 项目切换上下文 | **已在 Phase 6.0 通过**。本轮未回退 |

## 本轮修了什么

1. Pod 详情卡在 loading：`utils/workload.js` 的 `getWorkloadVolumes` 和 `object.mapper` 循环依赖，PVC mapper 在调用时是 `undefined`，`Array.map` 抛错。调用时再解析 mapper。
2. 容器日志 Tab 被恢复版加上了 `ksModule: "whizard-logging"`，原版 v3 没有这道闸。当前后端 `ksConfig` 也没有这个顶层模块键，Tab 被滤掉。按原版去掉。
3. `/terminal/...` 原先会命中企业空间路由。补了 `pages/terminal`、容器终端弹层，以及静态服务器的 WebSocket 反向代理。

## 验证命令

```
npx webpack --config webpack.phase4.config.js --mode production
# webpack compiled successfully → app.54b14619.js

bash recovery/scripts/phase5_restart_static.sh
# 8099_not_listening
# 8108 LISTEN

cd recovery/phase5-node && node phase6_ops_verify.mjs
# pass true
```

账号来自 `~/.bashrc` 的 `KS_TEST_*`，报告不写值。证据：`recovery/PHASE6-OPS-VERIFY.json`，截图 `recovery/phase5-evidence/p6v-*.png`。

## 未执行

- leftover 命名
- 创建 / 修改 / 删除
- Docker 镜像
- K3s 部署
- 提交 / 推送

## 仍存在的风险

- 终端页走独立 `/terminal` 路由和 8108 的 WS 代理，不是原版独立 webpack entry
- 日志仍用 leftover ContainerLog，不是 kse-console-v3 里那份带防抖的源码
- Selector 仍挂在 layout 槽位外
- 工作台平台版本仍是 shim 的 3.3.2
