import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-86.js";
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
import "./module-31.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module63 from "./module-63.js";
import module240 from "./module-240.js";
import Module1070 from "./module-1070.js";
import Module945 from "./module-945.js";
import module1 from "./module-1.js";
import module834 from "./module-834.js";
import Module4271 from "./module-4271.js";
import Module4275 from "./module-4275.js";
import module4277 from "./module-4277.js";
const A = ((Component_1)=>{
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
        n.gateway = new module834;
        n.fetchData = async function e() {
            let t;
            t = await n.store.getGatewayPods(n.props.match.params);
            n.setState({
                pods: t.length
            });
        };
        n.checkGatewayLatest = async function e() {
            let t;
            t = n.props.match.params.namespace;
            await n.gateway.getGateway({
                cluster: n.cluster,
                namespace: t
            });
        };
        n.handleScale = async (a)=>{
            let r;
            r = n.props.match.params.namespace;
            await n.checkGatewayLatest();
            if (!(n.gateway.detail.resourceVersion !== n.store.detail.resourceVersion)) {
                await n.store.scale({
                    cluster: n.cluster,
                    namespace: r
                }, a);
            } else {
                module240.info({
                    content: t("GATEWAY_UPDATING_TIP")
                });
            }
            n.getGatewayDetail();
            n.fetchData();
        };
        n.state = {
            pods: 0
        };
        return n;
    }
    module37(r, [
        {
            key: "getChildContext",
            value: function() {
                const params = this.props.match.params;
                const { namespace, workspace } = params;
                return {
                    gatewayName: this.detail.name,
                    gatewayNs: workspace && !namespace ? `workspace-${workspace}` : namespace,
                    cluster: this.cluster
                };
            }
        },
        {
            key: "getGatewayDetail",
            value: function() {
                const namespace = this.props.match.params.namespace;
                this.props.detailStore.getGateway({
                    cluster: this.cluster,
                    namespace
                });
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "renderPlacement",
            value: function() {
                const params = this.props.match.params;
                const { name, namespace } = params;
                if (this.store.detail.isFedManaged) {
                    return <Module945 module={this.store.module} name={name} namespace={namespace}/>;
                }
                return null;
            }
        },
        {
            key: "renderReplicaInfo",
            value: function() {
                const detail = module14.toJS(this.detail);
                return <Module4271 module={this.module} detail={detail} onScale={this.handleScale}/>;
            }
        },
        {
            key: "renderContainerPorts",
            value: function() {
                const ports = this.detail.ports;
                const isLoading = this.store.gateway.isLoading;
                if (module63(ports)) {
                    return null;
                }
                const ports_1 = ports.map((e)=>{
                    e.containerPort = e.nodePort;
                    return e;
                });
                return <Module1070 ports={ports_1} loading={isLoading}/>;
            }
        },
        {
            key: "renderPods",
            value: function() {
                const params = {
                    ...this.props.match.params,
                    cluster: this.cluster
                };
                return <Module4275 prefix={this.prefix} detail={this.detail} store={this.store} params={params}/>;
            }
        },
        {
            key: "renderContent",
            value: function() {
                return <div>{this.renderPlacement()}{this.renderReplicaInfo()}{this.renderContainerPorts()}{this.renderPods()}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module4277.main}>{this.renderContent()}</div>;
            }
        },
        {
            key: "module",
            get: function() {
                return this.props.detailStore.module;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.detailStore;
            }
        },
        {
            key: "detail",
            get: function() {
                return this.store.gateway.data || {};
            }
        },
        {
            key: "cluster",
            get: function() {
                const cluster = this.props.match.params.cluster;
                if (this.props.location.pathname.indexOf("federatedprojects") > -1) {
                    return localStorage.getItem("federated-cluster");
                }
                return cluster;
            }
        },
        {
            key: "prefix",
            get: function() {
                return `/whizard-telemetry/${this.cluster}`;
            }
        },
        {
            key: "enabledActions",
            get: function() {
                return globals.app.getActions({
                    module: this.module,
                    ...this.props.match.params,
                    project: this.props.match.params.namespace
                });
            }
        },
        {
            key: "volumesTitle",
            get: function() {
                return t("STORAGE_DEVICES");
            }
        }
    ]);
    return r;
})(Component);
A.childContextTypes = {
    gatewayName: module1.string,
    gatewayNs: module1.string,
    cluster: module1.string
};
const P = inject("detailStore")(observer(A));
export default P;
const k = A;
export { k as Component };
