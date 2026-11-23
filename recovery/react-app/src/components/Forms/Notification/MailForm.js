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
import module26 from "unpacked/module-26.js";
import module186 from "unpacked/module-186.js";
import module1058 from "components/Inputs/UrlInput";
import module1675 from "unpacked/module-1675.js";
import { PATTERN_HOST, PATTERN_PORT } from "utils/constants";
import module1060 from "components/Forms/Notification/BaseForm";
import module3080 from "components/Forms/Notification/MailForm/Item";
import module1701 from "unpacked/module-1701.js";
const O = ((e)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.state = {
            checked: module26(e.props.data, "config.spec.email.requireTLS", false)
        };
        e.handleChangeCheck = function(checked) {
            e.setState({
                checked
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "renderServiceSetting",
            value: function() {
                const checked = this.state.checked;
                return module553.default.createElement("div", {
                    className: module1701.row
                }, module553.default.createElement("div", {
                    className: module1701.title
                }, t("SERVER_SETTINGS")), module553.default.createElement("div", {
                    className: module1701.item
                }, module553.default.createElement(module186.Form.Item, {
                    label: t("SMTP_SERVER_ADDRESS")
                }, module553.default.createElement(module1058, {
                    className: module1701.urlInput,
                    portName: "config.spec.email.smartHost.port",
                    hostName: "config.spec.email.smartHost.host",
                    hostRules: [
                        {
                            required: true,
                            message: t("ADDRESS_EMPTY_DESC")
                        },
                        {
                            pattern: PATTERN_HOST,
                            message: t("INVALID_ADDRESS_DESC")
                        }
                    ],
                    portRules: [
                        {
                            required: true,
                            message: t("ENTER_PORT_NUMBER")
                        },
                        {
                            pattern: PATTERN_PORT,
                            message: t("INVALID_PORT_DESC")
                        }
                    ],
                    defaultPort: 25
                })), module553.default.createElement(module186.Form.Item, null, module553.default.createElement(module186.Checkbox, {
                    className: module1701.sslCheckbox,
                    name: "config.spec.email.requireTLS",
                    checked,
                    onChange: this.handleChangeCheck
                }, t("USE_SSL_SECURE_CONNECTION"))), module553.default.createElement(module186.Form.Item, {
                    label: t("SMTP_USER"),
                    rules: [
                        {
                            required: true,
                            message: t("SMTP_USER_EMPTY_DESC")
                        }
                    ]
                }, module553.default.createElement(module186.Input, {
                    name: "config.spec.email.authUsername",
                    placeholder: "admin@example.com"
                })), module553.default.createElement(module186.Form.Item, {
                    label: t("SMTP_PASSWORD"),
                    rules: [
                        {
                            required: true,
                            message: t("ENTER_PASSWORD_TIP")
                        }
                    ]
                }, module553.default.createElement(module186.InputPassword, {
                    name: "secret.data.authPassword",
                    type: "password",
                    autoComplete: "new-password"
                })), module553.default.createElement(module186.Form.Item, {
                    label: t("SENDER_EMAIL"),
                    rules: [
                        {
                            required: true,
                            message: t("EMAIL_EMPTY_DESC")
                        },
                        {
                            type: "email",
                            message: t("INVALID_EMAIL_ADDRESS_DESC")
                        }
                    ]
                }, module553.default.createElement(module1675, {
                    name: "config.spec.email.from",
                    placeholder: "admin@example.com"
                }))));
            }
        },
        {
            key: "renderReceiverSetting",
            value: function() {
                const wrapperClassName = this.props.wrapperClassName;
                return module553.default.createElement("div", {
                    className: module1701.row
                }, module553.default.createElement("div", {
                    className: module1701.title
                }, t("RECIPIENT_SETTINGS")), module553.default.createElement("div", {
                    className: module1701.item
                }, module553.default.createElement(module186.Form.Item, {
                    rules: [
                        {
                            required: true,
                            message: t("ENTER_RECIPIENT_EMAIL_DESC")
                        }
                    ]
                }, module553.default.createElement(module3080, {
                    className: wrapperClassName,
                    name: "receiver.spec.email.to"
                }))));
            }
        },
        {
            key: "renderLinkSub",
            value: function() {
                return module553.default.createElement("div", {
                    className: module1701.annotation
                }, module553.default.createElement(module186.Icon, {
                    name: "information"
                }), module553.default.createElement("p", {
                    className: module1701.desc
                }, module553.default.createElement("span", null, t("NOTIFICATION_EMAIL_SUBSCRIPTION_DESC")), module553.default.createElement("a", {
                    href: "/settings/notification-subscription/subscription-mail"
                }, t("ADD_EMAIL_NOTIFICATION_SUBSCRIPTION"))));
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { user, data, onChange, hideFooter, ...rest } = props;
                return module553.default.createElement(module1060, {
                    name: "email",
                    module: "mail",
                    icon: "email",
                    data,
                    onChange,
                    hideFooter,
                    user,
                    ...rest
                }, !user && this.renderServiceSetting(), user && this.renderReceiverSetting(), !user && this.renderLinkSub());
            }
        }
    ]);
    return r;
})(module553.Component);
export default O;
