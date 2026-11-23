import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-62.js";
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
import Module796 from "./module-796.js";
import Module1025 from "./module-1025.js";
import { ListPage, withProjectList } from "./module-794.js";
import Module797 from "./module-797.js";
import { getDisplayName, getLocalTime } from "./module-52.js";
import module961 from "./module-961.js";
import Module1240 from "./module-1240.js";
let o;
const R = withProjectList({
    store: new module961,
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
        e.type = "composing";
        e.getColumns = function() {
            const getSortOrder = e.props.getSortOrder;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    search: true,
                    render: function(t, a) {
                        return <Module1025 title={getDisplayName(a)} avatar={a.icon || "/assets/default-app.svg"} to={`${e.props.match.url}/${t}`} desc={module26(a, 'annotations["kubesphere.io/description"]', "-")}/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    isHideable: true,
                    width: "20%",
                    render: function(e) {
                        return <Module796 name={t(e.toUpperCase())} type={e} flicker/>;
                    }
                },
                {
                    title: t("VERSION"),
                    dataIndex: "version",
                    isHideable: true,
                    width: "20%"
                },
                {
                    title: t("CREATION_TIME_TCAP"),
                    dataIndex: "createTime",
                    sorter: true,
                    sortOrder: getSortOrder("createTime"),
                    isHideable: true,
                    width: 180,
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        e.showCreate = function() {
            const e_props = e.props;
            const { match, module, projectStore, getData } = e_props;
            return e.props.trigger("crd.app.create", {
                module,
                ...match.params,
                projectDetail: projectStore.detail,
                success: getData
            });
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
                        key: "create",
                        type: "control",
                        text: t("CREATE"),
                        onClick: this.showCreate
                    }
                ] : [];
                return {
                    tableActions: {
                        ...tableProps.tableActions,
                        actions,
                        onCreate: null
                    },
                    emptyProps: {
                        title: t("NO_COMPOSED_APP_FOUND"),
                        desc: t("COMPOSED_APP_EMPTY_DESC")
                    },
                    searchType: "name"
                };
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { tableProps, bannerProps, match } = props;
                return <ListPage {...this.props}><Module1240 {...bannerProps} title={t("COMPOSED_APP_PL")} match={match} type={this.type}/><Module797 {...tableProps} {...this.getTableProps()} columns={this.getColumns()}/></ListPage>;
            }
        },
        {
            key: "canCreate",
            get: function() {
                const params = this.props.match.params;
                const { workspace, cluster, namespace } = params;
                const n = globals.app.getActions({
                    workspace,
                    cluster,
                    project: namespace,
                    module: "deployments"
                }).includes("create");
                const o = globals.app.getActions({
                    workspace,
                    cluster,
                    project: namespace,
                    module: "services"
                }).includes("create");
                return n && o;
            }
        }
    ]);
    return r;
})(Component)) || o;
export default R;
