import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-188.js";
import "unpacked/module-137.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import "unpacked/module-31.js";
import module58 from "unpacked/module-58.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module189 from "unpacked/module-189.js";
import module74 from "unpacked/module-74.js";
import module896 from "unpacked/module-896.js";
import module454 from "unpacked/module-454.js";
import module14 from "unpacked/module-14.js";
import { LIST_DEFAULT_ORDER } from "utils/constants";
import module105 from "utils/object.mapper";
import module244 from "unpacked/module-244.js";
import module68 from "stores/base";
import module120 from "stores/base.list";
let i;
let c;
let s;
let f;
function j(e) {
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
    module55(G, e);
    let y;
    var F = j(G);
    function G(...a_1) {
        let e;
        module36(this, G);
        e = F.call(this, ...a_1);
        e.module = "gateways";
        e.getOldGatewayUrl = function(t) {
            return `kapis/resources.kubesphere.io/v1alpha2${e.getPath(t)}/router`;
        };
        e.getUrlNamespace = function(e) {
            const e_workspace = e.workspace;
            return e.namespace || e_workspace || "";
        };
        e.getUrlParams = function({ workspace, namespace, cluster }) {
            if (workspace && !namespace) {
                return {
                    workspace,
                    cluster
                };
            }
            return {
                namespace,
                cluster
            };
        };
        e.gatewayUrl = function({ cluster, namespace, workspace, gatewayName = "" }) {
            const o = e.getUrlNamespace({
                workspace,
                namespace
            });
            const i = e.getUrlParams({
                workspace,
                namespace,
                cluster
            });
            return `${e.apiVersion}${e.getPath(i)}/${e.module}${e.isNotClusterGateway(o) ? `/${gatewayName}` : ""}`;
        };
        e.gatIngressUrl = function({ cluster, namespace, workspace }) {
            const l = e.getUrlParams({
                workspace,
                namespace,
                cluster
            });
            return `kapis/gateway.kubesphere.io/v1alpha2${e.getPath(l)}/availableingressclassscopes`;
        };
        e.gatewayeditUrl = function({ cluster, namespace, gatewayName = "", workspace }) {
            const o = e.getUrlNamespace({
                workspace,
                namespace
            });
            const i = e.getUrlParams({
                workspace,
                namespace,
                cluster
            });
            return `/${e.isNotClusterGateway(o) ? "k" : ""}apis/gateway.kubesphere.io/v1alpha1${e.getPath(i)}/${e.module}${e.isNotClusterGateway(o) ? `/${gatewayName}` : "/kubesphere-router-cluster"}`;
        };
        e.gatewayPodsUrl = function({ cluster, namespace, gatewayName = "", workspace }) {
            const o = e.getUrlNamespace({
                workspace,
                namespace
            });
            const i = e.getUrlParams({
                workspace,
                namespace,
                cluster
            });
            return `${cluster ? `clusters/${cluster}/` : ""}${e.apiVersion}${e.getPath(i)}/${e.module}${e.isNotClusterGateway(o) ? `/${gatewayName}` : "/kubesphere-router-cluster"}`;
        };
        module65(e, "gateway", c, module88(e));
        module65(e, "podList", s, module88(e));
        module65(e, "logs", f, module88(e));
        return e;
    }
    module37(G, [
        {
            key: "getPath",
            value: function({ cluster, namespace, workspace } = {}) {
                let n = "";
                if (cluster) {
                    n += `/klusters/${cluster}`;
                }
                if (workspace && !namespace) {
                    n += `/workspaces/${workspace}`;
                }
                if (namespace) {
                    n += `/namespaces/${namespace}`;
                }
                return n;
            }
        },
        {
            key: "isNotClusterGateway",
            value: function(e) {
                return e && e !== "kubesphere-controls-system";
            }
        },
        {
            key: "getGatewayAppVersions",
            value: async function(t) {
                let a;
                let r;
                let n;
                a = t.cluster;
                r = `${a ? `/clusters/${a}` : ""}/${this.apiVersion}/appversions`;
                n = await this.submitting(request.get(r));
                return n;
            }
        },
        {
            key: "getHelmChart",
            value: async function(t) {
                let a;
                let r;
                let n;
                a = t.cluster;
                r = t.appversion;
                n = `${a ? `/clusters/${a}` : ""}/${this.apiVersion}/appversions/${r}/values`;
                return this.submitting(request.get(n));
            }
        },
        {
            key: "getGateway",
            value: async function(t) {
                let a;
                let r;
                let n;
                let l;
                let i;
                let c;
                let s;
                let f;
                let d;
                let p;
                ({ cluster: a, namespace: r, workspace: n, type: l, ...i } = t);
                this.gateway.isLoading = true;
                c = this.getListUrl({
                    cluster: a,
                    workspace: n,
                    namespace: r
                });
                s = {
                    labelSelector: `kubesphere.io/gateway-type=${l}`,
                    ...i
                };
                f = await request.get(c, s);
                d = module26(f, "items[0]", null);
                p = {};
                if (!module63(d)) {
                    p = module105.gateway(d);
                    if (p?.isDeleteLoading === true) {
                        p = {};
                    }
                }
                this.detail = p;
                this.gateway.data = p;
                this.gateway.isLoading = false;
                return p;
            }
        },
        {
            key: "getGatewayReplica",
            value: async function(t) {
                let a;
                let r;
                let n;
                a = `${this.gatewayPodsUrl(t)}/pods`;
                r = await this.submitting(request.get(a));
                n = [];
                if (r && r.totalItems > 0) {
                    n = r.items.map((e)=>module105.pods(e));
                }
                return n;
            }
        },
        {
            key: "getGatewayByProject",
            value: async function(t) {
                let r;
                let n;
                let l;
                let i;
                let c;
                let s;
                let f;
                let d;
                let p;
                ({ cluster: r, workspace: n, namespace: l, ...i } = t);
                this.gateway.isLoading = true;
                c = this.getListUrl({
                    cluster: r,
                    workspace: n,
                    namespace: l
                });
                s = await request.get(c, i, null, function() {});
                f = module26(s, "items", []);
                d = module896(f, function(e) {
                    return module105.gateway(e);
                })?.filter(function(e) {
                    return !e.isDeleteLoading;
                });
                p = module454(d, function(e) {
                    return e.gatewayType === "project";
                });
                this.detail = p;
                this.gateway.data = p;
                this.gateway.isLoading = false;
                return d;
            }
        },
        {
            key: "getNewGatewayByProject",
            value: async function(t) {
                let a;
                let r;
                let n;
                this.gateway.isLoading = true;
                a = this.gatIngressUrl(t);
                r = await request.get(a, null, null, function() {});
                n = module896(r, function(e) {
                    return module105.ingressClassScopes(e);
                });
                this.gateway.isLoading = false;
                return n;
            }
        },
        {
            key: "getGatewayByWorkspace",
            value: async function(t) {
                let r;
                let n;
                let l;
                let u;
                let i;
                let c;
                let s;
                let f;
                let d;
                r = t.cluster;
                n = t.workspace;
                l = t.type;
                this.gateway.isLoading = true;
                u = this.getListUrl({
                    cluster: r,
                    workspace: n
                });
                i = {
                    labelSelector: `kubesphere.io/gateway-type=${l}`,
                    includeUpper: true
                };
                c = await request.get(u, i);
                s = module26(c, "items", []);
                f = module896(s, function(e) {
                    return module105.gateway(e);
                })?.filter(function(e) {
                    return !e.isDeleteLoading;
                });
                d = module454(f, function(e) {
                    return e.gatewayType === "workspace";
                });
                this.detail = d;
                this.gateway.data = d;
                this.gateway.isLoading = false;
                return f;
            }
        },
        {
            key: "addGateway",
            value: async function(t, a) {
                return this.submitting(request.post(this.getListUrl(t), a));
            }
        },
        {
            key: "editGateway",
            value: async function(t, a) {
                return this.submitting(request.put(this.getDetailUrl(t), a));
            }
        },
        {
            key: "deleteGateway",
            value: (y = module44(module41.mark(function e(t) {
                let a;
                let r;
                let n;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                a = t.cluster;
                                r = t.namespace;
                                n = t.workspace;
                                if (!t.isOld) {
                                    e.next = 3;
                                    break;
                                }
                                return e.abrupt("return", this.submitting(request.delete(this.getOldGatewayUrl({
                                    cluster: a,
                                    namespace: r
                                }))));
                            case 3:
                                return e.abrupt("return", this.submitting(request.delete(this.gatewayeditUrl({
                                    cluster: a,
                                    namespace: r,
                                    workspace: n
                                }))));
                            case 4:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function(e) {
                return y.apply(this, arguments);
            })
        },
        {
            key: "updateGateway",
            value: async function(t, a) {
                let r;
                r = `${this.gatewayeditUrl(t)}/upgrade`;
                return this.submitting(request.post(r, a));
            }
        },
        {
            key: "getGatewayLogs",
            value: async function(t) {
                let a;
                let r;
                let n;
                let l;
                let i;
                let c;
                let s;
                a = t.cluster;
                r = t.namespace;
                n = t.gatewayName;
                t.component;
                l = t.workspace;
                i = module58(t, [
                    "cluster",
                    "namespace",
                    "gatewayName",
                    "component",
                    "workspace"
                ]);
                this.logs.isLoading = true;
                c = await request.get(`${this.gatewayPodsUrl({
                    cluster: a,
                    namespace: r,
                    gatewayName: n,
                    workspace: l
                })}/logs`, {
                    ...i,
                    start_time: i.start_time ? Math.floor(i.start_time / 1000) : undefined,
                    end_time: i.end_time ? Math.floor(i.end_time / 1000) : undefined,
                    container_query: "controller",
                    cluster: a
                }, {}, function() {
                    return [];
                });
                s = module26(c, "query.records") || [];
                this.logs = {
                    data: s,
                    total: module26(c, "query.total") || s.length || 0,
                    ...i,
                    size: Number(i.size) || 10,
                    from: Number(i.from) || 0,
                    isLoading: false
                };
                return s;
            }
        },
        {
            key: "exportLinkFactory",
            value: function({ cluster, namespace, gatewayName, workspace, start_time, end_time, ...rest }) {
                const c = `${this.gatewayPodsUrl({
                    cluster,
                    namespace,
                    gatewayName,
                    workspace
                })}/logs`;
                return `/${c}?${module244.stringify({
                    sort: "asc",
                    ...rest,
                    start_time: Math.floor(start_time / 1000),
                    end_time: Math.floor(end_time / 1000),
                    operation: "export",
                    cluster
                })}`;
            }
        },
        {
            key: "getGatewayPods",
            value: async function(t) {
                let a;
                let r;
                let n;
                a = `${this.gatewayPodsUrl(t)}/pods`;
                r = await this.submitting(request.get(a, {
                    limit: 10,
                    sortBy: "createTime"
                }));
                n = [];
                if (r && r.totalItems > 0) {
                    n = r.items.map((e)=>module105.pods(e));
                }
                this.gateway.data.pods = n;
                return n;
            }
        },
        {
            key: "getGatewayPodsList",
            value: async function(t) {
                let a;
                let r;
                let l;
                let i;
                let c;
                let s;
                let f;
                let d;
                let p;
                a = t.cluster;
                t.name;
                r = t.gatewayName;
                l = t.namespace;
                i = t.workspace;
                c = t.more;
                t.component;
                s = t.search;
                f = module58(t, [
                    "cluster",
                    "name",
                    "gatewayName",
                    "namespace",
                    "workspace",
                    "more",
                    "component",
                    "search"
                ]);
                this.podList.isLoading = true;
                if (!(f.sortBy || f.ascending !== undefined)) {
                    f.sortBy = LIST_DEFAULT_ORDER[this.module] || "createTime";
                }
                if (!(f.limit !== Infinity && f.limit !== -1)) {
                    f.limit = -1;
                    f.page = 1;
                }
                f.limit = f.limit || 10;
                d = await request.get(`${this.gatewayPodsUrl({
                    cluster: a,
                    namespace: l,
                    gatewayName: r,
                    workspace: i
                })}/pods`, {
                    ...f,
                    name: s
                }, {}, function() {
                    return [];
                });
                p = (module26(d, "items") || []).map((e)=>({
                        cluster: a,
                        namespace: e.metadata.name.split("kubesphere-router-")[1],
                        ...module105.pods(e)
                    }));
                this.podList.update({
                    data: c ? [].concat(module61(this.podList.data), module61(p)) : p,
                    total: d.totalItems || d.total_count || p.length || 0,
                    ...f,
                    limit: Number(f.limit) || 10,
                    page: Number(f.page) || 1,
                    isLoading: false,
                    ...!this.podList.silent ? {
                        selectedRowKeys: []
                    } : {}
                });
                return [];
            }
        },
        {
            key: "scale",
            value: function(e, t) {
                const a = module14.toJS(this.gateway.data._originData);
                module74(a, "spec.values.controller.replicaCount", t);
                module74(a, "metadata.resourceVersion", this.gateway.data.resourceVersion);
                return this.editGateway(e, a);
            }
        },
        {
            key: "fetchList",
            value: async function(t) {
                let r;
                let l;
                let i;
                let c;
                let s;
                let f;
                let d;
                let p;
                let m;
                r = t.cluster;
                l = t.namespace;
                i = t.workspace;
                c = t.more;
                t.component;
                s = t.type;
                f = module58(t, [
                    "cluster",
                    "namespace",
                    "workspace",
                    "more",
                    "component",
                    "type"
                ]);
                this.list.isLoading = true;
                if (!(f.sortBy || f.ascending !== undefined)) {
                    f.sortBy = LIST_DEFAULT_ORDER[this.module] || "createTime";
                }
                if (!(f.limit !== Infinity && f.limit !== -1)) {
                    f.limit = -1;
                    f.page = 1;
                }
                f.limit = f.limit || 10;
                d = await request.get(`${this.apiVersion}${this.getPath({
                    cluster: r,
                    workspace: i,
                    namespace: l
                })}/${s === "workspace" ? "projectgateways" : "gateways"}`, {
                    ...f
                }, {}, function() {
                    return [];
                });
                p = (module26(d, "items") || []).map((e)=>({
                        cluster: r,
                        namespace: e.metadata.name.split("kubesphere-router-")[1],
                        ...module105.gateway(e)
                    }))?.filter(function(e) {
                    return !e.isDeleteLoading;
                });
                m = module189(f, "labelSelector");
                this.list.update({
                    data: c ? [].concat(module61(this.list.data), module61(p)) : p,
                    total: d.totalItems || d.total_count || p.length || 0,
                    ...m,
                    limit: Number(f.limit) || 10,
                    page: Number(f.page) || 1,
                    isLoading: false,
                    ...!this.list.silent ? {
                        selectedRowKeys: []
                    } : {}
                });
                return [];
            }
        }
    ]);
    return G;
})(module68);
c = module49(i.prototype, "gateway", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            data: {},
            isLoading: true
        };
    }
});
s = module49(i.prototype, "podList", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return new module120;
    }
});
f = module49(i.prototype, "logs", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return new module120;
    }
});
module49(i.prototype, "getGatewayAppVersions", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "getGatewayAppVersions"), i.prototype);
module49(i.prototype, "getHelmChart", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "getHelmChart"), i.prototype);
module49(i.prototype, "getGateway", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "getGateway"), i.prototype);
module49(i.prototype, "getGatewayReplica", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "getGatewayReplica"), i.prototype);
module49(i.prototype, "getGatewayByProject", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "getGatewayByProject"), i.prototype);
module49(i.prototype, "getNewGatewayByProject", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "getNewGatewayByProject"), i.prototype);
module49(i.prototype, "getGatewayByWorkspace", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "getGatewayByWorkspace"), i.prototype);
module49(i.prototype, "addGateway", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "addGateway"), i.prototype);
module49(i.prototype, "editGateway", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "editGateway"), i.prototype);
module49(i.prototype, "deleteGateway", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "deleteGateway"), i.prototype);
module49(i.prototype, "updateGateway", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "updateGateway"), i.prototype);
module49(i.prototype, "getGatewayLogs", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "getGatewayLogs"), i.prototype);
module49(i.prototype, "getGatewayPods", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "getGatewayPods"), i.prototype);
module49(i.prototype, "getGatewayPodsList", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "getGatewayPodsList"), i.prototype);
module49(i.prototype, "scale", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "scale"), i.prototype);
module49(i.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "fetchList"), i.prototype);
export default i;
