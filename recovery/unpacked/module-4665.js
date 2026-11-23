import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-18.js";
import "./module-97.js";
import "./module-16.js";
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
import "./module-436.js";
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import "./module-31.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import module186 from "./module-186.js";
import Module789 from "./module-789.js";
import Module796 from "./module-796.js";
import Module791 from "./module-791.js";
import Module864 from "./module-864.js";
import { getNodeStatus } from "./module-444.js";
import { NODE_STATUS } from "./module-72.js";
import { cpuFormat, memoryFormat } from "./module-52.js";
import { getValueByUnit } from "./module-795.js";
import module854 from "./module-854.js";
import module954 from "./module-954.js";
import Module4666 from "./module-4666.js";
import module1903 from "./module-1903.js";
let s;
const x = {
    cpu_used: "node_cpu_usage",
    cpu_total: "node_cpu_total",
    cpu_utilisation: "node_cpu_utilisation",
    memory_used: "node_memory_usage_wo_cache",
    memory_total: "node_memory_total",
    memory_utilisation: "node_memory_utilisation",
    pod_used: "node_pod_running_count",
    pod_total: "node_pod_quota"
};
const M = observer(s = ((Component_1)=>{
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
    function r(...c_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...c_1);
        e.store = new module854;
        e.monitoringStore = new module954({
            cluster: e.cluster
        });
        e.getData = async (a)=>{
            let r;
            r = e.props.name;
            await e.store.fetchChildResource({
                ...a,
                cluster: e.cluster,
                group: r,
                kind: "nodes"
            });
            await e.monitoringStore.fetchMetrics({
                cluster: e.cluster,
                name: r,
                resources: e.store.list.data.map((e)=>e.name),
                metrics: Object.values(x),
                last: true
            });
        };
        e.getReady = function(e) {
            return e.conditions.some((e)=>e.type === "Ready" && e.status === "True");
        };
        e.getLastValue = function(t, a, r) {
            const data = e.monitoringStore.data;
            const o = (module26(data[a], "data.result") || []).find((e)=>module26(e, "metric.node") === t.name);
            return getValueByUnit(module26(o, "value[1]", 0), r);
        };
        e.getRecordMetrics = function(t, a) {
            const r = {};
            a.forEach((a)=>{
                r[a.type] = parseFloat(e.getLastValue(t, x[a.type], a.unit));
            });
            return r;
        };
        e.renderTaintsTip = function(e) {
            return <div><div>{t("TAINTS")}:</div><div>{e.map((e)=>{
                const t = `${e.key}=${e.value || ""}:${e.effect}`;
                return <div key={t}>{t}</div>;
            })}</div></div>;
        };
        e.Columns = function() {
            return [
                {
                    dataIndex: "name",
                    className: module1903.name,
                    render: function(title, { ip, labels, importStatus, cluster }) {
                        const c = labels?.["kubeedge.io/internal-ip"] || ip;
                        return <Module789 icon="edge-node" iconSize={40} to={importStatus !== "success" ? null : `/v2/edgewize/clusters/${cluster}/nodes/${title}`} title={title} desc={c ?? "-"}/>;
                    }
                },
                {
                    dataIndex: "status",
                    className: module1903.status,
                    render: function(a, r) {
                        const n = getNodeStatus(r);
                        const r_taints = r.taints;
                        return <div className={module1903.statusBox}><Module796 type={n} name={t(`NODE_STATUS_${n.toUpperCase()}`)}/>{!module63(r_taints) && r.importStatus === "success" && <module186.Tooltip content={e.renderTaintsTip(r_taints)}><span className={module1903.taints}>{r_taints.length}</span></module186.Tooltip>}</div>;
                    }
                },
                {
                    key: "cpu",
                    className: module1903.cpu,
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
                        return <Module791 title=<div className={module1903.resource}><span>{`${Math.round(100 * r.cpu_utilisation)}%`}</span>{r.cpu_utilisation >= 0.9 && <module186.Icon name="exclamation"/>}<span>{`(${r.cpu_used}/${r.cpu_total} Core)`}</span></div> description={t("CPU_USAGE_SCAP")}/>;
                    }
                },
                {
                    key: "memory",
                    className: module1903.cpu,
                    render: function(a) {
                        const r = e.getRecordMetrics(a, [
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
                        return <Module791 title=<div className={module1903.resource}><span>{`${Math.round(100 * r.memory_utilisation)}%`}</span>{r.memory_utilisation >= 0.9 && <module186.Icon name="exclamation"/>}<span>{`(${r.memory_used}/${r.memory_total} GiB)`}</span></div> description={t("MEMORY_USAGE_TCAP")}/>;
                    }
                },
                {
                    key: "pods",
                    className: module1903.pods,
                    render: function(a) {
                        const r = e.getRecordMetrics(a, [
                            {
                                type: "pod_used"
                            },
                            {
                                type: "pod_total"
                            }
                        ]);
                        const n = r.pod_total ? parseFloat(r.pod_used / r.pod_total) : 0;
                        return <Module791 title={`${Math.round(100 * n)}%(${r.pod_used}/${r.pod_total})`} description={t("PODS")}/>;
                    }
                }
            ];
        };
        e.renderCPUTooltip = function(e) {
            const a = <p>{cpuFormat(module26(e, 'annotations["node.kubesphere.io/cpu-limits"]')) === 1 ? t("CPU_LIMIT_SI", {
                core: cpuFormat(module26(e, 'annotations["node.kubesphere.io/cpu-limits"]')),
                percent: module26(e, 'annotations["node.kubesphere.io/cpu-limits-fraction"]')
            }) : t("CPU_LIMIT_PL", {
                core: cpuFormat(module26(e, 'annotations["node.kubesphere.io/cpu-limits"]')),
                percent: module26(e, 'annotations["node.kubesphere.io/cpu-limits-fraction"]')
            })}</p>;
            return <module186.Tooltip content={a} placement="top"><Module791 title={cpuFormat(module26(e, 'annotations["node.kubesphere.io/cpu-limits"]')) === 1 ? t("CPU_REQUEST_SI", {
                core: cpuFormat(module26(e, 'annotations["node.kubesphere.io/cpu-requests"]')),
                percent: module26(e, 'annotations["node.kubesphere.io/cpu-requests-fraction"]')
            }) : t("CPU_REQUEST_PL", {
                core: cpuFormat(module26(e, 'annotations["node.kubesphere.io/cpu-requests"]')),
                percent: module26(e, 'annotations["node.kubesphere.io/cpu-requests-fraction"]')
            })} description={t("RESOURCE_REQUEST")}/></module186.Tooltip>;
        };
        e.renderMemoryTooltip = function(e) {
            const a = <p>{t("MEMORY_LIMIT_VALUE", {
                gib: memoryFormat(module26(e, 'annotations["node.kubesphere.io/memory-limits"]'), "Gi"),
                percent: module26(e, 'annotations["node.kubesphere.io/memory-limits-fraction"]')
            })}</p>;
            return <module186.Tooltip content={a} placement="top"><Module791 title={t("MEMORY_REQUEST_VALUE", {
                gib: memoryFormat(module26(e, 'annotations["node.kubesphere.io/memory-requests"]'), "Gi"),
                percent: module26(e, 'annotations["node.kubesphere.io/memory-requests-fraction"]')
            })} description={t("RESOURCE_REQUEST")}/></module186.Tooltip>;
        };
        e.renderEmpty = function() {
            return <div className={module1903.empty}><div className={module1903.icon}><module186.Icon name="edge-node" size={40}/></div><div className={module1903.title}><span>{t("NO_EDGE_CLUSTER")}</span><p>{t("NO_EDGE_CLUSTER_DESC")}</p></div></div>;
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.getData();
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
            key: "render",
            value: function() {
                const _this = this;
                const list = this.store.list;
                const { data, total, page, isLoading } = list;
                return <Module864 wrapperClassName={module1903.listWrapper} data={module14.toJS(data)} total={total} page={page} loading={isLoading} onFetch={this.getData} empty={this.renderEmpty()}>{data.map((data_1, key)=><Module4666 key={key} data={data_1} Columns={_this.Columns()}/>)}</Module864>;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.cluster;
            }
        },
        {
            key: "isExpired",
            get: function() {
                return globals.licenseInfo?.isExpired || false;
            }
        },
        {
            key: "isOverLimit",
            get: function() {
                return globals.licenseInfo?.isOverLimit || false;
            }
        },
        {
            key: "tips",
            get: function() {
                return [
                    {
                        title: t("WHAT_IS_NODE_TAINTS_Q"),
                        description: t("WHAT_IS_NODE_TAINTS_A")
                    }
                ];
            }
        }
    ]);
    return r;
})(Component)) || s;
export default M;
