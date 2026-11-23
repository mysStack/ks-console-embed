import "./module-15.js";
import "./module-187.js";
import "./module-11.js";
import "./module-18.js";
import "./module-27.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module63 from "./module-63.js";
import module159 from "./module-159.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
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
                })} value={value} onChange={onChange} {...rest}>{options.filter((e)=>e && !e.hidden).map((e)=>{
                    let a;
                    let r;
                    if (e.tooltip) {
                        return <module186.Tooltip key={e.value} content={e.tooltip.content} placement={e.tooltip.placement}><module186.RadioButton value={e.value} disabled={(a = e?.disabled) !== null && a !== undefined && a}>{e.label}{!module159(e.count) && <module186.Badge status={e.value === value ? "success" : "default"} count={Number(e.count)}/>}</module186.RadioButton></module186.Tooltip>;
                    }
                    return <module186.RadioButton key={e.value} value={e.value} disabled={(r = e?.disabled) !== null && r !== undefined && r}>{e.label}{!module159(e.count) && <module186.Badge status={e.value === value ? "success" : "default"} count={Number(e.count)}/>}</module186.RadioButton>;
                })}</module186.RadioGroup>;
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
