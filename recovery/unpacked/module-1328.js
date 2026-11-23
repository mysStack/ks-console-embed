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
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import { MODULE_KIND_MAP } from "./module-72.js";
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
            key: "componentDidMount",
            value: function() {
                if (module26(this.formTemplate, "spec.type") !== "ExternalName") {
                    module74(this.formTemplate, "spec", {
                        type: "ExternalName"
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const formRef = this.props.formRef;
                return <module186.Form data={this.formTemplate} ref={formRef}><module186.Form.Item label={t("EXTERNAL_SERVICE_ADDRESS")} desc={t("EXTERNAL_SERVICE_ADDRESS_DESC")} rules={[
                    {
                        required: true,
                        message: t("EXTERNAL_SERVICE_ADDRESS_EMPTY_DESC")
                    }
                ]}><module186.Input name="spec.externalName" placeholder="foo.bar.example.com"/></module186.Form.Item></module186.Form>;
            }
        },
        {
            key: "formTemplate",
            get: function() {
                const props = this.props;
                const { formTemplate, module } = props;
                return module26(formTemplate, MODULE_KIND_MAP[module], formTemplate);
            }
        }
    ]);
    return r;
})(Component);
export default h;
