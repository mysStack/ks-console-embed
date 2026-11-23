import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-187.js";
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
import Module1133 from "unpacked/module-1133.js";
import module186 from "unpacked/module-186.js";
import module834 from "stores/gateway";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import module63 from "unpacked/module-63.js";
import Module790 from "components/Base/Panel";
import module4245 from "unpacked/module-4245.js";
let o;
let c;
let i;
let s;
const w = inject("detailStore", "rootStore")(o = observer((c = ((Component_1)=>{
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
    function r(...o) {
        let e;
        module36(this, r);
        e = a.call(this, ...o);
        e.store = new module834;
        module65(e, "gatewayList", i, module88(e));
        module65(e, "isLoading", s, module88(e));
        e.getProjectGateway = function() {
            const t = {
                ...e.props.match.params
            };
            return e.store.getGatewayByProject({
                ...t,
                cluster: e.cluster
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
            return <div className="title">{t("CLUSTER_GATEWAY")}</div>;
        };
        e.renderProjectTitle = function() {
            return <div className="title">{t("PROJECT_GATEWAY")}</div>;
        };
        e.renderWorkspaceTitle = function() {
            return <div className={module4245.title}>{t("WORKSPACE_GATEWAY")}</div>;
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
            return e.gatewayList.map((detail, a, r)=>{
                const n = a === 0 ? "cluster" : a === 1 ? "workspace" : "project";
                return <Module1133 key={a} type={n} detail={detail} actions={e.enableActions} manageDisable={n !== "project"} {...e.props} store={e.store} getData={e.getInitGateway} title={e.renderGatewayCardTitle(n)} prefix={n === "cluster" ? null : e.prefix} gatewayList={module14.toJS(r)}/>;
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.getInitGateway();
            }
        },
        {
            key: "renderEmpty",
            value: function() {
                return <Module790 className="margin-t12 margin-b12"><div className={module4245.empty}><div className={module4245.icon}><module186.Icon name="loadbalancer" size={40}/></div><div className={module4245.text}><div>{t("GATEWAY_NOT_ENABLED")}</div><p>{t("ENT_ENABLE_GATEWAY_TIP")}</p></div></div></Module790>;
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
    return r;
})(Component), i = module49(c.prototype, "gatewayList", [
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
}), o = c)) || o) || o;
export default w;
