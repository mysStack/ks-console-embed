import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-64.js";
import "unpacked/module-137.js";
import "unpacked/module-813.js";
import "unpacked/module-7.js";
import "unpacked/module-31.js";
import module61 from "unpacked/module-61.js";
import module96 from "utils/babel-helpers/slicedToArray";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import module246 from "unpacked/module-246.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import { Component, createRef } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module63 from "unpacked/module-63.js";
import module241 from "unpacked/module-241.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module159 from "unpacked/module-159.js";
import module14 from "unpacked/module-14.js";
import { observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import Module788 from "components/Base/Modal";
import module855 from "unpacked/module-855.js";
let g;
let y;
let E;
let b;
let _;
let O;
let S;
let C;
let D;
const F = (dockerCredential)=>{
    const t = Object.keys(dockerCredential).map((t)=>{
        if (module246(dockerCredential[t]) === "object") {
            const a = Object.keys(dockerCredential[t]).map((a)=>`${a}: '${dockerCredential[t][a]}'`).join(", ");
            return `${t}: [[${a}]]`;
        }
        return `${t}: '${dockerCredential[t]}'`;
    }).join(", ");
    return `[${t}]`;
};
const G = observer((D = C = ((Component_1)=>{
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
    function r(...l_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...l_1);
        module65(e, "formData", E, module88(e));
        e.formRef = createRef();
        module65(e, "dockerCredentials", b, module88(e));
        module65(e, "isShowAdvenced", _, module88(e));
        module65(e, "isShowDetail", O, module88(e));
        module65(e, "handleCredentialChange", S, module88(e));
        e.handleAddDockerCredential = function() {
            e.dockerCredentials.push({
                key: `${Math.random()}`
            });
        };
        e.initData = function() {
            const dockerCredentials = e.formData.dockerCredentials;
            e.dockerCredentials = [];
            if (dockerCredentials) {
                const a = dockerCredentials.match(/\$\{(\[(.+)\])\}$/);
                const r = module26(a, "[2]", "").match(/(\[(.+)\])+/g);
                if (module63(r)) {
                    e.dockerCredentials = [];
                } else {
                    const n = r[0].split("],[").map((t)=>{
                        const a = {};
                        t.replace("[", "").replace("]", "").split(",").forEach((t)=>{
                            const r = e.handleStrToArr(t);
                            const n = module96(r, 2);
                            const l = n[0];
                            const u = n[1];
                            a.key = u;
                            a[l] = u;
                        });
                        return a;
                    });
                    e.dockerCredentials = n;
                }
            } else {
                e.dockerCredentials = [];
            }
        };
        e.handleStrToArr = function(e) {
            const t = e.split(":");
            const a = module96(t, 2);
            let r = a[0];
            let n = a[1];
            return [
                r = r.trim(),
                n = n.trim().replace(/'/g, "")
            ];
        };
        e.showAdvencedSetting = function() {
            e.isShowAdvenced = true;
        };
        e.handleRemove = function(t) {
            return function() {
                e.dockerCredentials = e.dockerCredentials.filter((e)=>e.key !== t);
            };
        };
        e.toggleDesc = function() {
            e.isShowDetail = !e.isShowDetail;
        };
        e.handleOk = function() {
            e.formRef.current.validate(function() {
                const t = Object.keys(e.formData).map((t)=>({
                        key: t,
                        value: {
                            isLiteral: true,
                            value: e.formData[t]
                        }
                    }));
                if (e.isShowAdvenced) {
                    const a = e.dockerCredentials.reduce((acc, dockerCredential, index)=>{
                        delete dockerCredential.key;
                        if (index === e.dockerCredentials.length - 1) {
                            return `${acc + F(dockerCredential)}`;
                        }
                        return `${acc + F(dockerCredential)},`;
                    }, "");
                    if (!module63(a) || a !== "[]") {
                        const r = t.find((e)=>e.key === "dockerCredentials");
                        if (r) {
                            module74(r, "value.value", `\${[${a}]}`);
                            module74(r, "value.isLiteral", false);
                        } else {
                            t.push({
                                key: "dockerCredentials",
                                value: {
                                    isLiteral: false,
                                    value: `\${[${a}]}`
                                }
                            });
                        }
                    }
                }
                e.props.onAddStep({
                    name: "kubernetesDeploy",
                    arguments: t.filter((e)=>e.value.value !== "")
                });
            });
        };
        e.renderDockerCredentials = function() {
            const credentialsList = e.props.store.credentialsList;
            return <div className={module855.dockerCredentialsContent}><div className={module855.dockerCredentialsContent__title}>{t("Kubernetes Secrets")}</div><module186.Form.Item label={t("Kubernetes Namespace for Secret")}><module186.Input name="secretNamespace"/></module186.Form.Item><module186.Form.Item label={t("SECRET")}><module186.Input name="secretName"/></module186.Form.Item><div className={module855.dockerCredentialsContent__title}>{t("Docker Container Registry Credentials")}</div><div>{module14.toJS(e.dockerCredentials).map((r)=><div key={r.key} className={module855.dockerCredentialsContent__content}><module186.Icon name="trash" clickable className={module855.dockerCredentialsContent__trashicon} onClick={e.handleRemove(r.key)}/><module186.Form.Item label={t("Docker Registry URL")}><module186.Input value={r.url} onChange={e.handleCredentialChange(r.key, "url")}/></module186.Form.Item><module186.Form.Item label={t("Registry Credentials")}><module186.Select value={r.credentialsId} options={e.getRepoCredentialsList()} pagination={module241(credentialsList, [
                    "page",
                    "limit",
                    "total"
                ])} isLoading={credentialsList.isLoading} onFetch={e.getCredentialsListData} optionRenderer={e.optionRender} valueRenderer={e.optionRender} searchable clearable onChange={function(t) {
                    return e.handleCredentialChange(r.key, "credentialsId")(t);
                }}/></module186.Form.Item></div>)}<div onClick={e.handleAddDockerCredential} className={module855.clickable}>{t("Add another credential")}</div></div></div>;
        };
        e.getCredentialsListData = function(t) {
            return e.props.store.getCredentials(t);
        };
        e.getCredentialsList = function() {
            return module61(e.props.store.credentialsList.data.map((t)=>({
                    label: t.name,
                    value: t.name,
                    type: t.type,
                    disabled: !e.props.store.isKubeconfigCredentials(t.type)
                })));
        };
        e.getRepoCredentialsList = function() {
            return e.getCredentialsList().filter((t)=>e.props.store.isPassWordCredentials(t.type)).map((e)=>({
                    ...e,
                    disabled: false
                }));
        };
        e.optionRender = function({ label, type, disabled }) {
            return <span style={{
                display: "flex",
                alignItem: "center"
            }}>{label}  <module186.Tag type={disabled ? "default" : "warning"}>{type === "ssh" ? "SSH" : t(type)}</module186.Tag></span>;
        };
        e.optionRender = function({ label, type, disabled }) {
            return <span style={{
                display: "flex",
                alignItem: "center"
            }}>{label}  <module186.Tag type={disabled ? "default" : "warning"}>{type === "ssh" ? "SSH" : t(type)}</module186.Tag></span>;
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                if (this.props.edittingData.type === "kubernetesDeploy") {
                    const e = this.props.edittingData.data.reduce((acc, item)=>{
                        acc[item.key] = item.value.value;
                        return acc;
                    }, {});
                    const { dockerCredentials, secretNamespace, secretName } = e;
                    this.isShowAdvenced = !!(dockerCredentials || secretNamespace || secretName);
                    this.formData = e;
                    this.initData();
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel } = props;
                const credentialsList = this.props.store.credentialsList;
                return <Module788 width={680} bodyClassName={module855.body} onCancel={onCancel} onOk={this.handleOk} visible={visible} closable={false} title={t("kubernetesDeploy")}><div className={module855.desc}>{t("KUBERNETES_DEPLOY_DESC")}{this.isShowDetail ? t.html("KUBERNETES_DEPLOY_DESC_MORE") : null}<span className={module855.clickable} onClick={this.toggleDesc}>{this.isShowDetail ? t("Collapse") : t("More")}</span></div><module186.Form className={module855.KubernetesForm} data={this.formData} ref={this.formRef}><module186.Form.Item label={t("Kubeconfig")} rules={[
                    {
                        required: true,
                        message: t("PARAM_REQUIRED")
                    }
                ]} desc=<p>{t("SELECT_CREDENTIAL_DESC")}<span className={module855.clickable} onClick={this.props.showCredential}>{t("CREATE_CREDENTIAL")}</span></p>><module186.Select name="kubeconfigId" options={this.getCredentialsList()} pagination={module241(credentialsList, [
                    "page",
                    "limit",
                    "total"
                ])} isLoading={credentialsList.isLoading} onFetch={this.getCredentialsListData} optionRenderer={this.optionRender} valueRenderer={this.optionRender} searchable clearable/></module186.Form.Item><module186.Form.Item label={t("Config File Path")}><module186.Input name="configs"/></module186.Form.Item><module186.Columns className="margin-t12"><module186.Column><module186.Form.Item><module186.Checkbox name="enableConfigSubstitution" checked={this.formData.enableConfigSubstitution}>{t("enableConfigSubstitution")}</module186.Checkbox></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item><module186.Checkbox name="deleteResource" checked={this.formData.deleteResource}>{t("Delete all resources of the deployment file")}</module186.Checkbox></module186.Form.Item></module186.Column></module186.Columns>{this.isShowAdvenced ? this.renderDockerCredentials() : <div className={module855.clickable} onClick={this.showAdvencedSetting}>{t("Show Advanced Settings")}</div>}</module186.Form></Module788>;
            }
        }
    ]);
    return r;
})(Component), C.propTypes = {
    name: module1.string
}, C.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {}
}, y = D, E = module49(y.prototype, "formData", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            enableConfigSubstitution: true,
            deleteResource: false
        };
    }
}), b = module49(y.prototype, "dockerCredentials", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [
            {
                key: "default"
            }
        ];
    }
}), _ = module49(y.prototype, "isShowAdvenced", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
}), O = module49(y.prototype, "isShowDetail", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
}), S = module49(y.prototype, "handleCredentialChange", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t, a) {
            return function(r) {
                _this.dockerCredentials = _this.dockerCredentials.map((e)=>{
                    if (e.key === t) {
                        if (a === "credentialsId" && module159(r)) {
                            delete e[a];
                        } else {
                            e[a] = r && r.target ? r.target.value : r;
                        }
                    }
                    return e;
                });
            };
        };
    }
}), g = y)) || g;
export default G;
