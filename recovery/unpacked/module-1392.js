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
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import module14 from "./module-14.js";
import { hideGPUByLicense } from "./module-52.js";
import module1209 from "./module-1209.js";
let n;
let l;
const v = [
    "pod_cpu_usage",
    "pod_cpu_used_requests_utilisation",
    "pod_cpu_used_limits_utilisation",
    "pod_memory_usage_wo_cache",
    "pod_memory_used_requests_utilisation",
    "pod_memory_used_limits_utilisation",
    "pod_gpu_usage",
    "pod_gpu_memory_usage",
    "pod_pvc_bytes_usage",
    "pod_pvc_bytes_utilisation",
    "pod_net_bytes_transmitted",
    "pod_net_bytes_received"
];
const g = [
    "pod_cpu_usage",
    "pod_cpu_used_requests_utilisation",
    "pod_cpu_used_limits_utilisation",
    "pod_memory_usage_wo_cache",
    "pod_memory_used_requests_utilisation",
    "pod_memory_used_limits_utilisation",
    "pod_gpu_usage",
    "pod_gpu_memory_usage",
    "pod_net_bytes_transmitted",
    "pod_net_bytes_received",
    "pod_pvc_bytes_usage",
    "pod_pvc_bytes_utilisation"
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
        module65(r, "sort_metric", l, module88(r));
        r.resource = "pods";
        r.sort_metric_options = hideGPUByLicense(v, r.cluster);
        r.metrics_filter = hideGPUByLicense(g, r.cluster).join("|");
        return r;
    }
    return a;
})(module1209);
l = module49(n.prototype, "sort_metric", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return v[0];
    }
});
export default n;
