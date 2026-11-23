import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module790 from "components/Base/Panel";
import module791 from "components/Base/Text";
import module793 from "unpacked/module-793.js";
import module5129 from "pages/settings/components/Modals/OAuth";
import module5131 from "pages/settings/components/Modals/GithubOAuth";
import module5133 from "unpacked/module-5133.js";
const E = ((e)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.state = {
            showOAuth: false,
            selectOAuth: {},
            showGithubOAuth: false
        };
        e.showOAuth = function() {
            e.setState({
                showOAuth: true
            });
        };
        e.hideOAuth = function() {
            e.setState({
                showOAuth: false
            });
        };
        e.handleOAuth = function() {
            e.hideOAuth();
        };
        e.showGithubOAuth = function() {
            e.setState({
                showGithubOAuth: true
            });
        };
        e.hideGithubOAuth = function() {
            e.setState({
                showGithubOAuth: false
            });
        };
        e.handleGithubOAuth = function() {
            e.hideGithubOAuth();
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { showOAuth, selectOAuth, showGithubOAuth } = state;
                return module553.default.createElement("div", null, module553.default.createElement(module793, {
                    icon: "passport",
                    title: t("THIRD_PARTY_LOGIN"),
                    description: t("THIRD_PARTY_LOGIN_DESC"),
                    tips: this.tips
                }), module553.default.createElement("div", {
                    className: module5133.title
                }, t("CURRENT_THIRD_PARTY_LOGIN_CONFIGURATIONS")), module553.default.createElement(module790, null, module553.default.createElement(module791, {
                    icon: "github",
                    title: "Github OAuth",
                    description: t("PROTOCOL_TYPE")
                }), module553.default.createElement("div", {
                    className: module5133.status
                }, module553.default.createElement(module791, {
                    title: `Github OAuth ${t("NOT_CONFIGURED")}`,
                    description: "GitHub OAuth uses organization membership to grant access. "
                }), module553.default.createElement(module186.Button, {
                    onClick: this.showGithubOAuth
                }, t("CONFIGURE"), " Github OAuth"))), module553.default.createElement(module790, null, module553.default.createElement(module791, {
                    icon: "safe-notice",
                    title: "OAuth",
                    description: t("PROTOCOL_TYPE")
                }), module553.default.createElement("div", {
                    className: module5133.status
                }, module553.default.createElement(module791, {
                    title: `OAuth ${t("NOT_CONFIGURED")}`,
                    description: t("OAUTH_DESC")
                }), module553.default.createElement(module186.Button, {
                    onClick: this.showOAuth
                }, t("CONFIGURE"), " OAuth"))), module553.default.createElement(module5129, {
                    visible: showOAuth,
                    detail: selectOAuth,
                    onOk: this.handleOAuth,
                    onCancel: this.hideOAuth
                }), module553.default.createElement(module5131, {
                    visible: showGithubOAuth,
                    detail: {},
                    onOk: this.handleGithubOAuth,
                    onCancel: this.hideGithubOAuth
                }));
            }
        },
        {
            key: "tips",
            get: function() {
                return [
                    {
                        title: t("THIRD_PARTY_LOGIN_Q"),
                        description: t("THIRD_PARTY_LOGIN_A")
                    }
                ];
            }
        }
    ]);
    return r;
})(module553.Component);
export default E;
