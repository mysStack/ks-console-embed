import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-16.js";
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
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module186 from "./module-186.js";
import module800 from "./module-800.js";
import module2685 from "./module-2685.js";
const h = ((e)=>{
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
        e.handleSelectChange = function(t) {
            const e_props = e.props;
            const a_name = e_props.name;
            e_props.onChange(t, a_name);
        };
        e.handleNumberChange = function(t) {
            const e_props = e.props;
            const a_name = e_props.name;
            e_props.onChange(t, a_name);
        };
        e.handleInputChange = function(t) {
            const e_props = e.props;
            const a_name = e_props.name;
            e_props.onChange(t.target.value, a_name);
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { param, ...rest } = props;
                if (param.options) {
                    const options = param.options.map((e)=>({
                            label: e,
                            value: e
                        }));
                    return module553.default.createElement(module186.Select, {
                        options,
                        ...rest,
                        onChange: this.handleSelectChange
                    });
                }
                if (param.type === "integer") {
                    return module553.default.createElement(module800, {
                        className: module2685.number,
                        min: param.min,
                        unit: param.unit,
                        ...rest,
                        onChange: this.handleNumberChange,
                        showUnit: true
                    });
                }
                return module553.default.createElement(module186.Input, {
                    ...rest,
                    onChange: this.handleInputChange
                });
            }
        }
    ]);
    return a;
})(module553.Component);
export default h;
