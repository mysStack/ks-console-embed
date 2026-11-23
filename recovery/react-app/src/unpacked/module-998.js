import module76 from "unpacked/module-76.js";
import module194 from "unpacked/module-194.js";
import module844 from "unpacked/module-844.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module1032 from "unpacked/module-1032.js";
import { PRESENTATION_ATTRIBUTES, filterEventAttributes, findAllByType, getPresentationAttributes } from "unpacked/module-810.js";
import { getPercentValue, isNumOrStr, isNumber, isPercent, mathSign, uniqueId } from "unpacked/module-827.js";
import { polarToCartesian } from "unpacked/module-927.js";
function p() {
    if (typeof WeakMap !== "function") {
        return null;
    }
    const weakMap = new WeakMap;
    p = function() {
        return weakMap;
    };
    return weakMap;
}
function y(e, t) {
    const n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        n.push.apply(n, r);
    }
    return n;
}
function m(e, t, n) {
    if (t in e) {
        Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        e[t] = n;
    }
    return e;
}
const b = module1.shape({
    x: module1.number,
    y: module1.number,
    width: module1.number,
    height: module1.number
});
const x = module1.shape({
    cx: module1.number,
    cy: module1.number,
    innerRadius: module1.number,
    outerRadius: module1.number,
    startAngle: module1.number,
    endAngle: module1.number
});
const w = {
    ...PRESENTATION_ATTRIBUTES,
    viewBox: module1.oneOfType([
        b,
        x
    ]),
    formatter: module1.func,
    value: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    offset: module1.number,
    position: module1.oneOf([
        "top",
        "left",
        "right",
        "bottom",
        "inside",
        "outside",
        "insideLeft",
        "insideRight",
        "insideTop",
        "insideBottom",
        "insideTopLeft",
        "insideBottomLeft",
        "insideTopRight",
        "insideBottomRight",
        "insideStart",
        "insideEnd",
        "end",
        "center",
        "centerTop",
        "centerBottom"
    ]),
    children: module1.oneOfType([
        module1.arrayOf(module1.node),
        module1.node
    ]),
    className: module1.string,
    content: module1.oneOfType([
        module1.element,
        module1.func
    ])
};
function Label(e) {
    let t;
    const { viewBox, position, value, children, content, className } = e;
    const m = className === undefined ? "" : className;
    if (!viewBox || module844(value) && module844(children) && !module553.isValidElement(content) && !module194(content)) {
        return null;
    }
    if (module553.isValidElement(content)) {
        return module553.cloneElement(content, e);
    }
    if (module194(content)) {
        t = content(e);
        if (module553.isValidElement(t)) {
            return t;
        }
    } else {
        t = ((e)=>{
            const { value, formatter } = e;
            const r = module844(e.children) ? value : e.children;
            if (module194(formatter)) {
                return formatter(r);
            }
            return r;
        })(e);
    }
    const b = ((e)=>isNumber(e.cx))(viewBox);
    const x = getPresentationAttributes(e);
    const w = filterEventAttributes(e);
    if (b && (position === "insideStart" || position === "insideEnd" || position === "end")) {
        return ((e, t, n)=>{
            let r;
            let o;
            const { position, viewBox, offset, className } = e;
            const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, clockWise } = viewBox;
            const _ = (innerRadius + outerRadius) / 2;
            const C = ((e, t)=>mathSign(t - e) * Math.min(Math.abs(t - e), 360))(startAngle, endAngle);
            const O = C >= 0 ? 1 : -1;
            switch(position){
                case "insideStart":
                    r = startAngle + O * offset;
                    o = clockWise;
                    break;
                case "insideEnd":
                    r = endAngle - O * offset;
                    o = !clockWise;
                    break;
                default:
                    if (position === "end") {
                        r = endAngle + O * offset;
                        o = clockWise;
                    }
            }
            o = C <= 0 ? o : !o;
            const E = polarToCartesian(cx, cy, _, r);
            const M = polarToCartesian(cx, cy, _, r + 359 * (o ? 1 : -1));
            const d = `M${E.x},${E.y}
    A${_},${_},0,1,${o ? 0 : 1},
    ${M.x},${M.y}`;
            const id = module844(e.id) ? uniqueId("recharts-radial-line-") : e.id;
            return module553.default.createElement("text", {
                ...n,
                dominantBaseline: "central",
                className: module3("recharts-radial-bar-label", className)
            }, module553.default.createElement("defs", null, module553.default.createElement("path", {
                id,
                d
            })), module553.default.createElement("textPath", {
                xlinkHref: `#${id}`
            }, t));
        })(e, t, x);
    }
    const _ = b ? (({ viewBox, offset, position })=>{
        const { cx, cy, innerRadius, outerRadius } = viewBox;
        const u = (viewBox.startAngle + viewBox.endAngle) / 2;
        if (position === "outside") {
            const s = polarToCartesian(cx, cy, outerRadius + offset, u);
            const x_1 = s.x;
            return {
                x: x_1,
                y: s.y,
                textAnchor: x_1 >= cx ? "start" : "end",
                verticalAnchor: "middle"
            };
        }
        if (position === "center") {
            return {
                x: cx,
                y: cy,
                textAnchor: "middle",
                verticalAnchor: "middle"
            };
        }
        if (position === "centerTop") {
            return {
                x: cx,
                y: cy,
                textAnchor: "middle",
                verticalAnchor: "start"
            };
        }
        if (position === "centerBottom") {
            return {
                x: cx,
                y: cy,
                textAnchor: "middle",
                verticalAnchor: "end"
            };
        }
        const f = (innerRadius + outerRadius) / 2;
        const p = polarToCartesian(cx, cy, f, u);
        return {
            x: p.x,
            y: p.y,
            textAnchor: "middle",
            verticalAnchor: "middle"
        };
    })(e) : (({ viewBox, offset, position })=>{
        const { x, y, width, height } = viewBox;
        const s = height >= 0 ? 1 : -1;
        if (position === "top") {
            return {
                x: x + width / 2,
                y: y - s * offset,
                textAnchor: "middle",
                verticalAnchor: s > 0 ? "end" : "start"
            };
        }
        if (position === "bottom") {
            return {
                x: x + width / 2,
                y: y + height + s * offset,
                textAnchor: "middle",
                verticalAnchor: "start"
            };
        }
        if (position === "left") {
            return {
                x: x - offset,
                y: y + height / 2,
                textAnchor: "end",
                verticalAnchor: "middle"
            };
        }
        if (position === "right") {
            return {
                x: x + width + offset,
                y: y + height / 2,
                textAnchor: "start",
                verticalAnchor: "middle"
            };
        }
        if (position === "insideLeft") {
            return {
                x: x + offset,
                y: y + height / 2,
                textAnchor: "start",
                verticalAnchor: "middle"
            };
        }
        if (position === "insideRight") {
            return {
                x: x + width - offset,
                y: y + height / 2,
                textAnchor: "end",
                verticalAnchor: "middle"
            };
        }
        if (position === "insideTop") {
            return {
                x: x + width / 2,
                y: y + s * offset,
                textAnchor: "middle",
                verticalAnchor: "start"
            };
        }
        if (position === "insideBottom") {
            return {
                x: x + width / 2,
                y: y + height - s * offset,
                textAnchor: "middle",
                verticalAnchor: "end"
            };
        }
        if (position === "insideTopLeft") {
            return {
                x: x + offset,
                y: y + s * offset,
                textAnchor: "start",
                verticalAnchor: "start"
            };
        }
        if (position === "insideTopRight") {
            return {
                x: x + width - offset,
                y: y + s * offset,
                textAnchor: "end",
                verticalAnchor: "start"
            };
        }
        if (position === "insideBottomLeft") {
            return {
                x: x + offset,
                y: y + height - s * offset,
                textAnchor: "start",
                verticalAnchor: "end"
            };
        }
        if (position === "insideBottomRight") {
            return {
                x: x + width - offset,
                y: y + height - s * offset,
                textAnchor: "end",
                verticalAnchor: "end"
            };
        }
        if (module76(position) && (isNumber(position.x) || isPercent(position.x)) && (isNumber(position.y) || isPercent(position.y))) {
            return {
                x: x + getPercentValue(position.x, width),
                y: y + getPercentValue(position.y, height),
                textAnchor: "end",
                verticalAnchor: "end"
            };
        }
        return {
            x: x + width / 2,
            y: y + height / 2,
            textAnchor: "middle",
            verticalAnchor: "middle"
        };
    })(e);
    return module553.default.createElement(module1032, {
        className: module3("recharts-label", m),
        ...x,
        ..._,
        ...w
    }, t);
}
Label.displayName = "Label";
Label.defaultProps = {
    offset: 5
};
Label.propTypes = w;
const C = function(e) {
    const { cx, cy, angle, startAngle, endAngle, r: r_1, radius, innerRadius, outerRadius, x, y: y_1, top, left, width, height, clockWise } = e;
    if (isNumber(width) && isNumber(height)) {
        if (isNumber(x) && isNumber(y_1)) {
            return {
                x,
                y: y_1,
                width,
                height
            };
        }
        if (isNumber(top) && isNumber(left)) {
            return {
                x: top,
                y: left,
                width,
                height
            };
        }
    }
    if (isNumber(x) && isNumber(y_1)) {
        return {
            x,
            y: y_1,
            width: 0,
            height: 0
        };
    }
    if (isNumber(cx) && isNumber(cy)) {
        return {
            cx,
            cy,
            startAngle: startAngle || angle || 0,
            endAngle: endAngle || angle || 0,
            innerRadius: innerRadius || 0,
            outerRadius: outerRadius || radius || r_1 || 0,
            clockWise
        };
    }
    if (e.viewBox) {
        return e.viewBox;
    }
    return {};
};
const O = (label, viewBox)=>{
    if (label) {
        if (label === true) {
            return module553.default.createElement(Label, {
                key: "label-implicit",
                viewBox
            });
        }
        if (isNumOrStr(label)) {
            return module553.default.createElement(Label, {
                key: "label-implicit",
                viewBox,
                value: label
            });
        }
        if (module553.isValidElement(label)) {
            if (label.type === Label) {
                return module553.cloneElement(label, {
                    key: "label-implicit",
                    viewBox
                });
            }
            return module553.default.createElement(Label, {
                key: "label-implicit",
                content: label,
                viewBox
            });
        }
        if (module194(label)) {
            return module553.default.createElement(Label, {
                key: "label-implicit",
                content: label,
                viewBox
            });
        }
        if (module76(label)) {
            return module553.default.createElement(Label, {
                viewBox,
                ...label,
                key: "label-implicit"
            });
        }
        return null;
    }
    return null;
};
Label.parseViewBox = C;
Label.renderCallByParent = function(e, t, n = true) {
    if (!e || !e.children && n && !e.label) {
        return null;
    }
    const e_children = e.children;
    const o = C(e);
    const i = findAllByType(e_children, Label).map((e, n)=>module553.cloneElement(e, {
            viewBox: t || o,
            key: `label-${n}`
        }));
    if (!n) {
        return i;
    }
    const l = O(e.label, t || o);
    return [
        l,
        ...i
    ];
};
export default Label;
