import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-316.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-315.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module26 from "./module-26.js";
import { getAreaChartOps, getLastMonitoringData } from "./module-795.js";
import module891 from "./module-891.js";
import { hideGPUByLicense } from "./module-52.js";
import { SimpleArea } from "./module-799.js";
import { StatusTabs } from "./module-824.js";
import component from "./module-3761.js";
let l;
const C = {
    cpu_usage: "cluster_cpu_usage",
    cpu_total: "cluster_cpu_total",
    cpu_utilisation: "cluster_cpu_utilisation",
    gpu_usage: "cluster_gpu_usage",
    gpu_total: "cluster_gpu_total",
    gpu_utilization: "cluster_gpu_utilization",
    gpu_memory_utilization: "cluster_gpu_memory_utilization",
    gpu_memory_usage: "cluster_gpu_memory_usage",
    gpu_memory_total: "cluster_gpu_memory_total",
    memory_usage: "cluster_memory_usage_wo_cache",
    memory_total: "cluster_memory_total",
    memory_utilisation: "cluster_memory_utilisation",
    disk_size_usage: "cluster_disk_size_usage",
    disk_size_capacity: "cluster_disk_size_capacity",
    disk_utilisation: "cluster_disk_size_utilisation",
    pod_count: "cluster_pod_running_count",
    pod_capacity: "cluster_pod_quota"
};
const D = inject("rootStore")(l = observer(l = ((Component_1)=>{
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
        t.fetchData = function(e = {}) {
            t.monitorStore.fetchMetrics({
                metrics: Object.values(hideGPUByLicense(C, t.props.cluster)),
                step: "5m",
                times: 100,
                ...e
            });
        };
        t.getValue = function(e) {
            return module26(e, "value[1]", 0);
        };
        t.getTabOptions = function() {
            const e = getLastMonitoringData(t.metrics);
            const a = [
                {
                    name: "CPU",
                    unitType: "cpu",
                    used: t.getValue(e[C.cpu_usage]),
                    total: t.getValue(e[C.cpu_total])
                },
                {
                    name: "MEMORY",
                    unitType: "memory",
                    used: t.getValue(e[C.memory_usage]),
                    total: t.getValue(e[C.memory_total])
                },
                {
                    name: "GPU",
                    used: t.getValue(e[C.gpu_usage]),
                    total: t.getValue(e[C.gpu_total])
                },
                {
                    name: "GPU_MEMORY",
                    unitType: "memory",
                    used: t.getValue(e[C.gpu_memory_usage]),
                    total: t.getValue(e[C.gpu_memory_total])
                },
                {
                    name: "DISK",
                    unitType: "disk",
                    used: t.getValue(e[C.disk_size_usage]),
                    total: t.getValue(e[C.disk_size_capacity])
                },
                {
                    name: "PODS",
                    unit: "",
                    used: t.getValue(e[C.pod_count]),
                    total: t.getValue(e[C.pod_capacity])
                }
            ];
            return hideGPUByLicense(a, t.props.cluster).map((e)=>({
                    props: e,
                    component
                }));
        };
        t.getContentOptions = function() {
            const e = [
                {
                    type: "utilisation",
                    title: "CPU_USAGE",
                    unit: "%",
                    legend: [
                        "USAGE"
                    ],
                    data: module26(t.metrics, `${C.cpu_utilisation}.data.result`)
                },
                {
                    type: "utilisation",
                    title: "MEMORY_USAGE",
                    unit: "%",
                    legend: [
                        "USAGE"
                    ],
                    data: module26(t.metrics, `${C.memory_utilisation}.data.result`)
                },
                {
                    type: "utilisation",
                    title: "GPU_USAGE",
                    unit: "%",
                    legend: [
                        "USAGE"
                    ],
                    data: module26(t.metrics, `${C.gpu_utilization}.data.result`)
                },
                {
                    title: "GPU_MEMORY_USAGE",
                    type: "utilisation",
                    unit: "%",
                    legend: [
                        "USAGE"
                    ],
                    data: module26(t.metrics, `${C.gpu_memory_utilization}.data.result`)
                },
                {
                    type: "utilisation",
                    title: "DISK_USAGE",
                    unit: "%",
                    legend: [
                        "USAGE"
                    ],
                    data: module26(t.metrics, `${C.disk_utilisation}.data.result`)
                },
                {
                    title: "POD_COUNT",
                    unit: "",
                    legend: [
                        "COUNT"
                    ],
                    data: module26(t.metrics, `${C.pod_count}.data.result`)
                }
            ];
            return hideGPUByLicense(e, t.props.cluster).map((e)=>({
                    props: e,
                    render: t.renderChart
                }));
        };
        t.monitorStore = new module891({
            cluster: e.cluster
        });
        return t;
    }
    module37(r, [
        {
            key: "renderChart",
            value: function(e) {
                const t = {
                    key: e.title,
                    width: "100%",
                    height: "100%"
                };
                e.type;
                const a = getAreaChartOps(e);
                return <SimpleArea {...t} {...a}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const monitorStore = this.monitorStore;
                const { isLoading, isRefreshing } = monitorStore;
                return <StatusTabs title={t("CLUSTER_RESOURCE_USAGE")} tabOptions={this.getTabOptions()} contentOptions={this.getContentOptions()} loading={isLoading} refreshing={isRefreshing} onFetch={this.fetchData}/>;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "metrics",
            get: function() {
                return this.monitorStore.data;
            }
        }
    ]);
    return r;
})(Component)) || l) || l;
export default D;
