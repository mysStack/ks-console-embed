import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-935.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import module1 from "./module-1.js";
import module194 from "./module-194.js";
import { Component } from "./module-553.js";
import { Link } from "./module-433.js";
import module2330 from "./module-2330.js";
const y = ((Component_1)=>{
    module55(r, Component_1);
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
            key: "renderClusterTip",
            value: function() {
                return <div><div className="tooltip-title">{t("MULTI_CLUSTER_PROJECT")}</div><p>{t("MULTI_CLUSTER_PROJECT_TIP")}</p></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const { className, avatar, icon, iconSize, iconType = "dark", title, desc, to, noLink, onClick, isMultiCluster } = this.props;
                const b = typeof title === "string" ? <span title={title}>{title}</span> : title;
                const _ = to ? <Link to={to}>{b}</Link> : b;
                return <div className={module3(module2330.wrapper, className, module31({}, module2330.link, noLink || to))} onClick={onClick}>{avatar ? <img className={module2330.image} src={avatar || "/assets/default-user.svg"} alt=""/> : module194(icon) ? icon() : icon && <module186.Icon className={module2330.icon} name={icon} size={iconSize} type={iconType}/>}{(avatar || icon) && isMultiCluster && <module186.Tooltip content={this.renderClusterTip()}><img className={module2330.indicator} src="/assets/cluster.svg"/></module186.Tooltip>}<div className={module2330.text}><div className={module2330.title}>{_}</div><div className={module3(module2330.description, "ks-avatar-desc")} title={typeof desc === "string" ? desc : undefined}>{desc}</div></div></div>;
            }
        }
    ]);
    return r;
})(Component);
export default y;
y.propTypes = {
    avatar: module1.string,
    icon: module1.string,
    iconSize: module1.number,
    to: module1.string
};
y.defaultProps = {
    iconSize: 20,
    iconType: "dark"
};
