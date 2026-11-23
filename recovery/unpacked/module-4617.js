import "./module-15.js";
import "./module-30.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-32.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module1044 from "./module-1044.js";
import module4618 from "./module-4618.js";
const h = ((e)=>{
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
                const e = module26(this.props.detail, "tables", []);
                if (module63(e)) {
                    return null;
                }
                return e.map((e)=>module553.default.createElement("div", {
                        key: e.id,
                        className: module4618.info
                    }, e.rows.map((e)=>module553.default.createElement(module1044, {
                            key: e.id,
                            name: e.entries.label,
                            value: e.entries.value
                        }))));
            }
        }
    ]);
    return a;
})(module553.Component);
export default h;
