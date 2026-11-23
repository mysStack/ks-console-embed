import "./module-15.js";
import "./module-5.js";
import "./module-84.js";
import "./module-86.js";
import "./module-16.js";
import "./module-27.js";
import "./module-190.js";
import "./module-24.js";
import "./module-85.js";
import "./module-64.js";
import "./module-553.js";
import module159 from "./module-159.js";
import module186 from "./module-186.js";
import Module1043 from "./module-1043.js";
import { cpuFormat, memoryFormat } from "./module-52.js";
import { ICON_TYPES } from "./module-72.js";
import module4968 from "./module-4968.js";
export default function({ name, total, used, type }) {
    let m = 0;
    if (name === "limits.cpu" || name === "requests.cpu") {
        if (total) {
            m = Number(cpuFormat(used)) / Number(cpuFormat(total));
            used = `${cpuFormat(used)} Core`;
            total = `${cpuFormat(total)} Core`;
        }
    } else if (name === "limits.memory" || name === "requests.memory") {
        if (total) {
            m = Number(memoryFormat(used)) / Number(memoryFormat(total));
            used = `${memoryFormat(used, "Gi")} Gi`;
            total = `${memoryFormat(total, "Gi")} Gi`;
        }
    } else if (total) {
        m = Number(used) / Number(total);
    }
    m = Math.min(Math.max(m, 0), 1);
    const h = name.indexOf("gpu") > -1 ? "gpu" : name;
    const v = h === "gpu" ? `${h}.limit` : h;
    const name_1 = name.indexOf("gpu") > -1 ? ICON_TYPES.gpu : ICON_TYPES[name] ?? "resource";
    return <div className={module4968.quota}><module186.Icon name={name_1} size={40}/><div className={module4968.item}><div>{((e = "", type_1)=>{
        if (type_1 !== "userDefined" || e.includes("gpu")) {
            return t(e.replace(/[. ]/g, "_").toUpperCase());
        }
        return e;
    })(v, type)}</div><p>{t("RESOURCE_TYPE_SCAP")}</p></div><div className={module4968.item}><div>{used}</div><p>{t("USED")}</p></div><div className={module4968.item}><div>{module159(total) ? t("NO_LIMIT_TCAP") : total}</div><p>{t("RESOURCE_LIMIT")}</p></div><div className={module4968.item} style={{
        flex: 3
    }}><div>{t("USAGE")}</div><Module1043 value={Math.min(m, 1)} className={module4968.bar} rightText={total ? "" : t("NO_LIMIT_TCAP")} text={`${t("USED")} ${Number((100 * m).toFixed(2))}%`}/></div></div>;
};
