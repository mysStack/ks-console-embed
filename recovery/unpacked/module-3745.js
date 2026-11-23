import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-27.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import module61 from "./module-61.js";
import "./module-58.js";
import "./module-44.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import module26 from "./module-26.js";
import module14 from "./module-14.js";
import { LIST_DEFAULT_ORDER } from "./module-72.js";
import module_68 from "./module-68.js";
let i;
i = ((module_68_1)=>{
    module55(n, module_68_1);
    var r = ((e)=>{
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
            let r;
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(...a) {
        let e;
        module36(this, n);
        e = r.call(this, ...a);
        e.module = "clusteringresssettings";
        e.getResourceUrl = function(t = {}) {
            return `kapis/gateway.kubesphere.io/v1alpha2${e.getPath(t)}/${e.module}`;
        };
        e.getFilterParams = function(e) {
            const t = {
                ...e
            };
            if (t.uniqueDomainPattern) {
                t.fieldSelector = `spec.uniqueDomainPattern=${t.uniqueDomainPattern}`;
                delete t.uniqueDomainPattern;
            }
            if (t.name) {
                t.fieldSelector = `metadata.name=${t.name}`;
                delete t.name;
            }
            return t;
        };
        return e;
    }
    module37(n, [
        {
            key: "checkName",
            value: function(e, t) {
                return request.get(this.getResourceUrl(e), this.getFilterParams(t), {
                    headers: {
                        "x-check-exist": true
                    }
                });
            }
        },
        {
            key: "fetchList",
            value: async function() {
                let t;
                let cluster;
                let workspace;
                let namespace;
                let c;
                let devops;
                let s;
                let d;
                let f;
                let total;
                const _this = this;
                const h = arguments;
                t = h.length > 0 && h[0] !== undefined ? h[0] : {};
                ({ cluster, workspace, namespace, more: c, devops, ...s } = t);
                this.list.isLoading = true;
                if (!(s.sortBy || s.ascending !== undefined)) {
                    s.sortBy = LIST_DEFAULT_ORDER[this.module] || "createTime";
                }
                if (!(s.limit !== Infinity && s.limit !== -1)) {
                    s.page = 1;
                }
                s.limit = s.limit || 10;
                s.page = s.page || 1;
                d = await request.get(this.getResourceUrl({
                    cluster,
                    workspace,
                    namespace,
                    devops
                }), this.getFilterParams(s));
                f = (module26(d, "items") || []).map((e)=>({
                        cluster,
                        namespace,
                        ...e,
                        ..._this.mapper(e)
                    }));
                total = Number(s.page) === 1 ? f.length + (d.metadata.remainingItemCount || 0) : this.list.total;
                this.list.update({
                    data: c ? [].concat(module61(this.list.data), module61(f)) : f,
                    total,
                    ...s,
                    limit: Number(s.limit) || 10,
                    page: Number(s.page) || 1,
                    isLoading: false,
                    ...!this.list.silent ? {
                        selectedRowKeys: []
                    } : {}
                });
                return f;
            }
        }
    ]);
    return n;
})(module_68);
module49(i.prototype, "checkName", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "checkName"), i.prototype);
module49(i.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "fetchList"), i.prototype);
export default i;
