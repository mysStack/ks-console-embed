import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-30.js";
import "./module-73.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-22.js";
import "./module-85.js";
import "./module-38.js";
import "./module-7.js";
import "./module-32.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-41.js";
import "./module-44.js";
import "./module-31.js";
import "./module-58.js";
import module240 from "./module-240.js";
import module788 from "./module-788.js";
import module823 from "./module-823.js";
import module1360 from "./module-1360.js";
import module2922 from "./module-2922.js";
import module2924 from "./module-2924.js";
import module136 from "./module-136.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module74 from "./module-74.js";
import module862 from "./module-862.js";
import module242 from "./module-242.js";
import module14 from "./module-14.js";
import module437 from "./module-437.js";
import module439 from "./module-439.js";
import { multiCluster_overrides_Dot, updateFederatedAnnotations } from "./module-52.js";
import module2942 from "./module-2942.js";
import module435 from "./module-435.js";
import module2943 from "./module-2943.js";
const I = {
    "federated.baseinfo.edit": {
        on: function({ store, detail, success, projectStore, ...rest }) {
            var m = module788.open({
                onOk: async (a)=>{
                    let o;
                    let c;
                    o = a;
                    c = {
                        metadata: module136(module26(a, "metadata"))
                    };
                    module74(a, 'spec.template.metadata.annotations["kubesphere.io/alias-name"]', module26(a, 'metadata.annotations["kubesphere.io/alias-name"]'));
                    updateFederatedAnnotations(a);
                    await projectStore.patch({
                        workspace: detail.workspace,
                        name: detail.name
                    }, c);
                    store.patch(detail, o).then(()=>{
                        module788.close(m);
                        module240.success({
                            content: t("UPDATE_SUCCESSFUL")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                detail,
                modal: module1360,
                store,
                ...rest
            });
        }
    },
    "federated.project.create": {
        on: function({ store, success, cluster, workspace, clusters, ...rest }) {
            var E = module788.open({
                onOk: async (a)=>{
                    let o;
                    let u;
                    let c;
                    module74(a, 'metadata.annotations["kubesphere.io/creator"]', globals.user.username);
                    module74(a, 'metadata.labels["kubesphere.io/workspace"]', workspace);
                    o = module862(module26(a, "spec.placement.clusters", []).filter((e)=>e.name), "name");
                    u = new module437(store);
                    module74(a, "spec.placement.clusters", o);
                    c = module136(a);
                    module74(c, 'metadata.labels["kubesphere.io/kubefed-host-namespace"]', "true");
                    module74(c, 'metadata.labels["kubefed.io/managed"]', "false");
                    module242(c, "spec.placement");
                    await store.create(c, {
                        workspace
                    });
                    await u.create(module2942.namespaces(a), {
                        namespace: module26(a, "metadata.name")
                    });
                    module788.close(E);
                    module240.success({
                        content: t("CREATE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                },
                cluster,
                workspace,
                clusters,
                formTemplate: module435.project(),
                modal: module2922,
                store,
                ...rest
            });
        }
    },
    "federated.project.delete": {
        on: function({ store, detail, success, ...rest }) {
            const o = new module439;
            var u = module788.open({
                onOk: function() {
                    o.delete({
                        name: detail.name
                    }).then(()=>{
                        module788.close(u);
                        module240.success({
                            content: t("DELETED_SUCCESSFULLY")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                store,
                modal: module823,
                resource: detail.name,
                type: "MULTI_CLUSTER_PROJECT",
                isLoading: o.isLoading,
                ...rest
            });
        }
    },
    "federated.project.delete.batch": {
        on: function({ store, success, rowKey, ...rest }) {
            const p = new module439;
            const store_list = store.list;
            const { data, selectedRowKeys } = store_list;
            const E = data.filter((e)=>selectedRowKeys.includes(e[rowKey])).map((e)=>e.name);
            var y = module788.open({
                onOk: async ()=>{
                    const a = [];
                    data.forEach((e)=>{
                        if (E.includes(e.name)) {
                            a.push(p.delete({
                                name: e.name
                            }));
                        }
                    });
                    await Promise.all(a);
                    module788.close(y);
                    module240.success({
                        content: t("DELETED_SUCCESSFULLY")
                    });
                    store.setSelectRowKeys([]);
                    if (success) {
                        success();
                    }
                },
                resource: E.join(", "),
                modal: module823,
                store,
                isLoading: p.isLoading,
                ...rest
            });
        }
    },
    "federated.workload.template.edit": {
        on: function({ store, detail, success, module, supportGpuSelect = false, ...rest }) {
            var d = module788.open({
                onOk: function(e) {
                    const l = module26(e, "spec.overrides", []);
                    multiCluster_overrides_Dot(l);
                    const o = module26(e, "spec.template.spec.customMode", {});
                    if (!module63(o)) {
                        delete e.spec.template.spec.customMode;
                    }
                    store.update(detail, e).then(()=>{
                        module240.success({
                            content: t("UPDATE_SUCCESSFUL")
                        });
                        module788.close(d);
                        if (success) {
                            success();
                        }
                    });
                },
                store,
                module: module || store.module,
                detail: module14.toJS(detail._originData),
                modal: module2924,
                type: detail.type,
                workloadStore: store,
                isEdit: true,
                supportGpuSelect,
                hideVolumeSetting: store.module === "statefulsets",
                ...rest
            });
        }
    },
    "federated.project.add.cluster": {
        on: function({ store, detail, success, ...rest }) {
            var o = module788.open({
                onOk: function(e) {
                    store.patch(detail, e).then(()=>{
                        module240.success({
                            content: t("UPDATE_SUCCESSFUL")
                        });
                        module788.close(o);
                        if (success) {
                            success();
                        }
                    });
                },
                store,
                formTemplate: module14.toJS(detail._originData),
                modal: module2943,
                ...rest
            });
        }
    }
};
export default I;
