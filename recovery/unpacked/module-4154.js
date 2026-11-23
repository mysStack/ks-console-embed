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
import Module4155 from "./module-4155.js";
import Module4157 from "./module-4157.js";
import Module4159 from "./module-4159.js";
let n;
const h = inject("rootStore")(n = ((Component_1)=>{
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
            key: "renderPhysicalResource",
            value: function() {
                return <Module4155 {...this.props}/>;
            }
        },
        {
            key: "renderVirtualResource",
            value: function() {
                return <Module4157 {...this.props}/>;
            }
        },
        {
            key: "renderProjectTrend",
            value: function() {
                return <Module4159 {...this.props}/>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div>{this.renderPhysicalResource()}{this.renderVirtualResource()}{this.renderProjectTrend()}</div>;
            }
        }
    ]);
    return a;
})(Component)) || n;
export default h;
