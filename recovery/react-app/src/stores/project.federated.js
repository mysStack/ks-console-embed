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
import "utils/babel-helpers/asyncToGenerator";
import "unpacked/module-58.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import module26 from "unpacked/module-26.js";
import module14 from "unpacked/module-14.js";
import module105 from "utils/object.mapper";
import module_437 from "stores/federated";
let l;
l = ((module_437_1)=>{
    module55(r, module_437_1);
    var n = ((e)=>{
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
            let n;
            const r = module51(e);
            if (t) {
                const o = module51(this).constructor;
                n = Reflect.construct(r, arguments, o);
            } else {
                n = r.apply(this, arguments);
            }
            return module56(this, n);
        };
    })(r);
    function r(...o) {
        let e;
        module36(this, r);
        e = n.call(this, ...o);
        e.getListUrl = function({ workspace }) {
            return `kapis/tenant.kubesphere.io/v1beta1/workspaces/${workspace}/namespaces`;
        };
        e.getResourceUrl = function({ workspace, ...rest }) {
            return `kapis/tenant.kubesphere.io/v1beta1/workspaces/${workspace}${e.getPath(rest)}/federatednamespaces`;
        };
        e.getWatchListUrl = function({ workspace, ...rest }) {
            return `${e.apiVersion}/watch${e.getPath(rest)}/federated${e.module}?labelSelector=kubesphere.io/workspace=${workspace}`;
        };
        return e;
    }
    module37(r, [
        {
            key: "fetchList",
            value: async function() {
                let t;
                let workspace;
                let namespace;
                let i;
                let devops;
                let s;
                let c;
                let f;
                const _this = this;
                const p = arguments;
                t = p.length > 0 && p[0] !== undefined ? p[0] : {};
                ({ workspace, namespace, more: i, devops, ...s } = t);
                this.list.isLoading = true;
                if (!(s.sortBy || s.ascending !== undefined)) {
                    s.sortBy = "createTime";
                }
                if (!(s.limit !== Infinity && s.limit !== -1)) {
                    s.limit = -1;
                    s.page = 1;
                }
                s.limit = s.limit || 10;
                c = await request.get(this.getListUrl({
                    workspace,
                    namespace,
                    devops
                }), {
                    labelSelector: "kubesphere.io/kubefed-host-namespace=true",
                    ...s
                });
                f = module26(c, "items", []).map((e)=>({
                        ...module105.federated(_this.mapper)(e)
                    }));
                this.list.update({
                    data: i ? [].concat(module61(this.list.data), module61(f)) : f,
                    total: c.totalItems || c.total_count || f.length || 0,
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
    return r;
})(module_437);
module49(l.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "fetchList"), l.prototype);
export default l;
