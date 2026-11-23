import "./module-15.js";
import "./module-5.js";
import "./module-6.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-110.js";
import "./module-7.js";
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
import module63 from "./module-63.js";
import module159 from "./module-159.js";
import module471 from "./module-471.js";
import module3 from "./module-3.js";
import module2100 from "./module-2100.js";
const g = ((e)=>{
    module55(a, e);
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
        e.state = {
            unit: e.unit
        };
        e.handleChange = function(t) {
            const onChange = e.props.onChange;
            const value = t.target.value;
            onChange(module159(value) || module63(value) ? "" : `${value}${e.state.unit}`);
        };
        e.handleUnitChange = function(unit) {
            const onChange = e.props.onChange;
            e.setState({
                unit
            }, function() {
                onChange(module159(e.value) || module63(e.value) ? "" : `${e.value}${unit}`);
            });
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { name, unitOptions, inputClassName, className } = props;
                return module553.default.createElement("div", {
                    className: module3(module2100.box, className)
                }, module553.default.createElement("div", {
                    className: module3(module2100.value, inputClassName)
                }, module553.default.createElement(module186.Input, {
                    name,
                    onChange: this.handleChange,
                    value: this.value
                })), module553.default.createElement("div", {
                    className: module2100.unit
                }, module553.default.createElement(module186.Select, {
                    value: this.state.unit,
                    onChange: this.handleUnitChange,
                    options: unitOptions
                })));
            }
        },
        {
            key: "unit",
            get: function() {
                const props = this.props;
                const { value, unitOptions } = props;
                let r = props.defaultValue || unitOptions[0].value;
                unitOptions.forEach((e)=>{
                    if (value?.endsWith(e.value)) {
                        r = e.value;
                    }
                });
                return r;
            }
        },
        {
            key: "value",
            get: function() {
                const value = this.props.value;
                return module471(value, this.unit);
            }
        }
    ]);
    return a;
})(module553.Component);
export default g;
