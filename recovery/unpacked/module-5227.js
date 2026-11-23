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
import { inject, observer } from "./module-239.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module189 from "./module-189.js";
import module186 from "./module-186.js";
import Module796 from "./module-796.js";
import Module825 from "./module-825.js";
import { trigger } from "./module-792.js";
import { getDisplayName, getLocalTime } from "./module-52.js";
import module1094 from "./module-1094.js";
import module970 from "./module-970.js";
import module1531 from "./module-1531.js";
import routes from "./module-5228.js";
let o;
const D = inject("rootStore")(o = observer(o = trigger(o = ((Component_1)=>{
    module55(n, Component_1);
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
            const n = module51(e);
            if (t) {
                const r = module51(this).constructor;
                a = Reflect.construct(n, arguments, r);
            } else {
                a = n.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(n);
    function n(...o) {
        let e;
        module36(this, n);
        e = a.call(this, ...o);
        e.store = new module970;
        e.quotaStore = new module1094;
        e.limitRangeStore = new module1531;
        e.fetchData = function() {
            e.store.fetchDetail(e.props.match.params);
        };
        e.getOperations = function() {
            const e_name = e.name;
            const detail = module14.toJS(e.store.detail);
            const data = e.limitRangeStore.list.data;
            return [
                {
                    key: "edit",
                    icon: "pen",
                    text: t("EDIT_INFORMATION"),
                    action: "edit",
                    type: "control",
                    onClick: function() {
                        return e.trigger("resource.baseinfo.edit", {
                            type: e_name,
                            detail: module189(detail, "workspace"),
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "edit-annotations",
                    icon: "pen",
                    action: "manage",
                    text: t("EDIT_ANNOTATIONS"),
                    show: e.store.detail.workspace !== globals.config.systemWorkspace,
                    onClick: function() {
                        return e.trigger("resource.annotations.edit", {
                            detail,
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "editQuota",
                    icon: "pen",
                    text: t("EDIT_PROJECT_QUOTAS"),
                    action: "edit",
                    onClick: function() {
                        return e.trigger("project.quota.edit", {
                            type: e_name,
                            detail,
                            isEdgeWize: true,
                            success: function() {
                                return e.quotaStore.fetch(e.params);
                            }
                        });
                    }
                },
                {
                    key: "edit-default-resource",
                    icon: "pen",
                    action: "edit",
                    text: t("EDIT_DEFAULT_CONTAINER_QUOTAS"),
                    onClick: function() {
                        return e.trigger("project.default.resource", {
                            ...e.props.match.params,
                            store: e.limitRangeStore,
                            detail: data[0],
                            isEdgeWize: true,
                            success: function() {
                                return e.limitRangeStore.fetchListByK8s(e.params);
                            }
                        });
                    }
                },
                {
                    key: "delete",
                    icon: "trash",
                    text: t("DELETE"),
                    action: "delete",
                    type: "danger",
                    show: e.store.detail.workspace !== globals.config.systemWorkspace,
                    onClick: function() {
                        return e.trigger("resource.delete", {
                            type: e_name,
                            detail: module189(detail, "workspace"),
                            success: function() {
                                return e.routing.push(e.listUrl);
                            }
                        });
                    }
                }
            ];
        };
        e.getAttrs = function() {
            const a = module14.toJS(e.store.detail);
            if (!module63(a)) {
                return [
                    {
                        name: t("STATUS"),
                        value: <Module796 type={a.status} name={t(a.status)}/>
                    },
                    {
                        name: t("CLUSTER"),
                        value: e.props.match.params.cluster
                    },
                    {
                        name: t("WORKSPACE"),
                        value: a.workspace
                    },
                    {
                        name: t("CREATION_TIME_TCAP"),
                        value: getLocalTime(a.createTime).format("YYYY-MM-DD HH:mm:ss")
                    },
                    {
                        name: t("CREATOR"),
                        value: a.creator || "-"
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
                this.quotaStore.fetch(this.params);
                this.limitRangeStore.fetchListByK8s(this.params);
            }
        },
        {
            key: "render",
            value: function() {
                const stores = {
                    detailStore: this.store,
                    quotaStore: this.quotaStore,
                    limitRangeStore: this.limitRangeStore
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
                            label: t("PROJECT_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module825 stores={stores} routes={routes} {...a}/>;
            }
        },
        {
            key: "module",
            get: function() {
                return "projects";
            }
        },
        {
            key: "name",
            get: function() {
                return "PROJECT";
            }
        },
        {
            key: "listUrl",
            get: function() {
                const cluster = this.props.match.params.cluster;
                return `/v2/edgewize/clusters/${cluster}/projects`;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "isFedManaged",
            get: function() {
                return this.store.detail.isFedManaged;
            }
        },
        {
            key: "params",
            get: function() {
                return module26(this.props.match, "params", {});
            }
        }
    ]);
    return n;
})(Component)) || o) || o) || o;
export default D;
