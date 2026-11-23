import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-27.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-118.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import module41 from "./module-41.js";
import module61 from "./module-61.js";
import "./module-31.js";
import module58 from "./module-58.js";
import module44 from "./module-44.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import module189 from "./module-189.js";
import module63 from "./module-63.js";
import module198 from "./module-198.js";
import module26 from "./module-26.js";
import module14 from "./module-14.js";
import module68 from "./module-68.js";
import { getHostClusterName } from "./module-52.js";
let i;
let c;
let s;
let f;
let d;
let p;
let m;
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
i = ((e)=>{
    module55(T, e);
    let a;
    var S = P(T);
    function T(...a) {
        let e;
        module36(this, T);
        e = S.call(this, ...a);
        e.module = "cds";
        module65(e, "list", c, module88(e));
        module65(e, "clustersList", s, module88(e));
        module65(e, "detail", f, module88(e));
        module65(e, "syncResult", d, module88(e));
        module65(e, "summary", p, module88(e));
        e.getListUrl = function(t = {}) {
            return `${e.apiVersion}${e.getPath(t)}/applications${t.dryRun ? "?dryRun=All" : ""}`;
        };
        e.getResourceUrl = function(t = {}) {
            return `${e.apiVersion}${e.getPath(t)}/applications`;
        };
        e.getDetailUrl = function(t = {}) {
            return `${e.getListUrl(t)}/${t.name}`;
        };
        module65(e, "setSelectRowKeys", m, module88(e));
        return e;
    }
    module37(T, [
        {
            key: "getPath",
            value: function({ cluster, namespace, workspace, devops } = {}) {
                let l = "";
                if (cluster) {
                    l += `/klusters/${cluster}`;
                }
                if (workspace) {
                    l += `/workspaces/${workspace}`;
                }
                if (namespace) {
                    l += `/namespaces/${namespace}`;
                }
                if (devops) {
                    l += `/namespaces/${devops}`;
                }
                return l;
            }
        },
        {
            key: "fetchList",
            value: async function() {
                let t;
                let a;
                let r;
                let u;
                let i;
                let c;
                let s;
                let f;
                const _this = this;
                const p = arguments;
                t = p.length > 0 && p[0] !== undefined ? p[0] : {};
                a = t.devops;
                t.workspace;
                r = t.cluster;
                u = t.more;
                i = module58(t, [
                    "devops",
                    "workspace",
                    "cluster",
                    "more"
                ]);
                this.list.isLoading = true;
                if (!(i.limit !== Infinity && i.limit !== -1)) {
                    i.limit = -1;
                    i.page = 1;
                }
                i.limit = i.limit || 10;
                c = `${this.getResourceUrl({
                    namespace: a,
                    cluster: r
                })}`;
                s = await request.get(c, {
                    ...i
                }, {}, function() {
                    return [];
                });
                f = Array.isArray(s.items) ? s.items.map((e)=>({
                        ..._this.mapper({
                            ...e,
                            devops: a
                        })
                    })) : [];
                this.list.update({
                    data: u ? [].concat(module61(this.list.data), module61(f)) : f,
                    total: s.totalItems || s.total_count || f.length || 0,
                    ...i,
                    limit: Number(i.limit) || 10,
                    page: Number(i.page) || 1,
                    isLoading: false,
                    ...!this.list.silent ? {
                        selectedRowKeys: []
                    } : {}
                });
                return f;
            }
        },
        {
            key: "create",
            value: async function(t) {
                let a;
                let r;
                let l;
                let u;
                let o;
                a = t.data;
                r = t.devops;
                l = t.cluster;
                u = `${this.getResourceUrl({
                    namespace: r,
                    cluster: l
                })}`;
                o = await request.post(u, a);
                return o;
            }
        },
        {
            key: "updateSync",
            value: async function(t) {
                let a;
                let r;
                let l;
                let u;
                let o;
                a = t.data;
                r = t.application;
                l = t.devops;
                u = t.cluster;
                o = `${this.getResourceUrl({
                    namespace: l,
                    cluster: u
                })}/${r}/sync`;
                return this.submitting(request.post(o, a));
            }
        },
        {
            key: "update",
            value: async function(t, a) {
                let r;
                r = `${this.getResourceUrl({
                    namespace: t.devops,
                    cluster: t.cluster
                })}/${a.metadata.name}`;
                return this.submitting(request.put(r, a));
            }
        },
        {
            key: "patch",
            value: function(e, t) {
                const a = `${this.getResourceUrl({
                    namespace: e.devops,
                    cluster: e.cluster
                })}/${t.metadata.name}`;
                return this.submitting(request.put(a, t));
            }
        },
        {
            key: "delete",
            value: function(e) {
                const t = module189({
                    ...e,
                    namespace: e.devops
                }, "devops");
                return this.submitting(request.delete(`${this.getDetailUrl(t)}${t.isRelated ? "?cascade=true" : ""}`));
            }
        },
        {
            key: "fetchDetail",
            value: async function(t) {
                let a;
                let r;
                let l;
                let u;
                let o;
                let i;
                a = t.name;
                r = t.isSilent;
                l = t.devops;
                u = t.cluster;
                if (!r) {
                    this.isLoading = true;
                }
                o = await request.get(`${this.getResourceUrl({
                    namespace: l,
                    cluster: u
                })}/${a}`);
                i = this.mapper({
                    ...o,
                    devops: l
                });
                this.detail = i;
                this.isLoading = false;
                return i;
            }
        },
        {
            key: "getClustersList",
            value: (a = module44(module41.mark(function e(t) {
                let a;
                let r;
                let label;
                let u;
                let o;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                a = `${this.apiVersion}/clusters`;
                                e.next = 3;
                                return request.get(a, null, null, function() {
                                    return [];
                                });
                            case 3:
                                r = e.sent;
                                label = "default";
                                if (!globals.app.isMultiCluster) {
                                    e.next = 11;
                                    break;
                                }
                                e.next = 8;
                                return request.get("kapis/tenant.kubesphere.io/v1beta1/clusters");
                            case 8:
                                u = e.sent;
                                o = u.items.find((e)=>module198(e, 'metadata.labels["cluster-role.kubesphere.io/host"]'));
                                label = module26(o, "metadata.name", t || getHostClusterName());
                            case 11:
                                if (module63(r)) {
                                    this.clustersList = [
                                        {
                                            server: "https://kubernetes.default.svc",
                                            name: "in-cluster",
                                            label
                                        }
                                    ];
                                } else {
                                    this.clustersList = r.map((e)=>({
                                            ...e,
                                            label: e.name === "in-cluster" ? label : e.name
                                        }));
                                }
                                globals.hostClusterName = label;
                            case 13:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function(e) {
                return a.apply(this, arguments);
            })
        },
        {
            key: "fetchStatusSummary",
            value: async function(t) {
                let a;
                let r;
                let l;
                let u;
                a = t.devops;
                r = t.cluster;
                l = `${this.apiVersion}${this.getPath({
                    namespace: a,
                    cluster: r
                })}/application-summary`;
                u = await request.get(l);
                this.summary = u || {};
            }
        }
    ]);
    return T;
})(module68);
c = module49(i.prototype, "list", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            data: [],
            page: 1,
            limit: 10,
            total: 0,
            order: "",
            filters: {},
            isLoading: false,
            selectedRowKeys: []
        };
    }
});
s = module49(i.prototype, "clustersList", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
});
f = module49(i.prototype, "detail", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
d = module49(i.prototype, "syncResult", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            data: [],
            page: 1,
            total: 0,
            filters: {},
            isLoading: false
        };
    }
});
p = module49(i.prototype, "summary", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
m = module49(i.prototype, "setSelectRowKeys", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.list.selectedRowKeys = t;
        };
    }
});
module49(i.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "fetchList"), i.prototype);
module49(i.prototype, "create", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "create"), i.prototype);
module49(i.prototype, "updateSync", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "updateSync"), i.prototype);
module49(i.prototype, "update", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "update"), i.prototype);
module49(i.prototype, "patch", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "patch"), i.prototype);
module49(i.prototype, "delete", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "delete"), i.prototype);
module49(i.prototype, "fetchDetail", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "fetchDetail"), i.prototype);
module49(i.prototype, "getClustersList", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "getClustersList"), i.prototype);
module49(i.prototype, "fetchStatusSummary", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "fetchStatusSummary"), i.prototype);
export default i;
