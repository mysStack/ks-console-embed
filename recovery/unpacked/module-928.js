import module194 from "./module-194.js";
import module862 from "./module-862.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module2148 from "./module-2148.js";
import { isNumber } from "./module-827.js";
import { LEGEND_TYPES } from "./module-810.js";
function c() {
    if (typeof WeakMap !== "function") {
        return null;
    }
    const weakMap = new WeakMap;
    c = function() {
        return weakMap;
    };
    return weakMap;
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
function g(e, t) {
    if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function y(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
    }
}
function m(e, t) {
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
function b(e) {
    return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function x(e, t) {
    return (x = Object.setPrototypeOf || function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
const w = function(e) {
    return e.value;
};
const _ = (paylodUniqBy, payload)=>{
    if (paylodUniqBy === true) {
        return module862(payload, w);
    }
    if (module194(paylodUniqBy)) {
        return module862(payload, paylodUniqBy);
    }
    return payload;
};
const C = LEGEND_TYPES.filter((e)=>e !== "none");
const Legend = ((e)=>{
    function t(...o) {
        let n;
        g(this, t);
        n = m(this, b(t).call(this, ...o));
        n.state = {
            boxWidth: -1,
            boxHeight: -1
        };
        return n;
    }
    let n;
    let o;
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
            x(e, t);
        }
    })(t, e);
    n = t;
    a = [
        {
            key: "getWithHeight",
            value: function(e, t) {
                const layout = e.props.layout;
                if (layout === "vertical" && isNumber(e.props.height)) {
                    return {
                        height: e.props.height
                    };
                }
                if (layout === "horizontal") {
                    return {
                        width: e.props.width || t
                    };
                }
                return null;
            }
        }
    ];
    if (o = [
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
            key: "getBBox",
            value: function() {
                const state = this.state;
                const { boxWidth, boxHeight } = state;
                if (boxWidth >= 0 && boxHeight >= 0) {
                    return {
                        width: boxWidth,
                        height: boxHeight
                    };
                }
                return null;
            }
        },
        {
            key: "getDefaultPosition",
            value: function(e) {
                let t;
                let n;
                const props = this.props;
                const { layout, align, verticalAlign, margin, chartWidth, chartHeight } = props;
                if (!(e && (e.left !== undefined && e.left !== null || e.right !== undefined && e.right !== null))) {
                    t = align === "center" && layout === "vertical" ? {
                        left: ((chartWidth || 0) - (this.getBBox() || {
                            width: 0
                        }).width) / 2
                    } : align === "right" ? {
                        right: margin && margin.right || 0
                    } : {
                        left: margin && margin.left || 0
                    };
                }
                if (!(e && (e.top !== undefined && e.top !== null || e.bottom !== undefined && e.bottom !== null))) {
                    n = verticalAlign === "middle" ? {
                        top: ((chartHeight || 0) - (this.getBBox() || {
                            height: 0
                        }).height) / 2
                    } : verticalAlign === "bottom" ? {
                        bottom: margin && margin.bottom || 0
                    } : {
                        top: margin && margin.top || 0
                    };
                }
                return {
                    ...t,
                    ...n
                };
            }
        },
        {
            key: "updateBBox",
            value: function() {
                const state = this.state;
                const { boxWidth, boxHeight } = state;
                const onBBoxUpdate = this.props.onBBoxUpdate;
                if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                    const o = this.wrapperNode.getBoundingClientRect();
                    if (Math.abs(o.width - boxWidth) > 1 || Math.abs(o.height - boxHeight) > 1) {
                        this.setState({
                            boxWidth: o.width,
                            boxHeight: o.height
                        }, function() {
                            if (onBBoxUpdate) {
                                onBBoxUpdate(o);
                            }
                        });
                    }
                } else {
                    if (!(boxWidth === -1 && boxHeight === -1)) {
                        this.setState({
                            boxWidth: -1,
                            boxHeight: -1
                        }, function() {
                            if (onBBoxUpdate) {
                                onBBoxUpdate(null);
                            }
                        });
                    }
                }
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { content, width, height, wrapperStyle, paylodUniqBy, payload } = props;
                const style = {
                    position: "absolute",
                    width: width || "auto",
                    height: height || "auto",
                    ...this.getDefaultPosition(wrapperStyle),
                    ...wrapperStyle
                };
                return module553.default.createElement("div", {
                    className: "recharts-legend-wrapper",
                    style,
                    ref: function(t) {
                        _this.wrapperNode = t;
                    }
                }, ((content_1, t)=>{
                    if (module553.default.isValidElement(content_1)) {
                        return module553.default.cloneElement(content_1, t);
                    }
                    if (module194(content_1)) {
                        return content_1(t);
                    }
                    return module553.default.createElement(module2148, t);
                })(content, {
                    ...this.props,
                    payload: _(paylodUniqBy, payload)
                }));
            }
        }
    ]) {
        y(n.prototype, o);
    }
    if (a) {
        y(n, a);
    }
    return t;
})(module553.PureComponent);
Legend.displayName = "Legend";
Legend.propTypes = {
    content: module1.oneOfType([
        module1.element,
        module1.func
    ]),
    wrapperStyle: module1.object,
    chartWidth: module1.number,
    chartHeight: module1.number,
    width: module1.number,
    height: module1.number,
    iconSize: module1.number,
    iconType: module1.oneOf(C),
    layout: module1.oneOf([
        "horizontal",
        "vertical"
    ]),
    align: module1.oneOf([
        "center",
        "left",
        "right"
    ]),
    verticalAlign: module1.oneOf([
        "top",
        "bottom",
        "middle"
    ]),
    margin: module1.shape({
        top: module1.number,
        left: module1.number,
        bottom: module1.number,
        right: module1.number
    }),
    payload: module1.arrayOf(module1.shape({
        value: module1.any,
        id: module1.any,
        type: module1.oneOf(LEGEND_TYPES)
    })),
    paylodUniqBy: module1.oneOfType([
        module1.func,
        module1.bool
    ]),
    formatter: module1.func,
    onMouseEnter: module1.func,
    onMouseLeave: module1.func,
    onClick: module1.func,
    onBBoxUpdate: module1.func
};
Legend.defaultProps = {
    iconSize: 14,
    layout: "horizontal",
    align: "center",
    verticalAlign: "bottom"
};
export default Legend;
