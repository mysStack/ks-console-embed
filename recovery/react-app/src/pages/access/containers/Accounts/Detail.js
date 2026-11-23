import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-84.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module186 from "unpacked/module-186.js";
import { getLocalTime } from "utils/index";
import { trigger } from "utils/action";
import module322 from "stores/user";
import Module900 from "unpacked/module-900.js";
import routes from "pages/access/containers/Accounts/Detail/routes";
let o;
const w = inject("rootStore")(o = observer(o = trigger(o = ((Component_1)=>{
    module55(n, Component_1);
    var r = ((t)=>{
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
            } catch (t) {
                return false;
            }
        })();
        return function() {
            let r;
            const n = module51(t);
            if (e) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(...o) {
        let e;
        module36(this, n);
        e = r.call(this, ...o);
        e.store = new module322;
        e.fetchData = function() {
            e.store.fetchDetail(e.props.match.params);
        };
        e.getOperations = function() {
            return [
                {
                    key: "edit",
                    icon: "pen",
                    text: t("EDIT"),
                    action: "edit",
                    show: e.showEdit,
                    onClick: function() {
                        return e.trigger("user.edit", {
                            detail: module14.toJS(e.store.detail),
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "modifyPassword",
                    icon: "pen",
                    text: t("CHANGE_PASSWORD"),
                    action: "edit",
                    show: e.showEdit,
                    onClick: function() {
                        return e.trigger("user.modifypassword", {
                            detail: module14.toJS(e.store.detail)
                        });
                    }
                },
                {
                    key: "delete",
                    icon: "trash",
                    text: t("DELETE"),
                    action: "delete",
                    type: "danger",
                    show: e.showEdit,
                    onClick: function() {
                        return e.trigger("resource.delete", {
                            type: "USER",
                            resource: e.store.detail.username,
                            detail: module14.toJS(e.store.detail),
                            success: function() {
                                return e.routing.push(e.listUrl);
                            }
                        });
                    }
                }
            ];
        };
        e.getAttrs = function() {
            const r = module14.toJS(e.store.detail);
            if (!module63(r)) {
                return [
                    {
                        name: t("PLATFORM_ROLE"),
                        value: r.globalrole
                    },
                    {
                        name: t("EMAIL"),
                        value: r.email
                    },
                    {
                        name: t("LAST_LOGIN"),
                        value: r.lastLoginTime ? getLocalTime(r.lastLoginTime).format("YYYY-MM-DD HH:mm:ss") : t("NOT_LOGIN_YET")
                    }
                ];
            }
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "render",
            value: function() {
                const stores = {
                    detailStore: this.store
                };
                if (this.store.isLoading && !this.store.detail.username) {
                    return <module186.Loading className="ks-page-loading"/>;
                }
                const r = {
                    module: this.module,
                    authKey: this.authKey,
                    name: module26(this.store.detail, "username"),
                    desc: this.detailDesc,
                    operations: this.getOperations(),
                    attrs: this.getAttrs(),
                    breadcrumbs: [
                        {
                            label: t("USER_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module900 stores={stores} routes={routes} {...r}/>;
            }
        },
        {
            key: "module",
            get: function() {
                return "accounts";
            }
        },
        {
            key: "authKey",
            get: function() {
                return "users";
            }
        },
        {
            key: "name",
            get: function() {
                return "USER";
            }
        },
        {
            key: "listUrl",
            get: function() {
                return "/access/accounts";
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "detailDesc",
            get: function() {
                if (globals.config.presetUsers.includes("admin")) {
                    return t(module26(this.store.detail, "description"));
                }
                return module26(this.store.detail, "description");
            }
        },
        {
            key: "showEdit",
            get: function() {
                const name = this.store.detail.name;
                return !globals.config.presetUsers.includes(name);
            }
        }
    ]);
    return n;
})(Component)) || o) || o) || o;
export default w;
