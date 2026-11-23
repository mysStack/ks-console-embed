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
import module74 from "./module-74.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import Module842 from "./module-842.js";
import Module852 from "./module-852.js";
import { safeParseJSON } from "./module-52.js";
import { getValue, getValueObj } from "./module-895.js";
import Module3146 from "./module-3146.js";
import module3148 from "./module-3148.js";
let l;
const _ = observer(l = ((Component_1)=>{
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
        e.state = {
            valuesYaml: "",
            valuesJSON: {},
            valuesSchema: undefined,
            loadingFile: true,
            isCodeMode: false
        };
        e.updateState = function() {
            const files = e.props.fileStore.files;
            if (files) {
                e.setState({
                    valuesYaml: files["values.yaml"],
                    valuesJSON: getValueObj(files["values.yaml"]),
                    valuesSchema: safeParseJSON(files["values.schema.json"]),
                    loadingFile: false
                });
            } else {
                e.setState({
                    loadingFile: false
                });
            }
        };
        e.updateFormData = function() {
            const formData = e.props.formData;
            const e_state = e.state;
            const { isCodeMode, valuesYaml, valuesJSON, valuesSchema } = e_state;
            module74(formData, "conf", getValue(isCodeMode || !valuesSchema ? getValueObj(valuesYaml) : valuesJSON));
        };
        e.handleModeChange = function() {
            const isCodeMode = e.state.isCodeMode;
            e.setState({
                isCodeMode: !isCodeMode
            });
        };
        e.handleValueChange = function(valueJSON) {
            e.setState({
                valueJSON
            });
        };
        e.handleYamlChange = function(valuesYaml) {
            e.setState({
                valuesYaml
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                this.updateState();
                if (!this.props.fileStore.files.packageFiles) {
                    this.dispather = module14.reaction(function() {
                        return _this.props.fileStore.files;
                    }, this.updateState);
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.dispather) {
                    this.dispather();
                }
            }
        },
        {
            key: "validate",
            value: function(e) {
                this.updateFormData();
                if (e) {
                    e();
                }
            }
        },
        {
            key: "renderYamlEdit",
            value: function() {
                const valuesYaml = this.state.valuesYaml;
                return <div className={module3148.codeWrapper}><Module842 mode="yaml" value={valuesYaml} onChange={this.handleYamlChange}/></div>;
            }
        },
        {
            key: "renderSchemaForm",
            value: function() {
                const state = this.state;
                const { valuesJSON, valuesSchema } = state;
                return <div className={module3148.schemaWrapper}><Module3146 schema={valuesSchema} value={valuesJSON} onChange={this.handleValueChange}/></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { valuesSchema, loadingFile, isCodeMode } = state;
                const l = isCodeMode || !valuesSchema;
                if (loadingFile) {
                    return <module186.Loading className={module3148.loading}/>;
                }
                return <div className={module3148.wrapper}><div className={module3148.title}><div>{t("APP_SETTINGS")}</div>{valuesSchema && <Module852 className={module3148.switch} text={t("EDIT_YAML")} onChange={this.handleModeChange} checked={isCodeMode}/>}</div>{valuesSchema && <module186.Alert className="margin-b12" type="info" message={t("HELM_APP_SCHEMA_FORM_TIP")}/>}{l ? this.renderYamlEdit() : this.renderSchemaForm()}</div>;
            }
        }
    ]);
    return r;
})(Component)) || l;
export default _;
