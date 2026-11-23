import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-4.js";
import "./module-22.js";
import "./module-41.js";
import module58 from "./module-58.js";
import "./module-44.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module49 from "./module-49.js";
import "./module-66.js";
import module1335 from "./module-1335.js";
import module14 from "./module-14.js";
import module105 from "./module-105.js";
let u;
let o;
u = (()=>{
    function e() {
        module36(this, e);
        module65(this, "list", o, this);
    }
    module37(e, [
        {
            key: "fetchList",
            value: async function(t) {
                let a;
                let r;
                let u;
                let o;
                let i;
                let c;
                t.name;
                a = t.cluster;
                r = t.namespace;
                u = module58(t, [
                    "name",
                    "cluster",
                    "namespace"
                ]);
                this.list.isLoading = true;
                o = a ? `/klusters/${a}` : "";
                i = r ? `/namespaces/${r}` : "";
                c = await request.get(`api/v1${o}${i}/events`, u);
                this.list = {
                    data: module1335(c.items.map(module105.events), "lastTimestamp"),
                    total: c.items.length,
                    isLoading: false
                };
            }
        }
    ]);
    return e;
})();
o = module49(u.prototype, "list", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            data: [],
            page: 1,
            limit: 10,
            total: 0,
            isLoading: true
        };
    }
});
module49(u.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "fetchList"), u.prototype);
export default u;
