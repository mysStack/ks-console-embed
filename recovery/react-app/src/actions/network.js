import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-30.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-38.js";
import "unpacked/module-137.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import "unpacked/module-31.js";
import "unpacked/module-58.js";
import module240 from "unpacked/module-240.js";
import module788 from "components/Base/Modal";
import module1169 from "unpacked/module-1169.js";
import module826 from "components/Modals/Create";
import module823 from "components/Modals/Delete";
import module2986 from "unpacked/module-2986.js";
import module2992 from "unpacked/module-2992.js";
import module2994 from "unpacked/module-2994.js";
import module2996 from "components/Modals/Network/IPPoolWorkspace";
import module2997 from "unpacked/module-2997.js";
import module2998 from "unpacked/module-2998.js";
import module2999 from "components/Modals/Network/Policies";
import module3000 from "components/Modals/Network/Policies/AddByYaml";
import module3001 from "components/Modals/Network/Policies/IpBlock";
import module3002 from "unpacked/module-3002.js";
import module3004 from "unpacked/module-3004.js";
import steps from "unpacked/module-3006.js";
import module136 from "unpacked/module-136.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module74 from "unpacked/module-74.js";
import module435 from "utils/form.templates";
import { cidrOverlap } from "utils/index";
const M = {
    "network.policies.add": {
        on: function({ store, success, ...rest }) {
            const { namespace, module, cluster } = rest;
            var f = module788.open({
                modal: module2999,
                onOk: function(e) {
                    if (module63(e)) {
                        module788.close(f);
                    } else {
                        store.create(e, {
                            cluster,
                            namespace
                        }).then(()=>{
                            module788.close(f);
                            module240.success({
                                content: t("CREATE_SUCCESSFUL")
                            });
                            if (success) {
                                success();
                            }
                        });
                    }
                },
                formTemplate: module435[module]({
                    namespace
                }),
                store,
                ...rest
            });
        }
    },
    "network.policies.addIpBlock": {
        on: function({ store, success, ...rest }) {
            const { namespace, module, cluster } = rest;
            var d = module1169.open({
                modal: module3001,
                onOk: function(e) {
                    if (module63(e)) {
                        module788.close(d);
                    } else {
                        store.create(e, {
                            cluster,
                            namespace
                        }).then(()=>{
                            module788.close(d);
                            module240.success({
                                content: t("CREATE_SUCCESSFUL")
                            });
                            if (success) {
                                success();
                            }
                        });
                    }
                },
                formTemplate: module435[module]({
                    namespace
                }),
                store,
                ...rest
            });
        }
    },
    "network.policies.viewIpBlock": {
        on: function({ store, success, ...rest }) {
            const { namespace, module, cluster } = rest;
            var d = module1169.open({
                modal: module3002,
                onOk: function(e) {
                    if (module63(e)) {
                        module788.close(d);
                    } else {
                        store.create(e, {
                            cluster,
                            namespace
                        }).then(()=>{
                            module788.close(d);
                            module240.success({
                                content: t("CREATE_SUCCESSFUL")
                            });
                            if (success) {
                                success();
                            }
                        });
                    }
                },
                formTemplate: module435[module]({
                    namespace
                }),
                store,
                ...rest
            });
        }
    },
    "network.policies.editIpBlock": {
        on: function({ store, success, formTemplate, onOk: _onOk, onCancel: _onCancel, ...rest }) {
            const { namespace, cluster, name } = rest;
            const formTemplate_1 = formTemplate;
            const y = formTemplate.spec.egress ? "egress" : "ingress";
            const g = formTemplate?.spec?.egress || formTemplate?.spec?.ingress || [];
            const b = g[0]?.ports?.map(function(e) {
                const t = {};
                if (e.protocol) {
                    t.protocol = e?.protocol;
                }
                if (e.port) {
                    t.port = {};
                    t.port.value = e.port.toString();
                }
                if (e.endPort) {
                    t.endPort = {};
                    t.endPort.value = e.endPort.toString();
                }
                return t;
            }) || [];
            const S = (g[0].to ? g[0].to : g[0].from || []).map((e)=>{
                const t = e.ipBlock.cidr.split("/");
                return {
                    ip: {
                        value: t[0]
                    },
                    mask: {
                        value: t[1]
                    }
                };
            }) || [];
            formTemplate_1.specType = y;
            formTemplate_1.portRules = b;
            formTemplate_1.cidrRules = S;
            var O = module1169.open({
                modal: module3001,
                onOk: function(e) {
                    if (module63(e)) {
                        module788.close(O);
                    } else {
                        store.update({
                            cluster,
                            namespace,
                            name
                        }, e).then(()=>{
                            module788.close(O);
                            module240.success({
                                content: t("MODIFY_SUCCESSFUL")
                            });
                            if (success) {
                                success();
                            }
                        });
                    }
                },
                formTemplate: formTemplate_1,
                store,
                edit: true,
                ...rest
            });
        }
    },
    "network.policies.toggle": {
        on: function({ success, ...rest }) {
            var n = module788.open({
                modal: module823,
                onOk: function() {
                    module788.close(n);
                    module240.success({
                        content: t("DISABLE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                },
                ...rest
            });
        }
    },
    "network.policies.delete": {
        on: function({ store, success, onOk: _onOk, onCancel: _onCancel, ...rest }) {
            const { namespace, cluster, ruleName } = rest;
            var f = module788.open({
                modal: module823,
                onOk: function() {
                    store.delete({
                        name: ruleName,
                        namespace,
                        cluster
                    }).then(()=>{
                        module788.close(f);
                        module240.success({
                            content: t("DELETED_SUCCESSFULLY")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                resource: ruleName,
                store,
                ...rest
            });
        }
    },
    "network.policies.addByYaml": {
        on: function({ store, detail: _detail, success, ...rest }) {
            const rest_cluster = rest.cluster;
            var s = module788.open({
                modal: module3000,
                onOk: async (t)=>{
                    let namespace;
                    namespace = module26(t, "metadata.namespace");
                    await store.create(t, {
                        namespace,
                        cluster: rest_cluster
                    });
                    module788.close(s);
                    if (success) {
                        success();
                    }
                },
                store,
                ...rest
            });
        }
    },
    "edge.nodegroup.ippool.add": {
        on: function({ store, success, ...rest }) {
            var f = module788.open({
                onOk: async (a)=>{
                    let cluster;
                    let nodetree;
                    cluster = rest.cluster;
                    nodetree = rest.group;
                    await store.bindIpPoolToNodeGroup({
                        cluster,
                        nodetree,
                        params: [
                            {
                                op: "add",
                                path: `/metadata/annotations/infra.kubesphere.io~1ippool-${a.namespace}`,
                                value: a.ippool
                            }
                        ]
                    });
                    module788.close(f);
                    module240.success({
                        content: t("CREATE_SUCCESSFUL")
                    });
                    if (success) {
                        success(a);
                    }
                },
                store,
                title: t("绑定容器组 IP池"),
                formTemplate: {},
                modal: module3004,
                noCodeEdit: true,
                ...rest
            });
        }
    },
    "network.ippool.add": {
        on: function({ store, success, isCalico = false, allList, ...rest }) {
            let a;
            const rest_cluster = rest.cluster;
            var h = module788.open({
                onOk: (a = module44(module41.mark(function e(a) {
                    let o;
                    let u;
                    let f;
                    return module41.wrap(function(e) {
                        while(true){
                            switch(e.prev = e.next){
                                case 0:
                                    o = a.list;
                                    if (!(u = cidrOverlap(o, allList))) {
                                        e.next = 4;
                                        break;
                                    }
                                    return e.abrupt("return", module240.error({
                                        content: t("CIDR_OVERLAP", {
                                            cidr0: u[0],
                                            cidr1: u[1]
                                        })
                                    }));
                                case 4:
                                    f = [];
                                    o.forEach(({ workspace, key, isEdge, name, description, aliasName, ...rest })=>{
                                        delete rest.nodeSelectorText;
                                        delete rest.nodeSelectorLable;
                                        const s = {
                                            apiVersion: "crd.projectcalico.org/v1",
                                            kind: "IPPool",
                                            metadata: {
                                                name,
                                                annotations: {
                                                    "kubesphere.io/description": description,
                                                    "kubesphere.io/alias-name": aliasName
                                                }
                                            },
                                            spec: {
                                                type: "calico",
                                                ...rest
                                            }
                                        };
                                        const i = isEdge ? "kubesphere.io/workspace" : "kubesphere.io/namespace";
                                        if (workspace) {
                                            if (workspace === "__ALL__") {
                                                s.metadata.annotations[i] = "";
                                                module74(s, 'metadata.labels["ippool.network.kubesphere.io/default"]', "");
                                            } else {
                                                module74(s, `metadata.labels["${i}"]`, workspace);
                                            }
                                        }
                                        f.push(store.create(s, {
                                            cluster: rest_cluster
                                        }));
                                    });
                                    e.next = 8;
                                    return Promise.all(f);
                                case 8:
                                    module788.close(h);
                                    module240.success({
                                        content: t("CREATE_SUCCESSFUL")
                                    });
                                    if (success) {
                                        success();
                                    }
                                case 11:
                                case "end":
                                    return e.stop();
                            }
                        }
                    }, e);
                })), function(e) {
                    return a.apply(this, arguments);
                }),
                store,
                title: t("CREATE_POD_IP_POOL"),
                formTemplate: {},
                steps,
                hideWorkspace: isCalico,
                modal: module826,
                noCodeEdit: true,
                ...rest
            });
        }
    },
    "network.ipool.assignworkspace": {
        on: function({ store, success, detail, ...rest }) {
            var d = module788.open({
                modal: module2996,
                onOk: async (a)=>{
                    await store.patch(detail, a);
                    module788.close(d);
                    module240.success({
                        content: t("UPDATE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                },
                store,
                detail,
                ...rest
            });
        }
    },
    "network.ipool.assignnamespace": {
        on: function({ store, success, detail, ...rest }) {
            var d = module788.open({
                modal: module2997,
                onOk: async (a)=>{
                    await store.patch(detail, a);
                    module788.close(d);
                    module240.success({
                        content: t("UPDATE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                },
                store,
                detail,
                ...rest
            });
        }
    },
    "network.ipool.autoAssign": {
        on: function({ store, success, detail, ...rest }) {
            var d = module788.open({
                modal: module2998,
                onOk: async (a)=>{
                    await store.patch(detail, a);
                    module788.close(d);
                    module240.success({
                        content: t("UPDATE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                },
                store,
                detail,
                ...rest
            });
        }
    },
    "network.ipool.edit": {
        on: function({ store, success, detail, ...rest }) {
            const formTemplate = module136(detail);
            var f = module788.open({
                onOk: async (t)=>{
                    module788.close(f);
                    if (success) {
                        success(t);
                    }
                },
                store,
                formTemplate,
                ...rest,
                modal: module2986
            });
        }
    },
    "network.ipool.editoverlay": {
        on: function({ store, success, detail, ...rest }) {
            var d = module788.open({
                modal: module2994,
                onOk: async (a)=>{
                    await store.patch(detail, a);
                    module788.close(d);
                    module240.success({
                        content: t("UPDATE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                },
                store,
                detail,
                ...rest
            });
        }
    },
    "network.ipool.disable": {
        on: function({ store, success, detail, cluster, ...rest }) {
            let a;
            var p = module788.open({
                modal: module2992,
                onOk: (a = module44(module41.mark(function e(a) {
                    let o;
                    let c;
                    return module41.wrap(function(e) {
                        while(true){
                            switch(e.prev = e.next){
                                case 0:
                                    o = a.old;
                                    if (!(c = a.new)) {
                                        e.next = 4;
                                        break;
                                    }
                                    e.next = 4;
                                    return store.migrate(cluster, o, c);
                                case 4:
                                    e.next = 6;
                                    return store.patch(detail, {
                                        spec: {
                                            disabled: true
                                        }
                                    });
                                case 6:
                                    module788.close(p);
                                    module240.success({
                                        content: t("DISABLE_SUCCESSFUL")
                                    });
                                    if (success) {
                                        success();
                                    }
                                case 9:
                                case "end":
                                    return e.stop();
                            }
                        }
                    }, e);
                })), function(e) {
                    return a.apply(this, arguments);
                }),
                cluster,
                store,
                detail,
                ...rest
            });
        }
    },
    "network.ipool.removeNamespace": {
        on: function({ store, success, workspace: _workspace, data, ...rest }) {
            const { namespace, cluster } = rest;
            var f = module788.open({
                modal: module823,
                onOk: function() {
                    store.patchNamespace({
                        namespace,
                        cluster
                    }, data).then(()=>{
                        module788.close(f);
                        module240.success({
                            content: t("DELETED_SUCCESSFULLY")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                store,
                ...rest
            });
        }
    },
    "network.ipool.removeNamespaceAll": {
        on: function({ store, success, workspace: _workspace, data: _data, ...rest }) {
            const { namespaceList, getData, cluster } = rest;
            var v = module788.open({
                modal: module823,
                onOk: async ()=>{
                    const a = [];
                    namespaceList.forEach((e)=>{
                        a.push(store.patchNamespace({
                            namespace: e.name,
                            cluster
                        }, getData(e)));
                    });
                    await Promise.all(a);
                    module788.close(v);
                    module240.success({
                        content: t("DELETED_SUCCESSFULLY")
                    });
                    if (success) {
                        success();
                    }
                },
                store,
                ...rest
            });
        }
    }
};
export default M;
