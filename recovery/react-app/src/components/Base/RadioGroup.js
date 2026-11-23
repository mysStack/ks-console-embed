import "unpacked/module-15.js";
import "unpacked/module-187.js";
import "unpacked/module-11.js";
import "unpacked/module-18.js";
import "unpacked/module-27.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-58.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module63 from "unpacked/module-63.js";
import module159 from "unpacked/module-159.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
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
                const { value, options, onChange, ...rest } = props;
                if (module63(options)) {
                    return null;
                }
                return <module186.RadioGroup wrapClassName={module3("radio-group-button", {
                    "radio-with-badge": options.every((e)=>!module159(e.count))
                })} value={value} onChange={onChange} {...rest}>{options.filter((e)=>e && !e.hidden).map((e)=><module186.RadioButton key={e.value} value={e.value}>{e.label}{!module159(e.count) && <module186.Badge status={e.value === value ? "success" : "default"} count={Number(e.count)}/>}</module186.RadioButton>)}</module186.RadioGroup>;
            }
        }
    ]);
    return a;
})(Component);
export default g;
g.propTypes = {
    options: module1.array,
    value: module1.any,
    onChange: module1.func
};
