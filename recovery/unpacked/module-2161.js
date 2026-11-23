import module194 from "./module-194.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module869 from "./module-869.js";
import module998 from "./module-998.js";
import { LabeledScaleHelper, rectWithPoints } from "./module-1033.js";
import { ifOverflowMatches } from "./module-1161.js";
import { isNumOrStr } from "./module-827.js";
import { warn } from "./module-1086.js";
import { PRESENTATION_ATTRIBUTES } from "./module-810.js";
import module1278 from "./module-1278.js";
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
const ReferenceArea = ((e)=>{
    function t() {
        _(this, t);
        return O(this, E(t).apply(this, arguments));
    }
    let n;
    let i;
    let p;
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
    p = [
        {
            key: "renderRect",
            value: function(e, t) {
                if (module553.default.isValidElement(e)) {
                    return module553.default.cloneElement(e, t);
                }
                if (module194(e)) {
                    return e(t);
                }
                return module553.default.createElement(module1278, {
                    ...t,
                    className: "recharts-reference-area-rect"
                });
            }
        }
    ];
    if (i = [
        {
            key: "getRect",
            value: function(e, t, n, r) {
                const props = this.props;
                const { x1, x2, y1, y2, xAxis, yAxis } = props;
                const p = LabeledScaleHelper.create({
                    x: xAxis.scale,
                    y: yAxis.scale
                });
                const h = {
                    x: e ? p.x.apply(x1) : p.x.rangeMin,
                    y: n ? p.y.apply(y1) : p.y.rangeMin
                };
                const v = {
                    x: t ? p.x.apply(x2) : p.x.rangeMax,
                    y: r ? p.y.apply(y2) : p.y.rangeMax
                };
                if (!ifOverflowMatches(this.props, "discard") || p.isInRange(h) && p.isInRange(v)) {
                    return rectWithPoints(h, v);
                }
                return null;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { x1, x2, y1, y2, className, alwaysShow, clipPathId } = props;
                warn(alwaysShow === undefined, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
                const v = isNumOrStr(x1);
                const g = isNumOrStr(x2);
                const y = isNumOrStr(y1);
                const m = isNumOrStr(y2);
                const shape = this.props.shape;
                if (!(v || g || y || m || shape)) {
                    return null;
                }
                const w = this.getRect(v, g, y, m);
                if (!w && !shape) {
                    return null;
                }
                const clipPath = ifOverflowMatches(this.props, "hidden") ? `url(#${clipPathId})` : undefined;
                return module553.default.createElement(module869, {
                    className: module3("recharts-reference-area", className)
                }, this.constructor.renderRect(shape, {
                    clipPath,
                    ...this.props,
                    ...w
                }), module998.renderCallByParent(this.props, w));
            }
        }
    ]) {
        C(n.prototype, i);
    }
    if (p) {
        C(n, p);
    }
    return t;
})(module553.PureComponent);
ReferenceArea.displayName = "ReferenceArea";
ReferenceArea.propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    viewBox: module1.shape({
        x: module1.number,
        y: module1.number,
        width: module1.number,
        height: module1.number
    }),
    xAxis: module1.object,
    yAxis: module1.object,
    isFront: module1.bool,
    alwaysShow: module1.bool,
    ifOverflow: module1.oneOf([
        "hidden",
        "visible",
        "discard",
        "extendDomain"
    ]),
    x1: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    x2: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    y1: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    y2: module1.oneOfType([
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
    ])
};
ReferenceArea.defaultProps = {
    isFront: false,
    ifOverflow: "discard",
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: "#ccc",
    fillOpacity: 0.5,
    stroke: "none",
    strokeWidth: 1
};
export default ReferenceArea;
