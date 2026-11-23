import "./module-15.js";
import "./module-5.js";
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
import module1 from "./module-1.js";
import module831 from "./module-831.js";
import Module788 from "./module-788.js";
import Module1736 from "./module-1736.js";
const h = ((Component_1)=>{
    module55(a, Component_1);
    var t = ((e)=>{
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
    })(a);
    function a(...n) {
        let e;
        module36(this, a);
        e = t.call(this, ...n);
        e.form = createRef();
        e.state = {
            formData: module831(e.props.detail)
        };
        e.handleOk = function() {
            const onOk = e.props.onOk;
            e.form.current.validator(function() {
                onOk(e.form.current.getData());
            });
        };
        return e;
    }
    module37(a, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (this.props.visible && this.props.visible !== e.visible) {
                    this.setState({
                        formData: module831(this.props.detail)
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, title, onCancel, isSubmitting, ...rest } = props;
                const formData = this.state.formData;
                return <Module788 width={960} title={title} onCancel={onCancel} onOk={this.handleOk} visible={visible} isSubmitting={isSubmitting}><Module1736 formRef={this.form} formTemplate={formData} {...rest}/></Module788>;
            }
        }
    ]);
    return a;
})(Component);
export default h;
h.propTypes = {
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool,
    isEditMode: module1.bool
};
h.defaultProps = {
    visible: false,
    isSubmitting: false,
    isEditMode: false,
    onOk: function() {},
    onCancel: function() {}
};
