import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import Module830 from "components/Inputs/ArrayInput";
import Module2283 from "unpacked/module-2283.js";
import module2284 from "unpacked/module-2284.js";
const h = ((Component_1)=>{
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
            key: "render",
            value: function() {
                return <div className="margin-b12"><div className={module2284.title}>{t("CAPABILITIES")}</div><div className={module2284.content}><module186.Form.Item label={t("ADD")}><Module830 name={`${this.prefix}.capabilities.add`}><Module2283/></Module830></module186.Form.Item><module186.Form.Item label={t("DROP")}><Module830 name={`${this.prefix}.capabilities.drop`}><Module2283/></Module830></module186.Form.Item></div></div>;
            }
        },
        {
            key: "prefix",
            get: function() {
                return this.props.prefix || "securityContext";
            }
        }
    ]);
    return r;
})(Component);
export default h;
