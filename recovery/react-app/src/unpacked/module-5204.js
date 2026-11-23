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
import module3 from "unpacked/module-3.js";
import { inject, observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import { hideGPUByLicense } from "utils/index";
import module5205 from "unpacked/module-5205.js";
import Module887 from "components/Tables/Base/Pagination";
import Module5206 from "unpacked/module-5206.js";
import module5208 from "unpacked/module-5208.js";
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
const b = inject("rootStore")(o = observer(o = ((Component_1)=>{
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
            t.store.download("node.usage.rank.json");
        };
        t.store = new module5205({
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
            key: "renderToolbar",
            value: function() {
                return <div className={module3(module5208.toolbar, module5208.pane__toolbar, module5208.pane)}><div className={module5208.toolbar_filter}><module186.Select value={this.store.sort_metric} onChange={this.store.changeSortMetric} options={this.options}/></div><div className={module5208.toolbar_buttons}><module186.Button onClick={this.download}>{t("EXPORT")}</module186.Button></div></div>;
            }
        },
        {
            key: "renderPagination",
            value: function() {
                const store = this.store;
                const { page, total, limit } = store;
                return <div className={module3(module5208.pane, module5208.pane__pagination)}><Module887 page={page} total={total} limit={limit} onChange={this.store.changePagination}/></div>;
            }
        },
        {
            key: "renderList",
            value: function() {
                return <module186.Loading spinning={this.store.isLoading}><div><Module5206 store={this.store} prefix="/v2/edgewize/clusters" isEdgeWize cluster={this.cluster}/>{this.renderPagination()}</div></module186.Loading>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module5208.wrapper}>{this.renderToolbar()}{this.renderList()}</div>;
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
export default b;
