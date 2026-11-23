import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module1510 from "unpacked/module-1510.js";
import module1511 from "unpacked/module-1511.js";
import { LEGEND_TYPES, filterEventsOfChild } from "unpacked/module-810.js";
function c() {
    if (typeof WeakMap !== "function") {
        return null;
    }
    const weakMap = new WeakMap;
    c = function() {
        return weakMap;
    };
    return weakMap;
}
function f(e) {
    return (f = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
function p(e, t, n) {
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
function h(e, t) {
    if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function v(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
    }
}
function g(e, t) {
    if (!t || f(t) !== "object" && typeof t !== "function") {
        return ((e)=>{
            if (e === undefined) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return e;
        })(e);
    }
    return t;
}
function y(e) {
    return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function m(e, t) {
    return (m = Object.setPrototypeOf || function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
const b = LEGEND_TYPES.filter((e)=>e !== "none");
const Legend = ((e)=>{
    function t() {
        h(this, t);
        return g(this, y(t).apply(this, arguments));
    }
    let n;
    let o;
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
            m(e, t);
        }
    })(t, e);
    n = t;
    if (o = [
        {
            key: "renderIcon",
            value: function(e) {
                const inactiveColor = this.props.inactiveColor;
                const n = e.inactive ? inactiveColor : e.color;
                if (e.type === "plainline") {
                    return module553.default.createElement("line", {
                        strokeWidth: 4,
                        fill: "none",
                        stroke: n,
                        strokeDasharray: e.payload.strokeDasharray,
                        x1: 0,
                        y1: 16,
                        x2: 32,
                        y2: 16,
                        className: "recharts-legend-icon"
                    });
                }
                if (e.type === "line") {
                    return module553.default.createElement("path", {
                        strokeWidth: 4,
                        fill: "none",
                        stroke: n,
                        d: `M0,${16}h${32 / 3}
            A${32 / 6},${32 / 6},0,1,1,${32 / 3 * 2},${16}
            H${32}M${32 / 3 * 2},${16}
            A${32 / 6},${32 / 6},0,1,1,${32 / 3},${16}`,
                        className: "recharts-legend-icon"
                    });
                }
                if (e.type === "rect") {
                    return module553.default.createElement("path", {
                        stroke: "none",
                        fill: n,
                        d: `M0,${4}h${32}v${24}h${-32}z`,
                        className: "recharts-legend-icon"
                    });
                }
                return module553.default.createElement(module1511, {
                    fill: n,
                    cx: 16,
                    cy: 16,
                    size: 32,
                    sizeType: "diameter",
                    type: e.type
                });
            }
        },
        {
            key: "renderItems",
            value: function() {
                const _this = this;
                const props = this.props;
                const { payload, iconSize, layout, formatter } = props;
                const viewBox = {
                    x: 0,
                    y: 0,
                    width: 32,
                    height: 32
                };
                const f = {
                    display: layout === "horizontal" ? "inline-block" : "block",
                    marginRight: 10
                };
                const h = {
                    display: "inline-block",
                    verticalAlign: "middle",
                    marginRight: 4
                };
                return payload.map((t, n)=>{
                    let l;
                    const v = t.formatter || formatter;
                    const className = module3((p(l = {
                        "recharts-legend-item": true
                    }, `legend-item-${n}`, true), p(l, "inactive", t.inactive), l));
                    if (t.type === "none") {
                        return null;
                    }
                    return module553.default.createElement("li", {
                        className,
                        style: f,
                        key: `legend-item-${n}`,
                        ...filterEventsOfChild(_this.props, t, n)
                    }, module553.default.createElement(module1510, {
                        width: iconSize,
                        height: iconSize,
                        viewBox,
                        style: h
                    }, _this.renderIcon(t)), module553.default.createElement("span", {
                        className: "recharts-legend-item-text"
                    }, v ? v(t.value, t, n) : t.value));
                });
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { payload, layout, align } = props;
                if (!payload || !payload.length) {
                    return null;
                }
                const i = {
                    padding: 0,
                    margin: 0,
                    textAlign: layout === "horizontal" ? align : "left"
                };
                return module553.default.createElement("ul", {
                    className: "recharts-default-legend",
                    style: i
                }, this.renderItems());
            }
        }
    ]) {
        v(n.prototype, o);
    }
    return t;
})(module553.PureComponent);
Legend.displayName = "Legend";
Legend.propTypes = {
    content: module1.element,
    iconSize: module1.number,
    iconType: module1.oneOf(b),
    layout: module1.oneOf([
        "horizontal",
        "vertical"
    ]),
    align: module1.oneOf([
        "center",
        "left",
        "right"
    ]),
    verticalAlign: module1.oneOf([
        "top",
        "bottom",
        "middle"
    ]),
    payload: module1.arrayOf(module1.shape({
        value: module1.any,
        id: module1.any,
        type: module1.oneOf(LEGEND_TYPES)
    })),
    inactiveColor: module1.string,
    formatter: module1.func,
    onMouseEnter: module1.func,
    onMouseLeave: module1.func,
    onClick: module1.func
};
Legend.defaultProps = {
    iconSize: 14,
    layout: "horizontal",
    align: "center",
    verticalAlign: "middle",
    inactiveColor: "#ccc"
};
export default Legend;
