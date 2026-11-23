# Phase 5 — React 运行时与核心路由验证（2026-11-23）

8099 未改。`dist/v3dist` 只读映射 locale/CSS，未覆盖。未给 leftover 命名。未提交。

## 实际使用的构建产物

| 项 | 值 |
| --- | --- |
| 产物目录 | `recovery/react-app/phase4-build/` |
| 独立端口 | `http://127.0.0.1:8108`（不是 8099） |
| 身份接口 | `GET /__phase5` → `X-Recovery-Artifact: phase4-build`，`X-Recovery-Main-Js: app.f61e4774.js` |
| 主包 | `/app.f61e4774.js`（HTML 与 header 一致） |
| Webpack runtime 名 | `webpackChunkv3dist_recovered_react_app` |
| CSS | `/v3css/*.css` 16 个，全部 200（只读自 sealed v3dist） |
| Locale | `/dist/v3dist/locale-en.60d9ddf6aff8fa136646.json` 真实 JSON（只读） |

判定依据：浏览器加载的 script 是 `app.f61e4774.js`，不是 v3dist 的 `main.558f4520….js`。

## 测试规模

从 `core/routes.js` 提取：12 个顶层 path、11 个 lazy 子应用、嵌套路由 path 364 条。  
本轮 Playwright 冒烟 **15** 条（P0 公开入口 + P1 登录后核心页）。

自动化脚本把「#root 有子节点且有文本、主包加载、无 ChunkLoadError」记成 pass。下面按业务标准重判，不以 15/15 冒充认证或 API 通过。

## 分层结果

### P0 运行时（通过）

| 检查 | 结果 |
| --- | --- |
| 页面加载 | `/`、`/login` HTTP 200 |
| React 真正挂载 | `#root` childCount≥1，登录页可见 Welcome / Username / Password / Log In |
| `window.globals` | `user=recovered`，`title=KubeSphere (recovered)`，`disableAuthorization=true`（globals-shim，不是本次测试绕过） |
| JS | `app.f61e4774.js` 200；登录页另加载 38 个动态 chunk，均为 200 |
| CSS | 16 个 `/v3css` 200 |
| ChunkLoadError | **无** |
| 关键 pageerror（P0） | **无** |

截图：`recovery/phase5-evidence/login.png`、`dashboard.png`。

### P1 核心路由（部分通过）

| 路由 | 浏览器实际渲染 | 判定 |
| --- | --- | --- |
| `/` → `/dashboard` | Hello recovered，Last login | 通过（shim 用户） |
| `/dashboard` | 同上 | 通过 |
| `/support` | Community Support | 通过 |
| `/clusters`、`/clusters/default/overview` | Overview / Cluster Quota Statistics / No Data | 通过（无后端数据） |
| `/clusters/default/deployments` | No Deployment Found / Create | 通过（空列表壳） |
| `/clusters/default/projects` | Projects / No Project Found | 通过（空列表壳） |
| `/clusters/default/nodes` | Cluster Nodes 空列表；`TypeError: … reading 'filter'` | 渲染了，运行时错误 |
| `/clusters/default/volumes` | No Persistent Volume Claim Found；`TypeError: … reading 'replace'` | 渲染了，运行时错误 |
| `/access`、`/access/workspaces` | Access Control / KS Workspaces 表格 | 通过（无数据） |
| `/settings` | Basic Information / 127.0.0.1:8108 | 通过 |
| `/workspaces/system-workspace` | Projects / Roles / No Monitoring Data | 通过 |
| `/system-workspace/clusters/default/projects/default/deployments` | **Not Found** | 失败 |

动态 `import()`：访问 `/clusters` 后 chunk 从 ~40 增至 ~53，无 ChunkLoadError。  
四个仍含 `require.d`/`require.r` 的 leftover（14/95/1514/3473）未单独炸 chunk。

104 个静态图未达 dest：磁盘仍在。`/clusters/default/volumes` 能开，是因为路由走 `pages/clusters/containers/Storage/Volumes`，不是未达的 `pages/clusters/volumes.js`。它们多数是重复 dest 路径，不是构建缺失。

### P2 认证 / API（会话通过；应用内跳转未完成）

8108 将 `POST /login`、`/kapis`、`/apis` 反代到测试环境 `http://192.168.2.131:30880`。没有伪造 200。

| 项 | 结果 |
| --- | --- |
| 测试账号 | `~/.bashrc` 的 `KS_TEST_*`（报告不写值） |
| `POST /login` HTTP | 200，`X-Recovery-Api-Origin: http://192.168.2.131:30880` |
| JSON 体 | `{ success, redirect }`（v4 形态，没有 v3 的 `status: 200`） |
| `/kapis/version` 登录前 | **403** anonymous |
| `/kapis/version` 登录后 | **200**，`gitVersion=v4.1.4-42+…` |
| 应用是否自行跳转 | **否**。恢复的 `login.js` 只认 `t.status !== 200`，吃不到 `success/redirect`，表单停在 Log In |
| 带 cookie 打开业务页 | Playwright 随后打开 `/clusters/default/deployments`，拉到真实列表 **Total: 141** |
| `globals.user` | 仍是 shim 的 `recovered`，工作台文案仍是 Hello recovered |

截图：`phase5-evidence/p2-dashboard-after-login.png`、`p2-deployments-after-login.png`。

未登录时去集群路由会 403，因此接 API 后的冒烟是 9 通过 / 6 失败。登录后再开 Deployment 列表则正常。

## 计数（业务标准）

| | 成功 | 失败 | 无法验证 |
| --- | --- | --- | --- |
| P0 挂载/产物身份 | 2 | 0 | 0 |
| P1 无 API 时路由壳 | 12 | 1（项目 Deployment Not Found） | 0 |
| 接 API 后未登录冒烟 | 9 | 6（集群页 403） | 0 |
| P2 登录会话（cookie + kapis） | 1 | 0 | 0 |
| P2 应用内登录跳转 | 0 | 1（不识别 `{success,redirect}`） | 0 |
| P2 登录后业务列表 | 1（集群 Deployments，141 条） | 0 | 0 |
| ChunkLoadError | 0 | 0 | 0 |

## 阻塞业务使用的问题

1. **登录成功不跳转**：测试环境返回 `{success, redirect}`，恢复代码按 v3 `{status:200}` 判断。需要跟 redirect，不要改 shim 假装已登录。
2. **`globals-shim` 仍注入 `user=recovered`**：即使 cookie 有效，工作台用户名也不来自会话。
3. **项目 Deployment 路径 Not Found**：`/system-workspace/clusters/default/projects/default/deployments`。
4. **未登录访问集群页 403**：接上真实 API 后的预期行为，不是 Chunk 失败。
5. nodes/volumes 在无数据时的 `filter`/`replace` TypeError 仍在。

## 下一阶段建议

1. 让登录成功处理 `success/redirect`（或 `window.location = redirect`），再验证工作台用户名不再是 recovered。
2. 登录后再跑集群/项目冒烟，替换未登录 403 那组失败。
3. 核对项目路由 path。
4. leftover 继续只修运行失败点，不要批量改名。

## 证据位置

- `recovery/PHASE5-RUN.json`、`PHASE5-P2.json`、`PHASE5-ROUTES.json`
- `recovery/phase5-evidence/*.png`
- 服务：`python3 recovery/scripts/phase5_static_server.py` 监听 8108，反代 `192.168.2.131:30880`
