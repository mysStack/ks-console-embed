import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { inject } from "unpacked/module-239.js";
import Module793 from "unpacked/module-793.js";
import module937 from "unpacked/module-937.js";
let o;
const g = {
    "silent-policy": {
        module: "silent-policy",
        title: t("SILENCE_POLICY_PL"),
        description: t("SILENCE_POLICY_DESC"),
        icon: "volume-off-duotone"
    },
    "notification-language": {
        module: "notification-language",
        title: t("NOTIFICATION_LANGUAGE"),
        description: t("NOTIFICATION_LANGUAGE_DESC"),
        icon: "earth-fill"
    }
};
const y = inject("rootStore")(o = module937([
    "volume-off-duotone",
    "earth-fill"
])(o = ((Component_1)=>{
    module55(r, Component_1);
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
                return <Module793 {...g[this.props.type]} tabs={this.tabs}/>;
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
                            value: "silent-policy",
                            label: t("SILENCE_POLICY_PL")
                        },
                        {
                            value: "notification-language",
                            label: t("NOTIFICATION_LANGUAGE")
                        }
                    ]
                };
            }
        }
    ]);
    return r;
})(Component)) || o) || o;
export default y;
