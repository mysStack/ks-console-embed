import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
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
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import Module791 from "./module-791.js";
import module2048 from "./module-2048.js";
const h = {
    current: "CURRENT",
    finished: "FINISHED",
    notfinish: "NOT_SET"
};
const VComponent = function({ step, state }) {
    return <li className={module2048[state]}><div className={module2048.icon}><module186.Icon name={step.icon || "appcenter"} size={40}/></div><Module791 className={module2048.text} title={t(step.title)} description={t(h[state])}/></li>;
};
const g = ((Component_1)=>{
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
    function a(...n) {
        let e;
        module36(this, a);
        e = t.call(this, ...n);
        e.getState = function(t) {
            const current = e.props.current;
            if (t === current) {
                return "current";
            }
            if (t < current) {
                return "finished";
            }
            return "notfinish";
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const steps = this.props.steps;
                return <div className={module2048.steps}><ul>{steps.map((step, a)=><VComponent key={step.title} step={step} state={_this.getState(a)}/>)}</ul></div>;
            }
        }
    ]);
    return a;
})(Component);
export default g;
g.propTypes = {
    steps: module1.array.isRequired,
    current: module1.number.isRequired
};
