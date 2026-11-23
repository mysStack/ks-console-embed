import "./module-15.js";
import "./module-73.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import module14 from "./module-14.js";
import { hideGPUByLicense } from "./module-52.js";
import module1128 from "./module-1128.js";
let n;
let l;
let u;
let o;
const E = [
    "workload_cpu_usage",
    "workload_memory_usage_wo_cache",
    "workload_gpu_usage",
    "workload_gpu_memory_usage",
    "workload_net_bytes_transmitted",
    "workload_net_bytes_received"
];
const b = [
    "workload_cpu_usage",
    "workload_memory_usage_wo_cache",
    "workload_gpu_usage",
    "workload_gpu_memory_usage",
    "workload_net_bytes_transmitted",
    "workload_net_bytes_received"
];
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
    function a(e) {
        let r;
        module36(this, a);
        r = t.call(this, e);
        module65(r, "namespaces", l, module88(r));
        module65(r, "sort_metric", u, module88(r));
        module65(r, "changeNamespace", o, module88(r));
        r.sort_metric_options = hideGPUByLicense(e.sort_metric_options || E, r.cluster);
        r.metrics_filter = hideGPUByLicense(b, r.cluster).join("|");
        return r;
    }
    module37(a, [
        {
            key: "fetchUrl",
            get: function() {
                return `${this.apiVersion}/workload_metrics`;
            }
        }
    ]);
    return a;
})(module1128);
l = module49(n.prototype, "namespaces", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
});
u = module49(n.prototype, "sort_metric", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return E[0];
    }
});
o = module49(n.prototype, "changeNamespace", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.namespaces = t;
            _this.fetchAll();
        };
    }
});
export default n;
