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
import Module1058 from "./module-1058.js";
import module2969 from "./module-2969.js";
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
                return <div className={module2969.fromGroup}><module186.Form.Item label={t("SERVICE_ADDRESS")} desc={t("LOG_COLLECTION_OS_URL_TIPS")}><Module1058 hostName="host" portName="port" exampleValue="http://192.168.1.10"/></module186.Form.Item><module186.Form.Item label={t("USERNAME")} desc={t("LOG_COLLECTION_OS_USER_TIPS")}><module186.Input name="auth.user" defaultValue="admin"/></module186.Form.Item><module186.Form.Item label={t("PASSWORD")} desc={t("LOG_COLLECTION_OS_PASSWORD_TIPS")}><module186.Input name="auth.password" defaultValue="admin"/></module186.Form.Item><module186.Form.Item label={t("INDEX_PREFIX")} desc={t("LOG_COLLECTION_ES_INDEX_TIPS")} rules={[
                    {
                        required: true,
                        message: t("PARAM_REQUIRED")
                    }
                ]}><module186.Input name="logstashPrefix" defaultValue={this.props.component}/></module186.Form.Item></div>;
            }
        }
    ]);
    return r;
})(Component);
export default m;
