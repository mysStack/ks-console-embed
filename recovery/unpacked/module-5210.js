import "./module-15.js";
import "./module-11.js";
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
import module5211 from "./module-5211.js";
import { hideGPUByLicense } from "./module-52.js";
import Module5212 from "./module-5212.js";
import module5213 from "./module-5213.js";
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
const b = observer(o = ((Component_1)=>{
    module55(n, Component_1);
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
            const n = module51(e);
            if (t) {
                const r = module51(this).constructor;
                a = Reflect.construct(n, arguments, r);
            } else {
                a = n.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(n);
    function n(e) {
        let t;
        module36(this, n);
        t = a.call(this, e);
        t.download = function() {
            t.store.download("project.usage.rank.json");
        };
        t.store = new module5211({
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
            key: "renderToolbar",
            value: function() {
                return <div className={module3(module5213.toolbar, module5213.pane__toolbar, module5213.pane)}><div className={module5213.toolbar_filter}><module186.Select value={this.store.sort_metric} onChange={this.store.changeSortMetric} options={this.options}/></div><div className={module5213.toolbar_buttons}><module186.Button onClick={this.download}>{t("EXPORT")}</module186.Button></div></div>;
            }
        },
        {
            key: "renderList",
            value: function() {
                return <module186.Loading spinning={this.store.isLoading}><div><Module5212 cluster={this.props.cluster} prefix="/v2/edgewize/clusters" store={this.store}/>{this.renderPagination()}</div></module186.Loading>;
            }
        },
        {
            key: "renderPagination",
            value: function() {
                const store = this.store;
                const { page, total, limit } = store;
                return <div className={module3(module5213.pane, module5213.pane__pagination)}><Module887 page={page} total={total} limit={limit} onChange={this.store.changePagination}/></div>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module5213.wrapper}>{this.renderToolbar()}{this.renderList()}</div>;
            }
        },
        {
            key: "options",
            get: function() {
                return this.store.sort_metric_options.filter((e)=>e !== "namespace_pvc_bytes_used").map((e)=>({
                        value: e,
                        label: t(`SORT_BY_${e.toUpperCase()}`)
                    }));
            }
        }
    ]);
    return n;
})(Component)) || o;
export default b;
