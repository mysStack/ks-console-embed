import "./module-15.js";
import "./module-5.js";
import "./module-48.js";
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
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import module1372 from "./module-1372.js";
const p = ((Component_1)=>{
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
        t.handleChangeValue = function(e, a) {
            const onChange = t.props.onChange;
            const unit = t.state.unit;
            t.setState({
                value: a
            });
            onChange(a ? `${a}${unit}` : a);
        };
        t.handleChangeUnit = function(unit) {
            const onChange = t.props.onChange;
            const value = t.state.value;
            t.setState({
                unit
            });
            onChange(value ? `${value}${unit}` : value);
        };
        t.state = {
            value: e.value.slice(0, -1),
            unit: e.value.slice(-1)
        };
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { value, unit } = state;
                return <div className={module1372.timeInput}><module186.Input className={module1372.input} value={value} onChange={this.handleChangeValue}/><module186.Select className={module1372.select} value={unit} options={this.options} onChange={this.handleChangeUnit}/></div>;
            }
        },
        {
            key: "options",
            get: function() {
                return [
                    {
                        label: t("SECONDS"),
                        value: "s"
                    },
                    {
                        label: t("MINUTES"),
                        value: "m"
                    },
                    {
                        label: t("HOURS"),
                        value: "h"
                    }
                ];
            }
        }
    ]);
    return r;
})(Component);
export default p;
