import "./module-15.js";
import "./module-5.js";
import "./module-16.js";
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
import { API_VERSIONS } from "./module-72.js";
import defaultExport from "./module-858.js";
const d = ((defaultExport_1)=>{
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
    function a(...o_1) {
        let e;
        module36(this, a);
        e = t.call(this, ...o_1);
        e.module = "edgenodes";
        e.getListUrl = function(t = {}) {
            return `${e.apiVersion}${e.getPath(t)}/nodes${t.dryRun ? "?dryRun=All" : ""}`;
        };
        e.getResourceUrl = function(t = {}) {
            return `kapis/resources.kubesphere.io/v1alpha3${e.getPath(t)}/nodes`;
        };
        e.createEdgeNode = async (a)=>{
            let cluster;
            let node_name;
            let node_ip;
            let add_default_taint;
            let i;
            let c;
            cluster = a.cluster;
            node_name = a.name;
            node_ip = a.ip;
            add_default_taint = a.defaultTaint;
            i = `kapis/kubeedge.kubesphere.io/v1beta1/${e.getPath({
                cluster
            })}/nodes/join`;
            c = await request.get(i, {
                node_name,
                node_ip,
                add_default_taint
            }, {}, function(e) {
                return e;
            });
            return c;
        };
        return e;
    }
    module37(a, [
        {
            key: "apiVersion",
            get: function() {
                return API_VERSIONS.nodes || "";
            }
        }
    ]);
    return a;
})(defaultExport);
export default d;
