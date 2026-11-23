import "./module-15.js";
import "./module-11.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component, createRef } from "./module-553.js";
import module1 from "./module-1.js";
import module14 from "./module-14.js";
import Module788 from "./module-788.js";
import Module1328 from "./module-1328.js";
import { SERVICE_TYPES, SERVICE_TYPES_VALUE } from "./module-72.js";
import Module3350 from "./module-3350.js";
import module3351 from "./module-3351.js";
const y = ((Component_1)=>{
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
        t.handleOk = function() {
            const t_props = t.props;
            const { onOk, store, detail } = t_props;
            const current = t.formRef.current;
            const store_list = store.list;
            const u = module14.toJS(store_list.selectedRowKeys).filter((e)=>e !== detail.uid);
            if (current) {
                current.validate(function() {
                    onOk(current.getData());
                    store_list.setSelectRowKeys(u);
                });
            }
        };
        t.handleCancel = function() {
            t.props.onCancel();
        };
        t.formRef = createRef();
        t.state = {
            formTemplate: module14.toJS(e.detail._originData)
        };
        return t;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                const detail = this.props.detail;
                if (detail._originData !== e.detail._originData) {
                    this.setState({
                        formTemplate: module14.toJS(detail._originData)
                    });
                }
            }
        },
        {
            key: "renderServiceSettings",
            value: function() {
                const props = this.props;
                const { cluster, type } = props;
                return <Module3350 formRef={this.formRef} formTemplate={this.state.formTemplate} onCancel={this.resetState} cluster={cluster} type={SERVICE_TYPES_VALUE[type]}/>;
            }
        },
        {
            key: "renderExternalName",
            value: function() {
                return <Module1328 formRef={this.formRef} formTemplate={this.state.formTemplate} onCancel={this.resetState}/>;
            }
        },
        {
            key: "renderEmpty",
            value: function() {
                return <p className={module3351.empty}>{t("UNKNOWN_SERVICE_TYPE")}</p>;
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
                const props = this.props;
                const { visible, isSubmitting, type } = props;
                return <Module788 width={1162} title={t("EDIT_SERVICE")} onOk={type !== SERVICE_TYPES.Unknown ? this.handleOk : null} onCancel={this.handleCancel} visible={visible} isSubmitting={isSubmitting}>{this.renderForm()}</Module788>;
            }
        }
    ]);
    return r;
})(Component);
export default y;
y.propTypes = {
    visible: module1.bool,
    type: module1.string,
    detail: module1.object,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
};
y.defaultProps = {
    visible: false,
    type: "",
    detail: {},
    onOk: function() {},
    onCancel: function() {},
    isSubmitting: false
};
