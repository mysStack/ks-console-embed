import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
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
import "unpacked/module-31.js";
import "unpacked/module-315.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
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
import "unpacked/module-793.js";
import module834 from "stores/gateway";
import module14 from "unpacked/module-14.js";
import module186 from "unpacked/module-186.js";
import Module1133 from "unpacked/module-1133.js";
import Module1806 from "unpacked/module-1806.js";
let c;
let l;
let s;
let d;
const M = inject("rootStore", "clusterStore")(c = observer(c = trigger((l = ((Component_1)=>{
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
    function n(...a) {
        let e;
        module36(this, n);
        e = r.call(this, ...a);
        e.store = new module834;
        module65(e, "hostGateway", s, module88(e));
        module65(e, "isLoading", d, module88(e));
        e.getData = async function t() {
            let cluster;
            e.isLoading = true;
            cluster = e.props.match.params.cluster;
            e.hostGateway = await e.store.getGateway({
                cluster,
                type: "cluster"
            });
            e.isLoading = false;
        };
        e.handleTabChange = function(t) {
            e.props.rootStore.routing.push(`/clusters/${e.cluster}/gateways/${t}`);
        };
        e.renderGatewayCard = function() {
            return e.tabComponent[e.component];
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.getData();
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (e.match.params.component !== this.component && this.component === "cluster") {
                    this.getData();
                }
            }
        },
        {
            key: "render",
            value: function() {
                return <>{this.renderGatewayCard()}</>;
            }
        },
        {
            key: "component",
            get: function() {
                return this.props.match.params.component;
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
            key: "tabs",
            get: function() {
                return {
                    value: this.component,
                    onChange: this.handleTabChange,
                    options: [
                        {
                            value: "cluster",
                            label: t("CLUSTER_GATEWAY")
                        },
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
        },
        {
            key: "tabComponent",
            get: function() {
                return {
                    cluster: <module186.Loading spinning={this.isLoading}><Module1133 type="cluster" {...this.props} actions={this.enabledActions} prefix={this.prefix} detail={this.hostGateway} store={this.store} getData={this.getData} inCluster/></module186.Loading>,
                    workspace: <Module1806 {...this.props} cluster={this.cluster} type="workspace" inCluster/>,
                    project: <Module1806 {...this.props} cluster={this.cluster} type="project" inCluster/>
                };
            }
        },
        {
            key: "enabledActions",
            get: function() {
                if (this.component === "cluster") {
                    return globals.app.getActions({
                        module: "cluster-settings",
                        cluster: this.cluster
                    });
                }
                if (this.component === "workspace") {
                    return globals.app.getActions({
                        module: "ks-workspace-gateway",
                        workspace: this.workspace
                    });
                }
                return globals.app.getActions({
                    module: "ks-project-gateway",
                    ...this.props.match.params,
                    project: this.namespace
                });
            }
        }
    ]);
    return n;
})(Component), s = module49(l.prototype, "hostGateway", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
}), d = module49(l.prototype, "isLoading", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
}), c = l)) || c) || c) || c;
export default M;
