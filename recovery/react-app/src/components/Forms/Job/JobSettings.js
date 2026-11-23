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
import module26 from "unpacked/module-26.js";
import module186 from "unpacked/module-186.js";
import Module800 from "components/Inputs/NumberInput";
import { MODULE_KIND_MAP } from "utils/constants";
const v = ((Component_1)=>{
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
                const formRef = this.props.formRef;
                return <module186.Form data={this.formTemplate} ref={formRef}><module186.Columns><module186.Column><module186.Form.Item label={t("MAXIMUM_RETRIES")} desc={t("MAXIMUM_RETRIES_DESC")}><Module800 min={0} name={`${this.prefix}backoffLimit`} integer/></module186.Form.Item><module186.Form.Item label={t("PARALLEL_PODS")} desc={t("PARALLEL_PODS_DESC")}><Module800 min={0} name={`${this.prefix}parallelism`} integer/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("COMPLETE_PODS")} desc={t("COMPLETE_PODS_DESC")}><Module800 min={0} name={`${this.prefix}completions`} integer/></module186.Form.Item><module186.Form.Item label={t("MAXIMUM_DURATION")} desc={t("MAXIMUM_DURATION_DESC")}><Module800 min={0} name={`${this.prefix}activeDeadlineSeconds`} integer/></module186.Form.Item></module186.Column></module186.Columns></module186.Form>;
            }
        },
        {
            key: "prefix",
            get: function() {
                return this.props.prefix || "spec.";
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
export default v;
