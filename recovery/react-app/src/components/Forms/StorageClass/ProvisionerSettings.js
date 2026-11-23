import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-29.js";
import "unpacked/module-18.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module189 from "unpacked/module-189.js";
import module63 from "unpacked/module-63.js";
import module186 from "unpacked/module-186.js";
import Module1668 from "components/Inputs/CardSelect";
import { ACCESS_MODES, MODULE_KIND_MAP, PROVISIONERS } from "utils/constants";
import { hrefControl } from "utils/index";
import module3394 from "unpacked/module-3394.js";
const S = ((Component_1)=>{
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
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.provisionersOptions = [].concat(module61(PROVISIONERS.map((e)=>module189(e, [
                "description"
            ]))), [
            {
                label: t("CUSTOM"),
                value: "",
                icon: "hammer"
            }
        ]);
        n.getDefaultModes = function(e) {
            const a = PROVISIONERS.find((t)=>t.value === e) || {};
            return (module63(a.access_modes) ? Object.keys(ACCESS_MODES) : a.access_modes).map((e)=>({
                    label: t(e),
                    value: e
                })).map((e)=>e.value);
        };
        n.changeProvisioner = function(provisioner) {
            n.setState({
                provisioner
            }, n.updateParams);
        };
        if (!n.formTemplate.provisioner) {
            n.formTemplate.provisioner = PROVISIONERS[0].value;
            module74(n.formTemplate, "metadata.annotations['kubesphere.io/provisioner']", n.formTemplate.provisioner);
        }
        if (n.formTemplate.provisioner) {
            const u = n.getDefaultModes(n.formTemplate.provisioner);
            module74(n.formTemplate, "metadata.annotations['storageclass.kubesphere.io/supported-access-modes']", u);
        }
        n.state = {
            provisioner: n.formTemplate.provisioner
        };
        return n;
    }
    module37(r, [
        {
            key: "updateParams",
            value: function() {
                const e = this.getDefaultModes(this.state.provisioner);
                this.formTemplate.provisioner = this.state.provisioner;
                this.formTemplate.metadata.annotations["storageclass.kubesphere.io/supported-access-modes"] = e;
                this.formTemplate.parameters = {};
            }
        },
        {
            key: "render",
            value: function() {
                const formRef = this.props.formRef;
                const provisioner = this.state.provisioner;
                const description = (PROVISIONERS.find((e)=>e.value === provisioner) || {}).description;
                const n = t(description);
                return <module186.Form data={this.formTemplate} ref={formRef}><module186.Form.Item label=<div className={module3394.provisioner}><h3>{t("CHOOSE_STORAGE_SYSTEM_TIP")}</h3><p>{t("PROVISIONER_DEPENDENCE_DESC")}</p></div>><Module1668 onChange={this.changeProvisioner} name="metadata.annotations['kubesphere.io/provisioner']" options={this.provisionersOptions}/></module186.Form.Item><p className={module3394.description} dangerouslySetInnerHTML={{
                    __html: hrefControl(n)
                }}/></module186.Form>;
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
export default S;
