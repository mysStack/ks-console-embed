import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-84.js";
import "./module-18.js";
import "./module-87.js";
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
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { PureComponent } from "./module-553.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import Module818 from "./module-818.js";
import module186 from "./module-186.js";
import module201 from "./module-201.js";
import module2596 from "./module-2596.js";
const b = ((PureComponent_1)=>{
    module55(r, PureComponent_1);
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
        e.getDefaultValue = function() {
            const builderTemplate = e.props.builderTemplate;
            if (e.isB2i) {
                return module26(e.containerList[0], "builderImage", "");
            }
            return module26(builderTemplate.find((t)=>module26(t, "spec.codeFramework") === e.languageType), "spec.defaultBaseImage", "");
        };
        e.handleTemplateChange = function(t) {
            const formTemplate = e.props.formTemplate;
            const r = e.containerList.find((e)=>e.builderImage === t) || {};
            Object.keys(r).forEach((e)=>{
                if (![
                    "environment",
                    "docUrl",
                    "description"
                ].includes(e)) {
                    module74(formTemplate, `spec.config.${e}`, r[e]);
                }
            });
            e.props.onEnvironmentChange(r);
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (!(this.props.loading === e.loading || this.props.loading)) {
                    this.handleTemplateChange(this.getDefaultValue());
                }
            }
        },
        {
            key: "getOptions",
            value: function(e) {
                const t = module201("lang") === "en" ? "EN" : "CN";
                return module26(e, "spec.containerInfo", []).map((a)=>({
                        ...a,
                        type: module26(e, "spec.codeFramework", ""),
                        description: module26(e, `metadata.annotations.description${t}`, "") || module26(e, "spec.description", ""),
                        environment: module26(e, "spec.environment"),
                        docUrl: module26(e, 'metadata.annotations["devops.kubesphere.io/s2i-template-url"]', "")
                    }));
            }
        },
        {
            key: "getTemplateOptions",
            value: function() {
                return this.containerList.map((e)=>({
                        icon: e.type,
                        value: e.builderImage,
                        label: e.builderImage,
                        description: e.description
                    }));
            }
        },
        {
            key: "render",
            value: function() {
                if (this.props.loading) {
                    return <module186.Form.Item><module186.Loading className={module2596.loading}/></module186.Form.Item>;
                }
                return <module186.Form.Item rules={[
                    {
                        required: true,
                        message: t("PARAM_REQUIRED")
                    }
                ]} label={t("BUILD_ENVIRONMENT")} className={module2596.form}><Module818 name="spec.config.builderImage" defaultValue={this.getDefaultValue()} options={this.getTemplateOptions()} onChange={this.handleTemplateChange}/></module186.Form.Item>;
            }
        },
        {
            key: "isB2i",
            get: function() {
                return module26(this.props.formTemplate, 'metadata.labels["s2i-type.kubesphere.io"]') === "b2i";
            }
        },
        {
            key: "languageType",
            get: function() {
                return module26(this.props.formTemplate, "metadata.annotations.languageType");
            }
        },
        {
            key: "containerList",
            get: function() {
                const _this = this;
                const builderTemplate = this.props.builderTemplate;
                if (this.isB2i) {
                    return builderTemplate.reduce((acc, item)=>{
                        if (module26(item, 'metadata.labels["binary-type.kubesphere.io"]') === _this.languageType) {
                            return acc.concat(_this.getOptions(item));
                        }
                        return acc;
                    }, []);
                }
                return builderTemplate.reduce((acc, item)=>{
                    if (module26(item, "spec.codeFramework") === _this.languageType) {
                        return acc.concat(_this.getOptions(item));
                    }
                    return acc;
                }, []);
            }
        }
    ]);
    return r;
})(PureComponent);
export default b;
b.defaultProps = {
    builderTemplate: [],
    onEnvironmentChange: function() {}
};
