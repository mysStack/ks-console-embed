"use strict";
((e)=>{
    const module20 = require("./module-20.js").default;
    require("./module-12.js");
    require("./module-5.js");
    require("./module-11.js");
    require("./module-29.js");
    require("./module-6.js");
    require("./module-18.js");
    require("./module-16.js");
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
    require("./module-29.js");
    require("./module-6.js");
    require("./module-18.js");
    require("./module-28.js");
    require("./module-42.js");
    require("./module-16.js");
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
    const o = module20(require("./module-61.js").default);
    const a = module20(require("./module-31.js").default);
    const i = module20(require("./module-41.js"));
    require("./module-41.js");
    let l;
    let s;
    let u;
    const c = module20(require("./module-44.js").default);
    const f = module20(require("./module-65.js").default);
    const d = module20(require("./module-36.js").default);
    const p = module20(require("./module-37.js").default);
    const h = module20(require("./module-88.js").default);
    const v = module20(require("./module-332.js"));
    const m = module20(require("./module-55.js").default);
    const g = module20(require("./module-56.js").default);
    const y = module20(require("./module-51.js"));
    const b = module20(require("./module-49.js").default);
    module20(require("./module-66.js").default);
    const C = module20(require("./module-26.js").default);
    const w = module20(require("./module-63.js").default);
    const module14 = require("./module-14.js");
    const x = module20(require("./module-68.js"));
    const M = module20(require("./module-120.js"));
    const module72 = require("./module-72.js");
    const module148 = require("./module-148.js");
    const module144 = require("./module-144.js");
    const S = module20(require("./module-105.js"));
    function L(e, t) {
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
    function z(e) {
        for(let t = 1; t < arguments.length; t++){
            var n = arguments[t] ?? {};
            if (t % 2) {
                L(Object(n), true).forEach((t)=>{
                    a.default(e, t, n[t]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
            } else {
                L(Object(n)).forEach((t)=>{
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
        }
        return e;
    }
    function D(e) {
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
            const r = y.default(e);
            if (t) {
                const o = y.default(this).constructor;
                n = Reflect.construct(r, arguments, o);
            } else {
                n = r.apply(this, arguments);
            }
            return g.default(this, n);
        };
    }
    l = ((t)=>{
        m.default(g, t);
        let n;
        let r;
        let a;
        var l = D(g);
        function g(...n) {
            let e;
            d.default(this, g);
            e = l.call(this, ...n);
            f.default(e, "initializing", s, h.default(e));
            e.module = "workspaces";
            e.clusters = new M.default;
            f.default(e, "cluster", u, h.default(e));
            e.namespaces = new M.default;
            e.devops = new M.default;
            e.getResourceUrl = function(t = {}) {
                if (t.cluster) {
                    return `kapis/resources.kubesphere.io/v1alpha3${e.getPath(t)}/${e.module}`;
                }
                if (globals.clusterRole === "host") {
                    return `kapis/tenant.kubesphere.io/v1beta1${e.getPath(t)}/workspacetemplates`;
                }
                return `kapis/tenant.kubesphere.io/v1beta1${e.getPath(t)}/${e.module}`;
            };
            e.getListUrl = e.getResourceUrl;
            e.getWatchListUrl = function(t = {}) {
                return `${e.apiVersion}/watch${e.getPath(t)}/workspacetemplates`;
            };
            e.afterChange = function(t) {
                module148.eventBus.emit(module144.eventKeys.WORKSPACE_CHANGE, e.mapper(t));
            };
            e.afterDelete = function(e) {
                module148.eventBus.emit(module144.eventKeys.DELETE_DEVOPS, e);
            };
            return e;
        }
        p.default(g, [
            {
                key: "fetchList",
                value: (a = c.default(i.default.mark(function* e() {
                    let t;
                    let n;
                    const r = arguments;
                    t = r.length > 0 && r[0] !== undefined ? r[0] : {};
                    n = yield v.default(y.default(g.prototype), "fetchList", this).call(this, t);
                    if (!t.cluster) {
                        n.forEach((e)=>{
                            module148.eventBus.emit(module144.eventKeys.WORKSPACE_CHANGE, e);
                        });
                    }
                    return n;
                })), function() {
                    return a.apply(this, arguments);
                })
            },
            {
                key: "fetchDetail",
                value: (r = c.default(i.default.mark(function t() {
                    let n;
                    let cluster;
                    let o;
                    let l;
                    let s;
                    const u = arguments;
                    return i.default.wrap(function(t) {
                        while(true){
                            switch(t.prev = t.next){
                                case 0:
                                    n = u.length > 0 && u[0] !== undefined ? u[0] : {};
                                    ({ cluster, workspace: o, redirect: l = true } = n);
                                    if (!w.default(o)) {
                                        t.next = 3;
                                        break;
                                    }
                                    return t.abrupt("return");
                                case 3:
                                    this.isLoading = true;
                                    t.next = 6;
                                    return request.get(this.getDetailUrl({
                                        name: o,
                                        cluster
                                    }), null, null, function(t, n) {
                                        if (l) {
                                            if (!(n.reason !== "Not Found" && n.reason !== "No Such Object" && n.reason !== "Forbidden")) {
                                                e.navigateTo("/404");
                                            }
                                        }
                                    });
                                case 6:
                                    s = t.sent;
                                    this.detail = z(z({}, this.mapper(s)), {}, {
                                        cluster
                                    });
                                    this.isLoading = false;
                                    return t.abrupt("return", z(z({}, this.mapper(s)), {}, {
                                        cluster
                                    }));
                                case 10:
                                case "end":
                                    return t.stop();
                            }
                        }
                    }, t, this);
                })), function() {
                    return r.apply(this, arguments);
                })
            },
            {
                key: "fetchClusters",
                value: (n = c.default(i.default.mark(function* e() {
                    let t;
                    let n;
                    let r;
                    let a;
                    let l;
                    let s;
                    const u = arguments;
                    t = u.length > 0 && u[0] !== undefined ? u[0] : {};
                    n = t.workspace;
                    r = t.more;
                    this.clusters.isLoading = true;
                    a = {};
                    l = !globals.app.isMultiCluster ? {
                        items: [
                            module72.DEFAULT_CLUSTER
                        ]
                    } : yield request.get(`kapis/tenant.kubesphere.io/v1beta1/workspaces/${n}/clusters`, a);
                    s = l.items.map(S.default.clusters);
                    this.clusters.update({
                        data: r ? [].concat(o.default(this.namespaces.data), o.default(s)) : s,
                        total: l.totalItems,
                        limit: 10,
                        page: 1,
                        isLoading: false
                    });
                    if (this.clusters.data.length > 0) {
                        this.selectCluster(C.default(this.clusters.data.find((e)=>e.isReady), "name"));
                    }
                })), function() {
                    return n.apply(this, arguments);
                })
            },
            {
                key: "selectCluster",
                value: function(e) {
                    this.cluster = e;
                }
            },
            {
                key: "delete",
                value: function(e, t = {}) {
                    const n = this.submitting(request.delete(this.getDetailUrl(e), t));
                    this.afterDelete(e);
                    return n;
                }
            },
            {
                key: "editVisible",
                value: function(e, t) {
                    const n = `kapis/tenant.kubesphere.io/v1beta1/workspacetemplates/${e.name}`;
                    return this.submitting(request.patch(n, t));
                }
            },
            {
                key: "isEdge",
                get: function() {
                    return this.detail.isEdge;
                }
            }
        ]);
        return g;
    })(x.default);
    s = b.default(l.prototype, "initializing", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return true;
        }
    });
    u = b.default(l.prototype, "cluster", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return "";
        }
    });
    b.default(l.prototype, "fetchList", [
        module14.action
    ], Object.getOwnPropertyDescriptor(l.prototype, "fetchList"), l.prototype);
    b.default(l.prototype, "fetchDetail", [
        module14.action
    ], Object.getOwnPropertyDescriptor(l.prototype, "fetchDetail"), l.prototype);
    b.default(l.prototype, "fetchClusters", [
        module14.action
    ], Object.getOwnPropertyDescriptor(l.prototype, "fetchClusters"), l.prototype);
    b.default(l.prototype, "selectCluster", [
        module14.action
    ], Object.getOwnPropertyDescriptor(l.prototype, "selectCluster"), l.prototype);
    b.default(l.prototype, "delete", [
        module14.action
    ], Object.getOwnPropertyDescriptor(l.prototype, "delete"), l.prototype);
    b.default(l.prototype, "editVisible", [
        module14.action
    ], Object.getOwnPropertyDescriptor(l.prototype, "editVisible"), l.prototype);
    exports.default = l;
})(require("./module-69.js").default);
