import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-18.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-140.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-188.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-251.js";
import "unpacked/module-252.js";
import "unpacked/module-193.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component, createRef } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module801 from "unpacked/module-801.js";
import module63 from "unpacked/module-63.js";
import module159 from "unpacked/module-159.js";
import module195 from "unpacked/module-195.js";
import module837 from "unpacked/module-837.js";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import module2243 from "unpacked/module-2243.js";
const b = ((Component_1)=>{
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
        r.handleSearchInput = function(e) {
            const value = e.target.value;
            r.setState({
                search: value
            });
        };
        r.state = {
            value: module159(e.value) ? e.defaultValue : e.value,
            showOptions: false,
            search: ""
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
                return e.map((e, key)=><div key={key} className={module2243.text}><div>{e.label}</div>{e.description && <p>{e.description}</p>}</div>);
            }
        },
        {
            key: "renderOption",
            value: function(e, t) {
                let a;
                let r;
                const _this = this;
                const u = function() {
                    return _this.handleClick(e.value);
                };
                const renderOption = this.props.renderOption;
                if (renderOption) {
                    return <div key={e.uid || e.value} onClick={e.disabled ? null : u} className={module3(module2243.option, (r = {}, module31(r, module2243.selected, t), module31(r, module2243.disabled, e.disabled), r), module31({}, module2243.withIcon, e.icon))}>{this.renderIcon(e)}{renderOption(e)}</div>;
                }
                return <div key={e.uid || e.value} onClick={e.disabled ? null : u} className={module3(module2243.option, (a = {}, module31(a, module2243.selected, t), module31(a, module2243.disabled, e.disabled), a), module31({}, module2243.withIcon, e.icon))}>{this.renderIcon(e)}<div className={module2243.text}><div>{e.label}</div>{e.description && <p>{e.description}</p>}</div>{e.details && this.renderDetail(e.details)}</div>;
            }
        },
        {
            key: "renderIcon",
            value: function(e) {
                if (e.icon) {
                    if (module195(e.icon)) {
                        return <module186.Icon className={module2243.leftIcon} name={e.icon} size={40} type="dark"/>;
                    }
                    return e.icon;
                }
                return null;
            }
        },
        {
            key: "renderSearchInput",
            value: function() {
                const search = this.state.search;
                return <module186.Input className={module2243.search} value={search} onChange={this.handleSearchInput}/>;
            }
        },
        {
            key: "renderOptions",
            value: function() {
                const _this = this;
                const props = this.props;
                const { options, disabled, searchable } = props;
                const state = this.state;
                const { value, showOptions, search } = state;
                const c = new RegExp(`^${search}`);
                if (disabled || !showOptions || module63(options)) {
                    return null;
                }
                const f = options.find((e)=>module837(e.value, value));
                return <div className={module2243.options} ref={this.optionsRef}>{searchable && this.renderSearchInput()}{f && this.renderOption(f, true)}{options.filter((e)=>{
                    if (search) {
                        const t = e.label || "";
                        return c.test(t) || c.test(e.value);
                    }
                    return true;
                }).filter((e)=>!module837(e.value, value)).map((t)=>_this.renderOption(t))}</div>;
            }
        },
        {
            key: "renderControl",
            value: function() {
                const props = this.props;
                const { placeholder, options, disabled, placeholderOption, renderOption } = props;
                const state = this.state;
                const { value, showOptions } = state;
                const f = options.find((e)=>module837(e.value, value)) || placeholder || placeholderOption || {};
                return <div className={module3(module2243.control, module31({}, module2243.withIcon, f.icon))} ref={this.controlRef} onClick={this.toggleOptions}>{this.renderIcon(f)}{renderOption ? renderOption(f) : <><div className={module2243.text}><div>{f.label}</div>{f.description && <p>{f.description}</p>}</div>{f.details && this.renderDetail(f.details)}</>}{!disabled && <module186.Icon className={module2243.rightIcon} name={showOptions ? "chevron-up" : "chevron-down"} size="small" clickable/>}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, disabled } = props;
                return <div className={module3(module2243.wrapper, module31({}, module2243.disabled, disabled), className)}>{this.renderControl()}{this.renderOptions()}</div>;
            }
        }
    ]);
    return a;
})(Component);
export default b;
b.propTypes = {
    className: module1.string,
    value: module1.any,
    defaultValue: module1.any,
    searchable: module1.bool,
    options: module1.array.isRequired,
    onChange: module1.func,
    renderOption: module1.func
};
b.defaultProps = {
    className: "",
    options: [],
    searchable: false,
    onChange: function() {}
};
