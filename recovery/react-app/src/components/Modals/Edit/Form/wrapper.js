import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-58.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import module3 from "unpacked/module-3.js";
import module26 from "unpacked/module-26.js";
import module136 from "unpacked/module-136.js";
import Module829 from "components/Forms/Base/Confirm";
import module1678 from "unpacked/module-1678.js";
export default function(E) {
    return ((Component_1)=>{
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
            t.handleFormChange = function() {
                t.setState({
                    showFormActions: true
                });
            };
            t.handleSaveChange = function() {
                const t_props = t.props;
                const { formRef, onSaveChange } = t_props;
                const n = module26(formRef, "current");
                if (n) {
                    n.validate(function() {
                        t.setState({
                            showFormActions: false
                        }, function() {
                            if (onSaveChange) {
                                onSaveChange(t.name, t.state.formData);
                            }
                            t.prevState = {
                                ...t.state,
                                formData: module136(t.state.formData)
                            };
                        });
                    });
                }
            };
            t.handleCancelChange = function() {
                const e = t.prevState || t.initialState;
                t.setState({
                    ...e
                }, function() {
                    t.prevState = module136(e);
                });
            };
            t.state = {
                showFormActions: false,
                formData: module136(module14.toJS(e.formData))
            };
            t.initialState = module136(t.state);
            return t;
        }
        module37(r, [
            {
                key: "renderFormActions",
                value: function() {
                    return <Module829 className={module3(module1678.formActions, module31({}, module1678.active, this.state.showFormActions))} onOk={this.handleSaveChange} onCancel={this.handleCancelChange}/>;
                }
            },
            {
                key: "render",
                value: function() {
                    const props = this.props;
                    const { module, formRef, data: _data, formData: _formData, detail: _detail, ...rest } = props;
                    return <div className={module1678.formWrapper}><E {...rest} formTemplate={this.formTemplate} formProps={this.formProps} formRef={formRef} module={module}/>{this.renderFormActions()}</div>;
                }
            },
            {
                key: "name",
                get: function() {
                    return this.props.name;
                }
            },
            {
                key: "formTemplate",
                get: function() {
                    const e = this.props.templatePrefix ? `formData.${this.props.templatePrefix}` : "formData";
                    return module26(this.state, e, {});
                }
            },
            {
                key: "formProps",
                get: function() {
                    return {
                        onChange: this.handleFormChange
                    };
                }
            }
        ]);
        return r;
    })(Component);
};
