import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-48.js";
import "./module-16.js";
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
import "./module-57.js";
import "./module-315.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module26 from "./module-26.js";
import module801 from "./module-801.js";
import { Link } from "./module-433.js";
import module186 from "./module-186.js";
import Module796 from "./module-796.js";
import Module1025 from "./module-1025.js";
import { ListPage, withProjectList } from "./module-794.js";
import Module797 from "./module-797.js";
import module244 from "./module-244.js";
import { getLocalTime } from "./module-52.js";
import module1889 from "./module-1889.js";
import Module1240 from "./module-1240.js";
let o;
const D = withProjectList({
    store: new module1889,
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
    function r(...o) {
        let e;
        module36(this, r);
        e = a.call(this, ...o);
        e.type = "others";
        e.getColumns = function() {
            const getSortOrder = e.props.getSortOrder;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    render: function(t, a) {
                        return <Module1025 isApp to={`${e.prefix}/${a.name}`} avatar={module26(a, "app.icon")} iconLetter={t} iconSize={40} title={t} desc={a.description}/>;
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
                    title: t("APP"),
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
                return <module186.Tooltip content={a.additional_info}><Module796 name={t(e)} type={e} flicker/></module186.Tooltip>;
            }
            return <Module796 name={t(e)} type={e} flicker/>;
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
                return {
                    tableActions: {
                        ...this.props.tableProps.tableActions,
                        actions: [],
                        onCreate: null
                    },
                    emptyProps: {
                        desc: t("OTHER_APP_EMPTY_DESC")
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
            key: "itemActions",
            get: function() {
                const props = this.props;
                const { trigger, name } = props;
                return [
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(detail) {
                            return trigger("resource.delete", {
                                type: name,
                                detail
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
