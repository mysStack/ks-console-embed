import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-41.js";
import module58 from "unpacked/module-58.js";
import "utils/babel-helpers/asyncToGenerator";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import module1335 from "unpacked/module-1335.js";
import module14 from "unpacked/module-14.js";
import module105 from "utils/object.mapper";
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
