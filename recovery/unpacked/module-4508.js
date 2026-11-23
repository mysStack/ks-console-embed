import "./module-15.js";
import "./module-5.js";
import "./module-16.js";
import "./module-553.js";
import Module791 from "./module-791.js";
import { PieChart } from "./module-799.js";
import { getSuitableUnit, getValueByUnit } from "./module-795.js";
import { coreUnitTS } from "./module-52.js";
import module4509 from "./module-4509.js";
export default function(e) {
    const description = t(e.name);
    var a = getSuitableUnit(e.total, e.unitType) || a;
    const n = getValueByUnit(e.used, a);
    const f = getValueByUnit(e.total, a) || n;
    const d = Math.round(100 * n / f);
    return <div className={module4509.item}><div className={module4509.pie}><PieChart width={48} height={48} data={[
        {
            name: "Used",
            itemStyle: {
                fill: "#329dce"
            },
            value: n
        },
        {
            name: "Left",
            itemStyle: {
                fill: "#c7deef"
            },
            value: f - n
        }
    ]}/></div><Module791 title={`${isNaN(d) ? 0 : d}%`} description={description}/><Module791 title={`${n} ${t(coreUnitTS(n, a))}`} description={t("USED")}/><Module791 title={`${f} ${t(coreUnitTS(f, a))}`} description={t("TOTAL")}/></div>;
};
