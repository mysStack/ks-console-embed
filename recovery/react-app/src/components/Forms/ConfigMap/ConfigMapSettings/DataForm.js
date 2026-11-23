import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component, createRef } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module972 from "unpacked/module-972.js";
import module186 from "unpacked/module-186.js";
import { ReactComponent } from "unpacked/module-882.js";
import module2745 from "unpacked/module-2745.js";
const E = ((Component_1)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.formRef = createRef();
        e.state = {
            formData: e.getFormData()
        };
        e.registerForm = function() {
            const registerSubRoute = e.context.registerSubRoute;
            const onCancel = e.props.onCancel;
            if (registerSubRoute) {
                registerSubRoute(e.handleSubmit, onCancel);
            }
        };
        e.handleGoBack = function() {
            const resetSubRoute = e.context.resetSubRoute;
            if (resetSubRoute) {
                resetSubRoute();
            }
            e.props.onCancel();
        };
        e.handleSubmit = function(t) {
            const onOk = e.props.onOk;
            const r = e.formRef && e.formRef.current;
            if (r) {
                r.validate(function() {
                    const e = r.getData();
                    const { key, value } = e;
                    onOk(module31({}, module972(key), value));
                    if (t) {
                        t();
                    }
                });
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.registerForm();
            }
        },
        {
            key: "getFormData",
            value: function() {
                const props = this.props;
                const { detail, selectKey } = props;
                return {
                    key: selectKey || "",
                    value: detail[selectKey] || ""
                };
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { detail, selectKey } = props;
                return <div className={module2745.wrapper}><div className="h6"><a className="custom-icon" onClick={this.handleGoBack}><ReactComponent/></a>{detail[selectKey] ? t("EDIT_DATA_TCAP") : t("ADD_DATA_TCAP")}</div><div className={module2745.formWrapper}><module186.Form data={this.state.formData} ref={this.formRef}><module186.Form.Item label={t("DATA_KEY")} description={t("CONFIG_FIELD_DESC")}><module186.Input name="key"/></module186.Form.Item><module186.Form.Item label={t("DATA_VALUE")} description={t("ENTER_CONFIG_VALUE_DESC")}><module186.TextArea maxHeight={430} name="value" rows={4} autoResize/></module186.Form.Item></module186.Form></div></div>;
            }
        }
    ]);
    return r;
})(Component);
export default E;
E.defaultProps = {
    detail: {},
    selectKey: ""
};
E.contextTypes = {
    registerSubRoute: module1.func,
    resetSubRoute: module1.func
};
