import module807 from "./module-807.js";
import module194 from "./module-194.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module991 from "./module-991.js";
import module3 from "./module-3.js";
import { interpolateNumber } from "./module-827.js";
import { LEGEND_TYPES, PRESENTATION_ATTRIBUTES, TOOLTIP_TYPES, filterEventAttributes, getPresentationAttributes, isSsr } from "./module-810.js";
import { polarToCartesian } from "./module-927.js";
import { getValueByDataKey } from "./module-912.js";
import module1516 from "./module-1516.js";
import module947 from "./module-947.js";
import module869 from "./module-869.js";
import module1031 from "./module-1031.js";
function y() {
    if (typeof WeakMap !== "function") {
        return null;
    }
    const weakMap = new WeakMap;
    y = function() {
        return weakMap;
    };
    return weakMap;
}
function b(e) {
    return (b = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
function O(e, t) {
    if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function E(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
    }
}
function M(e, t) {
    if (!t || b(t) !== "object" && typeof t !== "function") {
        return ((e)=>{
            if (e === undefined) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return e;
        })(e);
    }
    return t;
}
function S(e) {
    return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function A(e, t) {
    return (A = Object.setPrototypeOf || function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
const Radar = ((e)=>{
    function t(...i) {
        let n;
        O(this, t);
        n = M(this, S(t).call(this, ...i));
        n.state = {
            isAnimationFinished: false
        };
        n.cachePrevData = function(prevPoints) {
            n.setState({
                prevPoints
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
        n.handleMouseEnter = function(e) {
            const onMouseEnter = n.props.onMouseEnter;
            if (onMouseEnter) {
                onMouseEnter(n.props, e);
            }
        };
        n.handleMouseLeave = function(e) {
            const onMouseLeave = n.props.onMouseLeave;
            if (onMouseLeave) {
                onMouseLeave(n.props, e);
            }
        };
        return n;
    }
    let n;
    let a;
    let f;
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
            A(e, t);
        }
    })(t, e);
    n = t;
    f = [
        {
            key: "renderDotItem",
            value: function(e, t) {
                if (module553.default.isValidElement(e)) {
                    return module553.default.cloneElement(e, t);
                }
                if (module194(e)) {
                    return e(t);
                }
                return module553.default.createElement(module947, {
                    ...t,
                    className: "recharts-radar-dot"
                });
            }
        }
    ];
    if (a = [
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
            key: "renderDots",
            value: function(e) {
                const _this = this;
                const props = this.props;
                const { dot, dataKey } = props;
                const a = getPresentationAttributes(this.props);
                const l = getPresentationAttributes(dot);
                const u = e.map((e, index)=>{
                    const i = {
                        key: `dot-${index}`,
                        r: 3,
                        ...a,
                        ...l,
                        dataKey,
                        cx: e.x,
                        cy: e.y,
                        index,
                        payload: e
                    };
                    return _this.constructor.renderDotItem(dot, i);
                });
                return module553.default.createElement(module869, {
                    className: "recharts-radar-dots"
                }, u);
            }
        },
        {
            key: "renderPolygonStatically",
            value: function(points) {
                let t;
                const props = this.props;
                const { shape, dot } = props;
                t = module553.default.isValidElement(shape) ? module553.default.cloneElement(shape, {
                    ...this.props,
                    points
                }) : module194(shape) ? shape({
                    ...this.props,
                    points
                }) : module553.default.createElement(module1516, {
                    ...filterEventAttributes(this.props),
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    ...getPresentationAttributes(this.props),
                    points
                });
                return module553.default.createElement(module869, {
                    className: "recharts-radar-polygon"
                }, t, dot ? this.renderDots(points) : null);
            }
        },
        {
            key: "renderPolygonWithAnimation",
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
                    key: `radar-${animationId}`,
                    onAnimationEnd: this.handleAnimationEnd,
                    onAnimationStart: this.handleAnimationStart
                }, function({ t: t_1 }) {
                    const o = prevPoints && prevPoints.length / points.length;
                    const i = points.map((e, t)=>{
                        const n = prevPoints && prevPoints[Math.floor(t * o)];
                        if (n) {
                            const i = interpolateNumber(n.x, e.x);
                            const a = interpolateNumber(n.y, e.y);
                            return {
                                ...e,
                                x: i(t_1),
                                y: a(t_1)
                            };
                        }
                        const l = interpolateNumber(e.cx, e.x);
                        const u = interpolateNumber(e.cy, e.y);
                        return {
                            ...e,
                            x: l(t_1),
                            y: u(t_1)
                        };
                    });
                    return _this.renderPolygonStatically(i);
                });
            }
        },
        {
            key: "renderPolygon",
            value: function() {
                const props = this.props;
                const { points, isAnimationActive } = props;
                const prevPoints = this.state.prevPoints;
                if (!(isAnimationActive && points && points.length) || prevPoints && module807(prevPoints, points)) {
                    return this.renderPolygonStatically(points);
                }
                return this.renderPolygonWithAnimation();
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { hide, className, points, isAnimationActive } = props;
                if (hide || !points || !points.length) {
                    return null;
                }
                const isAnimationFinished = this.state.isAnimationFinished;
                const className_1 = module3("recharts-radar", className);
                return module553.default.createElement(module869, {
                    className: className_1
                }, this.renderPolygon(), (!isAnimationActive || isAnimationFinished) && module1031.renderCallByParent(this.props, points));
            }
        }
    ]) {
        E(n.prototype, a);
    }
    if (f) {
        E(n, f);
    }
    return t;
})(module553.PureComponent);
Radar.displayName = "Radar";
Radar.propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    className: module1.string,
    dataKey: module1.oneOfType([
        module1.number,
        module1.string,
        module1.func
    ]).isRequired,
    angleAxisId: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    radiusAxisId: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    points: module1.arrayOf(module1.shape({
        x: module1.number,
        y: module1.number,
        cx: module1.number,
        cy: module1.number,
        angle: module1.number,
        radius: module1.number,
        value: module1.number,
        payload: module1.object
    })),
    shape: module1.oneOfType([
        module1.element,
        module1.func
    ]),
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
    label: module1.oneOfType([
        module1.element,
        module1.func,
        module1.object,
        module1.bool
    ]),
    legendType: module1.oneOf(LEGEND_TYPES),
    tooltipType: module1.oneOf(TOOLTIP_TYPES),
    hide: module1.bool,
    onAnimationStart: module1.func,
    onAnimationEnd: module1.func,
    onMouseEnter: module1.func,
    onMouseLeave: module1.func,
    onClick: module1.func,
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
Radar.defaultProps = {
    angleAxisId: 0,
    radiusAxisId: 0,
    hide: false,
    activeDot: true,
    dot: false,
    legendType: "rect",
    isAnimationActive: !isSsr(),
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease"
};
Radar.getComposedData = function({ radiusAxis, angleAxis, displayedData, dataKey, bandSize }) {
    const { cx, cy } = angleAxis;
    return {
        points: displayedData.map((e, r)=>{
            const u = getValueByDataKey(e, angleAxis.dataKey, r);
            const s = getValueByDataKey(e, dataKey, 0);
            const angle = angleAxis.scale(u) + (bandSize || 0);
            const radius = radiusAxis.scale(s);
            return {
                ...polarToCartesian(cx, cy, radius, angle),
                name: u,
                value: s,
                cx,
                cy,
                radius,
                angle,
                payload: e
            };
        })
    };
};
export default Radar;
