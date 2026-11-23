import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-86.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-98.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import module96 from "utils/babel-helpers/slicedToArray";
import "unpacked/module-315.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module63 from "unpacked/module-63.js";
import module26 from "unpacked/module-26.js";
import { getAreaChartOps, getZeroValues } from "utils/monitoring";
import { hideGPUByLicense, isEdgeWizePage } from "utils/index";
import module989 from "unpacked/module-989.js";
import module1399 from "unpacked/module-1399.js";
import module1400 from "unpacked/module-1400.js";
import { SimpleArea } from "components/Charts/index";
import { Controller } from "components/Cards/Monitoring/index";
function S(e, t) {
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
const C = {
    cpu_usage: "pod_cpu_usage",
    memory_usage: "pod_memory_usage_wo_cache",
    gpu_usage: "pod_gpu_usage",
    gpu_memory_usage: "pod_gpu_memory_usage",
    net_transmitted: "pod_net_bytes_transmitted",
    net_received: "pod_net_bytes_received"
};
const D = {
    Deployment: "deployment",
    StatefulSet: "statefulset",
    DaemonSet: "daemonset"
};
const k = ((Component_1)=>{
    module55(a, Component_1);
    var t = ((e)=>{
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
    })(a);
    function a(e) {
        let r;
        module36(this, a);
        r = t.call(this, e);
        r.fetchData = function(e) {
            const detail = r.store.detail;
            const { cluster, namespace, name } = detail;
            r.monitorStore.fetchMetrics({
                cluster,
                namespace,
                pod: name,
                metrics: Object.values(hideGPUByLicense(C, cluster)),
                ...e
            });
        };
        r.getMonitoringCfgs = function() {
            return [
                {
                    type: "cpu",
                    title: "CPU_USAGE",
                    unitType: "cpu",
                    legend: [
                        "USAGE"
                    ],
                    data: module26(r.metrics, `${C.cpu_usage}.data.result`)
                },
                {
                    type: "memory",
                    title: "MEMORY_USAGE",
                    unitType: "memory",
                    legend: [
                        "USAGE"
                    ],
                    data: module26(r.metrics, `${C.memory_usage}.data.result`)
                },
                {
                    type: "gpu",
                    title: "GPU_USAGE",
                    unitType: "gpu",
                    legend: [
                        "USAGE"
                    ],
                    data: module26(r.metrics, `${C.gpu_usage}.data.result`)
                },
                {
                    type: "gpu_memory",
                    title: "GPU_MEMORY_USAGE",
                    unitType: "memory",
                    legend: [
                        "USAGE"
                    ],
                    data: module26(r.metrics, `${C.gpu_memory_usage}.data.result`)
                },
                {
                    type: "bandwidth",
                    title: "OUTBOUND_TRAFFIC",
                    unitType: "bandwidth",
                    legend: [
                        "OUTBOUND"
                    ],
                    data: module26(r.metrics, `${C.net_transmitted}.data.result`)
                },
                {
                    type: "bandwidth",
                    title: "INBOUND_TRAFFIC",
                    unitType: "bandwidth",
                    legend: [
                        "INBOUND"
                    ],
                    data: module26(r.metrics, `${C.net_received}.data.result`)
                }
            ];
        };
        const n = module26(r.props.rootStore, "routing.location.pathname", "").indexOf("observability") > -1;
        r.monitorStore = n ? new module1400 : isEdgeWizePage() ? new module1399 : new module989;
        return r;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const detail = this.store.detail;
                const { createTime, cluster } = detail;
                const monitorStore = this.monitorStore;
                const { isLoading, isRefreshing } = monitorStore;
                const i = hideGPUByLicense(this.getMonitoringCfgs(), cluster);
                return <Controller createTime={createTime} onFetch={this.fetchData} loading={isLoading} refreshing={isRefreshing} isEmpty={module63(this.metrics)}>{i.map((t)=>{
                    t.data = module63(t.data) ? [
                        {
                            values: getZeroValues()
                        }
                    ] : t.data;
                    t.legend = t.data.map(()=>t.legend);
                    t.workload_kind = _this.monitoringModule;
                    const a = getAreaChartOps(t);
                    return <SimpleArea key={t.title} width="100%" {...a}/>;
                })}</Controller>;
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
                return D[this.store.detail.ownerKind] ?? this.store.detail.ownerKind;
            }
        },
        {
            key: "metrics",
            get: function() {
                const e = {};
                Object.entries(this.monitorStore.data).forEach((t)=>{
                    const a = module96(t, 2);
                    const r = a[0];
                    const l = a[1];
                    if (module26(l, "data.result")) {
                        e[`${r}`] = l;
                    }
                });
                return e;
            }
        }
    ]);
    return a;
})(Component);
const N = inject("rootStore", "detailStore")(observer(k));
export default N;
const T = k;
export { T as Component };
