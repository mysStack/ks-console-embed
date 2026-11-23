import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-30.js";
import "./module-18.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-22.js";
import "./module-23.js";
import "./module-17.js";
import "./module-38.js";
import "./module-7.js";
import "./module-32.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-41.js";
import "./module-44.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module332 from "./module-332.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import module14 from "./module-14.js";
import module_68 from "./module-68.js";
let l;
l = ((module_68_1)=>{
    module55(o, module_68_1);
    var l = ((e)=>{
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
            const r = module51(e);
            if (t) {
                const n = module51(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(o);
    function o(...a) {
        let e;
        module36(this, o);
        e = l.call(this, ...a);
        e.module = "volumesnapshotclasses";
        e.getResourceUrl = function(t) {
            return `kapis/snapshot.storage.k8s.io/v1${e.getPath(t)}/${e.module}`;
        };
        return e;
    }
    module37(o, [
        {
            key: "create",
            value: function(e, t) {
                return module332(module51(o.prototype), "create", this).call(this, {
                    apiVersion: "snapshot.storage.k8s.io/v1",
                    kind: this.resourceKind,
                    deletionPolicy: "Delete",
                    ...e
                }, t);
            }
        },
        {
            key: "fetchDetail",
            value: async function(t) {
                let a;
                let r;
                this.isLoading = true;
                a = await request.get(this.getDetailUrl(t), {}, {}, function() {});
                r = a ? {
                    ...t,
                    ...this.mapper(a)
                } : {};
                this.detail = r;
                this.isLoading = false;
                return r;
            }
        },
        {
            key: "deleteSilent",
            value: async function(t) {
                await request.delete(this.getDetailUrl(t), {}, {}, function() {});
            }
        },
        {
            key: "silentBatchDelete",
            value: async function(t) {
                const _this = this;
                return Promise.all(t.map((name)=>request.delete(_this.getDetailUrl({
                        name
                    }), {}, {}, function() {})));
            }
        },
        {
            key: "resourceKind",
            get: function() {
                return "VolumeSnapshotClass";
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return "apis/snapshot.storage.k8s.io/v1";
            }
        }
    ]);
    return o;
})(module_68);
module49(l.prototype, "fetchDetail", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "fetchDetail"), l.prototype);
export default l;
