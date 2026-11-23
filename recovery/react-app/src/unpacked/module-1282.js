import module194 from "unpacked/module-194.js";
import module1283 from "unpacked/module-1283.js";
import module1517 from "unpacked/module-1517.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module1032 from "unpacked/module-1032.js";
import module998 from "unpacked/module-998.js";
import module869 from "unpacked/module-869.js";
import { EVENT_ATTRIBUTES, PRESENTATION_ATTRIBUTES, filterEventsOfChild, getPresentationAttributes } from "unpacked/module-810.js";
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
function v(e) {
    return (v = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
function w(e, t) {
    if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
    }
}
function C(e, t) {
    if (!t || v(t) !== "object" && typeof t !== "function") {
        return ((e)=>{
            if (e === undefined) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return e;
        })(e);
    }
    return t;
}
function O(e) {
    return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function E(e, t) {
    return (E = Object.setPrototypeOf || function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
const PolarRadiusAxis = ((e)=>{
    function t() {
        w(this, t);
        return C(this, O(t).apply(this, arguments));
    }
    let n;
    let l;
    let p;
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
            E(e, t);
        }
    })(t, e);
    n = t;
    p = [
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
                    className: "recharts-polar-radius-axis-tick-value"
                }, n);
            }
        }
    ];
    if (l = [
        {
            key: "getTickValueCoord",
            value: function({ coordinate }) {
                const props = this.props;
                const { angle, cx, cy } = props;
                return polarToCartesian(cx, cy, coordinate, angle);
            }
        },
        {
            key: "getTickTextAnchor",
            value: function() {
                let e;
                switch(this.props.orientation){
                    case "left":
                        e = "end";
                        break;
                    case "right":
                        e = "start";
                        break;
                    default:
                        e = "middle";
                }
                return e;
            }
        },
        {
            key: "getViewBox",
            value: function() {
                const props = this.props;
                const { cx, cy, angle, ticks } = props;
                const l = module1517(ticks, function(e) {
                    return e.coordinate || 0;
                });
                return {
                    cx,
                    cy,
                    startAngle: angle,
                    endAngle: angle,
                    innerRadius: module1283(ticks, function(e) {
                        return e.coordinate || 0;
                    }).coordinate || 0,
                    outerRadius: l.coordinate || 0
                };
            }
        },
        {
            key: "renderAxisLine",
            value: function() {
                const props = this.props;
                const { cx, cy, angle, ticks, axisLine, ...rest } = props;
                const u = ticks.reduce((acc, tick)=>[
                        Math.min(acc[0], tick.coordinate),
                        Math.max(acc[1], tick.coordinate)
                    ], [
                    Infinity,
                    -Infinity
                ]);
                const s = polarToCartesian(cx, cy, u[0], angle);
                const c = polarToCartesian(cx, cy, u[1], angle);
                const p = {
                    ...getPresentationAttributes(rest),
                    fill: "none",
                    ...getPresentationAttributes(axisLine),
                    x1: s.x,
                    y1: s.y,
                    x2: c.x,
                    y2: c.y
                };
                return module553.default.createElement("line", {
                    className: "recharts-polar-radius-axis-line",
                    ...p
                });
            }
        },
        {
            key: "renderTicks",
            value: function() {
                const _this = this;
                const props = this.props;
                const { ticks, tick, angle, tickFormatter, stroke, ...rest } = props;
                const textAnchor = this.getTickTextAnchor();
                const d = getPresentationAttributes(rest);
                const p = getPresentationAttributes(tick);
                const h = ticks.map((payload, index)=>{
                    const u = _this.getTickValueCoord(payload);
                    const h = {
                        textAnchor,
                        transform: `rotate(${90 - angle}, ${u.x}, ${u.y})`,
                        ...d,
                        stroke: "none",
                        fill: stroke,
                        ...p,
                        index,
                        ...u,
                        payload
                    };
                    return module553.default.createElement(module869, {
                        className: "recharts-polar-radius-axis-tick",
                        key: `tick-${index}`,
                        ...filterEventsOfChild(_this.props, payload, index)
                    }, _this.constructor.renderTickItem(tick, h, tickFormatter ? tickFormatter(payload.value) : payload.value));
                });
                return module553.default.createElement(module869, {
                    className: "recharts-polar-radius-axis-ticks"
                }, h);
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { ticks, axisLine, tick } = props;
                if (ticks && ticks.length) {
                    return module553.default.createElement(module869, {
                        className: "recharts-polar-radius-axis"
                    }, axisLine && this.renderAxisLine(), tick && this.renderTicks(), module998.renderCallByParent(this.props, this.getViewBox()));
                }
                return null;
            }
        }
    ]) {
        _(n.prototype, l);
    }
    if (p) {
        _(n, p);
    }
    return t;
})(module553.PureComponent);
PolarRadiusAxis.displayName = "PolarRadiusAxis";
PolarRadiusAxis.axisType = "radiusAxis";
PolarRadiusAxis.propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    ...EVENT_ATTRIBUTES,
    type: module1.oneOf([
        "number",
        "category"
    ]),
    cx: module1.number,
    cy: module1.number,
    hide: module1.bool,
    radiusAxisId: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    angle: module1.number,
    tickCount: module1.number,
    ticks: module1.arrayOf(module1.shape({
        value: module1.any,
        coordinate: module1.number
    })),
    orientation: module1.oneOf([
        "left",
        "right",
        "middle"
    ]),
    axisLine: module1.oneOfType([
        module1.bool,
        module1.object
    ]),
    tick: module1.oneOfType([
        module1.bool,
        module1.object,
        module1.element,
        module1.func
    ]),
    stroke: module1.string,
    tickFormatter: module1.func,
    domain: module1.arrayOf(module1.oneOfType([
        module1.number,
        module1.oneOf([
            "auto",
            "dataMin",
            "dataMax"
        ])
    ])),
    scale: module1.oneOfType([
        module1.oneOf([
            "auto",
            "linear",
            "pow",
            "sqrt",
            "log",
            "identity",
            "time",
            "band",
            "point",
            "ordinal",
            "quantile",
            "quantize",
            "utc",
            "sequential",
            "threshold"
        ]),
        module1.func
    ]),
    allowDataOverflow: module1.bool,
    allowDuplicatedCategory: module1.bool
};
PolarRadiusAxis.defaultProps = {
    type: "number",
    radiusAxisId: 0,
    cx: 0,
    cy: 0,
    angle: 0,
    orientation: "right",
    stroke: "#ccc",
    axisLine: true,
    tick: true,
    tickCount: 5,
    domain: [
        0,
        "auto"
    ],
    allowDataOverflow: false,
    scale: "auto",
    allowDuplicatedCategory: true
};
export default PolarRadiusAxis;
