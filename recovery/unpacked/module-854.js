import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-27.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import module61 from "./module-61.js";
import "./module-58.js";
import "./module-44.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import module14 from "./module-14.js";
import module26 from "./module-26.js";
import module189 from "./module-189.js";
import { LIST_DEFAULT_ORDER } from "./module-72.js";
import module105 from "./module-105.js";
import module_68 from "./module-68.js";
let o;
function S(e) {
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
o = ((module_68_1)=>{
    module55(C, module_68_1);
    var _ = S(C);
    function C(...a) {
        let e;
        module36(this, C);
        e = _.call(this, ...a);
        e.module = "nodegroups";
        e.getFilterParams = function(e) {
            const t = {
                ...e
            };
            if (t.app) {
                t.labelSelector = t.labelSelector || "";
                t.labelSelector += `app.kubernetes.io/name=${t.app}`;
                delete t.app;
            }
            if (t.role) {
                t.labelSelector = t.labelSelector || "";
                t.labelSelector += `node-role.kubernetes.io/${t.role}=`;
                delete t.role;
            }
            return t;
        };
        e.getResourceUrl = function(t = {}) {
            return `${e.apiVersion}${e.getPath(t)}/${e.module}`;
        };
        return e;
    }
    module37(C, [
        {
            key: "fetchChildResource",
            value: async function() {
                let t;
                let a;
                let r;
                let o;
                let name;
                let c;
                let s;
                let f;
                const _this = this;
                const p = arguments;
                t = p.length > 0 && p[0] !== undefined ? p[0] : {};
                ({ kind: a, cluster: r, more: o, group: name, ...c } = t);
                this.list.isLoading = true;
                if (!(c.sortBy || c.ascending !== undefined)) {
                    c.sortBy = LIST_DEFAULT_ORDER[this.module] || "createTime";
                }
                if (!(c.limit !== Infinity && c.limit !== -1)) {
                    c.limit = -1;
                    c.page = 1;
                }
                c.limit = c.limit || 10;
                s = await request.get(`${this.getDetailUrl({
                    cluster: r,
                    name
                })}/${a}`, this.getFilterParams(c));
                f = (module26(s, "items") || []).map((e)=>({
                        cluster: r,
                        ..._this.edgeNodeMapper(e)
                    }));
                this.list.update({
                    data: o ? [].concat(module61(this.list.data), module61(f)) : f,
                    total: s.totalItems || s.totalCount || s.total_count || f.length || 0,
                    ...c,
                    limit: Number(c.limit) || 10,
                    page: Number(c.page) || 1,
                    isLoading: false,
                    ...!this.list.silent ? {
                        selectedRowKeys: []
                    } : {}
                });
                return {
                    data: f,
                    total: s.totalItems
                };
            }
        },
        {
            key: "fetchResourceList",
            value: async function(t) {
                let a;
                let r;
                let l;
                let u;
                let o;
                a = t.cluster;
                r = t.namespace;
                l = `/kapis/resources.kubesphere.io/v1alpha3${this.getPath({
                    cluster: a
                })}/${this.module}${r ? `?labelSelector=apps.edgewize.io/namespace-${r}` : ""}`;
                u = await request.get(l);
                o = module26(u, "items");
                return o;
            }
        },
        {
            key: "boundNamespace",
            value: async function(t) {
                let a;
                let r;
                let l;
                a = t.cluster;
                r = t.group;
                l = t.namespace;
                return this.submitting(request.post(`${this.getDetailUrl({
                    cluster: a,
                    name: r
                })}/namespaces/${l}`));
            }
        },
        {
            key: "unboundNamespace",
            value: async function(t) {
                let a;
                let r;
                let l;
                a = t.cluster;
                r = t.group;
                l = t.namespace;
                return this.submitting(request.delete(`${this.getDetailUrl({
                    cluster: a,
                    name: r
                })}/namespaces/${l}`));
            }
        },
        {
            key: "batchBoundNamespaces",
            value: async function(t) {
                let a;
                let r;
                let l;
                let u;
                let o;
                a = t.cluster;
                r = t.group;
                l = t.namespaces;
                u = `${this.getDetailUrl({
                    cluster: a,
                    name: r
                })}/namespaces`;
                o = l.map((e)=>({
                        op: "add",
                        path: `/metadata/labels/apps.edgewize.io~1namespace-${e}`,
                        value: ""
                    }));
                return this.submitting(request.patch(u, o));
            }
        },
        {
            key: "batchUnboundNamespaces",
            value: async function(t) {
                let a;
                let r;
                let l;
                let u;
                let o;
                a = t.cluster;
                r = t.group;
                l = t.namespaces;
                u = `${this.getDetailUrl({
                    cluster: a,
                    name: r
                })}/namespaces`;
                o = l.map((e)=>({
                        op: "remove",
                        path: `/metadata/labels/apps.edgewize.io~1namespace-${e}`,
                        value: ""
                    }));
                return this.submitting(request.patch(u, o));
            }
        },
        {
            key: "addGroupNode",
            value: async function(t) {
                let a;
                let r;
                let l;
                a = t.cluster;
                r = t.group;
                l = t.node;
                return this.submitting(request.post(`${this.getDetailUrl({
                    cluster: a,
                    name: r
                })}/nodes/${l}`));
            }
        },
        {
            key: "fetchAllNamespaces",
            value: async function() {
                let t;
                let a;
                let r;
                let l;
                let o;
                const _this = this;
                const c = arguments;
                t = c.length > 0 && c[0] !== undefined ? c[0] : {};
                ({ cluster: a, ...r } = t);
                l = await request.get(`${this.getResourceUrl({
                    cluster: a
                })}/namespaces`, r);
                o = (module26(l, "items") || []).map((e)=>({
                        cluster: a,
                        ..._this.edgeNodeMapper(e)
                    }));
                return o;
            }
        },
        {
            key: "fetchListProjectGroups",
            value: async function() {
                let t;
                let a;
                let workspace;
                let namespace;
                let i;
                let devops;
                let s;
                let f;
                let d;
                const _this = this;
                const m = arguments;
                t = m.length > 0 && m[0] !== undefined ? m[0] : {};
                ({ cluster: a, workspace, namespace, more: i, devops, ...s } = t);
                this.list.isLoading = true;
                if (!(s.sortBy || s.ascending !== undefined)) {
                    s.sortBy = LIST_DEFAULT_ORDER[this.module] || "createTime";
                }
                if (!(s.limit !== Infinity && s.limit !== -1)) {
                    s.limit = -1;
                    s.page = 1;
                }
                s.limit = s.limit || 10;
                f = await request.get(this.getResourceUrl({
                    cluster: a,
                    workspace,
                    namespace,
                    devops
                }), this.getFilterParams(s));
                d = (module26(f, "items") || []).map((e)=>({
                        cluster: a,
                        namespace,
                        workspace,
                        ..._this.mapper(e)
                    }));
                this.list.update({
                    data: i ? [].concat(module61(this.list.data), module61(d)) : d,
                    total: f.totalItems || f.totalCount || f.total_count || d.length || 0,
                    ...module189(s, "labelSelector"),
                    limit: Number(s.limit) || 10,
                    page: Number(s.page) || 1,
                    isLoading: false,
                    ...!this.list.silent ? {
                        selectedRowKeys: []
                    } : {}
                });
                return d;
            }
        },
        {
            key: "edgeNodeMapper",
            get: function() {
                return module105.edgenodes;
            }
        }
    ]);
    return C;
})(module_68);
module49(o.prototype, "fetchChildResource", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "fetchChildResource"), o.prototype);
module49(o.prototype, "fetchResourceList", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "fetchResourceList"), o.prototype);
module49(o.prototype, "boundNamespace", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "boundNamespace"), o.prototype);
module49(o.prototype, "unboundNamespace", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "unboundNamespace"), o.prototype);
module49(o.prototype, "batchBoundNamespaces", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "batchBoundNamespaces"), o.prototype);
module49(o.prototype, "batchUnboundNamespaces", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "batchUnboundNamespaces"), o.prototype);
module49(o.prototype, "addGroupNode", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "addGroupNode"), o.prototype);
module49(o.prototype, "fetchListProjectGroups", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "fetchListProjectGroups"), o.prototype);
export default o;
