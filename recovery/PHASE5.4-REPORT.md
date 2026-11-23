# Phase 5.4 — Deployment 详情容器组（2026-11-23）

8099 未改、未启动。原始 `dist/v3dist` 未覆盖。未给 leftover 命名。未提交、未推送。未对共享集群做创建/删除。

## 结论

**详情容器组列表通过。** 真实登录后，项目概览部署数与列表仍为 7；点进 Deployment 详情后容器组不再是空表，接口返回 1 条正在运行的 Pod。项目侧栏 Nav 仍可用。原版项目切换器 Selector **未挂上**。

当前包：`app.bec82f20.js`，8108，制品 `phase4-build`，API `http://192.168.2.131:30880`。不是集群部署，没有新镜像。

| 范围 | 结果 |
| --- | --- |
| 登录会话 | **通过**。不是 `recovered` |
| 项目 overview / deployments | **7 / 7** |
| 项目侧栏 Nav | **通过** |
| Deployment 详情容器组 | **通过**。总数 1，Pod 运行中 |
| 项目 Selector | **未完成**。挂上后项目页 `#root` 被卸空 |

## 容器组为空

详情页原先完全没有打 `/pods`。leftover `unpacked/module-851.js`（Pods 卡）在 `getParams` 里：

- 只用 `detail.selector`，为空就把 params 清掉，`fetchList` 直接返回
- default 分支写 `ownerReference=uid`（Deployment uid），原版是 `ownerKind=ReplicaSet`

没有改 leftover。把该模块映射到 dest `components/Cards/Pods/index.js`，按原版 `src/components/Cards/Pods/index.jsx` 改 `getParams`：`ownerKind=ReplicaSet`，并从 `spec.selector.matchLabels` / 模板 labels / `labels` 回退。

实际请求：

`GET /kapis/resources.kubesphere.io/v1alpha3/namespaces/<ns>/pods?ownerKind=ReplicaSet&labelSelector=app=web-matrix`

HTTP 200，`totalItems=1`。

## Selector

dest Selector 依赖 leftover `module-5045`。换成原版 `components/Modals/ProjectSelect` 后，项目 layout chunk 仍会同步加载 `EditForms/GrayReleaseComponent`，父类 `Forms/GrayRelease/Version` 经 `__recoverInterop` 为 `undefined`，`Object.getPrototypeOf` 抛错，整个项目页卸载。给父类加 React.Component 兜底仍失败（Version 自身求值就炸掉）。本轮 layout **不再静态引入 Selector**，只保留 Nav。

## 验证命令

```
npx webpack --config webpack.phase4.config.js --mode production
# webpack compiled successfully → app.bec82f20.js

bash recovery/scripts/phase5_restart_static.sh
# 8099_not_listening
# 8108 LISTEN

cd recovery/phase5-node && node phase5_4_verify.mjs
# pass true；detailPods true
```

账号来自 `~/.bashrc` 的 `KS_TEST_*`，报告不写值。证据：`recovery/PHASE5.4-VERIFY.json`，截图 `recovery/phase5-evidence/p54-*.png`。

## 仍存在的缺口

- 项目侧栏没有原版 Selector
- 工作台平台版本仍是 shim 的 3.3.2
- leftover 仍未命名
- 未做创建/删除
- 未做镜像构建/集群部署

## 里程碑

| 里程碑 | 状态 |
| --- | --- |
| M1 独立生产构建 | 已完成 |
| M2 真实登录进入业务页 | 已完成 |
| M3 核心只读路由 | 已完成（PHASE5.3） |
| M3 详情容器组 | **本轮通过** |
| 项目 Selector | 未完成 |
