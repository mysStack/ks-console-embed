import "unpacked/module-15.js";
import "unpacked/module-73.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import module14 from "unpacked/module-14.js";
import { hideGPUByLicense } from "utils/index";
import module1128 from "stores/rank/index";
let a;
let o;
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
const y = [
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
a = ((e)=>{
    module55(r, e);
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
            let r;
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(r);
    function r(e) {
        let n;
        module36(this, r);
        n = t.call(this, e);
        module65(n, "sort_metric", o, module88(n));
        n.resource = "pods";
        n.sort_metric_options = hideGPUByLicense(e.sort_metric_options || g, n.cluster);
        n.metrics_filter = hideGPUByLicense(y, n.cluster).join("|");
        return n;
    }
    return r;
})(module1128);
o = module49(a.prototype, "sort_metric", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return g[0];
    }
});
export default a;
