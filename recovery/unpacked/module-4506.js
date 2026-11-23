import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import { polarToCartesian } from "./module-927.js";
import { PRESENTATION_ATTRIBUTES, getPresentationAttributes } from "./module-810.js";
function u() {
    if (typeof WeakMap !== "function") {
        return null;
    }
    const weakMap = new WeakMap;
    u = function() {
        return weakMap;
    };
    return weakMap;
}
function s(e) {
    return (s = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
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
    if (!t || s(t) !== "object" && typeof t !== "function") {
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
const PolarGrid = ((e)=>{
    function t() {
        h(this, t);
        return g(this, y(t).apply(this, arguments));
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
            m(e, t);
        }
    })(t, e);
    n = t;
    if (r = [
        {
            key: "getPolygonPath",
            value: function(e) {
                const props = this.props;
                const { cx, cy, polarAngles } = props;
                let i = "";
                polarAngles.forEach((t, o)=>{
                    const l = polarToCartesian(cx, cy, e, t);
                    i += o ? `L ${l.x},${l.y}` : `M ${l.x},${l.y}`;
                });
                return i += "Z";
            }
        },
        {
            key: "renderPolarAngles",
            value: function() {
                const props = this.props;
                const { cx, cy, innerRadius, outerRadius, polarAngles } = props;
                if (!polarAngles || !polarAngles.length) {
                    return null;
                }
                const s = {
                    stroke: "#ccc",
                    ...getPresentationAttributes(this.props)
                };
                return module553.default.createElement("g", {
                    className: "recharts-polar-grid-angle"
                }, polarAngles.map((e, l)=>{
                    const u = polarToCartesian(cx, cy, innerRadius, e);
                    const f = polarToCartesian(cx, cy, outerRadius, e);
                    return module553.default.createElement("line", {
                        ...s,
                        key: `line-${l}`,
                        x1: u.x,
                        y1: u.y,
                        x2: f.x,
                        y2: f.y
                    });
                }));
            }
        },
        {
            key: "renderConcentricCircle",
            value: function(r_1, t, n) {
                const props = this.props;
                const { cx, cy } = props;
                const u = {
                    stroke: "#ccc",
                    ...getPresentationAttributes(this.props),
                    fill: "none",
                    ...n
                };
                return module553.default.createElement("circle", {
                    ...u,
                    className: "recharts-polar-grid-concentric-circle",
                    key: `circle-${t}`,
                    cx,
                    cy,
                    r: r_1
                });
            }
        },
        {
            key: "renderConcentricPolygon",
            value: function(e, t, n) {
                const r = {
                    stroke: "#ccc",
                    ...getPresentationAttributes(this.props),
                    fill: "none",
                    ...n
                };
                return module553.default.createElement("path", {
                    ...r,
                    className: "recharts-polar-grid-concentric-polygon",
                    key: `path-${t}`,
                    d: this.getPolygonPath(e)
                });
            }
        },
        {
            key: "renderConcentricPath",
            value: function() {
                const _this = this;
                const props = this.props;
                const { polarRadius, gridType } = props;
                if (polarRadius && polarRadius.length) {
                    return module553.default.createElement("g", {
                        className: "recharts-polar-grid-concentric"
                    }, polarRadius.map((t, n)=>{
                        if (gridType === "circle") {
                            return _this.renderConcentricCircle(t, n);
                        }
                        return _this.renderConcentricPolygon(t, n);
                    }));
                }
                return null;
            }
        },
        {
            key: "render",
            value: function() {
                if (this.props.outerRadius <= 0) {
                    return null;
                }
                return module553.default.createElement("g", {
                    className: "recharts-polar-grid"
                }, this.renderPolarAngles(), this.renderConcentricPath());
            }
        }
    ]) {
        v(n.prototype, r);
    }
    return t;
})(module553.PureComponent);
PolarGrid.displayName = "PolarGrid";
PolarGrid.propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    cx: module1.number,
    cy: module1.number,
    innerRadius: module1.number,
    outerRadius: module1.number,
    polarAngles: module1.arrayOf(module1.number),
    polarRadius: module1.arrayOf(module1.number),
    gridType: module1.oneOf([
        "polygon",
        "circle"
    ])
};
PolarGrid.defaultProps = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    gridType: "polygon"
};
export default PolarGrid;
