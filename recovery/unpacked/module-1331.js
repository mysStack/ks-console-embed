import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-18.js";
import "./module-16.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-137.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import module31 from "./module-31.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import Module951 from "./module-951.js";
import Module1608 from "./module-1608.js";
import Module1610 from "./module-1610.js";
import module853 from "./module-853.js";
import module456 from "./module-456.js";
import module934 from "./module-934.js";
import module1332 from "./module-1332.js";
import { PATTERN_IMAGE_NAME } from "./module-72.js";
import { getDisplayName, getDocsUrl, htmlLinkControl, isEdgeWizePage } from "./module-52.js";
import Module2598 from "./module-2598.js";
import module2600 from "./module-2600.js";
const R = ((Component_1)=>{
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
        t.fetchData = async function e() {
            let a;
            let basicSecretOptions;
            a = await t.secretStore.fetchListByK8s({
                namespace: t.namespace,
                cluster: t.props.cluster,
                fieldSelector: "type=kubernetes.io/basic-auth"
            });
            basicSecretOptions = a.map((e)=>({
                    label: getDisplayName(e),
                    value: e.name,
                    type: "basic-auth"
                }));
            t.setState({
                basicSecretOptions
            });
        };
        t.fetchImageSecrets = async function e() {
            let a;
            let imageSecretOptions;
            a = await t.secretStore.fetchListByK8s({
                namespace: t.namespace,
                cluster: t.props.cluster,
                fieldSelector: "type=kubernetes.io/dockerconfigjson"
            });
            imageSecretOptions = a.map((e)=>{
                const t = module26(e, 'data[".dockerconfigjson"].auths', {});
                const repoUrl = Object.keys(t)[0] || "";
                return {
                    label: getDisplayName(e),
                    value: e.name,
                    repoUrl,
                    type: "dockerconfigjson"
                };
            });
            t.setState({
                imageSecretOptions
            });
        };
        t.getTemplateList = async function e() {
            let a;
            t.setState({
                isGetTemplateListLoading: true
            });
            a = await t.builderStore.getBuilderTemplate({
                cluster: t.props.cluster
            });
            t.setState({
                builderTemplateLists: module26(a, "items", []),
                isGetTemplateListLoading: false
            });
        };
        t.handleImageSecretChange = function(e, a) {
            const formTemplate = t.props.formTemplate;
            const n = module26(a, "[0]repoUrl", "");
            module74(formTemplate, `${t.prefix}metadata.annotations["kubesphere.io/repoUrl"]`, n);
        };
        t.handleImageTemplateChange = function({ environment, docUrl }) {
            const n = module26(globals, "user.lang", "zh");
            const environment_1 = (environment || []).map((e)=>{
                e.label = e.key;
                const t = (e.description || "").split(". ");
                const a = n === "zh" ? module26(t, "1", e.description) : module26(t, "0", e.description);
                e.label = `${e.key}  (${a})`;
                e.value = e.key;
                return e;
            });
            t.setState({
                environment: environment_1,
                docUrl
            });
        };
        const n = isEdgeWizePage();
        t.secretStore = n ? new module934 : new module853;
        t.builderStore = n ? new module1332 : new module456;
        t.state = {
            isGetTemplateListLoading: true,
            environment: [],
            basicSecretOptions: [],
            imageSecretOptions: [],
            docUrl: ""
        };
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
                this.fetchImageSecrets();
                this.getTemplateList();
            }
        },
        {
            key: "renderAdvancedSetting",
            value: function() {
                const e = t.html("S2I_ENVIRONMENT_DESC", {
                    link: this.state.docUrl || getDocsUrl("s2i_template")
                });
                return <><module186.Form.Item label={t("TRIGGER_TOKEN")} desc={t("TRIGGER_TOKEN_DESC")} rules={[
                    {
                        pattern: /^[a-zA-Z0-9]+$/,
                        message: `${t("INVALID_TRIGGER_TOKEN_DESC")}`
                    }
                ]}><module186.Input name={`${this.prefix}spec.config.secretCode`} defaultValue=""/></module186.Form.Item><module186.Alert className={module2600.environment_info} message={htmlLinkControl(e)} type="info"/><module186.Form.Item><Module1608 name={`${this.prefix}spec.config.environment`} options={this.state.environment}/></module186.Form.Item></>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formTemplate, formRef, mode, prefix } = props;
                const o = t.html("S2I_TARGET_IMAGE_REPOSITORY_DESC", {
                    link: getDocsUrl("secrets")
                });
                return <module186.Form ref={formRef} data={formTemplate}><module186.Form.Item label={t("ARTIFACT_FILE")} rules={[
                    {
                        required: true,
                        message: t("ARTIFACT_FILE_EMPTY_DESC")
                    }
                ]}><Module2598 name={`${this.prefix}spec.config.sourceUrl`} namespace={this.namespace} formTemplate={prefix ? formTemplate[prefix] : formTemplate} cluster={this.props.cluster}/></module186.Form.Item><Module1610 loading={this.state.isGetTemplateListLoading} formTemplate={prefix ? formTemplate[prefix] : formTemplate} builderTemplate={this.state.builderTemplateLists} onEnvironmentChange={this.handleImageTemplateChange}/><div className={module3(module2600.columns, module31({}, module2600.columsEdit, mode === "edit"))}><div className={module2600.column}><module186.Form.Item label={t("IMAGE_NAME")} desc={t("S2I_IMAGE_NAME_DESC")} rules={[
                    {
                        required: true,
                        message: t("IMAGE_NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_IMAGE_NAME,
                        message: t("INVALID_NAME_DESC", {
                            message: t("S2I_IMAGE_NAME_DESC")
                        })
                    }
                ]}><module186.Input name={`${this.prefix}spec.config.imageName`}/></module186.Form.Item></div><div className="is-2"><module186.Form.Item label={t("IMAGE_TAG")} rules={[
                    {
                        required: true,
                        message: t("IMAGE_TAG_EMPTY_DESC")
                    }
                ]}><module186.Input name={`${this.prefix}spec.config.tag`} defaultValue="latest"/></module186.Form.Item></div><div className="is-half"><module186.Form.Item label={t("TARGET_IMAGE_REPOSITORY")} desc={htmlLinkControl(o)} rules={[
                    {
                        required: true,
                        message: t("TARGET_IMAGE_REPOSITORY_EMPTY_DESC")
                    }
                ]}><module186.Select name={`${this.prefix}spec.config.pushAuthentication.secretRef.name`} options={this.state.imageSecretOptions} onChange={this.handleImageSecretChange} placeholder=" "/></module186.Form.Item></div></div><Module951>{this.renderAdvancedSetting()}</Module951></module186.Form>;
            }
        },
        {
            key: "prefix",
            get: function() {
                const prefix = this.props.prefix;
                if (prefix) {
                    return `${prefix}.`;
                }
                return "";
            }
        },
        {
            key: "namespace",
            get: function() {
                return this.props.namespace;
            }
        }
    ]);
    return r;
})(Component);
export default R;
R.defaultProps = {
    mode: "create",
    prefix: ""
};
