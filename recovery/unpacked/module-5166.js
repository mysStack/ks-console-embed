import "./module-15.js";
import "./module-5.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import { inject, observer } from "./module-239.js";
import { renderRoutes } from "./module-317.js";
import module793 from "./module-793.js";
let o;
const v = inject("rootStore", "type")(o = observer(o = ((e)=>{
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
        e.handleTabChange = function(t) {
            e.props.rootStore.routing.push(`/settings/notification-subscription/${t}`);
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const route = this.props.route;
                return module553.default.createElement("div", null, module553.default.createElement(module793, {
                    module: "notification",
                    title: t("NOTIFICATION_SUBSCRIPTION"),
                    description: t("NOTIFICATION_SUBSCRIPTION_DESC"),
                    icon: function() {
                        return module553.default.createElement("img", {
                            style: {
                                width: "48px",
                                height: "48px"
                            },
                            src: "/assets/receiver.svg"
                        });
                    },
                    tabs: this.tabs
                }), module553.default.createElement("div", null, renderRoutes(route.routes)));
            }
        },
        {
            key: "tabs",
            get: function() {
                return {
                    value: this.props.type,
                    onChange: this.handleTabChange,
                    options: [
                        {
                            value: "subscription-mail",
                            label: t("EMAIL")
                        },
                        {
                            value: "subscription-feishu",
                            label: t("FEISHU"),
                            disabled: true
                        },
                        {
                            value: "subscription-dingtalk",
                            label: t("DINGTALK"),
                            disabled: true
                        },
                        {
                            value: "subscription-wecom",
                            label: t("WECOM"),
                            disabled: true
                        },
                        {
                            value: "subscription-slack",
                            label: t("SLACK"),
                            disabled: true
                        },
                        {
                            value: "subscription-webhook",
                            label: t("WEBHOOK"),
                            disabled: true
                        }
                    ]
                };
            }
        }
    ]);
    return r;
})(module553.Component)) || o) || o;
export default v;
