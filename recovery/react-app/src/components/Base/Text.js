import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
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
import { PureComponent } from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module194 from "unpacked/module-194.js";
import module159 from "unpacked/module-159.js";
import module3 from "unpacked/module-3.js";
import module2043 from "unpacked/module-2043.js";
const v = ((PureComponent_1)=>{
    module55(a, PureComponent_1);
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
    })(a);
    function a() {
        module36(this, a);
        return t.apply(this, arguments);
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                let e;
                const props = this.props;
                const { icon, title, description, className, ellipsis, extra, onClick, iconAsset, tooltipIcon } = props;
                const y = module194(title) ? title() : module159(title) || title === "" ? "-" : title;
                return <div className={module3(module2043.wrapper, (e = {}, module31(e, module2043.clickable, !!onClick), module31(e, module2043.ellipsis, ellipsis), e), className)} onClick={onClick}>{icon && (module194(icon) ? icon() : icon ? <module186.Icon className={module2043.icon} name={icon} size={40}/> : iconAsset)}<div className={module2043.text}><div className={module2043.titleWithIcon}>{y}<div className={module2043.tooltipIcon}>{tooltipIcon && tooltipIcon()}</div></div><div>{description}</div></div>{extra}</div>;
            }
        }
    ]);
    return a;
})(PureComponent);
export default v;
