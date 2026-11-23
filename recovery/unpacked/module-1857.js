import "./module-15.js";
import "./module-18.js";
import "./module-98.js";
import module31 from "./module-31.js";
import module96 from "./module-96.js";
import "./module-553.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import module4323 from "./module-4323.js";
export default function({ rulesStats }) {
    const r = {
        pending: t("ALERT_RULE_PENDING"),
        inactive: t("ALERT_RULE_INACTIVE"),
        firing: t("ALERT_RULE_FIRING"),
        disabled: t("DISABLED")
    };
    const n = Object.entries(rulesStats).map((e)=>{
        const t = module96(e, 2);
        const a = t[0];
        const value = t[1];
        return {
            label: r[a],
            type: a,
            value
        };
    });
    return <module186.Tooltip content=<>{n.map((e, t)=><div key={t} className={module3(module4323.tipContent, [
            module4323[e.type]
        ], module31({}, module4323.disabled, e.value === 0))}><span>{e.label}</span><span>{e.value}</span></div>)}</> placement="right"><ul className={module4323.statusBox}>{n.map((e, t)=><li key={t} className={module3([
            module4323[`li-${e.type}`]
        ], module31({}, module4323.iconDisabled, e.value === 0))}>{e.value}</li>)}</ul></module186.Tooltip>;
};
