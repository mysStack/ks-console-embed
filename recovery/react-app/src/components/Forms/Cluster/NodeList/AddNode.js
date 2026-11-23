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
import module136 from "unpacked/module-136.js";
import module26 from "unpacked/module-26.js";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import module788 from "components/Base/Modal";
import module800 from "components/Inputs/NumberInput";
import { generateId } from "utils/index";
import { PATTERN_IP } from "utils/constants";
import module1620 from "unpacked/module-1620.js";
const S = ((e)=>{
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
            formData: module136(e.props.data || {}),
            authMode: module26(e.props.data, "privateKey") ? "secret" : "password"
        };
        e.handleAuthModeChange = function(authMode) {
            e.setState({
                authMode
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (this.props.visible !== e.visible) {
                    this.setState({
                        formData: module136(this.props.data || {})
                    });
                }
            }
        },
        {
            key: "renderAuthentication",
            value: function() {
                if (this.state.authMode === "password") {
                    return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(module186.Form.Item, {
                        label: t("USERNAME"),
                        desc: t("NODE_USERNAME_DESC")
                    }, module553.default.createElement(module186.Input, {
                        name: "user",
                        defaultValue: "root",
                        autoComplete: "off"
                    })), module553.default.createElement(module186.Form.Item, {
                        label: t("PASSWORD"),
                        desc: t("NODE_PASSWORD_DESC")
                    }, module553.default.createElement(module186.InputPassword, {
                        name: "password",
                        autoComplete: "off"
                    })));
                }
                return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(module186.Form.Item, {
                    label: t("SSH_KEY_TCAP")
                }, module553.default.createElement(module186.TextArea, {
                    name: "privateKey",
                    autoResize: true
                })));
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onOk, onCancel, addAfterCreate } = props;
                const state = this.state;
                const { authMode, formData } = state;
                const defaultValue = addAfterCreate ? [
                    "worker"
                ] : undefined;
                return module553.default.createElement(module788.Form, {
                    icon: "add",
                    title: t("ADD_NODE"),
                    width: 600,
                    data: formData,
                    visible,
                    onOk,
                    onCancel
                }, module553.default.createElement(module186.Form.Item, {
                    label: t("NAME"),
                    rules: [
                        {
                            required: true,
                            message: t("NODE_NAME_EMPTY_DESC")
                        }
                    ]
                }, module553.default.createElement(module186.Input, {
                    name: "name",
                    defaultValue: `node-${generateId(4)}`
                })), module553.default.createElement(module186.Form.Item, {
                    label: t("ROLE"),
                    desc: t("NODE_ROLE_DESC"),
                    rules: [
                        {
                            required: true,
                            message: t("NODE_ROLE_EMPTY_DESC")
                        }
                    ]
                }, module553.default.createElement(module186.Select, {
                    name: "roles",
                    options: this.nodeRoles,
                    closeOnSelect: false,
                    defaultValue,
                    multi: true
                })), module553.default.createElement(module186.Form.Item, {
                    label: t("INTERNAL_IP_ADDRESS"),
                    desc: t("NODE_INTERNAL_IP_DESC"),
                    rules: [
                        {
                            required: true,
                            message: t("NODE_INTERNAL_IP_EMPTY_DESC")
                        },
                        {
                            pattern: PATTERN_IP,
                            message: t("INVALID_IP_DESC")
                        }
                    ]
                }, module553.default.createElement(module186.Input, {
                    name: "internalAddress",
                    placeholder: "0.0.0.0",
                    autoComplete: "off"
                })), module553.default.createElement(module186.Columns, {
                    className: module3("is-1", module1620.ssh)
                }, module553.default.createElement(module186.Column, null, module553.default.createElement(module186.Form.Item, {
                    label: t("EXTERNAL_IP"),
                    desc: t("NODE_EXTERNAL_IP_DESC"),
                    rules: [
                        {
                            required: true,
                            message: t("NODE_EXTERNAL_IP_EMPTY_DESC")
                        },
                        {
                            pattern: PATTERN_IP,
                            message: t("INVALID_IP_DESC")
                        }
                    ]
                }, module553.default.createElement(module186.Input, {
                    name: "address",
                    placeholder: "0.0.0.0",
                    autoComplete: "off"
                }))), module553.default.createElement(module186.Column, {
                    className: "is-narrow"
                }, module553.default.createElement(module186.Form.Item, {
                    className: module1620.port,
                    label: t("PORT")
                }, module553.default.createElement(module800, {
                    name: "port",
                    defaultValue: 22,
                    max: 65535,
                    min: 0,
                    integer: true
                })))), module553.default.createElement(module186.Form.Item, {
                    label: t("SSH_AUTH_MODE"),
                    desc: t("SSH_AUTH_MODE_DESC")
                }, module553.default.createElement(module186.Select, {
                    value: authMode,
                    options: this.authModes,
                    onChange: this.handleAuthModeChange
                })), this.renderAuthentication());
            }
        },
        {
            key: "authModes",
            get: function() {
                return [
                    {
                        label: t("USERNAME_AND_PASSWORD"),
                        value: "password"
                    },
                    {
                        label: t("SSH_KEY_SCAP"),
                        value: "secret"
                    }
                ];
            }
        },
        {
            key: "nodeRoles",
            get: function() {
                if (this.props.addAfterCreate) {
                    return [
                        {
                            label: t("WORKER"),
                            value: "worker"
                        }
                    ];
                }
                return [
                    {
                        label: t("CONTROL_PLANE"),
                        value: "master"
                    },
                    {
                        label: t("WORKER"),
                        value: "worker"
                    }
                ];
            }
        }
    ]);
    return r;
})(module553.Component);
export default S;
