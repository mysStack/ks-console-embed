import "unpacked/module-15.js";
import "unpacked/module-11.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module3 from "unpacked/module-3.js";
import module26 from "unpacked/module-26.js";
import module1129 from "unpacked/module-1129.js";
import module186 from "unpacked/module-186.js";
import Module833 from "unpacked/module-833.js";
import Module1801 from "unpacked/module-1801.js";
import Module997 from "unpacked/module-997.js";
import { showNameAndAlias } from "utils/index";
import module4453 from "unpacked/module-4453.js";
let o;
const b = inject("rootStore", "workspaceStore")(o = observer(o = ((Component_1)=>{
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
    function a(e) {
        let n;
        module36(this, a);
        n = r.call(this, e);
        n.valueRenderer = function(e) {
            return t("CLUSTER_VALUE", {
                value: showNameAndAlias(e.cluster)
            });
        };
        n.optionRenderer = function(e) {
            return <div><div>{showNameAndAlias(e.cluster)}</div>{!e.cluster.isReady && <div><Module997 data={e.cluster} noTip/></div>}</div>;
        };
        n.export = function() {
            n.store.download("project.usage.rank.json");
        };
        n.fetchMetrics = function() {
            if (n.workspaceStore.cluster) {
                n.store.cluster = n.workspaceStore.cluster;
                n.store.fetchAll();
            }
        };
        n.handleClusterChange = function(e) {
            n.workspaceStore.selectCluster(e);
            n.fetchMetrics();
        };
        n.store = new module1129({
            workspace: n.workspace,
            limit: 10,
            sort_type: "desc"
        });
        n.workspaceStore = n.props.workspaceStore;
        return n;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchMetrics();
            }
        },
        {
            key: "render",
            value: function() {
                if (this.workspaceStore.clusters.data.length > 0) {
                    return <div className={module4453.wrapper}>{this.renderToolbar()}{this.renderList()}</div>;
                }
                return <Module833 icon="cluster" title={t("NO_CLUSTER_AVAILABLE")} desc={t("WORKSPACE_NO_CLUSTER_TIP")}/>;
            }
        },
        {
            key: "renderToolbar",
            value: function() {
                const _this = this;
                return <div className={module3(module4453.toolbar, module4453.pane__toolbar, module4453.pane)}><div className={module4453.toolbar_filter}><module186.Select options={this.clusters} value={this.workspaceStore.cluster} onChange={this.handleClusterChange} valueRenderer={this.valueRenderer} optionRenderer={this.optionRenderer} showTip/><module186.Select value={this.store.sort_metric} onChange={this.store.changeSortMetric} options={this.options}/>{!this.isEdge && <span className={module4453.sort_button}><module186.Icon name={this.store.sort_type === "desc" ? "sort-descending" : "sort-ascending"} type="coloured" size="small" onClick={function() {
                    return _this.store.changeSortType();
                }}/></span>}</div><div className={module4453.toolbar_buttons}><module186.Button onClick={this.export}>{t("EXPORT")}</module186.Button></div></div>;
            }
        },
        {
            key: "renderList",
            value: function() {
                return <module186.Loading spinning={this.store.isLoading}><div><Module1801 store={this.store} cluster={this.workspaceStore.cluster} workspace={this.workspace}/>{this.renderPagination()}</div></module186.Loading>;
            }
        },
        {
            key: "renderPagination",
            value: function() {
                const store = this.store;
                const { page, total_page } = store;
                const limit = this.store.limit;
                return <div className={module3(module4453.pane, module4453.pane__pagination)}><module186.Level><module186.LevelLeft/><module186.LevelRight><module186.Pagination page={page} total={total_page} limit={limit} onChange={this.store.changePagination}/></module186.LevelRight></module186.Level></div>;
            }
        },
        {
            key: "isEdge",
            get: function() {
                return this.workspaceStore.isEdge;
            }
        },
        {
            key: "workspace",
            get: function() {
                return module26(this.props, "match.params.workspace");
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
            key: "options",
            get: function() {
                const _this = this;
                return this.store.sort_metric_options.filter((t)=>!_this.isEdge || t !== "namespace_pvc_bytes_used").map((e)=>({
                        value: e,
                        label: t(`SORT_BY_${e.toUpperCase()}`)
                    }));
            }
        }
    ]);
    return a;
})(Component)) || o) || o;
export default b;
