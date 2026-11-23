import "./module-12.js";
import "./module-5.js";
import "./module-187.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
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
import Module1133 from "./module-1133.js";
import module186 from "./module-186.js";
import module834 from "./module-834.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module63 from "./module-63.js";
import Module790 from "./module-790.js";
import module3983 from "./module-3983.js";
let i;
let c;
let l;
let s;
const P = inject("detailStore", "rootStore")(i = observer((c = ((Component_1)=>{
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
    function n(...i) {
        let e;
        module36(this, n);
        e = r.call(this, ...i);
        e.store = new module834;
        module65(e, "gatewayList", l, module88(e));
        module65(e, "isLoading", s, module88(e));
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
            let r;
            e.isLoading = true;
            r = await e.getProjectGateway();
            e.gatewayList = r;
            e.isLoading = false;
        };
        e.renderClusterGatewayTitle = function() {
            return <div className="title">{t("CLUSTER_GATEWAY")}</div>;
        };
        e.renderProjectTitle = function() {
            return <div className="title">{t("PROJECT_GATEWAY")}</div>;
        };
        e.renderWorkspaceTitle = function() {
            return <div className={module3983.title}>{t("WORKSPACE_GATEWAY")}</div>;
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
            if (e.gatewayList.every((e)=>module63(module14.toJS(e)))) {
                return e.renderEmpty();
            }
            return e.gatewayList.map((detail, key, n)=>{
                const t_gatewayType = detail.gatewayType;
                return <Module1133 key={key} type={t_gatewayType} detail={detail} actions={e.enableActions} manageDisable={t_gatewayType !== "project"} {...e.props} store={e.store} getData={e.getInitGateway} title={e.renderGatewayCardTitle(t_gatewayType)} prefix={t_gatewayType === "cluster" ? null : e.prefix} gatewayList={module14.toJS(n)}/>;
            });
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.getInitGateway();
            }
        },
        {
            key: "renderEmpty",
            value: function() {
                return <Module790 className="margin-t12 margin-b12"><div className={module3983.empty}><div className={module3983.icon}><module186.Icon name="loadbalancer" size={40}/></div><div className={module3983.text}><div>{t("GATEWAY_NOT_ENABLED")}</div><p>{t("ENT_ENABLE_GATEWAY_TIP")}</p></div></div></Module790>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div><module186.Loading spinning={this.isLoading}><div>{this.renderGatewayCard()}</div></module186.Loading></div>;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "namespace",
            get: function() {
                return this.props.match.params.namespace;
            }
        },
        {
            key: "prefix",
            get: function() {
                const workspace = this.props.detailStore.detail.workspace;
                return `/${workspace}/clusters/${this.cluster}/projects/${this.namespace}/gateways`;
            }
        },
        {
            key: "enableActions",
            get: function() {
                return globals.app.getActions({
                    module: "project-settings",
                    ...this.props.match.params,
                    project: this.namespace
                });
            }
        }
    ]);
    return n;
})(Component), l = module49(c.prototype, "gatewayList", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
}), s = module49(c.prototype, "isLoading", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
}), i = c)) || i) || i;
export default P;
