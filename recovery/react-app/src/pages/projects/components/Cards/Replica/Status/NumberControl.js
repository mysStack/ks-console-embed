import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import { COLORS_MAP } from "utils/constants";
import module186 from "unpacked/module-186.js";
import module1813 from "unpacked/module-1813.js";
const v = ((e)=>{
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
        e.handlePlusOne = function() {
            const e_props = e.props;
            const { value, onChange } = e_props;
            if (onChange) {
                onChange(value + 1);
            }
        };
        e.handleMinusOne = function() {
            const e_props = e.props;
            const { value, onChange } = e_props;
            if (onChange) {
                onChange(value - 1);
            }
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const className = this.props.className;
                const color = {
                    primary: COLORS_MAP.white,
                    secondary: COLORS_MAP.white
                };
                return module553.default.createElement("div", {
                    className: module3(module1813.control, className)
                }, module553.default.createElement(module186.Icon, {
                    className: module1813.add,
                    name: "add",
                    size: 24,
                    color,
                    onClick: this.handlePlusOne,
                    clickable: true
                }), module553.default.createElement(module186.Icon, {
                    className: module1813.substract,
                    name: "substract",
                    size: 24,
                    color,
                    onClick: this.handleMinusOne,
                    clickable: true
                }));
            }
        }
    ]);
    return a;
})(module553.PureComponent);
v.propTypes = {
    className: module1.string,
    value: module1.number,
    onChange: module1.func
};
export default v;
