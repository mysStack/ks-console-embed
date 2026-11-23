import "./module-15.js";
import "./module-18.js";
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
import module63 from "./module-63.js";
import module1981 from "./module-1981.js";
import module4987 from "./module-4987.js";
const m = ((e)=>{
    module55(r, e);
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
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
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
            key: "render",
            value: function() {
                const props = this.props;
                const { prefix, gateway, detail } = props;
                const tls = detail.tls || [];
                if (module63(detail.rules)) {
                    return null;
                }
                return module553.default.createElement("div", {
                    className: module4987.wrapper
                }, detail.rules.map((rule)=>module553.default.createElement(module1981, {
                        key: rule.host,
                        tls,
                        rule,
                        gateway,
                        prefix
                    })));
            }
        }
    ]);
    return r;
})(module553.Component);
export default m;
