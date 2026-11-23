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
import module1136 from "./module-1136.js";
import { PercentArea, SimpleArea } from "./module-799.js";
import { Controller } from "./module-824.js";
import module4149 from "./module-4149.js";
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
    schedule_attempts_count: "scheduler_schedule_attempts",
    schedule_attempt_rate: "scheduler_schedule_attempt_rate",
    scheduling_latency_average: "scheduler_e2e_scheduling_latency",
    scheduling_latency_quantile: "scheduler_e2e_scheduling_latency_quantile"
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
        t.getMonitoringCfgs = function() {
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
                        t.getSpecificData("schedule_attempts_count", "result", "scheduled"),
                        t.getSpecificData("schedule_attempts_count", "result", "error"),
                        t.getSpecificData("schedule_attempts_count", "result", "unschedulable")
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
                    unit: "times/s",
                    legend: [
                        "SUCCESS",
                        "ERROR",
                        "FAILURE"
                    ],
                    data: [
                        t.getSpecificData("schedule_attempt_rate", "result", "scheduled"),
                        t.getSpecificData("schedule_attempt_rate", "result", "error"),
                        t.getSpecificData("schedule_attempt_rate", "result", "unschedulable")
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
                        t.getSpecificData("scheduling_latency_quantile", "quantile", "0.99"),
                        t.getSpecificData("scheduling_latency_quantile", "quantile", "0.9"),
                        t.getSpecificData("scheduling_latency_quantile", "quantile", "0.5"),
                        module26(t.metrics, `${O.scheduling_latency_average}.data.result[0]`)
                    ]
                }
            ];
        };
        t.monitorStore = new module1136({
            module: "scheduler",
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
                const a = getAreaChartOps(e);
                if (module63(a.data)) {
                    return null;
                }
                let r = null;
                if (e.type === "grade") {
                    r = <PercentArea {...t} {...a}/>;
                } else {
                    r = <SimpleArea {...t} {...a}/>;
                }
                return <div key={e.title} className={module4149.box}>{r}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const monitorStore = this.monitorStore;
                const { isLoading, isRefreshing } = monitorStore;
                const u = this.getMonitoringCfgs();
                return <Controller title={t("SCHEDULER_MONITORING")} step="2m" times={50} onFetch={this.fetchData} loading={isLoading} refreshing={isRefreshing} isEmpty={module63(this.metrics)}><div className={module4149.content}>{u.map((t)=>_this.renderChart(t))}</div></Controller>;
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
