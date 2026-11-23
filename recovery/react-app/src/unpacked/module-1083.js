import module60 from "unpacked/module-60.js";
import module194 from "unpacked/module-194.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import { area, curveBasis, curveBasisClosed, curveBasisOpen, curveLinear, curveLinearClosed, curveMonotoneX, curveMonotoneY, curveNatural, curveStep, curveStepAfter, curveStepBefore, line } from "unpacked/module-1258.js";
import module3 from "unpacked/module-3.js";
import { PRESENTATION_ATTRIBUTES, filterEventAttributes, getPresentationAttributes } from "unpacked/module-810.js";
import { isNumber } from "unpacked/module-827.js";
function f() {
    if (typeof WeakMap !== "function") {
        return null;
    }
    const weakMap = new WeakMap;
    f = function() {
        return weakMap;
    };
    return weakMap;
}
function p(e) {
    return (p = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
function m(e, t) {
    if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function b(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
    }
}
function x(e, t) {
    if (!t || p(t) !== "object" && typeof t !== "function") {
        return ((e)=>{
            if (e === undefined) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return e;
        })(e);
    }
    return t;
}
function w(e) {
    return (w = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function _(e, t) {
    return (_ = Object.setPrototypeOf || function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
const C = {
    curveBasisClosed,
    curveBasisOpen,
    curveBasis,
    curveLinearClosed,
    curveLinear,
    curveMonotoneX,
    curveMonotoneY,
    curveNatural,
    curveStep,
    curveStepAfter,
    curveStepBefore
};
const O = function(e) {
    return e.x === +e.x && e.y === +e.y;
};
const E = function(e) {
    return e.x;
};
const M = function(e) {
    return e.y;
};
const Curve = ((e)=>{
    function t() {
        m(this, t);
        return x(this, w(t).apply(this, arguments));
    }
    let n;
    let a;
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
            _(e, t);
        }
    })(t, e);
    n = t;
    if (a = [
        {
            key: "getPath",
            value: function() {
                let e;
                const props = this.props;
                const { type, points, baseLine, layout, connectNulls } = props;
                const f = ((type_1, layout_1)=>{
                    if (module194(type_1)) {
                        return type_1;
                    }
                    const n = `curve${type_1.slice(0, 1).toUpperCase()}${type_1.slice(1)}`;
                    if (n === "curveMonotone" && layout_1) {
                        return C[`${n}${layout_1 === "vertical" ? "Y" : "X"}`];
                    }
                    return C[n] || curveLinear;
                })(type, layout);
                const d = connectNulls ? points.filter((e)=>O(e)) : points;
                if (module60(baseLine)) {
                    const p = connectNulls ? baseLine.filter((e)=>O(e)) : baseLine;
                    const h = d.map((e, t)=>({
                            ...e,
                            base: p[t]
                        }));
                    (e = layout === "vertical" ? area().y(M).x1(E).x0(function(e) {
                        return e.base.x;
                    }) : area().x(E).y1(M).y0(function(e) {
                        return e.base.y;
                    })).defined(O).curve(f);
                    return e(h);
                }
                (e = layout === "vertical" && isNumber(baseLine) ? area().y(M).x1(E).x0(baseLine) : isNumber(baseLine) ? area().x(E).y1(M).y0(baseLine) : line().x(E).y(M)).defined(O).curve(f);
                return e(d);
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, points, path, pathRef } = props;
                if (!(points && points.length || path)) {
                    return null;
                }
                const d = points && points.length ? this.getPath() : path;
                return module553.default.createElement("path", {
                    ...getPresentationAttributes(this.props),
                    ...filterEventAttributes(this.props, null, true),
                    className: module3("recharts-curve", className),
                    d,
                    ref: pathRef
                });
            }
        }
    ]) {
        b(n.prototype, a);
    }
    return t;
})(module553.PureComponent);
Curve.displayName = "Curve";
Curve.propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    className: module1.string,
    type: module1.oneOfType([
        module1.oneOf([
            "basis",
            "basisClosed",
            "basisOpen",
            "linear",
            "linearClosed",
            "natural",
            "monotoneX",
            "monotoneY",
            "monotone",
            "step",
            "stepBefore",
            "stepAfter"
        ]),
        module1.func
    ]),
    layout: module1.oneOf([
        "horizontal",
        "vertical"
    ]),
    baseLine: module1.oneOfType([
        module1.number,
        module1.array
    ]),
    points: module1.arrayOf(module1.object),
    connectNulls: module1.bool,
    path: module1.string,
    pathRef: module1.func
};
Curve.defaultProps = {
    type: "linear",
    points: [],
    connectNulls: false
};
export default Curve;
