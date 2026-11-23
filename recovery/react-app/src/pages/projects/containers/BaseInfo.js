import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-48.js";
import "unpacked/module-192.js";
import "unpacked/module-16.js";
import "unpacked/module-98.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-62.js";
import "unpacked/module-137.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import module31 from "unpacked/module-31.js";
import module96 from "utils/babel-helpers/slicedToArray";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module447 from "unpacked/module-447.js";
import module857 from "unpacked/module-857.js";
import { memoryFormat, removeV4DashboardHistory } from "utils/index";
import module441 from "stores/role";
import module322 from "stores/user";
import module886 from "stores/quota";
import module1095 from "unpacked/module-1095.js";
import { trigger } from "utils/action";
import Module793 from "unpacked/module-793.js";
import Module1218 from "unpacked/module-1218.js";
import module867 from "stores/storageClass";
import Module4628 from "pages/projects/containers/BaseInfo/ProjectInfo";
import Module1233 from "unpacked/module-1233.js";
import Module1232 from "pages/projects/containers/BaseInfo/DefaultResource";
let o;
const x = "storageclass.storage.k8s.io/requests.storage";
const M = "storageclass.storage.k8s.io/persistentvolumeclaims";
const L = [
    "requests.storage",
    "persistentvolumeclaims"
];
const j = inject("rootStore", "workspaceStore", "projectStore")(o = observer(o = trigger(o = ((Component_1)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.roleStore = new module441;
        e.memberStore = new module322;
        e.quotaStore = new module886;
        e.limitRangeStore = new module1095;
        e.storageClassStore = new module867;
        e.state = {
            showEdit: false,
            showDelete: false,
            showEditQuota: false,
            showEditDefaultResource: false
        };
        e.getData = function() {
            e.store.fetchDetail(e.params);
        };
        e.handleMoreMenuClick = function(t, a) {
            const r = e.enabledItemActions.find((e)=>e.key === a);
            if (r && r.onClick) {
                r.onClick();
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                if (this.canViewMembers) {
                    this.memberStore.fetchList(this.params);
                }
                if (this.canViewRoles) {
                    this.roleStore.fetchList(this.params);
                }
                this.quotaStore.fetch(this.params);
                this.limitRangeStore.fetchListByK8s(this.params);
                this.storageClassStore.fetchList({
                    cluster: this.params.cluster
                });
            }
        },
        {
            key: "render",
            value: function() {
                const e = module14.toJS(this.store.detail);
                const total = this.roleStore.list.total;
                const total_1 = this.memberStore.list.total;
                const serviceCount = module26(this.quotaStore, 'data.used["count/services"]', 0);
                const o = module14.toJS(this.limitRangeStore.list.data)[0];
                const c = module14.toJS(this.quotaStore.data);
                return <div><Module793 icon="cdn" title={t("BASIC_INFORMATION")} description={t("PROJECT_BASIC_INFO_DESC")} module="project_base_info" tips={this.isEdge ? undefined : this.tips}/><Module4628 detail={e} roleCount={total} memberCount={total_1} serviceCount={serviceCount} workspace={this.workspace} actions={this.enabledItemActions} onMenuClick={this.handleMoreMenuClick} showDetail={this.canViewMembers && this.canViewRoles}/>{!this.isEdge && <><Module1232 detail={o}/><Module1233 detail={c} storageClassResource={this.storageClassResource} relateStorageClass={this.relateStorageClass} allStorageClass={this.allStorageClass}/></>}<Module1218 annotations={e.annotations} hiddenKeys={globals.config.preservedAnnotations}/></div>;
            }
        },
        {
            key: "allStorageClass",
            get: function() {
                return module14.toJS(this.storageClassStore.list.data);
            }
        },
        {
            key: "storageClassResource",
            get: function() {
                const e = module14.toJS(this.quotaStore.data.hard);
                const t = module14.toJS(this.quotaStore.data.used);
                return L.map((a)=>{
                    const r = module26(e, [
                        a
                    ], a.includes("claims") ? "0" : "0Gi");
                    const n = module26(t, [
                        a
                    ], a.includes("claims") ? "0" : "0Gi");
                    const o = a.includes("claims") ? r : memoryFormat(r, "Gi");
                    return {
                        key: a,
                        name: a,
                        total: o > 0 ? a.includes("claims") ? o : `${o}Gi` : o === 0 || o === "0" ? 0 : undefined,
                        used: a.includes("claims") ? n : memoryFormat(n, "Gi")
                    };
                });
            }
        },
        {
            key: "relateStorageClass",
            get: function() {
                const e = module14.toJS(this.quotaStore.data);
                const t = module26(e, "hard", {});
                const a = module26(e, "used", {});
                const r = Object.entries(t).filter((e)=>{
                    const t = module96(e, 1)[0];
                    return module447(t, x) || module447(t, M);
                }).map((e)=>{
                    const t = module96(e, 2);
                    const a = t[0];
                    const r = t[1];
                    return module31({}, a, r);
                });
                const n = r.map((e)=>{
                    const t = Object.keys(e)[0];
                    return module31({}, t, module26(a, t));
                });
                const o = {
                    total: module61(r),
                    used: module61(n)
                };
                if (o.total.length > 0) {
                    let i;
                    const u = module857(module61(o.total), function(e) {
                        return Object.keys(e)[0].split(".").slice(1).join(".");
                    });
                    i = {};
                    module31(i, x, module26(u, [
                        x
                    ], []).map((e)=>{
                        const t = Object.keys(e)[0];
                        const a = o.used.filter((e)=>Object.keys(e)[0] === t)[0];
                        return {
                            name: t,
                            total: Object.values(e)[0],
                            used: Object.values(a)[0]
                        };
                    }));
                    module31(i, M, module26(u, [
                        M
                    ], []).map((e)=>{
                        const t = Object.keys(e)[0];
                        const a = o.used.filter((e)=>Object.keys(e)[0] === t)[0];
                        return {
                            name: t,
                            total: Object.values(e)[0],
                            used: Object.values(a)[0]
                        };
                    }));
                    return i;
                }
                return {};
            }
        },
        {
            key: "isClusterManage",
            get: function() {
                return globals.app.isPlatformAdmin || globals.app.hasPermission({
                    module: "clusters",
                    action: "manage"
                });
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.projectStore;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "params",
            get: function() {
                return module26(this.props.match, "params", {});
            }
        },
        {
            key: "workspace",
            get: function() {
                return this.params.workspace;
            }
        },
        {
            key: "isEdge",
            get: function() {
                return this.props.workspaceStore.isEdge;
            }
        },
        {
            key: "tips",
            get: function() {
                return [
                    {
                        title: t("HOW_TO_USE_QUOTA_Q"),
                        description: t.html("HOW_TO_USE_QUOTA_A")
                    },
                    {
                        title: t("WHAT_ARE_DEFAULT_CONTAINER_QUOTAS_Q"),
                        description: t("WHAT_ARE_DEFAULT_CONTAINER_QUOTAS_A")
                    }
                ];
            }
        },
        {
            key: "enabledActions",
            get: function() {
                return globals.app.getActions({
                    module: "project-settings",
                    ...this.params,
                    project: this.params.namespace
                });
            }
        },
        {
            key: "canViewRoles",
            get: function() {
                return globals.app.hasPermission({
                    module: "roles",
                    action: "view",
                    ...this.params,
                    project: this.params.namespace
                });
            }
        },
        {
            key: "canViewMembers",
            get: function() {
                return globals.app.hasPermission({
                    module: "members",
                    action: "view",
                    ...this.params,
                    project: this.params.namespace
                });
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                const routing = this.props.rootStore.routing;
                const detail = this.store.detail;
                const data = this.limitRangeStore.list.data;
                const o = [
                    {
                        key: "edit",
                        icon: "pen",
                        action: "edit",
                        text: t("EDIT_INFORMATION"),
                        onClick: function() {
                            return _this.trigger("resource.baseinfo.edit", {
                                detail,
                                success: _this.getData
                            });
                        }
                    },
                    {
                        key: "edit-default-resource",
                        icon: "pen",
                        action: "edit",
                        text: t("EDIT_DEFAULT_CONTAINER_QUOTAS"),
                        isHidden: this.isEdge,
                        onClick: function() {
                            return _this.trigger("project.default.resource", {
                                ..._this.props.match.params,
                                store: _this.limitRangeStore,
                                detail: data[0],
                                supportGpuSelect: true,
                                success: function() {
                                    return _this.limitRangeStore.fetchListByK8s(_this.params);
                                }
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        action: "delete",
                        text: t("DELETE_PROJECT"),
                        onClick: function() {
                            return _this.trigger("resource.delete", {
                                detail,
                                desc: t.html("DELETE_PROJECT_TIP", {
                                    resource: detail.name
                                }),
                                success: function() {
                                    removeV4DashboardHistory(globals.user.username, detail.uid);
                                    routing.push(`/workspaces/${_this.params.workspace}/projects`);
                                }
                            });
                        }
                    }
                ];
                if (globals.app.hasPermission({
                    workspace: this.workspace,
                    module: "projects",
                    action: "manage"
                })) {
                    o.splice(1, 0, {
                        key: "edit-quota",
                        icon: "pen",
                        action: "edit",
                        text: t("EDIT_PROJECT_QUOTAS"),
                        isHidden: this.isEdge,
                        onClick: function() {
                            return _this.trigger("project.quota.edit", {
                                detail,
                                success: function() {
                                    return _this.quotaStore.fetch(_this.params);
                                }
                            });
                        }
                    });
                }
                if (this.isClusterManage) {
                    o.splice(1, 0, {
                        key: "edit-annotations",
                        icon: "pen",
                        action: "manage",
                        text: t("EDIT_ANNOTATIONS"),
                        onClick: function() {
                            return _this.trigger("resource.annotations.edit", {
                                detail,
                                success: _this.getData
                            });
                        }
                    });
                }
                return o;
            }
        },
        {
            key: "enabledItemActions",
            get: function() {
                const _this = this;
                return this.itemActions.filter((t)=>(!t.action || _this.enabledActions.includes(t.action)) && !t.isHidden);
            }
        }
    ]);
    return r;
})(Component)) || o) || o) || o;
export default j;
