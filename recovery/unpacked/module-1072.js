import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-86.js";
import "./module-18.js";
import "./module-16.js";
import "./module-98.js";
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
import module96 from "./module-96.js";
import "./module-315.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module3 from "./module-3.js";
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import { inject, observer } from "./module-239.js";
import module186 from "./module-186.js";
import { MultiArea } from "./module-799.js";
import { Controller } from "./module-824.js";
import { getAreaChartOps, getZeroValues } from "./module-795.js";
import { cacheFunc, hideGPUByLicense, isEdgeWizePage } from "./module-52.js";
import module989 from "./module-989.js";
import module1399 from "./module-1399.js";
import module1400 from "./module-1400.js";
import Module1818 from "./module-1818.js";
import module3862 from "./module-3862.js";
let l;
const M = {
    cpu_usage: "pod_cpu_usage",
    memory_usage: "pod_memory_usage_wo_cache",
    gpu_usage: "pod_gpu_usage",
    gpu_memory_usage: "pod_gpu_memory_usage",
    net_transmitted: "pod_net_bytes_transmitted",
    net_received: "pod_net_bytes_received"
};
const P = {
    deployments: "deployment",
    statefulsets: "statefulset",
    daemonsets: "daemonset"
};
const A = inject("rootStore", "detailStore")(l = observer(l = ((Component_1)=>{
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
        t.fetchData = function(e = {}) {
            const pods = t.state.pods;
            if (module63(pods)) {
                t.resourceStore.fetchSortedMetrics({
                    ...t.resourceParams,
                    metrics: [
                        M.cpu_usage
                    ],
                    limit: 5
                }).then((a)=>{
                    const r = (module26(a[M.cpu_usage], "data.result") || []).map((e)=>module26(e, "metric.pod"));
                    t.setState({
                        pods: r
                    }, function() {
                        t.fetchMetrics({
                            resources: r,
                            ...e
                        });
                    });
                });
            } else {
                t.fetchMetrics({
                    resources: pods,
                    ...e
                });
            }
        };
        t.fetchMetrics = function(e) {
            const cluster = t.store.detail.cluster;
            t.monitorStore.fetchMetrics({
                resources: [],
                metrics: Object.values(hideGPUByLicense(M, cluster)),
                ...t.resourceParams,
                ...e
            });
        };
        t.getMonitoringCfgs = function() {
            return [
                {
                    type: "cpu",
                    title: "CPU_USAGE",
                    unitType: "cpu",
                    metricType: M.cpu_usage
                },
                {
                    type: "memory",
                    title: "MEMORY_USAGE",
                    unitType: "memory",
                    metricType: M.memory_usage
                },
                {
                    type: "gpu",
                    title: "GPU_USAGE",
                    unitType: "gpu",
                    metricType: M.gpu_usage
                },
                {
                    type: "gpu_memory",
                    title: "GPU_MEMORY_USAGE",
                    unitType: "memory",
                    metricType: M.gpu_memory_usage
                },
                {
                    type: "bandwidth",
                    title: "OUTBOUND_TRAFFIC",
                    unitType: "bandwidth",
                    metricType: M.net_transmitted
                },
                {
                    type: "bandwidth",
                    title: "INBOUND_TRAFFIC",
                    unitType: "bandwidth",
                    metricType: M.net_received
                }
            ];
        };
        t.showMultipleModal = function(e) {
            return cacheFunc(`_showMultipleModal_${e.title}`, function() {
                t.setState({
                    showMultipleModal: true,
                    selectItem: {
                        ...e,
                        legend: [
                            "USAGE"
                        ]
                    }
                });
            }, module88(t));
        };
        t.hideMultipleModal = function() {
            t.setState({
                showMultipleModal: false,
                selectItem: {}
            });
        };
        t.state = {
            showMultipleModal: false,
            selectItem: {},
            pods: []
        };
        const n = module26(t.props.rootStore, "routing.location.pathname", "").indexOf("observability") > -1;
        const l = isEdgeWizePage();
        t.monitorStore = n ? new module1400 : l ? new module1399 : new module989;
        t.resourceStore = n ? new module1400 : l ? new module1399 : new module989;
        return t;
    }
    module37(r, [
        {
            key: "renderCard",
            value: function() {
                const _this = this;
                const detail = this.store.detail;
                const { createTime, cluster } = detail;
                const monitorStore = this.monitorStore;
                const { isLoading, isRefreshing } = monitorStore;
                const c = hideGPUByLicense(this.getMonitoringCfgs(), cluster);
                const isMore = this.isMore;
                return <Controller createTime={createTime} onFetch={this.fetchData} loading={isLoading} refreshing={isRefreshing} isEmpty={module63(this.metrics)}>{isMore && <module186.Alert message={t.html("MONITORING_ALERT_DESC")} type="info"/>}{c.map((a)=>{
                    a.data = module26(_this.metrics, `${a.metricType}.data.result`) || [
                        {
                            values: getZeroValues()
                        }
                    ];
                    a.legend = a.data.map((e, t)=>module26(e, "metric.pod", `pod${t}`));
                    a.workload_kind = _this.monitoringModule;
                    const r = getAreaChartOps(a);
                    return <div key={a.title} className={module3(module3862.item)}>{isMore && <div className={module3862.more} onClick={_this.showMultipleModal(a)}>{t("VIEW_ALL_REPLICAS")}</div>}<MultiArea width="100%" {...r}/></div>;
                })}</Controller>;
            }
        },
        {
            key: "renderModal",
            value: function() {
                const state = this.state;
                const { showMultipleModal, selectItem } = state;
                const detail = this.store.detail;
                const { name, cluster, namespace } = detail;
                return <div><Module1818 visible={showMultipleModal} module={this.monitoringModule} name={name} cluster={cluster} namespace={namespace} config={selectItem} onCancel={this.hideMultipleModal}/></div>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div>{this.renderCard()}{this.renderModal()}</div>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.detailStore;
            }
        },
        {
            key: "monitoringModule",
            get: function() {
                return P[this.store.module];
            }
        },
        {
            key: "metrics",
            get: function() {
                const e = {};
                Object.entries(this.monitorStore.data).forEach((t)=>{
                    const a = module96(t, 2);
                    const r = a[0];
                    const n = a[1];
                    if (module26(n, "data.result")) {
                        e[`${r}`] = n;
                    }
                });
                return e;
            }
        },
        {
            key: "resourceParams",
            get: function() {
                const detail = this.store.detail;
                const { cluster, namespace, name } = detail;
                return {
                    cluster,
                    namespace,
                    workload_kind: this.monitoringModule,
                    workload_name: name
                };
            }
        },
        {
            key: "isMore",
            get: function() {
                const detail = this.store.detail;
                const { podNums, status } = detail;
                return (podNums || status.numberAvailable) > 5;
            }
        }
    ]);
    return r;
})(Component)) || l) || l;
export default A;
