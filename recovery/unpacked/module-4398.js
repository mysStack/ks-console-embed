import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
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
import "./module-57.js";
import "./module-315.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import { getDisplayName, getLocalTime } from "./module-52.js";
import Module1138 from "./module-1138.js";
import Module802 from "./module-802.js";
import module323 from "./module-323.js";
import module4399 from "./module-4399.js";
let o;
let u;
const w = inject("detailStore", "workspaceStore")(o = observer((u = ((Component_1)=>{
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
        e.devopsStore = new module323;
        e.getColumns = function() {
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    width: "33%",
                    render: function(e, t) {
                        return getDisplayName(t);
                    }
                },
                {
                    title: t("CREATION_TIME_TCAP"),
                    dataIndex: "createTime",
                    width: "33%",
                    render: function(e) {
                        return <p>{getLocalTime(e).format("YYYY-MM-DD HH:mm:ss")}</p>;
                    }
                }
            ];
        };
        e.getData = function(t = {}) {
            e.devopsStore.fetchListByUser({
                workspace: e.workspace,
                cluster: e.workspaceStore.cluster,
                username: e.props.detailStore.detail.name,
                ...t
            });
        };
        e.handleClusterChange = function(t) {
            e.workspaceStore.selectCluster(t);
            e.getData({
                filters: {
                    cluster: t
                }
            });
        };
        return e;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                this.workspaceStore.fetchClusters({
                    workspace: this.workspace,
                    limit: -1
                }).then(()=>{
                    _this.getData();
                });
            }
        },
        {
            key: "render",
            value: function() {
                const e = module14.toJS(this.devopsStore.list);
                const { data, isLoading, page, limit, total, filters } = e;
                const pagination = {
                    page,
                    limit,
                    total
                };
                return <Module802 title={t("DEVOPS_PROJECTS")}><Module1138 className={module4399.table} data={data} columns={this.getColumns()} isLoading={isLoading} onFetch={this.getData} {...this.clusterProps} pagination={pagination} name="DEVOPS_PROJECT" hideSearch hideCustom filters={filters}/></Module802>;
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
            key: "workspaceStore",
            get: function() {
                return this.props.workspaceStore;
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
        }
    ]);
    return a;
})(Component), module49(u.prototype, "clusters", [
    module14.computed
], Object.getOwnPropertyDescriptor(u.prototype, "clusters"), u.prototype), o = u)) || o) || o;
export default w;
