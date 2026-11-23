import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-31.js";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module74 from "unpacked/module-74.js";
import module241 from "unpacked/module-241.js";
import module63 from "unpacked/module-63.js";
import Module788 from "components/Base/Modal";
import Module826 from "components/Modals/Create";
import module1323 from "components/Forms/Workload/ClusterDiffSettings";
import module318 from "stores/workload/index";
import module1325 from "configs/steps/services";
import { withProps } from "utils/index";
import module435 from "utils/form.templates";
import module2606 from "unpacked/module-2606.js";
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
        t.handleTypeSelect = function(e) {
            t.setState({
                type: e.currentTarget.dataset.value
            });
        };
        t.handleWorkloadModuleChange = function(workloadModule) {
            t.setState({
                workloadModule
            });
        };
        t.workloadStore = new module318;
        t.state = {
            type: "",
            workloadModule: "deployments",
            groups: [
                {
                    name: "SELECT_SERVICE_TYPE",
                    description: "APP_SELECT_SERVICE_TYPE_DESC",
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
                    ]
                }
            ]
        };
        return t;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (this.props.visible !== e.visible) {
                    if (this.props.visible) {
                        const t = this.props.detail || {};
                        let a = "";
                        let workloadModule = "deployments";
                        if (t.StatefulSet) {
                            a = "statefulservice";
                            workloadModule = "statefulsets";
                        } else if (t.Deployment) {
                            a = "statelessservice";
                        }
                        this.setState({
                            type: a,
                            workloadModule
                        });
                    } else {
                        this.setState({
                            type: "",
                            workloadModule: "deployments"
                        });
                    }
                }
            }
        },
        {
            key: "renderHeader",
            value: function() {
                return <div className={module2606.header}><div className="h4 margin-b12">{t("CREATE_SERVICE")}</div><p>{t.html("APP_CREATE_SERVICE_DESC")}</p><img src="/assets/create-service.svg" alt=""/></div>;
            }
        },
        {
            key: "renderGroups",
            value: function() {
                const _this = this;
                return <div className={module2606.groups}>{this.state.groups.map((a)=><div key={a.name} className={module2606.group}><div className={module2606.title}><div>{t(a.name)}</div><p>{t(a.description)}</p></div><ul>{a.options && a.options.map((r)=><li key={r.value || r} data-value={r.value || r} data-type={a.type} onClick={_this.handleTypeSelect}><div><module186.Icon name={r.icon} size={48}/></div><div>{t(r.name || r)}</div></li>)}</ul></div>)}</div>;
            }
        },
        {
            key: "renderSubModal",
            value: function(e) {
                let a;
                const props = this.props;
                const { visible, onOk, onCancel, cluster, namespace, detail, isFederated, projectDetail, isSubmitting, components } = props;
                switch(e){
                    case "statelessservice":
                        var D = module63(detail) ? {
                            Deployment: module435.deployments({
                                namespace
                            }),
                            Service: module435.services({
                                namespace
                            })
                        } : module241(detail, [
                            "Deployment",
                            "Service"
                        ]);
                        const k = module61(module1325[e]);
                        k[0] = {
                            ...k[0],
                            component: withProps(k[0].component, {
                                noApp: true,
                                components
                            })
                        };
                        if (module63(detail) && isFederated) {
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
                        if (isFederated) {
                            k.push({
                                title: "CLUSTER_DIFF",
                                icon: "blue-green-deployment",
                                component: withProps(module1323, {
                                    withService: true
                                })
                            });
                        }
                        const T = module63(detail) ? {
                            name: t("STATELESS_SERVICE")
                        } : {
                            title: t("EDIT_TITLE", {
                                title: t("STATELESS_SERVICE")
                            })
                        };
                        a = <Module826 width={960} module="deployments" store={this.workloadStore} {...T} description={t("STATELESS_SERVICE_DESC")} visible={visible} cluster={cluster} namespace={namespace} isFederated={isFederated} projectDetail={projectDetail} steps={k} formTemplate={D} isSubmitting={isSubmitting} onOk={onOk} onCancel={onCancel} maskClosable={false} okBtnText={module63(detail) ? t("CREATE") : t("OK")}/>;
                        break;
                    case "statefulservice":
                        var R = module63(detail) ? {
                            StatefulSet: module435.statefulsets({
                                namespace
                            }),
                            Service: module435.services({
                                namespace
                            })
                        } : module241(detail, [
                            "StatefulSet",
                            "Service"
                        ]);
                        const I = module61(module1325[e]);
                        I[0] = {
                            ...I[0],
                            component: withProps(I[0].component, {
                                noApp: true,
                                components
                            })
                        };
                        if (isFederated && module63(detail)) {
                            Object.keys(R).forEach((e)=>{
                                R[e] = module435.federated({
                                    data: R[e],
                                    clusters: projectDetail.clusters.map((e)=>e.name),
                                    kind: e
                                });
                            });
                        }
                        module74(R, 'Service.metadata.annotations["kubesphere.io/serviceType"]', e);
                        this.workloadStore.setModule("statefulsets");
                        if (isFederated) {
                            I.push({
                                title: "CLUSTER_DIFF",
                                icon: "blue-green-deployment",
                                component: withProps(module1323, {
                                    withService: true
                                })
                            });
                        }
                        const w = module63(detail) ? {
                            name: t("STATEFUL_SERVICE")
                        } : {
                            title: t("EDIT_TITLE", {
                                title: t("STATEFUL_SERVICE")
                            })
                        };
                        a = <Module826 width={960} module="statefulsets" store={this.workloadStore} {...w} description={t("STATEFUL_SERVICE_DESC")} visible={visible} cluster={cluster} namespace={namespace} isFederated={isFederated} projectDetail={projectDetail} steps={I} formTemplate={R} isSubmitting={isSubmitting} onOk={onOk} onCancel={onCancel} okBtnText={module63(detail) ? t("CREATE") : t("OK")}/>;
                }
                return a;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel } = props;
                const type = this.state.type;
                if (type) {
                    return this.renderSubModal(type);
                }
                return <Module788 bodyClassName={module2606.body} width={960} visible={visible} onCancel={onCancel} hideHeader>{this.renderHeader()}{this.renderGroups()}</Module788>;
            }
        }
    ]);
    return r;
})(Component);
export default T;
