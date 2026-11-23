import "./module-15.js";
import "./module-5.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-971.js";
const i = ((Component_1)=>{
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
    function a(...o) {
        let e;
        module36(this, a);
        e = t.call(this, ...o);
        e.handleVolume = function(...a) {
            Component.prototype.handleVolume.apply(module88(e), a);
            e.props.formProps.onChange();
        };
        e.handleVolumeTemplate = function(...a) {
            Component.prototype.handleVolumeTemplate.apply(module88(e), a);
            e.props.formProps.onChange();
        };
        e.handleLogToggle = function() {
            Component.prototype.handleLogToggle.apply(module88(e));
            e.props.formProps.onChange();
        };
        return e;
    }
    return a;
})(Component);
export default i;
