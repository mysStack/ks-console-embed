import "./module-12.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-18.js";
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
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import { getAreaChartOps } from "./module-795.js";
import module988 from "./module-988.js";
import { PercentArea, SimpleArea } from "./module-799.js";
import { Controller } from "./module-824.js";
import module3777 from "./module-3777.js";
let o;
function b(e, t) {
    const r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let n = Object.getOwnPropertySymbols(e);
        if (t) {
            n = n.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        r.push.apply(r, n);
    }
    return r;
}
const S = {
    request_latencies_total: "apiserver_request_latencies",
    request_latencies_apis: "apiserver_request_by_verb_latencies",
    request_rate: "apiserver_request_rate"
};
const k = inject("rootStore")(o = observer(o = ((Component_1)=>{
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
        let a;
        module36(this, n);
        a = r.call(this, e);
        a.fetchData = function(e) {
            a.monitorStore.fetchMetrics({
                metrics: Object.values(S),
                ...e
            });
        };
        a.getSpecificData = function(e, t, r) {
            return (module26(a.metrics, `${S[e]}.data.result`) || []).find((e)=>module26(e, `metric.${t}`) === r) || {};
        };
        a.getVerbData = function(e) {
            return a.getSpecificData("request_latencies_apis", "verb", e);
        };
        a.getMonitoringCfgs = function() {
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
                        a.getVerbData("CREATE"),
                        a.getVerbData("DELETE"),
                        a.getVerbData("DELETECOLLECTION"),
                        a.getVerbData("GET"),
                        a.getVerbData("POST"),
                        a.getVerbData("PATCH"),
                        a.getVerbData("PUT"),
                        a.getVerbData("UPDATE"),
                        a.getVerbData("LIST"),
                        module26(a.metrics, `${S.request_latencies_total}.data.result[0]`)
                    ]
                },
                {
                    type: "request",
                    title: "REQUEST_PER_SECOND",
                    unit: t("TIMES_PER_SECOND"),
                    legend: [
                        "REQUEST"
                    ],
                    data: module26(a.metrics, `${S.request_rate}.data.result`)
                }
            ];
        };
        a.monitorStore = new module988({
            module: "apiserver",
            cluster: e.match.params.cluster
        });
        return a;
    }
    module37(n, [
        {
            key: "renderChart",
            value: function(e) {
                const t = {
                    width: "100%",
                    height: 190
                };
                const r = getAreaChartOps(e);
                if (module63(r.data)) {
                    return null;
                }
                let n = null;
                if (e.type === "grade") {
                    n = <PercentArea {...t} {...r}/>;
                } else {
                    n = <SimpleArea {...t} {...r}/>;
                }
                return <div key={e.title} className={module3777.box}>{n}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const monitorStore = this.monitorStore;
                const { isLoading, isRefreshing } = monitorStore;
                const o = this.getMonitoringCfgs();
                return <Controller title={t("API_SERVER_MONITORING")} step="2m" times={50} onFetch={this.fetchData} loading={isLoading} refreshing={isRefreshing} isEmpty={module63(this.metrics)}><div className={module3777.content}>{o.map((t)=>_this.renderChart(t))}</div></Controller>;
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
export default k;
