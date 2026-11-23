import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-73.js";
import "./module-18.js";
import "./module-16.js";
import "./module-98.js";
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
import "./module-22.js";
import "./module-57.js";
import module96 from "./module-96.js";
import "./module-315.js";
import "./module-41.js";
import "./module-31.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import { Controller } from "./module-824.js";
import { SimpleArea } from "./module-799.js";
import Module802 from "./module-802.js";
import { hideGPUByLicense } from "./module-52.js";
import { getAreaChartOps, getZeroValues } from "./module-795.js";
import module989 from "./module-989.js";
import Module4726 from "./module-4726.js";
let i;
const C = {
    cpu_usage: "pod_cpu_usage",
    memory_usage: "pod_memory_usage_wo_cache",
    gpu_usage: "pod_gpu_usage",
    gpu_memory_usage: "pod_gpu_memory_usage",
    net_transmitted: "pod_net_bytes_transmitted",
    net_received: "pod_net_bytes_received"
};
const P = inject("instanceDetailStore", "detailStore")(i = observer(i = ((Component_1)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.monitorStore = new module989;
        e.state = {
            hasMetrics: false
        };
        e.fetchData = async (a)=>{
            let r;
            let cluster;
            let namespace;
            let pod;
            let instanceId;
            r = e.store.detail;
            cluster = r.cluster;
            namespace = r.namespace;
            pod = r.name;
            instanceId = e.props.match.params.instanceId;
            if (await e.instanceDetailStore.checkHasMetrics({
                cluster,
                namespace,
                instanceId
            })) {
                e.setState({
                    hasMetrics: true
                });
                e.monitorStore.fetchMetrics({
                    cluster,
                    namespace,
                    pod,
                    metrics: Object.values(hideGPUByLicense(C, cluster)),
                    ...a
                });
            } else {
                e.setState({
                    hasMetrics: false
                });
            }
        };
        e.getMonitoringCfgs = function() {
            return [
                {
                    type: "cpu",
                    title: "CPU_USAGE",
                    unitType: "cpu",
                    legend: [
                        "USAGE"
                    ],
                    data: module26(e.metrics, `${C.cpu_usage}.data.result`)
                },
                {
                    type: "memory",
                    title: "MEMORY_USAGE",
                    unitType: "memory",
                    legend: [
                        "USAGE"
                    ],
                    data: module26(e.metrics, `${C.memory_usage}.data.result`)
                },
                {
                    type: "gpu",
                    title: "GPU_USAGE",
                    unitType: "gpu",
                    legend: [
                        "USAGE"
                    ],
                    data: module26(e.metrics, `${C.gpu_usage}.data.result`)
                },
                {
                    type: "gpu_memory",
                    title: "GPU_MEMORY_USAGE",
                    unitType: "memory",
                    legend: [
                        "USAGE"
                    ],
                    data: module26(e.metrics, `${C.gpu_memory_usage}.data.result`)
                },
                {
                    type: "bandwidth",
                    title: "NETWORK_BYTESOUT",
                    unitType: "bandwidth",
                    legend: [
                        "Outbound"
                    ],
                    data: module26(e.metrics, `${C.net_transmitted}.data.result`)
                },
                {
                    type: "bandwidth",
                    title: "NETWORK_BYTESIN",
                    unitType: "bandwidth",
                    legend: [
                        "Inbound"
                    ],
                    data: module26(e.metrics, `${C.net_received}.data.result`)
                }
            ];
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const detail = this.instanceDetailStore.detail;
                const { cluster, namespace, instanceId } = detail;
                const createTime = this.store.detail.createTime;
                const monitorStore = this.monitorStore;
                const { isLoading, isRefreshing } = monitorStore;
                const hasMetrics = this.state.hasMetrics;
                const d = hideGPUByLicense(this.getMonitoringCfgs(this.metrics), cluster);
                return <><Module802 title={t("SPRING_CLOUD_MONITORING")} empty={t("NO_MONITORING_DATA")} isEmpty={!hasMetrics}>{hasMetrics && this.instanceConfigs.map((config)=><Module4726 key={config.title} config={config} namespace={namespace} cluster={cluster} instanceId={instanceId}/>)}</Module802><Controller createTime={createTime} onFetch={this.fetchData} loading={isLoading} refreshing={isRefreshing} isEmpty={module63(this.metrics)}>{d.map((e)=>{
                    e.data = module63(e.data) ? [
                        {
                            values: getZeroValues()
                        }
                    ] : e.data;
                    const t = getAreaChartOps(e);
                    return <SimpleArea key={e.title} width="100%" {...t}/>;
                })}</Controller></>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.detailStore;
            }
        },
        {
            key: "instanceDetailStore",
            get: function() {
                return this.props.instanceDetailStore;
            }
        },
        {
            key: "metrics",
            get: function() {
                const e = {};
                Object.entries(this.monitorStore.data).forEach((t)=>{
                    const a = module96(t, 2);
                    const r = a[0];
                    const n = a[1];
                    if (module26(n, "data.result")) {
                        e[`${r}`] = n;
                    }
                });
                return e;
            }
        },
        {
            key: "instanceConfigs",
            get: function() {
                return [
                    {
                        type: "count",
                        title: "Thread",
                        unit: "",
                        legend: [
                            "JVM_THREADS_LIVE",
                            "JVM_THREADS_DAEMON"
                        ],
                        extraLegend: "JVM_THREADS_PEAK",
                        filters: {
                            metrics_filter: `${[
                                "jvm.threads.live",
                                "jvm.threads.daemon",
                                "jvm.threads.peak"
                            ].join("|")}\$`
                        }
                    },
                    {
                        type: "count",
                        title: "Heap",
                        unitType: "memory",
                        legend: [
                            "JVM_MEMORY_USED",
                            "JVM_MEMORY_COMMITTED"
                        ],
                        extraLegend: "JVM_MEMORY_MAX",
                        filters: {
                            metrics_filter: `${[
                                "jvm.memory.used",
                                "jvm.memory.committed",
                                "jvm.memory.max"
                            ].join("|")}\$`,
                            tag: "area:heap"
                        }
                    },
                    {
                        type: "count",
                        title: "Non Heap",
                        unitType: "memory",
                        legend: [
                            "JVM_MEMORY_USED_METASPACE",
                            "JVM_MEMORY_USED",
                            "JVM_MEMORY_COMMITTED"
                        ],
                        extraLegend: "JVM_MEMORY_MAX",
                        filters: {
                            metrics_filter: `${[
                                "jvm.memory.used",
                                "jvm.memory.committed",
                                "jvm.memory.max"
                            ].join("|")}\$`,
                            tag: "area:nonheap"
                        },
                        metaspaceFilters: {
                            metrics_filter: `${[
                                "jvm.memory.used"
                            ].join("|")}\$`,
                            metaspace: "area:nonheap,id:Metaspace"
                        }
                    }
                ];
            }
        }
    ]);
    return r;
})(Component)) || i) || i;
export default P;
