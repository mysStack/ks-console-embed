import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-73.js";
import "./module-18.js";
import "./module-97.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-64.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
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
import module186 from "./module-186.js";
import { cpuFormat, getHostClusterName, memoryFormat } from "./module-52.js";
import { ICON_TYPES, NODE_ROLE, NODE_STATUS } from "./module-72.js";
import { getNodeStatus } from "./module-444.js";
import module1174 from "./module-1174.js";
import module973 from "./module-973.js";
import modal from "./module-1067.js";
import { ListPage, withClusterList } from "./module-794.js";
import Module789 from "./module-789.js";
import Module796 from "./module-796.js";
import Module791 from "./module-791.js";
import module788 from "./module-788.js";
import Module793 from "./module-793.js";
import Module797 from "./module-797.js";
import Module875 from "./module-875.js";
import module14 from "./module-14.js";
import module3728 from "./module-3728.js";
let c;
const x = withClusterList({
    store: new module1174,
    name: "EDGE_NODE",
    module: "edgenodes"
})(c = ((Component_1)=>{
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
        e.monitoringStore = new module973({
            cluster: e.cluster
        });
        e.getData = async (r)=>{
            await e.store.fetchList({
                ...r,
                ...e.props.match.params,
                type: "edgenode"
            });
        };
        e.getUnschedulable = function(e) {
            return e.taints.some((e)=>e.key === "node.kubernetes.io/unschedulable");
        };
        e.getReady = function(e) {
            return e.conditions.some((e)=>e.type === "Ready" && e.status === "True");
        };
        e.handleOpenTerminal = function(t) {
            var r = module788.open({
                onOk: function() {
                    module788.close(r);
                },
                modal,
                cluster: e.cluster,
                title: t.name,
                nodename: t.name
            });
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
                    render: function(title, t) {
                        return <Module789 icon={ICON_TYPES[module]} iconSize={40} to={t.importStatus !== "success" ? null : `${prefix}/${title}`} title={title} desc={t.ip}/>;
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
                        return <div className={module3728.status}><Module796 type={a} name={t(`NODE_STATUS_${a.toUpperCase()}`)}/>{!module63(n_taints) && n.importStatus === "success" && <module186.Tooltip content={e.renderTaintsTip(n_taints)}><span className={module3728.taints}>{n_taints.length}</span></module186.Tooltip>}</div>;
                    }
                },
                {
                    title: t("ROLE"),
                    dataIndex: "role",
                    isHideable: true,
                    filters: e.getRole(),
                    filteredValue: getFilteredValue("role"),
                    search: true,
                    render: function(e) {
                        return e.map((e)=>t(e.replace("-", "_").toUpperCase())).join("/");
                    }
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
        e.showCreate = function() {
            const e_props = e.props;
            const { query, match, module } = e_props;
            return e.props.trigger("workload.create", {
                module,
                namespace: query.namespace,
                cluster: match.params.cluster,
                rootStore: e.props.rootStore
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
                if (this.cluster !== this.hostClusterName) {
                    return <><Module793 {...bannerProps} title={t("EDGE_NODE_PL")} tips={this.tips}/><Module875 {...tableProps} title={t("EDGE_LIST_NOT_HOST_TITLE")} desc={t("EDGE_LIST_NOT_HOST_TITLE_DESC")}/></>;
                }
                return <ListPage {...this.props} getData={this.getData} noWatch><Module793 {...bannerProps} title={t("EDGE_NODE_PL")} tips={this.tips}/><Module797 {...tableProps} onCreate={this.showCreate} itemActions={this.itemActions} tableActions={this.tableActions} columns={this.getColumns()} isLoading={tableProps.isLoading || isLoading}/></ListPage>;
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
                return module26(globals, "licenseInfo.isExpired", false);
            }
        },
        {
            key: "isUnAuthorized",
            get: function() {
                return module26(globals, "licenseInfo.isUnAuthorized", false);
            }
        },
        {
            key: "isOverLimit",
            get: function() {
                return module26(globals, "licenseInfo.isOverLimit", false);
            }
        },
        {
            key: "hostClusterName",
            get: function() {
                return getHostClusterName();
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
                        key: "uncordon",
                        icon: "start",
                        text: t("UNCORDON"),
                        action: "edit",
                        show: function(t) {
                            return t.importStatus === "success" && _this.getUnschedulable(t);
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
                        show: function(t) {
                            return t.importStatus === "success" && !_this.getUnschedulable(t);
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
                        key: "logs",
                        icon: "eye",
                        text: t("VIEW_LOG"),
                        action: "edit",
                        show: function(e) {
                            return e.importStatus !== "success";
                        },
                        onClick: function() {
                            return trigger("node.add.log", {
                                detail: module14.toJS(clusterStore.detail)
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
                        onClick: function(detail) {
                            return trigger("resource.delete", {
                                type: name,
                                detail,
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
                            store: _this.store
                        });
                    }
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
})(Component)) || c;
export default x;
