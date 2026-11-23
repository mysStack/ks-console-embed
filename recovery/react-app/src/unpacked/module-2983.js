import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module242 from "./module-242.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import Module843 from "components/Inputs/PropertiesInput";
import module2984 from "./module-2984.js";
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
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.handleAccessModeChange = function(mode) {
            if (mode === "LoadBalancer") {
                let a = module26(t.formTemplate, "spec.service.annotations", {});
                a = {
                    ...globals.config.loadBalancerDefaultAnnotations,
                    ...a
                };
                module74(t.formTemplate, "spec.service.annotations", a);
            } else {
                Object.keys(globals.config.loadBalancerDefaultAnnotations).forEach((e)=>{
                    module242(t.formTemplate, `spec.service.annotations["${e}"]`);
                });
            }
            t.setState({
                mode
            });
        };
        t.optionRenderer = function(e) {
            return <div className={module2984.option}><div>{e.label}</div><p>{e.desc}</p></div>;
        };
        t.state = {
            mode: module26(t.formTemplate, "spec.service.type", "ClusterIP")
        };
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const mode = this.state.mode;
                return <><module186.Form.Item label={t("ACCESS_MODE")}><module186.Select name="spec.service.type" options={this.accessModes} onChange={this.handleAccessModeChange} optionRenderer={this.optionRenderer} placeholder=" "/></module186.Form.Item>{mode === "LoadBalancer" && <module186.Form.Item label={t("ANNOTATION_PL")}><Module843 name="spec.service.annotations" hiddenKeys={globals.config.preservedAnnotations} addText={t("ADD")}/></module186.Form.Item>}</>;
            }
        },
        {
            key: "formTemplate",
            get: function() {
                return this.props.formTemplate;
            }
        },
        {
            key: "accessModes",
            get: function() {
                return [
                    {
                        label: "NodePort",
                        desc: t("ACCESS_NODEPORT_TIP"),
                        value: "NodePort"
                    },
                    {
                        label: "LoadBalancer",
                        desc: t("ACCESS_LOADBALANCER_TIP"),
                        value: "LoadBalancer"
                    }
                ];
            }
        }
    ]);
    return r;
})(Component);
export default b;
