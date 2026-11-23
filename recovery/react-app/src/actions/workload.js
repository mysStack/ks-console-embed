import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-85.js";
import "unpacked/module-7.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module61 from "unpacked/module-61.js";
import module31 from "unpacked/module-31.js";
import "unpacked/module-58.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module189 from "unpacked/module-189.js";
import module199 from "unpacked/module-199.js";
import module14 from "unpacked/module-14.js";
import { multiCluster_overrides_Dot, withProps } from "utils/index";
import module240 from "unpacked/module-240.js";
import module788 from "components/Base/Modal";
import module826 from "components/Modals/Create";
import module3596 from "pages/projects/components/Modals/Redeploy";
import module3598 from "pages/projects/components/Modals/RollBack";
import module3599 from "pages/projects/components/Modals/HPA";
import module3601 from "pages/projects/components/Modals/ConfigTemplate";
import module3604 from "pages/projects/components/Modals/ServiceSetting/StatefulSet";
import module1323 from "components/Forms/Workload/ClusterDiffSettings";
import module1574 from "pages/projects/components/Modals/WorkloadDelete";
import { MODULE_KIND_MAP, OMIT_TOTAL_REPLICAS } from "utils/constants";
import module435 from "utils/form.templates";
import module902 from "utils/form.persist";
import deployments from "configs/steps/deployments";
import statefulsets from "configs/steps/statefulsets";
import daemonsets from "configs/steps/daemonsets";
import jobs from "configs/steps/jobs";
import cronjobs from "configs/steps/cronjobs";
import module469 from "stores/workload/hpa";
import module443 from "stores/service";
import module1090 from "unpacked/module-1090.js";
import module1091 from "unpacked/module-1091.js";
import { isK8sVersionAbove } from "unpacked/module-362.js";
const G = {
    deployments,
    statefulsets,
    daemonsets,
    jobs,
    cronjobs
};
const B = {
    "workload.create": {
        on: function({ store, cluster, namespace, module, success, isFederated, renderScheduleTab = false, supportGpuSelect = false, isAdmin, isProject, isEdge, k8sVersion = "", ...rest }) {
            const j = MODULE_KIND_MAP[module];
            const formTemplate = module31({}, j, module435[module]({
                namespace
            }));
            if (module === "cronjobs") {
                formTemplate[j].apiVersion = isK8sVersionAbove("v1.21.0", k8sVersion) ? "batch/v1" : "batch/v1beta1";
            }
            let F = {};
            if (module === "statefulsets") {
                formTemplate.Service = module435.services({
                    namespace,
                    selector: formTemplate[j].metadata.labels
                });
            }
            if (isFederated) {
                Object.keys(formTemplate).forEach((kind)=>{
                    formTemplate[kind] = module435.federated({
                        data: formTemplate[kind],
                        clusters: rest.projectDetail.clusters.map((e)=>e.name),
                        kind
                    });
                    F = module435.deploymentsSchedule({
                        data: formTemplate[kind],
                        includeClusters: rest.projectDetail.clusters.map((e)=>e.name)
                    });
                });
                store.setScheduleTemplate(F);
            }
            const steps = module61(G[module]);
            if (isFederated) {
                steps.push({
                    title: "CLUSTER_DIFF",
                    icon: "blue-green-deployment",
                    component: withProps(module1323, {
                        withService: module === "statefulsets"
                    })
                });
            }
            if (renderScheduleTab) {
                store.ifRenderScheduleTab(renderScheduleTab);
            }
            var Y = module788.open({
                onOk: function(e) {
                    if (isFederated) {
                        if (module === "deployments") {
                            multiCluster_overrides_Dot(module26(e, "Deployment.spec.overrides", []));
                        } else if (module === "statefulsets") {
                            multiCluster_overrides_Dot(module26(e, "StatefulSet.spec.overrides", []));
                        }
                    }
                    if (module !== "jobs" || module26(e, "Job.metadata.namespace")) {
                        let u = e = module189(e, OMIT_TOTAL_REPLICAS(j));
                        if (u) {
                            const c = module26(u, "spec.template.spec.customMode", {});
                            if (!module63(c)) {
                                delete u.spec.template.spec.customMode;
                            }
                            if (j && Object.keys(e).length === 1 && e[j]) {
                                u = e[j];
                            }
                            if (isEdge && (module199(u, {
                                spec: {
                                    template: {
                                        spec: {
                                            tolerations: [
                                                {
                                                    key: "node.kubernetes.io/unreachable",
                                                    operator: "Exists"
                                                },
                                                {
                                                    key: "node-role.kubernetes.io/edge",
                                                    operator: "Exists"
                                                }
                                            ]
                                        }
                                    }
                                }
                            }), isAdmin)) {
                                const metadata = {
                                    labels: {
                                        "apps.edgewize.io/created": "admin"
                                    }
                                };
                                const D = {
                                    metadata,
                                    spec: {
                                        template: {
                                            metadata
                                        }
                                    }
                                };
                                module199(u, D);
                                if (rest.isEdgeWize) ;
                                else if (module63(u?.spec?.template?.spec?.nodeSelector)) {
                                    return module240.error(t("PLEASE_SELECT_NODES"));
                                }
                            }
                            store.create(u, {
                                cluster,
                                namespace
                            }, k8sVersion).then(module44(module41.mark(function e() {
                                let o;
                                return module41.wrap(function(e) {
                                    while(true){
                                        switch(e.prev = e.next){
                                            case 0:
                                                if (!store.isScheduleDeployment || !renderScheduleTab) {
                                                    e.next = 7;
                                                    break;
                                                }
                                                o = module14.toJS(store.scheduleTemplate);
                                                e.next = 5;
                                                return store.scheduleCreate(o, {
                                                    cluster,
                                                    namespace
                                                });
                                            case 5:
                                                e.next = 7;
                                                return store.switchSchedule(false);
                                            case 7:
                                                module788.close(Y);
                                                module240.success({
                                                    content: t("CREATE_SUCCESSFUL")
                                                });
                                                if (success) {
                                                    success();
                                                }
                                                module902.delete(`${module}_create_form`);
                                            case 11:
                                            case "end":
                                                return e.stop();
                                        }
                                    }
                                }, e);
                            })));
                        }
                    } else {
                        module240.error({
                            content: t("PROJECT_NOT_SELECT_DESC")
                        });
                    }
                },
                onCancel: function() {
                    if (store.isScheduleDeployment && renderScheduleTab) {
                        store.switchSchedule(false);
                    }
                },
                steps,
                module,
                cluster,
                namespace,
                name: j,
                isFederated,
                formTemplate,
                modal: module826,
                store,
                supportGpuSelect,
                isProject,
                isEdge,
                ...rest
            });
        }
    },
    "workload.redeploy": {
        on: function({ store, detail, module, success: _success, ...rest }) {
            const type = MODULE_KIND_MAP[module];
            var u = module788.open({
                onOk: function() {
                    store.patch(detail, {
                        spec: {
                            template: {
                                metadata: {
                                    annotations: {
                                        "kubesphere.io/restartedAt": new Date
                                    }
                                }
                            }
                        }
                    }).then(()=>{
                        module788.close(u);
                        module240.success({
                            content: t("RECREATE_SUCCESS_DESC")
                        });
                    });
                },
                detail,
                type,
                modal: module3596,
                store,
                ...rest
            });
        }
    },
    "workload.revision.rollback": {
        on: function({ store, detail, isEdgeWize, success, ...rest }) {
            var o = module788.open({
                onOk: function(e) {
                    store.rollBack({
                        ...detail,
                        module: store.module
                    }, e).then(()=>{
                        module788.close(o);
                        if (success) {
                            success();
                        }
                    });
                },
                detail,
                isEdgeWize,
                modal: module3598,
                store,
                ...rest
            });
        }
    },
    "workload.hpa.edit": {
        on: function({ store, detail, isEdgeWize, success, k8sVersion, ...rest }) {
            const f = isEdgeWize ? new module1090 : new module469;
            var d = module788.open({
                onOk: function(e, r) {
                    if (r) {
                        f.patch(detail, e, k8sVersion).then(()=>{
                            module788.close(d);
                            if (success) {
                                success();
                            }
                        });
                    } else {
                        f.create(e, detail, k8sVersion).then(module44(module41.mark(function* r() {
                            module788.close(d);
                            yield store.patch(detail, {
                                metadata: {
                                    annotations: {
                                        "kubesphere.io/relatedHPA": module26(e, "metadata.name", detail.name)
                                    }
                                }
                            });
                            if (success) {
                                success();
                            }
                        })));
                    }
                },
                detail,
                store: f,
                modal: module3599,
                ...rest
            });
        }
    },
    "workload.template.edit": {
        on: function({ store, detail, success, isEdgeWize, supportGpuSelect = false, ...rest }) {
            var c = module788.open({
                onOk: function(e) {
                    const n = module26(e, "spec.template.spec.customMode", {});
                    if (!module63(n)) {
                        delete e.spec.template.spec.customMode;
                    }
                    store.update(detail, e).then(()=>{
                        module788.close(c);
                        if (success) {
                            success();
                        }
                    });
                },
                isEdgeWize,
                store,
                module: store.module,
                detail: module14.toJS(detail._originData),
                modal: module3601,
                supportGpuSelect,
                hideVolumeSetting: store.module === "statefulsets",
                ...rest
            });
        }
    },
    "workload.service.edit": {
        on: function({ store: _store, detail, isEdgeWize, success, ...rest }) {
            const l = isEdgeWize ? new module1091 : new module443;
            const detail_1 = {
                type: "Headless(Selector)",
                name: module26(detail, "_originData.spec.serviceName", ""),
                namespace: detail.namespace,
                cluster: detail.cluster
            };
            var u = module788.open({
                onOk: function(e) {
                    l.update(detail_1, e).then(()=>{
                        module788.close(u);
                        if (success) {
                            success();
                        }
                    });
                },
                isEdgeWize,
                detail: detail_1,
                store: l,
                modal: module3604,
                ...rest
            });
        }
    },
    "workload.delete": {
        on: function({ store, detail, success, k8sVersion, ...rest }) {
            var u = module788.open({
                onOk: function() {
                    module788.close(u);
                    module240.success({
                        content: t("DELETED_SUCCESSFULLY")
                    });
                    if (success) {
                        success();
                    }
                },
                store,
                modal: module1574,
                resource: detail,
                k8sVersion,
                ...rest
            });
        }
    },
    "workload.batch.delete": {
        on: function({ store, success, rowKey = "name", k8sVersion, ...rest }) {
            const store_list = store.list;
            const { data, selectedRowKeys } = store_list;
            const resource = data.filter((e)=>selectedRowKeys.includes(e[rowKey]));
            var p = module788.open({
                onOk: function() {
                    module788.close(p);
                    module240.success({
                        content: t("DELETED_SUCCESSFULLY")
                    });
                    if (success) {
                        success();
                    }
                },
                modal: module1574,
                resource,
                k8sVersion,
                store,
                ...rest
            });
        }
    }
};
export default B;
