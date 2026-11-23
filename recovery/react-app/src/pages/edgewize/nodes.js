import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-97.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
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
import module14 from "unpacked/module-14.js";
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
import { ListPage, withClusterList } from "components/HOCs/withList";
import { getNodeStatus } from "utils/node";
import { NODE_STATUS } from "utils/constants";
import { getValueByUnit } from "utils/monitoring";
import module1009 from "unpacked/module-1009.js";
import module954 from "unpacked/module-954.js";
import module5219 from "unpacked/module-5219.js";
let l;
const L = {
    cpu_used: "node_cpu_usage",
    cpu_total: "node_cpu_total",
    cpu_utilisation: "node_cpu_utilisation",
    memory_used: "node_memory_usage_wo_cache",
    memory_total: "node_memory_total",
    memory_utilisation: "node_memory_utilisation",
    pod_used: "node_pod_running_count",
    pod_total: "node_pod_quota",
    gpu_used: "edge_node_gpu_usage",
    gpu_total: "edge_node_gpu_total",
    gpu_utilization: "edge_node_gpu_utilization",
    gpu_memory_usage: "edge_node_gpu_memory_usage",
    gpu_memory_total: "edge_node_gpu_memory_total",
    gpu_memory_utilization: "edge_node_gpu_memory_utilization",
    npu_used: "edge_node_npu_usage",
    npu_total: "edge_node_npu_total",
    npu_utilization: "edge_node_npu_utilization",
    npu_memory_usage: "edge_node_npu_memory_usage",
    npu_memory_total: "edge_node_npu_memory_total",
    npu_memory_utilization: "edge_node_npu_memory_utilization"
};
const j = withClusterList({
    store: new module1009,
    name: "EDGE_NODE",
    module: "edgenodes",
    authKey: "nodes"
})(l = ((Component_1)=>{
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
    function n(...o_1) {
        let e;
        module36(this, n);
        e = a.call(this, ...o_1);
        e.store = e.props.store;
        e.monitoringStore = new module954({
            cluster: e.cluster
        });
        e.getData = async (a)=>{
            await e.store.fetchList({
                ...a,
                ...e.props.match.params,
                labelSelector: "node-role.kubernetes.io/edge",
                type: ""
            });
        };
        e.getReady = function(e) {
            return e.conditions.some((e)=>e.type === "Ready" && e.status === "True");
        };
        e.handleOpenTerminal = function(t) {
            var a = module788.open({
                onOk: function() {
                    module788.close(a);
                },
                isEdgeWize: true,
                modal,
                isEdgeNode: true,
                cluster: e.cluster,
                title: t.name,
                nodename: t.name
            });
        };
        e.getLastValue = function(t, a, n) {
            const data = e.monitoringStore.data;
            const o = (module26(data[a], "data.result") || []).find((e)=>module26(e, "metric.node") === t.name);
            return getValueByUnit(module26(o, "value[1]", 0), n);
        };
        e.getRecordMetrics = function(t, a) {
            const n = {};
            a.forEach((a)=>{
                n[a.type] = parseFloat(e.getLastValue(t, L[a.type], a.unit));
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
            const { prefix, getSortOrder, getFilteredValue } = e_props;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    search: true,
                    render: function(e, { ip, labels, importStatus, aliasName }) {
                        const u = labels["kubeedge.io/internal-ip"] || ip;
                        const title = aliasName ? `${aliasName}（${e}）` : e;
                        return <Module789 icon="edge-node" iconSize={40} to={importStatus !== "success" ? null : `${prefix}/${e}`} title={title} desc={u ?? "-"}/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    filters: e.getStatus(),
                    filteredValue: getFilteredValue("status"),
                    isHideable: true,
                    search: true,
                    render: function(a, n) {
                        const r = getNodeStatus(n);
                        const n_taints = n.taints;
                        return <div className={module5219.status}><Module796 type={r} name={t(`NODE_STATUS_${r.toUpperCase()}`)}/>{!module63(n_taints) && n.importStatus === "success" && <module186.Tooltip content={e.renderTaintsTip(n_taints)}><span className={module5219.taints}>{n_taints.length}</span></module186.Tooltip>}</div>;
                    }
                },
                {
                    title: t("CPU"),
                    key: "cpu",
                    isHideable: true,
                    render: function(t) {
                        const a = e.getRecordMetrics(t, [
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
                        return <Module791 title=<div className={module5219.resource}><span>{`${Math.round(100 * a.cpu_utilisation)}%`}</span>{a.cpu_utilisation >= 0.9 && <module186.Icon name="exclamation"/>}</div> description={`${a.cpu_used}/${a.cpu_total} Core`}/>;
                    }
                },
                {
                    title: t("MEMORY"),
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
                        return <Module791 title=<div className={module5219.resource}><span>{`${Math.round(100 * a.memory_utilisation)}%`}</span>{a.memory_utilisation >= 0.9 && <module186.Icon name="exclamation"/>}</div> description={`${a.memory_used}/${a.memory_total} GiB`}/>;
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
                        const n = a.pod_total ? parseFloat(a.pod_used / a.pod_total) : 0;
                        return <Module791 title={`${Math.round(100 * n)}%`} description={`${a.pod_used}/${a.pod_total}`}/>;
                    }
                },
                {
                    title: t("NODE_GROUP_PL"),
                    dataIndex: "nodegroup",
                    isHideable: false,
                    search: false,
                    render: function(e, t) {
                        return t.labels["apps.edgewize.io/nodegroup"] || "";
                    }
                }
            ];
        };
        e.showCreate = function() {
            const e_props = e.props;
            const { query, match, module } = e_props;
            return e.props.trigger("workload.create", {
                module,
                isEdgeWize: true,
                namespace: query.namespace,
                cluster: match.params.cluster
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
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps } = props;
                return <ListPage {...this.props} getData={this.getData} noWatch><Module793 {...bannerProps} title={t("EDGE_NODE_PL")} icon="edge-node" tips={this.tips}/><Module797 {...tableProps} onCreate={this.showCreate} itemActions={this.itemActions} tableActions={this.tableActions} columns={this.getColumns()} isLoading={tableProps.isLoading}/></ListPage>;
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
                return false;
            }
        },
        {
            key: "isOverLimit",
            get: function() {
                return false;
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                const props = this.props;
                const { store, clusterStore, routing, trigger, name } = props;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT"),
                        action: "edit",
                        onClick: function(e) {
                            return trigger("resource.baseinfo.edit", {
                                detail: e,
                                success: routing.query
                            });
                        }
                    },
                    {
                        key: "uncordon",
                        icon: "start",
                        text: t("UNCORDON"),
                        action: "edit",
                        show: function(e) {
                            return e.importStatus === "success" && e.unschedulable;
                        },
                        onClick: function(e) {
                            return store.uncordon(e).then(routing.query);
                        }
                    },
                    {
                        key: "cordon",
                        icon: "stop",
                        text: t("CORDON"),
                        action: "edit",
                        show: function(e) {
                            return e.importStatus === "success" && !e.unschedulable;
                        },
                        onClick: function(e) {
                            return store.cordon(e).then(routing.query);
                        }
                    },
                    {
                        key: "terminal",
                        icon: "terminal",
                        text: t("OPEN_TERMINAL"),
                        action: "edit",
                        show: function(t) {
                            return t.importStatus === "success" && _this.getReady(t);
                        },
                        onClick: function(t) {
                            return _this.handleOpenTerminal(t);
                        }
                    },
                    {
                        key: "nodegroup",
                        icon: "restart",
                        text: t("BOUND_NODE_GROUP"),
                        action: "edit",
                        show: function(e) {
                            return module26(e, 'labels["apps.edgewize.io/nodegroup"]', "") === "";
                        },
                        onClick: function(t) {
                            return trigger("bound.node.group", {
                                detail: t,
                                cluster: _this.cluster,
                                success: _this.getData
                            });
                        }
                    },
                    {
                        key: "logs",
                        icon: "eye",
                        text: t("VIEW_LOG"),
                        action: "edit",
                        show: function(e) {
                            return e.importStatus !== "success";
                        },
                        onClick: function() {
                            return trigger("node.add.log", {
                                detail: module14.toJS(clusterStore.detail),
                                isEdgeWize: true
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        show: function(e) {
                            return e.importStatus === "failed";
                        },
                        onClick: function(e) {
                            return trigger("resource.delete", {
                                type: name,
                                detail: e,
                                success: routing.query
                            });
                        }
                    }
                ];
            }
        },
        {
            key: "tableActions",
            get: function() {
                const _this = this;
                const props = this.props;
                const { trigger, routing, tableProps } = props;
                const actions = [];
                actions.push({
                    key: "add",
                    type: "control",
                    text: t("ADD"),
                    action: "create",
                    tooltip: undefined,
                    forbidden: false,
                    onClick: function() {
                        return trigger("node.edge.add", {
                            cluster: _this.cluster,
                            store: _this.store,
                            isEdgeWize: true
                        });
                    }
                });
                const u = module14.toJS(this.store.list);
                const { data, selectedRowKeys } = u;
                const s = data?.find(function(e) {
                    return e?.labels?.["apps.edgewize.io/nodegroup"] && selectedRowKeys?.includes(e.name);
                });
                return {
                    ...tableProps.tableActions,
                    actions,
                    selectActions: [
                        {
                            key: "taint",
                            type: "default",
                            text: t("EDIT_TAINTS"),
                            action: "edit",
                            onClick: function() {
                                return trigger("node.taint.batch", {
                                    success: routing.query
                                });
                            }
                        },
                        {
                            key: "nodegroup",
                            icon: "restart",
                            text: t("BOUND_NODE_GROUP"),
                            action: "edit",
                            disabled: !!s,
                            show: function(e) {
                                return module26(e, 'labels["apps.edgewize.io/nodegroup"]', "") === "";
                            },
                            onClick: function() {
                                return trigger("bound.node.group", {
                                    cluster: _this.cluster,
                                    success: _this.getData
                                });
                            }
                        }
                    ]
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
export default j;
