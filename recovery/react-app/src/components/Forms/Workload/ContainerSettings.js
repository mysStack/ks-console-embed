import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-187.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-197.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-30.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-48.js";
import "unpacked/module-97.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-22.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-38.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-191.js";
import "unpacked/module-42.js";
import "unpacked/module-448.js";
import "unpacked/module-160.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-24.js";
import "unpacked/module-193.js";
import "unpacked/module-315.js";
import module96 from "utils/babel-helpers/slicedToArray";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module1165 from "unpacked/module-1165.js";
import module447 from "unpacked/module-447.js";
import module26 from "unpacked/module-26.js";
import module198 from "unpacked/module-198.js";
import module63 from "unpacked/module-63.js";
import module159 from "unpacked/module-159.js";
import module1166 from "unpacked/module-1166.js";
import module968 from "unpacked/module-968.js";
import module189 from "unpacked/module-189.js";
import module457 from "unpacked/module-457.js";
import module334 from "unpacked/module-334.js";
import module1167 from "unpacked/module-1167.js";
import module74 from "unpacked/module-74.js";
import module242 from "unpacked/module-242.js";
import { getLeftQuota } from "utils/workload";
import { MODULE_KIND_MAP } from "utils/constants";
import { cancelContainerDot, generateId, isEdgeWizePage, resourceLimitKey } from "utils/index";
import Module1530 from "components/Forms/Workload/ContainerSettings/Affinity";
import module853 from "stores/secret";
import module914 from "stores/workspace.quota";
import module1094 from "unpacked/module-1094.js";
import module934 from "unpacked/module-934.js";
import module970 from "unpacked/module-970.js";
import module1000 from "unpacked/module-1000.js";
import module1531 from "unpacked/module-1531.js";
import module1532 from "unpacked/module-1532.js";
import module437 from "stores/federated";
import module1095 from "unpacked/module-1095.js";
import module886 from "stores/quota";
import module439 from "stores/project";
import Module2246 from "components/Forms/Workload/ContainerSettings/ContainerForm";
import Module2290 from "components/Forms/Workload/ContainerSettings/ClusterReplicasControl";
import Module1542 from "components/Forms/Workload/ContainerSettings/TerminationSeconds";
import Module2298 from "components/Forms/Workload/ContainerSettings/PodSecurityContext";
import Module1297 from "components/Forms/Workload/ContainerSettings/ReplicasControl";
import Module1543 from "components/Forms/Workload/ContainerSettings/ContainerList";
import Module1299 from "components/Forms/Workload/ContainerSettings/UpdateStrategy";
import Module2306 from "components/Forms/Workload/ContainerSettings/Metadata";
import module2307 from "unpacked/module-2307.js";
const Component = module553.Component;
const createRef = module553.createRef;
const le = ((Component_1)=>{
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
        let l;
        module36(this, r);
        l = a.call(this, e);
        l.getReplicas = function() {
            return module26(l.fedFormTemplate, "spec.replicas") || 1;
        };
        l.singleClusterQuota = function(e, namespace, cluster) {
            return new Promise((resolve)=>{
                Promise.all([
                    l.quotaStore.fetch({
                        cluster,
                        namespace
                    }),
                    l.workspaceQuotaStore.fetchDetail({
                        name: e,
                        workspace: e,
                        cluster
                    })
                ]).then((e)=>{
                    const t = module26(e[0], "data.hard");
                    const a = getLeftQuota(e[1], module26(e[0], "data"), true);
                    const { namespace, workspace } = a;
                    resolve({
                        workspaceQuota: workspace,
                        namespaceQuota: {
                            ...namespace,
                            ...module189(t, resourceLimitKey)
                        }
                    });
                });
            });
        };
        l.multiClusterQuota = function(e, t) {
            const a = [];
            const r = {
                "limits.cpu": undefined,
                "limits.memory": undefined
            };
            l.clusters.forEach((r)=>a.push(l.singleClusterQuota(e, t, r)));
            Promise.all(a).then((e)=>{
                const t = e.map((e)=>module26(e, "workspaceQuota", r));
                const a = e.map((e)=>module26(e, "namespaceQuota", r));
                const n = e.map((e)=>module189(module26(e, "namespaceQuota", {}), resourceLimitKey));
                l.setState({
                    leftQuota: {
                        workspace: l.transformQuota(t),
                        namespace: l.transformQuota(a)
                    },
                    availableQuota: {
                        workspace: l.transformQuota(t),
                        namespace: {
                            ...l.transformQuota(a),
                            ...l.transformGpu(n)
                        }
                    }
                });
            });
        };
        l.transformQuota = function(e) {
            return {
                "limits.cpu": l.findCpuOrMemoryMin(e, "limits.cpu"),
                "limits.memory": l.findCpuOrMemoryMin(e, "limits.memory"),
                "requests.cpu": l.findCpuOrMemoryMin(e, "requests.cpu"),
                "requests.memory": l.findCpuOrMemoryMin(e, "requests.memory")
            };
        };
        l.findCpuOrMemoryMin = function(e, t) {
            const a = e.map((e)=>e[t]);
            return module968(a);
        };
        l.transformGpu = function(e) {
            const supportGpuType = globals.config.supportGpuType;
            const a = e.map((e)=>module334(e, function(e, a) {
                    return supportGpuType.some((e)=>module447(a, e));
                }));
            return module1167(a, function(e, t) {
                const a = module26(e, `${Object.keys(t)[0]}`);
                if (a) {
                    if (Number(a) > Number(Object.values(t)[0])) {
                        return {
                            ...e,
                            ...t
                        };
                    }
                    return {
                        ...e
                    };
                }
                return {
                    ...e,
                    ...t
                };
            }, {});
        };
        l.fetchQuota = async function e() {
            let t;
            let a;
            let r;
            let n;
            let u;
            let i;
            let c;
            let workspace;
            let namespace;
            let d;
            a = l.namespace;
            r = l.props;
            n = r.cluster;
            u = r.projectDetail;
            i = r.isFederated;
            if (!(!(t = u ? u.workspace : l.props.workspace) || !a)) {
                if (!i) {
                    c = await l.singleClusterQuota(t, a, n);
                    workspace = c.workspaceQuota;
                    namespace = c.namespaceQuota;
                    d = {
                        workspace,
                        namespace
                    };
                    l.setState({
                        leftQuota: d,
                        availableQuota: d
                    });
                } else {
                    l.multiClusterQuota(t, a);
                }
            }
        };
        l.handleReplicaChange = function(replicas) {
            l.setState({
                replicas
            });
        };
        l.handleClusterUpdate = function() {
            l.updateService();
        };
        l.showContainer = function(e) {
            l.setState({
                showContainer: true,
                selectContainer: e || {}
            });
        };
        l.hideContainer = function() {
            l.setState({
                showContainer: false,
                selectContainer: {}
            });
        };
        l.updateTimeZone = function(e) {
            let t = module26(l.fedFormTemplate, `${l.prefix}spec.volumes`, []);
            if (e.some((e)=>(e.volumeMounts || []).some((e)=>e.mountPath === "/etc/localtime"))) {
                if (t.every((e)=>e.name !== "host-time")) {
                    t.push({
                        hostPath: {
                            path: "/etc/localtime",
                            type: ""
                        },
                        name: "host-time"
                    });
                }
            } else {
                t = t.filter((e)=>!(e.name === "host-time" && e?.hostPath?.path === "/etc/localtime"));
            }
            module74(l.fedFormTemplate, `${l.prefix}spec.volumes`, t);
        };
        l.updatePullSecrets = function() {
            const e = {};
            const t = `${l.prefix}spec.imagePullSecrets`;
            const a = `${l.prefix}metadata.annotations["kubesphere.io/imagepullsecrets"]`;
            const r = module26(l.fedFormTemplate, `${l.prefix}spec.containers`, []);
            const n = module26(l.fedFormTemplate, `${l.prefix}spec.initContainers`, []);
            module1165(r, n).forEach((t)=>{
                if (t.pullSecret) {
                    e[t.name] = t.pullSecret;
                }
                if (t.annotationOfImagePullSecrets) {
                    delete t.annotationOfImagePullSecrets;
                }
            });
            let u = module26(l.fedFormTemplate, t, []);
            const o = module26(l.fedFormTemplate, a, null);
            if (!module63(e)) {
                const i = Object.values(e).map((name)=>({
                        name
                    }));
                u = u.concat(i).reduce((acc, item)=>{
                    if (!acc.find((e)=>e.name === item.name)) {
                        acc.push(item);
                    }
                    return acc;
                }, []);
            }
            let c = JSON.stringify(e);
            if (o !== null) {
                const s = {
                    ...JSON.parse(o),
                    ...e
                };
                c = JSON.stringify(s);
            }
            module74(l.fedFormTemplate, t, u);
            module74(l.fedFormTemplate, a, c);
        };
        l.updateService = function() {
            const l_props = l.props;
            const e_formTemplate = l_props.formTemplate;
            if (l_props.withService) {
                const a = module26(l.fedFormTemplate, `${l.prefix}spec.containers`, []);
                const r = [];
                a.forEach((e)=>{
                    if (e.ports) {
                        e.ports.forEach((e)=>{
                            if (e.servicePort) {
                                r.push({
                                    name: e.name,
                                    protocol: e.protocol,
                                    port: e.servicePort,
                                    targetPort: e.containerPort
                                });
                            }
                        });
                    }
                });
                const n = e_formTemplate.Service;
                const u = l.props.isFederated ? "spec.template." : "";
                module74(n, `${u}spec.ports`, r);
                const o = module26(l.formTemplate, "metadata.labels", {});
                const i = module26(l.fedFormTemplate, `${l.prefix}metadata.labels`, {});
                module74(n, "metadata.labels", o);
                module74(n, `${u}spec.selector`, module189(i, "version"));
                const c = module26(l.formTemplate, "spec.placement");
                if (c) {
                    module74(n, "spec.placement", c);
                } else {
                    module242(n, "spec.placement");
                }
                if (l.module === "statefulsets") {
                    module74(n, `${u}spec.clusterIP`, "None");
                } else {
                    module242(n, `${u}spec.clusterIP`);
                }
            }
        };
        l.handleDelete = function() {
            l.updatePullSecrets();
            l.updateService();
        };
        l.containersValidator = function(e, a, r) {
            if (module63(a)) {
                return r({
                    message: t("CONTAINER_EMPTY_DESC")
                });
            }
            r();
        };
        l.state = {
            showContainer: false,
            selectContainer: {},
            limitRange: {},
            imageRegistries: [],
            replicas: l.getReplicas(),
            leftQuota: {}
        };
        l.module = [
            "apptemplates",
            "apptemplateversions"
        ].includes(e.module) ? "deployments" : e.module ?? "deployments";
        const u = isEdgeWizePage();
        l.limitRangeStore = u ? new module1531 : new module1095;
        l.imageRegistryStore = u ? new module934 : new module853;
        l.quotaStore = u ? new module1094 : new module886;
        l.workspaceQuotaStore = u ? new module1532 : new module914;
        l.projectStore = u ? new module970 : new module439;
        if (e.isFederated) {
            l.limitRangeStore = u ? new module1000({
                module: l.limitRangeStore.module
            }) : new module437({
                module: l.limitRangeStore.module
            });
            l.imageRegistryStore = u ? new module1000({
                module: l.imageRegistryStore.module
            }) : new module437({
                module: l.imageRegistryStore.module
            });
        }
        l.handleContainer = l.handleContainer.bind(module88(l));
        l.containerRef = createRef();
        return l;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const store = this.props.store;
                this.fetchData();
                this.fetchQuota();
                if (this.props.withService) {
                    this.initService(this.formTemplate);
                }
                if (store.renderScheduleTab) {
                    this.props.store.setMetadata(this.formTemplate.metadata);
                }
            }
        },
        {
            key: "componentDidUpdate",
            value: function() {
                const current = this.containerRef.current;
                const t = module26(current, "state.error", null);
                const a = module26(this.props.formTemplate, `${this.prefix}spec.containers`, []);
                if (t && a.length > 0) {
                    current.setState({
                        error: null
                    });
                }
            }
        },
        {
            key: "initService",
            value: function() {
                const e = module26(this.formTemplate, "metadata.name");
                let t = module26(this.props.formTemplate, "Service.metadata.name");
                if (e && !t) {
                    t = `${e.slice(0, 57)}-${generateId(4)}`;
                    if (!/^[a-z]/.test(t)) {
                        t = `s${t}`;
                    }
                    module74(this.props.formTemplate, "Service.metadata.name", t);
                    module74(this.props.formTemplate, 'Service.metadata.annotations["kubesphere.io/alias-name"]', e);
                    module74(this.props.formTemplate, 'Service.metadata.annotations["kubesphere.io/serviceType"]', "statefulservice");
                    module74(this.fedFormTemplate, "spec.serviceName", t);
                }
            }
        },
        {
            key: "fetchData",
            value: function() {
                const _this = this;
                const props = this.props;
                const { cluster, isFederated } = props;
                const n = {
                    cluster,
                    namespace: module26(this.formTemplate, "metadata.namespace")
                };
                Promise.all([
                    this.limitRangeStore.fetchListByK8s(n),
                    isFederated ? this.imageRegistryStore.fetchList({
                        ...n,
                        limit: -1,
                        type: "kubernetes.io/dockerconfigjson"
                    }) : this.imageRegistryStore.fetchListByK8s({
                        ...n,
                        fieldSelector: "type=kubernetes.io/dockerconfigjson"
                    })
                ]).then((t)=>{
                    const a = module96(t, 2);
                    const r = a[0];
                    const imageRegistries = a[1];
                    _this.setState({
                        limitRange: module26(r, "[0].limit"),
                        imageRegistries
                    });
                });
            }
        },
        {
            key: "handleContainer",
            value: function(e = {}) {
                if (module198(e, "resources.limits")) {
                    e.resources.limits = module457(e.resources.limits, module63);
                }
                e.type = e.type || "worker";
                const t = module26(this.fedFormTemplate, `${this.prefix}spec.containers`, []).map((e)=>({
                        ...e,
                        type: "worker"
                    }));
                const a = module26(this.fedFormTemplate, `${this.prefix}spec.initContainers`, []).map((e)=>({
                        ...e,
                        type: "init"
                    }));
                const r = module1165(t, a);
                const selectContainer = this.state.selectContainer;
                const l = r.findIndex((e)=>e.name === selectContainer.name);
                if (l > -1) {
                    r[l] = e;
                } else {
                    r.push(e);
                }
                const u = [];
                const o = [];
                r.forEach((e)=>{
                    if (e.type === "worker") {
                        delete e.type;
                        u.push(e);
                    } else {
                        delete e.type;
                        o.push(e);
                    }
                });
                o.forEach((e)=>{
                    cancelContainerDot(e);
                });
                u.forEach((e)=>{
                    cancelContainerDot(e);
                });
                module74(this.fedFormTemplate, `${this.prefix}spec.containers`, u);
                module74(this.fedFormTemplate, `${this.prefix}spec.initContainers`, o);
                this.updateTimeZone(r);
                this.updatePullSecrets();
                this.updateService();
                this.hideContainer();
            }
        },
        {
            key: "renderContainerForm",
            value: function(e) {
                const props = this.props;
                const { onlyDockerHub, withService, isFederated, cluster, supportGpuSelect, projectDetail } = props;
                const state = this.state;
                const { limitRange, imageRegistries } = state;
                const type = e.image ? "Edit" : "Add";
                const p = {
                    limitRange,
                    onlyDockerHub,
                    imageRegistries
                };
                return <Module2246 type={type} module={this.module} namespace={this.namespace} data={e} projectDetail={projectDetail} onSave={this.handleContainer} onCancel={this.hideContainer} withService={withService} isFederated={isFederated} workspaceQuota={this.workspaceQuota} cluster={cluster} supportGpuSelect={supportGpuSelect} containers={this.containers} isEdit={this.props.isEdit} isEdgeWize={isEdgeWizePage()} {...p}/>;
            }
        },
        {
            key: "renderDeployPlacementTip",
            value: function() {
                return <div className={module2307.tipBox}><div className={module2307.tipTitle}>{t("SPECIFY_REPLICAS")}</div><p>{t("SPECIFY_REPLICAS_DESC")}</p><br/><div className={module2307.tipTitle}>{t("SPECIFY_WEIGHTS")}</div><p>{t("SPECIFY_WEIGHTS_DESC")}</p></div>;
            }
        },
        {
            key: "renderDeployPlace",
            value: function() {
                const projectDetail = this.props.projectDetail;
                return <module186.Form.Item className="margin-b12" label={t("POD_REPLICAS")} tip={this.renderDeployPlacementTip()}><Module2290 module={this.module} template={this.formTemplate} clusters={projectDetail.clusters} onClusterUpdate={this.handleClusterUpdate} omitAlias={12}/></module186.Form.Item>;
            }
        },
        {
            key: "renderDeployMode",
            value: function() {
                const projectDetail = this.props.projectDetail;
                return <div className="margin-b12"><div className={module2307.formTip}><span className={module2307.tipLabel}>{t("REPLICA_SCHEDULING_MODE")}</span><module186.Tooltip placement="right" content={this.renderDeployPlacementTip()}><module186.Icon name="question" size="20"/></module186.Tooltip></div><module186.Form.Item><Module2290 module={this.module} template={this.formTemplate} clusters={projectDetail.clusters} onClusterUpdate={this.handleClusterUpdate} store={this.props.store} omitAlias={12}/></module186.Form.Item></div>;
            }
        },
        {
            key: "renderReplicasControl",
            value: function() {
                if (this.module === "daemonsets") {
                    return null;
                }
                const props = this.props;
                const { isFederated, store, replicasExtraControl, isEdit } = props;
                if (isFederated) {
                    if (store.renderScheduleTab) {
                        return this.renderDeployMode();
                    }
                    return this.renderDeployPlace();
                }
                return <div className="margin-b12"><Module1297 module={this.module} replicas={this.state.replicas} template={this.formTemplate} replicasExtraControl={replicasExtraControl?.({
                    isEdit
                })} onChange={this.handleReplicaChange}/></div>;
            }
        },
        {
            key: "renderContainerList",
            value: function() {
                const props = this.props;
                const { isReadOnlyContainers, isShowAddContainer } = props;
                const specTemplate = module26(this.fedFormTemplate, `${this.prefix}spec`);
                return <module186.Form.Item label={t("CONTAINERS")} rules={[
                    {
                        validator: this.containersValidator
                    }
                ]} ref={this.containerRef}><Module1543 name={`${this.prefix}spec.containers`} onShow={this.showContainer} onDelete={this.handleDelete} specTemplate={specTemplate} leftQuota={this.state.leftQuota} projectDetail={this.props.projectDetail} replicas={this.state.replicas} isEdit={this.props.isEdit} isReadOnlyContainers={isReadOnlyContainers} isShowAddContainer={isShowAddContainer}/></module186.Form.Item>;
            }
        },
        {
            key: "renderUpdateStrategy",
            value: function() {
                return <div className="margin-t12"><Module1299 module={this.module} data={this.fedFormTemplate}/></div>;
            }
        },
        {
            key: "renderPodSecurityContext",
            value: function() {
                return <div className="margin-t12"><Module2298 prefix={`${this.prefix}spec.securityContext`}/></div>;
            }
        },
        {
            key: "renderPodAffinity",
            value: function() {
                const props = this.props;
                const { cluster, namespace } = props;
                return <div className="margin-b12"><Module1530 initial data={this.fedFormTemplate} module={this.module} cluster={cluster} namespace={namespace} checkable/></div>;
            }
        },
        {
            key: "renderTerminationSeconds",
            value: function() {
                return <div className="margin-b12"><module186.Form.Group label={t("POD_GRACE_PERIOD")} desc={t("POD_GRACE_PERIOD_DESC")} keepDataWhenUnCheck checkable><Module1542 prefix={this.prefix}/></module186.Form.Group></div>;
            }
        },
        {
            key: "renderMetadata",
            value: function() {
                return <div className="margin-b12"><module186.Form.Group label={t("ADD_METADATA")} desc={t("POD_ADD_METADATA_DESC")} keepDataWhenUnCheck checkable><Module2306/></module186.Form.Group></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formRef, className } = props;
                const state = this.state;
                const { showContainer, selectContainer } = state;
                const annotationOfImagePullSecrets = JSON.parse(module26(this.fedFormTemplate, 'metadata.annotations["kubesphere.io/imagepullsecrets"]', "{}"));
                if (showContainer) {
                    return this.renderContainerForm({
                        ...selectContainer,
                        annotationOfImagePullSecrets
                    });
                }
                return <module186.Form data={this.fedFormTemplate} ref={formRef} className={className}>{this.renderReplicasControl()}{this.renderContainerList()}{this.renderUpdateStrategy()}{this.renderPodSecurityContext()}{this.renderPodAffinity()}{this.renderTerminationSeconds()}{this.renderMetadata()}</module186.Form>;
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
                const formTemplate = this.props.formTemplate;
                const t = module26(formTemplate, MODULE_KIND_MAP[this.module], formTemplate);
                t.totalReplicas = "";
                return t;
            }
        },
        {
            key: "fedFormTemplate",
            get: function() {
                if (this.props.isFederated) {
                    return module26(this.formTemplate, "spec.template");
                }
                return this.formTemplate;
            }
        },
        {
            key: "workspaceQuota",
            get: function() {
                const e = module26(this.state.availableQuota, "namespace", {});
                const t = module26(this.state.availableQuota, "workspace", {});
                return module1166(e, t, function(e, t) {
                    if (e || t) {
                        if (module159(e)) {
                            return t;
                        }
                        if (e < t) {
                            return e;
                        }
                        return t;
                    }
                });
            }
        },
        {
            key: "clusters",
            get: function() {
                return this.props.projectDetail.clusters.map((e)=>e.name);
            }
        },
        {
            key: "containers",
            get: function() {
                const e = module26(this.fedFormTemplate, `${this.prefix}spec.containers`, []);
                const t = module26(this.fedFormTemplate, `${this.prefix}spec.initContainers`, []);
                return module1165(e, t);
            }
        }
    ]);
    return r;
})(module553.Component);
export default le;
