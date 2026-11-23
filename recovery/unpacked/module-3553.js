import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-22.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module61 from "./module-61.js";
import module31 from "./module-31.js";
import "./module-58.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module74 from "./module-74.js";
import module240 from "./module-240.js";
import module788 from "./module-788.js";
import module14 from "./module-14.js";
import module826 from "./module-826.js";
import module3554 from "./module-3554.js";
import module3555 from "./module-3555.js";
import module3557 from "./module-3557.js";
import component from "./module-1771.js";
import module3563 from "./module-3563.js";
import module1081 from "./module-1081.js";
import module1360 from "./module-1360.js";
import { MODULE_KIND_MAP } from "./module-72.js";
import module435 from "./module-435.js";
import module902 from "./module-902.js";
import module3569, { APPLY_SNAPSHOT_FORM_STEPS } from "./module-3569.js";
import module3573 from "./module-3573.js";
import module1741 from "./module-1741.js";
const w = {
    "volume.create": {
        on: function({ fromSnapshot, store, cluster, namespace, module, isFederated, extendformTemplate, success, ...rest }) {
            const b = MODULE_KIND_MAP[module];
            const _ = module31({}, b, {
                ...module435.volumes({
                    namespace
                }),
                ...extendformTemplate
            });
            if (isFederated) {
                Object.keys(_).forEach((e)=>{
                    _[e] = module435.federated({
                        data: _[e],
                        clusters: rest.projectDetail.clusters.map((e)=>e.name),
                        kind: e
                    });
                });
            }
            const O = module61(module3569);
            if (isFederated) {
                O.push({
                    title: "CLUSTER_DIFF",
                    icon: "blue-green-deployment",
                    component,
                    required: true
                });
            }
            let C;
            var k = module788.open({
                onOk: (C = module44(module41.mark(function e(a) {
                    let u;
                    let c;
                    return module41.wrap(function(e) {
                        while(true){
                            switch(e.prev = e.next){
                                case 0:
                                    if (u = module26(a, b)) {
                                        e.next = 3;
                                        break;
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    c = {
                                        cluster,
                                        namespace
                                    };
                                    c.namespace = c.namespace || module26(u, "metadata.namespace");
                                    e.next = 7;
                                    return store.create(u, c);
                                case 7:
                                    module788.close(k);
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
                })), function(e) {
                    return C.apply(this, arguments);
                }),
                module,
                cluster,
                namespace,
                name: b,
                title: t("CREATE_PERSISTENT_VOLUME_CLAIM"),
                formTemplate: _,
                isFederated,
                steps: fromSnapshot ? APPLY_SNAPSHOT_FORM_STEPS : O,
                modal: module826,
                store,
                ...rest
            });
        }
    },
    "volume.clone": {
        on: function({ store, ...rest }) {
            var l = module788.open({
                onOk: async (a)=>{
                    await store.cloneVolume(a);
                    module788.close(l);
                    module240.success({
                        content: t("CREATE_SUCCESSFUL")
                    });
                },
                title: t("CLONE_VOLUME"),
                modal: module3554,
                store,
                ...rest
            });
        }
    },
    "volume.create.snapshot": {
        on: async function(e) {
            let store;
            let n;
            let l;
            let c;
            let s;
            let options;
            let p;
            ({ store, detail: n, provisioner: l, ...c } = e);
            s = l ?? module26(n, "annotations['volume.beta.kubernetes.io/storage-provisioner']", "-");
            await store.getSnapshotType({
                cluster: c.cluster
            });
            options = [];
            store.snapshotType.items.forEach((e)=>{
                if (e.driver === s) {
                    options.push({
                        label: e.metadata.name,
                        value: e.metadata.name
                    });
                }
            });
            p = module788.open({
                onOk: async function(a) {
                    await store.createSnapshot(a);
                    module788.close(p);
                    module240.success({
                        content: t("CREATE_SUCCESSFUL")
                    });
                },
                title: t("CREATE_SNAPSHOT"),
                modal: module3555,
                store,
                options,
                ...c
            });
        }
    },
    "create.snapshot": {
        on: function({ store, cluster, namespace, success, ...rest }) {
            var f = module788.open({
                onOk: async (a)=>{
                    let namespace_1;
                    let u;
                    ({ namespace: namespace_1, ...u } = a);
                    await store.createSnapshot({
                        ...u,
                        cluster,
                        namespace: namespace_1
                    });
                    module788.close(f);
                    module240.success({
                        content: t("CREATE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                },
                title: t("CREATE_SNAPSHOT"),
                modal: module3555,
                store,
                cluster,
                namespace,
                volumeSelect: true,
                ...rest
            });
        }
    },
    "volume.expand": {
        on: function({ store, ...rest }) {
            var l = module788.open({
                onOk: async (a)=>{
                    await store.patch(store.detail, a);
                    module788.close(l);
                    module240.success({
                        content: t("UPDATE_SUCCESSFUL")
                    });
                },
                modal: module3557,
                store,
                ...rest
            });
        }
    },
    "volume.template.edit": {
        on: function({ store, detail, success, module, isFederated, namespace, extendformTemplate, ...rest }) {
            const p = MODULE_KIND_MAP[module];
            const m = module31({}, p, {
                ...module435.volumes({
                    namespace
                }),
                ...extendformTemplate
            });
            if (isFederated) {
                Object.keys(m).forEach((e)=>{
                    m[e] = module435.federated({
                        data: m[e],
                        clusters: rest.projectDetail.clusters.map((e)=>e.name),
                        kind: e
                    });
                });
            }
            var E = module788.open({
                onOk: function(e) {
                    const n = module26(e, "spec.template.spec.customMode", {});
                    if (!module63(n)) {
                        delete e.spec.template.spec.customMode;
                    }
                    store.update(detail, e).then(()=>{
                        module788.close(E);
                        if (success) {
                            success();
                        }
                    });
                },
                store,
                detail: module14.toJS(detail._originData),
                modal: module3563,
                ...rest,
                formTemplate: m,
                isFederated
            });
        }
    },
    "volume.snapshot.yaml.edit": {
        on: function({ store, detail, success, namespace, cluster, ...rest }) {
            var d = module788.open({
                onOk: async (a)=>{
                    await store.update({
                        namespace,
                        cluster,
                        ...store.detail
                    }, a);
                    module240.success({
                        content: t("UPDATE_SUCCESSFUL")
                    });
                    module788.close(d);
                    if (success) {
                        success();
                    }
                },
                store,
                modal: module1081,
                yaml: detail,
                ...rest
            });
        }
    },
    "volume.snapshotContent.baseInfo.edit": {
        on: function({ store, detail, cluster, namespace, success, ...rest }) {
            var d = module788.open({
                onOk: async (a)=>{
                    await store.patch({
                        ...detail,
                        cluster,
                        namespace
                    }, a);
                    module240.success({
                        content: t("UPDATE_SUCCESSFUL")
                    });
                    module788.close(d);
                    if (success) {
                        success();
                    }
                },
                store,
                detail,
                modal: module1360,
                ...rest
            });
        }
    },
    "snapshotClasses.create": {
        on: function({ store, module, name, detail, cluster, success, ...rest }) {
            const y = MODULE_KIND_MAP[module];
            const steps = module61(module3573);
            const formTemplate = module31({}, y, {
                ...module435.volumesnapshotclass()
            });
            var S = module788.open({
                onOk: async (a)=>{
                    let n;
                    n = a[y];
                    await store.create(n, {
                        cluster
                    });
                    module788.close(S);
                    module240.success({
                        content: t("CREATE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                },
                module,
                name,
                store,
                detail,
                formTemplate,
                steps,
                modal: module826,
                cluster,
                ...rest
            });
        }
    },
    "volume.autoresizer": {
        on: function({ store, cluster, detail, success, ...rest }) {
            var f = module788.open({
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
                        cluster: detail.cluster,
                        namespace: detail.namespace
                    });
                    module240.success({
                        content: t("UPDATE_SUCCESSFUL")
                    });
                    module788.close(f);
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
    }
};
export default w;
