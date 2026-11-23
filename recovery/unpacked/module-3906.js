import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-316.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module26 from "./module-26.js";
import { inject, observer } from "./module-239.js";
import { hideGPUByLicense, isEdgeWizePage } from "./module-52.js";
import module1407 from "./module-1407.js";
import module3907 from "./module-3907.js";
import { Component } from "./module-1829.js";
function v(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, r);
    }
    return a;
}
const g = {
    cpu_usage: "container_cpu_usage",
    memory_usage: "container_memory_usage_wo_cache",
    gpu_usage: "container_gpu_usage",
    gpu_memory_usage: "container_gpu_memory_usage"
};
const y = ((Component_1)=>{
    module55(a, Component_1);
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
        r.fetchData = function(e) {
            const detail = r.store.detail;
            const { cluster, namespace, name } = detail;
            r.monitorStore.fetchMetrics({
                cluster,
                namespace,
                container: name,
                pod: r.podName,
                metrics: Object.values(hideGPUByLicense(g, cluster)),
                ...e
            });
        };
        r.getMonitoringCfgs = function() {
            return [
                {
                    type: "cpu",
                    title: "CPU_USAGE",
                    unitType: "cpu",
                    legend: [
                        "USAGE"
                    ],
                    data: module26(r.metrics, `${g.cpu_usage}.data.result`)
                },
                {
                    type: "memory",
                    title: "MEMORY_USAGE",
                    unitType: "memory",
                    legend: [
                        "USAGE"
                    ],
                    data: module26(r.metrics, `${g.memory_usage}.data.result`)
                },
                {
                    type: "gpu",
                    title: "GPU_USAGE",
                    unitType: "gpu",
                    legend: [
                        "USAGE"
                    ],
                    data: module26(r.metrics, `${g.gpu_usage}.data.result`)
                },
                {
                    type: "gpu_memory",
                    title: "GPU_MEMORY_USAGE",
                    unitType: "memory",
                    legend: [
                        "USAGE"
                    ],
                    data: module26(r.metrics, `${g.gpu_memory_usage}.data.result`)
                }
            ];
        };
        r.isEdgeWize = isEdgeWizePage();
        r.monitorStore = r.isEdgeWize ? new module3907 : new module1407;
        return r;
    }
    module37(a, [
        {
            key: "podName",
            get: function() {
                return module26(this.props.match, "params.podName", "");
            }
        }
    ]);
    return a;
})(Component);
const E = inject("rootStore", "detailStore")(observer(y));
export default E;
const b = y;
export { b as Component };
