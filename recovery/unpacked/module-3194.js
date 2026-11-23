import "./module-15.js";
import "./module-5.js";
import "./module-16.js";
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
import module240 from "./module-240.js";
import { safeParseJSON } from "./module-52.js";
import { getValueObj } from "./module-895.js";
import { RadonDBAppId } from "./module-817.js";
import Module3195 from "./module-3195.js";
import module3198 from "./module-3198.js";
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.state = {
            valuesJSON: {},
            valuesSchema: undefined,
            loadingFile: true
        };
        e.validatorResult = {
            errorCount: 0
        };
        e.updateState = function() {
            const files = e.props.fileStore.files;
            if (e.props.fileStore.isRadonDB) {
                e.setState({
                    valuesSchema: files["values.schema"],
                    valuesJSON: files["values.json"],
                    loadingFile: false
                });
            } else if (files && files["values.yaml"]) {
                e.setState({
                    valuesJSON: getValueObj(files["values.yaml"]),
                    valuesSchema: safeParseJSON(files["values.schema.json"]),
                    loadingFile: false
                });
            }
        };
        e.updateFormData = function() {
            const formData = e.props.formData;
            const valuesJSON = e.state.valuesJSON;
            module74(formData, "conf", valuesJSON);
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
                if (!(this.validatorResult.errorCount > 0)) {
                    const a = this.props.formData;
                    const r = this.state.valuesJSON;
                    const { name, namespace, app_id } = a;
                    const u = r.version;
                    let content = "";
                    if (app_id === RadonDBAppId.MySQL && u === "5.7" && (namespace.length > 16 || name.length > 14)) {
                        if (namespace.length > 16) {
                            content = t("PROJECT_NAME_EXCEEDS_LIMIT");
                            return void module240.warning({
                                content
                            });
                        }
                        if (name.length > 14) {
                            content = t("APP_NAME_EXCEED_LIMIT");
                            return void module240.warning({
                                content
                            });
                        }
                    }
                    this.updateFormData();
                    if (e) {
                        e();
                    }
                }
            }
        },
        {
            key: "renderSchemaForm",
            value: function() {
                const state = this.state;
                const { valuesJSON, valuesSchema } = state;
                return <div className={module3198.schemaWrapper}><Module3195 schema={valuesSchema} value={valuesJSON} validatorResult={this.validatorResult} formData={this.props.formData}/></div>;
            }
        },
        {
            key: "render",
            value: function() {
                if (this.state.loadingFile) {
                    return <module186.Loading className={module3198.loading}/>;
                }
                return <div className={module3198.wrapper}><div className={module3198.title}><div>{t("APP_SETTINGS")}</div></div>{this.renderSchemaForm()}</div>;
            }
        }
    ]);
    return r;
})(Component)) || l;
export default _;
