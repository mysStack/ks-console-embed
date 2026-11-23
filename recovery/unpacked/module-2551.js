import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
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
import module31 from "./module-31.js";
import "./module-58.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module63 from "./module-63.js";
import module189 from "./module-189.js";
import module240 from "./module-240.js";
import module788 from "./module-788.js";
import { mergeLabels, updateFederatedAnnotations } from "./module-52.js";
import module435 from "./module-435.js";
import { MODULE_KIND_MAP, OMIT_TOTAL_REPLICAS } from "./module-72.js";
import steps from "./module-1594.js";
import module826 from "./module-826.js";
import module2564 from "./module-2564.js";
import module1597 from "./module-1597.js";
import module1598 from "./module-1598.js";
import module1613 from "./module-1613.js";
import module918 from "./module-918.js";
import module1178 from "./module-1178.js";
const N = {
    "app.deploy": {
        on: function({ store, ...rest }) {
            var r = module788.open({
                onOk: function() {
                    module788.close(r);
                },
                modal: module2564,
                store,
                ...rest
            });
        }
    },
    "crd.app.create": {
        on: function({ store, cluster, namespace, workspace: _workspace, success, ...rest }) {
            var o = module788.open({
                onOk: function(e) {
                    const l = module189(e, [
                        "application",
                        "ingress"
                    ]);
                    Object.keys(l).forEach((t)=>{
                        e = module189(e, OMIT_TOTAL_REPLICAS(t));
                    });
                    store.create(e, {
                        cluster,
                        namespace
                    }).then(()=>{
                        module788.close(o);
                        if (success) {
                            success();
                        }
                    });
                },
                store,
                cluster,
                namespace,
                modal: module1597,
                ...rest
            });
        }
    },
    "crd.app.addservice": {
        on: function({ store, detail, cluster, namespace, success, ...rest }) {
            var h = module788.open({
                onOk: async (a)=>{
                    let o;
                    let c;
                    let E;
                    o = detail.selector;
                    c = String(detail.serviceMeshEnable);
                    E = {
                        service: a.Service,
                        workload: a.Deployment || a.StatefulSet
                    };
                    mergeLabels(E.service, o);
                    mergeLabels(E.workload, o);
                    module74(E.workload, 'metadata.annotations["servicemesh.kubesphere.io/enabled"]', c);
                    module74(E.service, 'metadata.annotations["servicemesh.kubesphere.io/enabled"]', c);
                    module74(E.workload, 'spec.template.metadata.annotations["sidecar.istio.io/inject"]', c);
                    if (rest.isFederated) {
                        updateFederatedAnnotations(E.workload);
                        updateFederatedAnnotations(E.service);
                        await store.create(E, {
                            namespace
                        });
                    } else {
                        await store.addComponent(E, {
                            name: detail.name,
                            cluster,
                            namespace
                        });
                    }
                    module788.close(h);
                    module240.success({
                        content: `${t("SERVICE_ADDED_SUCCESSFULLY")}`
                    });
                    if (success) {
                        success();
                    }
                },
                store,
                cluster,
                namespace,
                modal: module1598,
                ...rest
            });
        }
    },
    "crd.app.addroute": {
        on: function(e) {
            e.store;
            const { store: _store, detail, cluster, namespace, success, ...rest } = e;
            const S = new module918;
            const S_module = S.module;
            const O = MODULE_KIND_MAP[S_module];
            const T = module31({}, O, module435[S_module]({
                namespace
            }));
            var R = module788.open({
                onOk: async (a)=>{
                    let o;
                    let u;
                    let c;
                    let h;
                    let E;
                    o = detail.selector;
                    u = detail.serviceMeshEnable;
                    c = a.Ingress || a;
                    mergeLabels(c, o);
                    if (u) {
                        h = rest.isFederated ? module26(c, "spec.template") : c;
                        if (E = module26(h, "spec.rules[0].http.paths[0].backend.serviceName")) {
                            module74(h, 'metadata.annotations["nginx.ingress.kubernetes.io/upstream-vhost"]', `${E}.${namespace}.svc.cluster.local`);
                        }
                    }
                    if (rest.isFederated) {
                        updateFederatedAnnotations(c);
                    }
                    await S.create(c, {
                        cluster,
                        namespace
                    });
                    module788.close(R);
                    module240.success({
                        content: t("ADD_ROUTE_SUCCESS")
                    });
                    if (success) {
                        success();
                    }
                },
                cluster,
                namespace,
                formTemplate: T,
                module: S_module,
                store: S,
                steps,
                modal: module826,
                okBtnText: t("CREATE"),
                selector: detail.selector,
                ...rest,
                name: "Route"
            });
        }
    },
    "app.service.monitor": {
        on: function({ store, cluster, namespace, success, ...rest }) {
            let t;
            const d = new module1178;
            const p = module435.servicemonitors({
                name: "",
                namespace
            });
            var v = module788.open({
                onOk: (t = module44(module41.mark(function e(t) {
                    let a;
                    return module41.wrap(function(e) {
                        while(true){
                            switch(e.prev = e.next){
                                case 0:
                                    a = module26(t, "metadata.name");
                                    e.next = 3;
                                    return d.checkName({
                                        name: a,
                                        cluster,
                                        namespace
                                    });
                                case 3:
                                    if (e.sent.exist) {
                                        e.next = 9;
                                        break;
                                    }
                                    e.next = 7;
                                    return d.create(t, {
                                        cluster,
                                        namespace
                                    });
                                case 7:
                                    e.next = 16;
                                    break;
                                case 9:
                                    if (!module63(module26(t, "spec.endpoints"))) {
                                        e.next = 14;
                                        break;
                                    }
                                    e.next = 12;
                                    return d.delete({
                                        name: a,
                                        cluster,
                                        namespace
                                    });
                                case 12:
                                    e.next = 16;
                                    break;
                                case 14:
                                    e.next = 16;
                                    return d.update({
                                        name: a,
                                        cluster,
                                        namespace
                                    }, t);
                                case 16:
                                    module788.close(v);
                                    if (success) {
                                        success();
                                    }
                                case 18:
                                case "end":
                                    return e.stop();
                            }
                        }
                    }, e);
                })), function(e) {
                    return t.apply(this, arguments);
                }),
                cluster,
                namespace,
                formTemplate: p,
                app: store.detail,
                store: d,
                modal: module1613,
                ...rest
            });
        }
    }
};
export default N;
