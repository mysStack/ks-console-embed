import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-316.js";
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
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module3 from "./module-3.js";
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import { getAreaChartOps } from "./module-795.js";
import module1132 from "./module-1132.js";
import module186 from "./module-186.js";
import Module802 from "./module-802.js";
import { SimpleArea } from "./module-799.js";
import module3791 from "./module-3791.js";
let o;
const T = {
    namespace_count: "cluster_namespace_count"
};
const D = inject("rootStore")(o = observer(o = ((Component_1)=>{
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
        t.fetchData = function(e = {}) {
            t.monitorStore.fetchMetrics({
                metrics: Object.values(T),
                step: "60m",
                times: 100,
                ...e
            });
        };
        t.monitorStore = new module1132({
            cluster: e.match.params.cluster
        });
        t.fetchData();
        return t;
    }
    module37(n, [
        {
            key: "renderChart",
            value: function() {
                const e = getAreaChartOps({
                    title: "PROJECT_COUNT",
                    unit: "",
                    legend: [
                        "PROJECT_COUNT"
                    ],
                    data: module26(this.metrics, `${T.namespace_count}.data.result`)
                });
                if (module63(e.data)) {
                    return null;
                }
                return <SimpleArea width="100%" bgColor="transparent" {...e}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const monitorStore = this.monitorStore;
                const { isLoading, isRefreshing } = monitorStore;
                const a = module63(this.metrics);
                return <module186.Loading spinning={isLoading}><Module802 className={module3(module3791.card, module31({}, module3791.empty, a))} refreshing={isRefreshing} empty={t("NO_MONITORING_DATA")}>{this.renderChart()}</Module802></module186.Loading>;
            }
        },
        {
            key: "metrics",
            get: function() {
                return this.monitorStore.data;
            }
        }
    ]);
    return n;
})(Component)) || o) || o;
export default D;
