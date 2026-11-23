import "./module-15.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import { inject, observer } from "./module-239.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import module4063 from "./module-4063.js";
import { trigger } from "./module-792.js";
import module322 from "./module-322.js";
import module4069 from "./module-4069.js";
let u;
let o;
let i;
const C = inject("rootStore")(u = observer(u = trigger((i = o = ((e)=>{
    module55(r, e);
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
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.handleMoreClick = function(e, a) {
            const routing = t.props.rootStore.routing;
            switch(a){
                case "setting":
                    t.trigger("user.setting", {});
                    break;
                case "notification":
                    t.trigger("notification.user.setting", {});
                    break;
                case "about":
                    t.setState({
                        showAbout: true
                    });
                    break;
                case "logout":
                    t.props.rootStore.logout();
                    break;
                case "support":
                    routing.push("/support");
            }
        };
        t.hideAboutModal = function() {
            t.setState({
                showAbout: false
            });
        };
        t.store = new module322;
        t.state = {
            showAbout: false
        };
        return t;
    }
    module37(r, [
        {
            key: "renderDropDown",
            value: function() {
                return module553.default.createElement(module186.Menu, {
                    onClick: this.handleMoreClick
                }, module553.default.createElement(module186.Menu.MenuItem, {
                    key: "setting"
                }, module553.default.createElement(module186.Icon, {
                    name: "wrench"
                }), " ", t("USER_SETTINGS")), module553.default.createElement(module186.Menu.MenuItem, {
                    key: "notification"
                }, module553.default.createElement(module186.Icon, {
                    name: "loudspeaker"
                }), " ", t("NOTIFICATION_SETTINGS")), module553.default.createElement(module186.Menu.MenuItem, {
                    key: "logout"
                }, module553.default.createElement(module186.Icon, {
                    name: "logout"
                }), " ", t("LOG_OUT")), module553.default.createElement(module186.Menu.MenuItem, {
                    key: "about"
                }, module553.default.createElement(module186.Icon, {
                    name: "information"
                }), " ", t("ABOUT")));
            }
        },
        {
            key: "renderModals",
            value: function() {
                return module553.default.createElement("div", null, module553.default.createElement(module4063, {
                    visible: this.state.showAbout,
                    onCancel: this.hideAboutModal
                }));
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, isAppsPage } = props;
                if (globals.user) {
                    return module553.default.createElement("div", {
                        className: module3(module4069.logined, className)
                    }, module553.default.createElement(module186.Dropdown, {
                        content: this.renderDropDown(),
                        placement: "bottomRight"
                    }, module553.default.createElement("div", {
                        className: module3(module4069.name, module31({}, module4069.isAppsPage, isAppsPage))
                    }, module553.default.createElement(module186.Icon, {
                        name: "human"
                    }), globals.user.username, module553.default.createElement(module186.Icon, {
                        name: "caret-down",
                        type: isAppsPage ? "white" : "dark"
                    }))), this.renderModals());
                }
                return module553.default.createElement("div", {
                    className: module3(module4069.notLoggedIn, className)
                }, module553.default.createElement("div", {
                    className: module4069.name
                }, module553.default.createElement(module186.Icon, {
                    name: "human",
                    color: {
                        primary: "#f5a623",
                        secondary: "#8d663e"
                    }
                }), module553.default.createElement("a", {
                    className: module4069.loginLabel,
                    href: `/login?referer=${location.pathname}`
                }, t("LOG_IN"))));
            }
        }
    ]);
    return r;
})(module553.Component), o.propTypes = {
    isAppsPage: module1.bool
}, u = i)) || u) || u) || u;
export default C;
