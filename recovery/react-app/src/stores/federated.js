import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-30.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
import "unpacked/module-138.js";
import "unpacked/module-98.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-38.js";
import "unpacked/module-64.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import "unpacked/module-45.js";
import "unpacked/module-118.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import module41 from "unpacked/module-41.js";
import module61 from "unpacked/module-61.js";
import module31 from "unpacked/module-31.js";
import module96 from "utils/babel-helpers/slicedToArray";
import module58 from "unpacked/module-58.js";
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
import module74 from "unpacked/module-74.js";
import module26 from "unpacked/module-26.js";
import module321 from "unpacked/module-321.js";
import module482 from "unpacked/module-482.js";
import module136 from "unpacked/module-136.js";
import module63 from "unpacked/module-63.js";
import module14 from "unpacked/module-14.js";
import { LimitsEqualRequests, withDryRun } from "utils/index";
import module105 from "utils/object.mapper";
import { MODULE_KIND_MAP } from "utils/constants";
import module68 from "stores/base";
import module120 from "stores/base.list";
let u;
let c;
let f;
let d;
let p;
let h;
let v;
let m;
let g;
let y;
let b;
let C;
function Z(e) {
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
u = ((e)=>{
    module55($, e);
    let r;
    let G;
    var Y = Z($);
    function $(e) {
        let t;
        module36(this, $);
        t = Y.call(this, e.module);
        t.list = new module120;
        module65(t, "detail", c, module88(t));
        module65(t, "initializing", f, module88(t));
        module65(t, "resources", d, module88(t));
        module65(t, "isResourcesLoading", p, module88(t));
        module65(t, "isScheduleDeployment", h, module88(t));
        module65(t, "renderScheduleTab", v, module88(t));
        module65(t, "scheduleTemplate", m, module88(t));
        t.deployedScheduleTemplate = {};
        t.isScheduleProject = false;
        t.getListUrl = function(e) {
            return `${t.apiVersion}${t.getPath(e)}/federated${e.module || t.module}${e.dryRun ? "?dryRun=All" : ""}`;
        };
        t.getScheduleListUrl = function(e) {
            return `${t.scheduleApiVersion}/${t.getPath(e)}/replicaschedulingpreferences`;
        };
        t.getDetailUrl = function(e) {
            return `${t.getListUrl(e)}/${e.name}`;
        };
        t.getWatchListUrl = function(e = {}) {
            return `${t.apiVersion}/watch${t.getPath(e)}/federated${t.module}`;
        };
        t.getWatchUrl = function(e = {}) {
            return `${t.getWatchListUrl(e)}/${e.name}`;
        };
        t.getResourceUrl = function(e = {}) {
            return `kapis/types.kubefed.io/v1beta1${t.getPath(e)}/federated${t.module}`;
        };
        module65(t, "switchSchedule", g, module88(t));
        module65(t, "setScheduleTemplate", y, module88(t));
        module65(t, "setMetadata", b, module88(t));
        module65(t, "ifRenderScheduleTab", C, module88(t));
        t.resourceStore = e;
        return t;
    }
    module37($, [
        {
            key: "getPath",
            value: function({ namespace }) {
                let n = "";
                if (namespace) {
                    n += `/namespaces/${namespace}`;
                }
                return n;
            }
        },
        {
            key: "fetchList",
            value: (G = module44(module41.mark(function e() {
                let t;
                let n;
                let r;
                let i;
                let u;
                let c;
                let f;
                let d;
                let p;
                let h;
                let v;
                const _this = this;
                const g = arguments;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                (t = g.length > 0 && g[0] !== undefined ? g[0] : {}).workspace;
                                n = t.namespace;
                                r = t.more;
                                i = module58(t, [
                                    "workspace",
                                    "namespace",
                                    "more"
                                ]);
                                this.list.isLoading = true;
                                if (!(i.sortBy || i.ascending !== undefined)) {
                                    i.sortBy = "createTime";
                                }
                                if (!(i.limit !== Infinity && i.limit !== -1)) {
                                    i.limit = -1;
                                    i.page = 1;
                                }
                                i.limit = i.limit || 10;
                                e.next = 7;
                                return request.get(this.getResourceUrl({
                                    namespace: n
                                }), this.getFilterParams(i));
                            case 7:
                                u = e.sent;
                                c = module26(u, "items", []).map(module105.federated(this.mapper));
                                if (!this.resourceStore.getResourceUrl) {
                                    e.next = 18;
                                    break;
                                }
                                f = {};
                                c.forEach((e)=>{
                                    e.clusters.forEach(({ name })=>{
                                        f[name] = f[name] || [];
                                        f[name].push(e.name);
                                    });
                                });
                                e.next = 14;
                                return Promise.all(Object.entries(f).map((e)=>{
                                    const t = module96(e, 2);
                                    const r = t[0];
                                    const o = t[1];
                                    return request.get(_this.resourceStore.getResourceUrl({
                                        cluster: r,
                                        namespace: n
                                    }), {
                                        names: o.join(",")
                                    }, null, function() {});
                                }));
                            case 14:
                                d = e.sent;
                                p = Object.keys(f);
                                h = module321(c, "name");
                                d.forEach((e, t)=>{
                                    const n = p[t];
                                    if (e && e.items) {
                                        e.items.forEach((e)=>{
                                            const t = _this.mapper(e);
                                            const t_name = t.name;
                                            if (h[t_name]) {
                                                h[t_name].resources = h[t_name].resources || {};
                                                h[t_name].resources[n] = {
                                                    cluster: n,
                                                    ...t
                                                };
                                            }
                                        });
                                    }
                                });
                            case 18:
                                v = Number(i.page) !== 1 && i.page ? this.list.total : c.length + (u.metadata.remainingItemCount || 0);
                                this.list.update({
                                    data: r ? [].concat(module61(this.list.data), module61(c)) : c,
                                    total: v || 0,
                                    ...i,
                                    limit: Number(i.limit) || 10,
                                    page: Number(i.page) || 1,
                                    isLoading: false,
                                    ...!this.list.silent ? {
                                        selectedRowKeys: []
                                    } : {}
                                });
                                return e.abrupt("return", c);
                            case 21:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function() {
                return G.apply(this, arguments);
            })
        },
        {
            key: "fetchListByK8s",
            value: async function() {
                let t;
                let namespace;
                let r;
                let a;
                let i;
                let l;
                let u;
                const _this = this;
                const f = arguments;
                t = f.length > 0 && f[0] !== undefined ? f[0] : {};
                ({ namespace, module: r, ...a } = t);
                this.list.isLoading = true;
                if (r) {
                    this.module = r;
                }
                i = a;
                l = await request.get(this.getListUrl({
                    namespace,
                    module: r
                }), i);
                u = l.items.map((e)=>({
                        module: r || _this.module,
                        ...module105.federated(_this.mapper)(e)
                    }));
                LimitsEqualRequests(u);
                this.list.update({
                    data: u,
                    total: l.items.length,
                    isLoading: false
                });
                return u;
            }
        },
        {
            key: "fetchDetail",
            value: async function(t) {
                let n;
                let r;
                this.isLoading = true;
                n = await request.get(this.getDetailUrl(t));
                r = module105.federated(this.mapper)(n);
                await this.checkIfSchedule(r);
                this.detail = r;
                this.isLoading = false;
                return r;
            }
        },
        {
            key: "getAllScheduleProject",
            value: async function(t) {
                return await request.get(this.getScheduleListUrl(t));
            }
        },
        {
            key: "checkIfSchedule",
            value: async function(t) {
                let n;
                let r;
                let a;
                n = await this.getAllScheduleProject(t);
                if ((r = n.items.filter((e)=>e.metadata.name === t.name)).length > 0) {
                    this.isScheduleProject = true;
                    this.deployedScheduleTemplate = module136(r[0]);
                    a = module26(t, "_originData.metadata", {});
                    module74(this.deployedScheduleTemplate, "metadata", a);
                } else {
                    this.isScheduleProject = false;
                    this.deployedScheduleTemplate = {};
                }
            }
        },
        {
            key: "fetchScheduleData",
            value: async function(t) {
                return await request.get(`${this.getScheduleListUrl(t)}/${t.name}`);
            }
        },
        {
            key: "updateScheduleYaml",
            value: async function(t, n) {
                let r;
                let a;
                r = await this.fetchScheduleData(t);
                a = module26(r, "metadata.resourceVersion");
                module74(n, "metadata.resourceVersion", a);
                await request.put(`${this.getScheduleListUrl(t)}/${t.name}`, n);
            }
        },
        {
            key: "fetchResources",
            value: async function(t) {
                let n;
                let r;
                let a;
                let i;
                const _this = this;
                ({ clusters: n, ...r } = t);
                this.isResourcesLoading = true;
                a = await Promise.all(n.map((e)=>request.get(_this.resourceStore.getDetailUrl({
                        ...r,
                        cluster: e
                    }), null, null, function() {})));
                i = {};
                a.forEach((e, t)=>{
                    i[n[t]] = {
                        ..._this.mapper(e),
                        cluster: n[t]
                    };
                });
                this.resources = i;
                this.isResourcesLoading = false;
            }
        },
        {
            key: "create",
            value: function(e, n = {}) {
                const _this = this;
                const r = [];
                if (e.metadata) {
                    r.push({
                        url: this.getListUrl(n),
                        data: e
                    });
                } else {
                    Object.keys(e).forEach((o)=>{
                        if (e[o].kind) {
                            const a = e[o].kind.replace("Federated", "");
                            const i = module482(MODULE_KIND_MAP, function(e) {
                                return e === a;
                            });
                            if (i) {
                                r.push({
                                    url: _this.getListUrl({
                                        ...n,
                                        module: i
                                    }),
                                    data: e[o]
                                });
                            }
                        }
                    });
                }
                return this.submitting(withDryRun(r));
            }
        },
        {
            key: "scheduleCreate",
            value: function(data, t = {}) {
                const n = [];
                n.push({
                    url: this.getScheduleListUrl(t),
                    data
                });
                const r = n.map((e)=>request.post(e.url, e.data));
                return Promise.all(r);
            }
        },
        {
            key: "updateResource",
            value: function(e, t) {
                this.isResourcesLoading = true;
                Object.assign(this.resources, module31({}, e, {
                    ...this.mapper(t),
                    cluster: e
                }));
                this.isResourcesLoading = false;
            }
        },
        {
            key: "deleteSchedule",
            value: async function(t) {
                return request.delete(`${this.getScheduleListUrl(t)}/${t.name}`);
            }
        },
        {
            key: "stop",
            value: (r = module44(module41.mark(function e(t) {
                let n;
                let r;
                let i;
                let l;
                let s;
                let u;
                let c;
                let f;
                let overrides;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                n = t.name;
                                r = t.cluster;
                                i = t.namespace;
                                l = {
                                    name: n,
                                    cluster: r,
                                    namespace: i
                                };
                                s = [];
                                u = {};
                                if (this.resourceStore.module !== "deployments") {
                                    e.next = 8;
                                    break;
                                }
                                e.next = 7;
                                return request.get(`${this.getScheduleListUrl(l)}/${l.name}`, {}, {}, function() {
                                    return {};
                                });
                            case 7:
                                u = e.sent;
                            case 8:
                                c = !module63(u);
                                f = module61(module14.toJS(t._originData.spec.overrides));
                                if (!c) {
                                    e.next = 14;
                                    break;
                                }
                                s.push(request.patch(`${this.getScheduleListUrl(l)}/${l.name}`, {
                                    spec: {
                                        totalReplicas: 0
                                    }
                                }));
                                e.next = 17;
                                break;
                            case 14:
                                overrides = f.map((e)=>{
                                    if (e.clusterOverrides) {
                                        e.clusterOverrides = e.clusterOverrides.map((e)=>{
                                            e.value = 0;
                                            return e;
                                        });
                                        return e;
                                    }
                                    return e = {
                                        ...e,
                                        clusterOverrides: [
                                            {
                                                path: "/spec/replicas",
                                                value: 0
                                            }
                                        ]
                                    };
                                });
                                s.push(request.patch(this.getDetailUrl({
                                    name: n,
                                    cluster: r,
                                    namespace: i
                                }), {
                                    spec: {
                                        overrides
                                    }
                                }));
                                return e.abrupt("return", this.submitting(Promise.all(s)));
                            case 17:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function(e) {
                return r.apply(this, arguments);
            })
        },
        {
            key: "fetchDetailSilent",
            value: async function(t) {
                let n;
                let r;
                let a;
                let i;
                const _this = this;
                ({ clusters: n, ...r } = t);
                a = await Promise.all(n.map((e)=>request.get(_this.resourceStore.getDetailUrl({
                        ...r,
                        cluster: e
                    }), null, null, function() {})));
                i = {};
                a.forEach((e, t)=>{
                    i[n[t]] = {
                        ..._this.mapper(e),
                        cluster: n[t]
                    };
                });
                return i;
            }
        },
        {
            key: "fetchListByMatchedDeployments",
            value: async function() {
                let t;
                let n;
                let r;
                let a;
                let i;
                let l;
                let u;
                let c;
                const _this = this;
                const d = arguments;
                t = d.length > 0 && d[0] !== undefined ? d[0] : {};
                ({ cluster: n, namespace: r, module: a, ...i } = t);
                this.list.isLoading = true;
                if (a) {
                    this.module = a;
                }
                l = i;
                u = await request.get(`/clusters/${n}/kapi/v1/namespaces/${r}/${this.module}`, l, {}, function() {
                    return {
                        items: []
                    };
                });
                c = Array.isArray(u.items) ? u.items.map((e)=>({
                        cluster: n,
                        module: a || _this.module,
                        ..._this.mapper(e)
                    })) : [];
                this.list.update({
                    data: c,
                    total: u.items.length || 0,
                    isLoading: false
                });
                return c;
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return "apis/types.kubefed.io/v1beta1";
            }
        },
        {
            key: "scheduleApiVersion",
            get: function() {
                return "apis/scheduling.kubefed.io/v1alpha1";
            }
        },
        {
            key: "version",
            get: function() {
                return "types.kubefed.io/v1beta1";
            }
        },
        {
            key: "secretKind",
            get: function() {
                return "FederatedSecret";
            }
        }
    ]);
    return $;
})(module68);
c = module49(u.prototype, "detail", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
f = module49(u.prototype, "initializing", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
});
d = module49(u.prototype, "resources", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
p = module49(u.prototype, "isResourcesLoading", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
});
h = module49(u.prototype, "isScheduleDeployment", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
});
v = module49(u.prototype, "renderScheduleTab", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
});
m = module49(u.prototype, "scheduleTemplate", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
g = module49(u.prototype, "switchSchedule", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.isScheduleDeployment = t;
        };
    }
});
y = module49(u.prototype, "setScheduleTemplate", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.scheduleTemplate = module136(t);
        };
    }
});
b = module49(u.prototype, "setMetadata", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.scheduleTemplate.metadata = t;
        };
    }
});
C = module49(u.prototype, "ifRenderScheduleTab", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.renderScheduleTab = t;
        };
    }
});
module49(u.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "fetchList"), u.prototype);
module49(u.prototype, "fetchListByK8s", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "fetchListByK8s"), u.prototype);
module49(u.prototype, "fetchDetail", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "fetchDetail"), u.prototype);
module49(u.prototype, "fetchResources", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "fetchResources"), u.prototype);
module49(u.prototype, "create", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "create"), u.prototype);
module49(u.prototype, "scheduleCreate", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "scheduleCreate"), u.prototype);
module49(u.prototype, "updateResource", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "updateResource"), u.prototype);
module49(u.prototype, "stop", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "stop"), u.prototype);
module49(u.prototype, "fetchDetailSilent", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "fetchDetailSilent"), u.prototype);
module49(u.prototype, "fetchListByMatchedDeployments", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "fetchListByMatchedDeployments"), u.prototype);
export default u;
