"use strict";
const module20 = require("utils/babel-helpers/interopRequireDefault").default;
require("unpacked/module-12.js");
require("unpacked/module-5.js");
require("unpacked/module-11.js");
require("unpacked/module-29.js");
require("unpacked/module-6.js");
require("unpacked/module-30.js").default;
require("unpacked/module-97.js");
require("unpacked/module-98.js");
require("unpacked/module-9.js");
require("unpacked/module-13.js");
require("unpacked/module-10.js");
require("unpacked/module-4.js");
require("unpacked/module-23.js");
require("unpacked/module-17.js");
require("unpacked/module-7.js");
require("unpacked/module-32.js");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
require("unpacked/module-12.js");
require("unpacked/module-45.js");
require("unpacked/module-5.js");
require("unpacked/module-11.js");
require("unpacked/module-29.js");
require("unpacked/module-6.js");
require("unpacked/module-30.js").default;
require("unpacked/module-28.js");
require("unpacked/module-97.js");
require("unpacked/module-42.js");
require("unpacked/module-34.js");
require("unpacked/module-15.js");
require("unpacked/module-98.js");
require("unpacked/module-9.js");
require("unpacked/module-13.js");
require("unpacked/module-10.js");
require("unpacked/module-4.js");
require("unpacked/module-22.js");
require("unpacked/module-23.js");
require("unpacked/module-57.js");
require("unpacked/module-17.js");
require("unpacked/module-7.js");
require("unpacked/module-32.js");
const n = module20(require("unpacked/module-31.js").default);
const l = module20(require("utils/babel-helpers/slicedToArray").default);
const u = module20(require("unpacked/module-41.js"));
require("unpacked/module-41.js");
let o;
let i;
let c;
const s = module20(require("utils/babel-helpers/asyncToGenerator").default);
const f = module20(require("unpacked/module-61.js").default);
const d = module20(require("unpacked/module-65.js").default);
const p = module20(require("unpacked/module-36.js").default);
const m = module20(require("unpacked/module-37.js").default);
const h = module20(require("unpacked/module-88.js").default);
const v = module20(require("unpacked/module-55.js").default);
const g = module20(require("utils/babel-helpers/possibleConstructorReturn").default);
const y = module20(require("unpacked/module-51.js"));
const E = module20(require("unpacked/module-49.js").default);
module20(require("utils/babel-helpers/initializerWarningHelper").default);
const module14 = require("unpacked/module-14.js");
const _ = module20(require("unpacked/module-63.js").default);
const O = module20(require("unpacked/module-26.js").default);
const S = module20(require("unpacked/module-74.js").default);
const C = module20(require("unpacked/module-857.js").default);
const module52 = require("utils/index");
const module434 = require("utils/status");
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
            const r = y.default(e);
            if (t) {
                const n = y.default(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return g.default(this, a);
        };
    })(n);
    function n(...a_1) {
        let e;
        p.default(this, n);
        e = r.call(this, ...a_1);
        d.default(e, "health", i, h.default(e));
        d.default(e, "etcd", c, h.default(e));
        e.getApi = function() {
            return `${e.apiVersion}/component_metrics`;
        };
        e.getNewRefreshedResult = function(t = [], a = []) {
            const r = f.default(a);
            t.forEach((t, a)=>{
                const n = O.default(t, "metric.__name__");
                let l = null;
                if (n) {
                    const u = O.default(t, "metric.quantile");
                    const o = O.default(t, "metric.verb");
                    const i = O.default(t, "metric.result");
                    const c = r.find((e)=>{
                        if (u) {
                            return O.default(e, "metric.quantile") === u;
                        }
                        if (o) {
                            return O.default(e, "metric.verb") === o;
                        }
                        if (i) {
                            return O.default(e, "metric.result") === i;
                        }
                        return O.default(e, "metric.__name__") === n;
                    });
                    if (_.default(c)) {
                        r.push(t);
                    } else {
                        l = c;
                    }
                } else {
                    l = r[a];
                }
                if (!_.default(l)) {
                    const s = e.getNewValues(l.values, t.value);
                    S.default(l, "values", s);
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
                let c;
                let counts;
                let componentCounts;
                t = this.cluster && globals.app.isMultiCluster ? `kapis/clusters/${this.cluster}/resources.kubesphere.io/v1alpha2/componenthealth` : "kapis/resources.kubesphere.io/v1alpha2/componenthealth";
                a = await module52.to(request.get(t));
                r = a.kubesphereStatus || [];
                n = C.default(r, "namespace");
                supportKsScheduler = r.some((e)=>O.default(e, "label.component") === "kube-scheduler" && O.default(e, "healthyBackends", 0));
                supportControllerManager = r.some((e)=>O.default(e, "label.component") === "kube-controller-manager" && O.default(e, "healthyBackends", 0));
                c = {
                    kubernetes: O.default(a, "kubernetesStatus", []),
                    node: O.default(a, "nodeStatus", {}),
                    kubesphere: O.default(n, "kubesphere-system", []),
                    openpitrix: O.default(n, "openpitrix-system", []),
                    istio: O.default(n, "istio-system", []),
                    monitoring: O.default(n, "kubesphere-monitoring-system", []),
                    logging: O.default(n, "kubesphere-logging-system", []),
                    devops: O.default(n, "kubesphere-devops-system", []),
                    kubeSystem: O.default(n, "kube-system", [])
                };
                counts = {};
                componentCounts = {};
                Object.entries(c).forEach((e)=>{
                    const t = l.default(e, 2);
                    const a = t[0];
                    const r = t[1];
                    const n = {
                        total: 0,
                        health: 0
                    };
                    const u = {
                        total: 0,
                        health: 0
                    };
                    switch(a){
                        case "node":
                            n.total = O.default(r, "totalNodes", 0);
                            n.health = O.default(r, "healthyNodes", 0);
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
                                u.health += t === "Healthy" ? 1 : 0;
                                u.total += t === "Stopped" ? 0 : 1;
                            });
                    }
                    counts[a] = n;
                    componentCounts[a] = u;
                });
                this.health = {
                    ...this.health || {},
                    data: c,
                    counts,
                    componentCounts,
                    supportKsScheduler,
                    supportControllerManager
                };
            }
        }
    ]);
    return n;
})(module20(require("stores/monitoring/base")).default);
i = E.default(o.prototype, "health", [
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
c = E.default(o.prototype, "etcd", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
E.default(o.prototype, "fetchHealthMetrics", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "fetchHealthMetrics"), o.prototype);
E.default(o.prototype, "requestHealthMetrics", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "requestHealthMetrics"), o.prototype);
exports.default = o;
