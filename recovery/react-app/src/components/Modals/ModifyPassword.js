import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-58.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import module788 from "components/Base/Modal";
import module1121 from "components/Inputs/InputPassword";
import { PATTERN_PASSWORD } from "utils/constants";
import module3545 from "unpacked/module-3545.js";
const b = ((e)=>{
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
    function r(...l) {
        let e;
        module36(this, r);
        e = a.call(this, ...l);
        e.state = {
            password: "",
            formData: {}
        };
        e.handlePassswordChange = function(password) {
            e.setState({
                password
            });
        };
        e.passwordValidator = function(a, r, n) {
            if (!r) {
                return n();
            }
            if (r !== e.state.password) {
                n({
                    message: t("PASSWORD_NOT_SAME_DESC"),
                    field: a.field
                });
            }
            n();
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { detail, ...rest } = props;
                return module553.default.createElement(module788.Form, {
                    title: t("CHANGE_PASSWORD"),
                    icon: "pen",
                    width: 691,
                    data: this.state.formData,
                    ...rest
                }, module553.default.createElement("input", {
                    name: "username",
                    className: "hidden-input",
                    type: "text",
                    disabled: true
                }), module553.default.createElement("input", {
                    name: "password",
                    className: "hidden-input",
                    type: "password",
                    disabled: true
                }), module553.default.createElement(module186.Form.Item, {
                    label: t("EMAIL")
                }, module553.default.createElement(module186.Input, {
                    disabled: true,
                    value: detail.email
                })), module553.default.createElement(module186.Form.Item, {
                    className: module3545.password,
                    label: t("NEW_PASSWORD"),
                    rules: [
                        {
                            required: true,
                            message: t("PASSWORD_EMPTY_DESC")
                        },
                        {
                            pattern: PATTERN_PASSWORD,
                            message: t("PASSWORD_DESC")
                        }
                    ]
                }, module553.default.createElement(module1121, {
                    name: "password",
                    autoComplete: "new-password",
                    onChange: this.handlePassswordChange,
                    withStrength: true
                })), module553.default.createElement(module186.Form.Item, {
                    className: module3545.password,
                    label: t("CONFIRM_PASSWORD"),
                    rules: [
                        {
                            required: true,
                            message: t("CONFIRM_PASSWORD_TIP")
                        },
                        {
                            validator: this.passwordValidator
                        }
                    ]
                }, module553.default.createElement(module1121, {
                    name: "rePassword",
                    placeholder: " ",
                    autoComplete: "new-password"
                })), module553.default.createElement("div", {
                    style: {
                        height: 200
                    }
                }));
            }
        }
    ]);
    return r;
})(module553.Component);
export default b;
b.propTypes = {
    detail: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func
};
b.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {}
};
