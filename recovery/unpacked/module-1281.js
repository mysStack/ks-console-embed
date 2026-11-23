import module194 from "./module-194.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module869 from "./module-869.js";
import { EVENT_ATTRIBUTES, PRESENTATION_ATTRIBUTES, SCALE_TYPES, filterEventsOfChild, getPresentationAttributes } from "./module-810.js";
import module947 from "./module-947.js";
import module1516 from "./module-1516.js";
import module1032 from "./module-1032.js";
import { polarToCartesian } from "./module-927.js";
function d() {
    if (typeof WeakMap !== "function") {
        return null;
    }
    const weakMap = new WeakMap;
    d = function() {
        return weakMap;
    };
    return weakMap;
}
function h(e) {
    return (h = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
function b(e, t) {
    if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function x(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
    }
}
function w(e, t) {
    if (!t || h(t) !== "object" && typeof t !== "function") {
        return ((e)=>{
            if (e === undefined) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return e;
        })(e);
    }
    return t;
}
function _(e) {
    return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function C(e, t) {
    return (C = Object.setPrototypeOf || function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
const O = Math.PI / 180;
const PolarAngleAxis = ((e)=>{
    function t() {
        b(this, t);
        return w(this, _(t).apply(this, arguments));
    }
    let n;
    let i;
    let d;
    ((e, t)=>{
        if (typeof t !== "function" && t !== null) {
            throw new TypeError("Super expression must either be null or a function");
        }
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: true,
                configurable: true
            }
        });
        if (t) {
            C(e, t);
        }
    })(t, e);
    n = t;
    d = [
        {
            key: "renderTickItem",
            value: function(e, t, n) {
                if (module553.default.isValidElement(e)) {
                    return module553.default.cloneElement(e, t);
                }
                if (module194(e)) {
                    return e(t);
                }
                return module553.default.createElement(module1032, {
                    ...t,
                    className: "recharts-polar-angle-axis-tick-value"
                }, n);
            }
        }
    ];
    if (i = [
        {
            key: "getTickLineCoord",
            value: function(e) {
                const props = this.props;
                const { cx, cy, radius, orientation, tickLine } = props;
                const l = tickLine && tickLine.size || 8;
                const u = polarToCartesian(cx, cy, radius, e.coordinate);
                const s = polarToCartesian(cx, cy, radius + (orientation === "inner" ? -1 : 1) * l, e.coordinate);
                return {
                    x1: u.x,
                    y1: u.y,
                    x2: s.x,
                    y2: s.y
                };
            }
        },
        {
            key: "getTickTextAnchor",
            value: function(e) {
                const orientation = this.props.orientation;
                const n = Math.cos(-e.coordinate * O);
                if (n > 0.00001) {
                    if (orientation === "outer") {
                        return "start";
                    }
                    return "end";
                }
                if (n < -0.00001) {
                    if (orientation === "outer") {
                        return "end";
                    }
                    return "start";
                }
                return "middle";
            }
        },
        {
            key: "renderAxisLine",
            value: function() {
                const props = this.props;
                const { cx, cy, radius, axisLine, axisLineType } = props;
                const c = {
                    ...getPresentationAttributes(this.props),
                    fill: "none",
                    ...getPresentationAttributes(axisLine)
                };
                if (axisLineType === "circle") {
                    return module553.default.createElement(module947, {
                        className: "recharts-polar-angle-axis-line",
                        ...c,
                        cx,
                        cy,
                        r: radius
                    });
                }
                const points = this.props.ticks.map((e)=>polarToCartesian(cx, cy, radius, e.coordinate));
                return module553.default.createElement(module1516, {
                    className: "recharts-polar-angle-axis-line",
                    ...c,
                    points
                });
            }
        },
        {
            key: "renderTicks",
            value: function() {
                const _this = this;
                const props = this.props;
                const { ticks, tick, tickLine, tickFormatter, stroke } = props;
                const c = getPresentationAttributes(this.props);
                const f = getPresentationAttributes(tick);
                const d = {
                    ...c,
                    fill: "none",
                    ...getPresentationAttributes(tickLine)
                };
                const p = ticks.map((payload, index)=>{
                    const p = _this.getTickLineCoord(payload);
                    const h = {
                        textAnchor: _this.getTickTextAnchor(payload),
                        ...c,
                        stroke: "none",
                        fill: stroke,
                        ...f,
                        index,
                        payload,
                        x: p.x2,
                        y: p.y2
                    };
                    return module553.default.createElement(module869, {
                        className: "recharts-polar-angle-axis-tick",
                        key: `tick-${index}`,
                        ...filterEventsOfChild(_this.props, payload, index)
                    }, tickLine && module553.default.createElement("line", {
                        className: "recharts-polar-angle-axis-tick-line",
                        ...d,
                        ...p
                    }), tick && _this.constructor.renderTickItem(tick, h, tickFormatter ? tickFormatter(payload.value) : payload.value));
                });
                return module553.default.createElement(module869, {
                    className: "recharts-polar-angle-axis-ticks"
                }, p);
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { ticks, radius, axisLine } = props;
                if (radius <= 0 || !ticks || !ticks.length) {
                    return null;
                }
                return module553.default.createElement(module869, {
                    className: "recharts-polar-angle-axis"
                }, axisLine && this.renderAxisLine(), this.renderTicks());
            }
        }
    ]) {
        x(n.prototype, i);
    }
    if (d) {
        x(n, d);
    }
    return t;
})(module553.PureComponent);
PolarAngleAxis.displayName = "PolarAngleAxis";
PolarAngleAxis.axisType = "angleAxis";
PolarAngleAxis.propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    ...EVENT_ATTRIBUTES,
    type: module1.oneOf([
        "number",
        "category"
    ]),
    angleAxisId: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    dataKey: module1.oneOfType([
        module1.number,
        module1.string,
        module1.func
    ]),
    cx: module1.number,
    cy: module1.number,
    radius: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    hide: module1.bool,
    scale: module1.oneOfType([
        module1.oneOf(SCALE_TYPES),
        module1.func
    ]),
    axisLine: module1.oneOfType([
        module1.bool,
        module1.object
    ]),
    axisLineType: module1.oneOf([
        "polygon",
        "circle"
    ]),
    tickLine: module1.oneOfType([
        module1.bool,
        module1.object
    ]),
    tick: module1.oneOfType([
        module1.bool,
        module1.func,
        module1.object,
        module1.element
    ]),
    ticks: module1.arrayOf(module1.shape({
        value: module1.any,
        coordinate: module1.number
    })),
    stroke: module1.string,
    orientation: module1.oneOf([
        "inner",
        "outer"
    ]),
    tickFormatter: module1.func,
    allowDuplicatedCategory: module1.bool
};
PolarAngleAxis.defaultProps = {
    type: "category",
    angleAxisId: 0,
    scale: "auto",
    cx: 0,
    cy: 0,
    domain: [
        0,
        "auto"
    ],
    orientation: "outer",
    axisLine: true,
    tickLine: true,
    tick: true,
    hide: false,
    allowDuplicatedCategory: true
};
export default PolarAngleAxis;
