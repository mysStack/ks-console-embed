import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-320.js";
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
import module14 from "./module-14.js";
import module26 from "./module-26.js";
import module_1052 from "./module-1052.js";
let i;
i = ((module_1052_1)=>{
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
        e.module = "configurationhistories";
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
                let devops;
                let searchByApp;
                let f;
                let d;
                let p;
                const _this = this;
                const h = arguments;
                t = h.length > 0 && h[0] !== undefined ? h[0] : {};
                ({ cluster, workspace, namespace, more: i, devops, searchByApp, ...f } = t);
                this.list.isLoading = true;
                d = await request.get(this.getResourceUrl({
                    cluster,
                    workspace,
                    namespace,
                    devops
                }), this.getFilterParams({
                    searchByApp,
                    ...f
                }));
                p = (module26(d, "items") || []).map((e)=>({
                        cluster,
                        namespace,
                        ..._this.mapper(e)
                    })).sort((e, t)=>new Date(t.createTime).getTime() - new Date(e.createTime).getTime());
                this.list.update({
                    data: i ? [].concat(module61(this.list.data), module61(p)) : p,
                    ...f,
                    isLoading: false
                });
                return p;
            }
        }
    ]);
    return r;
})(module_1052);
module49(i.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "fetchList"), i.prototype);
export default i;
