# v3dist 静态包分析与 Wakaru 拆包报告

日期：2026-11-20  
工具：Wakaru CLI 1.17.0（`pionxzh/wakaru`）  
结论：拆包成功，本轮不进入 React 工程重建。

## 输入

原始静态包未修改：

`/home/bruce/code/ks-develop/console/dist/v3dist`

当前 Cursor 工作区是 `kse-console-v3`，这里没有 `dist/v3dist`。`ks-develop/dist/v3dist` 也不存在。上面这个目录是 release 控制台里实际挂载的 v3 静态包，体积 38MB，784 个文件。

| 类型 | 数量 |
| --- | ---: |
| JS | 434 |
| CSS | 17 |
| JSON | 6 |
| SVG | 219 |
| 图片 / 字体 / 其他 | 108 |
| Source map（`.map`） | 0 |

JSON：`manifest.json`、`manifest.locale.json`，以及 `locale-zh`、`locale-en`、`locale-tc`、`locale-es`。

唯一入口：

- JS：`main.558f452048e49db23323.js`（2.0MB）
- CSS：`main.39ed81f6e5a43d5bb447.css`

## Webpack 与 Source Map

入口运行时是 Webpack JSONP，全局名是 `webpackJsonp`。模块缓存对象使用 Webpack 4 的 `i` / `l` / `exports`。整个目录里没有 `webpackChunk`。

带 `webpackJsonp` 的文件一共 20 个，也就是入口加上异步 chunk。其余 414 个 JS 是 Ace 语言模式等拷贝资源，Wakaru 没有把它们当成 bundle。

没有可用的原始 Source Map：

- 没有 `.map` 文件。
- `sourcesContent` 只出现在 `0.79b1d388db9009cab691.js` 的 style-loader 运行时里，用来给 CSS 动态拼接 map，不是应用源码。
- 另一处 `sourceMappingURL` 在 CoffeeScript 编译器字符串里。

因此不能提取 JSX 或原始文件路径。`wakaru extract` 没有输入可用。

Wakaru 的目录扫描报告 `detected_formats: ["webpack5", "webpack4"]`。字节特征对得上 Webpack 4 JSONP；报告里的 webpack5 没有对应的 `webpackChunk` 运行时。

## 安装位置

Skill 已安装到当前工作区：

`kse-console-v3/.agents/skills/wakaru/SKILL.md`

当前 `skills` CLI 使用 `-a cursor` 时写入 `.agents/skills`，不是 `.cursor/skills`。

`npx wakaru --version` 在本机没有直接跑通（`sh: wakaru: not found`）。可用的调用是本地安装后的：

```bash
npm install wakaru@1.17.0
node node_modules/wakaru/bin/wakaru --version
# wakaru 1.17.0
```

## 拆包结果

命令（只读 `dist/v3dist`，输出在本仓库 `recovery/`）：

```bash
node node_modules/wakaru/bin/wakaru \
  /home/bruce/code/ks-develop/console/dist/v3dist \
  --unpack --provenance --json \
  -o recovery/unpacked \
  > recovery/report.json
```

进程退出码 1，因为有 3 个错误级模块。Wakaru 仍然写出了全部产物。耗时 8.1 秒。

| 项 | 结果 |
| --- | ---: |
| 模块总数 | 5761 |
| 已写出且 `status=decompiled` | 5761 |
| 错误级失败 | 3 |
| 输出体积 | 40MB |
| 非数字文件名 | 仅 `entry.js` |
| `import` 语句的模块 | 3567 |
| `export` 语句的模块 | 5326 |
| 仍残留数字 `require(id)` 的模块 | 5 |
| `createElement` 调用 | 4626（495 个文件） |
| JSX 运行时（`jsx` / `_jsx`） | 0 |

3 个失败模块是 lodash 的 `Buffer` / `process` 包装，工厂体保持原样：

- `module-958.js`（251 字节）
- `module-1056.js`（317 字节）
- `module-1648.js`（336 字节）

非错误警告 193 条：

| 警告 | 数量 | 含义 |
| --- | ---: | --- |
| `commonjs_export_unrecovered` | 102 | ESM 模块仍访问 `exports`，运行时会抛 `ReferenceError` |
| `commonjs_require_of_esm` | 75 | CommonJS `require` 拿到的是 ESM 命名空间 |
| `missing_imported_name` | 8 | 导入了对方没有的 `default`，Node 无法链接 |
| `runtime_residual` | 5 | 仍引用上面 3 个不透明模块 |
| `commonjs_exports_escape` | 3 | 把已转成 ESM 的 exports 对象传给了外部函数 |

`recovery/unpacked/provenance.json` 记录每个输出文件来自哪个输入 chunk 以及字节区间。没有原始 `src/...jsx` 路径。

按 chunk 拆出的模块数：

| 模块数 | 文件 | manifest 名 |
| ---: | --- | --- |
| 1274 | `1.9ca3a76d71946712055c.js` | common.js |
| 988 | `0.79b1d388db9009cab691.js` | vendor.js |
| 859 | `3.bb6cbee4309e765b70c1.js` | actions.js |
| 775 | `main.558f452048e49db23323.js` | main.js |
| 433 | `13.49ba3bf3c56e4e52c867.js` | react-ace.js |
| 338 | `12.2a69b0c5dbf5a00a4a8d.js` | projects.js |
| 288 | `11.4803f6f37e8687716aa1.js` | observability.js |
| 203 | `4.49e1bbd1d064c2cb5c0d.js` | clusters.js |
| 116 | `8.efefc7072f02199ebc47.js` | fedprojects.js |
| 114 | `16.c38048441fc60c1f26b2.js` | workspaces.js |
| 98 | `6.8bcf3ff261066d30352e.js` | devops.js |
| 92 | `7.e17520c994653ce8d2f4.js` | edgewize.js |
| 57 | `15.085308545755091f5ce0.js` | terminal.js |
| 57 | `14.87db00577a502c52dfc5.js` | settings.js |
| 27 | `10.0a4386054b517ee54ead.js` | nodegroup.js |
| 25 | `5.b3ebc4536a8f41200f09.js` | console.js |
| 14 | `2.a875961480f3e500c2c8.js` | access.js |
| 1 | `17` / `18` / `19.*.js` | manifest 中无逻辑名 |

业务代码可以读到路由和文案，例如 `module-4345.js` 是 workspace 列表页，路径 `/access/workspaces`、`/access/edge-workspaces`，store 为 `module: "workspaces"`。它的依赖已经连成 `import { ListPage } from "./module-794.js"` 这种相对路径，组件仍是 `createElement`，类继承仍保留 Babel 的 `Reflect.construct`，局部变量仍是短名。React 来自内部模块 `module-553.js`，没有还原成 `react` 包导入。

当前工作区 `src/` 里没有 `edge-workspaces` 这段路由。拆出来的是嵌入包里的定制控制台，不是本仓库现有页面的副本。

## 为什么不重建 React 工程

阶段三需要可编译、可维护的工程。这次拆包给出的是模块图和可读结构，还不是源码树：

1. 没有 `sourcesContent`，不能恢复原始 JSX、文件名和注释。
2. 5760 个文件仍叫 `module-<id>.js`，第三方库和业务模块混在同一层。
3. JSX、类继承和不少标识符都还是编译后形态。
4. 180 条 CommonJS/ESM 链接警告会导致直接打包或用 Node 加载失败。
5. 自动生成 `recovery/react-app` 只能包一层构建配置，业务逻辑仍然是这批短名模块，修引用会变成大规模猜测。

可以继续做的下一步是单独写识别规则：标出 React、MobX、lodash、Ace，再把业务 chunk（projects、clusters、workspaces、edgewize 等）整理成阅读目录。那一步确认能链接之后，再考虑构建验证。本轮没有创建 `recovery/react-app`，没有改 `dist/v3dist`，没有提交或推送。

## 产物

- `recovery/REPORT.md`：本报告
- `recovery/static-structure.json`：静态包扫描
- `recovery/report.json`：Wakaru 的模块与警告 JSON
- `recovery/unpack.stderr`：退出码 1 的错误摘要
- `recovery/quality-summary.json`：拆包质量计数
- `recovery/unpacked/`：5761 个模块、`entry.js`、`provenance.json`

## 未做的验证

没有部署，没有镜像，没有浏览器验收，没有对拆包结果执行 `yarn build`。这些都不适用于当前产物。
