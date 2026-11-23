import "unpacked/module-15.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-191.js";
import "unpacked/module-42.js";
import "unpacked/module-448.js";
import "unpacked/module-160.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module242 from "unpacked/module-242.js";
import module63 from "unpacked/module-63.js";
import module457 from "unpacked/module-457.js";
import module198 from "unpacked/module-198.js";
import { Component } from "unpacked/module-553.js";
import { MODULE_KIND_MAP } from "utils/constants";
import module186 from "unpacked/module-186.js";
import Module1297 from "components/Forms/Workload/ContainerSettings/ReplicasControl";
import Module1299 from "components/Forms/Workload/ContainerSettings/UpdateStrategy";
import Module2603 from "components/Forms/Service/ContainerSetting/ContainerForm";
const O = ((Component_1)=>{
    module55(a, Component_1);
    var t = ((e)=>{
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
    })(a);
    function a(e) {
        let r;
        module36(this, a);
        r = t.call(this, e);
        r.validator = function(e) {
            r.handleContainer();
            if (e) {
                e();
            }
        };
        r.getReplicas = function() {
            return module26(r.formTemplate, "spec.replicas") || 1;
        };
        r.handleReplicaChange = function(replicas) {
            r.setState({
                replicas
            });
        };
        r.updatePullSecrets = function(e) {
            const t = `${r.prefix}spec.imagePullSecrets`;
            const a = `${r.prefix}metadata.annotations["kubesphere.io/imagepullsecrets"]`;
            const n = module26(e, `${r.prefix}spec.containers`, []);
            const l = module26(r.props.formTemplate, "S2i.spec.config.pushAuthentication.secretRef.name", "");
            const u = {};
            n.forEach((e)=>{
                if (l) {
                    u[e.name] = l;
                }
            });
            module74(e, t, module63(u) ? null : Object.values(u).map((name)=>({
                    name
                })));
            if (!module63(u)) {
                module74(e, a, JSON.stringify(u));
            }
        };
        r.updateService = function(e) {
            const r_props = r.props;
            const { formTemplate, module } = r_props;
            const l = module26(e, `${r.prefix}spec.containers`, []);
            const u = [];
            l.forEach((e)=>{
                if (e.ports) {
                    e.ports.forEach((e)=>{
                        if (e.servicePort) {
                            u.push({
                                name: e.name,
                                protocol: e.protocol,
                                port: e.servicePort,
                                targetPort: e.containerPort
                            });
                        }
                    });
                }
            });
            module74(formTemplate, "Service.spec.ports", u);
            const o = module26(e, "metadata.labels", {});
            const i = module26(e, `${r.prefix}metadata.labels`, {});
            module74(formTemplate, "Service.metadata.labels", o);
            module74(formTemplate, "Service.spec.selector", i);
            if (module === "StatefulSet") {
                module74(formTemplate, "Service.spec.clusterIP", "None");
            } else {
                module242(formTemplate, "Service.spec.clusterIP");
            }
        };
        r.state = {
            showContainer: false,
            selectContainer: {},
            replicas: r.getReplicas()
        };
        e.isEdgeWize;
        r.handleContainer = r.handleContainer.bind(module88(r));
        return r;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                const formRef = this.props.formRef;
                if (this.props.withService) {
                    this.initService(this.formTemplate);
                }
                formRef.current.setCustomValidator(this.validator);
            }
        },
        {
            key: "initService",
            value: function() {
                const e = module26(this.formTemplate, "metadata.name");
                let t = module26(this.props.formTemplate, "Service.metadata.name");
                if (e && !t) {
                    t = `${e}-service`;
                    module74(this.props.formTemplate, "Service.metadata.name", t);
                    module74(this.formTemplate, "spec.serviceName", t);
                }
            }
        },
        {
            key: "handleContainer",
            value: function() {
                const e = module26(this.formTemplate, `${this.prefix}spec.containers[0]`);
                if (module198(e, "resources.limits")) {
                    e.resources.limits = module457(e.resources.limits, module63);
                }
                this.updatePullSecrets(this.formTemplate);
                if (this.props.withService) {
                    this.updateService(this.formTemplate);
                }
            }
        },
        {
            key: "renderContainerForm",
            value: function() {
                const props = this.props;
                const { withService, cluster, module, projectDetail, isEdgeWize } = props;
                return <Module2603 isEdgeWize={isEdgeWize} module={module} cluster={cluster} namespace={this.namespace} data={this.formTemplate} withService={withService} supportGpuSelect={module === "deployments"} projectDetail={projectDetail}/>;
            }
        },
        {
            key: "renderReplicasControl",
            value: function() {
                return <div className="margin-b12"><Module1297 template={this.formTemplate} onChange={this.handleReplicaChange}/></div>;
            }
        },
        {
            key: "renderUpdateStrategy",
            value: function() {
                const props = this.props;
                const { formRef, module } = props;
                const replicas = this.state.replicas;
                return <div className="margin-t12"><Module1299 formRef={formRef} module={module} data={this.formTemplate} replicas={replicas}/></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const formRef = this.props.formRef;
                return <module186.Form data={this.formTemplate} ref={formRef}>{this.renderReplicasControl()}{this.renderContainerForm()}{this.renderUpdateStrategy()}</module186.Form>;
            }
        },
        {
            key: "prefix",
            get: function() {
                return this.props.prefix || "spec.template.";
            }
        },
        {
            key: "namespace",
            get: function() {
                return module26(this.formTemplate, "metadata.namespace");
            }
        },
        {
            key: "formTemplate",
            get: function() {
                const props = this.props;
                const { formTemplate, module } = props;
                return module26(formTemplate, MODULE_KIND_MAP[module], formTemplate);
            }
        }
    ]);
    return a;
})(Component);
export default O;
