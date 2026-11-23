import "./module-12.js";
import "./module-187.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-18.js";
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
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module186 from "./module-186.js";
import Module790 from "./module-790.js";
import Module791 from "./module-791.js";
import Module1133 from "./module-1133.js";
import Module816 from "./module-816.js";
import module834 from "./module-834.js";
import module438 from "./module-438.js";
import { trigger } from "./module-792.js";
import { compareVersion } from "./module-52.js";
import module240 from "./module-240.js";
import module4390 from "./module-4390.js";
let o;
let i;
let c;
let s;
const F = inject("rootStore")(o = observer(o = trigger((i = ((Component_1)=>{
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
    function r(e) {
        let n;
        module36(this, r);
        n = a.call(this, e);
        module65(n, "gatewayList", c, module88(n));
        module65(n, "clusterDetail", s, module88(n));
        n.getGateway = function() {
            const e = {
                ...n.props.match.params
            };
            if (n.hasGateway) {
                if (n.props.isWorkspace) {
                    return n.store.getGatewayByWorkspace({
                        ...e,
                        cluster: n.cluster,
                        type: "workspace"
                    });
                }
                return n.store.getGatewayByProject({
                    ...e,
                    cluster: n.cluster,
                    includeUpper: true
                });
            }
            return [];
        };
        n.getInitGateway = async function e() {
            let t;
            t = await n.getGateway();
            n.gatewayList = t;
        };
        n.getInitCluster = async function e() {
            if (!(!globals.app.isMultiCluster || module26(globals, `clusterConfig.${n.cluster}`))) {
                await n.clusterStore.fetchDetail({
                    name: n.cluster
                });
                n.clusterDetail = module14.toJS(n.clusterStore.detail.configz);
                module74(globals, `clusterConfig.${n.cluster}`, n.clusterDetail);
            }
        };
        n.showGatewaySetting = function() {
            if (n.hasGateway) {
                n.trigger("gateways.create", {
                    name: `kubesphere-router-namespace-${n.workspace}`,
                    namespace: n.namespace,
                    workspace: n.workspace,
                    cluster: n.cluster,
                    store: n.store,
                    success: n.getInitGateway
                });
            } else {
                module240.warning({
                    content: t("PLEASE_INSTALL_GATEWAY")
                });
            }
        };
        n.renderClusterGatewayTitle = function() {
            return <div className={module4390.title}><span> {t("CLUSTER_GATEWAY")}</span><module186.Tooltip content={n.props.isWorkspace ? t("CLUSTER_GATEWAY_GUIDE_DESC_WS") : t("ENT_CLUSTER_GATEWAY_GUIDE_DESC")} placement="top"><module186.Icon name="question" size={20}/></module186.Tooltip></div>;
        };
        n.renderProjectTitle = function() {
            return <div className={module4390.title}>{t("PROJECT_GATEWAY")}</div>;
        };
        n.renderWorkspaceTitle = function() {
            if (module63(n.gatewayList[0]) && !n.props.isWorkspace) {
                return <div className={module4390.title}><span> {t("WORKSPACE_GATEWAY")}</span><module186.Tooltip content={t("WORKSPACE_GATEWAY_GUIDE_DESC")} placement="top"><module186.Icon name="question" size={20}/></module186.Tooltip></div>;
            }
            return <div className={module4390.title}>{t("WORKSPACE_GATEWAY")}</div>;
        };
        n.renderGatewayCardTitle = function(e) {
            switch(e){
                case "workspace":
                    return n.renderWorkspaceTitle();
                case "project":
                    return n.renderProjectTitle();
                default:
                    return n.renderClusterGatewayTitle();
            }
        };
        n.renderOperations = function({ url, disabled }) {
            return <module186.Button disabled={disabled} onClick={function() {
                n.props.rootStore.routing.push(url);
            }}>{t("VIEW_DETAILS")}</module186.Button>;
        };
        n.store = new module834;
        n.clusterStore = new module438;
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.getInitGateway();
                this.getInitCluster();
            }
        },
        {
            key: "renderEmpty",
            value: function() {
                const cluster = this.props.cluster;
                const disabled = compareVersion(this.clusterVersion, this.props.isWorkspace ? "v3.4.0" : "v3.2.0") < 0;
                return <Module790><div className={module4390.empty}><div className={module4390.cluster}><Module816 cluster={cluster} theme="light"/></div><Module791 className={module4390.desc} title=<p className={module4390.descTitle}><span>{t("GATEWAY_NOT_ENABLED")}</span></p> description={disabled ? t("CLUSTER_UPGRADE_REQUIRED", {
                    version: "3.4"
                }) : t("ENT_ENABLE_GATEWAY_TIP")}/>{this.canEdit && <module186.Button type="control" onClick={this.showGatewaySetting} disabled={disabled}>{t("ENABLE_GATEWAY")}</module186.Button>}</div></Module790>;
            }
        },
        {
            key: "renderInternetAccess",
            value: function(e) {
                const _this = this;
                const props = this.props;
                const { cluster, isWorkspace } = props;
                return <div className={module4390.container}><div className={module4390.cluster}><Module816 cluster={cluster} theme="light"/></div>{e.map((detail, key, r)=>{
                    const e_gatewayType = detail.gatewayType;
                    return <Module1133 type={e_gatewayType} {..._this.props} bodyClassName={module4390.bodyClass} itemClassName={module4390.itemClass} manageDisable={isWorkspace ? e_gatewayType !== "workspace" : e_gatewayType !== "project"} isFederated getData={_this.getInitGateway} detail={detail} key={key} store={_this.store} title={_this.renderGatewayCardTitle(e_gatewayType)} prefix={e_gatewayType === "cluster" ? null : _this.prefix} gatewayList={module14.toJS(r)}/>;
                })}</div>;
            }
        },
        {
            key: "renderContent",
            value: function() {
                if (this.gatewayList.every((e)=>module63(module14.toJS(e)))) {
                    return this.renderEmpty();
                }
                return this.renderInternetAccess(this.gatewayList);
            }
        },
        {
            key: "render",
            value: function() {
                return <div>{this.renderContent()}</div>;
            }
        },
        {
            key: "canEdit",
            get: function() {
                return this.props.actions.includes("manage");
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.cluster.name;
            }
        },
        {
            key: "workspace",
            get: function() {
                return this.props.match.params.workspace;
            }
        },
        {
            key: "namespace",
            get: function() {
                return this.props.match.params.namespace;
            }
        },
        {
            key: "hasGateway",
            get: function() {
                return module26(globals, `ksConfig.enabledExtensionModulesStatus.gateway.clusterSchedulingStatuses.${this.cluster}`, false);
            }
        },
        {
            key: "prefix",
            get: function() {
                return this.props.match.url;
            }
        },
        {
            key: "clusterVersion",
            get: function() {
                return (globals.app.isMultiCluster ? module26(globals, `clusterConfig.${this.cluster}.ksVersion`) : module26(globals, "ksConfig.ksVersion")) || this.clusterDetail.ksVersion;
            }
        }
    ]);
    return r;
})(Component), c = module49(i.prototype, "gatewayList", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
}), s = module49(i.prototype, "clusterDetail", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
}), o = i)) || o) || o) || o;
export default F;
