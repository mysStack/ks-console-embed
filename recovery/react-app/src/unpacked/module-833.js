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
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { PureComponent } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import module2458 from "./module-2458.js";
const m = ((PureComponent_1)=>{
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
                const props = this.props;
                const { image, icon, title, desc, actions, className } = props;
                return <div className={module3(module2458.wrapper, className)}><div className={module2458.image}>{image ? <img src={image} alt=""/> : <module186.Icon name={icon} size={48}/>}</div><div className={module2458.title}>{title}</div><p className={module2458.desc}>{desc}</p>{actions && <div className={module2458.actions}>{actions}</div>}</div>;
            }
        }
    ]);
    return a;
})(PureComponent);
export default m;
m.propTypes = {
    icon: module1.string,
    title: module1.string,
    desc: module1.oneOfType([
        module1.string,
        module1.element
    ]),
    actions: module1.oneOfType([
        module1.node,
        module1.element
    ])
};
m.defaultProps = {
    icon: "appcenter"
};
