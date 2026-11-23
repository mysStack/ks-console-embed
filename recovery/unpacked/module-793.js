import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-84.js";
import "./module-73.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-137.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module61 from "./module-61.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import * as module1 from "./module-1.js";
import module63 from "./module-63.js";
import module194 from "./module-194.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import { ICON_TYPES } from "./module-72.js";
import Module3018 from "./module-3018.js";
import Module3019 from "./module-3019.js";
import Module3020 from "./module-3020.js";
import module1195 from "./module-1195.js";
const S = ((Component_1)=>{
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
    function a(...n) {
        let e;
        module36(this, a);
        e = t.call(this, ...n);
        e.state = {
            openTip: ""
        };
        e.handleToggle = function(t) {
            e.setState(function(e) {
                return {
                    openTip: e.openTip === t ? "" : t
                };
            });
        };
        e.handleClose = function(t) {
            if (!e.hiddenTips.includes(t)) {
                localStorage.setItem(`${globals.user.username}-banner-tips`, [].concat(module61(e.hiddenTips), [
                    t
                ]).join(","));
                e.forceUpdate();
            }
        };
        return e;
    }
    module37(a, [
        {
            key: "renderTips",
            value: function(e) {
                const _this = this;
                return <div className={module1195.tips}>{e.filter((e)=>!_this.hiddenTips.includes(e.title)).map((e, key)=><Module3018 key={key} {...e} onClose={_this.handleClose} onToggle={_this.handleToggle} open={e.title === _this.state.openTip}/>)}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, title, description, icon, module, tips, tabs, extra, routes, tabsActions } = props;
                return <div className={module3(module1195.wrapper, className)}><div className={module1195.titleWrapper}><div className={module1195.icon}>{module194(icon) ? icon() : <module186.Icon name={icon || ICON_TYPES[module] || "catalog"} size={48}/>}</div><div className={module1195.title}><div className="h3">{title}</div><p className="text-second">{description}</p></div></div>{!module63(routes) && <Module3019 routes={routes}/>}{!module63(tabs) && <Module3020 tabs={tabs} tabsActions={tabsActions}/>}{extra}{!module63(tips) && this.renderTips(tips)}</div>;
            }
        },
        {
            key: "hiddenTips",
            get: function() {
                return (localStorage.getItem(`${globals.user.username}-banner-tips`) || "").split(",");
            }
        }
    ]);
    return a;
})(Component);
export default S;
S.propTypes = {
    className: module1.default.string,
    title: module1.default.string,
    description: module1.default.string,
    icon: module1.oneOfType([
        module1.default.string,
        module1.default.func
    ]),
    module: module1.default.string,
    tips: module1.default.array,
    routes: module1.default.array,
    tabs: module1.default.object,
    extra: module1.default.node,
    tabsActions: module1.default.node
};
S.defaultProps = {
    tips: [],
    tabs: {},
    routes: []
};
