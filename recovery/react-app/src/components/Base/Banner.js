import "unpacked/module-15.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-75.js";
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
import module195 from "unpacked/module-195.js";
import module186 from "unpacked/module-186.js";
import module2332 from "unpacked/module-2332.js";
const h = ((PureComponent_1)=>{
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
            key: "renderRightIcon",
            value: function() {
                const rightIcon = this.props.rightIcon;
                if (rightIcon) {
                    if (module195(rightIcon)) {
                        return <img className={module2332.rightIcon} src={rightIcon} alt=""/>;
                    }
                    return rightIcon;
                }
                return null;
            }
        },
        {
            key: "renderExtraInfo",
            value: function() {
                return this.props.extra || null;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, iconClass, type, icon, name, desc } = props;
                const o = icon && icon.startsWith("/");
                const i = type === "white";
                return <div className={module3(module2332.banner, className, module2332[type])}>{this.renderRightIcon()}<div className={module3(module2332.icon, iconClass)}>{o ? <img src={icon} alt=""/> : <module186.Icon name={icon} type={i ? "dark" : "light"} size={i ? 40 : 36}/>}</div><div className={module2332.title}><div className="h3">{name}</div><p>{desc}</p></div>{this.renderExtraInfo()}</div>;
            }
        }
    ]);
    return a;
})(PureComponent);
export default h;
h.propTypes = {
    type: module1.string,
    icon: module1.string,
    rightIcon: module1.oneOfType([
        module1.string,
        module1.node,
        module1.element
    ]),
    name: module1.string,
    desc: module1.string
};
h.defaultProps = {
    type: "light",
    icon: "appcenter",
    iconClass: "",
    name: "",
    desc: ""
};
