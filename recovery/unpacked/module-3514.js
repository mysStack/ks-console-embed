import "./module-1104.js";
import "./module-1171.js";
import module1004 from "./module-1004.js";
import module1005 from "./module-1005.js";
import module1006 from "./module-1006.js";
import module1007 from "./module-1007.js";
import module1008 from "./module-1008.js";
import module1045 from "./module-1045.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module1770 from "./module-1770.js";
import module1201 from "./module-1201.js";
const m = ((e)=>{
    module1006(n, e);
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
            let n;
            const r = module1008(e);
            if (t) {
                const o = module1008(this).constructor;
                n = Reflect.construct(r, arguments, o);
            } else {
                n = r.apply(this, arguments);
            }
            return module1007(this, n);
        };
    })(n);
    function n() {
        module1004(this, n);
        return t.apply(this, arguments);
    }
    module1005(n, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { children, type, htmlType, className, size, icon, iconType, iconSize, loading, ghost, ...rest } = props;
                return module553.default.createElement("button", {
                    className: module3("button", `button-${type}`, `button-size-${size}`, {
                        "has-icon": icon,
                        "is-loading": loading,
                        "is-ghost": ghost
                    }, className),
                    type: htmlType,
                    ...rest
                }, icon && module553.default.createElement(module1770, {
                    name: icon,
                    type: iconType,
                    size: iconSize
                }), children && module553.default.createElement("div", {
                    className: "button-content"
                }, children), loading && module553.default.createElement(module1201, {
                    size: 16
                }));
            }
        }
    ]);
    return n;
})(module553.PureComponent);
export default m;
module1045(m, "propTypes", {
    type: module1.string,
    htmlType: module1.oneOf([
        "submit",
        "button",
        "reset"
    ]),
    className: module1.string,
    style: module1.object,
    size: module1.oneOf([
        "small",
        "normal",
        "large"
    ]),
    icon: module1.string,
    iconSize: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    iconType: module1.string,
    loading: module1.bool,
    disabled: module1.bool
});
module1045(m, "defaultProps", {
    type: "default",
    htmlType: "button",
    size: "normal",
    icon: "",
    iconType: "dark"
});
