"use strict";
const module20 = require("./module-20.js").default;
require("./module-12.js");
require("./module-5.js");
require("./module-11.js");
require("./module-6.js");
require("./module-84.js");
require("./module-73.js");
require("./module-18.js");
require("./module-87.js");
require("./module-27.js");
require("./module-138.js");
require("./module-98.js");
require("./module-9.js");
require("./module-13.js");
require("./module-10.js");
require("./module-4.js");
require("./module-23.js");
require("./module-17.js");
require("./module-85.js");
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
require("./module-84.js");
require("./module-73.js");
require("./module-18.js");
require("./module-28.js");
require("./module-87.js");
require("./module-42.js");
require("./module-27.js");
require("./module-138.js");
require("./module-34.js");
require("./module-15.js");
require("./module-98.js");
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
const n = module20(require("./module-41.js"));
const u = module20(require("./module-31.js").default);
const l = module20(require("./module-96.js").default);
const o = module20(require("./module-58.js").default);
require("./module-41.js");
let c;
let i;
let s;
let d;
let f;
let p;
let m;
const h = module20(require("./module-44.js").default);
const v = module20(require("./module-65.js").default);
const y = module20(require("./module-36.js").default);
const g = module20(require("./module-37.js").default);
const _ = module20(require("./module-88.js").default);
const E = module20(require("./module-55.js").default);
const b = module20(require("./module-56.js").default);
const S = module20(require("./module-51.js"));
const O = module20(require("./module-49.js").default);
module20(require("./module-66.js").default);
const R = module20(require("./module-26.js").default);
const T = module20(require("./module-903.js").default);
const C = module20(require("./module-63.js").default);
const module52 = require("./module-52.js");
const module14 = require("./module-14.js");
c = ((e)=>{
    E.default(r, e);
    var a = ((e)=>{
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
            const r = S.default(e);
            if (t) {
                const n = S.default(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return b.default(this, a);
        };
    })(r);
    function r(...n_1) {
        let e;
        y.default(this, r);
        e = a.call(this, ...n_1);
        v.default(e, "page", i, _.default(e));
        v.default(e, "limit", s, _.default(e));
        v.default(e, "sort_type", d, _.default(e));
        v.default(e, "cluster", f, _.default(e));
        v.default(e, "sort_metric", p, _.default(e));
        e.getListUrl = function() {
            return `${e.apiVersion}/pod_metrics`;
        };
        v.default(e, "changePagination", m, _.default(e));
        e.handleResult = function(e) {
            const t = R.default(e, "results", []);
            if (C.default(t)) {
                return [];
            }
            return t.reduce((acc, t = {})=>{
                const t_metric_name = t.metric_name;
                const r = R.default(t, "data.result") || [];
                r.forEach((t, r)=>{
                    const n = acc[r] || {};
                    const u = R.default(t, "value", []);
                    const l = R.default(t, "metric", {});
                    n[t_metric_name] = u[1];
                    Object.assign(n, l);
                    acc[r] = n;
                });
                return acc;
            }, []);
        };
        return e;
    }
    g.default(r, [
        {
            key: "fetchList",
            value: async function() {
                let t;
                let a;
                let r;
                let u;
                let c;
                let i;
                let s;
                let f;
                let m;
                let h;
                let filters;
                let y;
                let g;
                let _;
                const _this = this;
                const b = arguments;
                t = b.length > 0 && b[0] !== undefined ? b[0] : {};
                ({ cluster: a, pod: r, phase: u, pod_ip: c, node: i, namespace: s, limit: f = 10, page: m = 1 } = t);
                h = o.default(t, [
                    "cluster",
                    "pod",
                    "phase",
                    "pod_ip",
                    "node",
                    "namespace",
                    "limit",
                    "page"
                ]);
                this.list.isLoading = true;
                filters = {};
                if (a) {
                    filters.cluster = a;
                }
                if (s) {
                    filters.namespace = s;
                }
                if (r) {
                    filters.pod = r;
                }
                if (u) {
                    filters.phase = u;
                }
                if (c) {
                    filters.pod_ip = c;
                }
                if (i) {
                    filters.node = i;
                }
                if (!C.default(filters)) {
                    h.custom_filter = Object.entries(filters).map((e)=>{
                        const t = l.default(e, 2);
                        const a = t[0];
                        const r = t[1];
                        if (_this.precise.includes(a)) {
                            return `${a}="${r}"`;
                        }
                        return `${a}=~".*${r}.*"`;
                    }).join(",");
                }
                if (h.sortBy) {
                    this.sort_metric = h.sortBy;
                    delete h.sortBy;
                    this.sort_type = h.ascending === undefined ? "desc" : "asc";
                    delete h.ascending;
                }
                if (f !== this.limit) {
                    this.limit = Number(f);
                }
                if (m !== this.page) {
                    this.page = Number(m);
                }
                y = {
                    type: this.rankRequestTag,
                    page: this.page,
                    limit: this.limit,
                    sort_type: this.sort_type,
                    sort_metric: this.sort_metric
                };
                g = await module52.to(request.get(this.fetchUrl, T.default(y, h)));
                _ = this.handleResult(g);
                this.total = g.total_item;
                this.list.data = _;
                this.list.update({
                    data: _,
                    total: this.total,
                    ...h,
                    limit: this.limit,
                    page: this.page,
                    isLoading: false,
                    filters
                });
                return _;
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return "kapis/monitoring.kubesphere.io/v1beta1";
            }
        },
        {
            key: "precise",
            get: function() {
                return [
                    "phase"
                ];
            }
        },
        {
            key: "fetchUrl",
            get: function() {
                return `${this.apiVersion}/pod_metrics`;
            }
        },
        {
            key: "rankRequestTag",
            get: function() {
                return "rank";
            }
        },
        {
            key: "defaultParams",
            get: function() {
                return {
                    type: this.rankRequestTag
                };
            }
        }
    ]);
    return r;
})(module20(require("./module-68.js")).default);
i = O.default(c.prototype, "page", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 1;
    }
});
s = O.default(c.prototype, "limit", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 10;
    }
});
d = O.default(c.prototype, "sort_type", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "desc";
    }
});
f = O.default(c.prototype, "cluster", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
});
p = O.default(c.prototype, "sort_metric", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "pod_status_info";
    }
});
O.default(c.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(c.prototype, "fetchList"), c.prototype);
m = O.default(c.prototype, "changePagination", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function({ page, limit }, a) {
            _this.page = page;
            _this.limit = limit;
            _this.fetchAll(a);
        };
    }
});
exports.default = c;
