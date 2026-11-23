import "./module-15.js";
import "./module-5.js";
import "./module-48.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-137.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module3 from "./module-3.js";
import module1492 from "./module-1492.js";
const p = ((e)=>{
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
        e.handleClick = function() {
            const e_props = e.props;
            const t_data = e_props.data;
            e_props.onSelect(t_data);
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { data, inputValue, isFocused } = props;
                const n = data.split(inputValue)[0];
                return module553.default.createElement("div", {
                    className: module3(module1492.item, {
                        "is-focus": isFocused
                    }),
                    onClick: this.handleClick
                }, module553.default.createElement("span", null, n), data.length > n.length && module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("span", {
                    className: "highlight"
                }, inputValue), module553.default.createElement("span", null, data.slice(n.length + inputValue.length))));
            }
        }
    ]);
    return a;
})(module553.Component);
export default p;
