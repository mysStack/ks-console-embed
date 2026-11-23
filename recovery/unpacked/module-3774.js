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
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
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
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import { getAreaChartOps } from "./module-795.js";
import module988 from "./module-988.js";
import { PercentArea, SimpleArea } from "./module-799.js";
import { Controller } from "./module-824.js";
import { ETCDNodes } from "./module-1131.js";
import module3775 from "./module-3775.js";
let o;
function S(e, t) {
    const r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let n = Object.getOwnPropertySymbols(e);
        if (t) {
            n = n.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        r.push.apply(r, n);
    }
    return r;
}
const k = {
    proposals_committed_rate: "etcd_server_proposals_committed_rate",
    proposals_applied_rate: "etcd_server_proposals_applied_rate",
    proposals_failed_rate: "etcd_server_proposals_failed_rate",
    proposals_pending_count: "etcd_server_proposals_pending_count",
    db_size: "etcd_mvcc_db_size",
    client_received_bytes: "etcd_network_client_grpc_received_bytes",
    client_sent_bytes: "etcd_network_client_grpc_sent_bytes",
    grpc_received_rate: "etcd_grpc_server_msg_received_rate",
    grpc_sent_rate: "etcd_grpc_server_msg_sent_rate",
    wal_fsync_duration_average: "etcd_disk_wal_fsync_duration",
    wal_fsync_duration_quantile: "etcd_disk_wal_fsync_duration_quantile",
    backend_commit_duration_average: "etcd_disk_backend_commit_duration",
    backend_commit_duration_quantile: "etcd_disk_backend_commit_duration_quantile"
};
const C = inject("rootStore")(o = observer(o = ((Component_1)=>{
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
        let a;
        module36(this, n);
        a = r.call(this, e);
        a.fetchData = function(e) {
            a.monitorStore.fetchMetrics({
                metrics: Object.values(k),
                ...e
            });
        };
        a.getQuantileData = function(e, t) {
            return (module26(a.metrics, `${k[e]}.data.result`) || []).find((e)=>module26(e, "metric.quantile") === t) || {};
        };
        a.getMonitoringCfgs = function() {
            return [
                {
                    type: "size",
                    title: "DB_SIZE",
                    unitType: "memory",
                    legend: [
                        "DB_SIZE"
                    ],
                    data: module26(a.metrics, `${k.db_size}.data.result`)
                },
                {
                    type: "area",
                    title: "CLIENT_TRAFFIC",
                    unitType: "traffic",
                    legend: [
                        "RECEIVED",
                        "SENT"
                    ],
                    data: [
                        module26(a.metrics, `${k.client_received_bytes}.data.result[0]`),
                        module26(a.metrics, `${k.client_sent_bytes}.data.result[0]`)
                    ]
                },
                {
                    type: "area",
                    title: "GRPC_STREAM_MESSAGES",
                    unit: t("TIMES_PER_SECOND"),
                    legend: [
                        "RECEIVED",
                        "SENT"
                    ],
                    data: [
                        module26(a.metrics, `${k.grpc_received_rate}.data.result[0]`),
                        module26(a.metrics, `${k.grpc_sent_rate}.data.result[0]`)
                    ]
                },
                {
                    type: "grade",
                    title: "WAL_FSYNC",
                    unit: "ms",
                    legend: [
                        "99th",
                        "90th",
                        "50th",
                        "AVERAGE"
                    ],
                    data: [
                        a.getQuantileData("wal_fsync_duration_quantile", "0.99"),
                        a.getQuantileData("wal_fsync_duration_quantile", "0.9"),
                        a.getQuantileData("wal_fsync_duration_quantile", "0.5"),
                        module26(a.metrics, `${k.wal_fsync_duration_average}.data.result[0]`)
                    ]
                },
                {
                    type: "grade",
                    title: "DB_FSYNC",
                    unit: "ms",
                    legend: [
                        "99th",
                        "90th",
                        "50th",
                        "AVERAGE"
                    ],
                    data: [
                        a.getQuantileData("backend_commit_duration_quantile", "0.99"),
                        a.getQuantileData("backend_commit_duration_quantile", "0.9"),
                        a.getQuantileData("backend_commit_duration_quantile", "0.5"),
                        module26(a.metrics, `${k.backend_commit_duration_average}.data.result[0]`)
                    ]
                },
                {
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
                        module26(a.metrics, `${k.proposals_committed_rate}.data.result[0]`),
                        module26(a.metrics, `${k.proposals_applied_rate}.data.result[0]`),
                        module26(a.metrics, `${k.proposals_failed_rate}.data.result[0]`),
                        module26(a.metrics, `${k.proposals_pending_count}.data.result[0]`)
                    ],
                    areaColors: [
                        "blue",
                        "green",
                        "red",
                        "yellow"
                    ]
                }
            ];
        };
        a.monitorStore = new module988({
            module: "etcd",
            cluster: e.match.params.cluster
        });
        return a;
    }
    module37(n, [
        {
            key: "renderChart",
            value: function(e) {
                const t = {
                    width: "100%",
                    height: 190
                };
                const r = getAreaChartOps(e);
                if (module63(r.data)) {
                    return null;
                }
                let n = null;
                if (e.type === "grade") {
                    n = <PercentArea {...t} {...r}/>;
                } else {
                    n = <SimpleArea {...t} {...r}/>;
                }
                return <div key={e.title} className={module3775.box}>{n}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const monitorStore = this.monitorStore;
                const { isLoading, isRefreshing } = monitorStore;
                const o = this.getMonitoringCfgs();
                const cluster = this.props.match.params.cluster;
                return <Controller title={t("ETCD_MONITORING")} step="2m" times={50} onFetch={this.fetchData} loading={isLoading} refreshing={isRefreshing} isEmpty={module63(this.metrics)}><div className={module3775.content}><div className={module3775.box}><div className={module3775.status}><ETCDNodes cluster={cluster}/></div></div>{o.map((t)=>_this.renderChart(t))}</div></Controller>;
            }
        },
        {
            key: "metrics",
            get: function() {
                return this.monitorStore.data;
            }
        }
    ]);
    return n;
})(Component)) || o) || o;
export default C;
