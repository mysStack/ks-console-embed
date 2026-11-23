import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-98.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module96 from "utils/babel-helpers/slicedToArray";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module790 from "components/Base/Panel";
import module1044 from "components/Base/Label";
import module63 from "unpacked/module-63.js";
const v = ((e)=>{
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
                const props = this.props;
                const { className, labels } = props;
                if (module63(labels)) {
                    return null;
                }
                return module553.default.createElement(module790, {
                    title: t("LABEL_PL"),
                    className
                }, module553.default.createElement("div", null, Object.entries(labels).map((e)=>{
                    const t = module96(e, 2);
                    const a = t[0];
                    const value = t[1];
                    return module553.default.createElement(module1044, {
                        key: a,
                        name: a,
                        value
                    });
                })));
            }
        }
    ]);
    return r;
})(module553.Component);
export default v;
