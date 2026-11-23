import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-97.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-64.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-436.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-41.js";
import "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module186 from "unpacked/module-186.js";
import Module797 from "components/Tables/List";
import Module793 from "unpacked/module-793.js";
import modal from "components/Modals/KubeCtl";
import Module789 from "components/Base/Avatar";
import module788 from "components/Base/Modal";
import Module796 from "components/Base/Status";
import Module791 from "components/Base/Text";
import module794, { ListPage } from "components/HOCs/withList";
import { getNodeStatus } from "utils/node";
import { NODE_ROLE, NODE_STATUS } from "utils/constants";
import { cpuFormat, memoryFormat } from "utils/index";
import { getValueByUnit } from "utils/monitoring";
import module854 from "unpacked/module-854.js";
import module954 from "unpacked/module-954.js";
import module1009 from "unpacked/module-1009.js";
import module5289 from "unpacked/module-5289.js";
let l;
const U = {
    cpu_used: "node_cpu_usage",
    cpu_total: "node_cpu_total",
    cpu_utilisation: "node_cpu_utilisation",
    memory_used: "node_memory_usage_wo_cache",
    memory_total: "node_memory_total",
    memory_utilisation: "node_memory_utilisation",
    pod_used: "node_pod_running_count",
    pod_total: "node_pod_quota"
};
const G = module794({
    store: new module854,
    name: "EDGE_NODE",
    module: "edgenodes",
    authKey: "nodegroups",
    skipAuth: true
})(l = ((Component_1)=>{
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
    function n(...o_1) {
        let e;
        module36(this, n);
        e = r.call(this, ...o_1);
        e.store = e.props.store;
        e.edgeStore = new module1009;
        e.monitoringStore = new module954({
            cluster: e.cluster
        });
        e.getData = async (r)=>{
            let n;
            n = e.props.match.params.group;
            await e.store.fetchChildResource({
                ...r,
                cluster: e.cluster,
                group: n,
                kind: "nodes"
            });
            await e.monitoringStore.fetchMetrics({
                cluster: e.cluster,
                name: n,
                resources: e.store.list.data.map((e)=>e.name),
                metrics: Object.values(U),
                last: true
            });
        };
        e.getReady = function(e) {
            return e.conditions.some((e)=>e.type === "Ready" && e.status === "True");
        };
        e.handleOpenTerminal = function(t) {
            var r = module788.open({
                onOk: function() {
                    module788.close(r);
                },
                isEdgeWize: true,
                modal,
                isEdgeNode: true,
                cluster: e.cluster,
                title: t.name,
                nodename: t.name
            });
        };
        e.getLastValue = function(t, r, n) {
            const data = e.monitoringStore.data;
            const o = (module26(data[r], "data.result") || []).find((e)=>module26(e, "metric.node") === t.name);
            return getValueByUnit(module26(o, "value[1]", 0), n);
        };
        e.getRecordMetrics = function(t, r) {
            const n = {};
            r.forEach((r)=>{
                n[r.type] = parseFloat(e.getLastValue(t, U[r.type], r.unit));
            });
            return n;
        };
        e.renderTaintsTip = function(e) {
            return <div><div>{t("TAINTS")}:</div><div>{e.map((e)=>{
                const t = `${e.key}=${e.value || ""}:${e.effect}`;
                return <div key={t}>{t}</div>;
            })}</div></div>;
        };
        e.getColumns = function() {
            const e_props = e.props;
            const { getSortOrder, getFilteredValue } = e_props;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    search: true,
                    render: function(title, { ip, labels, importStatus, cluster }) {
                        const u = labels?.["kubeedge.io/internal-ip"] || ip;
                        return <Module789 icon="edge-node" iconSize={40} to={importStatus !== "success" ? null : `/v2/edgewize/clusters/${cluster}/nodes/${title}`} title={title} desc={u ?? "-"}/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    filters: e.getStatus(),
                    filteredValue: getFilteredValue("status"),
                    isHideable: true,
                    search: true,
                    render: function(r, n) {
                        const a = getNodeStatus(n);
                        const n_taints = n.taints;
                        return <div className={module5289.status}><Module796 type={a} name={t(`NODE_STATUS_${a.toUpperCase()}`)}/>{!module63(n_taints) && n.importStatus === "success" && <module186.Tooltip content={e.renderTaintsTip(n_taints)}><span className={module5289.taints}>{n_taints.length}</span></module186.Tooltip>}</div>;
                    }
                },
                {
                    title: t("ROLE"),
                    dataIndex: "role",
                    isHideable: true,
                    search: true,
                    filters: e.getRole(),
                    filteredValue: getFilteredValue("role"),
                    render: function(e) {
                        return e.map((e)=>t(e.replace("-", "_").toUpperCase())).join("/");
                    }
                },
                {
                    title: t("CPU"),
                    key: "cpu",
                    isHideable: true,
                    render: function(t) {
                        const r = e.getRecordMetrics(t, [
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
                        return <Module791 title=<div className={module5289.resource}><span>{`${Math.round(100 * r.cpu_utilisation)}%`}</span>{r.cpu_utilisation >= 0.9 && <module186.Icon name="exclamation"/>}</div> description={`${r.cpu_used}/${r.cpu_total} Core`}/>;
                    }
                },
                {
                    title: t("MEMORY"),
                    key: "memory",
                    isHideable: true,
                    render: function(t) {
                        const r = e.getRecordMetrics(t, [
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
                        return <Module791 title=<div className={module5289.resource}><span>{`${Math.round(100 * r.memory_utilisation)}%`}</span>{r.memory_utilisation >= 0.9 && <module186.Icon name="exclamation"/>}</div> description={`${r.memory_used}/${r.memory_total} GiB`}/>;
                    }
                },
                {
                    title: t("POD_PL"),
                    key: "pods",
                    isHideable: true,
                    render: function(t) {
                        const r = e.getRecordMetrics(t, [
                            {
                                type: "pod_used"
                            },
                            {
                                type: "pod_total"
                            }
                        ]);
                        const n = r.pod_total ? parseFloat(r.pod_used / r.pod_total) : 0;
                        return <Module791 title={`${Math.round(100 * n)}%`} description={`${r.pod_used}/${r.pod_total}`}/>;
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
            ];
        };
        e.renderCPUTooltip = function(e) {
            const r = <p>{cpuFormat(module26(e, 'annotations["node.kubesphere.io/cpu-limits"]')) === 1 ? t("CPU_LIMIT_SI", {
                core: cpuFormat(module26(e, 'annotations["node.kubesphere.io/cpu-limits"]')),
                percent: module26(e, 'annotations["node.kubesphere.io/cpu-limits-fraction"]')
            }) : t("CPU_LIMIT_PL", {
                core: cpuFormat(module26(e, 'annotations["node.kubesphere.io/cpu-limits"]')),
                percent: module26(e, 'annotations["node.kubesphere.io/cpu-limits-fraction"]')
            })}</p>;
            return <module186.Tooltip content={r} placement="top"><Module791 title={cpuFormat(module26(e, 'annotations["node.kubesphere.io/cpu-limits"]')) === 1 ? t("CPU_REQUEST_SI", {
                core: cpuFormat(module26(e, 'annotations["node.kubesphere.io/cpu-requests"]')),
                percent: module26(e, 'annotations["node.kubesphere.io/cpu-requests-fraction"]')
            }) : t("CPU_REQUEST_PL", {
                core: cpuFormat(module26(e, 'annotations["node.kubesphere.io/cpu-requests"]')),
                percent: module26(e, 'annotations["node.kubesphere.io/cpu-requests-fraction"]')
            })} description={t("RESOURCE_REQUEST")}/></module186.Tooltip>;
        };
        e.renderMemoryTooltip = function(e) {
            const r = <p>{t("MEMORY_LIMIT_VALUE", {
                gib: memoryFormat(module26(e, 'annotations["node.kubesphere.io/memory-limits"]'), "Gi"),
                percent: module26(e, 'annotations["node.kubesphere.io/memory-limits-fraction"]')
            })}</p>;
            return <module186.Tooltip content={r} placement="top"><Module791 title={t("MEMORY_REQUEST_VALUE", {
                gib: memoryFormat(module26(e, 'annotations["node.kubesphere.io/memory-requests"]'), "Gi"),
                percent: module26(e, 'annotations["node.kubesphere.io/memory-requests-fraction"]')
            })} description={t("RESOURCE_REQUEST")}/></module186.Tooltip>;
        };
        e.handleCreate = function() {
            const group = e.props.match.params.group;
            e.props.trigger("node.edge.add", {
                cluster: e.cluster,
                store: e.edgeStore,
                isEdgeWize: true,
                nodegroup: group
            });
        };
        return e;
    }
    module37(n, [
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
            key: "getRole",
            value: function() {
                return NODE_ROLE.map((e)=>({
                        text: t(e.text),
                        value: e.value
                    }));
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps } = props;
                const isLoading = this.monitoringStore.isLoading;
                return <ListPage {...this.props} getData={this.getData} noWatch><Module793 {...bannerProps} title={t("NODE_ADMINISTRATION_PL")} description={t("CLUSTER_NODE_DESC")} icon="edge-node" tips={this.tips}/><Module797 {...tableProps} itemActions={[]} tableActions={this.tableActions} onCreate={this.handleCreate} columns={this.getColumns()} isLoading={tableProps.isLoading || isLoading}/></ListPage>;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
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
            key: "tableActions",
            get: function() {
                return {
                    ...this.props.tableProps.tableActions,
                    selectActions: []
                };
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
    return n;
})(Component)) || l;
export default G;
