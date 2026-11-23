import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
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
import "./module-62.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import "./module-31.js";
import module58 from "./module-58.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import { Component } from "./module-553.js";
import module26 from "./module-26.js";
import module14 from "./module-14.js";
import module186 from "./module-186.js";
import Module789 from "./module-789.js";
import Module796 from "./module-796.js";
import module794, { ListPage } from "./module-794.js";
import Module1138 from "./module-1138.js";
import { compareVersion, getClusterVersion, getDisplayNameNew, getLocalTime, hideGPUByLicense } from "./module-52.js";
import { getSuitableValue } from "./module-795.js";
import module439 from "./module-439.js";
import module959 from "./module-959.js";
import module854 from "./module-854.js";
import module1009 from "./module-1009.js";
import module4383 from "./module-4383.js";
let i;
let f;
const x = {
    cpu: "namespace_cpu_usage",
    memory: "namespace_memory_usage_wo_cache",
    gpu: "namespace_gpu_usage",
    gpu_memory: "namespace_gpu_memory_usage",
    pod: "namespace_pod_count"
};
const L = module794({
    store: new module439,
    name: "PROJECT",
    module: "projects",
    injectStores: [
        "rootStore",
        "workspaceStore"
    ]
})((f = ((Component_1)=>{
    module55(a, Component_1);
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
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a(...o_1) {
        let e;
        module36(this, a);
        e = r.call(this, ...o_1);
        e.workspaceStore = e.props.workspaceStore;
        e.monitoringStore = new module959;
        e.nodeStore = new module1009;
        e.nodeGroupStore = new module854;
        e.state = {
            nodeCount: "",
            nodeGroupCount: ""
        };
        e.handleTabChange = function(t) {
            const workspace = e.props.match.params.workspace;
            e.props.routing.push(`/workspaces/${workspace}/${t}`);
        };
        e.fetchNodeGroupData = async function t() {
            let r;
            let a;
            r = await e.nodeGroupStore.fetchResourceList({
                cluster: e.edgeCluster,
                limit: -1,
                page: 1
            });
            a = await e.nodeStore.fetchList({
                cluster: e.edgeCluster,
                labelSelector: "vcluster.loft.sh/fake-node!=true",
                type: "",
                limit: -1,
                page: 1
            });
            e.setState({
                nodeCount: a.length,
                nodeGroupCount: r.length
            });
        };
        e.handleClusterChange = function(t) {
            e.workspaceStore.selectCluster(t);
        };
        e.getData = module44(module41.mark(function t() {
            let r;
            let a;
            let n;
            let o;
            let u;
            let resources;
            const i = arguments;
            return module41.wrap(function(t) {
                while(true){
                    switch(t.prev = t.next){
                        case 0:
                            r = i.length > 0 && i[0] !== undefined ? i[0] : {};
                            a = r.silent;
                            n = module58(r, [
                                "silent"
                            ]);
                            o = e.props.store;
                            if (a) {
                                o.list.silent = true;
                            }
                            if (!(u = e.workspaceStore.cluster)) {
                                t.next = 11;
                                break;
                            }
                            t.next = 7;
                            return o.fetchList({
                                cluster: u,
                                ...e.props.match.params,
                                ...n
                            });
                        case 7:
                            if (!((resources = o.list.data.map((e)=>e.name)).length > 0)) {
                                t.next = 11;
                                break;
                            }
                            t.next = 11;
                            return e.monitoringStore.fetchMetrics({
                                cluster: u,
                                resources,
                                ...e.props.match.params,
                                metrics: Object.values(hideGPUByLicense(x, u)),
                                last: true
                            });
                        case 11:
                            o.list.silent = false;
                        case 12:
                        case "end":
                            return t.stop();
                    }
                }
            }, t);
        }));
        e.getLastValue = function(t, r) {
            const data = e.monitoringStore.data;
            const n = (module26(data, `${r}.data.result`) || []).find((e)=>module26(e, "metric.namespace") === t.name);
            return module26(n, "value[1]", 0);
        };
        e.getCheckboxProps = function(e) {
            return {
                disabled: e.status === "Terminating",
                name: e.name
            };
        };
        e.getColumns = function() {
            const getSortOrder = e.props.getSortOrder;
            const a = {
                Active: "ACTIVE",
                Terminating: "TERMINATING"
            };
            const n = [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    key: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    render: function(t, r) {
                        return <Module789 to={r.status === "Terminating" || r.isFedHostNamespace ? null : `/${e.workspace}/clusters/${r.cluster}/projects/${t}`} icon="project" iconSize={40} desc={r.description || "-"} title={getDisplayNameNew(r)}/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    key: "status",
                    isHideable: true,
                    render: function(e) {
                        return <Module796 type={e} name={t(a[e])} flicker/>;
                    }
                }
            ];
            if (globals.app.hasClusterModule(e.workspaceStore.cluster, "whizard-monitoring")) {
                n.push({
                    title: t("CPU_USAGE"),
                    key: "namespace_cpu_usage",
                    isHideable: true,
                    render: function(t) {
                        return getSuitableValue(e.getLastValue(t, x.cpu), "cpu", "-");
                    }
                }, {
                    title: t("MEMORY_USAGE"),
                    key: "namespace_memory_usage_wo_cache",
                    isHideable: true,
                    render: function(t) {
                        return getSuitableValue(e.getLastValue(t, x.memory), "memory", "-");
                    }
                }, {
                    title: t("GPU_USAGE"),
                    key: "namespace_gpu_usage",
                    isHideable: true,
                    render: function(t) {
                        return getSuitableValue(e.getLastValue(t, x.gpu), "gpu", "-");
                    }
                }, {
                    title: t("GPU_MEMORY_USAGE"),
                    key: "namespace_gpu_memory_usage",
                    isHideable: true,
                    render: function(t) {
                        return getSuitableValue(e.getLastValue(t, x.gpu_memory), "memory", "-");
                    }
                }, {
                    title: t("POD_COUNT"),
                    key: "namespace_pod_count",
                    isHideable: true,
                    render: function(t) {
                        return e.getLastValue(t, x.pod);
                    }
                });
            }
            n.push({
                title: t("CREATION_TIME_TCAP"),
                dataIndex: "createTime",
                isHideable: true,
                sorter: true,
                render: function(e) {
                    return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                }
            });
            return n;
        };
        e.showCreate = function() {
            const t = module26(e.workspaceStore.detail, "_originData.metadata.labels['cluster-role.kubesphere.io/edge']");
            e.props.trigger("project.create", {
                ...e.props.match.params,
                type: t ? "edge" : "ks",
                defaultCluster: t || e.workspaceStore.cluster,
                success: function(t) {
                    if (t) {
                        e.workspaceStore.selectCluster(t);
                    }
                    e.getData({
                        silent: true
                    });
                }
            });
        };
        e.renderEdgeCluster = function() {
            if (!e.isEdgeCluster) {
                return null;
            }
            const e_state = e.state;
            const { nodeCount, nodeGroupCount } = e_state;
            return <div className={module4383.EdgeHeader}><module186.Icon className={module4383.icon} name="edge-cluster" size={40}/><Text className={module4383.Item} title={e.edgeCluster} description={t("EDGE_CLUSTER")}/><Text className={module4383.Item} title={nodeGroupCount} description={t("NODE_GROUP_COUNT")}/><Text className={module4383.Item} title={nodeCount} description={t("EDGE_NODE_COUNT")}/></div>;
        };
        return e;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                if (this.isEdgeCluster) {
                    this.fetchNodeGroupData();
                }
            }
        },
        {
            key: "renderTitle",
            value: function(e) {
                if (e.isFedHostNamespace) {
                    return <span><span className="margin-r8">{getDisplayNameNew(e)}</span><module186.Tooltip content={t("FED_HOST_NAMESPACE_TIP")}><module186.Icon name="information"/></module186.Tooltip></span>;
                }
                return getDisplayNameNew(e);
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { match, tableProps } = props;
                const match_1 = {
                    ...match,
                    params: {
                        ...match.params,
                        cluster: this.workspaceStore.cluster
                    }
                };
                const isLoading = this.monitoringStore.isLoading;
                const columns = hideGPUByLicense(this.getColumns(), match.params.cluster);
                return <ListPage {...this.props} match={match_1} getData={this.getData} module="namespaces">{this.renderEdgeCluster()}<Module1138 className="table-2-7" {...tableProps} itemActions={this.itemActions} columns={columns} columnSearch={this.columnSearch} onCreate={this.showCreate} {...this.clusterProps} isLoading={tableProps.isLoading || isLoading} getCheckboxProps={this.getCheckboxProps}/></ListPage>;
            }
        },
        {
            key: "tabs",
            get: function() {
                return {
                    value: this.props.module,
                    onChange: this.handleTabChange,
                    options: [
                        {
                            value: "projects",
                            label: t("PROJECT_PL")
                        },
                        {
                            value: "federatedprojects",
                            label: t("MULTI_CLUSTER_PROJECT_PL")
                        }
                    ]
                };
            }
        },
        {
            key: "showFederated",
            get: function() {
                return !this.isEdgeCluster && globals.app.isMultiCluster;
            }
        },
        {
            key: "isClusterManage",
            get: function() {
                return globals.app.isPlatformAdmin || globals.app.hasPermission({
                    module: "clusters",
                    action: "manage"
                });
            }
        },
        {
            key: "edgeCluster",
            get: function() {
                return module26(this.workspaceStore.detail, "_originData.metadata.labels['cluster-role.kubesphere.io/edge']", "");
            }
        },
        {
            key: "isEdgeCluster",
            get: function() {
                return this.edgeCluster !== "";
            }
        },
        {
            key: "clusters",
            get: function() {
                return this.workspaceStore.clusters.data.map((e)=>({
                        label: e.name,
                        value: e.name,
                        disabled: !e.isReady,
                        cluster: e
                    }));
            }
        },
        {
            key: "workspace",
            get: function() {
                return this.props.match.params.workspace;
            }
        },
        {
            key: "clusterProps",
            get: function() {
                return {
                    clusters: this.clusters,
                    cluster: this.workspaceStore.cluster,
                    onClusterChange: this.handleClusterChange,
                    showClusterSelect: globals.app.isMultiCluster
                };
            }
        },
        {
            key: "columnSearch",
            get: function() {
                const cluster = this.workspaceStore.cluster;
                const search = compareVersion(getClusterVersion(cluster), "3.4.0") >= 0;
                return [
                    {
                        dataIndex: "name",
                        title: t("NAME"),
                        search: true
                    },
                    {
                        dataIndex: "alias",
                        title: t("ALIAS"),
                        search
                    }
                ];
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                const props = this.props;
                const { trigger, name } = props;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT_INFORMATION"),
                        action: "edit",
                        onClick: function(e) {
                            return trigger("resource.baseinfo.edit", {
                                detail: e
                            });
                        }
                    },
                    {
                        key: "edit-annotations",
                        icon: "pen",
                        text: t("EDIT_ANNOTATIONS"),
                        action: "manage",
                        show: function() {
                            return _this.isClusterManage;
                        },
                        onClick: function(e) {
                            return trigger("resource.annotations.edit", {
                                detail: e
                            });
                        }
                    },
                    {
                        key: "quotaEdit",
                        icon: "pen",
                        text: t("EDIT_QUOTAS"),
                        action: "edit",
                        onClick: function(e) {
                            return trigger("project.quota.edit", {
                                type: t("PROJECT"),
                                detail: e
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(e) {
                            return trigger("resource.delete", {
                                type: name,
                                detail: e
                            });
                        }
                    }
                ];
            }
        }
    ]);
    return a;
})(Component), module49(f.prototype, "clusters", [
    module14.computed
], Object.getOwnPropertyDescriptor(f.prototype, "clusters"), f.prototype), i = f)) || i;
export default L;
