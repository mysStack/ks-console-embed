import "unpacked/module-12.js";
import "unpacked/module-187.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import Module1268 from "components/Base/Steps";
import Module829 from "components/Forms/Base/Confirm";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module856 from "unpacked/module-856.js";
import module1 from "unpacked/module-1.js";
import { Component, createRef } from "unpacked/module-553.js";
import module2050 from "unpacked/module-2050.js";
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
        t.hasSubRoute = function() {
            return !module63(t.state.subRoute);
        };
        t.getCurrentStep = function() {
            return t.state.currentStep;
        };
        t.handleCreate = function() {
            const current = t.formRef.current;
            const t_props = t.props;
            const { onOk, formTemplate } = t_props;
            if (current) {
                current.validate(function() {
                    t.setState({
                        subRoute: {}
                    });
                    onOk(formTemplate);
                });
            }
        };
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
        t.handleNext = module856(function() {
            const current = t.formRef.current;
            const length = t.state.steps.length;
            if (current) {
                current.validate(function() {
                    t.setState({
                        currentStep: Math.min(t.state.currentStep + 1, length - 1),
                        subRoute: {}
                    });
                });
            }
        }, 300);
        t.handlePrev = function() {
            t.setState(function({ currentStep, subRoute }) {
                let currentStep_1 = currentStep;
                if (subRoute && subRoute.onCancel) {
                    subRoute.onCancel();
                    subRoute = {};
                } else {
                    currentStep_1 = Math.max(currentStep - 1, 0);
                }
                return {
                    currentStep: currentStep_1,
                    subRoute
                };
            });
        };
        t.handleSubFormSave = function() {
            const subRoute = t.state.subRoute;
            if (subRoute && subRoute.onSave) {
                subRoute.onSave(function() {
                    t.setState({
                        subRoute: {}
                    });
                });
            }
        };
        t.handleSubFormCancel = function() {
            const subRoute = t.state.subRoute;
            if (subRoute && subRoute.onCancel) {
                subRoute.onCancel();
                t.setState({
                    subRoute: {}
                });
            }
        };
        t.registerSubRoute = function(onSave, onCancel) {
            t.setState({
                subRoute: {
                    onSave,
                    onCancel
                }
            });
        };
        t.resetSubRoute = function() {
            t.setState({
                subRoute: {}
            });
        };
        t.handleBupButtonProps = function(e) {
            t.setState({
                buttonProps: {
                    ...t.state.buttonProps,
                    ...e
                }
            });
        };
        t.state = {
            currentStep: e.currentStep || 0,
            subRoute: {},
            steps: e.steps,
            buttonProps: {
                ok: {},
                cancel: {},
                prev: {},
                next: {}
            }
        };
        t.formRef = createRef();
        return t;
    }
    module37(r, [
        {
            key: "getChildContext",
            value: function() {
                return {
                    registerSubRoute: this.registerSubRoute,
                    resetSubRoute: this.resetSubRoute,
                    setSteps: this.setSteps,
                    setCurrentStep: this.setCurrentStep
                };
            }
        }
    ]);
    module37(r, [
        {
            key: "renderTabs",
            value: function() {
                const state = this.state;
                const { steps, currentStep } = state;
                if (steps.length < 2) {
                    return null;
                }
                return <div className={module2050.tabs}><Module1268 steps={steps} current={currentStep}/></div>;
            }
        },
        {
            key: "renderContent",
            value: function() {
                const state = this.state;
                const { steps, currentStep } = state;
                const contentWidth = this.props.contentWidth;
                const N = module26(steps, `[${currentStep}].component`);
                if (N) {
                    return <div className={module2050.contentWrapper}><div className={module2050.content} style={{
                        width: contentWidth || 920
                    }}>{<N formRef={this.formRef} {...this.props} setButtonProps={this.handleBupButtonProps}/>}</div></div>;
                }
                return null;
            }
        },
        {
            key: "renderFooter",
            value: function() {
                const state = this.state;
                const { subRoute, steps, currentStep, buttonProps } = state;
                const props = this.props;
                const { onCancel, okBtnText, isSubmitting } = props;
                const f = steps.every((e, t)=>!e.required || currentStep >= t);
                const p = currentStep < steps.length - 1;
                return <div className={module2050.footer}><module186.Button onClick={onCancel} {...buttonProps.cancel}>{t("CANCEL")}</module186.Button>{currentStep ? <module186.Button type="default" onClick={this.handlePrev} {...buttonProps.prev} data-test="modal-previous">{t("PREVIOUS")}</module186.Button> : null}{p && <module186.Button type="control" onClick={this.handleNext} disabled={!module63(subRoute)} {...buttonProps.next} data-test="modal-next">{t("NEXT")}</module186.Button>}{f && <module186.Button type="control" onClick={this.handleCreate} loading={isSubmitting} disabled={isSubmitting || !module63(subRoute)} {...buttonProps.ok} data-test="modal-create">{okBtnText || t("CREATE")}</module186.Button>}</div>;
            }
        },
        {
            key: "renderSaveBar",
            value: function() {
                const subRoute = this.state.subRoute;
                if (module63(subRoute)) {
                    return null;
                }
                return <Module829 className={module2050.confirm} onOk={this.handleSubFormSave} onCancel={this.handleSubFormCancel}/>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div>{this.renderTabs()}{this.renderContent()}{this.renderSaveBar()}{this.renderFooter()}</div>;
            }
        }
    ]);
    return r;
})(Component);
export default S;
S.propTypes = {
    module: module1.string,
    type: module1.string,
    store: module1.object,
    steps: module1.array,
    formTemplate: module1.object,
    isSubmitting: module1.bool,
    onOk: module1.func,
    cluster: module1.string
};
S.defaultProps = {
    isSubmitting: false,
    onOk: function() {}
};
S.childContextTypes = {
    registerSubRoute: module1.func,
    resetSubRoute: module1.func,
    setSteps: module1.func,
    setCurrentStep: module1.func
};
