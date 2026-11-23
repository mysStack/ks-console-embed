import "./module-15.js";
import "./module-5.js";
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
import module186 from "./module-186.js";
import module240 from "./module-240.js";
import module1060 from "./module-1060.js";
import module1370 from "./module-1370.js";
import module3090 from "./module-3090.js";
const TabPanel = module186.Tabs.TabPanel;
const _ = ((e)=>{
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
        e.validateKeywords = function(a) {
            const r = module26(e.props.data, "receiver.spec.feishu.chatbot.keywords", []);
            const max_number_of_keyword = globals.config.notification.feishu.max_number_of_keyword;
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
            key: "renderServiceSetting",
            value: function() {
                return module553.default.createElement("div", {
                    className: module3090.row
                }, module553.default.createElement("div", {
                    className: module3090.title
                }, t("CHAT_SETTINGS")), module553.default.createElement("div", {
                    className: module3090.item
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
                    className: module3090.row
                }, module553.default.createElement("div", {
                    className: module3090.title
                }, module553.default.createElement("span", null, t("RECIPIENT_SETTINGS")), module553.default.createElement("p", {
                    className: module3090.subtitle
                }, t("FEISHU_RECEIPIENT_SETTINGS_DESC"))), module553.default.createElement("div", {
                    className: module3090.item
                }, module553.default.createElement(module186.Tabs, {
                    type: "button"
                }, module553.default.createElement(TabPanel, {
                    label: t("USER_ID"),
                    name: "conversation"
                }, module553.default.createElement(module186.Form.Item, null, module553.default.createElement(module1370, {
                    className: wrapperClassName,
                    title: t(""),
                    listTitle: t("TOUSER_LIST"),
                    emptyDesc: t("EMPTY_TOUSER_DESC"),
                    placeholder: " ",
                    name: "receiver.spec.feishu.user",
                    validate: this.validateKeywords
                }))), module553.default.createElement(TabPanel, {
                    label: t("DEPARTMENT_ID"),
                    name: "chatbot"
                }, module553.default.createElement(module186.Form.Item, null, module553.default.createElement(module1370, {
                    className: wrapperClassName,
                    title: t(""),
                    listTitle: t("TOPARTY_LIST"),
                    emptyDesc: t("EMPTY_TOPARTY_DESC"),
                    placeholder: " ",
                    name: "receiver.spec.feishu.department",
                    validate: this.validateKeywords
                }))))));
            }
        },
        {
            key: "renderChatSetting",
            value: function() {
                const wrapperClassName = this.props.wrapperClassName;
                return module553.default.createElement("div", {
                    className: module3090.row
                }, module553.default.createElement("div", {
                    className: module3090.title
                }, module553.default.createElement("span", null, t("CHATBOT_SETTINGS"))), module553.default.createElement("div", {
                    className: module3090.item
                }, module553.default.createElement(module186.Form.Item, {
                    label: "Webhook URL"
                }, module553.default.createElement(module186.Input, {
                    name: "secret.data.webhook"
                })), module553.default.createElement(module186.Form.Item, {
                    label: t("FEISHU_SECRET")
                }, module553.default.createElement(module186.Input, {
                    name: "secret.data.chatbotsecret"
                })), module553.default.createElement(module186.Form.Item, null, module553.default.createElement(module1370, {
                    className: wrapperClassName,
                    name: "receiver.spec.feishu.chatbot.keywords",
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
                    name: "feishu",
                    module: "Feishu",
                    icon: "feishu",
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
                }, !user && this.renderServiceSetting(), module553.default.createElement(module553.default.Fragment, null, this.renderReceiverSetting())), module553.default.createElement(TabPanel, {
                    label: t("CHATBOT_SETTINGS"),
                    name: "chatbot"
                }, this.renderChatSetting())));
            }
        }
    ]);
    return r;
})(module553.Component);
export default _;
