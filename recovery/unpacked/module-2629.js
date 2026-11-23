import "./module-15.js";
import "./module-5.js";
import "./module-29.js";
import "./module-48.js";
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
import { observer } from "./module-239.js";
import module242 from "./module-242.js";
import module186 from "./module-186.js";
import module791 from "./module-791.js";
import module1614 from "./module-1614.js";
import module2631 from "./module-2631.js";
let o;
const g = observer(o = ((e)=>{
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
        e.state = {
            showForm: false,
            authType: e.props.value || ""
        };
        e.formRef = module553.default.createRef();
        e.refreshSecrets = function() {
            const e_props = e.props;
            const { cluster, namespace } = e_props;
            e.props.secretStore.fetchListByK8s({
                cluster,
                namespace
            });
        };
        e.toggleForm = function() {
            e.setState(function(e) {
                return {
                    showForm: !e.showForm
                };
            });
        };
        e.hideForm = function() {
            e.setState({
                showForm: false
            });
        };
        e.handleTypeChange = function(authType) {
            e.setState({
                authType
            });
        };
        e.handleSubmit = function() {
            const current = e.formRef.current;
            if (current) {
                current.validate(function() {
                    const authType = e.state.authType;
                    const e_props = e.props;
                    const { value, formData, onChange } = e_props;
                    if (value && value !== authType) {
                        module242(formData, value);
                    }
                    onChange(authType);
                    e.hideForm();
                });
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e, t) {
                if (this.props.value && this.props.value !== t.authType) {
                    this.setState({
                        authType: this.props.value || ""
                    });
                }
            }
        },
        {
            key: "renderFormContent",
            value: function() {
                let e;
                switch(this.state.authType){
                    case "":
                        e = module553.default.createElement(module186.Alert, {
                            type: "info",
                            message: t("NO_AUTHENTICATION_TIP")
                        });
                        break;
                    case "tlsConfig":
                        e = module553.default.createElement("div", null, module553.default.createElement(module186.Form.Item, {
                            label: t("CERTIFICATE_AUTHORITY")
                        }, module553.default.createElement(module1614, {
                            name: "tlsConfig.ca.secret",
                            secrets: this.secrets
                        })), module553.default.createElement(module186.Form.Item, {
                            label: t("CERTIFICATE")
                        }, module553.default.createElement(module1614, {
                            name: "tlsConfig.cert.secret",
                            secrets: this.secrets
                        })), module553.default.createElement(module186.Form.Item, {
                            label: t("PRIVATE_KEY")
                        }, module553.default.createElement(module1614, {
                            name: "tlsConfig.keySecret",
                            secrets: this.secrets
                        })), module553.default.createElement(module186.Form.Item, {
                            label: t("SERVER_NAME")
                        }, module553.default.createElement(module186.Input, {
                            name: "tlsConfig.serverName"
                        })), module553.default.createElement(module186.Form.Item, null, module553.default.createElement(module186.Checkbox, {
                            name: "tlsConfig.insecretSkipVerify"
                        }, t("SKIP_TLS_VERFICATION"))));
                        break;
                    case "bearerTokenSecret":
                        e = module553.default.createElement("div", null, module553.default.createElement(module186.Form.Item, {
                            label: t("TOKEN")
                        }, module553.default.createElement(module1614, {
                            name: "bearerTokenSecret",
                            secrets: this.secrets
                        })));
                        break;
                    case "basicAuth":
                        e = module553.default.createElement("div", null, module553.default.createElement(module186.Form.Item, {
                            label: t("USERNAME")
                        }, module553.default.createElement(module1614, {
                            name: "basicAuth.username",
                            secrets: this.secrets
                        })), module553.default.createElement(module186.Form.Item, {
                            label: t("PASSWORD")
                        }, module553.default.createElement(module1614, {
                            name: "basicAuth.password",
                            secrets: this.secrets
                        })));
                }
                return e;
            }
        },
        {
            key: "renderFormFooter",
            value: function() {
                return module553.default.createElement("div", {
                    className: module2631.footer
                }, module553.default.createElement(module186.Button, {
                    onClick: this.hideForm
                }, t("CANCEL")), module553.default.createElement(module186.Button, {
                    type: "control",
                    onClick: this.handleSubmit
                }, t("OK")));
            }
        },
        {
            key: "renderForm",
            value: function() {
                const formData = this.props.formData;
                const authType = this.state.authType;
                return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
                    className: module2631.form
                }, module553.default.createElement(module791, {
                    className: "margin-b12",
                    title: t("SELECT_AUTHENTICATION_METHOD"),
                    description: t("SELECT_AUTHENTICATION_METHOD_DESC")
                }), module553.default.createElement("div", {
                    className: "margin-b12"
                }, module553.default.createElement(module186.RadioGroup, {
                    mode: "button",
                    value: authType,
                    options: this.authTypes,
                    onChange: this.handleTypeChange
                })), module553.default.createElement(module186.Form, {
                    type: "inner",
                    data: formData,
                    ref: this.formRef
                }, authType && module553.default.createElement(module186.Alert, {
                    type: "default",
                    className: "margin-b12",
                    message: module553.default.createElement("div", {
                        className: module2631.secrets
                    }, module553.default.createElement("a", {
                        href: this.secretLink,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, t("CREATE_A_NEW_SECRET")), " ", "or", " ", module553.default.createElement("a", {
                        onClick: this.refreshSecrets
                    }, t("REFRESH_SECRETS")))
                }), module553.default.createElement("div", {
                    className: module2631.formContent
                }, this.renderFormContent()))), this.renderFormFooter());
            }
        },
        {
            key: "render",
            value: function() {
                const value = this.props.value;
                const a = value === undefined ? "" : value;
                const r = this.authTypes.find((e)=>e.value === a);
                return module553.default.createElement("div", {
                    className: module2631.wrapper
                }, module553.default.createElement("div", {
                    className: module2631.value,
                    onClick: this.toggleForm
                }, module553.default.createElement(module186.Icon, {
                    className: module2631.prefix,
                    name: "ssh"
                }), module553.default.createElement("div", {
                    className: module2631.text
                }, t(r.label))), this.state.showForm && module553.default.createElement("div", {
                    className: module2631.dropdown
                }, this.renderForm()));
            }
        },
        {
            key: "authTypes",
            get: function() {
                return [
                    {
                        label: t("NO_AUTHENTICATION_TCAP"),
                        value: ""
                    },
                    {
                        label: t("TLS"),
                        value: "tlsConfig"
                    },
                    {
                        label: t("BEARER_TOKEN_TCAP"),
                        value: "bearerTokenSecret"
                    },
                    {
                        label: t("BASIC_AUTHENTICATION_TCAP"),
                        value: "basicAuth"
                    }
                ];
            }
        },
        {
            key: "secrets",
            get: function() {
                return this.props.secretStore.list.data.slice();
            }
        },
        {
            key: "secretLink",
            get: function() {
                const props = this.props;
                const { workspace, cluster, namespace } = props;
                return `/${workspace}/clusters/${cluster}/projects/${namespace}/secrets`;
            }
        }
    ]);
    return r;
})(module553.Component)) || o;
export default g;
