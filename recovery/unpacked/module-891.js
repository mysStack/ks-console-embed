"use strict";
require("./module-15.js");
const module20 = require("./module-20.js").default;
require("./module-5.js");
require("./module-9.js");
require("./module-4.js");
require("./module-316.js");
require("./module-23.js");
require("./module-24.js");
require("./module-17.js");
require("./module-64.js");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
require("./module-45.js");
require("./module-5.js");
require("./module-42.js");
require("./module-9.js");
require("./module-4.js");
require("./module-316.js");
require("./module-22.js");
require("./module-23.js");
require("./module-57.js");
require("./module-24.js");
require("./module-17.js");
require("./module-64.js");
const n = module20(require("./module-58.js").default);
const l = module20(require("./module-41.js"));
require("./module-41.js");
let u;
let o;
let i;
const c = module20(require("./module-44.js").default);
const s = module20(require("./module-65.js").default);
const f = module20(require("./module-36.js").default);
const d = module20(require("./module-37.js").default);
const p = module20(require("./module-88.js").default);
const m = module20(require("./module-55.js").default);
const h = module20(require("./module-56.js").default);
const v = module20(require("./module-51.js"));
const g = module20(require("./module-49.js").default);
module20(require("./module-66.js").default);
const module14 = require("./module-14.js");
const E = module20(require("./module-26.js").default);
const module52 = require("./module-52.js");
u = ((e)=>{
    m.default(u, e);
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
            const r = v.default(e);
            if (t) {
                const n = v.default(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return h.default(this, a);
        };
    })(u);
    function u(...a) {
        let e;
        f.default(this, u);
        e = r.call(this, ...a);
        s.default(e, "statistics", o, p.default(e));
        s.default(e, "resourceMetrics", i, p.default(e));
        e.fetchClusterDevopsCount = async function e() {
            let t;
            t = await request.get("kapis/tenant.kubesphere.io/v1beta1/devopscount/");
            return E.default(t, "count", 0);
        };
        return e;
    }
    d.default(u, [
        {
            key: "fetchStatistics",
            value: async function() {
                let t;
                let a;
                let r;
                this.statistics.isLoading = true;
                t = {
                    type: "statistics"
                };
                a = await module52.to(request.get(this.getApi(), t));
                r = this.getResult(a);
                this.statistics = {
                    data: r,
                    isLoading: false
                };
                return r;
            }
        },
        {
            key: "fetchApplicationResourceMetrics",
            value: async function(t) {
                let workspace;
                let namespace;
                let u;
                let i;
                let c;
                let s;
                let f;
                let d;
                let p;
                let originData;
                ({ workspace, namespace, cluster: u, autoRefresh: i = false } = t);
                c = n.default(t, [
                    "workspace",
                    "namespace",
                    "cluster",
                    "autoRefresh"
                ]);
                if (i) {
                    c.last = true;
                    this.resourceMetrics.isRefreshing = true;
                } else {
                    this.resourceMetrics.isLoading = true;
                }
                if (c.cluster) {
                    this.cluster = c.cluster;
                }
                s = this.getParams(c);
                f = /^[a-zA-Z]+_/g;
                d = E.default(c.metrics, "[0]", "").replace(f, "cluster_");
                if (workspace) {
                    s.metrics_filter = `${d.replace(f, "workspace_")}\$`;
                }
                if (namespace && namespace !== "all") {
                    s.metrics_filter = `${d.replace(f, "namespace_")}\$`;
                }
                p = await module52.to(request.get(`${this.getApi({
                    cluster: u || this.cluster,
                    workspace,
                    namespace
                })}`, s));
                originData = this.getResult(p);
                if (i) {
                    originData = this.getRefreshResult(originData, this.resourceMetrics.originData);
                }
                this.resourceMetrics = {
                    originData,
                    data: E.default(Object.values(originData), "[0].data.result") || [],
                    isLoading: false,
                    isRefreshing: false
                };
                return originData;
            }
        }
    ]);
    return u;
})(module20(require("./module-847.js")).default);
o = g.default(u.prototype, "statistics", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            data: {},
            isLoading: false
        };
    }
});
i = g.default(u.prototype, "resourceMetrics", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            originData: {},
            data: [],
            isLoading: false
        };
    }
});
g.default(u.prototype, "fetchStatistics", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "fetchStatistics"), u.prototype);
g.default(u.prototype, "fetchApplicationResourceMetrics", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "fetchApplicationResourceMetrics"), u.prototype);
exports.default = u;
