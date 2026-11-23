import "./module-15.js";
import "./module-29.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-109.js";
import "./module-45.js";
import "./module-42.js";
import "./module-436.js";
import "./module-57.js";
import "./module-315.js";
import module31 from "./module-31.js";
import module96 from "./module-96.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module837 from "./module-837.js";
import module26 from "./module-26.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import { getSuccessRate } from "./module-475.js";
import Module4707 from "./module-4707.js";
import Module4708 from "./module-4708.js";
import module1447 from "./module-1447.js";
const O = ((Component_1)=>{
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
        t.handleTypeChange = function(e) {
            const type = e.currentTarget.dataset.type;
            t.setState({
                selectedType: type
            });
        };
        t.state = {
            newMetrics: {},
            oldMetrics: {},
            selectedType: "traffic-in"
        };
        t.getData();
        return t;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (!module837(this.props.detail, e.detail)) {
                    this.getData(this.props);
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
            value: function(e) {
                const _this = this;
                const detail = (e || this.props).detail;
                if (detail && detail.namespace) {
                    this.store.fetchMetrics(detail, {
                        duration: 1800
                    }).then((e)=>{
                        const a = module96(e, 2);
                        const newMetrics = a[0];
                        const oldMetrics = a[1];
                        _this.setState({
                            newMetrics,
                            oldMetrics
                        });
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const selectedType = this.state.selectedType;
                const a = this.props.detail.protocol === "tcp" ? this.tcpMetrics : this.metrics;
                const r = a.find((e)=>e.type === selectedType);
                return <module186.Columns><module186.Column className="is-narrow"><ul className={module1447.leftPane}>{a.map((a)=><li key={a.type} className={module3(module31({}, module1447.selected, a.type === selectedType))} data-type={a.type} onClick={_this.handleTypeChange}><Module4707 {...a} whiteMode={a.type === selectedType}/></li>)}</ul></module186.Column><module186.Column>{r && <Module4708 {...r}/>}</module186.Column></module186.Columns>;
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
                const detail = this.props.detail;
                if (!detail) {
                    return [];
                }
                const state = this.state;
                const { newMetrics, oldMetrics } = state;
                const o = [
                    module26(newMetrics, "request_count[0].datapoints", []),
                    module26(oldMetrics, "request_count[0].datapoints", [])
                ];
                const c = [
                    module26(newMetrics, "request_error_count[0].datapoints", []),
                    module26(oldMetrics, "request_error_count[0].datapoints", [])
                ];
                const l = [
                    o[0].map((e, t)=>getSuccessRate(e, c[0][t])),
                    o[1].map((e, t)=>getSuccessRate(e, c[1][t]))
                ];
                const i = [
                    module26(newMetrics, "request_duration_millis[0].datapoints", []).map((e)=>{
                        const t = module96(e, 2);
                        const a = t[0];
                        const r = t[1];
                        return [
                            a,
                            parseFloat(r) / 1000
                        ];
                    }),
                    module26(oldMetrics, "request_duration_millis[0].datapoints", []).map((e)=>{
                        const t = module96(e, 2);
                        const a = t[0];
                        const r = t[1];
                        return [
                            a,
                            parseFloat(r) / 1000
                        ];
                    })
                ];
                return [
                    {
                        type: "traffic-in",
                        title: t("TRAFFIC"),
                        legendData: [
                            detail.newVersion,
                            detail.oldVersion
                        ],
                        data: o,
                        unit: "RPS",
                        tip: t("TRAFFIC_IN_LAST_FIVE_MINUTES")
                    },
                    {
                        type: "request_success_rate",
                        title: t("SUCCESSFUL_REQUEST_RATE"),
                        legendData: [
                            detail.newVersion,
                            detail.oldVersion
                        ],
                        data: l,
                        unit: "%"
                    },
                    {
                        type: "request_duration",
                        title: t("REQUEST_LATENCY"),
                        legendData: [
                            detail.newVersion,
                            detail.oldVersion
                        ],
                        data: i,
                        unit: "ms"
                    }
                ];
            }
        },
        {
            key: "tcpMetrics",
            get: function() {
                const detail = this.props.detail;
                if (!detail) {
                    return [];
                }
                const state = this.state;
                const { newMetrics, oldMetrics } = state;
                const o = [
                    module26(newMetrics, "tcp_received[0].datapoints", []),
                    module26(oldMetrics, "tcp_received[0].datapoints", [])
                ];
                const c = [
                    module26(newMetrics, "tcp_sent[0].datapoints", []),
                    module26(oldMetrics, "tcp_sent[0].datapoints", [])
                ];
                return [
                    {
                        type: "traffic-in",
                        title: t("TCP_INBOUND_TRAFFIC"),
                        legendData: [
                            detail.newVersion,
                            detail.oldVersion
                        ],
                        data: o,
                        unit: "B/s",
                        icon: "next"
                    },
                    {
                        type: "traffic-out",
                        title: t("TCP_OUTBOUND_TRAFFIC"),
                        legendData: [
                            detail.newVersion,
                            detail.oldVersion
                        ],
                        data: c,
                        unit: "B/s",
                        icon: "previous"
                    }
                ];
            }
        }
    ]);
    return r;
})(Component);
export default O;
O.propTypes = {
    detail: module1.object,
    store: module1.object
};
