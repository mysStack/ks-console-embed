import "./module-15.js";
import "./module-5.js";
import "./module-84.js";
import "./module-30.js";
import "./module-97.js";
import "./module-16.js";
import "./module-138.js";
import "./module-4.js";
import "./module-22.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-38.js";
import "./module-62.js";
import "./module-32.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import module41 from "./module-41.js";
import module96 from "./module-96.js";
import module44 from "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import { inject } from "./module-239.js";
import module136 from "./module-136.js";
import module74 from "./module-74.js";
import module26 from "./module-26.js";
import module242 from "./module-242.js";
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import module240 from "./module-240.js";
import module830 from "./module-830.js";
import module1368 from "./module-1368.js";
import module1700 from "./module-1700.js";
import module889 from "./module-889.js";
import module1079 from "./module-1079.js";
import module920 from "./module-920.js";
import module435 from "./module-435.js";
import { PATTERN_ALIAS_NAME, PATTERN_NAME } from "./module-72.js";
import module5157 from "./module-5157.js";
import module5158 from "./module-5158.js";
import module1997 from "./module-1997.js";
let i;
const x = inject("rootStore")(i = ((e)=>{
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
    function r(...u_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...u_1);
        e.verifyStore = new module1700;
        e.receiverStore = new module889;
        e.configStore = new module1079;
        e.secretStore = new module920;
        e.formRef = module553.default.createRef();
        e.state = {
            formData: e.receiverFormTemplate,
            isVerifying: false,
            enabled: true,
            isEdit: false,
            isLoading: false
        };
        e.fetchData = module44(module41.mark(function t() {
            let a;
            let r;
            let formData;
            let u;
            let i;
            let c;
            let s;
            return module41.wrap(function(t) {
                while(true){
                    switch(t.prev = t.next){
                        case 0:
                            if (!(a = e.props.match.params.name)) {
                                t.next = 8;
                                break;
                            }
                            e.setState({
                                isLoading: true
                            });
                            t.next = 5;
                            return e.receiverStore.fetchDetail({
                                name: a
                            });
                        case 5:
                            r = t.sent;
                            formData = Object.assign(e.state.formData, r._originData);
                            e.setState({
                                formData,
                                isLoading: false,
                                isEdit: true,
                                enabled: module26(r._originData, "spec.email.enabled", true)
                            });
                        case 8:
                            t.next = 10;
                            return Promise.all([
                                e.configStore.fetchList({
                                    type: "email",
                                    name: "default-email-config"
                                }),
                                e.secretStore.fetchList({
                                    name: "global-email-config-secret"
                                })
                            ]);
                        case 10:
                            u = t.sent;
                            i = module96(u, 2);
                            c = i[0];
                            s = i[1];
                            e.setState({
                                config: c[0] || {},
                                secret: s[0] || {}
                            });
                        case 15:
                        case "end":
                            return t.stop();
                    }
                }
            }, t);
        }));
        e.onSubmit = function() {
            const current = e.formRef.current;
            if (current) {
                current.validate(module44(module41.mark(function* r() {
                    let n;
                    let u;
                    n = current.getData();
                    u = e.props.match.params.name;
                    try {
                        if (e.state.isEdit) {
                            yield e.receiverStore.update({
                                name: u
                            }, n);
                            module240.success({
                                content: t("UPDATE_SUCCESSFUL"),
                                duration: 1000
                            });
                        } else {
                            yield e.receiverStore.create(n);
                            module240.success({
                                content: t("CREATE_SUCCESSFUL"),
                                duration: 1000
                            });
                        }
                        e.props.rootStore.routing.push(`${e.state.isEdit ? `/settings/notification-subscription/subscription-mail/detail/${u}` : "/settings/notification-subscription/subscription-mail"}`);
                    } catch (error) {}
                })));
            }
        };
        e.onCancel = function() {
            const name = e.props.match.params.name;
            e.props.rootStore.routing.push(e.state.isEdit ? `/settings/notification-subscription/subscription-mail/detail/${name}` : "/settings/notification-subscription/subscription-mail");
        };
        e.getVerifyFormTemplate = function(t) {
            const receiver = module136(t);
            const e_state = e.state;
            const { config, secret } = e_state;
            module74(config, "spec.email.authPassword.value", module26(secret, "data.authPassword"));
            module242(config, "spec.email.authPassword.valueFrom");
            module242(receiver, "spec.email.alertSelector");
            return {
                config,
                receiver
            };
        };
        e.handleVerify = function() {
            const current = e.formRef.current;
            if (current) {
                current.validate(function() {
                    const r = current.getData();
                    const n = module435.notificationVerify({
                        user: undefined
                    });
                    const u = module136(e.getVerifyFormTemplate(r));
                    const { config, receiver } = u;
                    module74(n, "config.spec", module26(config, "spec", {}));
                    module74(n, "receiver.spec", module26(receiver, "spec", {}));
                    module74(n, "receiver.metadata.name", module26(receiver, "metadata.name"));
                    if (module63(config)) {
                        module242(n, "config");
                    }
                    e.setState({
                        isVerifying: true
                    });
                    e.verifyStore.checkInfo(n, {
                        user: undefined
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
                });
            }
        };
        e.nameValidator = function(a, r, n) {
            if (!r) {
                return n();
            }
            e.receiverStore.checkName({
                name: r
            }).then((e)=>{
                if (e.exist) {
                    return n({
                        message: t("NAME_EXIST_DESC"),
                        field: a.field
                    });
                }
                n();
            });
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
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "renderControlAnnotation",
            value: function() {
                return module553.default.createElement("div", {
                    className: module1997.annotation
                }, module553.default.createElement(module186.Icon, {
                    name: "question"
                }), module553.default.createElement("p", {
                    className: module1997.desc
                }, t.html("NOTIFICATION_CONDITION_SETTING_TIP")));
            }
        },
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { formData, isVerifying, enabled, isEdit } = state;
                const isSubmitting = this.receiverStore.isSubmitting;
                return module553.default.createElement("div", null, module553.default.createElement("div", {
                    className: module1997.header
                }, t(isEdit ? "EDIT_NOTIFICATION_SUBSCRIPTION" : "CREATE_NOTIFICATION_SUBSCRIPTION")), module553.default.createElement(module186.Form, {
                    ref: this.formRef,
                    data: formData
                }, module553.default.createElement("div", {
                    className: module1997.body
                }, module553.default.createElement("div", {
                    className: module1997.row
                }, module553.default.createElement("div", {
                    className: module1997.title
                }, t("BASIC_INFORMATION")), module553.default.createElement(module186.Form.Item, {
                    label: t("NAME"),
                    desc: t("NAME_DESC"),
                    rules: [
                        {
                            required: true,
                            message: t("WORKSPACE_NAME_EMPTY_DESC")
                        },
                        {
                            pattern: PATTERN_NAME,
                            message: t("INVALID_NAME_DESC")
                        }
                    ]
                }, module553.default.createElement(module186.Input, {
                    name: "metadata.name",
                    autoFocus: true,
                    maxLength: 63,
                    disabled: isEdit
                })), module553.default.createElement(module186.Form.Item, {
                    label: t("ALIAS"),
                    desc: t("ALIAS_NAME_DESC"),
                    rules: [
                        {
                            pattern: PATTERN_ALIAS_NAME,
                            message: t("INVALID_ALIAS_NAME_DESC")
                        }
                    ]
                }, module553.default.createElement(module186.Input, {
                    name: "metadata.annotations['kubesphere.io/alias-name']",
                    maxLength: 63
                })), module553.default.createElement(module186.Form.Item, {
                    label: t("DESCRIPTION"),
                    desc: t("DESCRIPTION_DESC")
                }, module553.default.createElement(module186.TextArea, {
                    name: "metadata.annotations['kubesphere.io/description']",
                    maxLength: 256,
                    rows: "3"
                }))), module553.default.createElement("div", {
                    className: module1997.row
                }, module553.default.createElement("div", {
                    className: module1997.title
                }, t("RECIPIENT_SETTINGS")), module553.default.createElement(module186.Form.Item, {
                    rules: [
                        {
                            required: true,
                            message: t("ENTER_RECIPIENT_EMAIL_DESC")
                        }
                    ]
                }, module553.default.createElement(module5157, {
                    name: "spec.email.to"
                }))), module553.default.createElement("div", {
                    className: module1997.row
                }, module553.default.createElement("div", {
                    className: module1997.title
                }, t("NOTIFICATION_RECEIVER")), module553.default.createElement(module186.Form.Item, null, module553.default.createElement(module5158, {
                    name: "spec.email.enabled",
                    text: enabled ? t("ENABLED") : t("DISABLED"),
                    checked: enabled,
                    onChange: this.handleSwitch
                }))), module553.default.createElement("div", {
                    className: module1997.row
                }, module553.default.createElement("div", {
                    className: module1997.title
                }, t("FILTER_CONDITIONS")), module553.default.createElement("div", {
                    className: module1997.item
                }, module553.default.createElement(module186.Form.Item, {
                    rules: [
                        {
                            validator: this.itemValidator,
                            checkOnSubmit: true
                        }
                    ]
                }, module553.default.createElement(module830, {
                    name: "spec.email.alertSelector.matchExpressions",
                    itemType: "object",
                    addText: t("ADD"),
                    checkItemValid: this.checkItemValid,
                    desc: this.renderControlAnnotation()
                }, module553.default.createElement(module1368, null))))), module553.default.createElement("div", {
                    className: module1997.contentWrapper
                }, module553.default.createElement("p", null, t("SEND_TEST_MESSAGE_DESC")), module553.default.createElement(module186.Button, {
                    className: module1997.action,
                    onClick: this.handleVerify,
                    loading: isVerifying
                }, t("SEND_TEST_MESSAGE")))), module553.default.createElement("div", {
                    className: module1997.footer
                }, module553.default.createElement(module186.Button, {
                    onClick: this.onCancel
                }, t("CANCEL")), module553.default.createElement(module186.Button, {
                    type: "control",
                    loading: isSubmitting,
                    onClick: this.onSubmit
                }, t("OK")))));
            }
        },
        {
            key: "receiverFormTemplate",
            get: function() {
                const e = module435.notificationreceivers({
                    type: "email"
                });
                module74(e, "spec.email.enabled", true);
                return e;
            }
        }
    ]);
    return r;
})(module553.Component)) || i;
export default x;
