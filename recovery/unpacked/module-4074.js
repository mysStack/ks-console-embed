import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-64.js";
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
import module186 from "./module-186.js";
import { checkComponentAuthorized } from "./module-52.js";
import module1846 from "./module-1846.js";
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
    function r(...o) {
        let e;
        module36(this, r);
        e = a.call(this, ...o);
        e.renderNavItem = function(a) {
            const e_props = e.props;
            const { data, isHover } = e_props;
            return <div className={module3(module1846.nav, module31({}, module1846.active, isHover))}><div className={module1846.icon}><module186.Icon name={data.icon} size={60} type="light"/></div><div className={module1846.title}>{t(data.title)}</div><div className={module1846.desc}>{t(data.desc || `${data.title.replace(/\s/g, "_").toUpperCase()}_DESC`)}</div>{!a && <module186.Tag type="warning">{t("UNAUTHORIZED")}</module186.Tag>}{isHover && e.renderActions(data.actions)}<div className={module1846.bottomIcon}><module186.Icon name={data.icon || "cluster"} size={320} type="light"/></div></div>;
        };
        return e;
    }
    module37(r, [
        {
            key: "renderIcon",
            value: function(name) {
                return <module186.Icon name={name}/>;
            }
        },
        {
            key: "renderActions",
            value: function(e) {
                const _this = this;
                if (e) {
                    return <div className={module1846.operators}>{e.map((e)=>{
                        let r;
                        const { name, title, icon, disabled } = e;
                        return <Link key={name} to={`/${name}`} className={module3(module1846.operate, (r = {}, module31(r, module1846.enabled, !disabled), module31(r, module1846.disabled, disabled), r))} onClick={function() {
                            if (!disabled) {
                                _this.props.closeModal();
                            }
                        }}><module186.Icon name={icon} size={24} className={module1846["left-icon"]} type="light"/><span>{t(`${title}`)}</span></Link>;
                    })}</div>;
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { data, onClick, onHover } = props;
                const n = "actions" in data;
                const l = "requiredAuth" in data;
                const u = checkComponentAuthorized({
                    componentName: data.requiredAuth
                });
                if (l && !u) {
                    return <div className={module1846.unAuthorized} onMouseOver={onHover} data-name={data.name} onClick={function(e) {
                        return e.stopPropagation();
                    }}>{this.renderNavItem(u)}</div>;
                }
                if (n) {
                    return <div onMouseOver={onHover} data-name={data.name} onClick={function(e) {
                        return e.stopPropagation();
                    }}>{this.renderNavItem(true)}</div>;
                }
                return <Link to={`/${data.name}`} data-name={data.name} onClick={onClick} onMouseOver={onHover}>{this.renderNavItem(true)}</Link>;
            }
        }
    ]);
    return r;
})(Component);
export default y;
y.propTypes = {
    data: module1.object
};
