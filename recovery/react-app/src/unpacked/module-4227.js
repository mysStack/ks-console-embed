import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module61 from "unpacked/module-61.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import { getAreaChartOps, getChartData, getZeroValues } from "utils/monitoring";
import module1137 from "unpacked/module-1137.js";
import { Controller } from "components/Cards/Monitoring/index";
import { SimpleArea } from "components/Charts/index";
import Module863 from "unpacked/module-863.js";
import { hideGPUByLicense } from "utils/index";
let u;
function R(e, t) {
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
const T = {
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
const C = inject("detailStore")(u = observer(u = ((Component_1)=>{
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
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.fetchData = function(e) {
            const { name, role = [] } = n.store.detail;
            n.monitorStore.fetchMetrics({
                resources: [
                    name
                ],
                metrics: Object.values(hideGPUByLicense(T, n.cluster)),
                fillZero: !role.includes("edge"),
                ...e
            });
        };
        n.getMonitoringCfgs = function() {
            const e = module26(n.metrics, `${T.device_size_utilisation}.data.result`, []);
            const a = e && e.map((e)=>e.metric.device);
            return [
                {
                    type: "utilisation",
                    title: "CPU_USAGE",
                    unit: "%",
                    legend: [
                        "CPU_USAGE"
                    ],
                    data: module26(n.metrics, `${T.cpu_utilisation}.data.result`)
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
                        module26(n.metrics, `${T.cpu_load1}.data.result[0]`, {}),
                        module26(n.metrics, `${T.cpu_load5}.data.result[0]`, {}),
                        module26(n.metrics, `${T.cpu_load15}.data.result[0]`, {})
                    ]
                },
                {
                    type: "utilisation",
                    title: "MEMORY_USAGE",
                    unit: "%",
                    legend: [
                        "MEMORY_USAGE"
                    ],
                    data: module26(n.metrics, `${T.memory_utilisation}.data.result`)
                },
                {
                    type: "utilisation",
                    title: "GPU_USAGE",
                    unit: "%",
                    legend: [
                        "GPU_USAGE"
                    ],
                    data: module26(n.metrics, `${T.gpu_utilization}.data.result`)
                },
                {
                    type: "utilisation",
                    title: "GPU_MEMORY_USAGE",
                    unit: "%",
                    legend: [
                        "GPU_MEMORY_USAGE"
                    ],
                    data: module26(n.metrics, `${T.gpu_memory_utilization}.data.result`)
                },
                {
                    type: "usage",
                    title: "GPU_TEMP",
                    unit: "℃",
                    legend: [
                        "GPU_TEMP"
                    ],
                    data: module26(n.metrics, `${T.gpu_temp}.data.result`)
                },
                {
                    type: "usage",
                    title: "GPU_ENERGY_NO_PERCENT_TCAP",
                    unit: "W",
                    legend: [
                        "GPU_ENERGY_NO_PERCENT_TCAP"
                    ],
                    data: module26(n.metrics, `${T.gpu_power_usage}.data.result`)
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
                        module26(n.metrics, `${T.gpu_memory_usage}.data.result[0]`, {}),
                        module26(n.metrics, `${T.gpu_memory_available}.data.result[0]`, {})
                    ]
                },
                {
                    type: "utilisation",
                    title: "INODE_USAGE",
                    unit: "%",
                    legend: [
                        "INODE_USAGE"
                    ],
                    data: module26(n.metrics, `${T.disk_inode_utilisation}.data.result`),
                    renderTooltip: function() {
                        const e = getChartData({
                            unit: "",
                            legend: [
                                "USAGE"
                            ],
                            valuesData: [
                                module26(n.metrics, `${T.disk_inode_usage}.data.result[0].values`, [])
                            ]
                        });
                        const t = getChartData({
                            unit: "",
                            legend: [
                                "USAGE"
                            ],
                            valuesData: [
                                module26(n.metrics, `${T.disk_inode_total}.data.result[0].values`, [])
                            ]
                        });
                        return <Module863 usageData={e} totalData={t}/>;
                    }
                },
                {
                    type: "utilisation",
                    title: "MEMORY_USAGE",
                    unit: "%",
                    legend: [
                        "MEMORY_USAGE"
                    ],
                    data: module26(n.metrics, `${T.memory_utilisation}.data.result`)
                },
                {
                    type: "utilisation",
                    title: "DISK_USAGE",
                    unit: "%",
                    legend: [
                        "DISK_USAGE"
                    ],
                    data: module26(n.metrics, `${T.disk_utilisation}.data.result`)
                },
                {
                    type: "utilisation",
                    title: "DISK_USAGE_DETAILS",
                    unit: "%",
                    legend: [
                        "AVERAGE_USAGE"
                    ].concat(module61(a)),
                    data: [
                        module26(n.metrics, `${T.disk_utilisation}.data.result[0]`)
                    ].concat(module61(e))
                },
                {
                    type: "utilisation",
                    title: "INODE_USAGE",
                    unit: "%",
                    legend: [
                        "INODE_USAGE"
                    ],
                    data: module26(n.metrics, `${T.disk_inode_utilisation}.data.result`),
                    renderTooltip: function() {
                        const e = getChartData({
                            unit: "",
                            legend: [
                                "USAGE"
                            ],
                            valuesData: [
                                module26(n.metrics, `${T.disk_inode_usage}.data.result[0].values`, [])
                            ]
                        });
                        const t = getChartData({
                            unit: "",
                            legend: [
                                "USAGE"
                            ],
                            valuesData: [
                                module26(n.metrics, `${T.disk_inode_total}.data.result[0].values`, [])
                            ]
                        });
                        return <Module863 usageData={e} totalData={t}/>;
                    }
                },
                {
                    type: "iops",
                    title: "IOPS",
                    legend: [
                        "READ",
                        "WRITE"
                    ],
                    data: [
                        module26(n.metrics, `${T.disk_read_iops}.data.result[0]`, {}),
                        module26(n.metrics, `${T.disk_write_iops}.data.result[0]`, {})
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
                        module26(n.metrics, `${T.disk_read_throughput}.data.result[0]`, {}),
                        module26(n.metrics, `${T.disk_write_throughput}.data.result[0]`, {})
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
                        module26(n.metrics, `${T.net_transmitted}.data.result[0]`, {}),
                        module26(n.metrics, `${T.net_received}.data.result[0]`, {})
                    ]
                }
            ];
        };
        n.monitorStore = new module1137({
            cluster: n.cluster
        });
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const createTime = this.store.detail.createTime;
                const monitorStore = this.monitorStore;
                const { isLoading, isRefreshing } = monitorStore;
                const n = hideGPUByLicense(this.getMonitoringCfgs(), this.cluster);
                return <Controller createTime={createTime} onFetch={this.fetchData} loading={isLoading} refreshing={isRefreshing} isEmpty={module63(this.metrics)}>{n.map((e)=>{
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
    return r;
})(Component)) || u) || u;
export default C;
