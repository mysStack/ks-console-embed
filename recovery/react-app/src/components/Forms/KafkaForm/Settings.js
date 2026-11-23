import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-187.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-137.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module96 from "utils/babel-helpers/slicedToArray";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import Module2967 from "components/Forms/KafkaForm/Settings/BrokersInput";
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
