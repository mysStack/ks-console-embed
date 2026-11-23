import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
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
import Module793 from "unpacked/module-793.js";
import module834 from "stores/gateway";
import module14 from "unpacked/module-14.js";
import module186 from "unpacked/module-186.js";
import Module4282 from "unpacked/module-4282.js";
import Module4286 from "unpacked/module-4286.js";
let o;
let c;
let i;
let s;
const k = inject("rootStore", "clusterStore")(o = observer(o = trigger((c = ((Component_1)=>{
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
        e.store = new module834;
        module65(e, "hostGateway", i, module88(e));
        module65(e, "isLoading", s, module88(e));
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
            e.props.rootStore.routing.push(`/whizard-telemetry/${e.cluster}/gateways/${t}`);
        };
        e.renderGatewayCard = function() {
            return e.tabComponent[e.component];
        };
        return e;
    }
    module37(r, [
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
                return <><Module793 icon="loadbalancer" title={t("GATEWAY_SETTINGS")} description={t("ENT_CLUSTER_GATEWAY_DESC")} tabs={this.tabs}/>{this.renderGatewayCard()}</>;
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
                    cluster: <module186.Loading spinning={this.isLoading}><Module4282 type="cluster" {...this.props} prefix={this.prefix} detail={this.hostGateway} store={this.store} getData={this.getData}/></module186.Loading>,
                    workspace: <Module4286 {...this.props} type="workspace" inCluster/>,
                    project: <Module4286 {...this.props} type="project" inCluster/>
                };
            }
        },
        {
            key: "enabledActions",
            get: function() {
                return false;
            }
        }
    ]);
    return r;
})(Component), i = module49(c.prototype, "hostGateway", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
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
}), o = c)) || o) || o) || o;
export default k;
