import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-86.js";
import "./module-18.js";
import "./module-16.js";
import "./module-27.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-24.js";
import "./module-64.js";
import "./module-7.js";
import "./module-31.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-553.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module926 from "./module-926.js";
import { coreUnitTS } from "utils/index";
import { ICON_TYPES } from "utils/constants";
import { ReactComponent } from "./module-1515.js";
import module2188 from "./module-2188.js";
export default function(e = {}) {
    if (!e.active) {
        return null;
    }
    const { renderLabel, payload, usageData, totalData, tailText, alert, isTranslate } = e;
    const y = isTranslate === undefined || isTranslate;
    const E = payload || [];
    const e_label = e.label;
    const _ = module26(E, "[0].payload.unit") || "";
    const O = _ === "default" ? "" : _ === "%" ? "%" : `${t(_)}`;
    const S = renderLabel ? renderLabel(e) : e_label;
    const C = (e)=>{
        const a = e.indexOf("gpu") > -1 ? "gpu" : e;
        const r = a === "gpu" ? `${a}.limit` : a;
        if (ICON_TYPES[a]) {
            return t(r.replace(/[. ]/g, "_").toUpperCase());
        }
        return r;
    };
    return <div className={module2188.tooltip}>{alert && <div className={module2188.item}><ReactComponent/>{`${t(C(alert.name || ""))}：${alert.unit === "core" ? t("VALUE_CORES", {
        value: alert.value
    }) : t("VALUE_UNIT", {
        ...alert
    })}`}</div>}<div className={module2188.label} style={{
        marginTop: `${alert ? "8px" : "0px"}`
    }}><span>{S}</span>{tailText && <span>{tailText}</span>}</div><div className={module2188.list}>{E.map((e)=>{
        const { dataKey, name, value } = e;
        const d = value === undefined ? 0 : value;
        if (module926(Number(d))) {
            return null;
        }
        const background = module26(e, "payload.fill");
        const h = module26(e, "payload.label") || name;
        let v = "";
        if (!module63(usageData) && !module63(totalData)) {
            const g = module26(usageData.find((e)=>e.time === e_label), name) || 0;
            const E = module26(totalData.find((e)=>e.time === e_label), name) || 0;
            v = ` (${g}/${E})`;
        }
        const _ = coreUnitTS(d, O);
        return <div key={dataKey} className={module2188.item}><i style={{
            background
        }}/>{y ? t(h) : h}: {d}{` ${t(_)}`}{v}</div>;
    })}</div></div>;
};
