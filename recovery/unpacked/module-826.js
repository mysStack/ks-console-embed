import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-87.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-64.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-58.js";
import "./module-315.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module26 from "./module-26.js";
import module194 from "./module-194.js";
import module136 from "./module-136.js";
import module60 from "./module-60.js";
import module189 from "./module-189.js";
import { Component, createRef } from "./module-553.js";
import module1 from "./module-1.js";
import module240 from "./module-240.js";
import Module788 from "./module-788.js";
import Module852 from "./module-852.js";
import Module2047 from "./module-2047.js";
import Module2051 from "./module-2051.js";
import module2058 from "./module-2058.js";
const R = ((Component_1)=>{
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
        n.getFormDataFromCode = function(e) {
            const code2formParse = n.props.code2formParse;
            return (code2formParse === undefined ? function(e) {
                return e;
            } : code2formParse)(module60(e) ? e.reduce((acc, item)=>({
                    ...acc,
                    ...module31({}, item.kind.replace("Federated", ""), item)
                }), {}) : e);
        };
        n.handleModeChange = function() {
            const form2codeParse = n.props.form2codeParse;
            const a = form2codeParse === undefined ? (e)=>e : form2codeParse;
            n.setState(function({ isCodeMode, formTemplate }) {
                const u = Object.keys(formTemplate)[0];
                const o = [
                    `${u}.spec.template.totalReplicas`,
                    "totalReplicas",
                    `${u}.totalReplicas`
                ];
                const i = {
                    formTemplate: formTemplate = a(module189(formTemplate, o)),
                    isCodeMode: !isCodeMode
                };
                if (!isCodeMode && module194(module26(module88(n), "formRef.current.hasSubRoute")) && n.formRef.current.hasSubRoute()) {
                    return module240.warning(t("SAVE_FORM_TIP"));
                }
                if (!isCodeMode && module194(module26(module88(n), "formRef.current.getCurrentStep"))) {
                    i.currentStep = n.formRef.current.getCurrentStep();
                }
                if (isCodeMode && module194(module26(module88(n), "codeRef.current.getData"))) {
                    i.formTemplate = n.getFormDataFromCode(n.codeRef.current.getData());
                }
                return i;
            });
        };
        n.handleCode = function(e) {
            n.props.onOk(n.getFormDataFromCode(e));
        };
        n.state = {
            formTemplate: module136(e.formTemplate),
            isCodeMode: e.onlyCode || false,
            currentStep: 0
        };
        n.codeRef = createRef();
        n.formRef = createRef();
        return n;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (this.props.visible !== e.visible && this.props.visible) {
                    this.setState({
                        currentStep: 0,
                        isCodeMode: this.props.onlyCode || false,
                        formTemplate: module136(this.props.formTemplate)
                    });
                }
            }
        },
        {
            key: "renderForms",
            value: function() {
                const state = this.state;
                const { formTemplate, currentStep } = state;
                return <Module2047 {...this.props} ref={this.formRef} formTemplate={formTemplate} currentStep={currentStep}/>;
            }
        },
        {
            key: "renderCodeEditor",
            value: function() {
                const props = this.props;
                const { onCancel, isSubmitting } = props;
                const formTemplate = this.state.formTemplate;
                return <Module2051 ref={this.codeRef} formTemplate={formTemplate} onOk={this.handleCode} onCancel={onCancel} isSubmitting={isSubmitting}/>;
            }
        },
        {
            key: "renderOperations",
            value: function() {
                const props = this.props;
                const { noCodeEdit, onlyCode } = props;
                const isCodeMode = this.state.isCodeMode;
                if (noCodeEdit || onlyCode) {
                    return null;
                }
                return <Module852 className={module2058.switch} text={t("EDIT_YAML")} onChange={this.handleModeChange} checked={isCodeMode}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { name, width, visible, onCancel, noCodeEdit, ...rest } = props;
                const isCodeMode = this.state.isCodeMode;
                const title = this.props.title || t("CREATE_NAME", {
                    name: t(name.toUpperCase())
                });
                return <Module788 width={width || 960} title={title} bodyClassName={module2058.body} onCancel={onCancel} visible={visible} {...rest} operations={this.renderOperations()} hideFooter>{!noCodeEdit && isCodeMode ? this.renderCodeEditor() : this.renderForms()}</Module788>;
            }
        }
    ]);
    return r;
})(Component);
export default R;
R.propTypes = {
    title: module1.string,
    name: module1.string,
    module: module1.string,
    steps: module1.array,
    store: module1.object,
    formTemplate: module1.object,
    visible: module1.bool,
    okBtnText: module1.string,
    onOk: module1.func,
    onCancel: module1.func,
    noCodeEdit: module1.bool,
    isSubmitting: module1.bool,
    form2codeParse: module1.func,
    code2formParse: module1.func,
    cluster: module1.string
};
R.defaultProps = {
    visible: false,
    noCodeEdit: false,
    isSubmitting: false,
    code2formParse: function(e) {
        return e;
    },
    form2codeParse: function(e) {
        return e;
    },
    onOk: function() {},
    onCancel: function() {}
};
