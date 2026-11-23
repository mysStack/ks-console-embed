import "./module-15.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import { Link } from "./module-433.js";
import Module836 from "./module-836.js";
import module4387 from "./module-4387.js";
const v = ((Component_1)=>{
    module55(a, Component_1);
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
            key: "renderImage",
            value: function() {
                const props = this.props;
                const { avatar, iconLetter, iconSize, avatarClass } = props;
                return <label className={module3(module4387.image, avatarClass)}><Module836 src={avatar} iconLetter={iconLetter} iconSize={iconSize}/></label>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { title, desc, to, onClick, className } = props;
                const o = to ? <Link to={to}>{title}</Link> : title;
                return <div className={module3(module4387.wrapper, className)}>{this.renderImage()}<div className={module3(module4387.title, module4387.isIcon, "avatar-title")}><div><strong className={module3(module31({}, module4387.canClick, Boolean(onClick)))} onClick={onClick}>{o}</strong></div><div className={module4387.desc} title={desc}>{desc}</div></div></div>;
            }
        }
    ]);
    return a;
})(Component);
export default v;
v.propTypes = {
    avatar: module1.string,
    avatarClass: module1.string,
    iconLetter: module1.string,
    iconSize: module1.number,
    title: module1.string,
    desc: module1.string,
    to: module1.string,
    onClick: module1.func
};
v.defaultProps = {
    iconSize: 20,
    onClick: null
};
