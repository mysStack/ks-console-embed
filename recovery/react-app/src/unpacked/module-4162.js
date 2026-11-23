import "unpacked/module-15.js";
import "unpacked/module-18.js";
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
import { observer } from "unpacked/module-239.js";
import module3 from "unpacked/module-3.js";
import Module887 from "components/Tables/Base/Pagination";
import module186 from "unpacked/module-186.js";
import module1210 from "unpacked/module-1210.js";
import { hideGPUByLicense } from "utils/index";
import Module4163 from "unpacked/module-4163.js";
import module4164 from "unpacked/module-4164.js";
let u;
const E = [
    "namespace_cpu_usage",
    "namespace_memory_usage_wo_cache",
    "namespace_gpu_usage",
    "namespace_gpu_memory_usage",
    "namespace_pod_count",
    "namespace_net_bytes_received",
    "namespace_net_bytes_transmitted"
];
const b = observer(u = ((Component_1)=>{
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
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.download = function() {
            t.store.download("project.usage.rank.json");
        };
        t.store = new module1210({
            limit: 10,
            sort_type: "desc",
            cluster: e.cluster,
            sort_metric_options: hideGPUByLicense(E, e.cluster)
        });
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.store.fetchAll();
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module4164.wrapper}>{this.renderToolbar()}{this.renderList()}</div>;
            }
        },
        {
            key: "renderToolbar",
            value: function() {
                const _this = this;
                return <div className={module3(module4164.toolbar, module4164.pane__toolbar, module4164.pane)}><div className={module4164.toolbar_filter}><module186.Select value={this.store.sort_metric} onChange={this.store.changeSortMetric} options={this.options}/><span className={module4164.sort_button}><module186.Icon name={this.store.sort_type === "desc" ? "sort-descending" : "sort-ascending"} type="coloured" size="small" onClick={function() {
                    return _this.store.changeSortType();
                }}/></span></div><div className={module4164.toolbar_buttons}><module186.Button onClick={this.download}>{t("EXPORT")}</module186.Button></div></div>;
            }
        },
        {
            key: "renderList",
            value: function() {
                return <module186.Loading spinning={this.store.isLoading}><div><Module4163 cluster={this.props.cluster} store={this.store} prefix="/whizard-telemetry"/>{this.renderPagination()}</div></module186.Loading>;
            }
        },
        {
            key: "renderPagination",
            value: function() {
                const store = this.store;
                const { page, total, limit } = store;
                return <div className={module3(module4164.pane, module4164.pane__pagination)}><Module887 page={page} total={total} limit={limit} onChange={this.store.changePagination}/></div>;
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
    return r;
})(Component)) || u;
export default b;
