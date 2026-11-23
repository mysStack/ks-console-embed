import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-27.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-41.js";
import module61 from "unpacked/module-61.js";
import "unpacked/module-31.js";
import "unpacked/module-58.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import { LIST_DEFAULT_ORDER } from "utils/constants";
import module26 from "unpacked/module-26.js";
import module14 from "unpacked/module-14.js";
import module_1052 from "unpacked/module-1052.js";
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
        e.module = "configurations";
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
            key: "rollBack",
            value: function({ module: _module, ...rest }, t) {
                return this.submitting(request.patch(this.getDetailUrl(rest), t));
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
module49(l.prototype, "rollBack", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "rollBack"), l.prototype);
export default l;
