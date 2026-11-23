import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-18.js";
import "./module-16.js";
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
import { Component } from "./module-553.js";
import module26 from "./module-26.js";
import Module836 from "./module-836.js";
import { getBrowserLang, safeParseJSON } from "./module-52.js";
import Module1616 from "./module-1616.js";
import module186 from "./module-186.js";
import module2641 from "./module-2641.js";
const E = ((Component_1)=>{
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
            key: "renderVendor",
            value: function() {
                const props = this.props;
                const e_app = props.app;
                if (props.showCreateVendor) {
                    return t("CREATOR_VALUE", {
                        value: e_app.creator || "-"
                    });
                }
                const r = safeParseJSON(e_app.latest_app_version.maintainers, []).map((e)=>e.name);
                return t("MAINTAINER_VALUE", {
                    value: r[0] || "-"
                });
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { app, iconName } = props;
                const n = module26(globals.user, "lang") || getBrowserLang();
                const l = module26(app, `description_${n}`, app.description);
                return <div className={module2641.wrapper}><div className={module2641.title}><span className={module2641.icon}>{iconName ? <module186.Icon name={iconName} size={48}/> : <Module836 iconSize={48} src={app.icon} iconLetter={app.name} alt=""/>}</span><div className={module2641.text}><div><strong>{app.name || "-"}</strong><Module1616 app={app}/></div><p className={module2641.desc} title={l || ""}>{l || "-"}</p></div></div><div className={module2641.bottom}><span className={module2641.vendor}>{this.renderVendor()}</span><span className={module2641.version} title={app.latest_app_version.name}>{t("LATEST_VALUE", {
                    value: app.latest_app_version.name || "-"
                })}</span></div></div>;
            }
        }
    ]);
    return r;
})(Component);
export default E;
