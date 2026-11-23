import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
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
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import "unpacked/module-31.js";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import { trigger } from "utils/action";
import Module793 from "unpacked/module-793.js";
import Module1133 from "unpacked/module-1133.js";
import module186 from "unpacked/module-186.js";
import module834 from "stores/gateway";
import module14 from "unpacked/module-14.js";
import module63 from "unpacked/module-63.js";
import module26 from "unpacked/module-26.js";
import module4931 from "unpacked/module-4931.js";
let s;
let l;
let i;
let u;
const x = inject("rootStore")(s = observer(s = trigger((l = ((Component_1)=>{
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
    function r(...s) {
        let e;
        module36(this, r);
        e = a.call(this, ...s);
        e.store = new module834;
        module65(e, "gatewayList", i, module88(e));
        module65(e, "isLoading", u, module88(e));
        e.getProjectGateway = function() {
            const t = {
                ...e.props.match.params
            };
            return e.store.getGatewayByProject({
                ...t,
                cluster: e.cluster,
                workspace: e.workspace,
                includeUpper: true
            });
        };
        e.getInitGateway = async function t() {
            let a;
            e.isLoading = true;
            a = await e.getProjectGateway();
            e.gatewayList = a;
            e.isLoading = false;
        };
        e.renderClusterGatewayTitle = function() {
            return <div className={module4931.title}><span> {t("CLUSTER_GATEWAY")}</span><module186.Tooltip content={t("ENT_CLUSTER_GATEWAY_GUIDE_DESC")} placement="top"><module186.Icon name="question" size={20}/></module186.Tooltip></div>;
        };
        e.renderProjectTitle = function() {
            return <div className={module4931.title}>{t("PROJECT_GATEWAY")}</div>;
        };
        e.renderWorkspaceTitle = function() {
            if (module63(e.gatewayList[0])) {
                return <div className={module4931.title}><span> {t("WORKSPACE_GATEWAY")}</span><module186.Tooltip content={t("WORKSPACE_GATEWAY_GUIDE_DESC")} placement="top"><module186.Icon name="question" size={20}/></module186.Tooltip></div>;
            }
            return <div className={module4931.title}>{t("WORKSPACE_GATEWAY")}</div>;
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
        e.renderOperations = function({ url, disabled }) {
            return <module186.Button disabled={disabled} onClick={function() {
                e.props.rootStore.routing.push(url);
            }}>{t("VIEW_DETAILS")}</module186.Button>;
        };
        e.renderGatewayCard = function() {
            const t = module14.toJS(e.gatewayList);
            if (module63(t)) {
                return <Module1133 key="empty" type="project" detail={null} actions={e.enabledActions} manageDisable={false} {...e.props} store={e.store} getData={e.getInitGateway} title={e.renderGatewayCardTitle("project")} prefix={e.prefix} gatewayList={[]}/>;
            }
            return t.map((detail, key, r)=>{
                const t_gatewayType = detail.gatewayType;
                return <Module1133 key={key} type={t_gatewayType} detail={detail} actions={e.enabledActions} manageDisable={t_gatewayType !== "project"} {...e.props} store={e.store} getData={e.getInitGateway} title={e.renderGatewayCardTitle(t_gatewayType)} prefix={t_gatewayType === "cluster" ? null : e.prefix} gatewayList={module14.toJS(r)}/>;
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                if (this.isClusterInstallGatway) {
                    this.getInitGateway();
                }
            }
        },
        {
            key: "render",
            value: function() {
                return <><Module793 icon="loadbalancer" title={t("GATEWAY_SETTINGS")} description={t("PROJECT_GATEWAY_DESC")} tabs={this.tabs}/><module186.Loading spinning={this.isLoading}><>{this.renderGatewayCard()}</></module186.Loading></>;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "prefix",
            get: function() {
                return this.props.match.url;
            }
        },
        {
            key: "namespace",
            get: function() {
                return this.props.match.params.namespace;
            }
        },
        {
            key: "workspace",
            get: function() {
                return this.props.match.params.workspace;
            }
        },
        {
            key: "enabledActions",
            get: function() {
                return globals.app.getActions({
                    module: "ks-project-gateway",
                    project: this.namespace,
                    cluster: this.cluster,
                    workspace: this.workspace
                });
            }
        },
        {
            key: "isClusterInstallGatway",
            get: function() {
                const cluster = this.props.match.params.cluster;
                return module26(globals, `ksConfig.enabledExtensionModulesStatus.gateway.clusterSchedulingStatuses.${cluster}`, false);
            }
        }
    ]);
    return r;
})(Component), i = module49(l.prototype, "gatewayList", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
}), u = module49(l.prototype, "isLoading", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
}), s = l)) || s) || s) || s;
export default x;
