import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module14 from "unpacked/module-14.js";
import Module1328 from "components/Forms/Service/ExternalName";
import { SERVICE_TYPES, SERVICE_TYPES_VALUE } from "utils/constants";
import Module2938 from "pages/fedprojects/components/ServiceSetting/Form";
import module2941 from "unpacked/module-2941.js";
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
        e.handleOk = function() {
            const e_props = e.props;
            const { onSave, store, detail } = e_props;
            const resetSubRoute = e.context.resetSubRoute;
            const current = e.formRef.current;
            const store_list = store.list;
            const c = module14.toJS(store_list.selectedRowKeys).filter((e)=>e !== detail.uid);
            if (current) {
                current.validate(function() {
                    onSave(current.getData());
                    store_list.setSelectRowKeys(c);
                });
            }
            if (resetSubRoute) {
                resetSubRoute();
            }
        };
        e.handleCancel = function() {
            e.props.onCancel();
        };
        return e;
    }
    module37(r, [
        {
            key: "renderServiceSettings",
            value: function() {
                const props = this.props;
                const { cluster, formRef, isFederated, formProps, formTemplate, type } = props;
                return <Module2938 formRef={formRef} formTemplate={formTemplate} cluster={cluster} isFederated={isFederated} formProps={formProps} type={SERVICE_TYPES_VALUE[type]}/>;
            }
        },
        {
            key: "renderExternalName",
            value: function() {
                const props = this.props;
                const { formRef, formTemplate } = props;
                return <Module1328 formRef={formRef} formTemplate={formTemplate}/>;
            }
        },
        {
            key: "renderEmpty",
            value: function() {
                return <p className={module2941.empty}>{t("UNKNOWN_SERVICE_TYPE")}</p>;
            }
        },
        {
            key: "renderForm",
            value: function() {
                let e = null;
                switch(this.props.type){
                    case SERVICE_TYPES.VirtualIP:
                    case SERVICE_TYPES.Headless:
                        e = this.renderServiceSettings();
                        break;
                    case SERVICE_TYPES.ExternalName:
                        e = this.renderExternalName();
                        break;
                    default:
                        e = this.renderEmpty();
                }
                return e;
            }
        },
        {
            key: "render",
            value: function() {
                return <div>{this.renderForm()}</div>;
            }
        }
    ]);
    return r;
})(Component);
export default E;
E.propTypes = {
    type: module1.string,
    formTemplate: module1.object,
    onSave: module1.func,
    onCancel: module1.func
};
E.defaultProps = {
    type: "",
    formTemplate: {},
    onSave: function() {},
    onCancel: function() {}
};
