import "./module-15.js";
import "./module-5.js";
import "./module-86.js";
import "./module-18.js";
import "./module-97.js";
import "./module-16.js";
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
import module186 from "./module-186.js";
import Module1414 from "./module-1414.js";
import module1845 from "./module-1845.js";
const g = ((Component_1)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.checkSelect = function(t = {}) {
            const current = e.props.current;
            if (t.children) {
                return t.children.some((t)=>e.checkSelect(t));
            }
            if (t.tabs) {
                return t.tabs.some((t)=>e.checkSelect(t));
            }
            return current.indexOf(t.name) === 0;
        };
        e.handleOpen = function() {
            const e_props = e.props;
            e_props.onOpen(e_props.item.name);
        };
        return e;
    }
    module37(r, [
        {
            key: "renderDisabledTip",
            value: function(e) {
                if (e.reason === "CLUSTER_UPGRADE_REQUIRED") {
                    return <module186.Tooltip content={t(e.reason, {
                        version: e.requiredClusterVersion
                    })} placement="topRight"><module186.Icon name="update" className={module1845.extraIcon} color={{
                        primary: "#ffc781",
                        secondary: "#f5a623"
                    }}/></module186.Tooltip>;
                }
                if (e.reason === "UNAUTHORIZED") {
                    return <module186.Tooltip content=<div><p className="font-bold">{t("UNAUTHORIZED_FEATURE")}</p><p>{t("UNAUTHORIZED_FEATURE_DESC")}</p></div> placement="topRight"><module186.Icon name="lock" className={module1845.extraIcon}/></module186.Tooltip>;
                }
                return null;
            }
        },
        {
            key: "render",
            value: function() {
                let e;
                let a;
                const _this = this;
                const props = this.props;
                const { item, prefix, disabled, onClick, isOpen } = props;
                const d = (disabled || item.disabled) && !item.showInDisable;
                if (item.children) {
                    return <li className={module3((a = {}, module31(a, module1845.childSelect, this.checkSelect(item)), module31(a, module1845.open, item.open || isOpen), module31(a, module1845.disabled, d), a))}><div className={module1845.title} onClick={this.handleOpen}><module186.Icon name={item.icon}/><span className="nav-title">{t(item.title)}</span>{!d && !item.open && <module186.Icon name="chevron-down" className={module3(module1845.rightIcon, "nav_fold_icon")}/>}{d && this.renderDisabledTip(item)}</div><ul className={module3(module1845.innerNav, "children_nav")}>{item.children.map((e)=>{
                        let a;
                        const n = (disabled || e.disabled) && !e.showInDisable;
                        return <li key={e.name} className={module3((a = {}, module31(a, module1845.select, _this.checkSelect(e)), module31(a, module1845.disabled, n), a))}><Module1414 to={`${prefix}/${e.name}`} disabled={n}>{t(e.title)}{n && _this.renderDisabledTip(e)}</Module1414></li>;
                    })}</ul></li>;
                }
                return <li key={item.name} className={module3((e = {}, module31(e, module1845.select, this.checkSelect(item)), module31(e, module1845.disabled, d), e))}><Module1414 to={`${prefix}/${item.name}`} onClick={onClick} disabled={d}><module186.Icon name={item.icon}/><span className="nav-title">{t(item.title)}</span>{d && this.renderDisabledTip(item)}</Module1414></li>;
            }
        }
    ]);
    return r;
})(Component);
export default g;
g.propTypes = {
    item: module1.object,
    current: module1.string,
    prefix: module1.string,
    onClick: module1.func,
    onOpen: module1.func,
    disabled: module1.bool
};
