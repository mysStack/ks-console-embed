import "./module-15.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module3 from "./module-3.js";
import module3200 from "./module-3200.js";
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
                const { steps, current } = props;
                return module553.default.createElement("div", {
                    className: module3200.wrapper
                }, steps.map((e, a)=>{
                    let n;
                    return module553.default.createElement("div", {
                        key: e.title
                    }, module553.default.createElement("span", {
                        className: module3(module3200.indicator, (n = {}, module31(n, module3200.fullfill, current > a), module31(n, module3200.current, current === a), module31(n, module3200.pending, current < a), n))
                    }), module553.default.createElement("span", null, t(e.title)));
                }));
            }
        }
    ]);
    return r;
})(module553.Component);
export default v;
