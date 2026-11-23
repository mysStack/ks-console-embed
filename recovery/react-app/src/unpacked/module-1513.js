import module1162 from "unpacked/module-1162.js";
import module194 from "unpacked/module-194.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module869 from "unpacked/module-869.js";
import { PRESENTATION_ATTRIBUTES, filterEventAttributes, getPresentationAttributes } from "unpacked/module-810.js";
import module998 from "unpacked/module-998.js";
import { ifOverflowMatches } from "unpacked/module-1161.js";
import { isNumOrStr } from "unpacked/module-827.js";
import { LabeledScaleHelper, rectWithCoords } from "unpacked/module-1033.js";
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
function w(e, t) {
    if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
    }
}
function C(e, t) {
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
function O(e) {
    return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function E(e, t) {
    return (E = Object.setPrototypeOf || function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
const ReferenceLine = ((e)=>{
    function t() {
        w(this, t);
        return C(this, O(t).apply(this, arguments));
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
            E(e, t);
        }
    })(t, e);
    n = t;
    if (a = [
        {
            key: "getEndPoints",
            value: function(e, t, n, o) {
                const props = this.props;
                const i_viewBox = props.viewBox;
                const { x: x_1, y: y_1, width, height } = i_viewBox;
                const i_position = props.position;
                if (n) {
                    const p = this.props;
                    const h = p.y;
                    const v = p.yAxis.orientation;
                    const y_2 = e.y.apply(h, {
                        position: i_position
                    });
                    if (ifOverflowMatches(this.props, "discard") && !e.y.isInRange(y_2)) {
                        return null;
                    }
                    const y = [
                        {
                            x: x_1 + width,
                            y: y_2
                        },
                        {
                            x: x_1,
                            y: y_2
                        }
                    ];
                    if (v === "left") {
                        return y.reverse();
                    }
                    return y;
                }
                if (t) {
                    const m = this.props;
                    const b = m.x;
                    const x = m.xAxis.orientation;
                    const x_2 = e.x.apply(b, {
                        position: i_position
                    });
                    if (ifOverflowMatches(this.props, "discard") && !e.x.isInRange(x_2)) {
                        return null;
                    }
                    const _ = [
                        {
                            x: x_2,
                            y: y_1 + height
                        },
                        {
                            x: x_2,
                            y: y_1
                        }
                    ];
                    if (x === "top") {
                        return _.reverse();
                    }
                    return _;
                }
                if (o) {
                    const C = this.props.segment.map((t)=>e.apply(t, {
                            position: i_position
                        }));
                    if (ifOverflowMatches(this.props, "discard") && module1162(C, function(t) {
                        return !e.isInRange(t);
                    })) {
                        return null;
                    }
                    return C;
                }
                return null;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { x: x_1, y: y_1, segment, xAxis, yAxis, shape, className, alwaysShow, clipPathId } = props;
                warn(alwaysShow === undefined, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
                const w = LabeledScaleHelper.create({
                    x: xAxis.scale,
                    y: yAxis.scale
                });
                const _ = isNumOrStr(x_1);
                const C = isNumOrStr(y_1);
                const O = segment && segment.length === 2;
                const E = this.getEndPoints(w, _, C, O);
                if (!E) {
                    return null;
                }
                const S = ((e)=>{
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
                })(E);
                const A = S[0];
                const { x: x_2, y: y_2 } = A;
                const T = S[1];
                const { x: x_3, y: y_3 } = T;
                const z = {
                    clipPath: ifOverflowMatches(this.props, "hidden") ? `url(#${clipPathId})` : undefined,
                    ...getPresentationAttributes(this.props),
                    ...filterEventAttributes(this.props),
                    x1: x_2,
                    y1: y_2,
                    x2: x_3,
                    y2: y_3
                };
                return module553.default.createElement(module869, {
                    className: module3("recharts-reference-line", className)
                }, ((shape_1, t)=>{
                    if (module553.default.isValidElement(shape_1)) {
                        return module553.default.cloneElement(shape_1, t);
                    }
                    if (module194(shape_1)) {
                        return shape_1(t);
                    }
                    return module553.default.createElement("line", {
                        ...t,
                        className: "recharts-reference-line-line"
                    });
                })(shape, z), module998.renderCallByParent(this.props, rectWithCoords({
                    x1: x_2,
                    y1: y_2,
                    x2: x_3,
                    y2: y_3
                })));
            }
        }
    ]) {
        _(n.prototype, a);
    }
    return t;
})(module553.PureComponent);
ReferenceLine.displayName = "ReferenceLine";
ReferenceLine.propTypes = {
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
    x: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    y: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    segment: module1.arrayOf(module1.shape({
        x: module1.oneOfType([
            module1.number,
            module1.string
        ]),
        y: module1.oneOfType([
            module1.number,
            module1.string
        ])
    })),
    position: module1.oneOf([
        "middle",
        "start",
        "end"
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
    shape: module1.func
};
ReferenceLine.defaultProps = {
    isFront: false,
    ifOverflow: "discard",
    xAxisId: 0,
    yAxisId: 0,
    fill: "none",
    stroke: "#ccc",
    fillOpacity: 1,
    strokeWidth: 1,
    position: "middle"
};
export default ReferenceLine;
