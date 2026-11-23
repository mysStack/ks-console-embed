import "./module-15.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-118.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { Component, createRef } from "./module-553.js";
import module63 from "./module-63.js";
import module199 from "./module-199.js";
import module1 from "./module-1.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import module240 from "./module-240.js";
import Module885 from "components/EditMode";
import Module788 from "components/Base/Modal";
import Module852 from "components/Base/Switch";
import Module829 from "components/Forms/Base/Confirm";
import module971 from "components/Forms/Workload/VolumeSettings";
import module1042 from "components/Forms/Workload/AdvanceSettings";
import Module2447 from "./module-2447.js";
import module2449 from "./module-2449.js";
import module2457 from "./module-2457.js";
let l;
let u;
let o;
const w = observer((o = u = ((Component_1)=>{
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
        n.registerSubRoute = function(onSave, onCancel) {
            n.setState({
                subRoute: {
                    onSave,
                    onCancel
                }
            });
        };
        n.resetSubRoute = function() {
            n.setState({
                subRoute: {}
            });
        };
        n.handleModeChange = function() {
            n.setState({
                isCodeMode: !n.state.isCodeMode
            });
        };
        n.checkNodeSelectors = function({ formTemplate, isShowNotify }) {
            const l = isShowNotify === undefined || isShowNotify;
            const u = formTemplate?.spec?.nodeSelectors;
            const o = Array.isArray(u) && u.length > 0;
            if (!o && l) {
                module240.error(t("NODE_SELECTORS_EMPTY_DESC"));
            }
            return o;
        };
        n.handlePrev = function() {
            n.setState(function({ currentStep }) {
                return {
                    currentStep: Math.max(0, currentStep - 1)
                };
            });
        };
        n.handleNext = function() {
            const current = n.formRef.current;
            const formTemplate = n.state.formTemplate;
            const a = n.checkNodeSelectors({
                formTemplate
            });
            if (current) {
                current.validate(function() {
                    if (a) {
                        n.setState(function({ currentStep }) {
                            return {
                                currentStep: Math.min(n.steps.length - 1, currentStep + 1)
                            };
                        });
                    }
                });
            }
        };
        n.handleOk = function() {
            const onOk = n.props.onOk;
            const n_state = n.state;
            const { isCodeMode, formTemplate } = n_state;
            if (isCodeMode) {
                const formTemplate_1 = n.editor.current?.getData();
                if (n.checkNodeSelectors({
                    formTemplate: formTemplate_1
                })) {
                    onOk(formTemplate_1);
                }
            } else {
                const i = n.checkNodeSelectors({
                    formTemplate
                });
                n.formRef.current?.validate(function() {
                    const deploymentTemplate = formTemplate?.spec?.deploymentTemplate?.spec?.template?.spec?.deploymentTemplate;
                    if (deploymentTemplate) {
                        module199(formTemplate, {
                            spec: {
                                deploymentTemplate
                            }
                        });
                    }
                    if (i) {
                        onOk(formTemplate);
                    }
                });
            }
        };
        n.handleSubFormSave = function() {
            const subRoute = n.state.subRoute;
            if (subRoute && subRoute.onSave) {
                subRoute.onSave(function() {
                    n.setState({
                        subRoute: {}
                    });
                });
            }
        };
        n.handleSubFormCancel = function() {
            const subRoute = n.state.subRoute;
            if (subRoute && subRoute.onCancel) {
                subRoute.onCancel();
                n.setState({
                    subRoute: {}
                });
            }
        };
        n.renderSaveBar = function() {
            const subRoute = n.state.subRoute;
            if (module63(subRoute)) {
                return null;
            }
            return <Module829 className={module2457.confirm} onOk={n.handleSubFormSave} onCancel={n.handleSubFormCancel}/>;
        };
        n.state = {
            codeMode: false,
            currentStep: 0,
            subRoute: {},
            formTemplate: e.formTemplate,
            intializing: false
        };
        n.formRef = createRef();
        n.editor = createRef();
        return n;
    }
    module37(r, [
        {
            key: "getChildContext",
            value: function() {
                return {
                    registerSubRoute: this.registerSubRoute,
                    resetSubRoute: this.resetSubRoute
                };
            }
        },
        {
            key: "renderSteps",
            value: function() {
                const state = this.state;
                const { currentStep, isCodeMode } = state;
                return <div className={module2457.stepsWrapper}>{!isCodeMode && <Module2447 steps={this.steps} current={currentStep}/>}<Module852 className={module2457.codeMode} text={t("EDIT_YAML")} onChange={this.handleModeChange} checked={isCodeMode}/></div>;
            }
        },
        {
            key: "renderForm",
            value: function() {
                const state = this.state;
                const { formTemplate, currentStep } = state;
                const props = this.props;
                const { cluster, workspace, namespace, store, isEdgeTable } = props;
                const c = this.steps[currentStep];
                const { component: Component, onlyMetaData } = c;
                const d = {
                    formRef: this.formRef,
                    formTemplate,
                    cluster,
                    workspace,
                    isEdgeTable,
                    namespace,
                    module: "edgeappsets",
                    onlyMetaData,
                    prefix: "spec.deploymentTemplate.spec.template.",
                    store
                };
                return <Component {...d}/>;
            }
        },
        {
            key: "renderBody",
            value: function() {
                const state = this.state;
                const { intializing, isCodeMode } = state;
                if (intializing) {
                    return <module186.Loading className={module2457.loading}/>;
                }
                return <div className={module2457.form}>{isCodeMode ? <Module885 ref={this.editor} value={this.state.formTemplate}/> : this.renderForm()}{this.renderSaveBar()}</div>;
            }
        },
        {
            key: "renderFooter",
            value: function() {
                const onCancel = this.props.onCancel;
                const isSubmitting = this.props.store.isSubmitting;
                const state = this.state;
                const { isCodeMode, currentStep } = state;
                if (isCodeMode) {
                    return <div className={module2457.footer}><module186.Button onClick={onCancel}>{t("CANCEL")}</module186.Button><module186.Button type="control" onClick={this.handleOk} loading={isSubmitting} disabled={isSubmitting}>{t("INSTALL")}</module186.Button></div>;
                }
                const u = this.steps.length - 1;
                return <div className={module2457.footer}>{currentStep > 0 && <module186.Button type="control" onClick={this.handlePrev}>{t("PREVIOUS")}</module186.Button>}{currentStep < u ? <module186.Button type="control" onClick={this.handleNext}>{t("NEXT")}</module186.Button> : <module186.Button type="control" onClick={this.handleOk} loading={isSubmitting}>{t("INSTALL")}</module186.Button>}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formTemplate: _formTemplate, versionId: _versionId, onOk: _onOk, onCancel, isSubmitting: _isSubmitting, ...rest } = props;
                return <Module788 bodyClassName={module2457.body} icon="appcenter" onCancel={onCancel} rightScreen hideFooter {...rest}>{this.renderSteps()}{this.renderBody()}{this.renderFooter()}</Module788>;
            }
        },
        {
            key: "steps",
            get: function() {
                return [
                    {
                        title: "BASIC_INFORMATION",
                        component: module2449,
                        required: true
                    },
                    {
                        title: "STORAGE_SETTINGS",
                        component: module971,
                        required: true
                    },
                    {
                        title: "ADVANCED_SETTINGS",
                        component: module1042,
                        required: true,
                        onlyMetaData: true
                    }
                ];
            }
        }
    ]);
    return r;
})(Component), u.propTypes = {
    visible: module1.bool,
    store: module1.object,
    cluster: module1.string,
    workspace: module1.string,
    namespace: module1.string,
    onOk: module1.func,
    onCancel: module1.func,
    isEdgeWize: module1.bool
}, u.defaultProps = {
    visible: false,
    app: {},
    onOk: function() {},
    onCancel: function() {}
}, u.childContextTypes = {
    registerSubRoute: module1.func,
    resetSubRoute: module1.func
}, l = o)) || l;
export default w;
