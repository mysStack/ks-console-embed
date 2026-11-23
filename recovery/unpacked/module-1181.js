import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-22.js";
import "./module-196.js";
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
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import { Component, createRef } from "./module-553.js";
import module1 from "./module-1.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import Module788 from "./module-788.js";
import module186 from "./module-186.js";
import module1110 from "./module-1110.js";
import { PATTERN_NAME } from "./module-72.js";
import { getValueObj } from "./module-895.js";
import module2729 from "./module-2729.js";
let o;
let i;
let c;
let s;
let f;
let d;
let p;
let m;
let h;
let v;
let g;
let y;
let E;
const B = observer((E = y = ((Component_1)=>{
    module55(n, Component_1);
    var r = ((e)=>{
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
    })(n);
    function n(e) {
        let a;
        module36(this, n);
        a = r.call(this, e);
        a.clearData = function() {
            a.formData = {};
            a.isSubmitting = false;
            a.type = "username_password";
        };
        module65(a, "formData", c, module88(a));
        module65(a, "type", s, module88(a));
        module65(a, "kubeconfig", f, module88(a));
        module65(a, "isSubmitting", d, module88(a));
        module65(a, "isGetConfigLoading", p, module88(a));
        module65(a, "devopsConfig", m, module88(a));
        a.fetchDevopsConfig = async function e() {
            let n;
            let l;
            let o;
            let i;
            let base;
            n = a.props.cluster;
            l = await request.get("/apis/kubesphere.io/v1alpha1/installplans/devops", {}, {}, function() {});
            o = module26(l, `spec.clusterScheduling.overrides["${n}"]`);
            i = {};
            if (o) {
                i = getValueObj(o);
            }
            base = getValueObj(l?.spec?.config ?? "");
            a.devopsConfig = {
                base,
                cluster: i
            };
        };
        module65(a, "fetchKubeConfig", h, module88(a));
        module65(a, "handleOk", v, module88(a));
        module65(a, "handleTypeChange", g, module88(a));
        a.nameValidator = function(e, r, n) {
            const a_props = a.props;
            const { devops, cluster, isEditMode } = a_props;
            if (!r || isEditMode) {
                return n();
            }
            a.store.checkName({
                name: r,
                devops,
                cluster
            }).then((a)=>{
                if (a.exist) {
                    return n({
                        message: t("CREDENTIAL_NAME_EXIST_DESC"),
                        field: e.field
                    });
                }
                n();
            });
        };
        a.renderCredentForm = function() {
            switch(a.type){
                case "ssh":
                    return <><module186.Form.Item label={t("USERNAME")}><module186.Input name="ssh.username"/></module186.Form.Item><module186.Form.Item label={t("PRIVATE_KEY")}><module186.TextArea name="ssh.private_key"/></module186.Form.Item><module186.Form.Item label={t("PASSPHRASE")}><module186.Input type="password" name="ssh.passphrase"/></module186.Form.Item></>;
                case "username_password":
                    return <><module186.Form.Item label={t("USERNAME")}><module186.Input name="username_password.username" defaultValue="admin" disabled={a.props.sourceType && a.props.sourceType === "github"}/></module186.Form.Item><module186.Form.Item label={t("PASSWORD_TOKEN")}><module186.Input name="username_password.password" type="password"/></module186.Form.Item></>;
                case "secret_text":
                    return <><module186.Form.Item label={t("TOKEN")}><module186.TextArea name="secret_text.secret"/></module186.Form.Item></>;
                case "kubeconfig":
                    return <module186.Form.Item className={module2729.narrowItem} label={t("CONTENT")} desc={t("KUBECONFIG_CONTENT_DESC")}>{a.isGetConfigLoading ? <module186.Loading><module186.TextArea name="kubeconfig.content" defaultValue={a.kubeconfig}/></module186.Loading> : <module186.TextArea name="kubeconfig.content" defaultValue={a.kubeconfig}/>}</module186.Form.Item>;
                default:
                    return null;
            }
        };
        a.formRef = createRef();
        a.store = new module1110;
        if (e.formTemplate) {
            a.formData = e.formTemplate;
            a.type = e.formTemplate.type;
            a.formData[a.type] = {
                ...a.formData.data
            };
        }
        if (e.credentialType) {
            a.type = e.credentialType;
            a.formData.type = e.credentialType;
        }
        a.username = module26(globals, "user.username", "");
        return a;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                if (!(this.type !== "kubeconfig" || this.props.isEditMode)) {
                    this.fetchKubeConfig();
                }
                this.fetchDevopsConfig();
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (this.props.visible && !e.visible) {
                    this.clearData();
                    if (this.props.formTemplate) {
                        this.formData = this.props.formTemplate;
                        this.type = this.props.formTemplate.type;
                        this.formData[this.type] = {
                            ...this.formData.data
                        };
                    }
                    if (this.props.credentialType) {
                        this.type = this.props.credentialType;
                        this.formData.type = this.props.credentialType;
                        if (!(this.kubeconfig || this.props.credentialType !== "kubeconfig")) {
                            this.fetchKubeConfig();
                        }
                    }
                }
            }
        },
        {
            key: "handleCreate",
            value: async function(t, a) {
                let devops;
                let n;
                devops = a.devops;
                n = a.cluster;
                return await this.store.handleCreate(t, {
                    devops,
                    cluster: n
                });
            }
        },
        {
            key: "updateFormData",
            value: function(e) {
                if (e[this.type]) {
                    e[this.type].id = e.id;
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel, isEditMode } = props;
                props.credentialType;
                const e_title = props.title;
                const u = module26(this.devopsConfig, "cluster.agent.jenkins.kubeconfigEnabled", module26(this.devopsConfig, "base.agent.jenkins.kubeconfigEnabled", false));
                return <Module788 width={680} bodyClassName={module2729.body} onCancel={onCancel} onOk={this.handleOk} visible={visible} closable={false} isSubmitting={this.isSubmitting} title={e_title || t("CREATE_CREDENTIAL")}><module186.Form data={this.formData} ref={this.formRef}><module186.Form.Item label={t("NAME")} rules={[
                    {
                        required: true,
                        message: t("CREDENTIAL_NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_NAME,
                        message: t("INVALID_NAME_DESC")
                    },
                    {
                        validator: this.nameValidator
                    }
                ]}><module186.Input name="id" disabled={isEditMode}/></module186.Form.Item><module186.Form.Item label={t("TYPE")}><module186.Select options={[
                    {
                        label: t("CREDENTIAL_TYPE_USERNAME_PASSWORD"),
                        value: "username_password"
                    },
                    {
                        label: t("CREDENTIAL_TYPE_SSH"),
                        value: "ssh"
                    },
                    {
                        label: t("CREDENTIAL_TYPE_SECRET_TEXT"),
                        value: "secret_text"
                    },
                    u ? {
                        label: t("CREDENTIAL_TYPE_KUBECONFIG"),
                        value: "kubeconfig"
                    } : null
                ].filter(Boolean)} disabled={isEditMode} onChange={this.handleTypeChange} defaultValue="username_password" name="type"/></module186.Form.Item>{this.renderCredentForm()}<module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name="description" maxLength={256}/></module186.Form.Item></module186.Form></Module788>;
            }
        }
    ]);
    return n;
})(Component), y.propTypes = {
    name: module1.string,
    isEditMode: module1.bool,
    formTemplate: module1.object,
    credentialType: module1.string,
    title: module1.string
}, y.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {},
    isEditMode: false
}, i = E, c = module49(i.prototype, "formData", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
}), s = module49(i.prototype, "type", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "username_password";
    }
}), f = module49(i.prototype, "kubeconfig", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "";
    }
}), d = module49(i.prototype, "isSubmitting", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
}), p = module49(i.prototype, "isGetConfigLoading", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
}), m = module49(i.prototype, "devopsConfig", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            base: {},
            cluster: {}
        };
    }
}), module49(i.prototype, "handleCreate", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "handleCreate"), i.prototype), h = module49(i.prototype, "fetchKubeConfig", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return module44(module41.mark(function* t() {
            let a;
            let r;
            a = _this.props.cluster;
            _this.isGetConfigLoading = true;
            r = yield request.get(`kapis/resources.kubesphere.io/v1alpha2/${_this.store.getPath({
                cluster: a
            })}/users/${_this.username}/kubeconfig`).finally(()=>{
                _this.isGetConfigLoading = false;
            });
            _this.kubeconfig = r;
            module74(_this.formData, "kubeconfig.content", r);
            _this.forceUpdate();
        }));
    }
}), v = module49(i.prototype, "handleOk", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            const t = _this.formRef.current.getData();
            _this.formRef.current.validate(module44(module41.mark(function* a() {
                _this.isSubmitting = true;
                _this.updateFormData(t);
                _this.props.onOk(t, function() {
                    _this.isSubmitting = false;
                });
            })));
        };
    }
}), g = module49(i.prototype, "handleTypeChange", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.type = t;
            _this.formData[t] = {
                id: module26(_this.formData, "id", "")
            };
            if (!(_this.kubeconfig || _this.type !== "kubeconfig")) {
                _this.fetchKubeConfig();
            }
        };
    }
}), o = i)) || o;
export default B;
