import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
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
import module58 from "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { Component, createRef } from "./module-553.js";
import module3 from "./module-3.js";
import { observer } from "./module-239.js";
import module1316 from "./module-1316.js";
import module186 from "./module-186.js";
import { PATTERN_NAME } from "utils/constants";
import Module788 from "components/Base/Modal";
import Module1058 from "components/Inputs/UrlInput";
import Module800 from "components/Inputs/NumberInput";
import Module1622 from "./module-1622.js";
import module3053 from "./module-3053.js";
let l;
const R = observer(l = ((Component_1)=>{
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
        n.registryTabs = [
            {
                label: t("SINGLE_REGISTRATION"),
                value: "single"
            },
            {
                label: t("MULTIPLE_REGISTRATION"),
                value: "multiple"
            }
        ];
        n.formatFormData = function(e) {
            const { edgeNodeName, edgeIpList } = e;
            return {
                ...module58(e, [
                    "edgeNodeName",
                    "edgeIpList"
                ]),
                edgeNodeName: n.isSingleRegister ? edgeNodeName : undefined,
                edgeIpList: n.isSingleRegister ? [
                    edgeIpList[0]
                ] : edgeIpList
            };
        };
        n.handleOk = function() {
            const current = n.formRef.current;
            if (current) {
                current.validate(function() {
                    const onOk = n.props.onOk;
                    const a = n.formatFormData(current.getData());
                    onOk?.(a);
                });
            }
        };
        n.handleModeChange = function(mode) {
            n.setState({
                mode
            });
        };
        n.renderSSHAndPortItems = function() {
            const reRegister = n.props.reRegister;
            if (reRegister || n.isSingleRegister) {
                return <module186.Form.Item label={t("NODE_ACCESS_IP")} desc={t("NODE_ACCESS_IP_TIPS")}><Module1058 portName="sshPort" renderHostInput=<Module1622 name="edgeIpList" onChange={n.handleIpInputChange} disabled={reRegister}/> defaultPort={22}/></module186.Form.Item>;
            }
            return <><module186.Form.Item label={t("NODE_ACCESS_IP")} desc={t("NODE_ACCESS_IPS_TIPS")}><Module1622 name="edgeIpList" onChange={n.handleIpInputChange} isMultiMode/></module186.Form.Item><module186.Form.Item label={t("SSH_PORT")} desc={t("SSH_PORT_DESC")}><Module800 name="sshPort"/></module186.Form.Item></>;
        };
        n.otafileServerValidator = function(e, a, r) {
            if (a) {
                if (module1316.isURL(a)) {
                    return r();
                }
                return r({
                    message: t("FILE_SERVER_ERROR_MESSAGE"),
                    field: e.field
                });
            }
            return r();
        };
        n.formTemplate = n.props.formTemplate;
        n.state = {
            mode: "single"
        };
        n.formRef = createRef();
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel, title, cluster, reRegister } = props;
                return <Module788 title={title} visible={visible} onOk={this.handleOk} onCancel={onCancel}>{!reRegister && <module186.RadioGroup defaultValue={this.state.mode} wrapClassName={module3("radio-group-button", module3053.toolbar)} onChange={this.handleModeChange}>{this.registryTabs.map(({ value, label })=><module186.RadioButton key={value} value={value}>{label}</module186.RadioButton>)}</module186.RadioGroup>}{!this.isSingleRegister && <module186.Alert type="info" message={t("MULTIPLE_REGISTER_TIPS")} className={module3053.tips}/>}<module186.Form ref={this.formRef} data={this.formTemplate} onSubmit={this.handleOk} className={module3053.form}><module186.Form.Item label={t("CLUSTER_NAME")}><module186.Input name="clusterName" defaultValue={cluster} maxLength={63} disabled={!!cluster}/></module186.Form.Item>{this.isSingleRegister && <module186.Form.Item label={t("NODE_ACCESS_NAME")} desc={t("NAME_DESC")} rules={[
                    {
                        required: true,
                        message: t("NODE_ACCESS_NAME_REQUIRED")
                    },
                    {
                        pattern: PATTERN_NAME,
                        message: t("INVALID_NAME_DESC")
                    }
                ]}><module186.Input name="edgeNodeName" maxLength={63} disabled={reRegister}/></module186.Form.Item>}<module186.Form.Item label={t("FILE_SERVER")} desc={t("FILE_SERVER_TIPS")} rules={[
                    {
                        validator: this.otafileServerValidator
                    }
                ]}><module186.Input name="otafileServer"/></module186.Form.Item><module186.Form.Item label={t("ALIAS")} desc={t("ALIAS_DESC")}><module186.Input name="alias" maxLength={63}/></module186.Form.Item>{this.renderSSHAndPortItems()}<module186.Form.Item label={t("NODE_ARCHITECTURE")} rules={[
                    {
                        required: true,
                        message: t("NODE_ARCHITECTURE_REQUIRED")
                    }
                ]}><module186.Select name="arch" options={[
                    {
                        label: "x86_64",
                        value: "x86_64"
                    },
                    {
                        label: "arm64",
                        value: "arm64"
                    }
                ]}/></module186.Form.Item><module186.Form.Item label={t("USERNAME")} desc={t("NODE_ACCESS_USERNAME_TIPS")} rules={[
                    {
                        required: true,
                        message: t("NODE_ACCESS_USERNAME_REQUIRED")
                    }
                ]}><module186.Input name="userName" autoComplete="off"/></module186.Form.Item><module186.Form.Item label={t("PASSWORD")} desc={t("NODE_ACCESS_PASSWORD_TIPS")} rules={[
                    {
                        required: true,
                        message: t("请输入边缘节点的登录密码")
                    }
                ]}><module186.InputPassword name="password" type="password" onChange={this.handlePasswordChange} autoComplete="off"/></module186.Form.Item><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name="description" maxLength={256} className={module3053.desc}/></module186.Form.Item></module186.Form></Module788>;
            }
        },
        {
            key: "isSingleRegister",
            get: function() {
                return this.state.mode === "single";
            }
        }
    ]);
    return r;
})(Component)) || l;
export default R;
