"use strict";
((e)=>{
    const module20 = require("./module-20.js").default;
    require("./module-12.js");
    require("./module-135.js");
    require("./module-5.js");
    require("./module-11.js");
    require("./module-29.js");
    require("./module-6.js");
    require("./module-30.js").default;
    require("./module-18.js");
    require("./module-48.js");
    require("./module-16.js");
    require("./module-27.js");
    require("./module-9.js");
    require("./module-13.js");
    require("./module-10.js");
    require("./module-4.js");
    require("./module-22.js");
    require("./module-23.js");
    require("./module-17.js");
    require("./module-38.js");
    require("./module-7.js");
    require("./module-32.js");
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = undefined;
    require("./module-12.js");
    require("./module-135.js");
    require("./module-45.js");
    require("./module-5.js");
    require("./module-11.js");
    require("./module-29.js");
    require("./module-6.js");
    require("./module-118.js");
    require("./module-30.js").default;
    require("./module-18.js");
    require("./module-28.js");
    require("./module-48.js");
    require("./module-42.js");
    require("./module-16.js");
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
    require("./module-38.js");
    require("./module-7.js");
    require("./module-32.js");
    const a = module20(require("./module-41.js"));
    const i = module20(require("./module-61.js").default);
    require("./module-41.js");
    let l;
    let s;
    let u;
    let c;
    let f;
    let d;
    let p;
    let h;
    const v = module20(require("./module-44.js").default);
    const m = module20(require("./module-31.js").default);
    const g = module20(require("./module-58.js").default);
    const y = module20(require("./module-65.js").default);
    const b = module20(require("./module-36.js").default);
    const C = module20(require("./module-37.js").default);
    const w = module20(require("./module-88.js").default);
    const _ = module20(require("./module-55.js").default);
    const x = module20(require("./module-56.js").default);
    const M = module20(require("./module-51.js"));
    const E = module20(require("./module-49.js").default);
    module20(require("./module-66.js").default);
    const k = module20(require("./module-136.js").default);
    const O = module20(require("./module-26.js").default);
    const S = module20(require("./module-60.js").default);
    const L = module20(require("./module-189.js").default);
    const z = module20(require("./module-74.js").default);
    const module14 = require("./module-14.js");
    const T = module20(require("./module-68.js"));
    const V = module20(require("./module-441.js"));
    const module148 = require("./module-148.js");
    const module144 = require("./module-144.js");
    function A(e, t) {
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
    function R(e) {
        for(let t = 1; t < arguments.length; t++){
            var n = arguments[t] ?? {};
            if (t % 2) {
                A(Object(n), true).forEach((t)=>{
                    m.default(e, t, n[t]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
            } else {
                A(Object(n)).forEach((t)=>{
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
        }
        return e;
    }
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
            let n;
            const r = M.default(e);
            if (t) {
                const o = M.default(this).constructor;
                n = Reflect.construct(r, arguments, o);
            } else {
                n = r.apply(this, arguments);
            }
            return x.default(this, n);
        };
    }
    l = ((n)=>{
        _.default(A, n);
        let r;
        let o;
        let l;
        let m;
        let x;
        let M;
        let E;
        let D;
        var T = j(A);
        function A(...n_1) {
            let e;
            b.default(this, A);
            e = T.call(this, ...n_1);
            y.default(e, "initializing", s, w.default(e));
            e.roleStore = new V.default;
            e.module = "devops";
            e.hostName = "";
            e.hostDetail = {};
            y.default(e, "roles", u, w.default(e));
            y.default(e, "data", c, w.default(e));
            e.detail = {};
            y.default(e, "devopsListData", f, w.default(e));
            y.default(e, "devops", d, w.default(e));
            y.default(e, "devopsName", p, w.default(e));
            e.getDevopsUrlV2 = function(t) {
                return `kapis/devops.kubesphere.io/v1alpha2${e.getPath(t)}/`;
            };
            e.getDevopsUrlV3 = function(t) {
                return `kapis/devops.kubesphere.io/v1alpha3${e.getPath(t)}/`;
            };
            e.getDevopsTenantUrl = function(t) {
                return `kapis/devops.kubesphere.io/v1alpha3${e.getPath(t)}/namespaces`;
            };
            e.getResourceUrl = function(t) {
                return `${e.getDevopsUrlV2(t)}`;
            };
            e.getBaseUrl = function(t) {
                return `${e.apiVersion}${e.getPath(t)}/`;
            };
            e.getWatchListUrl = function(t) {
                const t_workspace = t.workspace;
                const r = g.default(t, [
                    "workspace"
                ]);
                return `apis/devops.kubesphere.io/v1alpha3/watch${e.getPath(r)}/devopsprojects?labelSelector=kubesphere.io/workspace=${t_workspace}`;
            };
            e.getWatchAllListUrl = function(t) {
                t.workspace;
                const n = g.default(t, [
                    "workspace"
                ]);
                return `apis/devops.kubesphere.io/v1alpha3/watch${e.getPath(n)}/devopsprojects`;
            };
            e.getWatchUrl = function(t = {}) {
                return `${e.getWatchListUrl(t)}/${t.name}`;
            };
            y.default(e, "setSelectRowKeys", h, w.default(e));
            e.afterChange = function(t, { cluster }) {
                module148.eventBus.emit(module144.eventKeys.DEVOPS_CHANGE, R(R({}, e.mapper(t)), {}, {
                    cluster
                }));
            };
            e.afterDelete = function(e) {
                module148.eventBus.emit(module144.eventKeys.DELETE_DEVOPS, R(R({}, e), {}, {
                    namespace: e.devops
                }));
            };
            return e;
        }
        C.default(A, [
            {
                key: "getPath",
                value: function({ cluster, namespace, workspace, devops } = {}) {
                    let a = "";
                    if (cluster) {
                        a += `/klusters/${cluster}`;
                    }
                    if (workspace) {
                        a += `/workspaces/${workspace}`;
                    }
                    if (namespace) {
                        a += `/namespaces/${namespace}`;
                    }
                    if (devops) {
                        a += `/namespaces/${devops}`;
                    }
                    return a;
                }
            },
            {
                key: "getDevops",
                value: function(e) {
                    return e.slice(0, -5);
                }
            },
            {
                key: "fetchList",
                value: (D = v.default(a.default.mark(function e() {
                    let t;
                    let n;
                    let r;
                    let o;
                    let l;
                    let s;
                    let u;
                    let c;
                    const _this = this;
                    const d = arguments;
                    return a.default.wrap(function(e) {
                        while(true){
                            switch(e.prev = e.next){
                                case 0:
                                    t = d.length > 0 && d[0] !== undefined ? d[0] : {};
                                    n = t.workspace;
                                    r = t.cluster;
                                    o = t.more;
                                    l = g.default(t, [
                                        "workspace",
                                        "cluster",
                                        "more"
                                    ]);
                                    this.list.isLoading = true;
                                    if (l.limit === Infinity || l.limit === -1) {
                                        l.limit = -1;
                                        l.page = 1;
                                    } else {
                                        l.limit = l.limit || 10;
                                    }
                                    e.next = 5;
                                    return request.get(this.getDevopsTenantUrl({
                                        cluster: r,
                                        workspace: n
                                    }), l).catch(()=>{});
                                case 5:
                                    e.t0 = e.sent;
                                    if (e.t0) {
                                        e.next = 8;
                                        break;
                                    }
                                    e.t0 = {};
                                case 8:
                                    s = e.t0;
                                    u = Array.isArray(O.default(s, "items")) ? O.default(s, "items") : [];
                                    this.devopsListData = u;
                                    c = u.map((e)=>R({
                                            cluster: r
                                        }, _this.mapper(e)));
                                    this.list.update(R(R({
                                        data: o ? [].concat(i.default(this.list.data), i.default(c)) : c,
                                        total: s.totalItems || c.length || 0,
                                        limit: Number(l.limit) || 10,
                                        page: Number(l.page) || 1,
                                        cluster: globals.app.isMultiCluster ? r : undefined,
                                        isLoading: false
                                    }, this.list.silent ? {} : {
                                        selectedRowKeys: []
                                    }), L.default(l, [
                                        "limit",
                                        "page"
                                    ])));
                                    c.forEach((e)=>{
                                        module148.eventBus.emit(module144.eventKeys.DEVOPS_CHANGE, e);
                                    });
                                case 14:
                                case "end":
                                    return e.stop();
                            }
                        }
                    }, e, this);
                })), function() {
                    return D.apply(this, arguments);
                })
            },
            {
                key: "checkNewName",
                value: function(e, t) {
                    return request.get(`/kapis/devops.kubesphere.io/v1alpha3${this.getPath(e)}`, R({}, t));
                }
            },
            {
                key: "checkDevopsName",
                value: function(e, t) {
                    if (t) {
                        return this.checkName(R({}, e), {
                            generateName: true
                        });
                    }
                    return this.checkNewName(R(R({}, e), {}, {
                        devops: e.name
                    }), {
                        check: true,
                        generateName: true
                    });
                }
            },
            {
                key: "create",
                value: (E = v.default(a.default.mark(function* e(t, n) {
                    let r;
                    let o;
                    let i;
                    r = n.cluster;
                    o = n.workspace;
                    t.kind = "DevOpsProject";
                    t.apiVersion = "devops.kubesphere.io/v1alpha3";
                    t.metadata.labels = {
                        "kubesphere.io/workspace": o
                    };
                    i = yield this.submitting(request.post(`${this.getBaseUrl({
                        cluster: r,
                        workspace: o
                    })}namespaces`, t));
                    this.afterChange(i, {
                        cluster: r,
                        workspace: o
                    });
                    return i;
                })), function(e, t) {
                    return E.apply(this, arguments);
                })
            },
            {
                key: "update",
                value: (M = v.default(a.default.mark(function* e(t, n) {
                    let r;
                    let o;
                    let i;
                    let l;
                    let s;
                    r = t.cluster;
                    o = t.workspace;
                    i = t.devops;
                    yield this.fetchDetail({
                        cluster: r,
                        workspace: o,
                        devops: i
                    });
                    if (l = k.default(this.itemDetail)) {
                        z.default(l, 'metadata.annotations["kubesphere.io/description"]', n.description);
                        z.default(l, 'metadata.annotations["kubesphere.io/alias-name"]', n.aliasName);
                        s = yield this.submitting(request.put(`${this.getBaseUrl({
                            cluster: r,
                            workspace: o,
                            devops: i
                        })}`, l, {
                            headers: {
                                "content-type": "application/json"
                            }
                        }));
                        this.afterChange(s, {
                            cluster: r,
                            workspace: o,
                            devops: i
                        });
                        return s;
                    }
                })), function(e, t) {
                    return M.apply(this, arguments);
                })
            },
            {
                key: "editAllowlist",
                value: (x = v.default(a.default.mark(function* e(t, n) {
                    let r;
                    let o;
                    let i;
                    let l;
                    r = t.cluster;
                    o = t.workspace;
                    i = t.devops;
                    yield this.fetchDetail({
                        cluster: r,
                        workspace: o,
                        devops: i
                    });
                    l = k.default(this.itemDetail);
                    z.default(l, "spec.argo", O.default(n, "spec.argo"));
                    return this.submitting(request.put(`${this.getBaseUrl({
                        cluster: r,
                        workspace: o,
                        devops: i
                    })}`, l, {
                        headers: {
                            "content-type": "application/json"
                        }
                    }));
                })), function(e, t) {
                    return x.apply(this, arguments);
                })
            },
            {
                key: "delete",
                value: (m = v.default(a.default.mark(function* e(t) {
                    let n;
                    let r;
                    let o;
                    let i;
                    n = t.devops;
                    r = t.cluster;
                    o = t.workspace;
                    i = yield this.submitting(request.delete(`${this.getBaseUrl({
                        workspace: o,
                        cluster: r,
                        devops: n
                    })}`));
                    this.afterDelete({
                        workspace: o,
                        cluster: r,
                        devops: n
                    });
                    return i;
                })), function(e) {
                    return m.apply(this, arguments);
                })
            },
            {
                key: "batchDelete",
                value: function(e, t) {
                    const _this = this;
                    const { workspace, cluster, devops } = t;
                    return this.submitting(Promise.all(e.map((e)=>request.delete(`${_this.getBaseUrl({
                            workspace,
                            cluster,
                            devops: _this.list.find((t)=>t.name === e).devops
                        })}/${devops}`))));
                }
            },
            {
                key: "fetchDetail",
                value: (l = v.default(a.default.mark(function* t(n) {
                    let r;
                    let o;
                    let i;
                    let l;
                    let s;
                    r = n.cluster;
                    o = n.devops;
                    i = n.workspace;
                    l = yield request.get(this.getBaseUrl({
                        workspace: i,
                        cluster: r,
                        devops: o
                    }), null, null, function(t) {
                        if (!(t.reason !== "Not Found" && t.reason !== "Forbidden")) {
                            e.navigateTo("/404");
                        }
                    });
                    this.itemDetail = l;
                    s = R({
                        cluster: r
                    }, this.mapper(l));
                    this.devopsName = s.name;
                    this.devops = s.devops;
                    s.workspace = s.workspace || i;
                    this.data = s;
                    this.detail = s;
                    return s;
                })), function(e) {
                    return l.apply(this, arguments);
                })
            },
            {
                key: "fetchRoles",
                value: (o = v.default(a.default.mark(function* e(n) {
                    let r;
                    let o;
                    let i;
                    r = n.cluster;
                    o = n.devops;
                    this.roles.isLoading = true;
                    i = yield request.get(`${this.getListUrl({
                        cluster: r
                    })}/${o}/defaultroles`);
                    if (S.default(i)) {
                        this.roles.data = i.map((e)=>{
                            e.description = t(`pipeline_${e.name}`);
                            return e;
                        });
                        this.roles.total = i.length;
                    }
                    this.roles.isLoading = false;
                })), function(e) {
                    return o.apply(this, arguments);
                })
            },
            {
                key: "fetchListByUser",
                value: (r = v.default(a.default.mark(function* e() {
                    let t;
                    let n;
                    let r;
                    let namespace;
                    let i;
                    let l;
                    let s;
                    let u;
                    let c;
                    const _this = this;
                    const d = arguments;
                    t = d.length > 0 && d[0] !== undefined ? d[0] : {};
                    n = t.cluster;
                    r = t.workspace;
                    namespace = t.namespace;
                    i = t.username;
                    t.type;
                    l = t.filters;
                    s = g.default(t, [
                        "cluster",
                        "workspace",
                        "namespace",
                        "username",
                        "type",
                        "filters"
                    ]);
                    this.list.isLoading = true;
                    if (!(s.sortBy || s.ascending !== undefined)) {
                        s.sortBy = "createTime";
                    }
                    if (!(s.limit !== Infinity && s.limit !== -1)) {
                        s.limit = -1;
                        s.page = 1;
                    }
                    s.limit = s.limit || 10;
                    u = yield request.get(`kapis/devops.kubesphere.io/v1alpha3/workspaces/${r}${this.getPath({
                        cluster: n,
                        namespace
                    })}/workspacemembers/${i}/namespaces`, s);
                    c = O.default(u, "items", []).map((e)=>R({
                            cluster: n
                        }, _this.mapper(e)));
                    this.list.update(R(R(R({
                        data: c,
                        total: u.totalItems || 0
                    }, s), l), {}, {
                        cluster: globals.app.isMultiCluster ? n : undefined,
                        limit: Number(s.limit) || 10,
                        page: Number(s.page) || 1,
                        isLoading: false
                    }));
                    return c;
                })), function() {
                    return r.apply(this, arguments);
                })
            }
        ]);
        return A;
    })(T.default);
    s = E.default(l.prototype, "initializing", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return true;
        }
    });
    u = E.default(l.prototype, "roles", [
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
                isLoading: true
            };
        }
    });
    c = E.default(l.prototype, "data", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return {};
        }
    });
    f = E.default(l.prototype, "devopsListData", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return [];
        }
    });
    d = E.default(l.prototype, "devops", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return "";
        }
    });
    p = E.default(l.prototype, "devopsName", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return "";
        }
    });
    E.default(l.prototype, "fetchList", [
        module14.action
    ], Object.getOwnPropertyDescriptor(l.prototype, "fetchList"), l.prototype);
    E.default(l.prototype, "checkNewName", [
        module14.action
    ], Object.getOwnPropertyDescriptor(l.prototype, "checkNewName"), l.prototype);
    E.default(l.prototype, "checkDevopsName", [
        module14.action
    ], Object.getOwnPropertyDescriptor(l.prototype, "checkDevopsName"), l.prototype);
    E.default(l.prototype, "create", [
        module14.action
    ], Object.getOwnPropertyDescriptor(l.prototype, "create"), l.prototype);
    E.default(l.prototype, "update", [
        module14.action
    ], Object.getOwnPropertyDescriptor(l.prototype, "update"), l.prototype);
    E.default(l.prototype, "editAllowlist", [
        module14.action
    ], Object.getOwnPropertyDescriptor(l.prototype, "editAllowlist"), l.prototype);
    E.default(l.prototype, "delete", [
        module14.action
    ], Object.getOwnPropertyDescriptor(l.prototype, "delete"), l.prototype);
    E.default(l.prototype, "batchDelete", [
        module14.action
    ], Object.getOwnPropertyDescriptor(l.prototype, "batchDelete"), l.prototype);
    E.default(l.prototype, "fetchDetail", [
        module14.action
    ], Object.getOwnPropertyDescriptor(l.prototype, "fetchDetail"), l.prototype);
    E.default(l.prototype, "fetchRoles", [
        module14.action
    ], Object.getOwnPropertyDescriptor(l.prototype, "fetchRoles"), l.prototype);
    h = E.default(l.prototype, "setSelectRowKeys", [
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
    E.default(l.prototype, "fetchListByUser", [
        module14.action
    ], Object.getOwnPropertyDescriptor(l.prototype, "fetchListByUser"), l.prototype);
    exports.default = l;
})(require("./module-69.js").default);
