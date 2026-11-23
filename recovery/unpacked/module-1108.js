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
require("./module-118.js");
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
let s;
let f;
const d = module20(require("./module-44.js").default);
const p = module20(require("./module-65.js").default);
const m = module20(require("./module-36.js").default);
const h = module20(require("./module-37.js").default);
const v = module20(require("./module-88.js").default);
const g = module20(require("./module-55.js").default);
const y = module20(require("./module-56.js").default);
const E = module20(require("./module-51.js"));
const b = module20(require("./module-49.js").default);
module20(require("./module-66.js").default);
const _ = module20(require("./module-189.js").default);
const module14 = require("./module-14.js");
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
i = ((e)=>{
    g.default(E, e);
    var y = D(E);
    function E(...a) {
        let e;
        m.default(this, E);
        e = y.call(this, ...a);
        e.module = "codeRepos";
        p.default(e, "list", c, v.default(e));
        p.default(e, "detail", s, v.default(e));
        e.getListUrl = function(t = {}) {
            return `${e.apiVersion}${e.getPath(t)}/gitrepositories${t.dryRun ? "?dryRun=All" : ""}`;
        };
        e.getResourceUrl = function(t = {}) {
            return `${e.apiVersion}${e.getPath(t)}/gitrepositories`;
        };
        e.getDetailUrl = function(t = {}) {
            return `${e.getListUrl(t)}/${t.name}`;
        };
        p.default(e, "setSelectRowKeys", f, v.default(e));
        return e;
    }
    h.default(E, [
        {
            key: "getPath",
            value: function({ namespace, cluster } = {}) {
                let r = "";
                if (cluster) {
                    r += `/klusters/${cluster}`;
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
                let u;
                let i;
                let c;
                let s;
                let f;
                const _this = this;
                const p = arguments;
                t = p.length > 0 && p[0] !== undefined ? p[0] : {};
                a = t.devops;
                t.workspace;
                r = t.cluster;
                u = t.more;
                i = o.default(t, [
                    "devops",
                    "workspace",
                    "cluster",
                    "more"
                ]);
                this.list.isLoading = true;
                if (!(i.limit !== Infinity && i.limit !== -1)) {
                    i.limit = -1;
                    i.page = 1;
                }
                i.limit = i.limit || 10;
                c = `${this.getResourceUrl({
                    namespace: a,
                    cluster: r
                })}`;
                s = await request.get(c, {
                    ...i
                }, {}, function() {
                    return [];
                });
                f = Array.isArray(s.items) ? s.items.map((e)=>({
                        ..._this.mapper({
                            ...e,
                            devops: a
                        })
                    })) : [];
                this.list.update({
                    data: u ? [].concat(l.default(this.list.data), l.default(f)) : f,
                    total: s.totalItems || s.total_count || f.length || 0,
                    ...i,
                    limit: Number(i.limit) || 10,
                    page: Number(i.page) || 1,
                    isLoading: false,
                    ...!this.list.silent ? {
                        selectedRowKeys: []
                    } : {}
                });
                return f;
            }
        },
        {
            key: "create",
            value: async function(t) {
                let a;
                let r;
                let l;
                let u;
                let o;
                a = t.data;
                r = t.devops;
                l = t.cluster;
                u = `${this.getResourceUrl({
                    namespace: r,
                    cluster: l
                })}`;
                o = await request.post(u, a);
                return o;
            }
        },
        {
            key: "edit",
            value: async function(t) {
                let a;
                let r;
                let l;
                let u;
                let o;
                a = t.data;
                r = t.devops;
                l = t.name;
                u = t.cluster;
                o = `${this.getResourceUrl({
                    namespace: r,
                    cluster: u
                })}/${l}`;
                return this.submitting(request.put(o, a));
            }
        },
        {
            key: "update",
            value: async function(t, a) {
                let r;
                r = `${this.getResourceUrl({
                    namespace: t.devops,
                    cluster: t.cluster
                })}/${a.metadata.name}`;
                return this.submitting(request.put(r, a));
            }
        },
        {
            key: "delete",
            value: function(e) {
                const t = _.default({
                    ...e,
                    namespace: e.devops
                }, "devops");
                return this.submitting(request.delete(this.getDetailUrl(t)));
            }
        },
        {
            key: "fetchDetail",
            value: async function(t) {
                let a;
                let r;
                let l;
                a = `${this.getResourceUrl({
                    namespace: t.devops,
                    cluster: t.cluster
                })}/${t.name}`;
                r = await this.submitting(request.get(a), null, null, function() {
                    return {};
                });
                l = this.mapper(r);
                this.detail = l;
                return l;
            }
        }
    ]);
    return E;
})(module20(require("./module-68.js")).default);
c = b.default(i.prototype, "list", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            data: [],
            page: 1,
            limit: 10,
            total: 0,
            order: "",
            filters: {},
            isLoading: false,
            selectedRowKeys: []
        };
    }
});
s = b.default(i.prototype, "detail", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
f = b.default(i.prototype, "setSelectRowKeys", [
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
b.default(i.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "fetchList"), i.prototype);
b.default(i.prototype, "create", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "create"), i.prototype);
b.default(i.prototype, "edit", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "edit"), i.prototype);
b.default(i.prototype, "update", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "update"), i.prototype);
b.default(i.prototype, "delete", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "delete"), i.prototype);
b.default(i.prototype, "fetchDetail", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "fetchDetail"), i.prototype);
exports.default = i;
