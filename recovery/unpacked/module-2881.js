import "./module-15.js";
import "./module-5.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-813.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-24.js";
import "./module-193.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module455 from "./module-455.js";
import module2882 from "./module-2882.js";
import module240 from "./module-240.js";
import { PATTERN_TAG } from "./module-72.js";
import module1674 from "./module-1674.js";
const y = ((e)=>{
    module55(r, e);
    var a = ((e)=>{
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
    })(r);
    function r(...l_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...l_1);
        e.state = {
            value: ""
        };
        e.focus = function() {
            e.inputBox.focus();
        };
        e.handleChange = function(t) {
            const value = t.target.value;
            const onChange = e.props.onChange;
            e.setState({
                value
            });
            onChange(t, value);
        };
        e.handlePressEnter = function(a) {
            a.stopPropagation();
            const e_props = e.props;
            const { onAdd, onDelete } = e_props;
            const value = e.state.value;
            if (a.key === "Enter") {
                if (value.trim() !== "") {
                    if (!PATTERN_TAG.test(value) || value.length > 63) {
                        return void module240.error({
                            content: t("PATTERN_TAG_VALUE_INVALID_TIP")
                        });
                    }
                    e.setState({
                        value: ""
                    }, function() {
                        onAdd(value);
                    });
                }
            } else {
                if (a.key === "Backspace") {
                    onDelete();
                }
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const value = this.state.value;
                const props = this.props;
                const { style, placeholder } = props;
                return module553.default.createElement("div", {
                    style,
                    className: module1674.autosuggest,
                    ref: function(t) {
                        _this.autosuggest = t;
                    }
                }, module553.default.createElement(module2882, {
                    className: module1674.autosuggestInput,
                    type: "text",
                    onKeyDown: this.handlePressEnter,
                    onChange: this.handleChange,
                    placeholder,
                    ref: function(t) {
                        _this.inputBox = t;
                    },
                    value
                }));
            }
        }
    ]);
    return r;
})(module553.Component);
y.propTypes = {
    onChange: module1.func,
    onDelete: module1.func,
    prefixCls: module1.string,
    className: module1.string,
    style: module1.string,
    placeholder: module1.string
};
y.defaultProps = {
    prefixCls: "autosuggest",
    onAdd: module455,
    onDelete: module455,
    onChange: module455
};
export default y;
