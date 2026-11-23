import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import defaultExport from "stores/base";
const i = ((defaultExport_1)=>{
    module55(a, defaultExport_1);
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
    function a(...l) {
        let e;
        module36(this, a);
        e = t.call(this, ...l);
        e.module = "ingresses";
        e.getValiddomainUrl = function(t = {}, a) {
            return `${e.apiVersion}${e.getPath(t)}/${e.module}${a === "put" ? `/${t.name}` : ""}?dryRun=All`;
        };
        e.checkValidDomain = function(t, a, r = "post") {
            return request[r](e.getValiddomainUrl(t, r), a, {
                headers: {
                    "x-ignore-error-notify": true
                }
            }).then((e)=>{
                if (e.status === 403) {
                    return {
                        exist: true
                    };
                }
                if (e.status === 200) {
                    return {
                        exist: false
                    };
                }
                return e;
            });
        };
        return e;
    }
    return a;
})(defaultExport);
export default i;
