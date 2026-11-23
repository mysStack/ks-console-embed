import "./module-15.js";
import "./module-29.js";
import "./module-18.js";
import "./module-16.js";
import "./module-27.js";
import "./module-190.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-315.js";
import module96 from "./module-96.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module26 from "./module-26.js";
import { Component } from "./module-553.js";
import module837 from "./module-837.js";
import module186 from "./module-186.js";
import { getMetricData } from "./module-475.js";
import { GRAY_RELEASE_CATEGORIES } from "./module-72.js";
import Module4714 from "./module-4714.js";
import module1448 from "./module-1448.js";
function E(e) {
    let t;
    const a = Number(e);
    if (isNaN(a) || (t = a, Number(t) === t && t % 1 == 0)) {
        return a;
    }
    return a.toFixed(2);
}
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
        t.handleClick = function() {
            const t_props = t.props;
            const e_data = t_props.data;
            t_props.onClick(e_data);
        };
        t.state = {
            newMetrics: {},
            oldMetrics: {},
            newHealth: {},
            oldHealth: {}
        };
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.getData();
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                this.unmount = true;
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (!module837(this.props.data, e.data)) {
                    this.getData(this.props);
                }
            }
        },
        {
            key: "getData",
            value: function(e) {
                const _this = this;
                const data = (e || this.props).data;
                this.store.fetchMetrics(data).then((e)=>{
                    const a = module96(e, 2);
                    const newMetrics = a[0];
                    const oldMetrics = a[1];
                    if (!_this.unmount) {
                        _this.setState({
                            newMetrics,
                            oldMetrics
                        });
                    }
                });
                this.store.fetchHealth(data).then((e)=>{
                    const a = module96(e, 2);
                    const newHealth = a[0];
                    const oldHealth = a[1];
                    if (!_this.unmount) {
                        _this.setState({
                            newHealth,
                            oldHealth
                        });
                    }
                });
            }
        },
        {
            key: "render",
            value: function() {
                const data = this.props.data;
                const state = this.state;
                const { newHealth, oldHealth } = state;
                const c = GRAY_RELEASE_CATEGORIES.find((t)=>t.type === data.type) || {};
                const s = data.protocol === "tcp" ? this.tcpMetrics : this.metrics;
                return <div className={module1448.item} onClick={this.handleClick}><div className={module1448.left}><div className={module1448.icon}><img src={module26(data, 'annotations["app.kubernetes.io/icon"]', "/assets/default-app.svg")} alt=""/><div className={module1448.iconExtra}><module186.Icon name={c.icon} size={24} type="light"/></div></div><div className={module1448.title}><div className="h5">{data.name}</div><p><span>{t("APP")}</span>: {module26(data, 'labels["app.kubernetes.io/name"]')}</p><p><span>{t("RELEASE_MODE")}</span>: {t(`${c.title}_LOW`)}</p><p><span>{t("SERVICE")}</span>: {data.hosts}</p></div></div><div className={module1448.right}><div className={module1448.versions}><p><strong>{t("VERSIONS")}</strong></p><p className={module1448.tag}>{data.newVersion} <span>({t("REPLICA_COUNT_LOW")}: {module26(newHealth, "workloadStatus.available") || module26(newHealth, "workloadStatus.availableReplicas")}/{module26(newHealth, "workloadStatus.replicas") || module26(newHealth, "workloadStatus.desiredReplicas")})</span></p><p className={module1448.tag}>{data.oldVersion} <span>({t("REPLICA_COUNT_LOW")}: {module26(oldHealth, "workloadStatus.available") || module26(oldHealth, "workloadStatus.availableReplicas")}/{module26(oldHealth, "workloadStatus.replicas") || module26(oldHealth, "workloadStatus.desiredReplicas")})</span></p></div>{s.map((e)=><Module4714 key={e.type} {...e}/>)}</div></div>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.store;
            }
        },
        {
            key: "metrics",
            get: function() {
                const data = this.props.data;
                if (!data) {
                    return [];
                }
                const state = this.state;
                const { newMetrics, oldMetrics } = state;
                const o = [
                    getMetricData(module26(newMetrics, "request_count[0].datapoints", []), 0),
                    getMetricData(module26(oldMetrics, "request_count[0].datapoints", []), 0)
                ];
                const c = [
                    getMetricData(module26(newMetrics, "request_error_count[0].datapoints", []), 0),
                    getMetricData(module26(oldMetrics, "request_error_count[0].datapoints", []), 0)
                ];
                const s = [
                    o[0] > 0 ? Number((100 * (o[0] - c[0]) / o[0]).toFixed(2)) : NaN,
                    o[1] > 0 ? Number((100 * (o[1] - c[1]) / o[1]).toFixed(2)) : NaN
                ];
                const l = [
                    getMetricData(module26(newMetrics, "request_duration_millis[0].datapoints", []), NaN),
                    getMetricData(module26(oldMetrics, "request_duration_millis[0].datapoints", []), NaN)
                ];
                return [
                    {
                        type: "traffic",
                        name: t("TRAFFIC"),
                        legendData: [
                            data.newVersion,
                            data.oldVersion
                        ],
                        data: o.map(E),
                        unit: "RPS",
                        icon: "changing-over",
                        tip: t("TRAFFIC_IN_LAST_FIVE_MINUTES")
                    },
                    {
                        type: "request_success_rate",
                        name: t("SUCCESSFUL_REQUEST_RATE"),
                        legendData: [
                            data.newVersion,
                            data.oldVersion
                        ],
                        data: s.map(E),
                        icon: "check",
                        unit: "%"
                    },
                    {
                        type: "request_duration",
                        name: t("REQUEST_LATENCY"),
                        legendData: [
                            data.newVersion,
                            data.oldVersion
                        ],
                        data: l.map(E),
                        icon: "timed-task",
                        unit: "ms"
                    }
                ];
            }
        },
        {
            key: "tcpMetrics",
            get: function() {
                const data = this.props.data;
                if (!data) {
                    return [];
                }
                const state = this.state;
                const { newMetrics, oldMetrics } = state;
                const o = [
                    getMetricData(module26(newMetrics, "tcp_received[0].datapoints", []), 0),
                    getMetricData(module26(oldMetrics, "tcp_received[0].datapoints", []), 0)
                ];
                const c = [
                    getMetricData(module26(newMetrics, "tcp_sent[0].datapoints", []), 0),
                    getMetricData(module26(oldMetrics, "tcp_sent[0].datapoints", []), 0)
                ];
                return [
                    {
                        type: "traffic-in",
                        name: t("TCP_INBOUND_TRAFFIC"),
                        legendData: [
                            data.newVersion,
                            data.oldVersion
                        ],
                        data: o.map(E),
                        unit: "B/s",
                        icon: "next"
                    },
                    {
                        type: "traffic-out",
                        name: t("TCP_OUTBOUND_TRAFFIC"),
                        legendData: [
                            data.newVersion,
                            data.oldVersion
                        ],
                        data: c.map(E),
                        unit: "B/s",
                        icon: "previous"
                    }
                ];
            }
        }
    ]);
    return r;
})(Component);
export default b;
