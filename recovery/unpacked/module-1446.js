"use strict";
const module20 = require("./module-20.js").default;
require("./module-12.js");
require("./module-5.js");
require("./module-187.js");
require("./module-11.js");
require("./module-6.js");
require("./module-30.js").default;
require("./module-18.js");
require("./module-97.js");
require("./module-16.js");
require("./module-9.js");
require("./module-13.js");
require("./module-10.js");
require("./module-4.js");
require("./module-22.js");
require("./module-23.js");
require("./module-17.js");
require("./module-38.js");
require("./module-7.js");
require("./module-32.js");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
require("./module-12.js");
require("./module-45.js");
require("./module-5.js");
require("./module-187.js");
require("./module-11.js");
require("./module-6.js");
require("./module-30.js").default;
require("./module-18.js");
require("./module-28.js");
require("./module-97.js");
require("./module-42.js");
require("./module-16.js");
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
require("./module-38.js");
require("./module-7.js");
require("./module-32.js");
const n = module20(require("./module-41.js"));
const o = module20(require("./module-31.js").default);
const c = module20(require("./module-58.js").default);
require("./module-41.js");
let s;
let l;
let i;
const u = module20(require("./module-44.js").default);
const d = module20(require("./module-65.js").default);
const f = module20(require("./module-36.js").default);
const p = module20(require("./module-37.js").default);
const m = module20(require("./module-88.js").default);
const h = module20(require("./module-55.js").default);
const v = module20(require("./module-56.js").default);
const g = module20(require("./module-51.js"));
const _ = module20(require("./module-49.js").default);
module20(require("./module-66.js").default);
const y = module20(require("./module-26.js").default);
const E = module20(require("./module-74.js").default);
const b = module20(require("./module-198.js").default);
const S = module20(require("./module-63.js").default);
const O = module20(require("./module-857.js").default);
const R = module20(require("./module-482.js").default);
const module14 = require("./module-14.js");
const module52 = require("./module-52.js");
const module72 = require("./module-72.js");
const D = module20(require("./module-105.js"));
s = ((e)=>{
    h.default(s, e);
    let t;
    let a;
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
            return v.default(this, a);
        };
    })(s);
    function s(...a) {
        let e;
        f.default(this, s);
        e = r.call(this, ...a);
        d.default(e, "isComponentsLoading", l, m.default(e));
        d.default(e, "components", i, m.default(e));
        e.module = "strategies";
        return e;
    }
    p.default(s, [
        {
            key: "fetchList",
            value: (a = u.default(n.default.mark(function e(t) {
                let a;
                let r;
                let o;
                let s;
                let l;
                let i;
                const _this = this;
                return n.default.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                a = t.cluster;
                                r = t.namespace;
                                o = t.selector;
                                s = c.default(t, [
                                    "cluster",
                                    "namespace",
                                    "selector"
                                ]);
                                this.list.isLoading = true;
                                if (r) {
                                    e.next = 5;
                                    break;
                                }
                                this.list.isLoading = false;
                                return e.abrupt("return");
                            case 5:
                                l = s;
                                if (!S.default(o)) {
                                    l.labelSelector = module52.joinSelector(o);
                                }
                                e.next = 9;
                                return request.get(this.getListUrl({
                                    cluster: a,
                                    namespace: r
                                }), l);
                            case 9:
                                i = e.sent;
                                this.list.update({
                                    data: i.items.map((e)=>({
                                            ..._this.mapper(e),
                                            cluster: a
                                        })),
                                    total: i.items.length,
                                    isLoading: false
                                });
                            case 11:
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
            key: "fetchMetrics",
            value: function({ cluster, namespace, newWorkloadName, oldWorkloadName, protocol }, c = {}) {
                const queryTime = Math.floor((new Date).getTime() / 1000);
                const l = {
                    queryTime,
                    duration: 300,
                    step: 30,
                    rateInterval: "30s",
                    "filters[]": [
                        "request_count",
                        "request_duration",
                        "request_error_count",
                        "tcp_sent",
                        "tcp_received"
                    ],
                    direction: "inbound",
                    reporter: "destination",
                    ...c
                };
                if (protocol === "http") {
                    l.requestProtocol = "http";
                }
                return Promise.all([
                    request.get(`kapis/servicemesh.kubesphere.io/v1alpha2${this.getPath({
                        cluster,
                        namespace
                    })}/workloads/${newWorkloadName}/metrics`, l),
                    request.get(`kapis/servicemesh.kubesphere.io/v1alpha2${this.getPath({
                        cluster,
                        namespace
                    })}/workloads/${oldWorkloadName}/metrics`, l)
                ]);
            }
        },
        {
            key: "fetchHealth",
            value: function({ cluster, namespace, newWorkloadName, oldWorkloadName }, o = {}) {
                const c = {
                    rateInterval: "30s",
                    ...o
                };
                return Promise.all([
                    request.get(`kapis/servicemesh.kubesphere.io/v1alpha2${this.getPath({
                        cluster,
                        namespace
                    })}/workloads/${newWorkloadName}/health`, c),
                    request.get(`kapis/servicemesh.kubesphere.io/v1alpha2${this.getPath({
                        cluster,
                        namespace
                    })}/workloads/${oldWorkloadName}/health`, c)
                ]);
            }
        },
        {
            key: "fetchComponents",
            value: (t = u.default(n.default.mark(function e(t) {
                let a;
                let r;
                let s;
                let l;
                let i;
                let u;
                let d;
                let f;
                let p;
                let m;
                let h;
                let v;
                let g;
                let _;
                let E;
                let b;
                let R;
                let A;
                let T;
                let k;
                let C;
                let P;
                return n.default.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                r = t.cluster;
                                s = t.namespace;
                                l = t.labelSelector;
                                i = t.newVersion;
                                u = t.oldVersion;
                                d = t.service;
                                f = t.silent;
                                p = c.default(t, [
                                    "cluster",
                                    "namespace",
                                    "labelSelector",
                                    "newVersion",
                                    "oldVersion",
                                    "service",
                                    "silent"
                                ]);
                                if (!f) {
                                    this.isComponentsLoading = true;
                                }
                                if (s) {
                                    e.next = 5;
                                    break;
                                }
                                this.isComponentsLoading = false;
                                return e.abrupt("return");
                            case 5:
                                m = p;
                                if (!S.default(l)) {
                                    m.labelSelector = l;
                                }
                                e.next = 9;
                                return request.get(`api/v1${this.getPath({
                                    cluster: r,
                                    namespace: s
                                })}/pods`, m);
                            case 9:
                                h = e.sent;
                                v = h.items.map(D.default.pods);
                                g = O.default(v, "labels.version");
                                _ = g[i] || [];
                                E = g[u] || [];
                                b = _.filter((e)=>e.status.phase === "Running").length;
                                R = _.length;
                                A = E.filter((e)=>e.status.phase === "Running").length;
                                T = E.length;
                                k = function(e) {
                                    return y.default(e, "status.conditions", []).some((e)=>e.type === "Ready" && e.status === "True");
                                };
                                C = _.length > 0 && _.every(k);
                                P = E.length > 0 && E.every(k);
                                this.components.data = (a = {}, o.default(a, i, {
                                    name: d,
                                    version: i,
                                    pods: _,
                                    desire: R,
                                    available: b,
                                    isAllReady: C
                                }), o.default(a, u, {
                                    name: d,
                                    version: u,
                                    pods: E,
                                    desire: T,
                                    available: A,
                                    isAllReady: P
                                }), a);
                                this.isComponentsLoading = false;
                            case 23:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function(e) {
                return t.apply(this, arguments);
            })
        },
        {
            key: "create",
            value: function(e, { cluster, namespace }) {
                let a;
                if (b.default(e, "strategy")) {
                    a = request.post(this.getListUrl({
                        cluster,
                        namespace
                    }), e.strategy);
                }
                if (b.default(e, "workload")) {
                    const o = y.default(e, "workload.kind", "Deployment");
                    const c = R.default(module72.MODULE_KIND_MAP, function(e) {
                        return e === o;
                    }) || "deployments";
                    a.then(request.post(`apis/apps/v1${this.getPath({
                        cluster,
                        namespace
                    })}/${c}`, e.workload));
                }
                return this.submitting(a);
            }
        },
        {
            key: "update",
            value: function({ name, cluster, namespace, newWorkloadName, newVersion, resourceVersion }, t) {
                const l = [];
                let i = "";
                if (b.default(t, "workload")) {
                    const u = y.default(t, "workload.kind", "Deployment");
                    const d = R.default(module72.MODULE_KIND_MAP, function(e) {
                        return e === u;
                    }) || "deployments";
                    if ((i = y.default(t.workload, "metadata.labels.version")) === newVersion) {
                        const f = y.default(t.workload, "metadata.name");
                        l.push(request.put(`apis/apps/v1${this.getPath({
                            cluster,
                            namespace
                        })}/${d}/${f}`, t.workload));
                    } else {
                        l.push(request.delete(`apis/apps/v1${this.getPath({
                            cluster,
                            namespace
                        })}/${d}/${newWorkloadName}`), request.post(`apis/apps/v1${this.getPath({
                            cluster,
                            namespace
                        })}/${d}`, t.workload));
                    }
                }
                if (b.default(t, "strategy")) {
                    E.default(t.strategy, "metadata.resourceVersion", resourceVersion);
                    if (i && i !== newVersion) {
                        if (y.default(t.strategy, "spec.governor") === newVersion) {
                            E.default(t.strategy, "spec.governor", i);
                        }
                        (y.default(t.strategy, "spec.template.spec.http") || y.default(t.strategy, "spec.template.spec.tcp", [])).forEach((e)=>{
                            if (e.route && e.route.length > 0) {
                                e.route.forEach((e)=>{
                                    if (y.default(e, "destination.subset") === newVersion) {
                                        E.default(e, "destination.subset", i);
                                    }
                                });
                            }
                            if (e.mirror && e.mirror.subset === newVersion) {
                                e.mirror.subset = i;
                            }
                        });
                    }
                    l.push(request.put(this.getDetailUrl({
                        name,
                        cluster,
                        namespace
                    }), t.strategy));
                }
                return this.submitting(Promise.all(l));
            }
        }
    ]);
    return s;
})(module20(require("./module-68.js")).default);
l = _.default(s.prototype, "isComponentsLoading", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return true;
    }
});
i = _.default(s.prototype, "components", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            data: {}
        };
    }
});
_.default(s.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "fetchList"), s.prototype);
_.default(s.prototype, "fetchMetrics", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "fetchMetrics"), s.prototype);
_.default(s.prototype, "fetchHealth", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "fetchHealth"), s.prototype);
_.default(s.prototype, "fetchComponents", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "fetchComponents"), s.prototype);
_.default(s.prototype, "create", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "create"), s.prototype);
_.default(s.prototype, "update", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "update"), s.prototype);
exports.default = s;
