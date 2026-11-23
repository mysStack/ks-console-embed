import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-30.js";
import "./module-73.js";
import "./module-48.js";
import "./module-138.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-316.js";
import "./module-7.js";
import "./module-32.js";
import "./module-41.js";
import "./module-44.js";
import module61 from "./module-61.js";
import "./module-31.js";
import module58 from "./module-58.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module49 from "./module-49.js";
import "./module-66.js";
import "./module-28.js";
import "./module-442.js";
import "./module-34.js";
import "./module-15.js";
import "./module-436.js";
import "./module-22.js";
import module14 from "./module-14.js";
import module63 from "./module-63.js";
import module60 from "./module-60.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import { to } from "./module-52.js";
import { fillEmptyMetrics } from "./module-795.js";
let p;
let m;
let h;
let v;
let g;
export const getMinuteValue = function(e = "60s", t = true) {
    const a = e.slice(-1);
    let r = parseFloat(e);
    switch(a){
        default:
            break;
        case "m":
            r *= 60;
            break;
        case "h":
            r *= 3600;
            break;
        case "d":
            r = 24 * r * 60 * 60;
    }
    if (t) {
        return `${r}s`;
    }
    return r;
};
export const getTimeRange = function({ step = "600s", times = 20 } = {}) {
    const l = parseFloat(step) * times;
    const end = Math.floor(Date.now() / 1000);
    const start = Math.floor(end - l);
    return {
        start,
        end
    };
};
p = (()=>{
    function e(a = {}) {
        const _this = this;
        module36(this, e);
        module65(this, "isLoading", m, this);
        module65(this, "isRefreshing", h, this);
        module65(this, "etcdChecking", v, this);
        module65(this, "supportETCD", g, this);
        this.isConfirmSupportETCD = false;
        this.data = {};
        this.resourceName = "resource_name";
        this.getApi = function({ namespace, workspace, component, module, container, nodeName, persistentvolumeclaim, pvc, pod, workload }) {
            if (component || module) {
                return `${_this.apiVersion}/component_metrics`;
            }
            if (pod) {
                return `${_this.apiVersion}/pod_metrics`;
            }
            if (container) {
                return `${_this.apiVersion}/container_metrics`;
            }
            if (nodeName) {
                return `${_this.apiVersion}/node_metrics`;
            }
            if (persistentvolumeclaim || pvc) {
                return `${_this.apiVersion}/persistentvolumeclaim_metrics`;
            }
            if (workload) {
                return `${_this.apiVersion}/workload_metrics`;
            }
            if (namespace) {
                return `${_this.apiVersion}/namespace_metrics`;
            }
            if (workspace) {
                return `${_this.apiVersion}/workspace_metrics`;
            }
            if (globals.app.isMultiCluster && _this.cluster) {
                return `${_this.apiVersion}/cluster_metrics`;
            }
            return _this.apiVersion;
        };
        this.getParams = function({ start, end, step = "600s", times = 20, resources = [], metrics = [], cluster_resources_filter = _this.cluster_resources_filter, last = false, pvcName, nodeName, module, ...rest } = {}) {
            const O = {
                ...rest
            };
            if (module || _this.module) {
                O.component = module || _this.module;
                delete O.module;
            }
            if (pvcName) {
                O.pvc = pvcName;
            }
            if (nodeName) {
                O.node = nodeName;
            }
            if (_this.cluster) {
                O.cluster = _this.cluster;
            }
            if (!last && (Object.assign(O, {
                start,
                end,
                step: getMinuteValue(step),
                times
            }), !start || !end)) {
                const S = getTimeRange(O);
                O.start = S.start;
                O.end = S.end;
            }
            if (O.start) {
                O.start = Math.floor(O.start);
            }
            if (O.end) {
                O.end = Math.floor(O.end);
            }
            if (!module63(resources)) {
                O.resources_filter = `${resources.join("|")}`;
            }
            if (!module63(cluster_resources_filter)) {
                O.cluster_resources_filter = `${cluster_resources_filter.join("|")}`;
            }
            if (!module63(metrics)) {
                O.metrics_filter = `${metrics.join("|")}`;
            }
            return _this.handleParams(O);
        };
        this.handleParams = function(e) {
            return e;
        };
        this.getResult = function(e) {
            const t = {};
            const a = module60(e) ? e : module26(e, "results", []) || [];
            if (module63(a)) {
                const r = module26(e, "metric_name");
                if (r) {
                    t[r] = e;
                }
            } else {
                a.forEach((e, a)=>{
                    t[e.metric_name || a + 1] = e;
                    e.metric_name = e.metric_name || a + 1;
                });
            }
            return t;
        };
        this.getNewValues = function(e = [], t = []) {
            const a = module63(e) ? [] : module61(e);
            const r = t || [];
            if (!module63(r)) {
                if (a.length > 10) {
                    a.shift();
                }
                a.push(r);
            }
            return a;
        };
        this.getNewRefreshedResult = function(e = [], a = []) {
            const r = module61(a);
            e.forEach((e, a)=>{
                const n = module26(e, `metric.${_this.resourceName}`);
                let l = null;
                if (n) {
                    const u = r.find((e)=>module26(e, `metric.${_this.resourceName}`) === n);
                    if (module63(u)) {
                        r.push(e);
                    } else {
                        l = u;
                    }
                } else {
                    l = r[a];
                }
                if (!module63(l)) {
                    const o = _this.getNewValues(l.values, e.value);
                    module74(l, "values", o);
                }
            });
            return r;
        };
        this.getRefreshResult = function(e = {}, a = {}) {
            const r = module14.toJS(a);
            if (module63(r)) {
                return e;
            }
            Object.values(e).forEach((e)=>{
                const a = module26(e, "metric_name");
                const n = r[a];
                if (n) {
                    const l = module26(e, "data.result") || [];
                    const u = module26(n, "data.result", module26(n, "data.results")) || [];
                    module74(n, "data.result", _this.getNewRefreshedResult(l, u));
                }
            });
            return r;
        };
        this.getMoreResult = function(e = {}, t = {}) {
            const a = module14.toJS(t);
            if (module63(a)) {
                return e;
            }
            Object.values(e).forEach((e)=>{
                const t = module26(e, "metric_name");
                const r = a[t];
                if (r) {
                    const n = module26(r, "data.result", module26(r, "data.results")) || [];
                    const l = module26(e, "data.result") || [];
                    const o = [].concat(module61(n), module61(l));
                    module74(r, "data.result", o);
                }
            });
            return a;
        };
        this.checkEtcd = function() {
            _this.etcdChecking = true;
            _this.supportETCD = globals.app.hasMonitoringExtensionExtraModule("enable-etcd-monitoring");
            _this.etcdChecking = false;
        };
        this.getStatisticUrl = function({ cluster, namespace, workspace }) {
            const n = cluster ? `/klusters/${cluster}` : "";
            const l = namespace ? `/namespaces/${namespace}` : "";
            const u = workspace ? `/workspaces/${workspace}` : "";
            let o = "/resources.kubesphere.io/v1alpha3";
            if (!cluster) {
                o = "/tenant.kubesphere.io/v1beta1";
            }
            return `/kapis${o}${n}${l}${u}/metrics`;
        };
        Object.keys(a).forEach((e)=>module74(_this, e, a[e]));
    }
    module37(e, [
        {
            key: "fetchMetrics",
            value: async function(t) {
                let r;
                let u;
                let c;
                let s;
                let f;
                let d;
                let p;
                let m;
                ({ autoRefresh: r = false, more: u = false, fillZero: c = true } = t);
                s = module58(t, [
                    "autoRefresh",
                    "more",
                    "fillZero"
                ]);
                if (r) {
                    s.last = true;
                    this.isRefreshing = true;
                } else {
                    this.isLoading = true;
                }
                if (s.cluster) {
                    this.cluster = s.cluster;
                }
                if (this.cluster) {
                    s.cluster = this.cluster;
                }
                f = this.getParams(s);
                d = this.getApi(s);
                p = await to(request.get(d, f));
                m = this.getResult(p);
                if (r) {
                    m = this.getRefreshResult(m, this.data);
                }
                if (u) {
                    m = this.getMoreResult(m, this.data);
                }
                this.data = c ? fillEmptyMetrics(f, m) : m;
                this.isLoading = false;
                this.isRefreshing = false;
                return m;
            }
        },
        {
            key: "fetchStatisticsQuery",
            value: async function(t) {
                let cluster;
                let namespace;
                let workspace;
                let u;
                let o;
                let i;
                cluster = t.cluster;
                namespace = t.namespace;
                workspace = t.workspace;
                u = this.getStatisticUrl({
                    cluster,
                    namespace,
                    workspace
                });
                o = await to(request.get(u));
                i = this.getResult(o);
                return i;
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return "kapis/monitoring.kubesphere.io/v1beta1";
            }
        }
    ]);
    return e;
})();
m = module49(p.prototype, "isLoading", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
});
h = module49(p.prototype, "isRefreshing", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
});
v = module49(p.prototype, "etcdChecking", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
});
g = module49(p.prototype, "supportETCD", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
});
module49(p.prototype, "fetchMetrics", [
    module14.action
], Object.getOwnPropertyDescriptor(p.prototype, "fetchMetrics"), p.prototype);
module49(p.prototype, "fetchStatisticsQuery", [
    module14.action
], Object.getOwnPropertyDescriptor(p.prototype, "fetchStatisticsQuery"), p.prototype);
export default p;
