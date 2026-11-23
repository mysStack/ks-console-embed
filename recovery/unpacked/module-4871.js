import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-84.js";
import "./module-48.js";
import "./module-16.js";
import "./module-190.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-188.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import module41 from "./module-41.js";
import "./module-31.js";
import "./module-58.js";
import module44 from "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module26 from "./module-26.js";
import module856 from "./module-856.js";
import module240 from "./module-240.js";
import module14 from "./module-14.js";
import module244 from "./module-244.js";
import Module796 from "./module-796.js";
import module794, { ListPage } from "./module-794.js";
import Module797 from "./module-797.js";
import { getLocalTime } from "./module-52.js";
import module1928 from "./module-1928.js";
import { RadonDBAppId } from "./module-817.js";
import module325 from "./module-325.js";
import module4872 from "./module-4872.js";
let u;
const w = {
    Creating: "CREATING",
    Success: "SUCCESSFUL",
    Failed: "FAILED"
};
const x = module794({
    store: new module1928,
    module: "applications",
    name: "BACKUP",
    injectStores: [
        "rootStore",
        "detailStore"
    ]
})(u = ((Component_1)=>{
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
    function r(...o_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...o_1);
        e.state = {
            appList: []
        };
        e.websocket = new module325;
        e.lastIsRunning = true;
        e.getData = module856(module44(module41.mark(function* t() {
            let a;
            let r;
            let n;
            let o;
            const c = arguments;
            a = c.length > 0 && c[0] !== undefined ? c[0] : {};
            ({ silent: r, ...n } = a);
            o = e.props.store;
            if (r) {
                o.list.silent = true;
            }
            yield o.fetchList({
                ...e.props.match.params,
                ...n,
                app_id: e.props.detailStore.detail.app_id
            });
            o.list.silent = false;
        })), 1000);
        e.getColumns = function() {
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    minWidth: "20%"
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    render: function(a) {
                        const detailStore = e.props.detailStore;
                        if (module26(detailStore, "detail.app_id") === RadonDBAppId.PostgreSQL) {
                            return <Module796 flicker type="available" name={t("AVAILABLE")}/>;
                        }
                        return <Module796 flicker type={a} name={t(w[a])}/>;
                    }
                },
                {
                    title: t("SIZE_GIB"),
                    dataIndex: "size",
                    render: function(e) {
                        let t = "-";
                        if (e) {
                            t = typeof e === "string" ? e : (e / 1024 / 1024 / 1024).toFixed(2);
                        }
                        return t;
                    },
                    with: "120px"
                },
                {
                    title: t("BACKUP_START_TIME"),
                    dataIndex: "createAt",
                    render: function(e) {
                        if (e) {
                            return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                        }
                        return "-";
                    }
                },
                {
                    title: t("BACKUP_END_TIME"),
                    dataIndex: "completeAt",
                    render: function(e) {
                        if (e) {
                            return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                        }
                        return "-";
                    }
                }
            ];
        };
        e.showCreate = function() {
            const e_props = e.props;
            const { match, module, detailStore } = e_props;
            return e.props.trigger("openpitrix.db.backup.create", {
                module,
                cluster: match.params.cluster,
                namespace: match.params.namespace,
                workspace: match.params.workspace,
                title: t("CREATE_BACKUP"),
                app_id: module26(detailStore, "detail.app_id"),
                cluster_id: match.params.id,
                image: module26(detailStore, "detail.sidecarImage"),
                success: function() {
                    return e.getData(module244.parse(location.search.slice(1)));
                }
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                request.get("/kapis/application.kubesphere.io/v2/apps?orderBy=create_time&conditions=status%3Dactive%2Crepo_id%3Drepo-helm%2Ccategory_id%3Dradondb&reverse=true").then((t)=>{
                    _this.setState({
                        appList: t.items
                    });
                });
                this.isRunning = this.props.detailStore.detail.isRunning;
                this.initWebsocket();
            }
        },
        {
            key: "componentDidUpdate",
            value: function() {
                const isRunning = this.props.detailStore.detail.isRunning;
                if (this.lastIsRunning !== isRunning && isRunning) {
                    this.getData(module244.parse(location.search.slice(1)));
                }
                this.lastIsRunning = isRunning;
            }
        },
        {
            key: "initWebsocket",
            value: function() {
                const _this = this;
                const params = this.props.match.params;
                const { cluster, namespace, id: cluster_id } = params;
                const o = this.props.store.getWatchListUrl({
                    namespace,
                    cluster_id,
                    app_id: this.props.detailStore.detail.app_id,
                    cluster
                });
                if (o && namespace) {
                    this.websocket.watch(o);
                    this.disposer = module14.reaction(function() {
                        return _this.websocket.message;
                    }, function(t) {
                        if (t.object.kind === "Backup" && [
                            "ADDED",
                            "MODIFIED",
                            "DELETED"
                        ].includes(t.type)) {
                            _this.getData(module244.parse(location.search.slice(1)));
                        }
                    });
                }
            }
        },
        {
            key: "getTableProps",
            value: function() {
                const _this = this;
                const props = this.props;
                const { tableProps, detailStore, store, name } = props;
                const actions = this.canCreate ? [
                    {
                        key: "deploy",
                        type: "control",
                        text: t("CREATE"),
                        action: "create",
                        forbidden: !detailStore.detail.isRunning,
                        onClick: this.showCreate
                    }
                ] : [];
                if (!detailStore.detail.isRunning) {
                    actions[0].tooltip = {
                        message: t("BACKUP_NOT_ALLOWED_DESC"),
                        placement: module26(store, "list.data.length") ? "bottomRight" : "bottom"
                    };
                }
                const app_id = module26(detailStore, "detail.app_id");
                const i = {
                    key: "delete",
                    type: "danger",
                    text: t("DELETE"),
                    action: "delete",
                    onClick: function() {
                        _this.props.trigger("resource.batch.delete", {
                            once: app_id === RadonDBAppId.PostgreSQL,
                            type: name,
                            rowKey: tableProps.rowKey,
                            ..._this.props.match.params,
                            app_id
                        });
                    }
                };
                return {
                    tableActions: {
                        ...tableProps.tableActions,
                        selectActions: detailStore.detail.isRunning ? app_id === RadonDBAppId.PostgreSQL ? [] : [
                            i
                        ] : [],
                        actions
                    },
                    emptyProps: {
                        desc: ""
                    },
                    searchType: "keyword"
                };
            }
        },
        {
            key: "render",
            value: function() {
                const tableProps = this.props.tableProps;
                const itemActions = this.itemActions;
                return <div className={module4872.backup}><ListPage {...this.props} getData={this.getData} noWatch><Module797 {...tableProps} {...this.getTableProps()} rowKey="name" itemActions={itemActions} columns={this.getColumns()} alwaysUpdate/></ListPage></div>;
            }
        },
        {
            key: "canCreate",
            get: function() {
                const params = this.props.match.params;
                const { cluster, namespace } = params;
                return globals.app.hasPermission({
                    cluster,
                    project: namespace,
                    module: "applications",
                    action: "create"
                });
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                const props = this.props;
                const { trigger, routing, match, module, name, detailStore } = props;
                const app_id = detailStore.detail.app_id;
                return [
                    {
                        key: "edit",
                        icon: "copy",
                        text: t("RESTORE_FROM_BACKUP"),
                        action: "edit",
                        show: function(e) {
                            return e.status === "Success";
                        },
                        onClick: function(a) {
                            if (a.status === "Success") {
                                const S3 = module26(detailStore.detail, "spec.S3");
                                const backupToS3Name = module26(detailStore.detail, "name");
                                trigger("openpitrix.db.app.create", {
                                    module,
                                    app_id,
                                    detail: _this.state.appList.find((e)=>e.app_id === app_id),
                                    namespace: match.params.namespace,
                                    cluster: match.params.cluster,
                                    workspace: match.params.workspace,
                                    routing: _this.props.rootStore.routing,
                                    restoreParams: {
                                        ...a.restoreParams,
                                        backupId: a.name,
                                        backupToS3Name,
                                        S3,
                                        databaseVersion: detailStore.detail.databaseVersion,
                                        nodes: module26(a, "nodes"),
                                        volume: module26(a, "volume"),
                                        specifications: module26(a, "specifications")
                                    },
                                    trigger
                                });
                            } else {
                                module240.warning({
                                    content: t("BACKUP_IN_PROGRESS_DESC")
                                });
                            }
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        show: function() {
                            return app_id !== RadonDBAppId.PostgreSQL;
                        },
                        onClick: function(t) {
                            return trigger("resource.delete", {
                                type: name,
                                detail: {
                                    ...t,
                                    ...match.params,
                                    app_id: detailStore.detail.app_id
                                },
                                success: routing.query,
                                store: _this.props.store
                            });
                        }
                    }
                ];
            }
        }
    ]);
    return r;
})(Component)) || u;
export default x;
