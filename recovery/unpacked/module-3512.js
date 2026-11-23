"use strict";
const module20 = require("./module-20.js").default;
require("./module-12.js");
require("./module-5.js");
require("./module-11.js");
require("./module-6.js");
require("./module-30.js").default;
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
require("./module-11.js");
require("./module-6.js");
require("./module-30.js").default;
require("./module-28.js");
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
const l = module20(require("./module-31.js").default);
const u = module20(require("./module-58.js").default);
require("./module-41.js");
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
const g = module20(require("./module-44.js").default);
const y = module20(require("./module-65.js").default);
const E = module20(require("./module-36.js").default);
const b = module20(require("./module-37.js").default);
const _ = module20(require("./module-88.js").default);
const O = module20(require("./module-55.js").default);
const S = module20(require("./module-56.js").default);
const C = module20(require("./module-51.js"));
const D = module20(require("./module-49.js").default);
module20(require("./module-66.js").default);
const module14 = require("./module-14.js");
const N = module20(require("./module-60.js").default);
const T = module20(require("./module-63.js").default);
const R = module20(require("./module-159.js").default);
const I = module20(require("./module-438.js"));
const w = module20(require("./module-858.js"));
const M = module20(require("./module-445.js"));
const P = module20(require("./module-439.js"));
const A = module20(require("./module-961.js"));
const j = module20(require("./module-1205.js"));
const L = module20(require("./module-443.js"));
const x = module20(require("./module-318.js"));
const U = module20(require("./module-452.js"));
const module72 = require("./module-72.js");
const module1204 = require("./module-1204.js");
o = ((e)=>{
    O.default(a, e);
    var t = ((e)=>{
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
            const r = C.default(e);
            if (t) {
                const n = C.default(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return S.default(this, a);
        };
    })(a);
    function a(...n) {
        let e;
        E.default(this, a);
        e = t.call(this, ...n);
        y.default(e, "list", i, _.default(e));
        y.default(e, "clustersConfig", c, _.default(e));
        y.default(e, "cacheList", s, _.default(e));
        y.default(e, "levelMeterData", f, _.default(e));
        y.default(e, "cacheLevelData", d, _.default(e));
        y.default(e, "isLoading", p, _.default(e));
        e.clusterStore = new I.default;
        e.nodeStore = new w.default;
        e.workspaceStore = new M.default;
        e.namespaceStore = new P.default;
        e.applicationCrdStore = new A.default;
        e.serviceStore = new L.default;
        e.deploymetStore = new x.default("deployments");
        e.statefulsetStore = new x.default("statefulsets");
        e.daemonsetStore = new x.default("daemonsets");
        e.opStore = new j.default;
        e.podStore = new U.default;
        e.handleNameByType = function(e, t) {
            switch(e){
                case "applications":
                    return `${t.name}:${t.selector["app.kubernetes.io/version"]}`;
                case "openpitrixs":
                    return t.cluster_id;
                default:
                    return t.name;
            }
        };
        e.handleIconByType = function(e, t) {
            if (e === "cluster" && t) {
                return module72.CLUSTER_PROVIDER_ICON[t] || "kubernetes";
            }
            return module72.ICON_TYPES[e];
        };
        e.handleStatusByWorkload = function(e, t, a) {
            if (e) {
                return e(t === "deployments" || t === "statefulsets" ? {
                    hasS2i: a.hasS2i,
                    spec: a.spec,
                    status: a.status,
                    annotations: a.annotations
                } : a);
            }
        };
        e.store = {
            cluster: e.clusterStore,
            nodes: e.nodeStore,
            workspaces: e.workspaceStore,
            namespaces: e.namespaceStore,
            applications: e.applicationCrdStore,
            services: e.serviceStore,
            deployments: e.deploymetStore,
            statefulsets: e.statefulsetStore,
            daemonsets: e.daemonsetStore,
            openpitrixs: e.opStore,
            pods: e.podStore
        };
        e.getStore = function(t) {
            return e.store[t];
        };
        y.default(e, "fetchList", m, _.default(e));
        y.default(e, "fetchLevelMeter", h, _.default(e));
        y.default(e, "setLevelMeterData", v, _.default(e));
        return e;
    }
    b.default(a, [
        {
            key: "getPath",
            value: function({ cluster, namespaces, workspaces, deployments, statefulsets, daemonsets, services, pods } = {}) {
                let c = "";
                if (cluster) {
                    c += `/klusters/${cluster}`;
                }
                if (namespaces) {
                    c += `/namespaces/${namespaces}`;
                }
                if (workspaces) {
                    c += `/workspaces/${workspaces}`;
                }
                if (services) {
                    c += `/services/${services}`;
                }
                if (deployments) {
                    c += `/deployments/${deployments}`;
                }
                if (statefulsets) {
                    c += `/statefulsets/${statefulsets}`;
                }
                if (daemonsets) {
                    c += `/daemonsets/${daemonsets}`;
                }
                if (pods) {
                    c += `/pods/${pods}`;
                }
                return c;
            }
        },
        {
            key: "isMultiCluster",
            get: function() {
                return !globals.app.isMultiCluster;
            }
        }
    ]);
    return a;
})(module20(require("./module-1768.js")).default);
i = D.default(o.prototype, "list", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
});
c = D.default(o.prototype, "clustersConfig", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
s = D.default(o.prototype, "cacheList", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
});
f = D.default(o.prototype, "levelMeterData", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
d = D.default(o.prototype, "cacheLevelData", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
p = D.default(o.prototype, "isLoading", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
});
m = D.default(o.prototype, "fetchList", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return (()=>{
            const t = g.default(n.default.mark(function t(a) {
                let r;
                let l;
                let o;
                let i;
                let c;
                let s;
                let f;
                let d;
                let p;
                return n.default.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                r = a.type;
                                l = u.default(a, [
                                    "type"
                                ]);
                                o = _this.getStore(r);
                                i = module1204.getFetchParams({
                                    isMultiCluster: _this.isMultiCluster,
                                    type: r,
                                    ...l
                                });
                                c = module1204.getListConfig({
                                    isMultiCluster: _this.isMultiCluster,
                                    type: r
                                });
                                s = [];
                                i.forEach((e)=>{
                                    if (Object.prototype.toString.call(o) === "[object Array]") {
                                        o.forEach((t)=>{
                                            s.push(t.fetchList({
                                                ...e
                                            }));
                                        });
                                    } else {
                                        s.push(o.fetchList({
                                            ...e
                                        }));
                                    }
                                });
                                t.next = 8;
                                return Promise.all(s).catch(()=>[]);
                            case 8:
                                f = t.sent;
                                d = [];
                                if (!T.default(f) && N.default(f)) {
                                    f.forEach((t, a)=>{
                                        t.forEach((t)=>{
                                            if (!module1204.hasNameSpacesType(r) || module1204.hasNameSpacesType(r) && module1204.filterListByType({
                                                type: r,
                                                ...l
                                            })(t)) {
                                                const n = c[a];
                                                const { status, desc } = n;
                                                const status_1 = _this.handleStatusByWorkload(status, r, t);
                                                const name = _this.handleNameByType(r, t);
                                                const icon = _this.handleIconByType(r, t.provider);
                                                d.push({
                                                    icon,
                                                    name,
                                                    status: status_1,
                                                    desc,
                                                    labelSelector: t.selector,
                                                    type: r,
                                                    _origin: {
                                                        ...t
                                                    }
                                                });
                                            }
                                        });
                                    });
                                }
                                if (r === "pods") {
                                    d = d.filter((e)=>e.status !== "Completed" && e.status !== "Error");
                                }
                                if (!l.node) {
                                    t.next = 15;
                                    break;
                                }
                                _this.list = d;
                                return t.abrupt("return", d);
                            case 15:
                                t.next = 17;
                                return module1204.filterResourceLevel({
                                    levelMeterData: _this.levelMeterData,
                                    type: r,
                                    data: d,
                                    ...l
                                });
                            case 17:
                                p = t.sent;
                                _this.list = p;
                                return t.abrupt("return", p);
                            case 20:
                            case "end":
                                return t.stop();
                        }
                    }
                }, t);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        })();
    }
});
h = D.default(o.prototype, "fetchLevelMeter", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (a)=>{
            let cluster;
            let u;
            let o;
            let i;
            let c;
            let s;
            cluster = a.cluster;
            u = a.namespaces;
            o = a.workspaces;
            if (cluster) {
                _this.cluster = cluster;
            }
            i = `${_this.tenantUrl({
                cluster
            })}/namespaces/${u}/metering/hierarchy${o ? `?workspace=${o}` : ""}`;
            c = await request.get(i, {}, {}, function() {
                return {};
            });
            s = R.default(c) || T.default(c) ? {} : l.default({}, u, c);
            _this.levelMeterData = s;
            return s;
        };
    }
});
v = D.default(o.prototype, "setLevelMeterData", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.levelMeterData = t;
        };
    }
});
exports.default = o;
