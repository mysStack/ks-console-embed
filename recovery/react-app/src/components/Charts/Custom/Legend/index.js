import "unpacked/module-15.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-85.js";
import module31 from "unpacked/module-31.js";
import "unpacked/module-553.js";
import module3 from "unpacked/module-3.js";
import module26 from "unpacked/module-26.js";
import module2174 from "unpacked/module-2174.js";
export default function(e = {}) {
    const { className, payload, activeSeries } = e;
    const s = activeSeries === undefined ? [] : activeSeries;
    const e_showAll = e.showAll;
    const d = e_showAll !== undefined && e_showAll;
    const e_isTranslate = e.isTranslate;
    const m = e_isTranslate === undefined || e_isTranslate;
    const e_extraLegend = e.extraLegend;
    const v = payload || [];
    if (v.length < 2 && !d) {
        return <div className={module2174.legend}/>;
    }
    const onClick = function(t) {
        const e_onClick = e.onClick;
        if (e_onClick) {
            const r = module26(t.target, "dataset.key");
            if (r) {
                e_onClick(t, r);
            }
        }
    };
    return <div className={module3(className, module2174.legend)} onClick={onClick}>{e_extraLegend && <div className={module2174.item}>{e_extraLegend}</div>}{v.map((e)=>{
        const a = !s.includes(e.value);
        const backgroundColor = module26(e, "payload.stroke");
        return <div key={e.dataKey} data-key={e.dataKey} className={module3(module2174.item, module31({}, module2174.inactive, a))}><i style={{
            backgroundColor
        }}/>{m ? t(e.value) : e.value}</div>;
    })}</div>;
};
