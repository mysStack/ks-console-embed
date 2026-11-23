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
import Module830 from "./module-830.js";
import Module2283 from "./module-2283.js";
import module2284 from "./module-2284.js";
const h = ((Component_1)=>{
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
                return <div className="margin-b12"><div className={module2284.title}>{t("CAPABILITIES")}</div><div className={module2284.content}><module186.Form.Item label={t("ADD")}><Module830 name={`${this.prefix}.capabilities.add`}><Module2283/></Module830></module186.Form.Item><module186.Form.Item label={t("DROP")}><Module830 name={`${this.prefix}.capabilities.drop`}><Module2283/></Module830></module186.Form.Item></div></div>;
            }
        },
        {
            key: "prefix",
            get: function() {
                return this.props.prefix || "securityContext";
            }
        }
    ]);
    return r;
})(Component);
export default h;
