"use strict";
((e)=>{
    const module20 = require("./module-20.js").default;
    require("./module-12.js");
    require("./module-5.js");
    require("./module-11.js");
    require("./module-29.js");
    require("./module-6.js");
    require("./module-30.js").default;
    require("./module-18.js");
    require("./module-16.js");
    require("./module-27.js");
    require("./module-9.js");
    require("./module-13.js");
    require("./module-10.js");
    require("./module-4.js");
    require("./module-22.js");
    require("./module-23.js");
    require("./module-24.js");
    require("./module-17.js");
    require("./module-38.js");
    require("./module-64.js");
    require("./module-7.js");
    require("./module-32.js");
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
    require("./module-30.js").default;
    require("./module-18.js");
    require("./module-28.js");
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
    require("./module-24.js");
    require("./module-17.js");
    require("./module-38.js");
    require("./module-64.js");
    require("./module-7.js");
    require("./module-32.js");
    const l = module20(require("./module-41.js"));
    const u = module20(require("./module-61.js").default);
    const o = module20(require("./module-31.js").default);
    const i = module20(require("./module-58.js").default);
    require("./module-41.js");
    let c;
    let s;
    let f;
    let d;
    let p;
    let m;
    let h;
    let v;
    let g;
    let y;
    const E = module20(require("./module-44.js").default);
    const b = module20(require("./module-65.js").default);
    const _ = module20(require("./module-36.js").default);
    const O = module20(require("./module-37.js").default);
    const S = module20(require("./module-88.js").default);
    const C = module20(require("./module-55.js").default);
    const D = module20(require("./module-56.js").default);
    const k = module20(require("./module-51.js"));
    const N = module20(require("./module-49.js").default);
    module20(require("./module-66.js").default);
    const T = module20(require("./module-26.js").default);
    const R = module20(require("./module-136.js").default);
    const I = module20(require("./module-74.js").default);
    const module14 = require("./module-14.js");
    const module72 = require("./module-72.js");
    const P = module20(require("./module-68.js"));
    const A = module20(require("./module-120.js"));
    const j = module20(require("./module-2701.js"));
    function L(e, t) {
        const a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            let r = Object.getOwnPropertySymbols(e);
            if (t) {
                r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
            }
            a.push.apply(a, r);
        }
        return a;
    }
    function x(e) {
        for(let t = 1; t < arguments.length; t++){
            var a = arguments[t] ?? {};
            if (t % 2) {
                L(Object(a), true).forEach((t)=>{
                    o.default(e, t, a[t]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(e, Object.getOwnPropertyDescriptors(a));
            } else {
                L(Object(a)).forEach((t)=>{
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                });
            }
        }
        return e;
    }
    function U(e) {
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
            const r = k.default(e);
            if (t) {
                const n = k.default(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return D.default(this, a);
        };
    }
    c = ((a)=>{
        C.default(P, a);
        let r;
        let n;
        let o;
        let c;
        let D;
        let k;
        let N;
        var w = U(P);
        function P(...a) {
            let e;
            _.default(this, P);
            e = w.call(this, ...a);
            b.default(e, "initializing", s, S.default(e));
            b.default(e, "isAgentLoading", f, S.default(e));
            b.default(e, "agent", d, S.default(e));
            b.default(e, "isValidating", p, S.default(e));
            b.default(e, "isSubmitting", m, S.default(e));
            b.default(e, "version", h, S.default(e));
            e.module = "clusters";
            b.default(e, "project", v, S.default(e));
            e.list = new j.default;
            e.projects = new A.default;
            e.getAgentUrl = function({ cluster }) {
                return `kapis/cluster.kubesphere.io/v1alpha1/clusters/${cluster}/agent/deployment`;
            };
            e.getTenantUrl = function(t = {}) {
                return `kapis/tenant.kubesphere.io/v1beta1${e.getPath(t)}/${e.module}`;
            };
            e.getResourceUrl = function() {
                return "/kapis/infra.edgewize.io/v1alpha1/edgeclusters";
            };
            e.getListResourceUrl = function() {
                return "/kapis/tenant.kubesphere.io/v1beta1/clusters";
            };
            e.getDetailUrl = function({ name }) {
                return `/apis/cluster.kubesphere.io/v1alpha1/clusters/${name}`;
            };
            e.getEdgeDetailUrl = function({ name }) {
                return `/apis/infra.edgewize.io/v1alpha1/clusters/${name}`;
            };
            e.getListUrl = function({ name }) {
                return `/kapis/infra.edgewize.io/v1alpha1/edgeclusters/${name}`;
            };
            b.default(e, "createWithKubeConfig", g, S.default(e));
            b.default(e, "delete", y, S.default(e));
            return e;
        }
        O.default(P, [
            {
                key: "setProject",
                value: function(e) {
                    this.project = e;
                }
            },
            {
                key: "fetchList",
                value: (N = E.default(l.default.mark(function* e() {
                    let t;
                    let a;
                    let r;
                    let n;
                    let o;
                    const c = arguments;
                    (t = c.length > 0 && c[0] !== undefined ? c[0] : {}).from;
                    a = t.more;
                    r = i.default(t, [
                        "from",
                        "more"
                    ]);
                    this.list.isLoading = true;
                    if (!(r.sortBy || r.ascending !== undefined)) {
                        r.sortBy = module72.LIST_DEFAULT_ORDER[this.module] || "createTime";
                    }
                    if (!(r.limit !== Infinity && r.limit !== -1)) {
                        r.limit = -1;
                        r.page = 1;
                    }
                    r.limit = r.limit || 10;
                    n = yield request.get(this.getListResourceUrl({}), x(x({}, r), {}, {
                        labelSelector: "cluster-role.kubesphere.io/edge"
                    }));
                    o = T.default(n, "items", []).map(this.mapper);
                    this.list.update(x(x({
                        data: a ? [].concat(u.default(this.list.data), u.default(o)) : o,
                        total: n.totalItems || n.total_count || o.length || 0
                    }, r), {}, {
                        limit: Number(r.limit) || 10,
                        page: Number(r.page) || 1,
                        isLoading: false
                    }, this.list.silent ? {} : {
                        selectedRowKeys: []
                    }));
                    return o;
                })), function() {
                    return N.apply(this, arguments);
                })
            },
            {
                key: "fetchDetail",
                value: (k = E.default(l.default.mark(function* t(a) {
                    let r;
                    let n;
                    this.isLoading = true;
                    if (!globals.app.isMultiCluster) {
                        r = this.mapper(R.default(module72.DEFAULT_CLUSTER));
                    } else {
                        n = yield request.get(this.getDetailUrl(a), null, null, function(t, a) {
                            if (a.reason === "Not Found") {
                                e.navigateTo("/404");
                            }
                        });
                        r = x(x({}, a), this.mapper(n));
                    }
                    this.detail = r;
                    this.isLoading = false;
                    return r;
                })), function(e) {
                    return k.apply(this, arguments);
                })
            },
            {
                key: "fetchProjects",
                value: (D = E.default(l.default.mark(function* e() {
                    let t;
                    let cluster;
                    let namespace;
                    let n;
                    let o;
                    let c;
                    let s;
                    const _this = this;
                    const d = arguments;
                    t = d.length > 0 && d[0] !== undefined ? d[0] : {};
                    cluster = t.cluster;
                    namespace = t.namespace;
                    n = t.more;
                    o = i.default(t, [
                        "cluster",
                        "namespace",
                        "more"
                    ]);
                    this.projects.isLoading = true;
                    if (!(o.sortBy || o.ascending !== undefined)) {
                        o.sortBy = module72.LIST_DEFAULT_ORDER[this.module] || "createTime";
                    }
                    if (!(o.limit !== Infinity && o.limit !== -1)) {
                        o.limit = -1;
                        o.page = 1;
                    }
                    o.limit = o.limit || 10;
                    c = yield request.get(`/kapis/resources.kubesphere.io/v1alpha3${this.getPath({
                        cluster,
                        namespace
                    })}/namespaces`, x({
                        labelSelector: "!kubesphere.io/devopsproject"
                    }, o));
                    s = T.default(c, "items", []).map((e)=>x({
                            cluster
                        }, _this.mapper(e)));
                    this.projects.update(x(x({
                        data: n ? [].concat(u.default(this.projects.data), u.default(s)) : s,
                        total: c.totalItems || c.total_count || s.length || 0
                    }, o), {}, {
                        limit: Number(o.limit) || 10,
                        page: Number(o.page) || 1,
                        isLoading: false
                    }, this.projects.silent ? {} : {
                        selectedRowKeys: []
                    }));
                })), function() {
                    return D.apply(this, arguments);
                })
            },
            {
                key: "fetchClusterConfigz",
                value: (c = E.default(l.default.mark(function* e(t) {
                    let a;
                    a = t.cluster;
                    yield this.fetchDetail({
                        name: a
                    });
                    I.default(globals, `edgeClusterConfig.${a}`, this.detail.configz);
                    return T.default(this.detail.configz, "ksVersion", "") !== "";
                })), function(e) {
                    return c.apply(this, arguments);
                })
            },
            {
                key: "fetchKubeEdgeIp",
                value: (o = E.default(l.default.mark(function* e() {
                    let t;
                    let a;
                    t = yield request.get("/kapis/infra.edgewize.io/v1alpha1/config");
                    a = T.default(t, "data.advertiseAddress", []);
                    return a;
                })), function() {
                    return o.apply(this, arguments);
                })
            },
            {
                key: "validate",
                value: (n = E.default(l.default.mark(function* e(a) {
                    const _this = this;
                    this.isValidating = true;
                    yield request.post(`${this.getResourceUrl()}/validation`, a, {}, function(e, a) {
                        if (e.status !== 430) {
                            _this.isValidating = false;
                            window.onunhandledrejection({
                                status: 400,
                                reason: t("VALIDATION_FAILED"),
                                message: a.message
                            });
                            return Promise.reject();
                        }
                    });
                    this.isValidating = false;
                })), function(e) {
                    return n.apply(this, arguments);
                })
            },
            {
                key: "batchDelete",
                value: function(e) {
                    const _this = this;
                    return this.submitting(Promise.all(e.map((e)=>{
                        const a = _this.list.data.find((t)=>t.name === e);
                        return request.delete(_this.getListUrl(a));
                    })));
                }
            },
            {
                key: "checkName",
                value: function(e, t) {
                    const a = this.getDetailUrl(e);
                    return request.get(a, x({}, t), {
                        headers: {
                            "x-check-exist": true
                        }
                    });
                }
            },
            {
                key: "fetchVersion",
                value: (r = E.default(l.default.mark(function* e(t) {
                    let a;
                    let r;
                    a = t.cluster;
                    r = yield request.get(`kapis/clusters/${a}/version`.replace("/clusters/default", ""));
                    this.version = T.default(r, "kubernetes.gitVersion");
                })), function(e) {
                    return r.apply(this, arguments);
                })
            }
        ]);
        return P;
    })(P.default);
    s = N.default(c.prototype, "initializing", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return true;
        }
    });
    f = N.default(c.prototype, "isAgentLoading", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return true;
        }
    });
    d = N.default(c.prototype, "agent", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return "";
        }
    });
    p = N.default(c.prototype, "isValidating", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return false;
        }
    });
    m = N.default(c.prototype, "isSubmitting", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return false;
        }
    });
    h = N.default(c.prototype, "version", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return "";
        }
    });
    v = N.default(c.prototype, "project", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {}
    });
    N.default(c.prototype, "setProject", [
        module14.action
    ], Object.getOwnPropertyDescriptor(c.prototype, "setProject"), c.prototype);
    N.default(c.prototype, "fetchList", [
        module14.action
    ], Object.getOwnPropertyDescriptor(c.prototype, "fetchList"), c.prototype);
    N.default(c.prototype, "fetchDetail", [
        module14.action
    ], Object.getOwnPropertyDescriptor(c.prototype, "fetchDetail"), c.prototype);
    N.default(c.prototype, "fetchProjects", [
        module14.action
    ], Object.getOwnPropertyDescriptor(c.prototype, "fetchProjects"), c.prototype);
    N.default(c.prototype, "fetchClusterConfigz", [
        module14.action
    ], Object.getOwnPropertyDescriptor(c.prototype, "fetchClusterConfigz"), c.prototype);
    N.default(c.prototype, "fetchKubeEdgeIp", [
        module14.action
    ], Object.getOwnPropertyDescriptor(c.prototype, "fetchKubeEdgeIp"), c.prototype);
    N.default(c.prototype, "validate", [
        module14.action
    ], Object.getOwnPropertyDescriptor(c.prototype, "validate"), c.prototype);
    g = N.default(c.prototype, "createWithKubeConfig", [
        module14.action
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            const _this = this;
            return function(t, { name }) {
                return request.post(`${_this.getResourceUrl()}/${name}`, t);
            };
        }
    });
    y = N.default(c.prototype, "delete", [
        module14.action
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            const _this = this;
            return function(t) {
                return _this.submitting(request.delete(`${_this.getResourceUrl()}/${t.name}`));
            };
        }
    });
    N.default(c.prototype, "batchDelete", [
        module14.action
    ], Object.getOwnPropertyDescriptor(c.prototype, "batchDelete"), c.prototype);
    N.default(c.prototype, "checkName", [
        module14.action
    ], Object.getOwnPropertyDescriptor(c.prototype, "checkName"), c.prototype);
    N.default(c.prototype, "fetchVersion", [
        module14.action
    ], Object.getOwnPropertyDescriptor(c.prototype, "fetchVersion"), c.prototype);
    exports.default = c;
})(require("./module-69.js").default);
