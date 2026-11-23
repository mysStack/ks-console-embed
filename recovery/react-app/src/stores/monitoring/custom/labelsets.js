import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-138.js";
import "unpacked/module-9.js";
import "unpacked/module-10.js";
import "unpacked/module-85.js";
import "unpacked/module-7.js";
import "unpacked/module-28.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import module14 from "unpacked/module-14.js";
import module26 from "unpacked/module-26.js";
let l;
let o;
l = (()=>{
    function e() {
        module36(this, e);
        this.apiVersion = "kapis/monitoring.kubesphere.io/v1beta1";
        module65(this, "labelsets", o, this);
    }
    module37(e, [
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
            key: "fetchLabelSets",
            value: async function() {
                let t;
                let a;
                let r;
                let l;
                let o;
                const u = arguments;
                t = u.length > 0 && u[0] !== undefined ? u[0] : {};
                a = {
                    ...t
                };
                r = await request.get(`${this.apiVersion}${this.getPath({})}/targets/labelsets`, a);
                l = module26(r, "data") || [];
                o = {};
                l.forEach((e)=>{
                    Object.keys(e).forEach((t)=>{
                        o[t] = o[t] || [];
                        if (!o[t].includes(e[t])) {
                            o[t].push(e[t]);
                        }
                    });
                });
                this.labelsets = o;
            }
        }
    ]);
    return e;
})();
o = module49(l.prototype, "labelsets", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
module49(l.prototype, "fetchLabelSets", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "fetchLabelSets"), l.prototype);
export default l;
