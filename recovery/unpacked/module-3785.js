import "./module-15.js";
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
import { inject } from "./module-239.js";
import Module1798 from "./module-1798.js";
import Module1800 from "./module-1800.js";
import Module3790 from "./module-3790.js";
let a;
const h = inject("rootStore")(a = ((Component_1)=>{
    module55(r, Component_1);
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
            let r;
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(r);
    function r() {
        module36(this, r);
        return t.apply(this, arguments);
    }
    module37(r, [
        {
            key: "renderPhysicalResource",
            value: function() {
                return <Module1798 {...this.props}/>;
            }
        },
        {
            key: "renderVirtualResource",
            value: function() {
                return <Module1800 {...this.props}/>;
            }
        },
        {
            key: "renderProjectTrend",
            value: function() {
                return <Module3790 {...this.props}/>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div>{this.renderPhysicalResource()}{this.renderVirtualResource()}{this.renderProjectTrend()}</div>;
            }
        }
    ]);
    return r;
})(Component)) || a;
export default h;
