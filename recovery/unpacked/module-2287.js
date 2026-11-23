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
import module186 from "./module-186.js";
import Module1536 from "./module-1536.js";
import module2288 from "./module-2288.js";
const m = ((Component_1)=>{
    module55(r, Component_1);
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
            key: "render",
            value: function() {
                return <module186.Form.Group label={t("LIFECYCLE_MANAGEMENT")} desc={t("LIFECYCLE_MANAGEMENT_DESC")} checkable><module186.Form.Item className={module2288.item} label={t("POSTSTART_ACTION")}><Module1536 name={`${this.prefix}lifecycle.postStart`} label={t("ADD_ACTION")} description={t("POSTSTART_ACTION_DESC")} componentType="life" deleteNoObject/></module186.Form.Item><module186.Form.Item className={module2288.item} label={t("PRESTOP_ACTION")}><Module1536 name={`${this.prefix}lifecycle.preStop`} label={t("ADD_ACTION")} description={t("PRESTOP_ACTION_DESC")} componentType="life" deleteNoObject/></module186.Form.Item></module186.Form.Group>;
            }
        },
        {
            key: "prefix",
            get: function() {
                const prefix = this.props.prefix;
                if (prefix) {
                    return `${prefix}.`;
                }
                return "";
            }
        }
    ]);
    return r;
})(Component);
export default m;
m.defaultProps = {
    prefix: ""
};
