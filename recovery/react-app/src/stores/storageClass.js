"use strict";
const module20 = require("utils/babel-helpers/interopRequireDefault").default;
require("unpacked/module-12.js");
require("unpacked/module-5.js");
require("unpacked/module-11.js");
require("unpacked/module-6.js");
require("unpacked/module-18.js");
require("unpacked/module-16.js");
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
require("unpacked/module-191.js");
require("unpacked/module-42.js");
require("unpacked/module-16.js");
require("unpacked/module-160.js");
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
const n = module20(require("unpacked/module-31.js").default);
const l = module20(require("unpacked/module-58.js").default);
const u = module20(require("unpacked/module-41.js"));
require("unpacked/module-41.js");
let o;
let i;
let c;
const s = module20(require("utils/babel-helpers/asyncToGenerator").default);
const f = module20(require("unpacked/module-65.js").default);
const d = module20(require("unpacked/module-36.js").default);
const p = module20(require("unpacked/module-37.js").default);
const m = module20(require("unpacked/module-88.js").default);
const h = module20(require("utils/babel-helpers/get"));
const v = module20(require("unpacked/module-55.js").default);
const g = module20(require("utils/babel-helpers/possibleConstructorReturn").default);
const y = module20(require("unpacked/module-51.js"));
const E = module20(require("unpacked/module-49.js").default);
module20(require("utils/babel-helpers/initializerWarningHelper").default);
const b = module20(require("unpacked/module-26.js").default);
const _ = module20(require("unpacked/module-74.js").default);
const O = module20(require("unpacked/module-195.js").default);
const S = module20(require("unpacked/module-63.js").default);
const C = module20(require("unpacked/module-60.js").default);
const module14 = require("unpacked/module-14.js");
const k = module20(require("utils/object.mapper"));
const N = module20(require("stores/volumeSnapshotClasses"));
function I(e) {
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
}
o = ((e)=>{
    v.default(g, e);
    var o = I(g);
    function g(...a) {
        let e;
        d.default(this, g);
        e = o.call(this, ...a);
        f.default(e, "resources", i, m.default(e));
        f.default(e, "metrics", c, m.default(e));
        e.module = "storageclasses";
        e.getResourceUrl = function(t) {
            return `kapis/storage.k8s.io/v1${e.getPath(t)}/${e.module}`;
        };
        return e;
    }
    p.default(g, [
        {
            key: "delete",
            value: async function(t) {
                let a;
                await h.default(y.default(g.prototype), "delete", this).call(this, t);
                a = new N.default;
                await a.deleteSilent(t);
            }
        },
        {
            key: "batchDelete",
            value: async function(t) {
                await h.default(y.default(g.prototype), "batchDelete", this).call(this, t);
                (new N.default).silentBatchDelete(t);
            }
        },
        {
            key: "create",
            value: function(e, t) {
                if (e.provisioner === "custom") {
                    e.provisioner = e.parameters.provisioner;
                    delete e.parameters.provisioner;
                }
                if (O.default(e.allowVolumeExpansion)) {
                    e.allowVolumeExpansion = e.allowVolumeExpansion === "true";
                }
                const a = b.default(e, 'metadata.annotations["storageclass.kubesphere.io/supported-access-modes"]');
                if (!S.default(a) && C.default(a)) {
                    _.default(e, 'metadata.annotations["storageclass.kubesphere.io/supported-access-modes"]', JSON.stringify(a));
                }
                return this.submitting(request.post(this.getListUrl(t), e));
            }
        },
        {
            key: "createAlongWithSnapshotClasses",
            value: async function(t, a) {
                let r;
                await this.create(t, a);
                r = new N.default;
                if (!(b.default(t, 'metadata.annotations["storageclass.kubesphere.io/support-snapshot"]') !== "true")) {
                    await r.create({
                        metadata: {
                            name: b.default(t, "metadata.name")
                        },
                        driver: b.default(t, "provisioner")
                    }, a);
                }
            }
        },
        {
            key: "fetchResources",
            value: async function(t) {
                let a;
                let r;
                let n;
                let o;
                a = t.name;
                r = l.default(t, [
                    "name"
                ]);
                this.resources.isLoading = true;
                n = {
                    ...r
                };
                if (a) {
                    n.conditions = `storageClassName=${a}`;
                }
                o = await request.get("kapis/resources.kubesphere.io/v1alpha2/persistentvolumeclaims", n);
                this.resources = {
                    data: o.items ? o.items.map(k.default.volumes) : [],
                    isLoading: false
                };
            }
        },
        {
            key: "getStorageSizeConfig",
            value: function() {
                const e = this.detail || {};
                return {
                    min: Number(b.default(e, "parameters.minSize")) || 0,
                    max: Number(b.default(e, "parameters.maxSize")) || 2048,
                    step: Number(b.default(e, "parameters.stepSize")) || 1
                };
            }
        }
    ]);
    return g;
})(module20(require("stores/base")).default);
i = E.default(o.prototype, "resources", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            data: [],
            isLoading: true
        };
    }
});
c = E.default(o.prototype, "metrics", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            data: [],
            isLoading: true
        };
    }
});
E.default(o.prototype, "create", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "create"), o.prototype);
E.default(o.prototype, "fetchResources", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "fetchResources"), o.prototype);
exports.default = o;
