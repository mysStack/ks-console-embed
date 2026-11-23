import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
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
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import { inject, observer } from "./module-239.js";
import { getDisplayName, getLocalTime, isEdgeWizePage, showNameAndAlias } from "./module-52.js";
import { trigger } from "./module-792.js";
import { SECRET_TYPES } from "./module-72.js";
import module853 from "./module-853.js";
import module934 from "./module-934.js";
import Module806 from "./module-806.js";
import module3886 from "./module-3886.js";
let l;
const C = inject("rootStore")(l = observer(l = trigger(l = ((Component_1)=>{
    module55(r, Component_1);
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
    function r(...l_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...l_1);
        e.isEdgeWize = isEdgeWizePage();
        e.store = e.isEdgeWize ? new module934 : new module853;
        e.showSetDefault = function(e) {
            return e.type === "kubernetes.io/dockerconfigjson" && !e.isDefault;
        };
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
                    onClick: function() {
                        return e.trigger("resource.baseinfo.edit", {
                            type: e.name,
                            detail: module14.toJS(e.store.detail),
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "editYaml",
                    icon: "pen",
                    text: t("EDIT_YAML"),
                    action: "edit",
                    onClick: function() {
                        return e.trigger("resource.yaml.edit", {
                            detail: e.store.detail,
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "editSecret",
                    icon: "pen",
                    text: t("EDIT_SETTINGS"),
                    action: "edit",
                    onClick: function() {
                        return e.trigger("secret.edit", {
                            detail: e.store.detail,
                            isEdgeWize: e.isEdgeWize,
                            success: e.fetchData
                        });
                    }
                },
                e.showSetDefault(e.store.detail) ? {
                    key: "default",
                    icon: "star",
                    text: t("SET_AS_DEFAULT"),
                    action: "edit",
                    onClick: function() {
                        e.trigger("secret.default", {
                            detail: e.store.detail,
                            cluster: e.props.match.params.cluster,
                            success: function() {
                                e.fetchData();
                            }
                        });
                    }
                } : undefined,
                {
                    key: "delete",
                    icon: "trash",
                    text: t("DELETE"),
                    action: "delete",
                    type: "danger",
                    onClick: function() {
                        return e.trigger("resource.delete", {
                            type: e.name,
                            detail: e.store.detail,
                            success: function() {
                                return e.routing.push(e.listUrl);
                            }
                        });
                    }
                }
            ].filter(Boolean);
        };
        e.getAttrs = function() {
            const a = module14.toJS(e.store.detail);
            const params = e.props.match.params;
            const { cluster, namespace } = params;
            if (!module63(a)) {
                const u = e.store.detail.type === "kubernetes.io/dockerconfigjson" ? [
                    {
                        name: t("DEFAULT_IMAGE_REGISTRY_TCAP"),
                        value: e.showSetDefault(e.store.detail) ? t("NO") : t("YES")
                    }
                ] : [];
                return [].concat(u, [
                    {
                        name: t("CLUSTER"),
                        value: showNameAndAlias(cluster, "cluster")
                    },
                    {
                        name: t("PROJECT"),
                        value: showNameAndAlias(namespace, "project")
                    },
                    {
                        name: t("TYPE"),
                        value: t(SECRET_TYPES[a.type] || a.type)
                    },
                    {
                        name: t("CREATION_TIME_TCAP"),
                        value: getLocalTime(a.createTime).format("YYYY-MM-DD HH:mm:ss")
                    },
                    {
                        name: t("CREATOR"),
                        value: a.creator
                    }
                ]).filter(Boolean);
            }
        };
        return e;
    }
    module37(r, [
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
                const a = {
                    module: this.module,
                    name: getDisplayName(this.store.detail),
                    desc: this.store.detail.description,
                    operations: this.isFedManaged ? [] : this.getOperations(),
                    attrs: this.getAttrs(),
                    breadcrumbs: [
                        {
                            label: t("SECRET_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module806 stores={stores} {...a} routes={module3886(this.props.match.path)}/>;
            }
        },
        {
            key: "module",
            get: function() {
                return "secrets";
            }
        },
        {
            key: "name",
            get: function() {
                return "SECRET";
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "listUrl",
            get: function() {
                const isFedManaged = module14.toJS(this.store.detail).isFedManaged;
                const params = this.props.match.params;
                const { workspace, cluster, namespace } = params;
                if (workspace) {
                    if (isFedManaged) {
                        return `/${workspace}/federatedprojects/${namespace}/${this.module}`;
                    }
                    return `/${workspace}/clusters/${cluster}/projects/${namespace}/${this.module}`;
                }
                if (this.isEdgeWize) {
                    return `/v2/edgewize/clusters/${cluster}/${this.module}`;
                }
                return `/clusters/${cluster}/${this.module}`;
            }
        },
        {
            key: "isFedManaged",
            get: function() {
                return this.store.detail.isFedManaged;
            }
        }
    ]);
    return r;
})(Component)) || l) || l) || l;
export default C;
