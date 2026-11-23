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
import module1207 from "./module-1207.js";
let r;
let o;
const g = [
    "node_cpu_usage",
    "node_cpu_utilisation",
    "node_load1",
    "node_load5",
    "node_load15",
    "node_memory_utilisation",
    "node_memory_usage_wo_cache",
    "node_gpu_utilization",
    "node_gpu_memory_utilization"
];
const y = [
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
r = ((e)=>{
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
            const n = module51(e);
            if (t) {
                const r = module51(this).constructor;
                a = Reflect.construct(n, arguments, r);
            } else {
                a = n.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(a);
    function a(e) {
        let n;
        module36(this, a);
        n = t.call(this, e);
        module65(n, "sort_metric", o, module88(n));
        n.sort_metric_options = hideGPUByLicense(g, n.cluster);
        n.metrics_filter = hideGPUByLicense(y, n.cluster).join("|");
        return n;
    }
    return a;
})(module1207);
o = module49(r.prototype, "sort_metric", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return g[0];
    }
});
export default r;
