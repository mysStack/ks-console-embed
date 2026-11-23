import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import "unpacked/module-31.js";
import "unpacked/module-58.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module457 from "unpacked/module-457.js";
import module63 from "unpacked/module-63.js";
import module240 from "unpacked/module-240.js";
import module788 from "components/Base/Modal";
import module3297 from "components/Modals/QuotaEdit";
import module3309 from "components/Modals/ProjectCreate";
import module3312 from "components/Modals/AssignWorkspace";
import module3313 from "pages/projects/components/Modals/DefaultResourceEdit";
import module435 from "utils/form.templates";
import { limits_Request_EndsWith_Dot, quota_limits_requests_Dot } from "utils/index";
import module322 from "stores/user";
import module886 from "stores/quota";
import module1094 from "unpacked/module-1094.js";
const R = {
    "project.create": {
        on: function({ store, success, cluster, workspace, ...rest }) {
            var v = module788.open({
                onOk: async (a)=>{
                    let o;
                    let c;
                    if (module26(globals, "ksConfig.springcloud", false)) {
                        module74(a, 'metadata.labels["springcloud.kubesphere.io/enabled"]', "true");
                    }
                    module74(a, 'metadata.labels["kubesphere.io/workspace"]', workspace);
                    o = cluster || module26(a, "cluster");
                    c = {
                        cluster: o,
                        workspace
                    };
                    await store.create(a, c);
                    module788.close(v);
                    module240.success({
                        content: t("CREATE_SUCCESSFUL")
                    });
                    if (success) {
                        success(o);
                    }
                },
                hideCluster: !globals.app.isMultiCluster || !!cluster,
                cluster,
                workspace,
                formTemplate: module435.project(),
                modal: module3309,
                store,
                ...rest
            });
        }
    },
    "project.quota.edit": {
        on: function(e) {
            e.store;
            const { store: _store, detail, success, isEdgeWize, ...rest } = e;
            const store = isEdgeWize ? new module1094 : new module886;
            var E = module788.open({
                onOk: async (a)=>{
                    let o;
                    let u;
                    let c;
                    let i;
                    o = module26(a, "spec.hard", {});
                    u = module26(a, "storageLimit", {});
                    c = {
                        name: a.name,
                        namespace: detail.name,
                        cluster: detail.cluster
                    };
                    quota_limits_requests_Dot(o);
                    i = module457(o, function(e) {
                        return e !== 0 && (e ? module63(e.toString()) : !e);
                    });
                    a.spec = {
                        hard: {
                            ...i,
                            ...u
                        }
                    };
                    if ((await store.checkName(c)).exist) {
                        await store.update(c, {
                            apiVersion: "v1",
                            kind: "ResourceQuota",
                            metadata: {
                                ...c,
                                name: detail.name
                            },
                            spec: a.spec
                        });
                    } else {
                        await store.create({
                            apiVersion: "v1",
                            kind: "ResourceQuota",
                            metadata: {
                                ...c,
                                name: detail.name
                            },
                            spec: a.spec
                        }, c);
                    }
                    module788.close(E);
                    module240.success({
                        content: t("UPDATE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                },
                detail,
                isEdgeWize,
                store,
                modal: module3297,
                supportGpuSelect: true,
                ...rest
            });
        }
    },
    "project.default.resource": {
        on: function({ store, detail, namespace, cluster, success, isFederated, projectDetail, isEdgeWize, ...rest }) {
            var _ = module788.open({
                onOk: async (a)=>{
                    let o;
                    let c;
                    let E;
                    let y;
                    let S;
                    o = limits_Request_EndsWith_Dot({
                        limits: a.default,
                        requests: a.defaultRequest || {}
                    });
                    c = o.limits;
                    E = o.requests;
                    a.default = {
                        ...a.default,
                        ...c
                    };
                    a.defaultRequest = {
                        ...a.defaultRequest,
                        ...E
                    };
                    if (module63(detail)) {
                        y = module435.limitRange();
                        if (isFederated) {
                            y = module435.federated({
                                data: module435.limitRange(),
                                clusters: projectDetail.clusters.map((e)=>e.name),
                                kind: "LimitRange"
                            });
                            module74(y, "metadata.name", namespace);
                            module74(y, "spec.template.spec", {
                                limits: [
                                    {
                                        ...a,
                                        type: "Container"
                                    }
                                ]
                            });
                        } else {
                            module74(y, "spec", {
                                limits: [
                                    {
                                        ...a,
                                        type: "Container"
                                    }
                                ]
                            });
                        }
                        await store.create(y, {
                            namespace,
                            cluster
                        });
                    } else {
                        S = {
                            ...detail._originData
                        };
                        if (isFederated) {
                            module74(S, "spec.template.spec", {
                                limits: [
                                    {
                                        ...detail.limit,
                                        ...a
                                    }
                                ]
                            });
                        } else {
                            module74(S, "spec", {
                                limits: [
                                    {
                                        ...detail.limit,
                                        ...a
                                    }
                                ]
                            });
                        }
                        module74(S, "metadata.resourceVersion", detail.resourceVersion);
                        await store.update({
                            ...detail,
                            namespace,
                            cluster
                        }, S);
                    }
                    module788.close(_);
                    module240.success({
                        content: t("UPDATE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                },
                isEdgeWize,
                modal: module3313,
                store,
                detail,
                supportGpuSelect: true,
                namespace,
                cluster,
                isFederated,
                ...rest
            });
        }
    },
    "project.assignworkspace": {
        on: function({ store, detail, success, ...rest }) {
            const f = new module322;
            var d = module788.open({
                onOk: async (a)=>{
                    let o;
                    let namespace;
                    let username;
                    let workspace;
                    await store.patch(detail, a);
                    o = detail.cluster;
                    namespace = detail.name;
                    username = module26(a, 'metadata.annotations["kubesphere.io/creator"]');
                    workspace = module26(a, 'metadata.labels["kubesphere.io/workspace"]');
                    await f.create([
                        {
                            username,
                            roleRef: "admin"
                        }
                    ], {
                        cluster: o,
                        workspace,
                        namespace
                    });
                    module788.close(d);
                    module240.success({
                        content: t("UPDATE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                },
                modal: module3312,
                store,
                detail,
                ...rest
            });
        }
    }
};
export default R;
