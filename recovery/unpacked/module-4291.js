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
let u;
const v = [
    "cluster_cpu_usage",
    "cluster_cpu_utilisation",
    "cluster_memory_usage_wo_cache",
    "cluster_memory_utilisation",
    "cluster_gpu_usage",
    "cluster_gpu_memory_usage",
    "cluster_disk_size_usage",
    "cluster_disk_size_utilisation",
    "cluster_pod_count",
    "cluster_pod_utilisation"
];
const y = [
    "cluster_cpu_usage",
    "cluster_cpu_utilisation",
    "cluster_memory_usage_wo_cache",
    "cluster_memory_utilisation",
    "cluster_gpu_usage",
    "cluster_gpu_memory_usage",
    "cluster_disk_size_usage",
    "cluster_disk_size_utilisation",
    "cluster_pod_count",
    "cluster_pod_utilisation"
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
        module65(r, "sort_metric", u, module88(r));
        r.resource = "clusters";
        r.sort_metric_options = hideGPUByLicense(v, r.cluster);
        r.metrics_filter = hideGPUByLicense(y, r.cluster).join("|");
        return r;
    }
    return a;
})(module1209);
u = module49(n.prototype, "sort_metric", [
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
