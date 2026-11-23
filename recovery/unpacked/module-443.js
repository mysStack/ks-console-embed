import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-30.js";
import "./module-18.js";
import "./module-48.js";
import "./module-16.js";
import "./module-27.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-22.js";
import "./module-23.js";
import "./module-17.js";
import "./module-110.js";
import "./module-38.js";
import "./module-7.js";
import "./module-32.js";
import module61 from "./module-61.js";
import module96 from "./module-96.js";
import "./module-58.js";
import "./module-41.js";
import "./module-44.js";
import "./module-31.js";
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
import "./module-118.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module63 from "./module-63.js";
import module198 from "./module-198.js";
import module14 from "./module-14.js";
import { withDryRun } from "./module-52.js";
import { LIST_DEFAULT_ORDER } from "./module-72.js";
import module105 from "./module-105.js";
import module68 from "./module-68.js";
import module456 from "./module-456.js";
import module318 from "./module-318.js";
let y;
let b;
let C;
let w;
function P(e) {
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
        let n;
        const r = module51(e);
        if (t) {
            const o = module51(this).constructor;
            n = Reflect.construct(r, arguments, o);
        } else {
            n = r.apply(this, arguments);
        }
        return module56(this, n);
    };
}
y = ((e)=>{
    module55(m, e);
    var v = P(m);
    function m() {
        let e;
        module36(this, m);
        e = v.call(this);
        module65(e, "endpoints", b, module88(e));
        module65(e, "workload", C, module88(e));
        module65(e, "workloads", w, module88(e));
        e.getFilterParams = function(e, t) {
            const n = {
                ...t
            };
            if (n.app) {
                n.labelSelector = n.labelSelector || "";
                n.labelSelector += e ? `app=${n.app}` : `app.kubernetes.io/name=${n.app}`;
                delete n.app;
            }
            return n;
        };
        e.module = "services";
        e.S2iBuilderStore = new module456;
        return e;
    }
    module37(m, [
        {
            key: "fetchEndpoints",
            value: async function(t) {
                let n;
                let r;
                let o;
                let a;
                let i;
                const _this = this;
                n = t.name;
                r = t.cluster;
                o = t.namespace;
                this.endpoints.isLoading = true;
                this.endpoints.data.clear();
                a = [];
                try {
                    i = await request.get(`api/v1${this.getPath({
                        cluster: r,
                        namespace: o
                    })}/endpoints/${n}`, null, null, function() {
                        _this.isSubmitting = false;
                    });
                    a = i.subsets || [];
                } catch (error) {}
                this.endpoints.data = a.map(module105.endpoints);
                this.endpoints.isLoading = false;
            }
        },
        {
            key: "create",
            value: function(e, t) {
                const n = [];
                if (module198(e, "metadata")) {
                    n.push({
                        url: this.getListUrl(t),
                        data: e
                    });
                } else {
                    if (e.S2i) {
                        ((e)=>{
                            const t = module26(e.S2i, 'metadata.labels.["s2i-type.kubesphere.io"]', "");
                            const n = module26(e.Service, "metadata.name", "");
                            const r = `${n}-${t}-${Math.random().toString(36).slice(-4)}`;
                            const o = e.Deployment ? "Deployment" : "StatefulSet";
                            const a = e.Deployment || e.StatefulSet;
                            const i = module26(a, "metadata.name", "");
                            const l = module26(a, "spec.replicas", 0);
                            const s = module26(a, "spec.template.spec.containers[0].name", "");
                            let u = module26(e, 'S2i.metadata.annotations["kubesphere.io/repoUrl"]', "");
                            if (u && !u.endsWith("/")) {
                                u += "/";
                            }
                            const c = `${u}${module26(e.S2i, "spec.config.imageName")}:${module26(e.S2i, "spec.config.tag")}`;
                            module74(e, "S2i.metadata.annotations.serviceName", n);
                            e.S2i.metadata.name = r;
                            module74(a, "metadata.labels.s2ibuilder", r);
                            module74(e.S2i, 'metadata.annotations.["devops.kubesphere.io/autoscale"]', `[{ "Kind": "${o}", "Name": "${i}", "initReplicas": ${l}, "container": "${s}" }]`);
                            module74(a, "spec.template.spec.containers[0].image", c);
                        })(e);
                        this.S2iBuilderStore.create(e.S2i, t);
                    }
                    const r = new module318;
                    if (e.Service) {
                        n.push(r.getServiceRequest(e.Service, t));
                    }
                    if (e.Deployment) {
                        r.setModule("deployments");
                        n.push(r.getWorkloadRequest(e.Deployment, t));
                    }
                    if (e.StatefulSet) {
                        r.setModule("statefulsets");
                        n.push(r.getWorkloadRequest(e.StatefulSet, t));
                    }
                }
                return this.submitting(withDryRun(n));
            }
        },
        {
            key: "fetchWorkloads",
            value: async function(t) {
                let n;
                let r;
                let s;
                let u;
                let c;
                let f;
                let deployments;
                let statefulsets;
                let h;
                const _this = this;
                ({ cluster: n, namespace: r, ...s } = t);
                this.workloads.isLoading = true;
                this.workloads.data.clear();
                u = [
                    "deployments",
                    "statefulsets"
                ];
                c = await Promise.all(u.map((e)=>request.get(`apis/apps/v1${_this.getPath({
                        cluster: n,
                        namespace: r
                    })}/${e}`, s)));
                f = module96(c, 2);
                deployments = f[0];
                statefulsets = f[1];
                h = {
                    deployments,
                    statefulsets
                };
                u.forEach((e)=>{
                    if (h[e] && !module63(h[e].items)) {
                        const t = h[e].items.map((t)=>({
                                ...module105[e](t),
                                cluster: n,
                                type: e
                            }));
                        _this.workloads.data = [].concat(module61(_this.workloads.data), module61(t));
                    }
                });
                this.workloads.isLoading = false;
            }
        },
        {
            key: "fetchList",
            value: async function() {
                let t;
                let n;
                let workspace;
                let a;
                let s;
                let devops;
                let c;
                let f;
                let d;
                let p;
                const _this = this;
                const v = arguments;
                t = v.length > 0 && v[0] !== undefined ? v[0] : {};
                ({ cluster: n, workspace, namespace: a, more: s, devops, searchByApp: c, ...f } = t);
                this.list.isLoading = true;
                if (!(f.sortBy || f.ascending !== undefined)) {
                    f.sortBy = LIST_DEFAULT_ORDER[this.module] || "createTime";
                }
                if (!(f.limit !== Infinity && f.limit !== -1)) {
                    f.limit = -1;
                    f.page = 1;
                }
                f.limit = f.limit || 10;
                d = await request.get(this.getResourceUrl({
                    cluster: n,
                    workspace,
                    namespace: a,
                    devops
                }), this.getFilterParams(c, f));
                p = (module26(d, "items") || []).map((e)=>({
                        cluster: n,
                        namespace: a,
                        ..._this.mapper(e)
                    }));
                this.list.update({
                    data: s ? [].concat(module61(this.list.data), module61(p)) : p,
                    total: d.totalItems || d.total_count || p.length || 0,
                    ...f,
                    limit: Number(f.limit) || 10,
                    page: Number(f.page) || 1,
                    isLoading: false,
                    ...!this.list.silent ? {
                        selectedRowKeys: []
                    } : {}
                });
                return p;
            }
        },
        {
            key: "fetchListByMatchedDeployments",
            value: async function() {
                let t;
                let n;
                let r;
                let o;
                let a;
                let s;
                let u;
                let c;
                const _this = this;
                const d = arguments;
                t = d.length > 0 && d[0] !== undefined ? d[0] : {};
                ({ cluster: n, namespace: r, module: o, ...a } = t);
                this.list.isLoading = true;
                if (o) {
                    this.module = o;
                }
                s = a;
                u = await request.get(`/clusters/${n}/kapi/v1/namespaces/${r}/${this.module}`, s, {}, function() {
                    return {
                        items: []
                    };
                });
                c = Array.isArray(u.items) ? u.items.map((e)=>({
                        cluster: n,
                        module: o || _this.module,
                        ..._this.mapper(e)
                    })) : [];
                this.list.update({
                    data: c,
                    total: u.items.length || 0,
                    isLoading: false
                });
                return c;
            }
        }
    ]);
    return m;
})(module68);
b = module49(y.prototype, "endpoints", [
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
C = module49(y.prototype, "workload", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
w = module49(y.prototype, "workloads", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            data: [],
            isLoading: false
        };
    }
});
module49(y.prototype, "fetchEndpoints", [
    module14.action
], Object.getOwnPropertyDescriptor(y.prototype, "fetchEndpoints"), y.prototype);
module49(y.prototype, "create", [
    module14.action
], Object.getOwnPropertyDescriptor(y.prototype, "create"), y.prototype);
module49(y.prototype, "fetchWorkloads", [
    module14.action
], Object.getOwnPropertyDescriptor(y.prototype, "fetchWorkloads"), y.prototype);
module49(y.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(y.prototype, "fetchList"), y.prototype);
module49(y.prototype, "fetchListByMatchedDeployments", [
    module14.action
], Object.getOwnPropertyDescriptor(y.prototype, "fetchListByMatchedDeployments"), y.prototype);
export default y;
