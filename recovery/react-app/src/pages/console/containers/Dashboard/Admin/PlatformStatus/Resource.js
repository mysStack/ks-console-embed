import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-935.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module791 from "components/Base/Text";
import module1777 from "unpacked/module-1777.js";
const T = ((M)=>{
    module55(u, M);
    var e = ((M)=>{
        const e = (()=>{
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
            } catch (M) {
                return false;
            }
        })();
        return function() {
            let t;
            const u = module51(M);
            if (e) {
                const N = module51(this).constructor;
                t = Reflect.construct(u, arguments, N);
            } else {
                t = u.apply(this, arguments);
            }
            return module56(this, t);
        };
    })(u);
    function u(...N) {
        let M;
        module36(this, u);
        M = e.call(this, ...N);
        M.handleClick = function() {
            const M_props = M.props;
            const e_data = M_props.data;
            M_props.onClick(e_data.link);
        };
        return M;
    }
    module37(u, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { data, count } = props;
                return module553.default.createElement("div", {
                    key: data.name,
                    className: module1777.resource
                }, module553.default.createElement(module791, {
                    icon: data.icon,
                    title: count || 0,
                    description: count === "1" ? t(data.name) : t(`${data.name}_PL`),
                    onClick: data.link ? this.handleClick : null
                }));
            }
        }
    ]);
    return u;
})(module553.Component);
export default T;
