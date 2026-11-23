import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
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
import { getWebsiteUrl, hrefControl, isAppsPage } from "utils/index";
import Module4060 from "unpacked/module-4060.js";
import Module4062 from "components/Layout/LoginInfo";
import module4070 from "unpacked/module-4070.js";
const b = ((Component_1)=>{
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
        e.handleLinkClick = function(t) {
            return function() {
                e.props.jumpTo(t);
            };
        };
        e.handleDocumentLinkClick = function(e, t) {
            window.open(t);
        };
        return e;
    }
    module37(r, [
        {
            key: "renderDocumentList",
            value: function() {
                const e = getWebsiteUrl();
                const { url, api } = e;
                return <module186.Menu onClick={this.handleDocumentLinkClick} data-test="header-docs"><module186.Menu.MenuItem key={hrefControl(url)}><module186.Icon name="hammer"/> {t("USER_GUIDE")}</module186.Menu.MenuItem><module186.Menu.MenuItem key={hrefControl(api)}><module186.Icon name="api"/> {t("API_DOCUMENT")}</module186.Menu.MenuItem></module186.Menu>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, innerRef, location } = props;
                const u = globals.config.logo || globals.defaultTheme.logo;
                const o = globals.useDefaultTheme ? u : globals.theme.logo;
                return <div ref={innerRef} className={module3(module4070.header, module31({}, module4070.inAppsPage, isAppsPage()), className)}><Module4060/><div className={module4070.headerContent}><Link to={isAppsPage() && !globals.user ? "/apps" : "/"}><img className={module4070.logo} src={isAppsPage() ? "/assets/login-logo.svg" : o} alt=""/></Link>{this.isLoggedIn && <div className={module4070.navs}>{globals.app.enableGlobalNav && <module186.Button type="flat" icon="cogwheel" onClick={this.props.onToggleNav}>{t("PLATFORM")}</module186.Button>}{globals.app.enableAppStore && <module186.Button type="flat" icon="appcenter" onClick={this.handleLinkClick("/apps")} className={module3(module31({}, module4070.active, location.pathname === "/apps"))}>{t("APP_STORE")}</module186.Button>}<module186.Button type="flat" icon="dashboard" onClick={this.handleLinkClick("/")} className={module3(module31({}, module4070.active, location.pathname === "/"))}>{t("WORKBENCH")}</module186.Button></div>}<div className={module4070.right}><Module4062 className={module4070.loginInfo} isAppsPage={isAppsPage()}/></div><div className="header-bottom"/></div></div>;
            }
        },
        {
            key: "isLoggedIn",
            get: function() {
                return Boolean(globals.user);
            }
        }
    ]);
    return r;
})(Component);
b.propTypes = {
    className: module1.string,
    innerRef: module1.object,
    jumpTo: module1.func
};
export default b;
