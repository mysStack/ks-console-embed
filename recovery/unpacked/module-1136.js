"use strict";
const module20 = require("./module-20.js").default;
require("./module-12.js");
require("./module-5.js");
require("./module-11.js");
require("./module-29.js");
require("./module-6.js");
require("./module-30.js").default;
require("./module-97.js");
require("./module-98.js");
require("./module-9.js");
require("./module-13.js");
require("./module-10.js");
require("./module-4.js");
require("./module-23.js");
require("./module-17.js");
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
require("./module-29.js");
require("./module-6.js");
require("./module-30.js").default;
require("./module-28.js");
require("./module-97.js");
require("./module-42.js");
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
require("./module-7.js");
require("./module-32.js");
const n = module20(require("./module-31.js").default);
const u = module20(require("./module-96.js").default);
const l = module20(require("./module-41.js"));
require("./module-41.js");
let o;
let c;
let i;
const s = module20(require("./module-44.js").default);
const d = module20(require("./module-61.js").default);
const f = module20(require("./module-65.js").default);
const p = module20(require("./module-36.js").default);
const m = module20(require("./module-37.js").default);
const h = module20(require("./module-88.js").default);
const v = module20(require("./module-55.js").default);
const y = module20(require("./module-56.js").default);
const g = module20(require("./module-51.js"));
const _ = module20(require("./module-49.js").default);
module20(require("./module-66.js").default);
const module14 = require("./module-14.js");
const b = module20(require("./module-63.js").default);
const S = module20(require("./module-26.js").default);
const O = module20(require("./module-74.js").default);
const R = module20(require("./module-857.js").default);
const module52 = require("./module-52.js");
const module434 = require("./module-434.js");
o = ((e)=>{
    v.default(n, e);
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
    })(n);
    function n(...a_1) {
        let e;
        p.default(this, n);
        e = r.call(this, ...a_1);
        f.default(e, "health", c, h.default(e));
        f.default(e, "etcd", i, h.default(e));
        e.getApi = function() {
            return `${e.apiVersion}/component_metrics`;
        };
        e.getNewRefreshedResult = function(t = [], a = []) {
            const r = d.default(a);
            t.forEach((t, a)=>{
                const n = S.default(t, "metric.__name__");
                let u = null;
                if (n) {
                    const l = S.default(t, "metric.quantile");
                    const o = S.default(t, "metric.verb");
                    const c = S.default(t, "metric.result");
                    const i = r.find((e)=>{
                        if (l) {
                            return S.default(e, "metric.quantile") === l;
                        }
                        if (o) {
                            return S.default(e, "metric.verb") === o;
                        }
                        if (c) {
                            return S.default(e, "metric.result") === c;
                        }
                        return S.default(e, "metric.__name__") === n;
                    });
                    if (b.default(i)) {
                        r.push(t);
                    } else {
                        u = i;
                    }
                } else {
                    u = r[a];
                }
                if (!b.default(u)) {
                    const s = e.getNewValues(u.values, t.value);
                    O.default(u, "values", s);
                }
            });
            return r;
        };
        return e;
    }
    m.default(n, [
        {
            key: "fetchHealthMetrics",
            value: async function() {
                this.health.isLoading = true;
                await this.requestHealthMetrics();
                this.health.isLoading = false;
            }
        },
        {
            key: "requestHealthMetrics",
            value: async function() {
                let t;
                let a;
                let r;
                let n;
                let supportKsScheduler;
                let supportControllerManager;
                let i;
                let counts;
                let componentCounts;
                t = this.cluster && globals.app.isMultiCluster ? `kapis/clusters/${this.cluster}/resources.kubesphere.io/v1alpha2/componenthealth` : "kapis/resources.kubesphere.io/v1alpha2/componenthealth";
                a = await module52.to(request.get(t));
                r = a.kubesphereStatus || [];
                n = R.default(r, "namespace");
                supportKsScheduler = r.some((e)=>S.default(e, "label.component") === "kube-scheduler" && S.default(e, "healthyBackends", 0));
                supportControllerManager = r.some((e)=>S.default(e, "label.component") === "kube-controller-manager" && S.default(e, "healthyBackends", 0));
                i = {
                    kubernetes: S.default(a, "kubernetesStatus", []),
                    node: S.default(a, "nodeStatus", {}),
                    kubesphere: S.default(n, "kubesphere-system", []),
                    openpitrix: S.default(n, "openpitrix-system", []),
                    istio: S.default(n, "istio-system", []),
                    monitoring: S.default(n, "kubesphere-monitoring-system", []),
                    logging: S.default(n, "kubesphere-logging-system", []),
                    devops: S.default(n, "kubesphere-devops-system", []),
                    kubeSystem: S.default(n, "kube-system", [])
                };
                counts = {};
                componentCounts = {};
                Object.entries(i).forEach((e)=>{
                    const t = u.default(e, 2);
                    const a = t[0];
                    const r = t[1];
                    const n = {
                        total: 0,
                        health: 0
                    };
                    const l = {
                        total: 0,
                        health: 0
                    };
                    switch(a){
                        case "node":
                            n.total = S.default(r, "totalNodes", 0);
                            n.health = S.default(r, "healthyNodes", 0);
                            break;
                        case "kubernetes":
                            n.total = r.length;
                            n.health = r.filter((e)=>module434.getComponentStatus(e) === "Healthy").length;
                            break;
                        default:
                            r.forEach((e)=>{
                                n.total += e.totalBackends;
                                n.health += e.healthyBackends;
                                const t = module434.getComponentStatus(e);
                                l.health += t === "Healthy" ? 1 : 0;
                                l.total += t === "Stopped" ? 0 : 1;
                            });
                    }
                    counts[a] = n;
                    componentCounts[a] = l;
                });
                this.health = {
                    ...this.health || {},
                    data: i,
                    counts,
                    componentCounts,
                    supportKsScheduler,
                    supportControllerManager
                };
            }
        }
    ]);
    return n;
})(module20(require("./module-884.js")).default);
c = _.default(o.prototype, "health", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            data: {},
            counts: {},
            supportKsScheduler: false,
            supportControllerManager: false,
            isLoading: false
        };
    }
});
i = _.default(o.prototype, "etcd", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
_.default(o.prototype, "fetchHealthMetrics", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "fetchHealthMetrics"), o.prototype);
_.default(o.prototype, "requestHealthMetrics", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "requestHealthMetrics"), o.prototype);
exports.default = o;
