"use strict";
require("unpacked/module-15.js");
const module20 = require("utils/babel-helpers/interopRequireDefault").default;
require("unpacked/module-5.js");
require("unpacked/module-6.js");
require("unpacked/module-16.js");
require("unpacked/module-9.js");
require("unpacked/module-4.js");
require("unpacked/module-316.js");
require("unpacked/module-23.js");
require("unpacked/module-17.js");
require("unpacked/module-7.js");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
require("unpacked/module-45.js");
require("unpacked/module-5.js");
require("unpacked/module-6.js");
require("unpacked/module-28.js");
require("unpacked/module-442.js");
require("unpacked/module-42.js");
require("unpacked/module-16.js");
require("unpacked/module-9.js");
require("unpacked/module-4.js");
require("unpacked/module-316.js");
require("unpacked/module-22.js");
require("unpacked/module-23.js");
require("unpacked/module-57.js");
require("unpacked/module-17.js");
require("unpacked/module-7.js");
const n = module20(require("unpacked/module-58.js").default);
const o = module20(require("unpacked/module-41.js"));
require("unpacked/module-41.js");
let c;
let s;
const l = module20(require("utils/babel-helpers/asyncToGenerator").default);
const i = module20(require("unpacked/module-61.js").default);
const u = module20(require("unpacked/module-65.js").default);
const d = module20(require("unpacked/module-36.js").default);
const f = module20(require("unpacked/module-37.js").default);
const p = module20(require("unpacked/module-88.js").default);
const m = module20(require("unpacked/module-55.js").default);
const h = module20(require("utils/babel-helpers/possibleConstructorReturn").default);
const v = module20(require("unpacked/module-51.js"));
const g = module20(require("unpacked/module-49.js").default);
module20(require("utils/babel-helpers/initializerWarningHelper").default);
const module14 = require("unpacked/module-14.js");
const y = module20(require("unpacked/module-60.js").default);
const E = module20(require("unpacked/module-26.js").default);
const b = module20(require("unpacked/module-63.js").default);
const S = module20(require("unpacked/module-74.js").default);
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
        const r = v.default(e);
        if (t) {
            const n = v.default(this).constructor;
            a = Reflect.construct(r, arguments, n);
        } else {
            a = r.apply(this, arguments);
        }
        return h.default(this, a);
    };
}
c = ((e)=>{
    m.default(g, e);
    let a;
    var v = O(g);
    function g(...a_1) {
        let e;
        d.default(this, g);
        e = v.call(this, ...a_1);
        e.module = "microserviceinstances";
        u.default(e, "metrics", s, p.default(e));
        e.getListUrl = function(t = {}) {
            return `${e.apiVersion}${e.getPath(t)}/instances${t.dryRun ? "?dryRun=All" : ""}`;
        };
        e.getResourceUrl = function(t = {}) {
            return `${e.apiVersion}${e.getPath(t)}/instances`;
        };
        e.getResult = function(e) {
            const t = y.default(e) ? e : [];
            const a = {};
            if (!b.default(t)) {
                t.forEach((e)=>{
                    S.default(e, "data.values[0]", [
                        Math.ceil(Date.now() / 1000),
                        E.default(e, "data.measurements[0].value")
                    ]);
                    a[e.metric_name] = e;
                });
            }
            return a;
        };
        e.getRefreshResult = function(t = {}, a = {}) {
            const r = module14.toJS(a);
            if (b.default(r)) {
                return t;
            }
            Object.values(t).forEach((t)=>{
                const a = E.default(t, "metric_name");
                const n = r[a];
                if (n) {
                    const o = E.default(t, "data.values[0]", []);
                    const c = E.default(n, "data.values", []);
                    S.default(n, "data.values", e.getNewValues(c, o));
                }
            });
            return r;
        };
        e.getNewValues = function(e = [], t = []) {
            const a = b.default(e) ? [] : i.default(e);
            const r = t || [];
            if (!b.default(r)) {
                if (a.length > 10) {
                    a.shift();
                }
                a.push(r);
            }
            return a;
        };
        return e;
    }
    f.default(g, [
        {
            key: "fetchStatistics",
            value: async function() {
                let t;
                const a = arguments;
                t = a.length > 0 && a[0] !== undefined ? a[0] : {};
                return await request.get(`${this.apiVersion}${this.getPath(t)}/statistics`);
            }
        },
        {
            key: "offLine",
            value: async function(t) {
                let a;
                let r;
                let n;
                a = t.namespace;
                r = t.instanceId;
                n = t._originData;
                S.default(n, "spec.enabled", false);
                await request.put(this.getDetailUrl({
                    namespace: a,
                    name: r
                }), n);
            }
        },
        {
            key: "onLine",
            value: async function(t) {
                let a;
                let r;
                let n;
                a = t.namespace;
                r = t.instanceId;
                n = t._originData;
                S.default(n, "spec.enabled", true);
                await request.put(this.getDetailUrl({
                    namespace: a,
                    name: r
                }), n);
            }
        },
        {
            key: "fetchMetrics",
            value: (a = l.default(o.default.mark(function e(t) {
                let cluster;
                let namespace;
                let name;
                let l;
                let u;
                let d;
                let f;
                let p;
                const m = arguments;
                return o.default.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                ({ cluster, namespace, name, autoRefresh: l = false } = t);
                                u = n.default(t, [
                                    "cluster",
                                    "namespace",
                                    "name",
                                    "autoRefresh"
                                ]);
                                d = m.length > 1 && m[1] !== undefined ? m[1] : {};
                                e.next = 4;
                                return request.get(`${this.getDetailUrl({
                                    cluster,
                                    namespace,
                                    name
                                })}/metrics/collect`, u);
                            case 4:
                                f = e.sent;
                                if (b.default(d)) {
                                    e.next = 11;
                                    break;
                                }
                                e.next = 8;
                                return request.get(`${this.getDetailUrl({
                                    cluster,
                                    namespace,
                                    name
                                })}/metrics/collect`, d);
                            case 8:
                                p = e.sent;
                                S.default(p, "[0].metric_name", "jvm.memory.used.metaspace");
                                f = [].concat(i.default(p), i.default(f));
                            case 11:
                                f = this.getResult(f);
                                if (l) {
                                    f = this.getRefreshResult(f, this.metrics);
                                }
                                this.metrics = f;
                                return e.abrupt("return", f);
                            case 15:
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
            key: "fetchEnv",
            value: function({ cluster, namespace, instanceId }) {
                return request.get(`${this.getDetailUrl({
                    cluster,
                    namespace,
                    name: instanceId
                })}/env`, {}, {}, function() {
                    return {};
                });
            }
        },
        {
            key: "checkHasMetrics",
            value: async function(t) {
                let cluster;
                let r;
                let n;
                let c;
                cluster = t.cluster;
                r = t.namespace;
                n = t.instanceId;
                c = await request.get(`${this.apiVersion}${this.getPath({
                    cluster,
                    namespace: r
                })}/instances/${n}/metrics`, {}, {}, function() {
                    return false;
                });
                return !!c;
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return "apis/aggregated.springcloud.kubesphere.io/v1alpha1";
            }
        }
    ]);
    return g;
})(module20(require("unpacked/module-1052.js")).default);
s = g.default(c.prototype, "metrics", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
g.default(c.prototype, "fetchStatistics", [
    module14.action
], Object.getOwnPropertyDescriptor(c.prototype, "fetchStatistics"), c.prototype);
g.default(c.prototype, "offLine", [
    module14.action
], Object.getOwnPropertyDescriptor(c.prototype, "offLine"), c.prototype);
g.default(c.prototype, "onLine", [
    module14.action
], Object.getOwnPropertyDescriptor(c.prototype, "onLine"), c.prototype);
g.default(c.prototype, "fetchMetrics", [
    module14.action
], Object.getOwnPropertyDescriptor(c.prototype, "fetchMetrics"), c.prototype);
g.default(c.prototype, "fetchEnv", [
    module14.action
], Object.getOwnPropertyDescriptor(c.prototype, "fetchEnv"), c.prototype);
g.default(c.prototype, "checkHasMetrics", [
    module14.action
], Object.getOwnPropertyDescriptor(c.prototype, "checkHasMetrics"), c.prototype);
exports.default = c;
