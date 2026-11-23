import "./module-15.js";
import "./module-5.js";
import "./module-9.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
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
import module26 from "./module-26.js";
import module14 from "./module-14.js";
import module_68 from "./module-68.js";
let l;
l = ((module_68_1)=>{
    module55(l, module_68_1);
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
    })(l);
    function l(...a) {
        let e;
        module36(this, l);
        e = r.call(this, ...a);
        e.module = "nodegroups";
        return e;
    }
    module37(l, [
        {
            key: "fetchNodeGroupWithNamespace",
            value: async function(t) {
                let cluster;
                let r;
                let l;
                let u;
                let o;
                cluster = t.cluster;
                r = t.namespace;
                l = `/kapis/resources.kubesphere.io/v1alpha3${this.getPath({
                    cluster
                })}/${this.module}${r && `?labelSelector=apps.edgewize.io/namespace-${r}`}`;
                u = await request.get(l);
                o = module26(u, "items", []);
                return o;
            }
        },
        {
            key: "fetchNodeWithNodeGroup",
            value: async function(t) {
                let a;
                let r;
                let l;
                a = t.cluster;
                r = `/clusters/${a}${this.apiVersion}/nodetrees`;
                l = await request.get(r);
                return module26(l, "spec.children");
            }
        }
    ]);
    return l;
})(module_68);
module49(l.prototype, "fetchNodeGroupWithNamespace", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "fetchNodeGroupWithNamespace"), l.prototype);
module49(l.prototype, "fetchNodeWithNodeGroup", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "fetchNodeWithNodeGroup"), l.prototype);
export default l;
