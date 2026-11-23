import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module5059 from "unpacked/module-5059.js";
const v = ((e)=>{
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
                const { className, type, label, hasLabel, noBolder } = props;
                if (type) {
                    return module553.default.createElement("span", {
                        className: module3(module5059.status, module31({}, module5059.noBolder, noBolder))
                    }, module553.default.createElement("span", {
                        className: module3(module5059.status_icon, module5059[type.toLowerCase()], className)
                    }), hasLabel && t(label.toUpperCase()));
                }
                return "-";
            }
        }
    ]);
    return n;
})(module553.PureComponent);
export default v;
v.propTypes = {
    label: module1.string,
    className: module1.string,
    type: module1.string,
    hasLabel: module1.bool
};
v.defaultProps = {
    type: "",
    label: "",
    hasLabel: true
};
