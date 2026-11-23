import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import { symbol, symbolCircle, symbolCross, symbolDiamond, symbolSquare, symbolStar, symbolTriangle, symbolWye } from "./module-1258.js";
import module3 from "./module-3.js";
import { PRESENTATION_ATTRIBUTES, filterEventAttributes, getPresentationAttributes } from "./module-810.js";
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
const b = {
    symbolCircle,
    symbolCross,
    symbolDiamond,
    symbolSquare,
    symbolStar,
    symbolTriangle,
    symbolWye
};
const x = Math.PI / 180;
const Symbols = ((e)=>{
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
            key: "getPath",
            value: function() {
                const props = this.props;
                const { size, sizeType, type } = props;
                const o = ((type_1)=>{
                    const t = `symbol${type_1.slice(0, 1).toUpperCase()}${type_1.slice(1)}`;
                    return b[t] || symbolCircle;
                })(type);
                return symbol().type(o).size(((size_1, sizeType_1, type_1)=>{
                    if (sizeType_1 === "area") {
                        return size_1;
                    }
                    switch(type_1){
                        case "cross":
                            return 5 * size_1 * size_1 / 9;
                        case "diamond":
                            return 0.5 * size_1 * size_1 / Math.sqrt(3);
                        case "square":
                            return size_1 * size_1;
                        case "star":
                            const r = 18 * x;
                            return 1.25 * size_1 * size_1 * (Math.tan(r) - Math.tan(2 * r) * Math.tan(r) ** 2);
                        case "triangle":
                            return Math.sqrt(3) * size_1 * size_1 / 4;
                        case "wye":
                            return (21 - 10 * Math.sqrt(3)) * size_1 * size_1 / 8;
                        default:
                            return Math.PI * size_1 * size_1 / 4;
                    }
                })(size, sizeType, type))();
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, cx, cy, size } = props;
                if (cx === +cx && cy === +cy && size === +size) {
                    return module553.default.createElement("path", {
                        ...getPresentationAttributes(this.props),
                        ...filterEventAttributes(this.props),
                        className: module3("recharts-symbols", className),
                        transform: `translate(${cx}, ${cy})`,
                        d: this.getPath()
                    });
                }
                return null;
            }
        }
    ]) {
        v(n.prototype, o);
    }
    return t;
})(module553.PureComponent);
Symbols.displayName = "Symbols";
Symbols.propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    className: module1.string,
    type: module1.oneOf([
        "circle",
        "cross",
        "diamond",
        "square",
        "star",
        "triangle",
        "wye"
    ]),
    cx: module1.number,
    cy: module1.number,
    size: module1.number,
    sizeType: module1.oneOf([
        "area",
        "diameter"
    ])
};
Symbols.defaultProps = {
    type: "circle",
    size: 64,
    sizeType: "area"
};
export default Symbols;
