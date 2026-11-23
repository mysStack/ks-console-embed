import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
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
import "./module-31.js";
import "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component, cloneElement } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module2247 from "./module-2247.js";
const g = ((Component_1)=>{
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
                const { prefix, suffix, children, ...rest } = props;
                const u = cloneElement(children, {
                    ...children.props,
                    className: module3({
                        "ks-input-addons-prefix": !!prefix,
                        "ks-input-addons-suffix": !!suffix
                    }, children.props.className),
                    ...rest
                });
                return <div className={module3(module2247.wrapper, "ks-input-addons")}>{prefix && <div className={module2247.text}>{prefix}</div>}{u}{suffix && <div className={module2247.text}>{suffix}</div>}</div>;
            }
        }
    ]);
    return a;
})(Component);
export default g;
g.propTypes = {
    prefix: module1.any,
    suffix: module1.any,
    name: module1.string,
    value: module1.any,
    onChange: module1.func
};
