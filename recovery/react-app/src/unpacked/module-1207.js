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
let n;
let l;
const v = [
    "node_cpu_usage",
    "node_cpu_utilisation",
    "node_load1",
    "node_load5",
    "node_load15",
    "node_memory_utilisation",
    "node_memory_usage_wo_cache",
    "node_gpu_usage",
    "node_gpu_memory_usage",
    "node_disk_size_utilisation",
    "node_disk_inode_utilisation",
    "node_pod_utilisation"
];
const g = [
    "node_cpu_utilisation",
    "node_cpu_usage",
    "node_cpu_total",
    "node_memory_utilisation",
    "node_memory_usage_wo_cache",
    "node_memory_total",
    "node_gpu_utilization",
    "node_gpu_usage",
    "node_gpu_total",
    "node_gpu_memory_utilization",
    "node_gpu_memory_usage",
    "node_gpu_memory_total",
    "node_disk_size_utilisation",
    "node_disk_size_usage",
    "node_disk_size_capacity",
    "node_pod_utilisation",
    "node_pod_running_count",
    "node_pod_quota",
    "node_disk_inode_utilisation",
    "node_disk_inode_total",
    "node_disk_inode_usage",
    "node_load1",
    "node_load5",
    "node_load15"
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
        r.resource = "nodes";
        r.sort_metric_options = hideGPUByLicense(e.sort_metric_options || v, r.cluster);
        r.metrics_filter = hideGPUByLicense(g, r.cluster).join("|");
        return r;
    }
    return a;
})(module1128);
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
