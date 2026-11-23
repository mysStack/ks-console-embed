import "./module-15.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import Module818 from "./module-818.js";
const p = ((Component_1)=>{
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "getImagePullPolicyOptions",
            value: function() {
                return [
                    {
                        icon: "timed-task",
                        label: t("IMAGE_PULL_POLICY_ALWAYS"),
                        value: "Always",
                        description: t("IMAGE_PULL_POLICY_ALWAYS_DESC")
                    },
                    {
                        icon: "timed-task",
                        label: t("IMAGE_PULL_POLICY_IFNOTPRESENT"),
                        value: "IfNotPresent",
                        description: t("IMAGE_PULL_POLICY_IFNOTPRESENT_DESC")
                    },
                    {
                        icon: "timed-task",
                        label: t("IMAGE_PULL_POLICY_NEVER"),
                        value: "Never",
                        description: t("IMAGE_PULL_POLICY_NEVER_DESC")
                    }
                ];
            }
        },
        {
            key: "render",
            value: function() {
                return <module186.Form.Item><Module818 name={`${this.prefix}imagePullPolicy`} defaultValue="IfNotPresent" options={this.getImagePullPolicyOptions()}/></module186.Form.Item>;
            }
        },
        {
            key: "prefix",
            get: function() {
                const prefix = this.props.prefix;
                if (prefix) {
                    return `${prefix}.`;
                }
                return "";
            }
        }
    ]);
    return r;
})(Component);
export default p;
p.defaultProps = {
    prefix: ""
};
