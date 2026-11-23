import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-190.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-109.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-448.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module26 from "unpacked/module-26.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module837 from "unpacked/module-837.js";
import { getAreaChartOps } from "utils/monitoring";
import { getMetricData, getSuccessCount } from "utils/service";
import { SimpleArea } from "components/Charts/index";
import Module1915 from "unpacked/module-1915.js";
import module1452 from "unpacked/module-1452.js";
const b = ((Component_1)=>{
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
        t.state = {
            metrics: {},
            outMetrics: {}
        };
        t.getData();
        return t;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (!module837(e.detail, this.props.detail)) {
                    this.getData();
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
            value: function() {
                const _this = this;
                const props = this.props;
                const { detail, store } = props;
                const n = this.store.fetchServiceMetrics.bind(this.store);
                if (detail && detail.name) {
                    n({
                        name: detail.name,
                        namespace: store.detail.namespace,
                        cluster: store.detail.cluster
                    }, {
                        duration: 1800
                    }).then((metrics)=>{
                        _this.setState({
                            metrics
                        });
                    });
                    n({
                        name: detail.name,
                        namespace: store.detail.namespace,
                        cluster: store.detail.cluster
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
            key: "render",
            value: function() {
                if (this.props.protocol === "tcp") {
                    return <><div className={module1452.title}>{t("TCP_INBOUND_TRAFFIC")}</div><SimpleArea {...this.tcpInMetrics} height={150}/></>;
                }
                return <><div className={module1452.title}>{t("TRAFFIC_RPS")}</div><Module1915 metrics={this.trafficInMetrics}/><div className="margin-b8"/><SimpleArea {...this.requestInMetrics} height={150}/></>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.store;
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
                const values = t.map((e, t)=>getSuccessCount(e, a[t]));
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
                            values
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
    return r;
})(Component);
export default b;
b.propTypes = {
    detail: module1.object,
    store: module1.object
};
