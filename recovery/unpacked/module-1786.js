import "./module-15.js";
import "./module-18.js";
import "./module-98.js";
import module31 from "./module-31.js";
import module96 from "./module-96.js";
import "./module-553.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import module3661 from "./module-3661.js";
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
    return <module186.Tooltip content=<>{n.map((e, t)=><div key={t} className={module3(module3661.tipContent, [
            module3661[e.type]
        ], module31({}, module3661.disabled, e.value === 0))}><span>{e.label}</span><span>{e.value}</span></div>)}</> placement="right"><ul className={module3661.statusBox}>{n.map((e, t)=><li key={t} className={module3([
            module3661[`li-${e.type}`]
        ], module31({}, module3661.iconDisabled, e.value === 0))}>{e.value}</li>)}</ul></module186.Tooltip>;
};
