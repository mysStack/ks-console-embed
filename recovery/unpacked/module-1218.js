import "./module-15.js";
import "./module-11.js";
import "./module-30.js";
import "./module-18.js";
import "./module-97.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-140.js";
import "./module-24.js";
import "./module-17.js";
import "./module-32.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-251.js";
import "./module-252.js";
import "./module-193.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module790 from "./module-790.js";
import module63 from "./module-63.js";
import module3837 from "./module-3837.js";
const h = ((e)=>{
    module55(r, e);
    var a = ((e)=>{
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
    })(r);
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const { className, annotations = [], hiddenKeys = [] } = this.props;
                const o = Object.keys(annotations).filter((e)=>!hiddenKeys.some((t)=>new RegExp(t).test(e)));
                if (module63(o)) {
                    return null;
                }
                return module553.default.createElement(module790, {
                    className,
                    title: t("ANNOTATION_PL")
                }, module553.default.createElement("ul", {
                    className: module3837.values
                }, o.map((e)=>module553.default.createElement("li", {
                        key: e
                    }, module553.default.createElement("span", {
                        className: module3837.title
                    }, e), module553.default.createElement("span", null, String(annotations[e]))))));
            }
        }
    ]);
    return r;
})(module553.Component);
export default h;
