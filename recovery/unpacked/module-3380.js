import "./module-12.js";
import "./module-5.js";
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
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module31 from "./module-31.js";
import "./module-58.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module159 from "./module-159.js";
import module1740 from "./module-1740.js";
import module240 from "./module-240.js";
import module788 from "./module-788.js";
import module826 from "./module-826.js";
import module823 from "./module-823.js";
import module3381 from "./module-3381.js";
import module1741 from "./module-1741.js";
import module3388 from "./module-3388.js";
import module3390 from "./module-3390.js";
import { MODULE_KIND_MAP } from "./module-72.js";
import module435 from "./module-435.js";
import module902 from "./module-902.js";
import steps from "./module-3392.js";
import module3398 from "./module-3398.js";
const N = {
    "storageclass.create": {
        on: function({ store, cluster, module, success, ...rest }) {
            const f = MODULE_KIND_MAP[module];
            const formTemplate = module31({}, f, module435[module]({}));
            var h = module788.open({
                onOk: function(e) {
                    const o = module26(e, f);
                    if (o) {
                        if (!module26(o, 'metadata.labels["storage.kubesphere.io/storagetype"]')) {
                            module74(o, 'metadata.labels["storage.kubesphere.io/storagetype"]', "Undefined");
                        }
                        store.createAlongWithSnapshotClasses(o, {
                            cluster
                        }).then(()=>{
                            module788.close(h);
                            module240.success({
                                content: t("CREATE_SUCCESSFUL")
                            });
                            if (success) {
                                success();
                            }
                            module902.delete(`${module}_create_form`);
                        });
                    }
                },
                module,
                cluster,
                name: f,
                steps,
                formTemplate,
                modal: module826,
                store,
                ...rest
            });
        }
    },
    "torageclass.update": {
        on: function({ store, cluster: _cluster, detail, success, ...rest }) {
            const o = module26(store, "module", "");
            var u = module788.open({
                onOk: function(e) {
                    const l = o === "workspace" ? null : e;
                    store.patch(detail, l).then(()=>{
                        module788.close(u);
                        module240.success({
                            content: t("UPDATE_SUCCESSFUL")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                detail,
                modal: module3398,
                store,
                ...rest
            });
        }
    },
    "storageclass.set.default": {
        on: function({ store, cluster, detail, defaultStorageClass, success, ...rest }) {
            let t;
            var f = module788.open({
                onOk: (t = module44(module41.mark(function e() {
                    return module41.wrap(function(e) {
                        while(true){
                            switch(e.prev = e.next){
                                case 0:
                                    if (!defaultStorageClass) {
                                        e.next = 3;
                                        break;
                                    }
                                    e.next = 3;
                                    return store.patch({
                                        name: defaultStorageClass,
                                        cluster
                                    }, {
                                        metadata: {
                                            annotations: {
                                                "storageclass.kubernetes.io/is-default-class": "false",
                                                "storageclass.beta.kubernetes.io/is-default-class": "false"
                                            }
                                        }
                                    });
                                case 3:
                                    e.next = 5;
                                    return store.patch(detail, {
                                        metadata: {
                                            annotations: {
                                                "storageclass.kubernetes.io/is-default-class": "true",
                                                "storageclass.beta.kubernetes.io/is-default-class": "true"
                                            }
                                        }
                                    });
                                case 5:
                                    module788.close(f);
                                    if (success) {
                                        success();
                                    }
                                case 7:
                                case "end":
                                    return e.stop();
                            }
                        }
                    }, e);
                })), function() {
                    return t.apply(this, arguments);
                }),
                cluster,
                modal: module3381,
                store,
                ...rest
            });
        }
    },
    "storageclass.volume.function.update": {
        on: function({ cluster, store, detail, StorageClassStore, success, ...rest }) {
            var E = module788.open({
                onOk: async (a)=>{
                    let o;
                    let c;
                    let s;
                    const r = {};
                    o = a.allowClone;
                    c = a.allowSnapshot;
                    s = a.allowVolumeExpansion;
                    if (!module159(o)) {
                        module74(r, 'metadata.annotations["storageclass.kubesphere.io/allow-clone"]', String(o));
                    }
                    if (!module159(c)) {
                        module74(r, 'metadata.annotations["storageclass.kubesphere.io/allow-snapshot"]', String(c));
                    }
                    if (!module159(s)) {
                        module74(r, "allowVolumeExpansion", module1740(s) ? s : JSON.parse(s));
                    }
                    await store.patch(detail, r);
                    await store.fetchDetail({
                        name: detail.name,
                        cluster: detail.cluster
                    });
                    module240.success({
                        content: t("UPDATE_SUCCESSFUL")
                    });
                    module788.close(E);
                    if (success) {
                        success();
                    }
                },
                cluster,
                store,
                modal: module3388,
                StorageClassStore,
                ...rest
            });
        }
    },
    "storageclass.pvc.autoresizer": {
        on: function({ store, cluster, detail, success, ...rest }) {
            var d = module788.open({
                onOk: async (a)=>{
                    let n;
                    n = detail._originData;
                    module74(n, "metadata.annotations", {
                        ...n.metadata.annotations,
                        ...a
                    });
                    await store.patch(detail, n);
                    await store.fetchDetail({
                        name: detail.name,
                        cluster: detail.cluster
                    });
                    module240.success({
                        content: t("UPDATE_SUCCESSFUL")
                    });
                    module788.close(d);
                    if (success) {
                        success();
                    }
                },
                cluster,
                store,
                formData: detail._originData,
                modal: module1741,
                ...rest
            });
        }
    },
    "storageclass.accessor": {
        on: function({ cluster, store, detail, storageClassName, success, shouldAddCrd }) {
            var f = module788.open({
                onOk: async (a)=>{
                    module788.close(f);
                    await store.update({
                        cluster,
                        name: a.metadata.name
                    }, a);
                    module240.success({
                        content: t("UPDATE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                },
                storageClassName,
                cluster,
                store,
                detail,
                shouldAddCrd,
                modal: module3390
            });
        }
    },
    "storageclass.batch.delete": {
        on: function({ store, success, rowKey = "name", accessorStore, cluster, ...rest }) {
            const store_list = store.list;
            const { data, selectedRowKeys } = store_list;
            const g = data.filter((e)=>selectedRowKeys.includes(e[rowKey])).map((e)=>({
                    name: e.name,
                    namespace: e.namespace
                })).map((e)=>e.name);
            var b = module788.open({
                onOk: async ()=>{
                    let o;
                    const a = [];
                    o = [];
                    g.forEach((e)=>{
                        a.push(accessorStore.silentPatch({
                            cluster,
                            name: `${e}-accessor`
                        }, {
                            spec: {
                                storageClassName: `${e}-accessor-disabled`
                            }
                        }));
                        o.push(store.delete({
                            cluster,
                            name: e
                        }));
                    });
                    await Promise.all([].concat(a, o));
                    module788.close(b);
                    module240.success({
                        content: t("DELETED_SUCCESSFULLY")
                    });
                    store.setSelectRowKeys([]);
                    if (success) {
                        success();
                    }
                },
                resource: g.join(", "),
                type: "STORAGE_CLASS",
                modal: module823,
                store,
                desc: t.html("STORAGE_CLASS_DELETE_DESC_PL", {
                    type: t("STORAGE_CLASS_LOW"),
                    resource: g.join(", ")
                }),
                ...rest
            });
        }
    },
    "storageclass.delete": {
        on: function({ store, detail, success, accessorStore, cluster, ...rest }) {
            var d = module788.open({
                onOk: async ()=>{
                    await accessorStore.silentPatch({
                        cluster,
                        name: `${detail.name}-accessor`
                    }, {
                        spec: {
                            storageClassName: `${detail.name}-accessor-disabled`
                        }
                    });
                    store.delete(detail).then(()=>{
                        module788.close(d);
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
                desc: t("STORAGE_CLASS_DELETE_DESC"),
                ...rest
            });
        }
    }
};
export default N;
