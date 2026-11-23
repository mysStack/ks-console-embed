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
import "utils/babel-helpers/asyncToGenerator";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { API_VERSIONS } from "utils/constants";
import defaultExport from "stores/node";
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
        e.getResourceUrl = function({ cluster }) {
            return `/kapis/resources.kubesphere.io/v1alpha3${e.getPath({
                cluster
            })}/nodes`;
        };
        e.createEdgeNode = async (a)=>{
            let cluster;
            let node_name;
            let node_ip;
            let add_default_taint;
            let runtime;
            let c;
            let s;
            let f;
            let d;
            let p;
            cluster = a.cluster;
            node_name = a.name;
            node_ip = a.ip;
            add_default_taint = a.defaultTaint;
            runtime = a.runtime;
            c = a.imageRepository;
            s = a.nodegroup;
            f = `/kapis/infra.edgewize.io/v1alpha1${e.getPath({
                cluster
            })}/nodes/join`;
            d = {
                node_name,
                node_ip,
                add_default_taint,
                runtime,
                "image-repository": c
            };
            if (s) {
                d.node_group = s;
            }
            p = await request.get(f, d, {}, function(e) {
                return e;
            });
            return p;
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
