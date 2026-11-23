import "./module-15.js";
import "./module-5.js";
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
import module481 from "./module-481.js";
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
        e.validateCron = function(e, a, r) {
            if (!a) {
                return r();
            }
            try {
                module481.parseExpression(a);
            } catch (e) {
                return r(t("CRON_EXPRESSION_ERROR_DESC"));
            }
            r();
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                return <><div className={module1358.hidden}><module186.Form.Item><module186.Input name="type" defaultValue="cron" disabled/></module186.Form.Item></div><module186.Columns><module186.Column><module186.Form.Item label={t("TIME_ZONE")} desc={t("CRON_TIME_ZONE_DESC")}><module186.Input name="metadata.timezone" defaultValue="Asia/Shanghai"/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("REPLICAS_DESIRED")} desc={t("REPLICAS_DESIRED_CRON_TRIGGER_DESC")}><module186.Input name="metadata.desiredReplicas"/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns><module186.Column><module186.Form.Item label={t("CRON_START")} desc={t("CRON_START_DESC")} rules={[
                    {
                        validator: this.validateCron
                    }
                ]}><module186.Input name="metadata.start"/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("CRON_END")} desc={t("CRON_END_DESC")} rules={[
                    {
                        validator: this.validateCron
                    }
                ]}><module186.Input name="metadata.end"/></module186.Form.Item></module186.Column></module186.Columns></>;
            }
        }
    ]);
    return r;
})(Component);
export default m;
