import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-86.js";
import "./module-30.js";
import "./module-18.js";
import "./module-97.js";
import "./module-16.js";
import "./module-27.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-316.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-324.js";
import "./module-38.js";
import "./module-62.js";
import "./module-7.js";
import "./module-32.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-436.js";
import "./module-22.js";
import "./module-57.js";
import "./module-460.js";
import "./module-461.js";
import "./module-462.js";
import "./module-463.js";
import "./module-464.js";
import "./module-465.js";
import "./module-466.js";
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
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import module159 from "./module-159.js";
import module186 from "./module-186.js";
import { cpuFormat, hideGPUByLicense, memoryFormat } from "./module-52.js";
import { ICON_TYPES, NODE_STATUS } from "./module-72.js";
import { getNodeStatus } from "./module-444.js";
import { getValueByUnit } from "./module-795.js";
import module858 from "./module-858.js";
import module1137 from "./module-1137.js";
import { ListPage, withClusterList } from "./module-794.js";
import Module789 from "./module-789.js";
import Module796 from "./module-796.js";
import Module790 from "./module-790.js";
import Module791 from "./module-791.js";
import Module793 from "./module-793.js";
import Module797 from "./module-797.js";
import module4124 from "./module-4124.js";
let c;
const j = {
    cpu_used: "node_cpu_usage",
    cpu_total: "node_cpu_total",
    cpu_utilisation: "node_cpu_utilisation",
    memory_used: "node_memory_usage_wo_cache",
    memory_total: "node_memory_total",
    memory_utilisation: "node_memory_utilisation",
    gpu_utilization: "node_gpu_utilization",
    gpu_used: "node_gpu_usage",
    gpu_total: "node_gpu_total",
    gpu_memory_utilization: "node_gpu_memory_utilization",
    gpu_memory_used: "node_gpu_memory_usage",
    gpu_memory_total: "node_gpu_memory_total",
    pod_used: "node_pod_running_count",
    pod_total: "node_pod_quota",
    allocatable_cpu_total: "node_pod_requests_cpu_total",
    allocatable_cpu_utilisation: "node_pod_requests_cpu_allocatable_utilisation",
    limit_cpu_total: "node_pod_limits_cpu_total",
    limit_cpu_utilisation: "node_pod_limits_cpu_allocatable_utilisation",
    allocatable_memory_total: "node_pod_requests_memory_total",
    allocatable_memory_utilisation: "node_pod_requests_memory_allocatable_utilisation",
    limits_memory_total: "node_pod_limits_memory_total",
    limits_memory_utilisation: "node_pod_limits_memory_allocatable_utilisation"
};
const x = withClusterList({
    store: new module858,
    name: "CLUSTER_NODE",
    module: "nodes"
})(c = ((Component_1)=>{
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
    function r(...u_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...u_1);
        e.store = e.props.store;
        e.monitoringStore = new module1137({
            cluster: e.cluster
        });
        e.getData = async (a)=>{
            await e.store.fetchList({
                ...a,
                ...e.props.match.params
            });
            await e.monitoringStore.fetchMetrics({
                ...e.props.match.params,
                resources: e.store.list.data.map((e)=>e.name),
                metrics: Object.values(hideGPUByLicense(j, e.cluster)),
                last: true
            });
        };
        e.getUnschedulable = function(e) {
            return e.taints.some((e)=>e.key === "node.kubernetes.io/unschedulable");
        };
        e.getReady = function(e) {
            return e.conditions.some((e)=>e.type === "Ready" && e.status === "True");
        };
        e.getLastValue = function(t, a, r) {
            const data = e.monitoringStore.data;
            const u = (module26(data[a], "data.result") || []).find((e)=>module26(e, "metric.node") === t.name);
            const l = module26(u, "value[1]", 0);
            return getValueByUnit(l, r);
        };
        e.getRecordMetrics = function(t, a) {
            const r = {};
            a.forEach((a)=>{
                const n = e.getLastValue(t, hideGPUByLicense(j, e.cluster)[a.type], a.unit);
                r[a.type] = parseFloat(n);
            });
            return r;
        };
        e.renderTaintsTip = function(e) {
            return <div><div>{t("TAINTS")}:</div><div>{e.map((e)=>{
                const t = `${e.key}=${e.value || ""}:${e.effect}`;
                return <div key={t}>{t}</div>;
            })}</div></div>;
        };
        e.getColumns = function() {
            const e_props = e.props;
            const { module, prefix, getSortOrder, getFilteredValue } = e_props;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    search: true,
                    key: "name",
                    render: function(title, t) {
                        return <Module789 icon={ICON_TYPES[module]} iconSize={40} to={t.importStatus !== "success" ? null : `${prefix}/${title}`} title={title} desc={t.ip}/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    key: "status",
                    filters: e.getStatus(),
                    filteredValue: getFilteredValue("status"),
                    isHideable: true,
                    search: true,
                    render: function(a, r) {
                        const n = getNodeStatus(r);
                        const r_taints = r.taints;
                        return <div className={module4124.status}><Module796 type={n} name={t(`NODE_STATUS_${n.toUpperCase()}`)}/>{!module63(r_taints) && r.importStatus === "success" && <module186.Tooltip content={e.renderTaintsTip(r_taints)}><span className={module4124.taints}>{r_taints.length}</span></module186.Tooltip>}</div>;
                    }
                },
                {
                    title: t("ROLE"),
                    dataIndex: "role",
                    key: "role",
                    isHideable: true,
                    search: true,
                    render: function(e) {
                        if (e.indexOf("master") === -1) {
                            return t("WORKER");
                        }
                        return t("CONTROL_PLANE");
                    }
                },
                {
                    title: t("CPU_USAGE"),
                    key: "cpu",
                    isHideable: true,
                    render: function(a) {
                        const r = e.getRecordMetrics(a, [
                            {
                                type: "cpu_used",
                                unit: "Core"
                            },
                            {
                                type: "cpu_total",
                                unit: "Core"
                            },
                            {
                                type: "cpu_utilisation"
                            }
                        ]);
                        return <Module791 title=<div className={module4124.resource}><span>{e.toPercentage(r.cpu_utilisation)}</span>{r.cpu_utilisation >= 0.9 && <module186.Icon name="exclamation"/>}</div> description={`${r.cpu_used}/${r.cpu_total} ${t("CORE_PL")}`}/>;
                    }
                },
                {
                    title: t("MEMORY_USAGE"),
                    key: "memory",
                    isHideable: true,
                    render: function(t) {
                        const a = e.getRecordMetrics(t, [
                            {
                                type: "memory_used",
                                unit: "Gi"
                            },
                            {
                                type: "memory_total",
                                unit: "Gi"
                            },
                            {
                                type: "memory_utilisation"
                            }
                        ]);
                        return <Module791 title=<div className={module4124.resource}><span>{e.toPercentage(a.memory_utilisation)}</span>{a.memory_utilisation >= 0.9 && <module186.Icon name="exclamation"/>}</div> description={`${a.memory_used}/${a.memory_total} GiB`}/>;
                    }
                },
                {
                    title: t("GPU_USAGE"),
                    key: "gpu",
                    isHideable: true,
                    render: function(t) {
                        const a = e.getRecordMetrics(t, [
                            {
                                type: "gpu_used",
                                unit: "Core"
                            },
                            {
                                type: "gpu_total",
                                unit: "Core"
                            },
                            {
                                type: "gpu_utilization"
                            }
                        ]);
                        return <Module791 title=<div className={module4124.resource}><span>{e.toPercentage(a.gpu_utilization)}</span>{a.gpu_utilization >= 0.9 && <module186.Icon name="exclamation"/>}</div> description={`${a.gpu_used}/${a.gpu_total} GPU`}/>;
                    }
                },
                {
                    title: t("GPU_MEMORY_USAGE"),
                    key: "gpu_memory",
                    isHideable: true,
                    render: function(t) {
                        const a = e.getRecordMetrics(t, [
                            {
                                type: "gpu_memory_used",
                                unit: "Gi"
                            },
                            {
                                type: "gpu_memory_total",
                                unit: "Gi"
                            },
                            {
                                type: "gpu_memory_utilization"
                            }
                        ]);
                        return <Module791 title=<div className={module4124.resource}><span>{e.toPercentage(a.gpu_memory_utilization)}</span>{a.gpu_memory_utilization >= 0.9 && <module186.Icon name="exclamation"/>}</div> description={`${a.gpu_memory_used}/${a.gpu_memory_total} GiB`}/>;
                    }
                },
                {
                    title: t("POD_PL"),
                    key: "pods",
                    isHideable: true,
                    render: function(t) {
                        const a = e.getRecordMetrics(t, [
                            {
                                type: "pod_used"
                            },
                            {
                                type: "pod_total"
                            }
                        ]);
                        const r = a.pod_total ? parseFloat(a.pod_used / a.pod_total) : 0;
                        return <Module791 title={`${e.toPercentage(r)}`} description={`${a.pod_used}/${a.pod_total}`}/>;
                    }
                },
                {
                    title: t("ALLOCATED_CPU"),
                    key: "allocated_resources_cpu",
                    isHideable: true,
                    render: e.renderCPUTooltip
                },
                {
                    title: t("ALLOCATED_MEMORY"),
                    key: "allocated_resources_memory",
                    isHideable: true,
                    render: e.renderMemoryTooltip
                }
            ].filter((t)=>!e.omitKeys.has(t.key));
        };
        e.getRecordMetrics = function(t, a) {
            const r = {};
            a.forEach((a)=>{
                r[a.type] = e.getLastValue(t, hideGPUByLicense(j, e.cluster)[a.type], a.unit);
            });
            return r;
        };
        e.renderCPUTooltip = function(a) {
            const r = e.getRecordMetrics(a, [
                {
                    type: "allocatable_cpu_total"
                },
                {
                    type: "allocatable_cpu_utilisation"
                },
                {
                    type: "limit_cpu_total"
                },
                {
                    type: "limit_cpu_utilisation"
                }
            ]);
            const n = <p>{cpuFormat(r.limit_cpu_total) === 1 ? t("CPU_LIMIT_SI", {
                core: cpuFormat(r.limit_cpu_total),
                percent: e.toPercentage(r.limit_cpu_utilisation)
            }) : t("CPU_LIMIT_PL", {
                core: cpuFormat(r.limit_cpu_total),
                percent: e.toPercentage(r.limit_cpu_utilisation)
            })}</p>;
            return <module186.Tooltip content={n} placement="top"><Module791 title={cpuFormat(r.allocatable_cpu_total) === 1 ? t("CPU_REQUEST_SI", {
                core: cpuFormat(r.allocatable_cpu_total),
                percent: e.toPercentage(r.allocatable_cpu_utilisation)
            }) : t("CPU_REQUEST_PL", {
                core: cpuFormat(r.allocatable_cpu_total),
                percent: e.toPercentage(r.allocatable_cpu_utilisation)
            })} description={t("RESOURCE_REQUEST")}/></module186.Tooltip>;
        };
        e.renderMemoryTooltip = function(a) {
            const r = e.getRecordMetrics(a, [
                {
                    type: "allocatable_memory_total"
                },
                {
                    type: "allocatable_memory_utilisation"
                },
                {
                    type: "limits_memory_total"
                },
                {
                    type: "limits_memory_utilisation"
                }
            ]);
            const n = <p>{t("MEMORY_LIMIT_VALUE", {
                gib: memoryFormat(r.limits_memory_total, "Gi"),
                percent: e.toPercentage(r.limits_memory_utilisation)
            })}</p>;
            return <module186.Tooltip content={n} placement="top"><Module791 title={t("MEMORY_REQUEST_VALUE", {
                gib: memoryFormat(r.allocatable_memory_total, "Gi"),
                percent: e.toPercentage(r.allocatable_memory_utilisation)
            })} description={t("RESOURCE_REQUEST")}/></module186.Tooltip>;
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.store.fetchCount(this.props.match.params);
            }
        },
        {
            key: "toPercentage",
            value: function(e) {
                const t = module159(e) || isNaN(e) ? 0 : Number(e);
                return `${Math.ceil(100 * t)}%`;
            }
        },
        {
            key: "getStatus",
            value: function() {
                return NODE_STATUS.map((e)=>({
                        text: t(e.text),
                        value: e.value
                    }));
            }
        },
        {
            key: "renderOverview",
            value: function() {
                const store = this.store;
                const e_masterNum = store.masterNum;
                const total = store.list.total;
                return <Module790 className="margin-b12"><div className={module4124.overview}><Module791 icon="nodes" title={total} description={total === 1 ? t("NODE_SI") : t("NODE_PL")}/><Module791 title={e_masterNum} description={e_masterNum === 1 ? t("MASTER_NODE_SI") : t("MASTER_NODE_PL")}/></div></Module790>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps } = props;
                const isLoading = this.monitoringStore.isLoading;
                return <ListPage {...this.props} getData={this.getData} noWatch><Module793 {...bannerProps} title={t("CLUSTER_NODE_PL")} tips={this.tips}/>{this.renderOverview()}<Module797 {...tableProps} itemActions={this.itemActions} tableActions={this.tableActions} columns={hideGPUByLicense(this.getColumns(), this.cluster)} isLoading={tableProps.isLoading || isLoading}/></ListPage>;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "tips",
            get: function() {
                return [
                    {
                        title: t("NODE_TYPES_Q"),
                        description: t("NODE_TYPES_A")
                    },
                    {
                        title: t("WHAT_IS_NODE_TAINTS_Q"),
                        description: t("WHAT_IS_NODE_TAINTS_A")
                    }
                ];
            }
        },
        {
            key: "itemActions",
            get: function() {
                return [];
            }
        },
        {
            key: "tableActions",
            get: function() {
                return {
                    ...this.props.tableProps.tableActions,
                    actions: [],
                    selectActions: []
                };
            }
        },
        {
            key: "hasMonitoring",
            get: function() {
                return globals.app.hasClusterModule(this.cluster, "whizard-monitoring");
            }
        },
        {
            key: "omitKeys",
            get: function() {
                return new Set(this.hasMonitoring ? [] : [
                    "cpu",
                    "memory",
                    "gpu",
                    "gpu_memory",
                    "pods",
                    "allocated_resources_cpu",
                    "allocated_resources_memory"
                ]);
            }
        }
    ]);
    return r;
})(Component)) || c;
export default x;
