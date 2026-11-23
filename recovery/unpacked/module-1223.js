import "./module-15.js";
import "./module-5.js";
import "./module-16.js";
import "./module-9.js";
import "./module-4.js";
import "./module-22.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module49 from "./module-49.js";
import "./module-66.js";
import module14 from "./module-14.js";
import { to } from "./module-52.js";
import module105 from "./module-105.js";
let l;
let u;
let o;
let i;
l = (()=>{
    function e() {
        const _this = this;
        module36(this, e);
        module65(this, "isExistService", u, this);
        module65(this, "service", o, this);
        module65(this, "isLoading", i, this);
        this.getServiceUrl = function({ name, cluster, namespace }) {
            return `api/v${_this.getPath({
                cluster,
                namespace
            })}/services/${name}`;
        };
    }
    let a;
    module37(e, [
        {
            key: "getPath",
            value: function({ cluster, namespace } = {}) {
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
            key: "checkService",
            value: (a = module44(module41.mark(function e(t) {
                let a;
                let r;
                let l;
                let u;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                a = t.name;
                                r = t.cluster;
                                l = t.namespace;
                                if (a && l) {
                                    e.next = 3;
                                    break;
                                }
                                return e.abrupt("return");
                            case 3:
                                e.next = 5;
                                return request.get(this.getServiceUrl({
                                    name: a,
                                    cluster: r,
                                    namespace: l
                                }), {}, {
                                    headers: {
                                        "x-check-exist": true
                                    }
                                });
                            case 5:
                                u = e.sent;
                                this.isExistService = u.exist;
                            case 7:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function(e) {
                return a.apply(this, arguments);
            })
        },
        {
            key: "fetchService",
            value: async function(t) {
                let a;
                let r;
                let l;
                let u;
                a = t.name;
                r = t.cluster;
                l = t.namespace;
                this.isLoading = true;
                u = await to(request.get(this.getServiceUrl({
                    name: a,
                    cluster: r,
                    namespace: l
                })));
                this.service = module105.services(u);
                this.isLoading = false;
            }
        }
    ]);
    return e;
})();
u = module49(l.prototype, "isExistService", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
});
o = module49(l.prototype, "service", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
i = module49(l.prototype, "isLoading", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return true;
    }
});
module49(l.prototype, "checkService", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "checkService"), l.prototype);
module49(l.prototype, "fetchService", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "fetchService"), l.prototype);
export default l;
