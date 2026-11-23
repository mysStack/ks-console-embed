import "./module-15.js";
import "./module-5.js";
import "./module-187.js";
import "./module-30.js";
import "./module-18.js";
import "./module-4.js";
import "./module-316.js";
import "./module-23.js";
import "./module-17.js";
import "./module-324.js";
import "./module-38.js";
import "./module-32.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-460.js";
import "./module-461.js";
import "./module-462.js";
import "./module-463.js";
import "./module-464.js";
import "./module-465.js";
import "./module-466.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import Module830 from "./module-830.js";
import Module800 from "./module-800.js";
import module63 from "./module-63.js";
import { Component } from "./module-553.js";
import module2891 from "./module-2891.js";
import Module2892 from "./module-2892.js";
const E = ((Component_1)=>{
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
    function r(...o) {
        let e;
        module36(this, r);
        e = a.call(this, ...o);
        e.policiesValidator = function(a, r, n) {
            if (r.length > 0) {
                if (new Set(r.map((e)=>e.type)).size !== r.length) {
                    return void n(t("POLICY_TYPE_DUPLICATED"));
                }
                if (!r.every((t)=>e.checkItemValid(t))) {
                    n(t("EMPTY_POLICY_MESSAGE"));
                }
            }
            n();
        };
        e.checkItemValid = function(e) {
            return !module63(e) && Object.values(e).every((e)=>e !== undefined && e !== "");
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const e_prefix = props.prefix;
                const r = props.type === "scaleUp" ? "EXPANSION_STRATEGY" : "SCALING_STRATEGY";
                return <div className={module2891.wrapper}><div className={module2891.title}>{t(r)}</div><div className={module2891.contentWrapper}><module186.Columns><module186.Column><module186.Form.Item label={t("POLICY_PREFERENCE")} desc={t("POLICY_PREFERENCE_DESC")}><module186.Select name={`${e_prefix}.selectPolicy`} options={[
                    {
                        label: t("TENDS_TO_SCALE_SIGNIFICANTLY"),
                        value: "Max"
                    },
                    {
                        label: t("TENDS_TO_EXPAND_SLIGHTLY"),
                        value: "Min"
                    },
                    {
                        label: t("SCALE_DISABLE"),
                        value: "Disabled"
                    }
                ]} defaultValue="Max"/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("STABILIZATION_WINDOW_SECONDS")} desc={t("STABILIZATION_WINDOW_SECONDS_DESC")}><Module800 name={`${e_prefix}.stabilizationWindowSeconds`} integer min={0}/></module186.Form.Item></module186.Column></module186.Columns><div className={module2891.polices}><module186.Form.Group><module186.Form.Item rules={[
                    {
                        validator: this.policiesValidator,
                        checkOnSubmit: true
                    }
                ]}><Module830 name={`${e_prefix}.policies`} itemType="object" addText={t("ADD")} checkItemValid={this.checkItemValid}><Module2892/></Module830></module186.Form.Item></module186.Form.Group></div></div></div>;
            }
        }
    ]);
    return r;
})(Component);
export default E;
