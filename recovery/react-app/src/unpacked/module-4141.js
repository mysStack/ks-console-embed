import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
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
import module4142 from "unpacked/module-4142.js";
import { Controller } from "components/Cards/Monitoring/index";
import { SimpleArea } from "components/Charts/index";
import Module863 from "unpacked/module-863.js";
import { hideGPUByLicense } from "utils/index";
import module4143 from "unpacked/module-4143.js";
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
    cpu_utilisation: "cluster_cpu_utilisation",
    memory_utilisation: "cluster_memory_utilisation",
    cpu_load1: "cluster_load1",
    cpu_load5: "cluster_load5",
    cpu_load15: "cluster_load15",
    gpu_usage: "cluster_gpu_usage",
    gpu_total: "cluster_gpu_total",
    gpu_utilization: "cluster_gpu_utilization",
    gpu_memory_utilization: "cluster_gpu_memory_utilization",
    gpu_memory_usage: "cluster_gpu_memory_usage",
    gpu_memory_total: "cluster_gpu_memory_total",
    disk_size_usage: "cluster_disk_size_usage",
    disk_inode_utilisation: "cluster_disk_inode_utilisation",
    disk_inode_usage: "cluster_disk_inode_usage",
    disk_inode_total: "cluster_disk_inode_total",
    disk_read_iops: "cluster_disk_read_iops",
    disk_write_iops: "cluster_disk_write_iops",
    disk_read_throughput: "cluster_disk_read_throughput",
    disk_write_throughput: "cluster_disk_write_throughput",
    net_transmitted: "cluster_net_bytes_transmitted",
    net_received: "cluster_net_bytes_received",
    pod_running: "cluster_pod_running_count",
    pod_pending: "cluster_pod_pending_count",
    pod_succeeded: "cluster_pod_succeeded_count",
    pod_failed: "cluster_pod_failed_count",
    pod_unknown: "cluster_pod_unknown_count"
};
const C = inject("rootStore")(u = observer(u = ((Component_1)=>{
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
            n.monitorStore.fetchMetrics({
                metrics: Object.values(hideGPUByLicense(T, n.props.match.params.cluster)),
                ...e
            });
        };
        n.getMonitoringCfgs = function() {
            const e = [
                {
                    type: "utilisation",
                    title: "CPU_USAGE",
                    unit: "%",
                    legend: [
                        "USAGE"
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
                        "USAGE"
                    ],
                    data: module26(n.metrics, `${T.memory_utilisation}.data.result`)
                },
                {
                    type: "utilisation",
                    title: "GPU_USAGE",
                    unit: "%",
                    legend: [
                        "USAGE"
                    ],
                    data: module26(n.metrics, `${T.gpu_utilization}.data.result`)
                },
                {
                    type: "usage",
                    title: "GPU_MEMORY_USAGE",
                    unitType: "memory",
                    legend: [
                        "USAGE"
                    ],
                    data: module26(n.metrics, `${T.gpu_memory_usage}.data.result`)
                },
                {
                    type: "usage",
                    title: "DISK_USAGE",
                    unitType: "disk",
                    legend: [
                        "USAGE"
                    ],
                    data: module26(n.metrics, `${T.disk_size_usage}.data.result`)
                },
                {
                    type: "utilisation",
                    title: "INODE_USAGE",
                    unit: "%",
                    legend: [
                        "USAGE"
                    ],
                    data: module26(n.metrics, `${T.disk_inode_utilisation}.data.result`),
                    renderTooltip: function() {
                        const usageData = getChartData({
                            unit: "",
                            legend: [
                                "USAGE"
                            ],
                            valuesData: [
                                module26(n.metrics, `${T.disk_inode_usage}.data.result[0].values`, [])
                            ]
                        });
                        const totalData = getChartData({
                            unit: "",
                            legend: [
                                "USAGE"
                            ],
                            valuesData: [
                                module26(n.metrics, `${T.disk_inode_total}.data.result[0].values`, [])
                            ]
                        });
                        return <Module863 usageData={usageData} totalData={totalData}/>;
                    }
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
                    type: "bandwidth",
                    title: "NETWORK_BANDWIDTH",
                    unitType: "bandwidth",
                    legend: [
                        "OUT",
                        "IN"
                    ],
                    data: [
                        module26(n.metrics, `${T.net_transmitted}.data.result[0]`, {}),
                        module26(n.metrics, `${T.net_received}.data.result[0]`, {})
                    ]
                },
                {
                    type: "count",
                    title: "POD_STATUS",
                    unit: "",
                    legend: [
                        "RUNNING",
                        "PENDING",
                        "COMPLETED",
                        "FAILED",
                        "UNKNOWN"
                    ],
                    data: [
                        module26(n.metrics, `${T.pod_running}.data.result[0]`, {}),
                        module26(n.metrics, `${T.pod_pending}.data.result[0]`, {}),
                        module26(n.metrics, `${T.pod_succeeded}.data.result[0]`, {}),
                        module26(n.metrics, `${T.pod_failed}.data.result[0]`, {}),
                        module26(n.metrics, `${T.pod_unknown}.data.result[0]`, {})
                    ]
                }
            ];
            const cluster = n.props.match.params.cluster;
            return hideGPUByLicense(e, cluster);
        };
        n.monitorStore = new module4142({
            cluster: e.match.params.cluster
        });
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const monitorStore = this.monitorStore;
                const { isLoading, isRefreshing } = monitorStore;
                const n = this.getMonitoringCfgs();
                return <Controller title={t("PHYSICAL_RESOURCES_MONITORING")} step="2m" times={50} onFetch={this.fetchData} loading={isLoading} refreshing={isRefreshing} isEmpty={module63(this.metrics)}><div className={module4143.content}>{n.map((e)=>{
                    e.data = module63(e.data) ? [
                        {
                            values: getZeroValues()
                        }
                    ] : e.data;
                    const t = getAreaChartOps(e);
                    return <div key={e.title} className={module4143.box}><SimpleArea width="100%" height={190} {...t}/></div>;
                })}</div></Controller>;
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
