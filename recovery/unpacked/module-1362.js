import "./module-15.js";
import "./module-5.js";
import "./module-187.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-137.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module96 from "./module-96.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import Module2967 from "./module-2967.js";
const m = ((Component_1)=>{
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
    function r(...o) {
        let e;
        module36(this, r);
        e = a.call(this, ...o);
        e.addressValidator = function(e, a, r) {
            if (a.split(",").every((e)=>{
                const t = e.match(/(.*):(.*)$/) || [];
                const [, n = "", u] = module96(t, 3);
                return n && (u === undefined ? "" : u);
            })) {
                return r();
            }
            return r({
                message: t("INVALID_SERVICE_ADDRESS")
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                return <div><module186.Form.Item label={t("TOPIC")}><module186.Input name="topic" autoComplete="nope" defaultValue={`{{ .cluster }}-${this.props.component}-{{ .kubernetes.namespace_name }}`}/></module186.Form.Item><module186.Form.Item label={t("SERVICE_ADDRESS")} rules={[
                    {
                        required: true,
                        message: t("ENTER_SERVICE_ADDRESS")
                    },
                    {
                        validator: this.addressValidator
                    }
                ]}><Module2967 name="bootstrap_servers"/></module186.Form.Item></div>;
            }
        }
    ]);
    return r;
})(Component);
export default m;
