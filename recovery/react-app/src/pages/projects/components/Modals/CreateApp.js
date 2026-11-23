import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-86.js";
import "unpacked/module-18.js";
import "unpacked/module-192.js";
import "unpacked/module-16.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import "unpacked/module-58.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module896 from "unpacked/module-896.js";
import module194 from "unpacked/module-194.js";
import module63 from "unpacked/module-63.js";
import { Component, createRef } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import module240 from "unpacked/module-240.js";
import Module788 from "components/Base/Modal";
import Module852 from "components/Base/Switch";
import { mergeLabels, updateFederatedAnnotations, withDot } from "utils/index";
import module435 from "utils/form.templates";
import module834 from "stores/gateway";
import Module2566 from "pages/projects/components/Modals/CreateApp/Steps";
import module2568 from "pages/projects/components/Modals/CreateApp/BaseInfo";
import module2570 from "pages/projects/components/Modals/CreateApp/Services";
import module2620 from "pages/projects/components/Modals/CreateApp/Routes";
import Module2625 from "pages/projects/components/Modals/CreateApp/Code";
import module2627 from "unpacked/module-2627.js";
const A = ((Component_1)=>{
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
    })(n);
    function n(e) {
        let a;
        module36(this, n);
        a = r.call(this, e);
        a.handleOk = function() {
            let e;
            const isFederated = a.props.isFederated;
            e = a.state.isCodeMode && module194(module26(module88(a), "codeRef.current.getData")) ? a.getFormDataFromCode(a.codeRef.current.getData()) : a.state.formData;
            if (isFederated) {
                const r = {};
                const n = e;
                const { application, ingress, ...rest } = n;
                r.Application = application;
                r.Ingress = ingress;
                let c = [];
                Object.keys(rest).forEach((e)=>{
                    const t = rest[e];
                    if (t.Deployment) {
                        c = module26(t.Deployment, "spec.overrides").map((e)=>e.clusterName);
                    }
                    r[`${e}-workload`] = t.workload;
                    r[`${e}-service`] = t.service;
                });
                e = r;
                module896(e, function(e) {
                    const t = module26(e, "spec.overrides", []);
                    if (!module63(c)) {
                        t.forEach((e, a)=>{
                            if (!c.includes(e.clusterName)) {
                                t.splice(a, 1);
                            }
                        });
                    }
                    const a = module26(e, "spec.placement.clusters", []);
                    if (!module63(c)) {
                        a.forEach((e, t)=>{
                            if (!c.includes(e.name)) {
                                a.splice(t, 1);
                            }
                        });
                    }
                    return e;
                });
            }
            if (module26(e, "Ingress.spec.template.spec.rules.length", 0) === 0) {
                delete e.Ingress;
            }
            a.props.onOk(e);
        };
        a.handlePrev = function() {
            a.setState(function({ currentStep }) {
                return {
                    currentStep: Math.max(0, currentStep - 1)
                };
            });
        };
        a.handleNext = function() {
            const current = a.formRef.current;
            if (current) {
                current.validate(function() {
                    a.setState(function({ currentStep }) {
                        return {
                            currentStep: Math.min(a.steps.length - 1, currentStep + 1)
                        };
                    });
                });
            }
        };
        a.handleModeChange = function() {
            a.setState(function({ isCodeMode, formData }) {
                if (!isCodeMode && module194(module26(module88(a), "resourcesFormRef.current.hasSubRoute")) && a.resourcesFormRef.current.hasSubRoute()) {
                    return module240.warning(t("SAVE_FORM_TIP"));
                }
                if (isCodeMode && module194(module26(module88(a), "codeRef.current.getData"))) {
                    formData = a.getFormDataFromCode(a.codeRef.current.getData());
                }
                return {
                    isCodeMode: !isCodeMode,
                    formData
                };
            });
        };
        a.handleAppLabelsChange = function(e) {
            const formData = a.state.formData;
            const { application: _application, ingress, ...rest } = formData;
            mergeLabels(ingress, e);
            Object.values(rest).forEach((t)=>{
                mergeLabels(t.service, e);
                mergeLabels(t.workload, e);
            });
        };
        a.handleGovernanceChange = function(e) {
            const isFederated = a.props.isFederated;
            const formData = a.state.formData;
            const { application: _application, ingress: _ingress, ...rest } = formData;
            a.setState({
                isGovernance: e === "true"
            });
            Object.values(rest).forEach((a)=>{
                module74(a.workload, 'metadata.annotations["servicemesh.kubesphere.io/enabled"]', e);
                module74(a.service, 'metadata.annotations["servicemesh.kubesphere.io/enabled"]', e);
                module74(a.workload, 'spec.template.metadata.annotations["sidecar.istio.io/inject"]', e);
                if (isFederated) {
                    updateFederatedAnnotations(a.workload);
                    updateFederatedAnnotations(a.service);
                }
            });
        };
        a.state = {
            currentStep: 0,
            formData: a.federatedWrapper({
                application: module435.applications({
                    namespace: e.namespace
                }),
                ingress: module435.ingresses({
                    namespace: e.namespace
                })
            }),
            isCodeMode: false,
            isGovernance: false
        };
        a.formRef = createRef();
        a.codeRef = createRef();
        a.gatewayStore = new module834;
        return a;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                if (this.props.isFederated) {
                    module74(this.state.formData.application, 'metadata.annotations["servicemesh.kubesphere.io/enabled"]', "false");
                    this.setState({
                        isGovernance: false
                    });
                } else {
                    this.fetchData().then(()=>{
                        const sampleApp = _this.props.sampleApp;
                        if (sampleApp) {
                            _this.fetchSampleData(sampleApp);
                        }
                    });
                }
            }
        },
        {
            key: "federatedWrapper",
            value: function(e) {
                const props = this.props;
                const { isFederated, projectDetail } = props;
                if (isFederated) {
                    Object.keys(e).forEach((t)=>{
                        e[t] = module435.federated({
                            data: e[t],
                            clusters: projectDetail.clusters.map((e)=>e.name),
                            kind: e[t].kind
                        });
                    });
                    const n = module26(e.application, "spec.template.metadata.labels", {});
                    module74(e.application, "metadata.labels", n);
                }
                return e;
            }
        },
        {
            key: "setServicemeshValue",
            value: function(e) {
                const isFederated = this.props.isFederated;
                const isGovernance = this.state.isGovernance;
                const { application, ingress: _ingress, ...rest } = e;
                const l = String(isGovernance);
                module74(application, 'metadata.annotations["servicemesh.kubesphere.io/enabled"]', l);
                Object.values(rest).forEach((e)=>{
                    module74(e.workload, 'metadata.annotations["servicemesh.kubesphere.io/enabled"]', l);
                    module74(e.service, 'metadata.annotations["servicemesh.kubesphere.io/enabled"]', l);
                    module74(e.workload, 'spec.template.metadata.annotations["sidecar.istio.io/inject"]', l);
                    if (isFederated) {
                        updateFederatedAnnotations(e.workload);
                        updateFederatedAnnotations(e.service);
                    }
                });
            }
        },
        {
            key: "fetchSampleData",
            value: function(e) {
                const _this = this;
                const props = this.props;
                const { namespace, store } = props;
                const gateway = this.state.gateway;
                store.fetchSampleData(e).then((e)=>{
                    const formData = _this.getFormDataFromCode(e);
                    module74(formData.ingress, 'metadata.annotations["nginx.ingress.kubernetes.io/upstream-vhost"]', `productpage.${withDot(namespace)}svc.cluster.local`);
                    if (module63(gateway)) {
                        module74(formData.ingress, "spec.rules", []);
                    } else {
                        module74(formData.ingress, "spec.rules[0].host", `productpage.${withDot(namespace)}${withDot(gateway.ingressIp)}nip.io`);
                    }
                    _this.setServicemeshValue(formData);
                    _this.setState({
                        formData
                    });
                });
            }
        },
        {
            key: "getFormDataFromCode",
            value: function(e) {
                const namespace = this.props.namespace;
                const a = {};
                e.forEach((e)=>{
                    module74(e, "metadata.namespace", namespace);
                    if (e.kind.indexOf("Application") !== -1) {
                        a.application = e;
                    } else if (e.kind.indexOf("Service") !== -1) {
                        const r = module26(e, "metadata.labels.app");
                        module74(a, `${r}.service`, e);
                    } else if (e.kind.indexOf("Ingress") !== -1) {
                        a.ingress = e;
                    } else {
                        const n = module26(e, "metadata.labels.app");
                        module74(a, `${n}.workload`, e);
                    }
                });
                return a;
            }
        },
        {
            key: "fetchData",
            value: async function() {
                let t;
                let cluster;
                let namespace;
                let n;
                let u;
                let isGovernance;
                const _this = this;
                t = this.props;
                cluster = t.cluster;
                namespace = t.namespace;
                n = function() {
                    return _this.gatewayStore.getNewGatewayByProject({
                        namespace,
                        cluster
                    });
                };
                u = await n();
                isGovernance = !!this.serviceMeshEnable;
                module74(this.state.formData.application, 'metadata.annotations["servicemesh.kubesphere.io/enabled"]', String(isGovernance));
                this.setState({
                    gateway: module26(u, "[0]"),
                    isGovernance
                });
            }
        },
        {
            key: "renderHeader",
            value: function() {
                const onCancel = this.props.onCancel;
                const state = this.state;
                const { currentStep, isCodeMode } = state;
                return <div className={module2627.header}><div className={module2627.title}><module186.Icon name="close" size={20} clickable onClick={onCancel}/><span/><module186.Icon name="appcenter" size={20}/><span>{t("CREATE_COMPOSED_APP")}</span></div>{!isCodeMode && <div className={module2627.steps}><div/><Module2566 steps={this.steps} current={currentStep}/></div>}<Module852 className={module2627.switch} text={t("EDIT_YAML")} onChange={this.handleModeChange} checked={isCodeMode}/><div className={module2627.headerBottom}/></div>;
            }
        },
        {
            key: "renderForm",
            value: function() {
                const props = this.props;
                const { cluster, namespace, store, isFederated, projectDetail } = props;
                const state = this.state;
                const { formData, gateway, currentStep, isGovernance } = state;
                const f = this.steps[currentStep];
                const Component = f.component;
                const p = {
                    store,
                    cluster,
                    namespace,
                    formData,
                    gateway,
                    isGovernance,
                    isFederated,
                    projectDetail,
                    serviceMeshEnable: this.serviceMeshEnable,
                    onLabelsChange: this.handleAppLabelsChange,
                    onGovernanceChange: this.handleGovernanceChange
                };
                if (f.isForm) {
                    p.formRef = this.formRef;
                } else {
                    p.ref = this.formRef;
                }
                return <div className={module2627.wrapper}><div className={module2627.form}>{<Component {...p}/>}</div></div>;
            }
        },
        {
            key: "renderCode",
            value: function() {
                const formData = this.state.formData;
                return <Module2625 ref={this.codeRef} formTemplate={formData}/>;
            }
        },
        {
            key: "renderFooter",
            value: function() {
                const props = this.props;
                const { onCancel, store } = props;
                const state = this.state;
                const n_currentStep = state.currentStep;
                if (state.isCodeMode) {
                    return <div className={module2627.footer}><div className={module2627.wrapper}><div className="text-right"><module186.Button onClick={onCancel}>{t("CANCEL")}</module186.Button><module186.Button type="control" onClick={this.handleOk} loading={store.isSubmitting}>{t("CREATE")}</module186.Button></div></div></div>;
                }
                const u = this.steps.length - 1;
                return <div className={module2627.footer}><div className={module2627.wrapper}><div className="text-right"><module186.Button onClick={onCancel}>{t("CANCEL")}</module186.Button>{n_currentStep > 0 && <module186.Button type="control" onClick={this.handlePrev}>{t("PREVIOUS")}</module186.Button>}{n_currentStep < u ? <module186.Button type="control" onClick={this.handleNext}>{t("NEXT")}</module186.Button> : <module186.Button type="control" onClick={this.handleOk} loading={store.isSubmitting}>{t("CREATE")}</module186.Button>}</div></div></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const visible = this.props.visible;
                const isCodeMode = this.state.isCodeMode;
                return <Module788 className={module2627.modal} bodyClassName={module2627.body} visible={visible} hideHeader hideFooter fullScreen>{this.renderHeader()}<div className={module2627.content}>{isCodeMode ? this.renderCode() : this.renderForm()}</div>{this.renderFooter()}</Module788>;
            }
        },
        {
            key: "serviceMeshEnable",
            get: function() {
                return !!this.props.isFederated || globals.app.hasClusterModule(this.props.cluster, "servicemesh");
            }
        },
        {
            key: "steps",
            get: function() {
                return [
                    {
                        title: "BASIC_INFORMATION",
                        component: module2568,
                        required: true,
                        isForm: true
                    },
                    {
                        title: "SERVICE_SETTINGS",
                        component: module2570,
                        required: true
                    },
                    {
                        title: "ROUTE_SETTINGS",
                        component: module2620,
                        required: true
                    }
                ];
            }
        }
    ]);
    return n;
})(Component);
export default A;
A.propTypes = {
    namespace: module1.string,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    sampleApp: module1.string
};
A.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {}
};
