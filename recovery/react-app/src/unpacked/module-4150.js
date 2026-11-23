import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
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
import module1208 from "unpacked/module-1208.js";
import Module887 from "components/Tables/Base/Pagination";
import module186 from "unpacked/module-186.js";
import Module1796 from "unpacked/module-1796.js";
import { hideGPUByLicense } from "utils/index";
import module4151 from "unpacked/module-4151.js";
let u;
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
const b = inject("rootStore")(u = observer(u = ((Component_1)=>{
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
            t.store.download("node.usage.rank.json");
        };
        t.store = new module1208({
            cluster: t.cluster,
            sort_metric_options: hideGPUByLicense(E, t.cluster),
            sort_metric: E[0]
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
                return <div className={module4151.wrapper}><h3 className={module3(module4151.pane, module4151.title)}>{t("RESOURCE_USAGE_RANKING")}</h3>{this.renderToolbar()}{this.renderList()}</div>;
            }
        },
        {
            key: "renderToolbar",
            value: function() {
                const _this = this;
                return <div className={module3(module4151.toolbar, module4151.pane__toolbar, module4151.pane)}><div className={module4151.toolbar_filter}><module186.Select value={this.store.sort_metric} onChange={this.store.changeSortMetric} options={this.options}/><span className={module4151.sort_button}><module186.Icon name={this.store.sort_type === "desc" ? "sort-descending" : "sort-ascending"} type="coloured" size="small" onClick={function() {
                    return _this.store.changeSortType();
                }}/></span></div><div className={module4151.toolbar_buttons}><module186.Button onClick={this.download}>{t("EXPORT")}</module186.Button></div></div>;
            }
        },
        {
            key: "renderList",
            value: function() {
                return <module186.Loading spinning={this.store.isLoading}><div><Module1796 store={this.store} cluster={this.cluster} prefix="/whizard-telemetry"/>{this.renderPagination()}</div></module186.Loading>;
            }
        },
        {
            key: "renderPagination",
            value: function() {
                const store = this.store;
                const { page, total, limit } = store;
                return <div className={module3(module4151.pane, module4151.pane__pagination)}><Module887 page={page} total={total} limit={limit} onChange={this.store.changePagination}/></div>;
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
    return r;
})(Component)) || u) || u;
export default b;
