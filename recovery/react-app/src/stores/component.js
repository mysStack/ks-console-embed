import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-6.js";
import "unpacked/module-16.js";
import "unpacked/module-98.js";
import "unpacked/module-9.js";
import "unpacked/module-7.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-41.js";
import module96 from "utils/babel-helpers/slicedToArray";
import "utils/babel-helpers/asyncToGenerator";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import module14 from "unpacked/module-14.js";
import module26 from "unpacked/module-26.js";
import module857 from "unpacked/module-857.js";
import { getComponentStatus } from "utils/status";
let u;
let i;
let c;
let l;
let s;
let d;
let f;
u = (()=>{
    function e() {
        const _this = this;
        module36(this, e);
        module65(this, "list", i, this);
        module65(this, "count", c, this);
        module65(this, "exceptionCount", l, this);
        module65(this, "healthyCount", s, this);
        module65(this, "detail", d, this);
        module65(this, "isLoading", f, this);
        this.getListUrl = function({ cluster }) {
            return `${_this.apiVersion}/klusters/${cluster}/components`;
        };
        this.getDetailUrl = function({ cluster, name }) {
            return `${_this.getListUrl({
                cluster
            })}/${name}`;
        };
    }
    module37(e, [
        {
            key: "fetchList",
            value: async function(t) {
                let r;
                let n;
                let u;
                let i;
                let c;
                this.isLoading = true;
                r = await request.get(this.getListUrl(t));
                n = module857(r, "namespace");
                u = {
                    kubernetes: module26(n, "kube-system", []),
                    kubesphere: module26(n, "kubesphere-system", []),
                    istio: module26(n, "istio-system", []),
                    monitoring: module26(n, "kubesphere-monitoring-system", []),
                    logging: module26(n, "kubesphere-logging-system", []),
                    devops: module26(n, "kubesphere-devops-system", []),
                    edgewize: module26(n, "edgewize-system", [])
                };
                this.list = {
                    data: u,
                    isLoading: false
                };
                i = {};
                c = {};
                Object.entries(u).forEach((e)=>{
                    const t = module96(e, 2);
                    const r = t[0];
                    t[1].forEach((e)=>{
                        const t = getComponentStatus(e);
                        if (t === "Warning") {
                            i[r] = i[r] || 0;
                            i[r] += 1;
                        }
                        if (t === "Healthy") {
                            c[r] = c[r] || 0;
                            c[r] += 1;
                        }
                    });
                });
                this.exceptionCount = i;
                this.healthyCount = c;
            }
        },
        {
            key: "fetchDetail",
            value: async function(t) {
                let cluster;
                let n;
                let o;
                cluster = t.cluster;
                n = t.name;
                this.isLoading = true;
                o = await request.get(this.getDetailUrl({
                    cluster,
                    name: n
                }));
                this.detail = o;
                this.isLoading = false;
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return "kapis/resources.kubesphere.io/v1alpha2";
            }
        },
        {
            key: "totalCount",
            get: function() {
                const count = this.count;
                const t = count.kubesphere + count.kubernetes + count.openpitrix;
                if (isNaN(t)) {
                    return 0;
                }
                return t;
            }
        }
    ]);
    return e;
})();
i = module49(u.prototype, "list", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            data: {},
            isLoading: true
        };
    }
});
c = module49(u.prototype, "count", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
l = module49(u.prototype, "exceptionCount", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
s = module49(u.prototype, "healthyCount", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
d = module49(u.prototype, "detail", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
f = module49(u.prototype, "isLoading", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return true;
    }
});
module49(u.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "fetchList"), u.prototype);
module49(u.prototype, "fetchDetail", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "fetchDetail"), u.prototype);
export default u;
