"use strict";
((e)=>{
    const module20 = require("utils/babel-helpers/interopRequireDefault").default;
    require("./module-12.js");
    require("./module-5.js");
    require("./module-11.js");
    require("./module-6.js");
    require("./module-18.js");
    require("./module-16.js");
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
    require("./module-7.js");
    const n = module20(require("./module-41.js"));
    const l = module20(require("./module-61.js").default);
    const u = module20(require("./module-31.js").default);
    const o = module20(require("./module-58.js").default);
    require("./module-41.js");
    let i;
    const c = module20(require("utils/babel-helpers/asyncToGenerator").default);
    const s = module20(require("./module-36.js").default);
    const f = module20(require("./module-37.js").default);
    const d = module20(require("./module-55.js").default);
    const p = module20(require("utils/babel-helpers/possibleConstructorReturn").default);
    const m = module20(require("./module-51.js"));
    const h = module20(require("./module-49.js").default);
    const v = module20(require("./module-26.js").default);
    const g = module20(require("./module-189.js").default);
    const module14 = require("./module-14.js");
    const module72 = require("utils/constants");
    function b(e, t) {
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
    function _(e) {
        for(let t = 1; t < arguments.length; t++){
            var a = arguments[t] ?? {};
            if (t % 2) {
                b(Object(a), true).forEach((t)=>{
                    u.default(e, t, a[t]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(e, Object.getOwnPropertyDescriptors(a));
            } else {
                b(Object(a)).forEach((t)=>{
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                });
            }
        }
        return e;
    }
    function O(e) {
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
            const r = m.default(e);
            if (t) {
                const n = m.default(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return p.default(this, a);
        };
    }
    i = ((t)=>{
        d.default(p, t);
        let a;
        let r;
        let u;
        var i = O(p);
        function p(...a) {
            let e;
            s.default(this, p);
            e = i.call(this, ...a);
            e.module = "customScalings";
            e.getResourceUrl = function(t = {}) {
                return `${e.apiVersion}${e.getPath(t)}/scaledobjects`;
            };
            e.getListUrl = function(t = {}) {
                return `${e.apiVersion}${e.getPath(t)}/scaledobjects${t.dryRun ? "?dryRun=All" : ""}`;
            };
            return e;
        }
        f.default(p, [
            {
                key: "fetchList",
                value: (u = c.default(n.default.mark(function e() {
                    let t;
                    let a;
                    let r;
                    let u;
                    let i;
                    let c;
                    let s;
                    const _this = this;
                    const d = arguments;
                    return n.default.wrap(function(e) {
                        while(true){
                            switch(e.prev = e.next){
                                case 0:
                                    t = d.length > 0 && d[0] !== undefined ? d[0] : {};
                                    a = t.cluster;
                                    t.workspace;
                                    r = t.namespace;
                                    u = t.more;
                                    t.type;
                                    i = o.default(t, [
                                        "cluster",
                                        "workspace",
                                        "namespace",
                                        "more",
                                        "type"
                                    ]);
                                    this.list.isLoading = true;
                                    if (!(i.sortBy || i.ascending !== undefined)) {
                                        i.sortBy = module72.LIST_DEFAULT_ORDER[this.module] || "createTime";
                                    }
                                    if (!(i.limit !== Infinity && i.limit !== -1)) {
                                        i.limit = -1;
                                        i.page = 1;
                                    }
                                    i.limit = i.limit || 10;
                                    e.next = 7;
                                    return request.get(this.getResourceUrl({
                                        cluster: a,
                                        namespace: r
                                    }), i).catch(()=>{});
                                case 7:
                                    e.t0 = e.sent;
                                    if (e.t0) {
                                        e.next = 10;
                                        break;
                                    }
                                    e.t0 = {};
                                case 10:
                                    c = e.t0;
                                    s = v.default(c, "items", []).map((e)=>_({
                                            cluster: a
                                        }, _this.mapper(e)));
                                    this.list.update(_(_({
                                        data: u ? [].concat(l.default(this.list.data), l.default(s)) : s,
                                        total: c.totalItems || c.total_count || s.length || 0
                                    }, g.default(i, "labelSelector")), {}, {
                                        limit: Number(i.limit) || 10,
                                        page: Number(i.page) || 1,
                                        isLoading: false
                                    }, this.list.silent ? {} : {
                                        selectedRowKeys: []
                                    }));
                                    return e.abrupt("return", s);
                                case 14:
                                case "end":
                                    return e.stop();
                            }
                        }
                    }, e, this);
                })), function() {
                    return u.apply(this, arguments);
                })
            },
            {
                key: "fetchDetail",
                value: (r = c.default(n.default.mark(function* t(a, r) {
                    let l;
                    let u;
                    let o;
                    let i;
                    let c;
                    l = a.cluster;
                    u = a.namespace;
                    o = a.name;
                    this.isLoading = true;
                    i = yield request.get(this.getDetailUrl({
                        cluster: l,
                        namespace: u,
                        name: o
                    }), null, null, r || function(t) {
                        if (!(t.reason !== "NotFound" && t.reason !== "Forbidden")) {
                            e.navigateTo("/404");
                        }
                    });
                    c = _({
                        cluster: l
                    }, this.mapper(i));
                    this.detail = c;
                    this.isLoading = false;
                    return c;
                })), function(e, t) {
                    return r.apply(this, arguments);
                })
            },
            {
                key: "create",
                value: (a = c.default(n.default.mark(function* e(t) {
                    let a;
                    const r = arguments;
                    a = r.length > 1 && r[1] !== undefined ? r[1] : {};
                    return this.submitting(request.post(this.getListUrl(a), t));
                })), function(e) {
                    return a.apply(this, arguments);
                })
            },
            {
                key: "patch",
                value: function(e, t) {
                    return this.submitting(request.put(this.getDetailUrl(e), t));
                }
            }
        ]);
        return p;
    })(module20(require("stores/base")).default);
    h.default(i.prototype, "fetchList", [
        module14.action
    ], Object.getOwnPropertyDescriptor(i.prototype, "fetchList"), i.prototype);
    h.default(i.prototype, "fetchDetail", [
        module14.action
    ], Object.getOwnPropertyDescriptor(i.prototype, "fetchDetail"), i.prototype);
    h.default(i.prototype, "create", [
        module14.action
    ], Object.getOwnPropertyDescriptor(i.prototype, "create"), i.prototype);
    h.default(i.prototype, "patch", [
        module14.action
    ], Object.getOwnPropertyDescriptor(i.prototype, "patch"), i.prototype);
    exports.default = i;
})(require("./module-69.js").default);
