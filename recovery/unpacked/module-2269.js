import "./module-15.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module31 from "./module-31.js";
import "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module194 from "./module-194.js";
import module189 from "./module-189.js";
import module455 from "./module-455.js";
import module2270 from "./module-2270.js";
const b = ((e)=>{
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
    function a(e) {
        let r;
        module36(this, a);
        r = t.call(this, e);
        r.focus = function() {
            r.node.focus();
        };
        r.blur = function() {
            r.node.blur();
        };
        r.handleChange = function(e) {
            const value_1 = e.target.value;
            const r_props = r.props;
            const { value, onChange } = r_props;
            const value_2 = value || value_1;
            r.setState({
                value: value_2
            });
            if (onChange !== module455) {
                onChange(e, value_1);
            }
        };
        r.handleKeyDown = function(e) {
            const r_props = r.props;
            const { onPressEnter, onKeyDown } = r_props;
            if (e.keyCode === 13 && onPressEnter) {
                onPressEnter(e);
            }
            if (onKeyDown) {
                onKeyDown(e);
            }
        };
        r.state = {
            value: String(e.value || e.defaultValue),
            isFocus: false
        };
        return r;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { className, size, disabled, children, ...rest } = props;
                const value = this.state.value;
                return module553.default.createElement("span", {
                    className: module3(module2270.input, className, module31({}, `is-${size}`, size))
                }, children, module553.default.createElement("input", {
                    ...module189(rest, "schemas", "onKeyDown", "onPressEnter", "onChange", "value", "defaultValue", "validateStatus", "validateHelp", "validateIcon", "validateOnChange", "validateOnBlur"),
                    disabled: module194(disabled) ? disabled() : disabled,
                    onKeyDown: this.handleKeyDown,
                    onChange: this.handleChange,
                    value,
                    ref: function(t) {
                        _this.node = t;
                    },
                    "data-test": "imageSearch"
                }), module553.default.createElement("span", {
                    className: module3(module2270.border, "input")
                }));
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function(e, t) {
                if ("value" in e && e.value !== t.value) {
                    return {
                        value: e.value
                    };
                }
                return null;
            }
        }
    ]);
    return a;
})(module553.PureComponent);
b.propTypes = {
    name: module1.string,
    type: module1.string,
    className: module1.string,
    size: module1.oneOf([
        "small",
        "default",
        "large"
    ]),
    value: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    defaultValue: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    disabled: module1.oneOfType([
        module1.bool,
        module1.func
    ]),
    onChange: module1.func,
    onPressEnter: module1.func,
    onKeyDown: module1.func
};
b.defaultProps = {
    type: "text",
    size: "default",
    disabled: false,
    onChange: module455,
    onPressEnter: module455,
    onKeyDown: module455,
    defaultValue: ""
};
export default b;
