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
import module26 from "./module-26.js";
import module457 from "./module-457.js";
import module63 from "./module-63.js";
import module74 from "./module-74.js";
import module189 from "./module-189.js";
import module3613 from "./module-3613.js";
import module3624 from "./module-3624.js";
import module3626 from "./module-3626.js";
import { quota_limits_requests_Dot } from "./module-52.js";
import module914 from "./module-914.js";
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
