# Phase 5.2 — 真实登录后的核心业务路由回归（2026-11-23）

8099 未改、未启动。原始 `dist/v3dist` 未覆盖。未给 leftover 命名。未提交、未推送。未对共享集群做创建/删除。

## 结论

**M3 只读核心路由基本通过，写操作和详情未做。**

真实登录后可以进入工作台、集群列表、企业空间、项目概览。项目 Deployment 列表壳能打开。没有做创建/删除，没有稳定点进详情。

| 范围 | 结果 |
| --- | --- |
| 登录会话 | **通过**。不是 `recovered` |
| 工作台 / Settings / Access | **通过** |
| 集群 Deployments / Projects / Nodes / Pods / Services | **通过**（此前冒烟见过 Total 141；本轮列表有一次空结果，页面仍在） |
| 企业空间 overview / projects | **通过**（本轮修复后） |
| 项目 overview | **通过**。真实配额与资源计数（7 容器组 / 7 部署 / 7 服务） |
| 项目 deployments | **部分通过**。工作负载页能开，本轮表格为 0 |
| 详情 / 创建 / 删除 | **未完成** |

当前包：`app.480fec4d.js`，8108，API `http://192.168.2.131:30880`。

## 本轮修复（空 #root）

企业空间页曾经渲染过（htmlMax 1548）然后被卸掉。

原因：Webpack 4 `unpacked/module-139.js`（node-module-decorator）把 `module.loaded` 收成只读 getter。Webpack 5 随后 `module.loaded = true` 抛 `TypeError`，`import()` 失败，React 树卸载。

处理：webpack alias 到 `src/shims/webpack4-nmd.js`（直接返回 module）。**没有改 leftover 文件。**

项目页随后能挂上 App，但 `getRoutes` 拿不到默认子路由。恢复出的 `pages/projects/layout.js` 写成了 `navs[0].children`，原版源码是 `navs[0].items[0]`。按 `kse-console-v3/src/pages/projects/containers/Base/List/index.jsx` 改回 `items[0]`。这是 dest 里一处已核对的反编译偏差，不是编业务逻辑。

## 验证命令

```
npx webpack --config webpack.phase4.config.js --mode production
# webpack compiled successfully → app.480fec4d.js

bash recovery/scripts/phase5_restart_static.sh
# 8099_not_listening

cd recovery/phase5-node && node phase5_2_verify.mjs
# 8/8 只读路由有页面文案；用户不是 recovered
```

账号来自 `~/.bashrc` 的 `KS_TEST_*`，报告不写值。

## 路由证据（修复后）

`recovery/PHASE5.2-VERIFY.json`

| 请求 | 实际路径 | 判定 |
| --- | --- | --- |
| `/dashboard` | `/dashboard` | 通过，真实用户问候 |
| `/clusters/default/deployments` | 同 | 通过，表格壳 |
| `/workspaces/dev-workspace/overview` | `.../overview/usage` | 通过，无监控数据 |
| `/workspaces/dev-workspace/projects` | 同 | 通过，列出项目 |
| `/workspaces/system-workspace/overview` | `.../overview/usage` | 通过 |
| `/settings` | `/settings/base-info` | 通过 |
| 已发现的用户项目 `/overview` | 同 | 通过，7/7/7 计数 |
| 同项目 `/deployments` | 同 | 页面通过，表格 0 |

截图：`recovery/phase5-evidence/p52-fix-*.png`。

## 仍存在的缺口

- 项目 layout 走的是嵌入式 Fragment 分支，没有原版侧栏 Nav。
- 项目 Deployment 列表与概览计数不一致（0 vs 7），未继续追 API。
- 未点进详情，未做创建/删除。
- 工作台平台版本仍是 shim 的 3.3.2。
- leftover 仍未命名。

## 里程碑

| 里程碑 | 状态 |
| --- | --- |
| M1 独立生产构建 | 已完成 |
| M2 真实登录进入业务页 | 已完成 |
| M3 核心业务路由和操作 | **只读路由基本通过；操作未做** |
