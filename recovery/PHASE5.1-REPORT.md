# Phase 5.1 — 真实登录后进入受保护业务页（2026-11-23）

8099 未改、未启动。原始 `dist/v3dist` 未覆盖。未给 leftover 命名。未提交、未推送。

## 结论

**M2 通过。** 真实测试账号登录后，浏览器保存会话，React 用真实用户（不是 `recovered`）进入工作台、Settings、Access；刷新 Settings 后仍保持登录。

| 验收项 | 结果 |
| --- | --- |
| 浏览器真实登录成功 | **通过**。应用内从 `/login` 跳到 `/dashboard`，不是 Playwright 硬跳 |
| 浏览器保存有效会话 | **通过**。`token`（httpOnly）、`expire`、`refreshToken`、`oAuthLoginInfo` |
| globals-shim 不提供伪造用户 | **通过**。登录前 `globals.user` 为空，全程 `username !== recovered` |
| 登录后进入真实业务页面 | **通过**。工作台 / Settings 基本信息 / Access 企业空间列表 |
| 页面核心 API 正常 | **通过**。`/kapis/version` 登录前 403、登录后 200；当前用户 User CR 200；Access 列出 3 个企业空间 |
| 刷新后会话仍然有效 | **通过**。`/settings/base-info` reload 后仍渲染，用户仍在 |

## 诊断顺序（按指令执行）

1. Cookie / 会话：已用同一 Browser Context 证明 `POST /login` 成功，`/kapis/version` 403→200。
2. 去掉 shim `user=recovered`：去掉后手动打开 `/settings`、`/access` **被 BaseLayout 打回 `/login`**（`PHASE5.1-MANUAL.json`）。
3. 因此问题不是单纯 `login.js` 跳转，而是 **没有 `globals.user`，路由守卫拦截**。
4. 补用户初始化后再接登录成功跳转：`session-restore.js` + `login.js` 的 `loginSucceeded`/`completeLogin`，bootstrap 在挂载前 `restoreSession()`。跳转走 `rootStore.routing.push`，只在没有 routing 时才 `location.assign`。

## 实际使用的构建产物

| 项 | 值 |
| --- | --- |
| 产物目录 | `recovery/react-app/phase4-build/` |
| 独立端口 | `http://127.0.0.1:8108` |
| 身份接口 | `GET /__phase5` → `artifact=phase4-build`，`mainJs=app.4c700f41.js` |
| API 反代 | `http://192.168.2.131:30880`（未伪造 200） |
| 主包 | `/app.4c700f41.js`（含 `ks-recovered-session-user` 存储键，不含伪造 user 对象） |
| 登录逻辑 chunk | `5037.app.66073087.js`（含 `LOGIN_FAILED` / `completeLogin`） |
| 8099 | 未监听 |

判定依据：HTML script 是 `app.4c700f41.js`，不是 sealed v3dist 的 `main.*.js`。

## 实际执行的命令

```
npx webpack --config webpack.phase4.config.js --mode production
# webpack compiled successfully

bash recovery/scripts/phase5_restart_static.sh
# static_ready；8099_not_listening；8108 LISTEN
# GET /__phase5 → mainJs=app.4c700f41.js

cd recovery/phase5-node && node phase5_1_accept.mjs
# exit 0
```

Webpack 约 137s。Playwright 约 12s。账号来自 `~/.bashrc` 的 `KS_TEST_*`，本报告不写值。

## Cookie 与会话证据

来源：`recovery/PHASE5.1-SESSION.json`、`PHASE5.1-ACCEPT.json`。

| 检查 | 登录前 | 登录后 |
| --- | --- | --- |
| `POST /login` | — | HTTP 200，JSON `{success, redirect}`，`redirect=/` |
| 浏览器 Cookie 名 | `lang` | `lang`、`oAuthLoginInfo`、`token`、`expire`、`refreshToken` |
| `token` | 无 | 有，httpOnly |
| 同 Context `GET /kapis/version` | **403** | **200**，`gitVersion=v4.1.4-42+a70cb1ca584a12-dirty` |
| 当前用户 API | — | `GET /kapis/iam.kubesphere.io/v1beta1/users/<login>` **200**，`kind=User` |

Playwright `request.headers()` 读不到 `Cookie`（httpOnly 不会出现在 `document.cookie`，CDP 的 request header 也被剥掉）。会话有效的直接证据是：**同一 Context 里登录前 403、登录后 200，且 `context.cookies()` 出现 httpOnly `token`。** 没有伪造认证状态。

## 前端状态

| 项 | 结果 |
| --- | --- |
| 登录前 shim 用户 | `userPresent=false`，`recovered=false` |
| 登录后 `globals.user` | 存在，长度与测试账号一致，`userIsRecovered=false`，`globalrole` 有值 |
| 自动跳转 | `navigatedOffLogin=true`，落地 `/dashboard` |
| 工作台文案 | 真实用户问候语 + `platform-admin` + Last login，**不是 Hello recovered** |
| `/settings` | 重定向到 `/settings/base-info`，渲染「基本信息」、平台地址 `127.0.0.1:8108`、KubeSphere 标识 |
| 刷新 `/settings/base-info` | 仍在该路由，用户仍在，页面仍渲染 |
| `/access` | `/access/workspaces`，表格 3 行：`public-workspace`、`dev-workspace`、`system-workspace` |

截图：

- `recovery/phase5-evidence/p51-auto-after-login.png`
- `recovery/phase5-evidence/p51-auto-settings.png`
- `recovery/phase5-evidence/p51-auto-settings-refresh.png`
- `recovery/phase5-evidence/p51-auto-access.png`

## 代码改动范围（仅恢复工程）

未改 leftover、stub、原始 v3dist、8099。

- `recovery/react-app/src/globals-shim.js`：删除 `user: { username: "recovered", ... }`，保留 config / ksConfig / localeManifest。
- `recovery/react-app/src/session-restore.js`：登录名写入 localStorage，再用带 Cookie 的 User CR 填 `globals.user`。
- `recovery/react-app/src/bootstrap.js`：先 `restoreSession()` 再动态加载 `entry.js`，保证刷新能恢复用户。
- `recovery/react-app/src/pages/login.js`：同时接受 v3 `status===200` 和 v4 `success===true`；成功后 `completeLogin` → 拉用户 → `rootStore.routing.push`。

## 未执行 / 仍存在的风险

- **未做 M3**：没有扩大核心业务路由回归（创建工作负载、编辑、删除等）。
- 工作台「Platform version 3.3.2 / Workspaces 0 / Users 0」来自 shim 的 `ksConfig` 和未接上的统计 API；Access 列表已证明租户 API 有数据。
- 页面有重复 `TypeError: Cannot set property loaded of #<Object> which has only a getter`，不阻止挂载。
- `globals.config.disableAuthorization: true` 仍在 shim 里，这是配置项，不是伪造用户。
- 会话恢复依赖「登录名 localStorage + httpOnly Cookie」，不是原版服务端 HTML 注入 `globals.user`。
- `phase4-build/` 里仍留有更早一次构建的 chunk 文件；当前 HTML 只引用 `app.4c700f41.js`。
- 未部署到集群，未改生产服务。

## 里程碑

| 里程碑 | 状态 |
| --- | --- |
| M1 React 可独立生产构建 | 已完成（Phase 4） |
| M2 React 可真实登录并进入业务页面 | **本轮完成** |
| M3 核心业务路由和操作正常 | 未开始 |
