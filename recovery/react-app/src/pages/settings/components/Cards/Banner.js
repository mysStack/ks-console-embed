import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { PureComponent } from "unpacked/module-553.js";
import { inject } from "unpacked/module-239.js";
import Module793 from "unpacked/module-793.js";
let u;
const p = inject("rootStore")(u = ((PureComponent_1)=>{
    module55(r, PureComponent_1);
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
            e.props.rootStore.routing.push(`/settings/${t}`);
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                return <Module793 module="notification" title={t("NOTIFICATION_CHANNELS")} description={t("NOTIFICATION_CHANNELS_DESC")} tabs={this.tabs}/>;
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
                            value: "mail",
                            label: t("EMAIL")
                        },
                        {
                            value: "feishu",
                            label: t("FEISHU")
                        },
                        {
                            value: "dingtalk",
                            label: t("DINGTALK")
                        },
                        {
                            value: "wecom",
                            label: t("WECOM")
                        },
                        {
                            value: "slack",
                            label: t("SLACK")
                        },
                        {
                            value: "webhook",
                            label: t("WEBHOOK")
                        }
                    ]
                };
            }
        }
    ]);
    return r;
})(PureComponent)) || u;
export default p;
