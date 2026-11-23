import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { PureComponent } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import Module1163 from "./module-1163.js";
import Module1164 from "components/Cards/Monitoring/Controller/TimeSelector/Range/Custom";
import module2424 from "./module-2424.js";
function v(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, r);
    }
    return a;
}
const g = ((PureComponent_1)=>{
    module55(a, PureComponent_1);
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
        r.handleToggle = function() {
            r.setState({
                visible: !r.state.visible
            }, function() {
                r.props.onToggle(r.state.visible);
            });
        };
        r.hideSelector = function() {
            r.setState({
                visible: false
            }, function() {
                r.props.onToggle(false);
            });
        };
        r.handleTimeChange = function(e) {
            r.setState({
                visible: false,
                ...e
            }, function() {
                r.props.onChange(e);
            });
        };
        const { visible, step, times } = e;
        r.state = {
            visible,
            prevPropStep: step,
            step,
            prevPropTimes: times,
            times,
            start: "",
            end: "",
            lastTime: ""
        };
        return r;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const { className, step, times, showStep = false } = this.props;
                return <div className={module3(module2424.selector, className, module31({}, module2424.active, this.state.visible))}><div className={module2424.dropdown}><div className={module2424.content}><Module1163 step={step} times={times} onChange={this.handleTimeChange}/><Module1164 step={step} times={times} showStep={showStep} onSubmit={this.handleTimeChange} onCancel={this.hideSelector}/></div></div></div>;
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function(e, t) {
                if (e.visible !== t.visible || e.step !== t.prevPropStep || e.times !== t.prevPropTimes) {
                    const { visible, step, times } = e;
                    return {
                        visible,
                        prevPropStep: step,
                        step,
                        prevPropTimes: times,
                        times
                    };
                }
                return null;
            }
        }
    ]);
    return a;
})(PureComponent);
export default g;
g.propTypes = {
    step: module1.string,
    times: module1.number,
    onChange: module1.func,
    onToggle: module1.func
};
g.defaultProps = {
    step: "10m",
    times: 30,
    onChange: function() {},
    onToggle: function() {}
};
