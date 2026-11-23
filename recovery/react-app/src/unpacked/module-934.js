import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-118.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import "./module-31.js";
import module58 from "./module-58.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import module14 from "./module-14.js";
import module_853 from "stores/secret";
let o;
o = ((module_853_1)=>{
    module55(r, module_853_1);
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "fetchListByK8s",
            value: async function() {
                let t;
                let cluster;
                let r;
                let l;
                let o;
                let i;
                let c;
                const _this = this;
                const f = arguments;
                t = f.length > 0 && f[0] !== undefined ? f[0] : {};
                cluster = t.cluster;
                t.namespace;
                r = t.module;
                l = module58(t, [
                    "cluster",
                    "namespace",
                    "module"
                ]);
                this.list.isLoading = true;
                if (r) {
                    this.module = r;
                }
                o = `${this.apiVersion}/${this.module}${l.dryRun ? "?dryRun=All" : ""}`;
                i = await request.get(o, l, {}, function() {
                    return {
                        items: []
                    };
                });
                c = Array.isArray(i.items) ? i.items.map((e)=>({
                        cluster,
                        module: r || _this.module,
                        ..._this.mapper(e)
                    })) : [];
                this.list.update({
                    data: c,
                    total: i.items.length || 0,
                    isLoading: false
                });
                return c;
            }
        }
    ]);
    return r;
})(module_853);
module49(o.prototype, "fetchListByK8s", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "fetchListByK8s"), o.prototype);
export default o;
