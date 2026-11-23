import "unpacked/module-15.js";
import "unpacked/module-187.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component, createRef } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module74 from "unpacked/module-74.js";
import module801 from "unpacked/module-801.js";
import module241 from "unpacked/module-241.js";
import module186 from "unpacked/module-186.js";
import Module788 from "components/Base/Modal";
import Module1268 from "components/Base/Steps";
import steps from "pages/apps/components/Modals/VersionSubmit/steps";
import module4422 from "unpacked/module-4422.js";
const b = ((Component_1)=>{
    module55(a, Component_1);
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
            let r;
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a(e) {
        let t;
        module36(this, a);
        t = r.call(this, e);
        t.versionChange = module801(function(e, r) {
            module74(t.props.detail, r, e);
        }, 200);
        t.handleOk = async function e() {
            let r;
            let a;
            r = t.formRef.current;
            a = module241(t.props.detail, [
                "name",
                "description",
                "app_id",
                "version_id"
            ]);
            if (r) {
                r.validate(function() {
                    return t.props.onOk(a);
                });
            }
        };
        t.handleNext = function() {
            const __length = steps.length;
            t.setState(function({ currentStep }) {
                return {
                    currentStep: Math.min(currentStep + 1, __length - 1)
                };
            });
        };
        t.handlePrev = function() {
            t.setState(function({ currentStep, subRoute }) {
                return {
                    currentStep: Math.max(currentStep - 1, 0),
                    subRoute
                };
            });
        };
        t.formRef = createRef();
        t.state = {
            currentStep: 0,
            formTemplate: e.formTemplate
        };
        return t;
    }
    module37(a, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                const props = this.props;
                const { visible, formTemplate } = props;
                if (visible && visible !== e.visible) {
                    this.setState({
                        currentStep: 0,
                        formTemplate
                    });
                }
            }
        },
        {
            key: "renderTabs",
            value: function() {
                const currentStep = this.state.currentStep;
                if (steps.length < 2) {
                    return null;
                }
                return <div className={module4422.tabs}><Module1268 steps={steps} current={currentStep}/></div>;
            }
        },
        {
            key: "renderContent",
            value: function() {
                const currentStep = this.state.currentStep;
                const Component = steps[currentStep].component;
                if (Component) {
                    if (steps[currentStep].value === "updateLog") {
                        return <div className={module4422.content}>{<Component versionChange={this.versionChange} formData={this.props.detail} formRef={this.formRef}/>}</div>;
                    }
                    return <div className={module4422.content}>{<Component/>}</div>;
                }
                return null;
            }
        },
        {
            key: "renderFooter",
            value: function() {
                const isSubmitting = this.props.isSubmitting;
                const currentStep = this.state.currentStep;
                const a = steps || [];
                const n = a.every((e, t)=>!e.required || currentStep >= t);
                const o = currentStep < a.length - 1;
                return <div className={module4422.footer}>{currentStep ? <module186.Button type="default" onClick={this.handlePrev}>{t("PREVIOUS")}</module186.Button> : null}{o && <module186.Button type="control" onClick={this.handleNext}>{t("NEXT")}</module186.Button>}{n && <module186.Button type="control" loading={isSubmitting} disabled={isSubmitting} onClick={this.handleOk}>{t("OK")}</module186.Button>}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel } = props;
                return <Module788 width={960} title={t("SUBMIT_FOR_REVIEW")} description={t("SUBMIT_REVIEW_DESC")} icon="templet" bodyClassName={module4422.body} onCancel={onCancel} visible={visible} hideFooter><div>{this.renderTabs()}{this.renderContent()}{this.renderFooter()}</div></Module788>;
            }
        }
    ]);
    return a;
})(Component);
export default b;
b.propTypes = {
    formTemplate: module1.object,
    detail: module1.object,
    visible: module1.bool,
    isSubmitting: module1.bool,
    onOk: module1.func,
    onCancel: module1.func
};
b.defaultProps = {
    formTemplate: {},
    detail: {},
    visible: false,
    isSubmitting: false,
    onOk: function() {},
    onCancel: function() {}
};
