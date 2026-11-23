import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-109.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module332 from "utils/babel-helpers/get";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import defaultExport from "stores/monitoring/base";
const p = ((defaultExport_1)=>{
    module55(a, defaultExport_1);
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
    function a(r = {}) {
        let e;
        module36(this, a);
        e = t.call(this, "volumes");
        e.getApi = function() {
            return `${e.apiVersion}/persistentvolumeclaim_metrics`;
        };
        e.handleParams = function(e) {
            return e;
        };
        e.filters = r;
        return e;
    }
    module37(a, [
        {
            key: "fetchMetrics",
            value: function(e) {
                module332(module51(a.prototype), "fetchMetrics", this).call(this, {
                    ...this.filters,
                    ...e
                });
            }
        },
        {
            key: "monitoringMetrics",
            value: function(t = {}, a = {
                interval: 5000
            }) {
                const _this = this;
                this.fetchMetrics(t);
                return setInterval(()=>{
                    _this.fetchMetrics({
                        ...t,
                        autoRefresh: true
                    });
                }, a.interval);
            }
        }
    ]);
    return a;
})(defaultExport);
export default p;
