import "./module-15.js";
import "./module-30.js";
import "./module-9.js";
import "./module-4.js";
import "./module-22.js";
import "./module-38.js";
import "./module-32.js";
import "./module-41.js";
import module96 from "./module-96.js";
import "./module-44.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module49 from "./module-49.js";
import "./module-66.js";
import module14 from "./module-14.js";
import { to } from "./module-52.js";
let u;
let o;
u = (()=>{
    function e() {
        module36(this, e);
        module65(this, "resource", o, this);
    }
    module37(e, [
        {
            key: "getPath",
            value: function({ cluster, namespace }) {
                let r = "";
                if (cluster) {
                    r += `/klusters/${cluster}`;
                }
                if (namespace) {
                    r += `/namespaces/${namespace}`;
                }
                return r;
            }
        },
        {
            key: "fetchResourceStatus",
            value: async function(t) {
                let a;
                let r;
                let u;
                let o;
                this.resource.isLoading = true;
                a = await Promise.all([
                    to(request.get(`kapis/resources.kubesphere.io/v1alpha2${this.getPath(t)}/quotas`)),
                    to(request.get(`kapis/resources.kubesphere.io/v1alpha2${this.getPath(t)}/abnormalworkloads`))
                ]);
                r = module96(a, 2);
                u = r[0];
                o = r[1];
                this.resource = {
                    quota: u.data,
                    status: o.data,
                    isLoading: false
                };
            }
        }
    ]);
    return e;
})();
o = module49(u.prototype, "resource", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            quota: {},
            status: {},
            isLoading: true
        };
    }
});
module49(u.prototype, "fetchResourceStatus", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "fetchResourceStatus"), u.prototype);
export default u;
