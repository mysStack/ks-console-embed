import "./module-15.js";
import "./module-5.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { SwatchesPicker } from "./module-5771.js";
import module3 from "./module-3.js";
import module2817 from "./module-2817.js";
const p = ((Component_1)=>{
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
    function a(...l) {
        let e;
        module36(this, a);
        e = t.call(this, ...l);
        e.state = {
            shouldMenuShow: false
        };
        e.startSelect = function() {
            e.setState({
                shouldMenuShow: true
            });
        };
        e.changeComplete = function({ hex }) {
            e.setState({
                shouldMenuShow: false
            });
            e.props.onChange(hex);
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { value, className } = props;
                const shouldMenuShow = this.state.shouldMenuShow;
                return <div className={module3(module2817.wrapper, className)}><div style={{
                    backgroundColor: value
                }} onClick={this.startSelect}/>{shouldMenuShow ? <div className={module2817.menu}><SwatchesPicker onChangeComplete={this.changeComplete}/></div> : null}</div>;
            }
        }
    ]);
    return a;
})(Component);
export default p;
