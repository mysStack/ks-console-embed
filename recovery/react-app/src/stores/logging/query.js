"use strict";
const module20 = require("utils/babel-helpers/interopRequireDefault").default;
require("unpacked/module-12.js");
require("unpacked/module-5.js");
require("unpacked/module-11.js");
require("unpacked/module-6.js");
require("unpacked/module-18.js");
require("unpacked/module-320.js");
require("unpacked/module-9.js");
require("unpacked/module-13.js");
require("unpacked/module-10.js");
require("unpacked/module-4.js");
require("unpacked/module-23.js");
require("unpacked/module-17.js");
require("unpacked/module-7.js");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
require("unpacked/module-12.js");
require("unpacked/module-45.js");
require("unpacked/module-5.js");
require("unpacked/module-11.js");
require("unpacked/module-6.js");
require("unpacked/module-18.js");
require("unpacked/module-28.js");
require("unpacked/module-320.js");
require("unpacked/module-42.js");
require("unpacked/module-34.js");
require("unpacked/module-15.js");
require("unpacked/module-9.js");
require("unpacked/module-13.js");
require("unpacked/module-10.js");
require("unpacked/module-4.js");
require("unpacked/module-22.js");
require("unpacked/module-23.js");
require("unpacked/module-57.js");
require("unpacked/module-17.js");
require("unpacked/module-7.js");
const n = module20(require("unpacked/module-58.js").default);
const l = module20(require("unpacked/module-41.js"));
const u = module20(require("unpacked/module-31.js").default);
require("unpacked/module-41.js");
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
let g;
const y = module20(require("utils/babel-helpers/asyncToGenerator").default);
const E = module20(require("unpacked/module-65.js").default);
const b = module20(require("unpacked/module-36.js").default);
const _ = module20(require("unpacked/module-37.js").default);
const O = module20(require("unpacked/module-88.js").default);
const S = module20(require("unpacked/module-55.js").default);
const C = module20(require("utils/babel-helpers/possibleConstructorReturn").default);
const D = module20(require("unpacked/module-51.js"));
const k = module20(require("unpacked/module-49.js").default);
module20(require("utils/babel-helpers/initializerWarningHelper").default);
const module14 = require("unpacked/module-14.js");
const T = module20(require("unpacked/module-903.js").default);
const R = module20(require("unpacked/module-26.js").default);
const module244 = require("unpacked/module-244.js").default;
const w = module20(require("unpacked/module-1387.js").default);
const module52 = require("utils/index");
o = ((e)=>{
    S.default(o, e);
    var u = ((e)=>{
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
            const r = D.default(e);
            if (t) {
                const n = D.default(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return C.default(this, a);
        };
    })(o);
    function o(...a) {
        let e;
        b.default(this, o);
        e = u.call(this, ...a);
        E.default(e, "size", i, O.default(e));
        E.default(e, "from", c, O.default(e));
        E.default(e, "total", s, O.default(e));
        E.default(e, "records", f, O.default(e));
        E.default(e, "log_query", d, O.default(e));
        E.default(e, "startTime", p, O.default(e));
        E.default(e, "endTime", m, O.default(e));
        E.default(e, "workspace", h, O.default(e));
        E.default(e, "pods", v, O.default(e));
        E.default(e, "containers", g, O.default(e));
        return e;
    }
    _.default(o, [
        {
            key: "setQuery",
            value: function(e) {
                this.log_query = e;
            }
        },
        {
            key: "loadMoreLogs",
            value: async function() {
                this.fetch({
                    ...this.preParams,
                    from: this.from + this.size
                }, {
                    loadMore: true
                });
            }
        },
        {
            key: "requestLogs",
            value: async function(t) {
                return await this.request(t);
            }
        },
        {
            key: "fetch",
            value: async function() {
                let t;
                let a;
                let r;
                let n;
                let u;
                let o;
                let i;
                const c = arguments;
                t = c.length > 0 && c[0] !== undefined ? c[0] : {};
                a = c.length > 1 && c[1] !== undefined ? c[1] : {};
                r = {
                    operation: "query",
                    start_time: this.startTime,
                    end_time: this.endTime,
                    log_query: this.log_query,
                    pods: this.pods,
                    sort: this.sort,
                    containers: this.containers,
                    from: this.from,
                    size: this.size
                };
                n = T.default(r, t);
                u = await this.requestLogs(n);
                o = R.default(u, "query", {});
                i = this.stripAnsiRecords(o.records);
                this.records = a.loadMore ? this.records.concat(i) : i;
                this.workspace = u.workspace;
                this.total = o.total || 0;
                this.from = n.from;
                this.size = n.size;
                this.preParams = n;
            }
        },
        {
            key: "stripAnsiRecords",
            value: function(e = []) {
                return e.map((e)=>({
                        ...e,
                        logStripANSI: w.default(e.log)
                    }));
            }
        },
        {
            key: "exportLinkFactory",
            value: function(e) {
                const { cluster, start_time, end_time } = e;
                const l = n.default(e, [
                    "cluster",
                    "start_time",
                    "end_time"
                ]);
                const u = module52.getClusterUrl(this.getApiPath(cluster));
                return `/${u}?${module244.stringify({
                    sort: "asc",
                    ...l,
                    start_time: Math.floor(start_time / 1000),
                    end_time: Math.floor(end_time / 1000),
                    operation: "export",
                    cluster
                })}`;
            }
        },
        {
            key: "haveMore",
            get: function() {
                return this.total > this.from + this.size;
            }
        }
    ]);
    return o;
})(module20(require("stores/logging/index")).default);
i = k.default(o.prototype, "size", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 10;
    }
});
c = k.default(o.prototype, "from", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 0;
    }
});
s = k.default(o.prototype, "total", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 0;
    }
});
f = k.default(o.prototype, "records", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
});
d = k.default(o.prototype, "log_query", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "";
    }
});
p = k.default(o.prototype, "startTime", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 0;
    }
});
m = k.default(o.prototype, "endTime", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 0;
    }
});
h = k.default(o.prototype, "workspace", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "";
    }
});
v = k.default(o.prototype, "pods", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "";
    }
});
g = k.default(o.prototype, "containers", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "";
    }
});
k.default(o.prototype, "setQuery", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "setQuery"), o.prototype);
k.default(o.prototype, "haveMore", [
    module14.computed
], Object.getOwnPropertyDescriptor(o.prototype, "haveMore"), o.prototype);
k.default(o.prototype, "loadMoreLogs", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "loadMoreLogs"), o.prototype);
k.default(o.prototype, "fetch", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "fetch"), o.prototype);
exports.default = o;
