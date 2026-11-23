import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
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
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import module4764 from "unpacked/module-4764.js";
const m = ((e)=>{
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
        e.handleOptionsClick = function(t, a) {
            e.props.onChange(a);
        };
        return e;
    }
    module37(a, [
        {
            key: "renderOptions",
            value: function() {
                const options = this.props.options;
                return module553.default.createElement(module186.Menu, {
                    className: module4764.options,
                    onClick: this.handleOptionsClick
                }, options.map((e)=>module553.default.createElement(module186.Menu.MenuItem, {
                        key: e.value
                    }, e.label)));
            }
        },
        {
            key: "renderControl",
            value: function() {
                const props = this.props;
                const { className, value } = props;
                return module553.default.createElement("div", {
                    className: module3(module4764.value, className)
                }, module553.default.createElement("span", {
                    className: module4764.label
                }, value), module553.default.createElement(module186.Icon, {
                    className: module4764.rightIcon,
                    name: "chevron-down",
                    type: "light"
                }));
            }
        },
        {
            key: "render",
            value: function() {
                return module553.default.createElement(module186.Dropdown, {
                    theme: "dark",
                    content: this.renderOptions()
                }, this.renderControl());
            }
        }
    ]);
    return a;
})(module553.Component);
export default m;
