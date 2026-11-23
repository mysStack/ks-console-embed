import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-315.js";
import "./module-58.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import module26 from "./module-26.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import module788 from "./module-788.js";
import module1121 from "./module-1121.js";
import { isSystemRole } from "./module-52.js";
import { PATTERN_PASSWORD, PATTERN_USER_NAME } from "./module-72.js";
import module441 from "./module-441.js";
import module3543 from "./module-3543.js";
let o;
let u;
let c;
let s;
const w = observer((s = c = ((e)=>{
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
    function r(...l) {
        let e;
        module36(this, r);
        e = a.call(this, ...l);
        e.state = {
            formTemplate: {
                apiVersion: "iam.kubesphere.io/v1alpha2",
                kind: "User",
                ...module26(e.props, "detail._originData", {})
            }
        };
        e.globalRoleStore = new module441("globalroles");
        e.userNameValidator = function(a, r, n) {
            if (!r) {
                return n();
            }
            e.props.store.checkName({
                name: r
            }).then((e)=>{
                if (e.exist) {
                    return n({
                        message: t("USERNAME_EXISTS"),
                        field: a.field
                    });
                }
                n();
            });
        };
        e.emailValidator = function(a, r, n) {
            if (!r) {
                return n();
            }
            e.props.store.checkEmail(r).then((e)=>{
                if (e.exist) {
                    return n({
                        message: t("EMAIL_EXISTS"),
                        field: a.field
                    });
                }
                n();
            });
        };
        e.optionRenderer = function(e) {
            return module553.default.createElement("div", {
                className: module3543.option
            }, module553.default.createElement("div", null, e.item.name), module553.default.createElement("p", null, e.item.description));
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.globalRoleStore.fetchList({
                    limit: -1,
                    sortBy: "createTime"
                });
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { store: _store, detail, ...rest } = props;
                const n = detail ? "EDIT_USER" : "CREATE_USER";
                const l = detail ? [
                    {
                        required: true,
                        message: t("USERNAME_EMPTY_DESC")
                    }
                ] : [
                    {
                        required: true,
                        message: t("USERNAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_USER_NAME,
                        message: t("USERNAME_INVALID", {
                            message: t("USERNAME_DESC")
                        })
                    },
                    {
                        validator: this.userNameValidator
                    }
                ];
                const o = detail ? [
                    {
                        required: true,
                        message: t("EMAIL_EMPTY_DESC")
                    }
                ] : [
                    {
                        required: true,
                        message: t("EMAIL_EMPTY_DESC")
                    },
                    {
                        type: "email",
                        message: t("INVALID_EMAIL")
                    },
                    {
                        validator: this.emailValidator
                    }
                ];
                return module553.default.createElement(module788.Form, {
                    title: t(n),
                    icon: "human",
                    width: 691,
                    data: this.state.formTemplate,
                    ...rest
                }, module553.default.createElement("input", {
                    name: "username",
                    className: "hidden-input",
                    type: "text",
                    disabled: true
                }), module553.default.createElement("input", {
                    name: "password",
                    className: "hidden-input",
                    type: "password",
                    disabled: true
                }), module553.default.createElement(module186.Form.Item, {
                    label: t("USERNAME"),
                    desc: t("USERNAME_DESC"),
                    rules: l
                }, module553.default.createElement(module186.Input, {
                    name: "metadata.name",
                    autoComplete: "nope",
                    disabled: !!detail,
                    autoFocus: true,
                    maxLength: 32
                })), module553.default.createElement(module186.Form.Item, {
                    label: t("EMAIL"),
                    desc: t("EMAIL_DESC"),
                    rules: o
                }, module553.default.createElement(module186.Input, {
                    name: "spec.email",
                    placeholder: "user@example.com",
                    autoComplete: "nope"
                })), module553.default.createElement(module186.Form.Item, {
                    label: t("PLATFORM_ROLE"),
                    desc: t("PLATFORM_ROLE_DESC")
                }, module553.default.createElement(module186.Select, {
                    name: "metadata.annotations['iam.kubesphere.io/globalrole']",
                    optionRenderer: this.optionRenderer,
                    options: this.globalRoles,
                    placeholder: " "
                })), !detail && module553.default.createElement(module186.Form.Item, {
                    className: module3543.password,
                    label: t("PASSWORD"),
                    desc: t("PASSWORD_DESC"),
                    rules: [
                        {
                            required: true,
                            message: t("PASSWORD_EMPTY_DESC")
                        },
                        {
                            pattern: PATTERN_PASSWORD,
                            message: t("PASSWORD_INVALID_DESC")
                        }
                    ]
                }, module553.default.createElement(module1121, {
                    name: "spec.password",
                    autoComplete: "nope",
                    withStrength: true
                })), module553.default.createElement(module186.Form.Item, {
                    className: module3543.textarea,
                    label: t("DESCRIPTION"),
                    desc: t("DESCRIPTION_DESC")
                }, module553.default.createElement(module186.TextArea, {
                    name: "metadata.annotations['kubesphere.io/description']",
                    maxLength: 256,
                    rows: "3"
                })));
            }
        },
        {
            key: "globalRoles",
            get: function() {
                return this.globalRoleStore.list.data.filter((e)=>!isSystemRole(e.name)).map((item)=>({
                        label: item.name,
                        value: item.name,
                        item
                    }));
            }
        }
    ]);
    return r;
})(module553.Component), c.propTypes = {
    store: module1.object,
    detail: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
}, c.defaultProps = {
    visible: false,
    isSubmitting: false,
    onOk: function() {},
    onCancel: function() {}
}, u = s, module49(u.prototype, "globalRoles", [
    module14.computed
], Object.getOwnPropertyDescriptor(u.prototype, "globalRoles"), u.prototype), o = u)) || o;
export default w;
