import { PureComponent } from "./module-553.js";
import module1 from "./module-1.js";
function a(e) {
    return (a = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
function l(e, t) {
    if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function u(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
    }
}
function s(e, t) {
    if (!t || a(t) !== "object" && typeof t !== "function") {
        return ((e)=>{
            if (e === undefined) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return e;
        })(e);
    }
    return t;
}
function c(e) {
    return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function f(e, t) {
    return (f = Object.setPrototypeOf || function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
const YAxis = ((PureComponent_1)=>{
    function t() {
        l(this, t);
        return s(this, c(t).apply(this, arguments));
    }
    let n;
    let r;
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
            f(e, t);
        }
    })(t, PureComponent_1);
    n = t;
    if (r = [
        {
            key: "render",
            value: function() {
                return null;
            }
        }
    ]) {
        u(n.prototype, r);
    }
    return t;
})(PureComponent);
YAxis.displayName = "YAxis";
YAxis.propTypes = {
    allowDecimals: module1.bool,
    allowDuplicatedCategory: module1.bool,
    hide: module1.bool,
    name: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    unit: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    yAxisId: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    domain: module1.arrayOf(module1.oneOfType([
        module1.string,
        module1.number,
        module1.func,
        module1.oneOf([
            "auto",
            "dataMin",
            "dataMax"
        ])
    ])),
    dataKey: module1.oneOfType([
        module1.string,
        module1.number,
        module1.func
    ]),
    ticks: module1.array,
    tickCount: module1.number,
    tickFormatter: module1.func,
    width: module1.number,
    height: module1.number,
    mirror: module1.bool,
    orientation: module1.oneOf([
        "left",
        "right"
    ]),
    type: module1.oneOf([
        "number",
        "category"
    ]),
    padding: module1.shape({
        top: module1.number,
        bottom: module1.number
    }),
    allowDataOverflow: module1.bool,
    scale: module1.oneOfType([
        module1.oneOf([
            "auto",
            "linear",
            "pow",
            "sqrt",
            "log",
            "identity",
            "time",
            "band",
            "point",
            "ordinal",
            "quantile",
            "quantize",
            "utc",
            "sequential",
            "threshold"
        ]),
        module1.func
    ]),
    tick: module1.oneOfType([
        module1.bool,
        module1.func,
        module1.object,
        module1.element
    ]),
    axisLine: module1.oneOfType([
        module1.bool,
        module1.object
    ]),
    tickLine: module1.oneOfType([
        module1.bool,
        module1.object
    ]),
    minTickGap: module1.number,
    tickSize: module1.number,
    interval: module1.oneOfType([
        module1.number,
        module1.oneOf([
            "preserveStart",
            "preserveEnd",
            "preserveStartEnd"
        ])
    ]),
    reversed: module1.bool
};
YAxis.defaultProps = {
    allowDuplicatedCategory: true,
    allowDecimals: true,
    hide: false,
    orientation: "left",
    width: 60,
    height: 0,
    mirror: false,
    yAxisId: 0,
    tickCount: 5,
    type: "number",
    domain: [
        0,
        "auto"
    ],
    padding: {
        top: 0,
        bottom: 0
    },
    allowDataOverflow: false,
    scale: "auto",
    reversed: false
};
export default YAxis;
