import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-30.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-85.js";
import "unpacked/module-38.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import "unpacked/module-31.js";
import "unpacked/module-58.js";
import module240 from "unpacked/module-240.js";
import module788 from "components/Base/Modal";
import module26 from "unpacked/module-26.js";
import module457 from "unpacked/module-457.js";
import module63 from "unpacked/module-63.js";
import module74 from "unpacked/module-74.js";
import module189 from "unpacked/module-189.js";
import module3613 from "pages/workspaces/components/Modals/WorkspaceCreate";
import module3624 from "pages/workspaces/components/Modals/QuotaEdit";
import module3626 from "pages/workspaces/components/Modals/WorkspaceDelete";
import { quota_limits_requests_Dot } from "utils/index";
import module914 from "stores/workspace.quota";
const O = {
    "workspace.create": {
        on: function({ store, success, ...rest }) {
            var l = module788.open({
                onOk: function(e) {
                    if (e) {
                        if (module26(globals, "ksConfig.springcloud", false)) {
                            module74(e, 'metadata.labels["springcloud.kubesphere.io/enabled"]', "true");
                        }
                        const n = module26(e, "clusterType");
                        const o = module26(e, "spec.placement.clusters.[0].name");
                        if (n === "edge" && o) {
                            module74(e, [
                                "metadata",
                                "labels",
                                "cluster-role.kubesphere.io/edge"
                            ], o);
                            module74(e, [
                                "spec",
                                "template",
                                "metadata",
                                "labels",
                                "cluster-role.kubesphere.io/edge"
                            ], o);
                        }
                        store.create(module189(e, "clusterType")).then(()=>{
                            module788.close(l);
                            module240.success({
                                content: t("CREATE_SUCCESSFUL")
                            });
                            if (success) {
                                success();
                            }
                        });
                    } else {
                        module788.close(l);
                    }
                },
                modal: module3613,
                store,
                ...rest
            });
        }
    },
    "workspace.quota.edit": {
        on: function(e) {
            e.store;
            const { store: _store, detail, success, ...rest } = e;
            const store = new module914;
            var v = module788.open({
                onOk: async (a)=>{
                    let o;
                    let u;
                    let c;
                    let h;
                    let E;
                    o = {
                        name: detail.name,
                        workspace: detail.name,
                        cluster: detail.cluster
                    };
                    u = module26(a, "spec", {});
                    c = module26(a, "storageLimit", {});
                    h = await store.checkName(o);
                    quota_limits_requests_Dot(u);
                    E = {
                        apiVersion: "quota.kubesphere.io/v1alpha2",
                        kind: "ResourceQuota",
                        metadata: {
                            ...o,
                            name: detail.name
                        },
                        spec: {
                            quota: {
                                hard: {
                                    ...module457(u, module63),
                                    ...c
                                }
                            }
                        }
                    };
                    if (h.exist) {
                        await store.update(o, E);
                    } else {
                        await store.create(E, o);
                    }
                    module788.close(v);
                    module240.success({
                        content: t("UPDATE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                },
                detail,
                store,
                modal: module3624,
                ...rest
            });
        }
    },
    "workspace.delete": {
        on: function({ store, detail, success, ...rest }) {
            var o = module788.open({
                onOk: function(e) {
                    store.delete(detail, e).then(()=>{
                        module788.close(o);
                        module240.success({
                            content: t("DELETED_SUCCESSFULLY")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                store,
                modal: module3626,
                resource: detail.name,
                ...rest
            });
        }
    },
    "workspace.batch.delete": {
        on: function({ store, success, rowKey, ...rest }) {
            const store_list = store.list;
            const { data, selectedRowKeys } = store_list;
            const v = data.filter((e)=>selectedRowKeys.includes(e[rowKey])).map((e)=>e.name);
            var h = module788.open({
                onOk: async (a)=>{
                    const o = [];
                    data.forEach((e)=>{
                        if (v.includes(e.name)) {
                            o.push(store.delete(e, a));
                        }
                    });
                    await Promise.all(o);
                    module788.close(h);
                    module240.success({
                        content: t("DELETED_SUCCESSFULLY")
                    });
                    store.setSelectRowKeys([]);
                    if (success) {
                        success();
                    }
                },
                resource: v.join(", "),
                modal: module3626,
                store,
                ...rest
            });
        }
    }
};
export default O;
