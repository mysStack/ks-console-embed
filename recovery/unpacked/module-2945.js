import "./module-12.js";
import "./module-11.js";
import "./module-29.js";
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
import "./module-24.js";
import "./module-85.js";
import "./module-38.js";
import "./module-137.js";
import "./module-7.js";
import "./module-32.js";
import "./module-5.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import "./module-31.js";
import "./module-58.js";
import module240 from "./module-240.js";
import module788 from "./module-788.js";
import module74 from "./module-74.js";
import module26 from "./module-26.js";
import module2946 from "./module-2946.js";
import module823 from "./module-823.js";
import module435 from "./module-435.js";
import module2950 from "./module-2950.js";
import module834 from "./module-834.js";
const b = {
    "gateways.create": {
        on: function({ store, cluster, namespace, name, workspace, success, type, ...rest }) {
            const E = module435.gateways();
            module74(E, "metadata", {
                namespace,
                name
            });
            var y = module788.open({
                onOk: function(e) {
                    if (module26(e, "metadata")) {
                        module74(e, "metadata", {
                            ...e.metadata,
                            creator: globals.user.username,
                            createTime: new Date
                        });
                        const l = module26(e, "metadata.labels", {});
                        if (type === "cluster") {
                            module74(e, "spec.values.controller.integrateKubeSphere.scope", {
                                enabled: true,
                                namespace: "",
                                namespaceSelector: ""
                            });
                            module74(e, "metadata.labels", {
                                ...l,
                                "kubesphere.io/gateway-type": "cluster"
                            });
                        }
                        if (!namespace && workspace) {
                            module74(e, "spec.values.controller.integrateKubeSphere.scope", {
                                enabled: true,
                                namespace: "",
                                namespaceSelector: `kubesphere.io/workspace=${workspace}`
                            });
                            module74(e, "metadata.labels", {
                                ...l,
                                "kubesphere.io/gateway-type": "workspace",
                                "kubesphere.io/workspace": workspace
                            });
                        }
                        if (namespace && workspace) {
                            module74(e, "spec.values.controller.integrateKubeSphere.scope", {
                                enabled: true,
                                namespace,
                                namespaceSelector: ""
                            });
                            module74(e, "metadata.labels", {
                                ...l,
                                "kubesphere.io/gateway-type": "project",
                                "kubesphere.io/workspace": workspace
                            });
                        }
                        let c;
                        c = !!module26(globals, `ksConfig.enabledExtensionModulesStatus.whizard-monitoring.clusterSchedulingStatuses.${cluster}`, false);
                        module74(e, "spec.values.controller.metrics.enabled", c);
                        module74(e, "spec.values.controller.metrics.serviceMonitor.enabled", c);
                        store.addGateway({
                            cluster,
                            namespace,
                            workspace
                        }, e).then(()=>{
                            module788.close(y);
                            module240.success({
                                content: t("CREATE_SUCCESSFUL")
                            });
                            if (success) {
                                success();
                            }
                        });
                    } else {
                        module240.error({
                            content: t("INVALID_YAML_FILE_FORMAT")
                        });
                    }
                },
                modal: module2946,
                isEdit: false,
                cluster,
                namespace,
                workspace,
                name,
                store,
                detail: E,
                ...rest
            });
        }
    },
    "gateways.edit": {
        on: async function(e) {
            let r;
            let detail;
            let u;
            let d;
            let workspace;
            let v;
            let name;
            let type;
            let b;
            let S;
            let _;
            let O;
            let C;
            let T;
            ({ store: r, detail, cluster: u, namespace: d, workspace, success: v, name, type, ...b } = e);
            S = new module834;
            _ = {
                cluster: u,
                namespace: d,
                workspace,
                type
            };
            O = await S.getGateway({
                ..._
            });
            C = O.resourceVersion;
            T = module788.open({
                onOk: async function(a) {
                    let n;
                    if ((n = await S.getGateway({
                        ..._
                    })).resourceVersion === C) {
                        module74(a, "metadata.resourceVersion", n.resourceVersion);
                        r.editGateway({
                            cluster: u,
                            namespace: d,
                            workspace,
                            name
                        }, a).then(()=>{
                            module788.close(T);
                            module240.success({
                                content: t("UPDATE_SUCCESSFUL")
                            });
                            if (v) {
                                v();
                            }
                        });
                    } else {
                        C = n.resourceVersion;
                        module240.info({
                            content: t("GATEWAY_UPDATING_TIP")
                        });
                    }
                },
                modal: module2946,
                isEdit: true,
                detail,
                cluster: u,
                namespace: d,
                workspace,
                store: r,
                ...b
            });
        }
    },
    "gateways.delete": {
        on: function({ store, resource, detail: _detail, cluster, namespace, workspace, success, name, ...rest }) {
            const desc = resource ? t.html("DELETE_RESOURCE_TYPE_DESC_GW", {
                resource,
                type: t("GATEWAY_LOW")
            }) : t("DISABLE_GATEWAY_TIP");
            var v = module788.open({
                onOk: function() {
                    store.delete({
                        name,
                        cluster,
                        namespace,
                        workspace
                    }).then(()=>{
                        module788.close(v);
                        module240.success({
                            content: t("DISABLE_SUCCESSFUL")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                store,
                modal: module823,
                title: t("DISABLE_GATEWAY"),
                desc,
                type: "GATEWAY",
                resource,
                cluster,
                namespace,
                workspace,
                ...rest
            });
        }
    },
    "gateways.update": {
        on: async function(e) {
            let r;
            let n;
            let u;
            let p;
            let workspace;
            let v;
            let y;
            let b;
            let S;
            let _;
            let O;
            let C;
            let T;
            let R;
            let D;
            ({ store: r, detail: n, cluster: u, namespace: p, workspace, type: v, updateToLatest: y, success: b, ...S } = e);
            _ = new module834;
            O = {
                cluster: u,
                namespace: p,
                workspace
            };
            C = await _.getGateway({
                ...O
            });
            T = C.resourceVersion;
            R = n;
            D = module788.open({
                onOk: (()=>{
                    const e = module44(module41.mark(function e() {
                        let a;
                        let o;
                        return module41.wrap(function(e) {
                            while(true){
                                switch(e.prev = e.next){
                                    case 0:
                                        if (!y) {
                                            e.next = 6;
                                            break;
                                        }
                                        e.next = 3;
                                        return _.getGateway({
                                            ...O
                                        });
                                    case 3:
                                        if ((a = e.sent).resourceVersion === T) {
                                            module74(R, "metadata.resourceVersion", a.resourceVersion);
                                            o = module26(R, "metadata.labels", {});
                                            if (v === "cluster") {
                                                module74(R, "metadata.labels", {
                                                    ...o,
                                                    "kubesphere.io/gateway-type": "cluster"
                                                });
                                            }
                                            if (v === "project") {
                                                module74(R, "metadata.labels", {
                                                    ...o,
                                                    "kubesphere.io/gateway-type": "project",
                                                    "kubesphere.io/workspace": workspace
                                                });
                                            }
                                            r.editGateway({
                                                cluster: u,
                                                namespace: p,
                                                workspace
                                            }, R).then(()=>{
                                                module788.close(D);
                                                module240.success({
                                                    content: t("UPDATE_SUCCESSFUL")
                                                });
                                                if (b) {
                                                    b();
                                                }
                                            });
                                        } else {
                                            T = a.resourceVersion;
                                            module240.info({
                                                content: t("GATEWAY_UPDATING_TIP")
                                            });
                                        }
                                        return e.abrupt("return");
                                    case 6:
                                        r.updateGateway({
                                            cluster: u,
                                            namespace: p,
                                            workspace,
                                            gatewayName: n.metadata.name
                                        }, n).then(()=>{
                                            module788.close(D);
                                            module240.success({
                                                content: t("UPDATE_SUCCESSFUL")
                                            });
                                            if (b) {
                                                b();
                                            }
                                        });
                                    case 7:
                                    case "end":
                                        return e.stop();
                                }
                            }
                        }, e);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                })(),
                modal: module2950,
                detail: n,
                store: r,
                cluster: u,
                workspace,
                namespace: p,
                ...S
            });
        }
    },
    "gateways.batch.delete": {
        on: function({ store, success, rowKey, type, workspace, ...rest }) {
            const store_list = store.list;
            const { data, selectedRowKeys } = store_list;
            const y = data.filter((e)=>selectedRowKeys.includes(e[rowKey])).map((e)=>({
                    name: e.name,
                    namespace: e.namespace
                }));
            const b = y.map((e)=>e.name);
            var S = module788.open({
                onOk: async ()=>{
                    const a = [];
                    data.forEach((e)=>{
                        if (y.find((t)=>t.name === e.name && t.namespace === e.namespace)) {
                            const t = e.name.split("kubesphere-router-")[1];
                            const n = e.cluster;
                            a.push(store.delete({
                                name: e.name,
                                cluster: n,
                                namespace: t,
                                workspace
                            }));
                        }
                    });
                    await Promise.all(a);
                    module788.close(S);
                    module240.success({
                        content: t("DELETED_SUCCESSFULLY")
                    });
                    store.setSelectRowKeys([]);
                    if (success) {
                        success();
                    }
                },
                resource: b.join(", "),
                modal: module823,
                title: b.length === 1 ? t("DISABLE_GATEWAY") : t("DISABLE_MULTIPLE_GATEWAYS"),
                store,
                type: type || "GATEWAY",
                ...rest
            });
        }
    }
};
export default b;
