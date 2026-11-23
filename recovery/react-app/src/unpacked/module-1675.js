import "./module-15.js";
import "./module-5.js";
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
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import module2883 from "./module-2883.js";
const g = ((Component_1)=>{
    module55(r, Component_1);
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.state = {
            inputValue: e.props.value || e.props.defaultValue,
            userEmail: globals.user.email
        };
        e.handleInputChange = function(t) {
            const inputValue = t?.target?.value ?? t;
            e.setState({
                inputValue
            });
            if (e.props.onChange) {
                e.props.onChange(inputValue);
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { className, onChange: _onChange, showIcon, ...rest } = props;
                const inputValue = this.props.inputValue;
                return <div className={module3(module2883.extraBox, className, {
                    "input-padding-right-30": showIcon
                })}><module186.Input value={inputValue} {...rest} onChange={this.handleInputChange}/>{showIcon && <module186.Tooltip content={t("ADD_CURRENT_USER")} modifiers={{
                    preventOverflow: {
                        enabled: false
                    }
                }}><module186.Icon className={module2883.IconBox} name="link" onClick={function() {
                    return _this.handleInputChange(_this.state.userEmail);
                }}/></module186.Tooltip>}</div>;
            }
        }
    ]);
    return r;
})(Component);
export default g;
g.propTypes = {
    showIcon: module1.bool
};
g.defaultProps = {
    showIcon: false
};
