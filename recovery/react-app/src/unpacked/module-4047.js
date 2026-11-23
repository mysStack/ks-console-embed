import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-98.js";
import module31 from "unpacked/module-31.js";
import module96 from "utils/babel-helpers/slicedToArray";
import "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module3 from "unpacked/module-3.js";
import module4048 from "unpacked/module-4048.js";
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
    return <module186.Tooltip content=<>{n.map((e, t)=><div key={t} className={module3(module4048.tipContent, [
            module4048[e.type]
        ], module31({}, module4048.disabled, e.value === 0))}><span>{e.label}</span><span>{e.value}</span></div>)}</> placement="right"><ul className={module4048.statusBox}>{n.map((e, t)=><li key={t} className={module3([
            module4048[`li-${e.type}`]
        ], module31({}, module4048.iconDisabled, e.value === 0))}>{e.value}</li>)}</ul></module186.Tooltip>;
};
