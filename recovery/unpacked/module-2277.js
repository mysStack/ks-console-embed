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
import Module1098 from "./module-1098.js";
import module2279 from "./module-2279.js";
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
                return <div className="margin-b12"><div className={module2279.title}>{t("ACCESS_CONTROL")}</div><div className={module2279.content}><module186.Form.Item><Module1098 name={`${this.prefix}.privileged`} title={t("PRIVILEGED_MODE")} description={t("PRIVILEGED_MODE_DESC")}/></module186.Form.Item><module186.Form.Item><Module1098 name={`${this.prefix}.allowPrivilegeEscalation`} title={t("ALLOW_PRIVILEGE_ESCALATION")} description={t("ALLOW_PRIVILEGE_ESCALATION_DESC")}/></module186.Form.Item><module186.Form.Item><Module1098 name={`${this.prefix}.readOnlyRootFilesystem`} title={t("ROOT_DIRECTORY_READONLY")} description={t("ROOT_DIRECTORY_READONLY_DESC")}/></module186.Form.Item></div></div>;
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
export default m;
