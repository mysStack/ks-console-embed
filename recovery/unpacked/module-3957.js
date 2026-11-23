import "./module-12.js";
import "./module-5.js";
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
import { getAreaChartOps, getChartData } from "./module-795.js";
import module973 from "./module-973.js";
import { Controller } from "./module-824.js";
import { SimpleArea } from "./module-799.js";
import Module863 from "./module-863.js";
import { hideGPUByLicense } from "./module-52.js";
let o;
function k(e, t) {
    const r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let n = Object.getOwnPropertySymbols(e);
        if (t) {
            n = n.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        r.push.apply(r, n);
    }
    return r;
}
const C = {
    cpu_utilisation: "node_cpu_utilisation",
    cpu_load1: "node_load1",
    cpu_load5: "node_load5",
    cpu_load15: "node_load15",
    gpu_utilization: "node_gpu_utilization",
    gpu_memory_utilization: "node_gpu_memory_utilization",
    gpu_memory_available: "node_gpu_memory_available",
    gpu_memory_usage: "node_gpu_memory_usage",
    gpu_temp: "node_gpu_temp",
    gpu_power_usage: "node_gpu_power_usage",
    memory_utilisation: "node_memory_utilisation",
    memory_usage: "node_memory_usage_wo_cache",
    disk_utilisation: "node_disk_size_utilisation",
    disk_inode_utilisation: "node_disk_inode_utilisation",
    device_size_utilisation: "node_device_size_utilisation",
    disk_inode_usage: "node_disk_inode_usage",
    disk_inode_total: "node_disk_inode_total",
    disk_read_iops: "node_disk_read_iops",
    disk_write_iops: "node_disk_write_iops",
    disk_read_throughput: "node_disk_read_throughput",
    disk_write_throughput: "node_disk_write_throughput",
    net_transmitted: "node_net_bytes_transmitted",
    net_received: "node_net_bytes_received"
};
const T = inject("detailStore")(o = observer(o = ((Component_1)=>{
    module55(n, Component_1);
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
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(e) {
        let a;
        module36(this, n);
        a = r.call(this, e);
        a.fetchData = function(e) {
            const { name, role = [] } = a.store.detail;
            a.monitorStore.fetchMetrics({
                resources: [
                    name
                ],
                metrics: Object.values(hideGPUByLicense(C, a.cluster)),
                fillZero: !role.includes("edge"),
                ...e
            });
        };
        a.getMonitoringCfgs = function() {
            const e = module26(a.metrics, `${C.device_size_utilisation}.data.result`, []);
            const r = e && e.map((e)=>e.metric.device);
            return [
                {
                    type: "utilisation",
                    title: "CPU_USAGE",
                    unit: "%",
                    legend: [
                        "CPU_USAGE"
                    ],
                    data: module26(a.metrics, `${C.cpu_utilisation}.data.result`)
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
                        module26(a.metrics, `${C.cpu_load1}.data.result[0]`, {}),
                        module26(a.metrics, `${C.cpu_load5}.data.result[0]`, {}),
                        module26(a.metrics, `${C.cpu_load15}.data.result[0]`, {})
                    ]
                },
                {
                    type: "usage",
                    title: "MEMORY_USAGE",
                    unitType: "memory",
                    legend: [
                        "MEMORY_USAGE"
                    ],
                    data: module26(a.metrics, `${C.memory_usage}.data.result`)
                },
                {
                    type: "utilisation",
                    title: "MEMORY_USAGE",
                    unit: "%",
                    legend: [
                        "MEMORY_USAGE"
                    ],
                    data: module26(a.metrics, `${C.memory_utilisation}.data.result`)
                },
                {
                    type: "utilisation",
                    title: "GPU_USAGE",
                    unit: "%",
                    legend: [
                        "GPU_USAGE"
                    ],
                    data: module26(a.metrics, `${C.gpu_utilization}.data.result`)
                },
                {
                    type: "utilisation",
                    title: "GPU_MEMORY_USAGE",
                    unit: "%",
                    legend: [
                        "GPU_MEMORY_USAGE"
                    ],
                    data: module26(a.metrics, `${C.gpu_memory_utilization}.data.result`)
                },
                {
                    type: "usage",
                    title: "GPU_TEMP",
                    unit: "℃",
                    legend: [
                        "GPU_TEMP"
                    ],
                    data: module26(a.metrics, `${C.gpu_temp}.data.result`)
                },
                {
                    type: "usage",
                    title: "GPU_ENERGY_NO_PERCENT_TCAP",
                    unit: "W",
                    legend: [
                        "GPU_ENERGY_NO_PERCENT_TCAP"
                    ],
                    data: module26(a.metrics, `${C.gpu_power_usage}.data.result`)
                },
                {
                    type: "usage",
                    title: "GPU_MEMORY_USAGE",
                    unitType: "memory",
                    legend: [
                        "NODE_GPU_MEMORY_USAGED",
                        "NODE_GPU_MEMORY_UNUSAGED"
                    ],
                    data: [
                        module26(a.metrics, `${C.gpu_memory_usage}.data.result[0]`, {}),
                        module26(a.metrics, `${C.gpu_memory_available}.data.result[0]`, {})
                    ]
                },
                {
                    type: "utilisation",
                    title: "INODE_USAGE",
                    unit: "%",
                    legend: [
                        "INODE_USAGE"
                    ],
                    data: module26(a.metrics, `${C.disk_inode_utilisation}.data.result`),
                    renderTooltip: function() {
                        const usageData = getChartData({
                            legend: [
                                "INODE_USAGE"
                            ],
                            valuesData: [
                                module26(a.metrics, `${C.disk_inode_usage}.data.result[0].values`, [])
                            ]
                        });
                        const totalData = getChartData({
                            legend: [
                                "INODE_USAGE"
                            ],
                            valuesData: [
                                module26(a.metrics, `${C.disk_inode_total}.data.result[0].values`, [])
                            ]
                        });
                        return <Module863 usageData={usageData} totalData={totalData}/>;
                    }
                },
                {
                    type: "utilisation",
                    title: "DISK_USAGE",
                    unit: "%",
                    legend: [
                        "DISK_USAGE"
                    ],
                    data: module26(a.metrics, `${C.disk_utilisation}.data.result`)
                },
                {
                    type: "utilisation",
                    title: "DISK_USAGE_DETAILS",
                    unit: "%",
                    legend: [
                        "AVERAGE_USAGE"
                    ].concat(module61(r)),
                    data: [
                        module26(a.metrics, `${C.disk_utilisation}.data.result[0]`)
                    ].concat(module61(e))
                },
                {
                    type: "iops",
                    title: "IOPS",
                    legend: [
                        "READ",
                        "WRITE"
                    ],
                    data: [
                        module26(a.metrics, `${C.disk_read_iops}.data.result[0]`, {}),
                        module26(a.metrics, `${C.disk_write_iops}.data.result[0]`, {})
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
                        module26(a.metrics, `${C.disk_read_throughput}.data.result[0]`, {}),
                        module26(a.metrics, `${C.disk_write_throughput}.data.result[0]`, {})
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
                        module26(a.metrics, `${C.net_transmitted}.data.result[0]`, {}),
                        module26(a.metrics, `${C.net_received}.data.result[0]`, {})
                    ]
                }
            ];
        };
        a.monitorStore = new module973({
            cluster: a.cluster
        });
        return a;
    }
    module37(n, [
        {
            key: "render",
            value: function() {
                const createTime = this.store.detail.createTime;
                const monitorStore = this.monitorStore;
                const { isLoading, isRefreshing } = monitorStore;
                const a = hideGPUByLicense(this.getMonitoringCfgs(), this.cluster);
                return <Controller createTime={createTime} onFetch={this.fetchData} loading={isLoading} refreshing={isRefreshing} isEmpty={module63(this.metrics)}>{a.map((e)=>{
                    const t = getAreaChartOps(e);
                    if (module63(t.data)) {
                        return null;
                    }
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
