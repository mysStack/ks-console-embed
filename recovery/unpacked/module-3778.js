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
import module3779 from "./module-3779.js";
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
    schedule_attempts_count: "scheduler_schedule_attempts",
    schedule_attempt_rate: "scheduler_schedule_attempt_rate",
    scheduling_latency_average: "scheduler_e2e_scheduling_latency",
    scheduling_latency_quantile: "scheduler_e2e_scheduling_latency_quantile"
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
        a.getMonitoringCfgs = function() {
            return [
                {
                    type: "area",
                    title: "SCHEDULE_ATTEMPTS",
                    unit: "",
                    legend: [
                        "SUCCESS",
                        "ERROR",
                        "FAILURE"
                    ],
                    data: [
                        a.getSpecificData("schedule_attempts_count", "result", "scheduled"),
                        a.getSpecificData("schedule_attempts_count", "result", "error"),
                        a.getSpecificData("schedule_attempts_count", "result", "unschedulable")
                    ],
                    areaColors: [
                        "blue",
                        "red",
                        "yellow"
                    ]
                },
                {
                    type: "area",
                    title: "SCHEDULING_RATE",
                    unit: t("TIMES_PER_SECOND"),
                    legend: [
                        "SUCCESS",
                        "ERROR",
                        "FAILURE"
                    ],
                    data: [
                        a.getSpecificData("schedule_attempt_rate", "result", "scheduled"),
                        a.getSpecificData("schedule_attempt_rate", "result", "error"),
                        a.getSpecificData("schedule_attempt_rate", "result", "unschedulable")
                    ],
                    areaColors: [
                        "blue",
                        "red",
                        "yellow"
                    ]
                },
                {
                    type: "grade",
                    title: "SCHEDULING_LATENCY",
                    unit: "ms",
                    legend: [
                        "99th",
                        "90th",
                        "50th",
                        "AVERAGE"
                    ],
                    data: [
                        a.getSpecificData("scheduling_latency_quantile", "quantile", "0.99"),
                        a.getSpecificData("scheduling_latency_quantile", "quantile", "0.9"),
                        a.getSpecificData("scheduling_latency_quantile", "quantile", "0.5"),
                        module26(a.metrics, `${S.scheduling_latency_average}.data.result[0]`)
                    ]
                }
            ];
        };
        a.monitorStore = new module988({
            module: "scheduler",
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
                return <div key={e.title} className={module3779.box}>{n}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const monitorStore = this.monitorStore;
                const { isLoading, isRefreshing } = monitorStore;
                const o = this.getMonitoringCfgs();
                return <Controller title={t("SCHEDULER_MONITORING")} step="2m" times={50} onFetch={this.fetchData} loading={isLoading} refreshing={isRefreshing} isEmpty={module63(this.metrics)}><div className={module3779.content}>{o.map((t)=>_this.renderChart(t))}</div></Controller>;
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
