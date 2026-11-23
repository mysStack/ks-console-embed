import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import module63 from "unpacked/module-63.js";
import module450 from "unpacked/module-450.js";
import module862 from "unpacked/module-862.js";
import module844 from "unpacked/module-844.js";
import module469 from "stores/workload/hpa";
import Module851 from "unpacked/module-851.js";
import Module1070 from "unpacked/module-1070.js";
import Module1811 from "pages/projects/components/Cards/HPA";
import Module1220 from "unpacked/module-1220.js";
import Module1814 from "pages/projects/components/Cards/S2iBuilder";
import Module945 from "pages/projects/components/Cards/Placement";
import module4200 from "unpacked/module-4200.js";
const T = ((Component_1)=>{
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
        t.fetchData = function() {
            const detail = t.store.detail;
            const { cluster, namespace, name } = detail;
            if (t.module === "deployments") {
                const u = t.store.detail.annotations;
                const l = {
                    cluster,
                    namespace,
                    name: (u === undefined ? {} : u)["kubesphere.io/relatedHPA"] || name
                };
                t.hpaStore.checkName(l).then((e)=>{
                    if (e.exist) {
                        t.hpaStore.fetchDetail(l);
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
                t.hpaStore.reset();
            });
        };
        t.hpaStore = e.hpaStore || new module469;
        t.state = {};
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
                    return <Module945 module={this.store.module} name={name} namespace={namespace}/>;
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
                return <Module1814 builderNames={module14.toJS(detail.builderNames)} cluster={cluster} namespace={namespace} className={module4200.deployment_codeResource}/>;
            }
        },
        {
            key: "renderReplicaInfo",
            value: function() {
                const detail = module14.toJS(this.store.detail);
                return <Module1220 module={this.module} detail={detail} onScale={this.handleScale} enableScale={this.enableScaleReplica}/>;
            }
        },
        {
            key: "renderHpaConfig",
            value: function() {
                const detail = module14.toJS(this.hpaStore.detail);
                if (detail.name) {
                    return <Module1811 store={this.hpaStore} detail={detail} loading={this.hpaStore.isLoading} onDeleted={this.handleDeleteHpa} enableCancaleHPA={this.enableCancaleHPA}/>;
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
                return <Module1070 ports={ports} loading={isLoading}/>;
            }
        },
        {
            key: "renderPods",
            value: function() {
                return <Module851 prefix={this.prefix} detail={this.store.detail}/>;
            }
        },
        {
            key: "renderContent",
            value: function() {
                return <div>{this.renderPlacement()}{this.renderReplicaInfo()}{this.renderHpaConfig()}{this.renderContainerPorts()}{this.renderS2IBuilder()}{this.renderPods()}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module4200.main}>{this.renderContent()}</div>;
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
                const cluster = this.props.match.params.cluster;
                return `/whizard-telemetry/${cluster}`;
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
                return false;
            }
        },
        {
            key: "enableCancaleHPA",
            get: function() {
                return false;
            }
        }
    ]);
    return r;
})(Component);
const C = inject("detailStore", "hpaStore")(observer(T));
export default C;
const A = T;
export { A as Component };
