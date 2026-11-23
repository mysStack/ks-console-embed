import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import "./module-31.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module14 from "./module-14.js";
import module_68 from "./module-68.js";
let u;
u = ((module_68_1)=>{
    module55(u, module_68_1);
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
    })(u);
    function u(...a_1) {
        let e;
        module36(this, u);
        e = l.call(this, ...a_1);
        e.module = "persistentvolumes";
        e.getDetailUrl = function(t = {}) {
            return `${e.getResourceUrl(t)}/${t.name}`;
        };
        e.getKs8Url = function(a = {}) {
            return `api/v1${e.getPath(a)}/${e.module}/${a.name ?? ""}`;
        };
        return e;
    }
    module37(u, [
        {
            key: "fetchDetail",
            value: async function(t) {
                let a;
                let r;
                this.isLoading = true;
                a = await request.get(this.getKs8Url(t));
                r = {
                    ...t,
                    ...this.mapper(a)
                };
                this.detail = r;
                this.isLoading = false;
                return r;
            }
        },
        {
            key: "create",
            value: async function(t, a) {
                return this.submitting(request.post(this.getKs8Url(t), a));
            }
        },
        {
            key: "update",
            value: async function(t, a) {
                let r;
                let l;
                r = await request.get(this.getResourceUrl(t));
                if (l = module26(r, "metadata.resourceVersion")) {
                    module74(a, "metadata.resourceVersion", l);
                }
                return this.submitting(request.put(this.getKs8Url(t), a));
            }
        },
        {
            key: "patch",
            value: function(e, t) {
                return this.submitting(request.patch(this.getKs8Url(e), t));
            }
        },
        {
            key: "delete",
            value: function(e) {
                return this.submitting(request.delete(this.getKs8Url(e)));
            }
        }
    ]);
    return u;
})(module_68);
module49(u.prototype, "fetchDetail", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "fetchDetail"), u.prototype);
module49(u.prototype, "create", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "create"), u.prototype);
module49(u.prototype, "update", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "update"), u.prototype);
module49(u.prototype, "patch", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "patch"), u.prototype);
module49(u.prototype, "delete", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "delete"), u.prototype);
export default u;
