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
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import "./module-31.js";
import "./module-58.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import module68 from "./module-68.js";
import module14 from "./module-14.js";
import { LimitsEqualRequests } from "./module-52.js";
let o;
o = ((e)=>{
    module55(r, e);
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
        e.module = "limitranges";
        return e;
    }
    module37(r, [
        {
            key: "fetchListByK8s",
            value: async function() {
                let t;
                let cluster;
                let namespace;
                let module;
                let o;
                let i;
                let c;
                let s;
                const _this = this;
                const d = arguments;
                t = d.length > 0 && d[0] !== undefined ? d[0] : {};
                ({ cluster, namespace, module, ...o } = t);
                this.list.isLoading = true;
                if (module) {
                    this.module = module;
                }
                i = o;
                c = await request.get(this.getListUrl({
                    cluster,
                    namespace,
                    module
                }), i);
                s = c.items.map((e)=>({
                        cluster,
                        module: module || _this.module,
                        ..._this.mapper(e)
                    }));
                LimitsEqualRequests(s);
                this.list.update({
                    data: s,
                    total: c.items.length,
                    isLoading: false
                });
                return s;
            }
        }
    ]);
    return r;
})(module68);
module49(o.prototype, "fetchListByK8s", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "fetchListByK8s"), o.prototype);
export default o;
