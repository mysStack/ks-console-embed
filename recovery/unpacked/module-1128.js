import "./module-15.js";
import "./module-6.js";
import "./module-87.js";
import "./module-138.js";
import "./module-9.js";
import "./module-10.js";
import "./module-7.js";
import "./module-191.js";
import "./module-160.js";
import "./module-4.js";
import "./module-22.js";
import "./module-41.js";
import "./module-44.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module49 from "./module-49.js";
import "./module-66.js";
import module14 from "./module-14.js";
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import module903 from "./module-903.js";
import module74 from "./module-74.js";
import { to } from "./module-52.js";
import module910 from "./module-910.js";
let l;
let u;
let o;
let i;
let c;
let s;
let f;
let d;
let p;
let m;
let h;
let v;
l = (()=>{
    function e(a = {}) {
        const _this = this;
        module36(this, e);
        module65(this, "page", u, this);
        module65(this, "data", o, this);
        module65(this, "total_page", i, this);
        module65(this, "total", c, this);
        module65(this, "isLoading", s, this);
        module65(this, "limit", f, this);
        module65(this, "sort_metric", d, this);
        module65(this, "sort_type", p, this);
        module65(this, "changeSortType", m, this);
        module65(this, "changeSortMetric", h, this);
        module65(this, "changePagination", v, this);
        this.download = function(e) {
            const a = JSON.stringify(_this.data, null, 2);
            const r = new Blob([
                a
            ], {
                type: "text/plain;charset=utf-8"
            });
            module910.saveAs(r, e);
        };
        this.handleResult = function(e) {
            const t = module26(e, "results", []);
            if (module63(t)) {
                return [];
            }
            return t.reduce((acc, t = {})=>{
                const t_metric_name = t.metric_name;
                const r = module26(t, "data.result") || [];
                r.forEach((t, r)=>{
                    const n = acc[r] || {};
                    const l = module26(t, "value", []);
                    const u = module26(t, "metric", {});
                    n[t_metric_name] = l[1];
                    Object.assign(n, u);
                    acc[r] = n;
                });
                return acc;
            }, []);
        };
        Object.keys(a).forEach((e)=>module74(_this, e, a[e]));
    }
    module37(e, [
        {
            key: "fetchAll",
            value: async function() {
                let t;
                let a;
                let r;
                let l;
                const u = arguments;
                t = u.length > 0 && u[0] !== undefined ? u[0] : {};
                this.isLoading = true;
                a = {
                    type: this.rankRequestTag,
                    metrics_filter: this.metrics_filter,
                    page: this.page,
                    limit: this.limit,
                    sort_type: this.sort_type,
                    sort_metric: this.sort_metric || module26(this, "sort_metric_options.[0]")
                };
                if (this.cluster) {
                    a.cluster = this.cluster;
                }
                if (this.namespaces) {
                    a.namespace = this.namespaces;
                }
                if (this.kind) {
                    a.workload_kind = this.kind;
                }
                if (this.workspace) {
                    a.workspace = this.workspace;
                }
                r = await to(request.get(this.fetchUrl, module903(a, t)));
                l = this.handleResult(r);
                this.total_page = r.total_page;
                this.total = r.total_item;
                this.data = l;
                this.isLoading = false;
                return l;
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return "kapis/monitoring.kubesphere.io/v1beta1";
            }
        },
        {
            key: "fetchUrl",
            get: function() {
                if (this.resource === "nodes") {
                    return `${this.apiVersion}/node_metrics`;
                }
                if (this.resource === "pods") {
                    return `${this.apiVersion}/pod_metrics`;
                }
                if (this.resource === "workspaces") {
                    return `${this.apiVersion}/workspace_metrics`;
                }
                if (this.resource === "namespaces") {
                    return `${this.apiVersion}/namespace_metrics`;
                }
                if (this.resource === "clusters") {
                    return `${this.apiVersion}/cluster_metrics`;
                }
                return `${this.apiVersion}`;
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
    return e;
})();
u = module49(l.prototype, "page", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 1;
    }
});
o = module49(l.prototype, "data", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
});
i = module49(l.prototype, "total_page", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 1;
    }
});
c = module49(l.prototype, "total", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 1;
    }
});
s = module49(l.prototype, "isLoading", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return true;
    }
});
f = module49(l.prototype, "limit", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 10;
    }
});
d = module49(l.prototype, "sort_metric", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
});
p = module49(l.prototype, "sort_type", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "desc";
    }
});
m = module49(l.prototype, "changeSortType", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            const a = _this.sort_type === "desc" ? "asc" : "desc";
            _this.sort_type = a;
            _this.fetchAll(t);
        };
    }
});
h = module49(l.prototype, "changeSortMetric", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t, a) {
            _this.sort_metric = t;
            _this.fetchAll(a);
        };
    }
});
v = module49(l.prototype, "changePagination", [
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
module49(l.prototype, "fetchAll", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "fetchAll"), l.prototype);
export default l;
