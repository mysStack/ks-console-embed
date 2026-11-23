import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import { PRESENTATION_ATTRIBUTES, filterEventAttributes, getPresentationAttributes } from "./module-810.js";
import { RADIAN, polarToCartesian } from "./module-927.js";
import { getPercentValue, mathSign } from "./module-827.js";
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
function f(e, t) {
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
function d(e, t, n) {
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
function v(e, t) {
    if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function g(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
    }
}
function y(e, t) {
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
function m(e) {
    return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function b(e, t) {
    return (b = Object.setPrototypeOf || function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
const x = ({ cx, cy, radius, angle, sign, isExternal, cornerRadius, cornerIsExternal })=>{
    const c = cornerRadius * (isExternal ? 1 : -1) + radius;
    const theta = Math.asin(cornerRadius / c) / RADIAN;
    const d = cornerIsExternal ? angle : angle + sign * theta;
    const p = cornerIsExternal ? angle - sign * theta : angle;
    return {
        center: polarToCartesian(cx, cy, c, d),
        circleTangency: polarToCartesian(cx, cy, radius, d),
        lineTangency: polarToCartesian(cx, cy, c * Math.cos(theta * RADIAN), p),
        theta
    };
};
const w = (e)=>{
    const { cx, cy, innerRadius, outerRadius, startAngle } = e;
    const a = ((e, t)=>mathSign(t - e) * Math.min(Math.abs(t - e), 359.999))(startAngle, e.endAngle);
    const s = startAngle + a;
    const c = polarToCartesian(cx, cy, outerRadius, startAngle);
    const f = polarToCartesian(cx, cy, outerRadius, s);
    let d = `M ${c.x},${c.y}
    A ${outerRadius},${outerRadius},0,
    ${+(Math.abs(a) > 180)},${+(startAngle > s)},
    ${f.x},${f.y}
  `;
    if (innerRadius > 0) {
        const p = polarToCartesian(cx, cy, innerRadius, startAngle);
        const h = polarToCartesian(cx, cy, innerRadius, s);
        d += `L ${h.x},${h.y}
            A ${innerRadius},${innerRadius},0,
            ${+(Math.abs(a) > 180)},${+(startAngle <= s)},
            ${p.x},${p.y} Z`;
    } else {
        d += `L ${cx},${cy} Z`;
    }
    return d;
};
const Sector = ((e)=>{
    function t() {
        v(this, t);
        return y(this, m(t).apply(this, arguments));
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
            b(e, t);
        }
    })(t, e);
    n = t;
    if (o = [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { cx, cy, innerRadius, outerRadius, cornerRadius, forceCornerRadius, cornerIsExternal, startAngle, endAngle, className } = props;
                if (outerRadius < innerRadius || startAngle === endAngle) {
                    return null;
                }
                let d_1;
                const className_1 = module3("recharts-sector", className);
                const m = outerRadius - innerRadius;
                const b = getPercentValue(cornerRadius, m, 0, true);
                d_1 = b > 0 && Math.abs(startAngle - endAngle) < 360 ? (({ cx, cy, innerRadius, outerRadius, cornerRadius, forceCornerRadius, cornerIsExternal, startAngle, endAngle })=>{
                    const sign = mathSign(endAngle - startAngle);
                    const d = x({
                        cx,
                        cy,
                        radius: outerRadius,
                        angle: startAngle,
                        sign,
                        cornerRadius,
                        cornerIsExternal
                    });
                    const { circleTangency, lineTangency, theta } = d;
                    const g = x({
                        cx,
                        cy,
                        radius: outerRadius,
                        angle: endAngle,
                        sign: -sign,
                        cornerRadius,
                        cornerIsExternal
                    });
                    const { circleTangency: circleTangency_1, lineTangency: lineTangency_1, theta: theta_1 } = g;
                    const _ = Math.abs(startAngle - endAngle) - theta - theta_1;
                    if (_ < 0) {
                        if (forceCornerRadius) {
                            return `M ${lineTangency.x},${lineTangency.y}
        a${cornerRadius},${cornerRadius},0,0,1,${2 * cornerRadius},0
        a${cornerRadius},${cornerRadius},0,0,1,${2 * -cornerRadius},0
      `;
                        }
                        return w({
                            cx,
                            cy,
                            innerRadius,
                            outerRadius,
                            startAngle,
                            endAngle
                        });
                    }
                    let C = `M ${lineTangency.x},${lineTangency.y}
    A${cornerRadius},${cornerRadius},0,0,${+(sign < 0)},${circleTangency.x},${circleTangency.y}
    A${outerRadius},${outerRadius},0,${+(_ > 180)},${+(sign < 0)},${circleTangency_1.x},${circleTangency_1.y}
    A${cornerRadius},${cornerRadius},0,0,${+(sign < 0)},${lineTangency_1.x},${lineTangency_1.y}
  `;
                    if (innerRadius > 0) {
                        const O = x({
                            cx,
                            cy,
                            radius: innerRadius,
                            angle: startAngle,
                            sign,
                            isExternal: true,
                            cornerRadius,
                            cornerIsExternal
                        });
                        const { circleTangency: circleTangency_2, lineTangency: lineTangency_2, theta: theta_2 } = O;
                        const A = x({
                            cx,
                            cy,
                            radius: innerRadius,
                            angle: endAngle,
                            sign: -sign,
                            isExternal: true,
                            cornerRadius,
                            cornerIsExternal
                        });
                        const { circleTangency: circleTangency_3, lineTangency: lineTangency_3, theta: theta_3 } = A;
                        const P = Math.abs(startAngle - endAngle) - theta_2 - theta_3;
                        if (P < 0) {
                            return `${C}L${cx},${cy}Z`;
                        }
                        C += `L${lineTangency_3.x},${lineTangency_3.y}
      A${cornerRadius},${cornerRadius},0,0,${+(sign < 0)},${circleTangency_3.x},${circleTangency_3.y}
      A${innerRadius},${innerRadius},0,${+(P > 180)},${+(sign > 0)},${circleTangency_2.x},${circleTangency_2.y}
      A${cornerRadius},${cornerRadius},0,0,${+(sign < 0)},${lineTangency_2.x},${lineTangency_2.y}Z`;
                    } else {
                        C += `L${cx},${cy}Z`;
                    }
                    return C;
                })({
                    cx,
                    cy,
                    innerRadius,
                    outerRadius,
                    cornerRadius: Math.min(b, m / 2),
                    forceCornerRadius,
                    cornerIsExternal,
                    startAngle,
                    endAngle
                }) : w({
                    cx,
                    cy,
                    innerRadius,
                    outerRadius,
                    startAngle,
                    endAngle
                });
                return module553.default.createElement("path", {
                    ...getPresentationAttributes(this.props),
                    ...filterEventAttributes(this.props),
                    className: className_1,
                    d: d_1
                });
            }
        }
    ]) {
        g(n.prototype, o);
    }
    return t;
})(module553.PureComponent);
Sector.displayName = "Sector";
Sector.propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    className: module1.string,
    cx: module1.number,
    cy: module1.number,
    innerRadius: module1.number,
    outerRadius: module1.number,
    startAngle: module1.number,
    endAngle: module1.number,
    cornerRadius: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    forceCornerRadius: module1.bool,
    cornerIsExternal: module1.bool
};
Sector.defaultProps = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: false,
    cornerIsExternal: false
};
export default Sector;
