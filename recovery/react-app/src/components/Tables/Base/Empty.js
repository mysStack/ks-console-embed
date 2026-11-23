import "unpacked/module-15.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-64.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { PureComponent } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module159 from "unpacked/module-159.js";
import module194 from "unpacked/module-194.js";
import module186 from "unpacked/module-186.js";
import { ICON_TYPES } from "utils/constants";
import module2426 from "unpacked/module-2426.js";
const y = ((PureComponent_1)=>{
    module55(r, PureComponent_1);
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
                const { module, icon, title, name, desc, action, className } = props;
                const c = module159(desc) ? t.html(`${name.replace(/[-\s]/g, "_").toUpperCase()}_EMPTY_DESC`) : desc;
                let f = <module186.Icon name={icon || ICON_TYPES[module] || "appcenter"} size={48}/>;
                if (module194(icon)) {
                    f = icon();
                }
                return <div className={module3(module2426.wrapper, className)}><div className={module2426.image}>{f}</div><div className={module2426.title}>{title || t("EMPTY_WRAPPER", {
                    resource: t(name.replace(/[- ]/g, "_").toUpperCase())
                })}</div><p className={module2426.desc}>{c}</p>{action && <div className={module2426.actions}>{action}</div>}</div>;
            }
        }
    ]);
    return r;
})(PureComponent);
export default y;
y.propTypes = {
    module: module1.string,
    name: module1.string,
    title: module1.string,
    desc: module1.string,
    className: module1.string,
    action: module1.node
};
y.defaultProps = {
    name: "",
    module: ""
};
