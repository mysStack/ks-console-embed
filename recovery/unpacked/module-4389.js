import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
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
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import "./module-41.js";
import "./module-44.js";
import "./module-31.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module14 from "./module-14.js";
import { trigger } from "./module-792.js";
import module186 from "./module-186.js";
import "./module-793.js";
import Module1867 from "./module-1867.js";
import Module1806 from "./module-1806.js";
import module834 from "./module-834.js";
import module26 from "./module-26.js";
import module4391 from "./module-4391.js";
let l;
let c;
let s;
let i;
const j = inject("rootStore", "workspaceStore")(l = observer(l = trigger((c = ((Component_1)=>{
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
        module65(e, "gatewayList", s, module88(e));
        module65(e, "isLoading", i, module88(e));
        e.getWorkspaceGateways = function() {
            const t = {
                ...e.props.match.params
            };
            return e.gatewayStore.getGatewayByWorkspace({
                ...t,
                workspace: e.workspace
            });
        };
        e.getInitGateway = async function t() {
            let r;
            e.isLoading = true;
            r = await e.getWorkspaceGateways();
            e.gatewayList = r;
            e.isLoading = false;
        };
        e.renderClusterGatewayTitle = function() {
            return <div className={module4391.title}><span> {t("CLUSTER_GATEWAY")}</span><module186.Tooltip content={t("CLUSTER_GATEWAY_GUIDE_DESC_WS")} placement="top"><module186.Icon name="question" size={20}/></module186.Tooltip></div>;
        };
        e.renderProjectTitle = function() {
            return <div className={module4391.title}>{t("PROJECT_GATEWAY")}</div>;
        };
        e.renderWorkspaceTitle = function() {
            return <div className={module4391.title}>{t("WORKSPACE_GATEWAY")}</div>;
        };
        e.renderGatewayCardTitle = function(t) {
            switch(t){
                case "workspace":
                    return e.renderWorkspaceTitle();
                case "project":
                    return e.renderProjectTitle();
                default:
                    return e.renderClusterGatewayTitle();
            }
        };
        e.handleTabChange = function(t) {
            e.props.rootStore.routing.push(`/workspaces/${e.workspace}/gateways/${t}`);
        };
        return e;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                this.getInitGateway();
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                return <>{this.component === "workspace" ? <div>{this.clusters.map((cluster)=><Module1867 key={cluster.name} cluster={cluster} isWorkspace {..._this.props} actions={_this.enabledActions}/>)}</div> : <Module1806 {...this.props} showClusterSelect type="project"/>}</>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.workspaceStore;
            }
        },
        {
            key: "component",
            get: function() {
                return this.props.match.params.component;
            }
        },
        {
            key: "prefix",
            get: function() {
                return this.props.match.url;
            }
        },
        {
            key: "clusters",
            get: function() {
                return this.store.clusters.data.filter((e)=>module26(globals, `ksConfig.enabledExtensionModulesStatus.gateway.clusterSchedulingStatuses.${e.name}`, false));
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
                return globals.app.isMultiCluster;
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
            key: "tabs",
            get: function() {
                return {
                    value: this.component,
                    onChange: this.handleTabChange,
                    options: [
                        {
                            value: "workspace",
                            label: t("WORKSPACE_GATEWAY_PL")
                        },
                        {
                            value: "project",
                            label: t("PROJECT_GATEWAY_PL")
                        }
                    ]
                };
            }
        }
    ]);
    return a;
})(Component), s = module49(c.prototype, "gatewayList", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
}), i = module49(c.prototype, "isLoading", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
}), l = c)) || l) || l) || l;
export default j;
