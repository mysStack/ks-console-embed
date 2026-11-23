import module194 from "unpacked/module-194.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module869 from "unpacked/module-869.js";
import module947 from "unpacked/module-947.js";
import { EVENT_ATTRIBUTES, PRESENTATION_ATTRIBUTES, filterEventAttributes, getPresentationAttributes } from "unpacked/module-810.js";
import module998 from "unpacked/module-998.js";
import { isNumOrStr } from "unpacked/module-827.js";
import { ifOverflowMatches } from "unpacked/module-1161.js";
import { LabeledScaleHelper } from "unpacked/module-1033.js";
import { warn } from "unpacked/module-1086.js";
function v() {
    if (typeof WeakMap !== "function") {
        return null;
    }
    const weakMap = new WeakMap;
    v = function() {
        return weakMap;
    };
    return weakMap;
}
function y(e) {
    return (y = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
function _(e, t) {
    if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function C(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
    }
}
function O(e, t) {
    if (!t || y(t) !== "object" && typeof t !== "function") {
        return ((e)=>{
            if (e === undefined) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return e;
        })(e);
    }
    return t;
}
function E(e) {
    return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function M(e, t) {
    return (M = Object.setPrototypeOf || function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
const ReferenceDot = ((e)=>{
    function t() {
        _(this, t);
        return O(this, E(t).apply(this, arguments));
    }
    let n;
    let i;
    let v;
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
            M(e, t);
        }
    })(t, e);
    n = t;
    v = [
        {
            key: "renderDot",
            value: function(e, t) {
                if (module553.default.isValidElement(e)) {
                    return module553.default.cloneElement(e, t);
                }
                if (module194(e)) {
                    return e(t);
                }
                return module553.default.createElement(module947, {
                    ...t,
                    cx: t.cx,
                    cy: t.cy,
                    className: "recharts-reference-dot-dot"
                });
            }
        }
    ];
    if (i = [
        {
            key: "getCoordinate",
            value: function() {
                const props = this.props;
                const { x, y, xAxis, yAxis } = props;
                const i = LabeledScaleHelper.create({
                    x: xAxis.scale,
                    y: yAxis.scale
                });
                const a = i.apply({
                    x,
                    y
                }, {
                    bandAware: true
                });
                if (ifOverflowMatches(this.props, "discard") && !i.isInRange(a)) {
                    return null;
                }
                return a;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { x, y: y_1, r, alwaysShow, clipPathId } = props;
                const p = isNumOrStr(x);
                const v = isNumOrStr(y_1);
                warn(alwaysShow === undefined, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
                if (!p || !v) {
                    return null;
                }
                const g = this.getCoordinate();
                if (!g) {
                    return null;
                }
                const { x: x_1, y: y_2 } = g;
                const props_1 = this.props;
                const { shape, className } = props_1;
                const C = {
                    clipPath: ifOverflowMatches(this.props, "hidden") ? `url(#${clipPathId})` : undefined,
                    ...getPresentationAttributes(this.props),
                    ...filterEventAttributes(this.props),
                    cx: x_1,
                    cy: y_2
                };
                return module553.default.createElement(module869, {
                    className: module3("recharts-reference-dot", className)
                }, this.constructor.renderDot(shape, C), module998.renderCallByParent(this.props, {
                    x: x_1 - r,
                    y: y_2 - r,
                    width: 2 * r,
                    height: 2 * r
                }));
            }
        }
    ]) {
        C(n.prototype, i);
    }
    if (v) {
        C(n, v);
    }
    return t;
})(module553.PureComponent);
ReferenceDot.displayName = "ReferenceDot";
ReferenceDot.propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    ...EVENT_ATTRIBUTES,
    r: module1.number,
    xAxis: module1.shape({
        scale: module1.func
    }),
    yAxis: module1.shape({
        scale: module1.func
    }),
    isFront: module1.bool,
    alwaysShow: module1.bool,
    ifOverflow: module1.oneOf([
        "hidden",
        "visible",
        "discard",
        "extendDomain"
    ]),
    x: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    y: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    className: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    yAxisId: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    xAxisId: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    shape: module1.oneOfType([
        module1.func,
        module1.element
    ]),
    clipPathId: module1.string
};
ReferenceDot.defaultProps = {
    isFront: false,
    ifOverflow: "discard",
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: "#fff",
    stroke: "#ccc",
    fillOpacity: 1,
    strokeWidth: 1
};
export default ReferenceDot;
