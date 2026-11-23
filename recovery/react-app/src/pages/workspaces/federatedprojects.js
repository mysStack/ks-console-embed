import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-48.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-137.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import "unpacked/module-315.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import Module789 from "components/Base/Avatar";
import Module796 from "components/Base/Status";
import Module1107 from "components/Clusters/ClusterWrapper";
import module794, { ListPage } from "components/HOCs/withList";
import module14 from "unpacked/module-14.js";
import { Component } from "unpacked/module-553.js";
import module439 from "stores/project";
import module494 from "stores/project.federated";
import module437 from "stores/federated";
import { getDisplayNameNew, getLocalTime } from "utils/index";
import Module1138 from "unpacked/module-1138.js";
import module26 from "unpacked/module-26.js";
let l;
let c;
const A = module794({
    store: new module494({
        module: "namespaces"
    }),
    name: "MULTI_CLUSTER_PROJECT",
    module: "projects",
    injectStores: [
        "rootStore",
        "workspaceStore"
    ]
})((c = ((Component_1)=>{
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
    function a(...o) {
        let e;
        module36(this, a);
        e = r.call(this, ...o);
        e.federatedDetailStore = new module437({
            module: "namespaces"
        });
        e.projectStore = new module439;
        e.handleTabChange = function(t) {
            const workspace = e.props.match.params.workspace;
            e.props.routing.push(`/workspaces/${workspace}/${t}`);
        };
        e.getColumns = function() {
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    render: function(t, r) {
                        return <Module789 to={r.deletionTime ? null : `/${e.workspace}/federatedprojects/${t}`} icon="project" iconSize={40} isMultiCluster desc={r.description || "-"} title={getDisplayNameNew(r)}/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    isHideable: true,
                    render: function(e) {
                        return <Module796 type={e} name={t(e)} flicker/>;
                    }
                },
                {
                    title: t("CLUSTER"),
                    dataIndex: "clusters",
                    isHideable: true,
                    render: function(t, r) {
                        const clusters = module26(r, 'annotations["kubefed.kubesphere.io/clusters"]', "").split(",").map((name)=>({
                                name
                            }));
                        return <Module1107 clusters={clusters} clustersDetail={e.clusters}/>;
                    }
                },
                {
                    title: t("CREATION_TIME_TCAP"),
                    dataIndex: "createTime",
                    isHideable: true,
                    sorter: true,
                    width: "20%",
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        e.showCreate = function() {
            return e.props.trigger("federated.project.create", {
                ...e.props.match.params,
                store: e.projectStore,
                clusters: e.clusters.slice(),
                success: function() {
                    return e.props.getData();
                }
            });
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const tableProps = this.props.tableProps;
                return <ListPage {...this.props} module="namespaces" isFederated><Module1138 {...tableProps} className="table-2-6" tableActions={this.tableActions} itemActions={this.itemActions} columns={this.getColumns()} columnSearch={this.columnSearch} onCreate={this.showCreate} clusters={this.clusters}/></ListPage>;
            }
        },
        {
            key: "clusters",
            get: function() {
                return this.props.workspaceStore.clusters.data;
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
            key: "workspace",
            get: function() {
                return this.props.match.params.workspace;
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                const trigger = this.props.trigger;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT_INFORMATION"),
                        action: "edit",
                        onClick: async (t)=>{
                            let r;
                            r = await _this.federatedDetailStore.fetchDetail({
                                namespace: t.name,
                                name: t.name
                            });
                            trigger("federated.baseinfo.edit", {
                                detail: r,
                                projectStore: _this.projectStore,
                                store: _this.federatedDetailStore
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
                        onClick: async (t)=>{
                            let r;
                            r = await _this.federatedDetailStore.fetchDetail({
                                namespace: t.name,
                                name: t.name
                            });
                            trigger("resource.annotations.edit", {
                                detail: r,
                                store: _this.federatedDetailStore
                            });
                        }
                    },
                    {
                        key: "add",
                        icon: "add",
                        text: t("ADD_CLUSTER"),
                        action: "edit",
                        onClick: async (t)=>{
                            let r;
                            r = await _this.federatedDetailStore.fetchDetail({
                                namespace: t.name,
                                name: t.name
                            });
                            trigger("federated.project.add.cluster", {
                                detail: r,
                                store: _this.federatedDetailStore,
                                clusters: _this.clusters,
                                success: function() {
                                    return _this.props.getData();
                                }
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(detail) {
                            return trigger("federated.project.delete", {
                                detail
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
                const { name, trigger, getData } = props;
                return {
                    ...props.tableProps.tableActions,
                    selectActions: [
                        {
                            key: "delete",
                            type: "danger",
                            text: t("DELETE"),
                            onClick: function() {
                                return trigger("federated.project.delete.batch", {
                                    type: name,
                                    success: getData,
                                    rowKey: "name",
                                    ..._this.props.match.params
                                });
                            }
                        }
                    ],
                    getCheckboxProps: function(e) {
                        return {
                            disabled: e.deletionTime,
                            name: e.name
                        };
                    }
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
})(Component), module49(c.prototype, "clusters", [
    module14.computed
], Object.getOwnPropertyDescriptor(c.prototype, "clusters"), c.prototype), l = c)) || l;
export default A;
