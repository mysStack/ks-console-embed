import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import module31 from "./module-31.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import module3 from "./module-3.js";
import module136 from "./module-136.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module2190 from "./module-2190.js";
export default function(e = {}) {
    const { className, payload, activeSeries } = e;
    const l = activeSeries === undefined ? [] : activeSeries;
    const { isMult, totalValue } = e;
    const v = module553.useState([]);
    const g = module96(v, 2);
    const y = g[0];
    const E = g[1];
    module553.useEffect(function() {
        if (payload.length > 0) {
            const e = module136(payload);
            if (isMult) {
                const t = e.pop();
                if (totalValue !== undefined) {
                    module74(t, "payload.value", totalValue);
                }
                const a = e.filter((e)=>e.value !== t.value).concat(t);
                E(a);
            } else {
                E(e);
            }
        }
    }, [
        payload,
        totalValue
    ]);
    const b = (t, a)=>{
        t.cancelBubble = true;
        t.stopPropagation();
        const e_onClick = e.onClick;
        if (e_onClick) {
            e_onClick(a);
        }
    };
    return module553.default.createElement("div", {
        className: module3(className, module2190.legend)
    }, y.map((e, a)=>{
        let r;
        const n = !l.find((t)=>t.name === e.value);
        const backgroundColor = module26(e, "color");
        const s = !!isMult && a === y.length - 1;
        return module553.default.createElement("div", {
            key: a,
            className: module3(module2190.item, (r = {}, module31(r, module2190.inactive, n), module31(r, module2190.disabled, s), r)),
            onClick: s ? null : function(t) {
                return b(t, {
                    name: e.value,
                    value: e.payload.value
                });
            }
        }, module553.default.createElement("span", {
            className: module2190.label
        }, module553.default.createElement("i", {
            style: {
                backgroundColor
            }
        }), module553.default.createElement("span", null, t(e.value))), module553.default.createElement("b", {
            className: module2190.value
        }, e.payload.unit ? e.payload.unit === "core" ? t("VALUE_CORES", {
            value: e.payload.value
        }) : t("VALUE_UNIT", {
            value: e.payload.value,
            unit: t(e.payload.unit)
        }) : e.payload.value));
    }));
};
