import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-18.js";
import "./module-192.js";
import "./module-16.js";
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
import "./module-41.js";
import "./module-31.js";
import "./module-58.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import module186 from "./module-186.js";
import Module789 from "./module-789.js";
import Module793 from "./module-793.js";
import Module1107 from "./module-1107.js";
import module794, { ListPage } from "./module-794.js";
import Module797 from "./module-797.js";
import module14 from "./module-14.js";
import { Component } from "./module-553.js";
import module438 from "./module-438.js";
import module445 from "./module-445.js";
import { getDisplayNameNew, getDomTitle, getLocalTime } from "./module-52.js";
let l;
let f;
const L = module794({
    store: new module445,
    module: "workspaces",
    name: "WORKSPACE"
})((f = ((Component_1)=>{
    module55(n, Component_1);
    var r = ((t)=>{
        const e = (()=>{
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
            } catch (t) {
                return false;
            }
        })();
        return function() {
            let r;
            const n = module51(t);
            if (e) {
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
        e.clusterStore = new module438;
        e.getClusters = function() {
            e.clusterStore.fetchList({
                limit: -1
            });
        };
        e.getColumns = function() {
            const getSortOrder = e.props.getSortOrder;
            const n = [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    render: function(t, e) {
                        return <Module789 icon="enterprise" iconSize={40} title={getDomTitle(getDisplayNameNew(e))} desc={getDomTitle(e.description || "-")} to={`/workspaces/${t}`}/>;
                    }
                },
                {
                    title: t("CREATION_TIME_TCAP"),
                    dataIndex: "createTime",
                    sorter: true,
                    sortOrder: getSortOrder("createTime"),
                    isHideable: true,
                    width: 250,
                    render: function(t) {
                        return getLocalTime(t).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
            if (globals.app.isMultiCluster) {
                n.splice(1, 0, {
                    title: t("CLUSTER_PL"),
                    dataIndex: "clusters",
                    width: "30%",
                    render: function(clusters, n) {
                        if (n.name === "system-workspace") {
                            return <module186.Tag type="secondary">{t("ALL_CLUSTERS")}</module186.Tag>;
                        }
                        return <Module1107 clusters={clusters} clustersDetail={e.clusters}/>;
                    }
                });
            }
            return n;
        };
        e.showCreate = function() {
            const e_workspaceConfig = e.workspaceConfig;
            const { key, createModal } = e_workspaceConfig;
            return e.props.trigger("workspace.create", {
                title: createModal.title,
                form: {
                    defaultClusterType: key
                },
                success: e.getData
            });
        };
        e.workspaceConfigs = [
            {
                key: "ks",
                path: "/access/workspaces",
                title: t("KS_WORKSPACE_PL"),
                description: t("KS_WORKSPACE_DESC"),
                requestParams: {
                    labelSelector: "!cluster-role.kubesphere.io/edge"
                },
                createModal: {
                    title: t("CREATE_KS_WORKSPACE")
                }
            },
            {
                key: "edge",
                path: "/access/edge-workspaces",
                title: t("EDGE_WORKSPACE_PL"),
                description: t("EDGE_WORKSPACE_DESC"),
                requestParams: {
                    labelSelector: "cluster-role.kubesphere.io/edge"
                },
                createModal: {
                    title: t("CREATE_EDGE_WORKSPACE")
                }
            }
        ];
        e.handleTabChange = function(t) {
            e.props.routing.push(t);
        };
        e.getData = async function t() {
            let r;
            let n;
            let a;
            let o;
            let s;
            const i = arguments;
            r = i.length > 0 && i[0] !== undefined ? i[0] : {};
            ({ silent: n, ...a } = r);
            o = e.props.store;
            s = e.workspaceConfig.requestParams;
            if (n) {
                o.list.silent = true;
            }
            await o.fetchList({
                ...a,
                ...s
            });
            o.list.silent = false;
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.getClusters();
            }
        },
        {
            key: "showAction",
            value: function(t) {
                return globals.config.systemWorkspace !== t.name;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps } = props;
                const workspaceConfig = this.workspaceConfig;
                const { title, description } = workspaceConfig;
                const isLoading = this.clusterStore.list.isLoading;
                return <ListPage {...this.props} getData={this.getData}><Module793 {...bannerProps} title={title} description={description} tabs={this.tabs}/><Module797 className="table-2-6" {...tableProps} columns={this.getColumns()} columnSearch={this.columnSearch} itemActions={this.itemActions} tableActions={this.tableActions} enabledActions={this.enabledActions} onCreate={this.showCreate} isLoading={tableProps.isLoading || isLoading} onRefresh={this.getClusters} justRefresh={false}/></ListPage>;
            }
        },
        {
            key: "clusters",
            get: function() {
                return this.clusterStore.list.data;
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
        },
        {
            key: "enabledActions",
            get: function() {
                if (this.props.location.pathname === "/access/workspaces") {
                    return globals.app.getActions({
                        module: "workspaces",
                        ...this.props.match.params
                    });
                }
                return globals.app.getActions({
                    module: "clusters",
                    ...this.props.match.params
                });
            }
        },
        {
            key: "itemActions",
            get: function() {
                const props = this.props;
                const { name, routing, trigger } = props;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT_INFORMATION"),
                        action: "edit",
                        show: this.showAction,
                        onClick: function(detail) {
                            return trigger("resource.baseinfo.edit", {
                                detail,
                                success: routing.query
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        show: this.showAction,
                        onClick: function(detail) {
                            return trigger("workspace.delete", {
                                type: name,
                                resource: detail.name,
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
                const { tableProps, trigger, name } = props;
                return {
                    ...tableProps.tableActions,
                    selectActions: [
                        {
                            key: "delete",
                            type: "danger",
                            text: t("DELETE"),
                            action: "delete",
                            onClick: function() {
                                return trigger("workspace.batch.delete", {
                                    type: name,
                                    rowKey: "name"
                                });
                            }
                        }
                    ],
                    getCheckboxProps: function(t) {
                        return {
                            disabled: !_this.showAction(t),
                            name: t.name
                        };
                    }
                };
            }
        },
        {
            key: "workspaceConfig",
            get: function() {
                const path = this.props.match.path;
                return this.workspaceConfigs.find((t)=>t.path === path) ?? this.workspaceConfigs[0];
            }
        },
        {
            key: "tabs",
            get: function() {
                const path = this.workspaceConfig.path;
                return {
                    options: this.workspaceConfigs.map((t)=>({
                            value: t.path,
                            label: t.title
                        })),
                    value: path,
                    onChange: this.handleTabChange
                };
            }
        }
    ]);
    return n;
})(Component), module49(f.prototype, "clusters", [
    module14.computed
], Object.getOwnPropertyDescriptor(f.prototype, "clusters"), f.prototype), l = f)) || l;
export default L;
