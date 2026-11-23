import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-6.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module14 from "unpacked/module-14.js";
import module186 from "unpacked/module-186.js";
import Module2693 from "components/Forms/Cluster/ServiceComponents/ComponentSelect";
import module2698 from "unpacked/module-2698.js";
import Module1179 from "components/Forms/Cluster/Title";
const y = ((Component_1)=>{
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
    function r(e) {
        let t;
        module36(this, r);
        (t = a.call(this, e)).init();
        return t;
    }
    module37(r, [
        {
            key: "init",
            value: function() {
                const formTemplate = this.props.formTemplate;
                const { template, components = [] } = module14.toJS(module26(this.props.store.kubekey, "parameters.kubesphere", {}));
                module74(formTemplate, "spec.addons[1]", template);
                const l = module26(formTemplate, "spec.addons[1].sources.chart.values", []);
                components.forEach((e)=>{
                    if (e.parameters) {
                        e.parameters.forEach((t)=>{
                            if ("default" in t) {
                                l.push(`${e.name}.${t.name}=${t.default}`);
                            }
                        });
                    }
                });
                module74(formTemplate, "spec.addons[1].sources.chart.values", l);
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formRef, formTemplate } = props;
                return <div className={module2698.wrapper}><Module1179 title={t("SYSTEM_COMPONENT_PL")} description={t("CLUSTER_COMPONENTS_DESC")}/><module186.Form className={module2698.form} data={formTemplate} ref={formRef}><module186.Form.Item><Module2693 name="spec.addons[1].sources.chart.values" components={module26(this.props.store.kubekey, "parameters.kubesphere.components", [])}/></module186.Form.Item></module186.Form></div>;
            }
        }
    ]);
    return r;
})(Component);
export default y;
