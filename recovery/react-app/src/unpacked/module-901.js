import module807 from "unpacked/module-807.js";
import module926 from "unpacked/module-926.js";
import module1156 from "unpacked/module-1156.js";
import module194 from "unpacked/module-194.js";
import module26 from "unpacked/module-26.js";
import module844 from "unpacked/module-844.js";
import module60 from "unpacked/module-60.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module991 from "unpacked/module-991.js";
import module1083 from "unpacked/module-1083.js";
import module947 from "unpacked/module-947.js";
import module869 from "unpacked/module-869.js";
import module1031 from "unpacked/module-1031.js";
import { EVENT_ATTRIBUTES, LEGEND_TYPES, PRESENTATION_ATTRIBUTES, TOOLTIP_TYPES, filterEventAttributes, getPresentationAttributes, isSsr } from "unpacked/module-810.js";
import { interpolateNumber, isNumber, uniqueId } from "unpacked/module-827.js";
import { getCateCoordinateOfLine, getValueByDataKey } from "unpacked/module-912.js";
function w() {
    if (typeof WeakMap !== "function") {
        return null;
    }
    const weakMap = new WeakMap;
    w = function() {
        return weakMap;
    };
    return weakMap;
}
function C(e) {
    return (C = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
function A(e, t) {
    if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function k(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
    }
}
function j(e, t) {
    if (!t || C(t) !== "object" && typeof t !== "function") {
        return ((e)=>{
            if (e === undefined) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return e;
        })(e);
    }
    return t;
}
function T(e) {
    return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function P(e, t) {
    return (P = Object.setPrototypeOf || function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
const Area = ((e)=>{
    function t(...o) {
        let n;
        A(this, t);
        n = j(this, T(t).call(this, ...o));
        n.state = {
            isAnimationFinished: true
        };
        n.id = uniqueId("recharts-area-");
        n.cachePrevData = function(prevPoints, prevBaseLine) {
            n.setState({
                prevPoints,
                prevBaseLine
            });
        };
        n.handleAnimationEnd = function() {
            const onAnimationEnd = n.props.onAnimationEnd;
            n.setState({
                isAnimationFinished: true
            });
            if (module194(onAnimationEnd)) {
                onAnimationEnd();
            }
        };
        n.handleAnimationStart = function() {
            const onAnimationStart = n.props.onAnimationStart;
            n.setState({
                isAnimationFinished: false
            });
            if (module194(onAnimationStart)) {
                onAnimationStart();
            }
        };
        return n;
    }
    let n;
    let l;
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
            P(e, t);
        }
    })(t, e);
    n = t;
    if (l = [
        {
            key: "componentWillReceiveProps",
            value: function(e) {
                const props = this.props;
                const { animationId, points, baseLine } = props;
                if (e.animationId !== animationId) {
                    this.cachePrevData(points, baseLine);
                }
            }
        },
        {
            key: "renderDots",
            value: function(e, t) {
                const _this = this;
                const isAnimationActive = this.props.isAnimationActive;
                const isAnimationFinished = this.state.isAnimationFinished;
                if (isAnimationActive && !isAnimationFinished) {
                    return null;
                }
                const props = this.props;
                const { dot, points, dataKey } = props;
                const s = getPresentationAttributes(this.props);
                const f = getPresentationAttributes(dot);
                const d = filterEventAttributes(dot);
                const p = points.map((e, t)=>{
                    const r = {
                        key: `dot-${t}`,
                        r: 3,
                        ...s,
                        ...f,
                        ...d,
                        dataKey,
                        cx: e.x,
                        cy: e.y,
                        index: t,
                        value: e.value,
                        payload: e.payload
                    };
                    return _this.constructor.renderDotItem(dot, r);
                });
                const h = {
                    clipPath: e ? `url(#clipPath-${t})` : null
                };
                return module553.default.createElement(module869, {
                    className: "recharts-area-dots",
                    ...h
                }, p);
            }
        },
        {
            key: "renderHorizontalRect",
            value: function(e) {
                const props = this.props;
                const { baseLine, points, strokeWidth } = props;
                const a = points[0].x;
                const l = points[points.length - 1].x;
                const width = e * Math.abs(a - l);
                let f = module1156(points.map((e)=>e.y || 0));
                if (isNumber(baseLine)) {
                    f = Math.max(baseLine, f);
                } else if (baseLine && module60(baseLine) && baseLine.length) {
                    f = Math.max(module1156(baseLine.map((e)=>e.y || 0)), f);
                }
                if (isNumber(f)) {
                    return module553.default.createElement("rect", {
                        x: a < l ? a : a - width,
                        y: 0,
                        width,
                        height: parseInt(f + (strokeWidth || 1), 10)
                    });
                }
                return null;
            }
        },
        {
            key: "renderVerticalRect",
            value: function(e) {
                const props = this.props;
                const { baseLine, points, strokeWidth } = props;
                const a = points[0].y;
                const l = points[points.length - 1].y;
                const u = e * Math.abs(a - l);
                let f = module1156(points.map((e)=>e.x || 0));
                if (isNumber(baseLine)) {
                    f = Math.max(baseLine, f);
                } else if (baseLine && module60(baseLine) && baseLine.length) {
                    f = Math.max(module1156(baseLine.map((e)=>e.x || 0)), f);
                }
                if (isNumber(f)) {
                    return module553.default.createElement("rect", {
                        x: 0,
                        y: a < l ? a : a - u,
                        width: f + (strokeWidth || 1),
                        height: parseInt(u, 10)
                    });
                }
                return null;
            }
        },
        {
            key: "renderClipRect",
            value: function(e) {
                if (this.props.layout === "vertical") {
                    return this.renderVerticalRect(e);
                }
                return this.renderHorizontalRect(e);
            }
        },
        {
            key: "renderAreaStatically",
            value: function(points, t, n, r) {
                const props = this.props;
                const { layout, type, stroke, connectNulls, isRange } = props;
                return module553.default.createElement(module869, {
                    clipPath: n ? `url(#clipPath-${r})` : null
                }, module553.default.createElement(module1083, {
                    ...this.props,
                    points,
                    baseLine: t,
                    stroke: "none",
                    className: "recharts-area-area"
                }), stroke !== "none" && module553.default.createElement(module1083, {
                    ...getPresentationAttributes(this.props),
                    className: "recharts-area-curve",
                    layout,
                    type,
                    connectNulls,
                    fill: "none",
                    points
                }), stroke !== "none" && isRange && module553.default.createElement(module1083, {
                    ...getPresentationAttributes(this.props),
                    className: "recharts-area-curve",
                    layout,
                    type,
                    connectNulls,
                    fill: "none",
                    points: t
                }));
            }
        },
        {
            key: "renderAreaWithAnimation",
            value: function(e, t) {
                const _this = this;
                const props = this.props;
                const { points, baseLine, isAnimationActive, animationBegin, animationDuration, animationEasing, animationId } = props;
                const state = this.state;
                const { prevPoints, prevBaseLine } = state;
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
                    key: `area-${animationId}`,
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart
                }, function({ t: t_1 }) {
                    if (prevPoints) {
                        let s;
                        const f = prevPoints.length / points.length;
                        const d = points.map((e, t)=>{
                            const n = Math.floor(t * f);
                            if (prevPoints[n]) {
                                const r = prevPoints[n];
                                const o = interpolateNumber(r.x, e.x);
                                const i = interpolateNumber(r.y, e.y);
                                return {
                                    ...e,
                                    x: o(t_1),
                                    y: i(t_1)
                                };
                            }
                            return e;
                        });
                        s = isNumber(baseLine) ? interpolateNumber(prevBaseLine, baseLine)(t_1) : module844(baseLine) || module926(baseLine) ? interpolateNumber(prevBaseLine, 0)(t_1) : baseLine.map((e, t)=>{
                            const n = Math.floor(t * f);
                            if (prevBaseLine[n]) {
                                const r = prevBaseLine[n];
                                const o = interpolateNumber(r.x, e.x);
                                const i = interpolateNumber(r.y, e.y);
                                return {
                                    ...e,
                                    x: o(t_1),
                                    y: i(t_1)
                                };
                            }
                            return e;
                        });
                        return _this.renderAreaStatically(d, s, e, t);
                    }
                    return module553.default.createElement(module869, null, module553.default.createElement("defs", null, module553.default.createElement("clipPath", {
                        id: `animationClipPath-${t}`
                    }, _this.renderClipRect(t_1))), module553.default.createElement(module869, {
                        clipPath: `url(#animationClipPath-${t})`
                    }, _this.renderAreaStatically(points, baseLine, e, t)));
                });
            }
        },
        {
            key: "renderArea",
            value: function(e, t) {
                const props = this.props;
                const { points, baseLine, isAnimationActive } = props;
                const state = this.state;
                const { prevPoints, prevBaseLine, totalLength } = state;
                if (isAnimationActive && points && points.length && (!prevPoints && totalLength > 0 || !module807(prevPoints, points) || !module807(prevBaseLine, baseLine))) {
                    return this.renderAreaWithAnimation(e, t);
                }
                return this.renderAreaStatically(points, baseLine, e, t);
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { hide, dot, points, className, top, left, xAxis, yAxis, width, height, isAnimationActive, id } = props;
                if (hide || !points || !points.length) {
                    return null;
                }
                const isAnimationFinished = this.state.isAnimationFinished;
                const b = points.length === 1;
                const className_1 = module3("recharts-area", className);
                const w = xAxis && xAxis.allowDataOverflow || yAxis && yAxis.allowDataOverflow;
                const _ = module844(id) ? this.id : id;
                return module553.default.createElement(module869, {
                    className: className_1
                }, w ? module553.default.createElement("defs", null, module553.default.createElement("clipPath", {
                    id: `clipPath-${_}`
                }, module553.default.createElement("rect", {
                    x: left,
                    y: top,
                    width,
                    height: parseInt(height, 10)
                }))) : null, b ? null : this.renderArea(w, _), (dot || b) && this.renderDots(w, _), (!isAnimationActive || isAnimationFinished) && module1031.renderCallByParent(this.props, points));
            }
        }
    ]) {
        k(n.prototype, l);
    }
    return t;
})(module553.PureComponent);
Area.displayName = "Area";
Area.propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    ...EVENT_ATTRIBUTES,
    className: module1.string,
    dataKey: module1.oneOfType([
        module1.string,
        module1.number,
        module1.func
    ]).isRequired,
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
    stackId: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    legendType: module1.oneOf(LEGEND_TYPES),
    tooltipType: module1.oneOf(TOOLTIP_TYPES),
    connectNulls: module1.bool,
    activeDot: module1.oneOfType([
        module1.object,
        module1.element,
        module1.func,
        module1.bool
    ]),
    dot: module1.oneOfType([
        module1.func,
        module1.element,
        module1.object,
        module1.bool
    ]),
    label: module1.oneOfType([
        module1.func,
        module1.element,
        module1.object,
        module1.bool
    ]),
    hide: module1.bool,
    layout: module1.oneOf([
        "horizontal",
        "vertical"
    ]),
    baseLine: module1.oneOfType([
        module1.number,
        module1.array
    ]),
    isRange: module1.bool,
    points: module1.arrayOf(module1.shape({
        x: module1.number,
        y: module1.number,
        value: module1.oneOfType([
            module1.number,
            module1.array
        ])
    })),
    onAnimationStart: module1.func,
    onAnimationEnd: module1.func,
    animationId: module1.number,
    isAnimationActive: module1.bool,
    animationBegin: module1.number,
    animationDuration: module1.number,
    animationEasing: module1.oneOf([
        "ease",
        "ease-in",
        "ease-out",
        "ease-in-out",
        "linear"
    ]),
    id: module1.string
};
Area.defaultProps = {
    stroke: "#3182bd",
    fill: "#3182bd",
    fillOpacity: 0.6,
    xAxisId: 0,
    yAxisId: 0,
    legendType: "line",
    connectNulls: false,
    points: [],
    dot: false,
    activeDot: true,
    hide: false,
    isAnimationActive: !isSsr(),
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease"
};
Area.getBaseValue = function({ layout, baseValue }, t, n) {
    if (isNumber(baseValue)) {
        return baseValue;
    }
    const i = layout === "horizontal" ? n : t;
    const a = i.scale.domain();
    if (i.type === "number") {
        const l = Math.max(a[0], a[1]);
        const u = Math.min(a[0], a[1]);
        if (baseValue === "dataMin") {
            return u;
        }
        if (baseValue === "dataMax" || l < 0) {
            return l;
        }
        return Math.max(Math.min(a[0], a[1]), 0);
    }
    switch(baseValue){
        case "dataMin":
            return a[0];
        case "dataMax":
            return a[1];
        default:
            return a[0];
    }
};
Area.getComposedData = function({ props, xAxis, yAxis, xAxisTicks, yAxisTicks, bandSize, dataKey, stackedData, dataStartIndex, displayedData, offset }) {
    let baseLine;
    const props_layout = props.layout;
    const y = stackedData && stackedData.length;
    const m = Area.getBaseValue(props, xAxis, yAxis);
    let isRange = false;
    const points = displayedData.map((e, t)=>{
        let n;
        if (y) {
            n = stackedData[dataStartIndex + t];
        } else {
            n = getValueByDataKey(e, dataKey);
            if (module60(n)) {
                isRange = true;
            } else {
                n = [
                    m,
                    n
                ];
            }
        }
        if (props_layout === "horizontal") {
            return {
                x: getCateCoordinateOfLine({
                    axis: xAxis,
                    ticks: xAxisTicks,
                    bandSize,
                    entry: e,
                    index: t
                }),
                y: module844(n[1]) ? null : yAxis.scale(n[1]),
                value: n,
                payload: e
            };
        }
        return {
            x: module844(n[1]) ? null : xAxis.scale(n[1]),
            y: getCateCoordinateOfLine({
                axis: yAxis,
                ticks: yAxisTicks,
                bandSize,
                entry: e,
                index: t
            }),
            value: n,
            payload: e
        };
    });
    baseLine = y || isRange ? points.map((e)=>{
        if (props_layout === "horizontal") {
            return {
                x: e.x,
                y: module844(module26(e, "value[0]")) ? null : yAxis.scale(module26(e, "value[0]"))
            };
        }
        return {
            x: module844(module26(e, "value[0]")) ? null : xAxis.scale(module26(e, "value[0]")),
            y: e.y
        };
    }) : props_layout === "horizontal" ? yAxis.scale(m) : xAxis.scale(m);
    return {
        points,
        baseLine,
        layout: props_layout,
        isRange,
        ...offset
    };
};
Area.renderDotItem = function(e, t) {
    if (module553.default.isValidElement(e)) {
        return module553.default.cloneElement(e, t);
    }
    if (module194(e)) {
        return e(t);
    }
    return module553.default.createElement(module947, {
        ...t,
        className: "recharts-area-dot"
    });
};
export default Area;
