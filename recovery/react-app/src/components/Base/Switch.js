import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module63 from "unpacked/module-63.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import module2046 from "unpacked/module-2046.js";
const g = ((e)=>{
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
        e.toggleSwitch = function() {
            const e_props = e.props;
            const t_checked = e_props.checked;
            e_props.onChange(!t_checked);
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                let e;
                const props = this.props;
                const { className, disabled, type, text, checked } = props;
                const i = !module63(text);
                return module553.default.createElement(module186.Button, {
                    className: module3(module2046.wrapper, module31({}, module2046[type], checked), className),
                    type: "default",
                    onClick: this.toggleSwitch
                }, module553.default.createElement("label", {
                    className: module3(module2046.switch, (e = {}, module31(e, module2046.disabled, disabled), module31(e, module2046.on, checked), e))
                }, i && module553.default.createElement("span", {
                    className: module2046.inner
                }, text)));
            }
        }
    ]);
    return a;
})(module553.PureComponent);
export default g;
g.propTypes = {
    className: module1.string,
    type: module1.string,
    text: module1.string,
    disabled: module1.bool,
    checked: module1.bool,
    onChange: module1.func
};
g.defaultProps = {
    type: "primary",
    checked: false,
    onChange: function() {}
};
