import "./module-15.js";
import "./module-18.js";
import "./module-16.js";
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
import * as module553 from "./module-553.js";
import { observer } from "./module-239.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import module136 from "./module-136.js";
import module3579 from "./module-3579.js";
import module3580 from "./module-3580.js";
import module3581 from "./module-3581.js";
let o;
let u;
let c;
const TabPanel = module186.Tabs.TabPanel;
const O = observer((c = u = ((e)=>{
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
                        "gateway",
                        "ingester",
                        "router"
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
        const u = updatedData || formTemplate;
        t.state = {
            formTemplate: module136(u)
        };
        t.formRef = module553.createRef();
        return t;
    }
    module37(r, [
        {
            key: "name",
            get: function() {
                return "dataAccess";
            }
        }
    ]);
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                const props = this.props;
                const { updatedData, formTemplate } = props;
                const n = updatedData || formTemplate;
                if (!(e.formTemplate === formTemplate && e.updatedData === updatedData)) {
                    this.setState({
                        formTemplate: module136(n)
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const formTemplate = this.state.formTemplate;
                return module553.default.createElement(module186.Form, {
                    onChange: this.handleFormChange,
                    data: formTemplate,
                    ref: this.formRef
                }, module553.default.createElement(module186.Tabs, {
                    type: "button"
                }, this.tabs.map(({ label, value, Component })=>module553.default.createElement(TabPanel, {
                        label,
                        name: value,
                        key: value
                    }, module553.default.createElement(Component, {
                        formTemplate
                    })))));
            }
        },
        {
            key: "tabs",
            get: function() {
                return [
                    {
                        label: t("GATEWAY_SETTINGS"),
                        value: "gateway",
                        Component: module3579
                    },
                    {
                        label: t("DATA_ROUTER"),
                        value: "router",
                        Component: module3580
                    },
                    {
                        label: t("LOCAL_STORAGE"),
                        value: "ingester",
                        Component: module3581
                    }
                ];
            }
        }
    ]);
    return r;
})(module553.default.Component), u.contextTypes = {
    registerUpdate: module1.func,
    setError: module1.func
}, o = c)) || o;
export default O;
