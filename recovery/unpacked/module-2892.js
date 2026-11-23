import "./module-15.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import Module1097 from "./module-1097.js";
import Module800 from "./module-800.js";
import module801 from "./module-801.js";
import { Component } from "./module-553.js";
import module2893 from "./module-2893.js";
const options = [
    {
        label: t("PODS"),
        value: "Pods"
    },
    {
        label: t("PERCENT"),
        value: "Percent"
    }
];
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
        t.triggerChange = module801(function() {
            const t_state = t.state;
            const { type, value, periodSeconds } = t_state;
            t.props.onChange({
                type,
                value,
                periodSeconds
            });
        }, 300);
        t.handleChange = function(e, a) {
            t.setState(module31({}, a, e), function() {
                return t.triggerChange();
            });
        };
        t.state = (({ type, value, periodSeconds } = {})=>({
                type,
                value,
                periodSeconds
            }))(e.value);
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.triggerChange();
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const state = this.state;
                const { value, type, periodSeconds } = state;
                return <div className={module2893.wrapper}><Module1097 prefix={t("POLICY_TYPE")}><module186.Select name="type" value={type} options={options} onChange={function(t) {
                    return _this.handleChange(t, "type");
                }}/></Module1097><Module1097 prefix={t("EXPANSION_VALUE")}><Module800 name="value" value={value} min={0} integer onChange={function(t) {
                    return _this.handleChange(t, "value");
                }}/></Module1097><Module1097 prefix={t("ACTIVATION_TIME")}><Module800 name="periodSeconds" integer min={0} value={periodSeconds} onChange={function(t) {
                    return _this.handleChange(t, "periodSeconds");
                }}/></Module1097></div>;
            }
        }
    ]);
    return r;
})(Component);
export default y;
y.defaultProps = {
    value: {},
    onChange: function() {}
};
