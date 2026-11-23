import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-97.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-110.js";
import "./module-64.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-191.js";
import "./module-42.js";
import "./module-160.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module26 from "./module-26.js";
import module801 from "./module-801.js";
import * as module553 from "./module-553.js";
import { observer } from "./module-239.js";
import module14 from "./module-14.js";
import module186 from "./module-186.js";
import module1673 from "./module-1673.js";
import { safeParseJSON } from "./module-52.js";
import { safeBtoa } from "./module-440.js";
import module853 from "./module-853.js";
import module438 from "./module-438.js";
import module955 from "./module-955.js";
import module934 from "./module-934.js";
import module3341 from "./module-3341.js";
import module1735 from "./module-1735.js";
let u;
const A = observer(u = ((e)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.getStateFromProps = function(e) {
            const t = safeParseJSON(e);
            const a = Object.keys(module26(t, "auths", {}))[0] || "";
            return {
                url: a,
                username: module26(t, `auths["${a}"].username`, ""),
                password: module26(t, `auths["${a}"].password`, ""),
                email: module26(t, `auths["${a}"].email`, "")
            };
        };
        e.store = e.props.isEdgeWize ? new module934 : new module853;
        e.hostStore = e.props.isEdgeWize ? new module955 : new module438;
        e.state = {
            ...e.getStateFromProps(e.props.value),
            isValidating: false,
            default: false
        };
        e.triggerChange = module801(function() {
            const e_props = e.props;
            const { onChange, onChangeState } = e_props;
            const e_state = e.state;
            const { url, username, password, email } = e_state;
            e.setState({
                errorMsg: ""
            });
            if (url && username && password) {
                onChange(JSON.stringify({
                    auths: module31({}, url, {
                        username,
                        password,
                        email,
                        auth: safeBtoa(`${username}:${password}`)
                    })
                }));
                onChangeState(Math.random());
            }
        }, 200);
        e.getHostName = async function t() {
            let n;
            let l;
            const u = arguments;
            n = u.length > 0 && u[0] !== undefined ? u[0] : {};
            await e.hostStore.fetchList({
                ...n,
                labelSelector: "cluster-role.kubesphere.io/host=",
                limit: -1
            });
            l = module14.toJS(e.hostStore.list.data).filter((e)=>Object.keys(e.labels).some((e)=>e.endsWith("cluster-role.kubesphere.io/host")));
            return l[0]?.name ?? "host";
        };
        e.handleValidate = module44(module41.mark(function t() {
            let a;
            let r;
            let n;
            let l;
            let u;
            let c;
            let s;
            return module41.wrap(function(t) {
                while(true){
                    switch(t.prev = t.next){
                        case 0:
                            a = e.props;
                            r = a.cluster;
                            n = a.isFederated;
                            l = a.namespace;
                            u = a.screatName;
                            c = a.fedFormTemplate;
                            if (!e.validate()) {
                                t.next = 23;
                                break;
                            }
                            e.setState({
                                isValidating: true
                            });
                            t.t1 = e.store;
                            t.t2 = c;
                            t.t3 = u;
                            t.t4 = l;
                            if (!n) {
                                t.next = 13;
                                break;
                            }
                            t.next = 10;
                            return e.getHostName();
                        case 10:
                            t.t5 = t.sent;
                            t.next = 14;
                            break;
                        case 13:
                            t.t5 = r;
                        case 14:
                            t.t6 = t.t5;
                            t.t7 = {
                                fedFormTemplate: t.t2,
                                name: t.t3,
                                namespace: t.t4,
                                cluster: t.t6
                            };
                            t.next = 18;
                            return t.t1.validateImageRegistrySecret.call(t.t1, t.t7);
                        case 18:
                            t.t0 = t.sent;
                            if (t.t0) {
                                t.next = 21;
                                break;
                            }
                            t.t0 = {};
                        case 21:
                            s = t.t0;
                            e.setState({
                                validate: s.validate || false,
                                reason: s.reason || "",
                                isValidating: false
                            });
                        case 23:
                        case "end":
                            return t.stop();
                    }
                }
            }, t);
        }));
        e.handleUrlChange = function(t) {
            e.setState({
                url: t
            }, e.triggerChange);
            if (t.replace(/^(http(s)?:\/\/)?(.*)$/, "$1").replace("://", "") === "http") {
                e.props.onChangeSkipVerify(true);
            }
        };
        e.handleUserNameChange = function(t) {
            e.setState({
                username: t.target.value
            }, e.triggerChange);
        };
        e.handleEmailChange = function(t) {
            e.setState({
                email: t.target.value
            }, e.triggerChange);
        };
        e.handlePasswordChange = function(t) {
            e.setState({
                password: t.target.value
            }, e.triggerChange);
        };
        return e;
    }
    module37(r, [
        {
            key: "validate",
            value: function() {
                return !!(this.state.url && this.state.username && this.state.password) || (this.setState({
                    errorMsg: t("IMAGE_REGISTRY_REQUIRED_DESC")
                }), false);
            }
        },
        {
            key: "renderTip",
            value: function() {
                const state = this.state;
                const { errorMsg, validate, reason } = state;
                if (errorMsg) {
                    return module553.default.createElement(module186.Alert, {
                        className: "margin-t12",
                        type: "error",
                        message: errorMsg
                    });
                }
                if (validate) {
                    return module553.default.createElement(module186.Alert, {
                        type: "info",
                        icon: "success",
                        message: t("REGISTRY_SECRET_VER_SUC")
                    });
                }
                if (reason) {
                    return module553.default.createElement(module186.Alert, {
                        type: "error",
                        title: t("REGISTRY_SECRET_VER_ERR"),
                        message: reason
                    });
                }
                return module553.default.createElement(module186.Alert, {
                    type: "info",
                    message: t("IMAGE_REGISTRY_VALIDATE_TIP")
                });
            }
        },
        {
            key: "renderDefault",
            value: function() {
                const props = this.props;
                const { isDefault, onChangeDefault } = props;
                return module553.default.createElement("div", {
                    className: module1735.defaultContainer
                }, module553.default.createElement(module186.Toggle, {
                    checed: isDefault,
                    onChange: onChangeDefault,
                    defaultChecked: isDefault
                }), module553.default.createElement("div", null, module553.default.createElement("div", {
                    className: module1735.title
                }, t("SET_AS_DEFAULT")), module553.default.createElement("div", {
                    className: module1735.desc
                }, t("SET_AS_DEFAULT_REGISTRY_DESC"))));
            }
        },
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { url, username, password, email, isValidating } = state;
                const props = this.props;
                const { onChangeSkipVerify, isSkipVerify } = props;
                return module553.default.createElement("div", null, module553.default.createElement("input", {
                    name: "username",
                    className: "hidden-input",
                    type: "text",
                    disabled: true
                }), module553.default.createElement("input", {
                    name: "password",
                    className: "hidden-input",
                    type: "password",
                    disabled: true
                }), module553.default.createElement(module186.Columns, null, module553.default.createElement(module186.Column, null, module553.default.createElement(module3341, {
                    label: t("REGISTRY_ADDRESS_TCAP"),
                    desc: t("REGISTRY_ADDRESS_TIP"),
                    required: true
                }, module553.default.createElement(module1673, {
                    value: url,
                    onChange: this.handleUrlChange
                }))), module553.default.createElement(module186.Column, null, module553.default.createElement(module3341, {
                    label: t("USERNAME"),
                    required: true
                }, module553.default.createElement(module186.Input, {
                    value: username,
                    onChange: this.handleUserNameChange,
                    autoComplete: "nope"
                })))), !this.isHttp && module553.default.createElement(module186.Columns, null, module553.default.createElement(module186.Column, {
                    className: module1735.skip_verify
                }, module553.default.createElement(module186.Checkbox, {
                    checked: isSkipVerify,
                    onChange: onChangeSkipVerify
                }, t("SKIP_VERIFY")))), module553.default.createElement(module186.Columns, null, module553.default.createElement(module186.Column, null, module553.default.createElement(module3341, {
                    label: t("EMAIL")
                }, module553.default.createElement(module186.Input, {
                    value: email,
                    onChange: this.handleEmailChange
                }))), module553.default.createElement(module186.Column, null, module553.default.createElement(module3341, {
                    label: t("PASSWORD"),
                    required: true
                }, module553.default.createElement("div", {
                    className: module1735.password
                }, module553.default.createElement(module186.InputPassword, {
                    type: "password",
                    value: password,
                    onChange: this.handlePasswordChange,
                    autoComplete: "new-password"
                }), module553.default.createElement(module186.Button, {
                    onClick: this.handleValidate,
                    loading: isValidating
                }, t("VALIDATE")))))), this.renderDefault(), module553.default.createElement("div", {
                    className: module1735.tip
                }, this.renderTip()));
            }
        },
        {
            key: "isHttp",
            get: function() {
                return this.state.url.replace(/^(http(s)?:\/\/)?(.*)$/, "$1").replace("://", "") === "http";
            }
        }
    ]);
    return r;
})(module553.Component)) || u;
export default A;
