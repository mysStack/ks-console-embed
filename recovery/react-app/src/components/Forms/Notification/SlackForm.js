import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-97.js";
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
import module240 from "unpacked/module-240.js";
import module1060 from "components/Forms/Notification/BaseForm";
import module1370 from "components/Forms/Notification/DingTalkForm/KeyWords";
import module3086 from "unpacked/module-3086.js";
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
    function r(...l_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...l_1);
        e.validateChannel = function(a) {
            const data = e.props.data;
            const n = module26(data, "receiver.spec.slack.channels", []);
            const max_number_of_keyword = globals.config.notification.dingtalk.max_number_of_keyword;
            if (a) {
                if (n.length > max_number_of_keyword - 1) {
                    module240.error({
                        content: t.html("MAX_CHANNEL_COUNT", {
                            count: max_number_of_keyword
                        }),
                        durantion: 1000
                    });
                } else {
                    if (!n.some((e)=>e === a)) {
                        return true;
                    }
                    module240.error({
                        content: t("CHANNEL_EXISTS"),
                        duration: 1000
                    });
                }
            } else {
                module240.error({
                    content: t("ADD_CHANNEL_TIP"),
                    duration: 1000
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
                    className: module3086.row
                }, module553.default.createElement("div", {
                    className: module3086.title
                }, t("SERVER_SETTINGS")), module553.default.createElement("div", {
                    className: module3086.item
                }, module553.default.createElement(module186.Form.Item, {
                    label: t("SLACK_TOKEN"),
                    rules: [
                        {
                            required: true,
                            message: t("SLACK_TOKEN_DESC")
                        }
                    ]
                }, module553.default.createElement(module186.Input, {
                    name: "secret.data.token"
                }))));
            }
        },
        {
            key: "renderReceiverSetting",
            value: function() {
                const wrapperClassName = this.props.wrapperClassName;
                return module553.default.createElement("div", {
                    className: module3086.row
                }, module553.default.createElement("div", {
                    className: module3086.title
                }, t("CHANNEL_SETTINGS")), module553.default.createElement("div", {
                    className: module3086.item
                }, module553.default.createElement(module186.Form.Item, {
                    rules: [
                        {
                            required: true,
                            message: t("ADD_CHANNEL_TIP")
                        }
                    ]
                }, module553.default.createElement(module1370, {
                    className: wrapperClassName,
                    name: "receiver.spec.slack.channels",
                    validate: this.validateChannel,
                    title: t("SLACK_CHANNEL"),
                    listTitle: t("ADDED_CHANNELS"),
                    emptyDesc: t("EMPTY_CHANNEL_DESC")
                }))));
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { user, data, onChange, hideFooter, ...rest } = props;
                return module553.default.createElement(module1060, {
                    name: "slack",
                    module: "slack",
                    icon: "slack",
                    data,
                    onChange,
                    hideFooter,
                    user,
                    ...rest
                }, !user && this.renderServiceSetting(), this.renderReceiverSetting());
            }
        }
    ]);
    return r;
})(module553.Component);
export default b;
