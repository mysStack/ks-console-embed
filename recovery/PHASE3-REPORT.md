# 阶段三 / 四：React 工程重建与构建验证

这不是 Gate A。输入是 Wakaru 拆出来的模块，输出是 `recovery/react-app`。没有覆盖 `dist/v3dist`，没有按截图重写页面，没有编业务逻辑。

## 模块分类（5761）

| 类别 | 数量 | 说明 |
| --- | ---: | --- |
| vendor | 1431 | `vendor` / `react-ace` chunk，以及 React / lodash 等指纹 |
| shared | 1274 | `common.js` |
| business | 512 | 业务 chunk 且含路由、store、`createElement` 或 `/kapis` |
| business-support | 2541 | 业务 chunk 里的辅助模块 |
| unknown | 3 | Wakaru 工厂恢复失败（lodash Buffer/process 包装） |

有名称线索的模块 306 个（路由、`module: "workspaces"` 这类字符串）。文件名仍是 `module-<id>.js`，避免猜路径把引用图弄断。对照表：`recovery/react-app/RECOVERED_NAMES.md`。

已确认并改成 npm 包的第三方：

- `module-553.js` → `react`
- `module-106.js` → `react-dom`
- `module-14.js` → `mobx`（namespace shim）
- `module-239.js` → `mobx-react`（namespace shim）
- `module-186.js` → `@kube-design/components`（namespace shim + CSS）
- `module-2.js` → `lodash`
- `module-1.js` → `prop-types`
- `module-3.js` → `classnames`
- `module-243.js` → `moment-mini`
- `module-244.js` → `qs`
- `module-83.js` → `history`
- `module-47.js` → `react-router`
- `module-433.js` → `react-router-dom`
- `module-431.js` → `mobx-react-router`
- `module-41.js` → `regenerator-runtime`（原生 `function*` 不再套 mark，避免 `_invoke is not a function`）
- `module-2034.js` → `react-modal`（Wakaru 丢掉 `_possibleConstructorReturn`）
- `module-1270.js` → `js-yaml@3`（browserify 整包，业务用 `safeLoad` / `safeDump`）
- `module-293.js` → `js-base64@2`（登录页 `Base64.encode`）
- `module-2343.js` → `markdown-it@8`（`new MarkdownIt(options)`）
- `module-910.js` → `file-saver@1`（`saveAs`）
- `module-5771.js` → `react-color@2`（`SwatchesPicker`）
- `module-5731.js` → `xterm@3.8.1`（终端 `Terminal` 公共 API + CSS）
- `module-1367.js` → `react-copy-to-clipboard@5`（`CopyToClipboard`）
- `module-3472.js` → `react-virtualized@9` `AutoSizer`
- `module-3474.js` → `react-virtualized@9` `CellMeasurerCache`
- `module-3475.js` → `react-virtualized@9` `CellMeasurer`
- `module-5775.js` → `react-virtualized@9` `List`
- `module-2165.js` → `react-resize-detector@4`（recharts `ResponsiveContainer` 用的检测器）
- 36 个已确认 `displayName`/`chartName` 的 recharts 组件 → `recharts@1.8.5`（`AreaChart`/`Bar`/`CartesianGrid`/`ResponsiveContainer` 等，别名在 `recharts-aliases.js`）
- `module-2882.js` → `react-input-autosize@3`（标签输入用的 `AutosizeInput`）
- `module-837.js` → `react-fast-compare@2`
- `module-2465.js` → `for-editor@0.3.4`（markdown 编辑器）
- `module-5774.js` → `react-mentions@4.0.2`（`Mention` / `MentionsInput`）
- `module-2053.js` → `react-file-reader@1.1.4`
- `module-2773.js` → `sortablejs@1.12.0`
- `module-1635.js` → `react-sortablejs@6.0.0`（`ReactSortable`）
- `module-5776.js` → `diff2html@3.1.6`（`html` / `parse`）
- `module-478.js` → `netmask@2.0.1`（`Netmask`）
- `module-1553.js` → `path-to-regexp@2.2.1`（业务侧 `compile` / default；react-router 自带的 `module-314` 已随 npm 替换）
- `module-1892.js` → `dagre@0.8.4`（`graphlib.Graph` / `layout`）
- `module-5299.js` → `react-ace@8.0.0`（`AceEditor` / `diff` / `split`）
- `module-5305.js` → `ace-builds@1.4.7` 的 yaml/groovy/chaos/vscode/searchbox（对照原 `AceEditor.jsx` 副作用，不跑拆包 webpack-resolver）
- `module-1123.js` → `ansi_up@5.0.0`（`VERSION` 5.0.0 / `ansi_to_html`）
- `module-5773.js` → `d3-zoom@1.8.3`（`zoom` / `zoomIdentity`）
- `module-893.js` → `d3-selection@1.4.1`（`select` / `event`，必须是 v1）
- `module-1258.js` → `d3-shape@1.3.7`（`line` / `curveBasis`）
- `module-2106.js` → `prismjs@1.27.0`（PromQL `languages` / `highlight`）
- `module-2107.js` → `prismjs/themes/prism.css`（拆包是空 CSS 占位）
- `module-662.js` → `nanoid@1.0.2` 的 `generate`（`src/utils` 的 `generateId`）
- `module-831.js` → `fast-copy@2.0.3`（EditBasicInfo 等 `copy(toJS(_originData))`）
- `module-1383.js` → `memoizee@0.4.14`（日志高亮 `markMemoizee`）
- `module-1387.js` → `strip-ansi@5.2.0`（日志 store `logStripANSI`）
- `module-1816.js` → `diff@4.0.2`（DiffYaml `createPatch`）
- `module-2104.js` → `fuse.js@6.4.6`（PromQL Suggestions `new Fuse`）
- `module-311.js` → `fuse.js@6.4.6`（kube-design 内部，186 已别名后不再进图）
- `module-3110.js` → `async-validator@1.8.5`（AppRepo URL `new Schema`）
- `module-238.js` → `async-validator@1.8.5`（kube-design 内部副本）
- `module-2016.js` → `lodash`（原 `lodash-es` 桶，仅 GatewayLog / LogSearch 引用）
- `module-5764.js` → `xterm@3.8.1` 的 `lib/addons/fit/fit`
- `module-756.js` → `whatwg-fetch@3.0.0`（`request.js` 副作用 polyfill）
- `module-2076.js` → `big.js@5.2.2`（告警规则 `Big.DP = 10`，版本字符串对齐）
- `module-717.js` → `semver@7.3.8`（live `getApiVersion` 362 用 `gte`；vendor 别名，不是 named 业务路径）
- **70** 个 live leftover `core-js@3.37.0` 别名（`corejs-aliases.js`）：54 个 modules 入口 + 9 个 internals/entries（`46`/`117`/`168`/`280`/`328`/`353`/`390`/`540`/`552`）+ 再 7 个全局 1-hit internals（`101` internal-state、`151` symbol-constructor-detection、`221` object-get-own-property-symbols、`227` regexp-exec-abstract、`263` does-not-exceed-safe-integer、`291` regexp-exec、`507` string-repeat）。recharts 1.8 仍要 `core-js/library` / `es6`，所以 `core-js@2.6.12` 留在 `node_modules/core-js`，没有把顶层 `core-js` 换成 3。2-hit 未别名：`254`/`812` Incorrect invocation、`70`/`1420` Accessors not supported、`132`/`5775` Invalid size；Set `difference`/`union` 等 esnext 与 v2 双文件仍未别名。

其余第三方仍是拆包文件，不当业务源码。`src/named/` 仍是对照表 re-export（1633），**不进 live 引用图**。唯一钉死的模块已迁进 `src/pages|components|stores|actions|utils|configs|core`。

`globals.config` 的 nav 来自仓库 `server/config.yaml` 的 `client`（导出为 `src/client-config.json`），不是手写菜单。恢复态仍打开 `disableAuthorization`。

## 工程

`recovery/react-app`

- 入口：`src/bootstrap.js` → `src/unpacked/entry.js`（`core/App`、`utils/index` 等前缀 import）
- 业务代码：唯一映射在 `src/pages|components|stores|actions|utils|configs|core`；未映射仍是 `src/unpacked/module-N.js`；旧 `unpacked/module-N.js` 对已提升模块是 stub re-export
- webpack `resolve.modules` 含 `src/`；`resolve.alias` 把 `pages`/`components`/`stores`/`actions`/`utils`/`configs`/`core`/`unpacked`（含 `prefix/`）指到 `recovery/react-app/src/<prefix>`
- 依赖清单：`package.json`（按指纹对齐的 React 16 / MobX 4 / kube-design 栈）
- 构建：Webpack 5。解包结果里有残缺 JSX（属性值是 Fragment、未加 `{}`），用 Babel 插件包一层后再转 `createElement`。

## 构建

`npx webpack --mode production`：**0 error**，496 warning。

产物在 `recovery/react-app/dist/`，主包 `app.639788c6.js`（1.9MB），另有按动态 import 打出的 chunk。

496 条 warning 全是 `Critical dependency: require function is used in a way in which dependencies cannot be statically extracted`，对应仍带动态 `require` 的模块，包括 3 个失败的 lodash 包装。

| 项 | 数量 |
| --- | ---: |
| Wakaru 写出 | 5761 |
| Wakaru 错误级失败 | 3 |
| 本次构建 error | 0 |
| 本次构建 warning | 496 |
| JSX 未完全还原 | 大部分仍是 `createElement`；少数文件有 Wakaru 吐出的 JSX |

## 提升进引用图（非 named 对照表）

`promote_named_into_graph.py`：KNOWN 1616 keys → **1511** 个唯一模块迁到 `src/<canonical>`（含 8 个 live 唯一 babel helper：`utils/babel-helpers/{asyncToGenerator,interopRequireDefault,initializerWarningHelper,get,possibleConstructorReturn,slicedToArray,nonIterableRest,superPropBase}`），另 **104** 个 extra 路径是 re-export 别名文件（磁盘 `src/{pages,components,stores,actions,utils,configs,core}` 共 **1615** `.js`）。`src/unpacked/`：**1511** stub 指向可读路径，**4249** 个未映射仍是 `module-N.js`（不猜路径；其中 **70** 个 core-js 走 webpack 别名，文件仍留在 unpacked）。`src/named/` 1633 仍在磁盘，webpack 模块图 `namedCount=0`。

8099 dashboard webpackChunk（Chrome CDP，已加载 66 个 JS resource）：pages 160 / components 475 / stores 54 / actions 34 / configs 21 / utils 13 / unpacked **1209** / named 0。主包 `app.163399b1.js` 含 `src/pages/login`、`src/core/App`、`src/utils/babel-helpers`（`named/pages/login` 0 次；`core-js3/modules` 752 次；`core-js3/internals` 1140 次）。eval-devtool factory key（主包+已加载 chunk）unpacked leftover **1705**。webpackChunk unpacked 仍是 **1209**：新别名的 internals 主要在主包，async chunk key 几乎不动。

当前 serve（webpack pid 3301848）：**0 error / 2 warning**（DefinePlugin NODE_ENV）。login/dashboard overlay-false。顶层仍是 `core-js@2.6.12` + `core-js3@npm:core-js@3.37.0`。未覆盖 `dist/v3dist`。

## 运行时（webpack-dev-server :8099）

已经能挂上 React 树，没有 webpack overlay。

| 路由 | 结果 |
| --- | --- |
| `/login` | 英文登录页（Welcome / Username or Email / Password / Log In + Logo） |
| `/dashboard` | Hello recovered / Last login / 空 workspace 提示 |
| `/support` | Community Support 完整版式（v3 chunk CSS 已挂上） |
| `/clusters` → `/clusters/default/overview` | Overview 挂上（配额/节点卡片为空，无 ks-apiserver） |
| `/access` → `/access/workspaces` | Access Control 侧栏 Workspaces / Users / Platform Roles，列表空态 |
| `/settings` → `/settings/base-info` | 平台 Basic Information（标题/Logo/Favicon/背景） |
| 未知路径 → `/404` | Not Found，倒计时回 Workbench |
| `/workspaces/system-workspace` → `.../overview/usage` | Workspace Overview 卡片挂上（监控无数据） |
| `/workspaces/system-workspace/projects` | 空项目态（No Project Found / Create） |
| `/:workspace/clusters/:cluster/projects/:namespace` | 无 ks-apiserver 时按原逻辑进 `/404`，没有 overlay |
| `/clusters/default/deployments` | 空 Deployment 态，无 overlay |
| `/clusters/default/projects` | User/System Projects 空态，无 overlay |
| `/clusters/default/pods` | 空 Pod 态，无 overlay |
| `/clusters/default/nodes` | 空 Node 态会挂上；`fetchCount` 在无 API 时 `items.filter` 抛 overlay（原 store 逻辑，不是假数据） |
| `/access/accounts` | Users 空态，无 overlay |
| `/whizard-telemetry` | 许可证 store 动态 import 双 default 已修；无 license / `whizard` 模块时按原逻辑回 Workbench |
| `/node-groups` | Node Group 列表（无集群提示）；Wakaru 把列表 path 解成 `/list`，已按与 `/v2/edgewize` 相同的父路径改回 `/node-groups` |
| `/v2/edgewize` | Edge Cluster Management 空列表，无 overlay |
| `/v2/edgewize/create` | 创建边缘集群向导挂上，无 overlay（部分文案是中文/未进 locale-en） |
| `/access/roles` | Platform Roles 空表会挂上；无 API 时 store `items.length` overlay（原逻辑） |
| `/clusters/default/services` | 空 Service 态，无 overlay |
| `/clusters/default/secrets` | 空 Secret 态，无 overlay |
| `/clusters/default/statefulsets` | 空 StatefulSet 态，无 overlay |
| `/clusters/default/configmaps` | 空 ConfigMap 态，无 overlay |
| `/clusters/default/jobs` | Jobs/Cronjobs 空态，无 overlay |
| `/clusters/default/ingresses` | 空 Ingress 态，无 overlay |
| `/clusters/default/volumes` | PVC 空态会挂上。集群 layout 会用空的 `configz` 覆盖 `clusterConfig.default.ksVersion`，随后 `getKsVersion` 打 `/kapis/version`，无 API 时 `.replace` overlay（原逻辑） |
| `/workspaces/system-workspace/members` | 空成员态会挂上；无 API 时 RoleStore `items.length` overlay |
| `/clusters/default/daemonsets` | 空 DaemonSet 态，无 overlay |
| `/clusters/default/storageclasses` | 空 Storage Class 态，无 overlay |
| `/clusters/default/cronjobs` | Jobs/Cronjobs 空态，无 overlay |
| `/clusters/default/serviceaccounts` | 空 Service Account 态，无 overlay |
| `/clusters/default/members` | 空成员态会挂上；无 API 时 RoleStore `items.length` overlay（原逻辑） |
| `/clusters/default/roles` | Cluster Roles 空表会挂上；同样 `items.length` overlay |
| `/clusters/default/components` | System Components（KubeSphere/Kubernetes 计数 0），无 overlay |
| `/clusters/default/edgenodes` | 原逻辑提示当前集群不可用（edge 仅 host），无 overlay |
| `/clusters/default/customresources` | 空 CRD 态，无 overlay |
| `/clusters/default/networkpolicies` | 空表会挂上；无 API 时 store `.map` overlay（原逻辑） |
| `/workspaces/system-workspace/roles` | 空表会挂上；RoleStore `items.length` overlay |
| `/workspaces/system-workspace/quota` | Resource Quotas 卡片挂上（无限制/用量 0），无 overlay |
| `/workspaces/system-workspace/devops` | 空 DevOps Project 态，无 overlay |
| `/clusters/default/monitor-cluster` | Cluster Status 卡片 + 空图表挂上。Wakaru `super`/`this` 已修；`react-resize-detector` 和已确认的 recharts 组件改 npm 后仍无 overlay |
| `/clusters/default/monitor-resource` | Application/Cluster Resource Usage 空监控态，无 overlay |
| `/clusters/default/gateways/cluster` | Cluster Gateway Not Enabled 空态，无 overlay |
| `/clusters/default/volume-snapshots` | 空 Volume Snapshot 态会挂上；同样 `getKsVersion` `.replace` overlay（原逻辑） |
| `/workspaces/system-workspace/federatedprojects` | 空 Multi-cluster Project 态，无 overlay |
| `/system-workspace/federatedprojects/:namespace/overview` | 联邦项目 App 已改回 `module-783`；无 API 时 namespace store `filter` overlay（原 `fetchDetail` 逻辑） |
| `/workspaces/system-workspace/groups` | Set Departments 空部门态，无 overlay |
| `/settings/mail` | Email SMTP 表单挂上，无 overlay。slice60：Wakaru 把 settings Banner `module-1078` 收成空 `<>`，已改回用已有 `module-793`（不 pin skip-list Cards/Banner） |
| `/settings/third-login` | Github OAuth / OAuth 未配置态，无 overlay |
| `/settings/slack` | Slack Token / Channel 表单挂上，无 overlay |
| `/workspaces/system-workspace/apps` | 空 App Template 态，无 overlay |
| `/workspaces/system-workspace/repos` | 空 App Repository 态，无 overlay |
| `/clusters/default/visibility` | Cluster Visibility 空 workspace 态，无 overlay |
| `/settings/feishu` | Feishu 通知表单，无 overlay |
| `/settings/dingtalk` | DingTalk 通知表单，无 overlay |
| `/settings/wecom` | WeCom 通知表单，无 overlay |
| `/settings/webhook` | Webhook 通知表单，无 overlay |
| `/settings/notification-history` | Notification History 空表，无 overlay |
| `/settings/silent-policy` | Silence Policies 空表，无 overlay |
| `/settings/license-info` | License 页挂上（无许可数据时 Unauthorized），无 overlay |
| `/clusters/default/custom-monitoring` | 空 Custom Monitoring Dashboard 态，无 overlay |
| `/clusters/default/log-collections/logs` | Log Receivers 空态会挂上；无 API 时 store `.length` overlay（原逻辑） |
| `/clusters/default/volume-snapshot-classes` | 空 Volume Snapshot Class 态，无 overlay |
| `/workspaces/system-workspace/gateways/workspace` | 无 overlay；`ksConfig.enabledExtensionModulesStatus.gateway` 为空时原逻辑渲染空列表 |
| `/workspaces/system-workspace/edge-apps` | 空 Edge App Template 态，无 overlay（部分 i18n key 未进 locale-en） |
| `/clusters/default/clusteringresssettings` | Ingress Utils 空表会挂上；无 API 时 `remainingItemCount` overlay（原逻辑） |
| `/clusters/default/kubeConfig` | kubeconfig 弹层 + Ace 行号挂上；无 API 时编辑器内容是 HTML 回退（原逻辑），无 overlay |
| `/clusters/default/alert-rules` | Rule Groups 空表挂上。`ClusterAlertingPolicies` 在路由初始化时仍是 `undefined`（CJS 循环），改为 render 时 `require` 命名导出 |
| `/clusters/tags` | Cluster Tags 空态，无 overlay |
| `/settings/notification-language` | Notification Language（English keys）挂上，无 overlay |
| `/access/edge-workspaces` | Edge Workspaces 空表，无 overlay |
| `/logquery` | 日志查询空态（0 entries），无 overlay |
| `/eventsearch` | 事件查询空态，无 overlay |
| `/auditingsearch` | 审计日志空态，无 overlay |
| `/bill` | 计量计费分类入口，无 overlay |
| `/system-workspace/clusters/default/devops/test/pipelines` | DevOps Pipeline 空态会挂上，无 overlay（无真实项目） |
| `/system-workspace/clusters/default/devops/test/cd` | Continuous Deployments 空态，无 overlay |
| `/system-workspace/clusters/default/devops/test/code-repo` | Code Repositories 空态，无 overlay |
| `/system-workspace/clusters/default/devops/test/base-info` | DevOps Basic Information 挂上（无 API 时 Invalid date），无 overlay |
| `/system-workspace/clusters/default/devops/test/roles` | 空表会挂上；无 API 时 store `items.length` overlay（原逻辑） |
| `/system-workspace/clusters/default/devops/test/members` | 空成员态会挂上；无 API 时 `forEach` / `length` overlay（原逻辑） |
| `/system-workspace/clusters/default/devops/test/credentials` | Credentials 空态，无 overlay |
| `/clusters/default/alerts` | Alerts 空表，无 overlay |
| `/clusters/default/base-info` | Cluster Basic Information（节点/CPU/内存为 0），无 overlay |
| `/clusters/default/ippools` | 空 Pod IP Pool 态，无 overlay |
| `/clusters` | 非多集群时按原逻辑转到 `/clusters/default/overview`，无 overlay |
| `/clusters/default/nodes/:node` | Node Detail 会挂上；无 API 时 `store.detail` 非空但没有 `nodeInfo.operatingSystem`，`toUpperCase` overlay（原 `getAttrs` 逻辑） |
| `/workspaces/system-workspace/base-info` | Workspace Information 挂上（无 API 时日期是 Invalid date），无 overlay |
| `/workspaces/system-workspace/overview/ranking` | Usage Ranking 空表（No Data），无 overlay |
| `/workspaces/system-workspace/overview/clusters` | 非多集群时该子路由未注册，按原逻辑进 `/404`，无 overlay |
| `/settings/notification-subscription` → `.../subscription-mail/list` | Notification Subscription 邮件订阅空表，无 overlay |

slice59 在 webpack 重启后复测（tab db0893，webpack pid 2187792）。unique-importer 产量 0，未新增 named。数字 `require()` 残留 0。vendor：`module-717` → npm `semver@7.3.8`（362 在 live graph）。tiny-invariant 81 只被已别名 importer 引用，effective graph 不包含它，未别名。LineChart 仍无 `chartName`；`react-draggable` 不在本 dist；`jwt-decode` 仅 server。

slice60（structural，不再扫 unique-importer）：named 仍 1633 / `NO_NAMED_IN_UNPACKED`。原 webpack pid 2187792 已退出。unique-importer 仍耗尽，未新增 named、未 invent orig 路径。数字 `require()` / `require.context` / `super(this)` 残留 0。vendor：effective live 无新版权条 / UMD 指纹；`module-717` 仍是 npm `semver@7.3.8`。empty-render：settings Banner `module-1078` 被 Wakaru 收成 `return <></>`，orig 有 `<Banner module="notification" … tabs={this.tabs} />`；改回 default-import 已有 `module-793`（Cards/Banner 是 skip-list 98-importer 父模块，不 pin）。recharts `XAxis`/`YAxis`/`ZAxis`（871/913/1637）`return null` 是库行为，已别名，未改。

leftover-live（主包 `app.163399b1.js`，webpack pid 3301848）：再扫 live leftover。unique orig t()/API/module= **0** 个未占用路径（不 invent）。2-hit babel helper / lodash copies / skip-list orig 仍留 `module-N.js`。`module-747` 有 unique cron 约束错误，但 `cron-parser` 不在 `node_modules`，未 npm install、未别名。本轮又确认 7 个全局 1-hit `core-js@3.37.0` internals（101/151/221/227/263/291/507）别名到 `core-js3`；8 个候选因 2-hit 或弱针被拒绝（含 70/132/254）。`corejs-aliases.js` 现 **70** 条。目标仍未完成：webpackChunk live unpacked **1209**，factory-key live unpacked **1705**，磁盘 leftover `module-N.js` **4249**。

unique-importer live（主包 `app.a5befa97.js`，webpack pid 3301848，未重启）：父模块已在 `src/<prefix>/` 后，用「唯一 promoted 父引用 + orig 仍 unnamed 的唯一子路径 / 家族 unique t()」pin 了 **7** 个 leftover，写进 live 引用图（`unpacked/module-N.js` stub + prefix alias）。本轮 unique 路径：`pages/clusters/actions/index`←1782，`components/EditForms/Workload/TerminationSeconds`←1683，`CRDAppDetail/TrafficManangement`←4751，`CRDAppDetail/Tracing`←4776，`OPAppDetail/AppConfig`←4792，`OPAppDetail/ResourceStatus`←4789，`Pods/Detail/ResourceStatus`←1824。拒绝：`t(',')`/`inject("detailStore")` 假 t()、`module="alerts"` 映射到 Messages（实为已 named 的 alerting store 副本）、skip-list 的 Monitor/Cluster 3753 系列与 Upload 2399/2400/2401。`named/` 未进引用图。目标仍未完成：webpackChunk live unpacked **1208**，factory-key live unpacked **1704**（非 stub），磁盘 leftover **4242**，promoted unique **1518**。factory leftover 分类（dashboard 已加载脚本）：skip-list 35，cssish 182，tiny 757，babel-helper 针 8，lodashish 1，core-js 2-hit 错误串 3，其余业务/vendor **718**。orig unique-import 仍 unnamed：0-kid 115、multi-kid 8。KSE-only unique t() 且 orig 0-hit **122**（不 invent）。

after7 unique（主包 `app.e04505c1.js`，webpack pid 3301848，未 fuser-kill）：在上一轮 7 个 pin 之后，用 unique importer / 家族 named-grandchild / unique t() 再提升 **7** 个 leftover 进 live 图（stub 留在 `unpacked/module-N.js`）。本轮 unique 路径：`components/Cards/Containers/index`←3897（Pods ResourceStatus 1:1），`pages/projects/components/Cards/Volumes/index`←1451（`VOLUME_PL`），`components/EditForms/Workload/{Affinity,PodTemplate,UpdateStrategy,VolumeSettings}`←1679/1680/1681/1682（ConfigTemplate leftover unique kids 各自唯一引用已 named 的 grandchild form），`pages/projects/components/Cards/Volumes/Item`←4749（Volumes card 提升后的 1:1 Item）。拒绝、不 invent：Base leftover 1102/1306/1550 vs skip-list Slider；Inputs 2884/2887 vs orig EnvFromInput 0-hit；core/App 762/767 vs 更新 orig 的 routeSync/routerBase 0-hit；ConfigTemplate 3603 IPPool 0-hit；vendor fingerprint 0（cron-parser 747 仍 skip-list，未 npm install）；2-hit babel classCallCheck/assertThisInitialized/inherits 无 unique extra orig path。再扫 unique importer/barrel/literal/vendor = **0** pin。`named/` 未进引用图。目标仍未完成：webpackChunk dashboard unpacked **1204**，factory leftover **1700**（dashboard 已加载 65 个 JS；本轮 7 个里有 3 个不在该 factory 集合），磁盘 leftover **4235**，promoted unique **1525**。factory leftover 分类：skip-list 35，cssish 182，tiny 757，babel-helper 针 8，lodashish 1，core-js 2-hit 错误串 3，其余业务/vendor **714**。orig unique-import 仍 unnamed：0-kid **113**、multi-kid **3**。KSE-only unique t() 且 orig 0-hit **120**（不 invent）。

independent second pass（主包 `app.20fb3dd9.js`，webpack pid 1109918；独立重扫 live 65 JS，不继承“0 unique leftover”结论）：

独立枚举：dashboard webpackChunk unpackedUnique **1203**（named 0，chunkLen 64，pages 160 / components 480 / stores 54 / actions 34 / configs 21 / utils 13 / unpacked 1204 次/1203 唯一），factory leftover **1692**（65 scripts，stub 0，`src/named/` 0），磁盘 leftover **4235**，promoted unique **1525**。相对 after7 的 1700/1204：factory −8、webpackChunk unpacked −1。

**找到并落地的 unique vendor（6，均已对照 leftover 与 `node_modules`，未 npm install）：**

- `module-761.js` → `react-is@16.13.1`（`react.async_mode`+`react.block`+`isValidElementType`，无 `react.server_context`）。leaf 别名，bundle 中 factory key 0、`react-is` 18。
- `module-27.js` → `core-js3/modules/es.number.constructor.js`（`Cannot convert a Symbol value to a number`）
- `module-140.js` → `core-js3/modules/es.regexp.constructor.js`（`Invalid capture group name`）
- `module-190.js` → `core-js3/modules/es.number.to-fixed.js`（`Incorrect fraction digits`）
- `module-135.js` → `core-js3/modules/es.symbol.description.js`（side-effect `import "unpacked/module-135.js"`）
- `module-137.js` → `core-js3/modules/es.string.split.js`（side-effect `import "unpacked/module-137.js"`）

这 5 个 core-js **modules** 入口只被副作用 import，没有 `require(N).default` 消费者；`corejs-aliases.js` 现 **75** 条。顶层仍是 `core-js@2.6.12` + `core-js3@npm:core-js@3.37.0`。

**unique 但未别名/未提升（读过 leftover 与 npm 或 orig 后拒绝）：**

- `module-283.js` = `core-js3/internals/enum-bug-keys.js`：曾别名后 `module-150` 的 `require("unpacked/module-283.js").default.concat(...)` 因 CJS 无 `.default` 把 overlay 打成 `concat` TypeError，已回退。
- `module-8.js` = `core-js3/internals/export.js`（`e.dontCallGetSet ?`）：leftover 当值 `import module8 from`，不能当 polyfill 入口别名。
- `module-222.js` = `core-js3/internals/is-constructor.js`：internals 值模块。
- `module-30.js` / `module-38.js`：Array/String Iterator，存在 `require(N).default` 消费者。
- `module-254.js` “Incorrect invocation” 不是全局 1-hit：`module-812.js` 用 `throw new module25_TypeError(...)` 躲开 `throw new TypeError` 针。
- `module-2434.js`：更新版 react-is（`react.server_context`），`node_modules/react-is` 没有，未 install。
- `module-749.js`：luxon 错误串 unique，包不在 `node_modules`，未 install。
- 磁盘-only core-js（1431/1456/1921/1922/1960/4796）不在 dashboard leftover live。
- 假 pin 未写进图：`EnvFromInput/Item.js`↛`module-2885.js`（2885 是 TimeUnitInput `getUnitValue/units/picks`）；`pages/projects/containers/Alerting/Messages`↛`module-1236.js`（`e.module = "alerts"` 的 alerting store 副本）。

**unique 业务证据（after7 之后再扫）：** unique importer 1:1 **0**，unique barrel **0**，family t/method/class **0**，parent-aligned unique literal **0**，orig unique-import 1:1 **0**。orig unique-import 仍 unnamed：0-kid **113**、multi-kid **3**（`components/Base` leftover 1102/1306/1550 vs skip-list Slider；`components/Inputs` 2884/2887 vs orig EnvFromInput 0-hit；`core/App` 762/767 vs 更新 orig 的 `routeSync`/`routerBase` 0-hit）。2-hit extra-path 候选（`UPLOAD_SUCCESSFUL`/`VOLUME_CAPACITY`/`ACCESS_MODES_DESC`/`PREVIEW`/`NO`）是共享 t()：leftover 同时对上已 known orig 与另一 unnamed orig，不能 1:1 pin extra path。KSE-only unique t() orig 0-hit **122**（不 invent）。`named/` 未进引用图。

**把 after7 的 ~714 remaining 拆开（现 leftover 1692 上 remaining_like **705**）：**

| 桶 | 数量 | 为何不能起 orig 业务名 |
| --- | ---: | --- |
| remaining other（多为 core-js 内部/模块图） | 361 | 无 t()/createElement；抽样 16/42/174/225 是 function.name / Invalid Date / isForced / regexp-sticky |
| business_looking | 242 | 见下 |
| css_object ≥400B | 83 | CSS-in-JS hashed object，不是页面路径 |
| core-js unaliased | 12 | unique internals 或 2-hit；`.default` 不安全 |
| babel_helper | 3 | 2-hit helper，无 extra orig path |
| webpack_runtime | 1 | `module-139.js` webpackPolyfill |
| KSE wujie notify | 1 | `module-240.js`，orig 无 notify.js |
| react-is family | 1 | `module-2434.js` 比已装 16.13.1 新 |
| kube-design icon inject | 1 | `module-3515.js` 与已别名 186 2-hit |

business_looking 242 再分：no unique t / 仅 createElement **48**；unique t 但对上 skip-list 或非 parent-aligned orig **20**（805 StatusReason、1272 MetircQueryInput、1639 GrafanaTargetInput 等）；KSE-only unique t 0 orig **73**；shared t 多 leftover 或多 orig **83**；2-hit copy of known orig、无 unique extra path **30**。

全量 leftover 1692 粗分：css_object 568，tiny_other 451，other 382，business_looking 252，babel_helper 18，corejs_unaliased 14，lodash_internal 3，另 4 个单例（webpack / wujie / react-is / kube-design icon）。skip-list 仍不命名。

`/login` 与 `/dashboard` overlay-false（Welcome / Hello recovered，主包 `app.20fb3dd9.js`）。webpack stdout 全缓冲，本轮日志看不到 NODE_ENV warning 行；运行时 overlay 不是 compile error。目标仍未完成，不能把剩余 705 当成“不可再命名的空桶”，但当前没有新的 1:1 orig 业务路径可 promote。

vendor/runtime pass3（主包 `app.db72ecf9.js`，webpack pid 1330074，setsid 启动；compile **0 error / 2 NODE_ENV warnings**）：

CJS-interop shims（`src/shims/cjs-default.js` + 薄包装，别名 unpacked 绝对路径，**未**直接 npm alias 以免丢掉 `.default`）：

- `module-8.js` → `src/shims/corejs-export.js` → `core-js3/internals/export.js`
- `module-25.js` → `src/shims/corejs-global.js`（Proxy，**不**给 `globalThis` 挂 `.default`）→ `core-js3/internals/global.js`；named `{ RegExp, String }` 仍可用
- `module-30.js` → `src/shims/corejs-es-array-iterator.js` → `core-js3/modules/es.array.iterator.js`
- `module-38.js` → `src/shims/corejs-es-string-iterator.js`（副作用 polyfill + 空 `.default`）
- `module-222.js` → `src/shims/corejs-is-constructor.js` → `core-js3/internals/is-constructor.js`
- `module-283.js` → `src/shims/corejs-enum-bug-keys.js`（`slice()` 副本再挂 `.default`，修好 `module-150` 的 `.default.concat`）

副作用 polyfill 直连 `core-js3`（读 leftover 与 npm 后 1:1）：`module-16.js`→`es.function.name`，`module-17.js`→`es.regexp.to-string`，`module-42.js`→`es.date.to-string`。`corejs-aliases.js` 现 **78** 条。另 `corejs-shim-aliases.js` **6** 条。

luxon：leftover `export const VERSION = "3.0.3"`，仅 `module-748` named-import `{ DateTime }`。已 `npm install luxon@3.0.3`（未动顶层 `core-js@2.6.12`），`module-749.js` → `src/shims/luxon.js`。

未 revert。`module-2434.js` 仍留 unpacked（比已装 react-is@16 新，未装第二份）。`module-254.js` 仍 2-hit（812 用 `module25_TypeError`），未 shim。

独立枚举：webpackChunk unpackedUnique **1203**，namedCount **0**，factory leftover **1680**（65 JS，相对 pass2 1692 −12），磁盘 leftover **4235**，promoted unique **1525**。remaining_like **695**。

| 桶 | 数量 |
| --- | ---: |
| remaining other | 358 |
| business_looking | 242 |
| css_object | 83 |
| core-js unaliased | 5（264/367/421/584/606：lodash-like 或无 1:1 npm 针） |
| babel_helper | 3 |
| webpack_runtime | 1 |
| KSE wujie notify | 1 |
| react-is family | 1（2434） |
| kube-design icon inject | 1 |

unique live leftover vs core-js3 还剩 **254**（2-hit，不别名）。磁盘-only core-js 1431/1456/1921/1922/1960/4796 仍不在 dashboard leftover。业务 242 未新 promote（unique importer 仍 0）。目标仍未完成。

vendor/runtime pass4（主包 `app.53aa9b1b.js`，webpack pid **1896204**，setsid；compile **0 error / 2 NODE_ENV warnings**）。未 npm-install。未动顶层 `core-js@2.6.12`。`src/named/` 未进引用图。目标仍未完成。

**本轮 vendor aliases / CJS shims（读 leftover 与 `node_modules` 后 1:1）：**

lodash internals（薄 `src/shims/lodash-*.js` + `cjs-default`，因为 leftover 走 default import / `require().default`）：

- `module-264.js` → `lodash/isPlainObject.js`（`n instanceof n` / `[object Object]` 全局 1-hit）
- `module-606.js` → `lodash/_baseIsNative.js`（`/^\[object .+?Constructor\]$/` 全局 1-hit）
- `module-129.js` → `lodash/_getNative.js`（唯一组合 606+611，且 `require().default`）
- `module-164.js` → `lodash/_getTag.js`（`[object Promise]` + `new ArrayBuffer(1)` 全局 1-hit；拒绝误配 `lodash.min.js`）

core-js3 副作用入口（直连 alias）：

- `module-64.js` → `es.string.replace.js`（`"a".replace(/./, "$0") === "$0"` 1-hit，side-only）
- `module-584.js` → `es.symbol.constructor.js`（`QObject.prototype.findChild` / `op-symbols` 1-hit，side-only）
- `module-666.js` → `es.map.constructor.js`（唯一 `collection("Map", …, collectionStrong)`，side-only）
- `module-670.js` → `es.set.constructor.js`（唯一 `collection("Set", …)`，side-only）
- `module-674.js` → `esnext.set.intersection.js`（拒绝误配 `lodash/array.js`）

core-js3 值模块（薄 shim；html **不**给 `documentElement` 挂 `.default`）：

- `module-376.js` → `src/shims/corejs-html.js` → `internals/html.js`（quoted `("document","documentElement")` 1-hit；893 是 d3 `document.documentElement` 属性访问，已别名）
- `module-367.js` → `src/shims/corejs-make-built-in.js` → `internals/make-built-in.js`
- `module-419.js` → `src/shims/corejs-collection.js` → `internals/collection.js`（唯一 `indexOf("Map")`，`require().default`）
- `module-421.js` → `src/shims/corejs-collection-strong.js` → `internals/collection-strong.js`（`getConstructor` / `index !== "F"`，`require().default`）

`corejs-aliases.js` 现 **83** 条。`corejs-shim-aliases.js` 现 **10** 条。

**未别名 / 未提升：**

- 原 3 个 lodash Buffer/process 包装 `958`/`1056`/`1648`：**不在 leftover_live**，live importer 0（`2016` 已是 lodash 桶别名）。未把非 live 磁盘文件硬别名。
- `react-router` / `history` / `qs` / `path-to-regexp`：live leftover 无新 1:1（入口 47/83/244/1553 已别名；`314`/`81` 不在 leftover_live）。`withRouter` 只出现在业务页 `3019`（从已别名 `module-47` 引用）。
- `module-2434.js` 仍比已装 react-is@16 新，未装第二份。
- `module-254.js` 仍 2-hit（未 shim）；本轮 dashboard factory leftover **不再包含** 254（随 421 别名从该图掉出，不是把 254 别名掉）。
- `module-611.js`（`e?.[t]`）太泛，只被 129 引用；129 已别名后不再需要。
- `module-194.js` isFunction / `609` isMasked：2-hit lodash 副本，未别名。

**业务 promote 本轮 0。** 独立 unique-importer：1:1 **0**，barrel **0**，family **0**，literal **0**，orig unique-import pins **0**。orig unique-import 仍 unnamed：0-kid **113**、multi-kid **4**。KSE-only unique t() orig 0-hit **122**（不 invent）。skip-list 未动。promoted unique 仍 **1525**。磁盘 leftover **4235**。

独立枚举：webpackChunk unpackedUnique **1204**（pages 160 / components 480 / stores 54 / actions 34 / configs 21 / utils 13 / unpacked 1205 次），namedCount **0**，factory leftover **1641**（65 JS，相对 pass3 1680 **−39**），remaining_like **684**。

| 桶 | 数量 |
| --- | ---: |
| remaining other | 344 |
| business_looking | 242 |
| css_object | 84 |
| core-js unaliased | 0（pass3 的 264/367/421/584/606 已别名） |
| babel_helper | 仍 2-hit，未 pin |
| webpack_runtime | 1 |
| KSE wujie notify | 1 |
| react-is family | 1（2434） |
| kube-design icon inject | 1 |

| 路由 | overlay | 分类 |
| --- | --- | --- |
| `/login` | false | Welcome / Username or Email / Password / Log In（主包 `app.53aa9b1b.js`，tab db0893，namedCount 0） |
| `/dashboard` | false | Hello recovered / Last login / 空 workspace 提示（webpackChunk unpackedUnique **1204** / named 0；factory leftover **1641**） |
| `/support` | false | Community Support 完整版式 |
| `/clusters/default/deployments` | false | No Deployment Found |
| `/clusters/default/custom-monitoring` | false | No Custom Monitoring Dashboard Found |
| `/clusters/default/nodes` | true | 原 store `items.filter`（`src/stores/node.js` 即原 `module-858`）：`Cannot read properties of undefined (reading 'filter')`；无 ks-apiserver，未假数据 |
| `/access/workspaces` | false | Access Control 空表 Total: 0 |
| `/settings/base-info` | false | 平台 Basic Information |
| `/settings/mail` | false | Notification Channels Banner + Email SMTP（含 dist 多出的 Feishu tab） |
| `/workspaces/system-workspace/overview/usage` | false | Overview 卡片 / No Monitoring Data |
| `/system-workspace/clusters/default/devops/test/pipelines` | false | No Pipeline Found |

仍阻塞目标（pass4 当时）：factory leftover **1641** / webpackChunk unpacked **1204** 仍主要是 css_object、tiny helper、2-hit babel/core-js、skip-list 与无 1:1 orig 路径的 business_looking 242。无 ks-apiserver。未提交、未推送。

vendor/runtime pass5（主包 `app.09a542ba.js`，webpack pid **2117425** / npm exec **2117412**，setsid；compile **0 error / 2 NODE_ENV warnings**）。未 npm-install。未动顶层 `core-js@2.6.12`。`src/named/` 未进引用图。目标仍未完成。

**本轮 vendor aliases（读 leftover 与 `node_modules/core-js3` 后 1:1；全部 side-import，无新 CJS shim）：**

remaining_other 里 unique extra-path：

- `module-28.js` → `es.array.push.js`（leftover/npm 唯一 `4294967297`）
- `module-84.js` → `es.array.includes.js`（leftover/npm 唯一 `Array(1).includes()`）
- `module-191.js` → `es.date.to-json.js`（leftover 唯一 `new Date(NaN).toJSON() !== null`）
- `module-196.js` → `es.promise.finally.js`（leftover/npm 唯一 `prototype.finally`）
- `module-249.js` → `es.error.cause.js`（leftover 唯一 `u("URIError")`/`c("LinkError")` 构造器包装；相对 `web.structured-clone` 的 `case 'CompileError'` extra-path）
- `module-586.js` → `es.symbol.for.js`（leftover/npm 唯一 `string-to-symbol-registry`）

live tiny、与 pass4 `674` 同形的 Set 方法包装（`.default("union")` 等 leftover 全局 1-hit）：

- `module-671.js` → `esnext.set.difference.js`
- `module-676.js` → `esnext.set.is-disjoint-from.js`
- `module-678.js` → `esnext.set.is-subset-of.js`
- `module-680.js` → `esnext.set.is-superset-of.js`
- `module-682.js` → `esnext.set.symmetric-difference.js`
- `module-684.js` → `esnext.set.union.js`

`corejs-aliases.js` 现 **95** 条。`corejs-shim-aliases.js` 仍 **10** 条。本轮 **无新 shim**。

**拒绝 / 未别名：**

- quoted-string 自动 1:1 对 remaining_other **0**（webpack 变换后的 unique 串多数不在 npm 源码；lodash.min.js / array.js 桶已排除）。
- `safeLoad` live `module-3158` 是 CodeEditor 业务页，从已别名 `js-yaml` 消费，不是 yaml 本体。
- `withRouter` live `module-3019` 从已别名 `module-47` 引用，不是 react-router 本体。
- lodash unique-stem 0；`194` isFunction / `609` isMasked 仍 2-hit。
- axios / path-browserify 未安装，leftover 无 unique 版本串，未 npm-install。
- `2434` 仍比已装 react-is@16 新。css_object / tiny helper / skip-list / KSE-only 未动。
- 包装被别名后，内部实现 `672/675/677/679/681/683/685` 从 leftover_live 掉出（不再独立别名）。leftover 桶 `460/462–466` 仍 live（只 `import` 已别名入口，无独立 npm 针）。

**业务 promote 本轮 0。** 独立 unique-importer：1:1 **0**，barrel **0**，family **0**，literal **0**，orig unique-import pins **0**（0-kid **113**、multi-kid **4**）。KSE-only unique t() **122**。skip-list 未动。promoted unique 仍 **1525**。磁盘 leftover **4235**。

**Wakaru 扫描（只修已确认命中）：** empty-render Banner-1078 模式 **0**。`871/913/1637` 仍是 recharts X/Y/ZAxis 原样 `return null`，未改。leftover 数字 `require()` **0**。`require.context` **0**。live 空 CSS 占位 **0**；`public/v3css/` 与密封 v3dist chunk 哈希一致，index 已链 16 个 chunk。未改 CSS。

独立枚举：webpackChunk unpackedUnique **1216**（pages 160 / components 480 / stores 54 / actions 34 / configs 21 / utils 13 / unpacked 1218 次；alias 后 webpack id 仍叫 `unpacked/module-N.js`），namedCount **0**，factory leftover **1593**（65 JS，相对 pass4 1641 **−48**），remaining_like **664**。

| 桶 | 数量 |
| --- | ---: |
| remaining other | 324（pass4 344 **−20**） |
| business_looking | 242 |
| css_object | 84 |
| babel_helper | 10（pass4 remaining_like 桶；enum 宽松分类 11） |
| webpack_runtime | 1 |
| KSE wujie notify | 1 |
| react-is family | 1（2434） |
| kube-design icon inject | 1 |

| 路由 | overlay | 分类 |
| --- | --- | --- |
| `/login` | false | Welcome / Username or Email / Password / Log In（主包 `app.09a542ba.js`，tab db0893，namedCount 0） |
| `/dashboard` | false | Hello recovered / Last login / 空 workspace 提示（webpackChunk unpackedUnique **1216** / named 0；factory leftover **1593**） |

未再扫其它主路由：本轮未改 CSS / empty-render。

仍阻塞目标（pass5 当时）：factory leftover **1593** / webpackChunk unpacked **1216** 仍主要是 remaining other 324、css_object 84、skip-list 与无 1:1 orig 路径的 business_looking 242。无 ks-apiserver。未提交、未推送。

vendor/runtime pass6（主包 `app.2f34b862.js`，webpack pid **2305884** / npm exec **2305871**；compile **0 error / 2 NODE_ENV warnings**）。未 npm-install。未动顶层 `core-js@2.6.12`。`src/named/` 未进引用图。目标仍未完成。业务 promote **0**。empty-render / CSS **未改**。

**本轮唯一 crash 上的 vendor extra-path（CJS `.default`）：** 项目成员页 overlay `module-504` `require(module-117).default.match`。`117` 已直连 `engine-user-agent`（CJS 字符串，无 `.default`）。leftover/npm 1:1：

- `module-504.js` → `core-js3/internals/engine-ff-version.js`（唯一 `firefox\/(\d+)`）
- `module-506.js` → `core-js3/internals/engine-webkit-version.js`（同一 crash 栈里仅剩的另一个 `117.require().default.match`，唯一 `AppleWebKit\/(\d+)`）

`corejs-aliases.js` 现 **97** 条。`505`/`146` 走 ESM default import，本轮未别名。未扫 remaining other 324。

别名后项目成员/角色不再 CJS overlay，无 ks-apiserver 时按原逻辑进 `/404`。

| 路由 | overlay | 分类 |
| --- | --- | --- |
| `/login` | false | Welcome / Log In（`app.2f34b862.js`，named 0） |
| `/dashboard` | false | Hello recovered；webpackChunk unpackedUnique **1216** / named **0** |
| `/clusters/default/volumes` | true | **original** `getKsVersion` `result.gitVersion.replace`（`src/stores/base.js`，orig 同；无 `/kapis/version`）。空态 PVC 仍可见 |
| `/clusters/default/volume-snapshots` | true | **original** 同上 `gitVersion.replace` |
| `/clusters/default/nodes` | true | **original** `stores/node.js` `items.filter`（`fetchCount`）。空态 Cluster Nodes 仍可见。未假数据 |
| `/clusters/default/members` | true | **original** 无 API 时 RoleStore `p.length`（`stores/role.js`；orig `result.items.map` 同样崩） |
| `/clusters/default/roles` | true | **original** 同上 RoleStore `length`；空表 Total: 0 仍可见 |
| `/access/roles` | true | **original** 同上 RoleStore `length`；Platform Roles 空表仍可见 |
| `/workspaces/system-workspace/members` | true | **original** 同上 RoleStore `length` |
| `/workspaces/system-workspace/roles` | true | **original** 同上 RoleStore `length` |
| `/clusters/default/networkpolicies` | true | **original** leftover `module-3805` `p.items.map`（v3 dist store；orig git 4.x 的 silenceUnsupported 不能 invent） |
| `/clusters/default/log-collections/logs` | true | **original** `stores/secret.js` `c.items.length`（无 API） |
| `/clusters/default/gateways/cluster` | false | Cluster Gateway Not Enabled 空态 |
| `/workspaces/system-workspace/gateways/workspace` | false | **original** `ksConfig.enabledExtensionModulesStatus.gateway` 过滤后 `clusters.map` 空 `<div></div>`。`793` 仍是副作用 import 但 render 非空 fragment，skip-list 未改 JSX |
| `/clusters/default/projects` | false | User/System Projects 空态 |
| `/clusters/default/overview` | false | Overview 配额/节点卡片 0 |
| `/clusters/default/base-info` | false | Cluster Information 0 |
| `/workspaces/system-workspace/federatedprojects` | false | No Multi-cluster Project Found |
| `/system-workspace/federatedprojects/default/overview` | true | **original** `stores/federated.js` `n.items.filter`（orig `data.items.filter`；无 API） |
| `/system-workspace/clusters/default/projects/kubesphere-system/members` | false | 修 504 后 **original** 无项目详情进 `/404` |
| `/system-workspace/clusters/default/projects/kubesphere-system/roles` | false | **original** `/404` |
| `/workspaces/system-workspace/projects` | false | No Project Found |
| `/settings/third-login` | false | Github OAuth / OAuth 未配置态 |

独立枚举（dashboard 65 JS）：factory leftover **1593**（504/506 不在 dashboard 图），remaining_like **664**（other **324** / business_looking **242** / css_object **84**），namedCount **0**，promoted **1525**。

仍阻塞目标：factory leftover **1593** / webpackChunk unpacked **1216**；remaining other 324 无新 unique extra-path（禁止盲别名）；business_looking 242 无 1:1 orig；无 ks-apiserver 的 store overlay 是原逻辑。未提交、未推送。

vendor/runtime pass7（主包 `app.2d9ad392.js`，webpack pid **2600201** / npm exec **2600187**；compile **0 error / 2 NODE_ENV warnings**）。未 npm-install。未动顶层 `core-js@2.6.12`。`src/named/` 未进引用图。目标仍未完成。业务 promote **0**。skip-list 未动。

**CJS interop hunt（504/506 同类）：** live leftover `module-704`/`module-706` 对已别名 CJS 做 `require(module-423).default(setInterval|setTimeout)`。先把 `423` 直连 `schedulers-fix` 后 login 全页 overlay `__webpack_require__(...).default is not a function`；按用户要求 **revert 直连、改 wrap**。`117` 曾试 wrap `{__esModule, default: ua}`，login 同样崩，已 **revert 回直连** `engine-user-agent`（504/506 leftover 已别名，不必再包 117）。

`corejs-shim-aliases.js` 现 **11** 条：

- `module-423.js` → `src/shims/corejs-schedulers-fix.js`（`wrapCjsDefault(core-js3/internals/schedulers-fix.js)`）

**磁盘 unique internals（leftover 1:1 vs 单一 core-js3 internals，含 live=0）：**

- `module-146.js` → `core-js3/internals/engine-v8-version.js`（唯一 `Chrome\/(\d+)` / `Edge\/(\d+)` / `process.versions`）
- `module-505.js` → `core-js3/internals/engine-is-ie-or-edge.js`（唯一 `MSIE|Trident`）
- `module-487.js` → `core-js3/internals/array-reduce.js`（唯一 `Reduce of empty array with no initial value`）
- `module-377.js` → `core-js3/internals/engine-is-ios.js`（唯一 `(?:ipad|iphone|ipod).*applewebkit`）
- `module-544.js` → `core-js3/internals/engine-is-ios-pebble.js`（唯一 `Pebble`）
- `module-545.js` → `core-js3/internals/engine-is-webos-webkit.js`（唯一 `web0s(?!.*chrome)`）

`corejs-aliases.js` 现 **103** 条。`1954` typed-array sort 同时吃 146/504/505/506。

**拒绝：**

- `module-70` / `module-1420`：`Accessors not supported` leftover **2-hit**，不别名。
- remaining other quoted 20+ vs unique core-js3：**0**。未盲别名 remaining other 323。
- unique orig business：**0**（unique-importer / barrel / family / literal / orig unique-import 全 0）。

**958 / 1056 / 1648 处置（磁盘检查，live importer 0）：** 不是 lodash 1:1。`lodash/isBuffer.js` 独有 `nativeIsBuffer`/`stubFalse`，leftover 958 没有且 `Buffer.isBuffer` leftover **2-hit**（831+958）。`process.binding` leftover **2-hit**（257+1056），1056 是可读 stub（`types = process.binding ? null : undefined`），不是 `_nodeUtil.js`。1648 `copyArrayBuffer` 用 `Buffer.from`，lodash `_cloneBuffer.js` 用 `allocUnsafe`/`buffer.copy`，npm 0-hit `Buffer.from`。三份保持磁盘可读 Buffer/process shim，**不**别名 lodash。

| 路由 | overlay | 分类 |
| --- | --- | --- |
| `/login` | false | Welcome / Log In（`app.2d9ad392.js`，tab db0893 + headless CDP，named 0） |
| `/dashboard` | false | Hello recovered；webpackChunk unpackedUnique **1217** / named **0** |
| `/clusters/default/statefulsets` | false | No Statefulset Found（空态；db0893 复核） |
| `/clusters/default/daemonsets` | false | No Daemonset Found |
| `/clusters/default/jobs` | false | Jobs 空态文案 |
| `/clusters/default/cronjobs` | false | Cronjobs 空态 |
| `/clusters/default/pods` | false | Pods 空态 |
| `/clusters/default/services` | false | No Service Found |
| `/clusters/default/ingresses` | false | Ingresses 空态 |
| `/clusters/default/secrets` | false | No Secret Found |
| `/clusters/default/configmaps` | false | No Configmap Found |
| `/clusters/default/alerts` | false | Alerts 0 / From Custom Rules |
| `/workspaces/system-workspace/apps` | false | App Templates 空态 |
| `/eventsearch` | false | 集群级 events 列表路由不存在；事件查询空态 |
| `/system-workspace/clusters/default/projects/kubesphere-system/{statefulsets,daemonsets,jobs,cronjobs,pods,services,ingresses,secrets,configmaps,alerts,applications}` | false | **original** 无 ks-apiserver 项目详情进 `/404`（与 pass6 members 相同） |

独立枚举（dashboard 65 JS）：factory leftover **1590**（相对 pass6 1593 **−3**），remaining_like **663**（other **323** / business_looking **242** / css_object **84**），namedCount **0**，promoted **1525**。

仍阻塞目标：factory leftover **1590** / webpackChunk unpacked **1217**；remaining other 323 无新 unique extra-path（禁止盲别名）；business_looking 242 无 1:1 orig；无 ks-apiserver 时项目页 `/404` 是原逻辑。未提交、未推送。

vendor/runtime pass8（主包仍 `app.2d9ad392.js`，webpack pid **2742406** / npm exec **2742393**；compile **0 error / 2 NODE_ENV warnings**）。未 npm-install。未动顶层 `core-js@2.6.12`。`src/named/` 未进引用图。目标仍未完成。业务 promote **0**。skip-list 未动。

**Buffer/process 从 anonymous leftover 迁出（不声称 lodash）：** leftover 消费者走 `require(N).a`（958=`isBuffer`，1056=`types`/`isTypedArray`，1648=`copyArrayBuffer(input, isDeep)`）。webpack 绝对路径别名：

- `module-958.js` → `src/shims/is-buffer-fallback.js`
- `module-1056.js` → `src/shims/process-binding-types.js`
- `module-1648.js` → `src/shims/copy-arraybuffer.js`

三份都导出 `{ a, default }`，保持 leftover `.a` 行为。不是 lodash 1:1（2-hit / 结构不符）。live importer 0（`2016` 已是 lodash 桶），所以 login/dashboard 主包哈希未变。磁盘 `src/unpacked/module-{958,1056,1648}.js` 仍在，图上走 shim。

**CJS `.default` LIVE 穷尽：** leftover_live + promoted 对已别名模块的 `require().default` / `require().default(`：**need_wrap 0**。已 wrap：`8`/`30`/`129`/`244`/`283`/`376`/`423`/`1387`。`117` 保持直连（wrap 会崩 login）。无新 wrap。

**history / qs / react-router / path-to-regexp：** 已别名且 leftover 不 live：

- `module-244.js` → `src/shims/qs.js`
- `module-83.js` → `src/shims/history.js`
- `module-47.js` → `src/shims/react-router.js`
- `module-433.js` → `src/shims/react-router-dom.js`
- `module-1553.js` → `src/shims/path-to-regexp.js`（`path-to-regexp@2.2.1`）
- `module-431.js` → `src/shims/mobx-react-router.js`

LIVE leftover 无新 1:1。`module-757` 磁盘 1:1 qs stringify 当时 **live=False** 未别名（pass9 已别名）。`withRouter` leftover 10-hit（`3019` 是业务消费者）。`tokensToFunction` leftover **2-hit**（314+1553）。未 npm-install。

unique orig business **0**。

| 路由 | overlay | 分类 |
| --- | --- | --- |
| `/login` | false | Welcome / Log In（tab db0893 + CDP） |
| `/dashboard` | false | Hello recovered；unpackedUnique **1217** / named **0** |
| `/clusters/default/alert-rules` | false | Rule Groups 0 / Built-in 0 |
| `/clusters/default/log-collections/events` | true | **original** `stores/secret.js` `c.items.length`（无 API；URL 落到 logs 接收器页，与 pass6 logs 同因） |
| `/clusters/default/log-collections/auditing` | true | **original** 同上 `items.length` |
| `/logquery` | false | 0 log entries 空态 |
| `/auditingsearch` | false | No Audit Log Collected Today |
| `/system-workspace/clusters/default/devops/test/credentials` | false | No Credential Found |
| `/system-workspace/clusters/default/devops/test/pipelines` | false | No Pipeline Found |
| `/settings/base-info` | false | Platform address / Customize |
| `/settings/mail` `/feishu` `/dingtalk` `/wecom` `/slack` `/webhook` | false | Notification Channels 表单空态 |
| `/settings/notification-history` | false | 空表 |
| `/settings/silent-policy` | false | Silence Policies 空表 |
| `/settings/notification-language` | false | Notification Language |
| `/settings/license-info` | false | License / Unauthorized |
| `/workspaces/system-workspace/apps` | false | App Templates 空态 |

独立枚举（dashboard 65 JS）：factory leftover **1590**，remaining_like **663**（other **323** / business_looking **242** / css_object **84**），namedCount **0**，promoted **1525**，webpack already **220**（+3 Buffer/process shim）。

仍阻塞目标：factory leftover **1590** / webpackChunk unpacked **1217**；remaining other 323 无新 unique extra-path；business_looking 242 无 1:1 orig；无 ks-apiserver 的 store overlay 是原逻辑。未提交、未推送。

vendor/runtime pass9（主包仍 `app.2d9ad392.js`，webpack pid **2860113** / npm exec **2860100**；compile **0 error / 2 NODE_ENV warnings**）。未 npm-install。未动顶层 `core-js@2.6.12`。`src/named/` 未进引用图。目标仍未完成。业务 promote **0**。skip-list 未动。

**Import-SET pinning（LIVE business_looking，named-import set size≥2，1 leftover : 1 orig）：** leftover 243 份 named-set 直方图 `{0:18,1:54,2:58,3:53,4:25,5:13,6:4,7:7,8:5,9:3,11:1,12:2}`。orig unnamed 319。leftover size≥2 unique 133 / shared 17；orig size≥2 unique 143 / shared 15。**pins 0**。拒绝：leftover_set_not_unique 17、no_orig_set_match 116、orig_set_shared 0。leftover 集合含 `utils/babel-helpers/*`（编译注入），orig git 不 import 这些 helper，集合对不上。size-1 未猜。

去掉 babel-helpers 后再匹配（orig 侧本就没有）：**1 个候选** `module-2216.js` → `dmp/pages/projects/components/AlertRuleCreate/BaseInfo/index.js`，set=`{components/Forms/AlertingPolicy/BaseInfo/UnitInput.js, configs/alerting/metrics/rule.config.js, utils/constants.js}`。pass9 当时未 promote（误把 `dmp/` 当不可 promote）；pass10 已按 orig 路径 promote。

**磁盘 unique 未 live vendor：** leftover **757** 针 `Encoder has to be a function.` / `Unknown format option provided.` leftover 1 且 npm 1=`qs/lib/stringify.js`。别名 `module-757.js` → `src/shims/qs-stringify.js`（`qs/lib/stringify` + `.a`/`.default`）。live=False，login/dashboard 主包哈希未变。拒绝：430 `RFC1738` leftover 1 / npm 2（utils+formats）；310 `maybeMap` leftover 3；758 charset 与 757 共享。

**remaining other 323 vs babel-runtime / core-js@2 / mobx / regenerator-runtime：** unique leftover-and-npm **0**。`Cannot call a class as a function` leftover 52 vs 1 npm helper（非 unique leftover）；`$mobx` leftover 3 / npm 4；`ComputedValue` leftover 1=`14` 但 npm 4 且 14 已是 mobx shim；`regeneratorRuntime` leftover 1=`41` 已别名 regenerator-runtime，npm 3 文件。未盲别名。未换顶层 core-js@2。

**unique t()/API/importer（promote 之后再跑）：** unique_importer / barrel / family / literal / orig unique-import **全 0**。未 invent。

| 路由 | overlay | 分类 |
| --- | --- | --- |
| `/login` | false | Welcome / Log In（headless CDP） |
| `/dashboard` | false | Hello recovered；unpackedUnique **1217** / named **0** |

独立枚举（dashboard 65 JS）：factory leftover **1590**，remaining_like **663**（other **323** / business_looking **242** / css_object **84**），namedCount **0**，promoted **1525**，webpack already **221**（+757 qs-stringify）。`corejs-aliases.js` **103**，shim **11**。

仍阻塞目标：factory leftover **1590** / webpackChunk unpacked **1217**；import-SET 无 PREFIXES 内 1:1；remaining other 323 无新 unique extra-path；business_looking 242 无 1:1 orig；无 ks-apiserver 的 store overlay 是原逻辑。未提交、未推送。

vendor/runtime pass10（主包 `app.cdcffdb4.js`，webpack pid **3030399** / npm exec **3030316**；compile **0 error / 2 NODE_ENV warnings**）。未 npm-install。未动顶层 `core-js@2.6.12`。`src/named/` 未进引用图。目标仍未完成。skip-list 未动。

**orig src 顶层目录 vs webpack alias：** `actions, assets, components, configs, core, dmp, pages, scss, stores, utils`。已 alias：pages/components/stores/actions/utils/configs/core。**未 alias 且磁盘存在：** `dmp`（js/jsx=1）、`assets`（js/jsx=0）、`scss`（js/jsx=0）。本轮只给 **dmp** 加 `resolve.alias`（`dmp` + `dmp/`），`resolve.modules` 已含 `src`。assets/scss 无 JS，不加 JS alias。

**Import-SET（drop babel-helpers，orig unnamed 含 dmp）：** leftover unique size≥2 集合仍 133 / shared 17；no_orig_set_match 116。**promote 1：** `module-2216.js` → `dmp/pages/projects/components/AlertRuleCreate/BaseInfo/index.js`（set size 3：UnitInput + rule.config + constants）。拷到 `recovery/react-app/src/dmp/...`，`unpacked/module-2216.js` 改为 re-export stub；`module-2215.js` import 改写为 `dmp/pages/...`。未撞 OSS `components/Forms/AlertingPolicy/BaseInfo.js`（OSS `checkName` 用 `name`，2216 用 `cluster_id-`）。

**unique t()/API/module=/resourceName/importer：** unique_importer / barrel / family / literal / orig unique-import **全 0**（2216 的唯一 importer 是 leftover 2215，不是 uniquely named parent；t() 键与 OSS BaseInfo 共享）。未 invent。

**拒绝：** assets/scss 无 JS；strict SET 含 babel-helpers pins 0；剩余 import-SET 116 无 orig 对、17 leftover 共享集合；未盲别名 remaining other。

| 路由 | overlay | 分类 |
| --- | --- | --- |
| `/login` | false | Welcome / Log In；dmpCount **1** / named **0** / unpackedUnique **1202** |
| `/dashboard` | false | Hello recovered；unpackedUnique **1216** / named **0** / dmpCount **1** |

独立枚举（dashboard 65 JS）：factory leftover **1589**（−1），remaining_like **663**（other **324** / business_looking **241** / css_object **84**），namedCount **0**，promoted unique **1526**，webpack already **221**，prefix_factory `dmp` **1**。`corejs-aliases.js` **103**，shim **11**。

仍阻塞目标：factory leftover **1589** / webpackChunk unpacked **1216**；dmp orig 仅 1 个 jsx，已 pin；remaining other 无新 unique extra-path；business_looking 241 无更多 1:1 orig；无 ks-apiserver 的 store overlay 是原逻辑。未提交、未推送。

`public/v3css/` 是从密封 `v3dist` **复制**的主样式和 chunk CSS；语言包和 `assets/` 是复制/符号链接，没有改 `dist/v3dist`。`t()` 已能从 `locale-en` JSON 取词。npm `react-router` / `history` / `qs` 替换后，上述三页仍无 overlay。

为跑起来修过、能确定的互操作（不是编业务）：

- CJS/ESM default 互操作（`src/recover-interop.js`）
- webpack 4 `require.r` / `require.d` 以及 `require.context` 数字 ID
- validator.js 一类 Wakaru 未接线的工厂（`export default exports.default`）
- Dashboard `render()` 被 Wakaru 收成空 `<div/>`，改回调用已恢复的 `renderHeader` / `renderContent`
- settings Banner `module-1078` 的 `render()` 被 Wakaru 收成空 `<>`，且把 `module-793` 误成副作用 import；按 orig 改回 `<Module793 module="notification" title={t("NOTIFICATION_CHANNELS")} description={t("NOTIFICATION_CHANNELS_DESC")} tabs={this.tabs} />`（tabs 仍用 dist 里已有的 Feishu 项，不按 orig git 删）
- `getAccessNavs` / `getPlatformSettingsNavs` / `getWorkspaceNavs` / `getProjectNavs` / `getDevOpsNavs` 被 Wakaru 解成对布尔值/`children` 的错误过滤，按同文件里 `getClusterNavs` 的 `items.filter(checkNavItem)` 改回，并兼容 yaml 里的数组 `{ items }` 形态
- Whizard App 动态 `import(module-5767)` 多剥了一层 `.default`，改成函数则直接当构造器
- Node Group 列表路由被 Wakaru 解成 `/list`，对照同结构的 Edgewize 父路径改回 `/node-groups`
- ES6 class 构造器被 Wakaru 解成 `helper(this, super(e))`（参数先算 `this`），Babel 插件改成先 `super` 再使用 `this`
- Cluster `alert-rules` 用 `module1785.ClusterAlertingPolicies` 时，CJS 循环让命名导出在路由表求值时仍是 `undefined`（React #130）；改为页面 render 时再 `require` 该导出
- `clusters` App 曾误接到 named `tags.js`；`tags.js` 应对 `module-3822`，路由表仍是 `module-3656`
- App 入口（`759`/`777`/`779`/`786`/`787`/`4340`）改回直接引用 unpacked 路由模块，避免 named 文件名被覆盖后把引用图接断
- 主路由 `module-768` 里联邦项目 App 曾 lazy 到 `named/stores/namespaces.js`（实际是 `module-783`）；已改回 `./module-783.js`，unpacked 不再引用 `named/`
- unpacked 里剩余的 `named/stores/*` 引用也改回对应 `module-*.js`；named 只作对照，不再进引用图
- 项目成员页 `module-504` 对已别名 CJS `engine-user-agent` 读 `.default.match`；1:1 别名 `504`→`engine-ff-version`、`506`→`engine-webkit-version`
- leftover `704`/`706` 对已别名 CJS `schedulers-fix` 读 `.default(setInterval|setTimeout)`；`423` 改为 `wrapCjsDefault` shim。`117` wrap 会让 login `.default is not a function`，已 revert 直连
- pass8：Buffer/process leftover `958`/`1056`/`1648` 别名到命名 shim（`.a` + `.default`），不声称 lodash
- pass9：磁盘 unique leftover `757` → `src/shims/qs-stringify.js`（qs stringify 1:1，`.a`/`.default`）；import-SET 当时未 promote dmp
- pass10：webpack alias `dmp/`；promote leftover `2216` → `dmp/pages/projects/components/AlertRuleCreate/BaseInfo/index.js`
- pass11：按业务 chunk（actions/main/console）唯一 `t()` 1:1 提升 **15** 个 leftover（FedProjectAddCluster、Notification BaseForm、Grafana Uploader、PodIPRange、RepoApp Apps、CustomRule、Cards/Events、IPPools Detail、ConditionSelect、ClusterSelect、Bill Tables、Environments、ResourceLimit、TimeBar、RollBack）。跳过 skip-list GrafanaTargetInput `1639`、RuleList `2218`。旧 skip「2943 ADD_CLUSTER → ConfigTemplate」是错 orig；2943 实际是 FedProjectAddCluster（`ADD_CLUSTER` 标题 + `FEDPROJECT_CANNOT_ADD_CLUSTER`）。
- pass12：unpacked leftover 再扫 unique `t()`/`module=`，提升 **20**（SnapshotContent、PV、Alerting Policies、GrayRelease VersionSelect、Support、AddExistVolumes、CustomScaling BaseInfo、Cluster BaseInfo/Configuration、LogSearch SearchInput、ProjectInfo、Workspace ClusterSettings、CRD ResourceStatus、LogCollectionCreate config、Repos Events、StorageClass Volumes、ClusterTitle、ConfigFile、Node ConditionCard、fed Routes Rule）。跳过 17 个 skip-list/假 pin。复制进 `src/` 后把 `./module-N.js` 改成 `unpacked/module-N.js`，否则 39 个 resolve error。撤回后 + 这 20 个：`/login` `/dashboard` `/support` `/clusters/default/deployments` overlay-false。
- pass13：pass12 之后 unique `t()` 剩余 19 条全是 skip-list/假 pin（`alerts`、ContainerLog、Initializing/WHIZARD、ProjectSelect、EDIT_ALERT_RULES 对 leftover 2067 实际是 action 不是 Policies Detail）。新父模块 unique leftover kid **0**。`/clusters/default/storageclasses`、`/access/workspaces` overlay-false。`/clusters/default/volumes` overlay 仍是原版 `stores/base.js` `gitVersion.replace`（无 apiserver）。
- pass14：unique importer / class / barrel / family 仍 **0**。unique-kid 41 条无共享 unique 字面量，未 promote。空 render 仅 recharts 轴 `871/913/1637`。v3dist CSS 16 与 `public/v3css` 一致；numeric/dynamic `require()` 残留 0。unique 长标识 promote **1**：`module-1046.js` → `components/Tables/Base/CustomColumns/index.js`（`currentTarget.dataset.value` + `data-test="table-columns"`）。拒绝 `2094`→AddRuleForm（leftover 是 workload template 表单）。验收 overlay-false：`/login` `/dashboard` `/settings/base-info` `/clusters/default/{custom-monitoring,alert-rules,statefulsets,jobs}`。
- pass15：把已 promote 的 `foo.js` 当作 `foo/index.js` 后 orig 未命名降到 **443**。get-path unique 11 条全是假 pin（用户通知 `username-*-receiver` 0-hit orig、平台 Webhook.js 已存在、`2067` action、`2997` ASSIGN_PROJECT、`4656` 是 RuleInfo 子模块、`4432` 已有 ContainerList/Card）。对照 leftover 正文后 promote **3**：`1738` SilentPolicy Base、`4214` PVC Snapshots、`4961` fed DefaultResource。`/login` `/dashboard` `/settings/silent-policy` `/clusters/default/daemonsets` overlay-false。
- pass16：unique t 20 条里对照正文 promote **4**：`4052` ClusterSelect 模态、`4053` ClusterSelect/Card（`NODE_COUNT`+ClusterTitle）、`3974` AppResourceItem、`3975` TinyArea。拒绝：`4119` 是 withClusterList 不是项目 Volumes、`2072` 是 alerting rule card 不是 WorkspaceSelect、`2409` 是 IPPool 选择表不是 IPPools 列表、`3024` 邀请模态、`4113` 集群 volume-snapshots、skip-list ImageRunRecord/StatusReason/TextPreview/ServiceAccess。验收 overlay-false：`/login` `/dashboard` `/clusters/default/cronjobs` `/clusters/default/services`。
- pass17：orig 剩余文件 unique 长字面量对照正文 promote **6**：`4203` StatefulSets ResourceStatus（`spec.serviceName`）、`4204` ServiceCard、`4359` workspace ResourceQuota（`workspace.quota.edit`）、`3192` AppDeploy、`1138` workspace ResourceTable、`1395` ResourceTable ClusterSelect。拒绝：`5157` 是邮箱表单不是 LoginConfirm、`4118` 是 volumes 路由表、`1332` 是 s2i builder store、`1430` 是 KSE app store、`4066` 是 EULA markdown。验收 overlay-false：`/login` `/dashboard` `/clusters/default/pods` `/clusters/default/secrets`。
- pass18：对照 leftover 正文 promote **6**：`1806` ProjectGatewayList（`gateways.batch.delete`）、`4282` GatewayCard（`kubesphere-controls-system`）、`4283` GatewayEmpty unique kid（`_GATEWAY_NOT_ENABLED`）、`2399` Upload `request.js`（`X-Requested-With`）、`2928` fed ConfigTemplate/config（`POD_GRACE_PERIOD`）、`4604` Topology Edge（`auto-start-reverse`）。拒绝：`4036` 是 Gateway Detail 布局不是 Gateway/index、`2423` 是 TimeSelector 包装不是 LogQuery。未再 bulk 进 `src/chunks/`。
- pass19：再钉 unique 长字面量 **8**：`665` NameWithAction、`1410` ResourceUsage、`1418` VersionStatus、`5092` PipelineStatus、`5093` nodesRender unique kid、`4997` ScheduleCluster、`1436` rank/workload store、`1636` Graph Compose。拒绝：`4938` 是配额未设置 tip 不是 BaseInfo、`4746` 当时 unique-long 误指 cluster Services（实际是 ServiceAccess）、`4286` 是 gateway list 不是 MonitoringOverview。
- pass20：unique `t()` 对照正文 promote **3**：`4899` ImageRunRecord Item（`SERIAL_NUMBER`）、`1449` Cards/Services（`SERVICE_PL`）、`4746` ServiceAccess（`VIRTUAL_IP_ADDRESS`）。pass16 skip-list 的 ServiceAccess / unique-long 误指已按 leftover 正文纠正。剩余 unique `t()` 16 条全是 skip-list/假 pin。unique importer / barrel / family / orig unique-import **0**。磁盘 leftover live **4168**（含 vendor/css/helper），promoted 可读 JS **1696**。验收 overlay-false：`/login` `/dashboard` `/clusters/default/{configmaps,ingresses,custom-monitoring,gateways/cluster}`。webpack **0 error / 1 NODE_ENV warning**（pid 341267）。未提交、未推送。
- pass21：unique `data-test="detail-labels"` 对照正文 promote **6**：`3825` core Detail BaseInfo、`3826` BtnGroup（`detail-more`）、`3828` Label、`1217` Attributes barrel、`3830` attributes、`3831` item。拒绝 unique-kid 无共享字面量（CSS 空模块、EmptyList skip）。拒绝 `1133` `gateways.delete`（是 Gateway 卡片菜单不是 Gateway Detail 页）。
- pass22：kebab/专用针 promote **3**：`2400` Upload `attr-accept.js`（`/\\/\\*$/`）、`2401` `traverseFileTree.js`（`webkitGetAsEntry`/`readEntries`）、`1375` Pipeline Card `detail.js`（`credentialsId`+`groovyToJS`）。拒绝：`186` `has-icons-right` 是 kube-design 不是 Slider；`1286` 是数据库用户名正则不是 PasswordConfirm；`2469` 是 workload 表单不是 `utils/request.js`。orig `actions/fluxcd.js` / `configReferenceImpact.js` 在 leftover **0-hit**，未 invent。unique importer 仍 **0**。磁盘 leftover live **4159**，promoted 可读 JS **1705**，orig 未命名 not-skip **398**。验收 overlay-false：`/login` `/dashboard` `/clusters/default/projects` `/access/workspaces`。webpack **0 error / 1 NODE_ENV warning**（pid 341267）。未提交、未推送。
- pass23：已命名子模块唯一 importer + unique `t()`/`regex` 对照正文 promote **4**：`1812` Replica Status（`ADJUST_REPLICAS`+NumberControl）、`1808` Cards/Labels（`LABEL_PL`）、`3876` Workloads Item、`4998` fed ReplicasInput（`^\\+?[1-9][0-9]*$`）。拒绝：`1364` 是日志查看器不是 EnvFromInput；`2082` 是项目表单不是 workspace Projects 列表；`4638` 是 Panel/Text 不是 ImageRunRecord devops；TimeSelector/utils leftover **3** 份（950/1852/1841）未 1:1。
- pass24：extra-path promote **1**：`1218` Cards/Annotations（`hiddenKeys`+`ANNOTATION_PL`+`styles.values`）。`ANNOTATION_PL` leftover 5-hit，但 1218 正文是 Annotations 卡。磁盘 leftover live **4154**，promoted 可读 JS **1710**。验收 overlay-false：`/login` `/dashboard`。webpack **0 error / 1 NODE_ENV warning**（pid 341267）。未提交、未推送。
- pass25：orig 未命名文件正文对照 promote **2**：`1070` Cards/Containers/Ports（`PORT_PL`+`containerPort` 表）、`1638` CustomArrayInput（`defaultItemValue`+`onUpClick`）。拒绝：`1017` 只是 About 的 CSS `describtion` 类名不是 About 组件；envFrom / About / CD Advance / `PARMMETER_TYPES` leftover **0-hit**，未 invent。
- pass26：promote **2**：`1088` Charts/utils（`getActiveSeries` 1:1）、`1915` TrafficCard（`trafficCard` JS；1452 是 CSS）。拒绝：`2230` 是 ClickHouse yaml 不是 PodAffinity。磁盘 leftover live **4150**，promoted 可读 JS **1714**。验收 overlay-false：`/login` `/dashboard`。webpack **0 error / 1 NODE_ENV warning**（pid 341267）。未提交、未推送。
- pass27：promote **2**：`1135` MonitorTab（`tabHeaderItem`+`getLastValue`+SimpleArea；3533/3950 是 CSS）、`1087` Charts/Custom/Legend（`activeSeries`+`payload.stroke`；4030/4264 是别的监控卡）。
- pass28：promote **1**：`1163` TimeSelector DefaultRange（`10m`…`7d` TimeOps）。TimeSelector/utils leftover 仍 3 份（950/1852/1841）未 1:1。磁盘 leftover live **4147**，promoted 可读 JS **1717**。验收 overlay-false：`/login` `/dashboard`。webpack **0 error / 1 NODE_ENV warning**（pid 341267）。未提交、未推送。
- pass29：TimeSelector 家族已命名后，把主图共用的 `950` promote 为 `TimeSelector/utils.js`（`getLastTimeStr`；被 Default/Custom/TimeSelector/LogSearch/Bill 引用）。`1852`/`1841` 仍是副本，未 1:1。CD Parameter / envFrom / SlackForm leftover **0-hit**，未 invent。
- pass30：promote **1**：`1728` ResourceLimit Slider（`totalWeight`+marks.weight）。拒绝：`963` empty-card 是空态卡不是 NotFound。
- pass31：promote **1**：`1634` CustomMonitoring `options.js`（`refreshInterval`+`recentTimeRange` 1:1）。
- pass32：promote **2**：`962` Detail EnvVariables（`initContainers`+EnvStore+inject rootStore/detailStore）、`4907` ImageArtifacts（`fetchS2IRunRecords`+status Successful）。拒绝：`4904` 是 s2iRunStore 副本。
- pass33：promote **4**：`1729` QuotaEdit constants（`FEDERATED_PROJECT_UNSOPPORT_QUOTA`）、`1764` FullscreenModal（`pageClose`）、`1691` MoreActions（`handleMoreClick`+`detail-${key}`）、`3383` StorageclassAutoresizer Slider（max 2048 Gi）。拒绝：`5162` 是 MoreActions 的 KSE extra copy；`3977`/`4946` 是 SimpleArea 不是 AreaColor。
- pass34：promote **2**：`3133` ToggleView（`hideBg`+`closeIcon`）、`815` Detail Events（`involvedObject.uid`+MODULE_KIND_MAP；KSE 多 `isEdgeWizePage`）。拒绝：`4905` 是 Job/s2i Events 副本。
- pass35：promote **1**：`900` core Detail layout（`getEnabledRoutes`+`getEnabledOperations`+ICON_TYPES+renderRoutes）。拒绝：`5161` 是 List 不是 Detail。
- pass36：promote **1**：`1461` CD StatusText（`noBolder`+`hasLabel`+`status_icon`）。KubeConfig `kubeconfig.yaml` / ModifyMember `MODIFY_MEMBER_ROLE` / Cluster List `need_rebuild_` leftover **0-hit**，未 invent。磁盘 leftover live **4134**，promoted 可读 JS **1730**。验收 overlay-false：`/login` `/dashboard` `/clusters/default/daemonsets` `/clusters/default/deployments`。webpack **0 error / 1 NODE_ENV warning**（pid 341267）。未提交、未推送。
- pass37：promote **4**：`1389` BillIcon（`openpitrixs`+crumb size）、`1095` `stores/limitrange.js`（`getListUrl`+`LimitsEqualRequests`；`1531` 是 dryRun 副本）、`4276` Gateway Pods Item（`hideterminal` 无 hideLink）、`4275` Gateway Pods index（`ingress_request_cpu_usage`；`4037`/`4038` 是 hideLink extra copy）。拒绝：PasswordConfirm / About / embed / routeSync leftover **0-hit**。
- pass38：promote **1**：`5044` project Selector（`strategy-group`+`getDomTitle`；WorkspaceSelect leftover 0）。磁盘 leftover live **4129**，promoted 可读 JS **1735**。验收 overlay-false：`/login` `/dashboard` `/clusters/default/custom-monitoring` `/clusters/default/gateways/cluster`。webpack **0 error / 1 NODE_ENV warning**（pid 341267）。未提交、未推送。
- pass39：stub 唯一 importer + 正文 promote **3**：`1977` ImageRunRecord（`isB2i`+4000 refresh）、`1226` Workloads 卡（deployments/statefulsets/daemonsets）、`1220` Replica 卡（`availablePodNums`+gateways）。
- pass40：promote **1**：`1832` VolumeUsage（`getWavePath` 1:1）。
- pass41：promote **1**：`4896` ImageBuilder BuildRecords（`LAST_BUILD_ENVIRONMENT`+`isBinaryURL`；devops 副本用 DevopsRunsCard，未 1:1）。rank/node leftover 2 份（1207/1208）未钉。磁盘 leftover live **4124**，promoted 可读 JS **1740**。验收 overlay-false：`/login` `/dashboard` `/clusters/default/deployments`。webpack **0 error / 1 NODE_ENV warning**（pid 341267）。未提交、未推送。
- pass42：promote **1**：`1980` FedWorkloadStatus（`clusterTemplates`+`CLUSTER_GROUP_TAG_TYPE`+`getWorkloadStatus`+`REPLICAS_CURRENT`/`REPLICAS_DESIRED`）。拒绝：`4432` 仍是 ContainerList/Card 不是 ContainerTemplate/Item；STARTUP_PROBE leftover 0-hit。webpack 341267 之后被宿主杀掉（exit 1073807364），8099 需重启。
- pass43：promote **1**：`1982` fed ClusterSelect（`handleDOMClick`+`getDisplayNameNew`+`showOptions`+`ENV_${group}`）。POSTSTART/LIVENESS/DevopsRunsCard leftover **0-hit**，未 invent。磁盘 leftover live **4122**，promoted 可读 JS **1742**。8099 已重启。验收 overlay-false：`/login` `/dashboard` `/clusters/default/deployments`。webpack **0 error / 2 warning**（NODE_ENV + child compilations）。未提交、未推送。
- pass44：promote **1**：`4455` workspace Overview Clusters Card（`chartNoGPU`+`hideGPUByLicense`+`getRadarOptions`+`isReady`；`4510` 是 CSS）。拒绝把 3760/3698/4096 钉成同一 Card（它们是 SimpleArea 监控页）。
- pass45：promote **1**：`4508` cluster ResourcesUsage ResourceItem（`PieChart` 48×48 Used/Left `#329dce`/`#c7deef`+`coreUnitTS`；5056 是可点击饼图过滤卡，未 1:1）。NO_CLUSTER_AVAILABLE leftover 0-hit，未 invent Overview Clusters index。磁盘 leftover live **4120**，promoted 可读 JS **1744**。验收 overlay-false：`/login` `/dashboard` `/clusters/default/deployments`。8099 未重启。未提交、未推送。

## 还不能算可维护源码的部分

- 没有 Source Map，原始 `src/**/*.jsx` 路径恢复不了。
- 局部变量仍是短名。named re-export 对照表仍是 1633 个文件（slice58/59/60 unique-importer 产量 0，未新增 named；unpacked 已不再引用 `named/`。数字 `require()` / `require.context` 残留扫描 0；先前 `require(958|1056|1648)` 已是 `./module-N.js`）。约 21 个空 `export default {}` 是拆包 CSS 占位（样式在 `public/v3css/` 的 16 个 chunk，与密封 v3dist chunk 哈希一致）；`2107` 已接到 prism.css。v3dist 多出的 `assets/fonts/Roboto/stylesheet.css` 是字体表，不是缺的业务 chunk，未拷进 `public/v3css/`。live 空占位 770/752/177/173/418 仍靠全局 v3css。
- 剩余 unique 缺口：slice58 RouteRulesEdit 3331 只剩共享 136（120 importer）和 CSS 3332，orig 独引的 RouteRules 已是 1320。CustomMonitoring/store 2853 是 leaf。slice57 last-5 父模块 TinyArea/UsageCard/PodsCard/AuditRecord/VolumeSetting 只剩 recharts/共享叶子。UsageCard 剩余 VolumeUsage 1832 是 project+fed UsageCard 的 2-importer；1831 是 volume monitoring store 2-importer；PodsCard 剩余 Cards/Pods 851 多 importer；VolumeSetting 剩余 Edit modal 1122 4-importer；AuditRecord 剩余 VersionStatus skip。router unique kid 3326 是 CREATE_DOMAIN dist-only 0-hit orig，未 invent。Cascader Options 1489 是 Cascader+Item 2102 的 2-importer 环，orig 也是 Options↔Item 互引，没有 unique method，未命名。Tree.js 桶 5770、Gateway Access 1867、Physical/Virtual 1798/1800、Deployments ResourceStatus 1134/1415 仍 skip。Topology Containers 1837 是 2-importer（skip PhysicalResourceItem 1410）。Graph TrafficCard 2 orig importers。WorkloadSelect 只剩 CSS 4764。ClusterDiffSettings 2929 在 2930/2932/2934 之后已无 unnamed JS sibling。PodsMonitoring/ApplicationResource 剩余 unnamed 是 `stores/monitoring/*`（skip）。Dashboard 密封 dist 比 orig git 多出 ranking/quota/node-resource/pod 小部件（3680/3689/3693/3698/3701）；orig ClusterNodes / ResourcesUsage / ServiceComponents 在剩余 unique kids 上 0-hit（getRadarOptions 只在 workspace 4455），未 1:1。BaseInfo ResourceQuota 是 2-importer，不是 4627 的 unique kid。ProjectInfo 的 ManageButton 1215 是 4-importer。Probe/Lifecycle 只剩 CSS。Topology RadioButtons/Edge 与 unique kids 5773/893（已 npm 的 d3）+ 4600/4604 数量不对，orig 无 globally unique t/method。AppInstances 4423 skip。fed Overview Help `HOW_TO_INVITE_USERS` 在 unpacked 0-hit，且 4935 未引用 Help 模块，未 invent。LimitRange 4938 skip。ScheduleCluster/ReplicasInput 4997/4998 skip。PhysicalResourceItem 4945 skip。Modal modal.js / 1475 是 form+桶 2-importer。StatusReason 805 是 41-importer。Cluster/fields.js 已内联；3666/3674 是 dist Favorite/SVG extra。Detail Events/Env/Metadata 815/962/821、KubernetesStatus monitoring store 988 仍 skip。federated actions 的 unique kid 2943 指纹是 ADD_CLUSTER，与 orig ConfigTemplate（EditModal 包装）不符，未 invent。WHIZARD 副本 4153/4154/4219/4227/4139/4144/4330/4103/4080/4107/4105/1847 仍不命名。slice59 vendor：`module-717` 已别名 npm `semver@7.3.8`（362 在 live graph，只用 `gte`；不 invent orig 路径）。LineChart 仍无独立 `chartName`；`react-draggable` 不在本 dist；`jwt-decode` 仅 server。tiny-invariant 81 只被已别名的 router/sortable 引用，effective graph 不含 81，未再别名。slice60 未新增 unique pin：`module-793` 已确认为 Cards/Banner，但是 skip-list 98-importer 父模块，只用于修复 `1078` 的空 render，不命名。effective live 无新第三方版权条/UMD 可别名。
- 不能当集群控制台运行：缺真实登录会话和 ks-apiserver。点 Log In 失败是预期的。
- 3 个 Wakaru 失败工厂已按原流程用 Webcrack 还原：`958`→`src/chunks/vendor/lodash-isBuffer.js`，`1056`→`lodash-nodeUtil.js`，`1648`→`lodash-cloneBuffer.js`（对照 `n(861)`/`n(1115)`/`n(1644)`）。旧 shim 留在 `src/shims/` 作备份，webpack 已改指向 Webcrack 产物。
- live leftover 曾按 `manifest.json` 整进 `src/chunks/`，登录立刻 overlay：`module-200` `__webpack_require__ is not a function`，随后 Cascader `1489`↔`2102` ESM stub 环 `.default` undefined。已把 **1574** 个非 promote 文件撤回 `unpacked/`（相对 `require("./module-N.js")`）。留下 15 个 chunk 侧 stub 指向已 promote 路径，以及 Webcrack 的 `chunks/vendor/lodash-{isBuffer,nodeUtil,cloneBuffer}.js`。撤回后 `/login`、`/dashboard` overlay-false。
- 空 `return <div/>` / `return <></>` 的业务 `render()`：settings Banner `1078` 已修。剩余 `return null` 是已别名 recharts 轴（871/913/1637），不是 Wakaru 掏空。cluster/workspace Gateway 页（3817/4389）把 `793` 收成副作用 import 但 render 非空，属 skip-list Gateway，未改业务 JSX。CJS/ESM：babel helper `332`（`get`）已进 `utils/babel-helpers/get`；`246/51/690` 仍是 `module.exports = n =` + `export default n`（2-hit helper 未 pin）。core-js `70/115/150/221` 无 `export default`、importer 走 `ns.f`，由 `recover-interop` 回退 namespace；live 入口已别名 npm 3.37.0。illegal `super(this)` 残留 0。
- `react-ace` 入口已改 npm；拆包 ace mode（`5720–5728`）改为空副作用，避免 `ace.define` 打进 ace-builds 自身。LineChart 在拆包里没有独立 `chartName`，可能仍走未替换模块。
- 密封 dist 的 Base layout（`module-769`）只渲染 `renderRoutes`，没有 Header / `KubeTools`。拆包里找不到 `react-draggable` / `DraggableCore`，不能凭原仓库 `src` 补工具箱 UI。
- `jwt-decode` 只在 server session 使用，不改 client 别名。
- 未提交、未推送。

## Phase 3 Closure Audit（2026-11-23）

本轮**没有**继续大规模钉名。8099 **未改、未重启、未杀**。未删除 unpacked 文件，未 Git commit/push。

交付物：

- `recovery/module-manifest.json`：unpacked 全量（live + stub）+ SHA256 + importer_count + primary_status
- `recovery/unnameable-modules.json`：live 中 primary=`unnameable`
- `recovery/ORIG306_AUDIT.json`：orig git 同路径未覆盖清单的逐项结果
- `recovery/PHASE3-AUDIT-SUMMARY.json`：口径与交叉说明
- 脚本：`recovery/scripts/phase3_closure_audit.py`

### 1. 口径，禁止相加

| 集合 | 对话里上次报的数 | 本轮实测 | 口径 |
| --- | ---: | ---: | --- |
| unpacked `module-*.js` 文件 | （隐含 5760） | **5760** | `src/unpacked/module-*.js` |
| live leftover | 4121 | **4120** | 非 stub 的 unpacked 数字文件 |
| stub-linked | 1639 | **1640** | unpacked 里 `export { default } from "pages\|…"` |
| promoted 可读 JS | 1743 | **1744** | `src/{pages,components,stores,actions,utils,configs,core,dmp}/**/*.js` |
| orig 同路径未覆盖 | 306 | **291** 或 **306** | 见下 |

交叉：

- `4120 + 1640 = 5760`。live 与 stub **互斥**，都在 `unpacked/`。
- stub **不是**第三份业务源码。每个 stub 只是 re-export 已经算进 1744 的 dest。内容在 dest，数字文件名只是图里的旧入口。
- 1744 **不在** 4120 里。dest 在 `src/pages` 等前缀下。
- orig 306/291 **不是** leftover `module-N.js`，是 orig git 路径没有 **同后缀 dest**。

与上次 4121/1743/1639 差 1：审计前已发生 **pass45**（`4508` → ResourceItem），live −1、stub +1、promoted +1。本审计脚本没有再 pin。

orig 306 vs 291：306 来自 `list_orig_unpromoted_rest.py` 的较短 skip 列表。本审计 skip 多了 AceEditor / EmptyList / DiffYaml / LoginConfirm / PhysicalResource / RankTable 等，故 291。逐项 JSON 是这 291 条；要 306 全表用 rest 脚本再跑，差的 15 条属于 skip-list orig，不是新业务。

### 2. 4120 个 live 模块主状态（恰好一个）

| primary_status | 数量 | 规则 |
| --- | ---: | --- |
| css-empty | 1077 | 短 `export default { hashed class }` 或空对象 |
| unnameable | 2161 | 非 vendor/css/babel/skip/duplicate，且无 JSX/`t()`/`/kapis` 业务针 |
| business-leftover | 550 | 有 JSX/`t()`/`kapis`，但无 1:1 orig 路径 |
| vendor | 231 | webpack/corejs/recharts 别名，或 core-js/lodash 指纹 |
| duplicate | 47 | SHA256 组内非 canonical（22 组） |
| skip | 36 | 既有 skip-list 模块 ID |
| babel-helper | 18 | classCallCheck / super 未初始化等 |
| test | 0 | unpacked 无 `.test.` |
| pinned-readable | 0 | dest 不在 live leftover 集合里 |
| stub-linked | 0 | stub 不在 live leftover 集合里 |

4120 合计：1077+2161+550+231+47+36+18 = **4120**。

stub 1640 全部 `stub-linked`，清单在 manifest 的 `stub_modules`。它们已经指向可读 dest，**具备可维护内容**（在 dest 文件里），不要只看 unpacked 数字文件名。

### 3. orig 未覆盖（本审计 291）

| 状态 | 数量 | 含义 |
| --- | ---: | --- |
| 0-hit | 145 | leftover 里没有该 orig 的 unique `t()`≥8 |
| extra-path-covered | 65 | 缩短 dest 或 unique basename；**其中部分 basename 会撞车，不能当已恢复** |
| unnameable-orig | 64 | leftover 有共享 t()，无 1:1 |
| unique-evidence-unpinned | 17 | leftover 侧 unique t，**本轮故意不 pin** |

extra-path 里已发现假覆盖，例如：

- `GrayRelease/Jobs` → `pages/projects/jobs.js`（工作负载 Jobs）
- `IPPools/Detail/Pods` → `pages/clusters/pods.js`
- `Gateway/Detail/routes` → `pages/clusters/routes.js`
- `components/Terminal/terminal.js` → `stores/terminal.js`
- `Tables/Ranking/wrapper.js` → `Edit/Form/wrapper.js`

这些仍算 orig 未真正覆盖。

17 条 leftover-unique t **不是** orig-unique，且多条是已知假 pin，故未建映射：

| orig | leftover t | module | 既有结论 |
| --- | --- | --- | --- |
| PasswordConfirm | PASSWORD_LETTER | 1286 | 数据库用户名正则，假 pin |
| Alerting Policies Detail | EDIT_ALERT_RULES | 2067 | leftover 是 action |
| ContainerTemplate/Item | INIT_CONTAINER | 4432 | leftover 是 ContainerList/Card |
| WorkspaceSelect/Card | ALL_CLUSTERS | 2072 | leftover 是 alerting card |
| Monitor Statistics | DEVOPS_PROJECT_PL | 5045 | leftover 是 ProjectSelect |
| Gateway×3 | GATEWAY_SETTINGS | 3578 | 3 个 orig 共享，不能 1:1 |
| StoreManage/Reviews/CDList/Gateway Detail | UPDATE_TIME_TCAP | 4657 | 4 个 orig 共享 |
| Clusters/Card | KUBERNETES_VERSION | 4082 | 需正文 extra-path，未在本轮 pin |
| FluxCD Advance / OPApp VersionInfo | ROLL_BACK | 1670 | 2 orig 共享 |
| PV detail | VIEW_YAML | 4119 | 曾判 withClusterList |
| PV ResourceStatus | RWO_DESC | 3942 | 未对照正文 |

### 4. unique importer 最终结论

unique `t()` / unique importer 1:1 **已耗尽作为自动 pin 条件**。剩余 leftover-unique 字符串经常对应多个 orig，或正文对不上。继续用同一策略会稳定产生假映射。闭环改为：分类归档 + 仅 extra-path 正文 1:1 才允许新 pin。

### 5. 尚未解决

- 闭环条件 A/B **都未达到**：550 business-leftover 仍要逐个证据；2161 unnameable 多是 tiny/runtime，还没有 orig 路径，也还没有更细的排除标签写进主状态。
- extra-path 启发式有假阳性，306/291 不能当成「还要恢复的业务文件数」。
- 8099 本轮未重启；已在现有服务上验收 overlay-false。
- 未提交、未推送。

本轮**没有**用虚构路径、假 pin 或删除数字文件来凑零。

### 业务 leftover 550 再扫（仍不 pin）

`recovery/BUSINESS_LEFTOVER_UNIQUE.json`：550 个 business-leftover 里，leftover **且** orig 双侧 unique `t()`≥8 的只有 **26**。524 条没有双侧 unique t。这 26 条对照既有假 pin / skip-list / 已有 dest 副本，**全部未 pin**（ContainerLog、RuleList、PromQLInput、ProjectSelect、EditGroup、KubernetesStatus、Gateway 菜单、IPPool 选择表、PasswordConfirm 类、UPDATE_TIME 共享等）。

8099 未重启。浏览器 overlay-false：`/login` Welcome / Log In；`/dashboard` Last login；`/clusters/default/deployments` Please create a deployment。

`recovery/BUSINESS_LEFTOVER_REASONS.json`：550 条理由 **508** 无双侧 unique t / extra-path 1:1；**42** 已知假 pin 或 skip 正文。stub unique importer 仍是那 10 条旧假 pin，未新建映射。2161 unnameable 按体积：<200 **893**，<400 **348**，<2000 **618**，≥2000 **302**（多半 tiny/runtime，无 orig 路径）。

unique class **0**；unique 长字面量 13 条全是已知假 pin；unique-kid 41 条指向 EmptyList/Pods/Tooltip/skip store，未 pin。

随后把 550 个 `business-leftover` **改主状态为 `unnameable`**（带 `previous_status` 和理由），写入 `module-manifest.json` / `unnameable-modules.json`。live 主状态现为：unnameable **2711**，css-empty 1077，vendor 231，duplicate 47，skip 36，babel-helper 18。**没有新 dest、没有删文件。** 4120 个 live `module-N.js` 仍在图里。目标仍未完成：可维护源码要求的是可读路径，不是把业务 leftover 改标签。

unique data-test/get-path **11** 条全是已知假 pin（username-receiver、4432、2067、866 等）。unique method-set **0**。unique ann-lit 仅 `2094` exprBuilder.workload.names，正文是 workload 表单不是 AddRuleForm。unique importer 1:1 / barrel / family / orig unique-import pins **0**（0-kid 113，KSE-only t 105 orig 0-hit 未 invent）。8099 仍在跑，compile 1 NODE_ENV warning；未重启。

orig ResourcesUsage（RadarChart `cy=158`）leftover **0-hit**。`4155` 是 `CLUSTER_RESOURCE_USAGE`+MediumArea，不是 Overview ResourcesUsage。`1790`/`4290` 是 Ranking 表，不是 NodesTop5。rank/node leftover 仍 2 份（1207/1208）未钉。

当前 dest-prefix import-SET（去 babel-helpers，size≥2）1:1 仅 **1**：`4904` → ImageBuilder Environment，正文是 s2iRunStore EnvVariables 副本（pass32 已拒）。未 pin。


