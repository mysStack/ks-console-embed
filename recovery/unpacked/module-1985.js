import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-320.js";
import "./module-16.js";
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
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module3 from "./module-3.js";
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import { cacheFunc, hideGPUByLicense } from "./module-52.js";
import { getAreaChartOps, getZeroValues } from "./module-795.js";
import module989 from "./module-989.js";
import module186 from "./module-186.js";
import { MultiArea } from "./module-799.js";
import { Controller } from "./module-824.js";
import Module1818 from "./module-1818.js";
import module5000 from "./module-5000.js";
let o;
const D = {
    cpu_usage: "pod_cpu_usage",
    memory_usage: "pod_memory_usage_wo_cache",
    gpu_usage: "pod_gpu_usage",
    gpu_memory_usage: "pod_gpu_memory_usage",
    net_transmitted: "pod_net_bytes_transmitted",
    net_received: "pod_net_bytes_received"
};
const A = {
    deployments: "deployment",
    statefulsets: "statefulset",
    daemonsets: "daemonset"
};
const j = inject("detailStore")(o = observer(o = ((Component_1)=>{
    module55(a, Component_1);
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
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a(e) {
        let t;
        module36(this, a);
        t = r.call(this, e);
        t.fetchData = function(e = {}) {
            const t_state = t.state;
            const { cluster, pods } = t_state;
            if (module63(pods) || e.cluster !== cluster) {
                t.resourceStore.fetchSortedMetrics({
                    ...t.resourceParams,
                    cluster: e.cluster,
                    metrics: [
                        D.cpu_usage
                    ],
                    limit: 6
                }).then((r)=>{
                    const a = (module26(r[D.cpu_usage], "data.result") || []).map((e)=>module26(e, "metric.pod"));
                    t.setState({
                        pods: a,
                        cluster: e.cluster
                    }, function() {
                        t.fetchMetrics({
                            resources: a,
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
            t.monitorStore.fetchMetrics({
                resources: [],
                metrics: Object.values(hideGPUByLicense(D, t.state.cluster)),
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
                    metricType: D.cpu_usage
                },
                {
                    type: "memory",
                    title: "MEMORY_USAGE",
                    unitType: "memory",
                    metricType: D.memory_usage
                },
                {
                    type: "gpu",
                    title: "GPU_USAGE",
                    unitType: "gpu",
                    metricType: D.gpu_usage
                },
                {
                    type: "gpu_memory",
                    title: "GPU_MEMORY_USAGE",
                    unitType: "memory",
                    metricType: D.gpu_memory_usage
                },
                {
                    type: "bandwidth",
                    title: "OUTBOUND_TRAFFIC",
                    unitType: "bandwidth",
                    metricType: D.net_transmitted
                },
                {
                    type: "bandwidth",
                    title: "INBOUND_TRAFFIC",
                    unitType: "bandwidth",
                    metricType: D.net_received
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
            pods: [],
            cluster: ""
        };
        t.monitorStore = new module989;
        t.resourceStore = new module989;
        return t;
    }
    module37(a, [
        {
            key: "renderCard",
            value: function() {
                const _this = this;
                const detail = this.store.detail;
                const { createTime, clusters } = detail;
                const monitorStore = this.monitorStore;
                const { isLoading, isRefreshing } = monitorStore;
                const i = hideGPUByLicense(this.getMonitoringCfgs(), this.state.cluster);
                const isMore = this.isMore;
                return <Controller createTime={createTime} onFetch={this.fetchData} loading={isLoading} refreshing={isRefreshing} clusters={clusters} isEmpty={module63(this.metrics)} isFederated>{isMore && <module186.Alert message={t.html("MONITORING_ALERT_DESC")} type="info"/>}{i.map((r)=>{
                    r.data = module26(_this.metrics, `${r.metricType}.data.result`) || [
                        {
                            values: getZeroValues()
                        }
                    ];
                    r.legend = r.data.map((e, t)=>module26(e, "metric.pod", `pod${t}`));
                    r.workload_kind = _this.monitoringModule;
                    const a = getAreaChartOps(r);
                    return <div key={r.title} className={module3(module5000.item)}>{isMore && <div className={module5000.more} onClick={_this.showMultipleModal(r)}>{t("VIEW_ALL_REPLICAS")}</div>}<MultiArea width="100%" {...a}/></div>;
                })}</Controller>;
            }
        },
        {
            key: "renderModal",
            value: function() {
                const state = this.state;
                const { showMultipleModal, selectItem } = state;
                const detail = this.store.detail;
                const { name, namespace } = detail;
                return <div><Module1818 visible={showMultipleModal} module={this.monitoringModule} name={name} namespace={namespace} config={selectItem} onCancel={this.hideMultipleModal}/></div>;
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
                return A[this.store.module];
            }
        },
        {
            key: "metrics",
            get: function() {
                return this.monitorStore.data;
            }
        },
        {
            key: "resourceParams",
            get: function() {
                const detail = this.store.detail;
                const { namespace, name } = detail;
                return {
                    namespace,
                    workload_kind: this.monitoringModule,
                    workload_name: name
                };
            }
        },
        {
            key: "isMore",
            get: function() {
                return (module26(module14.toJS(this.resourceStore.sort), `data[${D.cpu_usage}].data.result`) || []).length > 5;
            }
        }
    ]);
    return a;
})(Component)) || o) || o;
export default j;
