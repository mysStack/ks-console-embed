import "./module-15.js";
import "./module-5.js";
import "./module-9.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import module14 from "./module-14.js";
import module_1052 from "./module-1052.js";
let n;
n = ((module_1052_1)=>{
    module55(a, module_1052_1);
    var t = ((e)=>{
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
    })(a);
    function a(...n) {
        let e;
        module36(this, a);
        e = t.call(this, ...n);
        e.module = "microservicegateways";
        e.getListUrl = function(t = {}) {
            return `${e.apiVersion}${e.getPath(t)}/gateways${t.dryRun ? "?dryRun=All" : ""}`;
        };
        e.getResourceUrl = function(t = {}) {
            return `${e.apiVersion}${e.getPath(t)}/gateways`;
        };
        e.getWatchListUrl = function(t = {}) {
            return `${e.apiVersion}/watch${e.getPath(t)}/gateways`;
        };
        return e;
    }
    module37(a, [
        {
            key: "scale",
            value: function(e, replicas) {
                const a = {
                    spec: {
                        deployment: {
                            replicas
                        }
                    }
                };
                return this.submitting(request.patch(this.getDetailUrl(e), a));
            }
        }
    ]);
    return a;
})(module_1052);
module49(n.prototype, "scale", [
    module14.action
], Object.getOwnPropertyDescriptor(n.prototype, "scale"), n.prototype);
export default n;
