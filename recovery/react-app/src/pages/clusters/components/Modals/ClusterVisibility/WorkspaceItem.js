import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-16.js";
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
import module186 from "unpacked/module-186.js";
import module3 from "unpacked/module-3.js";
import module791 from "components/Base/Text";
import * as module553 from "unpacked/module-553.js";
import { showNameAndAlias } from "utils/index";
import module3655 from "unpacked/module-3655.js";
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
    function n(...a) {
        let e;
        module36(this, n);
        e = r.call(this, ...a);
        e.handleClick = function() {
            const e_props = e.props;
            const t_data = e_props.data;
            e_props.onClick(t_data);
        };
        return e;
    }
    module37(n, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { data, type, disabled } = props;
                if (data.name === globals.config.systemWorkspace) {
                    return null;
                }
                return module553.default.createElement("div", {
                    className: module3(module3655.wrapper, module31({}, module3655.disabled, disabled)),
                    onClick: disabled ? null : this.handleClick
                }, !disabled && type === "authed" && module553.default.createElement(module186.Icon, {
                    name: "chevron-left",
                    size: 20
                }), module553.default.createElement(module791, {
                    className: module3655.title,
                    icon: "enterprise",
                    title: showNameAndAlias(data.name, "workspace"),
                    description: data.description || "-",
                    ellipsis: true
                }), module553.default.createElement(module791, {
                    className: module3655.manager,
                    title: data.manager,
                    description: t("MANAGER")
                }), !disabled && type !== "authed" && module553.default.createElement(module186.Icon, {
                    name: "chevron-right",
                    size: 20
                }));
            }
        }
    ]);
    return n;
})(module553.Component);
export default v;
