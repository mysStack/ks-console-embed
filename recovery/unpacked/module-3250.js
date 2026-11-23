import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-31.js";
import module61 from "./module-61.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import { Component, createRef } from "./module-553.js";
import module1 from "./module-1.js";
import { observer } from "./module-239.js";
import Module788 from "./module-788.js";
import module186 from "./module-186.js";
import { Column, Columns } from "./module-3251.js";
import module241 from "./module-241.js";
import module855 from "./module-855.js";
let d;
let p;
let m;
const D = observer((m = p = ((Component_1)=>{
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
        n.getCredentialsListData = function(e) {
            return n.props.store.getCredentials(e);
        };
        n.getCredentialsList = function() {
            return module61(n.props.store.credentialsList.data.map((e)=>({
                    label: e.name,
                    value: e.name,
                    type: e.type,
                    disabled: e.type !== "username_password"
                })));
        };
        n.getCDListData = function(e) {
            return n.props.store.getCDListData(e);
        };
        n.getCDList = function() {
            return module61(n.props.store.cdList.data.map((e)=>({
                    label: e.name,
                    value: e.name
                })));
        };
        n.handleOk = function() {
            const e = n.formRef.current.getData();
            n.formRef.current.validate(function() {
                let t;
                let a;
                let r;
                let l;
                let u;
                let o;
                let i;
                let c;
                a = (t = {
                    ...e,
                    devops: n.props.store.params.devops
                }).credentialsId;
                r = t.appName;
                l = t.devops;
                u = t.name;
                o = t.newName;
                i = t.branch;
                c = t.tag;
                const s = {
                    arguments: {
                        isLiteral: true,
                        value: "base"
                    },
                    children: [
                        {
                            arguments: {
                                isLiteral: false,
                                value: `\${[usernamePassword(credentialsId : '${a}' ,passwordVariable : 'PASS' ,usernameVariable : 'USER')]}`
                            },
                            children: [
                                {
                                    arguments: [
                                        {
                                            key: "script",
                                            value: {
                                                isLiteral: true,
                                                value: `ks app update --app-name ${r} \\
 --app-namespace ${l} \\
 --name ${u} \\
 --newName ${o}${c ? `:${c}` : ""} \\
 --git-password \$PASS --git-username=\$USER \\
 --git-target-branch ${i}`
                                            }
                                        }
                                    ],
                                    name: "sh"
                                }
                            ],
                            name: "withCredentials"
                        }
                    ],
                    name: "container"
                };
                n.props.onAddStep(s);
            });
        };
        n.optionRender = function({ label, type, disabled }) {
            return <span style={{
                display: "flex",
                alignItem: "center"
            }}>{label}  <module186.Tag type={disabled ? "default" : "warning"}>{type === "ssh" ? "SSH" : t(type)}</module186.Tag></span>;
        };
        n.formRef = createRef();
        n.state = {
            formData: {}
        };
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.getCDListData();
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel } = props;
                const store = this.props.store;
                const { credentialsList, cdList } = store;
                return <Module788 width={680} bodyClassName={module855.body} onCancel={onCancel} onOk={this.handleOk} visible={visible} closable={false} title={t("UPDATE_CD_TITLE")}><module186.Form data={this.state.formData} ref={this.formRef}><div className={module855.columns}><Columns><Column className="is-8"><module186.Form.Item label={t("CONTINUOUS_DEPLOYMENT_PL")} rules={[
                    {
                        required: true,
                        message: t("PARAM_REQUIRED")
                    }
                ]}><module186.Select name="appName" options={this.getCDList()} pagination={module241(cdList, [
                    "page",
                    "limit",
                    "total"
                ])} isLoading={cdList.isLoading} onFetch={this.getCDListData} searchable clearable/></module186.Form.Item></Column><Column className="is-4"><module186.Form.Item label={t("BRANCH_SI")} rules={[
                    {
                        required: true,
                        message: t("PARAM_REQUIRED")
                    }
                ]}><module186.Input name="branch"/></module186.Form.Item></Column></Columns></div><module186.Form.Item label={t("ORIGINAL_IMAGE_ADDRESS")} rules={[
                    {
                        required: true,
                        message: t("PARAM_REQUIRED")
                    }
                ]}><module186.Input name="name"/></module186.Form.Item><div className={module855.columns}><Columns><Column className="is-8"><module186.Form.Item label={t("NEW_IMAGE_ADDRESS")} rules={[
                    {
                        required: true,
                        message: t("PARAM_REQUIRED")
                    }
                ]}><module186.Input name="newName"/></module186.Form.Item></Column><Column className="is-4"><module186.Form.Item label={t("NEW_IMAGE_TAG")}><module186.Input name="tag"/></module186.Form.Item></Column></Columns></div><module186.Form.Item label={t("CREDENTIAL_NAME")} desc=<p>{t("SELECT_CREDENTIAL_DESC")}<span className={module855.clickable} onClick={this.props.showCredential}>{t("CREATE_CREDENTIAL")}</span></p> rules={[
                    {
                        required: true,
                        message: t("PARAM_REQUIRED")
                    }
                ]}><module186.Select name="credentialsId" options={this.getCredentialsList()} pagination={module241(credentialsList, [
                    "page",
                    "limit",
                    "total"
                ])} isLoading={credentialsList.isLoading} onFetch={this.getCredentialsListData} optionRenderer={this.optionRender} valueRenderer={this.optionRender} searchable clearable/></module186.Form.Item></module186.Form></Module788>;
            }
        }
    ]);
    return r;
})(Component), p.propTypes = {
    name: module1.string
}, p.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {}
}, d = m)) || d;
export default D;
