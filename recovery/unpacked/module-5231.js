import "./module-15.js";
import "./module-5.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import Module851 from "./module-851.js";
let r;
const p = inject("detailStore")(r = observer(r = ((Component_1)=>{
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
            const n = module51(e);
            if (t) {
                const r = module51(this).constructor;
                a = Reflect.construct(n, arguments, r);
            } else {
                a = n.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(a);
    function a(...r) {
        let e;
        module36(this, a);
        e = t.call(this, ...r);
        e.store = e.props.detailStore;
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const cluster = this.props.match.params.cluster;
                return <Module851 isEdgeWize detail={this.store.detail} limit={6} prefix={`/v2/edgewize/clusters/${cluster}`}/>;
            }
        }
    ]);
    return a;
})(Component)) || r) || r;
export default p;
