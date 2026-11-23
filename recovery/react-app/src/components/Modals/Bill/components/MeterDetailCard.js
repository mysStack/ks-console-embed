import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-190.js";
import "unpacked/module-10.js";
import "unpacked/module-24.js";
import "unpacked/module-64.js";
import "unpacked/module-4.js";
import "unpacked/module-436.js";
import "unpacked/module-58.js";
import "unpacked/module-553.js";
import module3 from "unpacked/module-3.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module159 from "unpacked/module-159.js";
import module3528 from "unpacked/module-3528.js";
import { METER_RESOURCE_TITLE } from "components/Modals/Bill/constats";
export default function({ className, title, isParent, priceConfig, ...rest } = {}) {
    const unit = priceConfig.currency ? priceConfig.currency : " ";
    const v = ()=>{
        const rest_feeData = rest.feeData;
        let t = 0;
        if (!(module159(rest_feeData) || module63(rest_feeData))) {
            t = Object.keys(rest_feeData).map((t)=>100 * parseFloat(module26(rest_feeData[t], "value", 0))).reduce((acc, item)=>acc + item) / 100;
        }
        return t.toFixed(2);
    };
    const g = (e)=>{
        const t = y(e);
        if (t !== "-") {
            return t.toFixed(3);
        }
        return t;
    };
    var y = (e)=>{
        if (module159(e)) {
            return "-";
        }
        if (e < 0) {
            return 0;
        }
        return e;
    };
    const EComponent = (e, a)=>{
        if (module63(e)) {
            return null;
        }
        if (a === "price" && module63(priceConfig)) {
            return <ul className={module3528.noPriceTip}><li>{t("PRICE_CONFIG_DESC")}</li></ul>;
        }
        return <ul>{Object.keys(e).map((r)=>{
            const n = module26(e[r], "value");
            const l = a === "meter" ? g(n) : y(n);
            if (e[r]) {
                return <li key={r}><div>{l}</div><p><span>{t(METER_RESOURCE_TITLE[r].toUpperCase().replace(/\s+/g, "_"))}</span><span>({module26(e[r], "unit.label", "-")})</span></p></li>;
            }
            return null;
        })}</ul>;
    };
    const BComponent = (title)=>{
        const a = v();
        return <div><h3>{title} {t("CONSUMPTION_SINCE_CREATION")}</h3>{module63(priceConfig) ? null : <div className={module3528.totalPrice}><h4>{a}</h4><p>{t("TOTAL_COST", {
            unit
        })}</p></div>}</div>;
    };
    const Component = (title)=>{
        const a = v();
        return <div className={module3528.parentCostContainer}><div><h3>{title}</h3><span> {t("CONSUMPTION_SINCE_CREATION")}</span></div><p><span>{unit}</span>{a}</p></div>;
    };
    const rest_sumData = rest.sumData;
    const S = rest_sumData === undefined ? {} : rest_sumData;
    const rest_feeData = rest.feeData;
    const D = rest_feeData === undefined ? {} : rest_feeData;
    if (isParent) {
        return <div className={module3(module3528.billTotal, className)}>{Component(title)}</div>;
    }
    return <div className={module3(module3528.billTotal, className)}>{BComponent(title)}<div className={module3528.consumContainer}>{module63(S) && module63(D) ? null : <>{EComponent(S, "meter")}<div className={module3528.line}/>{EComponent(D, "price")}</>}</div></div>;
};
