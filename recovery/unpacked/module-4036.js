import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
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
import "./module-41.js";
import "./module-31.js";
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
import Module1220 from "./module-1220.js";
import Module945 from "./module-945.js";
import Module4037 from "./module-4037.js";
import module1 from "./module-1.js";
import module834 from "./module-834.js";
import module318 from "./module-318.js";
import module1001 from "./module-1001.js";
import module4039 from "./module-4039.js";
const R = ((Component_1)=>{
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
            t = await n.store.getGatewayPods({
                ...n.props.match.params,
                cluster: n.cluster,
                namespace: n.namespace
            });
            n.setState({
                pods: t.length
            });
        };
        n.fetchReplica = async function e() {
            let gatewayPods;
            gatewayPods = await n.store.getGatewayPodsList({
                ...n.props.match.params,
                cluster: n.cluster,
                namespace: n.namespace
            });
            n.setState({
                gatewayPods
            });
        };
        n.checkGatewayLatest = async function e() {
            let t;
            t = n.props.match.params.workspace;
            await n.gateway.getGateway({
                type: n.type,
                cluster: n.cluster,
                namespace: n.namespace,
                workspace: t
            });
        };
        n.handleScale = async (a)=>{
            let r;
            let u;
            let o;
            r = n.props.match.params;
            u = r.workspace;
            o = r.gatewayName;
            await n.checkGatewayLatest();
            if (!(n.gateway.detail.resourceVersion !== n.store.detail.resourceVersion)) {
                await n.store.scale({
                    cluster: n.cluster,
                    workspace: u,
                    namespace: n.namespace,
                    name: o
                }, a);
            } else {
                module240.info({
                    content: t("GATEWAY_UPDATING_TIP")
                });
            }
            n.getGatewayDetail();
            n.fetchData();
            n.fetchReplica();
        };
        n.state = {
            pods: 0,
            gatewayPods: []
        };
        n.workloadStore = new module318("deployments");
        n.configMapStore = new module1001;
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
                const workspace = this.props.match.params.workspace;
                this.props.detailStore.getGateway({
                    type: this.type,
                    cluster: this.cluster,
                    namespace: this.namespace,
                    workspace
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
                const data = this.store.podList.data;
                const t = module14.toJS(this.detail);
                const pods = module14.toJS(data);
                return <Module1220 module={this.module} detail={module63(pods) ? t : {
                    ...t,
                    pods
                }} onScale={this.handleScale} enableScale={this.enableScaleReplica}/>;
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
                return <Module4037 prefix={this.prefix} detail={this.detail} store={this.store} params={params} getReplica={this.fetchReplica}/>;
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
                return <div className={module4039.main}>{this.renderContent()}</div>;
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
            key: "isWorkspaceGateway",
            get: function() {
                const params = this.props.match.params;
                const { workspace, namespace } = params;
                return workspace && !namespace;
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
                if (this.props.location.pathname.indexOf("federatedprojects") > -1 || this.isWorkspaceGateway) {
                    return localStorage.getItem("federated-cluster");
                }
                return cluster;
            }
        },
        {
            key: "prefix",
            get: function() {
                return `/clusters/${this.cluster}`;
            }
        },
        {
            key: "type",
            get: function() {
                const params = this.props.match.params;
                const { namespace, workspace } = params;
                if (this.cluster && workspace && !namespace) {
                    return "workspace";
                }
                if (workspace && namespace) {
                    return "project";
                }
                return "cluster";
            }
        },
        {
            key: "namespace",
            get: function() {
                const namespace = this.props.match.params.namespace;
                if (this.type === "cluster") {
                    return "";
                }
                return namespace;
            }
        },
        {
            key: "actionModule",
            get: function() {
                const params = this.props.match.params;
                const { namespace, workspace } = params;
                if (namespace && workspace && this.cluster) {
                    return "ks-project-gateway";
                }
                if (workspace && !namespace) {
                    return "ks-workspace-gateway";
                }
                return "cluster-settings";
            }
        },
        {
            key: "enabledActions",
            get: function() {
                return globals.app.getActions({
                    module: this.actionModule,
                    ...this.props.match.params,
                    project: this.props.match.params.namespace,
                    cluster: this.cluster
                });
            }
        },
        {
            key: "volumesTitle",
            get: function() {
                return t("STORAGE_DEVICES");
            }
        },
        {
            key: "enableScaleReplica",
            get: function() {
                return this.enabledActions.includes("edit") && !this.detail.isFedManaged;
            }
        }
    ]);
    return r;
})(Component);
R.childContextTypes = {
    gatewayName: module1.string,
    gatewayNs: module1.string,
    cluster: module1.string
};
const I = inject("detailStore")(observer(R));
export default I;
const w = R;
export { w as Component };
