import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-87.js";
import "./module-27.js";
import "./module-190.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import module31 from "./module-31.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import module791 from "./module-791.js";
import module26 from "./module-26.js";
import { observer } from "./module-239.js";
import * as module553 from "./module-553.js";
import module1136 from "./module-1136.js";
import { getDomTitle } from "./module-52.js";
import { getValueByUnit } from "./module-795.js";
import module4087 from "./module-4087.js";
let c;
const C = {
    request_latencies_total: "apiserver_request_latencies",
    request_rate: "apiserver_request_rate",
    schedule_attempts_count: "scheduler_schedule_attempts"
};
const A = observer(c = ((e)=>{
    module55(r, e);
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
        t.fetchData = async function e() {
            let a;
            let r;
            const n = arguments;
            a = n.length > 0 && n[0] !== undefined ? n[0] : {};
            r = {
                last: true,
                ...a
            };
            await t.apiStore.fetchMetrics({
                metrics: [
                    C.request_latencies_total,
                    C.request_rate
                ],
                ...r
            });
            await t.schedulerStore.fetchMetrics({
                metrics: [
                    C.schedule_attempts_count
                ],
                ...r
            });
        };
        t.getSpecificData = function(e) {
            return (module26(t.metrics, `${C[e]}.data.result`) || []).reduce((acc, item)=>({
                    ...acc,
                    ...module31({}, module26(item, "metric.result"), module26(item, "value[1]", 0))
                }), {});
        };
        const e_cluster = e.cluster;
        t.apiStore = new module1136({
            module: "apiserver",
            cluster: e_cluster
        });
        t.schedulerStore = new module1136({
            module: "scheduler",
            cluster: e_cluster
        });
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "render",
            value: function() {
                const metrics = this.metrics;
                const value = Number(module26(metrics, `${C.request_rate}.data.result[0].value[1]`, 0)).toFixed(3);
                const r = getValueByUnit(module26(metrics, `${C.request_latencies_total}.data.result[0].value[1]`, 0), "ms");
                const n = this.getSpecificData("schedule_attempts_count");
                return module553.default.createElement("div", {
                    className: module4087.k8sStatus
                }, module553.default.createElement("div", {
                    className: module4087.title
                }, module553.default.createElement("p", null, t("KUBERNETES_STATUS"))), module553.default.createElement(module186.Loading, {
                    spinning: this.schedulerStore.isLoading
                }, module553.default.createElement("div", {
                    className: module4087.container
                }, module553.default.createElement("div", {
                    className: module4087.level
                }, module553.default.createElement(module791, {
                    title: getDomTitle(t("VALUE_REQUESTS_SECOND", {
                        value
                    })),
                    description: t("API_REQUESTS_PER_SECOND")
                }), module553.default.createElement(module791, {
                    title: getDomTitle(`${r} ms`),
                    description: t("API_REQUEST_LATENCY")
                }), module553.default.createElement(module791, {
                    title: getDomTitle(n.scheduled),
                    description: n.scheduled === 1 ? t("SCHEDULING_OPERATION") : t("SCHEDULING_OPERATIONS")
                }), module553.default.createElement(module791, {
                    title: getDomTitle(n.unschedulable),
                    description: n.unschedulable === 1 ? t("SCHEDULING_FAILURE") : t("SCHEDULING_FAILURES")
                })))));
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
})(module553.Component)) || c;
export default A;
