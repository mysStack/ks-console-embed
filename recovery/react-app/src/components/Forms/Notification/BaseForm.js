import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-84.js";
import "unpacked/module-30.js";
import "unpacked/module-97.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-32.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module242 from "unpacked/module-242.js";
import module63 from "unpacked/module-63.js";
import module136 from "unpacked/module-136.js";
import module186 from "unpacked/module-186.js";
import module240 from "unpacked/module-240.js";
import module791 from "components/Base/Text";
import module852 from "components/Base/Switch";
import module1564 from "components/Base/ToggleField";
import module830 from "components/Inputs/ArrayInput";
import module1700 from "stores/notification/verify";
import module435 from "utils/form.templates";
import module1368 from "components/Forms/Notification/BaseForm/ConditionSelect";
import module3079 from "unpacked/module-3079.js";
const N = ((e)=>{
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
    function r(...l_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...l_1);
        e.formRef = e.props.formRef || module553.default.createRef();
        e.verifyStore = new module1700;
        e.state = {
            enabled: module26(e.props.data, `receiver.spec.${e.props.name}.enabled`, false),
            isVerifying: false
        };
        e.checkItemValid = function(e) {
            let t = e.key && e.operator;
            if (t && [
                "In",
                "NotIn"
            ].includes(e.operator)) {
                t = t && e.values.length > 0;
            }
            if (e.operator === "Match") {
                t = t && e.regexValue;
            }
            return t;
        };
        e.itemValidator = function(a, r, n) {
            if (r) {
                if (r.some((t)=>!e.checkItemValid(t))) {
                    return n({
                        message: t("INVALID_NOTIFICATION_CONDITION")
                    });
                }
                return void n();
            }
            return n();
        };
        e.handleSwitch = function(enabled) {
            e.setState({
                enabled
            });
        };
        e.handleVerify = function() {
            const e_props = e.props;
            const { user, getVerifyFormTemplate, onVerify } = e_props;
            const current = e.formRef.current;
            if (current) {
                current.validate(function() {
                    const a = current.getData();
                    const o = module435.notificationVerify({
                        user
                    });
                    const i = module136(getVerifyFormTemplate(a));
                    const { config, receiver } = i;
                    if (!(onVerify && !onVerify(a))) {
                        module74(o, "config.spec", module26(config, "spec", {}));
                        module74(o, "receiver.spec", module26(receiver, "spec", {}));
                        if (module63(config)) {
                            module242(o, "config");
                        }
                        e.setState({
                            isVerifying: true
                        });
                        e.verifyStore.checkInfo(o, {
                            user
                        }).then((a)=>{
                            e.setState({
                                isVerifying: false
                            });
                            if (a.Status === 200) {
                                module240.success({
                                    content: t("SEND_TEST_MESSAGE_SUCCESS_DESC")
                                });
                            } else {
                                module240.error({
                                    content: a.Message
                                });
                            }
                        });
                    }
                });
            }
        };
        e.handleSubmit = function() {
            const current = e.formRef.current;
            if (current) {
                current.validate(function() {
                    e.props.onSubmit(current.getData());
                });
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "renderEnableService",
            value: function() {
                const { user, name, module, icon, noConfig = true } = this.props;
                const enabled = this.state.enabled;
                if (user && !noConfig) {
                    return module553.default.createElement("div", {
                        className: module3079.contentWrapper
                    }, module553.default.createElement(module186.Form.Item, {
                        className: module3079.isHorizon,
                        label: t(enabled ? t("NOTIFICATION_ENABLED") : t("NOTIFICATION_DISABLED"))
                    }, module553.default.createElement(module1564, {
                        name: `receiver.spec.${name}.enabled`,
                        value: enabled,
                        onChange: this.handleSwitch
                    })));
                }
                return module553.default.createElement("div", {
                    className: module3079.header
                }, module553.default.createElement(module791, {
                    className: module3079.title,
                    icon,
                    title: t(`${module.toUpperCase()}_TITLE`),
                    description: t(`${module.toUpperCase()}_DESC`)
                }), !noConfig && module553.default.createElement("div", {
                    className: module3079.action
                }, module553.default.createElement(module186.Form.Item, null, module553.default.createElement(module852, {
                    name: `receiver.spec.${name}.enabled`,
                    text: t(enabled ? t("ENABLED") : t("DISABLED")),
                    checked: enabled,
                    onChange: this.handleSwitch
                }))));
            }
        },
        {
            key: "renderControlAnnotation",
            value: function() {
                return module553.default.createElement("div", {
                    className: module3079.annotation
                }, module553.default.createElement(module186.Icon, {
                    name: "question"
                }), module553.default.createElement("p", {
                    className: module3079.desc
                }, t.html("NOTIFICATION_CONDITION_SETTING_TIP")));
            }
        },
        {
            key: "renderControlSetting",
            value: function() {
                const props = this.props;
                const { name, user } = props;
                return module553.default.createElement(module186.Form.Group, {
                    label: t("FILTER_CONDITIONS"),
                    desc: t("NOTIFICATION_CONDITION_SETTINGS_DESC"),
                    checkable: true,
                    keepDataWhenUnCheck: Boolean(user)
                }, module553.default.createElement(module186.Form.Item, {
                    rules: [
                        {
                            validator: this.itemValidator,
                            checkOnSubmit: true
                        }
                    ]
                }, module553.default.createElement(module830, {
                    name: `receiver.spec.${name}.alertSelector.matchExpressions`,
                    itemType: "object",
                    addText: t("ADD"),
                    checkItemValid: this.checkItemValid,
                    desc: this.renderControlAnnotation()
                }, module553.default.createElement(module1368, null))));
            }
        },
        {
            key: "renderVerifyAction",
            value: function() {
                const isVerifying = this.state.isVerifying;
                return module553.default.createElement("div", {
                    className: module3079.contentWrapper
                }, module553.default.createElement("p", null, t("SEND_TEST_MESSAGE_DESC")), module553.default.createElement(module186.Button, {
                    className: module3079.action,
                    onClick: this.handleVerify,
                    loading: isVerifying
                }, t("SEND_TEST_MESSAGE")));
            }
        },
        {
            key: "renderFooterBtns",
            value: function() {
                const props = this.props;
                const { onCancel, isSubmitting } = props;
                return module553.default.createElement("div", {
                    className: module3079.footer
                }, module553.default.createElement(module186.Button, {
                    onClick: onCancel
                }, t("CANCEL")), module553.default.createElement(module186.Button, {
                    type: "control",
                    loading: isSubmitting,
                    onClick: this.handleSubmit
                }, t("OK")));
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { data, onChange, hideFooter, children, module, user } = props;
                return module553.default.createElement(module186.Form, {
                    ref: this.formRef,
                    data,
                    onChange
                }, module553.default.createElement("div", {
                    className: module3079.formBody
                }, this.renderEnableService(), module553.default.createElement("div", {
                    className: module3079.contentWrapper
                }, children, (module !== "mail" || module === "mail" && user) && this.renderControlSetting()), (module !== "mail" || module === "mail" && user) && this.renderVerifyAction()), !hideFooter && this.renderFooterBtns());
            }
        }
    ]);
    return r;
})(module553.Component);
export default N;
