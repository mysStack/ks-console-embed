import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-110.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-436.js";
import "unpacked/module-57.js";
import "unpacked/module-24.js";
import "unpacked/module-193.js";
import "unpacked/module-315.js";
import "unpacked/module-31.js";
import "unpacked/module-58.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module159 from "unpacked/module-159.js";
import module63 from "unpacked/module-63.js";
import module471 from "unpacked/module-471.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import module2090 from "unpacked/module-2090.js";
const S = ((Component_1)=>{
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
        t.handleChange = function(e) {
            const t_props = t.props;
            const { min, max, integer } = t_props;
            const t_handleBlur = t.handleBlur;
            const value = e.target.value;
            t.setState({
                inputValue: value
            });
            if (value !== "" && value !== "-") {
                if (/^-?\d*\.?\d*$/.test(value)) {
                    let i = parseFloat(value);
                    if (!isNaN(i)) {
                        if (!module159(min) && i < min) {
                            i = min;
                        }
                        if (!module159(max) && i > max) {
                            i = max;
                        }
                        if (!(integer || !value.endsWith(".") && !value.endsWith("0") || i !== parseFloat(value) || `${i}` === value)) {
                            i = value;
                        }
                        if (t_handleBlur) {
                            t_handleBlur(i);
                        }
                    }
                }
            } else {
                t_handleBlur(value);
            }
        };
        t.handleAdd = function() {
            const t_props = t.props;
            const { value, max, onChange } = t_props;
            if (module159(max) || value < max) {
                onChange(parseFloat(value) + 1);
            }
        };
        t.handleSubtract = function() {
            const t_props = t.props;
            const { value, min, onChange } = t_props;
            if (module159(min) || value > min) {
                onChange(parseFloat(value) - 1);
            }
        };
        t.handleBlur = function(e) {
            const t_props = t.props;
            const { onChange, unit, value } = t_props;
            let u = value;
            if (unit) {
                u = module471(value, unit);
            }
            if (!(e === "" || e === "-" || module63(e))) {
                e = parseFloat(e);
            }
            if (parseFloat(e) !== parseFloat(u)) {
                if (isNaN(e) && onChange) {
                    onChange("");
                }
                if (!module159(e) && unit) {
                    e = `${e}${unit}`;
                }
                if (onChange) {
                    onChange(e);
                }
            }
        };
        const { value, defaultValue, unit } = e;
        let o = value ?? defaultValue;
        if (unit) {
            o = module471(o, unit);
        }
        t.state = {
            inputValue: o
        };
        return t;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (e.value !== this.props.value) {
                    let t = this.props.value;
                    const a = this.props.unit;
                    if (a) {
                        t = module471(t, a);
                    }
                    if (parseFloat(this.state.inputValue) !== parseFloat(t)) {
                        this.setState({
                            inputValue: t
                        });
                    }
                }
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { className, unit, showUnit, value: _value, defaultValue: _defaultValue, onChange: _onChange, integer, controls, ...rest } = props;
                const f = integer ? /[-0-9]/ : /[-.0-9]/;
                const inputValue = this.state.inputValue;
                const p = {
                    type: "text",
                    ...rest,
                    onKeyPress: function(e) {
                        if (!f.test(e.key)) {
                            e.preventDefault();
                        }
                    },
                    value: inputValue,
                    onChange: this.handleChange,
                    onBlur: function() {
                        let t = parseFloat(inputValue);
                        t = isNaN(t) ? "" : t;
                        if (inputValue) {
                            _this.setState({
                                inputValue: t
                            });
                        }
                    }
                };
                if (unit && showUnit) {
                    return <div className={module3(className, module2090.withUnit)}><module186.Input {...p}/><span className={module2090.unit}>{unit === "core" ? t("CORE_PL") : unit}</span></div>;
                }
                if (controls) {
                    return <div className={module3(className, module2090.withUnit)}><module186.Input {...p}/><div className={module2090.buttonWrapper}><module186.Icon className={module2090.iconUp} name="chevron-up" clickable onClick={this.handleAdd}/><module186.Icon className={module2090.iconDown} name="chevron-down" clickable onClick={this.handleSubtract}/></div></div>;
                }
                return <module186.Input className={className} {...p}/>;
            }
        }
    ]);
    return r;
})(Component);
S.propTypes = {
    unit: module1.string,
    showUnit: module1.bool,
    value: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    defaultValue: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    min: module1.number,
    max: module1.number,
    integer: module1.bool,
    controls: module1.bool,
    onChange: module1.func
};
S.defaultProps = {
    unit: "",
    showUnit: false,
    integer: false,
    controls: false,
    onChange: function() {}
};
export default S;
