import "./module-15.js";
import "./module-5.js";
import "./module-10.js";
import "./module-4.js";
import "./module-316.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module242 from "./module-242.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import { GRAY_RELEASE_CANARY_CONTENT } from "./module-72.js";
import { strategyOptions } from "./module-468.js";
import Module1143 from "./module-1143.js";
import Module4690 from "./module-4690.js";
import Module4692 from "./module-4692.js";
import Module4694 from "./module-4694.js";
import module4695 from "./module-4695.js";
const R = ((Component_1)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.handleCookieChange = function(cookie) {
            e.setState({
                cookie
            });
        };
        e.handleFormChange = function(t, a) {
            if (t === `${e.prefix}.match[0].headers.cookie`) {
                if (module63(Object.values(a)[0])) {
                    module242(e.formTemplate, t);
                }
            } else if (t === `${e.prefix}.match[0].headers`) {
                if (module63(Object.keys(a)[0])) {
                    module242(e.formTemplate, t);
                }
            } else if (t === `${e.prefix}.match[0].uri`) {
                if (module63(Object.values(a)[0])) {
                    module242(e.formTemplate, t);
                }
            } else if (t === `${e.prefix}.match[0].headers['User-Agent'].regex` && module63(a)) {
                module242(e.formTemplate, `${e.prefix}.match[0].headers['User-Agent']`);
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formRef, ...rest } = props;
                const value = module26(this.formTemplate, "spec.strategyPolicy");
                return <module186.Form ref={formRef} data={this.formTemplate} {...rest}><div className={module4695.paddingWrapper}><div className={module4695.wrapper}><div className={module4695.item}><module186.Alert type="info" message={t("SPECIFY_REQUEST_PARAMETERS_DESC")}/></div><div className={module4695.item}><div className={module4695.title}>{t("REQUEST_PARAMETERS")}</div><module186.Form.Item label={t("COOKIE")}><Module4690 name={`${this.prefix}.match[0].headers.cookie`} onChange={this.handleCookieChange} placeholder={t("KEY_EQ_VALUE")}/></module186.Form.Item><module186.Form.Item label={t("HEADER")}><Module4692 name={`${this.prefix}.match[0].headers`}/></module186.Form.Item><module186.Form.Item label="URL"><Module4690 name={`${this.prefix}.match[0].uri`} placeholder="URL" matchTypes={[
                    "prefix",
                    "regex"
                ]}/></module186.Form.Item><module186.Form.Item label={t("CLIENT_OS")}><Module4694 name={`${this.prefix}.match[0].headers['User-Agent'].regex`} options={GRAY_RELEASE_CANARY_CONTENT}/></module186.Form.Item></div></div><module186.Form.Item><Module1143 name="spec.strategyPolicy" value={value} options={strategyOptions}/></module186.Form.Item></div></module186.Form>;
            }
        },
        {
            key: "formTemplate",
            get: function() {
                return this.props.formTemplate.strategy;
            }
        },
        {
            key: "prefix",
            get: function() {
                const e = module26(this.formTemplate, "spec.protocol", "http");
                return `spec.template.spec.${e}[0]`;
            }
        }
    ]);
    return r;
})(Component);
export default R;
