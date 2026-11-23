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
import module186 from "unpacked/module-186.js";
import Module825 from "unpacked/module-825.js";
import Module796 from "components/Base/Status";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module189 from "unpacked/module-189.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import { Component } from "unpacked/module-553.js";
import module1095 from "unpacked/module-1095.js";
import module439 from "stores/project";
import module886 from "stores/quota";
import { getDisplayNameNew, getLocalTime, showNameAndAlias } from "utils/index";
import { trigger } from "utils/action";
import module3970 from "unpacked/module-3970.js";
import routes from "pages/clusters/containers/Projects/Detail/routes";
let o;
const M = inject("rootStore")(o = observer(o = trigger(o = ((Component_1)=>{
    module55(n, Component_1);
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
            const n = module51(e);
            if (t) {
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
        e.store = new module439;
        e.quotaStore = new module886;
        e.limitRangeStore = new module1095;
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
            const r = module14.toJS(e.store.detail);
            if (!module63(r)) {
                return [
                    {
                        name: t("STATUS"),
                        value: <Module796 type={r.status} name={t(r.status)}/>
                    },
                    {
                        name: t("CLUSTER"),
                        value: showNameAndAlias(e.props.match.params.cluster, "cluster")
                    },
                    {
                        name: t("WORKSPACE"),
                        value: showNameAndAlias(r.workspace, "workspace")
                    },
                    {
                        name: t("CREATION_TIME_TCAP"),
                        value: getLocalTime(r.createTime).format("YYYY-MM-DD HH:mm:ss")
                    },
                    {
                        name: t("CREATOR"),
                        value: r.creator || "-"
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
                const r = {
                    module: this.module,
                    name: getDisplayNameNew(this.store.detail),
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
                return <div className={module3970.detailPage}><Module825 stores={stores} routes={routes} {...r}/></div>;
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
                return `/clusters/${cluster}/projects`;
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
export default M;
