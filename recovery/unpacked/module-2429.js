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
import "./module-31.js";
import "./module-58.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import module1172 from "./module-1172.js";
import module14 from "./module-14.js";
import module26 from "./module-26.js";
import module60 from "./module-60.js";
import { LIST_DEFAULT_ORDER } from "./module-72.js";
import module_1103 from "./module-1103.js";
let i;
i = ((module_1103_1)=>{
    module55(u, module_1103_1);
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
    })(u);
    function u() {
        let e;
        module36(this, u);
        e = r.call(this);
        e.module = "ippools";
        e.getNetWorkUrl = function(t = {}) {
            return `${e.getNetworkUrl}${e.getPath(t)}/${e.module}${t.dryRun ? "?dryRun=All" : ""}`;
        };
        e.getNetDetailUrl = function(t = {}) {
            return `${e.getNetWorkUrl(t)}/${t.name}`;
        };
        e.store = new module1172({
            module: "ippools",
            kind: "IPPool",
            apiVersion: "apis/crd.projectcalico.org/v1"
        });
        return e;
    }
    module37(u, [
        {
            key: "fetchList",
            value: async function() {
                let t;
                let cluster;
                let workspace;
                let namespace;
                let i;
                let devops;
                let s;
                let f;
                let d;
                const _this = this;
                const m = arguments;
                t = m.length > 0 && m[0] !== undefined ? m[0] : {};
                ({ cluster, workspace, namespace, more: i, devops, ...s } = t);
                this.list.isLoading = true;
                if (!(s.sortBy || s.ascending !== undefined)) {
                    s.sortBy = LIST_DEFAULT_ORDER[this.module] || "createTime";
                }
                if (!(s.limit !== Infinity && s.limit !== -1)) {
                    s.limit = -1;
                    s.page = 1;
                }
                s.limit = s.limit || 10;
                f = await request.get(this.getNetWorkUrl({
                    cluster,
                    workspace,
                    namespace,
                    devops
                }), this.getFilterParams(s));
                d = (module26(f, "items") || (module60(f) ? f : [])).map((e)=>({
                        cluster,
                        namespace,
                        ..._this.mapper(e)
                    }));
                this.list.update({
                    data: i ? [].concat(module61(this.list.data), module61(d)) : d,
                    total: f.totalItems || f.totalCount || f.total_count || d.length || 0,
                    ...s,
                    limit: Number(s.limit) || 10,
                    page: Number(s.page) || 1,
                    isLoading: false,
                    ...!this.list.silent ? {
                        selectedRowKeys: []
                    } : {}
                });
                return d;
            }
        },
        {
            key: "fetchDetail",
            value: async function(t) {
                let a;
                let r;
                this.isLoading = true;
                a = await request.get(this.getNetDetailUrl(t));
                r = {
                    ...t,
                    ...this.mapper(a)
                };
                this.detail = r;
                this.isLoading = false;
                return r;
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return "apis/crd.projectcalico.org/v1";
            }
        }
    ]);
    return u;
})(module_1103);
module49(i.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "fetchList"), i.prototype);
module49(i.prototype, "fetchDetail", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "fetchDetail"), i.prototype);
export default i;
