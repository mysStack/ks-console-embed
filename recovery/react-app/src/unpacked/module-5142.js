"use strict";
const module20 = require("utils/babel-helpers/interopRequireDefault").default;
require("unpacked/module-12.js");
require("unpacked/module-5.js");
require("unpacked/module-11.js");
require("unpacked/module-6.js");
require("unpacked/module-18.js");
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
require("unpacked/module-18.js");
require("unpacked/module-28.js");
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
const u = module20(require("unpacked/module-61.js").default);
const o = module20(require("unpacked/module-58.js").default);
require("unpacked/module-41.js");
let l;
let i;
const c = module20(require("utils/babel-helpers/asyncToGenerator").default);
const s = module20(require("unpacked/module-31.js").default);
const f = module20(require("unpacked/module-65.js").default);
const d = module20(require("unpacked/module-36.js").default);
const p = module20(require("unpacked/module-37.js").default);
const m = module20(require("unpacked/module-88.js").default);
const h = module20(require("unpacked/module-55.js").default);
const v = module20(require("utils/babel-helpers/possibleConstructorReturn").default);
const g = module20(require("unpacked/module-51.js"));
const y = module20(require("unpacked/module-49.js").default);
module20(require("utils/babel-helpers/initializerWarningHelper").default);
const E = module20(require("unpacked/module-26.js").default);
const module14 = require("unpacked/module-14.js");
const S = module20(require("utils/object.mapper"));
l = ((e)=>{
    h.default(l, e);
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
    })(l);
    function l(...a) {
        let e;
        d.default(this, l);
        e = r.call(this, ...a);
        e.module = "notificationhistory";
        f.default(e, "clusters", i, m.default(e));
        e.getResourceUrl = function(t = {}) {
            return `${e.apiVersion}${e.getPath(t)}/notifications/search`;
        };
        e.getFilterParams = function(e) {
            const t = {
                ...e
            };
            if (t.timeRange) {
                delete t.timeRange;
            }
            return t;
        };
        return e;
    }
    p.default(l, [
        {
            key: "fetchList",
            value: async function(t) {
                let a;
                let l;
                let c;
                let s;
                let f;
                let d;
                const _this = this;
                ({ more: a, page: l = 1, limit: c = 10 } = t);
                s = o.default(t, [
                    "more",
                    "page",
                    "limit"
                ]);
                this.list.isLoading = true;
                s.size = c;
                s.from = (l - 1) * c;
                f = await request.get(this.getResourceUrl(), this.getFilterParams(s));
                d = (E.default(f, "items") || []).map((e)=>({
                        ..._this.mapper(e)
                    }));
                this.list.update({
                    data: a ? [].concat(u.default(this.list.data), u.default(d)) : d,
                    total: f.totalItems || f.total_count || f.total || d.length || 0,
                    ...s,
                    limit: Number(c),
                    page: Number(l),
                    isLoading: false,
                    ...!this.list.silent ? {
                        selectedRowKeys: []
                    } : {}
                });
                return d;
            }
        },
        {
            key: "fetchClusterList",
            value: async function() {
                let t;
                let a;
                const _this = this;
                t = await request.get("kapis/tenant.kubesphere.io/v1beta1/clusters");
                a = (E.default(t, "items") || []).map((e)=>({
                        ..._this.ClusterMapper(e)
                    }));
                this.clusters = a;
                return a;
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return "kapis/notification.kubesphere.io/v2beta2";
            }
        },
        {
            key: "ClusterMapper",
            get: function() {
                return S.default.clusters || function(e) {
                    return e;
                };
            }
        }
    ]);
    return l;
})(module20(require("stores/notification/base")).default);
i = y.default(l.prototype, "clusters", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
});
y.default(l.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "fetchList"), l.prototype);
y.default(l.prototype, "fetchClusterList", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "fetchClusterList"), l.prototype);
exports.default = l;
