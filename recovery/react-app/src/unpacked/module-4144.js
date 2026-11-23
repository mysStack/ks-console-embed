import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import { getAreaChartOps } from "utils/monitoring";
import module1136 from "unpacked/module-1136.js";
import { PercentArea, SimpleArea } from "components/Charts/index";
import { Controller } from "components/Cards/Monitoring/index";
import { ETCDNodes } from "unpacked/module-1131.js";
import module4145 from "unpacked/module-4145.js";
let u;
function O(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, r);
    }
    return a;
}
const R = {
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
const T = inject("rootStore")(u = observer(u = ((Component_1)=>{
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
        t.fetchData = function(e) {
            t.monitorStore.fetchMetrics({
                metrics: Object.values(R),
                ...e
            });
        };
        t.getQuantileData = function(e, a) {
            return (module26(t.metrics, `${R[e]}.data.result`) || []).find((e)=>module26(e, "metric.quantile") === a) || {};
        };
        t.getMonitoringCfgs = function() {
            return [
                {
                    type: "size",
                    title: "DB_SIZE",
                    unitType: "memory",
                    legend: [
                        "DB_SIZE"
                    ],
                    data: module26(t.metrics, `${R.db_size}.data.result`)
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
                        module26(t.metrics, `${R.client_received_bytes}.data.result[0]`),
                        module26(t.metrics, `${R.client_sent_bytes}.data.result[0]`)
                    ]
                },
                {
                    type: "area",
                    title: "GRPC_STREAM_MESSAGES",
                    unit: "times/s",
                    legend: [
                        "RECEIVED",
                        "SENT"
                    ],
                    data: [
                        module26(t.metrics, `${R.grpc_received_rate}.data.result[0]`),
                        module26(t.metrics, `${R.grpc_sent_rate}.data.result[0]`)
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
                        t.getQuantileData("wal_fsync_duration_quantile", "0.99"),
                        t.getQuantileData("wal_fsync_duration_quantile", "0.9"),
                        t.getQuantileData("wal_fsync_duration_quantile", "0.5"),
                        module26(t.metrics, `${R.wal_fsync_duration_average}.data.result[0]`)
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
                        t.getQuantileData("backend_commit_duration_quantile", "0.99"),
                        t.getQuantileData("backend_commit_duration_quantile", "0.9"),
                        t.getQuantileData("backend_commit_duration_quantile", "0.5"),
                        module26(t.metrics, `${R.backend_commit_duration_average}.data.result[0]`)
                    ]
                },
                {
                    type: "area",
                    title: "RAFT_PROPOSAL",
                    unit: "times/s",
                    legend: [
                        "PROPOSAL_COMMITTED",
                        "PROPOSAL_APPLIED",
                        "PROPOSAL_FAILED",
                        "PROPOSAL_PENDING"
                    ],
                    data: [
                        module26(t.metrics, `${R.proposals_committed_rate}.data.result[0]`),
                        module26(t.metrics, `${R.proposals_applied_rate}.data.result[0]`),
                        module26(t.metrics, `${R.proposals_failed_rate}.data.result[0]`),
                        module26(t.metrics, `${R.proposals_pending_count}.data.result[0]`)
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
        t.monitorStore = new module1136({
            module: "etcd",
            cluster: e.match.params.cluster
        });
        return t;
    }
    module37(r, [
        {
            key: "renderChart",
            value: function(e) {
                const t = {
                    width: "100%",
                    height: 190
                };
                const a = getAreaChartOps(e);
                if (module63(a.data)) {
                    return null;
                }
                let r = null;
                if (e.type === "grade") {
                    r = <PercentArea {...t} {...a}/>;
                } else {
                    r = <SimpleArea {...t} {...a}/>;
                }
                return <div key={e.title} className={module4145.box}>{r}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const monitorStore = this.monitorStore;
                const { isLoading, isRefreshing } = monitorStore;
                const u = this.getMonitoringCfgs();
                const cluster = this.props.match.params.cluster;
                return <Controller title={t("ETCD_MONITORING")} step="2m" times={50} onFetch={this.fetchData} loading={isLoading} refreshing={isRefreshing} isEmpty={module63(this.metrics)}><div className={module4145.content}><div className={module4145.box}><div className={module4145.status}><ETCDNodes cluster={cluster}/></div></div>{u.map((t)=>_this.renderChart(t))}</div></Controller>;
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
})(Component)) || u) || u;
export default T;
