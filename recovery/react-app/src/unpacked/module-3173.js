import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-84.js";
import "./module-18.js";
import "./module-192.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-7.js";
import "./module-109.js";
import "./module-45.js";
import "./module-28.js";
import "./module-191.js";
import "./module-42.js";
import "./module-160.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import "./module-58.js";
import module61 from "./module-61.js";
import module41 from "./module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module14 from "./module-14.js";
import module136 from "./module-136.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module242 from "./module-242.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import module240 from "./module-240.js";
import module951 from "components/ToggleView";
import module788 from "components/Base/Modal";
import module984 from "./module-984.js";
import { RadonDBAppId } from "./module-817.js";
import module3174 from "./module-3174.js";
import module3176 from "./module-3176.js";
import { CKAccount, DefaultPermissionRuleString, KafkaAccount, MySQLAccount, Password, UserName, getPGAccount } from "./module-1286.js";
const L = ((e)=>{
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
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.formRef = module553.default.createRef();
        n.passwordRef = module553.default.createRef();
        n.checkDatabase = function(e, t, a) {
            const r = a || n.state.detail;
            if (e === "permission" && t === "Advanced" && r.database !== "*") {
                r.database = "*";
                n.setState({
                    detail: {
                        ...r
                    }
                });
            }
            if (e === "authentication") {
                n.setState({
                    showAuthenticationAlert: n.props.authentication !== t
                });
            }
            return r;
        };
        n.getEmptyResourceNameRuleIndexes = function(e) {
            return (e || n.state.detail.permissionRules || []).map((e, t)=>{
                if (module26(e, "resource.type") === "cluster" || module26(e, "resource.name")) {
                    return -1;
                }
                return t;
            }).filter((e)=>e > -1);
        };
        n.onOk = function() {
            const n_props = n.props;
            const { action, detail } = n_props;
            const user = n.checkDatabase("permission", n.state.detail.permission, {
                ...n.state.detail
            });
            n.formRef.current.validate(module44(module41.mark(function e() {
                let emptyResourceNameRuleIndexes;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                if (!action) {
                                    e.next = 15;
                                    break;
                                }
                                e.prev = 1;
                                emptyResourceNameRuleIndexes = n.getEmptyResourceNameRuleIndexes();
                                n.setState({
                                    emptyResourceNameRuleIndexes
                                });
                                if (!(emptyResourceNameRuleIndexes.length > 0)) {
                                    e.next = 6;
                                    break;
                                }
                                return e.abrupt("return");
                            case 6:
                                e.next = 8;
                                return action({
                                    ...n.props,
                                    user,
                                    oldUser: detail
                                });
                            case 8:
                                e.next = 15;
                                break;
                            case 10:
                                e.prev = 10;
                                e.t0 = e.catch(1);
                                if (e.t0.message) {
                                    module240.error({
                                        content: `${t(e.t0.message)}`
                                    });
                                }
                                n.props.onCancel();
                                return e.abrupt("return");
                            case 15:
                                n.props.onOk();
                            case 16:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, null, [
                    [
                        1,
                        10
                    ]
                ]);
            })));
        };
        n.customNameValidator = function(e, t) {
            return n.props.nameReplicationValidator(t, module26(n.props, "detail.name"));
        };
        n.getFormItems = function(e) {
            return e.map(({ name, type, label, description, rules = [], options, range, disabled })=>{
                const rules_1 = name === "name" ? [].concat(module61(rules), [
                    {
                        required: true,
                        validator: n.customNameValidator,
                        message: t("USERNAME_EXISTS")
                    }
                ]) : rules;
                switch(type){
                    case "text":
                        return module553.default.createElement(module186.Form.Item, {
                            key: name,
                            label: t(label),
                            desc: t(description),
                            rules: rules_1 || []
                        }, module553.default.createElement(module186.Input, {
                            name,
                            maxLength: range && range.max ? range.max : -1,
                            disabled
                        }));
                    case "password":
                        return module553.default.createElement(module186.Form.Item, {
                            key: name,
                            label: t(label),
                            desc: t(description),
                            rules: rules_1 || []
                        }, module553.default.createElement(module186.InputPassword, {
                            name,
                            innerRef: n.passwordRef,
                            maxLength: range && range.max ? range.max : -1,
                            disabled
                        }));
                    case "textArea":
                        return module553.default.createElement(module186.Form.Item, {
                            key: name,
                            label: t(label),
                            desc: t(description),
                            rules: rules_1
                        }, module553.default.createElement(module186.TextArea, {
                            maxLength: 256,
                            name,
                            disabled
                        }));
                    case "select":
                        return module553.default.createElement(module186.Form.Item, {
                            key: name,
                            label: t(label),
                            desc: t(description),
                            rules: rules_1
                        }, module553.default.createElement(module186.Select, {
                            disabled,
                            name,
                            options
                        }));
                    default:
                        return null;
                }
            });
        };
        n.onPermissionRuleChange = function(e, t) {
            if (t) {
                const a = n.state.detail.permissionRules;
                module74(a, t, e);
            }
        };
        n.onKafkaUserConfigChange = function(e, t) {
            if (t) {
                const a = n.state.detail.kafkaUserConfig;
                if (e === "") {
                    module242(a, t);
                } else {
                    module74(a, t, e);
                }
            }
        };
        n.addPermissionRule = function() {
            const e = n.state.detail.permissionRules || [];
            n.setState({
                detail: {
                    ...n.state.detail,
                    permissionRules: [].concat(module61(e), [
                        JSON.parse(DefaultPermissionRuleString)
                    ])
                }
            });
        };
        n.deletePermissionRule = function(e) {
            const t = n.state.detail.permissionRules || [];
            t.splice(e - 1, 1);
            const emptyResourceNameRuleIndexes = n.getEmptyResourceNameRuleIndexes(t);
            n.setState({
                detail: {
                    ...n.state.detail
                },
                emptyResourceNameRuleIndexes
            });
        };
        const l = [
            RadonDBAppId.RedisCluster,
            RadonDBAppId.RedisSentinel
        ].includes(e.app_id);
        n.state = {
            detail: module136(module14.toJS(e.detail)) || {
                name: "",
                password: "",
                network: "::/0",
                database: "*",
                permission: l ? "~* &* +@all" : "General",
                host: "%",
                authentication: "tls",
                authorization: "simple",
                permissionRules: e.app_id === RadonDBAppId.Kafka ? [
                    JSON.parse(DefaultPermissionRuleString)
                ] : [],
                kafkaUserConfig: (e.app_id, RadonDBAppId.Kafka, {})
            },
            emptyResourceNameRuleIndexes: [],
            showAuthenticationAlert: e.authentication && e.authentication !== module26(e, "detail.authentication", "tls")
        };
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                this.timer = setTimeout(()=>{
                    const current = _this.passwordRef.current;
                    if (current) {
                        current.value = module26(_this.props, "detail.password", "");
                    }
                }, 200);
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.timer) {
                    clearTimeout(this.timer);
                }
            }
        },
        {
            key: "renderOtherItems",
            value: function(e) {
                const _this = this;
                if (e === RadonDBAppId.Kafka) {
                    const { permissionRules = [], kafkaUserConfig = {} } = this.state.detail;
                    return module553.default.createElement("div", null, module553.default.createElement("div", {
                        className: module984.otherItems,
                        key: "PermissionRule"
                    }, permissionRules.map((permissionRule, t)=>module553.default.createElement(module3174, {
                            key: `${JSON.stringify(permissionRule)}${t}`,
                            permissionRule,
                            index: t + 1,
                            isEmptyError: _this.state.emptyResourceNameRuleIndexes.includes(t),
                            onChange: _this.onPermissionRuleChange,
                            canDelete: permissionRules.length > 1,
                            onDelete: _this.deletePermissionRule
                        })), module553.default.createElement("div", {
                        className: module984.addRuleRow
                    }, module553.default.createElement("div", null, module553.default.createElement(module186.Icon, {
                        name: "information",
                        size: 16
                    }), module553.default.createElement("span", null, t("PERMISSION_RULE_DESC"))), module553.default.createElement(module186.Button, {
                        onClick: this.addPermissionRule
                    }, t("ADD")))), module553.default.createElement(module951, null, module553.default.createElement(module3176, {
                        kafkaUserConfig,
                        onChange: this.onKafkaUserConfigChange
                    })));
                }
                return null;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { app_id, authentication = "", ...rest } = props;
                let c = [
                    UserName,
                    Password
                ];
                switch(app_id){
                    case RadonDBAppId.ClickHouse:
                        c = CKAccount;
                        break;
                    case RadonDBAppId.PostgreSQL:
                        c = getPGAccount(!!this.props.detail);
                        break;
                    case RadonDBAppId.MySQL:
                        c = MySQLAccount;
                        break;
                    case RadonDBAppId.RedisCluster:
                    case RadonDBAppId.RedisSentinel:
                        c.push({
                            name: "permission",
                            label: "PERMISSIONS",
                            type: "text",
                            description: "ACL_DESC"
                        });
                        break;
                    case RadonDBAppId.Kafka:
                        c = KafkaAccount;
                }
                if (this.props.detail) {
                    const s = (c = module136(c)).find((e)=>e.name === "name");
                    if (s) {
                        s.disabled = true;
                    }
                }
                return module553.default.createElement(module788, {
                    width: 610,
                    footerClassName: module984.footer,
                    ...rest,
                    onOk: this.onOk
                }, this.state.showAuthenticationAlert && module553.default.createElement(module186.Alert, {
                    className: module984.alert,
                    type: "warning",
                    message: t("AUTHENTICATION_MODE_INCORRECT_ALERT", {
                        cluster: authentication.toUpperCase(),
                        user: this.state.detail.authentication.toUpperCase()
                    })
                }), module553.default.createElement(module186.Form, {
                    className: module984.form,
                    data: this.state.detail,
                    ref: this.formRef,
                    onChange: this.checkDatabase
                }, this.getFormItems(c), this.renderOtherItems(app_id)));
            }
        }
    ]);
    return r;
})(module553.Component);
export default L;
L.propTypes = {
    detail: module1.object,
    onOk: module1.func,
    onCancel: module1.func
};
L.defaultProps = {
    onOk: function() {},
    onCancel: function() {}
};
