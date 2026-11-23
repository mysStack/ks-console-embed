import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-16.js";
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
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import "./module-44.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import Module789 from "./module-789.js";
import Module790 from "./module-790.js";
import Module791 from "./module-791.js";
import Module793 from "./module-793.js";
import Module874 from "./module-874.js";
import module26 from "./module-26.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import { Component } from "./module-553.js";
import module445 from "./module-445.js";
import { getLocalTime, showNameAndAlias } from "./module-52.js";
import { trigger } from "./module-792.js";
import module3802 from "./module-3802.js";
let u;
const R = inject("rootStore", "clusterStore")(u = observer(u = trigger(u = ((Component_1)=>{
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
    function n(...a) {
        let e;
        module36(this, n);
        e = r.call(this, ...a);
        e.workspaceStore = new module445;
        e.getData = function(t) {
            e.workspaceStore.fetchList({
                ...e.props.match.params,
                ...t
            });
        };
        e.afterEdit = async function t() {
            let r;
            r = e.props.match.params.cluster;
            await e.cluster.fetchDetail({
                name: r
            });
            e.getData();
        };
        e.editVisibility = function() {
            return e.trigger("cluster.visibility.edit", {
                store: e.cluster,
                cluster: e.cluster.detail,
                success: e.afterEdit
            });
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.getData();
            }
        },
        {
            key: "getColumns",
            value: function() {
                return [
                    {
                        title: t("WORKSPACE"),
                        dataIndex: "name",
                        render: function(e, t) {
                            return <Module789 icon="enterprise" iconSize={40} title={showNameAndAlias(t.name, "workspace")} desc={t.description || "-"} noLink/>;
                        }
                    },
                    {
                        title: t("ADMINISTRATOR"),
                        dataIndex: "manager"
                    },
                    {
                        title: t("AUTHORIZATION_TIME_TCAP"),
                        dataIndex: "createTime",
                        width: "20%",
                        render: function(e) {
                            return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                        }
                    }
                ];
            }
        },
        {
            key: "renderVisibility",
            value: function() {
                const list = this.workspaceStore.list;
                const { data, total, page, limit, filters, keyword, isLoading } = list;
                const pagination = {
                    total,
                    page,
                    limit
                };
                const emptyProps = {
                    name: "Workspace",
                    module: "workspaces",
                    desc: t("CLUSTER_VISIBILITY_DESC")
                };
                return <div className={module3802.tableWrapper}><Module874 className="table-1-10" data={module14.toJS(data)} filters={filters} keyword={keyword} pagination={pagination} isLoading={isLoading} onFetch={this.getData} emptyProps={emptyProps} columns={this.getColumns()} columnSearch={this.columnSearch}/></div>;
            }
        },
        {
            key: "render",
            value: function() {
                return <><Module793 icon="cluster" title={t("CLUSTER_VISIBILITY")} description={t("CLUSTER_VISIBILITY_DESC")} tips={this.tips}/><Module790><div className={module3802.header}><Module791 icon={this.isClusterPublicVisible ? "eye" : "eye-closed"} title={this.isClusterPublicVisible ? t("VISIBILITY_PUBLIC") : t("VISIBILITY_PARTIAL")} description={t("CLUSTER_VISIBILITY_SCAP")}/>{globals.app.isMultiCluster && this.enabledActions.includes("manage") && <module186.Button onClick={this.editVisibility}>{t("EDIT_VISIBILITY")}</module186.Button>}</div>{this.renderVisibility()}</Module790></>;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.clusterStore;
            }
        },
        {
            key: "isClusterPublicVisible",
            get: function() {
                return this.cluster.detail.visibility === "public";
            }
        },
        {
            key: "enabledActions",
            get: function() {
                return globals.app.getActions({
                    module: "cluster-settings",
                    cluster: this.props.match.params.cluster
                });
            }
        },
        {
            key: "tips",
            get: function() {
                return [
                    {
                        title: t("CLUSTER_VISIBILITY_Q1"),
                        description: t("CLUSTER_VISIBILITY_A1")
                    }
                ];
            }
        },
        {
            key: "clusterRules",
            get: function() {
                return module26(globals, "user.globalRules.clusters", []);
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
    return n;
})(Component)) || u) || u) || u;
export default R;
