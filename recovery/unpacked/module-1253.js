import "./module-15.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module3 from "./module-3.js";
import module5054 from "./module-5054.js";
const p = ((Component_1)=>{
    module55(n, Component_1);
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
            let r;
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n() {
        module36(this, n);
        return r.apply(this, arguments);
    }
    module37(n, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { score, className } = props;
                if (score === undefined) {
                    return <span><span className={module3(module5054.icon, module5054.nostatus, className)}/>{t("NO_STATUS")}</span>;
                }
                if (score <= 30) {
                    return <span><span className={module3(module5054.icon, module5054.error, className)}/>{t("WARNING")}</span>;
                }
                if (score > 30 && score <= 80) {
                    return <span><span className={module3(module5054.icon, module5054.subhealth, className)}/>{t("SUB_HEALTHY")}</span>;
                }
                return <span><span className={module3(module5054.icon, module5054.health, className)}/>{t("HEALTHY")}</span>;
            }
        }
    ]);
    return n;
})(Component);
export default p;
