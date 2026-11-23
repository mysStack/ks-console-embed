import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-7.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module31 from "unpacked/module-31.js";
import "unpacked/module-58.js";
import module26 from "unpacked/module-26.js";
import module241 from "unpacked/module-241.js";
import module74 from "unpacked/module-74.js";
import module240 from "unpacked/module-240.js";
import module788 from "components/Base/Modal";
import module826 from "components/Modals/Create";
import module3334 from "pages/projects/components/Modals/SecretEdit";
import { MODULE_KIND_MAP } from "utils/constants";
import module435 from "utils/form.templates";
import module902 from "utils/form.persist";
import steps from "configs/steps/secrets";
import module3344 from "components/Modals/SetDefaultSecretClass";
const O = {
    "secret.create": {
        on: function({ store, cluster, namespace, module, isFederated, success, prevDefault: _prevDefault, ...rest }) {
            const S = MODULE_KIND_MAP[module];
            const formTemplate = module31({}, S, module435[module]({
                namespace
            }));
            if (isFederated) {
                Object.keys(formTemplate).forEach((kind)=>{
                    formTemplate[kind] = module435.federated({
                        data: formTemplate[kind],
                        clusters: rest.projectDetail.clusters.map((e)=>e.name),
                        kind
                    });
                });
            }
            let C;
            var T = module788.open({
                onOk: (C = module44(module41.mark(function e(o) {
                    let u;
                    return module41.wrap(function(e) {
                        while(true){
                            switch(e.prev = e.next){
                                case 0:
                                    if (u = module26(o, S)) {
                                        e.next = 3;
                                        break;
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    e.next = 5;
                                    return R(store, u, {
                                        cluster,
                                        namespace: namespace || module26(u, "metadata.namespace")
                                    });
                                case 5:
                                    store.create(u, {
                                        cluster,
                                        namespace: namespace || module26(u, "metadata.namespace")
                                    }).then(()=>{
                                        module788.close(T);
                                        module240.success({
                                            content: t("CREATE_SUCCESSFUL")
                                        });
                                        if (success) {
                                            success(u);
                                        }
                                        module902.delete(`${module}_create_form`);
                                    });
                                case 6:
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
                name: S,
                isFederated,
                formTemplate,
                steps,
                modal: module826,
                store,
                ...rest
            });
        }
    },
    "secret.edit": {
        on: function({ store, detail, success, ...rest }) {
            var i = module788.open({
                onOk: async (a)=>{
                    module74(a, "metadata.resourceVersion", detail.resourceVersion);
                    if (rest.isFederated) {
                        module74(a, "apiVersion", store.version);
                        module74(a, "kind", store.secretKind);
                    }
                    await R(store, a, {
                        cluster: detail.cluster,
                        namespace: detail.namespace
                    });
                    store.update(detail, a).then(()=>{
                        module788.close(i);
                        module240.success({
                            content: t("UPDATE_SUCCESSFUL")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                store,
                detail,
                modal: module3334,
                disableSelect: true,
                ...rest
            });
        }
    },
    "secret.default": {
        on: function({ store, detail, cluster, success, ...rest }) {
            var f = module788.open({
                onOk: async ()=>{
                    let a;
                    a = await C(store, {
                        cluster,
                        namespace: detail.namespace
                    });
                    await store.setDefault({
                        cluster,
                        namespace: detail.namespace,
                        name: detail.name
                    }, {
                        cluster,
                        namespace: a.namespace,
                        name: a.name
                    });
                    module788.close(f);
                    module240.success({
                        content: t("SET_DEFAULT_REGISTRY_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                },
                store,
                detail,
                modal: module3344,
                ...rest
            });
        }
    }
};
async function C(store, a) {
    let r;
    let n;
    let o;
    r = a.cluster;
    n = a.namespace;
    o = await store.fetchList({
        cluster: r,
        namespace: n,
        annotation: "secret.kubesphere.io/is-default-class=true"
    });
    return o?.find(function(e) {
        return e.isDefault;
    }) || {};
}
async function R(store, a, r) {
    let n;
    let o;
    let u;
    n = r.cluster;
    o = r.namespace;
    u = await C(store, {
        cluster: n,
        namespace: o
    });
    if (!(module26(a, 'metadata.annotations["secret.kubesphere.io/is-default-class"]') !== "true" || !u.name || u.name === a.metadata.name)) {
        await store.patch(module241(u, [
            "cluster",
            "namespace",
            "name"
        ]), {
            metadata: {
                annotations: {
                    "secret.kubesphere.io/is-default-class": "false"
                }
            }
        });
    }
}
export default O;
