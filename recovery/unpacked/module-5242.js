import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-316.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-62.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-315.js";
import module61 from "./module-61.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import { getAreaChartOps, getZeroValues } from "./module-795.js";
import module954 from "./module-954.js";
import { SimpleArea } from "./module-799.js";
import { Controller } from "./module-824.js";
let o;
const k = {
    cpu_utilisation: "node_cpu_utilisation",
    cpu_load1: "node_load1",
    cpu_load5: "node_load5",
    cpu_load15: "node_load15",
    memory_utilisation: "node_memory_utilisation",
    disk_read_iops: "node_disk_read_iops",
    disk_write_iops: "node_disk_write_iops",
    disk_read_throughput: "node_disk_read_throughput",
    disk_write_throughput: "node_disk_write_throughput",
    net_transmitted: "node_net_bytes_transmitted",
    net_received: "node_net_bytes_received",
    gpu_utilisation: "edge_node_gpu_utilization",
    gpu_memory_utilisation: "edge_node_gpu_memory_utilization",
    gpu_temp: "edge_node_gpu_temp",
    gpu_power_usage: "edge_node_gpu_power_usage",
    gpu_memory_usage: "edge_node_gpu_memory_usage",
    gpu_memory_available: "edge_node_gpu_memory_available",
    npu_utilization: "edge_node_npu_utilization",
    npu_memory_utilization: "edge_node_npu_memory_utilization",
    npu_temp: "edge_node_npu_temp",
    npu_power_usage: "edge_node_npu_power",
    npu_voltage_usage: "edge_node_npu_voltage",
    npu_memory_available: "edge_node_npu_memory_available",
    npu_health_status: "edge_node_npu_health_status"
};
const T = inject("detailStore")(o = observer(o = ((Component_1)=>{
    module55(n, Component_1);
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
            const n = module51(e);
            if (t) {
                const r = module51(this).constructor;
                a = Reflect.construct(n, arguments, r);
            } else {
                a = n.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(n);
    function n(e) {
        let r;
        module36(this, n);
        r = a.call(this, e);
        r.fetchData = function(e) {
            const { name, role = [] } = r.store.detail;
            r.monitorStore.fetchMetrics({
                ...r.props.match.params,
                resources: [
                    name
                ],
                metrics: Object.values(k),
                fillZero: !role.includes("edge"),
                ...e
            });
        };
        r.getMonitoringCfgs = function() {
            return [
                {
                    type: "utilisation",
                    title: "CPU_USAGE",
                    unit: "%",
                    legend: [
                        "CPU_USAGE"
                    ],
                    data: module26(r.metrics, `${k.cpu_utilisation}.data.result`)
                },
                {
                    type: "load",
                    title: "AVERAGE_CPU_LOAD",
                    legend: [
                        t("TIME_M", {
                            num: 1
                        }),
                        t("TIME_M", {
                            num: 5
                        }),
                        t("TIME_M", {
                            num: 15
                        })
                    ],
                    data: [
                        module26(r.metrics, `${k.cpu_load1}.data.result[0]`, {}),
                        module26(r.metrics, `${k.cpu_load5}.data.result[0]`, {}),
                        module26(r.metrics, `${k.cpu_load15}.data.result[0]`, {})
                    ]
                },
                {
                    type: "utilisation",
                    title: "MEMORY_USAGE",
                    unit: "%",
                    legend: [
                        "USAGE"
                    ],
                    data: module26(r.metrics, `${k.memory_utilisation}.data.result`)
                },
                {
                    type: "utilisation",
                    title: "GPU_USAGE",
                    unit: "%",
                    legend: [
                        "GPU_USAGE"
                    ],
                    data: module26(r.metrics, `${k.gpu_utilization}.data.result`)
                },
                {
                    type: "utilisation",
                    title: "EDGE_GPU_MEMORY_USAGE",
                    unit: "%",
                    legend: [
                        "EDGE_GPU_MEMORY_USAGE"
                    ],
                    data: module26(r.metrics, `${k.gpu_memory_utilization}.data.result`)
                },
                {
                    type: "usage",
                    title: "GPU_TEMP",
                    unit: "℃",
                    legend: [
                        "GPU_TEMP"
                    ],
                    data: module26(r.metrics, `${k.gpu_temp}.data.result`)
                },
                {
                    type: "usage",
                    title: "GPU_ENERGY_NO_PERCENT_TCAP",
                    unit: "W",
                    legend: [
                        "GPU_ENERGY_NO_PERCENT_TCAP"
                    ],
                    data: module26(r.metrics, `${k.gpu_power_usage}.data.result`)
                },
                {
                    type: "usage",
                    title: "EDGE_GPU_MEMORY_USAGE_STATUS",
                    unitType: "memory",
                    legend: [
                        "EDGE_NODE_GPU_MEMORY_USAGED",
                        "EDGE_NODE_GPU_MEMORY_UNUSAGED"
                    ],
                    data: [
                        module26(r.metrics, `${k.gpu_memory_usage}.data.result[0]`, {}),
                        module26(r.metrics, `${k.gpu_memory_available}.data.result[0]`, {})
                    ]
                },
                {
                    type: "utilisation",
                    title: "NPU_USAGE",
                    unit: "%",
                    legend: [
                        "NPU_USAGE"
                    ],
                    data: module26(r.metrics, `${k.npu_utilization}.data.result`)
                },
                {
                    type: "utilisation",
                    title: "NPU_MEMORY_USAGE",
                    unit: "%",
                    legend: [
                        "NPU_MEMORY_USAGE"
                    ],
                    data: module26(r.metrics, `${k.npu_memory_utilization}.data.result`)
                },
                {
                    type: "usage",
                    title: "NPU_TEMP",
                    unit: "℃",
                    legend: [
                        "NPU_TEMP"
                    ],
                    data: module26(r.metrics, `${k.npu_temp}.data.result`)
                },
                {
                    type: "usage",
                    title: "NPU_ENERGY_NO_PERCENT_TCAP",
                    unit: "W",
                    legend: [
                        "NPU_ENERGY_NO_PERCENT_TCAP"
                    ],
                    data: module26(r.metrics, `${k.npu_power_usage}.data.result`)
                },
                {
                    type: "usage",
                    title: "NPU_VOLTAGE",
                    unit: "V",
                    legend: [
                        "NPU_VOLTAGE"
                    ],
                    data: module26(r.metrics, `${k.npu_voltage_usage}.data.result`)
                },
                {
                    type: "usage",
                    title: "NPU_MEMORY_USAGE_STATUS",
                    unitType: "memory",
                    legend: [
                        "EDGE_NODE_NPU_MEMORY_USAGED",
                        "EDGE_NODE_NPU_MEMORY_UNUSAGED"
                    ],
                    data: [
                        module26(r.metrics, `${k.npu_memory_usage}.data.result[0]`, {}),
                        module26(r.metrics, `${k.npu_memory_available}.data.result[0]`, {})
                    ]
                },
                {
                    type: "usage",
                    title: "NPU_HEALTH_STATUS",
                    unitType: "",
                    legend: module26(r.metrics, `${k.npu_health_status}.data.result`, []).map((e)=>`chip${e.metric.id}`),
                    data: module61(module26(r.metrics, `${k.npu_health_status}.data.result`, []))
                },
                {
                    type: "iops",
                    title: "IOPS",
                    legend: [
                        "READ",
                        "WRITE"
                    ],
                    data: [
                        module26(r.metrics, `${k.disk_read_iops}.data.result[0]`, {}),
                        module26(r.metrics, `${k.disk_write_iops}.data.result[0]`, {})
                    ]
                },
                {
                    type: "throughput",
                    title: "DISK_THROUGHPUT",
                    unitType: "throughput",
                    legend: [
                        "READ",
                        "WRITE"
                    ],
                    data: [
                        module26(r.metrics, `${k.disk_read_throughput}.data.result[0]`, {}),
                        module26(r.metrics, `${k.disk_write_throughput}.data.result[0]`, {})
                    ]
                },
                {
                    type: "bandwidth",
                    title: "NETWORK_TRAFFIC",
                    unitType: "bandwidth",
                    legend: [
                        "OUT",
                        "IN"
                    ],
                    data: [
                        module26(r.metrics, `${k.net_transmitted}.data.result[0]`, {}),
                        module26(r.metrics, `${k.net_received}.data.result[0]`, {})
                    ]
                }
            ];
        };
        r.monitorStore = new module954({
            cluster: r.cluster
        });
        return r;
    }
    module37(n, [
        {
            key: "render",
            value: function() {
                const createTime = this.store.detail.createTime;
                const monitorStore = this.monitorStore;
                const { isLoading, isRefreshing } = monitorStore;
                const r = this.getMonitoringCfgs();
                return <Controller createTime={createTime} onFetch={this.fetchData} loading={isLoading} refreshing={isRefreshing} isEmpty={module63(this.metrics)}>{r.map((e)=>{
                    e.data = module63(e.data) ? [
                        {
                            values: getZeroValues()
                        }
                    ] : e.data;
                    const t = getAreaChartOps(e);
                    return <SimpleArea key={t.title} width="100%" {...t}/>;
                })}</Controller>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.detailStore;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "metrics",
            get: function() {
                return this.monitorStore.data;
            }
        }
    ]);
    return n;
})(Component)) || o) || o;
export default T;
