import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-30.js";
import "./module-73.js";
import "./module-18.js";
import "./module-16.js";
import "./module-138.js";
import "./module-98.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-316.js";
import "./module-22.js";
import "./module-23.js";
import "./module-17.js";
import "./module-38.js";
import "./module-7.js";
import "./module-32.js";
import "./module-45.js";
import "./module-118.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-58.js";
import "./module-31.js";
import module96 from "./module-96.js";
import "./module-41.js";
import "./module-44.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import module14 from "./module-14.js";
import { to } from "./module-52.js";
import { fillEmptyMetrics, getLastMonitoringData } from "./module-795.js";
import module74 from "./module-74.js";
import module847 from "./module-847.js";
let i;
let c;
let s;
let f;
let d;
let p;
let m;
function w(e) {
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
}
const M = [
    "clusters_count",
    "clusters_node_count",
    "clusters_namespace_count",
    "clusters_pod_count",
    "clusters_deployment_count",
    "clusters_statefulset_count",
    "clusters_daemonset_count",
    "clusters_job_count",
    "clusters_cronjob_count",
    "clusters_pvc_count",
    "clusters_service_count",
    "clusters_ingresses_count"
];
const metrics = [
    "clusters_alerts_critical_total",
    "clusters_alerts_warning_total",
    "clusters_alerts_error_total",
    "clusters_alerts_total",
    "clusters_alerts_firing_total",
    "clusters_alerts_pending_total",
    "clusters_alerts_info_total"
];
const A = [
    {
        cpu: [
            "clusters_cpu_usage",
            "clusters_cpu_utilisation",
            "clusters_pod_cpu_requests_total",
            "clusters_pod_cpu_limits_total",
            "cluster_namespace_quota_cpu_requests_hard_total",
            "cluster_namespace_quota_cpu_limits_hard_total",
            "clusters_cpu_total"
        ]
    },
    {
        memory: [
            "clusters_memory_usage_wo_cache",
            "clusters_memory_utilisation",
            "clusters_pod_memory_requests_total",
            "clusters_pod_memory_limits_total",
            "cluster_namespace_quota_memory_requests_hard_total",
            "cluster_namespace_quota_memory_limits_hard_total",
            "clusters_memory_total"
        ]
    },
    {
        gpu: [
            "clusters_gpu_usage",
            "clusters_gpu_total",
            "clusters_gpu_utilization"
        ]
    },
    {
        gpu_memory: [
            "clusters_gpu_memory_utilization",
            "clusters_gpu_memory_usage",
            "clusters_gpu_memory_total"
        ]
    },
    {
        pod: [
            "clusters_pod_count",
            "clusters_pod_utilisation",
            "clusters_pod_quota"
        ]
    },
    {
        disk: [
            "clusters_disk_size_usage",
            "clusters_disk_size_utilisation",
            "clusters_disk_size_capacity"
        ]
    }
];
const j = [
    "clusters_kubesphere_clusterrole_total",
    "clusters_kubesphere_user_total"
];
i = ((e)=>{
    module55(O, e);
    var _ = w(O);
    function O(t = {}) {
        let e;
        module36(this, O);
        e = _.call(this, t);
        module65(e, "baseResourcesSummary", c, module88(e));
        module65(e, "monitorData", s, module88(e));
        module65(e, "roleAndMember", f, module88(e));
        module65(e, "alertData", d, module88(e));
        module65(e, "PodData", p, module88(e));
        module65(e, "clusters", m, module88(e));
        e.getApi = function({ namespace, workspace, component, container, nodeName, persistentvolumeclaim, pvc, pod, workload }) {
            if (component) {
                return `${e.apiVersion}/component_metrics`;
            }
            if (pod) {
                return `${e.apiVersion}/pod_metrics`;
            }
            if (container) {
                return `${e.apiVersion}/container_metrics`;
            }
            if (nodeName) {
                return `${e.apiVersion}/node_metrics`;
            }
            if (persistentvolumeclaim || pvc) {
                return `${e.apiVersion}/persistentvolumeclaim_metrics`;
            }
            if (workload) {
                return `${e.apiVersion}/workload_metrics`;
            }
            if (namespace) {
                return `${e.apiVersion}/namespace_metrics`;
            }
            if (workspace) {
                return `${e.apiVersion}/workspace_metrics`;
            }
            if (globals.app.isMultiCluster && e.clusters) {
                return `${e.apiVersion}/cluster_metrics`;
            }
            return e.apiVersion;
        };
        Object.keys(t).forEach((a)=>{
            module74(module88(e), a, t[a]);
        });
        return e;
    }
    module37(O, [
        {
            key: "setClusters",
            value: function(e = []) {
                this.clusters = Array.isArray(e) ? e : [];
            }
        },
        {
            key: "getBaseResourcesSummary",
            value: async function() {
                let t;
                let a;
                let r;
                let n;
                let l;
                let u;
                t = this.clusters.map((e)=>e.name).join("|");
                a = M.join("|");
                r = this.getApi({});
                this.baseResourcesSummary.isLoading = true;
                n = await to(request.get(r, {
                    resources_filter: t,
                    metrics_filter: a
                }));
                l = this.getResult(n);
                u = getLastMonitoringData(l);
                this.baseResourcesSummary.isLoading = false;
                this.baseResourcesSummary.data = u;
                return u;
            }
        },
        {
            key: "fetchAllMetricsData",
            value: async function() {
                let t;
                let a;
                let r;
                const _this = this;
                t = [];
                A.forEach((e)=>{
                    const resources_filter = _this.clusters.map((e)=>e.name)?.join("|");
                    const metrics_filter = Object.values(e)[0].join("|");
                    const u = _this.getApi({});
                    t.push(to(request.get(u, {
                        resources_filter,
                        metrics_filter
                    })));
                });
                this.monitorData.isLoading = true;
                a = await Promise.all(t);
                r = a.map((e, t)=>{
                    const a = getLastMonitoringData(_this.getResult(e));
                    const r = A.map((e)=>Object.keys(e)[0]);
                    const l = {};
                    Object.entries(a).forEach((e)=>{
                        const r = module96(e, 2);
                        const n = r[0];
                        const o = r[1];
                        l[n] = o?.value?.[1] ?? 0;
                    });
                    return {
                        resource: r[t],
                        data: l
                    };
                });
                this.monitorData = {
                    isLoading: false,
                    data: r
                };
                return r;
            }
        },
        {
            key: "fetchAlertData",
            value: async function(t) {
                let a;
                let resources;
                let n;
                let l;
                let u;
                let i;
                a = {
                    ...t
                };
                resources = this.clusters.map((e)=>e.name);
                this.alertData.isLoading = true;
                n = this.getParams({
                    metrics,
                    resources,
                    ...a
                });
                l = this.getApi({});
                u = await to(request.get(l, n));
                i = this.getResult(u);
                this.alertData = {
                    isLoading: false,
                    data: i
                };
            }
        },
        {
            key: "fetchPodData",
            value: async function(t) {
                let a;
                let r;
                let l;
                let u;
                let i;
                let c;
                ({ fillZero: a, ...r } = t);
                l = this.getParams(r);
                u = this.getApi({});
                this.PodData.isLoading = true;
                i = await to(request.get(u, l));
                c = this.getResult(i);
                this.PodData = {
                    isLoading: false,
                    data: a ? fillEmptyMetrics(l, c) : c
                };
            }
        },
        {
            key: "fetchRoleAndMember",
            value: async function() {
                let t;
                let a;
                let r;
                let n;
                let l;
                let u;
                t = this.clusters.map((e)=>e.name).join("|");
                a = j.join("|");
                r = this.getApi({});
                this.roleAndMember.isLoading = false;
                n = await to(request.get(r, {
                    resources_filter: t,
                    metrics_filter: a
                }));
                l = this.getResult(n);
                u = getLastMonitoringData(l);
                this.roleAndMember.isLoading = false;
                this.roleAndMember.data = u;
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return "kapis/monitoring.kubesphere.io/v1beta1";
            }
        }
    ]);
    return O;
})(module847);
c = module49(i.prototype, "baseResourcesSummary", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            isLoading: true,
            data: {}
        };
    }
});
s = module49(i.prototype, "monitorData", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            isLoading: false,
            data: []
        };
    }
});
f = module49(i.prototype, "roleAndMember", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            data: [],
            isLoading: true
        };
    }
});
d = module49(i.prototype, "alertData", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            isLoading: false,
            data: []
        };
    }
});
p = module49(i.prototype, "PodData", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            isLoading: false,
            data: []
        };
    }
});
m = module49(i.prototype, "clusters", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
});
module49(i.prototype, "setClusters", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "setClusters"), i.prototype);
module49(i.prototype, "getBaseResourcesSummary", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "getBaseResourcesSummary"), i.prototype);
module49(i.prototype, "fetchAllMetricsData", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "fetchAllMetricsData"), i.prototype);
module49(i.prototype, "fetchAlertData", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "fetchAlertData"), i.prototype);
module49(i.prototype, "fetchPodData", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "fetchPodData"), i.prototype);
module49(i.prototype, "fetchRoleAndMember", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "fetchRoleAndMember"), i.prototype);
export default i;
