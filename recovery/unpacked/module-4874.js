import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-86.js";
import "./module-27.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-75.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-315.js";
import "./module-31.js";
import "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module159 from "./module-159.js";
import module63 from "./module-63.js";
import module471 from "./module-471.js";
import module801 from "./module-801.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import module4875 from "./module-4875.js";
const O = ((Component_1)=>{
    module55(a, Component_1);
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
    function a(...n_1) {
        let e;
        module36(this, a);
        e = t.call(this, ...n_1);
        e.handleChange = function(t) {
            const e_props = e.props;
            const { onChange, unit, max, integer } = e_props;
            const value = t.target.value;
            e.debounceHandleChange(value);
            if (module63(value) || !integer && value.indexOf(".") > 0 && `${e.props.value}`.indexOf(".") === -1 || value === "-" && module63(e.props.value)) {
                onChange(value);
            } else {
                let l = Number(value);
                if (!isNaN(l)) {
                    if (!module159(max) && l > max) {
                        l = max;
                    }
                    if (!(integer || value.startsWith("0") && !value.startsWith("0.") || l !== Number(value) || `${l}` === value)) {
                        l = value;
                    }
                    if (!module159(l) && unit) {
                        l = `${l}${unit}`;
                    }
                    if (onChange) {
                        onChange(l);
                    }
                }
            }
        };
        e.debounceHandleChange = module801(function(t) {
            const e_props = e.props;
            const { onChange, unit, min, max, integer } = e_props;
            if (module63(t) || !integer && t.indexOf(".") > 0 && `${e.props.value}`.indexOf(".") === -1 || t === "-" && module63(e.props.value)) {
                onChange(t);
            } else {
                let l = Number(t);
                if (!isNaN(l)) {
                    if (!module159(min) && l < min) {
                        l = min;
                    }
                    if (!module159(max) && l > max) {
                        l = max;
                    }
                    if (!(integer || t.startsWith("0") && !t.startsWith("0.") || l !== Number(t) || `${l}` === t)) {
                        l = t;
                    }
                    if (!module159(l) && unit) {
                        l = `${l}${unit}`;
                    }
                    if (onChange) {
                        onChange(l);
                    }
                }
            }
        }, 500);
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, unit, showUnit, value, defaultValue, onChange: _onChange, integer: _integer, ...rest } = props;
                let i = module159(value) ? defaultValue : value;
                if (unit) {
                    i = module471(i, unit);
                }
                const u = {
                    type: "text",
                    ...rest,
                    value: module159(i) ? "" : i,
                    onChange: this.handleChange
                };
                if (unit && showUnit) {
                    return <div className={module3(className, module4875.withUnit)}><module186.Input {...u}/><span>{unit}</span></div>;
                }
                return <module186.Input className={className} {...u}/>;
            }
        }
    ]);
    return a;
})(Component);
O.propTypes = {
    unit: module1.string,
    showUnit: module1.bool,
    value: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    defaultValue: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    min: module1.number,
    max: module1.number,
    integer: module1.bool,
    onChange: module1.func
};
O.defaultProps = {
    unit: "",
    showUnit: false,
    integer: false,
    onChange: function() {}
};
export default O;
