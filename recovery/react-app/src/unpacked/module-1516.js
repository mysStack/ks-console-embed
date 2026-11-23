import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import { PRESENTATION_ATTRIBUTES, filterEventAttributes, getPresentationAttributes } from "unpacked/module-810.js";
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
function s(e, t) {
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
function c(e, t, n) {
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
function p(e, t) {
    if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function h(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
    }
}
function v(e, t) {
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
function g(e) {
    return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function y(e, t) {
    return (y = Object.setPrototypeOf || function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
const m = (points)=>points.reduce((acc, point)=>{
        if (point.x === +point.x && point.y === +point.y) {
            acc.push([
                point.x,
                point.y
            ]);
        }
        return acc;
    }, []).join(" ");
const Polygon = ((e)=>{
    function t() {
        p(this, t);
        return v(this, g(t).apply(this, arguments));
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
            y(e, t);
        }
    })(t, e);
    n = t;
    if (o = [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { points, className } = props;
                if (!points || !points.length) {
                    return null;
                }
                const className_1 = module3("recharts-polygon", className);
                return module553.default.createElement("polygon", {
                    ...getPresentationAttributes(this.props),
                    ...filterEventAttributes(this.props),
                    className: className_1,
                    points: m(points)
                });
            }
        }
    ]) {
        h(n.prototype, o);
    }
    return t;
})(module553.PureComponent);
Polygon.displayName = "Polygon";
Polygon.propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    className: module1.string,
    points: module1.arrayOf(module1.shape({
        x: module1.number,
        y: module1.number
    }))
};
export default Polygon;
