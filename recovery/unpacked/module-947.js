import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import { filterEventAttributes, getPresentationAttributes } from "./module-810.js";
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
const Dot = ((e)=>{
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
            key: "render",
            value: function() {
                const props = this.props;
                const { cx, cy, r: r_1, className } = props;
                const className_1 = module3("recharts-dot", className);
                if (cx === +cx && cy === +cy && r_1 === +r_1) {
                    return module553.default.createElement("circle", {
                        ...getPresentationAttributes(this.props),
                        ...filterEventAttributes(this.props, null, true),
                        className: className_1,
                        cx,
                        cy,
                        r: r_1
                    });
                }
                return null;
            }
        }
    ]) {
        d(n.prototype, o);
    }
    return t;
})(module553.PureComponent);
Dot.displayName = "Dot";
Dot.propTypes = {
    className: module1.string,
    cx: module1.number,
    cy: module1.number,
    r: module1.number
};
export default Dot;
