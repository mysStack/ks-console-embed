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
import Module788 from "./module-788.js";
import Module829 from "./module-829.js";
import Module1670 from "./module-1670.js";
import module831 from "./module-831.js";
import module63 from "./module-63.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module1 from "./module-1.js";
import { Component, createRef } from "./module-553.js";
import module2901 from "./module-2901.js";
let l;
let o;
let u;
const T = observer((u = o = ((Component_1)=>{
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
        t.handleOk = function() {
            t.formRef && t.formRef;
            if (t.formRef.current) {
                t.formRef.current.validate(function() {
                    const e = t.formRef.current.getData();
                    t.props.onOk(e);
                });
            }
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
        t.state = {
            formData: module831(module14.toJS(e.detail._originData || e.detail)),
            subRoute: {}
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
                    resetSubRoute: this.resetSubRoute
                };
            }
        },
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
            key: "renderSaveBar",
            value: function() {
                const subRoute = this.state.subRoute;
                if (module63(subRoute)) {
                    return null;
                }
                return <Module829 className={module2901.confirm} onOk={this.handleSubFormSave} onCancel={this.handleSubFormCancel}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel, isSubmitting, ...rest } = props;
                return <Module788 title={t("EDIT_CUSTOM_SCALING")} icon="pen" visible={visible} width={960} onOk={this.handleOk} onCancel={onCancel} isSubmitting={isSubmitting}><Module1670 {...rest} formTemplate={this.state.formData} formRef={this.formRef}/>{this.renderSaveBar()}</Module788>;
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
}, o.childContextTypes = {
    registerSubRoute: module1.func,
    resetSubRoute: module1.func
}, l = u)) || l;
export default T;
