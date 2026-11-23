"use strict";
const module20 = require("./module-20.js").default;
require("./module-12.js");
require("./module-5.js");
require("./module-11.js");
require("./module-6.js");
require("./module-18.js");
require("./module-16.js");
require("./module-98.js");
require("./module-9.js");
require("./module-13.js");
require("./module-10.js");
require("./module-4.js");
require("./module-23.js");
require("./module-17.js");
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
require("./module-42.js");
require("./module-16.js");
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
const n = module20(require("./module-31.js").default);
const l = module20(require("./module-96.js").default);
const u = module20(require("./module-41.js"));
const o = module20(require("./module-58.js").default);
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
const y = module20(require("./module-49.js").default);
module20(require("./module-66.js").default);
const module14 = require("./module-14.js");
const b = module20(require("./module-63.js").default);
const _ = module20(require("./module-26.js").default);
const module52 = require("./module-52.js");
i = ((e)=>{
    h.default(n, e);
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
    })(n);
    function n() {
        let e;
        d.default(this, n);
        e = r.call(this);
        f.default(e, "excute", c, m.default(e));
        e.module = "jobs";
        return e;
    }
    p.default(n, [
        {
            key: "fetchListByK8s",
            value: async function(t) {
                let cluster;
                let namespace;
                let n;
                let l;
                let i;
                let c;
                cluster = t.cluster;
                namespace = t.namespace;
                n = t.selector;
                l = o.default(t, [
                    "cluster",
                    "namespace",
                    "selector"
                ]);
                this.list.isLoading = true;
                if (!b.default(n)) {
                    l.labelSelector = module52.joinSelector(n);
                }
                i = await request.get(`apis/batch/v1${this.getPath({
                    cluster,
                    namespace
                })}/${this.module}`, l);
                c = i.items || [];
                this.list.update({
                    data: c.map(this.mapper),
                    total: c.length,
                    isLoading: false,
                    selectedRowKeys: []
                });
                return c;
            }
        },
        {
            key: "fetchExcuteRecords",
            value: async function(t) {
                let a;
                let r;
                let n;
                let o;
                this.excute.isLoading = true;
                a = await request.get(`apis/batch/v1${this.getPath(t)}/${this.module}/${t.name}`);
                r = this.mapper(a);
                n = [];
                try {
                    o = JSON.parse(_.default(r, "annotations.revisions", {}));
                    n = Object.entries(o).map((e)=>{
                        const t = l.default(e, 2);
                        const id = t[0];
                        return {
                            ...t[1],
                            id
                        };
                    });
                } catch (e) {}
                this.excute = {
                    data: n,
                    total: n.length || 0,
                    isLoading: false
                };
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return "apis/kubesphere.io/v1alpha1";
            }
        }
    ]);
    return n;
})(module20(require("./module-68.js")).default);
c = y.default(i.prototype, "excute", [
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
            isLoading: true
        };
    }
});
y.default(i.prototype, "fetchListByK8s", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "fetchListByK8s"), i.prototype);
y.default(i.prototype, "fetchExcuteRecords", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "fetchExcuteRecords"), i.prototype);
exports.default = i;
