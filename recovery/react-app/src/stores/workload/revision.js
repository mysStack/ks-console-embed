"use strict";
require("unpacked/module-15.js");
const module20 = require("utils/babel-helpers/interopRequireDefault").default;
require("unpacked/module-5.js");
require("unpacked/module-11.js");
require("unpacked/module-18.js");
require("unpacked/module-16.js");
require("unpacked/module-9.js");
require("unpacked/module-4.js");
require("unpacked/module-23.js");
require("unpacked/module-17.js");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
require("unpacked/module-45.js");
require("unpacked/module-5.js");
require("unpacked/module-11.js");
require("unpacked/module-18.js");
require("unpacked/module-42.js");
require("unpacked/module-16.js");
require("unpacked/module-9.js");
require("unpacked/module-4.js");
require("unpacked/module-22.js");
require("unpacked/module-23.js");
require("unpacked/module-57.js");
require("unpacked/module-17.js");
const n = module20(require("unpacked/module-41.js"));
require("unpacked/module-41.js");
let l;
let u;
let o;
const i = module20(require("utils/babel-helpers/asyncToGenerator").default);
const c = module20(require("unpacked/module-65.js").default);
const s = module20(require("unpacked/module-36.js").default);
const f = module20(require("unpacked/module-37.js").default);
const d = module20(require("unpacked/module-88.js").default);
const p = module20(require("unpacked/module-55.js").default);
const m = module20(require("utils/babel-helpers/possibleConstructorReturn").default);
const h = module20(require("unpacked/module-51.js"));
const v = module20(require("unpacked/module-49.js").default);
module20(require("utils/babel-helpers/initializerWarningHelper").default);
const module14 = require("unpacked/module-14.js");
const module52 = require("utils/index");
const module248 = require("utils/workload");
const b = module20(require("utils/object.mapper"));
const module72 = require("utils/constants");
function O(e) {
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
        const r = h.default(e);
        if (t) {
            const n = h.default(this).constructor;
            a = Reflect.construct(r, arguments, n);
        } else {
            a = r.apply(this, arguments);
        }
        return m.default(this, a);
    };
}
l = ((e)=>{
    p.default(h, e);
    var m = O(h);
    function h(e) {
        let t;
        s.default(this, h);
        t = m.call(this);
        c.default(t, "workloadDetail", u, d.default(t));
        c.default(t, "currentRevision", o, d.default(t));
        t.getDetailUrl = function({ name, cluster, namespace, revision }) {
            return `kapis/resources.kubesphere.io/v1alpha2${t.getPath({
                cluster,
                namespace
            })}/${t.module}/${name}/revisions/${revision}`;
        };
        t.module = e;
        return t;
    }
    f.default(h, [
        {
            key: "fetchList",
            value: async function(t) {
                let a;
                let r;
                let l;
                let u;
                let o;
                let i;
                let c;
                let s;
                const _this = this;
                a = t.cluster;
                r = t.namespace;
                l = t.name;
                u = t.selector;
                this.list.isLoading = true;
                o = module52.joinSelector(u);
                i = this.module === "deployments" ? `apis/apps/v1${this.getPath({
                    cluster: a,
                    namespace: r
                })}/replicasets` : `apis/apps/v1${this.getPath({
                    cluster: a,
                    namespace: r
                })}/controllerrevisions`;
                c = await request.get(`${i}?labelSelector=${o}`);
                s = c.items.map(b.default.revisions).filter((e)=>e.ownerName === l && e.ownerKind === module72.MODULE_KIND_MAP[_this.module]);
                this.list.update({
                    data: s,
                    isLoading: false
                });
            }
        },
        {
            key: "fetchDetail",
            value: async function(t) {
                let a;
                let r;
                let l;
                let revision;
                let o;
                let i;
                a = t.name;
                r = t.cluster;
                l = t.namespace;
                revision = t.revision;
                this.isLoading = true;
                o = await request.get(this.getDetailUrl({
                    name: a,
                    cluster: r,
                    namespace: l,
                    revision
                }));
                i = b.default.revisions(o);
                this.detail = i;
                this.isLoading = false;
            }
        },
        {
            key: "fetchWorkloadDetail",
            value: async function(t) {
                let a;
                let r;
                let l;
                let u;
                a = t.name;
                r = t.cluster;
                l = t.namespace;
                u = await request.get(`apis/apps/v1${this.getPath({
                    cluster: r,
                    namespace: l
                })}/${this.module}/${a}`);
                this.workloadDetail = b.default[this.module](u);
            }
        },
        {
            key: "fetchCurrentRevision",
            value: async function() {
                let t;
                const a = arguments;
                t = a.length > 0 && a[0] !== undefined ? a[0] : {};
                await this.fetchList(t);
                this.currentRevision = module248.getCurrentRevision(module14.toJS(t), module14.toJS(this.list.data), this.module);
            }
        }
    ]);
    return h;
})(module20(require("stores/base")).default);
u = v.default(l.prototype, "workloadDetail", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
o = v.default(l.prototype, "currentRevision", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 0;
    }
});
v.default(l.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "fetchList"), l.prototype);
v.default(l.prototype, "fetchDetail", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "fetchDetail"), l.prototype);
v.default(l.prototype, "fetchWorkloadDetail", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "fetchWorkloadDetail"), l.prototype);
v.default(l.prototype, "fetchCurrentRevision", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "fetchCurrentRevision"), l.prototype);
exports.default = l;
