import "./module-15.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module63 from "./module-63.js";
import module159 from "./module-159.js";
import module831 from "./module-831.js";
import module186 from "./module-186.js";
import module788 from "components/Base/Modal";
import Module843 from "components/Inputs/PropertiesInput";
import { isValidAnnotation } from "utils/index";
let l;
let o;
let u;
const C = observer((u = o = ((Component_1)=>{
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
        n.annotationValidator = function(e, a, r) {
            if (module159(a) || module63(a)) {
                return r();
            }
            if (isValidAnnotation(a)) {
                return void r();
            }
            return r({
                message: t("ANNOTATION_FORMAT_DESC")
            });
        };
        n.handleOk = function(e) {
            n.props.onOk(e);
        };
        n.state = {
            formData: module831(module14.toJS(e.detail._originData || e.detail))
        };
        return n;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (this.props.visible && this.props.visible !== e.visible) {
                    this.setState({
                        formData: module831(module14.toJS(this.props.detail._originData || this.props.detail))
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel, isSubmitting } = props;
                return <module788.Form title={t("EDIT_ANNOTATIONS")} icon="pen" visible={visible} width={960} data={this.state.formData} onOk={this.handleOk} onCancel={onCancel} isSubmitting={isSubmitting}><module186.Form.Item rules={[
                    {
                        validator: this.annotationValidator
                    }
                ]}><Module843 name="metadata.annotations" hiddenKeys={globals.config.preservedAnnotations} addText={t("ADD")}/></module186.Form.Item></module788.Form>;
            }
        }
    ]);
    return r;
})(Component), o.propTypes = {
    detail: module1.object,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
}, o.defaultProps = {
    detail: {},
    isSubmitting: false,
    onOk: function() {},
    onCancel: function() {}
}, l = u)) || l;
export default C;
