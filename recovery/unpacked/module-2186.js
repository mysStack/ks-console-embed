import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-1036.js";
import "./module-18.js";
import "./module-1037.js";
import "./module-16.js";
import "./module-118.js";
import "./module-28.js";
import "./module-4.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import module870 from "./module-870.js";
import module928 from "./module-928.js";
import module999 from "./module-999.js";
import module1035 from "./module-1035.js";
import module1089 from "./module-1089.js";
import module872 from "./module-872.js";
import module136 from "./module-136.js";
import module929 from "./module-929.js";
import module159 from "./module-159.js";
import { COLORS_MAP } from "./module-72.js";
import module2187 from "./module-2187.js";
import module2189 from "./module-2189.js";
export default function(e) {
    const { dataList, legendClassName, wrapperStyle } = e;
    const wrapperStyle_1 = wrapperStyle === undefined ? {
        width: "50%",
        left: "120px"
    } : wrapperStyle;
    const e_disabledFilter = e.disabledFilter;
    const b = e_disabledFilter !== undefined && e_disabledFilter;
    const { total, noTooltip } = e;
    const S = module553.useState([]);
    const C = module96(S, 2);
    const activeSeries = C[0];
    const k = C[1];
    const N = module553.useState(true);
    const T = module96(N, 2);
    const isMult = T[0];
    const I = T[1];
    module553.useEffect(function() {
        const e = module136(dataList);
        if (dataList.length > 1) {
            const a = e.map((e)=>e.data).flat();
            const r = a.pop();
            const n = a.filter((e)=>e.name !== r.name).concat(r);
            k(n);
        } else {
            const l = e.map((e)=>e.data).flat();
            k(l);
            I(false);
        }
    }, [
        dataList
    ]);
    if (!(Array.isArray(dataList) && dataList.length < 0)) {
        return module553.default.createElement(module872, {
            width: "100%",
            height: "100%",
            debounce: 1
        }, module553.default.createElement(module1089, null, dataList.map(({ data, dataKey, innerRadius, outerRadius, colors, cx = 75, cy = 55 }, t)=>module553.default.createElement(module1035, {
                data,
                dataKey,
                cx,
                cy,
                minAngle: 0,
                innerRadius,
                outerRadius,
                startAngle: 90,
                endAngle: -360,
                key: `pie-${t}`,
                animationDuration: 1000
            }, data.map((e, t)=>{
                const a = !module159(activeSeries.find((t)=>t.name === e.name));
                return module553.default.createElement(module999, {
                    key: `cell-${t}`,
                    fill: a ? colors[t % colors.length] : colors[colors.length - 1]
                });
            }))), !noTooltip && module553.default.createElement(module870, {
            wrapperStyle: {
                zIndex: 1000
            },
            cursor: {
                stroke: COLORS_MAP.dark,
                strokeDasharray: "3,2",
                strokeWidth: 2
            },
            content: module553.default.createElement(module2187, null)
        }), module553.default.createElement(module928, {
            layout: "vertical",
            align: "right",
            verticalAlign: "middle",
            iconType: "circle",
            wrapperStyle: wrapperStyle_1,
            content: module553.default.createElement(module2189, {
                activeSeries,
                onClick: b ? null : function(e) {
                    const t = module136(activeSeries);
                    if (t.find((t)=>t.name === e.name)) {
                        module929(t, function(t) {
                            return t.name === e.name;
                        });
                    } else {
                        t.push(e);
                    }
                    k(t);
                },
                isMult,
                className: legendClassName,
                totalValue: total
            })
        })));
    }
};
