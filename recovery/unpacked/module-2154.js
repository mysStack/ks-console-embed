import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import { isNumber } from "./module-827.js";
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes } from "./module-810.js";
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
function c(e, t) {
    const n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        n.push.apply(n, r);
    }
    return n;
}
function f(e, t, n) {
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
function d(e) {
    return (d = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
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
    if (!t || d(t) !== "object" && typeof t !== "function") {
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
const Cross = ((e)=>{
    function t() {
        h(this, t);
        return g(this, y(t).apply(this, arguments));
    }
    let n;
    let o;
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
            m(e, t);
        }
    })(t, e);
    n = t;
    u = [
        {
            key: "getPath",
            value: function(e, t, n, r, o, i) {
                return `M${e},${o}v${r}M${i},${t}h${n}`;
            }
        }
    ];
    if (o = [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { x, y, width, height, top, left, className } = props;
                if (isNumber(x) && isNumber(y) && isNumber(width) && isNumber(height) && isNumber(top) && isNumber(left)) {
                    return module553.default.createElement("path", {
                        ...getPresentationAttributes(this.props),
                        className: module3("recharts-cross", className),
                        d: this.constructor.getPath(x, y, width, height, top, left)
                    });
                }
                return null;
            }
        }
    ]) {
        v(n.prototype, o);
    }
    if (u) {
        v(n, u);
    }
    return t;
})(module553.PureComponent);
Cross.displayName = "Cross";
Cross.propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    x: module1.number,
    y: module1.number,
    width: module1.number,
    height: module1.number,
    top: module1.number,
    left: module1.number,
    className: module1.string
};
Cross.defaultProps = {
    x: 0,
    y: 0,
    top: 0,
    left: 0,
    width: 0,
    height: 0
};
export default Cross;
