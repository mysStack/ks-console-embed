import module446 from "./module-446.js";
import module60 from "./module-60.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import { isNumOrStr } from "./module-827.js";
function s() {
    if (typeof WeakMap !== "function") {
        return null;
    }
    const weakMap = new WeakMap;
    s = function() {
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
const x = function(e) {
    if (module60(e) && isNumOrStr(e[0]) && isNumOrStr(e[1])) {
        return e.join(" ~ ");
    }
    return e;
};
const DefaultTooltipContent = ((e)=>{
    function t() {
        v(this, t);
        return y(this, m(t).apply(this, arguments));
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
            b(e, t);
        }
    })(t, e);
    n = t;
    if (o = [
        {
            key: "renderContent",
            value: function() {
                const props = this.props;
                const { payload, separator, formatter, itemStyle, itemSorter } = props;
                if (payload && payload.length) {
                    const s = (itemSorter ? module446(payload, itemSorter) : payload).map((e, t)=>{
                        if (e.type === "none") {
                            return null;
                        }
                        const r = {
                            display: "block",
                            paddingTop: 4,
                            paddingBottom: 4,
                            color: e.color || "#000",
                            ...itemStyle
                        };
                        const l = e.formatter || formatter || x;
                        let e_name = e.name;
                        let e_value = e.value;
                        if (l) {
                            const f = l(e_value, e_name, e, t);
                            if (Array.isArray(f)) {
                                const d = ((e)=>{
                                    const t = 2;
                                    return ((e)=>{
                                        if (Array.isArray(e)) {
                                            return e;
                                        }
                                    })(e) || ((e, t)=>{
                                        if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]") {
                                            const n = [];
                                            let r = true;
                                            let o = false;
                                            let i;
                                            try {
                                                for(var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = true);
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
                                    })(e, t) || (()=>{
                                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                                    })();
                                })(f);
                                e_value = d[0];
                                e_name = d[1];
                            } else {
                                e_value = f;
                            }
                        }
                        return module553.default.createElement("li", {
                            className: "recharts-tooltip-item",
                            key: `tooltip-item-${t}`,
                            style: r
                        }, isNumOrStr(e_name) ? module553.default.createElement("span", {
                            className: "recharts-tooltip-item-name"
                        }, e_name) : null, isNumOrStr(e_name) ? module553.default.createElement("span", {
                            className: "recharts-tooltip-item-separator"
                        }, separator) : null, module553.default.createElement("span", {
                            className: "recharts-tooltip-item-value"
                        }, e_value), module553.default.createElement("span", {
                            className: "recharts-tooltip-item-unit"
                        }, e.unit || ""));
                    });
                    return module553.default.createElement("ul", {
                        className: "recharts-tooltip-item-list",
                        style: {
                            padding: 0,
                            margin: 0
                        }
                    }, s);
                }
                return null;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { wrapperClassName, contentStyle, labelClassName, labelStyle, label, labelFormatter } = props;
                const c = {
                    margin: 0,
                    padding: 10,
                    backgroundColor: "#fff",
                    border: "1px solid #ccc",
                    whiteSpace: "nowrap",
                    ...contentStyle
                };
                const f = {
                    margin: 0,
                    ...labelStyle
                };
                const d = isNumOrStr(label);
                let h = d ? label : "";
                const v = module3("recharts-default-tooltip", wrapperClassName);
                const g = module3("recharts-tooltip-label", labelClassName);
                if (d && labelFormatter) {
                    h = labelFormatter(label);
                }
                return module553.default.createElement("div", {
                    className: v,
                    style: c
                }, module553.default.createElement("p", {
                    className: g,
                    style: f
                }, h), this.renderContent());
            }
        }
    ]) {
        g(n.prototype, o);
    }
    return t;
})(module553.PureComponent);
DefaultTooltipContent.displayName = "DefaultTooltipContent";
DefaultTooltipContent.propTypes = {
    separator: module1.string,
    wrapperClassName: module1.string,
    labelClassName: module1.string,
    formatter: module1.func,
    contentStyle: module1.object,
    itemStyle: module1.object,
    labelStyle: module1.object,
    labelFormatter: module1.func,
    label: module1.any,
    payload: module1.arrayOf(module1.shape({
        name: module1.any,
        value: module1.oneOfType([
            module1.number,
            module1.string,
            module1.array
        ]),
        unit: module1.any
    })),
    itemSorter: module1.func
};
DefaultTooltipContent.defaultProps = {
    separator: " : ",
    contentStyle: {},
    itemStyle: {},
    labelStyle: {}
};
export default DefaultTooltipContent;
