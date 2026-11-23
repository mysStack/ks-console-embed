import "./module-15.js";
import "./module-5.js";
import "./module-187.js";
import "./module-84.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
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
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import module240 from "./module-240.js";
import module1305 from "./module-1305.js";
import module1060 from "./module-1060.js";
import module3084 from "./module-3084.js";
import module1704 from "./module-1704.js";
const TabPanel = module186.Tabs.TabPanel;
const S = ((e)=>{
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
        e.state = {
            type: "toUser",
            chatbotType: "atUsers"
        };
        e.validate = function(a) {
            const type = e.state.type;
            const n = module26(e.props.data, `receiver.spec.wechat.${type}`, []);
            const count = globals.config.notification.wecom[`max_number_of_${type}`];
            if (a) {
                if (n.length > count - 1) {
                    module240.error({
                        content: t.html(`MAX_${type.toUpperCase()}_COUNT`, {
                            count
                        }),
                        duration: 1000
                    });
                } else {
                    if (!n.includes(a)) {
                        return true;
                    }
                    module240.error({
                        content: t(`${type.toUpperCase()}_EXISTS`),
                        duration: 1000
                    });
                }
            } else {
                module240.error({
                    content: t(`ENTER_${type.toUpperCase()}_TIP`),
                    duration: 1000
                });
            }
        };
        e.receiverValidator = function(a, r, n) {
            if ([
                "toParty",
                "toUser",
                "toTag"
            ].every((t)=>module63(module26(e.props.data, `receiver.spec.wechat.${t}`)))) {
                return n({
                    message: t("RECIPIENT_SETTINGS_TIP")
                });
            }
            n();
        };
        e.handleTypeChange = function(type) {
            e.setState({
                type
            });
        };
        e.handleChatTypeChange = function(chatbotType) {
            e.setState({
                chatbotType
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "renderServiceSetting",
            value: function() {
                return module553.default.createElement("div", {
                    className: module1704.row
                }, module553.default.createElement("div", {
                    className: module1704.title
                }, t("SERVER_SETTINGS")), module553.default.createElement("div", {
                    className: module1704.item
                }, module553.default.createElement(module186.Form.Item, {
                    label: "Corp ID",
                    rules: [
                        {
                            required: true,
                            message: t("ENTER_WECOM_CORP_ID_DESC")
                        }
                    ]
                }, module553.default.createElement(module186.Input, {
                    name: "config.spec.wechat.wechatApiCorpId"
                })), module553.default.createElement(module186.Form.Item, {
                    label: "Agent ID",
                    rules: [
                        {
                            required: true,
                            message: t("ENTER_WECOM_AGENT_ID_DESC")
                        }
                    ]
                }, module553.default.createElement(module186.Input, {
                    name: "config.spec.wechat.wechatApiAgentId"
                })), module553.default.createElement(module186.Form.Item, {
                    label: "Secret",
                    rules: [
                        {
                            required: true,
                            message: t("ENTER_WECOM_SECRET_DESC")
                        }
                    ]
                }, module553.default.createElement(module186.Input, {
                    name: "secret.data.appsecret"
                }))));
            }
        },
        {
            key: "renderReceiverSetting",
            value: function() {
                const type = this.state.type;
                const wrapperClassName = this.props.wrapperClassName;
                return module553.default.createElement("div", {
                    className: module1704.row
                }, module553.default.createElement("div", {
                    className: module1704.title
                }, t("RECIPIENT_SETTINGS")), module553.default.createElement("div", {
                    className: module1704.subTitle
                }, t("RECIPIENT_SETTINGS_TIP")), module553.default.createElement("div", {
                    className: module1704.item
                }, module553.default.createElement("div", {
                    className: "margin-b12"
                }, module553.default.createElement(module1305, {
                    value: type,
                    onChange: this.handleTypeChange,
                    options: this.tabs
                })), module553.default.createElement(module186.Form.Item, {
                    rules: [
                        {
                            validator: this.receiverValidator
                        }
                    ]
                }, module553.default.createElement(module3084, {
                    name: `receiver.spec.wechat.${type}`,
                    className: wrapperClassName,
                    validate: this.validate,
                    type
                }))));
            }
        },
        {
            key: "renderChatbotSetting",
            value: function() {
                return module553.default.createElement("div", {
                    className: module1704.row
                }, module553.default.createElement("div", {
                    className: module1704.title
                }, module553.default.createElement("span", null, t("CHATBOT_SETTINGS"))), module553.default.createElement("div", {
                    className: module1704.item
                }, module553.default.createElement(module186.Form.Item, {
                    label: "Webhook URL"
                }, module553.default.createElement(module186.Input, {
                    name: "secret.data.webhook"
                }))));
            }
        },
        {
            key: "renderChatbotReceiverSetting",
            value: function() {
                const chatbotType = this.state.chatbotType;
                const wrapperClassName = this.props.wrapperClassName;
                return module553.default.createElement("div", {
                    className: module1704.row
                }, module553.default.createElement("div", {
                    className: module1704.title
                }, t("RECIPIENT_SETTINGS")), module553.default.createElement("div", {
                    className: module1704.item
                }, module553.default.createElement("div", {
                    className: "margin-b12"
                }, module553.default.createElement(module1305, {
                    value: chatbotType,
                    onChange: this.handleChatTypeChange,
                    options: this.chatbotTabs
                })), module553.default.createElement(module186.Form.Item, null, module553.default.createElement(module3084, {
                    name: `receiver.spec.wechat.chatbot.${chatbotType}`,
                    className: wrapperClassName,
                    validate: this.validate,
                    type: chatbotType
                }))));
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { user, data, onChange, hideFooter, ...rest } = props;
                return module553.default.createElement(module1060, {
                    name: "wechat",
                    module: "WeCom",
                    icon: "wecom",
                    data,
                    onChange,
                    hideFooter,
                    user,
                    ...rest
                }, module553.default.createElement(module186.Tabs, {
                    type: "button"
                }, module553.default.createElement(TabPanel, {
                    label: t("CHAT_SETTINGS"),
                    name: "conversation"
                }, !user && this.renderServiceSetting(), this.renderReceiverSetting()), module553.default.createElement(TabPanel, {
                    label: t("CHATBOT_SETTINGS"),
                    name: "chatbot"
                }, this.renderChatbotSetting(), this.renderChatbotReceiverSetting())));
            }
        },
        {
            key: "tabs",
            get: function() {
                return [
                    {
                        label: "User ID",
                        value: "toUser"
                    },
                    {
                        label: "Department ID",
                        value: "toParty"
                    },
                    {
                        label: "Tag ID",
                        value: "toTag"
                    }
                ];
            }
        },
        {
            key: "chatbotTabs",
            get: function() {
                return [
                    {
                        label: "User ID",
                        value: "atUsers"
                    },
                    {
                        label: t("WHIZARD_NOTIFICATION.PHONE_NUMBER"),
                        value: "atMobiles"
                    }
                ];
            }
        }
    ]);
    return r;
})(module553.Component);
export default S;
