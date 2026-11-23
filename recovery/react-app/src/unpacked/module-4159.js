import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
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
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module63 from "unpacked/module-63.js";
import module26 from "unpacked/module-26.js";
import { Controller } from "components/Cards/Monitoring/index";
import { getAreaChartOps, getZeroValues } from "utils/monitoring";
import module884 from "unpacked/module-884.js";
import module186 from "unpacked/module-186.js";
import { SimpleArea } from "components/Charts/index";
import module4160 from "unpacked/module-4160.js";
let n;
const R = {
    namespace_count: "cluster_namespace_count"
};
const T = inject("rootStore")(n = observer(n = ((Component_1)=>{
    module55(a, Component_1);
    var t = ((e)=>{
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
    })(a);
    function a(e) {
        let r;
        module36(this, a);
        r = t.call(this, e);
        r.fetchData = function(e = {}) {
            r.monitorStore.fetchMetrics({
                metrics: Object.values(R),
                step: "60m",
                times: 100,
                ...e
            });
        };
        r.monitorStore = new module884;
        r.fetchData();
        return r;
    }
    module37(a, [
        {
            key: "renderChart",
            value: function() {
                const t = getAreaChartOps({
                    title: "PROJECT_COUNT",
                    unit: "",
                    legend: [
                        "PROJECT_COUNT"
                    ],
                    data: module26(this.metrics, `${R.namespace_count}.data.result`) ?? [
                        {
                            values: getZeroValues()
                        }
                    ]
                });
                return <SimpleArea width="100%" bgColor="transparent" {...t}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const monitorStore = this.monitorStore;
                const { isLoading, isRefreshing } = monitorStore;
                const isEmpty = module63(this.metrics);
                return <module186.Loading spinning={isLoading}><div className={module4160.card}><Controller step="1h" times={24} onFetch={this.fetchData} loading={isLoading} refreshing={isRefreshing} isEmpty={isEmpty}>{this.renderChart()}</Controller></div></module186.Loading>;
            }
        },
        {
            key: "metrics",
            get: function() {
                return this.monitorStore.data;
            }
        }
    ]);
    return a;
})(Component)) || n) || n;
export default T;
