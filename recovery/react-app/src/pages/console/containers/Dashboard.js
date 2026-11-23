import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-84.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { getLocalTime } from "utils/index";
import module186 from "unpacked/module-186.js";
import { inject } from "unpacked/module-239.js";
import Module833 from "unpacked/module-833.js";
import Module3630 from "pages/console/containers/Dashboard/Admin";
import module3637 from "unpacked/module-3637.js";
let c;
const A = inject("rootStore")(c = ((Component_1)=>{
    module55(u, Component_1);
    var e = ((M)=>{
        const e = (()=>{
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
            } catch (M) {
                return false;
            }
        })();
        return function() {
            let t;
            const u = module51(M);
            if (e) {
                const N = module51(this).constructor;
                t = Reflect.construct(u, arguments, N);
            } else {
                t = u.apply(this, arguments);
            }
            return module56(this, t);
        };
    })(u);
    function u() {
        module36(this, u);
        return e.apply(this, arguments);
    }
    module37(u, [
        {
            key: "renderHeader",
            value: function() {
                const M = globals.user || {};
                const { avatar_url, globalrole, username, lastLoginTime } = M;
                const a = `${t("LAST_LOGIN_TIME")}${getLocalTime(lastLoginTime).format("YYYY-MM-DD HH:mm:ss")}`;
                return <div className={module3637.header} data-test="dashboard-header"><div className={module3637.avatar}><img src={avatar_url || "/assets/default-user.svg"}/></div><div className={module3637.title}><strong>{t("DASHBOARD_TITLE", {
                    username
                })}</strong><div className={module3637.info}><p><module186.Icon name="role" size={16}/>{globalrole}</p><p><module186.Icon name="clock" size={16}/>{a}</p></div></div></div>;
            }
        },
        {
            key: "renderContent",
            value: function() {
                if (globals.app.isPlatformAdmin) {
                    return <Module3630/>;
                }
                return <Module833 title={t("USER_DASHBOARD_EMPTY_TITLE")} desc={t("USER_DASHBOARD_EMPTY_DESC")}/>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module3637.wrapper}>{this.renderHeader()}{this.renderContent()}</div>;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "workspace",
            get: function() {
                const M = localStorage.getItem(`${globals.user.username}-workspace`);
                if (M && globals.app.workspaces.includes(M)) {
                    return M;
                }
                return globals.app.workspaces[0];
            }
        }
    ]);
    return u;
})(Component)) || c;
export default A;
