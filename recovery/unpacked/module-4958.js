import "./module-12.js";
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
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-62.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
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
import module437 from "./module-437.js";
import { trigger } from "./module-792.js";
import Module793 from "./module-793.js";
import Module1218 from "./module-1218.js";
import module445 from "./module-445.js";
import Module4959 from "./module-4959.js";
import Module4961 from "./module-4961.js";
let o;
const C = inject("rootStore", "projectStore")(o = observer(o = trigger(o = ((Component_1)=>{
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
    function a(...n) {
        let e;
        module36(this, a);
        e = r.call(this, ...n);
        e.limitRangeStore = new module437({
            module: "limitranges"
        });
        e.workspaceStore = new module445;
        e.getData = function() {
            const namespace = e.params.namespace;
            e.store.fetchDetail({
                namespace,
                name: namespace
            });
        };
        e.handleMoreMenuClick = function(t, r) {
            const a = e.enabledItemActions.find((e)=>e.key === r);
            if (a && a.onClick) {
                a.onClick();
            }
        };
        return e;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                this.limitRangeStore.fetchListByK8s(this.params);
                this.workspaceStore.fetchClusters(this.params);
            }
        },
        {
            key: "render",
            value: function() {
                const detail_1 = module14.toJS(this.store.detail);
                const detail = module26(this.limitRangeStore, "list.data[0]");
                return <div><Module793 icon="cdn" title={t("BASIC_INFORMATION")} description={t("PROJECT_BASIC_INFO_DESC")} module="project_base_info" tips={this.tips}/><Module4959 detail={detail_1} workspace={this.params.workspace} actions={this.enabledItemActions} onMenuClick={this.handleMoreMenuClick}/><Module4961 detail={detail}/><Module1218 annotations={detail_1.annotations} hiddenKeys={globals.config.preservedAnnotations}/></div>;
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
            key: "tips",
            get: function() {
                return [
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
                    project: this.params.namespace,
                    fedproject: true,
                    cluster: this.params.cluster
                });
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                const detail = this.store.detail;
                const a = module14.toJS(this.limitRangeStore.list.data);
                const clusters = module14.toJS(this.props.projectStore.detail.clusters).map((e)=>e.name);
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
                        key: "add",
                        icon: "add",
                        text: t("ADD_CLUSTER"),
                        action: "edit",
                        onClick: function() {
                            return _this.trigger("federated.project.add.cluster", {
                                detail,
                                store: _this.store,
                                clusters: _this.workspaceStore.clusters.data,
                                success: _this.getData
                            });
                        }
                    },
                    {
                        key: "edit-default-resource",
                        icon: "pen",
                        action: "edit",
                        text: t("EDIT_DEFAULT_CONTAINER_QUOTAS"),
                        onClick: function() {
                            return _this.trigger("project.default.resource", {
                                ..._this.props.match.params,
                                store: _this.limitRangeStore,
                                detail: module26(a, 0, {}),
                                isFederated: true,
                                projectDetail: detail,
                                clusters,
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
                            return _this.trigger("federated.project.delete", {
                                detail,
                                success: function() {
                                    return _this.props.rootStore.routing.push(`/workspaces/${_this.params.workspace}/federatedprojects`);
                                }
                            });
                        }
                    }
                ];
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
                return this.itemActions.filter((t)=>!t.action || _this.enabledActions.includes(t.action));
            }
        }
    ]);
    return a;
})(Component)) || o) || o) || o;
export default C;
