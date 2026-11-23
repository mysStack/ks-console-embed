import "unpacked/module-15.js";
import "unpacked/module-11.js";
import "unpacked/module-30.js";
import "unpacked/module-18.js";
import "unpacked/module-97.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-140.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-32.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-251.js";
import "unpacked/module-252.js";
import "unpacked/module-193.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module790 from "components/Base/Panel";
import module63 from "unpacked/module-63.js";
import module3837 from "unpacked/module-3837.js";
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
