import "./module-15.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module26 from "./module-26.js";
import Module3895 from "./module-3895.js";
import module1823 from "./module-1823.js";
let n;
const v = inject("detailStore")(n = observer(n = ((Component_1)=>{
    module55(a, Component_1);
    var t = ((e)=>{
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
    })(a);
    function a(e) {
        let r;
        module36(this, a);
        r = t.call(this, e);
        r.store = e.detailStore;
        r.module = e.module;
        return r;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const detail = this.store.detail;
                const a = module26(detail, "secrets");
                const serviceAccountName = module26(detail, "name");
                return <div><div className={module1823.secretWrapper}>{a.map(({ name })=><Module3895 secret={name} serviceAccountName={serviceAccountName} key={name} {..._this.props}/>)}</div></div>;
            }
        }
    ]);
    return a;
})(Component)) || n) || n;
export default v;
