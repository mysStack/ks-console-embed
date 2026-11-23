import "unpacked/module-15.js";
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
import module186 from "unpacked/module-186.js";
import Module800 from "components/Inputs/NumberInput";
import module3384 from "unpacked/module-3384.js";
const m = ((Component_1)=>{
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
        r.handleSliderChange = function(e) {
            r.setState({
                size: e
            }, function() {
                r.props.onChange(e);
            });
        };
        r.inputChange = function(e) {
            r.setState({
                size: e
            }, function() {
                r.props.onChange(e);
            });
        };
        r.state = {
            size: e.size
        };
        return r;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { max, min, unit, marks } = props;
                const size = this.state.size;
                return <div className={module3384.wrapper}><module186.Slider value={size} max={max} min={min} marks={marks} unit={unit} onChange={this.handleSliderChange}/><div className={module3384.inputBox}><Module800 className={module3384.input} value={size} max={max} min={min} onChange={this.inputChange}/><span className={module3384.unit}>{unit}</span></div></div>;
            }
        }
    ]);
    return a;
})(Component);
export default m;
m.propTypes = {
    size: module1.number,
    max: module1.number,
    min: module1.number,
    unit: module1.string,
    onChange: module1.func
};
m.defaultProps = {
    size: 10,
    max: 2048,
    min: 0,
    unit: "Gi",
    onChange: function() {}
};
