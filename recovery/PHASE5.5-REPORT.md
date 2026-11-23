# Phase 5.5 — 项目 Selector（2026-11-23）

8099 未改、未启动。原始 `dist/v3dist` 未覆盖。未给 leftover 命名。未提交、未推送。未对共享集群做创建/删除。

## 结论

**项目切换器通过。** 真实登录后，8108 上 `phase4-build` 的项目页侧栏出现原版项目切换器；点开弹层能看到项目列表，点击项目卡能跳到对应项目页，`#root` 不为空。详情容器组回归仍通过。

当前包：`app.90597b7c.js`，8108，制品 `phase4-build`，API `http://192.168.2.131:30880`。不是集群部署，没有新镜像。

| 范围 | 结果 |
| --- | --- |
| 登录会话 | **通过**。不是 `recovered` |
| 项目 overview | **通过**。部署 7 |
| 项目侧栏 Nav | **通过** |
| 项目 Selector 标题 | **通过** |
| Selector 弹层列表 | **通过**。可见弹层，至少 8 张项目卡 |
| Selector 跳转 | **通过**。仍在 `/projects/<ns>/overview`，Nav 还在 |
| `#root` | **通过**。跳转前后都非空 |
| Deployment 详情容器组 | **回归通过**。HTTP 200，总数 1 |

## 为什么不能静态挂进项目 layout

项目 layout 所在异步 chunk 一旦同步引入 Selector / ProjectSelect，chunk 求值会在 webpack `getPrototypeOf` 处炸掉，`#root` 被卸空。Nav 单独挂时该 chunk 是好的。

本轮把 Selector 放到独立异步块，由 bootstrap 在项目侧栏预留槽位里挂上；弹层再异步加载 `components/Modals/ProjectSelect`。dest ProjectSelect 未使用的 `inject("rootStore")` 已去掉，否则槽位在 MobX Provider 外会拿不到 store。

## 验证命令

```
npx webpack --config webpack.phase4.config.js --mode production
# webpack compiled successfully → app.90597b7c.js

bash recovery/scripts/phase5_restart_static.sh
# 8099_not_listening
# 8108 LISTEN

cd recovery/phase5-node && node phase5_5_verify.mjs
# pass true；selectorVisible / modalOpens / modalHasProjects / jumpKeepsProject / rootNotEmpty 均为 true

cd recovery/phase5-node && node phase5_4_verify.mjs
# pass true；detailPods true
```

账号来自 `~/.bashrc` 的 `KS_TEST_*`，报告不写值。证据：`recovery/PHASE5.5-VERIFY.json`，截图 `recovery/phase5-evidence/p55-*.png`。

## 未执行

- 镜像构建、推送、集群部署、rollout
- leftover 命名
- 创建/删除类写操作
- Gate A / 30881 A/B
- 提交 / 推送

## 仍存在的风险

- Selector 不在项目 layout 的 React 树里，靠侧栏槽位挂载；layout 重绘槽位时依赖 `dangerouslySetInnerHTML` 保住宿主节点
- 弹层标题上的企业空间链接仍会进工作台（原版如此），验收点的是项目卡
- 工作台平台版本仍是 shim 的 3.3.2
- leftover 仍未命名
- 未做镜像/集群部署

## 里程碑

| 里程碑 | 状态 |
| --- | --- |
| M1 独立生产构建 | 已完成 |
| M2 真实登录进入业务页 | 已完成 |
| M3 核心只读路由 | 已完成（PHASE5.3） |
| M3 详情容器组 | 已完成（PHASE5.4，本轮回归通过） |
| 项目 Selector | **本轮通过** |
