import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module869 from "./module-869.js";
import { getPresentationAttributes } from "./module-810.js";
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
function s(e) {
    return (s = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
function f(e, t) {
    if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function d(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
    }
}
function p(e, t) {
    if (!t || s(t) !== "object" && typeof t !== "function") {
        return ((e)=>{
            if (e === undefined) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return e;
        })(e);
    }
    return t;
}
function h(e) {
    return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function v(e, t) {
    return (v = Object.setPrototypeOf || function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
const g = ((e)=>{
    function t() {
        f(this, t);
        return p(this, h(t).apply(this, arguments));
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
            v(e, t);
        }
    })(t, e);
    n = t;
    if (o = [
        {
            key: "renderErrorBars",
            value: function() {
                const props = this.props;
                const { offset, layout, width, dataKey, data, dataPointFormatter, xAxis, yAxis, ...rest } = props;
                const h = getPresentationAttributes(rest);
                return data.map((e, a)=>{
                    let u;
                    let p;
                    let v;
                    let g;
                    let x2;
                    let y2;
                    let b;
                    let x;
                    let w;
                    let _;
                    let C;
                    let O;
                    const E = dataPointFormatter(e, dataKey);
                    const { x: x_1, y: y_1, value, errorVal } = E;
                    if (!errorVal) {
                        return null;
                    }
                    if (Array.isArray(errorVal)) {
                        const j = ((errorVal_1)=>{
                            const t = 2;
                            return ((errorVal_1_1)=>{
                                if (Array.isArray(errorVal_1_1)) {
                                    return errorVal_1_1;
                                }
                            })(errorVal_1) || ((errorVal_1_1, t)=>{
                                if (Symbol.iterator in Object(errorVal_1_1) || Object.prototype.toString.call(errorVal_1_1) === "[object Arguments]") {
                                    const n = [];
                                    let r = true;
                                    let o = false;
                                    let i;
                                    try {
                                        for(var a, l = errorVal_1_1[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = true);
                                    } catch (error) {
                                        o = true;
                                        i = error;
                                    } finally{
                                        try {
                                            if (!(r || l.return == null)) {
                                                l.return();
                                            }
                                        } finally{
                                            if (o) {
                                                throw i;
                                            }
                                        }
                                    }
                                    return n;
                                }
                            })(errorVal_1, t) || (()=>{
                                throw new TypeError("Invalid attempt to destructure non-iterable instance");
                            })();
                        })(errorVal);
                        C = j[0];
                        O = j[1];
                    } else {
                        O = errorVal;
                        C = errorVal;
                    }
                    if (layout === "vertical") {
                        b = xAxis.scale;
                        p = y_1 + offset;
                        v = b((u = value) - C);
                        g = p + width;
                        x = {
                            x1: x2 = b(u + O),
                            y1: g,
                            x2,
                            y2: y2 = p - width
                        };
                        w = {
                            x1: v,
                            y1: p,
                            x2,
                            y2: p
                        };
                        _ = {
                            x1: v,
                            y1: g,
                            x2: v,
                            y2
                        };
                    } else if (layout === "horizontal") {
                        b = yAxis.scale;
                        v = (u = x_1 + offset) - width;
                        x2 = u + width;
                        g = b((p = value) - C);
                        x = {
                            x1: v,
                            y1: y2 = b(p + O),
                            x2,
                            y2
                        };
                        w = {
                            x1: u,
                            y1: g,
                            x2: u,
                            y2
                        };
                        _ = {
                            x1: v,
                            y1: g,
                            x2,
                            y2: g
                        };
                    }
                    return module553.default.createElement(module869, {
                        className: "recharts-errorBar",
                        key: `bar-${a}`,
                        ...h
                    }, module553.default.createElement("line", x), module553.default.createElement("line", w), module553.default.createElement("line", _));
                });
            }
        },
        {
            key: "render",
            value: function() {
                return module553.default.createElement(module869, {
                    className: "recharts-errorBars"
                }, this.renderErrorBars());
            }
        }
    ]) {
        d(n.prototype, o);
    }
    return t;
})(module553.Component);
g.propTypes = {
    dataKey: module1.oneOfType([
        module1.string,
        module1.number,
        module1.func
    ]).isRequired,
    data: module1.array,
    xAxis: module1.object,
    yAxis: module1.object,
    layout: module1.string,
    dataPointFormatter: module1.func,
    stroke: module1.string,
    strokeWidth: module1.number,
    width: module1.number,
    offset: module1.number
};
g.defaultProps = {
    stroke: "black",
    strokeWidth: 1.5,
    width: 5,
    offset: 0,
    layout: "horizontal"
};
export default g;
