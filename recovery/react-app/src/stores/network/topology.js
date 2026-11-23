import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import module26 from "unpacked/module-26.js";
import module14 from "unpacked/module-14.js";
import { processTopology } from "stores/network/utils";
let o;
let c;
let s;
let l;
o = (()=>{
    function e(t) {
        const _this = this;
        module36(this, e);
        this.topologies = {};
        module65(this, "detail", c, this);
        module65(this, "isLoading", s, this);
        module65(this, "isSubmitting", l, this);
        this.getListUrl = function(e) {
            return `kapis/network.kubesphere.io/v1alpha2${_this.getPath(e)}/topology`;
        };
        this.getDetailUrl = function(e) {
            return `${_this.getListUrl(e)}/${e.name}`;
        };
        this.module = t;
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
            key: "fetchList",
            value: async function(t) {
                let a;
                this.isLoading = true;
                a = await request.get(this.getListUrl(t), t);
                this.topologies = processTopology(module26(a, "nodes", {}));
                this.isLoading = false;
            }
        },
        {
            key: "fetchDetail",
            value: async function(t) {
                let a;
                this.isLoading = true;
                a = await request.get(this.getDetailUrl(t));
                this.detail = a;
                this.isLoading = false;
            }
        }
    ]);
    return e;
})();
c = module49(o.prototype, "detail", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
s = module49(o.prototype, "isLoading", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return true;
    }
});
l = module49(o.prototype, "isSubmitting", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
});
module49(o.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "fetchList"), o.prototype);
module49(o.prototype, "fetchDetail", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "fetchDetail"), o.prototype);
export default o;
