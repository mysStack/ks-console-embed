import "unpacked/module-15.js";
import "unpacked/module-16.js";
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
import onChange_1 from "unpacked/module-455.js";
import module807 from "unpacked/module-807.js";
import module186 from "unpacked/module-186.js";
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
        r.handleChange = function(e) {
            const onChange = r.props.onChange;
            r.setState({
                value: e
            });
            if (onChange !== onChange_1) {
                onChange(e);
            }
        };
        r.state = {
            value: e.value || false
        };
        return r;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { name, onText, offText, ...rest } = props;
                const value = this.state.value;
                return <module186.Toggle {...rest} name={name} onText={onText} offText={offText} checked={value} onChange={this.handleChange}/>;
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function(e, { value }) {
                if ("value" in e && !module807(e.value, value)) {
                    return {
                        value: e.value
                    };
                }
                return null;
            }
        }
    ]);
    return a;
})(Component);
export default v;
v.propTypes = {
    name: module1.PropTypes.string,
    onText: module1.PropTypes.string,
    offText: module1.PropTypes.string,
    value: module1.PropTypes.bool,
    onChange: module1.PropTypes.func
};
v.defaultProps = {
    onChange: onChange_1
};
