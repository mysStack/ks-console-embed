import "./module-15.js";
import "./module-6.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-64.js";
import "./module-813.js";
import "./module-7.js";
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
import { getLocalTime } from "./module-52.js";
import module4608 from "./module-4608.js";
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
            key: "getValue",
            value: function(e) {
                if (e.type === "datetime") {
                    return getLocalTime(e.value).format("YYYY-MM-DD HH:mm:ss");
                }
                return e.value;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const t = module26(this.props.detail, "metadata", []);
                if (module63(t)) {
                    return null;
                }
                t.forEach((e)=>{
                    if (e.label === "Created") {
                        e.value = getLocalTime(e.value).format("YYYY-MM-DD HH:mm:ss");
                    }
                    if (e.id === "pod") {
                        e.label = e.label.replace(/#/g, "").trim();
                    }
                });
                return module553.default.createElement("div", {
                    className: module4608.info
                }, t.map((t)=>module553.default.createElement("dl", {
                        key: t.id
                    }, module553.default.createElement("dd", null, t.label, ":"), module553.default.createElement("dd", null, _this.getValue(t)))));
            }
        }
    ]);
    return a;
})(module553.Component);
export default h;
