import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-41.js";
import "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import module68 from "stores/base";
import module14 from "unpacked/module-14.js";
import module26 from "unpacked/module-26.js";
let u;
u = ((e)=>{
    module55(r, e);
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
        e.module = "resourcequotas";
        return e;
    }
    module37(r, [
        {
            key: "getPath",
            value: function({ cluster, workspace } = {}) {
                let r = "";
                if (cluster) {
                    r += `/klusters/${cluster}`;
                }
                if (workspace) {
                    r += `/workspaces/${workspace}`;
                }
                return r;
            }
        },
        {
            key: "fetchDetail",
            value: async function(t) {
                let a;
                let r;
                this.isLoading = true;
                a = await request.get(this.getDetailUrl(t), {}, {}, function() {});
                r = {
                    ...t,
                    ...this.mapper(a)
                };
                this.detail = r;
                this.isLoading = false;
                return module26(a, "status.total");
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return "kapis/tenant.kubesphere.io/v1beta1";
            }
        }
    ]);
    return r;
})(module68);
module49(u.prototype, "fetchDetail", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "fetchDetail"), u.prototype);
export default u;
