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
import module58 from "./module-58.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import module26 from "./module-26.js";
import module14 from "./module-14.js";
import module_68 from "stores/base";
let i;
i = ((module_68_1)=>{
    module55(r, module_68_1);
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
        e.module = "apptemplateversions";
        e.getUrl = function({ cluster = "", name = "" }) {
            return `/apis${cluster && `/clusters/${cluster}`}/apps.edgewize.io/v1alpha1/${e.module}${name && `/${name}`}`;
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
                let i;
                let c;
                let s;
                let f;
                const _this = this;
                const p = arguments;
                t = p.length > 0 && p[0] !== undefined ? p[0] : {};
                cluster = t.cluster;
                workspace = t.workspace;
                namespace = t.namespace;
                i = t.more;
                t.devops;
                c = module58(t, [
                    "cluster",
                    "workspace",
                    "namespace",
                    "more",
                    "devops"
                ]);
                this.list.isLoading = true;
                c.limit = c.limit || 10;
                c.sortBy = "createTime";
                s = await request.get(this.getUrl({
                    cluster,
                    workspace
                }), c);
                f = module26(s, "items", []).map((e)=>({
                        cluster,
                        namespace,
                        workspace,
                        ..._this.mapper(e)
                    }));
                this.list.update({
                    data: i ? [].concat(module61(this.list.data), module61(f)) : f,
                    total: s.totalItems || s.totalCount || s.total_count || f.length || 0,
                    ...c,
                    limit: Number(c.limit) || 10,
                    page: Number(c.page) || 1,
                    isLoading: false,
                    ...!this.list.silent ? {
                        selectedRowKeys: []
                    } : {}
                });
                return f;
            }
        },
        {
            key: "create",
            value: function({ cluster }, t) {
                const r = module26(t, "metadata.name");
                const n = this.getUrl({
                    cluster,
                    name: r
                });
                return this.submitting(request.post(n, t));
            }
        },
        {
            key: "patch",
            value: function({ cluster }, t) {
                const r = module26(t, "metadata.name");
                const n = this.getUrl({
                    cluster,
                    name: r
                });
                return request.patch(n, t);
            }
        },
        {
            key: "delete",
            value: function({ cluster, name }) {
                const r = this.getUrl({
                    cluster,
                    name
                });
                return this.submitting(request.delete(r));
            }
        }
    ]);
    return r;
})(module_68);
module49(i.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "fetchList"), i.prototype);
module49(i.prototype, "create", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "create"), i.prototype);
module49(i.prototype, "patch", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "patch"), i.prototype);
module49(i.prototype, "delete", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "delete"), i.prototype);
export default i;
