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
import "./module-553.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import module933 from "./module-933.js";
let l;
const v = observer(l = ((e)=>{
    module55(r, e);
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
            key: "getRestartPolicyOptions",
            value: function() {
                return [
                    {
                        label: t("RESTART_POLICY_NEVER_DESC"),
                        value: "Never"
                    },
                    {
                        label: t("RESTART_POLICY_ONFAILURE_DESC"),
                        value: "OnFailure"
                    }
                ];
            }
        },
        {
            key: "renderRestartPolicy",
            value: function() {
                return <module186.Form.Item label={t("RESTART_POLICY")} desc={t("RESTART_POLICY_DESC")}><module186.Select name={`${this.prefix}spec.restartPolicy`} options={this.getRestartPolicyOptions()}/></module186.Form.Item>;
            }
        },
        {
            key: "render",
            value: function() {
                const formRef = this.props.formRef;
                const state = this.state;
                const { showContainer, selectContainer } = state;
                if (showContainer) {
                    return this.renderContainerForm(selectContainer);
                }
                return <module186.Form data={this.formTemplate} ref={formRef}>{this.renderRestartPolicy()}{this.renderContainerList()}</module186.Form>;
            }
        }
    ]);
    return r;
})(module933)) || l;
export default v;
