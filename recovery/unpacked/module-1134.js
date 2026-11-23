import "./module-12.js";
import "./module-5.js";
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
import "./module-31.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module63 from "./module-63.js";
import module450 from "./module-450.js";
import module862 from "./module-862.js";
import module844 from "./module-844.js";
import module856 from "./module-856.js";
import { isEdgeWizePage } from "./module-52.js";
import module469 from "./module-469.js";
import module1047 from "./module-1047.js";
import module1090 from "./module-1090.js";
import Module851 from "./module-851.js";
import Module1070 from "./module-1070.js";
import Module1811 from "./module-1811.js";
import Module3843 from "./module-3843.js";
import Module1220 from "./module-1220.js";
import Module1814 from "./module-1814.js";
import Module945 from "./module-945.js";
import module3853 from "./module-3853.js";
const j = ((Component_1)=>{
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
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.fetchReplica = module856(module44(module41.mark(function* e() {
            let a;
            let r;
            a = t.props.match.params;
            r = yield t.store.getReplica(a);
            t.setState({
                podNums: r.podNums,
                availablePodNums: r.availablePodNums
            });
        })), 500);
        t.fetchData = function() {
            const detail = t.store.detail;
            const { cluster, namespace, name } = detail;
            const o = globals.clusterConfig?.[cluster]?.k8sVersion;
            if (t.module === "deployments") {
                const i = t.store.detail.annotations;
                const c = {
                    cluster,
                    namespace,
                    name: (i === undefined ? {} : i)["kubesphere.io/relatedHPA"] || name
                };
                t.props.hpaStore.checkName(c, "", o).then((e)=>{
                    if (e.exist) {
                        t.props.hpaStore.fetchDetail(c, o);
                    }
                });
                t.customScalingStore.checkName({
                    cluster,
                    namespace,
                    name
                }).then((e)=>{
                    if (e.exist) {
                        t.customScalingStore.fetchDetail({
                            cluster,
                            namespace,
                            name
                        });
                    }
                });
            }
        };
        t.handleScale = function(e) {
            const detail = t.store.detail;
            const { cluster, namespace, name } = detail;
            t.store.scale({
                cluster,
                namespace,
                name
            }, e);
        };
        t.handleDeleteHpa = function() {
            t.store.patch(t.store.detail, {
                metadata: {
                    annotations: {
                        "kubesphere.io/relatedHPA": null
                    }
                }
            }).then(()=>{
                t.props.hpaStore.reset();
                t.fetchData();
            });
        };
        t.hpaStore = e.hpaStore || t.isEdgeWize ? new module1090 : new module469;
        t.customScalingStore = e.customScalingStore || new module1047;
        t.state = {
            podNums: e.detailStore.detail.podNums,
            availablePodNums: e.detailStore.detail.availablePodNums
        };
        return t;
    }
    module37(r, [
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
                    return <Module945 isEdgeWize={this.isEdgeWize} module={this.store.module} name={name} namespace={namespace}/>;
                }
                return null;
            }
        },
        {
            key: "renderS2IBuilder",
            value: function() {
                const params = this.props.match.params;
                const { cluster, namespace } = params;
                const detail = this.store.detail;
                if (module63(module14.toJS(detail.builderNames))) {
                    return null;
                }
                return <Module1814 isEdgeWize={this.isEdgeWize} builderNames={module14.toJS(detail.builderNames)} cluster={cluster} namespace={namespace} className={module3853.deployment_codeResource}/>;
            }
        },
        {
            key: "renderReplicaInfo",
            value: function() {
                const e = module14.toJS(this.store.detail);
                const state = this.state;
                const { availablePodNums, podNums } = state;
                const n = module14.toJS(this.customScalingStore.detail);
                return <Module1220 isEdgeWize={this.isEdgeWize} module={this.module} detail={{
                    ...e,
                    availablePodNums,
                    podNums
                }} onScale={this.handleScale} enableScale={this.enableScaleReplica} hideOperation={!!n.name}/>;
            }
        },
        {
            key: "renderHpaConfig",
            value: function() {
                const cluster = this.store.detail.cluster;
                const k8sVersion = globals.clusterConfig?.[cluster]?.k8sVersion;
                const l = module14.toJS(this.props.hpaStore?.detail);
                if (l?.name) {
                    return <Module1811 enableCancelHpa={this.enableCancelHpa} k8sVersion={k8sVersion} isEdgeWize={this.isEdgeWize} store={this.props.hpaStore} detail={l} loading={this.props.hpaStore.isLoading} onDeleted={this.handleDeleteHpa}/>;
                }
                return null;
            }
        },
        {
            key: "renderCustomScalingConfig",
            value: function() {
                const e = module14.toJS(this.customScalingStore.detail);
                const workspace = this.props.match.params.workspace;
                if (e.name) {
                    return <Module3843 store={this.hpaStore} detail={e} loading={this.customScalingStore.isLoading} workspace={workspace}/>;
                }
                return null;
            }
        },
        {
            key: "renderContainerPorts",
            value: function() {
                if (this.props.noPorts) {
                    return null;
                }
                const isLoading = this.store.isLoading;
                let containers = module14.toJS(this.store.detail).containers;
                containers = module844(containers) ? [] : containers;
                const ports = module862(module450(containers.map((e)=>{
                    if (module63(e.ports)) {
                        return [];
                    }
                    return e.ports;
                })), "name");
                if (module63(ports)) {
                    return null;
                }
                return <Module1070 isEdgeWize={this.isEdgeWize} ports={ports} loading={isLoading}/>;
            }
        },
        {
            key: "renderPods",
            value: function() {
                return <Module851 prefix={this.prefix} detail={this.store.detail} getReplica={this.fetchReplica} isEdgeWize={this.isEdgeWize}/>;
            }
        },
        {
            key: "renderContent",
            value: function() {
                return <div>{this.renderPlacement()}{this.renderReplicaInfo()}{this.renderHpaConfig()}{this.renderCustomScalingConfig()}{this.renderContainerPorts()}{this.renderS2IBuilder()}{this.renderPods()}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module3853.main}>{this.renderContent()}</div>;
            }
        },
        {
            key: "isEdgeWize",
            get: function() {
                return isEdgeWizePage();
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
            key: "prefix",
            get: function() {
                const params = this.props.match.params;
                const { workspace, cluster } = params;
                let r = `${workspace ? `/${workspace}` : ""}/clusters/${cluster}`;
                if (this.isEdgeWize) {
                    r = `/v2/edgewize${r}`;
                }
                return r;
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
        },
        {
            key: "enableScaleReplica",
            get: function() {
                return this.enabledActions.includes("edit") && !this.store.detail.isFedManaged;
            }
        },
        {
            key: "enableCancelHpa",
            get: function() {
                return this.enabledActions.includes("edit") && !this.store.detail.isFedManaged;
            }
        }
    ]);
    return r;
})(Component);
const L = inject("detailStore", "hpaStore", "customScalingStore")(observer(j));
export default L;
const x = j;
export { x as Component };
