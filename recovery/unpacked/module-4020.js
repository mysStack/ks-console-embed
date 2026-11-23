import "./module-15.js";
import "./module-5.js";
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
import defaultExport from "./module-68.js";
const d = ((defaultExport_1)=>{
    module55(n, defaultExport_1);
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
            let r;
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(...a) {
        let e;
        module36(this, n);
        e = r.call(this, ...a);
        e.module = "namespaces";
        e.getBindUrl = function({ namespace, cluster }) {
            return `clusters/${cluster}/api/v1/namespaces/${namespace}`;
        };
        return e;
    }
    module37(n, [
        {
            key: "patchNamespace",
            value: async function(t, r) {
                return request.put(this.getBindUrl(t), r);
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return "kapis/resources.kubesphere.io/v1alpha3";
            }
        }
    ]);
    return n;
})(defaultExport);
export default d;
