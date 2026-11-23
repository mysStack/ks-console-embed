import "unpacked/module-15.js";
import "unpacked/module-16.js";
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
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import Module1121 from "components/Inputs/InputPassword";
import { PATTERN_PASSWORD } from "utils/constants";
import module3551 from "unpacked/module-3551.js";
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
    function r(e) {
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.resetData = function() {
            n.setState({
                formData: n.getInitialData()
            });
        };
        n.handlePassswordChange = function(password) {
            n.setState({
                password
            });
        };
        n.passwordValidator = function(e, a, r) {
            if (!a) {
                return r();
            }
            if (a !== n.state.password) {
                r({
                    message: t("PASSWORD_NOT_SAME_DESC"),
                    field: e.field
                });
            }
            r();
        };
        n.handleFormChange = function(name, value) {
            n.context.registerUpdate(n.name, {
                name,
                value
            });
        };
        n.state = {
            password: "",
            formData: n.getInitialData()
        };
        return n;
    }
    module37(r, [
        {
            key: "getInitialData",
            value: function() {
                return {};
            }
        },
        {
            key: "render",
            value: function() {
                const formRef = this.props.formRef;
                return <div className={module3551.wrapper}><div className="h4">{t("PASSWORD_SETTINGS")}</div><module186.Form data={this.state.formData} ref={formRef} onChange={this.handleFormChange}><input name="password" className="hidden-input" type="password" disabled/><module186.Form.Item className={module3551.password} label={t("CURRENT_PASSWORD")} desc={t("ENTER_CURRENT_PASSWORD_DESC")} rules={[
                    {
                        required: true,
                        message: t("ENTER_CURRENT_PASSWORD_TIP")
                    }
                ]}><Module1121 name="currentPassword" placeholder=" " autoComplete="cur-password"/></module186.Form.Item><module186.Alert className={module3551.alert} type="warning" message={t("PASSWORD_DESC")}/><module186.Form.Item className={module3551.password} label={t("NEW_PASSWORD")} rules={[
                    {
                        required: true,
                        message: t("PASSWORD_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_PASSWORD,
                        message: t("PASSWORD_DESC")
                    }
                ]}><Module1121 name="password" placeholder=" " autoComplete="new-password" onChange={this.handlePassswordChange} tipClassName={module3551.dropdown} withStrength/></module186.Form.Item><module186.Form.Item className={module3551.password} label={t("CONFIRM_PASSWORD")} rules={[
                    {
                        required: true,
                        message: t("CONFIRM_PASSWORD_TIP")
                    },
                    {
                        validator: this.passwordValidator
                    }
                ]}><Module1121 name="rePassword" placeholder=" " autoComplete="new-password"/></module186.Form.Item></module186.Form></div>;
            }
        },
        {
            key: "name",
            get: function() {
                return "passwordSetting";
            }
        }
    ]);
    return r;
})(Component);
export default h;
h.contextTypes = {
    registerUpdate: module1.func
};
