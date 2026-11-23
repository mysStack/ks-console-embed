"use strict";
((e)=>{
    const module20 = require("./module-20.js").default;
    require("./module-12.js");
    require("./module-5.js");
    require("./module-11.js");
    require("./module-6.js");
    require("./module-18.js");
    require("./module-27.js");
    require("./module-9.js");
    require("./module-13.js");
    require("./module-10.js");
    require("./module-4.js");
    require("./module-23.js");
    require("./module-17.js");
    require("./module-7.js");
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = undefined;
    require("./module-12.js");
    require("./module-45.js");
    require("./module-5.js");
    require("./module-11.js");
    require("./module-6.js");
    require("./module-18.js");
    require("./module-28.js");
    require("./module-42.js");
    require("./module-27.js");
    require("./module-34.js");
    require("./module-15.js");
    require("./module-9.js");
    require("./module-13.js");
    require("./module-10.js");
    require("./module-4.js");
    require("./module-22.js");
    require("./module-23.js");
    require("./module-57.js");
    require("./module-17.js");
    require("./module-7.js");
    const o = module20(require("./module-41.js"));
    const a = module20(require("./module-61.js").default);
    require("./module-41.js");
    let i;
    let l;
    const s = module20(require("./module-44.js").default);
    const u = module20(require("./module-31.js").default);
    const c = module20(require("./module-58.js").default);
    const f = module20(require("./module-65.js").default);
    const d = module20(require("./module-36.js").default);
    const p = module20(require("./module-37.js").default);
    const h = module20(require("./module-88.js").default);
    const v = module20(require("./module-55.js").default);
    const m = module20(require("./module-56.js").default);
    const g = module20(require("./module-51.js"));
    const y = module20(require("./module-49.js").default);
    module20(require("./module-66.js").default);
    const b = module20(require("./module-26.js").default);
    const C = module20(require("./module-189.js").default);
    const module14 = require("./module-14.js");
    const module72 = require("./module-72.js");
    const module148 = require("./module-148.js");
    const module144 = require("./module-144.js");
    const E = module20(require("./module-105.js"));
    const k = module20(require("./module-68.js"));
    const O = module20(require("./module-120.js"));
    function S(e, t) {
        const n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            let r = Object.getOwnPropertySymbols(e);
            if (t) {
                r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
            }
            n.push.apply(n, r);
        }
        return n;
    }
    function L(e) {
        for(let t = 1; t < arguments.length; t++){
            var n = arguments[t] ?? {};
            if (t % 2) {
                S(Object(n), true).forEach((t)=>{
                    u.default(e, t, n[t]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
            } else {
                S(Object(n)).forEach((t)=>{
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
        }
        return e;
    }
    function z(e) {
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
            const r = g.default(e);
            if (t) {
                const o = g.default(this).constructor;
                n = Reflect.construct(r, arguments, o);
            } else {
                n = r.apply(this, arguments);
            }
            return m.default(this, n);
        };
    }
    const D = (e, t)=>{
        e.labelSelector = t === "system" ? "kubesphere.io/workspace=system-workspace" : t === "user" ? "kubesphere.io/workspace!=system-workspace,!kubesphere.io/devopsproject" : e.labelSelector || "!kubesphere.io/devopsproject";
        return e;
    };
    i = ((t)=>{
        v.default(y, t);
        let n;
        let r;
        let i;
        let u;
        let m;
        var g = z(y);
        function y(...n_1) {
            let e;
            d.default(this, y);
            e = g.call(this, ...n_1);
            f.default(e, "initializing", l, h.default(e));
            e.limitRanges = new O.default;
            e.module = "namespaces";
            e.getResourceUrl = function(t) {
                const t_workspace = t.workspace;
                const r = c.default(t, [
                    "workspace"
                ]);
                if (t_workspace) {
                    return `kapis/tenant.kubesphere.io/v1beta1/workspaces/${t_workspace}${e.getPath(r)}/namespaces`;
                }
                return `kapis/resources.kubesphere.io/v1alpha3${e.getPath(r)}/namespaces`;
            };
            e.getWatchListUrl = function(t) {
                const t_workspace = t.workspace;
                const r = c.default(t, [
                    "workspace"
                ]);
                if (t_workspace) {
                    return `${e.apiVersion}/watch${e.getPath(r)}/namespaces?labelSelector=kubesphere.io/workspace=${t_workspace}`;
                }
                return `${e.apiVersion}/watch${e.getPath(r)}/namespaces`;
            };
            e.getListUrl = function(t = {}) {
                if (t.workspace) {
                    return `kapis/tenant.kubesphere.io/v1beta1/workspaces/${t.workspace}${e.getPath(t)}/namespaces`;
                }
                return `${e.apiVersion}${e.getPath(t)}/namespaces`;
            };
            e.afterChange = function(t, { cluster }) {
                module148.eventBus.emit(module144.eventKeys.PROJECT_CHANGE, L(L({}, e.mapper(t)), {}, {
                    cluster
                }));
            };
            e.afterDelete = function(t, { cluster }) {
                module148.eventBus.emit(module144.eventKeys.DELETE_PROJECT, L(L({}, e.mapper(t)), {}, {
                    cluster
                }));
            };
            return e;
        }
        p.default(y, [
            {
                key: "fetchList",
                value: (m = s.default(o.default.mark(function* e() {
                    let t;
                    let n;
                    let r;
                    let i;
                    let l;
                    let s;
                    let u;
                    let f;
                    let d;
                    const _this = this;
                    const h = arguments;
                    t = h.length > 0 && h[0] !== undefined ? h[0] : {};
                    n = t.cluster;
                    r = t.workspace;
                    i = t.namespace;
                    l = t.more;
                    s = t.type;
                    u = c.default(t, [
                        "cluster",
                        "workspace",
                        "namespace",
                        "more",
                        "type"
                    ]);
                    this.list.isLoading = true;
                    if (!(u.sortBy || u.ascending !== undefined)) {
                        u.sortBy = module72.LIST_DEFAULT_ORDER[this.module] || "createTime";
                    }
                    if (!(u.limit !== Infinity && u.limit !== -1)) {
                        u.limit = -1;
                        u.page = 1;
                    }
                    u.limit = u.limit || 10;
                    f = yield request.get(this.getResourceUrl({
                        cluster: n,
                        workspace: r,
                        namespace: i
                    }), D(u, s)).catch(()=>({}));
                    d = b.default(f, "items", []).map((e)=>L({
                            cluster: n
                        }, _this.mapper(e)));
                    this.list.update(L(L({
                        data: l ? [].concat(a.default(this.list.data), a.default(d)) : d,
                        total: f.totalItems || f.total_count || d.length || 0
                    }, C.default(u, "labelSelector")), {}, {
                        cluster: globals.app.isMultiCluster ? n : undefined,
                        limit: Number(u.limit) || 10,
                        page: Number(u.page) || 1,
                        isLoading: false
                    }, this.list.silent ? {} : {
                        selectedRowKeys: []
                    }));
                    d.forEach((e)=>{
                        module148.eventBus.emit(module144.eventKeys.PROJECT_CHANGE, e);
                    });
                    return d;
                })), function() {
                    return m.apply(this, arguments);
                })
            },
            {
                key: "fetchDetail",
                value: (u = s.default(o.default.mark(function* t(n, r) {
                    let a;
                    let i;
                    let l;
                    let s;
                    a = n.cluster;
                    i = n.workspace;
                    l = n.namespace;
                    this.isLoading = true;
                    s = yield request.get(this.getDetailUrl({
                        cluster: a,
                        workspace: i,
                        name: l
                    }), null, null, r || function(t) {
                        if (!(t.reason !== "NotFound" && t.reason !== "Forbidden")) {
                            e.navigateTo("/404");
                        }
                    });
                    this.detail = L({
                        cluster: a
                    }, this.mapper(s));
                    this.isLoading = false;
                    return L({
                        cluster: a
                    }, this.mapper(s));
                })), function(e, t) {
                    return u.apply(this, arguments);
                })
            },
            {
                key: "create",
                value: (i = s.default(o.default.mark(function* e(t) {
                    let n;
                    let r;
                    const a = arguments;
                    r = !(n = a.length > 1 && a[1] !== undefined ? a[1] : {}).workspace ? this.submitting(request.post(this.getListUrl(n), t)) : yield this.submitting(request.post(this.getResourceUrl(n), t));
                    this.afterChange(r, n);
                    return r;
                })), function(e) {
                    return i.apply(this, arguments);
                })
            },
            {
                key: "fetchLimitRanges",
                value: (r = s.default(o.default.mark(function* e(t) {
                    let n;
                    let r;
                    let a;
                    let i;
                    n = t.cluster;
                    r = t.namespace;
                    this.limitRanges.isLoading = false;
                    a = yield request.get(`api/v1${this.getPath({
                        cluster: n,
                        namespace: r
                    })}/limitranges`);
                    i = a.items.map(E.default.limitranges);
                    this.limitRanges.update({
                        data: i,
                        total: a.items.length,
                        isLoading: false
                    });
                    return i;
                })), function(e) {
                    return r.apply(this, arguments);
                })
            },
            {
                key: "fetchListByUser",
                value: (n = s.default(o.default.mark(function* e() {
                    let t;
                    let n;
                    let r;
                    let a;
                    let i;
                    let l;
                    let s;
                    let u;
                    let f;
                    const _this = this;
                    const p = arguments;
                    t = p.length > 0 && p[0] !== undefined ? p[0] : {};
                    n = t.cluster;
                    r = t.workspace;
                    a = t.namespace;
                    i = t.username;
                    l = t.type;
                    s = c.default(t, [
                        "cluster",
                        "workspace",
                        "namespace",
                        "username",
                        "type"
                    ]);
                    this.list.isLoading = true;
                    if (!(s.sortBy || s.ascending !== undefined)) {
                        s.sortBy = module72.LIST_DEFAULT_ORDER[this.module] || "createTime";
                    }
                    if (!(s.limit !== Infinity && s.limit !== -1)) {
                        s.limit = -1;
                        s.page = 1;
                    }
                    s.limit = s.limit || 10;
                    u = yield request.get(`kapis/tenant.kubesphere.io/v1beta1/workspaces/${r}${this.getPath({
                        cluster: n,
                        namespace: a
                    })}/workspacemembers/${i}/namespaces`, D(s, l));
                    f = b.default(u, "items", []).map((e)=>L({
                            cluster: n
                        }, _this.mapper(e)));
                    this.list.update(L(L({
                        data: f,
                        total: u.totalItems || 0
                    }, C.default(s, "labelSelector")), {}, {
                        cluster: globals.app.isMultiCluster ? n : undefined,
                        limit: Number(s.limit) || 10,
                        page: Number(s.page) || 1,
                        isLoading: false
                    }));
                    return f;
                })), function() {
                    return n.apply(this, arguments);
                })
            }
        ]);
        return y;
    })(k.default);
    l = y.default(i.prototype, "initializing", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return true;
        }
    });
    y.default(i.prototype, "fetchList", [
        module14.action
    ], Object.getOwnPropertyDescriptor(i.prototype, "fetchList"), i.prototype);
    y.default(i.prototype, "fetchDetail", [
        module14.action
    ], Object.getOwnPropertyDescriptor(i.prototype, "fetchDetail"), i.prototype);
    y.default(i.prototype, "create", [
        module14.action
    ], Object.getOwnPropertyDescriptor(i.prototype, "create"), i.prototype);
    y.default(i.prototype, "fetchLimitRanges", [
        module14.action
    ], Object.getOwnPropertyDescriptor(i.prototype, "fetchLimitRanges"), i.prototype);
    y.default(i.prototype, "fetchListByUser", [
        module14.action
    ], Object.getOwnPropertyDescriptor(i.prototype, "fetchListByUser"), i.prototype);
    exports.default = i;
})(require("./module-69.js").default);
