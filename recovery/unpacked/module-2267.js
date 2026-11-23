import "./module-15.js";
import "./module-11.js";
import "./module-29.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component, createRef } from "./module-553.js";
import module1 from "./module-1.js";
import module801 from "./module-801.js";
import module63 from "./module-63.js";
import module159 from "./module-159.js";
import module837 from "./module-837.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import module2268 from "./module-2268.js";
const b = ((Component_1)=>{
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
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.triggerChange = module801(function() {
            t.props.onChange(t.state.value);
        });
        t.handleClick = function(value) {
            t.setState({
                value,
                showOptions: false
            }, function() {
                t.triggerChange();
            });
        };
        t.toggleShowOptions = function() {
            t.setState({
                showOptions: !t.state.showOptions
            });
        };
        t.handleShowOptions = function() {
            t.setState({
                showOptions: true
            });
        };
        t.handleHideOptions = function() {
            t.setState({
                showOptions: false
            });
        };
        t.state = {
            value: module159(e.value) ? e.defaultValue : e.value,
            showOptions: false
        };
        t.optionsRef = createRef();
        return t;
    }
    module37(r, [
        {
            key: "renderOption",
            value: function(e, a) {
                const _this = this;
                return <div key={e.uid || e.value} onClick={function() {
                    return _this.handleClick(e.value);
                }} className={module3(module2268.option, module31({}, module2268.selected, a))}><div className={module2268.optionCol}><span className={module2268.optionLabel}>{e.label}</span>{e.isDefault && <span className={module2268.defaultTag}>{t("DEFAULT")}</span>}</div><p>{e.url}</p></div>;
            }
        },
        {
            key: "renderOptions",
            value: function() {
                const _this = this;
                const props = this.props;
                const { options, disabled } = props;
                const value = this.state.value;
                if (disabled || module63(options)) {
                    return null;
                }
                const l = options.find((e)=>module837(e.value, value));
                return <div className={module2268.options}>{l && this.renderOption(l, true)}{options.filter((e)=>!module837(e.value, value)).map((t)=>_this.renderOption(t))}</div>;
            }
        },
        {
            key: "renderControl",
            value: function() {
                const props = this.props;
                const { value, defaultValue, placeholder, options, disabled } = props;
                const o = value || defaultValue;
                const i = options.find((e)=>module837(e.value, o)) || placeholder || {};
                return <div className={module2268.control}><span className={module2268.label}>{i.label}</span>{!disabled && <module186.Icon className={module3(module2268.rightIcon, module31({}, module2268.rightIcon_toggle, this.state.showOptions))} name="chevron-down" size={20}/>}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, disabled } = props;
                return <div className={module3(module2268.wrapper, module31({}, module2268.disabled, disabled), className)} onClick={this.toggleShowOptions}><module186.Dropdown closeAfterClick={false} visible={this.state.showOptions} onOpen={this.handleShowOptions} onClose={this.handleHideOptions} content={this.renderOptions()}>{this.renderControl()}</module186.Dropdown></div>;
            }
        }
    ]);
    return r;
})(Component);
export default b;
b.propTypes = {
    className: module1.string,
    value: module1.any,
    defaultValue: module1.any,
    options: module1.array.isRequired,
    onChange: module1.func
};
b.defaultProps = {
    className: "",
    defaultValue: "",
    options: [],
    onChange: function() {}
};
