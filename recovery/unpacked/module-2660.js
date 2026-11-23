import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-87.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-24.js";
import "./module-64.js";
import "./module-7.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module31 from "./module-31.js";
import "./module-58.js";
import "./module-249.js";
import "./module-45.js";
import "./module-28.js";
import "./module-191.js";
import "./module-160.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-22.js";
import module198 from "./module-198.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module242 from "./module-242.js";
import module136 from "./module-136.js";
import module189 from "./module-189.js";
import module199 from "./module-199.js";
import module240 from "./module-240.js";
import module788 from "./module-788.js";
import module2661 from "./module-2661.js";
import { IMPORT_CLUSTER, IMPORT_EDGEWIZE_CLUSTER } from "./module-1618.js";
import { CREATE_EDGE_CLUSTER_SPEC, DEFAULT_CLUSTER_CONFIG, IMPORT_CLUSTER_SPEC } from "./module-1334.js";
import module1051 from "./module-1051.js";
import { safeParseJSON } from "./module-52.js";
import module2703 from "./module-2703.js";
import module2707 from "./module-2707.js";
import module2709 from "./module-2709.js";
import { safeAtob, safeBtoa } from "./module-440.js";
import { getValue, getValueObj } from "./module-895.js";
function I({ value }) {
    if (typeof value !== "string") {
        const r = new Error("insertCommentToClusterConfigGlobalImageRegistry: value must be a string");
        console.error(r);
        return "";
    }
    const n = `imageRegistry: ${DEFAULT_CLUSTER_CONFIG.global.imageRegistry}`;
    return value.replace(n, `# ${t("CLUSTER_CONFIG_IMAGE_REGISTRY_TIP")}
  ${n}`);
}
const P = {
    "cluster.add": {
        on: function({ store, module, success, ...rest }) {
            store.kubekey = new module1051;
            let config;
            let m;
            config = I({
                value: getValue(DEFAULT_CLUSTER_CONFIG)
            });
            const _ = module199({}, IMPORT_CLUSTER_SPEC, {
                spec: {
                    config
                }
            });
            const O = module136(_);
            var C = module788.open({
                onOk: (m = module44(module41.mark(function e(r) {
                    let o;
                    let c;
                    let s;
                    let d;
                    return module41.wrap(function(e) {
                        while(true){
                            switch(e.prev = e.next){
                                case 0:
                                    if (r) {
                                        e.next = 2;
                                        break;
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    o = module26(r, 'metadata.annotations["kubesphere.io/way-to-add"]');
                                    c = module26(r, "metadata.name");
                                    s = module26(r, "tags", []).reduce((acc, item)=>({
                                            ...acc,
                                            ...module31({}, `label.cluster.kubesphere.io/${item.name}`, "")
                                        }), {});
                                    d = module26(r, "metadata.labels", {});
                                    module74(r, "metadata.labels", {
                                        ...d,
                                        ...s,
                                        "kubesphere.io/managed": "true"
                                    });
                                    delete r.tags;
                                    if (o !== "new") {
                                        e.next = 13;
                                        break;
                                    }
                                    e.next = 11;
                                    return w(store.kubekey, r);
                                case 11:
                                    e.next = 15;
                                    break;
                                case 13:
                                    e.next = 15;
                                    return A(store, r);
                                case 15:
                                    module788.close(C);
                                    module240.success({
                                        content: t("CREATE_SUCCESSFUL")
                                    });
                                    if (success) {
                                        success(`/clusters/${c}/overview`);
                                    }
                                case 18:
                                case "end":
                                    return e.stop();
                            }
                        }
                    }, e);
                })), function(e) {
                    return m.apply(this, arguments);
                }),
                module,
                formTemplate: O,
                title: t("ADD_CLUSTER"),
                steps: IMPORT_CLUSTER,
                modal: module2661,
                store,
                ...rest
            });
        }
    },
    "cluster.unbind": {
        on: function({ store, detail, success, ...rest }) {
            let a;
            var i = module788.open({
                onOk: (a = module44(module41.mark(function e(a) {
                    return module41.wrap(function(e) {
                        while(true){
                            switch(e.prev = e.next){
                                case 0:
                                    if (!a) {
                                        e.next = 3;
                                        break;
                                    }
                                    e.next = 3;
                                    return M(store, detail);
                                case 3:
                                    store.delete(detail).then(()=>{
                                        module788.close(i);
                                        module240.success({
                                            content: t("REMOVE_SUCCESS")
                                        });
                                        if (success) {
                                            success();
                                        }
                                    });
                                case 4:
                                case "end":
                                    return e.stop();
                            }
                        }
                    }, e);
                })), function(e) {
                    return a.apply(this, arguments);
                }),
                store,
                modal: module2703,
                detail,
                title: t("REMOVE_CLUSTER"),
                resource: detail.name,
                deleteCluster: true,
                ...rest
            });
        }
    },
    "cluster.updateKubeConfig": {
        on: function({ store, detail, cluster: _cluster, success, ...rest }) {
            var i = module788.open({
                onOk: async (a)=>{
                    let o;
                    o = module136(a);
                    module74(o, "kubeconfig", safeBtoa(o.kubeconfig));
                    await store.updateKubeConfig({
                        cluster: detail.name,
                        data: o
                    });
                    module788.close(i);
                    module240.success({
                        content: t("UPDATE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                },
                store,
                detail,
                title: t("UPDATE_KUBECONFIG"),
                formTemplate: {
                    kubeconfig: {}
                },
                modal: module2707,
                ...rest
            });
        }
    },
    "cluster.viewKubeConfig": {
        on: function({ store, detail, cluster: _cluster, success: _success, ...rest }) {
            var l = module788.open({
                onOk: function() {
                    return module788.close(l);
                },
                store,
                detail,
                title: t("VIEW_KUBECONFIG"),
                formTemplate: {
                    kubeconfig: {}
                },
                modal: module2707,
                readOnly: true,
                ...rest
            });
        }
    },
    "cluster.editConfig": {
        on: function({ store, detail, cluster: _cluster, success, ...rest }) {
            const m = safeAtob(module26(detail._originData, "spec.config", ""));
            const y = getValueObj(m);
            const g = module198(y, "global.imageRegistry");
            const S = {
                spec: {
                    config: (()=>{
                        if (g) {
                            return m;
                        }
                        const e = module199({}, DEFAULT_CLUSTER_CONFIG, y);
                        return I({
                            value: getValue(e)
                        });
                    })()
                }
            };
            var _ = module788.open({
                onOk: async (a)=>{
                    let o;
                    o = module136(a);
                    module74(o, "spec.config", safeBtoa(o.spec.config));
                    await store.patch(detail, o);
                    module788.close(_);
                    module240.success({
                        content: t("UPDATE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                },
                store,
                detail,
                title: t("EDIT_CONFIG"),
                formTemplate: S,
                modal: module2709,
                ...rest
            });
        }
    },
    "edge.cluster.add": {
        on: async function(e) {
            let store;
            let module;
            let u;
            let s;
            let d;
            let v;
            let S;
            ({ store, module, success: u, ...s } = e);
            d = module136(CREATE_EDGE_CLUSTER_SPEC);
            v = await store.fetchKubeEdgeIp();
            module74(d, "spec.advertiseAddress", v);
            S = module788.open({
                onOk: (()=>{
                    const e = module44(module41.mark(function e(a) {
                        let n;
                        let o;
                        let c;
                        let s;
                        let d;
                        let v;
                        return module41.wrap(function(e) {
                            while(true){
                                switch(e.prev = e.next){
                                    case 0:
                                        if (a) {
                                            e.next = 2;
                                            break;
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        n = module136(a);
                                        o = module26(n, "metadata.name");
                                        c = module26(n, "spec.type");
                                        s = module26(n, "spec.hostCluster");
                                        if (c !== "manual") {
                                            e.next = 19;
                                            break;
                                        }
                                        d = module136(CREATE_EDGE_CLUSTER_SPEC);
                                        v = safeBtoa(module26(n, "spec.kubeconfig"));
                                        module74(d, "metadata.name", o);
                                        module74(d, 'metadata.annotations["kubesphere.io/creator"]', globals.user.username);
                                        module74(d, "spec.namespace", o);
                                        module74(d, "spec.hostCluster", s);
                                        module74(d, "spec.type", c);
                                        module74(d, "spec.kubeConfig", v);
                                        e.next = 17;
                                        return store.createWithKubeConfig(d, {
                                            name: o
                                        });
                                    case 17:
                                        e.next = 24;
                                        break;
                                    case 19:
                                        if (c !== "auto") {
                                            e.next = 24;
                                            break;
                                        }
                                        if (s) {
                                            e.next = 22;
                                            break;
                                        }
                                        return e.abrupt("return", module240.error({
                                            content: t("HOSTED_IN_DESC")
                                        }));
                                    case 22:
                                        e.next = 24;
                                        return store.create(module189(n, "spec.kubeConfig"), {
                                            name: o
                                        });
                                    case 24:
                                        module788.close(S);
                                        module240.success({
                                            content: t("CREATE_SUCCESSFUL")
                                        });
                                        if (u) {
                                            u("/v2/edgewize");
                                        }
                                    case 27:
                                    case "end":
                                        return e.stop();
                                }
                            }
                        }, e);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })(),
                module,
                formTemplate: d,
                title: t("ADD_CLUSTER"),
                steps: IMPORT_EDGEWIZE_CLUSTER,
                modal: module2661,
                isEdgeWize: true,
                store,
                ...s
            });
        }
    }
};
export default P;
var A = async (store, a)=>{
    let r;
    let n;
    let o;
    r = module136(a);
    if (module26(r, "spec.config")) {
        n = module26(r, "spec.config", "");
        module74(r, "spec.config", safeBtoa(n));
    }
    if (!(module26(r, "spec.connection.type") !== "proxy")) {
        module242(r, "spec.connection.kubeconfig");
    } else {
        o = module26(r, "spec.connection.kubeconfig", "");
        module74(r, "spec.connection.kubeconfig", safeBtoa(o));
        await store.validate(r);
    }
    await store.create(r);
};
var w = (kubekey, t)=>{
    let a = module26(t, "spec.registry.privateRegistry", "");
    if (a) {
        a = `${a}/`.replace(/\/\/$/, "/");
    }
    const r = safeParseJSON(JSON.stringify(t).replace(/\$\{spec\.registry\.privateRegistry\}/g, a), {});
    return kubekey.create(r);
};
function M(store, detail) {
    const a = {};
    module74(a, 'metadata.annotations["notification.kubesphere.io/cleanup"]', "true");
    return store.patch(detail, a);
}
