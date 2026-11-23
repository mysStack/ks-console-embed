import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-98.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
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
import { observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module63 from "unpacked/module-63.js";
import module136 from "unpacked/module-136.js";
import module186 from "unpacked/module-186.js";
import Module1668 from "components/Inputs/CardSelect";
import { MODULE_KIND_MAP, PATTERN_NAME } from "utils/constants";
import module1669 from "unpacked/module-1669.js";
import module2866 from "unpacked/module-2866.js";
let l;
const O = observer(l = ((Component_1)=>{
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
        n.templateSettingsOpts = Object.entries(n.templateSettings).map((e)=>{
            const a = module96(e, 2);
            const value = a[0];
            const n = a[1];
            return {
                value,
                image: n.logo,
                label: n.name === "Custom" ? t("CUSTOM") : n.name,
                description: n.description
            };
        });
        n.nameValidator = function(e, a, r) {
            if (!a) {
                return r();
            }
            n.props.store.checkName({
                name: a,
                namespace: n.props.namespace,
                cluster: n.props.cluster
            }).then((a)=>{
                if (a.exist) {
                    return r({
                        message: t("NAME_EXIST_DESC"),
                        field: e.field
                    });
                }
                r();
            });
        };
        n.handleTemplateChange = function(e) {
            module74(n.formTemplate, "spec", module26(n.templateSettings, `${e}.settings`, {}));
            n.forceUpdate();
        };
        if (module63(n.formTemplate.spec)) {
            const l = Object.keys(n.templateSettings)[0];
            const c = module136(n.templateSettings[l].settings);
            module74(n.formTemplate, "spec", c);
        }
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const formRef = this.props.formRef;
                return <module186.Form data={this.formTemplate} ref={formRef}><module186.Columns><module186.Column><module186.Form.Item label={t("NAME")} desc={t("NAME_DESC")} rules={[
                    {
                        required: true,
                        message: t("NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_NAME,
                        message: t("INVALID_NAME_DESC")
                    },
                    {
                        validator: this.nameValidator
                    }
                ]}><module186.Input name="metadata.name" autoFocus maxLength={63}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name="metadata.annotations['kubesphere.io/description']" maxLength={256}/></module186.Form.Item></module186.Column></module186.Columns><module186.Form.Item label=<div className={module2866.templateLabel}><h3>{t("TEMPLATE")}</h3><p>{t("CUSTOM_MONITORING_TEMPLATE_DESC")}</p></div>><Module1668 name="spec.title" className={module2866.templateList} options={this.templateSettingsOpts} onChange={this.handleTemplateChange}/></module186.Form.Item></module186.Form>;
            }
        },
        {
            key: "templateSettings",
            get: function() {
                return module136(module1669);
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
})(Component)) || l;
export default O;
