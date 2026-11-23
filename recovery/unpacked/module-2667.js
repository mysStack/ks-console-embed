import "./module-15.js";
import "./module-5.js";
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
import module1 from "./module-1.js";
import module136 from "./module-136.js";
import module74 from "./module-74.js";
import module186 from "./module-186.js";
import { IMPORT_CLUSTER, NEW_CLUSTER } from "./module-1618.js";
import Module1179 from "./module-1179.js";
import { IMPORT_CLUSTER_SPEC, NEW_CLUSTER_SPEC } from "./module-1334.js";
import module2669 from "./module-2669.js";
const g = ((Component_1)=>{
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
        e.STEPS = {
            new: NEW_CLUSTER,
            import: IMPORT_CLUSTER
        };
        e.SPECS = {
            new: NEW_CLUSTER_SPEC,
            import: IMPORT_CLUSTER_SPEC
        };
        e.handleChange = function(t) {
            e.context.setSteps(e.STEPS[t]);
            const a = module136(e.SPECS[t]);
            module74(a, "metadata.annotations['kubesphere.io/way-to-add']", t);
            e.context.setFormData(a);
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.props.store.kubekey.fetchParameters();
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formRef, formTemplate } = props;
                return <div className={module2669.wrapper}><Module1179 title={t("SELECT_ADD_CLUSTER_METHOD")} description={t("SELECT_ADD_CLUSTER_METHOD_DESC")}/><module186.Form data={formTemplate} ref={formRef}><module186.Form.Item className={module2669.cards}><module186.RadioGroup name="metadata.annotations['kubesphere.io/way-to-add']" onChange={this.handleChange} defaultValue="new"><module186.Radio value="new"><module186.Icon name="kubernetes" size={48}/><span>{t("NEW_CLUSTER")}</span></module186.Radio><module186.Radio value="import"><module186.Icon name="hammer" size={48}/><span>{t("IMPORT_CLUSTER")}</span></module186.Radio></module186.RadioGroup></module186.Form.Item></module186.Form></div>;
            }
        }
    ]);
    return r;
})(Component);
export default g;
g.contextTypes = {
    setSteps: module1.func,
    setFormData: module1.func
};
