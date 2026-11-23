# Phase 5.5 冻结说明（2026-11-23）

成功运行时的制品已复制到 `recovery/freeze/phase5.5-90597b7c/`。

| 项 | 值 |
| --- | --- |
| 主包 | `app.90597b7c.js` |
| SHA256 | `2a66f2f745ce641d37b32272948e0ed380455d23e19bd959a2a99519ae54fa99` |
| 主包大小 | 25012 字节 |
| 完整 phase4-build | 100 文件 / 15105378 字节，哈希见同目录 `SHA256SUMS.phase4-build` |
| webpack | `webpack.config.js` + `webpack.phase4.config.js` |
| 验收 | `PHASE5.5-REPORT.md` / `PHASE5.5-VERIFY.json` |

下次 `webpack --mode production` 会 `clean` 掉 `recovery/react-app/phase4-build`。不要用新构建覆盖本冻结目录。

8099 未改。未做镜像，未部署 K3s，未推送。
