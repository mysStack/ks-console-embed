import module1159 from "./module-1159.js";
import module1512 from "./module-1512.js";
import { checkDomainOfScale, getBandSizeOfAxis, getTicksOfScale, parseScale } from "./module-912.js";
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
function s(e, t, n) {
    if (t) {
        u(e.prototype, t);
    }
    if (n) {
        u(e, n);
    }
    return e;
}
export const formatAxisMap = function({ width, height, layout }, t, n, r, o) {
    const s = Object.keys(t);
    const c = {
        left: n.left,
        leftMirror: n.left,
        right: width - n.right,
        rightMirror: width - n.right,
        top: n.top,
        topMirror: n.top,
        bottom: height - n.bottom,
        bottomMirror: height - n.bottom
    };
    return s.reduce((acc, item)=>{
        let l;
        let s;
        let p;
        let h;
        const v = t[item];
        const { orientation, domain, padding } = v;
        const b = padding === undefined ? {} : padding;
        const { mirror, reversed } = v;
        const _ = `${orientation}${mirror ? "Mirror" : ""}`;
        l = r === "xAxis" ? [
            n.left + (b.left || 0),
            n.left + n.width - (b.right || 0)
        ] : r === "yAxis" ? layout === "horizontal" ? [
            n.top + n.height - (b.bottom || 0),
            n.top + (b.top || 0)
        ] : [
            n.top + (b.top || 0),
            n.top + n.height - (b.bottom || 0)
        ] : v.range;
        if (reversed) {
            l = [
                l[1],
                l[0]
            ];
        }
        const C = parseScale(v, o);
        const { scale, realScaleType } = C;
        scale.domain(domain).range(l);
        checkDomainOfScale(scale);
        const M = getTicksOfScale(scale, {
            ...v,
            realScaleType
        });
        if (r === "xAxis") {
            h = orientation === "top" && !mirror || orientation === "bottom" && mirror;
            s = n.left;
            p = c[_] - h * v.height;
        } else if (r === "yAxis") {
            h = orientation === "left" && !mirror || orientation === "right" && mirror;
            s = c[_] - h * v.width;
            p = n.top;
        }
        const S = {
            ...v,
            ...M,
            realScaleType,
            x: s,
            y: p,
            scale,
            width: r === "xAxis" ? n.width : v.width,
            height: r === "yAxis" ? n.height : v.height
        };
        S.bandSize = getBandSizeOfAxis(S, M);
        if (v.hide || r !== "xAxis") {
            if (!v.hide) {
                c[_] += (h ? -1 : 1) * S.width;
            }
        } else {
            c[_] += (h ? -1 : 1) * S.height;
        }
        return {
            ...acc,
            ...{
                [item]: S
            }
        };
    }, {});
};
export const rectWithPoints = function({ x, y }, { x: x_1, y: y_1 }) {
    return {
        x: Math.min(x, x_1),
        y: Math.min(y, y_1),
        width: Math.abs(x_1 - x),
        height: Math.abs(y_1 - y)
    };
};
export const rectWithCoords = function({ x1, y1, x2, y2 }) {
    return rectWithPoints({
        x: x1,
        y: y1
    }, {
        x: x2,
        y: y2
    });
};
export const ScaleHelper = (()=>{
    function e(t) {
        l(this, e);
        this.scale = t;
    }
    s(e, null, [
        {
            key: "create",
            value: function(t) {
                return new e(t);
            }
        }
    ]);
    s(e, [
        {
            key: "apply",
            value: function(e, { bandAware, position } = {}) {
                if (e !== undefined) {
                    if (position) {
                        switch(position){
                            default:
                                return this.scale(e);
                            case "middle":
                                const o = this.bandwidth ? this.bandwidth() / 2 : 0;
                                return this.scale(e) + o;
                            case "end":
                                const i = this.bandwidth ? this.bandwidth() : 0;
                                return this.scale(e) + i;
                        }
                    }
                    if (bandAware) {
                        const a = this.bandwidth ? this.bandwidth() / 2 : 0;
                        return this.scale(e) + a;
                    }
                    return this.scale(e);
                }
            }
        },
        {
            key: "isInRange",
            value: function(e) {
                const t = this.range();
                const n = t[0];
                const r = t[t.length - 1];
                if (n <= r) {
                    return e >= n && e <= r;
                }
                return e >= r && e <= n;
            }
        },
        {
            key: "domain",
            get: function() {
                return this.scale.domain;
            }
        },
        {
            key: "range",
            get: function() {
                return this.scale.range;
            }
        },
        {
            key: "rangeMin",
            get: function() {
                return this.range()[0];
            }
        },
        {
            key: "rangeMax",
            get: function() {
                return this.range()[1];
            }
        },
        {
            key: "bandwidth",
            get: function() {
                return this.scale.bandwidth;
            }
        }
    ]);
    return e;
})();
ScaleHelper.EPS = 0.0001;
export class LabeledScaleHelper {
    constructor(t){
        this.scales = module1512(t, ScaleHelper.create);
        Object.assign(this, this.scales);
    }
    static create(e) {
        return new this(e);
    }
    apply(e, { bandAware } = {}) {
        const scales = this.scales;
        return module1512(e, function(e, t) {
            return scales[t].apply(e, {
                bandAware
            });
        });
    }
    isInRange(e) {
        const scales = this.scales;
        return module1159(e, function(e, n) {
            return scales[n].isInRange(e);
        });
    }
}
