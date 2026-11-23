import "./module-15.js";
import "./module-18.js";
import "./module-98.js";
import module31 from "./module-31.js";
import module96 from "./module-96.js";
import "./module-553.js";
import module3 from "./module-3.js";
import module26 from "./module-26.js";
import module186 from "./module-186.js";
import module4663 from "./module-4663.js";
export default function({ workloadStatus }) {
    const r = {
        succeeded: t("SUCCEEDED"),
        processing: t("PROCESSING"),
        failed: t("FAILED")
    };
    const n = Object.entries(r).map((e)=>{
        const t = module96(e, 2);
        const r = t[0];
        return {
            label: t[1],
            type: r,
            value: module26(workloadStatus, r, 0)
        };
    });
    return <module186.Tooltip content=<>{n.map((e, t)=><div key={t} className={module3(module4663.tipContent, [
            module4663[e.type]
        ], module31({}, module4663.disabled, e.value === 0))}><span>{e.label}</span><span>{e.value}</span></div>)}</> placement="right"><ul className={module4663.statusBox}>{n.map((e, t)=><li key={t} className={module3([
            module4663[`li-${e.type}`]
        ], module31({}, module4663.iconDisabled, e.value === 0))}>{e.value}</li>)}</ul></module186.Tooltip>;
};
