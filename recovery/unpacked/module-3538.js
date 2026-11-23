import "./module-15.js";
import "./module-5.js";
import "./module-828.js";
import "./module-18.js";
import "./module-16.js";
import "./module-190.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import module1160 from "./module-1160.js";
import module872 from "./module-872.js";
import module928 from "./module-928.js";
import module999 from "./module-999.js";
import module1035 from "./module-1035.js";
import module1089 from "./module-1089.js";
import module63 from "./module-63.js";
import module791 from "./module-791.js";
import { ICON_TYPES } from "./module-72.js";
import module3539 from "./module-3539.js";
import { PIE_COLORS, RESOURCE_TITLE } from "./module-944.js";
import module1389 from "./module-1389.js";
const activeShape = function(e) {
    const t = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = e;
    const h = Math.sin(-t * midAngle);
    const v = Math.cos(-t * midAngle);
    const g = cx + (outerRadius + 10) * v;
    const y = cy + (outerRadius + 10) * h;
    const E = cx + (outerRadius + 30) * v;
    const b = cy + (outerRadius + 30) * h;
    const cx_1 = E + 22 * (v >= 0 ? 1 : -1);
    const O = b;
    const textAnchor = v >= 0 ? "start" : "end";
    return module553.default.createElement("g", null, module553.default.createElement("text", {
        x: cx,
        y: cy,
        dy: 8,
        textAnchor: "middle",
        fill,
        className: "chart__center__text"
    }, payload.name), module553.default.createElement(module1160, {
        cx,
        cy,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill
    }), module553.default.createElement(module1160, {
        cx,
        cy,
        startAngle,
        endAngle,
        innerRadius: outerRadius + 6,
        outerRadius: outerRadius + 10,
        fill
    }), module553.default.createElement("path", {
        d: `M${g},${y}L${E},${b}L${cx_1},${O}`,
        stroke: fill,
        fill: "none"
    }), module553.default.createElement("circle", {
        cx: cx_1,
        cy: O,
        r: 2,
        fill,
        stroke: "none"
    }), module553.default.createElement("text", {
        x: cx_1 + 12 * (v >= 0 ? 1 : -1),
        y: O,
        textAnchor,
        fill: "#333"
    }, `${value} ${payload.unit}`), module553.default.createElement("text", {
        x: cx_1 + 12 * (v >= 0 ? 1 : -1),
        y: O,
        dy: 18,
        textAnchor,
        fill: "#999"
    }, `(${(100 * percent).toFixed(2)}%)`));
};
export default function({ data, dataKey = "value" }) {
    const l = module553.useState(0);
    const i = module96(l, 2);
    const activeIndex = i[0];
    const O = i[1];
    if (module63(data)) {
        return null;
    }
    return module553.default.createElement(module872, {
        width: "100%",
        height: "100%"
    }, module553.default.createElement(module1089, {
        width: 250,
        height: 250
    }, module553.default.createElement(module928, {
        vertical: true,
        content: function({ payload }) {
            return module553.default.createElement("div", {
                className: module3539.resourceList
            }, module553.default.createElement("ul", null, payload.map((e, a)=>{
                const e_payload = e.payload;
                const { name, value, type, unit } = e_payload;
                return module553.default.createElement("li", {
                    key: `item-${a}`
                }, module553.default.createElement("i", {
                    style: {
                        background: e.color
                    }
                }), module553.default.createElement(module1389, {
                    icon: ICON_TYPES[type],
                    type,
                    name
                }), module553.default.createElement(module791, {
                    className: module3539.info,
                    title: `${name}`,
                    description: t(RESOURCE_TITLE[type])
                }), module553.default.createElement("span", null, ` ${value} ${unit}`));
            })));
        },
        verticalAlign: "top"
    }), module553.default.createElement(module1035, {
        cx: "70%",
        data,
        dataKey,
        innerRadius: "60%",
        outerRadius: "75%",
        activeShape,
        activeIndex,
        onMouseEnter: function(e, t) {
            O(t);
        }
    }, data.map((e, t)=>module553.default.createElement(module999, {
            key: `cell-${e.name}`,
            fill: PIE_COLORS[t % PIE_COLORS.length],
            strokeWidth: 1
        })))));
};
