import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import Module1536 from "components/Forms/Workload/ContainerSettings/ContainerForm/ProbeInput";
import module2261 from "unpacked/module-2261.js";
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
                return <module186.Form.Group label={t("HEALTH_CHECK")} desc={t("HEALTH_CHECKER_DESC")} checkable><module186.Form.Item className={module2261.item} label={t("LIVENESS_CHECK")} desc={t("LIVENESS_CHECK_DESC")}><Module1536 name={`${this.prefix}livenessProbe`} probType="livenessProbe"/></module186.Form.Item><module186.Form.Item className={module2261.item} label={t("READINESS_CHECK")} desc={t("READINESS_CHECK_DESC")}><Module1536 name={`${this.prefix}readinessProbe`} probType="readinessProbe"/></module186.Form.Item><module186.Form.Item className={module2261.item} label={t("STARTUP_CHECK")} tip={t("STARTUP_CHECK_TIP")} desc={t("STARTUP_CHECK_DESC")}><Module1536 name={`${this.prefix}startupProbe`} probType="startupProbe"/></module186.Form.Item></module186.Form.Group>;
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
