import "./module-15.js";
import "./module-5.js";
import "./module-4.js";
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
import * as module553 from "./module-553.js";
import module26 from "./module-26.js";
import module186 from "./module-186.js";
import module1121 from "./module-1121.js";
import module1060 from "./module-1060.js";
import module3088 from "./module-3088.js";
const E = ((e)=>{
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
            type: module26(e.props.data, 'receiver.metadata.annotations["kubesphere.io/verify-type"]', ""),
            enabled: module26(e.props.data, "receiver.spec.webhook.httpConfig.tlsConfig.insecureSkipVerify", false)
        };
        e.handleTypeChange = function(type) {
            e.setState({
                type
            });
        };
        e.handleChangeCheck = function(enabled) {
            e.setState({
                enabled
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "renderServiceSetting",
            value: function() {
                const state = this.state;
                const { type, enabled } = state;
                return module553.default.createElement("div", {
                    className: module3088.row
                }, module553.default.createElement("div", {
                    className: module3088.title
                }, t("SERVER_SETTINGS")), module553.default.createElement("div", {
                    className: module3088.item
                }, module553.default.createElement(module186.Form.Item, {
                    label: "Webhook URL",
                    rules: [
                        {
                            required: true,
                            message: t("WEBHOOK_URL_DESC")
                        }
                    ]
                }, module553.default.createElement(module186.Input, {
                    name: "receiver.spec.webhook.url"
                })), module553.default.createElement(module186.Form.Item, {
                    label: t("AUTHENTICATION_TYPE"),
                    rules: [
                        {
                            required: true,
                            message: t("AUTHENTICATION_TYPE_DESC")
                        }
                    ]
                }, module553.default.createElement(module186.Select, {
                    name: "receiver.metadata.annotations['kubesphere.io/verify-type']",
                    value: type,
                    options: this.options,
                    onChange: this.handleTypeChange,
                    placeholder: " "
                })), type === "basic" && module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(module186.Form.Item, {
                    label: t("USERNAME"),
                    rules: [
                        {
                            required: true,
                            message: t("WEBHOOK_USERNAME_EMPTY_DESC")
                        }
                    ]
                }, module553.default.createElement(module186.Input, {
                    name: "receiver.spec.webhook.httpConfig.basicAuth.username"
                })), module553.default.createElement(module186.Form.Item, {
                    label: t("PASSWORD"),
                    rules: [
                        {
                            required: true,
                            message: t("WEBHOOK_PASSWORD_EMPTY_DESC")
                        }
                    ]
                }, module553.default.createElement(module1121, {
                    name: "secret.data.password",
                    type: "password",
                    autoComplete: "new-password"
                }))), type === "token" && module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(module186.Form.Item, {
                    label: t("TOKEN"),
                    rules: [
                        {
                            required: true,
                            message: t("WEBHOOK_TOKEN_EMPTY_DESC")
                        }
                    ]
                }, module553.default.createElement(module186.Input, {
                    name: "secret.data.token"
                }))), module553.default.createElement(module186.Form.Item, null, module553.default.createElement(module186.Checkbox, {
                    name: "receiver.spec.webhook.httpConfig.tlsConfig.insecureSkipVerify",
                    checked: enabled,
                    onChange: this.handleChangeCheck
                }, t("SKIP_TLS_VERFICATION")))));
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { user, data, onChange, hideFooter, ...rest } = props;
                return module553.default.createElement(module1060, {
                    name: "webhook",
                    module: "webhook",
                    icon: "webhook",
                    data,
                    onChange,
                    hideFooter,
                    user,
                    ...rest
                }, this.renderServiceSetting());
            }
        },
        {
            key: "options",
            get: function() {
                return [
                    {
                        label: t("NO_AUTH"),
                        value: "no"
                    },
                    {
                        label: t("BEARER_TOKEN"),
                        value: "token"
                    },
                    {
                        label: t("BASIC_AUTH"),
                        value: "basic"
                    }
                ];
            }
        }
    ]);
    return r;
})(module553.Component);
export default E;
