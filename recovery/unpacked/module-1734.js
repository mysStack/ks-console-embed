import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-97.js";
import "./module-16.js";
import "./module-98.js";
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
import module96 from "./module-96.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module159 from "./module-159.js";
import module242 from "./module-242.js";
import { Component, createRef } from "./module-553.js";
import module186 from "./module-186.js";
import { hasChinese } from "./module-52.js";
import { MODULE_KIND_MAP } from "./module-72.js";
import Module3335 from "./module-3335.js";
import Module3337 from "./module-3337.js";
import Module3339 from "./module-3339.js";
import Module3340 from "./module-3340.js";
const R = [
    "Opaque",
    "kubernetes.io/tls",
    "kubernetes.io/dockerconfigjson",
    "kubernetes.io/basic-auth"
];
const D = ((Component_1)=>{
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
    function r(...l) {
        let e;
        module36(this, r);
        e = a.call(this, ...l);
        e.state = {
            type: module26(e.fedFormTemplate, "type", ""),
            state: "",
            selectDataKey: "",
            isSkipVerify: module26(e.formTemplate, 'metadata.annotations["secret.kubesphere.io/force-insecure"]', "false") === "true"
        };
        e.imageRegistryRef = createRef();
        e.getTypeOptions = function() {
            return [
                {
                    label: t("DEFAULT"),
                    value: "Opaque"
                },
                {
                    label: t("TLS_INFORMATION"),
                    value: "kubernetes.io/tls"
                },
                {
                    label: t("IMAGE_REGISTRY_INFORMATION"),
                    value: "kubernetes.io/dockerconfigjson"
                },
                {
                    label: t("USERNAME_PASSWORD"),
                    value: "kubernetes.io/basic-auth"
                }
            ];
        };
        e.handleTypeChange = function(t) {
            if (!(t && !R.includes(t))) {
                module74(e.fedFormTemplate, "data", {});
            }
            if (t === "kubernetes.io/dockerconfigjson") {
                module74(e.fedFormTemplate, "metadata.annotations['secret.kubesphere.io/force-insecure']", "true");
                e.setState({
                    isSkipVerify: true
                });
            } else {
                e.setState({
                    isSkipVerify: false
                });
                module242(e.fedFormTemplate, "metadata.annotations['secret.kubesphere.io/force-insecure']");
            }
            e.setState({
                type: t
            });
        };
        e.dataValidator = function(e, a, r) {
            if (module159(a)) {
                return r();
            }
            if (Object.entries(a).some((e)=>{
                const t = module96(e, 2);
                const a = t[0];
                const r = t[1];
                return hasChinese(a) || hasChinese(r);
            })) {
                return r({
                    message: t("SECRET_NO_CHINESE_CODE_DESC")
                });
            }
            r();
        };
        e.imageValidator = function(t, a, r) {
            if (e.imageRegistryRef.current.validate()) {
                return r();
            }
        };
        e.handleData = function(t) {
            const selectDataKey = e.state.selectDataKey;
            const r = module26(e.fedFormTemplate, "data", {});
            if (selectDataKey) {
                delete r[selectDataKey];
            }
            module74(e.fedFormTemplate, "data", {
                ...r,
                ...t
            });
            e.hideDataForm();
        };
        e.showDataForm = function() {
            e.setState({
                state: "data",
                selectDataKey: ""
            });
        };
        e.hideDataForm = function() {
            e.setState({
                state: "",
                selectDataKey: ""
            });
        };
        e.handleDataItemEdit = function(selectDataKey) {
            e.setState({
                state: "data",
                selectDataKey
            });
        };
        e.handleChangeSkipVerify = function(isSkipVerify) {
            module74(e.fedFormTemplate, 'metadata.annotations["secret.kubesphere.io/force-insecure"]', isSkipVerify ? "true" : "false");
            e.setState({
                isSkipVerify
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "renderDataForm",
            value: function() {
                const selectDataKey = this.state.selectDataKey;
                const detail = module26(this.fedFormTemplate, "data", {});
                return <Module3337 detail={detail} selectKey={selectDataKey} onOk={this.handleData} onCancel={this.hideDataForm}/>;
            }
        },
        {
            key: "renderDefault",
            value: function() {
                return <module186.Form.Item label={t("DATA")} rules={[
                    {
                        required: true,
                        message: t("ENTER_DATA_DESC")
                    },
                    {
                        validator: this.dataValidator
                    }
                ]}><Module3335 name="data" onEdit={this.handleDataItemEdit} onAdd={this.showDataForm}/></module186.Form.Item>;
            }
        },
        {
            key: "renderTLS",
            value: function() {
                return <div key="tls" className="margin-t8"><module186.Form.Item label={t("CERTIFICATE")} rules={[
                    {
                        required: true,
                        message: t("CREDENTIAL_NAME_EMPTY_DESC")
                    },
                    {
                        validator: this.dataValidator
                    }
                ]}><Module3339 name="data['tls.crt']"><module186.TextArea rows="6" resize/></Module3339></module186.Form.Item><module186.Form.Item label={t("PRIVATE_KEY_TCAP")} rules={[
                    {
                        required: true,
                        message: t("ENTER_PRIVATE_KEY_DESC")
                    },
                    {
                        validator: this.dataValidator
                    }
                ]}><Module3339 name="data['tls.key']"><module186.TextArea rows="6" resize/></Module3339></module186.Form.Item></div>;
            }
        },
        {
            key: "renderImage",
            value: function() {
                const _this = this;
                const props = this.props;
                const { cluster, isFederated, isEdgeWize } = props;
                const l = module26(this.formTemplate, "metadata");
                const { name, namespace } = l;
                return <div key="image" className="margin-t8"><module186.Form.Item rules={[
                    {
                        validator: this.imageValidator
                    }
                ]}><Module3339 name="data['.dockerconfigjson']"><Module3340 fedFormTemplate={this.fedFormTemplate} cluster={cluster} isDefault={this.isDefault} onChangeDefault={function(t) {
                    return module74(_this.fedFormTemplate, 'metadata.annotations["secret.kubesphere.io/is-default-class"]', t ? "true" : "false");
                }} onChangeState={function(changeData) {
                    _this.setState({
                        changeData
                    });
                }} isSkipVerify={this.state.isSkipVerify} onChangeSkipVerify={this.handleChangeSkipVerify} isEdgeWize={isEdgeWize} namespace={namespace} isFederated={isFederated} screatName={name} ref={this.imageRegistryRef}/></Module3339></module186.Form.Item><module186.Form.Item>{this.renderDefault()}</module186.Form.Item></div>;
            }
        },
        {
            key: "renderBasicAuth",
            value: function() {
                return <div key="basic" className="margin-t8"><module186.Form.Item label={t("USERNAME")} rules={[
                    {
                        required: true,
                        message: t("USERNAME_EMPTY_DESC")
                    },
                    {
                        validator: this.dataValidator
                    }
                ]}><Module3339 name="data.username"><module186.Input autoComplete="nope"/></Module3339></module186.Form.Item><module186.Form.Item label={t("PASSWORD")} rules={[
                    {
                        required: true,
                        message: t("PASSWORD_EMPTY_DESC")
                    },
                    {
                        validator: this.dataValidator
                    }
                ]}><Module3339 name="data.password"><module186.InputPassword type="password" autoComplete="new-password"/></Module3339></module186.Form.Item></div>;
            }
        },
        {
            key: "renderContent",
            value: function() {
                let e = null;
                switch(this.state.type){
                    default:
                        e = this.renderDefault();
                        break;
                    case "kubernetes.io/tls":
                        e = this.renderTLS();
                        break;
                    case "kubernetes.io/dockerconfigjson":
                        e = this.renderImage();
                        break;
                    case "kubernetes.io/basic-auth":
                        e = this.renderBasicAuth();
                }
                return e;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formRef, disableSelect } = props;
                if (this.state.state === "data") {
                    return this.renderDataForm();
                }
                return <module186.Form data={this.fedFormTemplate} ref={formRef}><module186.Form.Item label={t("TYPE")} desc={disableSelect ? "" : t("SECRET_TYPE_DESC")}><module186.Select name="type" options={this.getTypeOptions()} onChange={this.handleTypeChange} placeholder=" " disabled={disableSelect} searchable={false}/></module186.Form.Item>{this.renderContent()}</module186.Form>;
            }
        },
        {
            key: "formTemplate",
            get: function() {
                const props = this.props;
                const { formTemplate, module } = props;
                return module26(formTemplate, MODULE_KIND_MAP[module], formTemplate);
            }
        },
        {
            key: "fedFormTemplate",
            get: function() {
                if (this.props.isFederated) {
                    return module26(this.formTemplate, "spec.template");
                }
                return this.formTemplate;
            }
        },
        {
            key: "isDefault",
            get: function() {
                return module26(this.formTemplate, 'metadata.annotations["secret.kubesphere.io/is-default-class"]', "false") === "true";
            }
        }
    ]);
    return r;
})(Component);
export default D;
