import "./module-15.js";
import "./module-5.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import Module843 from "components/Inputs/PropertiesInput";
import { Component } from "./module-553.js";
import module1358 from "./module-1358.js";
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
    function r(...o) {
        let e;
        module36(this, r);
        e = a.call(this, ...o);
        e.validateTogglerAuthor = function(e, a, r) {
            if (a) {
                const n = Object.keys(a);
                if (n.length && n[0] !== "name") {
                    r(t("TRIGGER_AUTHENTICATION_KEY_EQ_NAME"));
                } else {
                    r();
                }
            } else {
                r();
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                return <><div className={module1358.hidden}><module186.Form.Item><module186.Input name="type" defaultValue="prometheus" disabled/></module186.Form.Item></div><module186.Columns><module186.Column><module186.Form.Item label={t("ADDRESS")} desc={t("PROMETHUS_ADDRESS")}><module186.Input name="metadata.serverAddress"/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("INDICATOR_NAME")} desc={t("INDICATOR_NAME_PROMETHUS_DESC")}><module186.Input name="metadata.metricName"/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns><module186.Column><module186.Form.Item label={t("THRESHOLD")} desc={t("THRESHOLD_PROMETHUS_DESC")}><module186.Input name="metadata.threshold"/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("EXPRESSION")} desc={t("EXPRESSION_PROMETHUS_DESC")}><module186.Input name="metadata.query"/></module186.Form.Item></module186.Column></module186.Columns><module186.Form.Item label={t("TOGGLER_AUTHOR")} rules={[
                    {
                        validator: this.validateTogglerAuthor
                    }
                ]}><Module843 name="authenticationRef" addText={t("ADD")} maxLen={1}/></module186.Form.Item></>;
            }
        }
    ]);
    return r;
})(Component);
export default m;
