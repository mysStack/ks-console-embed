import "./module-15.js";
import "./module-18.js";
import "./module-27.js";
import "./module-9.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module96 from "./module-96.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import module26 from "./module-26.js";
import module14 from "./module-14.js";
import { avgs, unitTransformMap } from "./module-795.js";
import module1353 from "./module-1353.js";
let n;
const h = {
    avg: avgs,
    last: function(e) {
        return e[e.length - 1];
    },
    first: function(e) {
        return e[0];
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
            key: "stat",
            get: function() {
                const { valueName, decimals = 0, format } = this.config;
                const metrics = this.metrics;
                const length = this.metrics.length;
                if (length > 1) {
                    return "Only queries that return single series/table is supported";
                }
                if (length === 0) {
                    return "No Data";
                }
                const c = module26(metrics, "0.values", []).map((e)=>{
                    const t = module96(e, 2)[1];
                    return Number(t);
                });
                const s = (h[valueName] || avgs)(c) || 0;
                return (unitTransformMap[format] || unitTransformMap.none)(s, decimals);
            }
        }
    ]);
    return a;
})(module1353);
module49(n.prototype, "stat", [
    module14.computed
], Object.getOwnPropertyDescriptor(n.prototype, "stat"), n.prototype);
export default n;
