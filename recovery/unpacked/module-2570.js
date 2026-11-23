import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-316.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-64.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module189 from "./module-189.js";
import { Component } from "./module-553.js";
import { mergeLabels, updateFederatedAnnotations } from "./module-52.js";
import module443 from "./module-443.js";
import Module1598 from "./module-1598.js";
import Module2607 from "./module-2607.js";
import module2619 from "./module-2619.js";
const O = ((Component_1)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.serviceStore = new module443;
        e.state = {
            components: module189(e.props.formData, [
                "application",
                "ingress"
            ]) || {},
            editData: {},
            showAdd: false
        };
        e.showAdd = function(t) {
            e.setState({
                showAdd: true,
                editData: e.getEditData(e.state.components[t])
            });
        };
        e.hideAdd = function() {
            e.setState({
                showAdd: false,
                editData: {}
            });
        };
        e.getEditData = function(e = {}) {
            const t = {};
            Object.values(e).forEach((e)=>{
                const a = e.kind.replace("Federated", "");
                t[a] = e;
            });
            return t;
        };
        e.updateComponentKind = function() {
            const application = e.props.formData.application;
            module74(application, `${e.fedPrefix}spec.componentKinds`, [
                {
                    group: "",
                    kind: "Service"
                },
                {
                    group: "apps",
                    kind: "Deployment"
                },
                {
                    group: "apps",
                    kind: "StatefulSet"
                },
                {
                    group: "networking.k8s.io",
                    kind: "Ingress"
                },
                {
                    group: "servicemesh.kubesphere.io",
                    kind: "Strategy"
                },
                {
                    group: "servicemesh.kubesphere.io",
                    kind: "ServicePolicy"
                }
            ]);
        };
        e.handleAdd = function(t) {
            t.workload = t.Deployment || t.StatefulSet;
            t.service = t.Service;
            e.updateAppLabels(t);
            e.updateGovernance(t);
            const a = module26(t, "service.metadata.name");
            const r = module26(e.state.editData, "Service.metadata.name");
            e.setState(function({ components }) {
                if (r && components[r]) {
                    delete components[r];
                }
                return {
                    components: {
                        ...components,
                        ...module31({}, a, t)
                    },
                    editData: {}
                };
            }, function() {
                if (r) {
                    delete e.props.formData[r];
                }
                e.props.formData[a] = t;
                e.updateComponentKind();
                e.hideAdd();
            });
        };
        e.handleDelete = function(t) {
            e.setState(function({ components }) {
                delete components[t];
                return {
                    components: {
                        ...components
                    }
                };
            }, function() {
                delete e.props.formData[t];
                e.updateComponentKind();
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                const formData = this.props.formData;
                if (formData !== e.formData) {
                    this.setState({
                        components: module189(formData, [
                            "application",
                            "ingress"
                        ]) || {}
                    });
                }
            }
        },
        {
            key: "validate",
            value: function(e) {
                if (e) {
                    e();
                }
            }
        },
        {
            key: "updateAppLabels",
            value: function(e) {
                const t = module26(this.props.formData, `application.${this.fedPrefix}spec.selector.matchLabels`, []);
                mergeLabels(e.workload, t);
                mergeLabels(e.service, t);
            }
        },
        {
            key: "updateGovernance",
            value: function(e) {
                const props = this.props;
                const { isGovernance, isFederated } = props;
                module74(e.workload, 'metadata.annotations["servicemesh.kubesphere.io/enabled"]', String(isGovernance));
                module74(e.service, 'metadata.annotations["servicemesh.kubesphere.io/enabled"]', String(isGovernance));
                module74(e.workload, `spec.template.${this.fedPrefix}metadata.annotations["sidecar.istio.io/inject"]`, String(isGovernance));
                if (isFederated) {
                    updateFederatedAnnotations(e.workload);
                    updateFederatedAnnotations(e.service);
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { cluster, namespace, isFederated, projectDetail } = props;
                const state = this.state;
                const { components, showAdd, editData } = state;
                return <div className={module2619.wrapper}><div className={module2619.step}><div>{t("SERVICE_PL")}</div><p>{t("APPLICATION_SERVICE_DESC")}</p></div><div className={module2619.components}><Module2607 data={components} clusters={projectDetail.clusters} onAdd={this.showAdd} onDelete={this.handleDelete}/></div><Module1598 cluster={cluster} namespace={namespace} components={components} detail={editData} store={this.serviceStore} module="services" visible={showAdd} onCancel={this.hideAdd} onOk={this.handleAdd} isFederated={isFederated} projectDetail={projectDetail}/></div>;
            }
        },
        {
            key: "fedPrefix",
            get: function() {
                if (this.props.isFederated) {
                    return "spec.template.";
                }
                return "";
            }
        }
    ]);
    return r;
})(Component);
export default O;
