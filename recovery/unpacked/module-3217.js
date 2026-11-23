import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-10.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import { PIPELINE_PARAMS_TYPES } from "./module-72.js";
import module1719 from "./module-1719.js";
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
            key: "renderFormItems",
            value: function(e) {
                let t = null;
                switch(e){
                    case "string":
                        t = this.renderStringFormItems();
                        break;
                    case "text":
                        t = this.renderTextFormItems();
                        break;
                    case "boolean":
                        t = this.renderBooleanFormItems();
                        break;
                    case "choice":
                        t = this.renderChoiceFormItems();
                        break;
                    case "password":
                        t = this.renderPasswordFormItems();
                }
                return t;
            }
        },
        {
            key: "renderStringFormItems",
            value: function() {
                const value = this.props.value;
                return <div><module186.Columns><module186.Column><module186.Form.Item label={t("NAME")} rules={[
                    {
                        required: true,
                        message: t("PARAMETER_NAME_EMPTY_DESC")
                    }
                ]}><module186.Input name={`${this.props.prefix}.name`} defaultValue={value.name}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("DEFAULT_VALUE")} desc={t("PIPELINE_PARAM_DEFAULT_DESC")}><module186.Input name={`${this.props.prefix}.default_value`} defaultValue={value.default_value || ""}/></module186.Form.Item></module186.Column></module186.Columns><module186.Form.Item label={t("DESCRIPTION")} desc={t("PARAMETER_DESCRIPTION_DESC")}><module186.TextArea className="max-width-full" name={`${this.props.prefix}.description`} defaultValue={value.description}/></module186.Form.Item></div>;
            }
        },
        {
            key: "renderTextFormItems",
            value: function() {
                const value = this.props.value;
                return <div><module186.Form.Item label={t("NAME")} rules={[
                    {
                        required: true,
                        message: t("PARAMETER_NAME_EMPTY_DESC")
                    }
                ]}><module186.Input name={`${this.props.prefix}.name`} defaultValue={value.name}/></module186.Form.Item><module186.Form.Item label={t("DEFAULT_VALUE")}><module186.TextArea className="max-width-full" name={`${this.props.prefix}.default_value`} defaultValue={value.default_value || ""}/></module186.Form.Item><module186.Form.Item label={t("DESCRIPTION")} desc={t("PARAMETER_DESCRIPTION_DESC")}><module186.TextArea className="max-width-full" name={`${this.props.prefix}.description`} defaultValue={value.description}/></module186.Form.Item></div>;
            }
        },
        {
            key: "renderBooleanFormItems",
            value: function() {
                const value = this.props.value;
                return <div><module186.Columns><module186.Column><module186.Form.Item label={t("NAME")} rules={[
                    {
                        required: true,
                        message: t("PARAMETER_NAME_EMPTY_DESC")
                    }
                ]}><module186.Input name={`${this.props.prefix}.name`} defaultValue={value.name}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("DEFAULT_VALUE")}><module186.RadioGroup name={`${this.props.prefix}.default_value`} defaultValue={JSON.parse(value.default_value || "true")}><module186.Radio value="true">True</module186.Radio><module186.Radio value="false">False</module186.Radio></module186.RadioGroup></module186.Form.Item></module186.Column></module186.Columns><module186.Form.Item label={t("DESCRIPTION")} desc={t("PARAMETER_DESCRIPTION_DESC")}><module186.TextArea className="max-width-full" name={`${this.props.prefix}.description`} defaultValue={value.description}/></module186.Form.Item></div>;
            }
        },
        {
            key: "renderChoiceFormItems",
            value: function() {
                const value = this.props.value;
                return <div><module186.Columns><module186.Column><module186.Form.Item label={t("NAME")} rules={[
                    {
                        required: true,
                        message: t("PARAMETER_NAME_EMPTY_DESC")
                    }
                ]}><module186.Input name={`${this.props.prefix}.name`} defaultValue={value.name}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("OPTIONS")} desc={t("CHOICE_PARAM_OPTION_DESC")}><module186.TextArea className="max-width-full" name={`${this.props.prefix}.default_value`} defaultValue={value.choice}/></module186.Form.Item></module186.Column></module186.Columns><module186.Form.Item label={t("DESCRIPTION")} desc={t("PARAMETER_DESCRIPTION_DESC")}><module186.TextArea className="max-width-full" name={`${this.props.prefix}.description`} defaultValue={value.description}/></module186.Form.Item></div>;
            }
        },
        {
            key: "renderPasswordFormItems",
            value: function() {
                const value = this.props.value;
                return <div><module186.Columns><module186.Column><module186.Form.Item label={t("NAME")} rules={[
                    {
                        required: true,
                        message: t("PARAM_REQUIRED")
                    }
                ]}><module186.Input name={`${this.props.prefix}.name`} defaultValue={value.name}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("PASSWORD")}><module186.Input name={`${this.props.prefix}.default_value`} type="password" defaultValue={value.default_value || ""}/></module186.Form.Item></module186.Column></module186.Columns><module186.Form.Item label={t("DESCRIPTION")} desc={t("PARAMETER_DESCRIPTION_DESC")}><module186.TextArea name={`${this.props.prefix}.description`} defaultValue={value.description}/></module186.Form.Item></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { value, onDelete } = props;
                return <div className={module1719.itemWrapper}><div className={module1719.itemTitle}><p><strong>{PIPELINE_PARAMS_TYPES[value.type] === "PARAMS_TEXT" ? t("PARAMS_TEXT_TCAP") : t(PIPELINE_PARAMS_TYPES[value.type])}</strong></p><module186.Button className={module1719.delete} type="flat" icon="trash" onClick={onDelete}/></div>{value.type && this.renderFormItems(value.type)}</div>;
            }
        }
    ]);
    return r;
})(Component);
export default v;
v.propTypes = {
    value: module1.object,
    onChange: module1.func,
    onDelete: module1.func
};
v.defaultProps = {
    value: {},
    onChange: function() {},
    onDelete: function() {}
};
