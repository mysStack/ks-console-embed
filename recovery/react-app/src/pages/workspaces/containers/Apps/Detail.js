import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-64.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module186 from "unpacked/module-186.js";
import { trigger } from "utils/action";
import Module900 from "unpacked/module-900.js";
import Module836 from "components/Base/Image";
import module470 from "stores/openpitrix/app";
import module943 from "stores/openpitrix/version";
import { getAppCategoryNames, getVersionTypesName, transferAppStatus } from "utils/app";
import { getLocalTime } from "utils/index";
import routes from "pages/workspaces/containers/Apps/Detail/routes";
import module4424 from "unpacked/module-4424.js";
let o;
const R = inject("rootStore")(o = observer(o = trigger(o = ((Component_1)=>{
    module55(a, Component_1);
    var r = ((e)=>{
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
            let r;
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a(...o) {
        let e;
        module36(this, a);
        e = r.call(this, ...o);
        e.store = new module470;
        e.versionStore = new module943;
        e.fetchData = function() {
            e.store.fetchDetail(e.props.match.params);
        };
        e.getOperations = function() {
            const r = module14.toJS(e.store.detail);
            return [
                {
                    key: "editApp",
                    type: "control",
                    text: t("EDIT"),
                    action: "manage",
                    onClick: function() {
                        return e.trigger("openpitrix.template.edit", {
                            detail: r,
                            title: t("EDIT_INFORMATION"),
                            description: t("EDIT_APP_DESC"),
                            icon: "pen",
                            success: function() {
                                return e.fetchData();
                            }
                        });
                    }
                },
                {
                    key: "appDeploy",
                    icon: "snapshot",
                    text: t("INSTALL"),
                    action: "manage",
                    onClick: function() {
                        return e.trigger("openpitrix.template.deploy", {
                            ...e.props.match.params,
                            app: r
                        });
                    }
                },
                {
                    key: "addVersion",
                    icon: "tag",
                    text: t("UPLOAD_NEW_VERSION"),
                    action: "manage",
                    onClick: function() {
                        return e.trigger("openpitrix.template.addVersion", {
                            title: t("UPLOAD_NEW_VERSION"),
                            description: t("UPLOAD_NEW_VERSION_DESC"),
                            icon: "templet",
                            appId: r.app_id,
                            type: "ADD_VERSION",
                            workspace: r.workspace,
                            versionStore: e.versionStore,
                            success: function() {
                                return e.fetchData();
                            }
                        });
                    }
                },
                {
                    key: "delete",
                    icon: "trash",
                    text: t("DELETE"),
                    action: "manage",
                    onClick: function() {
                        return e.trigger("openpitrix.template.delete", {
                            detail: r,
                            versions: e.versionStore.list.data,
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
            const a = module26(r, "create_time", new Date);
            return [
                {
                    name: t("STATUS"),
                    value: transferAppStatus(r.status)
                },
                {
                    name: t("TYPE"),
                    value: getVersionTypesName(module26(r, "app_version_types", ""))
                },
                {
                    name: t("CATEGORY"),
                    value: t(`APP_CATE_${getAppCategoryNames(module26(r, "category_set", [])).toUpperCase().replace(/[^A-Z]+/g, "_")}`, {
                        defaultValue: getAppCategoryNames(module26(r, "category_set", []))
                    })
                },
                {
                    name: t("WORKSPACE"),
                    value: module26(r, "isv", "-")
                },
                {
                    name: t("CREATION_TIME_TCAP"),
                    value: getLocalTime(a).format("YYYY-MM-DD HH:mm:ss")
                }
            ];
        };
        e.renderIcon = function() {
            const detail = e.store.detail;
            return <div className={module4424.appName}><Module836 iconSize={32} iconLetter={detail.name} src={detail.icon} alt=""/></div>;
        };
        return e;
    }
    module37(a, [
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
                    detailStore: this.store,
                    versionStore: this.versionStore
                };
                if (this.store.isLoading && !this.store.detail.name) {
                    return <module186.Loading className="ks-page-loading"/>;
                }
                const r = {
                    icon: this.renderIcon(),
                    module: this.module,
                    authKey: this.authKey,
                    name: this.store.detail.name,
                    desc: this.store.detail.description,
                    operations: this.getOperations(),
                    attrs: this.getAttrs(),
                    breadcrumbs: [
                        {
                            label: t("APP_TEMPLATE_PL"),
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
                return "app-templates";
            }
        },
        {
            key: "name",
            get: function() {
                return "APP";
            }
        },
        {
            key: "workspace",
            get: function() {
                return this.props.match.params.workspace;
            }
        },
        {
            key: "listUrl",
            get: function() {
                return `/workspaces/${this.workspace}/apps`;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        }
    ]);
    return a;
})(Component)) || o) || o) || o;
export default R;
