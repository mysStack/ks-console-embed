"use strict";
const module20 = require("utils/babel-helpers/interopRequireDefault").default;
require("unpacked/module-12.js");
require("unpacked/module-5.js");
require("unpacked/module-11.js");
require("unpacked/module-29.js");
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
require("unpacked/module-29.js");
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
const n = module20(require("unpacked/module-61.js").default);
const l = module20(require("unpacked/module-58.js").default);
const u = module20(require("unpacked/module-41.js"));
require("unpacked/module-41.js");
let o;
let i;
let c;
let s;
const f = module20(require("utils/babel-helpers/asyncToGenerator").default);
const d = module20(require("unpacked/module-31.js").default);
const p = module20(require("unpacked/module-65.js").default);
const m = module20(require("unpacked/module-36.js").default);
const h = module20(require("unpacked/module-37.js").default);
const v = module20(require("unpacked/module-88.js").default);
const g = module20(require("unpacked/module-55.js").default);
const y = module20(require("utils/babel-helpers/possibleConstructorReturn").default);
const E = module20(require("unpacked/module-51.js"));
const b = module20(require("unpacked/module-49.js").default);
module20(require("utils/babel-helpers/initializerWarningHelper").default);
const _ = module20(require("unpacked/module-26.js").default);
const O = module20(require("unpacked/module-74.js").default);
const module14 = require("unpacked/module-14.js");
function k(e) {
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
        const r = E.default(e);
        if (t) {
            const n = E.default(this).constructor;
            a = Reflect.construct(r, arguments, n);
        } else {
            a = r.apply(this, arguments);
        }
        return y.default(this, a);
    };
}
o = ((e)=>{
    g.default(y, e);
    let a;
    var d = k(y);
    function y(...a_1) {
        let e;
        m.default(this, y);
        e = d.call(this, ...a_1);
        e.module = "rules";
        e.getRulePath = function({ cluster, namespace, type }) {
            if (namespace) {
                return "rulegroups";
            }
            if (cluster) {
                return "clusterrulegroups";
            }
            if ((type === undefined ? "" : type) === "builtin") {
                return "globalrulegroups";
            }
            return "clusterrulegroups";
        };
        e.getListUrl = function(t = {}) {
            return `${e.apiVersion}${e.getPath(t)}/${e.getRulePath(t)}${t.dryRun ? "?dryRun=All" : ""}`;
        };
        e.getResourceUrl = e.getListUrl;
        p.default(e, "ruleCount", i, v.default(e));
        p.default(e, "builtinRuleCount", c, v.default(e));
        p.default(e, "targetsMetadata", s, v.default(e));
        e.getParamsType = function(e) {
            const t = {};
            if (!e.namespace) {
                if (e.cluster) {
                    if (e.type === "builtin") {
                        t.builtin = true;
                    } else {
                        t.builtin = false;
                    }
                }
            }
            return t;
        };
        e.getFilterParams = function(e) {
            const t = {
                ...e
            };
            if (t.enable) {
                t.labelSelector = `alerting.kubesphere.io/enable=${t.enable}`;
                delete t.enable;
            }
            return t;
        };
        e.fetchMetric = (()=>{
            const e = f.default(u.default.mark(function e(t) {
                let expr;
                let step;
                let start;
                let end;
                let o;
                let i;
                let c;
                return u.default.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                expr = t.expr;
                                step = t.step;
                                start = t.start;
                                end = t.end;
                                o = t.cluster;
                                i = t.namespace;
                                if (expr) {
                                    e.next = 3;
                                    break;
                                }
                                return e.abrupt("return", []);
                            case 3:
                                e.next = 5;
                                return request.get("kapis/monitoring.kubesphere.io/v1beta1/targets/query", {
                                    cluster: o,
                                    namespace: i,
                                    expr,
                                    step,
                                    start,
                                    end
                                }, null, function() {});
                            case 5:
                                c = e.sent;
                                return e.abrupt("return", _.default(c, "data.result", []));
                            case 7:
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
        return e;
    }
    h.default(y, [
        {
            key: "getPath",
            value: function({ cluster, namespace } = {}) {
                let r = "";
                if (cluster) {
                    r += `/clusters/${cluster}`;
                }
                if (namespace) {
                    r += `/namespaces/${namespace}`;
                }
                return r;
            }
        },
        {
            key: "fetchList",
            value: async function() {
                let t;
                let a;
                let r;
                let o;
                let i;
                let c;
                let s;
                let f;
                let total;
                const _this = this;
                const m = arguments;
                t = m.length > 0 && m[0] !== undefined ? m[0] : {};
                a = t.cluster;
                t.workspace;
                r = t.namespace;
                o = t.more;
                i = t.type;
                c = l.default(t, [
                    "cluster",
                    "workspace",
                    "namespace",
                    "more",
                    "type"
                ]);
                this.list.isLoading = true;
                if (!(c.sortBy || c.ascending !== undefined)) {
                    c.sortBy = "createTime";
                }
                if (!(c.limit !== Infinity && c.limit !== -1)) {
                    c.limit = -1;
                    c.page = 1;
                }
                c.limit = c.limit || 10;
                if (i === "builtin") {
                    c.builtin = true;
                }
                s = await request.get(this.getResourceUrl({
                    cluster: a,
                    namespace: r,
                    type: i
                }), {
                    ...this.getFilterParams(c),
                    ...this.getParamsType({
                        namespace: r,
                        cluster: a,
                        type: i
                    })
                });
                f = (_.default(s, "items") || []).map((e)=>({
                        cluster: a,
                        namespace: r,
                        ..._this.mapper(e)
                    }));
                total = s.totalItems;
                this.list.update({
                    data: o ? [].concat(n.default(this.list.data), n.default(f)) : f,
                    total,
                    ...c,
                    limit: Number(c.limit) || 10,
                    page: Number(c.page) || 1,
                    isLoading: false,
                    ...!this.list.silent ? {
                        selectedRowKeys: []
                    } : {}
                });
                return f;
            }
        },
        {
            key: "fetchCount",
            value: async function(t) {
                let a;
                let r;
                let n;
                a = t.cluster;
                r = t.namespace;
                n = await Promise.all([
                    request.get(this.getResourceUrl({
                        cluster: a,
                        namespace: r
                    }), {
                        page: 1,
                        limit: 1,
                        builtin: false
                    }),
                    request.get(this.getResourceUrl({
                        cluster: a,
                        namespace: r,
                        type: "builtin"
                    }), {
                        page: 1,
                        limit: 1,
                        builtin: true
                    })
                ]);
                this.ruleCount = _.default(n, "0.totalItems", 0);
                this.builtinRuleCount = _.default(n, "1.totalItems", 0);
            }
        },
        {
            key: "fetchMetadata",
            value: (a = f.default(u.default.mark(function e(t) {
                let a;
                let r;
                let n;
                let l;
                return u.default.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                a = t.cluster;
                                r = t.namespace;
                                e.next = 3;
                                return request.get("kapis/monitoring.kubesphere.io/v1beta1/targets/metadata", {
                                    cluster: a,
                                    namespace: r
                                });
                            case 3:
                                e.t0 = e.sent;
                                if (e.t0) {
                                    e.next = 6;
                                    break;
                                }
                                e.t0 = {
                                    data: []
                                };
                            case 6:
                                n = e.t0;
                                l = n.data;
                                this.targetsMetadata = l || [];
                            case 9:
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
            key: "create",
            value: function(e, t = {}) {
                return this.submitting(request.post(this.getListUrl({
                    ...t,
                    k8sOpt: true
                }), e));
            }
        },
        {
            key: "update",
            value: async function(t, a) {
                let r;
                let n;
                r = await request.get(this.getDetailUrl({
                    ...t,
                    k8sOpt: true
                }));
                if (n = _.default(r, "metadata.resourceVersion")) {
                    O.default(a, "metadata.resourceVersion", n);
                }
                return this.submitting(request.put(this.getDetailUrl({
                    ...t,
                    k8sOpt: true
                }), a));
            }
        },
        {
            key: "patch",
            value: function(e, t) {
                return this.submitting(request.patch(this.getDetailUrl({
                    ...e,
                    k8sOpt: true
                }), t));
            }
        },
        {
            key: "batchPatch",
            value: function(e, t, a) {
                const _this = this;
                return this.submitting(Promise.all(e.map((name)=>request.patch(_this.getDetailUrl({
                        ...t,
                        name,
                        k8sOpt: true
                    }), a))));
            }
        },
        {
            key: "delete",
            value: function(e) {
                return this.submitting(request.delete(this.getDetailUrl({
                    ...e,
                    k8sOpt: true
                })));
            }
        },
        {
            key: "batchDelete",
            value: function(e) {
                const _this = this;
                return this.submitting(Promise.all(e.map((e)=>{
                    const a = _this.list.data.find((t)=>t.name === e);
                    return request.delete(_this.getDetailUrl({
                        ...a,
                        k8sOpt: true
                    }));
                })));
            }
        },
        {
            key: "checkName",
            value: function(e, t) {
                return request.get(this.getDetailUrl({
                    ...e,
                    k8sOpt: true
                }), {
                    ...t
                }, {
                    headers: {
                        "x-check-exist": true
                    }
                });
            }
        },
        {
            key: "yamlApiVersion",
            get: function() {
                return "alerting.kubesphere.io/v2beta1";
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return "proxy-api/proxy/alerting.kubesphere.io/v2beta1/";
            }
        }
    ]);
    return y;
})(module20(require("stores/base")).default);
i = b.default(o.prototype, "ruleCount", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 0;
    }
});
c = b.default(o.prototype, "builtinRuleCount", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 0;
    }
});
s = b.default(o.prototype, "targetsMetadata", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
});
b.default(o.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "fetchList"), o.prototype);
b.default(o.prototype, "fetchCount", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "fetchCount"), o.prototype);
b.default(o.prototype, "fetchMetadata", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "fetchMetadata"), o.prototype);
b.default(o.prototype, "create", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "create"), o.prototype);
b.default(o.prototype, "update", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "update"), o.prototype);
b.default(o.prototype, "patch", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "patch"), o.prototype);
b.default(o.prototype, "batchPatch", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "batchPatch"), o.prototype);
b.default(o.prototype, "delete", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "delete"), o.prototype);
b.default(o.prototype, "batchDelete", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "batchDelete"), o.prototype);
b.default(o.prototype, "checkName", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "checkName"), o.prototype);
exports.default = o;
