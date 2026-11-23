import "./module-15.js";
import "./module-5.js";
import "./module-29.js";
import "./module-18.js";
import "./module-87.js";
import "./module-16.js";
import "./module-98.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import module61 from "./module-61.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import { Component, createRef } from "./module-553.js";
import module1 from "./module-1.js";
import module26 from "./module-26.js";
import module241 from "./module-241.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import Module788 from "./module-788.js";
import { groovyToJS } from "./module-982.js";
import module855 from "./module-855.js";
let m;
let h;
let v;
let g;
let y;
const R = (e, t)=>{
    const a = Object.keys(e).reduce((acc, key)=>`${acc}${key} : '${e[key]}' ,`, "");
    return `\${[${t}(${a})]}`;
};
const I = {
    secret_text: "string",
    username_password: "usernamePassword",
    ssh: "sshUserPrivateKey",
    kubeconfig: "kubeconfigContent",
    kubeconfigFile: "kubeconfigFile"
};
const w = observer((y = g = ((Component_1)=>{
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
        n.initEditor = function() {
            const edittingData = n.props.edittingData;
            if (edittingData.type === "withCredentials") {
                const t = module26(edittingData, "data.value", "");
                if (t) {
                    const formData = groovyToJS(t);
                    const r = ((e)=>{
                        const t = /\$\{\[([\w-]*)\(/;
                        const a = e.match(t) && e.match(t)[1];
                        if (a) {
                            const r = Object.entries(I).find((e)=>e[1] === a);
                            if (r) {
                                return r[0];
                            }
                            return null;
                        }
                        return null;
                    })(t);
                    n.setState({
                        formData,
                        credentialType: r
                    });
                }
            }
        };
        module65(n, "handleCredentialChange", v, module88(n));
        n.handleOk = function() {
            const e = n.formRef.current.getData();
            n.formRef.current.validate(function() {
                n.props.onAddStep({
                    name: "withCredentials",
                    arguments: {
                        isLiteral: false,
                        value: R(e, I[n.state.credentialType])
                    },
                    children: []
                });
            });
        };
        n.renderParams = function() {
            switch(n.state.credentialType){
                case "username_password":
                    return <><module186.Form.Item label={t("Password Variable")}><module186.Input name="passwordVariable"/></module186.Form.Item><module186.Form.Item label={t("Username Variable")}><module186.Input name="usernameVariable"/></module186.Form.Item></>;
                case "secret_text":
                    return <><module186.Form.Item label={t("Text Variable")}><module186.Input name="variable"/></module186.Form.Item></>;
                case "ssh":
                    return <><module186.Form.Item label={t("key File Variable")}><module186.Input name="keyFileVariable"/></module186.Form.Item><module186.Form.Item label={t("passphrase Variable")}><module186.Input name="passphraseVariable"/></module186.Form.Item><module186.Form.Item label={t("Username Variable")}><module186.Input name="usernameVariable"/></module186.Form.Item></>;
                case "kubeconfig":
                    return <module186.Form.Item label={t("Kubeconfig Variable")}><module186.Input name="variable"/></module186.Form.Item>;
                case "kubeconfigFile":
                    return <module186.Form.Item label={t("KubeconfigFile Variable")}><module186.Input name="variable"/></module186.Form.Item>;
                default:
                    return null;
            }
        };
        n.getCredentialsListData = function(e) {
            return n.props.store.getCredentials(e);
        };
        n.getCredentialsList = function() {
            return module61(n.props.store.credentialsList.data.map((e)=>({
                    label: e.name,
                    value: e.name,
                    type: e.type,
                    disabled: false
                })));
        };
        n.optionRender = function({ label, type, disabled }) {
            return <span style={{
                display: "flex",
                alignItem: "center"
            }}>{label}  <module186.Tag type={disabled ? "" : "warning"}>{type === "ssh" ? "SSH" : t(type)}</module186.Tag></span>;
        };
        n.formRef = createRef();
        n.state = {
            formData: {},
            credentialType: "username_password"
        };
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.props.store.getCredentials();
                this.initEditor();
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel } = props;
                const credentialsList = this.props.store.credentialsList;
                return <Module788 width={680} bodyClassName={module855.body} onCancel={onCancel} onOk={this.handleOk} visible={visible} closable={false} title={t("withCredentials")}><module186.Form data={this.state.formData} ref={this.formRef}><module186.Form.Item label={t("CREDENTIAL_NAME")} rules={[
                    {
                        required: true,
                        message: t("PARAM_REQUIRED")
                    }
                ]} desc=<p>{t("SELECT_CREDENTIAL_DESC")}<span className={module855.clickable} onClick={this.props.showCredential}>{t("CREATE_CREDENTIAL")}</span></p>><module186.Select name="credentialsId" options={this.getCredentialsList()} pagination={module241(credentialsList, [
                    "page",
                    "limit",
                    "total"
                ])} isLoading={credentialsList.isLoading} onFetch={this.getCredentialsListData} onChange={this.handleCredentialChange} optionRenderer={this.optionRender} valueRenderer={this.optionRender} searchable clearable/></module186.Form.Item>{this.renderParams()}</module186.Form></Module788>;
            }
        }
    ]);
    return r;
})(Component), g.propTypes = {
    name: module1.string
}, g.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {}
}, h = y, v = module49(h.prototype, "handleCredentialChange", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(credentialsId) {
            const a = _this.getCredentialsList().find((e)=>e.value === credentialsId);
            const r = module26(a, "type", "username_password");
            _this.setState({
                credentialType: r,
                formData: {
                    credentialsId
                }
            });
        };
    }
}), m = h)) || m;
export default w;
