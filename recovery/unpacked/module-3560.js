import "./module-15.js";
import "./module-5.js";
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
import * as module553 from "./module-553.js";
import module186 from "./module-186.js";
import module829 from "./module-829.js";
import module3561 from "./module-3561.js";
const v = ((e)=>{
    module55(r, e);
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
        e.formRef = module553.default.createRef();
        e.handleSubmit = function() {
            const e_props = e.props;
            const { onOk, onChange } = e_props;
            const current = e.formRef.current;
            if (current) {
                current.validate(function() {
                    onOk(current.getData());
                    if (onChange) {
                        onChange();
                    }
                });
            }
        };
        e.handleCancel = function() {
            e.props.hideEdit();
        };
        e.handleOpen = function() {
            e.props.showEdit();
        };
        return e;
    }
    module37(r, [
        {
            key: "renderContent",
            value: function() {
                const props = this.props;
                const { formData, children } = props;
                return module553.default.createElement("div", {
                    className: module3561.form
                }, module553.default.createElement(module186.Form, {
                    ref: this.formRef,
                    type: "inner",
                    data: formData
                }, module553.default.createElement("div", {
                    className: module3561.formContent
                }, children)), module553.default.createElement(module829, {
                    className: module3561.confirm,
                    onOk: this.handleSubmit,
                    onCancel: this.handleCancel
                }));
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { title, selected, isEdit } = props;
                return module553.default.createElement(module186.Dropdown, {
                    visible: isEdit,
                    placement: "bottom",
                    closeAfterClick: false,
                    onOpen: this.handleOpen,
                    content: this.renderContent(),
                    modifiers: this.modifiers,
                    always: isEdit
                }, module553.default.createElement("div", null, title, selected && module553.default.createElement("span", {
                    className: module3561.modify
                }, module553.default.createElement("span", null, t("EDIT")), module553.default.createElement(module186.Icon, {
                    type: "light",
                    size: 20,
                    name: "chevron-down"
                }))));
            }
        },
        {
            key: "modifiers",
            get: function() {
                return {
                    computeStyle: {
                        gpuAcceleration: false
                    }
                };
            }
        }
    ]);
    return r;
})(module553.Component);
export default v;
