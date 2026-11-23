import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-84.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-62.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import "./module-44.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject } from "./module-239.js";
import module14 from "./module-14.js";
import Module789 from "./module-789.js";
import Module796 from "./module-796.js";
import Module793 from "./module-793.js";
import Module797 from "./module-797.js";
import { ListPage, withProjectList } from "./module-794.js";
import { getDisplayName, getHostClusterName, getLocalTime } from "./module-52.js";
import { ICON_TYPES } from "./module-72.js";
import module437 from "./module-437.js";
import module918 from "./module-918.js";
import module834 from "./module-834.js";
let c;
const T = inject("projectStore")(c = withProjectList({
    store: new module437(new module918),
    module: "ingresses",
    name: "ROUTE"
})(c = ((Component_1)=>{
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
        e.gatewayStore = new module834;
        e.getColumns = function() {
            const e_props = e.props;
            const { module, getSortOrder } = e_props;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    render: function(t, r) {
                        return <Module789 icon={ICON_TYPES[module]} iconSize={40} title={getDisplayName(r)} desc={r.description || "-"} to={r.deletionTime ? null : `${e.props.match.url}/${t}`} isMultiCluster/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    isHideable: true,
                    width: "22%",
                    render: function(e) {
                        return <Module796 type={e} name={t(e.toUpperCase())} flicker/>;
                    }
                },
                {
                    title: t("APP"),
                    dataIndex: "app",
                    isHideable: true,
                    width: "22%"
                },
                {
                    title: t("CREATION_TIME_TCAP"),
                    dataIndex: "createTime",
                    isHideable: true,
                    width: 150,
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        e.showCreate = function() {
            const e_props = e.props;
            const { match, module, projectStore } = e_props;
            return e.props.trigger("router.create", {
                module,
                isFederated: true,
                projectDetail: projectStore.detail,
                namespace: match.params.namespace,
                cluster: e.cluster,
                gatewayStore: e.gatewayStore
            });
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps } = props;
                return <ListPage {...this.props} isFederated><Module793 {...bannerProps} tips={this.tips}/><Module797 {...tableProps} itemActions={this.itemActions} columns={this.getColumns()} onCreate={this.showCreate} searchType="name"/></ListPage>;
            }
        },
        {
            key: "tips",
            get: function() {
                return [
                    {
                        title: t("PREREQUESTS_FOR_USE_ROUTE_Q"),
                        description: t("PREREQUESTS_FOR_USE_ROUTE_A")
                    },
                    {
                        title: t("ACCESS_TYPES_OF_ROUTE_Q"),
                        description: t("ACCESS_TYPES_OF_ROUTE_A")
                    }
                ];
            }
        },
        {
            key: "project",
            get: function() {
                return this.props.projectStore;
            }
        },
        {
            key: "clusters",
            get: function() {
                return module14.toJS(this.project.detail.clusters).map((e)=>e.name);
            }
        },
        {
            key: "cluster",
            get: function() {
                const e = getHostClusterName();
                if (this.clusters.includes(e)) {
                    return e;
                }
                return this.clusters[0];
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                const props = this.props;
                const { trigger, name } = props;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT_INFORMATION"),
                        action: "edit",
                        onClick: function(e) {
                            trigger("resource.baseinfo.edit", {
                                detail: e
                            });
                        }
                    },
                    {
                        key: "editYaml",
                        icon: "pen",
                        text: t("EDIT_YAML"),
                        action: "edit",
                        onClick: function(e) {
                            return trigger("resource.yaml.edit", {
                                detail: e
                            });
                        }
                    },
                    {
                        key: "editRules",
                        icon: "firewall",
                        text: t("EDIT_ROUTING_RULES"),
                        action: "edit",
                        onClick: async (t)=>{
                            let r;
                            r = await _this.props.store.fetchDetail(t);
                            trigger("fedproject.router.rules.edit", {
                                isFederated: true,
                                detail: r,
                                projectDetail: _this.props.projectStore.detail
                            });
                        }
                    },
                    {
                        key: "editAnnotations",
                        icon: "firewall",
                        text: t("EDIT_ANNOTATIONS"),
                        action: "edit",
                        onClick: async (t)=>{
                            let r;
                            r = await _this.props.store.fetchDetail(t);
                            trigger("router.annotations.edit", {
                                detail: r
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(e) {
                            return trigger("resource.delete", {
                                type: name,
                                detail: e
                            });
                        }
                    }
                ];
            }
        }
    ]);
    return a;
})(Component)) || c) || c;
export default T;
