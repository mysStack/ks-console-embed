"use strict";
const module20 = require("./module-20.js").default;
require("./module-12.js");
require("./module-5.js");
require("./module-11.js");
require("./module-6.js");
require("./module-30.js").default;
require("./module-73.js");
require("./module-18.js");
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
require("./module-45.js");
require("./module-5.js");
require("./module-11.js");
require("./module-6.js");
require("./module-30.js").default;
require("./module-73.js");
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
require("./module-38.js");
require("./module-7.js");
require("./module-32.js");
const n = module20(require("./module-41.js"));
const l = module20(require("./module-61.js").default);
const u = module20(require("./module-58.js").default);
require("./module-41.js");
let o;
let i;
let c;
const s = module20(require("./module-44.js").default);
const f = module20(require("./module-31.js").default);
const d = module20(require("./module-65.js").default);
const p = module20(require("./module-36.js").default);
const m = module20(require("./module-37.js").default);
const h = module20(require("./module-88.js").default);
const v = module20(require("./module-55.js").default);
const g = module20(require("./module-56.js").default);
const y = module20(require("./module-51.js"));
const E = module20(require("./module-49.js").default);
module20(require("./module-66.js").default);
const b = module20(require("./module-26.js").default);
const module14 = require("./module-14.js");
const module72 = require("./module-72.js");
o = ((e)=>{
    v.default(o, e);
    var r = ((e)=>{
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
            const r = y.default(e);
            if (t) {
                const n = y.default(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return g.default(this, a);
        };
    })(o);
    function o(...a_1) {
        let e;
        p.default(this, o);
        e = r.call(this, ...a_1);
        d.default(e, "ruleCount", i, h.default(e));
        d.default(e, "builtinRuleCount", c, h.default(e));
        e.module = "alerts";
        e.getAlertPath = function({ cluster, namespace, type }) {
            if (namespace) {
                return "alerts";
            }
            if (cluster) {
                return "clusteralerts";
            }
            if (type === "builtin") {
                return "globalalerts";
            }
            return "clusteralerts";
        };
        e.getListUrl = function(t = {}) {
            return `${e.apiVersion}${e.getPath(t)}/${e.getAlertPath(t)}${t.dryRun ? "?dryRun=All" : ""}`;
        };
        e.getResourceUrl = e.getListUrl;
        e.getFilterParams = function(e) {
            const t = {
                ...e
            };
            const a = [];
            if (t["labels.severity"]) {
                a.push(`severity=${t["labels.severity"]}`);
                delete t["labels.severity"];
            }
            if (t["labels.alertname"]) {
                a.push(`alertname~${t["labels.alertname"]}`);
                delete t["labels.alertname"];
            }
            if (a.length > 0) {
                t.label_filters = a.join(",");
            }
            return t;
        };
        e.getParamsType = function(e) {
            const t = {};
            if (e.cluster) {
                if (e.type === "builtin") {
                    t.builtin = true;
                } else {
                    t.builtin = false;
                }
            }
            return t;
        };
        return e;
    }
    m.default(o, [
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
                let workspace;
                let o;
                let i;
                let ruleName;
                let s;
                let f;
                let d;
                let p;
                let total;
                const _this = this;
                const v = arguments;
                t = v.length > 0 && v[0] !== undefined ? v[0] : {};
                a = t.cluster;
                workspace = t.workspace;
                o = t.namespace;
                i = t.more;
                ruleName = t.ruleName;
                s = t.type;
                f = u.default(t, [
                    "cluster",
                    "workspace",
                    "namespace",
                    "more",
                    "ruleName",
                    "type"
                ]);
                this.list.isLoading = true;
                if (!(f.sortBy || f.ascending !== undefined)) {
                    f.sortBy = module72.LIST_DEFAULT_ORDER[this.module] || "createTime";
                }
                if (!(f.limit !== Infinity && f.limit !== -1)) {
                    f.limit = -1;
                    f.page = 1;
                }
                f.limit = f.limit || 10;
                if (s === "builtin") {
                    f.builtin = true;
                }
                d = await request.get(this.getResourceUrl({
                    cluster: a,
                    workspace,
                    namespace: o,
                    ruleName,
                    type: s
                }), {
                    ...this.getFilterParams(f),
                    ...this.getParamsType({
                        cluster: a,
                        type: s
                    })
                });
                p = (b.default(d, "items") || []).map((e, id)=>({
                        cluster: a,
                        namespace: o,
                        id,
                        ..._this.mapper(e)
                    }));
                total = d.totalItems;
                this.list.update({
                    data: i ? [].concat(l.default(this.list.data), l.default(p)) : p,
                    total,
                    ...f,
                    limit: Number(f.limit) || 10,
                    page: Number(f.page) || 1,
                    isLoading: false,
                    ...!this.list.silent ? {
                        selectedRowKeys: []
                    } : {}
                });
                return p;
            }
        },
        {
            key: "fetchCount",
            value: async function(t) {
                let a;
                let r;
                let l;
                a = t.cluster;
                r = t.namespace;
                l = await Promise.all([
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
                this.ruleCount = b.default(l, "0.totalItems", 0);
                this.builtinRuleCount = b.default(l, "1.totalItems", 0);
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return "proxy-api/proxy/alerting.kubesphere.io/v2beta1/";
            }
        }
    ]);
    return o;
})(module20(require("./module-68.js")).default);
i = E.default(o.prototype, "ruleCount", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 0;
    }
});
c = E.default(o.prototype, "builtinRuleCount", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 0;
    }
});
E.default(o.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "fetchList"), o.prototype);
E.default(o.prototype, "fetchCount", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "fetchCount"), o.prototype);
exports.default = o;
