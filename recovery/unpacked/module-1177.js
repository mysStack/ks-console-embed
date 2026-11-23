import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-18.js";
import "./module-16.js";
import "./module-10.js";
import "./module-4.js";
import "./module-22.js";
import "./module-196.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-137.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
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
import { getDisplayName, getDocsUrl, isEdgeWizePage, learnMoreTip } from "./module-52.js";
import { PATTERN_IMAGE_NAME } from "./module-72.js";
import module853 from "./module-853.js";
import module456 from "./module-456.js";
import module934 from "./module-934.js";
import module1332 from "./module-1332.js";
import Module951 from "./module-951.js";
import Module1608 from "./module-1608.js";
import Module1610 from "./module-1610.js";
import module2601 from "./module-2601.js";
const T = ((Component_1)=>{
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
        n.fetchData = async function e() {
            let t;
            let basicSecretOptions;
            t = await n.secretStore.fetchListByK8s({
                namespace: n.namespace,
                cluster: n.props.cluster,
                fieldSelector: "type=kubernetes.io/basic-auth"
            });
            basicSecretOptions = t.map((e)=>({
                    label: getDisplayName(e),
                    value: e.name,
                    type: "basic-auth"
                }));
            n.setState({
                basicSecretOptions
            });
        };
        n.fetchImageSecrets = async function e() {
            let t;
            let imageSecretOptions;
            t = await n.secretStore.fetchListByK8s({
                namespace: n.namespace,
                cluster: n.props.cluster,
                fieldSelector: "type=kubernetes.io/dockerconfigjson"
            });
            imageSecretOptions = t.map((e)=>{
                const t = module26(e, 'data[".dockerconfigjson"].auths', {});
                const repoUrl = Object.keys(t)[0] || "";
                return {
                    label: getDisplayName(e),
                    value: e.name,
                    repoUrl,
                    type: "dockerconfigjson"
                };
            });
            n.setState({
                imageSecretOptions
            });
        };
        n.getTemplateList = async function e() {
            let t;
            n.setState({
                isGetTemplateListLoading: true
            });
            t = await n.builderStore.getBuilderTemplate({
                cluster: n.props.cluster
            });
            n.setState({
                builderTemplateLists: module26(t, "items", []),
                isGetTemplateListLoading: false
            });
        };
        n.handleImageTemplateChange = function({ environment, docUrl }) {
            const r = module26(globals, "user.lang", "zh");
            const environment_1 = (environment || []).map((e)=>{
                const t = (e.description || "").split(". ");
                const a = r === "zh" ? module26(t, "1", e.description) : module26(t, "0", e.description);
                e.label = `${e.key}  (${a})`;
                e.value = e.key;
                return e;
            });
            n.setState({
                environment: environment_1,
                docUrl
            });
        };
        n.handleSecretChange = function() {
            n.handleRepoReadableCheck();
        };
        n.handleImageSecretChange = function(e, t) {
            const formTemplate = n.props.formTemplate;
            const r = module26(t, "[0]repoUrl", "");
            module74(formTemplate, `${n.prefix}metadata.annotations["kubesphere.io/repoUrl"]`, r);
        };
        n.handleRepoReadableCheck = module44(module41.mark(function e() {
            let a;
            let r;
            let l;
            let o;
            let i;
            let c;
            let s;
            return module41.wrap(function(e) {
                while(true){
                    switch(e.prev = e.next){
                        case 0:
                            a = n.props;
                            r = a.formTemplate;
                            l = a.isEdgeWize;
                            if (o = module26(r, `${n.prefix}spec.config.sourceUrl`, "")) {
                                e.next = 4;
                                break;
                            }
                            return e.abrupt("return");
                        case 4:
                            n.setState({
                                readRepoLoading: true
                            });
                            i = module26(r, `${n.prefix}spec.config.gitSecretRef.name`, "");
                            e.next = 8;
                            return n.builderStore.verifyRepoReadable(o, i, n.namespace, l ? n.cluster : undefined).finally(()=>{
                                n.setState({
                                    readRepoLoading: false
                                });
                            });
                        case 8:
                            c = e.sent;
                            if ((s = module26(c, "message", "")) !== "success") {
                                e.next = 14;
                                break;
                            }
                            n.setState({
                                repoReadError: null
                            });
                            if (!i) {
                                n.setState({
                                    repoNeedSecret: false
                                });
                            }
                            return e.abrupt("return");
                        case 14:
                            n.setState({
                                repoReadError: {
                                    message: t(s)
                                },
                                repoNeedSecret: true
                            });
                        case 15:
                        case "end":
                            return e.stop();
                    }
                }
            }, e);
        }));
        n.isEdgeWize = isEdgeWizePage();
        n.secretStore = n.isEdgeWize ? new module934 : new module853;
        n.builderStore = n.isEdgeWize ? new module1332 : new module456;
        n.state = {
            isGetTemplateListLoading: true,
            environment: [],
            basicSecretOptions: [],
            imageSecretOptions: [],
            repoReadError: null,
            repoNeedSecret: true,
            readRepoLoading: false,
            docUrl: ""
        };
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
                this.fetchImageSecrets();
                this.getTemplateList();
                this.handleRepoReadableCheck();
            }
        },
        {
            key: "renderAdvancedSetting",
            value: function() {
                const e = t.html("S2I_ENVIRONMENT_DESC", {
                    link: this.state.docUrl || getDocsUrl("s2i_template")
                });
                return <><div className={module2601.margin_b_10}><module186.Form.Item label={t("TRIGGER_TOKEN")} desc={t("TRIGGER_TOKEN_DESC")} rules={[
                    {
                        pattern: /^[a-zA-Z0-9]+$/,
                        message: `${t("INVALID_TRIGGER_TOKEN_DESC")}`
                    }
                ]}><module186.Input name={`${this.prefix}spec.config.secretCode`} defaultValue=""/></module186.Form.Item></div><div className={module2601.margin_b_10}><module186.Form.Item label={t("CODE_RELATIVE_PATH")} desc={t("CODE_RELATIVE_PATH_DESC")}><module186.Input name={`${this.prefix}spec.config.contextDir`} defaultValue="/"/></module186.Form.Item></div><module186.Alert className={module2601.margin_b_10} message={learnMoreTip(e)} type="info"/><module186.Form.Item><Module1608 name={`${this.prefix}spec.config.environment`} options={this.state.environment}/></module186.Form.Item></>;
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
                return <module186.Form ref={formRef} data={formTemplate}><Module1610 loading={this.state.isGetTemplateListLoading} formTemplate={prefix ? formTemplate[prefix] : formTemplate} builderTemplate={this.state.builderTemplateLists} onEnvironmentChange={this.handleImageTemplateChange}/><div className={module3(module2601.columns, module31({}, module2601.columsEdit, mode === "edit"))}><div className={module2601.column}><module186.Loading spinning={this.state.readRepoLoading} size={18}><module186.Form.Item label={t("CODE_REPOSITORY_URL")} desc={t("CODE_REPOSITORY_URL_DESC")} error={this.state.repoReadError} rules={[
                    {
                        required: true,
                        message: t("PARAM_REQUIRED")
                    }
                ]}><module186.Input name={`${this.prefix}spec.config.sourceUrl`} onBlur={this.handleRepoReadableCheck}/></module186.Form.Item></module186.Loading></div><div className="is-2"><module186.Form.Item label={t("CODE_REPOSITORY_BRANCH")} rules={[
                    {
                        required: true,
                        message: t("PARAM_REQUIRED")
                    }
                ]}><module186.Input name={`${this.prefix}spec.config.revisionId`} defaultValue="master"/></module186.Form.Item></div><div className="is-half"><module186.Loading spinning={this.state.readRepoLoading} size={18}><module186.Form.Item className={this.state.repoNeedSecret ? "" : module2601.disabled} label={t("CODE_REPOSITORY_KEY")} desc={this.state.repoNeedSecret ? t("CODE_REPOSITORY_KEY_DESC") : t("CODE_REPOSITORY_KEY_NOT_REQUIRED")}><module186.Select onChange={this.handleSecretChange} options={this.state.basicSecretOptions} name={`${this.prefix}spec.config.gitSecretRef.name`} placeholder=" "/></module186.Form.Item></module186.Loading></div></div><div className={module3(module2601.columns, module31({}, module2601.columsEdit, mode === "edit"))}><div className={module2601.column}><module186.Form.Item label={t("IMAGE_NAME")} desc={t("S2I_IMAGE_NAME_DESC")} rules={[
                    {
                        required: true,
                        message: t("PARAM_REQUIRED")
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
                        message: t("PARAM_REQUIRED")
                    }
                ]}><module186.Input name={`${this.prefix}spec.config.tag`} defaultValue="latest"/></module186.Form.Item></div><div className="is-half"><module186.Form.Item label={t("TARGET_IMAGE_REPOSITORY")} desc={learnMoreTip(o)} rules={[
                    {
                        required: true,
                        message: t("PARAM_REQUIRED")
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
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.cluster;
            }
        }
    ]);
    return r;
})(Component);
export default T;
T.defaultProps = {
    mode: "create",
    prefix: ""
};
