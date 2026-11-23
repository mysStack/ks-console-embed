import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-41.js";
import "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module63 from "unpacked/module-63.js";
import module26 from "unpacked/module-26.js";
import { ICON_TYPES } from "utils/constants";
import { getAreaChartOps } from "utils/monitoring";
import module988 from "unpacked/module-988.js";
import { SimpleArea } from "components/Charts/index";
import { StatusTabs } from "components/Cards/Monitoring/index";
import component from "pages/clusters/components/Cards/Monitoring/ServiceComponent/Tab";
let i;
const N = {
    request_latencies_total: "apiserver_request_latencies",
    request_latencies_apis: "apiserver_request_by_verb_latencies",
    request_rate: "apiserver_request_rate",
    schedule_attempts_count: "scheduler_schedule_attempts",
    schedule_attempt_rate: "scheduler_schedule_attempt_rate"
};
const T = inject("rootStore")(i = observer(i = ((Component_1)=>{
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
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.fetchData = async function e() {
            let t;
            let a;
            const r = arguments;
            t = r.length > 0 && r[0] !== undefined ? r[0] : {};
            a = {
                step: "5m",
                times: 100,
                ...t
            };
            await n.apiStore.fetchMetrics({
                metrics: [
                    N.request_latencies_total,
                    N.request_latencies_apis,
                    N.request_rate
                ],
                ...a
            });
            await n.schedulerStore.fetchMetrics({
                metrics: [
                    N.schedule_attempts_count,
                    N.schedule_attempt_rate
                ],
                ...a
            });
        };
        n.getSpecificData = function(e, t, a) {
            return (module26(n.metrics, `${N[e]}.data.result`) || []).find((e)=>module26(e, `metric.${t}`) === a) || {};
        };
        n.getVerbData = function(e) {
            return n.getSpecificData("request_latencies_apis", "verb", e);
        };
        n.getTabOptions = function() {
            return [
                {
                    icon: ICON_TYPES.apiserver,
                    name: "API_SERVER",
                    title: "REQUEST_LATENCY_TCAP"
                },
                {
                    icon: ICON_TYPES.apiserver,
                    name: "API_SERVER",
                    title: "REQUEST_RATE"
                },
                {
                    icon: ICON_TYPES.scheduler,
                    name: "SCHEDULER",
                    title: "SCHEDULE_ATTEMPTS_TCAP"
                },
                {
                    icon: ICON_TYPES.scheduler,
                    name: "SCHEDULER",
                    title: "SCHEDULING_RATE_TCAP"
                }
            ].map((e)=>({
                    props: e,
                    component
                }));
        };
        n.getContentOptions = function() {
            const n_metrics = n.metrics;
            return [
                {
                    type: "area",
                    title: "REQUEST_LATENCY",
                    unit: "ms",
                    legend: [
                        "REST_GET",
                        "REST_POST",
                        "REST_PATCH",
                        "REST_DELETE",
                        "REST_PUT",
                        "TOTAL_AVERAGE"
                    ],
                    data: [
                        n.getVerbData("GET"),
                        n.getVerbData("POST"),
                        n.getVerbData("PATCH"),
                        n.getVerbData("DELETE"),
                        n.getVerbData("PUT"),
                        module26(n_metrics, `${N.request_latencies_total}.data.result[0]`)
                    ]
                },
                {
                    type: "area",
                    title: "REQUEST_PER_SECOND",
                    unit: t("TIMES_PER_SECOND"),
                    legend: [
                        "REQUEST"
                    ],
                    data: module26(n_metrics, `${N.request_rate}.data.result`)
                },
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
                        n.getSpecificData("schedule_attempts_count", "result", "scheduled"),
                        n.getSpecificData("schedule_attempts_count", "result", "error"),
                        n.getSpecificData("schedule_attempts_count", "result", "unschedulable")
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
                        n.getSpecificData("schedule_attempt_rate", "result", "scheduled"),
                        n.getSpecificData("schedule_attempt_rate", "result", "error"),
                        n.getSpecificData("schedule_attempt_rate", "result", "unschedulable")
                    ],
                    areaColors: [
                        "blue",
                        "red",
                        "yellow"
                    ]
                }
            ].map((e)=>({
                    props: e,
                    render: n.renderChart
                }));
        };
        n.apiStore = new module988({
            module: "apiserver",
            cluster: e.cluster
        });
        n.schedulerStore = new module988({
            module: "scheduler",
            cluster: e.cluster
        });
        return n;
    }
    module37(r, [
        {
            key: "renderChart",
            value: function(e) {
                const t = {
                    key: e.title,
                    width: "100%",
                    height: "100%"
                };
                const a = getAreaChartOps(e);
                if (module63(a.data)) {
                    return null;
                }
                e.type;
                return <SimpleArea {...t} {...a}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const schedulerStore = this.schedulerStore;
                const { isLoading, isRefreshing } = schedulerStore;
                return <StatusTabs title={t("SERVICE_COMPONENT_MONITORING")} tabOptions={this.getTabOptions()} contentOptions={this.getContentOptions()} loading={isLoading} refreshing={isRefreshing} onFetch={this.fetchData}/>;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "metrics",
            get: function() {
                const data = this.apiStore.data;
                const data_1 = this.schedulerStore.data;
                return {
                    ...data,
                    ...data_1
                };
            }
        }
    ]);
    return r;
})(Component)) || i) || i;
export default T;
