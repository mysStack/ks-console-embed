"use strict";
const module20 = require("utils/babel-helpers/interopRequireDefault").default;
require("unpacked/module-12.js");
require("unpacked/module-5.js");
require("unpacked/module-11.js");
require("unpacked/module-6.js");
require("unpacked/module-18.js");
require("unpacked/module-16.js");
require("unpacked/module-98.js");
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
require("unpacked/module-16.js");
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
const n = module20(require("unpacked/module-31.js").default);
const l = module20(require("utils/babel-helpers/slicedToArray").default);
const u = module20(require("unpacked/module-41.js"));
const o = module20(require("unpacked/module-58.js").default);
require("unpacked/module-41.js");
let i;
let c;
const s = module20(require("utils/babel-helpers/asyncToGenerator").default);
const f = module20(require("unpacked/module-65.js").default);
const d = module20(require("unpacked/module-36.js").default);
const p = module20(require("unpacked/module-37.js").default);
const m = module20(require("unpacked/module-88.js").default);
const h = module20(require("unpacked/module-55.js").default);
const v = module20(require("utils/babel-helpers/possibleConstructorReturn").default);
const g = module20(require("unpacked/module-51.js"));
const y = module20(require("unpacked/module-49.js").default);
module20(require("utils/babel-helpers/initializerWarningHelper").default);
const module14 = require("unpacked/module-14.js");
const b = module20(require("unpacked/module-63.js").default);
const _ = module20(require("unpacked/module-26.js").default);
const module52 = require("utils/index");
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
})(module20(require("stores/base")).default);
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
