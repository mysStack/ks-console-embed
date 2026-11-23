# Phase 5.3 — M3 收口（2026-11-23）

8099 未改、未启动。原始 `dist/v3dist` 未覆盖。未给 leftover 命名。未提交、未推送。未对共享集群做创建/删除。

## 结论

**M3 只读核心路由通过。** 真实登录后，项目概览部署计数与 Deployment 列表总数一致；项目侧栏 Nav 可见且可跳转；可以从列表进入 Deployment 详情。没有做创建/删除。

当前包：`app.1b2d0355.js`，8108，制品 `phase4-build`，API `http://192.168.2.131:30880`。

| 范围 | 结果 |
| --- | --- |
| 登录会话 | **通过**。不是 `recovered` |
| 项目 overview 部署计数 | **7** |
| 项目 deployments 列表总数 | **7**，与概览一致；列表 API HTTP 200、7 条 |
| 项目侧栏 Nav | **通过**。`.ks-page-side` / `.ks-page-nav` 可见，点击可从工作负载回到概览 |
| Deployment 详情 | **通过**。进入 `/deployments/<name>/resource-status`，资源状态 1/1 副本 |
| 创建 / 删除 | **未做** |

## 列表 0 vs 概览 7

不是 URL 或配额算法错误。列表接口

`/kapis/resources.kubesphere.io/v1alpha3/namespaces/<ns>/deployments?sortBy=updateTime`

返回 HTTP 200、`totalItems=7`。此前 Phase 5.2 截图过早，表格还在 loading。本轮等到「总数：N」再读，两边都是 7。

## 侧栏 Nav

恢复出的 `pages/projects/layout.js` 一直走嵌入式 Fragment，没有原版 `ks-page-side`。按 `kse-console-v3/src/pages/projects/containers/Base/List/index.jsx` 改回 `Nav` + `ks-page` 主从布局。

`Nav` / `NavItem` 的 `{ Component }` 具名导入在 webpack 5 + react CJS 下是 `undefined`，`class extends` 会在 `Object.getPrototypeOf` 炸掉。改成 `import * as module553` 后 `module553.Component`，与 layout 一致。**没有改 leftover 文件。**

项目切换器 `pages/projects/components/Selector` 仍依赖 leftover `module-5045`，同步打进项目 chunk 后会加载 `EditForms/GrayReleaseComponent`（父类 `Forms/GrayRelease/Version` 经 `__recoverInterop` 为 `undefined`），整个项目页 `#root` 被卸空。本轮侧栏只挂 Nav，不挂该 Selector。原版顶部项目切换器因此还没有。

## 验证命令

```
npx webpack --config webpack.phase4.config.js --mode production
# webpack compiled successfully → app.1b2d0355.js

bash recovery/scripts/phase5_restart_static.sh
# 8099_not_listening
# 8108 LISTEN  phase4-build  apiOrigin http://192.168.2.131:30880

cd recovery/phase5-node && node phase5_3_list.mjs
# overviewDep 7  listTotal 7  list API 200/7

cd recovery/phase5-node && node phase5_3_verify.mjs
# pass true；5/5 checks
```

账号来自 `~/.bashrc` 的 `KS_TEST_*`，报告不写值。Playwright 证据：`recovery/PHASE5.3-VERIFY.json`、`recovery/phase5-evidence/p53-*.png`。

## 仍存在的缺口

- 项目侧栏没有原版 Selector（项目切换），避免 leftover `module-5045` 拖垮项目 chunk。
- Deployment 详情资源状态里「容器组」表格本轮显示空（副本卡是 1/1）。未继续追。
- 详情页不再显示项目侧栏（走详情布局，符合原版）。
- 工作台平台版本仍是 shim 的 3.3.2。
- leftover 仍未命名。
- 未做创建/删除。

## 里程碑

| 里程碑 | 状态 |
| --- | --- |
| M1 独立生产构建 | 已完成 |
| M2 真实登录进入业务页 | 已完成 |
| M3 核心业务路由和操作 | **只读核心路由通过；写操作未做** |
