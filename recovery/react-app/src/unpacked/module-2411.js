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
import module2414 from "./module-2414.js";
const y = ((e)=>{
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
                const { children, className, content, ...rest } = props;
                if ([
                    undefined,
                    null,
                    ""
                ].includes(content)) {
                    return children;
                }
                return module553.default.createElement(module2414, {
                    ...rest,
                    content,
                    className: module3("tooltip", className),
                    type: "tooltip"
                }, children);
            }
        }
    ]);
    return n;
})(module553.Component);
module1045(y, "propTypes", {
    always: module1.bool,
    trigger: module1.string,
    className: module1.string,
    content: module1.oneOfType([
        module1.node,
        module1.element
    ]),
    placement: module1.string,
    children: module1.node
});
module1045(y, "defaultProps", {
    always: false,
    trigger: "hover",
    placement: "top"
});
export default y;
