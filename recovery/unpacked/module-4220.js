import "./module-15.js";
import "./module-84.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-62.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module1137 from "./module-1137.js";
import { cpuFormat, hideGPUByLicense, memoryFormat } from "./module-52.js";
import Module790 from "./module-790.js";
import Module791 from "./module-791.js";
import Module1135 from "./module-1135.js";
import Module4221 from "./module-4221.js";
import Module4223 from "./module-4223.js";
import module4225 from "./module-4225.js";
let u;
const R = [
    "node_cpu_utilisation",
    "node_memory_utilisation",
    "node_gpu_utilization",
    "node_gpu_memory_utilization",
    "node_disk_size_utilisation",
    "node_pod_utilisation"
];
const T = inject("detailStore")(u = observer(u = ((Component_1)=>{
    module55(r, Component_1);
    var a = ((e)=>{
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
    })(r);
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.store = e.detailStore;
        t.monitoringStore = new module1137({
            cluster: t.cluster
        });
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "fetchData",
            value: function() {
                const { name, role = [] } = this.store.detail;
                this.monitoringStore.fetchMetrics({
                    resources: [
                        name
                    ],
                    metrics: hideGPUByLicense(R, this.cluster),
                    step: "180s",
                    fillZero: !role.includes("edge")
                });
            }
        },
        {
            key: "renderResourceStatus",
            value: function() {
                const e = module14.toJS(this.monitoringStore.data);
                const a = [
                    {
                        key: "cpu",
                        icon: "cpu",
                        unit: "%",
                        legend: [
                            "CPU_USAGE"
                        ],
                        title: "CPU_USAGE",
                        data: module26(e, "node_cpu_utilisation.data.result")
                    },
                    {
                        key: "memory",
                        icon: "memory",
                        unit: "%",
                        legend: [
                            "MEMORY_USAGE"
                        ],
                        title: "MEMORY_USAGE",
                        data: module26(e, "node_memory_utilisation.data.result")
                    },
                    {
                        key: "gpu",
                        icon: "gpu",
                        unit: "%",
                        legend: [
                            "GPU_USAGE"
                        ],
                        title: "GPU_USAGE",
                        data: module26(e, "node_gpu_utilization.data.result")
                    },
                    {
                        key: "gpu_memory",
                        icon: "computing",
                        unit: "%",
                        legend: [
                            "GPU_MEMORY_USAGE"
                        ],
                        title: "GPU_MEMORY_USAGE",
                        data: module26(e, "node_gpu_memory_utilization.data.result")
                    },
                    {
                        key: "pod",
                        icon: "pod",
                        unit: "%",
                        legend: [
                            "MAXIMUM_PODS"
                        ],
                        title: "MAXIMUM_PODS",
                        data: module26(e, "node_pod_utilisation.data.result")
                    },
                    {
                        key: "storage",
                        icon: "database",
                        unit: "%",
                        legend: [
                            "DISK_USAGE"
                        ],
                        title: "DISK_USAGE",
                        data: module26(e, "node_disk_size_utilisation.data.result")
                    }
                ];
                return <Module790 className={module4225.resources} title={t("RESOURCE_USAGE")} loading={this.monitoringStore.isLoading}><Module1135 tabs={hideGPUByLicense(a, this.cluster)}/></Module790>;
            }
        },
        {
            key: "renderAllocatedResources",
            value: function() {
                const detail = this.store.detail;
                return <Module790 className={module4225.allocated} title={t("ALLOCATED_RESOURCES")}><Module791 title={cpuFormat(module26(detail, 'annotations["node.kubesphere.io/cpu-requests"]')) === 1 ? t("CPU_CORE_PERCENT_SI", {
                    core: cpuFormat(module26(detail, 'annotations["node.kubesphere.io/cpu-requests"]')),
                    percent: module26(detail, 'annotations["node.kubesphere.io/cpu-requests-fraction"]')
                }) : t("CPU_CORE_PERCENT_PL", {
                    core: cpuFormat(module26(detail, 'annotations["node.kubesphere.io/cpu-requests"]')),
                    percent: module26(detail, 'annotations["node.kubesphere.io/cpu-requests-fraction"]')
                })} description={t("CPU_REQUEST_SCAP")}/><Module791 title={cpuFormat(module26(detail, 'annotations["node.kubesphere.io/cpu-limits"]')) === 1 ? t("CPU_CORE_PERCENT_SI", {
                    core: cpuFormat(module26(detail, 'annotations["node.kubesphere.io/cpu-limits"]')),
                    percent: module26(detail, 'annotations["node.kubesphere.io/cpu-limits-fraction"]')
                }) : t("CPU_CORE_PERCENT_PL", {
                    core: cpuFormat(module26(detail, 'annotations["node.kubesphere.io/cpu-limits"]')),
                    percent: module26(detail, 'annotations["node.kubesphere.io/cpu-limits-fraction"]')
                })} description={t("CPU_LIMIT_SCAP")}/><Module791 title={t("MEMORY_GIB_PERCENT", {
                    gib: memoryFormat(module26(detail, 'annotations["node.kubesphere.io/memory-requests"]'), "Gi"),
                    percent: module26(detail, 'annotations["node.kubesphere.io/memory-requests-fraction"]')
                })} description={t("MEMORY_REQUEST_SCAP")}/><Module791 title={t("MEMORY_GIB_PERCENT", {
                    gib: memoryFormat(module26(detail, 'annotations["node.kubesphere.io/memory-limits"]'), "Gi"),
                    percent: module26(detail, 'annotations["node.kubesphere.io/memory-limits-fraction"]')
                })} description={t("MEMORY_LIMIT_SCAP")}/></Module790>;
            }
        },
        {
            key: "renderConditions",
            value: function() {
                const conditions = this.store.detail.conditions;
                return <Module790 title={t("HEALTH_STATUS")}><div className={module4225.conditions}>{conditions.map((e, t)=><Module4221 key={e.type || t} data={e}/>)}</div></Module790>;
            }
        },
        {
            key: "renderTanits",
            value: function() {
                const taints = this.store.detail.taints;
                if (module63(taints)) {
                    return null;
                }
                return <Module790 title={t("TAINTS")} empty={t("NO_TAINTS_TIPS")}>{taints && <div>{taints.map((e, t)=><Module4223 key={e.type || t} data={e}/>)}</div>}</Module790>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module4225.main}>{this.renderResourceStatus()}{this.renderAllocatedResources()}{this.renderConditions()}{this.renderTanits()}</div>;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        }
    ]);
    return r;
})(Component)) || u) || u;
export default T;
