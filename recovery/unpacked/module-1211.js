import "./module-15.js";
import "./module-5.js";
import "./module-9.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import module14 from "./module-14.js";
import module_68 from "./module-68.js";
let l;
l = ((module_68_1)=>{
    module55(r, module_68_1);
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
            const r = module51(e);
            if (t) {
                const n = module51(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(r);
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.module = "accessors";
        return e;
    }
    module37(r, [
        {
            key: "fetchDetail",
            value: async function(t) {
                let a;
                this.isLoading = true;
                a = await request.get(this.getDetailUrl(t));
                this.detail = a;
                this.isLoading = false;
                return a;
            }
        },
        {
            key: "silentPatch",
            value: function(e, t) {
                return this.submitting(request.patch(this.getDetailUrl(e), t, {}, function(e, t) {
                    return e || t;
                }));
            }
        }
    ]);
    return r;
})(module_68);
module49(l.prototype, "fetchDetail", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "fetchDetail"), l.prototype);
module49(l.prototype, "silentPatch", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "silentPatch"), l.prototype);
export default l;
