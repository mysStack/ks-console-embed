import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-29.js";
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
import module186 from "unpacked/module-186.js";
import module3 from "unpacked/module-3.js";
import * as module553 from "unpacked/module-553.js";
import module5049 from "unpacked/module-5049.js";
const m = ((e)=>{
    module55(n, e);
    var r = ((e)=>{
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
            let r;
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(...a) {
        let e;
        module36(this, n);
        e = r.call(this, ...a);
        e.handleOptionsClick = function(t, r) {
            e.props.onChange(r);
        };
        return e;
    }
    module37(n, [
        {
            key: "renderOptions",
            value: function() {
                const options = this.props.options;
                return module553.default.createElement(module186.Menu, {
                    className: module5049.options,
                    onClick: this.handleOptionsClick
                }, options.map((e)=>module553.default.createElement(module186.Menu.MenuItem, {
                        key: e.value
                    }, module553.default.createElement("p", {
                        className: module5049.text,
                        title: e.label
                    }, e.label))));
            }
        },
        {
            key: "renderControl",
            value: function() {
                const props = this.props;
                const { className, value, options } = props;
                return module553.default.createElement("div", {
                    className: module3(module5049.value, className)
                }, module553.default.createElement("span", {
                    className: module5049.label
                }, t("CLUSTER_VALUE", {
                    value: options.find((e)=>e.value === value)?.label
                })), module553.default.createElement(module186.Icon, {
                    className: module5049.rightIcon,
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
                    content: this.renderOptions(),
                    positionFixed: true
                }, this.renderControl());
            }
        }
    ]);
    return n;
})(module553.Component);
export default m;
