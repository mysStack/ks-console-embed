import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-191.js";
import "./module-42.js";
import "./module-160.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import "./module-31.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module189 from "./module-189.js";
import module186 from "./module-186.js";
import { MultiArea } from "./module-799.js";
import { getAreaChartOps } from "./module-795.js";
import module949 from "./module-949.js";
import { getMinuteValue, getTimeRange } from "./module-847.js";
import module1235 from "./module-1235.js";
const R = ((e)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.state = {
            metrics: [],
            step: "30s",
            times: 60,
            isLoading: true
        };
        e.fetchMetrics = async (a)=>{
            let r;
            let step;
            let times;
            let o;
            let expr;
            let cluster;
            let namespace;
            let d;
            let start;
            let end;
            let metrics;
            r = e.state;
            step = r.step;
            times = r.times;
            e.setState({
                isLoading: true
            });
            o = e.props.detail || {};
            expr = o.query;
            cluster = o.cluster;
            namespace = o.namespace;
            d = getTimeRange({
                step,
                times
            });
            start = d.start;
            end = d.end;
            metrics = await e.props.store.fetchMetric({
                expr,
                end,
                start,
                step,
                cluster,
                namespace,
                ...a
            });
            e.setState({
                metrics,
                times,
                step,
                isLoading: false
            });
        };
        e.handleChange = function({ step, times }) {
            e.setState({
                step: getMinuteValue(step),
                times
            }, function() {
                e.fetchMetrics();
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchMetrics();
            }
        },
        {
            key: "render",
            value: function() {
                const metrics = this.state.metrics;
                const state = this.state;
                const { times, step, isLoading } = state;
                const l = getAreaChartOps({
                    height: 500,
                    title: t("ALERT_MONITORING"),
                    data: metrics,
                    legend: metrics.map((e)=>{
                        if (e.metric) {
                            return JSON.stringify(module189(e.metric, "__name__"));
                        }
                        return "";
                    })
                });
                return module553.default.createElement("div", {
                    className: module1235.monitoring
                }, module553.default.createElement("div", {
                    className: module1235.bar
                }, module553.default.createElement(module949, {
                    step,
                    times,
                    onChange: this.handleChange
                }), module553.default.createElement(module186.Button, {
                    type: "control",
                    icon: "refresh",
                    iconType: "light",
                    onClick: this.fetchMetrics
                })), module553.default.createElement(module186.Loading, {
                    spinning: isLoading
                }, module553.default.createElement(MultiArea, l)));
            }
        }
    ]);
    return r;
})(module553.Component);
export default R;
