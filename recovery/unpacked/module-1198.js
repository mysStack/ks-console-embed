import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-27.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
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
import "./module-553.js";
import module800 from "./module-800.js";
import module159 from "./module-159.js";
import module471 from "./module-471.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import module3171 from "./module-3171.js";
const S = ((e)=>{
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
    function a(...n_1) {
        let e;
        module36(this, a);
        e = t.call(this, ...n_1);
        e.add = function() {
            const e_props = e.props;
            const { onChange, min, max, value, defaultValue } = e_props;
            if (!e_props.disabled) {
                const u = module159(defaultValue) ? min - 1 : defaultValue;
                const c = module159(value) || value === "" ? u : value;
                if (c < max) {
                    onChange(Number(c) + 1, "add");
                }
            }
        };
        e.subtract = function() {
            const e_props = e.props;
            const { onChange, min, value, defaultValue } = e_props;
            if (!e_props.disabled) {
                const o = module159(defaultValue) ? min + 1 : defaultValue;
                const u = module159(value) || value === "" ? o : value;
                if (u > min) {
                    onChange(Number(u) - 1);
                }
            }
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, unit, showUnit, value, defaultValue, onChange: _onChange, integer: _integer, showFunc, style = {}, ...rest } = props;
                let p = module159(value) ? defaultValue : value;
                if (unit) {
                    p = module471(p, unit);
                }
                const g = {
                    type: "text",
                    ...rest,
                    value: module159(p) ? "" : p,
                    onChange: this.handleChange
                };
                if (unit && showUnit || showFunc) {
                    return <div className={module3(className, module3171.withUnit)} style={style}><module186.Input {...g}/><div className={module3171.funcContainer}><span>{unit}</span>{showFunc && <div className={module3171.func}><module186.Icon name="chevron-up" clickable onClick={this.add}/><module186.Icon name="chevron-down" clickable onClick={this.subtract}/></div>}</div></div>;
                }
                return <module186.Input className={className} style={style} {...g}/>;
            }
        }
    ]);
    return a;
})(module800);
export default S;
