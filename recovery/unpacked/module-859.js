import "./module-15.js";
import "./module-5.js";
import "./module-16.js";
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
import module26 from "./module-26.js";
import module14 from "./module-14.js";
import { API_VERSIONS } from "./module-72.js";
import module1090 from "./module-1090.js";
import module1091 from "./module-1091.js";
import module_318 from "./module-318.js";
let l;
l = ((module_318_1)=>{
    module55(r, module_318_1);
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
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.getWatchListUrl = function(e = {}) {
            return `/${t.module === "cronjobs" ? "apis/batch/v1" : API_VERSIONS[t.module]}/watch${t.getPath(e)}/${t.module}`;
        };
        t.getWatchUrl = function(e = {}) {
            return `${t.getWatchListUrl(e)}/${e.name}`;
        };
        t.getListUrl = function(e = {}) {
            return `/${t.module === "cronjobs" ? "apis/batch/v1" : API_VERSIONS[t.module]}${t.getPath(e)}/${t.module}${e.dryRun ? "?dryRun=All" : ""}`;
        };
        t.getResourceUrl = function({ cluster, namespace }) {
            return `/kapis/resources.kubesphere.io/v1alpha3${t.getPath({
                namespace,
                cluster
            })}/${t.module}`;
        };
        t.getServiceRequest = function(e, t) {
            const a = new module1091;
            t.namespace = t.namespace || module26(e, "metadata.namespace");
            return {
                url: a.getListUrl(t),
                data: e
            };
        };
        t.hpaStore = new module1090;
        return t;
    }
    module37(r, [
        {
            key: "rerun",
            value: async function(t) {
                let a;
                let cluster;
                let namespace;
                let u;
                let o;
                a = t.name;
                cluster = t.cluster;
                namespace = t.namespace;
                u = await request.get(this.getDetailUrl({
                    name: a,
                    cluster,
                    namespace
                }));
                o = module26(u, "metadata.resourceVersion");
                return this.submitting(request.post(`/kapis/operations.kubesphere.io/v1alpha3${this.getPath({
                    namespace,
                    cluster
                })}/jobs/${a}?action=rerun&resourceVersion=${o}`));
            }
        }
    ]);
    return r;
})(module_318);
module49(l.prototype, "rerun", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "rerun"), l.prototype);
export default l;
