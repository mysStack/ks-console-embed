import "./module-15.js";
import "./module-5.js";
import "./module-187.js";
import "./module-6.js";
import "./module-30.js";
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
    function a(...o) {
        let e;
        module36(this, a);
        e = t.call(this, ...o);
        e.getActive = undefined;
        e.isActive = async (a)=>{
            let r;
            let l;
            let u;
            r = a.clusters;
            l = [];
            r.forEach((cluster)=>{
                l.push(request.get(`${e.getPath({
                    cluster
                })}${e.apiVersion}?name=bgpconfs.network.kubesphere.io`, {}, {}, function() {
                    return false;
                }));
            });
            u = await Promise.all(l);
            return u.every((e)=>!!e);
        };
        return e;
    }
    module37(a, [
        {
            key: "getPath",
            value: function({ cluster, namespace } = {}) {
                let r = "";
                if (cluster) {
                    r += `/clusters/${cluster}`;
                }
                if (namespace) {
                    r += `/namespaces/${namespace}`;
                }
                return r;
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return "/kapis/resources.kubesphere.io/v1alpha3/customresourcedefinitions";
            }
        }
    ]);
    return a;
})(defaultExport);
export default f;
