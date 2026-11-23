import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-84.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-62.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import { getDisplayName, getLocalTime } from "./module-52.js";
import { trigger } from "./module-792.js";
import module441 from "./module-441.js";
import Module900 from "./module-900.js";
import routes from "./module-4352.js";
let o;
const S = inject("rootStore")(o = observer(o = trigger(o = ((Component_1)=>{
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
        e.store = new module441("globalroles");
        e.fetchData = function() {
            e.store.fetchDetail(e.props.match.params);
        };
        e.getOperations = function() {
            return [
                {
                    key: "edit",
                    icon: "pen",
                    text: t("EDIT_INFORMATION"),
                    action: "edit",
                    show: e.showEdit,
                    onClick: function() {
                        return e.trigger("resource.baseinfo.edit", {
                            type: e.name,
                            detail: module14.toJS(e.store.detail),
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "editRole",
                    icon: "pen",
                    text: t("EDIT_PERMISSIONS"),
                    action: "edit",
                    show: e.showEdit,
                    onClick: function() {
                        return e.trigger("role.edit", {
                            module: e.module,
                            detail: module14.toJS(e.store.detail),
                            roleTemplates: module14.toJS(e.store.roleTemplates.data),
                            roleModules: module14.toJS(e.store.roleCategory),
                            success: e.fetchData
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
                        return e.trigger("role.delete", {
                            type: e.name,
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
                        name: t("CREATION_TIME_TCAP"),
                        value: getLocalTime(r.createTime).format("YYYY-MM-DD HH:mm:ss")
                    },
                    {
                        name: t("CREATOR"),
                        value: r.creator
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
                this.store.fetchRoleTemplates("global");
                this.store.fetchTemplatesCategory("global");
            }
        },
        {
            key: "render",
            value: function() {
                const stores = {
                    detailStore: this.store
                };
                if (this.store.isLoading && !this.store.detail.name) {
                    return <module186.Loading className="ks-page-loading"/>;
                }
                const r = {
                    module: this.module,
                    authKey: this.authKey,
                    name: getDisplayName(this.store.detail),
                    desc: this.store.detail.description,
                    operations: this.getOperations(),
                    attrs: this.getAttrs(),
                    breadcrumbs: [
                        {
                            label: t("PLATFORM_ROLE_PL"),
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
                return this.store.module;
            }
        },
        {
            key: "authKey",
            get: function() {
                return "roles";
            }
        },
        {
            key: "name",
            get: function() {
                return "PLATFORM_ROLE";
            }
        },
        {
            key: "listUrl",
            get: function() {
                return "/access/roles";
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "showEdit",
            get: function() {
                const name = this.props.match.params.name;
                return !globals.config.presetGlobalRoles.includes(name);
            }
        }
    ]);
    return n;
})(Component)) || o) || o) || o;
export default S;
