import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-98.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
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
import module96 from "./module-96.js";
import module41 from "./module-41.js";
import "./module-31.js";
import module58 from "./module-58.js";
import module44 from "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import Module789 from "./module-789.js";
import Module796 from "./module-796.js";
import Module793 from "./module-793.js";
import module794, { ListPage } from "./module-794.js";
import module26 from "./module-26.js";
import module446 from "./module-446.js";
import module14 from "./module-14.js";
import { Component } from "./module-553.js";
import module323 from "./module-323.js";
import { getDisplayNameNew, getLocalTime } from "./module-52.js";
import Module1138 from "./module-1138.js";
let f;
let d;
const j = module794({
    store: new module323,
    name: "DEVOPS_PROJECT",
    module: "devops",
    rowKey: "namespace",
    injectStores: [
        "rootStore",
        "workspaceStore"
    ]
})((d = ((Component_1)=>{
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
        e.state = {
            clusters: {},
            loading: true,
            cluster: ""
        };
        e.handleClusterChange = function(cluster) {
            e.setState(function() {
                return {
                    cluster
                };
            }, function() {
                e.getData({
                    cluster
                });
            });
        };
        e.getData = module44(module41.mark(function t() {
            let r;
            let a;
            let n;
            let o;
            let u;
            const l = arguments;
            return module41.wrap(function(t) {
                while(true){
                    switch(t.prev = t.next){
                        case 0:
                            r = l.length > 0 && l[0] !== undefined ? l[0] : {};
                            a = r.silent;
                            n = module58(r, [
                                "silent"
                            ]);
                            o = e.props.store;
                            if (a) {
                                o.list.silent = true;
                            }
                            if (!(u = e.state.cluster)) {
                                t.next = 7;
                                break;
                            }
                            t.next = 7;
                            return o.fetchList({
                                cluster: u,
                                ...e.props.match.params,
                                ...n
                            });
                        case 7:
                            o.list.silent = false;
                        case 8:
                        case "end":
                            return t.stop();
                    }
                }
            }, t);
        }));
        e.getColumns = function() {
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    render: function(t, r) {
                        const a = r.status === "Terminating";
                        return <><Module789 icon="strategy-group" iconSize={40} to={r.namespace && r.cluster && !a ? `/${e.workspace}/clusters/${r.cluster}/devops/${r.namespace}/base-info` : null} desc={r.description || "-"} title={getDisplayNameNew(r)}/></>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    isHideable: true,
                    render: function(e) {
                        return <Module796 type={e} name={t(e.toUpperCase())} flicker/>;
                    }
                },
                {
                    title: t("CREATOR"),
                    dataIndex: "creator",
                    isHideable: true,
                    render: function(e) {
                        return e || "-";
                    }
                },
                {
                    title: t("CREATION_TIME_TCAP"),
                    dataIndex: "createTime",
                    isHideable: true,
                    sorter: true,
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        e.showCreate = function() {
            return e.props.trigger("devops.create", {
                ...e.props.match.params,
                cluster: e.workspaceStore.cluster,
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
        e.getCheckboxProps = function(e) {
            return {
                disabled: e.status === "Terminating",
                name: e.name
            };
        };
        return e;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                request.get("/apis/kubesphere.io/v1alpha1/extensions/devops").then((t)=>{
                    const clusters = {};
                    const n = module26(t, "status.clusterSchedulingStatuses", {});
                    Object.entries(n).forEach((e)=>{
                        const t = module96(e, 2);
                        const r = t[0];
                        const n = t[1];
                        clusters[r] = n?.state === "Installed";
                    });
                    _this.setState({
                        clusters,
                        loading: false,
                        cluster: _this.workspaceStore.clusters.data.find((e)=>e.isReady && clusters[e.name])?.name
                    });
                });
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps, match } = props;
                const match_1 = {
                    ...match,
                    params: {
                        ...match.params,
                        cluster: this.state.cluster
                    }
                };
                return <ListPage {...this.props} getData={this.getData} match={match_1}><Module793 {...bannerProps} description={t("DEVOPS_DESCRIPTION")} tips={this.tips}/><Module1138 {...tableProps} className="table-2-8" itemActions={this.itemActions} tableActions={this.tableActions} columns={this.getColumns()} columnSearch={this.columnSearch} onCreate={this.showCreate} isLoading={tableProps.isLoading && this.state.loading} {...this.clusterProps} getCheckboxProps={this.getCheckboxProps}/></ListPage>;
            }
        },
        {
            key: "itemActions",
            get: function() {
                const props = this.props;
                const { trigger, name } = props;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT"),
                        action: "edit",
                        onClick: function(detail) {
                            return trigger("devops.edit", {
                                detail
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(detail) {
                            trigger("resource.delete", {
                                title: t("DELETE_DEVOPS_PROJECT"),
                                desc: t.html("DELETE_DEVOPS_PROJECT_TIP", {
                                    resource: detail.name
                                }),
                                type: name,
                                resource: detail.name,
                                detail
                            });
                        }
                    }
                ];
            }
        },
        {
            key: "tips",
            get: function() {
                return [
                    {
                        title: t("DEVOPS_TIP_GITOPS_Q"),
                        description: t("DEVOPS_TIP_GITOPS_A")
                    },
                    {
                        title: t("DEVOPS_TIP_TYPE_Q"),
                        description: t("DEVOPS_TIP_TYPE_A")
                    }
                ];
            }
        },
        {
            key: "workspace",
            get: function() {
                return this.props.match.params.workspace;
            }
        },
        {
            key: "clusters",
            get: function() {
                const _this = this;
                return module446(this.workspaceStore.clusters.data.map((t)=>({
                        label: t.name,
                        value: t.name,
                        disabled: !t.isReady || !_this.state.clusters[t.name],
                        cluster: t
                    })), "disabled");
            }
        },
        {
            key: "clusterProps",
            get: function() {
                return {
                    clusters: this.clusters,
                    cluster: this.state.cluster,
                    onClusterChange: this.handleClusterChange,
                    showClusterSelect: globals.app.isMultiCluster
                };
            }
        },
        {
            key: "tableActions",
            get: function() {
                const props = this.props;
                const { tableProps, trigger } = props;
                return {
                    ...tableProps.tableActions,
                    selectActions: [
                        {
                            key: "delete",
                            type: "danger",
                            text: t("DELETE"),
                            action: "delete",
                            onClick: function() {
                                trigger("devops.batch.delete", {
                                    type: tableProps.name,
                                    rowKey: tableProps.rowKey
                                });
                            }
                        }
                    ]
                };
            }
        },
        {
            key: "columnSearch",
            get: function() {
                return [
                    {
                        dataIndex: "name",
                        title: t("NAME"),
                        search: true
                    },
                    {
                        dataIndex: "alias",
                        title: t("ALIAS"),
                        search: true
                    }
                ];
            }
        }
    ]);
    return a;
})(Component), module49(d.prototype, "clusters", [
    module14.computed
], Object.getOwnPropertyDescriptor(d.prototype, "clusters"), d.prototype), f = d)) || f;
export default j;
