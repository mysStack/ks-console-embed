import "./module-15.js";
import "./module-18.js";
import "./module-190.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-109.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module26 from "./module-26.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module837 from "./module-837.js";
import { getAreaChartOps } from "./module-795.js";
import { getMetricData, getSuccessCount } from "./module-475.js";
import { SimpleArea } from "./module-799.js";
import Module1915 from "./module-1915.js";
import Module4763 from "./module-4763.js";
import module1452 from "./module-1452.js";
const S = ((Component_1)=>{
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
    })(n);
    function n(e) {
        let t;
        module36(this, n);
        t = r.call(this, e);
        t.handleWorkloadChange = function(workload) {
            t.setState({
                workload
            }, function() {
                return t.getData();
            });
        };
        t.state = {
            workload: module26(e.detail, "workloads[0].data.workload"),
            metrics: {},
            outMetrics: {}
        };
        t.getData();
        return t;
    }
    module37(n, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                const _this = this;
                if (!module837(e.detail, this.props.detail)) {
                    this.setState({
                        workload: module26(this.props.detail, "workloads[0].data.workload")
                    }, function() {
                        _this.getData();
                    });
                }
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                this.interval = setInterval(()=>{
                    _this.getData();
                }, 10000);
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.interval) {
                    clearInterval(this.interval);
                }
            }
        },
        {
            key: "getData",
            value: async function() {
                let t;
                let a;
                const _this = this;
                t = this.state.workload;
                a = this.props.store;
                if (t) {
                    this.store.fetchWorkloadMetrics({
                        name: t,
                        namespace: a.detail.namespace,
                        cluster: a.detail.cluster
                    }, {
                        duration: 1800
                    }).then((metrics)=>{
                        _this.setState({
                            metrics
                        });
                    });
                    this.store.fetchWorkloadMetrics({
                        name: t,
                        namespace: a.detail.namespace,
                        cluster: a.detail.cluster
                    }, {
                        duration: 1800,
                        direction: "outbound",
                        reporter: "destination"
                    }).then((outMetrics)=>{
                        _this.setState({
                            outMetrics
                        });
                    });
                }
            }
        },
        {
            key: "renderWorkloadSelect",
            value: function() {
                return <Module4763 className={module1452.workloads} value={this.state.workload} options={this.workloads} onChange={this.handleWorkloadChange}/>;
            }
        },
        {
            key: "render",
            value: function() {
                if (this.props.protocol === "tcp") {
                    return <><div className={module1452.title}>{t("TCP_INBOUND_TRAFFIC")} {this.renderWorkloadSelect()}</div><SimpleArea {...this.tcpInMetrics} height={150}/><div className={module1452.title}>{t("TCP_OUTBOUND_TRAFFIC")} {this.renderWorkloadSelect()}</div><SimpleArea {...this.tcpOutMetrics} height={150}/></>;
                }
                return <><div className={module1452.title}>{t("HTTP_INBOUND_TRAFFIC")} {this.renderWorkloadSelect()}</div><Module1915 metrics={this.trafficInMetrics}/><div className="margin-b8"/><SimpleArea {...this.requestInMetrics} height={150}/><div className={module1452.title}>{t("HTTP_OUTBOUND_TRAFFIC")} {this.renderWorkloadSelect()}</div><Module1915 metrics={this.trafficOutMetrics}/><div className="margin-b8"/><SimpleArea {...this.requestOutMetrics} height={150}/></>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.store;
            }
        },
        {
            key: "workloads",
            get: function() {
                return module26(this.props.detail, "workloads", []).map((e)=>({
                        label: module26(e, "data.workload", ""),
                        value: module26(e, "data.workload", "")
                    }));
            }
        },
        {
            key: "requestInMetrics",
            get: function() {
                if (!this.props.detail) {
                    return [];
                }
                const metrics = this.state.metrics;
                const t = module26(metrics, "request_count[0].datapoints", []);
                const a = module26(metrics, "request_error_count[0].datapoints", []);
                const r = t.map((e, t)=>getSuccessCount(e, a[t]));
                return getAreaChartOps({
                    title: "TRAFFIC",
                    legend: [
                        "SUCCESSFUL",
                        "ALL"
                    ],
                    areaColors: [
                        "#329dce",
                        "#d8dee5"
                    ],
                    data: [
                        {
                            values: r
                        },
                        {
                            values: t
                        }
                    ],
                    unit: "RPS"
                });
            }
        },
        {
            key: "requestOutMetrics",
            get: function() {
                if (!this.props.detail) {
                    return [];
                }
                const outMetrics = this.state.outMetrics;
                const t = module26(outMetrics, "request_count[0].datapoints", []);
                const a = module26(outMetrics, "request_error_count[0].datapoints", []);
                const r = t.map((e, t)=>getSuccessCount(e, a[t]));
                return getAreaChartOps({
                    title: "TRAFFIC",
                    legend: [
                        "SUCCESSFUL",
                        "ALL"
                    ],
                    areaColors: [
                        "#329dce",
                        "#d8dee5"
                    ],
                    data: [
                        {
                            values: r
                        },
                        {
                            values: t
                        }
                    ],
                    unit: "RPS"
                });
            }
        },
        {
            key: "tcpInMetrics",
            get: function() {
                if (!this.props.detail) {
                    return [];
                }
                const metrics = this.state.metrics;
                const t = module26(metrics, "tcp_received[0].datapoints", []);
                const a = module26(metrics, "tcp_sent[0].datapoints", []);
                if (t.length === 0 && a.length === 0) {
                    return {};
                }
                return getAreaChartOps({
                    title: "BANDWIDTH",
                    legend: [
                        "SENT",
                        "RECEIVED"
                    ],
                    data: [
                        {
                            values: a
                        },
                        {
                            values: t
                        }
                    ],
                    unit: "B/s"
                });
            }
        },
        {
            key: "tcpOutMetrics",
            get: function() {
                if (!this.props.detail) {
                    return {};
                }
                const outMetrics = this.state.outMetrics;
                const t = module26(outMetrics, "metrics.tcp_received.matrix[0].values", []);
                const a = module26(outMetrics, "tcp_sent[0].datapoints", []);
                if (t.length === 0 && a.length === 0) {
                    return {};
                }
                return getAreaChartOps({
                    title: "BANDWIDTH",
                    legend: [
                        "SENT",
                        "RECEIVED"
                    ],
                    data: [
                        {
                            values: a
                        },
                        {
                            values: t
                        }
                    ],
                    unit: "B/s"
                });
            }
        },
        {
            key: "trafficInMetrics",
            get: function() {
                if (!this.props.detail) {
                    return [];
                }
                const metrics = this.state.metrics;
                const t = getMetricData(module26(metrics, "request_count[0].datapoints", []), NaN);
                const a = getMetricData(module26(metrics, "request_error_count[0].datapoints", []), 0);
                const r = t > 0 ? 100 * (t - a) / t : NaN;
                const n = getMetricData(module26(metrics, "request_duration_millis[0].datapoints", []), NaN);
                return [
                    {
                        title: "TRAFFIC",
                        data: t.toFixed(2),
                        unit: "RPS",
                        icon: "changing-over"
                    },
                    {
                        title: "SUCCESS_RATE",
                        desc: "SUCCESS_RATE_SCAP",
                        data: r.toFixed(2),
                        icon: "check",
                        unit: "%"
                    },
                    {
                        title: "DURATION",
                        data: n.toFixed(2),
                        icon: "timed-task",
                        unit: "ms"
                    }
                ];
            }
        },
        {
            key: "trafficOutMetrics",
            get: function() {
                if (!this.props.detail) {
                    return [];
                }
                const outMetrics = this.state.outMetrics;
                const t = getMetricData(module26(outMetrics, "request_count[0].datapoints", []), NaN);
                const a = getMetricData(module26(outMetrics, "request_error_count[0].datapoints", []), 0);
                const r = t > 0 ? 100 * (t - a) / t : NaN;
                const n = getMetricData(module26(outMetrics, "request_duration_millis[0].datapoints", []), NaN);
                return [
                    {
                        title: "TRAFFIC",
                        data: t.toFixed(2),
                        unit: "RPS",
                        icon: "changing-over"
                    },
                    {
                        title: "SUCCESS_RATE",
                        desc: "SUCCESS_RATE_SCAP",
                        data: r.toFixed(2),
                        icon: "check",
                        unit: "%"
                    },
                    {
                        title: "DURATION",
                        data: n.toFixed(2),
                        icon: "timed-task",
                        unit: "ms"
                    }
                ];
            }
        }
    ]);
    return n;
})(Component);
export default S;
S.propTypes = {
    detail: module1.object,
    store: module1.object
};
