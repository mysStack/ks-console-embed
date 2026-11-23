import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-30.js";
import "./module-18.js";
import "./module-87.js";
import "./module-16.js";
import "./module-27.js";
import "./module-98.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-32.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import module96 from "./module-96.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import module14 from "./module-14.js";
import { avgs, unitTransformMap } from "./module-795.js";
import module26 from "./module-26.js";
import module1353 from "./module-1353.js";
let n;
function E(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, r);
    }
    return a;
}
const y = {
    avg: avgs,
    last: function(e) {
        return e[e.length - 1];
    },
    first: function(e) {
        return e[0];
    },
    max: function(e) {
        return Math.max.apply(null, e);
    },
    min: function(e) {
        return Math.min.apply(null, e);
    }
};
n = ((e)=>{
    module55(a, e);
    var t = ((e)=>{
        const t = (()=>{
            if (typeof Reflect === "undefined" || !Reflect.construct) {
                return false;
            }
            if (Reflect.construct.sham) {
                return false;
            }
            if (typeof Proxy === "function") {
                return true;
            }
            try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
                return true;
            } catch (e) {
                return false;
            }
        })();
        return function() {
            let a;
            const r = module51(e);
            if (t) {
                const n = module51(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(a);
    function a() {
        module36(this, a);
        return t.apply(this, arguments);
    }
    module37(a, [
        {
            key: "graphData",
            get: function() {
                const e = this.metrics.reduce((acc, { values, id })=>{
                    values.forEach((t)=>{
                        const a = module96(t, 2);
                        const n = a[0];
                        const l = a[1];
                        const u = 1000 * n;
                        const c = acc[u] || {};
                        c[id] = Number(l);
                        acc[u] = c;
                    });
                    return acc;
                }, {});
                return Object.entries(e).map((e)=>{
                    const t = module96(e, 2);
                    const a = t[0];
                    const r = t[1];
                    return {
                        time: Number(a),
                        ...r
                    };
                });
            }
        },
        {
            key: "legends",
            get: function() {
                const colors = this.config.colors;
                const t = colors === undefined ? [] : colors;
                return this.formattedMetrics.map((e, a)=>{
                    const ID = e.id;
                    return {
                        name: e.name,
                        ID,
                        color: t[a % t.length]
                    };
                });
            }
        },
        {
            key: "valueFormatter",
            get: function() {
                const e = module26(this.config, "yaxes[0].format", "none");
                const t = module26(this.config, "yaxes[0].decimals", 2);
                const a = unitTransformMap[e] || (()=>{});
                return function(e) {
                    return a(e, t);
                };
            }
        },
        {
            key: "stats",
            get: function() {
                const _this = this;
                return this.formattedMetrics.map((t, a)=>{
                    const r = (t.values || []).map((e)=>{
                        const t = module96(e, 2)[1];
                        return Number(t);
                    });
                    const colors = _this.config.colors;
                    const l = colors === undefined ? [] : colors;
                    return {
                        id: t.id,
                        name: t.name,
                        color: l[a % l.length],
                        stat: {
                            max: _this.valueFormatter(y.max(r)),
                            min: _this.valueFormatter(y.min(r)),
                            avg: _this.valueFormatter(y.avg(r)),
                            last: _this.valueFormatter(y.last(r))
                        }
                    };
                });
            }
        }
    ]);
    return a;
})(module1353);
module49(n.prototype, "graphData", [
    module14.computed
], Object.getOwnPropertyDescriptor(n.prototype, "graphData"), n.prototype);
module49(n.prototype, "legends", [
    module14.computed
], Object.getOwnPropertyDescriptor(n.prototype, "legends"), n.prototype);
module49(n.prototype, "valueFormatter", [
    module14.computed
], Object.getOwnPropertyDescriptor(n.prototype, "valueFormatter"), n.prototype);
module49(n.prototype, "stats", [
    module14.computed
], Object.getOwnPropertyDescriptor(n.prototype, "stats"), n.prototype);
export default n;
