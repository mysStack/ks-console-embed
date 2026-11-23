import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module991 from "./module-991.js";
import { EVENT_ATTRIBUTES, PRESENTATION_ATTRIBUTES, filterEventAttributes, getPresentationAttributes } from "./module-810.js";
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
const b = (e, t, width, height, radius)=>{
    let i;
    const a = Math.min(Math.abs(width) / 2, Math.abs(height) / 2);
    const l = height >= 0 ? 1 : -1;
    const u = width >= 0 ? 1 : -1;
    const s = height >= 0 && width >= 0 || height < 0 && width < 0 ? 1 : 0;
    if (a > 0 && radius instanceof Array) {
        const c = [];
        for(let f = 0; f < 4; f++){
            c[f] = radius[f] > a ? a : radius[f];
        }
        i = `M${e},${t + l * c[0]}`;
        if (c[0] > 0) {
            i += `A ${c[0]},${c[0]},0,0,${s},${e + u * c[0]},${t}`;
        }
        i += `L ${e + width - u * c[1]},${t}`;
        if (c[1] > 0) {
            i += `A ${c[1]},${c[1]},0,0,${s},
        ${e + width},${t + l * c[1]}`;
        }
        i += `L ${e + width},${t + height - l * c[2]}`;
        if (c[2] > 0) {
            i += `A ${c[2]},${c[2]},0,0,${s},
        ${e + width - u * c[2]},${t + height}`;
        }
        i += `L ${e + u * c[3]},${t + height}`;
        if (c[3] > 0) {
            i += `A ${c[3]},${c[3]},0,0,${s},
        ${e},${t + height - l * c[3]}`;
        }
        i += "Z";
    } else if (a > 0 && radius === +radius && radius > 0) {
        const d = Math.min(a, radius);
        i = `M ${e},${t + l * d}
            A ${d},${d},0,0,${s},${e + u * d},${t}
            L ${e + width - u * d},${t}
            A ${d},${d},0,0,${s},${e + width},${t + l * d}
            L ${e + width},${t + height - l * d}
            A ${d},${d},0,0,${s},${e + width - u * d},${t + height}
            L ${e + u * d},${t + height}
            A ${d},${d},0,0,${s},${e},${t + height - l * d} Z`;
    } else {
        i = `M ${e},${t} h ${width} v ${height} h ${-width} Z`;
    }
    return i;
};
const Rectangle = ((e)=>{
    function t(...o) {
        let n;
        h(this, t);
        n = g(this, y(t).call(this, ...o));
        n.state = {
            totalLength: -1
        };
        return n;
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
            key: "componentDidMount",
            value: function() {
                if (this.node && this.node.getTotalLength) {
                    try {
                        const totalLength = this.node.getTotalLength();
                        if (totalLength) {
                            this.setState({
                                totalLength
                            });
                        }
                    } catch (e) {}
                }
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { x: x_1, y: y_1, width, height, radius, className } = props;
                const totalLength = this.state.totalLength;
                const props_1 = this.props;
                const { animationEasing, animationDuration, animationBegin, isAnimationActive, isUpdateAnimationActive } = props_1;
                if (x_1 !== +x_1 || y_1 !== +y_1 || width !== +width || height !== +height || width === 0 || height === 0) {
                    return null;
                }
                const className_1 = module3("recharts-rectangle", className);
                if (isUpdateAnimationActive) {
                    return module553.default.createElement(module991, {
                        canBegin: totalLength > 0,
                        from: {
                            width,
                            height,
                            x: x_1,
                            y: y_1
                        },
                        to: {
                            width,
                            height,
                            x: x_1,
                            y: y_1
                        },
                        duration: animationDuration,
                        animationEasing,
                        isActive: isUpdateAnimationActive
                    }, function({ width, height, x, y }) {
                        return module553.default.createElement(module991, {
                            canBegin: totalLength > 0,
                            from: `0px ${totalLength === -1 ? 1 : totalLength}px`,
                            to: `${totalLength}px 0px`,
                            attributeName: "strokeDasharray",
                            begin: animationBegin,
                            duration: animationDuration,
                            isActive: isAnimationActive,
                            easing: animationEasing
                        }, module553.default.createElement("path", {
                            ...getPresentationAttributes(_this.props),
                            ...filterEventAttributes(_this.props),
                            className: className_1,
                            d: b(x, y, width, height, radius),
                            ref: function(t) {
                                _this.node = t;
                            }
                        }));
                    });
                }
                return module553.default.createElement("path", {
                    ...getPresentationAttributes(this.props),
                    ...filterEventAttributes(this.props),
                    className: className_1,
                    d: b(x_1, y_1, width, height, radius)
                });
            }
        }
    ]) {
        v(n.prototype, o);
    }
    return t;
})(module553.PureComponent);
Rectangle.displayName = "Rectangle";
Rectangle.propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    ...EVENT_ATTRIBUTES,
    className: module1.string,
    x: module1.number,
    y: module1.number,
    width: module1.number,
    height: module1.number,
    radius: module1.oneOfType([
        module1.number,
        module1.array
    ]),
    isAnimationActive: module1.bool,
    isUpdateAnimationActive: module1.bool,
    animationBegin: module1.number,
    animationDuration: module1.number,
    animationEasing: module1.oneOf([
        "ease",
        "ease-in",
        "ease-out",
        "ease-in-out",
        "linear"
    ])
};
Rectangle.defaultProps = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    radius: 0,
    isAnimationActive: false,
    isUpdateAnimationActive: false,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease"
};
export default Rectangle;
