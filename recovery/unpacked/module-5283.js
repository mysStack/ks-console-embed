import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-16.js";
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
import module26 from "./module-26.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import module838 from "./module-838.js";
import module5284 from "./module-5284.js";
const y = ((e)=>{
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
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(r);
    function r(...a) {
        let e;
        module36(this, r);
        e = t.call(this, ...a);
        e.iconSizeMap = {
            large: 48,
            normal: 40,
            small: 20
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const { theme, size, className, group, noStatus, onClick, isExpired = false } = this.props;
                if (!group) {
                    return null;
                }
                const l = module26(group, "status") === "True";
                const d = this.iconSizeMap[size];
                const y = module26(group, "aliasName", "");
                const title = `${group.name}${y && ` (${y})`}`;
                return module553.default.createElement("div", {
                    className: module3(module5284.wrapper, module5284[theme], module5284[size], className)
                }, module553.default.createElement("div", {
                    className: module5284.icon,
                    style: {
                        height: d
                    }
                }, module553.default.createElement(module186.Icon, {
                    name: "edge-cluster",
                    size: d,
                    type: theme
                }), isExpired ? module553.default.createElement(module838, {
                    className: module5284.indicator,
                    type: "error"
                }) : !noStatus && l && module553.default.createElement(module838, {
                    className: module5284.indicator,
                    status: "ready"
                })), module553.default.createElement("div", {
                    className: module5284.title
                }, module553.default.createElement("div", {
                    className: module5284.name
                }, onClick && l ? module553.default.createElement("a", {
                    title,
                    onClick
                }, title) : module553.default.createElement("span", {
                    title
                }, title)), module553.default.createElement("div", {
                    className: module5284.description
                }, module553.default.createElement("p", {
                    className: module3("ellipsis", module5284.ellipsis)
                }, group.description || "-"))));
            }
        }
    ]);
    return r;
})(module553.Component);
export default y;
y.propTypes = {
    theme: module1.PropTypes.oneOf([
        "dark",
        "light"
    ]),
    size: module1.PropTypes.oneOf([
        "normal",
        "small",
        "large"
    ])
};
y.defaultProps = {
    theme: "dark",
    size: "normal"
};
