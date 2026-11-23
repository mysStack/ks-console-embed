import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
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
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import Module875 from "components/Tables/Base/Empty";
import Module3070 from "./module-3070.js";
import Module1698 from "./module-1698.js";
import Module3072 from "./module-3072.js";
const S = ((Component_1)=>{
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
        t.handleInstall = function() {
            return t.setState({
                showConfirmForm: "install"
            });
        };
        t.handleFormChange = function(containerEngineSofts) {
            const t_props = t.props;
            const a_name = t_props.name;
            t_props.onSaveChange(a_name, {
                ...t_props.formTemplate,
                containerEngineSofts
            });
        };
        t.handleCardActionClick = function(showConfirmForm, { name }, configFile) {
            if (showConfirmForm === "modify_conf") {
                const o = t.state.containerEngines.map((t)=>{
                    const { name: name_1, todoTasks } = t;
                    const u = todoTasks === undefined ? [] : todoTasks;
                    const c = `${name_1}_${showConfirmForm}`;
                    if (name_1 !== name || u.includes(c)) {
                        return t;
                    }
                    return {
                        ...t,
                        todoTasks: [].concat(module61(u), [
                            c
                        ]),
                        configFile
                    };
                });
                t.setState({
                    containerEngines: o
                });
                return void t.handleFormChange(o);
            }
            t.setState({
                selectedContainerKey: name
            }, function() {
                t.setState({
                    showConfirmForm
                });
            });
        };
        t.handleAddContainer = function(e) {
            const containerEngines = t.state.containerEngines;
            const r = [].concat(module61(containerEngines), [
                e
            ]);
            t.handleFormChange(r);
            t.setState({
                containerEngines: r
            });
            t.handleHideConfirmForm();
        };
        t.handleActionConfirm = function(e) {
            t.setState({
                containerEngines: e
            });
            t.handleFormChange(e);
            t.handleHideConfirmForm();
        };
        t.handleHideConfirmForm = function() {
            return t.setState({
                showConfirmForm: "",
                selectedContainer: undefined
            });
        };
        t.state = {
            showConfirmForm: e.batchMode && module63(e.formTemplate.containerEngineSofts) ? "install" : "",
            selectedContainerKey: undefined,
            containerEngines: e.formTemplate.containerEngineSofts
        };
        return t;
    }
    module37(r, [
        {
            key: "renderConfirmForm",
            value: function() {
                const showConfirmForm = this.state.showConfirmForm;
                const props = this.props;
                const { batchMode, versionList } = props;
                if (showConfirmForm === "install") {
                    return <Module3072 batchMode={batchMode} versionList={versionList} onConfirm={this.handleAddContainer} onCancel={this.handleHideConfirmForm}/>;
                }
                return <Module1698 type={showConfirmForm} containerKey={this.state.selectedContainerKey} containers={this.state.containerEngines} onConfirm={this.handleActionConfirm} onCancel={this.handleHideConfirmForm}/>;
            }
        },
        {
            key: "renderContainerItem",
            value: function() {
                const _this = this;
                const a = this.state.containerEngines.filter(({ name, todoTasks })=>!(todoTasks === undefined ? [] : todoTasks).includes(`${name}_uninstall`));
                return <>{module63(a) ? <Module875 icon="turn-dot-duotone" title={t("SOFT_INSTALLED_EMPTY", {
                    resource: t("CONTAINER_ENGINE")
                })} desc={t("CONTAINER_ENGINE_EMPTY_DESC")} action=<module186.Button key="install" type="control" onClick={this.handleInstall}>{t("INSTALL")}</module186.Button>/> : <>{a.map((container)=><Module3070 key={container.name} container={container} onClick={_this.handleCardActionClick}/>)}</>}</>;
            }
        },
        {
            key: "render",
            value: function() {
                const showConfirmForm = this.state.showConfirmForm;
                return <>{showConfirmForm ? this.renderConfirmForm() : this.renderContainerItem()}</>;
            }
        }
    ]);
    return r;
})(Component);
export default S;
