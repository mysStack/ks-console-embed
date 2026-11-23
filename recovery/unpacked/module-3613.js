import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
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
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component, createRef } from "./module-553.js";
import module136 from "./module-136.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import module240 from "./module-240.js";
import Module788 from "./module-788.js";
import module435 from "./module-435.js";
import Module3614 from "./module-3614.js";
import module3616 from "./module-3616.js";
import module3618 from "./module-3618.js";
import module3623 from "./module-3623.js";
function _(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, r);
    }
    return a;
}
const O = ((Component_1)=>{
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
        n.handleOk = function() {
            if (n.emptyCluster) {
                module240.info(t("CLUSTER_FIELD_EMPTY"));
            } else {
                n.props.onOk({
                    ...n.state.formTemplate
                });
            }
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
            if (current) {
                current.validate(function() {
                    n.setState(function({ currentStep }) {
                        return {
                            currentStep: Math.min(n.steps.length - 1, currentStep + 1)
                        };
                    });
                });
            }
        };
        n.state = {
            currentStep: 0,
            formTemplate: module136(module435.workspaces())
        };
        n.formRef = createRef();
        return n;
    }
    module37(r, [
        {
            key: "renderForm",
            value: function() {
                const props = this.props;
                const { store, form } = props;
                const state = this.state;
                const { formTemplate, currentStep } = state;
                const o = this.steps[currentStep];
                const Component = o.component;
                const c = {
                    store,
                    formTemplate,
                    defaultClusterType: form.defaultClusterType
                };
                if (o.isForm) {
                    c.formRef = this.formRef;
                } else {
                    c.ref = this.formRef;
                }
                return <div className={module3623.formWrapper}><div className={module3623.wrapper}><div className={module3623.form}>{<Component {...c}/>}</div></div></div>;
            }
        },
        {
            key: "renderHeader",
            value: function() {
                const props = this.props;
                const { title, onCancel } = props;
                const currentStep = this.state.currentStep;
                return <div className={module3623.header}><div className={module3623.title}><module186.Icon name="close" size={20} clickable onClick={onCancel}/><span/><module186.Icon name="enterprise" size={20}/><span>{title}</span></div><div className={module3623.wrapper}>{this.steps.length > 1 && <Module3614 steps={this.steps} current={currentStep}/>}</div><div className={module3623.headerBottom}/></div>;
            }
        },
        {
            key: "renderFooter",
            value: function() {
                const props = this.props;
                const { onCancel, isSubmitting } = props;
                const currentStep = this.state.currentStep;
                const l = this.steps.length - 1;
                return <div className={module3623.footer}><div className={module3623.wrapper}><div className="text-right"><module186.Button onClick={onCancel}>{t("CANCEL")}</module186.Button>{currentStep > 0 && <module186.Button type="control" onClick={this.handlePrev}>{t("PREVIOUS")}</module186.Button>}{currentStep < l ? <module186.Button type="control" onClick={this.handleNext}>{t("NEXT")}</module186.Button> : <module186.Button type="control" onClick={this.handleOk} loading={isSubmitting}>{t("CREATE")}</module186.Button>}</div></div></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const visible = this.props.visible;
                return <Module788 className={module3623.modal} bodyClassName={module3623.body} visible={visible} hideHeader hideFooter fullScreen>{this.renderHeader()}{this.renderForm()}{this.renderFooter()}</Module788>;
            }
        },
        {
            key: "steps",
            get: function() {
                if (globals.app.isMultiCluster) {
                    return [
                        {
                            title: "BASIC_INFORMATION",
                            component: module3616,
                            required: true,
                            isForm: true
                        },
                        {
                            title: "CLUSTER_SETTINGS",
                            component: module3618,
                            required: true
                        }
                    ];
                }
                return [
                    {
                        title: "BASIC_INFORMATION",
                        component: module3616,
                        required: true,
                        isForm: true
                    }
                ];
            }
        },
        {
            key: "emptyCluster",
            get: function() {
                const formTemplate = this.state.formTemplate;
                return !(formTemplate && formTemplate.spec && formTemplate.spec.placement && formTemplate.spec.placement.clusters);
            }
        }
    ]);
    return r;
})(Component);
export default O;
O.propTypes = {
    visible: module1.bool,
    title: module1.string.isRequired,
    form: module1.shape({
        defaultClusterType: module1.string
    }),
    namespace: module1.string,
    sampleApp: module1.string,
    onOk: module1.func,
    onCancel: module1.func
};
O.defaultProps = {
    visible: false,
    form: {
        defaultClusterType: ""
    },
    onOk: function() {},
    onCancel: function() {}
};
