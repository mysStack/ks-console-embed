import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-9.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import module14 from "unpacked/module-14.js";
import { getHpaFormattedData } from "utils/workload";
import module_68 from "stores/base";
let a;
a = ((module_68_1)=>{
    module55(r, module_68_1);
    var n = ((e)=>{
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
            let n;
            const r = module51(e);
            if (t) {
                const o = module51(this).constructor;
                n = Reflect.construct(r, arguments, o);
            } else {
                n = r.apply(this, arguments);
            }
            return module56(this, n);
        };
    })(r);
    function r(...o) {
        let e;
        module36(this, r);
        e = n.call(this, ...o);
        e.module = "horizontalpodautoscalers";
        return e;
    }
    module37(r, [
        {
            key: "create",
            value: function(e, t, n) {
                return this.submitting(request.post(this.getListUrl(t, n), getHpaFormattedData(e, n)));
            }
        },
        {
            key: "patch",
            value: async function(t, n, r) {
                await this.submitting(request.patch(this.getDetailUrl(t, r), getHpaFormattedData(n, r)));
            }
        },
        {
            key: "reset",
            value: function() {
                this.detail = {};
            }
        }
    ]);
    return r;
})(module_68);
module49(a.prototype, "create", [
    module14.action
], Object.getOwnPropertyDescriptor(a.prototype, "create"), a.prototype);
module49(a.prototype, "patch", [
    module14.action
], Object.getOwnPropertyDescriptor(a.prototype, "patch"), a.prototype);
module49(a.prototype, "reset", [
    module14.action
], Object.getOwnPropertyDescriptor(a.prototype, "reset"), a.prototype);
export default a;
