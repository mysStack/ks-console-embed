import module194 from "./module-194.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes } from "./module-810.js";
import { isNumber } from "./module-827.js";
function u() {
    if (typeof WeakMap !== "function") {
        return null;
    }
    const weakMap = new WeakMap;
    u = function() {
        return weakMap;
    };
    return weakMap;
}
function c(e) {
    return (c = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
function v(e, t) {
    if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function g(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
    }
}
function y(e, t) {
    if (!t || c(t) !== "object" && typeof t !== "function") {
        return ((e)=>{
            if (e === undefined) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return e;
        })(e);
    }
    return t;
}
function m(e) {
    return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function b(e, t) {
    return (b = Object.setPrototypeOf || function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
const CartesianGrid = ((e)=>{
    function t() {
        v(this, t);
        return y(this, m(t).apply(this, arguments));
    }
    let n;
    let i;
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
            b(e, t);
        }
    })(t, e);
    n = t;
    u = [
        {
            key: "renderLineItem",
            value: function(e, t) {
                let n;
                if (module553.default.isValidElement(e)) {
                    n = module553.default.cloneElement(e, t);
                } else if (module194(e)) {
                    n = e(t);
                } else {
                    const { x1, y1, x2, y2, key, ...rest } = t;
                    n = module553.default.createElement("line", {
                        ...getPresentationAttributes(rest),
                        x1,
                        y1,
                        x2,
                        y2,
                        fill: "none",
                        key
                    });
                }
                return n;
            }
        }
    ];
    if (i = [
        {
            key: "renderHorizontal",
            value: function(e) {
                const _this = this;
                const props = this.props;
                const { x, width, horizontal } = props;
                if (!e || !e.length) {
                    return null;
                }
                const l = e.map((e, n)=>{
                    const o = {
                        ..._this.props,
                        x1: x,
                        y1: e,
                        x2: x + width,
                        y2: e,
                        key: `line-${n}`,
                        index: n
                    };
                    return _this.constructor.renderLineItem(horizontal, o);
                });
                return module553.default.createElement("g", {
                    className: "recharts-cartesian-grid-horizontal"
                }, l);
            }
        },
        {
            key: "renderVertical",
            value: function(e) {
                const _this = this;
                const props = this.props;
                const { y, height, vertical } = props;
                if (!e || !e.length) {
                    return null;
                }
                const l = e.map((e, n)=>{
                    const o = {
                        ..._this.props,
                        x1: e,
                        y1: y,
                        x2: e,
                        y2: y + height,
                        key: `line-${n}`,
                        index: n
                    };
                    return _this.constructor.renderLineItem(vertical, o);
                });
                return module553.default.createElement("g", {
                    className: "recharts-cartesian-grid-vertical"
                }, l);
            }
        },
        {
            key: "renderVerticalStripes",
            value: function(e) {
                const verticalFill = this.props.verticalFill;
                if (!verticalFill || !verticalFill.length) {
                    return null;
                }
                const props = this.props;
                const { fillOpacity, x, y, width, height } = props;
                const s = e.slice().sort((e, t)=>e - t);
                if (x !== s[0]) {
                    s.unshift(0);
                }
                const c = s.map((e, n)=>{
                    const width_1 = s[n + 1] ? s[n + 1] - e : x + width - e;
                    if (width_1 <= 0) {
                        return null;
                    }
                    const f = n % verticalFill.length;
                    return module553.default.createElement("rect", {
                        key: `react-${n}`,
                        x: Math.round(e + x - x),
                        y,
                        width: width_1,
                        height,
                        stroke: "none",
                        fill: verticalFill[f],
                        fillOpacity,
                        className: "recharts-cartesian-grid-bg"
                    });
                });
                return module553.default.createElement("g", {
                    className: "recharts-cartesian-gridstripes-vertical"
                }, c);
            }
        },
        {
            key: "renderHorizontalStripes",
            value: function(e) {
                const horizontalFill = this.props.horizontalFill;
                if (!horizontalFill || !horizontalFill.length) {
                    return null;
                }
                const props = this.props;
                const { fillOpacity, x, y, width, height } = props;
                const s = e.slice().sort((e, t)=>e - t);
                if (y !== s[0]) {
                    s.unshift(0);
                }
                const c = s.map((e, n)=>{
                    const height_1 = s[n + 1] ? s[n + 1] - e : y + height - e;
                    if (height_1 <= 0) {
                        return null;
                    }
                    const f = n % horizontalFill.length;
                    return module553.default.createElement("rect", {
                        key: `react-${n}`,
                        y: Math.round(e + y - y),
                        x,
                        height: height_1,
                        width,
                        stroke: "none",
                        fill: horizontalFill[f],
                        fillOpacity,
                        className: "recharts-cartesian-grid-bg"
                    });
                });
                return module553.default.createElement("g", {
                    className: "recharts-cartesian-gridstripes-horizontal"
                }, c);
            }
        },
        {
            key: "renderBackground",
            value: function() {
                const fill = this.props.fill;
                if (!fill || fill === "none") {
                    return null;
                }
                const props = this.props;
                const { fillOpacity, x, y, width, height } = props;
                return module553.default.createElement("rect", {
                    x,
                    y,
                    width,
                    height,
                    stroke: "none",
                    fill,
                    fillOpacity,
                    className: "recharts-cartesian-grid-bg"
                });
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { x, y: y_1, width, height, horizontal, vertical, horizontalCoordinatesGenerator, verticalCoordinatesGenerator, xAxis, yAxis, offset, chartWidth, chartHeight } = props;
                if (!isNumber(width) || width <= 0 || !isNumber(height) || height <= 0 || !isNumber(x) || x !== +x || !isNumber(y_1) || y_1 !== +y_1) {
                    return null;
                }
                const props_1 = this.props;
                let y_horizontalPoints = props_1.horizontalPoints;
                let y_verticalPoints = props_1.verticalPoints;
                if (!(y_horizontalPoints && y_horizontalPoints.length || !module194(horizontalCoordinatesGenerator))) {
                    y_horizontalPoints = horizontalCoordinatesGenerator({
                        yAxis,
                        width: chartWidth,
                        height: chartHeight,
                        offset
                    });
                }
                if (!(y_verticalPoints && y_verticalPoints.length || !module194(verticalCoordinatesGenerator))) {
                    y_verticalPoints = verticalCoordinatesGenerator({
                        xAxis,
                        width: chartWidth,
                        height: chartHeight,
                        offset
                    });
                }
                return module553.default.createElement("g", {
                    className: "recharts-cartesian-grid"
                }, this.renderBackground(), horizontal && this.renderHorizontal(y_horizontalPoints), vertical && this.renderVertical(y_verticalPoints), horizontal && this.renderHorizontalStripes(y_horizontalPoints), vertical && this.renderVerticalStripes(y_verticalPoints));
            }
        }
    ]) {
        g(n.prototype, i);
    }
    if (u) {
        g(n, u);
    }
    return t;
})(module553.PureComponent);
CartesianGrid.displayName = "CartesianGrid";
CartesianGrid.propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    x: module1.number,
    y: module1.number,
    width: module1.number,
    height: module1.number,
    horizontal: module1.oneOfType([
        module1.object,
        module1.element,
        module1.func,
        module1.bool
    ]),
    vertical: module1.oneOfType([
        module1.object,
        module1.element,
        module1.func,
        module1.bool
    ]),
    horizontalPoints: module1.arrayOf(module1.number),
    verticalPoints: module1.arrayOf(module1.number),
    horizontalCoordinatesGenerator: module1.func,
    verticalCoordinatesGenerator: module1.func,
    xAxis: module1.object,
    yAxis: module1.object,
    offset: module1.object,
    chartWidth: module1.number,
    chartHeight: module1.number,
    verticalFill: module1.arrayOf(module1.string),
    horizontalFill: module1.arrayOf(module1.string)
};
CartesianGrid.defaultProps = {
    horizontal: true,
    vertical: true,
    horizontalPoints: [],
    verticalPoints: [],
    stroke: "#ccc",
    fill: "none",
    verticalFill: [],
    horizontalFill: []
};
export default CartesianGrid;
