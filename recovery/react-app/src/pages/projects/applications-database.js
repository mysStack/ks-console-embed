import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
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
import "unpacked/module-85.js";
import "unpacked/module-62.js";
import "unpacked/module-64.js";
import "unpacked/module-188.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module244 from "unpacked/module-244.js";
import module801 from "unpacked/module-801.js";
import module26 from "unpacked/module-26.js";
import { Link } from "unpacked/module-433.js";
import module186 from "unpacked/module-186.js";
import Module796 from "components/Base/Status";
import Module836 from "components/Base/Image";
import Module1025 from "pages/apps/components/Avatar";
import { ListPage, withProjectList } from "components/HOCs/withList";
import Module797 from "components/Tables/List";
import { getLocalTime } from "utils/index";
import module1430, { DMPStatus } from "unpacked/module-1430.js";
import { RadonDBAppId } from "unpacked/module-817.js";
import Module1240 from "pages/projects/containers/Applications/Banner";
import module4515 from "unpacked/module-4515.js";
let c;
const I = withProjectList({
    store: new module1430,
    module: "applications",
    name: "APP"
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
    function r(...o_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...o_1);
        e.type = "database";
        e.state = {
            appList: []
        };
        e.getColumns = function() {
            const getSortOrder = e.props.getSortOrder;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    render: function(title, a) {
                        return <Module1025 isApp to={`${e.prefix}/${title}`} avatar={module26(a, "icon")} iconLetter={a.kind} iconSize={40} title={title} desc={a.description}/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    isHideable: true,
                    render: e.renderStatus
                },
                {
                    title: t("APP_TEMPLATE"),
                    dataIndex: "app_name",
                    isHideable: true,
                    render: function(e, t) {
                        return <Link to={`/apps/${t.app_id}`}>RadonDB {e}</Link>;
                    }
                },
                {
                    title: t("VERSION"),
                    dataIndex: "version",
                    isHideable: true
                },
                {
                    title: t("ACCESS_ADDRESS_PL"),
                    dataIndex: "services",
                    isHideable: true,
                    width: "272px",
                    render: function(e, a) {
                        let content = "";
                        const n = module26(a, "services.length", 0);
                        if (n > 1) {
                            const o = e.filter((e)=>e.type === "ClusterIP");
                            const c = e.filter((e)=>e.type === "NodePort");
                            content = <div className={module4515.tooltips}>{o.length > 0 && <><div className={module4515.tooltipTitle}>ClusterIP</div>{o.map(({ label, value })=><div key={value}><div>{t(label)}: {value}</div></div>)}</>}{c.length > 0 && <><div className={module4515.tooltipTitle}>NodePort</div>{c.map(({ label, value })=><div key={value}><div>{t(label)}: {value}</div></div>)}</>}</div>;
                        }
                        return <div><span>{module26(e, "[0].value", module26(e, "[1].value"))}</span>{n > 1 && <module186.Tooltip content={content} style={{
                            top: "-8px"
                        }}><span className={module4515.tag}>{n}</span></module186.Tooltip>}</div>;
                    }
                },
                {
                    title: t("CREATION_TIME_TCAP"),
                    dataIndex: "creationTimestamp",
                    sorter: true,
                    sortOrder: getSortOrder("creationTimestamp"),
                    isHideable: true,
                    width: 180,
                    render: function(e, t) {
                        return getLocalTime(t.creationTimestamp || t.status_time).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        e.renderStatus = function(e, a) {
            if (e) {
                if (a.additional_info) {
                    return <module186.Tooltip content={a.additional_info}><Module796 name={t(`DATABASE_STATUS_${e.replace(/[-\s]/g, "_").toUpperCase()}`)} type={e} flicker/></module186.Tooltip>;
                }
                return <Module796 name={t(`DATABASE_STATUS_${e.replace(/[-\s]/g, "_").toUpperCase()}`)} type={DMPStatus[e] || e} flicker/>;
            }
            return "-";
        };
        e.showDeploy = function(t, app_id) {
            const e_props = e.props;
            const { match, module, projectStore, trigger } = e_props;
            return e.props.trigger("openpitrix.db.app.create", {
                module,
                app_id,
                detail: e.state.appList.find((e)=>e.app_id === app_id),
                namespace: match.params.namespace,
                cluster: match.params.cluster,
                workspace: module26(projectStore, "detail.workspace"),
                routing: e.props.rootStore.routing,
                success: e.handleFetch,
                trigger
            });
        };
        e.handleFetch = module801(function(t) {
            const e_props = e.props;
            const { store, getData } = e_props;
            if (!store.list.isLoading) {
                return getData({
                    ...module244.parse(location.search.slice(1)),
                    ...t,
                    silent: true
                });
            }
        }, 1000);
        e.handleWatch = function(t) {
            if (t.object.kind === "Manifest" && [
                "MODIFIED",
                "DELETED",
                "ADDED"
            ].includes(t.type)) {
                e.handleFetch();
            }
        };
        e.getApplist = function() {
            request.get("/kapis/application.kubesphere.io/v2/apps", {
                orderBy: "create_time",
                conditions: "status=active,repo_id=repo-helm,category_id=radondb",
                reverse: true
            }).then((t)=>{
                e.setState({
                    appList: t.items
                });
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "getTableProps",
            value: function() {
                const _this = this;
                const props = this.props;
                const { tableProps, store } = props;
                const content = <module186.Menu onClick={this.showDeploy}>{this.state.appList.map((e)=><module186.Menu.MenuItem key={e.app_id}><Module836 width="16px" style={{
                        marginRight: "8px"
                    }} src={e.icon} iconLetter={e.name} iconSize={12}/>{e.name}</module186.Menu.MenuItem>)}</module186.Menu>;
                const placement = module26(store, "list.data.length", 0) > 0 ? "bottomRight" : "bottom";
                const actions = this.canCreate ? [
                    {
                        key: "deploy",
                        type: "control",
                        customDom: <module186.Dropdown key="app-list" className={module4515.appCreate} positionFixed content={content} placement={placement}><module186.Button key="deploy" type="control" disabled={this.state.appList < 1}><div className={module4515.deployButton}><span>{t("INSTALL")}</span><module186.Icon name="caret-down" color={{
                            primary: "#fff",
                            secondary: "#fff"
                        }} style={{
                            marginLeft: "4px"
                        }}/></div></module186.Button></module186.Dropdown>
                    }
                ] : [];
                const selectActions = [
                    {
                        key: "delete",
                        type: "danger",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function() {
                            return _this.props.trigger("resource.batch.delete", {
                                type: "APP",
                                rowKey: tableProps.rowKey,
                                success: _this.handleFetch,
                                ..._this.props.match.params,
                                ..._this.props.query
                            });
                        }
                    }
                ];
                return {
                    tableActions: {
                        ...tableProps.tableActions,
                        actions,
                        onCreate: null
                    },
                    selectActions,
                    emptyProps: {
                        desc: t("CREATE_APP_TEMPLATE_DESC")
                    },
                    searchType: "keyword"
                };
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                this.getApplist();
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps, match } = props;
                return <ListPage {...this.props} onMessage={this.handleWatch}><Module1240 {...bannerProps} match={match} type={this.type}/><Module797 className={module4515.DBApps} {...tableProps} {...this.getTableProps()} itemActions={this.itemActions} columns={this.getColumns()} rowKey="name" alwaysUpdate/></ListPage>;
            }
        },
        {
            key: "prefix",
            get: function() {
                const params = this.props.match.params;
                const { workspace, cluster, namespace } = params;
                return `/${workspace}/clusters/${cluster}/projects/${namespace}/applications/${this.type}`;
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
                const trigger = this.props.trigger;
                const params = this.props.match.params;
                const { cluster, namespace, workspace } = params;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT_INFORMATION"),
                        action: "edit",
                        onClick: function(t) {
                            return trigger("openpitrix.db.app.edit", {
                                detail: {
                                    cluster,
                                    namespace,
                                    workspace,
                                    cluster_id: t.name,
                                    name: t.name,
                                    description: t.description
                                },
                                success: _this.handleFetch
                            });
                        }
                    },
                    {
                        key: "update",
                        icon: "update",
                        text: t("UPDATE_VERSION"),
                        action: "edit",
                        show: function(e) {
                            return !(e.app_id !== RadonDBAppId.OpenSearch || !e.databaseVersionText.includes("2.3.0"));
                        },
                        onClick: function(r) {
                            return trigger("openpitrix.db.app.update", {
                                resource: r.name,
                                title: t("UPDATE_VERSION"),
                                detail: {
                                    cluster,
                                    namespace,
                                    workspace,
                                    cluster_id: r.name,
                                    app_id: r.app_id
                                },
                                success: _this.handleFetch
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(t) {
                            return trigger("resource.delete", {
                                type: "APP",
                                detail: {
                                    name: t.name,
                                    cluster,
                                    namespace,
                                    workspace
                                },
                                success: _this.handleFetch
                            });
                        }
                    }
                ];
            }
        }
    ]);
    return r;
})(Component)) || c;
export default I;
