import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-87.js";
import "unpacked/module-27.js";
import "unpacked/module-190.js";
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
import "unpacked/module-41.js";
import module31 from "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import module791 from "components/Base/Text";
import module26 from "unpacked/module-26.js";
import { observer } from "unpacked/module-239.js";
import * as module553 from "unpacked/module-553.js";
import module988 from "unpacked/module-988.js";
import { getDomTitle } from "utils/index";
import { getValueByUnit } from "utils/monitoring";
import module3692 from "unpacked/module-3692.js";
let c;
const T = {
    request_latencies_total: "apiserver_request_latencies",
    request_rate: "apiserver_request_rate",
    schedule_attempts_count: "scheduler_schedule_attempts"
};
const D = observer(c = ((e)=>{
    module55(n, e);
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
        t.fetchData = async function e() {
            let r;
            let n;
            const a = arguments;
            r = a.length > 0 && a[0] !== undefined ? a[0] : {};
            n = {
                last: true,
                ...r
            };
            await t.apiStore.fetchMetrics({
                metrics: [
                    T.request_latencies_total,
                    T.request_rate
                ],
                ...n
            });
            await t.schedulerStore.fetchMetrics({
                metrics: [
                    T.schedule_attempts_count
                ],
                ...n
            });
        };
        t.getSpecificData = function(e) {
            return (module26(t.metrics, `${T[e]}.data.result`) || []).reduce((acc, item)=>({
                    ...acc,
                    ...module31({}, module26(item, "metric.result"), module26(item, "value[1]", 0))
                }), {});
        };
        const e_cluster = e.cluster;
        t.apiStore = new module988({
            module: "apiserver",
            cluster: e_cluster
        });
        t.schedulerStore = new module988({
            module: "scheduler",
            cluster: e_cluster
        });
        return t;
    }
    module37(n, [
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
                const value = Number(module26(metrics, `${T.request_rate}.data.result[0].value[1]`, 0)).toFixed(3);
                const n = getValueByUnit(module26(metrics, `${T.request_latencies_total}.data.result[0].value[1]`), "ms");
                const a = this.getSpecificData("schedule_attempts_count");
                return module553.default.createElement("div", {
                    className: module3692.k8sStatus
                }, module553.default.createElement("div", {
                    className: module3692.title
                }, module553.default.createElement("p", null, t("KUBERNETES_STATUS"))), module553.default.createElement(module186.Loading, {
                    spinning: this.schedulerStore.isLoading
                }, module553.default.createElement("div", {
                    className: module3692.container
                }, module553.default.createElement("div", {
                    className: module3692.level
                }, module553.default.createElement(module791, {
                    title: getDomTitle(t("VALUE_REQUESTS_SECOND", {
                        value
                    })),
                    description: t("API_REQUESTS_PER_SECOND")
                }), module553.default.createElement(module791, {
                    title: getDomTitle(`${n} ms`),
                    description: t("API_REQUEST_LATENCY")
                }), module553.default.createElement(module791, {
                    title: getDomTitle(a.scheduled),
                    description: a.scheduled === 1 ? t("SCHEDULING_OPERATION") : t("SCHEDULING_OPERATIONS")
                }), module553.default.createElement(module791, {
                    title: getDomTitle(a.unschedulable),
                    description: a.unschedulable === 1 ? t("SCHEDULING_FAILURE") : t("SCHEDULING_FAILURES")
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
    return n;
})(module553.Component)) || c;
export default D;
