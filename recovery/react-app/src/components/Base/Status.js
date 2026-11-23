import "unpacked/module-15.js";
import "unpacked/module-16.js";
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
import module159 from "unpacked/module-159.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module838 from "components/Base/Indicator";
import module2341 from "unpacked/module-2341.js";
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
    function a() {
        module36(this, a);
        return t.apply(this, arguments);
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { style, className, name, type, total, ready, flicker } = props;
                return module553.default.createElement("span", {
                    className: module3(module2341.status, className),
                    style
                }, module553.default.createElement(module838, {
                    className: module2341.indicator,
                    type,
                    flicker
                }), module553.default.createElement("span", {
                    className: "font-bold"
                }, name), !module159(total) && !module159(ready) && module553.default.createElement("span", null, " (", ready, "/", total, ")"));
            }
        }
    ]);
    return a;
})(module553.PureComponent);
export default v;
v.propTypes = {
    style: module1.string,
    className: module1.string,
    name: module1.string,
    total: module1.number,
    ready: module1.number,
    type: module1.string,
    flicker: module1.bool
};
v.defaultProps = {
    type: "Running",
    flicker: false
};
