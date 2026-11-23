import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-73.js";
import "unpacked/module-48.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-137.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import Module1671 from "components/Inputs/BoxSelect";
import module63 from "unpacked/module-63.js";
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
    function a(...n) {
        let e;
        module36(this, a);
        e = t.call(this, ...n);
        e.getValueFromProps = function(e) {
            if (e.value) {
                return e.value.slice(3, e.value.length - 3).split("|");
            }
            return [];
        };
        e.handleChange = function(t) {
            const onChange = e.props.onChange;
            if (module63(t)) {
                if (onChange) {
                    onChange("");
                }
            } else if (onChange) {
                onChange(`.*(${t.join("|")}).*`);
            }
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const value = this.getValueFromProps(this.props);
                return <Module1671 {...this.props} value={value} onChange={this.handleChange}/>;
            }
        }
    ]);
    return a;
})(Component);
export default p;
