import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
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
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import { getAreaChartOps, getZeroValues } from "utils/monitoring";
import module1136 from "unpacked/module-1136.js";
import { PercentArea, SimpleArea } from "components/Charts/index";
import { Controller } from "components/Cards/Monitoring/index";
import module4147 from "unpacked/module-4147.js";
let u;
function S(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, r);
    }
    return a;
}
const O = {
    request_latencies_total: "apiserver_request_latencies",
    request_latencies_apis: "apiserver_request_by_verb_latencies",
    request_rate: "apiserver_request_rate"
};
const R = inject("rootStore")(u = observer(u = ((Component_1)=>{
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
        t.fetchData = function(e) {
            t.monitorStore.fetchMetrics({
                metrics: Object.values(O),
                ...e
            });
        };
        t.getSpecificData = function(e, a, r) {
            return (module26(t.metrics, `${O[e]}.data.result`) || []).find((e)=>module26(e, `metric.${a}`) === r) || {};
        };
        t.getVerbData = function(e) {
            return t.getSpecificData("request_latencies_apis", "verb", e);
        };
        t.getMonitoringCfgs = function() {
            return [
                {
                    type: "io",
                    title: "REQUEST_LATENCY",
                    unit: "ms",
                    legend: [
                        "REST_CREATE",
                        "REST_DELETE",
                        "REST_DELETECOLLECTION",
                        "REST_GET",
                        "REST_POST",
                        "REST_PATCH",
                        "REST_PUT",
                        "REST_UPDATE",
                        "REST_LIST",
                        "TOTAL_AVERAGE"
                    ],
                    data: [
                        t.getVerbData("CREATE"),
                        t.getVerbData("DELETE"),
                        t.getVerbData("DELETECOLLECTION"),
                        t.getVerbData("GET"),
                        t.getVerbData("POST"),
                        t.getVerbData("PATCH"),
                        t.getVerbData("PUT"),
                        t.getVerbData("UPDATE"),
                        t.getVerbData("LIST"),
                        module26(t.metrics, `${O.request_latencies_total}.data.result[0]`)
                    ]
                },
                {
                    type: "request",
                    title: "REQUEST_PER_SECOND",
                    unit: "times/s",
                    legend: [
                        "REQUEST"
                    ],
                    data: module26(t.metrics, `${O.request_rate}.data.result`)
                }
            ];
        };
        t.monitorStore = new module1136({
            module: "apiserver",
            cluster: e.match.params.cluster
        });
        return t;
    }
    module37(r, [
        {
            key: "renderChart",
            value: function(e) {
                const t = {
                    width: "100%",
                    height: 190
                };
                e.data = module63(e.data) ? [
                    {
                        values: getZeroValues()
                    }
                ] : e.data;
                const a = getAreaChartOps(e);
                let r = null;
                if (e.type === "grade") {
                    r = <PercentArea {...t} {...a}/>;
                } else {
                    r = <SimpleArea {...t} {...a}/>;
                }
                return <div key={e.title} className={module4147.box}>{r}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const monitorStore = this.monitorStore;
                const { isLoading, isRefreshing } = monitorStore;
                const u = this.getMonitoringCfgs();
                return <Controller title={t("API_SERVER_MONITORING")} step="2m" times={50} onFetch={this.fetchData} loading={isLoading} refreshing={isRefreshing} isEmpty={module63(this.metrics)}><div className={module4147.content}>{u.map((t)=>_this.renderChart(t))}</div></Controller>;
            }
        },
        {
            key: "metrics",
            get: function() {
                return this.monitorStore.data;
            }
        }
    ]);
    return r;
})(Component)) || u) || u;
export default R;
