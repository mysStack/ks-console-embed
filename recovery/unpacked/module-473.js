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
const o = module20(require("./module-61.js").default);
const a = module20(require("./module-31.js").default);
const i = module20(require("./module-58.js").default);
const l = module20(require("./module-41.js"));
require("./module-41.js");
let s;
let u;
let c;
let f;
let d;
let p;
let h;
const v = module20(require("./module-44.js").default);
const m = module20(require("./module-65.js").default);
const g = module20(require("./module-36.js").default);
const y = module20(require("./module-37.js").default);
const b = module20(require("./module-88.js").default);
const C = module20(require("./module-55.js").default);
const w = module20(require("./module-56.js").default);
const _ = module20(require("./module-51.js"));
const x = module20(require("./module-49.js").default);
module20(require("./module-66.js").default);
const module14 = require("./module-14.js");
const E = module20(require("./module-240.js"));
const k = module20(require("./module-105.js"));
const O = module20(require("./module-60.js").default);
const S = module20(require("./module-26.js").default);
const module52 = require("./module-52.js");
function T(e) {
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
        let n;
        const r = _.default(e);
        if (t) {
            const o = _.default(this).constructor;
            n = Reflect.construct(r, arguments, o);
        } else {
            n = r.apply(this, arguments);
        }
        return w.default(this, n);
    };
}
s = ((e)=>{
    C.default(_, e);
    let t;
    let r;
    let a;
    var w = T(_);
    function _() {
        let e;
        g.default(this, _);
        e = w.call(this);
        m.default(e, "list", u, b.default(e));
        m.default(e, "logData", c, b.default(e));
        m.default(e, "jobDetail", f, b.default(e));
        m.default(e, "runDetail", d, b.default(e));
        m.default(e, "isLoading", p, b.default(e));
        m.default(e, "getLog", h, b.default(e));
        e.module = "s2iruns";
        return e;
    }
    y.default(_, [
        {
            key: "fetchJobDetail",
            value: async function(t) {
                let n;
                let r;
                let o;
                let a;
                let i;
                n = t.name;
                r = t.cluster;
                o = t.namespace;
                this.isLoading = true;
                a = await request.get(`apis/batch/v1${this.getPath({
                    cluster: r,
                    namespace: o
                })}/jobs/${n}`);
                i = k.default.jobs(a);
                this.jobDetail = i;
                this.isLoading = false;
            }
        },
        {
            key: "fetchRunDetail",
            value: (a = v.default(l.default.mark(function e(t) {
                let n;
                let r;
                let o;
                let a;
                return l.default.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                n = t.cluster;
                                r = t.namespace;
                                if (o = t.runName) {
                                    e.next = 3;
                                    break;
                                }
                                return e.abrupt("return");
                            case 3:
                                this.getRunDetailLoading = true;
                                e.next = 6;
                                return request.get(`apis/devops.kubesphere.io/v1alpha1${this.getPath({
                                    cluster: n,
                                    namespace: r
                                })}/${this.module}/${o}`);
                            case 6:
                                a = e.sent;
                                this.runDetail = k.default.s2iruns(a);
                                this.getRunDetailLoading = false;
                                return e.abrupt("return", this.runDetail);
                            case 10:
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
            key: "deleteRun",
            value: (r = v.default(l.default.mark(function e(t) {
                let n;
                let r;
                let o;
                return l.default.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                n = t.cluster;
                                r = t.namespace;
                                if (o = t.runName) {
                                    e.next = 3;
                                    break;
                                }
                                return e.abrupt("return");
                            case 3:
                                e.next = 5;
                                return request.delete(`apis/devops.kubesphere.io/v1alpha1${this.getPath({
                                    cluster: n,
                                    namespace: r
                                })}/${this.module}/${o}`);
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
                let a;
                let u;
                let order;
                let reverse;
                let d;
                let p;
                let h;
                let filters;
                let m;
                let g;
                let y;
                const b = arguments;
                t = b.length > 0 && b[0] !== undefined ? b[0] : {};
                ({ limit: r = 10, name: a, page: u = 1, order, reverse } = t);
                t.workspace;
                d = t.cluster;
                p = t.namespace;
                h = t.more;
                filters = i.default(t, [
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
                m = {};
                m.conditions = module52.getFilterString({
                    ...filters,
                    "labels.devops.kubesphere.io/builder-name": a
                });
                if (!(order || reverse !== undefined)) {
                    order = "createTime";
                    reverse = true;
                }
                if (r !== Infinity) {
                    m.paging = `limit=${r},page=${u}`;
                }
                if (order) {
                    m.orderBy = order;
                }
                m.reverse = true;
                g = await request.get(`kapis/resources.kubesphere.io/v1alpha2${this.getPath({
                    cluster: d,
                    namespace: p
                })}/${this.module}`, m);
                (y = g.items.map(this.mapper)).forEach((e, t)=>{
                    e.count = g.total_count - t - 10 * (u - 1);
                    e.cluster = d;
                });
                this.list = {
                    data: h ? [].concat(o.default(this.list.data), o.default(y)) : y,
                    total: g.total_count || 0,
                    limit: Number(r) || 10,
                    page: Number(u) || 1,
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
            value: (t = v.default(l.default.mark(function e(t, n) {
                let r;
                let o;
                let a;
                return l.default.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                if (S.default(this.logData, "logURL", "") !== t) {
                                    this.logData = {
                                        isLoading: false,
                                        log: "",
                                        start: 0,
                                        hasMore: false
                                    };
                                }
                                this.logData.isLoading = true;
                                r = S.default(t.match(/namespaces\/([\w-/.]*)*\?/), "1");
                                if (this.containerName) {
                                    e.next = 11;
                                    break;
                                }
                                e.next = 6;
                                return request.get(`api/v1${this.getPath({
                                    namespace: r,
                                    cluster: n
                                })}`);
                            case 6:
                                o = e.sent;
                                if (S.default(o, "status.containerStatuses[0]containerID")) {
                                    e.next = 10;
                                    break;
                                }
                                return e.abrupt("return", E.default.error("container not ready"));
                            case 10:
                                this.containerName = S.default(o, "spec.containers[0].name", "");
                            case 11:
                                e.next = 13;
                                return request.get(`api/v1${this.getPath({
                                    namespace: r,
                                    cluster: n
                                })}/log`, {
                                    container: this.containerName,
                                    timestamps: true,
                                    tailLines: 1000
                                });
                            case 13:
                                a = e.sent;
                                this.logData = {
                                    logURL: t,
                                    isLoading: false,
                                    log: a,
                                    start: 0,
                                    hasMore: false
                                };
                            case 15:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function(e, n) {
                return t.apply(this, arguments);
            })
        },
        {
            key: "apiVersion",
            get: function() {
                return "apis/devops.kubesphere.io/v1alpha1";
            }
        }
    ]);
    return _;
})(module20(require("./module-68.js")).default);
u = x.default(s.prototype, "list", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            data: [],
            page: 1,
            limit: 10,
            total: 0,
            isLoading: true,
            selectedRowKeys: []
        };
    }
});
c = x.default(s.prototype, "logData", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            isLoading: true,
            log: "",
            start: 0,
            hasMore: true
        };
    }
});
f = x.default(s.prototype, "jobDetail", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
d = x.default(s.prototype, "runDetail", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
p = x.default(s.prototype, "isLoading", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return true;
    }
});
x.default(s.prototype, "fetchJobDetail", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "fetchJobDetail"), s.prototype);
x.default(s.prototype, "fetchRunDetail", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "fetchRunDetail"), s.prototype);
x.default(s.prototype, "deleteRun", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "deleteRun"), s.prototype);
x.default(s.prototype, "fetchS2IRunRecords", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "fetchS2IRunRecords"), s.prototype);
h = x.default(s.prototype, "getLog", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (n, r)=>{
            let o;
            let namespaces;
            let pods;
            let s;
            let u;
            let c;
            let f;
            let d;
            if (_this.logData.logURL !== n) {
                _this.logData = {
                    isLoading: true,
                    log: "",
                    start: 0,
                    hasMore: true
                };
            }
            o = module52.parseUrl(n).pathname.slice(1);
            namespaces = S.default(o.match(/\/namespaces\/(.*)\/pods\//), "1");
            pods = S.default(o.match(/\/pods\/(.*)/), "1");
            o = `kapis/tenant.kubesphere.io/v1beta1${_this.getPath({
                cluster: r
            })}/logs`;
            s = await request.get(o, {
                namespaces,
                pods,
                container: _this.containerName,
                timestamps: true,
                tailLines: 1000,
                size: 300,
                from: _this.logData.start,
                sort: "asc"
            });
            u = S.default(s, "query.records", []);
            c = S.default(s, "query.total", []);
            f = _this.logData.log;
            if (O.default(u)) {
                d = u.reduce((acc, item)=>acc + item.log, f);
                _this.logData = {
                    logURL: n,
                    log: d,
                    start: _this.logData.start + u.length,
                    hasMore: c > _this.logData.start + u.length,
                    isLoading: false
                };
            }
        };
    }
});
x.default(s.prototype, "fetchPodsLogs", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "fetchPodsLogs"), s.prototype);
exports.default = s;
