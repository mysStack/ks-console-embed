import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
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
import "./module-31.js";
import "./module-58.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import module26 from "./module-26.js";
import { LIST_DEFAULT_ORDER } from "./module-72.js";
import module14 from "./module-14.js";
import module_1052 from "./module-1052.js";
let l;
l = ((module_1052_1)=>{
    module55(r, module_1052_1);
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.module = "gatewayrouteconfigs";
        e.getListResourceUrl = function(t = {}) {
            return `${e.listApiVersion}${e.getPath(t)}/${e.module}`;
        };
        return e;
    }
    module37(r, [
        {
            key: "fetchList",
            value: async function() {
                let t;
                let cluster;
                let workspace;
                let namespace;
                let l;
                let devops;
                let u;
                let d;
                let f;
                const _this = this;
                const m = arguments;
                t = m.length > 0 && m[0] !== undefined ? m[0] : {};
                ({ cluster, workspace, namespace, more: l, devops, ...u } = t);
                this.list.isLoading = true;
                if (!(u.sortBy || u.ascending !== undefined)) {
                    u.sortBy = LIST_DEFAULT_ORDER[this.module] || "createTime";
                }
                if (!(u.limit !== Infinity && u.limit !== -1)) {
                    u.limit = -1;
                    u.page = 1;
                }
                u.limit = u.limit || 10;
                u.page = u.page || 1;
                d = await request.get(this.getListResourceUrl({
                    cluster,
                    workspace,
                    namespace,
                    devops
                }), this.getFilterParams(u));
                f = (module26(d, "items") || []).map((e)=>({
                        cluster,
                        namespace,
                        ..._this.mapper(e)
                    }));
                this.list.update({
                    data: l ? [].concat(module61(this.list.data), module61(f)) : f,
                    total: d.totalItems || d.total_count || f.length || 0,
                    ...u,
                    limit: Number(u.limit) || 10,
                    page: Number(u.page) || 1,
                    isLoading: false,
                    ...!this.list.silent ? {
                        selectedRowKeys: []
                    } : {}
                });
                return f;
            }
        },
        {
            key: "listApiVersion",
            get: function() {
                return "apis/aggregated.springcloud.kubesphere.io/v1alpha1";
            }
        }
    ]);
    return r;
})(module_1052);
module49(l.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "fetchList"), l.prototype);
export default l;
