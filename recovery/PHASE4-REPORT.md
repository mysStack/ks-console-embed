# Phase 4 — 可编译 React 恢复（2026-11-23）

目标已从「给全部 `module-N.js` 恢复 orig 路径」改为「证明恢复源码能重新构建」。
本轮不改 8099、不覆盖 dest/stub、不提交。

## 1. 1744 个可读 JS 是什么形态？

结论：**可读 dest 已经是普通 `import`/`export` 源码，不是 `__webpack_require__` 包。**
它们仍然大量 `import "unpacked/module-N.js"`，模块 ID 映射还在；构建靠 Webpack 5 + Babel 兼容层，而不是先把全部 leftover 改成纯 ESM。

| 集合 | 数量 | ESM | CJS `module.exports` | 混合 | `__webpack_require__` / `require.r` / `require.d` |
| --- | --- | --- | --- | --- | --- |
| dest 可读 JS（pages/core/components/stores/actions/utils/configs/dmp） | 1744 | 1698 | 45 | 1 | **0** |
| unpacked stub（re-export dest） | 1640 | 1640 | 0 | 0 | 0 |
| unpacked leftover `module-N.js` | 4120 | 3885 | 157 | 9 | **4** |

样例：

- ESM dest：`src/pages/login.js` 以 `import ...` 开头，以 `export default E` 结尾。
- 残留 CJS dest：`src/pages/projects/alert-rules.js` 仍是 `((module)=>{ ... exports.default = U })(require(...))`。
- leftover Webpack 4 运行时残留仅 4 个：`module-14.js`、`module-95.js`、`module-1514.js`、`module-3473.js`（`require.d` / `require.r`）。构建时由 `rewriteWebpack4Runtime` Babel 插件处理，本轮 **未改这些文件**。

数字 `require(123)`：dest 与 leftover 均为 0。Wakaru 已改成字符串路径。

证据：`recovery/PHASE4-SYNTAX.json`。

## 2. Webpack / React 入口

| 角色 | 位置 |
| --- | --- |
| Webpack entry | `recovery/react-app/src/bootstrap.js` → `globals-shim.js` + `unpacked/entry.js` |
| React 挂载 | `src/unpacked/entry.js`：`module106.render(..., document.getElementById("root"))` |
| App 根 | `unpacked/module-759.js` stub → `core/App` |
| React | webpack alias：`src/unpacked/module-553.js` → npm `react` |
| ReactDOM | webpack alias：`src/unpacked/module-106.js` → npm `react-dom` |
| 路由入口 | `core/routes.js`：`lazy(() => import("pages/console/App"))` 等 |

挂载伪代码（已恢复）：

```js
module106.render(
  createElement(Suspense, ..., createElement(LocaleProvider, ..., App)),
  document.getElementById("root")
);
```

## 3. 从入口的静态依赖图

脚本：`recovery/scripts/phase4_entry_graph.py`  
产物：`recovery/PHASE4-GRAPH.json`

| 指标 | 结果 |
| --- | --- |
| 从 bootstrap 静态可达源文件 | 5865 |
| 其中 dest | 1640 / 1744 |
| 其中 leftover | 4107 / 4120 |
| 其中 stub（仍被 `unpacked/module-N.js` 引用） | 114 |
| 静态 `import`/`require` 解析失败 | **0** |

104 个 dest 不在静态图里（`recovery/PHASE4-DEST-UNREACHED.json`），多数是 `pages/*/Detail.js`、layout、部分 list。它们通常由子应用 `lazy()` / 运行期路由表加载，**不是磁盘缺失**。Webpack 生产构建也没有报这些文件 `Can't resolve`。

静态图把模板字符串误当成外部模块（`${e}`、`ace/range`、`util`）。真正 npm 依赖走 webpack alias / `node_modules`，不是丢失业务模块。

**真正缺失的业务模块（构建意义）：本轮为 0。**  
未命名 leftover 仍然在图里以 `module-N.js` 存在，因此不算缺失。

## 4. 生产构建（独立目录，不碰 8099）

命令：

```bash
cd /home/bruce/code/ks-develop/kse-console-v3/recovery/react-app
npx webpack --config webpack.phase4.config.js --mode production --no-color
```

`webpack.phase4.config.js` 只改 `output.path` 为 `phase4-build/`，复用现有 webpack 配置，不改 8099 用的 `webpack.config.js`。

| 项 | 结果 |
| --- | --- |
| 开始 | 2026-11-23T17:05:35+08:00 |
| 结束 | 2026-11-23T17:07:37+08:00 |
| 退出码 | **0** |
| webpack | **compiled successfully** |
| 错误 | **无** |
| 产物 | `recovery/react-app/phase4-build/` |
| 文件数 | 87 |
| 体积 | 14,986,208 bytes |
| 主包 | `app.f61e4774.js` 2,309,277 bytes |
| HTML | `index.html` 1221 bytes |

阻塞构建的 require/import/export：**没有需要修的错误。**

## 5. 运行（8099 未改）

本轮未重启、未改配置。探测：

- `0.0.0.0:8099` 仍 LISTEN
- `GET http://127.0.0.1:8099/` → HTTP 200，HTML 含 `id="root"`，title `v3dist recovered React app`

开发服务此前已能打开 `/login`、`/dashboard` 等页面。生产包尚未另开端口托管（避免动 8099）。

## 6. 技术路线（下一步）

不要为了「纯 ESM」先拆掉模块 ID 映射。当前能编过，是因为：

1. dest 以 ESM 为主，少量 CJS 由 `@babel/plugin-transform-modules-commonjs` 处理。
2. leftover 以 ESM 为主，仍通过 `unpacked/module-N.js` 进图。
3. 4 个 `require.d`/`require.r` 由 Babel `rewriteWebpack4Runtime` 兼容。
4. vendor（react/react-dom/mobx/kube-design 等）走 webpack alias，不把 vendor 当业务源码。

下一步优先：用现有工程做 Phase 5 页面/路由验证；只有构建或运行被某个 CJS/`require.d` 卡住时才改那一处。不强行给 4120 leftover 起 orig 文件名。

## 7. 本轮未做

- 未修改 8099 / `webpack.config.js` / dest / stub
- 未给 leftover 命名
- 未提交、未推送
- 未用生产包另起静态服务器
- 未扩大恢复范围
