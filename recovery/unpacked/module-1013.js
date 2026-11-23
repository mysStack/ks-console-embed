"use strict";
const module20 = require("./module-20.js").default;
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
let c;
const s = module20(require("./module-44.js").default);
const f = module20(require("./module-65.js").default);
const d = module20(require("./module-36.js").default);
const p = module20(require("./module-37.js").default);
const m = module20(require("./module-88.js").default);
const h = module20(require("./module-55.js").default);
const v = module20(require("./module-56.js").default);
const g = module20(require("./module-51.js"));
const y = module20(require("./module-49.js").default);
module20(require("./module-66.js").default);
const E = module20(require("./module-26.js").default);
const b = module20(require("./module-74.js").default);
const module14 = require("./module-14.js");
const module72 = require("./module-72.js");
i = ((e)=>{
    h.default(i, e);
    var u = ((e)=>{
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
            return v.default(this, a);
        };
    })(i);
    function i(...a) {
        let e;
        d.default(this, i);
        e = u.call(this, ...a);
        f.default(e, "resourceVersion", c, m.default(e));
        e.getListUrl = function(t = {}) {
            return `${e.apiVersion}${e.getPath(t)}/${e.module}${t.dryRun ? "?dryRun=All" : ""}`;
        };
        e.getDetailUrl = function(t = {}) {
            return `${e.getListUrl(t)}/${t.name}`;
        };
        e.getResourceUrl = function(t = {}) {
            return `${e.apiVersion}${e.getPath(t)}/${e.module}`;
        };
        return e;
    }
    p.default(i, [
        {
            key: "getPath",
            value: function({ user }) {
                let a = "";
                if (user) {
                    a += `/users/${user}`;
                }
                return a;
            }
        },
        {
            key: "fetchList",
            value: async function() {
                let t;
                let a;
                let user;
                let u;
                let i;
                let c;
                const _this = this;
                const f = arguments;
                t = f.length > 0 && f[0] !== undefined ? f[0] : {};
                a = t.more;
                user = t.user;
                u = o.default(t, [
                    "more",
                    "user"
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
                i = await request.get(this.getResourceUrl({
                    user
                }), this.getFilterParams(u), null, function() {
                    return {};
                });
                c = (E.default(i, "items") || []).map((e)=>({
                        ..._this.mapper(e)
                    }));
                this.list.update({
                    data: a ? [].concat(l.default(this.list.data), l.default(c)) : c,
                    total: i.totalItems || i.total_count || i.total || c.length || 0,
                    ...u,
                    limit: Number(u.limit) || 10,
                    page: Number(u.page) || 1,
                    isLoading: false,
                    ...!this.list.silent ? {
                        selectedRowKeys: []
                    } : {}
                });
                return c;
            }
        },
        {
            key: "getResource",
            value: async function(t) {
                let a;
                let r;
                a = await request.get(this.getDetailUrl(t), {}, null, function() {
                    return {};
                });
                r = E.default(a, "metadata.resourceVersion");
                this.resourceVersion = r || "";
                return r !== undefined;
            }
        },
        {
            key: "update",
            value: async function(t, a) {
                await this.getResource(t);
                b.default(a, "metadata.resourceVersion", this.resourceVersion);
                return this.submitting(request.put(this.getDetailUrl(t), a));
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return "kapis/notification.kubesphere.io/v2beta2";
            }
        }
    ]);
    return i;
})(module20(require("./module-68.js")).default);
c = y.default(i.prototype, "resourceVersion", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "";
    }
});
y.default(i.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "fetchList"), i.prototype);
y.default(i.prototype, "getResource", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "getResource"), i.prototype);
y.default(i.prototype, "update", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "update"), i.prototype);
exports.default = i;
