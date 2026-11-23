import "./module-15.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module873 from "./module-873.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import module136 from "./module-136.js";
import module26 from "./module-26.js";
const y = ((e)=>{
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
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.handleFormChange = function() {
            const formTemplate = t.state.formTemplate;
            t.context.registerUpdate(t.name, formTemplate);
        };
        t.handleSubmit = function(e) {
            const onSave = t.props.onSave;
            const formTemplate = t.state.formTemplate;
            if (t.formRef.current) {
                t.formRef.current.validate(function() {
                    onSave(formTemplate, [
                        "ruler"
                    ]);
                    if (e) {
                        e();
                    }
                });
            }
        };
        t.resetData = function() {
            t.setState({
                formTemplate: module136(t.props.formTemplate)
            });
        };
        const t_props = t.props;
        const { updatedData, formTemplate } = t_props;
        t.state = {
            formTemplate: module136(updatedData || formTemplate)
        };
        t.formRef = module553.createRef();
        return t;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                const props = this.props;
                const { updatedData, formTemplate } = props;
                if (!(e.formTemplate === formTemplate && e.updatedData === updatedData)) {
                    this.setState({
                        formTemplate: module136(updatedData || formTemplate)
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                return module553.default.createElement(module186.Form, {
                    onChange: this.handleFormChange,
                    data: this.state.formTemplate,
                    ref: this.formRef
                }, module553.default.createElement(module186.Form.Group, null, module553.default.createElement(module186.Form.Item, {
                    label: t("CONTAINER_QUOTA")
                }, module553.default.createElement(module873, {
                    name: "ruler.resources",
                    ...this.resourceLimitProps
                }))));
            }
        },
        {
            key: "name",
            get: function() {
                return "ruler";
            }
        },
        {
            key: "resourceLimitProps",
            get: function() {
                const _this = this;
                const formTemplate = this.state.formTemplate;
                return {
                    memoryProps: {
                        unit: "Gi"
                    },
                    defaultValue: {
                        limits: {
                            cpu: module26(formTemplate, 'ruler.resources["limits.cpu"]'),
                            memory: module26(formTemplate, 'ruler.resources["limits.memory"]')
                        },
                        requests: {
                            cpu: module26(formTemplate, 'ruler.resources["requests.cpu"]'),
                            memory: module26(formTemplate, 'ruler.resources["requests.memory"]')
                        }
                    },
                    onError: function(t) {
                        _this.context.setError(!!t);
                    }
                };
            }
        }
    ]);
    return r;
})(module553.default.Component);
export default y;
y.contextTypes = {
    registerUpdate: module1.func,
    setError: module1.func
};
