import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-98.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import module96 from "utils/babel-helpers/slicedToArray";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import Module790 from "components/Base/Panel";
import Module852 from "components/Base/Switch";
import Module791 from "components/Base/Text";
import Module816 from "components/Clusters/ClusterTitle";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module74 from "unpacked/module-74.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import Module1215 from "unpacked/module-1215.js";
import { Component } from "unpacked/module-553.js";
import module1132 from "stores/monitoring/workspace";
import { getDomTitle, getLocalTime, showNameAndAlias } from "utils/index";
import { trigger } from "utils/action";
import modal from "unpacked/module-4356.js";
import module4357 from "unpacked/module-4357.js";
let o;
const T = inject("rootStore", "workspaceStore")(o = observer(o = trigger(o = ((Component_1)=>{
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
        e.monitorStore = new module1132;
        e.getMetrics = function() {
            const t = module14.toJS(e.monitorStore.statistics.data);
            const r = {};
            Object.entries(t).forEach((e)=>{
                const t = module96(e, 2);
                const a = t[0];
                const n = t[1];
                r[a] = module26(n, "data.result[0].value[1]", 0);
            });
            return r;
        };
        e.fetchMetrics = function() {
            const e_store = e.store;
            const t_isEdge = e_store.isEdge;
            const edgeClusterName = e_store.detail.edgeClusterName;
            const n = t_isEdge ? {
                cluster: edgeClusterName
            } : {};
            e.monitorStore.fetchStatistics(e.workspace, n);
        };
        e.fetchDetail = function() {
            e.store.fetchDetail({
                workspace: e.workspace
            });
        };
        e.showEdit = function() {
            e.trigger("resource.baseinfo.edit", {
                detail: module14.toJS(e.store.detail),
                modal,
                success: e.fetchDetail
            });
        };
        e.handleNetworkChange = function(clusterName) {
            return function() {
                const r = module14.toJS(e.store.detail);
                const a = module14.toJS(e.store.detail._originData);
                const n = module26(a, "overrides", []);
                const r_overrides = r.overrides;
                let l = r_overrides.find((e)=>e.clusterName === clusterName);
                if (!l) {
                    l = {
                        clusterName,
                        clusterOverrides: []
                    };
                    r_overrides.push(l);
                }
                let c = l.clusterOverrides.find((e)=>e.path === "/spec/networkIsolation");
                if (!c) {
                    c = {
                        path: "/spec/networkIsolation"
                    };
                    l.clusterOverrides.push(c);
                }
                c.value = !module26(r, `clusterTemplates[${clusterName}].spec.networkIsolation`);
                const s = n.filter((e)=>e.clusterName !== clusterName);
                e.store.patch(r, [
                    {
                        op: "replace",
                        path: "/metadata/name",
                        value: r.name
                    },
                    {
                        op: "add",
                        path: "/spec/overrides",
                        value: [].concat(module61(s), module61(r_overrides))
                    }
                ]).then(()=>e.fetchDetail());
            };
        };
        e.handleSingleClusterNetworkChange = function() {
            const t = module14.toJS(e.store.detail);
            const r = module26(t._originData, "spec.template.spec", {});
            module74(r, "networkIsolation", !t.networkIsolation);
            e.store.patch(t, [
                {
                    op: "add",
                    path: "/spec/template/spec",
                    value: r
                }
            ]).then(()=>e.fetchDetail());
        };
        e.handleDelete = function() {
            const detail = e.store.detail;
            e.trigger("workspace.delete", {
                type: "WORKSPACE",
                resource: detail.name,
                detail,
                success: function() {
                    return e.props.rootStore.routing.push("/");
                }
            });
        };
        e.getResourceOptions = function() {
            const r = e.getMetrics();
            return [
                {
                    name: r.workspace_namespace_count === "1" ? t("PROJECT") : t("PROJECTS"),
                    icon: "project",
                    value: r.workspace_namespace_count
                },
                {
                    name: r.workspace_devops_project_count === "1" ? t("DEVOPS_PROJECT_LOW") : t("DEVOPS_PROJECT_LOW_PL"),
                    icon: "strategy-group",
                    value: r.workspace_devops_project_count,
                    hidden: !globals.app.hasKSModule("devops")
                },
                {
                    name: r.workspace_member_count === "1" ? t("WS_MEMBER_SCAP") : t("WS_MEMBER_SCAP_PL"),
                    icon: "human",
                    value: r.workspace_member_count
                }
            ];
        };
        e.manageButtonClick = function(t, r) {
            const a = e.enableManageAction.filter((e)=>e.actionName === r)[0];
            if (a) {
                a.onClick();
            }
        };
        e.renderManageButton = function() {
            const e_enableManageAction = e.enableManageAction;
            const content = <module186.Menu onClick={e.manageButtonClick}>{e_enableManageAction.map((e)=><module186.Menu.MenuItem key={e.actionName}><module186.Icon name={e.icon} type="light"/>{e.text}</module186.Menu.MenuItem>)}</module186.Menu>;
            return e_enableManageAction.length > 0 && <Module1215 className={module4357.manage} content={content}/>;
        };
        return e;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                if (this.canViewWorkspaceProjects) {
                    this.fetchMetrics();
                }
            }
        },
        {
            key: "renderBaseInfo",
            value: function() {
                const detail = this.store.detail;
                const r = this.getResourceOptions();
                return <Module790 title={t("WORKSPACE_INFO")}><div className={module4357.header}><Module791 className={module4357.title} icon="enterprise" title={getDomTitle(showNameAndAlias(detail))} description={getDomTitle(detail.description || t("WORKSPACE"))} ellipsis/><Module791 title={detail.manager} description={t("MANAGER")}/><Module791 title={getLocalTime(detail.createTime).format("YYYY-MM-DD HH:mm:ss")} description={t("CREATION_TIME")}/>{this.renderManageButton()}</div>{this.canViewWorkspaceProjects && <div className={module4357.content}>{r.filter((e)=>!e.hidden).map((e)=><Module791 key={e.name} icon={e.icon} title={e.value} description={t(e.name)}/>)}</div>}</Module790>;
            }
        },
        {
            key: "renderNetwork",
            value: function() {
                const _this = this;
                const detail = this.store.detail;
                if (!globals.app.isMultiCluster) {
                    if (!globals.app.hasKSModule("network")) {
                        return null;
                    }
                    const a = detail.networkIsolation || false;
                    return <Module790 className={module4357.network} title={t("NETWORK_ISOLATION")}><div className={module4357.item}><Module791 icon="firewall" title={t(a ? "ON" : "OFF")} description={t("WS_NETWORK_ISOLATION")}/>{this.enabledActionsNetwork.includes("manage") && <Module852 className={module4357.switch} text={t(a ? "ON" : "OFF")} onChange={this.handleSingleClusterNetworkChange} checked={a}/>}</div></Module790>;
                }
                const n = module14.toJS(this.store.clusters);
                const { data, isLoading } = n;
                return <Module790 className={module4357.network} title={t("NETWORK_ISOLATION")}>{module63(data) && !isLoading && <div className={module4357.empty}>{t("NO_CLUSTER_AVAILABLE")}</div>}{data.map((cluster)=>{
                    const n = module26(detail, `clusterTemplates[${cluster.name}]`) || {};
                    const o = module26(n, "spec.networkIsolation", detail.networkIsolation) || false;
                    return <div className={module4357.item} key={cluster.name}><Module816 cluster={cluster} className={module4357.clusterTitle}/><Module791 icon="firewall" title={t(o ? "ON" : "OFF")} description={t("WS_NETWORK_ISOLATION")}/>{_this.enabledActions.includes("manage") && (module26(cluster, "configz.network") ? <Module852 className={module4357.switch} text={t(o ? "ON" : "OFF")} onChange={_this.handleNetworkChange(cluster.name)} checked={o}/> : <span className={module4357.noModule}>{t("NETWORK_POLICY_UNINSATLLED_DESC")}</span>)}</div>;
                })}</Module790>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div>{this.renderBaseInfo()}{this.renderNetwork()}</div>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.workspaceStore;
            }
        },
        {
            key: "module",
            get: function() {
                return "BaseInfo";
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "workspace",
            get: function() {
                return this.props.match.params.workspace;
            }
        },
        {
            key: "isMultiCluster",
            get: function() {
                return !module63(this.store.detail.clusters);
            }
        },
        {
            key: "tips",
            get: function() {
                return [
                    {
                        title: t("WORKSPACE_BASE_INFO_Q1"),
                        description: t("WORKSPACE_BASE_INFO_A1")
                    }
                ];
            }
        },
        {
            key: "enabledActions",
            get: function() {
                return globals.app.getActions({
                    module: "workspace-settings",
                    workspace: this.workspace
                });
            }
        },
        {
            key: "enabledActionsNetwork",
            get: function() {
                return globals.app.getActions({
                    module: "networkpolicies",
                    workspace: this.workspace
                });
            }
        },
        {
            key: "canViewWorkspaceProjects",
            get: function() {
                return globals.app.hasPermission({
                    module: "projects",
                    action: "view",
                    workspace: this.workspace
                });
            }
        },
        {
            key: "enableManageAction",
            get: function() {
                const enabledActions = this.enabledActions;
                const r = [];
                if (enabledActions.includes("manage")) {
                    r.push({
                        actionName: "resource.baseinfo.edit",
                        onClick: this.showEdit,
                        icon: "pen",
                        text: t("EDIT_INFORMATION")
                    });
                }
                if (enabledActions.includes("manage") && globals.clusterRole !== "member") {
                    r.push({
                        actionName: "workspace.delete",
                        onClick: this.handleDelete,
                        icon: "trash",
                        text: t("DELETE_WORKSPACE")
                    });
                }
                return r;
            }
        }
    ]);
    return a;
})(Component)) || o) || o) || o;
export default T;
