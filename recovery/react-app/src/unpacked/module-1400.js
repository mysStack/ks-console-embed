"use strict";
const module20 = require("utils/babel-helpers/interopRequireDefault").default;
require("unpacked/module-12.js");
require("unpacked/module-5.js");
require("unpacked/module-11.js");
require("unpacked/module-6.js");
require("unpacked/module-73.js");
require("unpacked/module-320.js");
require("unpacked/module-27.js");
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
require("unpacked/module-73.js");
require("unpacked/module-28.js");
require("unpacked/module-320.js");
require("unpacked/module-42.js");
require("unpacked/module-27.js");
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
const n = module20(require("unpacked/module-41.js"));
const l = module20(require("unpacked/module-31.js").default);
const u = module20(require("unpacked/module-58.js").default);
require("unpacked/module-41.js");
let o;
let i;
const c = module20(require("utils/babel-helpers/asyncToGenerator").default);
const s = module20(require("unpacked/module-65.js").default);
const f = module20(require("unpacked/module-36.js").default);
const d = module20(require("unpacked/module-37.js").default);
const p = module20(require("unpacked/module-88.js").default);
const m = module20(require("unpacked/module-55.js").default);
const h = module20(require("utils/babel-helpers/possibleConstructorReturn").default);
const v = module20(require("unpacked/module-51.js"));
const g = module20(require("unpacked/module-49.js").default);
module20(require("utils/babel-helpers/initializerWarningHelper").default);
const module14 = require("unpacked/module-14.js");
const E = module20(require("unpacked/module-63.js").default);
const module52 = require("utils/index");
o = ((e)=>{
    m.default(r, e);
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
            const r = v.default(e);
            if (t) {
                const n = v.default(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return h.default(this, a);
        };
    })(r);
    function r(...n) {
        let e;
        f.default(this, r);
        e = a.call(this, ...n);
        s.default(e, "sort", i, p.default(e));
        e.resourceName = "pod";
        e.getApi = function({ nodeName, workload }) {
            return `${e.apiVersion}${workload ? "/workload_metrics" : nodeName ? "/node_metrics" : "/pod_metrics"}`;
        };
        e.handleParams = function(e) {
            return e;
        };
        return e;
    }
    d.default(r, [
        {
            key: "fetchSortedMetrics",
            value: async function(t) {
                let a;
                let r;
                let l;
                let i;
                let c;
                let s;
                let f;
                let d;
                let p;
                ({ limit: a, page: r, more: l, metrics: i = [] } = t);
                c = u.default(t, [
                    "limit",
                    "page",
                    "more",
                    "metrics"
                ]);
                this.sort.isLoading = true;
                s = {
                    ...c
                };
                if (!E.default(i)) {
                    s.sort_metric = i.join("|");
                }
                s.limit = a || 10;
                s.page = r || 1;
                if (c.cluster) {
                    this.cluster = c.cluster;
                }
                f = this.getApi(c);
                d = await module52.to(request.get(f, s));
                p = this.getResult(d.results);
                if (l) {
                    p = this.getMoreResult(p, this.sort.data);
                }
                this.sort = {
                    data: p,
                    total: d.total_item || 0,
                    limit: Number(d.limit || 10),
                    page: Number(d.page || 1),
                    isLoading: false
                };
                return p;
            }
        }
    ]);
    return r;
})(module20(require("unpacked/module-884.js")).default);
i = g.default(o.prototype, "sort", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            data: {},
            page: 1,
            limit: 10,
            total: 0,
            isLoading: false
        };
    }
});
g.default(o.prototype, "fetchSortedMetrics", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "fetchSortedMetrics"), o.prototype);
exports.default = o;
