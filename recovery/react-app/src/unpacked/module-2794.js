import module807 from "unpacked/module-807.js";
import module194 from "unpacked/module-194.js";
import module844 from "unpacked/module-844.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module991 from "unpacked/module-991.js";
import module3 from "unpacked/module-3.js";
import module1083 from "unpacked/module-1083.js";
import module947 from "unpacked/module-947.js";
import module869 from "unpacked/module-869.js";
import module1031 from "unpacked/module-1031.js";
import module1158 from "unpacked/module-1158.js";
import { interpolateNumber, uniqueId } from "unpacked/module-827.js";
import { EVENT_ATTRIBUTES, LEGEND_TYPES, PRESENTATION_ATTRIBUTES, TOOLTIP_TYPES, filterEventAttributes, findAllByType, getPresentationAttributes, isSsr } from "unpacked/module-810.js";
import { getCateCoordinateOfLine, getValueByDataKey } from "unpacked/module-912.js";
function m() {
    if (typeof WeakMap !== "function") {
        return null;
    }
    const weakMap = new WeakMap;
    m = function() {
        return weakMap;
    };
    return weakMap;
}
function x(e) {
    return (x = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
function M(e, t) {
    if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function S(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
    }
}
function A(e, t) {
    if (!t || x(t) !== "object" && typeof t !== "function") {
        return ((e)=>{
            if (e === undefined) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return e;
        })(e);
    }
    return t;
}
function k(e) {
    return (k = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function j(e, t) {
    return (j = Object.setPrototypeOf || function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
const Line = ((e)=>{
    function t(...o) {
        let n;
        M(this, t);
        n = A(this, k(t).call(this, ...o));
        n.state = {
            isAnimationFinished: true,
            totalLength: 0
        };
        n.id = uniqueId("recharts-line-");
        n.cachePrevData = function(prevPoints) {
            n.setState({
                prevPoints
            });
        };
        n.pathRef = function(e) {
            n.mainCurve = e;
        };
        n.handleAnimationEnd = function() {
            n.setState({
                isAnimationFinished: true
            });
            n.props.onAnimationEnd();
        };
        n.handleAnimationStart = function() {
            n.setState({
                isAnimationFinished: false
            });
            n.props.onAnimationStart();
        };
        return n;
    }
    let n;
    let l;
    let m;
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
            j(e, t);
        }
    })(t, e);
    n = t;
    m = [
        {
            key: "repeat",
            value: function(e, t) {
                const n = e.length % 2 != 0 ? [
                    ...e,
                    0
                ] : e;
                let r = [];
                for(let o = 0; o < t; ++o){
                    r = [
                        ...r,
                        ...n
                    ];
                }
                return r;
            }
        },
        {
            key: "renderDotItem",
            value: function(e, t) {
                let n;
                if (module553.default.isValidElement(e)) {
                    n = module553.default.cloneElement(e, t);
                } else if (module194(e)) {
                    n = e(t);
                } else {
                    const r = module3("recharts-line-dot", e ? e.className : "");
                    n = module553.default.createElement(module947, {
                        ...t,
                        className: r
                    });
                }
                return n;
            }
        }
    ];
    if (l = [
        {
            key: "componentDidMount",
            value: function() {
                if (this.props.isAnimationActive) {
                    const totalLength = this.getTotalLength();
                    this.setState({
                        totalLength
                    });
                }
            }
        },
        {
            key: "componentWillReceiveProps",
            value: function(e) {
                const props = this.props;
                const { animationId, points } = props;
                if (e.animationId !== animationId) {
                    this.cachePrevData(points);
                }
            }
        },
        {
            key: "getTotalLength",
            value: function() {
                const mainCurve = this.mainCurve;
                try {
                    return mainCurve && mainCurve.getTotalLength && mainCurve.getTotalLength() || 0;
                } catch (e) {
                    return 0;
                }
            }
        },
        {
            key: "getStrokeDasharray",
            value: function(e, t, n) {
                const r = n.reduce((acc, item)=>acc + item);
                const o = parseInt(e / r, 10);
                const i = e % r;
                const a = t - e;
                let l = [];
                for(let u = 0, s = 0;; s += n[u], ++u){
                    if (s + n[u] > i) {
                        l = [
                            ...n.slice(0, u),
                            i - s
                        ];
                        break;
                    }
                }
                const c = l.length % 2 == 0 ? [
                    0,
                    a
                ] : [
                    a
                ];
                return [].concat([
                    ...this.constructor.repeat(n, o)
                ], [
                    ...l
                ], c).map((e)=>`${e}px`).join(", ");
            }
        },
        {
            key: "renderErrorBar",
            value: function() {
                if (this.props.isAnimationActive && !this.state.isAnimationFinished) {
                    return null;
                }
                const props = this.props;
                const { points, xAxis, yAxis, layout, children } = props;
                const l = findAllByType(children, module1158);
                if (!l) {
                    return null;
                }
                function dataPointFormatter(e, t) {
                    return {
                        x: e.x,
                        y: e.y,
                        value: e.value,
                        errorVal: getValueByDataKey(e.payload, t)
                    };
                }
                return l.map((e, key)=>module553.default.cloneElement(e, {
                        key,
                        data: points,
                        xAxis,
                        yAxis,
                        layout,
                        dataPointFormatter
                    }));
            }
        },
        {
            key: "renderDots",
            value: function(e, t) {
                const _this = this;
                if (this.props.isAnimationActive && !this.state.isAnimationFinished) {
                    return null;
                }
                const props = this.props;
                const { dot, points, dataKey } = props;
                const u = getPresentationAttributes(this.props);
                const s = getPresentationAttributes(dot);
                const c = filterEventAttributes(dot);
                const f = points.map((e, index)=>{
                    const r = {
                        key: `dot-${index}`,
                        r: 3,
                        ...u,
                        ...s,
                        ...c,
                        value: e.value,
                        dataKey,
                        cx: e.x,
                        cy: e.y,
                        index,
                        payload: e.payload
                    };
                    return _this.constructor.renderDotItem(dot, r);
                });
                const p = {
                    clipPath: e ? `url(#clipPath-${t})` : null
                };
                return module553.default.createElement(module869, {
                    className: "recharts-line-dots",
                    key: "dots",
                    ...p
                }, f);
            }
        },
        {
            key: "renderCurveStatically",
            value: function(points, t, n, r) {
                const props = this.props;
                const { type, layout, connectNulls } = props;
                const s = {
                    ...getPresentationAttributes(this.props),
                    ...filterEventAttributes(this.props),
                    fill: "none",
                    className: "recharts-line-curve",
                    clipPath: t ? `url(#clipPath-${n})` : null,
                    points,
                    ...r,
                    type,
                    layout,
                    connectNulls
                };
                return module553.default.createElement(module1083, {
                    ...s,
                    pathRef: this.pathRef
                });
            }
        },
        {
            key: "renderCurveWithAnimation",
            value: function(e, t) {
                const _this = this;
                const props = this.props;
                const { points, strokeDasharray, isAnimationActive, animationBegin, animationDuration, animationEasing, animationId, width, height } = props;
                const state = this.state;
                const { prevPoints, totalLength } = state;
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
                    key: `line-${animationId}`,
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart
                }, function({ t: t_1 }) {
                    if (prevPoints) {
                        const l = prevPoints.length / points.length;
                        const u = points.map((e, t)=>{
                            const r = Math.floor(t * l);
                            if (prevPoints[r]) {
                                const o = prevPoints[r];
                                const i = interpolateNumber(o.x, e.x);
                                const u = interpolateNumber(o.y, e.y);
                                return {
                                    ...e,
                                    x: i(t_1),
                                    y: u(t_1)
                                };
                            }
                            if (_this.animateNewValues) {
                                const s = interpolateNumber(2 * width, e.x);
                                const c = interpolateNumber(height / 2, e.y);
                                return {
                                    ...e,
                                    x: s(t_1),
                                    y: c(t_1)
                                };
                            }
                            return {
                                ...e,
                                x: e.x,
                                y: e.y
                            };
                        });
                        return _this.renderCurveStatically(u, e, t);
                    }
                    let strokeDasharray_1;
                    const c = interpolateNumber(0, totalLength)(t_1);
                    if (strokeDasharray) {
                        const f = strokeDasharray.split(/[,\s]+/gim).map((e)=>parseFloat(e));
                        strokeDasharray_1 = _this.getStrokeDasharray(c, totalLength, f);
                    } else {
                        strokeDasharray_1 = `${c}px ${totalLength - c}px`;
                    }
                    return _this.renderCurveStatically(points, e, t, {
                        strokeDasharray: strokeDasharray_1
                    });
                });
            }
        },
        {
            key: "renderCurve",
            value: function(e, t) {
                const props = this.props;
                const { points, isAnimationActive } = props;
                const state = this.state;
                const { prevPoints, totalLength } = state;
                if (isAnimationActive && points && points.length && (!prevPoints && totalLength > 0 || !module807(prevPoints, points))) {
                    return this.renderCurveWithAnimation(e, t);
                }
                return this.renderCurveStatically(points, e, t);
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { hide, dot, points, className, xAxis, yAxis, top, left, width, height, isAnimationActive, id } = props;
                if (hide || !points || !points.length) {
                    return null;
                }
                const isAnimationFinished = this.state.isAnimationFinished;
                const b = points.length === 1;
                const x = module3("recharts-line", className);
                const w = xAxis && xAxis.allowDataOverflow || yAxis && yAxis.allowDataOverflow;
                const _ = module844(id) ? this.id : id;
                return module553.default.createElement(module869, {
                    className: x
                }, w ? module553.default.createElement("defs", null, module553.default.createElement("clipPath", {
                    id: `clipPath-${_}`
                }, module553.default.createElement("rect", {
                    x: left,
                    y: top,
                    width,
                    height
                }))) : null, !b && this.renderCurve(w, _), this.renderErrorBar(), (b || dot) && this.renderDots(w, _), (!isAnimationActive || isAnimationFinished) && module1031.renderCallByParent(this.props, points));
            }
        }
    ]) {
        S(n.prototype, l);
    }
    if (m) {
        S(n, m);
    }
    return t;
})(module553.PureComponent);
Line.displayName = "Line";
Line.propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    ...EVENT_ATTRIBUTES,
    className: module1.string,
    type: module1.oneOfType([
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
    unit: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    name: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    yAxisId: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    xAxisId: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    yAxis: module1.object,
    xAxis: module1.object,
    legendType: module1.oneOf(LEGEND_TYPES),
    tooltipType: module1.oneOf(TOOLTIP_TYPES),
    layout: module1.oneOf([
        "horizontal",
        "vertical"
    ]),
    connectNulls: module1.bool,
    hide: module1.bool,
    activeDot: module1.oneOfType([
        module1.object,
        module1.element,
        module1.func,
        module1.bool
    ]),
    dot: module1.oneOfType([
        module1.object,
        module1.element,
        module1.func,
        module1.bool
    ]),
    top: module1.number,
    left: module1.number,
    width: module1.number,
    height: module1.number,
    points: module1.arrayOf(module1.shape({
        x: module1.number,
        y: module1.number,
        value: module1.value
    })),
    onAnimationStart: module1.func,
    onAnimationEnd: module1.func,
    isAnimationActive: module1.bool,
    animateNewValues: module1.bool,
    animationBegin: module1.number,
    animationDuration: module1.number,
    animationEasing: module1.oneOf([
        "ease",
        "ease-in",
        "ease-out",
        "ease-in-out",
        "linear"
    ]),
    animationId: module1.number,
    id: module1.string
};
Line.defaultProps = {
    xAxisId: 0,
    yAxisId: 0,
    connectNulls: false,
    activeDot: true,
    dot: true,
    legendType: "line",
    stroke: "#3182bd",
    strokeWidth: 1,
    fill: "#fff",
    points: [],
    isAnimationActive: !isSsr(),
    animateNewValues: true,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
    hide: false,
    onAnimationStart: function() {},
    onAnimationEnd: function() {}
};
Line.getComposedData = function({ props, xAxis, yAxis, xAxisTicks, yAxisTicks, dataKey, bandSize, displayedData, offset }) {
    const props_layout = props.layout;
    return {
        points: displayedData.map((e, index)=>{
            const s = getValueByDataKey(e, dataKey);
            if (props_layout === "horizontal") {
                return {
                    x: getCateCoordinateOfLine({
                        axis: xAxis,
                        ticks: xAxisTicks,
                        bandSize,
                        entry: e,
                        index
                    }),
                    y: module844(s) ? null : yAxis.scale(s),
                    value: s,
                    payload: e
                };
            }
            return {
                x: module844(s) ? null : xAxis.scale(s),
                y: getCateCoordinateOfLine({
                    axis: yAxis,
                    ticks: yAxisTicks,
                    bandSize,
                    entry: e,
                    index
                }),
                value: s,
                payload: e
            };
        }),
        layout: props_layout,
        ...offset
    };
};
export default Line;
