"use strict";
const module20 = require("./module-20.js").default;
require("./module-12.js");
require("./module-135.js");
require("./module-5.js");
require("./module-11.js");
require("./module-6.js");
require("./module-84.js");
require("./module-18.js");
require("./module-16.js");
require("./module-27.js");
require("./module-9.js");
require("./module-13.js");
require("./module-10.js");
require("./module-4.js");
require("./module-23.js");
require("./module-24.js");
require("./module-17.js");
require("./module-85.js");
require("./module-137.js");
require("./module-7.js");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
require("./module-12.js");
require("./module-135.js");
require("./module-45.js");
require("./module-5.js");
require("./module-11.js");
require("./module-6.js");
require("./module-84.js");
require("./module-118.js");
require("./module-18.js");
require("./module-28.js");
require("./module-191.js");
require("./module-42.js");
require("./module-16.js");
require("./module-160.js");
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
require("./module-85.js");
require("./module-7.js");
const n = module20(require("./module-246.js"));
const l = module20(require("./module-41.js"));
const u = module20(require("./module-61.js").default);
const o = module20(require("./module-31.js").default);
const i = module20(require("./module-58.js").default);
require("./module-41.js");
let c;
let s;
let f;
let d;
const p = module20(require("./module-44.js").default);
const m = module20(require("./module-65.js").default);
const h = module20(require("./module-36.js").default);
const v = module20(require("./module-37.js").default);
const g = module20(require("./module-88.js").default);
const y = module20(require("./module-55.js").default);
const E = module20(require("./module-56.js").default);
const b = module20(require("./module-51.js"));
const _ = module20(require("./module-49.js").default);
module20(require("./module-66.js").default);
const O = module20(require("./module-74.js").default);
const S = module20(require("./module-26.js").default);
const C = module20(require("./module-63.js").default);
const D = module20(require("./module-76.js").default);
const k = module20(require("./module-242.js").default);
const N = module20(require("./module-159.js").default);
const module14 = require("./module-14.js");
const module440 = require("./module-440.js");
const module72 = require("./module-72.js");
const w = module20(require("./module-435.js"));
function A(e) {
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
        const r = b.default(e);
        if (t) {
            const n = b.default(this).constructor;
            a = Reflect.construct(r, arguments, n);
        } else {
            a = r.apply(this, arguments);
        }
        return E.default(this, a);
    };
}
c = ((e)=>{
    y.default(b, e);
    var E = A(b);
    function b(...a_1) {
        let e;
        h.default(this, b);
        e = E.call(this, ...a_1);
        e.module = "secrets";
        m.default(e, "list", s, g.default(e));
        m.default(e, "detail", f, g.default(e));
        m.default(e, "params", d, g.default(e));
        e.getResourceUrl = function(t = {}) {
            const a = `${e.getBaseUrl(t)}credentials`;
            if (t.name) {
                return `${a}/${t.name}`;
            }
            return a;
        };
        return e;
    }
    v.default(b, [
        {
            key: "setParams",
            value: function(e) {
                this.params = e;
            }
        },
        {
            key: "fetchList",
            value: async function() {
                let t;
                let a;
                let r;
                let filters;
                let o;
                let c;
                let s;
                const _this = this;
                const d = arguments;
                t = d.length > 0 && d[0] !== undefined ? d[0] : {};
                a = t.devops;
                r = t.cluster;
                filters = i.default(t, [
                    "devops",
                    "cluster"
                ]);
                this.list.isLoading = true;
                if (filters.limit === Infinity || filters.limit === -1) {
                    filters.limit = -1;
                    filters.page = 1;
                } else {
                    filters.limit = filters.limit || 10;
                }
                o = filters.more || false;
                k.default(filters, "more");
                filters.sortBy = filters.sortBy || "createTime";
                c = await request.get(this.getResourceUrl({
                    devops: a,
                    cluster: r
                }), {
                    ...filters
                });
                s = Array.isArray(c.items) ? c.items.filter((e)=>module72.CREDENTIAL_TYPE_LIST.includes(e.type)).map((e)=>{
                    e = _this.mapper(e);
                    e.type = module72.CREDENTIAL_DISPLAY_KEY[e.type.split("/")[1]];
                    return e;
                }) : [];
                this.list.update({
                    data: o ? [].concat(u.default(this.list.data), u.default(s)) : s,
                    total: c.totalItems || s.length || 0,
                    filters,
                    limit: Number(filters.limit) || 10,
                    page: Number(filters.page) || 1,
                    isLoading: false
                });
                return s;
            }
        },
        {
            key: "handleCreate",
            value: async function(t, a) {
                let r;
                let n;
                let u;
                let o;
                let i;
                r = a.devops;
                n = a.cluster;
                u = w.default[this.module]({
                    namespace: r
                });
                o = S.default(t, t.type, {});
                i = o.id || t.id;
                O.default(u, "metadata.labels.app", i);
                O.default(u, 'metadata.annotations["kubesphere.io/description"]', t.description);
                O.default(u, "metadata.name", i);
                delete t.description;
                if (o.id) {
                    delete o.id;
                }
                if (!C.default(o) && D.default(o)) {
                    Object.keys(o).forEach((e)=>{
                        if (o[e]) {
                            o[e] = module440.safeBtoa(o[e]);
                        }
                    });
                }
                delete t[t.type];
                u.data = {
                    ...o
                };
                u.type = `credential.devops.kubesphere.io/${module72.CREDENTIAL_KEY[t.type]}`;
                return await request.post(this.getResourceUrl({
                    devops: r,
                    cluster: n
                }), u, null, null);
            }
        },
        {
            key: "fetchDetail",
            value: async function(t) {
                let a;
                let r;
                let n;
                let u;
                let o;
                let i;
                if (!(N.default(t) || C.default(t))) {
                    this.params = t;
                }
                a = this.params;
                r = a.devops;
                n = a.credential_id;
                u = a.cluster;
                o = await request.get(`${this.getResourceUrl({
                    devops: r,
                    name: n,
                    cluster: u
                })}?content=1`);
                i = this.mapper(o);
                i.display_name = i.name;
                i.id = i.name;
                i.type = module72.CREDENTIAL_DISPLAY_KEY[i.type.split("/")[1]];
                this.detail = i;
                this.isLoading = false;
            }
        },
        {
            key: "updateCredential",
            value: async function(t, a) {
                let r;
                let u;
                let o;
                let i;
                let c;
                r = a.devops;
                u = a.cluster;
                o = t[t.type];
                i = t.description;
                c = t._originData;
                if (JSON.stringify(o) !== "{}" && n.default(o) === "object") {
                    Object.keys(o).forEach((e)=>{
                        o[e] = module440.safeBtoa(o[e]);
                    });
                }
                O.default(c, "data", o);
                O.default(c, 'metadata.annotations["kubesphere.io/description"]', i);
                return await request.put(`${this.getResourceUrl({
                    devops: r,
                    name: t.name,
                    cluster: u
                })}?content=1`, c);
            }
        },
        {
            key: "delete",
            value: async function(t) {
                let a;
                let r;
                let n;
                let u;
                a = t.id;
                r = this.params;
                n = r.devops;
                u = r.cluster;
                return await request.delete(`${this.getResourceUrl({
                    devops: n,
                    name: a,
                    cluster: u
                })}`);
            }
        },
        {
            key: "checkName",
            value: function(e) {
                return request.get(this.getResourceUrl(e), {}, {
                    headers: {
                        "x-check-exist": true
                    }
                });
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return module72.API_VERSIONS.devops;
            }
        }
    ]);
    return b;
})(module20(require("./module-323.js")).default);
s = _.default(c.prototype, "list", [
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
            reverse: false,
            filters: {},
            isLoading: true
        };
    }
});
f = _.default(c.prototype, "detail", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
d = _.default(c.prototype, "params", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
_.default(c.prototype, "setParams", [
    module14.action
], Object.getOwnPropertyDescriptor(c.prototype, "setParams"), c.prototype);
_.default(c.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(c.prototype, "fetchList"), c.prototype);
_.default(c.prototype, "handleCreate", [
    module14.action
], Object.getOwnPropertyDescriptor(c.prototype, "handleCreate"), c.prototype);
_.default(c.prototype, "fetchDetail", [
    module14.action
], Object.getOwnPropertyDescriptor(c.prototype, "fetchDetail"), c.prototype);
_.default(c.prototype, "updateCredential", [
    module14.action
], Object.getOwnPropertyDescriptor(c.prototype, "updateCredential"), c.prototype);
_.default(c.prototype, "delete", [
    module14.action
], Object.getOwnPropertyDescriptor(c.prototype, "delete"), c.prototype);
_.default(c.prototype, "checkName", [
    module14.action
], Object.getOwnPropertyDescriptor(c.prototype, "checkName"), c.prototype);
exports.default = c;
