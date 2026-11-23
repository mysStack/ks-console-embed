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
const f = ((defaultExport_1)=>{
    module55(r, defaultExport_1);
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
        e.module = "namespaces";
        e.getBindUrl = function({ namespace }) {
            return `api/v1/namespaces/${namespace}`;
        };
        return e;
    }
    module37(r, [
        {
            key: "patchNamespace",
            value: async function(t, a) {
                return request.put(this.getBindUrl(t), a);
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return "kapis/resources.kubesphere.io/v1alpha3";
            }
        }
    ]);
    return r;
})(defaultExport);
export default f;
