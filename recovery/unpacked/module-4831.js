import "./module-15.js";
import "./module-5.js";
import "./module-30.js";
import "./module-73.js";
import "./module-18.js";
import "./module-87.js";
import "./module-98.js";
import "./module-9.js";
import "./module-4.js";
import "./module-22.js";
import "./module-23.js";
import "./module-17.js";
import "./module-38.js";
import "./module-32.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-249.js";
import "./module-45.js";
import "./module-191.js";
import "./module-42.js";
import "./module-160.js";
import "./module-57.js";
import module96 from "./module-96.js";
import module58 from "./module-58.js";
import module14 from "./module-14.js";
import { fillEmptyMetrics } from "./module-795.js";
import module_847 from "./module-847.js";
let f;
function g(e) {
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
        const r = module51(e);
        if (t) {
            const n = module51(this).constructor;
            a = Reflect.construct(r, arguments, n);
        } else {
            a = r.apply(this, arguments);
        }
        return module56(this, a);
    };
}
f = ((module_847_1)=>{
    module55(i, module_847_1);
    var r = g(i);
    function i(...a_1) {
        let e;
        module36(this, i);
        e = r.call(this, ...a_1);
        e.resourceName = "node";
        e.getApi = function() {
            return `${e.apiVersion}/node_metrics`;
        };
        e.config = [];
        e.fetchMetric = (()=>{
            const e = module44(module41.mark(function e(t) {
                let a;
                let r;
                let o;
                let c;
                let s;
                let l;
                let i;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                a = t.expr;
                                r = t.step;
                                o = t.start;
                                c = t.end;
                                s = t.cluster;
                                l = t.namespace;
                                if (a) {
                                    e.next = 3;
                                    break;
                                }
                                return e.abrupt("return", []);
                            case 3:
                                e.next = 5;
                                return request.get("kapis/monitoring.kubesphere.io/v1beta1/targets/query", {
                                    cluster: s,
                                    namespace: l,
                                    expr: a,
                                    step: r,
                                    start: o,
                                    end: c
                                }, null, function(e, t) {
                                    throw new Error(t.message);
                                });
                            case 5:
                                e.t0 = e.sent;
                                if (e.t0) {
                                    e.next = 8;
                                    break;
                                }
                                e.t0 = {};
                            case 8:
                                i = e.t0;
                                return e.abrupt("return", i.data);
                            case 10:
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
    module37(i, [
        {
            key: "getPath",
            value: function({ cluster, namespace } = {}) {
                let r = "";
                if (globals.app.isMultiCluster && cluster) {
                    r += `/klusters/${cluster}`;
                }
                if (namespace) {
                    r += `/namespaces/${namespace}`;
                }
                return r;
            }
        },
        {
            key: "fetchMetrics",
            value: async function(t) {
                let r;
                let c;
                let l;
                let i;
                let u;
                let d;
                let f;
                let p;
                let t0;
                let t1;
                ({ autoRefresh: r = false, more: c = false, fillZero: l = true, cluster: i, namespace: u } = t);
                d = module58(t, [
                    "autoRefresh",
                    "more",
                    "fillZero",
                    "cluster",
                    "namespace"
                ]);
                if (r) {
                    d.last = true;
                    this.isRefreshing = true;
                } else {
                    this.isLoading = true;
                }
                if (d.cluster) {
                    this.cluster = d.cluster;
                }
                f = this.getParams(d);
                this.config = f.config.reduce((acc, item)=>{
                    acc.targets = acc.targets.concat(item.targets);
                    return acc;
                }, {
                    namespace: u,
                    cluster: i,
                    targets: []
                });
                t0 = this;
                t1 = await this.fetchMetricsAll(f);
                p = t0.getResult.call(t0, t1);
                if (r) {
                    p = this.getRefreshResult(p, this.data);
                }
                if (c) {
                    p = this.getMoreResult(p, this.data);
                }
                this.data = l ? fillEmptyMetrics(f, p) : p;
                this.isLoading = false;
                this.isRefreshing = false;
                return p;
            }
        },
        {
            key: "fetchMetricsAll",
            value: async function(t) {
                let a;
                let r;
                let c;
                let s;
                let i;
                let u;
                let d;
                let f;
                let p;
                const _this = this;
                a = t.start;
                r = t.end;
                c = t.step;
                s = this.config;
                ({ targets: i = [], cluster: u, namespace: d } = s);
                this.timeRange = {
                    start: a,
                    end: r
                };
                f = {
                    ID: ++this.requestID,
                    errorMessage: "",
                    metrics: []
                };
                try {
                    p = await Promise.all(i.map(async (target)=>{
                        let o;
                        let s;
                        o = target.expr;
                        s = await _this.fetchMetric({
                            cluster: u,
                            namespace: d,
                            expr: o,
                            step: c,
                            start: a,
                            end: r
                        });
                        return {
                            data: s,
                            target
                        };
                    }));
                    f.metrics = p.reduce((acc, { data = [], target = {} })=>{
                        const { expr, refId } = target;
                        const l = (data?.result).map(({ values = [], metric = {} })=>{
                            const responseMetricID = y(metric) || expr;
                            const id = `${refId}.${responseMetricID}`;
                            return {
                                values,
                                metric,
                                target,
                                id,
                                responseMetricID
                            };
                        });
                        return acc.concat(l);
                    }, []);
                } catch (error) {
                    f.errorMessage = error.message;
                } finally{
                    if (f.ID === this.requestID) {
                        this.metrics = f.metrics;
                        this.errorMessage = f.errorMessage;
                    }
                }
                return p;
            }
        }
    ]);
    return i;
})(module_847);
module49(f.prototype, "fetchMetrics", [
    module14.action
], Object.getOwnPropertyDescriptor(f.prototype, "fetchMetrics"), f.prototype);
module49(f.prototype, "fetchMetricsAll", [
    module14.action
], Object.getOwnPropertyDescriptor(f.prototype, "fetchMetricsAll"), f.prototype);
const _ = f;
function y({ __name__, ...rest } = {}) {
    if (!__name__) {
        return JSON.stringify(rest || {});
    }
    const r = Object.entries(rest || {}).map((e)=>{
        const t = module96(e, 2);
        const a = t[0];
        const r = t[1];
        return `${a}="${r}"`;
    });
    const n = r.length ? `{${r.join(",")}}` : "";
    return `${__name__}${n}`;
}
export default _;
