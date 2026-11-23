import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-200.js";
import "./module-30.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-316.js";
import "./module-324.js";
import "./module-38.js";
import "./module-7.js";
import "./module-32.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-460.js";
import "./module-461.js";
import "./module-462.js";
import "./module-463.js";
import "./module-464.js";
import "./module-465.js";
import "./module-466.js";
import "./module-41.js";
import "./module-44.js";
import module31 from "./module-31.js";
import module58 from "./module-58.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module242 from "./module-242.js";
import module60 from "./module-60.js";
import module240 from "./module-240.js";
import module788 from "./module-788.js";
import module826 from "./module-826.js";
import module3326 from "./module-3326.js";
import module3327 from "./module-3327.js";
import module3329 from "./module-3329.js";
import module3331 from "./module-3331.js";
import { MODULE_KIND_MAP } from "./module-72.js";
import module435 from "./module-435.js";
import module902 from "./module-902.js";
import steps from "./module-1594.js";
const R = {
    "router.create": {
        on: function({ store, cluster, namespace, module, success, isFederated, ...rest }) {
            const E = MODULE_KIND_MAP[module];
            const y = module31({}, E, module435[module]({
                namespace
            }));
            if (isFederated) {
                Object.keys(y).forEach((kind)=>{
                    y[kind] = module435.federated({
                        data: y[kind],
                        clusters: rest.projectDetail.clusters.map((e)=>e.name),
                        kind
                    });
                });
            }
            var g = module788.open({
                onOk: function(e) {
                    const u = module26(e, E);
                    if (e) {
                        const c = {
                            cluster,
                            namespace
                        };
                        c.namespace = c.namespace || module26(u, "metadata.namespace");
                        if (isFederated) {
                            const v = module26(u, "spec.ingressClassName");
                            const h = module26(u, "spec.overrides");
                            const y = [];
                            const b = {
                                clusters: []
                            };
                            h.forEach((e)=>{
                                if (module26(e, "clusterOverrides[0].value", []).length !== 0) {
                                    b.clusters.push({
                                        name: e.clusterName
                                    });
                                    y.push(e);
                                }
                            });
                            module242(u, "spec.ingressClassName");
                            module74(u, "spec.template.spec.ingressClassName", v);
                            module74(u, "spec.overrides", y);
                            module74(u, "spec.placement", b);
                        }
                        store.create(u, c).then(()=>{
                            module788.close(g);
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
                namespace,
                name: "Route",
                formTemplate: y,
                isFederated,
                steps,
                modal: module826,
                store,
                ...rest
            });
        }
    },
    "router.rules.edit": {
        on: function({ store, namespace, detail, success, ...rest }) {
            var u = module788.open({
                onOk: function(e) {
                    store.update(detail, e).then(()=>{
                        module788.close(u);
                        module240.success({
                            content: t("UPDATE_SUCCESSFUL")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                modal: module3329,
                detail,
                cluster: detail.cluster,
                store,
                namespace,
                ...rest
            });
        }
    },
    "fedproject.router.rules.edit": {
        on: function({ store, namespace, detail, success, ...rest }) {
            var u = module788.open({
                onOk: function(e) {
                    const r = module26(e, "spec.template", {});
                    const set = new Set;
                    Object.values(r.spec).forEach((e)=>{
                        if (module60(e)) {
                            if (e != null) {
                                e.forEach((e)=>e.clusters?.forEach(function(e) {
                                        return set.add(e);
                                    }));
                            }
                        }
                    });
                    const c = Array.from(set).map((name)=>({
                            name
                        }));
                    module74(e, "spec.placement.clusters", c);
                    store.update(detail, e).then(()=>{
                        module788.close(u);
                        module240.success({
                            content: t("UPDATE_SUCCESSFUL")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                modal: module3331,
                detail,
                cluster: detail.cluster,
                namespace,
                store,
                ...rest
            });
        }
    },
    "router.annotations.edit": {
        on: function({ store, detail, success, ...rest }) {
            var o = module788.open({
                onOk: function(e) {
                    store.update(detail, e).then(()=>{
                        module788.close(o);
                        module240.success({
                            content: t("UPDATE_SUCCESSFUL")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                modal: module3327,
                detail,
                store,
                ...rest
            });
        }
    },
    "router.setting.create": {
        on: async function(e) {
            let r;
            let n;
            let u;
            let cluster;
            let i;
            let f;
            let d;
            r = e.store;
            e.detail;
            n = e.module;
            u = e.success;
            cluster = e.cluster;
            i = module58(e, [
                "store",
                "detail",
                "module",
                "success",
                "cluster"
            ]);
            f = module435[n]();
            d = module788.open({
                onOk: async function(a) {
                    let n;
                    n = {
                        cluster
                    };
                    r.create(a, n).then(()=>{
                        module788.close(d);
                        module240.success({
                            content: t("CREATE_SUCCESSFUL")
                        });
                        if (u) {
                            u();
                        }
                    });
                },
                title: t("CREATE_DOMAIN_NAME"),
                modal: module3326,
                formTemplate: f,
                cluster,
                store: r,
                ...i
            });
        }
    },
    "router.setting.edit": {
        on: async function(e) {
            let r;
            let detail;
            let u;
            let s;
            let cluster;
            let f;
            let d;
            let v;
            ({ store: r, detail, module: u, success: s, cluster, ...f } = e);
            d = module435[u];
            v = module788.open({
                onOk: async function(a) {
                    r.patch(detail, a).then(()=>{
                        module788.close(v);
                        module240.success({
                            content: t("MODIFY_SUCCESSFUL")
                        });
                        if (s) {
                            s();
                        }
                    });
                },
                title: t("EDIT"),
                modal: module3326,
                formTemplate: d,
                cluster,
                store: r,
                detail,
                ...f
            });
        }
    }
};
export default R;
