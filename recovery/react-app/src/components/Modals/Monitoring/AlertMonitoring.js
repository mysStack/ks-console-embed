import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
import "unpacked/module-190.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-109.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-191.js";
import "unpacked/module-42.js";
import "unpacked/module-160.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-436.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-41.js";
import "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import Module788 from "components/Base/Modal";
import module26 from "unpacked/module-26.js";
import module189 from "unpacked/module-189.js";
import module63 from "unpacked/module-63.js";
import { MultiArea } from "components/Charts/index";
import Module949 from "components/Cards/Monitoring/Controller/TimeSelector";
import { getMinuteValue, getTimeRange } from "stores/monitoring/base";
import { RESOURCE_METRICS_CONFIG } from "unpacked/module-924.js";
import { getAreaChartOps, getFormatTime } from "utils/monitoring";
import module2192 from "unpacked/module-2192.js";
const D = ((Component_1)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.state = {
            metrics: [],
            currentMetric: [],
            step: "30s",
            times: 60,
            isLoading: true,
            autoFetch: false
        };
        e.timer = null;
        e.transformValue = function(t) {
            if (e.ruleType === "Custom") {
                return t;
            }
            const e_ruleConfig = e.ruleConfig;
            const { reverser, unit } = e_ruleConfig;
            const l = parseFloat(reverser(Number(t))).toFixed(2);
            if (unit) {
                return `${l}${unit}`;
            }
            return l;
        };
        e.fetchMetrics = async (a)=>{
            let r;
            let n;
            let o;
            let u;
            let step;
            let times;
            let i;
            let start;
            let end;
            let metrics;
            r = e.props;
            n = r.cluster;
            o = r.namespace;
            u = e.state;
            step = u.step;
            times = u.times;
            e.setState({
                isLoading: true
            });
            i = getTimeRange({
                step,
                times
            });
            start = i.start;
            end = i.end;
            metrics = await e.props.store.fetchMetric({
                expr: e.expr,
                end,
                start,
                step,
                cluster: n,
                namespace: o,
                ...a
            });
            e.setState({
                metrics,
                times,
                step,
                isLoading: false,
                timer: null
            });
        };
        e.autoFetch = function() {
            e.timer = setInterval(()=>{
                e.fetchMetrics();
                e.fetchCurrentMetic();
            }, 5000);
        };
        e.handleAutoFetch = function() {
            e.setState(function(e) {
                return {
                    autoFetch: !e.autoFetch
                };
            }, function() {
                e.autoFetch();
            });
        };
        e.stopAutoFetch = function() {
            const autoFetch = e.state.autoFetch;
            clearInterval(e.timer);
            e.timer = null;
            e.setState({
                autoFetch: !autoFetch
            });
        };
        e.fetchCurrentMetic = async function t() {
            let a;
            let r;
            let n;
            let o;
            let currentMetric;
            a = e.props;
            r = a.cluster;
            n = a.namespace;
            o = await e.props.store.fetchMetric({
                expr: e.expr,
                cluster: r,
                namespace: n
            });
            currentMetric = o.map((e)=>{
                const t = module26(e, "value", [
                    "",
                    ""
                ]);
                const a = module26(e, "metric", {});
                return {
                    time: getFormatTime(1000 * t[0], true),
                    value: t[1],
                    metric: JSON.stringify(a)
                };
            });
            e.setState({
                currentMetric
            });
        };
        e.handleChange = function({ step, times }) {
            if (e.timer) {
                clearInterval(e.timer);
                e.timer = null;
            }
            e.setState({
                step: getMinuteValue(step),
                times,
                autoFetch: false
            }, function() {
                e.fetchMetrics();
                e.fetchCurrentMetic();
            });
        };
        e.handleRefresh = function() {
            e.setState({
                autoFetch: false
            }, function() {
                if (e.timer) {
                    clearInterval(e.timer);
                    e.timer = null;
                }
                e.fetchMetrics();
                e.fetchCurrentMetic();
            });
        };
        e.renderOperations = function() {
            const e_state = e.state;
            const { step, times, autoFetch } = e_state;
            return <div className={module2192.opts}><div className={module2192.time}><Module949 step={step} times={times} onChange={e.handleChange}/></div><module186.Button className={module2192.refresh} type="control" icon={autoFetch ? "pause" : "start"} iconType="light" onClick={autoFetch ? e.stopAutoFetch : e.handleAutoFetch}/><module186.Button className={module2192.refresh} type="control" icon="refresh" iconType="light" onClick={e.handleRefresh}/></div>;
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchMetrics();
                this.fetchCurrentMetic();
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.timer) {
                    clearInterval(this.timer);
                }
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { visible, isSubmitting, onCancel } = props;
                const state = this.state;
                const { isLoading, metrics, currentMetric } = state;
                const i = getAreaChartOps({
                    height: 396,
                    title: this.chartTitle,
                    unit: this.chartTitleUnit,
                    tailText: this.tailText,
                    data: metrics,
                    legend: metrics.map((e)=>{
                        if (e.metric) {
                            return JSON.stringify(module189(e.metric, "__name__"));
                        }
                        return "";
                    })
                });
                return <Module788 headerClassName={module2192.header} bodyClassName={module2192.body} visible={visible} isSubmitting={isSubmitting} onCancel={onCancel} imageIcon="/assets/monitor.svg" title={t("VIEW_METRIC_DATA_TCAP")} operations={this.renderOperations()} hideFooter fullScreen><module186.Loading spinning={isLoading}>{metrics.length < 1 ? <div className={module2192.metricEmpty}>{t("NO_MONITOR_METRIC")}</div> : <MultiArea {...i}/>}</module186.Loading><div className={module2192.current}><div className={module2192.main}><div className={module2192.title}><span className={module2192.time}>{t("TIME")}</span><span className={module2192.value}>{t("VALUE")}</span><span className={module2192.metric}>{t("MONITORING_TARGETS")}</span></div><div className={module2192.body}>{currentMetric.map((t, key)=><div key={key} className={module2192.line}><span className={module2192.time}>{t.time}</span><span className={module2192.value}>{_this.transformValue(t.value)}</span><span className={module2192.metric}>{t.metric}</span></div>)}</div></div></div></Module788>;
            }
        },
        {
            key: "resourceType",
            get: function() {
                const rule = this.props.rule;
                return Object.keys(rule.exprBuilder)[0];
            }
        },
        {
            key: "exprBuilder",
            get: function() {
                const rule = this.props.rule;
                return module26(rule, "exprBuilder", {});
            }
        },
        {
            key: "ruleType",
            get: function() {
                if (module63(this.exprBuilder)) {
                    return "Custom";
                }
                return "Template";
            }
        },
        {
            key: "thresholdType",
            get: function() {
                const e = module26(this.exprBuilder, `${[
                    this.resourceType
                ]}.metricThreshold`, {});
                const t = Object.keys(this.exprBuilder)[0];
                const a = Object.keys(e)[0];
                const r = Object.keys(e[a])[0];
                const n = `${a}:${r}`;
                return RESOURCE_METRICS_CONFIG[t][n];
            }
        },
        {
            key: "threshold",
            get: function() {
                if (this.ruleType === "Template") {
                    const e = module26(this.exprBuilder, `${[
                        this.resourceType
                    ]}.metricThreshold`, {});
                    const t = Object.keys(e)[0];
                    return Object.values(e[t])[0];
                }
                return "";
            }
        },
        {
            key: "ruleConfig",
            get: function() {
                return this.thresholdType.ruleConfig.filter((e)=>e.name === "thresholds")[0];
            }
        },
        {
            key: "chartTitleUnit",
            get: function() {
                if (this.ruleType === "Custom") {
                    return null;
                }
                const unit = this.ruleConfig.unit;
                if (unit !== "") {
                    return unit;
                }
                return null;
            }
        },
        {
            key: "chartTitle",
            get: function() {
                if (this.ruleType === "Custom") {
                    return "CUSTOM_RULE";
                }
                return this.thresholdType.tcapLabel;
            }
        },
        {
            key: "tailText",
            get: function() {
                if (this.ruleType === "Custom") {
                    return null;
                }
                return t("THRESHOLD_VALUE", {
                    value: this.threshold
                });
            }
        },
        {
            key: "tableColumns",
            get: function() {
                return [
                    {
                        title: t("TIME"),
                        dataIndex: "time",
                        width: "21.1%",
                        render: function(e) {
                            return <div>{e}</div>;
                        }
                    },
                    {
                        title: t("VALUE"),
                        dataIndex: "value",
                        width: "21.1%",
                        render: function(e) {
                            return <div>{e}</div>;
                        }
                    },
                    {
                        title: t("MONITORING_TARGETS"),
                        dataIndex: "metric",
                        render: function(e) {
                            return <div>{e}</div>;
                        }
                    }
                ];
            }
        },
        {
            key: "expr",
            get: function() {
                const props = this.props;
                const { ruleStatus, expr } = props;
                const r = module26(ruleStatus, "expr", "");
                if (r !== "") {
                    return r;
                }
                return expr;
            }
        }
    ]);
    return r;
})(Component);
export default D;
