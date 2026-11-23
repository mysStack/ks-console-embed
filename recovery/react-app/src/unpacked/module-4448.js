import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-935.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import { Link } from "unpacked/module-433.js";
import module186 from "unpacked/module-186.js";
import module4449 from "unpacked/module-4449.js";
const v = ((Component_1)=>{
    module55(r, Component_1);
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
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(r);
    function r() {
        module36(this, r);
        return t.apply(this, arguments);
    }
    module37(r, [
        {
            key: "renderContent",
            value: function() {
                const props = this.props;
                const { icon, iconProps, image, title, desc, extra } = props;
                return <div><div className={module4449.icon}>{image ? <img src={image} alt=""/> : <module186.Icon name={icon} size={40} type="dark" {...iconProps}/>}</div><div className={module4449.text}><div>{title}</div><p>{desc}</p></div>{extra}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { url, size, className } = props;
                if (url) {
                    return <Link className={module3(module4449.info, module4449.link, module4449[size], className)} to={url}>{this.renderContent()}</Link>;
                }
                return <div className={module3(module4449.info, module4449[size], className)}>{this.renderContent()}</div>;
            }
        }
    ]);
    return r;
})(Component);
export default v;
v.propTypes = {
    icon: module1.string,
    iconProps: module1.object,
    image: module1.string,
    title: module1.any,
    desc: module1.any,
    size: module1.string,
    width: module1.number,
    url: module1.string
};
v.defaultProps = {
    icon: "",
    iconProps: {},
    title: "",
    desc: "",
    size: "default",
    width: 0
};
