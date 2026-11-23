import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import module61 from "./module-61.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import module74 from "./module-74.js";
import Module788 from "./module-788.js";
import Module826 from "./module-826.js";
import module1323 from "./module-1323.js";
import module456 from "./module-456.js";
import module318 from "./module-318.js";
import module437 from "./module-437.js";
import module1325 from "./module-1325.js";
import { withProps } from "./module-52.js";
import module435 from "./module-435.js";
import { getLanguageIcon } from "./module-982.js";
import { B2I_SUPPORTED_TYPES, S2I_SUPPORTED_TYPES } from "./module-72.js";
import module3348 from "./module-3348.js";
const N = ((Component_1)=>{
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
        t.fetchData = async function e() {
            let cluster;
            let r;
            let groups;
            cluster = t.props.cluster;
            r = await t.s2iStore.getS2iSupportLanguage({
                cluster
            });
            groups = t.state.groups.map((e)=>{
                if (e.type === "b2i") {
                    e.options = r.b2i;
                }
                if (e.type === "s2i") {
                    e.options = r.s2i;
                }
                return e;
            });
            t.setState({
                groups
            });
        };
        t.handleTypeSelect = function(e) {
            t.setState({
                type: e.currentTarget.dataset.value,
                s2iType: e.currentTarget.dataset.type
            });
        };
        t.handleWorkloadModuleChange = function(workloadModule) {
            t.setState({
                workloadModule
            });
        };
        t.s2iStore = new module456;
        t.workloadStore = new module318;
        t.showDevOps = false;
        t.state = {
            type: "",
            workloadModule: "deployments",
            groups: [
                {
                    name: "SELECT_SERVICE_TYPE",
                    description: "SELECT_SERVICE_TYPE_DESC",
                    options: [
                        {
                            icon: "backup",
                            name: "STATELESS_SERVICE",
                            value: "statelessservice"
                        },
                        {
                            icon: "stateful-set",
                            name: "STATEFUL_SERVICE",
                            value: "statefulservice"
                        }
                    ].concat(module61(t.props.isFederated ? [] : [
                        {
                            icon: "ip",
                            name: "EXTERNAL_SERVICE",
                            value: "externalservice"
                        }
                    ]))
                }
            ].concat(module61(t.showDevOps ? [
                {
                    name: "SERVICE_FROM_CODE",
                    type: "s2i",
                    description: "SERVICE_FROM_CODE_DESC",
                    options: S2I_SUPPORTED_TYPES
                },
                {
                    name: "SERVICE_FROM_ARTIFACT",
                    type: "b2i",
                    description: "SERVICE_FROM_ARTIFACT_DESC",
                    options: B2I_SUPPORTED_TYPES
                }
            ] : []), module61(t.props.isFederated ? [] : [
                {
                    name: "CUSTOMIZE_SERVICE",
                    description: "CUSTOMIZE_SERVICE_DESC",
                    options: [
                        {
                            icon: "clock",
                            name: "SPECIFY_WORKLOAD",
                            value: "simpleservice"
                        },
                        {
                            icon: "coding",
                            name: "EDIT_YAML",
                            value: "yaml"
                        }
                    ]
                }
            ]))
        };
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                if (this.showDevOps) {
                    this.fetchData();
                }
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                const visible = this.props.visible;
                if (!(this.props.visible || visible === e.visible)) {
                    this.setState({
                        type: "",
                        workloadModule: "deployments"
                    });
                }
            }
        },
        {
            key: "renderHeader",
            value: function() {
                return <div className={module3348.header}><div className="h4 margin-b12">{t("CREATE_SERVICE")}</div><p>{t("CREATE_SERVICE_DESC")}</p><img src="/assets/create-service.svg" alt=""/></div>;
            }
        },
        {
            key: "renderGroups",
            value: function() {
                const _this = this;
                return <div className={module3348.groups}>{this.state.groups.map((a)=><div key={a.name} className={module3348.group}><div className={module3348.title}><div>{t(a.name)}</div><p>{t(a.description)}</p></div><ul>{a.options && a.options.map((r)=><li key={r.value || r} data-value={r.value || r} data-type={a.type} onClick={_this.handleTypeSelect}><div><module186.Icon name={r.icon || getLanguageIcon(r, "radio")} size={48}/></div><div>{t(r.name || r.toUpperCase())}</div></li>)}</ul></div>)}</div>;
            }
        },
        {
            key: "renderSubModal",
            value: function(e, a) {
                let r;
                const props = this.props;
                const { store, visible, onOk, onCancel, cluster, namespace, isFederated, projectDetail, isSubmitting } = props;
                if (a) {
                    const isS2i = a === "s2i";
                    const formTemplate = {
                        S2i: module435.s2ibuilders({
                            namespace,
                            isS2i,
                            languageType: e
                        }),
                        Deployment: module435.deployments({
                            namespace
                        }),
                        Service: module435.services({
                            namespace
                        })
                    };
                    const steps = isS2i ? module1325.s2iservice : module1325.b2iservice;
                    const R = isS2i ? t("LANGUAGE_TYPE_VALUE", {
                        value: t(e.toUpperCase())
                    }) : t("ARTIFACT_TYPE_VALUE", {
                        value: t(e.toUpperCase())
                    });
                    this.workloadStore.setModule("deployments");
                    return <Module826 icon={e} title={isS2i ? t("SERVICE_FROM_CODE") : t("SERVICE_FROM_ARTIFACT")} description={R} width={960} module={this.state.workloadModule} store={this.workloadStore} name={t("STATELESS_SERVICE")} visible={visible} steps={steps} cluster={cluster} namespace={namespace} formTemplate={formTemplate} isSubmitting={isSubmitting} projectDetail={projectDetail} updateModule={this.handleWorkloadModuleChange} onOk={onOk} onCancel={onCancel} noCodeEdit/>;
                }
                switch(e){
                    case "statelessservice":
                        var D = {
                            Deployment: module435.deployments({
                                namespace
                            }),
                            Service: module435.services({
                                namespace
                            })
                        };
                        if (isFederated) {
                            Object.keys(D).forEach((e)=>{
                                D[e] = module435.federated({
                                    data: D[e],
                                    clusters: projectDetail.clusters.map((e)=>e.name),
                                    kind: e
                                });
                            });
                        }
                        module74(D, 'Service.metadata.annotations["kubesphere.io/serviceType"]', e);
                        this.workloadStore.setModule("deployments");
                        let N = this.workloadStore;
                        const k = module61(module1325[e]);
                        if (isFederated) {
                            k.push({
                                title: "CLUSTER_DIFF",
                                icon: "blue-green-deployment",
                                component: withProps(module1323, {
                                    withService: true
                                })
                            });
                            N = new module437(this.workloadStore);
                        }
                        r = <Module826 width={960} module="deployments" store={N} name={t("STATELESS_SERVICE")} visible={visible} cluster={cluster} namespace={namespace} isFederated={isFederated} projectDetail={projectDetail} steps={k} formTemplate={D} isSubmitting={isSubmitting} onOk={onOk} onCancel={onCancel}/>;
                        break;
                    case "statefulservice":
                        var I = {
                            StatefulSet: module435.statefulsets({
                                namespace
                            }),
                            Service: module435.services({
                                namespace
                            })
                        };
                        if (isFederated) {
                            Object.keys(I).forEach((e)=>{
                                I[e] = module435.federated({
                                    data: I[e],
                                    clusters: projectDetail.clusters.map((e)=>e.name),
                                    kind: e
                                });
                            });
                        }
                        module74(I, 'Service.metadata.annotations["kubesphere.io/serviceType"]', e);
                        this.workloadStore.setModule("statefulsets");
                        let P = this.workloadStore;
                        const A = module61(module1325[e]);
                        if (isFederated) {
                            A.push({
                                title: "CLUSTER_DIFF",
                                icon: "blue-green-deployment",
                                component: withProps(module1323, {
                                    withService: true
                                })
                            });
                            P = new module437(this.workloadStore);
                        }
                        r = <Module826 width={960} module="statefulsets" store={P} name={t("STATEFUL_SERVICE")} visible={visible} cluster={cluster} namespace={namespace} isFederated={isFederated} projectDetail={projectDetail} steps={A} formTemplate={I} isSubmitting={isSubmitting} onOk={onOk} onCancel={onCancel}/>;
                        break;
                    case "simpleservice":
                    case "externalservice":
                        var w = {
                            Service: module435.services({
                                namespace
                            })
                        };
                        if (isFederated) {
                            Object.keys(w).forEach((e)=>{
                                w[e] = module435.federated({
                                    data: w[e],
                                    clusters: projectDetail.clusters.map((e)=>e.name),
                                    kind: e
                                });
                            });
                        }
                        const M = e === "externalservice" ? t("CREATE_EXTERNAL_SERVICE") : t("SPECIFY_WORKLOAD_TO_CREATE_SERVICE");
                        const L = e === "externalservice" ? t("CREATE_EXTERNAL_SERVICE_DESC") : t("SPECIFY_WORKLOAD_DESC");
                        if (e === "externalservice") {
                            module74(w, 'Service.metadata.annotations["kubesphere.io/serviceType"]', e);
                        }
                        r = <Module826 width={960} module="services" store={store} title={M} description={L} visible={visible} cluster={cluster} namespace={namespace} isFederated={isFederated} projectDetail={projectDetail} steps={module1325[e]} formTemplate={w} isSubmitting={isSubmitting} onOk={onOk} onCancel={onCancel}/>;
                        break;
                    case "yaml":
                        var j = {
                            Service: module435.services({
                                namespace
                            })
                        };
                        if (isFederated) {
                            Object.keys(j).forEach((e)=>{
                                j[e] = module435.federated({
                                    data: j[e],
                                    clusters: projectDetail.clusters.map((e)=>e.name),
                                    kind: e
                                });
                            });
                        }
                        const x = t("EDIT_YAML_TO_CREATE_SERVICE");
                        r = <Module826 width={960} module="services" store={store} title={x} visible={visible} cluster={cluster} namespace={namespace} isFederated={isFederated} projectDetail={projectDetail} formTemplate={j} isSubmitting={isSubmitting} onOk={onOk} onCancel={onCancel} onlyCode/>;
                }
                return r;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel } = props;
                const state = this.state;
                const { type, s2iType } = state;
                if (type) {
                    return this.renderSubModal(type, s2iType);
                }
                return <Module788 bodyClassName={module3348.body} width={960} visible={visible} onCancel={onCancel} hideHeader>{this.renderHeader()}{this.renderGroups()}</Module788>;
            }
        }
    ]);
    return r;
})(Component);
export default N;
