import module844 from "./module-844.js";
import module194 from "./module-194.js";
import module862 from "./module-862.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import { translateStyle } from "./module-991.js";
import module3 from "./module-3.js";
import module2149 from "./module-2149.js";
import { TOOLTIP_TYPES, isSsr } from "./module-810.js";
import { isNumber } from "./module-827.js";
function p() {
    if (typeof WeakMap !== "function") {
        return null;
    }
    const weakMap = new WeakMap;
    p = function() {
        return weakMap;
    };
    return weakMap;
}
function v(e) {
    return (v = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
function m(e, t, n) {
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
function b(e, t) {
    if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function x(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
    }
}
function w(e, t) {
    if (!t || v(t) !== "object" && typeof t !== "function") {
        return ((e)=>{
            if (e === undefined) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return e;
        })(e);
    }
    return t;
}
function _(e) {
    return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function C(e, t) {
    return (C = Object.setPrototypeOf || function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
const O = "recharts-tooltip-wrapper";
const E = function(e) {
    return e.dataKey;
};
const M = {
    allowEscapeViewBox: module1.shape({
        x: module1.boolean,
        y: module1.boolean
    }),
    content: module1.oneOfType([
        module1.element,
        module1.func
    ]),
    viewBox: module1.shape({
        x: module1.number,
        y: module1.number,
        width: module1.number,
        height: module1.number
    }),
    active: module1.bool,
    separator: module1.string,
    formatter: module1.func,
    offset: module1.number,
    itemStyle: module1.object,
    labelStyle: module1.object,
    wrapperStyle: module1.object,
    contentStyle: module1.object,
    cursor: module1.oneOfType([
        module1.bool,
        module1.element,
        module1.object
    ]),
    coordinate: module1.shape({
        x: module1.number,
        y: module1.number
    }),
    position: module1.shape({
        x: module1.number,
        y: module1.number
    }),
    label: module1.any,
    payload: module1.arrayOf(module1.shape({
        name: module1.any,
        value: module1.oneOfType([
            module1.number,
            module1.string,
            module1.array
        ]),
        unit: module1.any,
        type: module1.oneOf(TOOLTIP_TYPES)
    })),
    paylodUniqBy: module1.oneOfType([
        module1.func,
        module1.bool
    ]),
    isAnimationActive: module1.bool,
    animationDuration: module1.number,
    animationEasing: module1.oneOf([
        "ease",
        "ease-in",
        "ease-out",
        "ease-in-out",
        "linear"
    ]),
    itemSorter: module1.func,
    filterNull: module1.bool,
    useTranslate3d: module1.bool
};
const S = {
    active: false,
    allowEscapeViewBox: {
        x: false,
        y: false
    },
    offset: 10,
    viewBox: {
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 0
    },
    coordinate: {
        x: 0,
        y: 0
    },
    cursorStyle: {},
    separator: " : ",
    wrapperStyle: {},
    contentStyle: {},
    itemStyle: {},
    labelStyle: {},
    cursor: true,
    isAnimationActive: !isSsr(),
    animationEasing: "ease",
    animationDuration: 400,
    filterNull: true,
    useTranslate3d: false
};
const Tooltip = ((e)=>{
    function t(...o_1) {
        let n;
        b(this, t);
        n = w(this, _(t).call(this, ...o_1));
        n.state = {
            boxWidth: -1,
            boxHeight: -1
        };
        n.getTranslate = function({ key, tooltipDimension, viewBoxDimension }) {
            const n_props = n.props;
            const { allowEscapeViewBox, coordinate, offset, position, viewBox } = n_props;
            if (position && isNumber(position[key])) {
                return position[key];
            }
            const f = coordinate[key] - tooltipDimension - offset;
            const p = coordinate[key] + offset;
            if (allowEscapeViewBox[key]) {
                return p;
            }
            if (coordinate[key] + tooltipDimension + offset > viewBox[key] + viewBoxDimension) {
                return Math.max(f, viewBox[key]);
            }
            return Math.max(p, viewBox[key]);
        };
        return n;
    }
    let n;
    let l;
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
            C(e, t);
        }
    })(t, e);
    n = t;
    if (l = [
        {
            key: "componentDidMount",
            value: function() {
                this.updateBBox();
            }
        },
        {
            key: "componentDidUpdate",
            value: function() {
                this.updateBBox();
            }
        },
        {
            key: "updateBBox",
            value: function() {
                const state = this.state;
                const { boxWidth, boxHeight } = state;
                if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                    const r = this.wrapperNode.getBoundingClientRect();
                    if (Math.abs(r.width - boxWidth) > 1 || Math.abs(r.height - boxHeight) > 1) {
                        this.setState({
                            boxWidth: r.width,
                            boxHeight: r.height
                        });
                    }
                } else {
                    if (!(boxWidth === -1 && boxHeight === -1)) {
                        this.setState({
                            boxWidth: -1,
                            boxHeight: -1
                        });
                    }
                }
            }
        },
        {
            key: "render",
            value: function() {
                let e;
                let t;
                let n;
                const _this = this;
                const props = this.props;
                const { payload, isAnimationActive, animationDuration, animationEasing, filterNull } = props;
                const payload_1 = ((e, t)=>{
                    if (e === true) {
                        return module862(t, E);
                    }
                    if (module194(e)) {
                        return module862(t, e);
                    }
                    return t;
                })(props.paylodUniqBy, filterNull && payload && payload.length ? payload.filter((e)=>!module844(e.value)) : payload);
                const w = payload_1 && payload_1.length;
                const props_1 = this.props;
                const { content, viewBox, coordinate, position, active } = props_1;
                let style = {
                    pointerEvents: "none",
                    visibility: active && w ? "visible" : "hidden",
                    position: "absolute",
                    top: 0,
                    ...props_1.wrapperStyle
                };
                if (position && isNumber(position.x) && isNumber(position.y)) {
                    t = position.x;
                    n = position.y;
                } else {
                    const T = this.state;
                    const { boxWidth, boxHeight } = T;
                    if (boxWidth > 0 && boxHeight > 0 && coordinate) {
                        t = this.getTranslate({
                            key: "x",
                            tooltipDimension: boxWidth,
                            viewBoxDimension: viewBox.width
                        });
                        n = this.getTranslate({
                            key: "y",
                            tooltipDimension: boxHeight,
                            viewBoxDimension: viewBox.height
                        });
                    } else {
                        style.visibility = "hidden";
                    }
                }
                style = {
                    ...translateStyle({
                        transform: this.props.useTranslate3d ? `translate3d(${t}px, ${n}px, 0)` : `translate(${t}px, ${n}px)`
                    }),
                    ...style
                };
                if (isAnimationActive && active) {
                    style = {
                        ...translateStyle({
                            transition: `transform ${animationDuration}ms ${animationEasing}`
                        }),
                        ...style
                    };
                }
                const className = module3(O, (m(e = {}, `${O}-right`, isNumber(t) && coordinate && isNumber(coordinate.x) && t >= coordinate.x), m(e, `${O}-left`, isNumber(t) && coordinate && isNumber(coordinate.x) && t < coordinate.x), m(e, `${O}-bottom`, isNumber(n) && coordinate && isNumber(coordinate.y) && n >= coordinate.y), m(e, `${O}-top`, isNumber(n) && coordinate && isNumber(coordinate.y) && n < coordinate.y), e));
                return module553.default.createElement("div", {
                    className,
                    style,
                    ref: function(e) {
                        _this.wrapperNode = e;
                    }
                }, ((content_1, t)=>{
                    if (module553.default.isValidElement(content_1)) {
                        return module553.default.cloneElement(content_1, t);
                    }
                    if (module194(content_1)) {
                        return content_1(t);
                    }
                    return module553.default.createElement(module2149, t);
                })(content, {
                    ...this.props,
                    payload: payload_1
                }));
            }
        }
    ]) {
        x(n.prototype, l);
    }
    return t;
})(module553.PureComponent);
Tooltip.displayName = "Tooltip";
Tooltip.propTypes = M;
Tooltip.defaultProps = S;
export default Tooltip;
