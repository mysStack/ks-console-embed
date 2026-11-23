import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-58.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module63 from "unpacked/module-63.js";
import module972 from "unpacked/module-972.js";
import module186 from "unpacked/module-186.js";
import { EmailInput } from "components/Inputs/index";
import module2880 from "unpacked/module-2880.js";
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.state = {
            inputValue: ""
        };
        e.handleInputChange = function(t) {
            e.setState({
                inputValue: t?.target?.value ?? t
            });
        };
        e.handleAdd = function() {
            const e_props = e.props;
            const { validate, onAdd } = e_props;
            const inputValue = e.state.inputValue;
            if (validate(module972(inputValue))) {
                e.setState({
                    inputValue: ""
                }, function() {
                    onAdd(module972(inputValue));
                });
            }
        };
        e.handleKeyUp = function(t) {
            if (t.keyCode === 13) {
                e.handleAdd();
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "renderInput",
            value: function() {
                const props = this.props;
                const { className, defaultSelectValue, options, onSelectChange, ...rest } = props;
                const inputValue = this.state.inputValue;
                if (module63(options)) {
                    return <EmailInput value={inputValue} onKeyUp={this.handleKeyUp} onChange={this.handleInputChange} {...rest}/>;
                }
                return <div className={module3(module2880.selectWrapper, className)}><module186.Input className={module2880.selectInput} onChange={this.handleInputChange} value={inputValue} onKeyUp={this.handleKeyUp}/><module186.Select className={module2880.select} defaultValue={defaultSelectValue} options={options} onChange={onSelectChange}/></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, title } = props;
                return <div className={className}>{title && <p className={module2880.title}>{title}</p>}<div className={module2880.inputWrapper}>{this.renderInput()}<module186.Button className="margin-l12" onClick={this.handleAdd}>{t("ADD")}</module186.Button></div></div>;
            }
        }
    ]);
    return r;
})(Component);
export default b;
b.propTypes = {
    title: module1.string,
    defaultSelectValue: module1.string,
    options: module1.array,
    onSelectChange: module1.func,
    onAdd: module1.func,
    validate: module1.func
};
b.defaultProps = {
    title: "",
    defaultSelectValue: "",
    options: [],
    onAdd: function() {},
    onSelectChange: function() {},
    validate: function() {}
};
