import "unpacked/module-15.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-118.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module88 from "unpacked/module-88.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module26 from "unpacked/module-26.js";
import module136 from "unpacked/module-136.js";
import module194 from "unpacked/module-194.js";
import module74 from "unpacked/module-74.js";
import { Component, createRef } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import Module788 from "components/Base/Modal";
import Module852 from "components/Base/Switch";
import { ICON_TYPES } from "utils/constants";
import Module2662 from "components/Modals/FullCreate/Steps";
import Module2664 from "components/Modals/FullCreate/Code";
import module2666 from "unpacked/module-2666.js";
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
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.setSteps = function(steps) {
            t.setState({
                steps
            });
        };
        t.setCurrentStep = function(currentStep) {
            t.setState({
                currentStep
            });
        };
        t.setFormData = function(formTemplate) {
            t.setState({
                formTemplate
            });
        };
        t.handleOk = function() {
            let e;
            if (t.state.isCodeMode && module194(module26(module88(t), "codeRef.current.getData"))) {
                e = t.codeRef.current.getData();
            } else {
                e = t.state.formTemplate;
                const a = Array.isArray(e.tags) && e.tags.map((e)=>e.name).join(",");
                if (a) {
                    module74(e, [
                        "metadata",
                        "annotations",
                        "cluster.kubesphere.io/label-ids"
                    ], a);
                }
            }
            t.props.onOk(e);
        };
        t.handlePrev = function() {
            t.setState(function({ currentStep }) {
                return {
                    currentStep: Math.max(0, currentStep - 1)
                };
            });
        };
        t.handleNext = function() {
            const current = t.formRef.current;
            const steps = t.state.steps;
            if (current) {
                current.validate(function() {
                    t.setState(function({ currentStep }) {
                        return {
                            currentStep: Math.min(steps.length - 1, currentStep + 1)
                        };
                    });
                });
            }
        };
        t.handleModeChange = function() {
            t.setState(function({ isCodeMode, formTemplate }) {
                if (isCodeMode && module194(module26(module88(t), "codeRef.current.getData"))) {
                    formTemplate = t.codeRef.current.getData();
                }
                return {
                    isCodeMode: !isCodeMode,
                    formTemplate
                };
            });
        };
        t.state = {
            currentStep: 0,
            steps: e.steps,
            formTemplate: module136(e.formTemplate)
        };
        t.formRef = createRef();
        t.codeRef = createRef();
        return t;
    }
    module37(r, [
        {
            key: "getChildContext",
            value: function() {
                return {
                    setSteps: this.setSteps,
                    setCurrentStep: this.setCurrentStep,
                    setFormData: this.setFormData
                };
            }
        }
    ]);
    module37(r, [
        {
            key: "renderForm",
            value: function() {
                const props = this.props;
                const { store, tagsStore, onAddTags, hostedInOptions } = props;
                const state = this.state;
                const l_formTemplate = state.formTemplate;
                const Component = state.steps[state.currentStep].component;
                const c = {
                    hostedInOptions,
                    store,
                    formTemplate: l_formTemplate,
                    formRef: this.formRef,
                    tagsStore,
                    onAddTags
                };
                return <div className={module2666.wrapper}><div className={module2666.form}>{<Component {...c}/>}</div></div>;
            }
        },
        {
            key: "renderCode",
            value: function() {
                const formTemplate = this.state.formTemplate;
                return <Module2664 ref={this.codeRef} formTemplate={formTemplate}/>;
            }
        },
        {
            key: "renderHeader",
            value: function() {
                const props = this.props;
                const { module, title, onCancel, isEdgeWize } = props;
                const state = this.state;
                const { steps, currentStep, isCodeMode } = state;
                return <div className={module2666.header}><div className={module2666.title}><module186.Icon name="close" size={20} clickable onClick={onCancel}/><span/><module186.Icon name={isEdgeWize ? "edge-cluster" : ICON_TYPES[module]} size={20}/><span>{title}</span></div>{!isCodeMode && <div className={module2666.steps}><div/><Module2662 steps={steps} current={currentStep}/></div>}<Module852 className={module2666.switch} text={t("EDIT_YAML")} onChange={this.handleModeChange} checked={isCodeMode}/><div className={module2666.headerBottom}/></div>;
            }
        },
        {
            key: "renderFooter",
            value: function() {
                const props = this.props;
                const { onCancel, isSubmitting } = props;
                const state = this.state;
                const { steps, currentStep } = state;
                if (state.isCodeMode) {
                    return <div className={module2666.footer}><div className={module2666.wrapper}><div className="text-right"><module186.Button onClick={onCancel}>{t("CANCEL")}</module186.Button><module186.Button type="control" onClick={this.handleOk} loading={isSubmitting}>{t("CREATE")}</module186.Button></div></div></div>;
                }
                const u = steps.length - 1;
                return <div className={module2666.footer}><div className={module2666.wrapper}><div className="text-right"><module186.Button onClick={onCancel}>{t("CANCEL")}</module186.Button>{currentStep > 0 && <module186.Button type="control" onClick={this.handlePrev}>{t("PREVIOUS")}</module186.Button>}{currentStep < u ? <module186.Button type="control" onClick={this.handleNext}>{t("NEXT")}</module186.Button> : <module186.Button type="control" onClick={this.handleOk} loading={isSubmitting}>{t("CREATE")}</module186.Button>}</div></div></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const visible = this.props.visible;
                const isCodeMode = this.state.isCodeMode;
                return <Module788 className={module2666.modal} bodyClassName={module2666.body} visible={visible} hideHeader hideFooter fullScreen>{this.renderHeader()}<div className={module2666.content}>{isCodeMode ? this.renderCode() : this.renderForm()}</div>{this.renderFooter()}</Module788>;
            }
        }
    ]);
    return r;
})(Component);
export default C;
C.propTypes = {
    formTemplate: module1.object,
    steps: module1.array,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func
};
C.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {}
};
C.childContextTypes = {
    setSteps: module1.func,
    setCurrentStep: module1.func,
    setFormData: module1.func
};
