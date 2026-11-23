import "./module-15.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component, createRef } from "./module-553.js";
import module186 from "./module-186.js";
import Module788 from "./module-788.js";
import module14 from "./module-14.js";
import module831 from "./module-831.js";
import Module885 from "./module-885.js";
import module1 from "./module-1.js";
import module199 from "./module-199.js";
import module2710 from "./module-2710.js";
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
        t.formRef = createRef();
        t.handleSubmit = function() {
            const current = t.formRef.current;
            const formData = t.state.formData;
            if (current) {
                current.validate(function() {
                    const t_props = t.props;
                    const e_formTemplate = t_props.formTemplate;
                    t_props.onOk(module199({}, formData, e_formTemplate));
                });
            }
        };
        t.state = {
            formData: module831(module14.toJS(e.detail._originData || e.detail))
        };
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formTemplate, visible, readOnly, store, onOk: _onOk, ...rest } = props;
                return <Module788 width={960} visible={visible} {...rest} onOk={this.handleSubmit} okText={t("OK")} isSubmitting={store.isSubmitting} store={store} hideFooter={readOnly}><module186.Form data={formTemplate} ref={this.formRef}><div className={module2710.editor}><module186.Form.Item label={t("CLUSTER_CONFIG")} unControl><Module885 mode="yaml" name="spec.config" options={this.editOptions}/></module186.Form.Item></div></module186.Form></Module788>;
            }
        },
        {
            key: "editOptions",
            get: function() {
                return {
                    width: "100%",
                    height: "100%"
                };
            }
        }
    ]);
    return r;
})(Component);
export default S;
S.propTypes = {
    formTemplate: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    readOnly: module1.bool,
    onCancel: module1.func
};
S.defaultProps = {
    formTemplate: {},
    visible: false,
    readOnly: false,
    onOk: function() {},
    onCancel: function() {}
};
