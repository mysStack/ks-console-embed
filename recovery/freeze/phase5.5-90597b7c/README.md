# Phase 5.5 冻结包（2026-11-23）

可运行开发测试版检查点。不是 Docker 镜像，也不是 K3s 部署。

| 项 | 值 |
| --- | --- |
| 主包 | `app.90597b7c.js` |
| SHA256 | `2a66f2f745ce641d37b32272948e0ed380455d23e19bd959a2a99519ae54fa99` |
| 主包大小 | 25012 字节（webpack runtime；业务在同目录 chunk） |
| phase4-build | 100 个文件，15105378 字节 |
| 端口 | 8108 |
| API | `http://192.168.2.131:30880` |
| 8099 | 未改、未监听 |

完整文件哈希：`SHA256SUMS.phase4-build`、`SHA256SUMS.configs`。

验收报告副本：`PHASE5.5-REPORT.md`、`PHASE5.5-VERIFY.json`。
生产构建会 `clean` 掉 `recovery/react-app/phase4-build`，以后以本目录为成功版本来源。
