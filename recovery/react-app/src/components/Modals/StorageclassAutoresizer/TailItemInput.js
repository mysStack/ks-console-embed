import "unpacked/module-15.js";
import "unpacked/module-5.js";
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
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module972 from "unpacked/module-972.js";
import module186 from "unpacked/module-186.js";
import Module800 from "components/Inputs/NumberInput";
import module3386 from "unpacked/module-3386.js";
const v = ((Component_1)=>{
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
        r.handleSelectChange = function(e) {
            const unit = r.state.unit;
            r.props.onChange(`${module972(e)}${unit}`);
        };
        r.handleInput = function(e) {
            const unit = r.state.unit;
            r.props.onChange(`${module972(e)}${unit}`);
        };
        r.renderTail = function() {
            const options = r.props.options;
            const unit = r.state.unit;
            if (options.length > 1) {
                return <module186.Select className={module3386.tailSelect} options={options} value={unit} defaultValue={unit} onChange={r.handleSelectChange}/>;
            }
            return <span className={module3386.unit}>{unit}</span>;
        };
        r.state = {
            unit: e.unit,
            value: e.value
        };
        return r;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { title, min, max, value } = props;
                return <>{title !== "" && <div className={module3386.title}>{title}</div>}<div className={module3386.wrapper}><Module800 className={module3386.input} min={min} value={value} max={max} onChange={this.handleInput}/>{this.renderTail()}</div></>;
            }
        }
    ]);
    return a;
})(Component);
export default v;
v.propTypes = {
    onChange: module1.func,
    options: module1.array,
    value: module1.string,
    min: module1.number,
    max: module1.number,
    unit: module1.string,
    title: module1.string
};
v.defaultProps = {
    options: [],
    value: "",
    min: 0,
    title: "",
    unit: "",
    onChange: function() {}
};
