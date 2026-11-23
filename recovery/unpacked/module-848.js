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
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { PureComponent } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module2272 from "./module-2272.js";
const m = ((PureComponent_1)=>{
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
                const { className, img: img_1, desc } = props;
                return <div className={module3(module2272.wrapper, className)}><img src={img_1} alt="No data"/><div className={module2272.content}>{t(desc)}</div></div>;
            }
        }
    ]);
    return r;
})(PureComponent);
export default m;
m.propTypes = {
    className: module1.string,
    img: module1.string,
    desc: module1.string
};
m.defaultProps = {
    img: "/assets/empty-card.svg",
    desc: "NO_DATA"
};
