import module844 from "./module-844.js";
import { getPercentValue } from "./module-827.js";
import { checkDomainOfScale, getTicksOfScale, parseScale } from "./module-912.js";
export const RADIAN = Math.PI / 180;
export const degreeToRadian = function(e) {
    return e * Math.PI / 180;
};
export const radianToDegree = function(e) {
    return 180 * e / Math.PI;
};
export const polarToCartesian = function(e, t, n, r) {
    return {
        x: e + Math.cos(-RADIAN * r) * n,
        y: t + Math.sin(-RADIAN * r) * n
    };
};
export const getMaxRadius = function(e, t, n = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
}) {
    return Math.min(Math.abs(e - (n.left || 0) - (n.right || 0)), Math.abs(t - (n.top || 0) - (n.bottom || 0))) / 2;
};
export const formatAxisMap = function(e, t, n, r, l) {
    const { width, height } = e;
    let e_startAngle = e.startAngle;
    let e_endAngle = e.endAngle;
    const cx = getPercentValue(e.cx, width, width / 2);
    const cy = getPercentValue(e.cy, height, height / 2);
    const y = getMaxRadius(width, height, n);
    const innerRadius = getPercentValue(e.innerRadius, y, 0);
    const b = getPercentValue(e.outerRadius, y, 0.8 * y);
    return Object.keys(t).reduce((acc, key)=>{
        let range;
        const c = t[key];
        const { domain, reversed } = c;
        if (module844(c.range)) {
            if (r === "angleAxis") {
                range = [
                    e_startAngle,
                    e_endAngle
                ];
            } else if (r === "radiusAxis") {
                range = [
                    innerRadius,
                    b
                ];
            }
            if (reversed) {
                range = [
                    range[1],
                    range[0]
                ];
            }
        } else {
            const y = ((e)=>{
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
            })(range = c.range);
            e_startAngle = y[0];
            e_endAngle = y[1];
        }
        const x = parseScale(c, l);
        const { realScaleType, scale } = x;
        scale.domain(domain).range(range);
        checkDomainOfScale(scale);
        const C = getTicksOfScale(scale, {
            ...c,
            realScaleType
        });
        const O = {
            ...c,
            ...C,
            range,
            radius: b,
            realScaleType,
            scale,
            cx,
            cy,
            innerRadius,
            outerRadius: b,
            startAngle: e_startAngle,
            endAngle: e_endAngle
        };
        return {
            ...acc,
            ...{
                [key]: O
            }
        };
    }, {});
};
export const distanceBetweenPoints = function({ x, y }, { x: x_1, y: y_1 }) {
    return Math.sqrt((x - x_1) ** 2 + (y - y_1) ** 2);
};
export const getAngleOfPoint = function({ x, y }, { cx, cy }) {
    const radius = distanceBetweenPoints({
        x,
        y
    }, {
        x: cx,
        y: cy
    });
    if (radius <= 0) {
        return {
            radius
        };
    }
    const l = (x - cx) / radius;
    let angleInRadian = Math.acos(l);
    if (y > cy) {
        angleInRadian = 2 * Math.PI - angleInRadian;
    }
    return {
        radius,
        angle: radianToDegree(angleInRadian),
        angleInRadian
    };
};
export const formatAngleOfSector = function({ startAngle, endAngle }) {
    const r = Math.floor(startAngle / 360);
    const o = Math.floor(endAngle / 360);
    const i = Math.min(r, o);
    return {
        startAngle: startAngle - 360 * i,
        endAngle: endAngle - 360 * i
    };
};
const g = (e, { startAngle, endAngle })=>{
    const o = Math.floor(startAngle / 360);
    const i = Math.floor(endAngle / 360);
    return e + 360 * Math.min(o, i);
};
export const inRangeOfSector = function({ x, y: y_1 }, t) {
    const o = getAngleOfPoint({
        x,
        y: y_1
    }, t);
    const { radius, angle } = o;
    const { innerRadius, outerRadius } = t;
    if (radius < innerRadius || radius > outerRadius) {
        return false;
    }
    if (radius === 0) {
        return true;
    }
    let c;
    const f = formatAngleOfSector(t);
    const { startAngle, endAngle } = f;
    let y = angle;
    if (startAngle <= endAngle) {
        while(y > endAngle){
            y -= 360;
        }
        while(y < startAngle){
            y += 360;
        }
        c = y >= startAngle && y <= endAngle;
    } else {
        while(y > startAngle){
            y -= 360;
        }
        while(y < endAngle){
            y += 360;
        }
        c = y >= endAngle && y <= startAngle;
    }
    if (c) {
        return {
            ...t,
            radius,
            angle: g(y, t)
        };
    }
    return null;
};
