import "unpacked/module-15.js";
import "unpacked/module-86.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
import "unpacked/module-190.js";
import "unpacked/module-24.js";
import "unpacked/module-64.js";
import "unpacked/module-553.js";
import module159 from "unpacked/module-159.js";
import module186 from "unpacked/module-186.js";
import Module1043 from "components/Base/Bar";
import { cpuFormat, memoryFormat } from "utils/index";
import { ICON_TYPES } from "utils/constants";
import module3987 from "unpacked/module-3987.js";
export default function({ name, total, used }) {
    const d = name.indexOf("requests.storage") !== -1;
    let p = 0;
    if (name === "limits.cpu" || name === "requests.cpu") {
        if (total) {
            p = Number(cpuFormat(used)) / Number(cpuFormat(total));
            used = `${cpuFormat(used)} Core`;
            total = `${cpuFormat(total)} Core`;
        }
    } else if (name === "limits.memory" || name === "requests.memory") {
        if (total) {
            p = Number(memoryFormat(used)) / Number(memoryFormat(total));
            used = `${memoryFormat(used, "Gi")} Gi`;
            total = `${memoryFormat(total, "Gi")} Gi`;
        }
    } else if (total) {
        p = Number(used) / Number(total);
    }
    p = Math.min(Math.max(p, 0), 1);
    const m = name.indexOf("gpu") > -1 ? "gpu" : name;
    const h = m === "gpu" ? `${m}.limit` : m;
    return <div className={module3987.quota}><module186.Icon name={ICON_TYPES[m] || "resource"} size={40}/><div className={module3987.item}><div>{t(h.replace(/[. ]/g, "_").toUpperCase())}</div><p>{t("RESOURCE_TYPE_SCAP")}</p></div><div className={module3987.item}><div>{used} {d && "Gi"}</div><p>{t("USED")}</p></div><div className={module3987.item}><div>{module159(total) ? t("NO_LIMIT") : d ? total === 0 ? t("NO_REQUEST") : `${total} Gi` : total}</div><p>{t("RESOURCE_LIMIT")}</p></div><div className={module3987.item} style={{
        flex: 3
    }}><div>{t("USAGE")}</div><Module1043 value={Math.min(p, 1)} className={module3987.bar} rightText={total ? "" : total === 0 || total === "0" ? t("NO_REQUEST") : t("NO_LIMIT")} text={t("USED_PERCENT", {
        percent: Number((100 * p).toFixed(2))
    })}/></div></div>;
};
