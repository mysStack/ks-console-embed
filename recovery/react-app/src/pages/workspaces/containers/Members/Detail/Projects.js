import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
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
import module49 from "unpacked/module-49.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import { getDisplayName, getLocalTime } from "utils/index";
import Module1138 from "unpacked/module-1138.js";
import Module802 from "components/Base/Card";
import module439 from "stores/project";
import module4397 from "unpacked/module-4397.js";
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
        e.projectStore = new module439;
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
            e.projectStore.fetchListByUser({
                workspace: e.workspace,
                cluster: e.workspaceStore.cluster,
                username: e.props.detailStore.detail.name,
                ...t
            });
        };
        e.handleClusterChange = function(t) {
            e.workspaceStore.selectCluster(t);
            e.getData();
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
                const e = module14.toJS(this.projectStore.list);
                const { data, page, limit, total, isLoading, filters } = e;
                const pagination = {
                    page,
                    limit,
                    total
                };
                return <Module802 title={t("PROJECTS")}><Module1138 className={module4397.table} data={data} columns={this.getColumns()} isLoading={isLoading || this.workspaceStore.clusters.isLoading} onFetch={this.getData} pagination={pagination} {...this.clusterProps} name="PROJECT" hideSearch hideCustom filters={filters}/></Module802>;
            }
        },
        {
            key: "clusters",
            get: function() {
                return this.workspaceStore.clusters.data.map((cluster)=>({
                        label: cluster.name,
                        value: cluster.name,
                        disabled: !cluster.isReady,
                        cluster
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
