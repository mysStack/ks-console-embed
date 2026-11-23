import "unpacked/module-15.js";
import "unpacked/module-5.js";
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
import module186 from "unpacked/module-186.js";
import module74 from "unpacked/module-74.js";
import { observer } from "unpacked/module-239.js";
import Module3282 from "pages/devops/components/Pipeline/PipelineTemplate";
import { Component } from "unpacked/module-553.js";
import module3286 from "unpacked/module-3286.js";
let l;
const E = observer(l = ((Component_1)=>{
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
        e.handleTemplateChange = function(t, a) {
            module74(e.props.formTemplate, "template", t);
            module74(e.props.formTemplate, "params", a);
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formRef, formTemplate, params } = props;
                return <module186.Form data={formTemplate} ref={formRef} className={module3286.pipeline_template_form}><module186.Form.Item name="template" rules={[
                    {
                        required: true,
                        message: t("PIPELINE_VALIDATOR_DESC")
                    }
                ]}><Module3282 name="template" templateLoading={false} handleTemplateChange={this.handleTemplateChange} formTemplate={formTemplate} params={params}/></module186.Form.Item></module186.Form>;
            }
        }
    ]);
    return r;
})(Component)) || l;
export default E;
