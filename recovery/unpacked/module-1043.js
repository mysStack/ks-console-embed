import "./module-15.js";
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
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module2335 from "./module-2335.js";
const p = ((Component_1)=>{
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
    function a() {
        module36(this, a);
        return t.apply(this, arguments);
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { value, className, text, rightText } = props;
                const l = {
                    width: `${100 * value}%`
                };
                let u = "default";
                if (value >= 0.8) {
                    u = "warning";
                }
                if (value >= 0.95) {
                    u = "danger";
                }
                const o = {
                    left: `${value > 0.35 ? value / 2 * 100 : 100 * (value + 0.01)}%`,
                    transform: value > 0.35 ? "translateX(-50%)" : "",
                    color: value > 0.35 ? "#fff" : "#79879c"
                };
                return <div className={module3(module2335.wrapper, className)}><div className={module3(module2335.bar, module2335[u])} style={l}/>{text && !!value && <span className={module2335.text} style={o}>{text}</span>}{rightText && <span className={module2335.rightText}>{rightText}</span>}</div>;
            }
        }
    ]);
    return a;
})(Component);
export default p;
p.propTypes = {
    value: module1.number.isRequired,
    className: module1.string
};
p.defaultProps = {
    value: 0
};
