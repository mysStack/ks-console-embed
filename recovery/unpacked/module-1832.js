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
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import { getSuitableValue } from "./module-795.js";
import module3920 from "./module-3920.js";
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
    function a() {
        module36(this, a);
        return t.apply(this, arguments);
    }
    module37(a, [
        {
            key: "getWavePath",
            value: function() {
                const rate = this.props.rate;
                const t = 100 * (1 - rate);
                const a = 20 * (0.5 - Math.abs(0.5 - rate));
                return `
      M0 ${t}
      
      Q ${12.5} ${t + a}, ${25} ${t}
      T ${50} ${t}

      T ${75} ${t}
      T ${100} ${t}

      T ${125} ${t}
      T ${150} ${t}

      T ${175} ${t}
      T ${200} ${t}

      V 100
      H 0

      Z
    `;
            }
        },
        {
            key: "render",
            value: function() {
                const className = this.props.className;
                return <div className={module3(module3920.container, className)}>{this.renderForeground()}{this.renderCapacity()}</div>;
            }
        },
        {
            key: "renderForeground",
            value: function() {
                const rate = this.props.rate;
                const t = getSuitableValue(rate, "%");
                return <div className={module3920.foreground}><h3>{t}%</h3></div>;
            }
        },
        {
            key: "renderCapacity",
            value: function() {
                const viewBox = `0 0 ${100} ${100}`;
                const d = this.getWavePath();
                return <svg width="100%" height="100%" viewBox={viewBox} preserveAspectRatio="none"><path className={module3920.wave} d={d}/><path className={module3920.wave2} d={d}/></svg>;
            }
        }
    ]);
    return a;
})(Component);
export default m;
m.propTypes = {
    rate: module1.number,
    className: module1.string
};
m.defaultProps = {
    rate: 0
};
