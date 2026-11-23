import "./module-15.js";
import "./module-11.js";
import "./module-16.js";
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
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import module136 from "./module-136.js";
import { getBrowserLang } from "./module-52.js";
import module201 from "./module-201.js";
import module3549 from "./module-3549.js";
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
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.resetData = function() {
            t.setState({
                formData: t.getInitialData()
            });
        };
        t.handleFormChange = function(name, value) {
            t.context.registerUpdate(t.name, {
                name,
                value
            });
        };
        t.state = {
            formData: t.getInitialData()
        };
        return t;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (e.formData !== this.props.formData) {
                    this.setState({
                        formData: this.getInitialData()
                    });
                }
            }
        },
        {
            key: "getInitialData",
            value: function() {
                return module136(this.props.formData);
            }
        },
        {
            key: "render",
            value: function() {
                const formRef = this.props.formRef;
                return <div className={module3549.wrapper}><div className="h4">{t("BASIC_INFORMATION")}</div><module186.Form ref={formRef} data={this.state.formData} onChange={this.handleFormChange}><module186.Columns><module186.Column><module186.Form.Item label={t("USERNAME")}><module186.Input name="metadata.name" placeholder="username" disabled/></module186.Form.Item><module186.Form.Item label={t("EMAIL")} desc={t("USER_SETTING_EMAIL_DESC")}><module186.Input name="spec.email" placeholder="user@example.com"/></module186.Form.Item>{globals.config.supportLangs && <module186.Form.Item label={t("LANGUAGE")}><module186.Select name="spec.lang" options={this.languageOptions} defaultValue={module201("lang") || getBrowserLang()}/></module186.Form.Item>}</module186.Column></module186.Columns></module186.Form></div>;
            }
        },
        {
            key: "name",
            get: function() {
                return "basicInfo";
            }
        },
        {
            key: "languageOptions",
            get: function() {
                if (globals.config.showAllLangs) {
                    return globals.config.supportLangs;
                }
                return globals.config.supportLangs.filter((e)=>e.recommend);
            }
        }
    ]);
    return r;
})(Component);
export default E;
E.contextTypes = {
    registerUpdate: module1.func
};
