import module844 from "./module-844.js";
import module807 from "./module-807.js";
import module194 from "./module-194.js";
import module60 from "./module-60.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module991 from "./module-991.js";
import module1278 from "./module-1278.js";
import module869 from "./module-869.js";
import module1158 from "./module-1158.js";
import module999 from "./module-999.js";
import module1031 from "./module-1031.js";
import { interpolateNumber, mathSign, uniqueId } from "./module-827.js";
import { EVENT_ATTRIBUTES, LEGEND_TYPES, PRESENTATION_ATTRIBUTES, TOOLTIP_TYPES, filterEventsOfChild, findAllByType, getPresentationAttributes, isSsr } from "./module-810.js";
import { findPositionOfBar, getBaseValueOfBar, getCateCoordinateOfBar, getValueByDataKey, truncateByDomain } from "./module-912.js";
function b() {
    if (typeof WeakMap !== "function") {
        return null;
    }
    const weakMap = new WeakMap;
    b = function() {
        return weakMap;
    };
    return weakMap;
}
function w(e) {
    return (w = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
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
    if (!t || w(t) !== "object" && typeof t !== "function") {
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
const Bar = ((e)=>{
    function t(...o) {
        let n;
        M(this, t);
        n = A(this, k(t).call(this, ...o));
        n.state = {
            isAnimationFinished: false
        };
        n.id = uniqueId("recharts-bar-");
        n.cachePrevData = function(prevData) {
            n.setState({
                prevData
            });
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
    let a;
    let u;
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
    u = [
        {
            key: "renderRectangle",
            value: function(e, t) {
                if (module553.default.isValidElement(e)) {
                    return module553.default.cloneElement(e, t);
                }
                if (module194(e)) {
                    return e(t);
                }
                return module553.default.createElement(module1278, t);
            }
        }
    ];
    if (a = [
        {
            key: "componentWillReceiveProps",
            value: function(e) {
                const props = this.props;
                const { animationId, data } = props;
                if (e.animationId !== animationId) {
                    this.cachePrevData(data);
                }
            }
        },
        {
            key: "renderRectanglesStatically",
            value: function(e) {
                const _this = this;
                const shape = this.props.shape;
                const r = getPresentationAttributes(this.props);
                return e && e.map((e, o)=>{
                    const i = {
                        ...r,
                        ...e,
                        index: o
                    };
                    return module553.default.createElement(module869, {
                        className: "recharts-bar-rectangle",
                        ...filterEventsOfChild(_this.props, e, o),
                        key: `rectangle-${o}`
                    }, _this.constructor.renderRectangle(shape, i));
                });
            }
        },
        {
            key: "renderRectanglesWithAnimation",
            value: function() {
                const _this = this;
                const props = this.props;
                const { data, layout, isAnimationActive, animationBegin, animationDuration, animationEasing, animationId } = props;
                const prevData = this.state.prevData;
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
                    key: `bar-${animationId}`,
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart
                }, function({ t: t_1 }) {
                    const i = data.map((e, t)=>{
                        const n = prevData && prevData[t];
                        if (n) {
                            const i = interpolateNumber(n.x, e.x);
                            const a = interpolateNumber(n.y, e.y);
                            const l = interpolateNumber(n.width, e.width);
                            const u = interpolateNumber(n.height, e.height);
                            return {
                                ...e,
                                x: i(t_1),
                                y: a(t_1),
                                width: l(t_1),
                                height: u(t_1)
                            };
                        }
                        if (layout === "horizontal") {
                            const s = interpolateNumber(0, e.height)(t_1);
                            return {
                                ...e,
                                y: e.y + e.height - s,
                                height: s
                            };
                        }
                        return {
                            ...e,
                            width: interpolateNumber(0, e.width)(t_1)
                        };
                    });
                    return module553.default.createElement(module869, null, _this.renderRectanglesStatically(i));
                });
            }
        },
        {
            key: "renderRectangles",
            value: function() {
                const props = this.props;
                const { data, isAnimationActive } = props;
                const prevData = this.state.prevData;
                if (!(isAnimationActive && data && data.length) || prevData && module807(prevData, data)) {
                    return this.renderRectanglesStatically(data);
                }
                return this.renderRectanglesWithAnimation();
            }
        },
        {
            key: "renderBackground",
            value: function() {
                const _this = this;
                const data = this.props.data;
                const n = getPresentationAttributes(this.props.background);
                return data.map((t, r)=>{
                    const { value: _value, background, ...rest } = t;
                    if (!background) {
                        return null;
                    }
                    const a = {
                        ...rest,
                        fill: "#eee",
                        ...background,
                        ...n,
                        ...filterEventsOfChild(_this.props, t, r),
                        index: r,
                        key: `background-bar-${r}`,
                        className: "recharts-bar-background-rectangle"
                    };
                    return _this.constructor.renderRectangle(_this.props.background, a);
                });
            }
        },
        {
            key: "renderErrorBar",
            value: function() {
                if (this.props.isAnimationActive && !this.state.isAnimationFinished) {
                    return null;
                }
                const props = this.props;
                const { data, xAxis, yAxis, layout, children } = props;
                const a = findAllByType(children, module1158);
                if (!a) {
                    return null;
                }
                const offset = layout === "vertical" ? data[0].height / 2 : data[0].width / 2;
                function dataPointFormatter(e, t) {
                    return {
                        x: e.x,
                        y: e.y,
                        value: e.value,
                        errorVal: getValueByDataKey(e, t)
                    };
                }
                return a.map((e, i)=>module553.default.cloneElement(e, {
                        key: `error-bar-${i}`,
                        data,
                        xAxis,
                        yAxis,
                        layout,
                        offset,
                        dataPointFormatter
                    }));
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { hide, data, className, xAxis, yAxis, left, top, width, height, isAnimationActive, background, id } = props;
                if (hide || !data || !data.length) {
                    return null;
                }
                const isAnimationFinished = this.state.isAnimationFinished;
                const className_1 = module3("recharts-bar", className);
                const x = xAxis && xAxis.allowDataOverflow || yAxis && yAxis.allowDataOverflow;
                const w = module844(id) ? this.id : id;
                return module553.default.createElement(module869, {
                    className: className_1
                }, x ? module553.default.createElement("defs", null, module553.default.createElement("clipPath", {
                    id: `clipPath-${w}`
                }, module553.default.createElement("rect", {
                    x: left,
                    y: top,
                    width,
                    height
                }))) : null, module553.default.createElement(module869, {
                    className: "recharts-bar-rectangles",
                    clipPath: x ? `url(#clipPath-${w})` : null
                }, background ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(), (!isAnimationActive || isAnimationFinished) && module1031.renderCallByParent(this.props, data));
            }
        }
    ]) {
        S(n.prototype, a);
    }
    if (u) {
        S(n, u);
    }
    return t;
})(module553.PureComponent);
Bar.displayName = "Bar";
Bar.propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    ...EVENT_ATTRIBUTES,
    className: module1.string,
    layout: module1.oneOf([
        "vertical",
        "horizontal"
    ]),
    xAxisId: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    yAxisId: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    yAxis: module1.object,
    xAxis: module1.object,
    stackId: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    barSize: module1.number,
    unit: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    name: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    dataKey: module1.oneOfType([
        module1.string,
        module1.number,
        module1.func
    ]).isRequired,
    legendType: module1.oneOf(LEGEND_TYPES),
    tooltipType: module1.oneOf(TOOLTIP_TYPES),
    minPointSize: module1.number,
    maxBarSize: module1.number,
    hide: module1.bool,
    shape: module1.oneOfType([
        module1.func,
        module1.element
    ]),
    data: module1.arrayOf(module1.shape({
        x: module1.number,
        y: module1.number,
        width: module1.number,
        height: module1.number,
        radius: module1.oneOfType([
            module1.number,
            module1.array
        ]),
        value: module1.oneOfType([
            module1.number,
            module1.string,
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
Bar.defaultProps = {
    xAxisId: 0,
    yAxisId: 0,
    legendType: "rect",
    minPointSize: 0,
    hide: false,
    data: [],
    layout: "vertical",
    isAnimationActive: !isSsr(),
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: "ease",
    onAnimationStart: function() {},
    onAnimationEnd: function() {}
};
Bar.getComposedData = function({ props, item, barPosition, bandSize, xAxis, yAxis, xAxisTicks, yAxisTicks, stackedData, dataStartIndex, displayedData, offset }) {
    const v = findPositionOfBar(barPosition, item);
    if (!v) {
        return [];
    }
    const props_layout = props.layout;
    const item_props = item.props;
    const { dataKey, children, minPointSize } = item_props;
    const numericAxis = props_layout === "horizontal" ? yAxis : xAxis;
    const M = stackedData ? numericAxis.scale.domain() : null;
    const S = getBaseValueOfBar({
        props,
        numericAxis
    });
    const A = findAllByType(children, module999);
    const data = displayedData.map((e, t)=>{
        let n;
        let x;
        let y_1;
        let width;
        let h;
        let background;
        if (stackedData) {
            n = truncateByDomain(stackedData[dataStartIndex + t], M);
        } else {
            n = getValueByDataKey(e, dataKey);
            if (!module60(n)) {
                n = [
                    S,
                    n
                ];
            }
        }
        if (props_layout === "horizontal") {
            x = getCateCoordinateOfBar({
                axis: xAxis,
                ticks: xAxisTicks,
                bandSize,
                offset: v.offset,
                entry: e,
                index: t
            });
            y_1 = yAxis.scale(n[1]);
            width = v.size;
            h = yAxis.scale(n[0]) - yAxis.scale(n[1]);
            background = {
                x,
                y: yAxis.y,
                width,
                height: yAxis.height
            };
            if (Math.abs(minPointSize) > 0 && Math.abs(h) < Math.abs(minPointSize)) {
                const x = mathSign(h || minPointSize) * (Math.abs(minPointSize) - Math.abs(h));
                y_1 -= x;
                h += x;
            }
        } else {
            x = xAxis.scale(n[0]);
            y_1 = getCateCoordinateOfBar({
                axis: yAxis,
                ticks: yAxisTicks,
                bandSize,
                offset: v.offset,
                entry: e,
                index: t
            });
            width = xAxis.scale(n[1]) - xAxis.scale(n[0]);
            h = v.size;
            background = {
                x: xAxis.x,
                y: y_1,
                width: xAxis.width,
                height: h
            };
            if (Math.abs(minPointSize) > 0 && Math.abs(width) < Math.abs(minPointSize)) {
                width += mathSign(width || minPointSize) * (Math.abs(minPointSize) - Math.abs(width));
            }
        }
        return {
            ...e,
            x,
            y: y_1,
            width,
            height: h,
            value: stackedData ? n : n[1],
            payload: e,
            background,
            ...A && A[t] && A[t].props
        };
    });
    return {
        data,
        layout: props_layout,
        ...offset
    };
};
export default Bar;
