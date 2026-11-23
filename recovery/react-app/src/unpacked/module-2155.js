import module194 from "unpacked/module-194.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import { shallowEqual } from "unpacked/module-1275.js";
import { getStringSize } from "unpacked/module-1276.js";
import module869 from "unpacked/module-869.js";
import module1032 from "unpacked/module-1032.js";
import module998 from "unpacked/module-998.js";
import { EVENT_ATTRIBUTES, PRESENTATION_ATTRIBUTES, filterEventsOfChild, getPresentationAttributes, isSsr } from "unpacked/module-810.js";
import { isNumber, mathSign } from "unpacked/module-827.js";
function h() {
    if (typeof WeakMap !== "function") {
        return null;
    }
    const weakMap = new WeakMap;
    h = function() {
        return weakMap;
    };
    return weakMap;
}
function g(e) {
    return (g = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
function _(e, t) {
    if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function C(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
    }
}
function O(e, t) {
    if (!t || g(t) !== "object" && typeof t !== "function") {
        return ((e)=>{
            if (e === undefined) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return e;
        })(e);
    }
    return t;
}
function E(e) {
    return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function M(e, t) {
    return (M = Object.setPrototypeOf || function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
const CartesianAxis = ((e)=>{
    function t() {
        _(this, t);
        return O(this, E(t).apply(this, arguments));
    }
    let n;
    let i;
    let h;
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
            M(e, t);
        }
    })(t, e);
    n = t;
    h = [
        {
            key: "getTicks",
            value: function({ tick, ticks, viewBox, minTickGap, orientation, interval, tickFormatter, unit }) {
                if (ticks && ticks.length && tick) {
                    if (isNumber(interval) || isSsr()) {
                        return t.getNumberIntervalTicks(ticks, isNumber(interval) ? interval : 0);
                    }
                    if (interval === "preserveStartEnd") {
                        return t.getTicksStart({
                            ticks,
                            tickFormatter,
                            viewBox,
                            orientation,
                            minTickGap,
                            unit
                        }, true);
                    }
                    if (interval === "preserveStart") {
                        return t.getTicksStart({
                            ticks,
                            tickFormatter,
                            viewBox,
                            orientation,
                            minTickGap,
                            unit
                        });
                    }
                    return t.getTicksEnd({
                        ticks,
                        tickFormatter,
                        viewBox,
                        orientation,
                        minTickGap,
                        unit
                    });
                }
                return [];
            }
        },
        {
            key: "getNumberIntervalTicks",
            value: function(e, t) {
                return e.filter((e, n)=>n % (t + 1) == 0);
            }
        },
        {
            key: "getTicksStart",
            value: function({ ticks, tickFormatter, viewBox, orientation, minTickGap, unit }, t) {
                let n;
                let o;
                const { x: x_1, y: y_1, width, height } = viewBox;
                const y = orientation === "top" || orientation === "bottom" ? "width" : "height";
                const m = (ticks || []).slice();
                const x = unit && y === "width" ? getStringSize(unit)[y] : 0;
                const m_length = m.length;
                const _ = m_length >= 2 ? mathSign(m[1].coordinate - m[0].coordinate) : 1;
                if (_ === 1) {
                    n = y === "width" ? x_1 : y_1;
                    o = y === "width" ? x_1 + width : y_1 + height;
                } else {
                    n = y === "width" ? x_1 + width : y_1 + height;
                    o = y === "width" ? x_1 : y_1;
                }
                if (t) {
                    let C = ticks[m_length - 1];
                    const O = module194(tickFormatter) ? tickFormatter(C.value) : C.value;
                    const E = getStringSize(O)[y] + x;
                    const M = _ * (C.coordinate + _ * E / 2 - o);
                    m[m_length - 1] = C = {
                        ...C,
                        tickCoord: M > 0 ? C.coordinate - M * _ : C.coordinate
                    };
                    if (_ * (C.tickCoord - _ * E / 2 - n) >= 0 && _ * (C.tickCoord + _ * E / 2 - o) <= 0) {
                        o = C.tickCoord - _ * (E / 2 + minTickGap);
                        m[m_length - 1] = {
                            ...C,
                            isShow: true
                        };
                    }
                }
                for(let S = t ? m_length - 1 : m_length, A = 0; A < S; A++){
                    let k = m[A];
                    const j = module194(tickFormatter) ? tickFormatter(k.value) : k.value;
                    const T = getStringSize(j)[y] + x;
                    if (A === 0) {
                        const P = _ * (k.coordinate - _ * T / 2 - n);
                        m[A] = k = {
                            ...k,
                            tickCoord: P < 0 ? k.coordinate - P * _ : k.coordinate
                        };
                    } else {
                        m[A] = k = {
                            ...k,
                            tickCoord: k.coordinate
                        };
                    }
                    if (_ * (k.tickCoord - _ * T / 2 - n) >= 0 && _ * (k.tickCoord + _ * T / 2 - o) <= 0) {
                        n = k.tickCoord + _ * (T / 2 + minTickGap);
                        m[A] = {
                            ...k,
                            isShow: true
                        };
                    }
                }
                return m.filter((e)=>e.isShow);
            }
        },
        {
            key: "getTicksEnd",
            value: function({ ticks, tickFormatter, viewBox, orientation, minTickGap, unit }) {
                let t;
                let n;
                const { x: x_1, y: y_1, width, height } = viewBox;
                const g = orientation === "top" || orientation === "bottom" ? "width" : "height";
                const y = unit && g === "width" ? getStringSize(unit)[g] : 0;
                const m = (ticks || []).slice();
                const m_length = m.length;
                const w = m_length >= 2 ? mathSign(m[1].coordinate - m[0].coordinate) : 1;
                if (w === 1) {
                    t = g === "width" ? x_1 : y_1;
                    n = g === "width" ? x_1 + width : y_1 + height;
                } else {
                    t = g === "width" ? x_1 + width : y_1 + height;
                    n = g === "width" ? x_1 : y_1;
                }
                for(let _ = m_length - 1; _ >= 0; _--){
                    let C = m[_];
                    const O = module194(tickFormatter) ? tickFormatter(C.value) : C.value;
                    const E = getStringSize(O)[g] + y;
                    if (_ === m_length - 1) {
                        const M = w * (C.coordinate + w * E / 2 - n);
                        m[_] = C = {
                            ...C,
                            tickCoord: M > 0 ? C.coordinate - M * w : C.coordinate
                        };
                    } else {
                        m[_] = C = {
                            ...C,
                            tickCoord: C.coordinate
                        };
                    }
                    if (w * (C.tickCoord - w * E / 2 - t) >= 0 && w * (C.tickCoord + w * E / 2 - n) <= 0) {
                        n = C.tickCoord - w * (E / 2 + minTickGap);
                        m[_] = {
                            ...C,
                            isShow: true
                        };
                    }
                }
                return m.filter((e)=>e.isShow);
            }
        },
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
                    className: "recharts-cartesian-axis-tick-value"
                }, n);
            }
        }
    ];
    if (i = [
        {
            key: "shouldComponentUpdate",
            value: function({ viewBox, ...rest }, t) {
                const props = this.props;
                const { viewBox: viewBox_1, ...rest_1 } = props;
                return !shallowEqual(viewBox, viewBox_1) || !shallowEqual(rest, rest_1) || !shallowEqual(t, this.state);
            }
        },
        {
            key: "getTickLineCoord",
            value: function(e) {
                let x1;
                let x2;
                let y1;
                let y2;
                let x_1;
                let y_2;
                const props = this.props;
                const { x, y: y_1, width, height, orientation, tickSize, mirror, tickMargin } = props;
                const y = mirror ? -1 : 1;
                const m = e.tickSize || tickSize;
                const b = isNumber(e.tickCoord) ? e.tickCoord : e.coordinate;
                switch(orientation){
                    case "top":
                        x1 = x2 = e.coordinate;
                        y_2 = (y1 = (y2 = y_1 + !mirror * height) - y * m) - y * tickMargin;
                        x_1 = b;
                        break;
                    case "left":
                        y1 = y2 = e.coordinate;
                        x_1 = (x1 = (x2 = x + !mirror * width) - y * m) - y * tickMargin;
                        y_2 = b;
                        break;
                    case "right":
                        y1 = y2 = e.coordinate;
                        x_1 = (x1 = (x2 = x + mirror * width) + y * m) + y * tickMargin;
                        y_2 = b;
                        break;
                    default:
                        x1 = x2 = e.coordinate;
                        y_2 = (y1 = (y2 = y_1 + mirror * height) + y * m) + y * tickMargin;
                        x_1 = b;
                }
                return {
                    line: {
                        x1,
                        y1,
                        x2,
                        y2
                    },
                    tick: {
                        x: x_1,
                        y: y_2
                    }
                };
            }
        },
        {
            key: "getTickTextAnchor",
            value: function() {
                let e;
                const props = this.props;
                const { orientation, mirror } = props;
                switch(orientation){
                    case "left":
                        e = mirror ? "start" : "end";
                        break;
                    case "right":
                        e = mirror ? "end" : "start";
                        break;
                    default:
                        e = "middle";
                }
                return e;
            }
        },
        {
            key: "getTickVerticalAnchor",
            value: function() {
                const props = this.props;
                const { orientation, mirror } = props;
                let r = "end";
                switch(orientation){
                    case "left":
                    case "right":
                        r = "middle";
                        break;
                    case "top":
                        r = mirror ? "start" : "end";
                        break;
                    default:
                        r = mirror ? "end" : "start";
                }
                return r;
            }
        },
        {
            key: "renderAxisLine",
            value: function() {
                const props = this.props;
                const { x, y, width, height, orientation, axisLine, mirror } = props;
                let s = {
                    ...getPresentationAttributes(this.props),
                    fill: "none",
                    ...getPresentationAttributes(axisLine)
                };
                if (orientation === "top" || orientation === "bottom") {
                    const c = orientation === "top" && !mirror || orientation === "bottom" && mirror;
                    s = {
                        ...s,
                        x1: x,
                        y1: y + c * height,
                        x2: x + width,
                        y2: y + c * height
                    };
                } else {
                    const f = orientation === "left" && !mirror || orientation === "right" && mirror;
                    s = {
                        ...s,
                        x1: x + f * width,
                        y1: y,
                        x2: x + f * width,
                        y2: y + height
                    };
                }
                return module553.default.createElement("line", {
                    className: "recharts-cartesian-axis-line",
                    ...s
                });
            }
        },
        {
            key: "renderTicks",
            value: function(ticks) {
                const _this = this;
                const props = this.props;
                const { tickLine, stroke, tick, tickFormatter, unit } = props;
                const p = t.getTicks({
                    ...this.props,
                    ticks
                });
                const textAnchor = this.getTickTextAnchor();
                const verticalAnchor = this.getTickVerticalAnchor();
                const g = getPresentationAttributes(this.props);
                const m = getPresentationAttributes(tick);
                const x = {
                    ...g,
                    fill: "none",
                    ...getPresentationAttributes(tickLine)
                };
                const w = p.map((payload, index)=>{
                    const i = _this.getTickLineCoord(payload);
                    const { line, tick: tick_1 } = i;
                    const C = {
                        textAnchor,
                        verticalAnchor,
                        ...g,
                        stroke: "none",
                        fill: stroke,
                        ...m,
                        ...tick_1,
                        index,
                        payload,
                        visibleTicksCount: p.length
                    };
                    return module553.default.createElement(module869, {
                        className: "recharts-cartesian-axis-tick",
                        key: `tick-${index}`,
                        ...filterEventsOfChild(_this.props, payload, index)
                    }, tickLine && module553.default.createElement("line", {
                        className: "recharts-cartesian-axis-tick-line",
                        ...x,
                        ...line
                    }), tick && _this.constructor.renderTickItem(tick, C, `${module194(tickFormatter) ? tickFormatter(payload.value) : payload.value}${unit || ""}`));
                });
                return module553.default.createElement("g", {
                    className: "recharts-cartesian-axis-ticks"
                }, w);
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { axisLine, width, height, ticksGenerator, className } = props;
                if (props.hide) {
                    return null;
                }
                const props_1 = this.props;
                const { ticks, ...rest } = props_1;
                let h = ticks;
                if (module194(ticksGenerator)) {
                    h = ticks && ticks.length > 0 ? ticksGenerator(this.props) : ticksGenerator(rest);
                }
                if (width <= 0 || height <= 0 || !h || !h.length) {
                    return null;
                }
                return module553.default.createElement(module869, {
                    className: module3("recharts-cartesian-axis", className)
                }, axisLine && this.renderAxisLine(), this.renderTicks(h), module998.renderCallByParent(this.props));
            }
        }
    ]) {
        C(n.prototype, i);
    }
    if (h) {
        C(n, h);
    }
    return t;
})(module553.Component);
CartesianAxis.displayName = "CartesianAxis";
CartesianAxis.propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    ...EVENT_ATTRIBUTES,
    className: module1.string,
    x: module1.number,
    y: module1.number,
    width: module1.number,
    height: module1.number,
    orientation: module1.oneOf([
        "top",
        "bottom",
        "left",
        "right"
    ]),
    viewBox: module1.shape({
        x: module1.number,
        y: module1.number,
        width: module1.number,
        height: module1.number
    }),
    tick: module1.oneOfType([
        module1.bool,
        module1.func,
        module1.object,
        module1.element
    ]),
    axisLine: module1.oneOfType([
        module1.bool,
        module1.object
    ]),
    tickLine: module1.oneOfType([
        module1.bool,
        module1.object
    ]),
    mirror: module1.bool,
    tickMargin: module1.number.isRequired,
    minTickGap: module1.number,
    ticks: module1.array,
    tickSize: module1.number,
    stroke: module1.string,
    tickFormatter: module1.func,
    ticksGenerator: module1.func,
    interval: module1.oneOfType([
        module1.number,
        module1.oneOf([
            "preserveStart",
            "preserveEnd",
            "preserveStartEnd"
        ])
    ])
};
CartesianAxis.defaultProps = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    viewBox: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    },
    orientation: "bottom",
    ticks: [],
    stroke: "#666",
    tickLine: true,
    axisLine: true,
    tick: true,
    mirror: false,
    minTickGap: 5,
    tickSize: 6,
    tickMargin: 2,
    interval: "preserveEnd"
};
export default CartesianAxis;
