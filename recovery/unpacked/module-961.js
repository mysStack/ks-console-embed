import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-30.js";
import "./module-87.js";
import "./module-16.js";
import "./module-27.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-316.js";
import "./module-22.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-38.js";
import "./module-64.js";
import "./module-7.js";
import "./module-32.js";
import "./module-58.js";
import "./module-41.js";
import module31 from "./module-31.js";
import module96 from "./module-96.js";
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
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module198 from "./module-198.js";
import module482 from "./module-482.js";
import module14 from "./module-14.js";
import { generateId, withDryRun } from "./module-52.js";
import { MODULE_KIND_MAP, TIME_MICROSECOND_MAP } from "./module-72.js";
import { transformTraces } from "./module-1022.js";
import module68 from "./module-68.js";
let g;
let y;
let E;
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
const M = (e)=>{
    if (module198(e, "requests.errorRatio")) {
        return e;
    }
    let t = 0;
    let a = 0;
    const r = module26(e, "requests.inbound.http", {});
    Object.keys(r).forEach((e)=>{
        const n = Number(r[e]);
        t += n;
        if (Number(e) >= 400) {
            a += n;
        }
    });
    module74(e, "requests.errorRatio", Math.max(100 * a / t, 0));
    return e;
};
g = ((e)=>{
    module55(m, e);
    var r = w(m);
    function m(t = "applications") {
        let e;
        module36(this, m);
        e = r.call(this, t);
        module65(e, "isTracingLoading", y, module88(e));
        e.tracing = {
            data: [],
            total: 0
        };
        e.graph = {
            data: {},
            health: {}
        };
        module65(e, "env", E, module88(e));
        e.getListUrl = function(t = {}) {
            return `${e.apiVersion}${e.getPath(t)}/${e.module}${t.dryRun ? "?dryRun=All" : ""}`;
        };
        e.getResourceUrl = function(t = {}) {
            return `${e.apiVersion}${e.getPath(t)}/${e.module}`;
        };
        e.getGraphUrl = function({ cluster, namespace, duration }) {
            return `kapis/servicemesh.kubesphere.io/v1alpha2${e.getPath({
                cluster,
                namespace
            })}/graph?duration=${duration}s&graphType=versionedApp&injectServiceNodes=true&groupBy=app&appenders=deadNode,sidecarsCheck,serviceEntry,istio,responseTime`;
        };
        e.getHealthUrl = function({ cluster, namespace, type, duration }) {
            return `kapis/servicemesh.kubesphere.io/v1alpha2${e.getPath({
                cluster,
                namespace
            })}/health?rateInterval=${duration}s&type=${type}`;
        };
        return e;
    }
    module37(m, [
        {
            key: "fetchGraph",
            value: async function() {
                let t;
                let cluster;
                let namespace;
                let app;
                let duration;
                let c;
                let s;
                let f;
                let d;
                let p;
                let m;
                let h;
                let v;
                let g;
                let nodes;
                const E = arguments;
                t = E.length > 0 && E[0] !== undefined ? E[0] : {};
                cluster = t.cluster;
                namespace = t.namespace;
                app = t.app;
                duration = t.duration;
                c = await Promise.all([
                    request.get(this.getGraphUrl({
                        cluster,
                        namespace,
                        app,
                        duration
                    })),
                    request.get(this.getHealthUrl({
                        cluster,
                        namespace,
                        type: "app",
                        duration
                    })),
                    request.get(this.getHealthUrl({
                        cluster,
                        namespace,
                        type: "service",
                        duration
                    })),
                    request.get(this.getHealthUrl({
                        cluster,
                        namespace,
                        type: "workload",
                        duration
                    }))
                ]);
                s = module96(c, 4);
                f = s[0];
                d = s[1];
                p = s[2];
                m = s[3];
                h = this.detail.services || [];
                v = this.detail.workloads || [];
                g = {};
                if (d && p && m) {
                    this.graph.health = h.reduce((acc, item)=>{
                        if (!d[item]) {
                            return acc;
                        }
                        const a = d[item];
                        const { requests, workloadStatuses } = a;
                        const workloads = workloadStatuses.reduce((acc_1, item_1)=>({
                                ...acc_1,
                                ...module31({}, item_1.name, M(m[item_1.name]))
                            }), {});
                        Object.keys(workloads).forEach((e)=>{
                            g[e] = item;
                        });
                        return {
                            ...acc,
                            ...module31({}, item, {
                                requests,
                                workloadStatuses,
                                workloads,
                                service: M(p[item])
                            })
                        };
                    }, {});
                }
                if (f && f.elements) {
                    nodes = [];
                    f.elements.nodes.forEach((e)=>{
                        if (e.data.nodeType === "service" && h.includes(e.data.service)) {
                            nodes.push(e);
                        } else if (e.data.nodeType === "app" && e.data.workload && v.includes(e.data.workload)) {
                            e.data.app = g[e.data.workload];
                            nodes.push(e);
                        }
                        if (e.data.isRoot && e.data.namespace !== namespace) {
                            e.data.targetNamespace = namespace;
                            nodes.push(e);
                        }
                    });
                    this.graph.data = {
                        nodes,
                        edges: f.elements.edges
                    };
                }
            }
        },
        {
            key: "fetchAppMetrics",
            value: function({ name, cluster, namespace }, n = {}) {
                const l = Math.floor((new Date).getTime() / 1000);
                const u = {
                    queryTime: l,
                    duration: 60,
                    step: 120,
                    rateInterval: "120s",
                    "filters[]": [
                        "request_count",
                        "request_duration",
                        "request_error_count",
                        "tcp_sent",
                        "tcp_received"
                    ],
                    direction: "inbound",
                    reporter: "destination",
                    ...n
                };
                return request.get(`kapis/servicemesh.kubesphere.io/v1alpha2${this.getPath({
                    cluster,
                    namespace
                })}/apps/${name}/metrics`, u);
            }
        },
        {
            key: "fetchServiceMetrics",
            value: function({ name, cluster, namespace }, n = {}) {
                const l = Math.floor((new Date).getTime() / 1000);
                const u = {
                    queryTime: l,
                    duration: 60,
                    step: 120,
                    rateInterval: "120s",
                    direction: "inbound",
                    reporter: "source",
                    ...n
                };
                return request.get(`kapis/servicemesh.kubesphere.io/v1alpha2${this.getPath({
                    cluster,
                    namespace
                })}/services/${name}/metrics`, u);
            }
        },
        {
            key: "fetchWorkloadMetrics",
            value: function({ name, cluster, namespace }, n = {}) {
                const l = {
                    duration: 60,
                    step: 20,
                    rateInterval: "20s",
                    direction: "inbound",
                    reporter: "source",
                    ...n
                };
                return request.get(`kapis/servicemesh.kubesphere.io/v1alpha2${this.getPath({
                    cluster,
                    namespace
                })}/workloads/${name}/metrics`, l);
            }
        },
        {
            key: "fetchTracing",
            value: async function(t) {
                let a;
                let cluster;
                let namespace;
                let o;
                let i;
                let c;
                let s;
                ({ service: a, cluster, namespace, ...o } = t);
                this.isTracingLoading = true;
                i = {
                    limit: 5,
                    ...o
                };
                c = (new Date).getTime();
                i.start = `${i.start || `${c - TIME_MICROSECOND_MAP[i.lookback]}`}000`;
                i.end = `${i.end || `${c}`}000`;
                try {
                    if ((s = await request.get(`kapis/servicemesh.kubesphere.io/v1alpha2${this.getPath({
                        cluster,
                        namespace
                    })}/services/${a}/traces`, i)) && s.data) {
                        this.tracing.data = transformTraces(s.data);
                    }
                } catch (error) {}
                this.isTracingLoading = false;
            }
        },
        {
            key: "setSelectRowKeys",
            value: function(e) {
                this.list.selectedRowKeys.replace(e);
            }
        },
        {
            key: "create",
            value: function(e, t) {
                const _this = this;
                const { application, ingress, ...rest } = e;
                const o = module26(application, 'metadata.annotations["servicemesh.kubesphere.io/enabled"]') === "true";
                const i = [
                    {
                        url: this.getListUrl(t),
                        data: application
                    }
                ];
                if (module26(ingress, "spec.rules", []).length > 0) {
                    const c = module26(application, "metadata.name");
                    if (!module26(ingress, "metadata.name")) {
                        module74(ingress, "metadata.name", `${c}-ingress-${generateId()}`);
                    }
                    if (o) {
                        const s = module26(ingress, "spec.rules[0].http.paths[0].backend.service.name");
                        if (s) {
                            module74(ingress, 'metadata.annotations["nginx.ingress.kubernetes.io/upstream-vhost"]', `${s}.${t.namespace}.svc.cluster.local`);
                        }
                    }
                    i.push({
                        url: `apis/networking.k8s.io/v1${this.getPath(t)}/ingresses`,
                        data: ingress
                    });
                }
                Object.values(rest).forEach((e)=>{
                    if (e.workload && e.service) {
                        const r = module482(MODULE_KIND_MAP, function(t) {
                            return t === e.workload.kind;
                        }) || "deployments";
                        i.push({
                            url: `apis/apps/v1${_this.getPath(t)}/${r}`,
                            data: e.workload
                        }, {
                            url: `api/v1${_this.getPath(t)}/services`,
                            data: e.service
                        });
                    }
                });
                return this.submitting(withDryRun(i));
            }
        },
        {
            key: "addComponent",
            value: function(e, t) {
                const a = [];
                if (t.namespace) {
                    if (e.workload && e.service) {
                        const r = module482(MODULE_KIND_MAP, function(t) {
                            return t === e.workload.kind;
                        }) || "deployments";
                        a.push({
                            url: `apis/apps/v1${this.getPath(t)}/${r}`,
                            data: e.workload
                        }, {
                            url: `api/v1${this.getPath(t)}/services`,
                            data: e.service
                        });
                    }
                    return this.submitting(withDryRun(a));
                }
            }
        },
        {
            key: "patch",
            value: function({ namespace, cluster, name }, t) {
                return this.submitting(request.patch(this.getDetailUrl({
                    name,
                    cluster,
                    namespace
                }), t));
            }
        },
        {
            key: "delete",
            value: function({ name, cluster, namespace }) {
                return this.submitting(request.delete(this.getDetailUrl({
                    name,
                    cluster,
                    namespace
                })));
            }
        },
        {
            key: "checkName",
            value: function({ name, cluster, namespace }) {
                return request.get(this.getDetailUrl({
                    name,
                    cluster,
                    namespace
                }), {}, {
                    headers: {
                        "x-check-exist": true
                    }
                });
            }
        },
        {
            key: "fetchSampleData",
            value: function(e) {
                return request.get(`sample/${e}`);
            }
        }
    ]);
    return m;
})(module68);
y = module49(g.prototype, "isTracingLoading", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return true;
    }
});
E = module49(g.prototype, "env", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            data: {},
            isLoading: false
        };
    }
});
module49(g.prototype, "fetchGraph", [
    module14.action
], Object.getOwnPropertyDescriptor(g.prototype, "fetchGraph"), g.prototype);
module49(g.prototype, "fetchAppMetrics", [
    module14.action
], Object.getOwnPropertyDescriptor(g.prototype, "fetchAppMetrics"), g.prototype);
module49(g.prototype, "fetchServiceMetrics", [
    module14.action
], Object.getOwnPropertyDescriptor(g.prototype, "fetchServiceMetrics"), g.prototype);
module49(g.prototype, "fetchWorkloadMetrics", [
    module14.action
], Object.getOwnPropertyDescriptor(g.prototype, "fetchWorkloadMetrics"), g.prototype);
module49(g.prototype, "fetchTracing", [
    module14.action
], Object.getOwnPropertyDescriptor(g.prototype, "fetchTracing"), g.prototype);
module49(g.prototype, "setSelectRowKeys", [
    module14.action
], Object.getOwnPropertyDescriptor(g.prototype, "setSelectRowKeys"), g.prototype);
module49(g.prototype, "create", [
    module14.action
], Object.getOwnPropertyDescriptor(g.prototype, "create"), g.prototype);
module49(g.prototype, "addComponent", [
    module14.action
], Object.getOwnPropertyDescriptor(g.prototype, "addComponent"), g.prototype);
module49(g.prototype, "patch", [
    module14.action
], Object.getOwnPropertyDescriptor(g.prototype, "patch"), g.prototype);
module49(g.prototype, "delete", [
    module14.action
], Object.getOwnPropertyDescriptor(g.prototype, "delete"), g.prototype);
module49(g.prototype, "checkName", [
    module14.action
], Object.getOwnPropertyDescriptor(g.prototype, "checkName"), g.prototype);
module49(g.prototype, "fetchSampleData", [
    module14.action
], Object.getOwnPropertyDescriptor(g.prototype, "fetchSampleData"), g.prototype);
export default g;
