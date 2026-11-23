import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-316.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import { observer } from "./module-239.js";
import module26 from "./module-26.js";
import module186 from "./module-186.js";
import "./module-1419.js";
import module1282 from "./module-1282.js";
import module1281 from "./module-1281.js";
import module4506 from "./module-4506.js";
import module4507 from "./module-4507.js";
import module1886 from "./module-1886.js";
import module791 from "./module-791.js";
import module790 from "./module-790.js";
import module816 from "./module-816.js";
import module4508 from "./module-4508.js";
import module891 from "./module-891.js";
import { getLastMonitoringData } from "./module-795.js";
import { hideGPUByLicense } from "./module-52.js";
import module3 from "./module-3.js";
import module4510 from "./module-4510.js";
let y;
const A = {
    cpu_usage: "cluster_cpu_usage",
    cpu_total: "cluster_cpu_total",
    memory_usage: "cluster_memory_usage_wo_cache",
    memory_total: "cluster_memory_total",
    gpu_usage: "cluster_gpu_usage",
    gpu_total: "cluster_gpu_total",
    gpu_memory_usage: "cluster_gpu_memory_usage",
    gpu_memory_total: "cluster_gpu_memory_total",
    disk_size_usage: "cluster_disk_size_usage",
    disk_size_capacity: "cluster_disk_size_capacity",
    pod_count: "cluster_pod_running_count",
    pod_capacity: "cluster_pod_quota"
};
const j = observer(y = ((e)=>{
    module55(a, e);
    var r = ((e)=>{
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
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a(...o) {
        let e;
        module36(this, a);
        e = r.call(this, ...o);
        e.monitorStore = new module891({
            cluster: e.props.cluster.name
        });
        e.getValue = function(e) {
            return module26(e, "value[1]", 0);
        };
        e.fetchData = function() {
            if (e.isReady) {
                e.monitorStore.fetchMetrics({
                    metrics: Object.values(hideGPUByLicense(A, e.props.cluster.name)),
                    last: true
                });
            } else {
                e.monitorStore.isLoading = false;
            }
        };
        e.getResourceOptions = function() {
            const t = getLastMonitoringData(e.metrics);
            return [
                {
                    name: "CPU",
                    unitType: "cpu",
                    used: e.getValue(t[A.cpu_usage]),
                    total: e.getValue(t[A.cpu_total])
                },
                {
                    name: "GPU",
                    unitType: "gpu",
                    used: e.getValue(t[A.gpu_usage]),
                    total: e.getValue(t[A.gpu_total])
                },
                {
                    name: "MEMORY",
                    unitType: "memory",
                    used: e.getValue(t[A.memory_usage]),
                    total: e.getValue(t[A.memory_total])
                },
                {
                    name: "GPU_MEMORY",
                    unitType: "memory",
                    used: e.getValue(t[A.gpu_memory_usage]),
                    total: e.getValue(t[A.gpu_memory_total])
                },
                {
                    name: "POD",
                    unitType: "",
                    used: e.getValue(t[A.pod_count]),
                    total: e.getValue(t[A.pod_capacity])
                },
                {
                    name: "DISK",
                    unitType: "disk",
                    used: e.getValue(t[A.disk_size_usage]),
                    total: e.getValue(t[A.disk_size_capacity])
                }
            ];
        };
        e.getRadarOptions = function(e) {
            return e.map((e)=>({
                    name: t(e.name),
                    usage: Math.round(100 * e.used / (e.total || e.used))
                }));
        };
        return e;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "render",
            value: function() {
                const cluster = this.props.cluster;
                const r = hideGPUByLicense(this.getResourceOptions(), cluster.name);
                const data = this.getRadarOptions(r);
                const n = this.showLicenseTip ? {
                    cx: 200,
                    cy: 100,
                    width: 400,
                    height: 200
                } : {
                    cx: 180,
                    cy: 90,
                    width: 300,
                    height: 180
                };
                return module553.default.createElement(module790, {
                    key: cluster.name
                }, module553.default.createElement(module186.Loading, {
                    spinning: this.monitorStore.isLoading
                }, module553.default.createElement("div", {
                    className: module4510.cluster
                }, module553.default.createElement("div", {
                    className: module4510.info
                }, module553.default.createElement("div", {
                    className: module4510.title
                }, module553.default.createElement(module816, {
                    cluster
                })), module553.default.createElement("div", {
                    className: module4510.desc
                }, module553.default.createElement(module791, {
                    title: cluster.kubernetesVersion,
                    description: t("KUBERNETES_VERSION")
                }), module553.default.createElement(module791, {
                    title: cluster.provider || "-",
                    description: t("PROVIDER")
                })), this.isReady && module553.default.createElement("div", {
                    className: module3(module4510.chartNoGPU, module31({}, module4510.chart, !this.showLicenseTip))
                }, module553.default.createElement(module4507, {
                    ...n,
                    data
                }, module553.default.createElement(module4506, {
                    gridType: "circle"
                }), module553.default.createElement(module1281, {
                    dataKey: "name"
                }), module553.default.createElement(module1282, {
                    domain: [
                        0,
                        100
                    ]
                }), module553.default.createElement(module1886, {
                    dataKey: "usage",
                    stroke: "#329DCE",
                    fill: "rgba(126, 184, 220, 0.2)"
                }))), module553.default.createElement(module186.Icon, {
                    name: "cluster",
                    size: 200,
                    className: module4510.cornerIcon
                })), this.isReady && module553.default.createElement("div", {
                    className: module3(module4510.monitorNoGPU, module31({}, module4510.monitor, !this.showLicenseTip))
                }, r.map((e)=>module553.default.createElement(module4508, {
                        key: e.name,
                        ...e
                    }))))));
            }
        },
        {
            key: "metrics",
            get: function() {
                return this.monitorStore.data;
            }
        },
        {
            key: "isReady",
            get: function() {
                return this.props.cluster.isReady;
            }
        },
        {
            key: "showLicenseTip",
            get: function() {
                return globals.licenseInfo?.showLicenseTip || !module26(globals, 'ksConfig["gpu.monitoring"]', false);
            }
        }
    ]);
    return a;
})(module553.Component)) || y;
export default j;
