import "./module-15.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module3 from "./module-3.js";
import module1207 from "./module-1207.js";
import Module887 from "./module-887.js";
import module186 from "./module-186.js";
import Module1796 from "./module-1796.js";
import { hideGPUByLicense } from "./module-52.js";
import module3782 from "./module-3782.js";
let o;
const E = [
    "node_cpu_utilisation",
    "node_load1",
    "node_memory_utilisation",
    "node_gpu_utilization",
    "node_gpu_memory_utilization",
    "node_disk_size_utilisation",
    "node_disk_inode_utilisation",
    "node_pod_utilisation"
];
const O = inject("rootStore")(o = observer(o = ((Component_1)=>{
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
    function n(e) {
        let t;
        module36(this, n);
        t = r.call(this, e);
        t.download = function() {
            t.store.download("node.usage.rank.json");
        };
        t.store = new module1207({
            cluster: t.cluster,
            sort_metric_options: hideGPUByLicense(E, t.cluster),
            sort_metric: E[0]
        });
        return t;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.store.fetchAll();
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module3782.wrapper}><h3 className={module3(module3782.pane, module3782.title)}>{t("RESOURCE_USAGE_RANKING")}</h3>{this.renderToolbar()}{this.renderList()}</div>;
            }
        },
        {
            key: "renderToolbar",
            value: function() {
                const _this = this;
                return <div className={module3(module3782.toolbar, module3782.pane__toolbar, module3782.pane)}><div className={module3782.toolbar_filter}><module186.Select value={this.store.sort_metric} onChange={this.store.changeSortMetric} options={this.options}/><span className={module3782.sort_button}><module186.Icon name={this.store.sort_type === "desc" ? "sort-descending" : "sort-ascending"} type="coloured" size="small" onClick={function() {
                    return _this.store.changeSortType();
                }}/></span></div><div className={module3782.toolbar_buttons}><module186.Button onClick={this.download}>{t("EXPORT")}</module186.Button></div></div>;
            }
        },
        {
            key: "renderList",
            value: function() {
                return <module186.Loading spinning={this.store.isLoading}><div><Module1796 store={this.store} cluster={this.cluster}/>{this.renderPagination()}</div></module186.Loading>;
            }
        },
        {
            key: "renderPagination",
            value: function() {
                const store = this.store;
                const { page, total, limit } = store;
                return <div className={module3(module3782.pane, module3782.pane__pagination)}><Module887 page={page} total={total} limit={limit} onChange={this.store.changePagination}/></div>;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "options",
            get: function() {
                return this.store.sort_metric_options.map((e)=>({
                        value: e,
                        label: t(`SORT_BY_${e.toUpperCase()}`)
                    }));
            }
        }
    ]);
    return n;
})(Component)) || o) || o;
export default O;
