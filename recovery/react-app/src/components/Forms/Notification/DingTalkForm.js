import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-84.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
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
import module240 from "unpacked/module-240.js";
import module1060 from "components/Forms/Notification/BaseForm";
import module3082 from "components/Forms/Notification/DingTalkForm/Item";
import module1370 from "components/Forms/Notification/DingTalkForm/KeyWords";
import module1369 from "unpacked/module-1369.js";
const TabPanel = module186.Tabs.TabPanel;
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
    function r(...l) {
        let e;
        module36(this, r);
        e = a.call(this, ...l);
        e.validateCid = function(a) {
            const r = module26(e.props.data, "receiver.spec.dingtalk.conversation.chatids", []);
            const max_number_of_cid = globals.config.notification.dingtalk.max_number_of_cid;
            if (a) {
                if (r.length > max_number_of_cid - 1) {
                    module240.error({
                        content: t.html("MAX_CID_COUNT", {
                            count: max_number_of_cid
                        }),
                        durantion: 1000
                    });
                } else {
                    if (!r.includes(a)) {
                        return true;
                    }
                    module240.error({
                        content: t("CHAT_ID_EXISTS"),
                        duration: 1000
                    });
                }
            } else {
                module240.error({
                    content: t("ENTER_CHAT_ID_DESC"),
                    durantion: 1000
                });
            }
        };
        e.validateKeywords = function(a) {
            const r = module26(e.props.data, "receiver.spec.dingtalk.chatbot.keywords", []);
            const max_number_of_keyword = globals.config.notification.dingtalk.max_number_of_keyword;
            if (a) {
                if (r.length > max_number_of_keyword - 1) {
                    module240.error({
                        content: t.html("MAX_KEYWORD_COUNT", {
                            count: max_number_of_keyword
                        }),
                        durantion: 1000
                    });
                } else {
                    if (!r.includes(a)) {
                        return true;
                    }
                    module240.error({
                        content: t("KEYWORD_EXISTS"),
                        duration: 1000
                    });
                }
            } else {
                module240.error({
                    content: t("ENTER_KEYWORD_DESC"),
                    durantion: 1000
                });
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "renderLabel",
            value: function() {
                return module553.default.createElement("div", {
                    className: module1369.labelWrapper
                }, module553.default.createElement("span", null, "Chat ID"), this.props.user && module553.default.createElement(module186.Tooltip, {
                    content: t("CHAT_ID_TIP")
                }, module553.default.createElement(module186.Icon, {
                    className: module1369.tip,
                    name: "question"
                })));
            }
        },
        {
            key: "renderServiceSetting",
            value: function() {
                return module553.default.createElement("div", {
                    className: module1369.row
                }, module553.default.createElement("div", {
                    className: module1369.title
                }, t("APP_SETTINGS")), module553.default.createElement("div", {
                    className: module1369.item
                }, module553.default.createElement(module186.Form.Item, {
                    label: "App Key"
                }, module553.default.createElement(module186.Input, {
                    name: "secret.data.appkey"
                })), module553.default.createElement(module186.Form.Item, {
                    label: "App Secret"
                }, module553.default.createElement(module186.Input, {
                    name: "secret.data.appsecret"
                }))));
            }
        },
        {
            key: "renderReceiverSetting",
            value: function() {
                const wrapperClassName = this.props.wrapperClassName;
                return module553.default.createElement("div", {
                    className: module1369.row
                }, module553.default.createElement("div", {
                    className: module1369.title
                }, module553.default.createElement("span", null, t("RECIPIENT_SETTINGS"))), module553.default.createElement("div", {
                    className: module1369.item
                }, module553.default.createElement(module186.Form.Item, {
                    label: this.renderLabel()
                }, module553.default.createElement(module3082, {
                    className: wrapperClassName,
                    name: "receiver.spec.dingtalk.conversation.chatids",
                    title: "Chat ID",
                    placeholder: " ",
                    validate: this.validateCid
                }))));
            }
        },
        {
            key: "renderChatSetting",
            value: function() {
                const wrapperClassName = this.props.wrapperClassName;
                return module553.default.createElement("div", {
                    className: module1369.row
                }, module553.default.createElement("div", {
                    className: module1369.title
                }, module553.default.createElement("span", null, t("CHATBOT_SETTINGS"))), module553.default.createElement("div", {
                    className: module1369.item
                }, module553.default.createElement(module186.Form.Item, {
                    label: "Webhook URL"
                }, module553.default.createElement(module186.Input, {
                    name: "secret.data.webhook"
                })), module553.default.createElement(module186.Form.Item, {
                    label: "Secret"
                }, module553.default.createElement(module186.Input, {
                    name: "secret.data.chatbotsecret"
                })), module553.default.createElement(module186.Form.Item, null, module553.default.createElement(module1370, {
                    className: wrapperClassName,
                    name: "receiver.spec.dingtalk.chatbot.keywords",
                    validate: this.validateKeywords
                }))));
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { user, data, onChange, hideFooter, ...rest } = props;
                return module553.default.createElement(module1060, {
                    name: "dingtalk",
                    module: "DingTalk",
                    icon: "dingtalk",
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
                }, module553.default.createElement(module553.default.Fragment, null, !user && this.renderServiceSetting(), this.renderReceiverSetting())), module553.default.createElement(TabPanel, {
                    label: t("CHATBOT_SETTINGS"),
                    name: "chatbot"
                }, this.renderChatSetting())));
            }
        }
    ]);
    return r;
})(module553.Component);
export default O;
