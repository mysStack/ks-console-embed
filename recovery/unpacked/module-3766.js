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
import "./module-17.js";
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
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import { ICON_TYPES } from "./module-72.js";
import { getAreaChartOps } from "./module-795.js";
import module988 from "./module-988.js";
import { SimpleArea } from "./module-799.js";
import { StatusTabs } from "./module-824.js";
import { ETCDNodes } from "./module-1131.js";
import component from "./module-3767.js";
let l;
const k = {
    proposals_committed_rate: "etcd_server_proposals_committed_rate",
    proposals_applied_rate: "etcd_server_proposals_applied_rate",
    proposals_failed_rate: "etcd_server_proposals_failed_rate",
    proposals_pending_count: "etcd_server_proposals_pending_count",
    db_size: "etcd_mvcc_db_size",
    client_received_bytes: "etcd_network_client_grpc_received_bytes",
    client_sent_bytes: "etcd_network_client_grpc_sent_bytes"
};
const N = inject("rootStore")(l = observer(l = ((Component_1)=>{
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
        n.fetchData = function(e = {}) {
            n.monitorStore.fetchMetrics({
                metrics: Object.values(k),
                step: "5m",
                times: 100,
                ...e
            });
        };
        n.getSpecificData = function(e, t, a) {
            return (module26(n.metrics, `${k[e]}.data.result`) || []).find((e)=>module26(e, `metric.${t}`) === a) || {};
        };
        n.getVerbData = function(e) {
            return n.getSpecificData("request_latencies_apis", "verb", e);
        };
        n.getTabOptions = function() {
            return [
                {
                    icon: ICON_TYPES.etcd,
                    name: "etcd",
                    title: "ETCD_STATUS"
                },
                {
                    icon: ICON_TYPES.etcd,
                    name: "etcd",
                    title: "ETCD_PROPOSAL"
                },
                {
                    icon: ICON_TYPES.etcd,
                    name: "etcd",
                    title: "ETCD_DB_SIZE"
                },
                {
                    icon: ICON_TYPES.etcd,
                    name: "etcd",
                    title: "ETCD_CLIENT_TRAFFIC"
                }
            ].map((props)=>({
                    props,
                    component
                }));
        };
        n.getContentOptions = function() {
            const n_metrics = n.metrics;
            return [
                {
                    props: {
                        cluster: n.props.cluster
                    },
                    component: ETCDNodes
                },
                {
                    props: {
                        type: "area",
                        title: "RAFT_PROPOSAL",
                        unit: t("TIMES_PER_SECOND"),
                        legend: [
                            "PROPOSAL_COMMITTED",
                            "PROPOSAL_APPLIED",
                            "PROPOSAL_FAILED",
                            "PROPOSAL_PENDING"
                        ],
                        data: [
                            module26(n_metrics, `${k.proposals_committed_rate}.data.result[0]`),
                            module26(n_metrics, `${k.proposals_applied_rate}.data.result[0]`),
                            module26(n_metrics, `${k.proposals_failed_rate}.data.result[0]`),
                            module26(n_metrics, `${k.proposals_pending_count}.data.result[0]`)
                        ],
                        areaColors: [
                            "blue",
                            "green",
                            "red",
                            "yellow"
                        ]
                    },
                    render: n.renderChart
                },
                {
                    props: {
                        type: "area",
                        title: "DB_SIZE",
                        unitType: "memory",
                        legend: [
                            "DB_SIZE"
                        ],
                        data: module26(n_metrics, `${k.db_size}.data.result`)
                    },
                    render: n.renderChart
                },
                {
                    props: {
                        type: "area",
                        title: "CLIENT_TRAFFIC",
                        unitType: "traffic",
                        legend: [
                            "RECEIVED",
                            "SENT"
                        ],
                        data: [
                            module26(n_metrics, `${k.client_received_bytes}.data.result[0]`),
                            module26(n_metrics, `${k.client_sent_bytes}.data.result[0]`)
                        ]
                    },
                    render: n.renderChart
                }
            ];
        };
        n.monitorStore = new module988({
            module: "etcd",
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
                const monitorStore = this.monitorStore;
                const { isLoading, isRefreshing } = monitorStore;
                return <StatusTabs title={t("ETCD_MONITORING")} tabOptions={this.getTabOptions()} contentOptions={this.getContentOptions()} loading={isLoading} refreshing={isRefreshing} onFetch={this.fetchData}/>;
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
                return this.monitorStore.data;
            }
        }
    ]);
    return r;
})(Component)) || l) || l;
export default N;
