import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-27.js";
import "unpacked/module-9.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module96 from "utils/babel-helpers/slicedToArray";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import module26 from "unpacked/module-26.js";
import module14 from "unpacked/module-14.js";
import { avgs, unitTransformMap } from "utils/monitoring";
import module1353 from "stores/monitoring/custom/monitor";
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
