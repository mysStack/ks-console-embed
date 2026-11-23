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
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module186 from "./module-186.js";
import Module818 from "./module-818.js";
import { updateLabels } from "./module-52.js";
import module435 from "./module-435.js";
import { MODULE_KIND_MAP } from "./module-72.js";
import module2594 from "./module-2594.js";
const b = ((Component_1)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.getValue = function() {
            const formTemplate = e.props.formTemplate;
            if (module26(formTemplate, "StatefulSet")) {
                return "stateful";
            }
            return "stateless";
        };
        e.handleChange = function(t) {
            e.setTemplate(t);
            e.forceUpdate();
        };
        e.setTemplate = function(t) {
            const formTemplate = e.props.formTemplate;
            if (t !== (formTemplate.Deployment ? "stateless" : "stateful")) {
                const r = t === "stateless" ? "deployments" : "statefulsets";
                const n = t === "stateless" ? "statefulsets" : "deployments";
                const l = MODULE_KIND_MAP[r];
                const u = MODULE_KIND_MAP[n];
                e.props.store.setModule(r);
                e.props.updateModule(r);
                const o = module26(formTemplate[u], "metadata");
                const i = module26(formTemplate[u], "metadata.labels");
                module74(formTemplate, l, module435[r]({
                    namespace: e.namespace
                }));
                if (o) {
                    module74(formTemplate, `${l}.metadata`, o);
                }
                updateLabels(formTemplate, r, i);
                delete formTemplate[u];
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const options = [
                    {
                        icon: "backup",
                        value: "stateful",
                        label: t("STATEFUL_SERVICE"),
                        description: t("STATEFUL_SERVICE_DESC")
                    },
                    {
                        icon: "backup",
                        value: "stateless",
                        label: t("STATELESS_SERVICE"),
                        description: t("STATELESS_SERVICE_DESC")
                    }
                ];
                return <module186.Form.Item className={module2594.formItem} label={t("SERVICE_TYPE")}><Module818 value={this.getValue()} options={options} onChange={this.handleChange}/></module186.Form.Item>;
            }
        },
        {
            key: "namespace",
            get: function() {
                const formTemplate = this.props.formTemplate;
                return module26(formTemplate, "Service.metadata.namespace", "");
            }
        }
    ]);
    return r;
})(Component);
export default b;
b.propTypes = {
    formTemplate: module1.object
};
