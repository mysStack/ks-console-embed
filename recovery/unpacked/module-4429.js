import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-315.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import { inject, observer } from "./module-239.js";
import module186 from "./module-186.js";
import { trigger } from "./module-792.js";
import { getDisplayName, getLocalTime } from "./module-52.js";
import module1099 from "./module-1099.js";
import Module900 from "./module-900.js";
import routes from "./module-4430.js";
let o;
const P = inject("rootStore", "workspaceStore")(o = observer(o = trigger(o = ((Component_1)=>{
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
    function a(...o_1) {
        let e;
        module36(this, a);
        e = r.call(this, ...o_1);
        e.store = new module1099;
        e.fetchData = function() {
            e.store.fetchDetail({
                ...e.props.match.params,
                workspace: e.workspace,
                cluster: e.cluster
            });
        };
        e.getOperations = function() {
            return [
                {
                    key: "create",
                    icon: "cogwheel",
                    text: t("CREATE_APP_TEMPLATE_VERSION"),
                    action: "create",
                    onClick: function() {
                        e.trigger("app.template.version.create", {
                            templateName: e.name,
                            detail: module14.toJS(e.store.detail)?.name,
                            workspace: e.workspace,
                            cluster: e.cluster,
                            success: function() {
                                return e.fetchData();
                            }
                        });
                    }
                },
                {
                    key: "edit",
                    icon: "pen",
                    text: t("EDIT_INFORMATION"),
                    action: "edit",
                    onClick: function() {
                        return e.trigger("resource.baseinfo.edit", {
                            detail: e.store.detail,
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "delete",
                    icon: "trash",
                    text: t("DELETE"),
                    action: "delete",
                    onClick: function() {
                        return e.trigger("resource.delete", {
                            type: "EDGE_APP_TEMPLATES",
                            detail: e.store.detail,
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
                const { creator, workspace, latestVersion, createTime, updateTime } = r;
                return [
                    {
                        name: t("WORKSPACE"),
                        value: workspace || "-"
                    },
                    {
                        name: t("LATEST_VERSION"),
                        value: latestVersion.name || "-"
                    },
                    {
                        name: t("CREATION_TIME"),
                        value: createTime ? getLocalTime(createTime).format("YYYY-MM-DD HH:mm:ss") : "-"
                    },
                    {
                        name: t("UPDATE_TIME_SCAP"),
                        value: updateTime ? getLocalTime(updateTime).format("YYYY-MM-DD HH:mm:ss") : "-"
                    },
                    {
                        name: t("CREATOR"),
                        value: creator || "-"
                    }
                ];
            }
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
                            label: t("EDGE_APP_TEMPLATES_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module900 stores={stores} routes={routes} {...r}/>;
            }
        },
        {
            key: "cluster",
            get: function() {
                const detail = this.props.workspaceStore.detail;
                return module26(module14.toJS(detail), "clusters.[0].name", "");
            }
        },
        {
            key: "workspace",
            get: function() {
                return this.props.match.params.workspace;
            }
        },
        {
            key: "name",
            get: function() {
                return this.props.match.params.name;
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
            key: "listUrl",
            get: function() {
                return `/workspaces/${this.workspace}/edge-apps`;
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
export default P;
