import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
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
import * as module553 from "./module-553.js";
import module186 from "./module-186.js";
import { trigger } from "./module-792.js";
import { inject, observer } from "./module-239.js";
import module790 from "./module-790.js";
import module791 from "./module-791.js";
import module1725 from "./module-1725.js";
import module5126 from "./module-5126.js";
import module63 from "./module-63.js";
import module5127 from "./module-5127.js";
let o;
const T = inject("rootStore")(o = observer(o = trigger(o = ((e)=>{
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
    function r(...u) {
        let e;
        module36(this, r);
        e = a.call(this, ...u);
        e.store = new module5126;
        e.resetToDefault = function() {
            e.trigger("platformInfo.resetTheme", {
                store: e.store,
                success: function() {
                    window.location.reload();
                    window.parent?.location?.reload();
                }
            });
        };
        e.updatePlatformInfo = function() {
            e.trigger("update.platformInfo.theme", {
                store: e.store,
                success: function() {
                    window.location.reload();
                    window.parent?.location?.reload();
                }
            });
        };
        e.renderOptButtons = function() {
            return module553.default.createElement("div", null, !globals.useDefaultTheme && module553.default.createElement(module186.Button, {
                onClick: e.resetToDefault
            }, t("RESET_PLATFORM_INFO")), module553.default.createElement(module186.Button, {
                onClick: e.updatePlatformInfo
            }, t("MODIFY_PLATFORM_INFO")));
        };
        e.displayPlatformInfo = function() {
            return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
                className: module5127.infoContent
            }, module553.default.createElement("div", null, module553.default.createElement("p", {
                className: module5127.title
            }, t(e.theme.title)), module553.default.createElement("p", {
                className: module5127.subTitle
            }, t("PLATFORM_TITLE"))), module553.default.createElement("div", {
                style: {
                    marginTop: "12px"
                }
            }, module553.default.createElement("p", {
                className: module5127.title
            }, t(e.theme.description)), module553.default.createElement("p", {
                className: module5127.subTitle
            }, t("PLATFORM_DESCRIPTION")))), module553.default.createElement("div", {
                className: module5127.infoContent
            }, module553.default.createElement(module186.Columns, null, module553.default.createElement(module186.Column, {
                className: "is-6"
            }, module553.default.createElement("div", null, module553.default.createElement("p", {
                className: module5127.title
            }, t("PLATFORM_LOGO")), module553.default.createElement("div", {
                className: module5127.iconLogoBox
            }, module553.default.createElement(module1725, {
                src: e.theme.logo,
                className: module5127.logo
            }))), module553.default.createElement("div", {
                style: {
                    marginTop: "20px"
                }
            }, module553.default.createElement("p", {
                className: module5127.title
            }, t("BROWSER_FAVICON")), module553.default.createElement("div", {
                className: module5127.iconLogoBox
            }, module553.default.createElement(module1725, {
                className: module5127.favicon,
                src: e.theme.favicon
            })))), module553.default.createElement(module186.Column, {
                className: "is-6"
            }, module553.default.createElement("p", {
                className: module5127.title
            }, t("LOGIN_BACKGROUND")), module553.default.createElement("div", {
                className: module5127.backgroundBox
            }, module63(e.theme.background) ? e.renderNoBackground() : module553.default.createElement(module1725, {
                className: module5127.backgroundImg,
                src: e.theme.background
            }))))));
        };
        e.renderNoBackground = function() {
            return module553.default.createElement("div", {
                className: module5127.emptyBackground
            }, module553.default.createElement("div", {
                className: module5127.icon
            }, module553.default.createElement(module186.Icon, {
                name: "picture",
                size: "48"
            })), module553.default.createElement("span", {
                className: module5127.title,
                style: {
                    marginBottom: "4px"
                }
            }, t("NO_BACKGROUND")), module553.default.createElement("span", {
                className: module5127.subTitle
            }, t("NO_BACKGROUND_TIP")));
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                return module553.default.createElement(module790, {
                    title: t("BASIC_INFORMATION")
                }, module553.default.createElement("div", {
                    className: module5127.header
                }, module553.default.createElement(module791, {
                    icon: "image",
                    title: location.host,
                    description: t("PLATFORM_ADDRESS")
                }), this.renderOptButtons()), module553.default.createElement("div", {
                    className: module5127.content
                }, this.displayPlatformInfo()));
            }
        },
        {
            key: "theme",
            get: function() {
                if (globals.useDefaultTheme) {
                    return globals.defaultTheme;
                }
                return globals.theme;
            }
        }
    ]);
    return r;
})(module553.Component)) || o) || o) || o;
export default T;
