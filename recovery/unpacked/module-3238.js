import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-87.js";
import "./module-16.js";
import "./module-138.js";
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
import module61 from "./module-61.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component, createRef } from "./module-553.js";
import module1 from "./module-1.js";
import module241 from "./module-241.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import Module788 from "./module-788.js";
import { groovyToJS } from "./module-982.js";
import module14 from "./module-14.js";
import module855 from "./module-855.js";
let l;
let u;
let o;
function C(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, r);
    }
    return a;
}
const D = observer((o = u = ((Component_1)=>{
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
        n.handleOk = function() {
            n.formRef.current.validate(function() {
                n.props.onAddStep({
                    name: "checkout",
                    arguments: [
                        {
                            key: "scm",
                            value: {
                                isLiteral: false,
                                value: `[\$class: 'SubversionSCM', locations: [[cancelProcessOnExternalsFail: true,  ${n.state.formData.credentialsId ? `credentialsId: '${n.state.formData.credentialsId}',` : ""} depthOption: 'infinity', ignoreExternalsOption: true, local: '.', remote: '${n.state.formData.remote}']], quietOperation: true, workspaceUpdater: [\$class: 'UpdateUpdater']]`
                            }
                        },
                        {
                            key: "poll",
                            value: {
                                isLiteral: true,
                                value: false
                            }
                        }
                    ]
                });
            });
        };
        n.getCredentialsListData = function(e) {
            return n.props.store.getCredentials(e);
        };
        n.getCredentialsList = function() {
            return module61(n.props.store.credentialsList.data.map((e)=>({
                    label: e.name,
                    value: e.name,
                    type: e.type,
                    disabled: !n.props.store.isPassWordCredentials(e.type)
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
            ...n.getFormData(e)
        };
        return n;
    }
    module37(r, [
        {
            key: "getFormData",
            value: function(e) {
                if (e.edittingData.type === "checkout") {
                    return {
                        formData: module14.toJS(e.edittingData).data.reduce((acc, item)=>{
                            if (item.key === "scm") {
                                const a = item.value.value;
                                if (a) {
                                    Object.assign(acc, groovyToJS(a));
                                }
                            }
                            acc[item.key] = item.value.value;
                            return acc;
                        }, {})
                    };
                }
                return {
                    formData: {}
                };
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel } = props;
                const credentialsList = this.props.store.credentialsList;
                return <Module788 width={680} bodyClassName={module855.body} onCancel={onCancel} onOk={this.handleOk} visible={visible} closable={false} title={t("checkout (svn)")}><module186.Form data={this.state.formData} ref={this.formRef}><module186.Form.Item label={t("CREDENTIAL_NAME")} desc=<p>{t("SELECT_CREDENTIAL_DESC")}<span className={module855.clickable} onClick={this.props.showCredential}>{t("CREATE_CREDENTIAL")}</span></p>><module186.Select name="credentialsId" options={this.getCredentialsList()} pagination={module241(credentialsList, [
                    "page",
                    "limit",
                    "total"
                ])} isLoading={credentialsList.isLoading} onFetch={this.getCredentialsListData} optionRenderer={this.optionRender} valueRenderer={this.optionRender} searchable clearable/></module186.Form.Item><module186.Form.Item label={t("REMOTE_REPOSITORY_URL")} rules={[
                    {
                        required: true,
                        message: t("PARAM_REQUIRED")
                    }
                ]}><module186.Input name="remote"/></module186.Form.Item></module186.Form></Module788>;
            }
        }
    ]);
    return r;
})(Component), u.propTypes = {
    name: module1.string
}, u.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {}
}, l = o)) || l;
export default D;
