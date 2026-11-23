import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-84.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import module61 from "./module-61.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import Module842 from "./module-842.js";
import Module875 from "./module-875.js";
import Module829 from "./module-829.js";
import Module3058 from "./module-3058.js";
import Module3060 from "./module-3060.js";
import Module1698 from "./module-1698.js";
import module3063 from "./module-3063.js";
const C = ((Component_1)=>{
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
        let f;
        module36(this, r);
        f = a.call(this, e);
        f.handleFormChange = function(e) {
            const f_props = f.props;
            const t_name = f_props.name;
            f_props.onSaveChange(t_name, {
                ...f_props.formTemplate,
                edgeSofts: [
                    e
                ]
            });
        };
        f.handleHideConfirmForm = function() {
            return f.setState({
                showConfirmForm: ""
            });
        };
        f.handleInstall = function() {
            return f.setState({
                showConfirmForm: "install"
            });
        };
        f.handleInstallEdgeCore = function(e) {
            f.handleFormChange(e);
            f.setState({
                edgeCore: e,
                edgeCoreConfig: e.configFile ?? ""
            });
            f.handleHideConfirmForm();
        };
        f.handleEdgeCoreConfigChange = function(edgeCoreConfig) {
            if (!f.state.showConfirmForm) {
                f.setState({
                    showConfigConfirm: true
                });
            }
            f.setState({
                edgeCoreConfig
            });
        };
        f.handleActionConfirm = function([t]) {
            f.setState({
                edgeCore: t
            });
            f.handleFormChange(t);
            f.handleHideConfirmForm();
        };
        f.handleCardActionClick = function(showConfirmForm) {
            f.setState({
                showConfirmForm
            });
        };
        f.handleSaveEdgeCoreConfigChange = function() {
            const edgeCoreConfig = f.state.edgeCoreConfig;
            const { name, todoTasks = [] } = f.state.edgeCore;
            const o = `${name}_modify_conf`;
            const u = {
                ...f.state.edgeCore,
                todoTasks: todoTasks.includes(o) ? todoTasks : [].concat(module61(todoTasks), [
                    o
                ]),
                configFile: edgeCoreConfig
            };
            f.setState({
                edgeCore: u,
                showConfigConfirm: false
            });
            f.handleFormChange(u);
        };
        f.renderEdgeSoftItem = function() {
            const { showConfigConfirm, edgeCore, edgeCoreConfig = "" } = f.state;
            const { name, todoTasks } = edgeCore;
            const c = todoTasks === undefined ? [] : todoTasks;
            if (module63(edgeCore) || c.includes("edgecore_uninstall")) {
                return <div className={module3063.container}><Module875 className={module3063.empty} icon="iot-duotone" title={t("SOFT_INSTALLED_EMPTY", {
                    resource: name
                })} desc={t("EDGE_CORE_EMPTY_DESC")} action=<module186.Button key="install" type="control" onClick={f.handleInstall}>{t("INSTALL")}</module186.Button>/></div>;
            }
            return <div className={module3063.container}><Module3058 software={edgeCore} onClick={f.handleCardActionClick}/><module186.Form.Group label={t("SOFT_SETTINGS", {
                container: name
            })} desc={t("SOFT_SETTINGS_TIPS", {
                container: name,
                filePath: "/etc/kubeedge/config/edgecore.yaml"
            })} checkable keepDataWhenUnCheck><Module842 mode="yaml" className={module3063.containerConfig} value={edgeCoreConfig} onChange={f.handleEdgeCoreConfigChange}/>{showConfigConfirm && <Module829 onOk={f.handleSaveEdgeCoreConfigChange} onCancel={function() {
                return f.setState({
                    showConfigConfirm: false,
                    edgeCoreConfig: edgeCore.configFile
                });
            }} className={module3063.configConfirm}/>}</module186.Form.Group></div>;
        };
        f.state = {
            showConfirmForm: e.batchMode && module63(e.formTemplate.edgeSofts?.find(function(e) {
                return e.name === "edgecore";
            })) ? "install" : "",
            showConfigConfirm: false,
            edgeCoreConfig: e.formTemplate.edgeSofts?.find(function(e) {
                return e.name === "edgecore";
            })?.configFile,
            edgeCore: e.formTemplate.edgeSofts?.find(function(e) {
                return e.name === "edgecore";
            }) ?? {}
        };
        return f;
    }
    module37(r, [
        {
            key: "renderConfirmForm",
            value: function() {
                const batchMode = this.props.batchMode;
                const showConfirmForm = this.state.showConfirmForm;
                if (showConfirmForm === "install") {
                    return <Module3060 batchMode={batchMode} versionList={this.props.versionList} onConfirm={this.handleInstallEdgeCore} onCancel={this.handleHideConfirmForm}/>;
                }
                return <Module1698 type={showConfirmForm} containerKey="edgecore" containers={[
                    this.state.edgeCore
                ]} onConfirm={this.handleActionConfirm} onCancel={this.handleHideConfirmForm}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const batchMode = this.props.batchMode;
                const showConfirmForm = this.state.showConfirmForm;
                return <>{!batchMode && <><div className={module3063.title}>{t("KUBE_EDGE")}</div><div className={module3063.others}>{this.otherEdgeSofts.map((software)=><Module3058 key={software.name} software={software} simpleMode className={module3063.otherSoft}/>)}</div></>}{showConfirmForm ? this.renderConfirmForm() : this.renderEdgeSoftItem()}</>;
            }
        },
        {
            key: "otherEdgeSofts",
            get: function() {
                return this.props.formTemplate.edgeSofts?.filter(function(e) {
                    return e.name !== "edgecore";
                });
            }
        }
    ]);
    return r;
})(Component);
export default C;
