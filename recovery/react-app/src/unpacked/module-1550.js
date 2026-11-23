import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
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
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import { Empty } from "components/Base/index";
import module801 from "./module-801.js";
import module63 from "./module-63.js";
import module195 from "./module-195.js";
import module159 from "./module-159.js";
import module1 from "./module-1.js";
import { Component, createRef } from "./module-553.js";
import module837 from "./module-837.js";
import module2407 from "./module-2407.js";
const _ = ((Component_1)=>{
    module55(a, Component_1);
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
        r.handleDOMClick = function(e) {
            if (r.optionsRef && r.optionsRef.current && !r.optionsRef.current.contains(e.target) && r.controlRef && r.controlRef.current && !r.controlRef.current.contains(e.target)) {
                r.setState({
                    showOptions: false
                });
            }
        };
        r.triggerChange = module801(function() {
            r.props.onChange(r.state.value);
        });
        r.handleClick = function(value) {
            r.setState({
                value,
                showOptions: false
            }, function() {
                r.triggerChange();
            });
        };
        r.toggleOptions = function() {
            r.setState(function(e) {
                return {
                    showOptions: !e.showOptions
                };
            }, function() {
                document.removeEventListener("click", r.handleDOMClick);
                if (r.state.showOptions) {
                    document.addEventListener("click", r.handleDOMClick);
                }
            });
        };
        r.state = {
            value: module159(e.value) ? e.defaultValue : e.value,
            showOptions: false
        };
        r.optionsRef = createRef();
        r.controlRef = createRef();
        return r;
    }
    module37(a, [
        {
            key: "componentDidUpdate",
            value: function(e, t) {
                if (this.props.value !== t.value) {
                    this.setState({
                        value: this.props.value
                    });
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                document.removeEventListener("click", this.handleDOMClick);
            }
        },
        {
            key: "renderDetail",
            value: function(e) {
                return e.map((e, key)=><div key={key} className={module2407.text}><div>{e.label}</div>{e.description && <p>{e.description}</p>}</div>);
            }
        },
        {
            key: "renderOption",
            value: function(e, t) {
                const _this = this;
                const renderOption = this.props.renderOption;
                return <div key={e.uid || e.value} onClick={function() {
                    return _this.handleClick(e.value);
                }} className={module3(module2407.option, module31({}, module2407.selected, t), module31({}, module2407.withIcon, e.icon))}>{renderOption ? renderOption(e) : <>{this.renderIcon(e)}<div className={module2407.text}><div>{e.label}</div>{e.description && <p>{e.description}</p>}</div>{e.details && this.renderDetail(e.details)}</>}</div>;
            }
        },
        {
            key: "renderIcon",
            value: function(e) {
                if (e.icon) {
                    if (module195(e.icon)) {
                        return <module186.Icon className={module2407.leftIcon} name={e.icon} size={40} type="dark"/>;
                    }
                    return e.icon;
                }
                return null;
            }
        },
        {
            key: "renderOptions",
            value: function() {
                const _this = this;
                const props = this.props;
                const { options, disabled } = props;
                const state = this.state;
                const { value, showOptions } = state;
                if (disabled || !showOptions) {
                    return null;
                }
                if (module63(options)) {
                    return <div className={module2407.options} ref={this.optionsRef}><Empty/></div>;
                }
                const o = options.find((e)=>module837(e.value, value));
                return <div className={module2407.options} ref={this.optionsRef}>{o && this.renderOption(o, true)}{options.filter((e)=>!module837(e.value, value)).map((t)=>_this.renderOption(t))}</div>;
            }
        },
        {
            key: "renderControl",
            value: function() {
                let e;
                const props = this.props;
                const { placeholder, options, disabled, renderOption } = props;
                const state = this.state;
                const { value, showOptions } = state;
                const d = options.find((e)=>module837(e.value, value)) || placeholder || {
                    __empty: true
                };
                return <div className={module3(module2407.control, (e = {}, module31(e, module2407.withIcon, d.icon), module31(e, module2407.open, showOptions), e))} ref={this.controlRef} onClick={this.toggleOptions}>{renderOption ? renderOption(d) : <>{this.renderIcon(d)}<div className={module2407.text}><div>{d.label}</div>{d.description && <p>{d.description}</p>}</div>{d.details && this.renderDetail(d.details)}</>}{!disabled && <module186.Icon className={module2407.rightIcon} name="chevron-down" size="small" clickable/>}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, disabled } = props;
                return <div className={module3(module2407.wrapper, module31({}, module2407.disabled, disabled), className)}>{this.renderControl()}{this.renderOptions()}</div>;
            }
        }
    ]);
    return a;
})(Component);
export default _;
_.propTypes = {
    className: module1.string,
    value: module1.any,
    defaultValue: module1.any,
    options: module1.array.isRequired,
    onChange: module1.func,
    renderOption: module1.func
};
_.defaultProps = {
    className: "",
    options: [],
    onChange: function() {}
};
