import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-316.js";
import "unpacked/module-85.js";
import "unpacked/module-7.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-41.js";
import module61 from "unpacked/module-61.js";
import "utils/babel-helpers/asyncToGenerator";
import "unpacked/module-31.js";
import "unpacked/module-58.js";
import module14 from "unpacked/module-14.js";
import module240 from "unpacked/module-240.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module63 from "unpacked/module-63.js";
import module1197 from "unpacked/module-1197.js";
import module1051 from "stores/cluster/kubekey";
import module788 from "components/Base/Modal";
import module1122 from "unpacked/module-1122.js";
import module823 from "components/Modals/Delete";
import module1619 from "components/Forms/Cluster/NodeList/AddNode";
import module3029 from "pages/clusters/components/Modals/AddNodeType";
import module3030 from "pages/clusters/components/Modals/NodeLog";
import module3034 from "components/Modals/ObjectEdit";
import module3036 from "components/Modals/Node/TaintManagement";
import module3038 from "components/Modals/Node/TaintManagement/Batch";
import module3041 from "components/Forms/Cluster/EdgeNode/AddNode";
import module3046 from "unpacked/module-3046.js";
import module3048 from "unpacked/module-3048.js";
import module3050 from "unpacked/module-3050.js";
import module3052 from "unpacked/module-3052.js";
import module3054 from "unpacked/module-3054.js";
import forms from "unpacked/module-3056.js";
import { getRegisterFormTemplate } from "unpacked/module-983.js";
const j = {
    "node.add": {
        on: function({ kkName, success, ...rest }) {
            const store = new module1051;
            var f = module788.open({
                modal: module1619,
                onOk: async (t)=>{
                    let n;
                    let u;
                    let s;
                    await store.fetchDetail({
                        name: kkName
                    });
                    n = module14.toJS(store.detail._originData);
                    u = module26(n, "spec.hosts", []);
                    s = module26(n, "spec.roleGroups", {});
                    t.roles.forEach((e)=>{
                        s[e] = s[e] || [];
                        s[e].push(t.name);
                    });
                    module74(n, "spec.hosts", [].concat(module61(u), [
                        t
                    ]));
                    module74(n, "spec.roleGroups", s);
                    await store.update({
                        name: kkName
                    }, n).then(()=>{
                        module788.close(f);
                        if (success) {
                            success();
                        }
                    });
                },
                store,
                addAfterCreate: true,
                ...rest
            });
        }
    },
    "node.type.add": {
        on: function() {
            module788.open({
                modal: module3029
            });
        }
    },
    "node.add.log": {
        on: function({ detail }) {
            module788.open({
                modal: module3030,
                detail
            });
        }
    },
    "node.labels": {
        on: function({ store, detail, success, ...rest }) {
            const l = module14.toJS(detail.labels);
            var o = module788.open({
                onOk: function(e) {
                    module1197(l, function(t, a) {
                        if (module63(e[a])) {
                            l[a] = "";
                        }
                    });
                    const labels = {
                        ...l,
                        ...e
                    };
                    store.patch(detail, {
                        metadata: {
                            labels
                        }
                    }).then(()=>{
                        module788.close(o);
                        if (success) {
                            success();
                        }
                    });
                },
                value: l,
                modal: module3034,
                store,
                ...rest
            });
        }
    },
    "node.taint": {
        on: function({ store, detail, success, ...rest }) {
            var l = module788.open({
                onOk: function(e) {
                    store.patch(detail, e).then(()=>{
                        module788.close(l);
                        if (success) {
                            success();
                        }
                    });
                },
                value: module14.toJS(detail.taints),
                modal: module3036,
                store,
                ...rest
            });
        }
    },
    "node.taint.batch": {
        on: function({ store, success }) {
            const n = module14.toJS(store.list);
            const { data, selectedRowKeys } = n;
            const nodes = data.filter((e)=>selectedRowKeys.includes(e.name));
            var c = module788.open({
                onOk: function(e) {
                    store.batchPatchTaints(e).then(()=>{
                        module788.close(c);
                        module240.success({
                            content: t("UPDATE_SUCCESSFUL")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                nodes,
                modal: module3038,
                store
            });
        }
    },
    "node.batch.delete": {
        on: function({ store, cluster, success, selectedNodes, resource, ...rest }) {
            const p = selectedNodes.map((e)=>({
                    nodeName: e.name,
                    taskName: "del_node"
                }));
            var m = module788.open({
                onOk: async ()=>{
                    await store.patchNode(cluster, p);
                    module788.close(m);
                    module240.success({
                        content: t("DELETED_SUCCESSFULLY")
                    });
                    if (success) {
                        success();
                    }
                },
                title: t("BATCH_ACTION", {
                    action: t("DELETE")
                }),
                resource,
                modal: module823,
                store,
                ...rest
            });
        }
    },
    "node.batch.manage": {
        on: function({ store, cluster, success, selectedNodes, ...rest }) {
            var f = module788.open({
                onOk: async (t)=>{
                    let a;
                    a = selectedNodes.reduce((acc, { name })=>{
                        const n = Object.values(t).map(({ type, version_id })=>({
                                nodeName: name,
                                taskName: `${type}_install`,
                                taskDefinition: {
                                    version: version_id
                                }
                            }));
                        return acc.concat(n);
                    }, []);
                    await store.patchNode(cluster, a);
                    module788.close(f);
                    success?.();
                },
                detail: selectedNodes[0],
                title: t("BATCH_ACTION", {
                    action: t("ACCESS_MANAGE")
                }),
                modal: module3054,
                store,
                ...rest
            });
        }
    },
    "node.batch.cancel.managed": {
        on: function({ store, cluster, success, selectedNodes, ...rest }) {
            const d = selectedNodes.map((e)=>e.name);
            var p = module788.open({
                onOk: async ()=>{
                    let a;
                    a = d.map((nodeName)=>({
                            nodeName,
                            taskName: "cancel_managed"
                        }));
                    await store.patchNode(cluster, a);
                    module788.close(p);
                    module240.success({
                        content: t("CANCEL_MANAGED_SUCCESSFULLY")
                    });
                    success?.();
                },
                type: "ACCESS_NODE",
                title: t("BATCH_ACTION", {
                    action: t("CANCEL_MANAGED")
                }),
                resource: d.join(", "),
                modal: module823,
                store,
                ...rest
            });
        }
    },
    "node.batch.softInfo": {
        on: function({ store, cluster, selectedNodes, success, ...rest }) {
            var f = module788.open({
                onOk: async (t)=>{
                    let a;
                    let u;
                    a = x(t);
                    u = selectedNodes.reduce((acc, { name })=>{
                        const n = a.map(({ taskName, taskDefinition })=>({
                                nodeName: name,
                                taskName,
                                taskDefinition
                            }));
                        return acc.concat(n);
                    }, []);
                    await store.patchNode(cluster, u);
                    module788.close(f);
                    success?.();
                },
                modal: module1122,
                store,
                title: t("BATCH_ACTION", {
                    action: t("EDIT_SOFTWARE_INFO")
                }),
                icon: "pen",
                forms,
                ...rest
            });
        }
    },
    "node.edge.add": {
        on: function({ cluster, store, nodegroup = false, ...rest }) {
            var u = module788.open({
                onOk: function() {
                    return module788.close(u);
                },
                title: t("ADD_EDGE_NODE"),
                modal: module3041,
                cluster,
                store,
                nodegroup,
                ...rest
            });
        }
    },
    "node.edge.manage": {
        on: function({ store, success, detail, ...rest }) {
            var i = module788.open({
                onOk: async (t)=>{
                    let nodeName;
                    let u;
                    nodeName = detail.name;
                    u = Object.values(t).map(({ type, version_id })=>({
                            nodeName,
                            taskName: `${type}_install`,
                            taskDefinition: {
                                version: version_id
                            }
                        }));
                    await store.patchNode(detail.cluster, u);
                    module788.close(i);
                    success?.();
                },
                title: t("ACCESS_MANAGE"),
                modal: module3054,
                store,
                detail,
                ...rest
            });
        }
    },
    "node.edge.register": {
        on: function({ cluster, detail, store, success, ...rest }) {
            var f = module788.open({
                onOk: async (t)=>{
                    await store.nodeRegister(t);
                    module788.close(f);
                    success?.();
                },
                title: t("REGISTER_EDGE_NODE"),
                modal: module3052,
                cluster,
                formTemplate: getRegisterFormTemplate(cluster, detail),
                store,
                ...rest
            });
        }
    },
    "node.softInfo": {
        on: function({ store, nodeName, cluster, success, ...rest }) {
            var f = module788.open({
                onOk: async (t)=>{
                    let a;
                    let u;
                    a = x(t);
                    u = a.map(({ taskName, taskDefinition })=>({
                            nodeName,
                            taskName,
                            taskDefinition
                        }));
                    await store.patchNode(cluster, u);
                    module788.close(f);
                    success?.();
                },
                modal: module1122,
                store,
                title: t("EDIT_SOFTWARE_INFO"),
                icon: "pen",
                forms,
                ...rest
            });
        }
    },
    "node.baseinfo.edit": {
        on: function({ store, detail, success, ...rest }) {
            var o = module788.open({
                onOk: function(e) {
                    const e_cluster = e.cluster;
                    const l = [
                        {
                            nodeName: e.name,
                            taskName: "edit_node_info",
                            taskDefinition: {
                                alias: e.alias,
                                description: e.description
                            }
                        }
                    ];
                    store.patchNode(e_cluster, l).then(()=>{
                        module788.close(o);
                        module240.success({
                            content: t("UPDATE_SUCCESSFUL")
                        });
                        success?.();
                    });
                },
                detail: {
                    ...detail,
                    edgeNodeName: detail.name
                },
                modal: module3050,
                store,
                ...rest
            });
        }
    },
    "node.sync.time": {
        on: function({ store, detail, success, ...rest }) {
            var o = module788.open({
                onOk: function() {
                    const detail_cluster = detail.cluster;
                    const l = [
                        {
                            nodeName: detail.name,
                            taskName: "sync_time"
                        }
                    ];
                    store.patchNode(detail_cluster, l).then(()=>{
                        module788.close(o);
                        module240.success({
                            content: t("UPDATE_SUCCESSFUL")
                        });
                        success?.();
                    });
                },
                detail,
                modal: module3048,
                store,
                ...rest
            });
        }
    },
    "node.filter.confirm": {
        on: function({ nextStep, ...rest }) {
            var r = module788.open({
                onOk: function(e) {
                    module788.close(r);
                    nextStep(e);
                },
                modal: module3046,
                ...rest
            });
        }
    }
};
function x(e) {
    return Object.values(e).reduce((acc, item)=>acc.concat(item), []).filter(({ todoTasks })=>!module63(todoTasks)).reduce((acc, item)=>{
        const { name, configFile, version, customTaskInfo } = item;
        const o = item.todoTasks.map((taskName)=>{
            let taskDefinition;
            const o = `${name}_install`;
            const u = `${name}_modify_conf`;
            switch(taskName){
                case o:
                    taskDefinition = {
                        version
                    };
                    break;
                case u:
                    taskDefinition = configFile;
                    break;
                case "custom_task":
                    taskDefinition = customTaskInfo;
            }
            return {
                taskName,
                taskDefinition
            };
        });
        return acc.concat(o);
    }, []);
}
export default j;
