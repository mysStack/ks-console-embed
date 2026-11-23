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
import module2574 from "./module-2574.js";
const h = ((e)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.formRef = module553.default.createRef();
        e.handleSubmit = function() {
            const onOk = e.props.onOk;
            const current = e.formRef.current;
            if (current) {
                current.validate(function() {
                    onOk(current.getData());
                });
            }
        };
        e.handleCancel = function() {
            e.props.showEdit("");
        };
        e.handleClick = function() {
            const e_props = e.props;
            const t_formData = e_props.formData;
            e_props.showEdit(t_formData);
        };
        e.stopPropagation = function(e) {
            e.stopPropagation();
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
                    className: module2574.form,
                    onClick: this.stopPropagation
                }, module553.default.createElement(module186.Form, {
                    ref: this.formRef,
                    type: "inner",
                    data: formData
                }, module553.default.createElement("div", {
                    className: module2574.formContent
                }, children)), module553.default.createElement(module829, {
                    className: module2574.confirm,
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
                    content: this.renderContent(),
                    modifiers: this.modifiers,
                    always: isEdit,
                    onClick: this.handleClick
                }, module553.default.createElement("div", {
                    onClick: this.stopPropagation
                }, title, selected && module553.default.createElement("span", {
                    className: module2574.modify
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
export default h;
