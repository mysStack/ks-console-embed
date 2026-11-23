import module807 from "unpacked/module-807.js";
import module194 from "unpacked/module-194.js";
import module844 from "unpacked/module-844.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module991 from "unpacked/module-991.js";
import module3 from "unpacked/module-3.js";
import module869 from "unpacked/module-869.js";
import module1031 from "unpacked/module-1031.js";
import { EVENT_ATTRIBUTES, LEGEND_TYPES, PRESENTATION_ATTRIBUTES, TOOLTIP_TYPES, filterEventsOfChild, findAllByType, getPresentationAttributes, isSsr } from "unpacked/module-810.js";
import module1637 from "unpacked/module-1637.js";
import module1083 from "unpacked/module-1083.js";
import module1511 from "unpacked/module-1511.js";
import module1158 from "unpacked/module-1158.js";
import module999 from "unpacked/module-999.js";
import { getLinearRegression, interpolateNumber, uniqueId } from "unpacked/module-827.js";
import { getCateCoordinateOfLine, getValueByDataKey } from "unpacked/module-912.js";
function x() {
    if (typeof WeakMap !== "function") {
        return null;
    }
    const weakMap = new WeakMap;
    x = function() {
        return weakMap;
    };
    return weakMap;
}
function _(e) {
    return (_ = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
function S(e, t) {
    if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function A(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
    }
}
function k(e, t) {
    if (!t || _(t) !== "object" && typeof t !== "function") {
        return ((e)=>{
            if (e === undefined) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return e;
        })(e);
    }
    return t;
}
function j(e) {
    return (j = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function T(e, t) {
    return (T = Object.setPrototypeOf || function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
const Scatter = ((e)=>{
    function t(...o) {
        let n;
        S(this, t);
        n = k(this, j(t).call(this, ...o));
        n.state = {
            isAnimationFinished: false
        };
        n.cachePrevPoints = function(prevPoints) {
            n.setState({
                prevPoints
            });
        };
        n.handleAnimationEnd = function() {
            n.setState({
                isAnimationFinished: true
            });
        };
        n.handleAnimationStart = function() {
            n.setState({
                isAnimationFinished: false
            });
        };
        n.id = uniqueId("recharts-scatter-");
        return n;
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
            T(e, t);
        }
    })(t, e);
    n = t;
    p = [
        {
            key: "renderSymbolItem",
            value: function(e, t) {
                if (module553.default.isValidElement(e)) {
                    return module553.default.cloneElement(e, t);
                }
                if (module194(e)) {
                    return e(t);
                }
                return module553.default.createElement(module1511, {
                    ...t,
                    type: e
                });
            }
        }
    ];
    if (l = [
        {
            key: "componentWillReceiveProps",
            value: function(e) {
                const props = this.props;
                const { animationId, points } = props;
                if (e.animationId !== animationId) {
                    this.cachePrevPoints(points);
                }
            }
        },
        {
            key: "renderSymbolsStatically",
            value: function(e) {
                const _this = this;
                const props = this.props;
                const { shape, activeShape, activeIndex } = props;
                const l = getPresentationAttributes(this.props);
                return e.map((e, n)=>{
                    const u = {
                        key: `symbol-${n}`,
                        ...l,
                        ...e
                    };
                    return module553.default.createElement(module869, {
                        className: "recharts-scatter-symbol",
                        ...filterEventsOfChild(_this.props, e, n),
                        key: `symbol-${n}`
                    }, _this.constructor.renderSymbolItem(activeIndex === n ? activeShape : shape, u));
                });
            }
        },
        {
            key: "renderSymbolsWithAnimation",
            value: function() {
                const _this = this;
                const props = this.props;
                const { points, isAnimationActive, animationBegin, animationDuration, animationEasing, animationId } = props;
                const prevPoints = this.state.prevPoints;
                return module553.default.createElement(module991, {
                    begin: animationBegin,
                    duration: animationDuration,
                    isActive: isAnimationActive,
                    easing: animationEasing,
                    from: {
                        t: 0
                    },
                    to: {
                        t: 1
                    },
                    key: `pie-${animationId}`,
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart
                }, function({ t: t_1 }) {
                    const o = points.map((e, t)=>{
                        const n = prevPoints && prevPoints[t];
                        if (n) {
                            const o = interpolateNumber(n.cx, e.cx);
                            const i = interpolateNumber(n.cy, e.cy);
                            const a = interpolateNumber(n.size, e.size);
                            return {
                                ...e,
                                cx: o(t_1),
                                cy: i(t_1),
                                size: a(t_1)
                            };
                        }
                        return {
                            ...e,
                            size: interpolateNumber(0, e.size)(t_1)
                        };
                    });
                    return module553.default.createElement(module869, null, _this.renderSymbolsStatically(o));
                });
            }
        },
        {
            key: "renderSymbols",
            value: function() {
                const props = this.props;
                const { points, isAnimationActive } = props;
                const prevPoints = this.state.prevPoints;
                if (!(isAnimationActive && points && points.length) || prevPoints && module807(prevPoints, points)) {
                    return this.renderSymbolsStatically(points);
                }
                return this.renderSymbolsWithAnimation();
            }
        },
        {
            key: "renderErrorBar",
            value: function() {
                if (this.props.isAnimationActive && !this.state.isAnimationFinished) {
                    return null;
                }
                const props = this.props;
                const { points, xAxis, yAxis, children } = props;
                const i = findAllByType(children, module1158);
                if (!i) {
                    return null;
                }
                function l(e, t) {
                    return {
                        x: e.cx,
                        y: e.cy,
                        value: e.node.y,
                        errorVal: getValueByDataKey(e, t)
                    };
                }
                function u(e, t) {
                    return {
                        x: e.cx,
                        y: e.cy,
                        value: e.node.x,
                        errorVal: getValueByDataKey(e, t)
                    };
                }
                return i.map((e, key)=>{
                    const direction = e.props.direction;
                    return module553.default.cloneElement(e, {
                        key,
                        data: points,
                        xAxis,
                        yAxis,
                        layout: direction === "x" ? "vertical" : "horizontal",
                        dataPointFormatter: direction === "x" ? u : l
                    });
                });
            }
        },
        {
            key: "renderLine",
            value: function() {
                let points_1;
                let t;
                const props = this.props;
                const { points, line, lineType, lineJointType } = props;
                const s = getPresentationAttributes(this.props);
                const f = getPresentationAttributes(line);
                if (lineType === "joint") {
                    points_1 = points.map((e)=>({
                            x: e.cx,
                            y: e.cy
                        }));
                } else if (lineType === "fitting") {
                    const p = getLinearRegression(points);
                    const { xmin, xmax, a, b } = p;
                    const x = (e)=>a * e + b;
                    points_1 = [
                        {
                            x: xmin,
                            y: x(xmin)
                        },
                        {
                            x: xmax,
                            y: x(xmax)
                        }
                    ];
                }
                const w = {
                    ...s,
                    fill: "none",
                    stroke: s && s.fill,
                    ...f,
                    points: points_1
                };
                t = module553.default.isValidElement(line) ? module553.default.cloneElement(line, w) : module194(line) ? line(w) : module553.default.createElement(module1083, {
                    ...w,
                    type: lineJointType
                });
                return module553.default.createElement(module869, {
                    className: "recharts-scatter-line",
                    key: "recharts-scatter-line"
                }, t);
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { hide, points, line, className, xAxis, yAxis, left, top, width, height, id } = props;
                if (hide || !points || !points.length) {
                    return null;
                }
                const state = this.state;
                const { isAnimationActive, isAnimationFinished } = state;
                const className_1 = module3("recharts-scatter", className);
                const w = xAxis && xAxis.allowDataOverflow || yAxis && yAxis.allowDataOverflow;
                const _ = module844(id) ? this.id : id;
                return module553.default.createElement(module869, {
                    className: className_1,
                    clipPath: w ? `url(#clipPath-${_})` : null
                }, w ? module553.default.createElement("defs", null, module553.default.createElement("clipPath", {
                    id: `clipPath-${_}`
                }, module553.default.createElement("rect", {
                    x: left,
                    y: top,
                    width,
                    height
                }))) : null, line && this.renderLine(), this.renderErrorBar(), module553.default.createElement(module869, {
                    key: "recharts-scatter-symbols"
                }, this.renderSymbols()), (!isAnimationActive || isAnimationFinished) && module1031.renderCallByParent(this.props, points));
            }
        }
    ]) {
        A(n.prototype, l);
    }
    if (p) {
        A(n, p);
    }
    return t;
})(module553.PureComponent);
Scatter.displayName = "Scatter";
Scatter.propTypes = {
    ...EVENT_ATTRIBUTES,
    ...PRESENTATION_ATTRIBUTES,
    xAxisId: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    yAxisId: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    zAxisId: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    line: module1.oneOfType([
        module1.bool,
        module1.object,
        module1.func,
        module1.element
    ]),
    lineType: module1.oneOf([
        "fitting",
        "joint"
    ]),
    lineJointType: module1.oneOfType([
        module1.oneOf([
            "basis",
            "basisClosed",
            "basisOpen",
            "linear",
            "linearClosed",
            "natural",
            "monotoneX",
            "monotoneY",
            "monotone",
            "step",
            "stepBefore",
            "stepAfter"
        ]),
        module1.func
    ]),
    legendType: module1.oneOf(LEGEND_TYPES),
    tooltipType: module1.oneOf(TOOLTIP_TYPES),
    className: module1.string,
    name: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    activeIndex: module1.number,
    activeShape: module1.oneOfType([
        module1.object,
        module1.func,
        module1.element
    ]),
    shape: module1.oneOfType([
        module1.oneOf([
            "circle",
            "cross",
            "diamond",
            "square",
            "star",
            "triangle",
            "wye"
        ]),
        module1.element,
        module1.func
    ]),
    points: module1.arrayOf(module1.shape({
        cx: module1.number,
        cy: module1.number,
        size: module1.number,
        node: module1.shape({
            x: module1.oneOfType([
                module1.number,
                module1.string
            ]),
            y: module1.oneOfType([
                module1.number,
                module1.string
            ]),
            z: module1.oneOfType([
                module1.number,
                module1.string
            ])
        }),
        payload: module1.any
    })),
    hide: module1.bool,
    isAnimationActive: module1.bool,
    animationId: module1.number,
    animationBegin: module1.number,
    animationDuration: module1.number,
    animationEasing: module1.oneOf([
        "ease",
        "ease-in",
        "ease-out",
        "ease-in-out",
        "linear"
    ])
};
Scatter.defaultProps = {
    xAxisId: 0,
    yAxisId: 0,
    zAxisId: 0,
    legendType: "circle",
    lineType: "joint",
    lineJointType: "linear",
    data: [],
    shape: "circle",
    hide: false,
    isAnimationActive: !isSsr(),
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: "linear"
};
Scatter.getComposedData = function({ xAxis, yAxis, zAxis, item, displayedData, onItemMouseLeave, onItemMouseEnter, offset, xAxisTicks, yAxisTicks }) {
    const tooltipType = item.props.tooltipType;
    const v = findAllByType(item.props.children, module999);
    const g = module844(xAxis.dataKey) ? item.props.dataKey : xAxis.dataKey;
    const m = module844(yAxis.dataKey) ? item.props.dataKey : yAxis.dataKey;
    const x = zAxis && zAxis.dataKey;
    const w = zAxis ? zAxis.range : module1637.defaultProps.range;
    const _ = w && w[0];
    const C = xAxis.scale.bandwidth ? xAxis.scale.bandwidth() : 0;
    const O = yAxis.scale.bandwidth ? yAxis.scale.bandwidth() : 0;
    const points = displayedData.map((e, index)=>{
        const a = e[g];
        const l = e[m];
        const u = !module844(x) && e[x] || "-";
        const tooltipPayload = [
            {
                name: xAxis.name || xAxis.dataKey,
                unit: xAxis.unit || "",
                value: a,
                payload: e,
                dataKey: g,
                type: tooltipType
            },
            {
                name: yAxis.name || yAxis.dataKey,
                unit: yAxis.unit || "",
                value: l,
                payload: e,
                dataKey: m,
                type: tooltipType
            }
        ];
        if (u !== "-") {
            tooltipPayload.push({
                name: zAxis.name || zAxis.dataKey,
                unit: zAxis.unit || "",
                value: u,
                payload: e,
                dataKey: x,
                type: tooltipType
            });
        }
        const d = getCateCoordinateOfLine({
            axis: xAxis,
            ticks: xAxisTicks,
            bandSize: C,
            entry: e,
            index,
            dataKey: g
        });
        const p = getCateCoordinateOfLine({
            axis: yAxis,
            ticks: yAxisTicks,
            bandSize: O,
            entry: e,
            index,
            dataKey: m
        });
        const size = u !== "-" ? zAxis.scale(u) : _;
        const w = Math.sqrt(Math.max(size, 0) / Math.PI);
        return {
            ...e,
            cx: d,
            cy: p,
            x: d - w,
            y: p - w,
            xAxis,
            yAxis,
            zAxis,
            width: 2 * w,
            height: 2 * w,
            size,
            node: {
                x: a,
                y: l,
                z: u
            },
            tooltipPayload,
            tooltipPosition: {
                x: d,
                y: p
            },
            payload: e,
            ...v && v[index] && v[index].props
        };
    });
    return {
        onMouseLeave: onItemMouseLeave,
        onMouseEnter: onItemMouseEnter,
        points,
        ...offset
    };
};
export default Scatter;
