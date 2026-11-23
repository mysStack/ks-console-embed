import module801 from "unpacked/module-801.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module2164 from "unpacked/module-2164.js";
import { isPercent } from "unpacked/module-827.js";
import { warn } from "unpacked/module-1086.js";
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
function p(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
    }
}
function h(e) {
    return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function v(e, t) {
    return (v = Object.setPrototypeOf || function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
const ResponsiveContainer = ((e)=>{
    function t(e) {
        let n;
        ((e, t)=>{
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        })(this, t);
        n = ((e, t)=>{
            if (!t || d(t) !== "object" && typeof t !== "function") {
                return ((e)=>{
                    if (e === undefined) {
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }
                    return e;
                })(e);
            }
            return t;
        })(this, h(t).call(this, e));
        n.updateDimensionsImmediate = function() {
            if (n.mounted) {
                const e = n.getContainerSize();
                if (e) {
                    const t = n.state;
                    const { containerWidth, containerHeight } = t;
                    const { containerWidth: containerWidth_1, containerHeight: containerHeight_1 } = e;
                    if (!(containerWidth_1 === containerWidth && containerHeight_1 === containerHeight)) {
                        n.setState({
                            containerWidth: containerWidth_1,
                            containerHeight: containerHeight_1
                        });
                    }
                }
            }
        };
        n.state = {
            containerWidth: -1,
            containerHeight: -1
        };
        n.handleResize = e.debounce > 0 ? module801(n.updateDimensionsImmediate, e.debounce) : n.updateDimensionsImmediate;
        return n;
    }
    let n;
    let i;
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
            v(e, t);
        }
    })(t, e);
    n = t;
    if (i = [
        {
            key: "componentDidMount",
            value: function() {
                this.mounted = true;
                const e = this.getContainerSize();
                if (e) {
                    this.setState(e);
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                this.mounted = false;
            }
        },
        {
            key: "getContainerSize",
            value: function() {
                if (this.container) {
                    return {
                        containerWidth: this.container.clientWidth,
                        containerHeight: this.container.clientHeight
                    };
                }
                return null;
            }
        },
        {
            key: "renderChart",
            value: function() {
                const state = this.state;
                const { containerWidth, containerHeight } = state;
                if (containerWidth < 0 || containerHeight < 0) {
                    return null;
                }
                const props = this.props;
                const { aspect, width, height, minWidth, minHeight, maxHeight, children } = props;
                warn(isPercent(width) || isPercent(height), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", width, height);
                warn(!aspect || aspect > 0, "The aspect(%s) must be greater than zero.", aspect);
                let width_1 = isPercent(width) ? containerWidth : width;
                let height_1 = isPercent(height) ? containerHeight : height;
                if (aspect && aspect > 0) {
                    if (width_1) {
                        height_1 = width_1 / aspect;
                    } else if (height_1) {
                        width_1 = height_1 * aspect;
                    }
                    if (maxHeight && height_1 > maxHeight) {
                        height_1 = maxHeight;
                    }
                }
                warn(width_1 > 0 || height_1 > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", width_1, height_1, width, height, minWidth, minHeight, aspect);
                return module553.default.cloneElement(children, {
                    width: width_1,
                    height: height_1
                });
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { minWidth, minHeight, width, height, maxHeight, id, className } = props;
                const style = {
                    width,
                    height,
                    minWidth,
                    minHeight,
                    maxHeight
                };
                return module553.default.createElement("div", {
                    id,
                    className: module3("recharts-responsive-container", className),
                    style,
                    ref: function(t) {
                        _this.container = t;
                    }
                }, this.renderChart(), module553.default.createElement(module2164, {
                    handleWidth: true,
                    handleHeight: true,
                    onResize: this.handleResize
                }));
            }
        }
    ]) {
        p(n.prototype, i);
    }
    return t;
})(module553.Component);
ResponsiveContainer.displayName = "ResponsiveContainer";
ResponsiveContainer.propTypes = {
    aspect: module1.number,
    width: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    height: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    minHeight: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    minWidth: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    maxHeight: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    children: module1.node.isRequired,
    debounce: module1.number,
    id: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    className: module1.oneOfType([
        module1.string,
        module1.number
    ])
};
ResponsiveContainer.defaultProps = {
    width: "100%",
    height: "100%",
    debounce: 0
};
export default ResponsiveContainer;
