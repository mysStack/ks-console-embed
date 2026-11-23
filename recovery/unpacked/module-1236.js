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
const u = module20(require("./module-61.js").default);
const l = module20(require("./module-58.js").default);
require("./module-41.js");
let o;
let c;
let i;
const s = module20(require("./module-44.js").default);
const d = module20(require("./module-31.js").default);
const f = module20(require("./module-65.js").default);
const p = module20(require("./module-36.js").default);
const m = module20(require("./module-37.js").default);
const h = module20(require("./module-88.js").default);
const v = module20(require("./module-55.js").default);
const y = module20(require("./module-56.js").default);
const g = module20(require("./module-51.js"));
const _ = module20(require("./module-49.js").default);
module20(require("./module-66.js").default);
const E = module20(require("./module-26.js").default);
const module14 = require("./module-14.js");
const S = module20(require("./module-105.js"));
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
            const r = g.default(e);
            if (t) {
                const n = g.default(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return y.default(this, a);
        };
    })(o);
    function o(...a_1) {
        let e;
        p.default(this, o);
        e = r.call(this, ...a_1);
        f.default(e, "ruleCount", c, h.default(e));
        f.default(e, "builtinRuleCount", i, h.default(e));
        e.module = "alerts";
        e.getAlertPath = function() {
            return "globalalerts";
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
            if (t.cluster) {
                t.label_matcher = `{cluster=~"${t.cluster}"}`;
                delete t.cluster;
            }
            if (a.length > 0) {
                t.label_filters = a.join(",");
            }
            return t;
        };
        return e;
    }
    m.default(o, [
        {
            key: "getPath",
            value: function() {
                return "";
            }
        },
        {
            key: "fetchList",
            value: async function() {
                let t;
                let cluster;
                let workspace;
                let namespace;
                let c;
                let ruleName;
                let s;
                let f;
                let p;
                let m;
                let h;
                let total;
                const _this = this;
                const g = arguments;
                t = g.length > 0 && g[0] !== undefined ? g[0] : {};
                ({ cluster, workspace, namespace, more: c, ruleName, type: s, allBuiltin: f = false } = t);
                p = l.default(t, [
                    "cluster",
                    "workspace",
                    "namespace",
                    "more",
                    "ruleName",
                    "type",
                    "allBuiltin"
                ]);
                this.list.isLoading = true;
                if (!(p.sortBy || p.ascending !== undefined)) {
                    p.sortBy = module72.LIST_DEFAULT_ORDER[this.module] || "createTime";
                }
                if (!(p.limit !== Infinity && p.limit !== -1)) {
                    p.limit = -1;
                    p.page = 1;
                }
                p.cluster = cluster;
                p.limit = p.limit || 10;
                m = await request.get(this.getResourceUrl({
                    cluster,
                    workspace,
                    namespace,
                    ruleName,
                    type: s
                }), this.getFilterParams({
                    ...p,
                    builtin: f ? undefined : s === "builtin"
                }));
                h = (E.default(m, "items") || []).map((e, id)=>({
                        cluster,
                        namespace,
                        id,
                        ..._this.mapper(e)
                    }));
                total = m.totalItems;
                this.list.update({
                    data: c ? [].concat(u.default(this.list.data), u.default(h)) : h,
                    total,
                    ...p,
                    limit: Number(p.limit) || 10,
                    page: Number(p.page) || 1,
                    isLoading: false,
                    ...!this.list.silent ? {
                        selectedRowKeys: []
                    } : {}
                });
                return h;
            }
        },
        {
            key: "fetchCount",
            value: async function() {
                let t;
                t = await Promise.all([
                    request.get(this.getResourceUrl({}), {
                        page: 1,
                        limit: 1,
                        builtin: false
                    }),
                    request.get(this.getResourceUrl({
                        type: "builtin"
                    }), {
                        page: 1,
                        limit: 1,
                        builtin: true
                    })
                ]);
                this.ruleCount = E.default(t, "0.totalItems", 0);
                this.builtinRuleCount = E.default(t, "1.totalItems", 0);
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return "proxy-api/proxy/alerting.kubesphere.io/v2beta1/";
            }
        },
        {
            key: "mapper",
            get: function() {
                return S.default.alarmMessage || function(e) {
                    return e;
                };
            }
        }
    ]);
    return o;
})(module20(require("./module-68.js")).default);
c = _.default(o.prototype, "ruleCount", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 0;
    }
});
i = _.default(o.prototype, "builtinRuleCount", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 0;
    }
});
_.default(o.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "fetchList"), o.prototype);
_.default(o.prototype, "fetchCount", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "fetchCount"), o.prototype);
exports.default = o;
