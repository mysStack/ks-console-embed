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
import * as module553 from "./module-553.js";
import { curveBasis, line } from "./module-1258.js";
import module4605 from "./module-4605.js";
const p = ((e)=>{
    module55(a, e);
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
            key: "render",
            value: function() {
                const data = this.props.data;
                const t = data === undefined ? {} : data;
                const a = line().curve(curveBasis).x(function(e) {
                    return e.x;
                }).y(function(e) {
                    return e.y;
                });
                const r = t.v + t.w;
                return module553.default.createElement("g", {
                    className: module4605.wrapper
                }, module553.default.createElement("defs", null, module553.default.createElement("marker", {
                    id: `triangle-${r}`,
                    viewBox: "0 0 10 10",
                    refX: "5",
                    refY: "5",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse"
                }, module553.default.createElement("path", {
                    d: "M 0 0 L 10 5 L 0 10 z"
                }))), module553.default.createElement("path", {
                    d: a(t.points),
                    markerEnd: `url(#triangle-${r})`
                }));
            }
        }
    ]);
    return a;
})(module553.Component);
export default p;
