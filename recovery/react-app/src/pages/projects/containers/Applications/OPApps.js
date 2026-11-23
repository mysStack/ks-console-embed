import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
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
import Module1025 from "pages/apps/components/Avatar";
import { ListPage, withProjectList } from "components/HOCs/withList";
import Module797 from "components/Tables/List";
import { getLocalTime } from "utils/index";
import module1205 from "stores/openpitrix/application";
import Module1240 from "pages/projects/containers/Applications/Banner";
let o;
const D = withProjectList({
    store: new module1205,
    module: "applications",
    name: "APP"
})(o = ((Component_1)=>{
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
        e.type = "template";
        e.getColumns = function() {
            const getSortOrder = e.props.getSortOrder;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    render: function(t, a) {
                        return <Module1025 isApp to={`${e.prefix}/${a.cluster_id}`} avatar={module26(a, "app.icon")} iconLetter={t} iconSize={40} title={t} desc={a.description}/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    isHideable: true,
                    width: "16%",
                    render: e.renderStatus
                },
                {
                    title: t("APP_TEMPLATE"),
                    dataIndex: "app.name",
                    isHideable: true,
                    width: "16%",
                    render: function(e, t) {
                        return <Link to={`/apps/${module26(t, "version.app_id")}`}>{e}</Link>;
                    }
                },
                {
                    title: t("VERSION"),
                    dataIndex: "version.name",
                    isHideable: true,
                    width: "16%"
                },
                {
                    title: t("UPDATE_TIME_TCAP"),
                    dataIndex: "status_time",
                    sorter: true,
                    sortOrder: getSortOrder("status_time"),
                    isHideable: true,
                    width: 180,
                    render: function(e, t) {
                        return getLocalTime(t.update_time || t.status_time).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        e.renderStatus = function(e, a) {
            if (a.additional_info) {
                return <module186.Tooltip content={a.additional_info}><Module796 name={t(e.toUpperCase())} type={e} flicker/></module186.Tooltip>;
            }
            return <Module796 name={t(e)} type={e} flicker/>;
        };
        e.showDeploy = function() {
            const e_props = e.props;
            const { match, module, projectStore, trigger } = e_props;
            return e.props.trigger("app.deploy", {
                module,
                namespace: match.params.namespace,
                cluster: match.params.cluster,
                workspace: module26(projectStore, "detail.workspace"),
                routing: e.props.rootStore.routing,
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
            if (t.object.kind === "HelmRelease" && [
                "MODIFIED",
                "DELETED",
                "ADDED"
            ].includes(t.type)) {
                e.handleFetch();
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "getTableProps",
            value: function() {
                const tableProps = this.props.tableProps;
                const actions = this.canCreate ? [
                    {
                        key: "deploy",
                        type: "control",
                        text: t("CREATE"),
                        onClick: this.showDeploy
                    }
                ] : [];
                return {
                    tableActions: {
                        ...tableProps.tableActions,
                        actions,
                        onCreate: null
                    },
                    emptyProps: {
                        title: t("NO_TEMPLATE_BASED_APP_FOUND"),
                        desc: t("TEMPLATE_BASED_APP_EMPTY_DESC")
                    },
                    searchType: "keyword"
                };
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps, match } = props;
                return <ListPage {...this.props} onMessage={this.handleWatch}><Module1240 {...bannerProps} match={match} type={this.type}/><Module797 {...tableProps} {...this.getTableProps()} itemActions={this.itemActions} columns={this.getColumns()}/></ListPage>;
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
                return globals.app.hasKSModule("openpitrix") && globals.app.hasPermission({
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
                const props = this.props;
                const { trigger, name } = props;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT"),
                        action: "edit",
                        onClick: function(e) {
                            return trigger("openpitrix.app.edit", {
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
    return r;
})(Component)) || o;
export default D;
