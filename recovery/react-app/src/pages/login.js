import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-86.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-48.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-188.js";
import "unpacked/module-7.js";
import "unpacked/module-31.js";
import "unpacked/module-58.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-191.js";
import "unpacked/module-42.js";
import "unpacked/module-160.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import module186 from "unpacked/module-186.js";
import module293 from "unpacked/module-293.js";
import module26 from "unpacked/module-26.js";
import { inject, observer } from "unpacked/module-239.js";
import * as module553 from "unpacked/module-553.js";
import module244 from "unpacked/module-244.js";
import module201 from "utils/cookie";
import module772 from "unpacked/module-772.js";
import { rememberSessionUser, restoreSession } from "session-restore";
let p;
function M(e, password) {
    return ((e, t)=>{
        if (t.length > e.length) {
            e += t.slice(0, t.length - e.length);
        }
        const n = [];
        const r = [];
        for(let o = 0, a = e.length; o < a; o++){
            const i = t.length > o ? t.charCodeAt(o) : 64;
            const l = e.charCodeAt(o) + i;
            r.push(l % 2 == 0 ? "0" : "1");
            n.push(String.fromCharCode(Math.floor(l / 2)));
        }
        return `${module293.Base64.encode(r.join(""))}@${n.join("")}`;
    })(e, module293.Base64.encode(password));
}
function loginSucceeded(t) {
    if (!t || typeof t !== "object") {
        return false;
    }
    if (t.status === 200) {
        return true;
    }
    return t.success === true;
}
function loginTargetPath(t) {
    const raw = t && typeof t.redirect === "string" ? t.redirect : "/";
    try {
        if (raw.startsWith("/") && !raw.startsWith("//")) {
            return raw;
        }
        const u = new URL(raw, window.location.origin);
        return `${u.pathname}${u.search}${u.hash}` || "/";
    } catch (err) {
        return "/";
    }
}
async function completeLogin(rootStore, username, t) {
    rememberSessionUser(username);
    const user = await restoreSession();
    if (!user) {
        return false;
    }
    const path = loginTargetPath(t);
    if (rootStore && rootStore.routing && typeof rootStore.routing.push === "function") {
        rootStore.routing.push(path);
    } else {
        window.location.assign(path);
    }
    return true;
}
const E = inject("rootStore")(p = observer(p = ((e)=>{
    module55(r, e);
    var n = ((e)=>{
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
            let n;
            const r = module51(e);
            if (t) {
                const o = module51(this).constructor;
                n = Reflect.construct(r, arguments, o);
            } else {
                n = r.apply(this, arguments);
            }
            return module56(this, n);
        };
    })(r);
    function r(...o_1) {
        let e;
        module36(this, r);
        e = n.call(this, ...o_1);
        e.state = {
            formData: {},
            isSubmmiting: false,
            errorCount: 0,
            showKS: true,
            currentServer: {}
        };
        e.showLDAPPageInUrlQuery = function() {
            const { type = "", title } = module244.parse(location.search.slice(1));
            const a = type.toLowerCase();
            const i = module26(globals, "oauthServers", []).find((e)=>e.title === title);
            if (a && a.indexOf("ldap") > -1 && i) {
                e.setState({
                    showKS: false,
                    currentServer: i
                });
            } else {
                e.setState({
                    showKS: true,
                    currentServer: {}
                });
            }
        };
        e.handleOAuthLogin = function(t) {
            return function(n) {
                const r = {
                    name: t.title,
                    type: t.type,
                    endSessionURL: t.endSessionURL
                };
                module201("oAuthLoginInfo", JSON.stringify(r));
                if (t.type === "LDAPIdentityProvider") {
                    e.setState({
                        showKS: false,
                        currentServer: t
                    });
                } else {
                    window.location.href = n.currentTarget.dataset.url;
                }
            };
        };
        e.handleSubmit = function({ username, password, ...rest }) {
            const e_state = e.state;
            const { showKS, currentServer } = e_state;
            e.setState({
                isSubmmiting: true
            });
            module201("oAuthLoginInfo", "");
            localStorage.removeItem("hideLicenseTip");
            const u = module26(globals, "config.encryptKey", "kubesphere");
            if (showKS) {
                e.props.rootStore.login({
                    username,
                    encrypt: M(u, password),
                    ...rest
                }).then(async (t)=>{
                    e.setState({
                        isSubmmiting: false
                    });
                    if (!loginSucceeded(t)) {
                        e.setState({
                            errorMessage: t.message,
                            errorCount: t.errorCount
                        });
                        return;
                    }
                    const ok = await completeLogin(e.props.rootStore, username, t);
                    if (!ok) {
                        e.setState({
                            errorMessage: t.message || "LOGIN_FAILED"
                        });
                    }
                });
            } else {
                e.props.rootStore.loginIdentityProviders({
                    username,
                    encrypt: M(u, password),
                    title: currentServer.title
                }).then(async (t)=>{
                    e.setState({
                        isSubmmiting: false
                    });
                    if (!loginSucceeded(t)) {
                        e.setState({
                            errorMessage: t.message,
                            errorCount: t.errorCount
                        });
                        return;
                    }
                    const ok = await completeLogin(e.props.rootStore, username, t);
                    if (!ok) {
                        e.setState({
                            errorMessage: t.message || "LOGIN_FAILED"
                        });
                    }
                });
            }
        };
        e.handleBack = function() {
            e.setState({
                showKS: true,
                currentServer: {},
                errorMessage: "",
                errorCount: 0
            }, function() {
                e.routing.push("/login");
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.showLDAPPageInUrlQuery();
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const state = this.state;
                const { formData, isSubmmiting, errorMessage, showKS, currentServer } = state;
                const s = globals.config.logo || globals.defaultTheme.logo;
                const src = globals.useDefaultTheme ? s : globals.theme.logo;
                const style = globals.useDefaultTheme ? {} : {
                    backgroundImage: `url(${globals.theme.background})`
                };
                return module553.default.createElement("div", {
                    className: module772.LoginBg,
                    style
                }, module553.default.createElement("div", {
                    className: module772.loginContainer
                }, module553.default.createElement("a", {
                    href: "/",
                    className: module772.logo
                }, module553.default.createElement("img", {
                    src,
                    alt: ""
                })), module553.default.createElement("div", {
                    className: module772.login
                }, module553.default.createElement("div", {
                    className: module772.header
                }, showKS ? t("WELCOME") : t("TITLE_USERNAME", {
                    title: currentServer.title
                })), module553.default.createElement("div", {
                    className: module772.divider
                }), showKS && module26(globals, "oauthServers", []).map((n)=>module553.default.createElement("div", {
                        key: n.url,
                        className: module772.oauth,
                        "data-url": n.url,
                        onClick: _this.handleOAuthLogin(n)
                    }, module553.default.createElement("span", null, t("LOG_IN_WITH_TITLE", {
                        title: n.title
                    })))), errorMessage && module553.default.createElement(module186.Alert, {
                    className: "margin-t12 margin-b12",
                    type: "error",
                    message: t(errorMessage)
                }), module553.default.createElement(module186.Form, {
                    data: formData,
                    onSubmit: this.handleSubmit
                }, module553.default.createElement(module186.Form.Item, {
                    label: showKS ? t("USERNAME_OR_EMAIL") : t("TITLE_USERNAME", {
                        title: currentServer.title
                    }),
                    rules: [
                        {
                            required: true,
                            message: t("INPUT_USERNAME_OR_EMAIL_TIP")
                        }
                    ]
                }, module553.default.createElement(module186.Input, {
                    name: "username",
                    placeholder: "user@example.com"
                })), module553.default.createElement(module186.Form.Item, {
                    label: t("PASSWORD"),
                    rules: [
                        {
                            required: true,
                            message: t("PASSWORD_EMPTY_DESC")
                        }
                    ]
                }, module553.default.createElement(module186.InputPassword, {
                    name: "password",
                    placeholder: " ",
                    autoComplete: "new-password"
                })), module553.default.createElement("div", {
                    className: module772.footer
                }, module553.default.createElement(module186.Button, {
                    type: "control",
                    htmlType: "submit",
                    loading: isSubmmiting
                }, t("LOG_IN")), !showKS && module553.default.createElement("p", {
                    className: module772.back,
                    onClick: this.handleBack
                }, t("BACK")))))));
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        }
    ]);
    return r;
})(module553.Component)) || p) || p;
export default E;
