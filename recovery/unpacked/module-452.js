import "./module-15.js";
import "./module-5.js";
import "./module-29.js";
import "./module-6.js";
import "./module-16.js";
import "./module-9.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import module14 from "./module-14.js";
import module63 from "./module-63.js";
import { getWorkloadVolumes } from "./module-248.js";
import module_68 from "./module-68.js";
let a;
a = ((module_68_1)=>{
    module55(r, module_68_1);
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
        e.module = "pods";
        return e;
    }
    module37(r, [
        {
            key: "fetchDetail",
            value: async function(t) {
                let cluster;
                let namespace;
                let a;
                let i;
                let l;
                let s;
                cluster = t.cluster;
                namespace = t.namespace;
                a = t.name;
                if (!(i = t.silent)) {
                    this.isLoading = true;
                }
                l = await request.get(this.getDetailUrl({
                    cluster,
                    namespace,
                    name: a
                }));
                s = this.mapper(l);
                s.cluster = cluster;
                s.volumes = await getWorkloadVolumes(s);
                if (!module63(s.volumes)) {
                    s.containers.forEach((e)=>{
                        if (!module63(e.volumeMounts)) {
                            e.volumeMounts.forEach((t)=>{
                                const n = s.volumes.find((e)=>e.name === t.name);
                                if (!module63(n)) {
                                    n.containers = n.containers || [];
                                    n.containers.push(e);
                                }
                            });
                        }
                    });
                }
                this.detail = s;
                if (!i) {
                    this.isLoading = false;
                }
                return s;
            }
        }
    ]);
    return r;
})(module_68);
module49(a.prototype, "fetchDetail", [
    module14.action
], Object.getOwnPropertyDescriptor(a.prototype, "fetchDetail"), a.prototype);
export default a;
