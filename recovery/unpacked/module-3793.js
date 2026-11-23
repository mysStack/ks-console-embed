import "./module-15.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { observer } from "./module-239.js";
import module3 from "./module-3.js";
import Module887 from "./module-887.js";
import module186 from "./module-186.js";
import module1129 from "./module-1129.js";
import { hideGPUByLicense } from "./module-52.js";
import Module1801 from "./module-1801.js";
import module3794 from "./module-3794.js";
let o;
const E = [
    "namespace_cpu_usage",
    "namespace_memory_usage_wo_cache",
    "namespace_gpu_usage",
    "namespace_gpu_memory_usage",
    "namespace_pod_count",
    "namespace_net_bytes_received",
    "namespace_net_bytes_transmitted"
];
const O = observer(o = ((Component_1)=>{
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
            t.store.download("project.usage.rank.json");
        };
        t.store = new module1129({
            limit: 10,
            sort_type: "desc",
            cluster: e.cluster,
            sort_metric_options: hideGPUByLicense(E, e.cluster)
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
                return <div className={module3794.wrapper}>{this.renderToolbar()}{this.renderList()}</div>;
            }
        },
        {
            key: "renderToolbar",
            value: function() {
                const _this = this;
                return <div className={module3(module3794.toolbar, module3794.pane__toolbar, module3794.pane)}><div className={module3794.toolbar_filter}><module186.Select value={this.store.sort_metric} onChange={this.store.changeSortMetric} options={this.options}/><span className={module3794.sort_button}><module186.Icon name={this.store.sort_type === "desc" ? "sort-descending" : "sort-ascending"} type="coloured" size="small" onClick={function() {
                    return _this.store.changeSortType();
                }}/></span></div><div className={module3794.toolbar_buttons}><module186.Button onClick={this.download}>{t("EXPORT")}</module186.Button></div></div>;
            }
        },
        {
            key: "renderList",
            value: function() {
                return <module186.Loading spinning={this.store.isLoading}><div><Module1801 cluster={this.props.cluster} store={this.store}/>{this.renderPagination()}</div></module186.Loading>;
            }
        },
        {
            key: "renderPagination",
            value: function() {
                const store = this.store;
                const { page, total, limit } = store;
                return <div className={module3(module3794.pane, module3794.pane__pagination)}><Module887 page={page} total={total} limit={limit} onChange={this.store.changePagination}/></div>;
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
})(Component)) || o;
export default O;
