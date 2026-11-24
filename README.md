# ks-console-embed

KubeSphere Console V3 静态资源服务。只存放并提供 `v3dist`（JS / CSS / 字体），不负责登录、API 或生成 V3 HTML。

对齐官方 4.3.0：`ks-console` 是 V4 宿主，`ks-console-embed` 是独立 Nginx 镜像。

浏览器必须走同一 Host：

| 路径 | 后端 |
| --- | --- |
| `/consolev3/` | `ks-console`（Koa HTML + `window.globals`） |
| `/dist/v3dist/` | `ks-console-embed`（本仓库镜像） |
| `/extensions-static/ks-console-embed/` | 同一份静态文件（4.3 扩展前缀） |

## 构建镜像

Node 14：

```sh
V3_PUBLIC_PATH=/dist/v3dist/ yarn build:client
make container
```

产物是 Nginx 镜像，监听 80。不要用根目录 `build/Dockerfile`（那是旧的 Node Console 包）。

## 部署

`deploy/ks-console-embed.yaml` 是 ClusterIP Service。不要给浏览器单独 NodePort。入口把 `/dist/v3dist/` 转到这个 Service，`/consolev3/` 仍走 `ks-console`。
