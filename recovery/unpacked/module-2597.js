"use strict";
const module20 = require("./module-20.js").default;
require("./module-12.js");
require("./module-5.js");
require("./module-11.js");
require("./module-6.js");
require("./module-18.js");
require("./module-87.js");
require("./module-48.js");
require("./module-16.js");
require("./module-27.js");
require("./module-9.js");
require("./module-13.js");
require("./module-10.js");
require("./module-4.js");
require("./module-23.js");
require("./module-24.js");
require("./module-17.js");
require("./module-62.js");
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
require("./module-18.js");
require("./module-28.js");
require("./module-87.js");
require("./module-245.js");
require("./module-48.js");
require("./module-42.js");
require("./module-16.js");
require("./module-27.js");
require("./module-34.js");
require("./module-15.js");
require("./module-9.js");
require("./module-13.js");
require("./module-10.js");
require("./module-4.js");
require("./module-22.js");
require("./module-23.js");
require("./module-57.js");
require("./module-24.js");
require("./module-17.js");
require("./module-62.js");
require("./module-7.js");
const n = module20(require("./module-61.js").default);
const l = module20(require("./module-31.js").default);
const u = module20(require("./module-58.js").default);
const o = module20(require("./module-41.js"));
require("./module-41.js");
let i;
let c;
const s = module20(require("./module-44.js").default);
const f = module20(require("./module-65.js").default);
const d = module20(require("./module-36.js").default);
const p = module20(require("./module-37.js").default);
const m = module20(require("./module-88.js").default);
const h = module20(require("./module-55.js").default);
const v = module20(require("./module-56.js").default);
const g = module20(require("./module-51.js"));
module20(require("./module-66.js").default);
const y = module20(require("./module-49.js").default);
const module14 = require("./module-14.js");
const b = module20(require("./module-60.js").default);
const _ = module20(require("./module-26.js").default);
const O = module20(require("./module-240.js"));
const S = module20(require("./module-105.js"));
const module52 = require("./module-52.js");
function N(e) {
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
}
i = ((e)=>{
    h.default(g, e);
    let t;
    let r;
    let l;
    var v = N(g);
    function g(...a) {
        let e;
        d.default(this, g);
        e = v.call(this, ...a);
        e.getListUrl = function(t = {}) {
            return `${e.apiVersion}${e.getPath(t)}/${e.module}${t.dryRun ? "?dryRun=All" : ""}`;
        };
        e.getWatchListUrl = function(t = {}) {
            return `${e.apiVersion}/watch${e.getPath(t)}/${e.module}`;
        };
        e.getResourceUrl = function(t = {}) {
            return `/kapis/resources.kubesphere.io/v1alpha3${e.getPath(t)}/${e.module}`;
        };
        f.default(e, "getLog", c, m.default(e));
        return e;
    }
    p.default(g, [
        {
            key: "fetchJobDetail",
            value: async function(t) {
                let a;
                let r;
                let n;
                let l;
                let u;
                a = t.name;
                r = t.cluster;
                n = t.namespace;
                this.isLoading = true;
                l = await request.get(`/apis/batch/v1${this.getPath({
                    namespace: n,
                    cluster: r
                })}/jobs/${a}`);
                u = S.default.jobs(l);
                this.jobDetail = u;
                this.isLoading = false;
            }
        },
        {
            key: "fetchRunDetail",
            value: (l = s.default(o.default.mark(function e(t) {
                let a;
                let r;
                let n;
                let l;
                return o.default.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                a = t.cluster;
                                r = t.namespace;
                                if (n = t.runName) {
                                    e.next = 3;
                                    break;
                                }
                                return e.abrupt("return");
                            case 3:
                                this.getRunDetailLoading = true;
                                e.next = 6;
                                return request.get(`/apis/devops.kubesphere.io/v1alpha1${this.getPath({
                                    namespace: r,
                                    cluster: a
                                })}/${this.module}/${n}`);
                            case 6:
                                l = e.sent;
                                this.runDetail = S.default.s2iruns(l);
                                this.getRunDetailLoading = false;
                                return e.abrupt("return", this.runDetail);
                            case 10:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function(e) {
                return l.apply(this, arguments);
            })
        },
        {
            key: "deleteRun",
            value: (r = s.default(o.default.mark(function e(t) {
                let a;
                let r;
                let n;
                return o.default.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                a = t.cluster;
                                r = t.namespace;
                                if (n = t.runName) {
                                    e.next = 3;
                                    break;
                                }
                                return e.abrupt("return");
                            case 3:
                                e.next = 5;
                                return request.delete(`/apis/devops.kubesphere.io/v1alpha1${this.getPath({
                                    namespace: r,
                                    cluster: a
                                })}/${this.module}/${n}`);
                            case 5:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function(e) {
                return r.apply(this, arguments);
            })
        },
        {
            key: "fetchS2IRunRecords",
            value: async function() {
                let t;
                let r;
                let l;
                let c;
                let order;
                let reverse;
                let d;
                let p;
                let m;
                let filters;
                let v;
                let g;
                let y;
                const E = arguments;
                t = E.length > 0 && E[0] !== undefined ? E[0] : {};
                ({ limit: r = 10, name: l, page: c = 1, order, reverse } = t);
                t.workspace;
                d = t.cluster;
                p = t.namespace;
                m = t.more;
                filters = u.default(t, [
                    "limit",
                    "name",
                    "page",
                    "order",
                    "reverse",
                    "workspace",
                    "cluster",
                    "namespace",
                    "more"
                ]);
                if (!this.list.data.length) {
                    this.list.isLoading = true;
                }
                v = {};
                v.conditions = module52.getFilterString({
                    ...filters,
                    "labels.devops.kubesphere.io/builder-name": l
                });
                if (!(order || reverse !== undefined)) {
                    order = "createTime";
                    reverse = true;
                }
                if (r !== Infinity) {
                    v.paging = `limit=${r},page=${c}`;
                }
                if (order) {
                    v.orderBy = order;
                }
                v.reverse = true;
                g = await request.get(`/kapis/resources.kubesphere.io/v1alpha2${this.getPath({
                    namespace: p,
                    cluster: d
                })}/${this.module}`, v);
                (y = g.items.map(this.mapper)).forEach((e, t)=>{
                    e.count = g.total_count - t - 10 * (c - 1);
                    e.cluster = d;
                });
                this.list = {
                    data: m ? [].concat(n.default(this.list.data), n.default(y)) : y,
                    total: g.total_count || 0,
                    limit: Number(r) || 10,
                    page: Number(c) || 1,
                    order,
                    reverse,
                    filters,
                    isLoading: false,
                    selectedRowKeys: []
                };
                return this.list;
            }
        },
        {
            key: "fetchPodsLogs",
            value: (t = s.default(o.default.mark(function e(t, a) {
                let r;
                let n;
                let l;
                return o.default.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                if (_.default(this.logData, "logURL", "") !== t) {
                                    this.logData = {
                                        isLoading: false,
                                        log: "",
                                        start: 0,
                                        hasMore: false
                                    };
                                }
                                this.logData.isLoading = true;
                                r = _.default(t.match(/namespaces\/([\w-/.]*)*\?/), "1");
                                if (this.containerName) {
                                    e.next = 11;
                                    break;
                                }
                                e.next = 6;
                                return request.get(`api/v1${this.getPath({
                                    namespace: r,
                                    cluster: a
                                })}`);
                            case 6:
                                n = e.sent;
                                if (_.default(n, "status.containerStatuses[0]containerID")) {
                                    e.next = 10;
                                    break;
                                }
                                return e.abrupt("return", O.default.error("container not ready"));
                            case 10:
                                this.containerName = _.default(n, "spec.containers[0].name", "");
                            case 11:
                                e.next = 13;
                                return request.get(`/api/v1${this.getPath({
                                    namespace: r,
                                    cluster: a
                                })}/log`, {
                                    container: this.containerName,
                                    timestamps: true,
                                    tailLines: 1000
                                });
                            case 13:
                                l = e.sent;
                                this.logData = {
                                    logURL: t,
                                    isLoading: false,
                                    log: l,
                                    start: 0,
                                    hasMore: false
                                };
                            case 15:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function(e, a) {
                return t.apply(this, arguments);
            })
        },
        {
            key: "apiVersion",
            get: function() {
                return "/apis/devops.kubesphere.io/v1alpha1";
            }
        }
    ]);
    return g;
})(module20(require("./module-473.js")).default);
y.default(i.prototype, "fetchJobDetail", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "fetchJobDetail"), i.prototype);
y.default(i.prototype, "fetchRunDetail", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "fetchRunDetail"), i.prototype);
y.default(i.prototype, "deleteRun", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "deleteRun"), i.prototype);
y.default(i.prototype, "fetchS2IRunRecords", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "fetchS2IRunRecords"), i.prototype);
c = y.default(i.prototype, "getLog", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (a, r)=>{
            let n;
            let namespaces;
            let pods;
            let i;
            let c;
            let s;
            let f;
            let d;
            if (_this.logData.logURL !== a) {
                _this.logData = {
                    isLoading: true,
                    log: "",
                    start: 0,
                    hasMore: true
                };
            }
            n = module52.parseUrl(a).pathname.slice(1);
            namespaces = _.default(n.match(/\/namespaces\/(.*)\/pods\//), "1");
            pods = _.default(n.match(/\/pods\/(.*)/), "1");
            n = `/kapis/tenant.kubesphere.io/v1beta1${_this.getPath({
                cluster: r
            })}logs`;
            i = await request.get(n, {
                namespaces,
                pods,
                container: _this.containerName,
                timestamps: true,
                tailLines: 1000,
                size: 300,
                from: _this.logData.start,
                sort: "asc"
            });
            c = _.default(i, "query.records", []);
            s = _.default(i, "query.total", []);
            f = _this.logData.log;
            if (b.default(c)) {
                d = c.reduce((acc, item)=>acc + item.log, f);
                _this.logData = {
                    logURL: a,
                    log: d,
                    start: _this.logData.start + c.length,
                    hasMore: s > _this.logData.start + c.length,
                    isLoading: false
                };
            }
        };
    }
});
y.default(i.prototype, "fetchPodsLogs", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "fetchPodsLogs"), i.prototype);
exports.default = i;
