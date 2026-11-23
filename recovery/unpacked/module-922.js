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
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module5074 from "./module-5074.js";
const m = ((e)=>{
    module55(n, e);
    var r = ((e)=>{
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
    })(n);
    function n() {
        module36(this, n);
        return r.apply(this, arguments);
    }
    module37(n, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, type, label, hasLabel } = props;
                return module553.default.createElement("span", null, module553.default.createElement("span", {
                    className: module3("pipeline_status_icon", module5074[type.toLowerCase()], className)
                }), hasLabel && (label || t(type.toLowerCase())));
            }
        }
    ]);
    return n;
})(module553.PureComponent);
export default m;
m.propTypes = {
    label: module1.string,
    className: module1.string,
    type: module1.string,
    hasLabel: module1.bool
};
m.defaultProps = {
    type: "",
    label: "",
    hasLabel: true
};
