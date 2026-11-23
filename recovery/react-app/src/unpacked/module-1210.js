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
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import module14 from "unpacked/module-14.js";
import { hideGPUByLicense } from "utils/index";
import module1209 from "unpacked/module-1209.js";
let n;
let l;
let u;
const y = [
    "namespace_cpu_usage",
    "namespace_cpu_used_requests_utilisation",
    "namespace_cpu_used_limits_utilisation",
    "namespace_memory_usage_wo_cache",
    "namespace_memory_used_requests_utilisation",
    "namespace_memory_used_limits_utilisation",
    "namespace_pvc_bytes_used",
    "namespace_gpu_usage",
    "namespace_gpu_memory_usage",
    "namespace_pod_count",
    "namespace_net_bytes_received",
    "namespace_net_bytes_transmitted"
];
const E = [
    "namespace_memory_usage_wo_cache",
    "namespace_memory_limit_hard",
    "namespace_cpu_usage",
    "namespace_cpu_limit_hard",
    "namespace_gpu_limit_hard",
    "namespace_gpu_usage",
    "namespace_gpu_memory_usage",
    "namespace_pod_count",
    "namespace_pods_hard",
    "namespace_net_bytes_received",
    "namespace_net_bytes_transmitted",
    "namespace_cpu_used_requests_utilisation",
    "namespace_cpu_used_limits_utilisation",
    "namespace_memory_used_requests_utilisation",
    "namespace_memory_used_limits_utilisation",
    "namespace_pvc_bytes_used",
    "namespace_pvc_count"
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
        module65(r, "changeWorkSpace", u, module88(r));
        r.resource = "namespaces";
        r.sort_metric_options = hideGPUByLicense(y, r.cluster);
        r.metrics_filter = hideGPUByLicense(E, r.cluster).join("|");
        return r;
    }
    module37(a, [
        {
            key: "fetchUrl",
            get: function() {
                if (this.workspace) {
                    return `${this.apiVersion}/workspace_metrics`;
                }
                return `${this.apiVersion}/namespace_metrics`;
            }
        }
    ]);
    return a;
})(module1209);
l = module49(n.prototype, "sort_metric", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return y[0];
    }
});
u = module49(n.prototype, "changeWorkSpace", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.workspace = t;
            _this.fetchAll();
        };
    }
});
export default n;
