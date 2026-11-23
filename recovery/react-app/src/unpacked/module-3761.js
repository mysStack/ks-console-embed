import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-16.js";
import module31 from "unpacked/module-31.js";
import "unpacked/module-436.js";
import "unpacked/module-553.js";
import module3 from "unpacked/module-3.js";
import { getSuitableUnit, getValueByUnit } from "utils/monitoring";
import { SimpleCircle } from "components/Charts/index";
import module3762 from "unpacked/module-3762.js";
export default function({ active, name, used, total, unit, unitType }) {
    const title = t(name);
    const unit_1 = getSuitableUnit(total || used, unitType) || unit;
    const v = getValueByUnit(used, unit_1);
    const g = getValueByUnit(total, unit_1);
    const y = unit_1 === "core" ? "CORE_PL" : unit_1;
    return <div className={module3(module3762.tab, module31({}, module3762.active, active))}><SimpleCircle width={40} height={40} title={title} value={parseFloat(v)} total={parseFloat(g)} unit={unit_1} showCenter={false} showRate active={active}/><div className={module3762.info}><div className={module3762.title}>{title} {t(y)}</div><p title={`${v}/${g}`}>{v}<span>/{g}</span></p></div></div>;
};
