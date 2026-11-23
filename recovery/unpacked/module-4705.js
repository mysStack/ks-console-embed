import "./module-15.js";
import "./module-5.js";
import "./module-16.js";
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
import { Link } from "./module-433.js";
import module26 from "./module-26.js";
import module186 from "./module-186.js";
import Module838 from "./module-838.js";
import { getSuitableValue } from "./module-795.js";
import module1909 from "./module-1909.js";
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
    function a(...o) {
        let e;
        module36(this, a);
        e = t.call(this, ...o);
        e.handleLinkClick = function() {
            localStorage.setItem("pod-detail-referrer", `${e.props.prefix}/pods`);
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { data, prefix } = props;
                const type = data.podStatus.type;
                const to = `${prefix}/pods/${data.name}`;
                return <li><div className={module1909.icon}><module186.Icon name="pod" size={24}/><Module838 type={type.toLowerCase()} className={module1909.status} flicker/></div><Link to={to}><span onClick={this.handleLinkClick}>{data.name}</span></Link><div className={module1909.metric}><module186.Icon name="memory" size={20}/><div>{getSuitableValue(module26(data, "metrics.memory.value[1]"), "memory")}</div></div><div className={module1909.metric}><module186.Icon name="cpu" size={20}/><div>{getSuitableValue(module26(data, "metrics.cpu.value[1]"), "cpu")}</div></div></li>;
            }
        }
    ]);
    return a;
})(Component);
export default v;
