"use strict";
((e)=>{
    const module20 = require("utils/babel-helpers/interopRequireDefault").default;
    require("unpacked/module-12.js");
    require("unpacked/module-5.js");
    require("unpacked/module-11.js");
    require("unpacked/module-6.js");
    require("unpacked/module-30.js").default;
    require("unpacked/module-18.js");
    require("unpacked/module-16.js");
    require("unpacked/module-27.js");
    require("unpacked/module-9.js");
    require("unpacked/module-13.js");
    require("unpacked/module-10.js");
    require("unpacked/module-4.js");
    require("unpacked/module-22.js");
    require("unpacked/module-23.js");
    require("unpacked/module-17.js");
    require("unpacked/module-38.js");
    require("unpacked/module-7.js");
    require("unpacked/module-32.js");
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = undefined;
    require("unpacked/module-12.js");
    require("unpacked/module-45.js");
    require("unpacked/module-5.js");
    require("unpacked/module-11.js");
    require("unpacked/module-6.js");
    require("unpacked/module-30.js").default;
    require("unpacked/module-18.js");
    require("unpacked/module-28.js");
    require("unpacked/module-42.js");
    require("unpacked/module-16.js");
    require("unpacked/module-27.js");
    require("unpacked/module-34.js");
    require("unpacked/module-15.js");
    require("unpacked/module-9.js");
    require("unpacked/module-13.js");
    require("unpacked/module-10.js");
    require("unpacked/module-4.js");
    require("unpacked/module-22.js");
    require("unpacked/module-23.js");
    require("unpacked/module-57.js");
    require("unpacked/module-17.js");
    require("unpacked/module-38.js");
    require("unpacked/module-7.js");
    require("unpacked/module-32.js");
    const a = module20(require("utils/babel-helpers/slicedToArray").default);
    const i = module20(require("unpacked/module-61.js").default);
    const l = module20(require("unpacked/module-31.js").default);
    const s = module20(require("unpacked/module-58.js").default);
    const u = module20(require("unpacked/module-41.js"));
    require("unpacked/module-41.js");
    let c;
    let f;
    let d;
    let p;
    let h;
    let v;
    let m;
    let g;
    let y;
    const b = module20(require("utils/babel-helpers/asyncToGenerator").default);
    const C = module20(require("unpacked/module-65.js").default);
    const w = module20(require("unpacked/module-36.js").default);
    const _ = module20(require("unpacked/module-37.js").default);
    const x = module20(require("unpacked/module-88.js").default);
    const M = module20(require("unpacked/module-55.js").default);
    const E = module20(require("utils/babel-helpers/possibleConstructorReturn").default);
    const k = module20(require("unpacked/module-51.js"));
    const O = module20(require("unpacked/module-49.js").default);
    module20(require("utils/babel-helpers/initializerWarningHelper").default);
    const S = module20(require("unpacked/module-136.js").default);
    const L = module20(require("unpacked/module-26.js").default);
    const z = module20(require("unpacked/module-74.js").default);
    const module14 = require("unpacked/module-14.js");
    const T = module20(require("stores/base"));
    const V = module20(require("stores/base.list"));
    const module72 = require("utils/constants");
    const module148 = require("utils/EventBus");
    const module144 = require("utils/events");
    function R(e, t) {
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
    function j(e) {
        for(let t = 1; t < arguments.length; t++){
            var n = arguments[t] ?? {};
            if (t % 2) {
                R(Object(n), true).forEach((t)=>{
                    l.default(e, t, n[t]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
            } else {
                R(Object(n)).forEach((t)=>{
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
        }
        return e;
    }
    function N(e) {
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
            const r = k.default(e);
            if (t) {
                const o = k.default(this).constructor;
                n = Reflect.construct(r, arguments, o);
            } else {
                n = r.apply(this, arguments);
            }
            return E.default(this, n);
        };
    }
    c = ((n)=>{
        M.default(B, n);
        let r;
        let o;
        let l;
        let c;
        let E;
        let k;
        let O;
        let D;
        let T;
        let R;
        var I = N(B);
        function B(...n_1) {
            let e;
            w.default(this, B);
            e = I.call(this, ...n_1);
            C.default(e, "initializing", f, x.default(e));
            C.default(e, "isAgentLoading", d, x.default(e));
            C.default(e, "agent", p, x.default(e));
            C.default(e, "isValidating", h, x.default(e));
            C.default(e, "isSubmitting", v, x.default(e));
            C.default(e, "version", m, x.default(e));
            e.module = "clusters";
            C.default(e, "project", g, x.default(e));
            e.projects = new V.default;
            e.getAgentUrl = function({ cluster }) {
                return `kapis/cluster.kubesphere.io/v1alpha1/clusters/${cluster}/agent/deployment`;
            };
            e.getTenantUrl = function(t = {}) {
                return `kapis/tenant.kubesphere.io/v1beta1${e.getPath(t)}/${e.module}`;
            };
            C.default(e, "fetchAllCluster", y, x.default(e));
            e.checkSpringCloudIfActive = (()=>{
                const e = b.default(u.default.mark(function e(t) {
                    let n;
                    let r;
                    let o;
                    return u.default.wrap(function(e) {
                        while(true){
                            switch(e.prev = e.next){
                                case 0:
                                    n = t.cluster;
                                    r = L.default(globals, "ksConfig.multicluster", false);
                                    e.next = 4;
                                    return request.get(`/kapis${r ? `/clusters/${n}` : ""}/resources.kubesphere.io/v1alpha3/customresourcedefinitions?name=configurations.springcloud.kubesphere.io`, {}, {}, function() {
                                        return false;
                                    });
                                case 4:
                                    if (!(o = e.sent) || o.totalItems !== 1) {
                                        e.next = 7;
                                        break;
                                    }
                                    return e.abrupt("return", true);
                                case 7:
                                    return e.abrupt("return", false);
                                case 8:
                                case "end":
                                    return e.stop();
                            }
                        }
                    }, e);
                }));
                return function(t) {
                    return e.apply(this, arguments);
                };
            })();
            e.afterChange = function(t) {
                module148.eventBus.emit(module144.eventKeys.CLUSTER_CHANGE, e.mapper(t));
            };
            e.afterDelete = function(t) {
                module148.eventBus.emit(module144.eventKeys.DELETE_CLUSTER, e.mapper(t));
            };
            return e;
        }
        _.default(B, [
            {
                key: "fetchList",
                value: (R = b.default(u.default.mark(function* e() {
                    let t;
                    let n;
                    let r;
                    let o;
                    let a;
                    const l = arguments;
                    (t = l.length > 0 && l[0] !== undefined ? l[0] : {}).from;
                    n = t.more;
                    r = s.default(t, [
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
                    if (!globals.app.isMultiCluster) {
                        o = {
                            items: [
                                module72.DEFAULT_CLUSTER
                            ]
                        };
                    } else {
                        o = yield request.get(this.getResourceUrl({}), r);
                    }
                    a = L.default(o, "items", []).map(this.mapper);
                    this.list.update(j(j({
                        data: n ? [].concat(i.default(this.list.data), i.default(a)) : a,
                        total: o.totalItems || o.total_count || a.length || 0
                    }, r), {}, {
                        limit: Number(r.limit) || 10,
                        page: Number(r.page) || 1,
                        isLoading: false
                    }, this.list.silent ? {} : {
                        selectedRowKeys: []
                    }));
                    a.forEach((e)=>{
                        module148.eventBus.emit(module144.eventKeys.CLUSTER_CHANGE, e);
                    });
                    return a;
                })), function() {
                    return R.apply(this, arguments);
                })
            },
            {
                key: "fetchGrantedList",
                value: (T = b.default(u.default.mark(function* e() {
                    let t;
                    let n;
                    let r;
                    let o;
                    let l;
                    let c;
                    let f;
                    let d;
                    let p;
                    let h;
                    let v;
                    const m = arguments;
                    (t = m.length > 0 && m[0] !== undefined ? m[0] : {}).from;
                    n = t.more;
                    r = s.default(t, [
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
                    if (!globals.app.isMultiCluster) {
                        o = {
                            items: [
                                module72.DEFAULT_CLUSTER
                            ]
                        };
                    } else {
                        l = j(j({}, r), {}, {
                            labelSelector: `${r.labelSelector ? `${r.labelSelector},` : ""}cluster.kubesphere.io/visibility!=public`
                        });
                        c = j(j({}, r), {}, {
                            labelSelector: `${r.labelSelector ? `${r.labelSelector},` : ""}cluster.kubesphere.io/visibility=public`
                        });
                        f = yield Promise.all([
                            request.get(this.getTenantUrl({}), l),
                            request.get(this.getResourceUrl({}), c)
                        ]);
                        d = a.default(f, 2);
                        p = d[0];
                        h = d[1];
                        o = {
                            items: [].concat(i.default(h.items), i.default(p.items)),
                            totalItems: p.totalItems + h.totalItems
                        };
                    }
                    v = L.default(o, "items", []).map(this.mapper);
                    this.list.update(j(j({
                        data: n ? [].concat(i.default(this.list.data), i.default(v)) : v,
                        total: o.totalItems || o.total_count || v.length || 0
                    }, r), {}, {
                        limit: Number(r.limit) || 10,
                        page: Number(r.page) || 1,
                        isLoading: false
                    }, this.list.silent ? {} : {
                        selectedRowKeys: []
                    }));
                })), function() {
                    return T.apply(this, arguments);
                })
            },
            {
                key: "fetchListByUser",
                value: (D = b.default(u.default.mark(function* e() {
                    let t;
                    let n;
                    let r;
                    let o;
                    let a;
                    const l = arguments;
                    (t = l.length > 0 && l[0] !== undefined ? l[0] : {}).from;
                    n = t.more;
                    r = s.default(t, [
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
                    if (!globals.app.isMultiCluster) {
                        o = {
                            items: [
                                module72.DEFAULT_CLUSTER
                            ]
                        };
                    } else {
                        o = yield request.get(this.getTenantUrl({}), r);
                    }
                    a = L.default(o, "items", []).map(this.mapper);
                    this.list.update(j(j({
                        data: n ? [].concat(i.default(this.list.data), i.default(a)) : a,
                        total: o.totalItems || o.total_count || a.length || 0
                    }, r), {}, {
                        limit: Number(r.limit) || 10,
                        page: Number(r.page) || 1,
                        isLoading: false
                    }, this.list.silent ? {} : {
                        selectedRowKeys: []
                    }));
                    a.forEach((e)=>{
                        module148.eventBus.emit(module144.eventKeys.CLUSTER_CHANGE, e);
                    });
                    return a;
                })), function() {
                    return D.apply(this, arguments);
                })
            },
            {
                key: "fetchDetail",
                value: (O = b.default(u.default.mark(function* t() {
                    let n;
                    let o;
                    let a;
                    let i;
                    let l;
                    const c = arguments;
                    n = c.length > 0 && c[0] !== undefined ? c[0] : {};
                    ({ redirect: o = true } = n);
                    a = s.default(n, [
                        "redirect"
                    ]);
                    this.isLoading = true;
                    if (!globals.app.isMultiCluster) {
                        i = this.mapper(S.default(module72.DEFAULT_CLUSTER));
                    } else {
                        l = yield request.get(`${this.getResourceUrl(a)}/${a.name}`, null, null, function(t, n) {
                            if (o && n.reason === "Not Found") {
                                e.navigateTo("/404");
                            }
                        });
                        i = j(j({}, a), this.mapper(l));
                    }
                    this.detail = i;
                    this.isLoading = false;
                    return i;
                })), function() {
                    return O.apply(this, arguments);
                })
            },
            {
                key: "fetchAgent",
                value: (k = b.default(u.default.mark(function* e(t) {
                    let n;
                    this.isAgentLoading = true;
                    n = yield request.get(this.getAgentUrl(t));
                    this.agent = n;
                    this.isAgentLoading = false;
                })), function(e) {
                    return k.apply(this, arguments);
                })
            },
            {
                key: "validate",
                value: (E = b.default(u.default.mark(function* e(n) {
                    const _this = this;
                    this.isValidating = true;
                    yield request.post("kapis/cluster.kubesphere.io/v1alpha1/clusters/validation", n, {}, function(e, n) {
                        if (e.status !== 430) {
                            _this.isValidating = false;
                            window.onunhandledrejection({
                                status: 400,
                                reason: t("VALIDATION_FAILED"),
                                message: n.message
                            });
                            return Promise.reject();
                        }
                    });
                    this.isValidating = false;
                })), function(e) {
                    return E.apply(this, arguments);
                })
            },
            {
                key: "setProject",
                value: function(e) {
                    this.project = e;
                }
            },
            {
                key: "fetchProjects",
                value: (c = b.default(u.default.mark(function* e() {
                    let t;
                    let cluster;
                    let namespace;
                    let o;
                    let a;
                    let l;
                    let c;
                    const _this = this;
                    const d = arguments;
                    t = d.length > 0 && d[0] !== undefined ? d[0] : {};
                    cluster = t.cluster;
                    namespace = t.namespace;
                    o = t.more;
                    a = s.default(t, [
                        "cluster",
                        "namespace",
                        "more"
                    ]);
                    this.projects.isLoading = true;
                    if (!(a.sortBy || a.ascending !== undefined)) {
                        a.sortBy = module72.LIST_DEFAULT_ORDER[this.module] || "createTime";
                    }
                    if (!(a.limit !== Infinity && a.limit !== -1)) {
                        a.limit = -1;
                        a.page = 1;
                    }
                    a.limit = a.limit || 10;
                    l = yield request.get(`kapis/resources.kubesphere.io/v1alpha3${this.getPath({
                        cluster,
                        namespace
                    })}/namespaces`, j({
                        labelSelector: "!kubesphere.io/devopsproject"
                    }, a));
                    c = L.default(l, "items", []).map((e)=>j({
                            cluster
                        }, _this.mapper(e)));
                    this.projects.update(j(j({
                        data: o ? [].concat(i.default(this.projects.data), i.default(c)) : c,
                        total: l.totalItems || l.total_count || c.length || 0
                    }, a), {}, {
                        limit: Number(a.limit) || 10,
                        page: Number(a.page) || 1,
                        isLoading: false
                    }, this.projects.silent ? {} : {
                        selectedRowKeys: []
                    }));
                })), function() {
                    return c.apply(this, arguments);
                })
            },
            {
                key: "fetchVersion",
                value: (l = b.default(u.default.mark(function* e(t) {
                    let n;
                    let r;
                    let o;
                    n = t.cluster;
                    r = "kapis/version";
                    if (globals.ksConfig.multicluster) {
                        r = `kapis/clusters/${n}/version`;
                    }
                    o = yield request.get(r);
                    this.version = L.default(o, "kubernetes.gitVersion");
                })), function(e) {
                    return l.apply(this, arguments);
                })
            },
            {
                key: "updateKubeConfig",
                value: (o = b.default(u.default.mark(function* e(t) {
                    let n;
                    let r;
                    n = t.cluster;
                    r = t.data;
                    return this.submitting(request.put(`/kapis/cluster.kubesphere.io/v1alpha1/clusters/${n}/kubeconfig`, r));
                })), function(e) {
                    return o.apply(this, arguments);
                })
            },
            {
                key: "fetchClusterConfigz",
                value: (r = b.default(u.default.mark(function* e(t) {
                    let n;
                    n = t.cluster;
                    yield this.fetchDetail({
                        name: n
                    });
                    z.default(globals, `clusterConfig.${n}`, this.detail.configz);
                    return L.default(this.detail.configz, "ksVersion", "") !== "";
                })), function(e) {
                    return r.apply(this, arguments);
                })
            }
        ]);
        return B;
    })(T.default);
    f = O.default(c.prototype, "initializing", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return true;
        }
    });
    d = O.default(c.prototype, "isAgentLoading", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return true;
        }
    });
    p = O.default(c.prototype, "agent", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return "";
        }
    });
    h = O.default(c.prototype, "isValidating", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return false;
        }
    });
    v = O.default(c.prototype, "isSubmitting", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return false;
        }
    });
    m = O.default(c.prototype, "version", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            return "";
        }
    });
    g = O.default(c.prototype, "project", [
        module14.observable
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {}
    });
    O.default(c.prototype, "fetchList", [
        module14.action
    ], Object.getOwnPropertyDescriptor(c.prototype, "fetchList"), c.prototype);
    O.default(c.prototype, "fetchGrantedList", [
        module14.action
    ], Object.getOwnPropertyDescriptor(c.prototype, "fetchGrantedList"), c.prototype);
    O.default(c.prototype, "fetchListByUser", [
        module14.action
    ], Object.getOwnPropertyDescriptor(c.prototype, "fetchListByUser"), c.prototype);
    O.default(c.prototype, "fetchDetail", [
        module14.action
    ], Object.getOwnPropertyDescriptor(c.prototype, "fetchDetail"), c.prototype);
    O.default(c.prototype, "fetchAgent", [
        module14.action
    ], Object.getOwnPropertyDescriptor(c.prototype, "fetchAgent"), c.prototype);
    O.default(c.prototype, "validate", [
        module14.action
    ], Object.getOwnPropertyDescriptor(c.prototype, "validate"), c.prototype);
    O.default(c.prototype, "setProject", [
        module14.action
    ], Object.getOwnPropertyDescriptor(c.prototype, "setProject"), c.prototype);
    O.default(c.prototype, "fetchProjects", [
        module14.action
    ], Object.getOwnPropertyDescriptor(c.prototype, "fetchProjects"), c.prototype);
    O.default(c.prototype, "fetchVersion", [
        module14.action
    ], Object.getOwnPropertyDescriptor(c.prototype, "fetchVersion"), c.prototype);
    O.default(c.prototype, "updateKubeConfig", [
        module14.action
    ], Object.getOwnPropertyDescriptor(c.prototype, "updateKubeConfig"), c.prototype);
    O.default(c.prototype, "fetchClusterConfigz", [
        module14.action
    ], Object.getOwnPropertyDescriptor(c.prototype, "fetchClusterConfigz"), c.prototype);
    y = O.default(c.prototype, "fetchAllCluster", [
        module14.action
    ], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function() {
            const _this = this;
            return (()=>{
                const t = b.default(u.default.mark(function* t(n) {
                    let r;
                    r = yield request.get("/kapis/resources.kubesphere.io/v1alpha3/clusters", n);
                    return L.default(r, "items", []).map(_this.mapper);
                }));
                return function(e) {
                    return t.apply(this, arguments);
                };
            })();
        }
    });
    exports.default = c;
})(require("unpacked/module-69.js").default);
