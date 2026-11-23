"use strict";
const module20 = require("./module-20.js").default;
require("./module-12.js");
require("./module-5.js");
require("./module-11.js");
require("./module-6.js");
require("./module-84.js");
require("./module-30.js").default;
require("./module-18.js");
require("./module-48.js");
require("./module-97.js");
require("./module-9.js");
require("./module-13.js");
require("./module-10.js");
require("./module-4.js");
require("./module-316.js");
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
require("./module-6.js");
require("./module-84.js");
require("./module-30.js").default;
require("./module-18.js");
require("./module-28.js");
require("./module-48.js");
require("./module-97.js");
require("./module-42.js");
require("./module-34.js");
require("./module-15.js");
require("./module-9.js");
require("./module-13.js");
require("./module-10.js");
require("./module-4.js");
require("./module-316.js");
require("./module-22.js");
require("./module-23.js");
require("./module-57.js");
require("./module-17.js");
require("./module-7.js");
require("./module-32.js");
const n = module20(require("./module-41.js"));
require("./module-41.js");
let l;
let u;
let o;
let i;
const c = module20(require("./module-44.js").default);
const s = module20(require("./module-31.js").default);
const f = module20(require("./module-58.js").default);
const d = module20(require("./module-65.js").default);
const p = module20(require("./module-36.js").default);
const m = module20(require("./module-37.js").default);
const h = module20(require("./module-88.js").default);
const v = module20(require("./module-55.js").default);
const g = module20(require("./module-56.js").default);
const y = module20(require("./module-51.js"));
const E = module20(require("./module-49.js").default);
module20(require("./module-66.js").default);
const b = module20(require("./module-60.js").default);
const _ = module20(require("./module-63.js").default);
const O = module20(require("./module-26.js").default);
const S = module20(require("./module-903.js").default);
const module14 = require("./module-14.js");
const module1204 = require("./module-1204.js");
const module944 = require("./module-944.js");
const module72 = require("./module-72.js");
const module950 = require("./module-950.js");
l = ((e)=>{
    v.default(r, e);
    let t;
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
            const r = y.default(e);
            if (t) {
                const n = y.default(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return g.default(this, a);
        };
    })(r);
    function r(...n_1) {
        let e;
        p.default(this, r);
        e = a.call(this, ...n_1);
        e.module = "meter";
        d.default(e, "isLoading", u, h.default(e));
        d.default(e, "data", o, h.default(e));
        e.tenantUrl = function({ cluster }) {
            if (globals.app.isMultiCluster && cluster) {
                return `kapis/clusters/${cluster}/tenant.kubesphere.io/v1alpha2`;
            }
            return "kapis/tenant.kubesphere.io/v1beta1";
        };
        e.getApi = function(t) {
            const t_module = t.module;
            const r = f.default(t, [
                "module"
            ]);
            return `${e.apiVersion}${e.getPaths({
                module: t_module,
                ...r
            })}`;
        };
        e.getTenantApi = function(t) {
            t.module;
            const a = f.default(t, [
                "module"
            ]);
            return `${e.tenantUrl({
                cluster: a.cluster
            })}/metering`;
        };
        e.getExportParams = function(e) {
            e.cluster;
            const { workspaces, namespaces } = e;
            e.applications;
            e.services;
            const { deployments, statefulsets, daemonsets, pods, nodes, isTime, start, end, step, module, meters, resources } = e;
            const v = f.default(e, [
                "cluster",
                "workspaces",
                "namespaces",
                "applications",
                "services",
                "deployments",
                "statefulsets",
                "daemonsets",
                "pods",
                "nodes",
                "isTime",
                "start",
                "end",
                "step",
                "module",
                "meters",
                "resources"
            ]);
            const g = S.default({
                ...v
            }, module1204.handleLevelParams({
                module
            }), module1204.getTimeParams({
                isTime,
                start,
                end,
                step
            }), module1204.getMetricsFilters({
                module,
                meters
            }), module1204.getResourceFilters({
                module,
                resources
            }), module1204.handleWorkloadToKind({
                deployments,
                statefulsets,
                daemonsets
            }), module1204.handleNodeParams({
                nodes,
                pods,
                resources
            }));
            if (!v.operation) {
                delete g.resources_filter;
            }
            g.namespace = namespaces;
            g.workspace = workspaces;
            return g;
        };
        e.getParams = function(t = {}) {
            const { start, end, step } = t;
            const step_1 = step === undefined ? "1h" : step;
            const t_resources = t.resources;
            const resources = t_resources === undefined ? [] : t_resources;
            const t_meters = t.meters;
            const meters = t_meters === undefined ? [] : t_meters;
            const { module, isTime } = t;
            const isTime_1 = isTime !== undefined && isTime;
            const { deployments, statefulsets, daemonsets, nodes, pods } = t;
            const E = f.default(t, [
                "start",
                "end",
                "step",
                "resources",
                "meters",
                "module",
                "isTime",
                "deployments",
                "statefulsets",
                "daemonsets",
                "nodes",
                "pods"
            ]);
            const b = S.default({
                ...E
            }, module1204.getTimeParams({
                start,
                end,
                step: step_1,
                isTime: isTime_1
            }), module1204.getMetricsFilters({
                module,
                meters
            }), module1204.getResourceFilters({
                module,
                resources
            }), module1204.handleWorkloadToKind({
                deployments,
                statefulsets,
                daemonsets
            }), module1204.handleNodeParams({
                nodes,
                pods,
                resources,
                module
            }));
            return e.setParams(b);
        };
        e.setParams = function(e) {
            return e;
        };
        e.getResource = function({ cluster, workspaces, namespaces, applications, openpitrixs, services, deployments, statefulsets, daemonsets, nodes, pods }) {
            const d = {
                cluster,
                namespaces,
                workspaces
            };
            if (pods) {
                return {
                    pods,
                    nodes: nodes || undefined,
                    ...d
                };
            }
            if (nodes) {
                return {
                    nodes,
                    ...d
                };
            }
            if (deployments || statefulsets || daemonsets) {
                return {
                    deployments,
                    statefulsets,
                    daemonsets,
                    ...d
                };
            }
            if (services) {
                return {
                    services,
                    ...d
                };
            }
            if (openpitrixs) {
                return {
                    openpitrixs,
                    ...d
                };
            }
            if (applications) {
                return {
                    applications,
                    ...d
                };
            }
            return d;
        };
        e.setOneSourceAllMeterByType = function({ data, metric_name }, t) {
            const n = O.default(data, "result.0", {});
            return {
                type: metric_name,
                module: module944.RESOURCES_METER_TYPE[t],
                ...n
            };
        };
        e.getOneSourceAllMeterData = function(e, t, a) {
            if (t.start) {
                e.start = 1000 * t.start;
            }
            if (t.end) {
                e.end = 1000 * t.end;
            }
            if (t.step) {
                e.step = module950.getTimeStr(t.step);
            }
            e.values = module1204.fillEmptyMeterValue({
                start: t.start,
                end: t.end,
                step: t.step.slice(0, -1)
            }, e.values);
            return module1204.handleValueByUnit(e, a);
        };
        e.handleAllMeterData = function(t, a, r) {
            const n = t.results.map((t)=>{
                if (t.data.result) {
                    const n = e.setOneSourceAllMeterByType(t, r);
                    return e.getOneSourceAllMeterData(n, a, r);
                }
                return false;
            });
            return module1204.handleSortBySourceType(n);
        };
        e.handleOneMeterData = function(e, t) {
            const a = e.results[0];
            const r = O.default(a, "data.result", []);
            const type = O.default(a, "metric_name", "");
            let l = [];
            if (!_.default(r)) {
                l = r.map((e)=>{
                    e = {
                        type,
                        module: module944.RESOURCES_METER_TYPE[t],
                        ...e
                    };
                    return module1204.handleValueByUnit(e, t);
                });
            }
            return l;
        };
        d.default(e, "fetchPrice", i, h.default(e));
        return e;
    }
    m.default(r, [
        {
            key: "getPaths",
            value: function({ cluster, workspaces, namespaces, applications, services, deployments, statefulsets, openpitrixs, daemonsets, pods, nodes, module }) {
                let p = "";
                if (cluster) {
                    p += module === "cluster" ? "/cluster" : "";
                }
                if (workspaces) {
                    p += `/workspaces/${workspaces}`;
                }
                if (namespaces || module === "namespaces") {
                    p += module === "namespaces" ? "/namespaces" : `/namespaces/${namespaces}`;
                }
                if (applications) {
                    p += "/applications";
                }
                if (openpitrixs && !services) {
                    p += "/openpitrixs";
                }
                if (services) {
                    p += "/services";
                }
                if (!pods && (deployments || statefulsets || daemonsets)) {
                    p += "/workloads";
                }
                if (nodes && !pods) {
                    p += "/nodes";
                }
                if (nodes && pods) {
                    p += `/nodes/${nodes}`;
                }
                if (pods) {
                    p += "/pods";
                }
                return p;
            }
        },
        {
            key: "fetchMeter",
            value: (t = c.default(n.default.mark(function e() {
                let t;
                let a;
                let workspaces;
                let namespaces;
                let openpitrixs;
                let applications;
                let services;
                let deployments;
                let statefulsets;
                let daemonsets;
                let pods;
                let nodes;
                let h;
                let v;
                let g;
                let y;
                let E;
                let O;
                let S;
                let C;
                let k;
                const N = arguments;
                return n.default.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                t = N.length > 0 && N[0] !== undefined ? N[0] : {};
                                a = t.cluster;
                                workspaces = t.workspaces;
                                namespaces = t.namespaces;
                                openpitrixs = t.openpitrixs;
                                applications = t.applications;
                                services = t.services;
                                deployments = t.deployments;
                                statefulsets = t.statefulsets;
                                daemonsets = t.daemonsets;
                                pods = t.pods;
                                nodes = t.nodes;
                                h = f.default(t, [
                                    "cluster",
                                    "workspaces",
                                    "namespaces",
                                    "openpitrixs",
                                    "applications",
                                    "services",
                                    "deployments",
                                    "statefulsets",
                                    "daemonsets",
                                    "pods",
                                    "nodes"
                                ]);
                                this.isLoading = true;
                                v = "";
                                g = {};
                                this.cluster = a;
                                y = this.getResource({
                                    cluster: a,
                                    workspaces,
                                    namespaces,
                                    openpitrixs,
                                    applications,
                                    services,
                                    deployments,
                                    statefulsets,
                                    daemonsets,
                                    pods,
                                    nodes
                                });
                                g = h.operation ? this.getExportParams({
                                    ...y,
                                    ...h
                                }) : this.getParams({
                                    deployments,
                                    statefulsets,
                                    daemonsets,
                                    pods,
                                    nodes,
                                    ...h
                                });
                                if (h.module === "namespaces") {
                                    v = this.getTenantApi({
                                        module: h.module,
                                        ...y
                                    });
                                    E = y.workspaces && y.namespaces ? {
                                        workspaces: y.workspaces
                                    } : {};
                                    g = {
                                        ...g,
                                        ...E,
                                        ...module1204.handleLevelParams({
                                            module: h.module
                                        })
                                    };
                                } else {
                                    v = this.getApi({
                                        module: h.module,
                                        ...y
                                    });
                                }
                                if (h.module === "openpitrixs") {
                                    g.cluster = this.cluster;
                                }
                                e.next = 11;
                                return request.get(v, g, {}, function() {
                                    return [];
                                });
                            case 11:
                                O = e.sent;
                                this.isLoading = false;
                                if (!h.operation) {
                                    e.next = 15;
                                    break;
                                }
                                return e.abrupt("return", O);
                            case 15:
                                if (_.default(O) || !b.default(O.results)) {
                                    e.next = 24;
                                    break;
                                }
                                S = h.module;
                                if (h.meters !== "all") {
                                    e.next = 21;
                                    break;
                                }
                                C = this.handleAllMeterData(O, g, S);
                                this.data = C;
                                return e.abrupt("return", C);
                            case 21:
                                k = this.handleOneMeterData(O, S);
                                this.data = k;
                                return e.abrupt("return", k);
                            case 24:
                                this.data = [];
                                return e.abrupt("return", []);
                            case 26:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function() {
                return t.apply(this, arguments);
            })
        },
        {
            key: "apiVersion",
            get: function() {
                if (globals.app.isMultiCluster && this.cluster) {
                    return `kapis/clusters/${this.cluster}/metering.kubesphere.io/v1alpha1`;
                }
                return "kapis/metering.kubesphere.io/v1alpha1";
            }
        }
    ]);
    return r;
})(module20(require("./module-68.js")).default);
u = E.default(l.prototype, "isLoading", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
});
o = E.default(l.prototype, "data", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
});
E.default(l.prototype, "fetchMeter", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "fetchMeter"), l.prototype);
i = E.default(l.prototype, "fetchPrice", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return (()=>{
            const t = c.default(n.default.mark(function t(a) {
                let r;
                let l;
                let u;
                let o;
                return n.default.wrap(function(t) {
                    while(true){
                        switch(t.prev = t.next){
                            case 0:
                                r = a.cluster;
                                l = `${_this.tenantUrl({
                                    cluster: r
                                })}/metering/price`;
                                t.next = 4;
                                return request.get(l, {}, {}, function() {});
                            case 4:
                                if (!(u = t.sent) || _.default(u)) {
                                    t.next = 13;
                                    break;
                                }
                                if (!Object.values(u).some((e)=>typeof e === "number" && e < 0) && u.currency !== "") {
                                    t.next = 9;
                                    break;
                                }
                                return t.abrupt("return", {
                                    cluster: r
                                });
                            case 9:
                                o = {};
                                Object.keys(u).forEach((e)=>{
                                    if (![
                                        "currency",
                                        "retention_day"
                                    ].includes(e) && u[e] > 0) {
                                        o[module944.FEE_CONFIG[e]] = u[e];
                                    }
                                });
                                if (!_.default(o)) {
                                    o.currency = u.currency;
                                    o.retention_day = O.default(u, "retention_day", "7d");
                                    o.cluster = r || O.default(module72.DEFAULT_CLUSTER, "metadata.name");
                                }
                                return t.abrupt("return", o);
                            case 13:
                                return t.abrupt("return", {
                                    cluster: r
                                });
                            case 14:
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
exports.default = l;
